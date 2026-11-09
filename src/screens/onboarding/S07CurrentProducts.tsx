import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 07 · Sản phẩm đang sử dụng */
export default function S07CurrentProducts() {
  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 h-64 w-64"
          style={{ background: 'radial-gradient(circle at top right,rgba(85,145,124,.16) 0%,transparent 65%)' }}
        >
          <svg className="absolute -right-4 -top-4 h-44 w-44 rotate-12 text-[#548976]/20" fill="currentColor" viewBox="0 0 200 200">
            <path d="M120,20 C140,50 190,70 180,120 C170,165 130,180 80,170 C40,160 20,110 40,70 C60,30 100,-10 120,20 Z" />
            <path d="M160,30 Q110,80 70,140" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 bottom-16 z-0 h-64 w-64"
          style={{ background: 'radial-gradient(circle at bottom left,rgba(85,145,124,.13) 0%,transparent 60%)' }}
        >
          <svg className="h-48 w-48 -rotate-45 text-[#548976]/15" fill="currentColor" viewBox="0 0 200 200">
            <path d="M110,30 C135,60 170,80 160,130 C150,170 110,180 70,165 C30,150 15,105 35,65 C55,25 90,0 110,30 Z" />
          </svg>
        </div>
        <div className="no-scrollbar relative z-10 flex flex-1 flex-col overflow-y-auto pb-4">
          <StatusBar />
          <header className="relative flex items-center justify-between px-5 pb-1 pt-2">
            <button
              aria-label="Quay lại"
              data-back="s06"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3EBE8] bg-white/80 text-[#173B32] shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-1 flex-col items-center pr-10">
              <BrandLogo variant="stacked" />
            </div>
          </header>
          <section className="px-6 pb-3 pt-4 text-center">
            <h2 className="text-[21px] font-bold leading-snug tracking-tight text-[#173B32]">
              Bạn đang sử dụng
              <br />
              những sản phẩm nào?
            </h2>
            <p className="mx-auto mt-1.5 max-w-[270px] text-[12.5px] font-normal leading-relaxed text-[#77948A]">
              Hãy chụp rõ tên sản phẩm và bảng thành phần nếu có.
            </p>
          </section>
          <section className="px-5 py-2">
            <div className="grid grid-cols-3 gap-2.5">
              <button
                data-toast="Mở camera để chụp sản phẩm (minh họa)"
                className="flex flex-col items-center rounded-2xl border border-[#E3EBE8] bg-white p-2.5 pb-3 pt-3.5 text-center shadow-[0_2px_10px_rgba(53,125,100,0.05)] transition-all hover:border-[#357D64]/30"
                type="button"
              >
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#ECF4F1]/90 text-[#357D64]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="13" r="3.2" />
                  </svg>
                </div>
                <span className="text-[11.5px] font-medium leading-tight text-[#173B32]">
                  Chụp ảnh
                  <br />
                  sản phẩm
                </span>
              </button>
              <button
                data-toast="Chọn ảnh từ thư viện (minh họa)"
                className="flex flex-col items-center rounded-2xl border border-[#E3EBE8] bg-white p-2.5 pb-3 pt-3.5 text-center shadow-[0_2px_10px_rgba(53,125,100,0.05)] transition-all hover:border-[#357D64]/30"
                type="button"
              >
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#ECF4F1]/90 text-[#357D64]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect height="18" rx="2" width="18" x="3" y="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11.5px] font-medium leading-tight text-[#173B32]">
                  Tải ảnh từ
                  <br />
                  thiết bị
                </span>
              </button>
              <button
                data-toast="Nhập tên sản phẩm (minh họa)"
                className="flex flex-col items-center rounded-2xl border border-[#E3EBE8] bg-white p-2.5 pb-3 pt-3.5 text-center shadow-[0_2px_10px_rgba(53,125,100,0.05)] transition-all hover:border-[#357D64]/30"
                type="button"
              >
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#ECF4F1]/90 text-[#357D64]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M9 12h6m-6 4h4m5 4H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V18a2 2 0 01-2 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M16 17l2-2 2 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11.5px] font-medium leading-tight text-[#173B32]">
                  Nhập tên
                  <br />
                  sản phẩm
                </span>
              </button>
            </div>
          </section>
          <section className="px-5 pb-1 pt-3">
            <div className="mb-2.5 flex items-center justify-between px-0.5">
              <h3 className="text-[14.5px] font-bold text-[#173B32]">Sản phẩm của bạn (3)</h3>
              <button
                data-toast="Chế độ chỉnh sửa danh sách (minh họa)"
                className="text-[13px] font-medium text-[#357D64] underline underline-offset-2 hover:opacity-80"
                type="button"
              >
                Chỉnh sửa
              </button>
            </div>
            <div className="flex flex-col gap-2.5">
              <article className="flex items-center justify-between rounded-2xl border border-[#E3EBE8] bg-white p-2.5 pr-3 shadow-[0_2px_10px_rgba(53,125,100,0.05)] transition-colors hover:border-[#357D64]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E3EBE8]/60 bg-[#ECF4F1]/50 p-1">
                    <div className="shadow-xs flex h-9 w-4 flex-col items-center justify-between rounded-b-md rounded-t-sm border border-gray-300 bg-white py-1">
                      <div className="h-1.5 w-2.5 bg-blue-500/20" />
                      <div className="h-0.5 w-2.5 bg-gray-300" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-bold leading-tight text-[#173B32]">La Roche-Posay</h4>
                    <p className="mt-0.5 text-[11px] leading-tight text-[#77948A]">Effaclar Purifying Foaming Gel</p>
                  </div>
                </div>
                <button
                  aria-label="Xóa sản phẩm"
                  data-dismiss="article"
                  data-toast="Đã xóa La Roche-Posay"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECF4F1]/70 text-[#77948A] transition-colors hover:bg-gray-200"
                  type="button"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </article>
              <article className="flex items-center justify-between rounded-2xl border border-[#E3EBE8] bg-white p-2.5 pr-3 shadow-[0_2px_10px_rgba(53,125,100,0.05)] transition-colors hover:border-[#357D64]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E3EBE8]/60 bg-[#ECF4F1]/50 p-1">
                    <div className="relative flex h-9 w-4 flex-col items-center rounded-b-md rounded-t-sm bg-emerald-800">
                      <div className="-mt-2 h-2.5 w-2 rounded-t-sm border border-gray-300 bg-gray-100" />
                      <div className="mt-1 h-3 w-2.5 bg-white" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-bold leading-tight text-[#173B32]">The Ordinary</h4>
                    <p className="mt-0.5 text-[11px] leading-tight text-[#77948A]">Niacinamide 10% + Zinc 1%</p>
                  </div>
                </div>
                <button
                  aria-label="Xóa sản phẩm"
                  data-dismiss="article"
                  data-toast="Đã xóa The Ordinary"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECF4F1]/70 text-[#77948A] transition-colors hover:bg-gray-200"
                  type="button"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </article>
              <article className="flex items-center justify-between rounded-2xl border border-[#E3EBE8] bg-white p-2.5 pr-3 shadow-[0_2px_10px_rgba(53,125,100,0.05)] transition-colors hover:border-[#357D64]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E3EBE8]/60 bg-[#ECF4F1]/50 p-1">
                    <div className="shadow-xs flex h-6 w-7 flex-col items-center justify-center rounded-md border border-gray-300 bg-white">
                      <div className="flex h-2 w-4 items-center justify-center bg-blue-600">
                        <span className="text-[4px] font-bold leading-none text-white">C</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-bold leading-tight text-[#173B32]">CeraVe</h4>
                    <p className="mt-0.5 text-[11px] leading-tight text-[#77948A]">Moisturizing Cream</p>
                  </div>
                </div>
                <button
                  aria-label="Xóa sản phẩm"
                  data-dismiss="article"
                  data-toast="Đã xóa CeraVe"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECF4F1]/70 text-[#77948A] transition-colors hover:bg-gray-200"
                  type="button"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </article>
            </div>
            <button
              data-toast="Thêm sản phẩm khác (minh họa)"
              className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[#357D64]/50 bg-white/70 text-[13px] font-medium text-[#357D64] transition-all hover:bg-white"
              type="button"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#357D64]/70 text-sm font-light leading-none">
                +
              </span>
              <span>Thêm sản phẩm khác</span>
            </button>
          </section>
        </div>
        <footer className="relative z-10 p-5 pb-4 pt-1">
          <button
            data-go="s08"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#357D64] py-3.5 text-[15px] font-semibold tracking-wide text-white shadow-[0_4px_14px_rgba(53,125,100,0.25)] transition-all hover:bg-[#357D64]"
            type="button"
          >
            <span>Tiếp tục</span>
            <svg className="ml-0.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="mx-auto mb-0.5 mt-4 h-1 w-32 rounded-full bg-[#173B32]/30" />
        </footer>
      </div>
    </Screen>
  )
}
