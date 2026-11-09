import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 05 · Xác thực tài khoản (OTP) */
export default function S05VerifyOtp() {
  return (
    <Screen>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] antialiased"
        style={{
          backgroundImage:
            'radial-gradient(at 100% 0%,rgba(122,167,151,.12) 0px,transparent 50%),radial-gradient(at 0% 100%,rgba(109,158,141,.15) 0px,transparent 45%),radial-gradient(at 100% 100%,rgba(205,195,175,.2) 0px,transparent 40%)',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none', opacity: '.55' }}>
          <svg fill="none" height="220" viewBox="0 0 190 220" width="190">
            <path
              d="M190 0C165 45 130 75 80 85C50 91 30 110 20 135C60 120 110 110 145 75C170 50 185 20 190 0Z"
              fill="#528B77"
              fillOpacity="0.32"
            />
            <path d="M140 25C115 50 75 70 30 75C55 58 90 40 140 25Z" fill="#70A693" fillOpacity="0.25" />
            <path d="M190 60C160 85 135 125 120 180C140 145 170 110 190 60Z" fill="#4E8572" fillOpacity="0.28" />
            <path d="M125 105C95 125 80 160 75 205C90 175 115 145 125 105Z" fill="#5D9783" fillOpacity="0.22" />
            <path d="M190 3C155 42 120 88 100 150" stroke="#357D64" strokeDasharray="2 2" strokeOpacity="0.35" strokeWidth="1.2" />
          </svg>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '20px', left: 0, pointerEvents: 'none', opacity: '.45' }}>
          <svg fill="none" height="240" viewBox="0 0 170 240" width="170">
            <path
              d="M0 240C25 190 60 165 110 155C140 148 160 125 168 95C125 115 75 125 40 160C15 185 3 218 0 240Z"
              fill="#528B77"
              fillOpacity="0.3"
            />
            <path d="M0 175C35 150 65 115 75 60C58 95 30 130 0 175Z" fill="#357D64" fillOpacity="0.22" />
            <path d="M60 140C90 120 110 85 115 40C100 70 75 105 60 140Z" fill="#69A08D" fillOpacity="0.25" />
            <path d="M0 238C38 198 72 150 90 85" stroke="#357D64" strokeDasharray="2 2" strokeOpacity="0.35" strokeWidth="1.2" />
          </svg>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#E4E7D3]/50 blur-2xl"
        />
        <StatusBar />
        <div className="relative z-10 flex flex-1 flex-col px-6 pb-6 pt-3">
          <div className="mb-1 flex items-center">
            <button
              aria-label="Quay lại"
              data-back="s61"
              className="-ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#E4EBE8] bg-white/70 text-[#173B32] shadow-sm transition-all hover:bg-white active:scale-95"
              type="button"
            >
              <svg
                className="h-5 w-5 stroke-current"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="mb-6 mt-0.5 flex flex-col items-center justify-center text-center">
            <BrandLogo variant="stacked" size="lg" />
          </div>
          <div className="mb-6 px-3 text-center">
            <h2 className="mb-2 text-[25px] font-bold leading-tight tracking-tight text-[#173B32]">
              Xác thực tài khoản
              <br />
              của bạn
            </h2>
            <p className="mx-auto max-w-[280px] text-[13.5px] font-normal leading-relaxed text-[#77948A]">
              Chúng tôi đã gửi mã xác thực đến số điện thoại hoặc email của bạn.
            </p>
          </div>
          <section aria-label="Nhập mã OTP" className="mb-6 w-full">
            <div className="flex items-center justify-between gap-1.5 px-0.5">
              <div className="flex h-[58px] max-w-[48px] flex-1 items-center justify-center rounded-xl border border-[#DDE6E2] bg-white text-[22px] font-semibold text-[#173B32] shadow-[0_2px_8px_rgba(53,125,100,0.04)] transition-all">
                <span>1</span>
              </div>
              <div className="flex h-[58px] max-w-[48px] flex-1 items-center justify-center rounded-xl border border-[#DDE6E2] bg-white text-[22px] font-semibold text-[#173B32] shadow-[0_2px_8px_rgba(53,125,100,0.04)] transition-all">
                <span>2</span>
              </div>
              <div className="flex h-[58px] max-w-[48px] flex-1 items-center justify-center rounded-xl border border-[#DDE6E2] bg-white text-[22px] font-semibold text-[#173B32] shadow-[0_2px_8px_rgba(53,125,100,0.04)] transition-all">
                <span>3</span>
              </div>
              <div className="flex h-[58px] max-w-[48px] flex-1 items-center justify-center rounded-xl border border-[#DDE6E2] bg-white text-[22px] font-semibold text-[#173B32] shadow-[0_2px_8px_rgba(53,125,100,0.04)] transition-all">
                <span>4</span>
              </div>
              <div className="flex h-[58px] max-w-[48px] flex-1 items-center justify-center rounded-xl border border-[#DDE6E2] bg-white text-[22px] font-semibold text-[#173B32] shadow-[0_2px_8px_rgba(53,125,100,0.04)] transition-all">
                <span>5</span>
              </div>
              <div className="flex h-[58px] max-w-[48px] flex-1 items-center justify-center rounded-xl border border-[#DDE6E2] bg-white text-[22px] font-semibold text-[#173B32] shadow-[0_2px_8px_rgba(53,125,100,0.04)] transition-all">
                <span>6</span>
              </div>
            </div>
          </section>
          <div className="mb-auto flex flex-col items-center justify-center space-y-3.5 text-center">
            <p className="text-[14px] font-normal text-[#77948A]">
              Mã có hiệu lực trong <span className="ml-0.5 font-bold text-[#357D64]">02:00</span>
            </p>
            <button
              data-toast="Đã gửi lại mã xác thực"
              className="cursor-pointer py-1 text-[14.5px] font-medium text-[#357D64] underline underline-offset-4 transition-colors hover:text-[#173B32]"
              type="button"
            >
              Gửi lại mã
            </button>
          </div>
          <div className="mb-4 mt-8 w-full">
            <button
              data-go="s03"
              className="group flex h-[54px] w-full items-center justify-center rounded-full bg-[#357D64] text-[16px] font-medium text-white shadow-md transition-all hover:bg-[#357D64] active:scale-[0.98]"
              type="button"
            >
              <span>Xác nhận</span>
              <svg
                className="ml-2.5 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <footer className="relative z-20 flex w-full items-center justify-center pb-2">
          <div className="mb-1 h-1 w-32 rounded-full bg-[#222]/40" />
        </footer>
      </div>
    </Screen>
  )
}
