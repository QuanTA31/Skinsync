import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 22 · Hành trình làn da của tôi */
export default function S22SkinJourney() {
  return (
    <Screen tab={2}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased">
        <SafeAreaTop />
        <section className="relative z-20 flex flex-col items-center px-5 pb-2 pt-3">
          <button
            aria-label="Quay lại"
            data-back="s10"
            className="absolute left-4 top-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#DFE9E5] bg-white/80 text-[#173B32] shadow-sm transition-all hover:bg-white active:scale-95"
          >
            <svg className="h-4 w-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <BrandLogo />
          </div>
          <div className="mt-3.5 text-center">
            <h2 className="font-serif text-[20px] font-bold leading-snug text-[#173B32]">Hành trình làn da của tôi</h2>
            <p className="mt-0.5 text-[11.5px] font-normal leading-relaxed text-[#6C867D]">
              Cùng theo dõi sự thay đổi của làn da qua từng giai đoạn.
            </p>
          </div>
        </section>
        <main className="no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-4 pb-52">
          <section className="grid grid-cols-2 gap-2.5">
            <div className="flex items-center space-x-2.5 rounded-2xl border border-[#DFE9E5] bg-white p-2.5 shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#ECF3F0] text-[#357D64]">
                <svg className="h-5 w-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                  <rect height="18" rx="3" strokeWidth="1.8" width="18" x="3" y="4" />
                  <path d="M16 2V6M8 2V6M3 10H21" strokeLinecap="round" />
                  <path d="M7 15L10 18L17 13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block truncate text-[9.5px] font-medium leading-tight text-[#6C867D]">Ngày bắt đầu theo dõi</span>
                <span className="mt-0.5 block text-[12.5px] font-bold tracking-tight text-[#357D64]">10/10/2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 rounded-2xl border border-[#DFE9E5] bg-white p-2.5 shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#ECF3F0] text-[#357D64]">
                <svg className="h-5 w-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                  <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.73 21A2 2 0 0 1 10.27 21" strokeLinecap="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block truncate text-[9.5px] font-medium leading-tight text-[#6C867D]">Lịch chụp da tiếp theo</span>
                <div className="mt-0.5 flex items-baseline truncate text-[12.5px] font-bold tracking-tight text-[#357D64]">
                  24/10/2024 <span className="ml-0.5 whitespace-nowrap text-[9px] font-normal text-[#6C867D]">(sau 14 ngày)</span>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-[#DFE9E5] bg-white p-3 shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[13.5px] font-bold tracking-tight text-[#173B32]">So sánh ảnh da</h3>
              <span className="rounded-full bg-[#F1F6F4] px-2 py-0.5 text-[10px] font-medium text-[#6C867D]">Trượt để so sánh</span>
            </div>
            <div
              data-slider=""
              className="relative h-[154px] w-full cursor-ew-resize overflow-hidden rounded-xl border border-[#DFE9E5]/60 bg-slate-100"
              style={{ touchAction: 'pan-y' }}
            >
              <img
                alt="Da sau 14 ngày"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_35%]"
                src="/img/skin/clear-cheek.jpg"
              />
              <div data-slider-clip="" className="absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r-2 border-white shadow-md">
                <img
                  alt="Da trước điều trị"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: '80% 35%', width: '390px', maxWidth: 'none' }}
                  src="/img/skin/acne-cheek-3.jpg"
                />
              </div>
              <div
                data-slider-handle=""
                className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-10 -ml-3.5 flex items-center justify-center"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#DFE9E5] bg-white text-[#173B32] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  <svg className="h-3.5 w-3.5 fill-none stroke-[#173B32] stroke-[2.5]" viewBox="0 0 24 24">
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[#DFE9E5]/60 pt-2.5 text-center text-xs">
              <div>
                <span className="block text-[11px] font-bold text-[#173B32]">Trước</span>
                <span className="text-[10px] font-medium text-[#6C867D]">10/10/2024</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-[#173B32]">Sau 14 ngày</span>
                <span className="text-[10px] font-medium text-[#6C867D]">24/10/2024</span>
              </div>
            </div>
          </section>
          <section className="space-y-2">
            <h3 className="text-[13.5px] font-bold tracking-tight text-[#173B32]">Tình trạng da hiện tại</h3>
            <div className="grid grid-cols-4 gap-1.5">
              <div className="flex flex-col items-center rounded-xl border border-[#DFE9E5] bg-white p-2 text-center shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
                <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F7F8F2]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#357D64]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="6" />
                    <path
                      d="M12 2V4M12 20V22M2 12H4M20 12H22M5 5L6.5 6.5M17.5 17.5L19 19M5 19L6.5 17.5M17.5 6.5L19 5"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="11" fill="currentColor" r="0.8" />
                    <circle cx="14" cy="11" fill="currentColor" r="0.8" />
                    <path d="M10 14C10.5 13.5 13.5 13.5 14 14" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium leading-tight text-[#6C867D]">Mụn viêm</span>
                <span className="mt-0.5 text-[11px] font-bold text-[#357D64]">Giảm</span>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-[#DFE9E5] bg-white p-2 text-center shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
                <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F7F8F2]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#357D64]" viewBox="0 0 24 24">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11a3 3 0 0 0-3 3" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium leading-tight text-[#6C867D]">Độ dầu</span>
                <span className="mt-0.5 text-[11px] font-bold text-[#357D64]">Cải thiện</span>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-[#DFE9E5] bg-white p-2 text-center shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
                <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F7F8F2]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#357D64]" viewBox="0 0 24 24">
                    <path d="M5 8h4M15 8h4M5 16h4M15 16h4M10 5v14M14 5v14" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium leading-tight text-[#6C867D]">Lỗ chân lông</span>
                <span className="mt-0.5 text-[11px] font-bold text-[#357D64]">Nhỏ hơn</span>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-[#DFE9E5] bg-white p-2 text-center shadow-[0_2px_10px_rgba(23,59,50,0.04)]">
                <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F7F8F2]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#357D64]" viewBox="0 0 24 24">
                    <path
                      d="M3 9C5.5 6.5 8.5 6.5 11 9C13.5 11.5 16.5 11.5 19 9M3 15C5.5 12.5 8.5 12.5 11 15C13.5 17.5 16.5 17.5 19 15"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-medium leading-tight text-[#6C867D]">Bề mặt da</span>
                <span className="mt-0.5 text-[11px] font-bold text-[#357D64]">Mịn hơn</span>
              </div>
            </div>
          </section>
          <section className="space-y-2 pt-0.5">
            <div className="flex items-center justify-between">
              <h3 className="text-[13.5px] font-bold tracking-tight text-[#173B32]">Nhật ký chăm sóc &amp; phản ứng da</h3>
              <a
                data-toast="Toàn bộ nhật ký chăm sóc (minh họa)"
                className="flex items-center gap-0.5 text-[11px] font-semibold text-[#357D64] hover:underline"
                href="#"
              >
                Xem tất cả
                <svg className="inline h-3 w-3 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <article
              data-toast="Nhật ký 17/10/2024 (minh họa)"
              className="flex items-center space-x-3 rounded-2xl border border-[#DFE9E5] bg-white p-2.5 shadow-[0_2px_10px_rgba(23,59,50,0.04)] transition active:bg-[#F1F6F4]/50"
            >
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-[#DFE9E5]/60">
                <img alt="Nhật ký 17/10/2024" className="h-full w-full object-cover object-center" src="/img/skin/acne-cheek-1.jpg" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-[12px] font-bold leading-tight text-[#173B32]">17/10/2024</h4>
                <p className="mt-0.5 line-clamp-2 text-[10.5px] leading-relaxed text-[#6C867D]">
                  Da bớt đỏ, ít mụn viêm hơn.
                  <br />
                  Không có kích ứng.
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5 text-[#357D64]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ECF3F0] text-[#357D64]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 10h.01M15 10h.01" strokeLinecap="round" strokeWidth="2.5" />
                    <path d="M9.5 15a4 4 0 0 0 5 0" strokeLinecap="round" />
                  </svg>
                </div>
                <svg className="h-4 w-4 fill-none stroke-current stroke-[2.2] text-[#6C867D]/70" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          </section>
        </main>
        <footer
          className="absolute inset-x-0 z-30 flex flex-col space-y-2 border-t border-[#DFE9E5]/70 bg-[#F7F8F2]/95 px-4 pb-2 pt-2 backdrop-blur-md"
          style={{ bottom: '78px' }}
        >
          <button
            data-go="s06"
            className="flex h-[48px] w-full items-center justify-center space-x-2 rounded-full bg-[#357D64] text-[13.5px] font-semibold text-white shadow-md transition-all hover:bg-[#357D64] active:scale-[0.98]"
            type="button"
          >
            <svg className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span>Chụp ảnh cập nhật</span>
            <svg className="h-4 w-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              data-go="s11"
              className="flex h-9 items-center justify-center space-x-1 rounded-full border border-[#DFE9E5] bg-white text-[10.5px] font-semibold text-[#173B32] shadow-sm active:bg-[#F1F6F4]"
              type="button"
            >
              <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2] text-[#357D64]" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" />
              </svg>
              <span className="truncate">Xem lịch sử</span>
            </button>
            <button
              data-go="s15"
              className="flex h-9 items-center justify-center space-x-1 rounded-full border border-[#DFE9E5] bg-white text-[10.5px] font-semibold text-[#173B32] shadow-sm active:bg-[#F1F6F4]"
              type="button"
            >
              <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2] text-[#357D64]" viewBox="0 0 24 24">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" x2="12" y1="9" y2="13" />
                <line x1="12" x2="12.01" y1="17" y2="17" />
              </svg>
              <span className="truncate">Báo cáo vấn đề</span>
            </button>
            <button
              data-go="s23"
              className="flex h-9 items-center justify-center space-x-1 rounded-full border border-[#DFE9E5] bg-white text-[10.5px] font-semibold text-[#173B32] shadow-sm active:bg-[#F1F6F4]"
              type="button"
            >
              <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2] text-[#357D64]" viewBox="0 0 24 24">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.5-.5 5-2c2.5.5 5.5-.5 7.5-2.5l5.5-5.5a3.5 3.5 0 0 0-5-5L10 12c-2 2-3 5-2.5 7.5z" />
              </svg>
              <span className="truncate">Tư vấn bác sĩ</span>
            </button>
          </div>
        </footer>
      </div>
    </Screen>
  )
}
