import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 19 · Sản phẩm chăm sóc da */
export default function S19Products() {
  return (
    <Screen tab={3}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased">
        <SafeAreaTop />
        <section className="relative z-20 px-5 pb-2 pt-1.5">
          <div className="mb-3 flex items-center justify-between">
            <button
              aria-label="Quay lại"
              data-tab="s10"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5ECE9] bg-white/90 text-[#173B32] shadow-sm transition active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-1 flex-col items-center">
              <div className="flex items-center space-x-1.5">
                <BrandLogo />
              </div>
            </div>
            <button
              aria-label="Giỏ hàng"
              data-go="s21"
              className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#E5ECE9] bg-white/90 text-[#173B32] shadow-sm transition active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#E05252] text-[9px] font-bold text-white">
                2
              </span>
            </button>
          </div>
          <div className="space-y-0.5">
            <h1 className="font-serif text-[22px] font-bold tracking-tight text-[#173B32]">Sản phẩm chăm sóc da</h1>
            <p className="text-[12px] font-medium leading-tight text-[#6C8D81]">Sản phẩm phù hợp với làn da và nhu cầu của bạn</p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#739287]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <input
                className="w-full rounded-xl border border-[#DEE7E3] bg-white/95 py-2 pl-9 pr-3 text-[12px] text-[#173B32] placeholder-[#89A098] shadow-sm transition focus:border-[#357D64] focus:outline-none focus:ring-1 focus:ring-[#357D64]"
                placeholder="Tìm kiếm sản phẩm chăm sóc da..."
                type="text"
              />
            </div>
            <button
              aria-label="Bộ lọc"
              data-toast="Bộ lọc sản phẩm (minh họa)"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#CFE0D9] bg-[#E5EFEB] text-[#357D64] shadow-sm transition hover:bg-[#D8E6E0] active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <main className="no-scrollbar z-10 flex-1 space-y-4 overflow-y-auto pb-24">
          <section className="px-4 pt-1">
            <div data-pills="" className="flex items-start justify-between gap-1 text-center">
              <button data-on="" className="group flex w-[60px] flex-col items-center focus:outline-none" type="button">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#357D64] text-white shadow-md transition group-active:scale-95">
                  <svg className="h-5 w-5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                    <rect height="7" rx="1.5" width="7" x="3" y="3" />
                    <rect height="7" rx="1.5" width="7" x="14" y="3" />
                    <rect height="7" rx="1.5" width="7" x="14" y="14" />
                    <rect height="7" rx="1.5" width="7" x="3" y="14" />
                  </svg>
                </div>
                <span className="mt-1.5 text-[11px] font-bold leading-tight tracking-tight text-[#173B32]">Tất cả</span>
              </button>
              <button className="group flex w-[64px] flex-col items-center focus:outline-none" type="button">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DAE6E1] bg-[#E8F1ED] text-[#357D64] shadow-sm transition group-active:scale-95">
                  <svg className="h-5 w-5 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M9 3h6M10 3v3h4V3m-5 3h6l1.5 12a2 2 0 01-2 2h-5a2 2 0 01-2-2L9 6z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M10 13h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mt-1.5 text-[10.5px] font-medium leading-tight tracking-tight text-[#506D63]">
                  Làm sạch
                  <br />
                  da
                </span>
              </button>
              <button className="group flex w-[60px] flex-col items-center focus:outline-none" type="button">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DAE6E1] bg-[#E8F1ED] text-[#357D64] shadow-sm transition group-active:scale-95">
                  <svg className="h-5 w-5 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <rect height="11" rx="2.5" width="12" x="6" y="9" />
                    <path d="M5 6h14a1 1 0 011 1v2H4V7a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12v3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mt-1.5 text-[10.5px] font-medium leading-tight tracking-tight text-[#506D63]">Dưỡng ẩm</span>
              </button>
              <button className="group flex w-[60px] flex-col items-center focus:outline-none" type="button">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DAE6E1] bg-[#E8F1ED] text-[#357D64] shadow-sm transition group-active:scale-95">
                  <svg className="h-5 w-5 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path
                      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="mt-1.5 text-[10.5px] font-medium leading-tight tracking-tight text-[#506D63]">Chống nắng</span>
              </button>
              <button className="group flex w-[64px] flex-col items-center focus:outline-none" type="button">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DAE6E1] bg-[#E8F1ED] text-[#357D64] shadow-sm transition group-active:scale-95">
                  <svg className="h-5 w-5 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path d="M9 3h6v3H9zM10 6v2h4V6m-4 8a4 4 0 008 0c0-2-4-7-4-7s-4 5-4 7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mt-1.5 text-[10.5px] font-medium leading-tight tracking-tight text-[#506D63]">
                  Chăm sóc
                  <br />
                  chuyên biệt
                </span>
              </button>
            </div>
          </section>
          <section className="px-4">
            <div className="mb-2.5 flex items-center justify-between">
              <h2 className="font-serif text-[15px] font-bold text-[#173B32]">Sản phẩm được gợi ý cho hồ sơ của bạn</h2>
              <a
                data-toast="Xem tất cả sản phẩm gợi ý (minh họa)"
                className="flex items-center text-[11px] font-semibold text-[#5A8073] hover:text-[#357D64]"
                href="#"
              >
                Xem tất cả
                <svg className="ml-0.5 h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="no-scrollbar flex space-x-3 overflow-x-auto py-0.5">
              <article
                data-go="s20"
                className="group relative flex w-[124px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#E4ECE9] bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 z-10 text-[#809890] transition hover:text-red-500"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="mb-1.5 flex h-24 w-full items-center justify-center rounded-xl bg-[#F7F8F2] p-1.5">
                  <div className="flex h-[72px] w-12 flex-col items-center justify-between rounded-sm border border-[#E0E8E5] bg-white px-0.5 py-1 shadow-inner">
                    <div className="mb-0.5 h-1.5 w-4 bg-[#4A7BB0]" />
                    <div className="h-2 w-8 bg-[#E1EEF8]" />
                    <span className="text-[6px] font-bold uppercase tracking-tighter text-[#4A7BB0]">EFFACLAR</span>
                    <div className="mt-1 h-0.5 w-6 bg-gray-200" />
                    <div className="h-1 w-4 bg-[#4A7BB0]/30" />
                  </div>
                </div>
                <div>
                  <p className="truncate text-[10.5px] font-bold leading-snug text-[#173B32]">La Roche-Posay</p>
                  <p className="truncate text-[9.5px] leading-tight text-[#728C83]">Effaclar Purifying Gel</p>
                  <p className="mt-1 text-[11.5px] font-bold tracking-tight text-[#173B32]">355.000đ</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-[#F0F5F3] pt-1">
                  <div className="flex items-center text-[9px] text-[#58756B]">
                    <span className="mr-0.5 font-bold text-amber-500">★</span>
                    <span className="font-bold text-[#173B32]">4.8</span>
                    <span className="ml-0.5 text-[#879F97]">(1.2k)</span>
                  </div>
                  <button
                    aria-label="Thêm vào giỏ"
                    data-toast="Đã thêm La Roche-Posay vào giỏ hàng"
                    className="shadow-xs flex h-6 w-6 items-center justify-center rounded-lg bg-[#357D64] text-white transition active:scale-90"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
              <article
                data-go="s20"
                className="group relative flex w-[124px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#E4ECE9] bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 z-10 text-[#809890] transition hover:text-red-500"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="mb-1.5 flex h-24 w-full items-center justify-center rounded-xl bg-[#F7F8F2] p-1.5">
                  <div className="relative flex h-12 w-[52px] flex-col items-center justify-center overflow-hidden rounded-md border border-[#D8E4DF] bg-white shadow-inner">
                    <div className="absolute inset-x-0 top-0 h-2 bg-[#1C68B5]/90" />
                    <span className="mt-1 text-[8px] font-extrabold tracking-tight text-[#1C68B5]">CeraVe</span>
                    <span className="scale-90 text-[5.5px] text-gray-500">Moisturizing Cream</span>
                    <div className="mt-1 h-1 w-8 bg-[#1C68B5]/20" />
                  </div>
                </div>
                <div>
                  <p className="truncate text-[10.5px] font-bold leading-snug text-[#173B32]">CeraVe</p>
                  <p className="truncate text-[9.5px] leading-tight text-[#728C83]">Moisturizing Cream</p>
                  <p className="mt-1 text-[11.5px] font-bold tracking-tight text-[#173B32]">430.000đ</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-[#F0F5F3] pt-1">
                  <div className="flex items-center text-[9px] text-[#58756B]">
                    <span className="mr-0.5 font-bold text-amber-500">★</span>
                    <span className="font-bold text-[#173B32]">4.7</span>
                    <span className="ml-0.5 text-[#879F97]">(856)</span>
                  </div>
                  <button
                    aria-label="Thêm vào giỏ"
                    data-toast="Đã thêm CeraVe vào giỏ hàng"
                    className="shadow-xs flex h-6 w-6 items-center justify-center rounded-lg bg-[#357D64] text-white transition active:scale-90"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
              <article
                data-go="s20"
                className="group relative flex w-[124px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#E4ECE9] bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 z-10 text-[#809890] transition hover:text-red-500"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="mb-1.5 flex h-24 w-full items-center justify-center rounded-xl bg-[#F7F8F2] p-1.5">
                  <div className="relative flex h-[60px] w-9 flex-col items-center justify-center rounded-b-md rounded-t-sm border border-[#D2DFDA] bg-white shadow-inner">
                    <div className="-mt-2 mb-1 h-4 w-3 rounded-t-sm border-b border-gray-300 bg-gray-200" />
                    <span className="text-[5.5px] font-bold tracking-tighter text-gray-800">The Ordinary.</span>
                    <span className="scale-90 text-[5px] text-gray-600">Niacinamide 10%</span>
                    <div className="mt-1 h-0.5 w-5 bg-gray-300" />
                  </div>
                </div>
                <div>
                  <p className="truncate text-[10.5px] font-bold leading-snug text-[#173B32]">The Ordinary</p>
                  <p className="truncate text-[9.5px] leading-tight text-[#728C83]">Niacinamide 10%</p>
                  <p className="mt-1 text-[11.5px] font-bold tracking-tight text-[#173B32]">298.000đ</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-[#F0F5F3] pt-1">
                  <div className="flex items-center text-[9px] text-[#58756B]">
                    <span className="mr-0.5 font-bold text-amber-500">★</span>
                    <span className="font-bold text-[#173B32]">4.6</span>
                    <span className="ml-0.5 text-[#879F97]">(632)</span>
                  </div>
                  <button
                    aria-label="Thêm vào giỏ"
                    data-toast="Đã thêm The Ordinary vào giỏ hàng"
                    className="shadow-xs flex h-6 w-6 items-center justify-center rounded-lg bg-[#357D64] text-white transition active:scale-90"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </section>
          <section className="px-4">
            <div className="shadow-xs relative overflow-hidden rounded-2xl border border-[#D2E1DB] bg-gradient-to-br from-[#E0ECE7] via-[#E5EFEB] to-[#DCE9E4] p-4">
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 opacity-25">
                <svg fill="#357D64" viewBox="0 0 120 120">
                  <path d="M20,100 C50,20 100,20 100,100 C70,90 40,95 20,100 Z" />
                  <path d="M40,90 C60,40 90,30 90,90 Z" opacity="0.6" />
                </svg>
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="max-w-[190px] space-y-1.5">
                  <h3 className="font-serif text-[14px] font-bold leading-snug text-[#173B32]">
                    Sản phẩm dành riêng
                    <br />
                    cho làn da mụn nhẹ
                  </h3>
                  <p className="text-[10px] font-medium leading-tight text-[#557B6D]">Được gợi ý dựa trên kết quả phân tích da của bạn.</p>
                  <div className="pt-1">
                    <button
                      data-go="s13"
                      className="inline-flex items-center rounded-full bg-[#357D64] px-3 py-1.5 text-[10.5px] font-semibold tracking-tight text-white shadow-sm transition hover:bg-[#357D64] active:scale-95"
                      type="button"
                    >
                      Khám phá ngay
                      <svg className="ml-1.5 h-3 w-3 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative flex items-end justify-center space-x-1 pr-1">
                  <div className="z-10 flex h-20 w-9 flex-col items-center justify-between rounded-b-lg rounded-t-md border border-[#C6D6CF] bg-white/95 p-1 shadow-sm">
                    <div className="-mt-2 h-2 w-4 rounded-t-sm bg-[#5D8B7B]" />
                    <div className="flex h-7 w-6 items-center justify-center bg-[#E8F1ED]">
                      <span className="font-serif text-[6px] font-bold text-[#357D64]">SKIN</span>
                    </div>
                    <div className="h-0.5 w-5 bg-gray-200" />
                  </div>
                  <div className="shadow-xs -ml-2 flex h-16 w-8 flex-col items-center justify-end rounded-b-md rounded-t-sm border border-[#C6D6CF] bg-white/90 pb-1.5">
                    <div className="mb-1 h-4 w-5 bg-[#9FB8AE]/40" />
                    <div className="h-0.5 w-4 bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="px-4 pb-2">
            <div className="mb-2.5 flex items-center justify-between">
              <h2 className="font-serif text-[15px] font-bold text-[#173B32]">Sản phẩm bạn đang sử dụng</h2>
              <a
                data-toast="Xem tất cả sản phẩm đang dùng (minh họa)"
                className="flex items-center text-[11px] font-semibold text-[#5A8073] hover:text-[#357D64]"
                href="#"
              >
                Xem tất cả
                <svg className="ml-0.5 h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="no-scrollbar flex space-x-3 overflow-x-auto py-0.5">
              <article
                data-go="s20"
                className="group relative flex w-[124px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#E4ECE9] bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 z-10 text-[#809890] transition hover:text-red-500"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="mb-1.5 flex h-24 w-full items-center justify-center rounded-xl bg-[#F7F8F2] p-1.5">
                  <div className="flex h-[72px] w-12 flex-col items-center justify-between rounded-sm border border-[#E0E8E5] bg-white px-0.5 py-1 shadow-inner">
                    <div className="mb-0.5 h-1.5 w-4 bg-[#4A7BB0]" />
                    <div className="h-2 w-8 bg-[#E1EEF8]" />
                    <span className="text-[6px] font-bold uppercase tracking-tighter text-[#4A7BB0]">EFFACLAR</span>
                    <div className="mt-1 h-0.5 w-6 bg-gray-200" />
                    <div className="h-1 w-4 bg-[#4A7BB0]/30" />
                  </div>
                </div>
                <div>
                  <p className="truncate text-[10.5px] font-bold leading-snug text-[#173B32]">La Roche-Posay</p>
                  <p className="truncate text-[9.5px] leading-tight text-[#728C83]">Effaclar Purifying Gel</p>
                  <p className="mt-1 text-[11.5px] font-bold tracking-tight text-[#173B32]">355.000đ</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-[#F0F5F3] pt-1">
                  <div className="flex items-center text-[9px] text-[#58756B]">
                    <span className="mr-0.5 font-bold text-amber-500">★</span>
                    <span className="font-bold text-[#173B32]">4.8</span>
                    <span className="ml-0.5 text-[#879F97]">(1.2k)</span>
                  </div>
                  <button
                    aria-label="Thêm vào giỏ"
                    data-toast="Đã thêm La Roche-Posay vào giỏ hàng"
                    className="shadow-xs flex h-6 w-6 items-center justify-center rounded-lg bg-[#357D64] text-white transition active:scale-90"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
              <article
                data-go="s20"
                className="group relative flex w-[124px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#E4ECE9] bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 z-10 text-[#809890] transition hover:text-red-500"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="mb-1.5 flex h-24 w-full items-center justify-center rounded-xl bg-[#F7F8F2] p-1.5">
                  <div className="relative flex h-12 w-[52px] flex-col items-center justify-center overflow-hidden rounded-md border border-[#D8E4DF] bg-white shadow-inner">
                    <div className="absolute inset-x-0 top-0 h-2 bg-[#1C68B5]/90" />
                    <span className="mt-1 text-[8px] font-extrabold tracking-tight text-[#1C68B5]">CeraVe</span>
                    <span className="scale-90 text-[5.5px] text-gray-500">Moisturizing Cream</span>
                    <div className="mt-1 h-1 w-8 bg-[#1C68B5]/20" />
                  </div>
                </div>
                <div>
                  <p className="truncate text-[10.5px] font-bold leading-snug text-[#173B32]">CeraVe</p>
                  <p className="truncate text-[9.5px] leading-tight text-[#728C83]">Moisturizing Cream</p>
                  <p className="mt-1 text-[11.5px] font-bold tracking-tight text-[#173B32]">430.000đ</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-[#F0F5F3] pt-1">
                  <div className="flex items-center text-[9px] text-[#58756B]">
                    <span className="mr-0.5 font-bold text-amber-500">★</span>
                    <span className="font-bold text-[#173B32]">4.7</span>
                    <span className="ml-0.5 text-[#879F97]">(856)</span>
                  </div>
                  <button
                    aria-label="Thêm vào giỏ"
                    data-toast="Đã thêm CeraVe vào giỏ hàng"
                    className="shadow-xs flex h-6 w-6 items-center justify-center rounded-lg bg-[#357D64] text-white transition active:scale-90"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
              <article
                data-go="s20"
                className="group relative flex w-[124px] flex-shrink-0 flex-col justify-between rounded-2xl border border-[#E4ECE9] bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 z-10 text-[#809890] transition hover:text-red-500"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-current stroke-[1.75]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="mb-1.5 flex h-24 w-full items-center justify-center rounded-xl bg-[#F7F8F2] p-1.5">
                  <div className="relative flex h-[60px] w-9 flex-col items-center justify-center rounded-b-md rounded-t-sm border border-[#D2DFDA] bg-white shadow-inner">
                    <div className="-mt-2 mb-1 h-4 w-3 rounded-t-sm border-b border-gray-300 bg-gray-200" />
                    <span className="text-[5.5px] font-bold tracking-tighter text-gray-800">The Ordinary.</span>
                    <span className="scale-90 text-[5px] text-gray-600">Niacinamide 10%</span>
                    <div className="mt-1 h-0.5 w-5 bg-gray-300" />
                  </div>
                </div>
                <div>
                  <p className="truncate text-[10.5px] font-bold leading-snug text-[#173B32]">The Ordinary</p>
                  <p className="truncate text-[9.5px] leading-tight text-[#728C83]">Niacinamide 10%</p>
                  <p className="mt-1 text-[11.5px] font-bold tracking-tight text-[#173B32]">298.000đ</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-[#F0F5F3] pt-1">
                  <div className="flex items-center text-[9px] text-[#58756B]">
                    <span className="mr-0.5 font-bold text-amber-500">★</span>
                    <span className="font-bold text-[#173B32]">4.6</span>
                    <span className="ml-0.5 text-[#879F97]">(632)</span>
                  </div>
                  <button
                    aria-label="Thêm vào giỏ"
                    data-toast="Đã thêm The Ordinary vào giỏ hàng"
                    className="shadow-xs flex h-6 w-6 items-center justify-center rounded-lg bg-[#357D64] text-white transition active:scale-90"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </Screen>
  )
}
