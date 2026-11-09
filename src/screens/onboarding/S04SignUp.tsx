import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 04 · Tạo tài khoản */
export default function S04SignUp() {
  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased">
        <div className="pointer-events-none absolute -right-6 -top-6 z-0 h-48 w-48 opacity-85">
          <svg className="h-full w-full rotate-12 transform" fill="none" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="leafGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#6F9E8D" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#357D64" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#357D64" stopOpacity="0.5" />
                <linearGradient id="leafGrad2" x1="0%" x2="100%" y1="100%" y2="0%">
                  <stop offset="0%" stopColor="#83B4A3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#357D64" stopOpacity="0.6" />
                  <filter height="140%" id="softBlur" width="140%" x="-20%" y="-20%">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter>
                </linearGradient>
              </linearGradient>
            </defs>
            <path d="M190,10 C160,50 135,110 110,180" opacity="0.6" stroke="#558574" strokeLinecap="round" strokeWidth="2.5" />
            <path d="M165,30 C130,25 115,55 125,75 C145,70 170,55 165,30 Z" fill="url(#leafGrad1)" filter="url(#softBlur)" />
            <path d="M150,65 C115,65 105,100 120,118 C138,110 155,90 150,65 Z" fill="url(#leafGrad2)" />
            <path d="M135,110 C98,115 90,150 108,168 C124,158 140,135 135,110 Z" fill="url(#leafGrad1)" />
            <path d="M178,55 C195,85 170,110 152,102 C150,82 165,65 178,55 Z" fill="url(#leafGrad2)" />
            <path d="M152,110 C175,135 155,165 136,155 C132,138 142,120 152,110 Z" fill="url(#leafGrad1)" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -bottom-10 -right-8 z-0 h-36 w-36 opacity-75">
          <svg className="h-full w-full -rotate-45 transform" fill="none" viewBox="0 0 150 150">
            <path d="M10,140 C50,110 95,85 140,70" opacity="0.5" stroke="#558574" strokeLinecap="round" strokeWidth="2" />
            <path d="M50,115 C55,85 85,80 98,96 C88,112 68,122 50,115 Z" fill="#5C9581" opacity="0.75" />
            <path d="M90,90 C100,60 130,62 138,82 C122,95 105,100 90,90 Z" fill="#357D64" opacity="0.7" />
          </svg>
        </div>
        <StatusBar />
        <main className="no-scrollbar relative z-10 flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-2 pt-3">
          <div>
            <nav className="mb-4">
              <button
                aria-label="Quay lại trang trước"
                data-back="s01"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200/60 bg-white/80 text-[#173B32] shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-transform duration-150 active:scale-95"
                type="button"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            </nav>
            <div className="mb-5">
              <h1 className="text-[25px] font-bold leading-[1.25] tracking-tight text-[#173B32]">Tạo tài khoản</h1>
              <BrandLogo variant="wordmark" size="lg" className="mt-0.5" />
              <p className="mt-2 text-[13.5px] font-normal leading-relaxed text-[#77948A]">
                Bắt đầu hành trình chăm sóc làn da cá nhân hóa dành riêng cho bạn.
              </p>
            </div>
            <form className="space-y-2.5">
              <div className="relative flex h-[48px] items-center rounded-2xl border border-[rgba(53,125,100,0.18)] bg-white px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#357D64] focus-within:ring-1 focus-within:ring-[#357D64]">
                <span className="mr-2.5 shrink-0 text-stone-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="h-full w-full border-none bg-transparent p-0 text-[14px] text-gray-800 placeholder-stone-400 focus:outline-none focus:ring-0"
                  placeholder="Họ và tên"
                  type="text"
                />
              </div>
              <div className="relative flex h-[48px] cursor-pointer items-center justify-between rounded-2xl border border-[rgba(53,125,100,0.18)] bg-white px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#357D64] focus-within:ring-1 focus-within:ring-[#357D64]">
                <div className="mr-2 flex flex-1 items-center">
                  <span className="mr-2.5 shrink-0 text-stone-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="4" />
                      <line strokeLinecap="round" x1="16" x2="16" y1="2" y2="6" />
                      <line strokeLinecap="round" x1="8" x2="8" y1="2" y2="6" />
                      <line strokeLinecap="round" x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                  <input
                    className="h-full w-full cursor-pointer border-none bg-transparent p-0 text-[14px] text-gray-800 placeholder-stone-400 focus:outline-none focus:ring-0"
                    placeholder="Năm sinh"
                    type="text"
                    readOnly
                  />
                </div>
                <span className="pointer-events-none text-stone-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="relative flex h-[48px] items-center rounded-2xl border border-[rgba(53,125,100,0.18)] bg-white px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#357D64] focus-within:ring-1 focus-within:ring-[#357D64]">
                <span className="mr-2.5 shrink-0 text-stone-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="h-full w-full border-none bg-transparent p-0 text-[14px] text-gray-800 placeholder-stone-400 focus:outline-none focus:ring-0"
                  placeholder="Số điện thoại"
                  type="tel"
                />
              </div>
              <div className="relative flex h-[48px] items-center rounded-2xl border border-[rgba(53,125,100,0.18)] bg-white px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#357D64] focus-within:ring-1 focus-within:ring-[#357D64]">
                <span className="mr-2.5 shrink-0 text-stone-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="h-full w-full border-none bg-transparent p-0 text-[14px] text-gray-800 placeholder-stone-400 focus:outline-none focus:ring-0"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="relative flex h-[48px] items-center justify-between rounded-2xl border border-[rgba(53,125,100,0.18)] bg-white px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#357D64] focus-within:ring-1 focus-within:ring-[#357D64]">
                <div className="mr-2 flex flex-1 items-center">
                  <span className="mr-2.5 shrink-0 text-stone-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" width="14" x="5" y="11" />
                      <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <input
                    className="h-full w-full border-none bg-transparent p-0 text-[14px] text-gray-800 placeholder-stone-400 focus:outline-none focus:ring-0"
                    placeholder="Mật khẩu"
                    type="password"
                  />
                </div>
                <button
                  data-reveal=""
                  aria-label="Hiển thị mật khẩu"
                  className="text-stone-400 hover:text-stone-600 focus:outline-none"
                  type="button"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative flex h-[48px] items-center justify-between rounded-2xl border border-[rgba(53,125,100,0.18)] bg-white px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#357D64] focus-within:ring-1 focus-within:ring-[#357D64]">
                <div className="mr-2 flex flex-1 items-center">
                  <span className="mr-2.5 shrink-0 text-stone-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" width="14" x="5" y="11" />
                      <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <input
                    className="h-full w-full border-none bg-transparent p-0 text-[14px] text-gray-800 placeholder-stone-400 focus:outline-none focus:ring-0"
                    placeholder="Xác nhận mật khẩu"
                    type="password"
                  />
                </div>
                <button
                  data-reveal=""
                  aria-label="Hiển thị mật khẩu xác nhận"
                  className="text-stone-400 hover:text-stone-600 focus:outline-none"
                  type="button"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-start space-x-2.5 pb-1 pt-2">
                <div className="mt-0.5 flex h-5 items-center">
                  <input
                    defaultChecked
                    className="h-[18px] w-[18px] cursor-pointer rounded-[5px] border-stone-300 text-[#357D64] focus:ring-0 focus:ring-offset-0"
                    id="terms"
                    type="checkbox"
                  />
                </div>
                <label className="select-none text-[12px] leading-[1.45] text-stone-600" htmlFor="terms">
                  Tôi đồng ý với{' '}
                  <a
                    data-go="s61"
                    className="font-semibold text-[#357D64] underline decoration-[#357D64]/60 underline-offset-2 hover:text-[#357D64]"
                    href="#"
                  >
                    Điều khoản sử dụng
                  </a>{' '}
                  và{' '}
                  <a
                    data-go="s61"
                    className="font-semibold text-[#357D64] underline decoration-[#357D64]/60 underline-offset-2 hover:text-[#357D64]"
                    href="#"
                  >
                    Chính sách bảo mật dữ liệu
                  </a>{' '}
                  của SKINSYNC.
                </label>
              </div>
              <div className="pt-1">
                <button
                  data-go="s61"
                  className="flex h-[52px] w-full items-center justify-center space-x-2 rounded-full bg-[#357D64] font-medium text-white shadow-[0_4px_16px_rgba(53,125,100,0.25)] transition-all hover:bg-[#357D64] active:scale-[0.99]"
                  type="submit"
                >
                  <span className="text-[15px] font-semibold tracking-wide">Tạo tài khoản</span>
                  <svg
                    className="ml-1 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <footer className="flex w-full flex-col items-center pb-1 pt-2">
            <div className="mt-3 h-[4px] w-32 rounded-full bg-stone-800/80" />
          </footer>
        </main>
      </div>
    </Screen>
  )
}
