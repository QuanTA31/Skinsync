import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'

/** Màn 01 · Chào mừng */
export default function S01Welcome() {
  return (
    <Screen decor={false}>
      <div
        className="flex select-none flex-col justify-between font-sans antialiased"
        style={{ width: '390px', height: '844px', backgroundColor: '#F7F8F2', position: 'relative', overflow: 'hidden' }}
      >
        <header className="z-20 flex w-full shrink-0 flex-col items-center px-7 pt-[72px]">
          <div className="mt-1 flex flex-col items-center text-center">
            <div className="flex flex-col items-center">
              <BrandLogo variant="stacked" size="lg" />
            </div>
          </div>
        </header>
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img
            src="/img/scenes/welcome-hero.png"
            alt="Hero visual"
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 65%' }}
          />
        </div>
        <section
          className="relative z-20 flex w-full flex-col items-center border-t border-[#E7EAD8] bg-[#F7F8F2] px-7 pb-7 pt-5 text-center"
          style={{ borderTopLeftRadius: '36px', borderTopRightRadius: '36px', boxShadow: '0 -12px 32px -8px rgba(53,125,100,.08)' }}
        >
          <div className="mb-3.5 flex items-center justify-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-brand-darkSage transition-all" />
            <span className="h-2 w-2 rounded-full bg-brand-lightSage/70" />
            <span className="h-2 w-2 rounded-full bg-brand-lightSage/70" />
          </div>
          <h2 className="font-serif text-[23px] font-bold leading-snug tracking-tight text-[#173B32]">
            Chào mừng đến với
            <br />
            <span className="font-serif text-[24px] tracking-normal">SKINSYNC</span>
          </h2>
          <p className="mt-2 max-w-[270px] text-[13.5px] font-normal leading-relaxed text-[#647B73]">
            Thấu hiểu làn da, đồng hành và duy trì sức khoẻ làn da của bạn
          </p>
          <button
            data-go="s04"
            className="mt-5 flex w-full cursor-pointer items-center justify-center space-x-2 rounded-full bg-brand-darkSage px-6 py-3.5 text-[15px] font-medium text-white shadow-md shadow-brand-darkSage/25 transition-all duration-200 hover:bg-brand-softSage active:scale-[0.98]"
            type="button"
          >
            <span>Bắt đầu</span>
            <svg className="ml-1 h-4 w-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a
            data-go="s02"
            className="mt-3 text-[14px] font-semibold tracking-tight text-[#357D64] transition-colors hover:text-[#357D64] hover:underline"
            href="#login"
          >
            Đăng nhập
          </a>
        </section>
      </div>
    </Screen>
  )
}
