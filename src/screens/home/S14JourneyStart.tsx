import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 14 · Bắt đầu hành trình chăm sóc da */
export default function S14JourneyStart() {
  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <main className="no-scrollbar flex-1 overflow-y-auto px-4 pb-4 pt-1">
          <section className="relative flex items-center justify-center pb-4 pt-2">
            <button
              aria-label="Quay lại"
              data-back="s13"
              className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#DEE7E3]/60 bg-white/90 text-[#357D64] shadow-sm transition-transform active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <BrandLogo />
            </div>
          </section>
          <h1 className="mb-3.5 mt-1 text-center font-serif text-[21px] font-bold leading-snug text-[#173B32]">
            Bắt đầu hành trình chăm sóc da
          </h1>
          <section className="relative mb-4 flex items-center gap-3 overflow-hidden rounded-2xl border border-[#D8E5E0] bg-[#E8F1ED]/70 p-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center">
              <svg className="h-10 w-10 text-[#357D64]" fill="none" viewBox="0 0 48 48">
                <path d="M12 40C16 32 20 22 36 10" stroke="#357D64" strokeLinecap="round" strokeWidth="2" />
                <path d="M18 30C12 28 8 20 12 14C16 16 20 22 18 30Z" fill="#528775" />
                <path d="M26 21C28 14 36 12 40 14C38 20 32 22 26 21Z" fill="#5F9884" />
                <path d="M22 25C26 27 28 35 24 39C20 37 20 31 22 25Z" fill="#528775" fillOpacity="0.8" />
              </svg>
            </div>
            <div>
              <h2 className="text-[12.5px] font-bold leading-snug text-[#173B32]">
                Tình trạng hiện tại có thể phù hợp với quy trình chăm sóc da cơ bản.
              </h2>
              <p className="mt-1 text-[11px] font-medium leading-normal text-[#678379]">
                Hãy kiên trì thực hiện routine và theo dõi tiến triển sau 14–28 ngày nhé!
              </p>
            </div>
          </section>
          <nav data-pills="" className="mb-3.5 grid grid-cols-2 gap-1 rounded-2xl border border-[#DEE7E3]/40 bg-[#EDEEE8] p-1">
            <button
              data-on=""
              className="flex items-center justify-center gap-1.5 rounded-xl border border-black/5 bg-white px-3 py-2 text-xs font-bold text-[#173B32] shadow-sm transition"
            >
              <span className="text-sm text-amber-500">☀️</span>
              <span>Buổi sáng</span>
            </button>
            <button
              data-go="s18"
              className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-[#678379] transition hover:bg-white/40"
            >
              <span className="text-sm text-indigo-400">🌙</span>
              <span>Buổi tối</span>
            </button>
          </nav>
          <section className="relative mb-4 space-y-2.5 pl-0.5">
            <div className="absolute bottom-6 left-[17px] top-6 z-0 w-0.5 bg-[#D8E2DE]" />
            <article
              data-go="s17"
              className="shadow-xs relative z-10 flex items-center justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2.5 pr-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-bold text-white">
                  1
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DEE7E3]/40 bg-[#F7F8F2]">
                  <svg className="h-6 w-6 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M9 3h6v3H9z" />
                    <path d="M10 6v2M14 6v2" />
                    <path d="M7 8h10l-1.5 13H8.5L7 8z" fill="#E5ECE9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#173B32]">Làm sạch da</h3>
                  <p className="text-[10px] text-[#678379]">Loại bỏ bụi bẩn, dầu thừa</p>
                </div>
              </div>
              <svg className="h-4 w-4 shrink-0 text-[#678379]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-go="s17"
              className="shadow-xs relative z-10 flex items-center justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2.5 pr-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-bold text-white">
                  2
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DEE7E3]/40 bg-[#F7F8F2]">
                  <svg className="h-6 w-6 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect fill="#357D64" height="13" rx="2" stroke="#357D64" width="8" x="8" y="8" />
                    <path d="M10 5h4v3h-4z" />
                    <path d="M12 2v3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#173B32]">Cân bằng da</h3>
                  <p className="text-[10px] text-[#678379]">Cấp ẩm, làm dịu da</p>
                </div>
              </div>
              <svg className="h-4 w-4 shrink-0 text-[#678379]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-go="s17"
              className="shadow-xs relative z-10 flex items-center justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2.5 pr-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-bold text-white">
                  3
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DEE7E3]/40 bg-[#F7F8F2]">
                  <svg className="h-6 w-6 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect fill="#DEE8E4" height="10" rx="3" width="14" x="5" y="10" />
                    <rect height="4" rx="1" stroke="currentColor" width="10" x="7" y="6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#173B32]">Dưỡng ẩm</h3>
                  <p className="text-[10px] text-[#678379]">Giữ ẩm, phục hồi hàng rào bảo vệ da</p>
                </div>
              </div>
              <svg className="h-4 w-4 shrink-0 text-[#678379]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-go="s17"
              className="shadow-xs relative z-10 flex items-center justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2.5 pr-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-bold text-white">
                  4
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DEE7E3]/40 bg-[#F7F8F2]">
                  <svg className="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M7 8h10l-1.5 13H8.5L7 8z" fill="#FEF3C7" />
                    <circle cx="12" cy="14" fill="#F59E0B" r="2.5" />
                    <path d="M9 3h6v4H9z" stroke="#678379" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#173B32]">Chống nắng</h3>
                  <p className="text-[10px] text-[#678379]">Bảo vệ da khỏi tia UV</p>
                </div>
              </div>
              <svg className="h-4 w-4 shrink-0 text-[#678379]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
          </section>
          <section className="mb-4">
            <div className="mb-2.5 flex items-center justify-between px-0.5">
              <h2 className="text-[13px] font-bold text-[#173B32]">Sản phẩm gợi ý cho bạn</h2>
              <a data-go="s19" className="flex items-center gap-0.5 text-[11px] font-semibold text-[#357D64] hover:underline" href="#">
                Xem tất cả
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div
                data-go="s20"
                className="shadow-xs relative flex flex-col justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 text-[#678379] hover:text-red-500"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="my-1 flex h-16 w-full items-center justify-center">
                  <div className="flex h-12 w-7 flex-col items-center justify-center rounded-b-md rounded-t-sm border border-slate-200 bg-slate-100 p-0.5">
                    <div className="mb-1 h-2 w-4 bg-sky-500" />
                    <div className="h-0.5 w-full bg-slate-300" />
                  </div>
                </div>
                <div>
                  <p className="line-clamp-1 text-[10px] font-bold leading-tight text-[#173B32]">La Roche-Posay</p>
                  <p className="line-clamp-1 text-[8px] leading-tight text-[#678379]">Effaclar Purifying Gel</p>
                  <div className="mt-1.5 flex items-center justify-between border-t border-[#DEE7E3]/40 pt-1">
                    <span className="text-[9.5px] font-bold text-[#173B32]">355.000đ</span>
                    <button
                      aria-label="Thêm vào giỏ hàng"
                      data-toast="Đã thêm La Roche-Posay vào giỏ hàng"
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#357D64] text-white active:scale-95"
                    >
                      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-go="s20"
                className="shadow-xs relative flex flex-col justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 text-[#678379] hover:text-red-500"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="my-1 flex h-16 w-full items-center justify-center">
                  <div className="relative flex h-12 w-6 flex-col items-center justify-center rounded-sm border border-neutral-300 bg-neutral-100">
                    <div className="absolute -top-3 h-3.5 w-2 rounded-t-sm bg-neutral-300" />
                    <div className="mt-1 h-4 w-4 border border-neutral-200 bg-white" />
                  </div>
                </div>
                <div>
                  <p className="line-clamp-1 text-[10px] font-bold leading-tight text-[#173B32]">The Ordinary</p>
                  <p className="line-clamp-1 text-[8px] leading-tight text-[#678379]">Niacinamide 10%</p>
                  <div className="mt-1.5 flex items-center justify-between border-t border-[#DEE7E3]/40 pt-1">
                    <span className="text-[9.5px] font-bold text-[#173B32]">298.000đ</span>
                    <button
                      aria-label="Thêm vào giỏ hàng"
                      data-toast="Đã thêm The Ordinary vào giỏ hàng"
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#357D64] text-white active:scale-95"
                    >
                      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-go="s20"
                className="shadow-xs relative flex flex-col justify-between rounded-2xl border border-[#DEE7E3]/60 bg-white p-2"
              >
                <button
                  aria-label="Yêu thích"
                  data-toast="Đã thêm vào yêu thích"
                  className="absolute right-2 top-2 text-[#678379] hover:text-red-500"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="my-1 flex h-16 w-full items-center justify-center">
                  <div className="shadow-2xs flex h-10 w-10 flex-col items-center justify-center rounded-md border border-neutral-300 bg-white p-1">
                    <div className="mb-0.5 h-1.5 w-6 bg-blue-600" />
                    <div className="text-[6px] font-bold text-blue-700">CeraVe</div>
                  </div>
                </div>
                <div>
                  <p className="line-clamp-1 text-[10px] font-bold leading-tight text-[#173B32]">CeraVe</p>
                  <p className="line-clamp-1 text-[8px] leading-tight text-[#678379]">Moisturizing Cream</p>
                  <div className="mt-1.5 flex items-center justify-between border-t border-[#DEE7E3]/40 pt-1">
                    <span className="text-[9.5px] font-bold text-[#173B32]">430.000đ</span>
                    <button
                      aria-label="Thêm vào giỏ hàng"
                      data-toast="Đã thêm CeraVe vào giỏ hàng"
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#357D64] text-white active:scale-95"
                    >
                      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-go="s06" className="shadow-xs mb-2 flex items-center gap-3 rounded-2xl border border-[#DEE7E3]/80 bg-white/80 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F1ED] text-[#357D64]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <circle cx="8" cy="14" fill="currentColor" r="1" />
                <circle cx="12" cy="14" fill="currentColor" r="1" />
                <circle cx="16" cy="14" fill="currentColor" r="1" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#173B32]">Đánh giá lại sau 14 ngày</h4>
              <p className="text-[10px] font-medium text-[#678379]">Chụp ảnh để xem sự thay đổi của làn da.</p>
            </div>
          </section>
        </main>
        <footer className="z-20 flex w-full shrink-0 flex-col gap-2 bg-gradient-to-t from-[#F7F8F2] via-[#F7F8F2]/95 to-transparent px-4 pb-2 pt-2">
          <button
            data-tab="s16"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#357D64] px-4 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#357D64] active:scale-[0.98]"
          >
            <span>Xem quy trình chăm sóc</span>
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              data-tab="s19"
              className="shadow-2xs flex items-center justify-center gap-1.5 rounded-full border border-[#DEE7E3] bg-white/90 px-3 py-2.5 text-[11px] font-semibold text-[#173B32] transition hover:bg-[#E8F1ED]/30 active:scale-[0.98]"
            >
              <svg className="h-3.5 w-3.5 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="truncate">Xem sản phẩm gợi ý</span>
            </button>
            <button
              data-go="s23"
              className="shadow-2xs flex items-center justify-center gap-1.5 rounded-full border border-[#DEE7E3] bg-white/90 px-3 py-2.5 text-[11px] font-semibold text-[#173B32] transition hover:bg-[#E8F1ED]/30 active:scale-[0.98]"
            >
              <svg className="h-3.5 w-3.5 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="truncate">Tư vấn bác sĩ</span>
            </button>
          </div>
        </footer>
      </div>
    </Screen>
  )
}
