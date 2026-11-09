@echo off
setlocal EnableExtensions
title SKINSYNC Demo
cd /d "%~dp0"

echo ==================================================
echo   SKINSYNC - Demo 60 man hinh
echo ==================================================
echo.

set "NODE_VER=22.12.0"
set "NODE_NAME=node-v%NODE_VER%-win-x64"
set "NODE_DIR=%~dp0.node\%NODE_NAME%"

rem --- 1. Dung Node.js co san tren may neu da du moi (>= 22), neu khong thi dung ban portable ---
where node >nul 2>nul
if errorlevel 1 goto USE_PORTABLE
for /f "tokens=1 delims=." %%a in ('node -v') do set "SYS_MAJOR=%%a"
set "SYS_MAJOR=%SYS_MAJOR:v=%"
if %SYS_MAJOR% GEQ 22 goto HAVE_NODE

:USE_PORTABLE
if exist "%NODE_DIR%\node.exe" goto SET_PATH

echo [1/3] May chua co Node.js. Dang tai ban rieng (khoang 33 MB, chi can lam 1 lan)...
echo       Vui long cho, dung dong cua so nay.
echo.
if not exist "%~dp0.node" mkdir "%~dp0.node"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ProgressPreference='SilentlyContinue'; [Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -UseBasicParsing -Uri 'https://nodejs.org/dist/v%NODE_VER%/%NODE_NAME%.zip' -OutFile '%~dp0.node\node.zip'"
if errorlevel 1 goto ERR_DOWNLOAD
if not exist "%~dp0.node\node.zip" goto ERR_DOWNLOAD

echo       Dang giai nen...
tar -xf "%~dp0.node\node.zip" -C "%~dp0.node" >nul 2>nul
if not exist "%NODE_DIR%\node.exe" powershell -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -Force -LiteralPath '%~dp0.node\node.zip' -DestinationPath '%~dp0.node'"
if not exist "%NODE_DIR%\node.exe" goto ERR_DOWNLOAD
del "%~dp0.node\node.zip" >nul 2>nul

:SET_PATH
set "PATH=%NODE_DIR%;%PATH%"

:HAVE_NODE
rem --- 2. Cai thu vien (lan dau) ---
if exist "%~dp0node_modules\vite" goto RUN
echo.
echo [2/3] Dang cai dat thu vien cho lan chay dau tien (khoang 1-3 phut)...
echo.
call npm install --no-audit --no-fund
if errorlevel 1 goto ERR_INSTALL

:RUN
rem --- 3. Chay demo va tu mo trinh duyet ---
echo.
echo [3/3] Dang khoi dong demo. Trinh duyet se tu mo sau it giay...
echo.
echo   Neu trinh duyet khong tu mo, hay mo dia chi:  http://localhost:5173
echo   De TAT demo: dong cua so den nay lai.
echo.
call npm run dev -- --open
goto END

:ERR_DOWNLOAD
echo.
echo [LOI] Khong tai duoc Node.js. Hay kiem tra ket noi Internet roi chay lai file nay.
echo       (Hoac tu cai Node.js ban 22 tro len tai https://nodejs.org roi chay lai.)
goto END

:ERR_INSTALL
echo.
echo [LOI] Cai dat thu vien that bai. Hay kiem tra ket noi Internet roi chay lai file nay.
goto END

:END
echo.
pause
endlocal
