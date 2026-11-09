import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 02 · Đăng nhập */
export default function S02Login() {
  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-brand-text">
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '170px',
            height: '180px',
            pointerEvents: 'none',
            opacity: '.85',
            backgroundImage: 'radial-gradient(circle at 100% 0%,rgba(130,171,157,.22) 0%,transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '190px',
            height: '180px',
            pointerEvents: 'none',
            opacity: '.8',
            backgroundImage: 'radial-gradient(circle at 0% 100%,rgba(130,171,157,.25) 0%,transparent 70%)',
          }}
        />
        <svg className="pointer-events-none absolute right-0 top-0 -mr-4 -mt-2 h-36 w-36 opacity-45" fill="none" viewBox="0 0 160 160">
          <path d="M160 0C130 30 110 75 125 110C105 85 95 50 110 15C125 -5 145 0 160 0Z" fill="#548272" />
          <path d="M160 30C130 55 105 100 120 135C102 110 90 75 108 45C122 25 145 25 160 30Z" fill="#6C9C8B" />
          <path d="M120 0C105 25 80 50 85 75C75 55 72 30 85 10C95 -5 110 -2 120 0Z" fill="#87AB9E" />
        </svg>
        <svg className="pointer-events-none absolute bottom-0 left-0 -mb-4 -ml-6 h-40 w-40 opacity-45" fill="none" viewBox="0 0 160 160">
          <path d="M0 160C30 130 50 85 35 50C55 75 65 110 50 145C35 165 15 160 0 160Z" fill="#548272" />
          <path d="M0 130C30 105 55 60 40 25C58 50 70 85 52 115C38 135 15 135 0 130Z" fill="#6C9C8B" />
          <path d="M40 160C55 135 80 110 75 85C85 105 88 130 75 150C65 165 50 162 40 160Z" fill="#87AB9E" />
        </svg>
        <StatusBar />
        <main className="relative z-10 flex flex-1 flex-col justify-start px-7 pt-2">
          <div className="mb-1 flex items-center">
            <button
              aria-label="Quay lại"
              data-back="s01"
              className="shadow-2xs -ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/80 bg-white/70 text-stone-700 backdrop-blur-sm transition-colors hover:bg-white"
              type="button"
            >
              <svg className="h-4 w-4 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mb-5 mt-1 flex flex-col items-center justify-center">
            <BrandLogo variant="stacked" size="lg" />
          </div>
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-[25px] font-bold leading-tight tracking-tight text-[#173B32]">
              Chào mừng bạn
              <br />
              quay lại!
            </h2>
            <p className="px-4 text-[12.5px] font-normal leading-relaxed text-brand-muted">
              Đăng nhập để tiếp tục hành trình chăm sóc làn da cùng SKINSYNC
            </p>
          </div>
          <form className="space-y-3.5">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                className="shadow-xs w-full rounded-xl border border-[#DEE1D0] bg-[#F7F8F2] py-3 pl-10 pr-4 text-[13.5px] text-stone-800 placeholder-[#9C9E96] transition-all focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage"
                placeholder="Số điện thoại hoặc email"
                type="text"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                className="shadow-xs w-full rounded-xl border border-[#DEE1D0] bg-[#F7F8F2] py-3 pl-10 pr-10 text-[13.5px] text-stone-800 placeholder-[#9C9E96] transition-all focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage"
                placeholder="Mật khẩu"
                type="password"
              />
              <button
                data-reveal=""
                aria-label="Ẩn/Hiện mật khẩu"
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-stone-600 focus:outline-none"
                type="button"
              >
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between pt-0.5 text-[12.5px]">
              <label className="flex cursor-pointer select-none items-center space-x-2">
                <input
                  defaultChecked
                  className="h-4 w-4 rounded border-stone-300 text-brand-sageDark focus:ring-brand-sage"
                  type="checkbox"
                />
                <span className="font-medium text-stone-600">Ghi nhớ đăng nhập</span>
              </label>
              <a
                data-toast="Đã gửi liên kết đặt lại mật khẩu (minh họa)"
                className="font-medium text-stone-700 underline decoration-stone-400 transition-colors hover:text-brand-sageDark"
                href="#"
              >
                Quên mật khẩu?
              </a>
            </div>
            <div className="pt-2">
              <button
                data-go="s10"
                className="flex w-full items-center justify-center space-x-2 rounded-full bg-[#357D64] py-3.5 text-[14.5px] font-medium text-white shadow-md transition-all hover:bg-[#357D64] active:bg-[#357D64]"
                type="submit"
              >
                <span>Đăng nhập</span>
                <svg className="ml-0.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-stone-300/80" />
            <span className="mx-3 shrink-0 text-[12px] font-normal text-stone-500">hoặc</span>
            <div className="flex-grow border-t border-stone-300/80" />
          </div>
          <div className="space-y-2.5">
            <button
              data-go="s10"
              className="shadow-2xs flex w-full items-center justify-center space-x-2.5 rounded-full border border-[#DADDCC] bg-[#F7F8F2] px-4 py-2.5 text-[13px] font-medium text-stone-800 transition-colors hover:bg-white"
              type="button"
            >
              <svg className="mb-0.5 h-4 w-4 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.66-7.83-11.91-14.36-5.64-8.8-10.02-18.91-13.13-30.33-3.11-11.41-4.67-22.18-4.67-32.31 0-14.15 3.52-25.79 10.55-34.92 7.03-9.13 15.93-13.8 26.7-14.01 4.69 0 10.08 1.25 16.18 3.75 6.1 2.5 10.08 3.81 11.93 3.94 1.34-.13 5.46-1.47 12.35-4.02 6.89-2.56 12.63-3.67 17.22-3.35 12.78.65 22.95 5.25 30.51 13.8-11.08 6.74-16.51 15.82-16.3 27.24.22 9.02 3.69 16.64 10.42 22.86 6.73 6.22 14.88 9.77 24.45 10.65-2.09 6.22-4.58 12.43-7.48 18.63zM119.22 33.15c0-6.74 2.47-13.23 7.42-19.46 4.95-6.23 11.03-10.24 18.25-12.03.22 1.41.33 2.72.33 3.91 0 6.63-2.6 13.18-7.8 19.65-5.2 6.47-11.41 10.36-18.63 11.66-.43-1.2-.57-2.44-.57-3.73z" />
              </svg>
              <span>Đăng nhập với Apple</span>
            </button>
            <button
              data-go="s10"
              className="shadow-2xs flex w-full items-center justify-center space-x-2.5 rounded-full border border-[#DADDCC] bg-[#F7F8F2] px-4 py-2.5 text-[13px] font-medium text-stone-800 transition-colors hover:bg-white"
              type="button"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  fill="#4285F4"
                />
                <path
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  fill="#42AD88"
                />
                <path
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  fill="#EA4335"
                />
              </svg>
              <span>Đăng nhập với Google</span>
            </button>
          </div>
        </main>
        <footer className="relative z-10 py-5 text-center">
          <p className="text-[12.5px] text-stone-600">
            Chưa có tài khoản?{' '}
            <a data-go="s04" className="ml-1 font-bold text-[#357D64] hover:underline" href="#">
              Đăng ký ngay
            </a>
          </p>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-stone-800/80" />
        </footer>
      </div>
    </Screen>
  )
}
