import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 20 · Chi tiết sản phẩm */
export default function S20ProductDetail() {
  return (
    <Screen tab={3}>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased"
        style={{ paddingBottom: '78px' }}
      >
        <SafeAreaTop />
        <nav className="relative z-20 flex shrink-0 items-center justify-between px-5 pb-2 pt-3">
          <button
            aria-label="Quay lại"
            data-back="s19"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBEBE8] bg-white/90 text-[#173B32] shadow-sm transition-transform active:scale-95"
            type="button"
          >
            <svg className="-ml-0.5 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <svg className="mb-0.5 h-6 w-6 text-[#357D64]" fill="none" stroke="currentColor" viewBox="0 0 32 32">
              <path
                d="M16 3C16 3 24 7 24 16C24 25 16 29 16 29C16 29 8 25 8 16C8 7 16 3 16 3Z"
                stroke="#357D64"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
              <path d="M16 6C16 13 18 19 22 22" stroke="#357D64" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
            <BrandLogo />
          </div>
          <div className="flex items-center space-x-2">
            <button
              aria-label="Yêu thích"
              data-toast="Đã thêm vào yêu thích"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBEBE8] bg-white/90 text-[#173B32] shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Chia sẻ"
              data-toast="Đã sao chép liên kết sản phẩm"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBEBE8] bg-white/90 text-[#173B32] shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto px-4 pb-6 pt-2">
          <section className="flex flex-col gap-3.5">
            <div className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#E0EAE6] bg-white p-4 shadow-sm">
              <svg
                className="pointer-events-none absolute -bottom-3 -right-3 h-28 w-28 text-[#A1B8AE] opacity-35"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <path d="M10 90C40 85 70 60 85 10C80 50 50 80 10 90Z" />
                <path d="M20 95C50 95 80 80 95 30C85 70 60 90 20 95Z" />
              </svg>
              <div className="relative flex w-20 flex-col items-center rounded-b-md rounded-t-lg border border-slate-200 bg-white px-1.5 pt-2.5 text-center shadow-md">
                <div className="mb-1.5 h-5 w-5 bg-[#0080CD] shadow-inner" />
                <span className="text-[6.5px] font-bold leading-none text-gray-800">LA ROCHE-POSAY</span>
                <span className="mb-1 scale-90 text-[5px] text-gray-400">LABORATOIRE DERMATOLOGIQUE</span>
                <span className="text-[7.5px] font-extrabold tracking-wider text-gray-800">EFFACLAR</span>
                <div className="my-1 h-0.5 w-12 bg-gray-200" />
                <span className="pb-3 text-[5px] leading-tight text-gray-500">GEL MOUSSANT PURIFIANT</span>
                <div className="absolute bottom-0 h-2.5 w-12 rounded-b-sm border-t border-slate-200 bg-slate-100" />
              </div>
            </div>
            <div data-pills="" className="flex items-center justify-center gap-2.5">
              <div
                data-on=""
                className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-[#357D64] bg-white p-1 shadow-sm"
              >
                <div className="relative flex h-8 w-4 flex-col items-center justify-center rounded-t-sm border border-slate-300 bg-slate-100">
                  <div className="mb-0.5 h-1.5 w-2 bg-[#0288D1]" />
                  <div className="h-0.5 w-2.5 bg-gray-400" />
                </div>
              </div>
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#DCE5E1] bg-[#E8F0ED]">
                <div className="h-6 w-6 rounded-full border border-white bg-[#CCE0D8] opacity-90 shadow-inner" />
              </div>
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#DEE8E4] bg-white p-1">
                <div className="relative flex h-7 w-3.5 flex-col items-center justify-center rounded-t-sm border border-slate-300 bg-slate-100">
                  <div className="mb-0.5 h-1.5 w-1.5 bg-[#0288D1]" />
                </div>
              </div>
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#DEE8E4] bg-white p-1">
                <div className="h-6 w-3 rounded-t-sm border border-slate-300 bg-slate-100" />
              </div>
            </div>
            <div className="flex flex-col pt-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full border border-[#DCE7E2] bg-[#ECF4F1] px-2.5 py-0.5 text-[10px] font-semibold text-[#357D64]">
                  <svg className="h-2.5 w-2.5 text-[#357D64]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      clipRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z"
                      fillRule="evenodd"
                    />
                  </svg>
                  Phù hợp da dầu, mụn
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-amber-500">★</span>
                  <span className="text-[11px] font-bold text-amber-600">4.8</span>
                  <span className="text-[10px] text-[#7D8A7C]">(1.2k đánh giá)</span>
                </div>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div>
                  <h1 className="font-serif text-[17px] font-bold leading-tight text-[#173B32]">La Roche-Posay</h1>
                  <p className="mt-0.5 font-serif text-[13.5px] leading-tight text-[#173B32]">Effaclar Purifying Gel</p>
                </div>
                <div className="text-[18px] font-bold tracking-tight text-[#173B32]">355.000đ</div>
              </div>
              <p className="mt-1 text-[11px] text-[#717E70]">150ml | La Roche-Posay</p>
            </div>
          </section>
          <section className="flex items-center space-x-2 pt-1">
            <div
              data-qty-group=""
              className="shadow-xs flex h-11 items-center justify-between space-x-3 rounded-full border border-[#DAE4E0] bg-white px-3"
            >
              <button
                aria-label="Giảm"
                data-step="-1"
                className="px-1 text-base font-medium text-[#516A61] transition-transform active:scale-90"
                type="button"
              >
                −
              </button>
              <span data-qty="" className="w-3 text-center text-sm font-semibold text-[#173B32]">
                1
              </span>
              <button
                aria-label="Tăng"
                data-step="1"
                className="px-1 text-base font-medium text-[#516A61] transition-transform active:scale-90"
                type="button"
              >
                +
              </button>
            </div>
            <button
              data-toast="Đã thêm La Roche-Posay vào giỏ hàng"
              data-go="s21"
              className="flex h-11 flex-1 items-center justify-center space-x-2 rounded-full bg-[#357D64] text-white shadow-md transition-all hover:bg-[#357D64] active:scale-[0.98]"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[13px] font-semibold tracking-wide">Thêm vào giỏ hàng</span>
            </button>
          </section>
          <section className="space-y-2">
            <button
              data-toast="Đã thêm vào danh sách sản phẩm đang dùng"
              className="flex h-10 w-full items-center justify-center space-x-2 rounded-full border border-[#357D64] bg-white text-[12.5px] font-semibold text-[#357D64] transition-colors hover:bg-stone-50 active:bg-stone-100"
              type="button"
            >
              <svg className="h-4 w-4 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Thêm vào sản phẩm đang dùng</span>
            </button>
            <button
              data-toast="Kiểm tra thành phần: phù hợp với hồ sơ da của bạn"
              className="flex h-10 w-full items-center justify-center space-x-2 rounded-full border border-[#357D64] bg-white text-[12.5px] font-semibold text-[#357D64] transition-colors hover:bg-stone-50 active:bg-stone-100"
              type="button"
            >
              <svg className="h-4 w-4 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Kiểm tra thành phần</span>
            </button>
          </section>
          <section className="border-t border-[#E4EDE9] pt-2.5">
            <div data-toast="Mô tả sản phẩm (minh họa)" className="flex cursor-pointer items-center justify-between py-1">
              <h2 className="font-serif text-[14px] font-bold text-[#173B32]">Mô tả sản phẩm</h2>
              <svg className="h-4 w-4 text-[#668278]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-1 text-[12px] leading-relaxed text-[#617D74]">
              Gel rửa mặt dịu nhẹ giúp làm sạch bụi bẩn, dầu thừa, hỗ trợ giảm mụn hiệu quả, phù hợp cho da dầu mụn.
            </p>
          </section>
          <section className="pt-1">
            <h2 className="mb-2.5 font-serif text-[14px] font-bold text-[#173B32]">Thành phần nổi bật</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="shadow-xs flex flex-col items-center rounded-2xl border border-[#E1EBE7] bg-white p-2.5 text-center">
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#ECF4F1] text-[#357D64]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[11.5px] font-bold text-[#173B32]">Zinc PCA</span>
                <span className="mt-0.5 text-[9.5px] text-[#718B82]">Giảm dầu thừa</span>
              </div>
              <div className="shadow-xs flex flex-col items-center rounded-2xl border border-[#E1EBE7] bg-white p-2.5 text-center">
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#ECF4F1] text-[#357D64]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[11.5px] font-bold text-[#173B32]">Niacinamide</span>
                <span className="mt-0.5 text-[9.5px] text-[#718B82]">Làm dịu da</span>
              </div>
              <div className="shadow-xs flex flex-col items-center rounded-2xl border border-[#E1EBE7] bg-white p-2.5 text-center">
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#ECF4F1] text-[#357D64]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[11.5px] font-bold text-[#173B32]">Glycerin</span>
                <span className="mt-0.5 text-[9.5px] text-[#718B82]">Cấp ẩm</span>
              </div>
            </div>
          </section>
          <section className="border-t border-[#E4EDE9] pt-2">
            <div data-toast="Cách sử dụng (minh họa)" className="flex cursor-pointer items-center justify-between py-1">
              <h2 className="font-serif text-[14px] font-bold text-[#173B32]">Cách sử dụng</h2>
              <svg className="h-4 w-4 text-[#668278]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="flex items-start space-x-2 rounded-2xl border border-[#E0EAE6] bg-white p-2.5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F7F8F2] text-[#357D64]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-[#173B32]">Sáng</span>
                  <p className="mt-0.5 text-[10px] leading-tight text-[#637E75]">Lấy một lượng vừa đủ, tạo bọt và massage nhẹ.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 rounded-2xl border border-[#E0EAE6] bg-white p-2.5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF2F7] text-[#34537D]">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-[#173B32]">Tối</span>
                  <p className="mt-0.5 text-[10px] leading-tight text-[#637E75]">Sử dụng sau bước tẩy trang.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#E4EDE9] pt-2">
            <div data-toast="Lưu ý (minh họa)" className="flex cursor-pointer items-center justify-between py-1">
              <h2 className="font-serif text-[14px] font-bold text-[#173B32]">Lưu ý</h2>
              <svg className="h-4 w-4 text-[#668278]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="shadow-xs mt-1.5 flex items-center space-x-2.5 rounded-2xl border border-[#FBEAD2] bg-[#FFF8ED] p-2.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D9B784] font-serif text-xs font-bold text-[#A67C43]">
                !
              </div>
              <p className="text-[10.5px] leading-tight text-[#6D5D4B]">
                Phù hợp với da dầu, da mụn và da nhạy cảm. Ngừng sử dụng nếu có dấu hiệu kích ứng.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Screen>
  )
}
