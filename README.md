# SKINSYNC – Demo 61 màn hình

Demo tương tác ứng dụng chăm sóc da SKINSYNC (React 19 + TypeScript + Vite + Tailwind CSS).

## Chạy demo

- **Không cần cài gì**: bấm đúp `Chay-Demo.bat` (tự tải Node.js nếu máy chưa có, cài thư viện, mở trình duyệt).
- **Đã có Node.js ≥ 22**:

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # kiểm tra kiểu + build production
npm run format     # định dạng code bằng Prettier
```

Mở thẳng một màn: `http://localhost:5173/#/s30`.

## Bộ nhận diện

| Token             | Giá trị   | Dùng cho                               | Class Tailwind              |
| ----------------- | --------- | -------------------------------------- | --------------------------- |
| `--color-primary` | `#357D64` | nút chính, trạng thái active, liên kết | `bg-primary`, `text-primary` |
| `--color-ink`     | `#173B32` | chữ chính, tiêu đề                     | `text-ink`                  |
| `--color-bg`      | `#F7F8F2` | nền kem (ivory)                        | `bg-ivory`                  |
| `--font-heading`  | Playfair Display | logo, tiêu đề màn hình (`h1`)  | `font-serif`                |
| `--font-body`     | Plus Jakarta Sans | toàn bộ nội dung              | `font-sans`                 |

Mọi giá trị nằm ở [src/styles/tokens.css](src/styles/tokens.css). Đổi màu/phông ở đó là đổi cho cả app.
Các thang `emerald` / `green` / `teal` của Tailwind đã được map về thang primary trong [tailwind.config.js](tailwind.config.js).

## Cấu trúc thư mục

```
src/
├── main.tsx                     # điểm vào
├── app/
│   ├── App.tsx                  # sân khấu demo (panel + điện thoại thu phóng vừa màn hình)
│   ├── ScreenPanel.tsx          # danh sách màn bên trái
│   ├── screens.ts               # ĐĂNG KÝ MÀN HÌNH: id, tiêu đề, nhóm, component (lazy)
│   └── demo-shell.css
├── components/
│   ├── brand/BrandLogo.tsx      # logo SKINSYNC duy nhất (inline · stacked · wordmark)
│   ├── layout/
│   │   ├── Screen.tsx           # khung điện thoại bọc MỌI màn + xử lý điều hướng data-*
│   │   ├── ScopedScreen.tsx     # khung cho màn viết bằng CSS thuần (CSS bọc @scope)
│   │   ├── StatusBar.tsx        # thanh trạng thái iOS
│   │   ├── BottomNav.tsx        # tab bar dùng chung (người dùng / bác sĩ)
│   │   ├── HomeIndicator.tsx
│   │   ├── AppHeader.tsx        # header + icon nhóm màn Premium
│   │   └── CompactHeader.tsx    # header nhóm màn Cộng đồng
│   └── ui/                      # Toggle, BotanicalCorner…
├── data/plans.ts                # 5 gói dịch vụ (giá, thời hạn, quyền lợi) – nguồn dữ liệu duy nhất
├── state/PlanProvider.tsx       # gói đang chọn / đang dùng, chia sẻ giữa các màn
├── navigation/
│   ├── NavProvider.tsx          # go / back / tab / toast, đồng bộ URL #/sNN
│   └── useDelegatedClicks.ts    # đọc data-go, data-back, data-tab, data-toast… khi bấm
├── styles/
│   ├── tokens.css               # design tokens
│   ├── app.css                  # CSS chung: Tailwind layers, base, components, animation
│   └── scoped/                  # style nền cho các màn CSS thuần (base.css, compact.css)
└── screens/
    ├── onboarding/  S01Welcome.tsx … S09…, S61TermsOfUse.tsx
    ├── home/        S10–S15
    ├── routine/     S16–S22
    ├── doctor/      S23–S29 (+ .css riêng)
    ├── premium/     S30–S35 (+ premium.css)
    ├── community/   S36–S43
    ├── account/     S44–S52
    └── pro/         S53–S60 (phía bác sĩ)
```

## Quy ước

- **Mỗi màn = 1 component** `S<số><TênMàn>.tsx`, `export default`, bọc trong `<Screen>` (hoặc `<ScopedScreen>`).
- **Logo**: luôn dùng `<BrandLogo />`, không tự viết chữ "SKINSYNC".
- **Màu**: ưu tiên class token (`bg-primary`, `text-ink`, `bg-ivory`, `border-line`); không thêm mã màu mới.
- **Điều hướng** bằng thuộc tính trên phần tử bấm được:

  | Thuộc tính          | Tác dụng                                             |
  | ------------------- | ---------------------------------------------------- |
  | `data-go="s10"`     | mở màn s10                                           |
  | `data-back`         | quay lại (`data-back="s10"` = màn dự phòng)          |
  | `data-tab="s10"`    | chuyển tab, xoá lịch sử                               |
  | `data-toast="…"`    | hiện thông báo (đi kèm được với go/back)             |
  | `data-pills`        | nhóm lựa chọn, phần tử đang chọn có `data-on`        |

  Màn có logic riêng (chọn gói, điều khoản…) dùng `useNav()` và state React bình thường.

- **Thêm màn mới**: tạo file trong `src/screens/<nhóm>/`, thêm 1 dòng vào `src/app/screens.ts`.

## Luồng chính

`s01 Chào mừng → s04 Tạo tài khoản → s61 Điều khoản sử dụng → s05 OTP → s03 → s06 Chụp ảnh → s07 → s08 → s09 → s12 Đang phân tích → s13 Kết quả …`
`s02 Đăng nhập → s10 Trang chủ` · `s30 Chọn gói → s31 Xác nhận → s32 Gói của tôi`
