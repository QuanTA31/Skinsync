import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 03 · Cùng SKINSYNC hiểu làn da */
export default function S03OnboardingIntro() {
  return (
    <Screen>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-brand-ivory font-sans text-brand-dark antialiased"
        style={{ backgroundColor: '#F7F8F2' }}
      >
        <SafeAreaTop />
        <div className="relative z-10 flex flex-1 flex-col justify-start px-6">
          <div className="relative mt-2 flex min-h-[44px] items-center">
            <button
              aria-label="Quay lại"
              data-back="s05"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/60 bg-white/70 text-neutral-700 shadow-sm backdrop-blur-sm transition hover:bg-white active:scale-95"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mt-1 flex flex-col items-center text-center">
            <BrandLogo variant="stacked" size="lg" />
          </div>
          <div className="mt-6 px-1 text-center">
            <h2 className="font-sans text-[21px] font-bold leading-[1.3] text-[#173B32]">
              Cùng SKINSYNC
              <br />
              hiểu làn da của bạn
            </h2>
            <p className="mx-auto mt-2.5 max-w-[295px] text-[12.5px] font-normal leading-relaxed text-[#617F74]">
              Chỉ với vài bước đơn giản, chúng tôi sẽ giúp bạn tạo hồ sơ da cá nhân hóa để đưa ra những gợi ý chăm sóc phù hợp nhất.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3.5">
            <article
              data-go="s06"
              className="flex flex-col items-center rounded-[22px] border border-brand-sage-card-border/80 bg-brand-sage-card/90 p-3.5 text-center shadow-[0_2px_8px_rgba(74,113,99,0.04)]"
            >
              <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-sage/20 bg-white/80 text-brand-sage shadow-sm">
                <svg className="h-6 w-6 stroke-brand-sage" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[13px] font-semibold leading-tight text-[#173B32]">Chụp ảnh da</h3>
              <p className="mt-1 text-[10.5px] leading-tight text-neutral-500">
                Phân tích tình trạng
                <br />
                làn da hiện tại
              </p>
            </article>
            <article
              data-go="s07"
              className="flex flex-col items-center rounded-[22px] border border-brand-sage-card-border/80 bg-brand-sage-card/90 p-3.5 text-center shadow-[0_2px_8px_rgba(74,113,99,0.04)]"
            >
              <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-sage/20 bg-white/80 text-brand-sage shadow-sm">
                <svg className="h-6 w-6 stroke-brand-sage" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M9.75 3.75h4.5m-3.75 0v3m3 0V3.75m-4.5 3h6a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 019 20.25V8.25A1.5 1.5 0 0110.5 6.75z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10.5h1.5a1.5 1.5 0 011.5 1.5v7.5A1.5 1.5 0 017.5 21H6a1.5 1.5 0 01-1.5-1.5V12A1.5 1.5 0 016 10.5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[13px] font-semibold leading-tight text-[#173B32]">Sản phẩm đang dùng</h3>
              <p className="mt-1 text-[10.5px] leading-tight text-neutral-500">
                Hiểu thói quen
                <br />
                chăm sóc của bạn
              </p>
            </article>
            <article
              data-go="s08"
              className="flex flex-col items-center rounded-[22px] border border-brand-sage-card-border/80 bg-brand-sage-card/90 p-3.5 text-center shadow-[0_2px_8px_rgba(74,113,99,0.04)]"
            >
              <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-sage/20 bg-white/80 text-brand-sage shadow-sm">
                <svg className="h-6 w-6 stroke-brand-sage" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[13px] font-semibold leading-tight text-[#173B32]">Lịch sử chăm sóc</h3>
              <p className="mt-1 text-[10.5px] leading-tight text-neutral-500">
                Theo dõi hành trình
                <br />
                chăm da của bạn
              </p>
            </article>
            <article
              data-go="s09"
              className="flex flex-col items-center rounded-[22px] border border-brand-sage-card-border/80 bg-brand-sage-card/90 p-3.5 text-center shadow-[0_2px_8px_rgba(74,113,99,0.04)]"
            >
              <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-sage/20 bg-white/80 text-brand-sage shadow-sm">
                <svg className="h-6 w-6 stroke-brand-sage" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[13px] font-semibold leading-tight text-[#173B32]">Tình trạng gần đây</h3>
              <p className="mt-1 text-[10.5px] leading-tight text-neutral-500">
                Cập nhật những
                <br />
                thay đổi trên da
              </p>
            </article>
          </div>
        </div>
        <footer className="relative z-10 flex flex-col items-center px-6 pb-8 pt-3">
          <button
            data-go="s06"
            className="flex w-full items-center justify-center space-x-2 rounded-full bg-[#357D64] px-6 py-3.5 text-[14.5px] font-medium text-white shadow-md transition-all hover:bg-[#357D64] active:scale-[0.98]"
            type="button"
          >
            <span>Bắt đầu tạo hồ sơ</span>
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            data-tab="s10"
            className="mt-3.5 py-1 text-[13.5px] font-medium text-[#486B5E] transition hover:text-neutral-900"
            type="button"
          >
            Để sau
          </button>
        </footer>
      </div>
    </Screen>
  )
}
