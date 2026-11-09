import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaBottom, SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 12 · Đang phân tích */
export default function S12Analyzing() {
  return (
    <Screen>
      <div
        data-auto-go="s13"
        data-auto-delay="4500"
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased"
      >
        <SafeAreaTop />
        <main className="z-20 flex flex-1 flex-col justify-between px-5 pb-2 pt-3">
          <section className="relative flex min-h-[46px] w-full items-center justify-center">
            <button
              aria-label="Quay lại"
              data-back="s11"
              className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-stone-300/80 bg-white/70 text-stone-700 shadow-sm backdrop-blur-sm transition-transform hover:bg-white active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <svg className="h-6 w-6 fill-current text-[#357D64]" viewBox="0 0 32 32">
                <path d="M16 2 C13 7 10 13 10 19 C10 24 13 28 17 29 C14 26 13 22 14 17 C15 13 18 8 22 5 C20 4 18 2 16 2 Z" />
                <path
                  d="M16 30 C19 25 22 19 22 13 C22 8 19 4 15 3 C18 6 19 10 18 15 C17 19 14 24 10 27 C12 28 14 30 16 30 Z"
                  opacity="0.75"
                />
              </svg>
              <BrandLogo className="mt-0.5" />
            </div>
          </section>
          <section className="mt-2 text-center">
            <h1 className="font-serif text-[21px] font-bold leading-snug text-[#173B32]">SKINSYNC đang phân tích làn da</h1>
            <p className="mt-1 px-4 text-[12.5px] font-normal leading-relaxed text-[#657C74]">
              Vui lòng đợi trong giây lát.
              <br />
              Chúng tôi đang xử lý hình ảnh của bạn...
            </p>
          </section>
          <section className="relative my-1 flex items-center justify-center">
            <div className="relative flex h-[196px] w-[196px] items-center justify-center">
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 200 200">
                <circle cx="100" cy="100" fill="none" r="95" stroke="#DCE8E3" strokeWidth="4.5" />
                <circle
                  cx="100"
                  cy="100"
                  fill="none"
                  r="95"
                  stroke="#357D64"
                  strokeDasharray="597"
                  strokeDashoffset="210"
                  strokeLinecap="round"
                  strokeWidth="5.5"
                />
              </svg>
              <div className="relative h-[172px] w-[172px] overflow-hidden rounded-full shadow-inner ring-4 ring-white/90">
                <img
                  alt="Cận cảnh kiểm tra da mặt"
                  className="h-full w-full scale-110 transform object-cover object-center"
                  src="/img/skin/clear-face.jpg"
                />
                <div className="scanner-grid pointer-events-none absolute inset-0 opacity-45" />
                <div className="animate-laser pointer-events-none absolute inset-x-0 h-[2.5px] bg-[#96eed3] shadow-[0_0_10px_2px_#3fe5b5,0_0_4px_1px_rgba(255,255,255,0.9)]" />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'radial-gradient(circle,transparent 55%,rgba(0,0,0,.15) 100%)' }}
                />
              </div>
            </div>
          </section>
          <section className="px-3">
            <div className="relative flex flex-col space-y-4">
              <div className="absolute bottom-4 left-[13px] top-4 -z-0 w-[1.5px] bg-[#C8D7D1]" />
              <div className="relative z-10 flex items-start space-x-3.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#457162] text-white shadow-sm">
                  <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.6]" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex-1 pr-1">
                  <h2 className="text-[13.5px] font-bold leading-snug text-[#173B32]">Kiểm tra chất lượng hình ảnh</h2>
                  <p className="mt-0.5 text-[11.5px] leading-tight text-[#657C74]">Đang kiểm tra độ rõ nét, ánh sáng và góc chụp...</p>
                </div>
              </div>
              <div className="relative z-10 flex items-start space-x-3.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#457162] bg-white text-[#457162] shadow-sm">
                  <svg className="animate-spin-slow h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-80" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex-1 pr-1">
                  <h2 className="text-[13.5px] font-bold leading-snug text-[#173B32]">Đối chiếu thông tin hồ sơ</h2>
                  <p className="mt-0.5 text-[11.5px] leading-tight text-[#657C74]">Đang phân tích và đối chiếu với thông tin của bạn...</p>
                </div>
              </div>
              <div className="relative z-10 flex items-start space-x-3.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#B6C3BE] bg-[#F7F8F2]">
                  <span className="h-1.5 w-1.5 rounded-full bg-transparent" />
                </div>
                <div className="flex-1 pr-1">
                  <h2 className="text-[13.5px] font-medium leading-snug text-[#7D887C]">Tổng hợp đánh giá sơ bộ</h2>
                  <p className="mt-0.5 text-[11.5px] leading-tight text-[#9EA79C]">Đang tạo kết quả phân tích...</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-1 flex items-start space-x-2.5 rounded-xl border border-[#D8E4DF] bg-[#EBF2EF] p-3">
            <div className="mt-[1px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[#657C74]">
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="16" y2="12" />
                <line x1="12" x2="12.01" y1="8" y2="8" />
              </svg>
            </div>
            <p className="text-[11.8px] font-normal leading-snug text-[#4E675E]">
              Kết quả AI chỉ hỗ trợ tham khảo, không thay thế đánh giá của bác sĩ da liễu.
            </p>
          </section>
          <section className="px-1 pb-1 pt-1">
            <button
              data-back="s11"
              className="shadow-xs flex h-12 w-full items-center justify-center rounded-full border border-[#457162] bg-[#F7F8F2]/80 text-[14.5px] font-semibold tracking-wide text-[#357D64] transition-all hover:bg-[#EBF2EF] active:scale-[0.99]"
              type="button"
            >
              Hủy phân tích
            </button>
          </section>
        </main>
        <SafeAreaBottom />
      </div>
    </Screen>
  )
}
