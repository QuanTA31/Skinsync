import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 09 · Tình trạng da gần đây */
export default function S09RecentSkinCondition() {
  return (
    <Screen>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased"
        style={{
          backgroundImage:
            'radial-gradient(circle at 100% 0%,rgba(128,177,160,.15) 0%,transparent 40%),radial-gradient(circle at 100% 100%,rgba(128,177,160,.12) 0%,transparent 40%)',
          backgroundColor: '#F7F8F2',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-25px',
            width: '170px',
            height: '190px',
            pointerEvents: 'none',
            opacity: '.85',
            zIndex: 0,
          }}
          fill="none"
          viewBox="0 0 200 200"
        >
          <path d="M190 20C150 40 120 80 115 130C140 110 180 90 190 20Z" fill="#76A192" opacity="0.6" />
          <path d="M140 5C110 35 95 80 100 120C125 90 155 55 140 5Z" fill="#578B79" opacity="0.5" />
          <path d="M195 90C160 110 135 140 130 185C160 160 190 135 195 90Z" fill="#85B0A1" opacity="0.4" />
          <path d="M105 125C130 85 170 45 200 30" opacity="0.4" stroke="#357D64" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
        <svg
          style={{
            position: 'absolute',
            bottom: '-15px',
            right: '-25px',
            width: '130px',
            height: '140px',
            pointerEvents: 'none',
            opacity: '.75',
            zIndex: 0,
          }}
          fill="none"
          viewBox="0 0 150 150"
        >
          <path d="M150 80C120 95 90 120 85 150C110 145 135 125 150 80Z" fill="#76A192" opacity="0.45" />
          <path d="M130 110C100 120 80 135 70 160C95 150 120 135 130 110Z" fill="#578B79" opacity="0.35" />
        </svg>
        <StatusBar />
        <main className="no-scrollbar relative z-10 flex-1 space-y-4 overflow-y-auto px-5 pb-6 pt-2">
          <nav className="relative mb-1 flex min-h-[50px] items-center justify-between">
            <button
              aria-label="Quay lại"
              data-back="s08"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAEBE4] bg-white/90 text-[#173B32] shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="pointer-events-none absolute left-1/2 flex -translate-x-1/2 flex-col items-center">
              <BrandLogo variant="stacked" />
            </div>
            <div className="h-9 w-9 opacity-0" />
          </nav>
          <section className="pb-1 pt-1 text-center">
            <h1 className="text-[20px] font-bold leading-snug tracking-tight text-[#173B32]">Gần đây làn da của bạn thế nào?</h1>
            <p className="mx-auto mt-1 max-w-[310px] text-[12px] leading-relaxed text-[#718E84]">
              Chia sẻ tình trạng hiện tại để chúng tôi đưa ra phân tích chính xác và cá nhân hóa hơn.
            </p>
          </section>
          <section className="space-y-2.5">
            <div className="flex items-center text-[12.5px] font-semibold text-[#173B32]">
              <span>Vấn đề đang gặp phải</span>
              <span className="ml-1.5 text-[11.5px] font-normal text-[#718E84]">(có thể chọn nhiều)</span>
            </div>
            <div className="flex select-none flex-wrap gap-2 text-[12px] leading-none">
              <button
                data-toggle=""
                data-alt="bg-white/95 text-[#173B32] border border-[#DFE6E3] px-3.5 py-2 rounded-full font-normal shadow-[0_1px_2px_rgba(0,0,0,0.02)] active:scale-95 transition"
                className="flex items-center gap-1.5 rounded-full bg-[#357D64] px-3.5 py-2 font-medium text-white shadow-sm transition active:scale-95"
                type="button"
              >
                <svg className="h-3.5 w-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Mụn đầu đen</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Mụn đầu trắng</span>
              </button>
              <button
                data-toggle=""
                data-alt="bg-white/95 text-[#173B32] border border-[#DFE6E3] px-3.5 py-2 rounded-full font-normal shadow-[0_1px_2px_rgba(0,0,0,0.02)] active:scale-95 transition"
                className="flex items-center gap-1.5 rounded-full bg-[#357D64] px-3.5 py-2 font-medium text-white shadow-sm transition active:scale-95"
                type="button"
              >
                <svg className="h-3.5 w-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Mụn viêm</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Mụn bọc</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Da đỏ</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Kích ứng</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Da khô</span>
              </button>
              <button
                data-toggle=""
                data-alt="bg-white/95 text-[#173B32] border border-[#DFE6E3] px-3.5 py-2 rounded-full font-normal shadow-[0_1px_2px_rgba(0,0,0,0.02)] active:scale-95 transition"
                className="flex items-center gap-1.5 rounded-full bg-[#357D64] px-3.5 py-2 font-medium text-white shadow-sm transition active:scale-95"
                type="button"
              >
                <svg className="h-3.5 w-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Da dầu</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Lỗ chân lông to</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Thâm mụn</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Không đều màu</span>
              </button>
              <button
                data-toggle=""
                data-alt="flex items-center gap-1.5 bg-[#357D64] text-white px-3.5 py-2 rounded-full font-medium shadow-sm transition active:scale-95"
                className="rounded-full border border-[#DFE6E3] bg-white/95 px-3.5 py-2 font-normal text-[#173B32] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition active:scale-95"
                type="button"
              >
                <span>Nếp nhăn</span>
              </button>
            </div>
          </section>
          <section className="space-y-2 pt-1">
            <article
              data-toast="Chọn thời gian xuất hiện (minh họa)"
              className="flex cursor-pointer items-center justify-between rounded-xl border border-[#ECEDE6] bg-white p-3 px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(53,125,100,0.03)] transition hover:border-[#357D64]/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[#4B7B6A]">
                  <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="">
                  <h2 className="text-[12.5px] font-semibold text-[#173B32]">Thời gian xuất hiện</h2>
                  <p className="mt-0.5 text-[11.5px] text-[#688B7E]">Khoảng 3 tháng gần đây</p>
                </div>
              </div>
              <svg className="h-4 w-4 stroke-[2.2] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-toast="Chọn vùng da gặp vấn đề (minh họa)"
              className="flex cursor-pointer items-center justify-between rounded-xl border border-[#ECEDE6] bg-white p-3 px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(53,125,100,0.03)] transition hover:border-[#357D64]/40"
            >
              <div className="flex min-w-0 flex-1 items-start gap-3 pr-2">
                <div className="mt-0.5 flex-shrink-0 text-[#4B7B6A]">
                  <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 00-7 7c0 4.5 3 8 7 11 4-3 7-6.5 7-11a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9.5" cy="9.5" fill="currentColor" r="0.75" />
                    <circle cx="14.5" cy="9.5" fill="currentColor" r="0.75" />
                    <path d="M10.5 13.5C11 14 13 14 13.5 13.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center text-[12.5px] font-semibold text-[#173B32]">
                    <span>Vùng da gặp vấn đề</span>
                    <span className="ml-1 text-[10.5px] font-normal text-[#718E84]">(có thể chọn nhiều)</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECF2EF] px-2.5 py-0.5 text-[10.5px] font-medium text-[#357D64]">
                      Trán <span className="text-xs font-bold leading-none text-neutral-500">×</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECF2EF] px-2.5 py-0.5 text-[10.5px] font-medium text-[#357D64]">
                      Hai bên má <span className="text-xs font-bold leading-none text-neutral-500">×</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECF2EF] px-2.5 py-0.5 text-[10.5px] font-medium text-[#357D64]">
                      Cằm <span className="text-xs font-bold leading-none text-neutral-500">×</span>
                    </span>
                  </div>
                </div>
              </div>
              <svg className="h-4 w-4 flex-shrink-0 stroke-[2.2] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-toast="Chọn mức độ khó chịu (minh họa)"
              className="flex cursor-pointer items-center justify-between rounded-xl border border-[#ECEDE6] bg-white p-3 px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(53,125,100,0.03)] transition hover:border-[#357D64]/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[#4B7B6A]">
                  <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="">
                  <h2 className="text-[12.5px] font-semibold text-[#173B32]">Mức độ khó chịu</h2>
                  <p className="mt-0.5 text-[11.5px] text-[#688B7E]">Trung bình</p>
                </div>
              </div>
              <svg className="h-4 w-4 stroke-[2.2] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-toast="Ghi chú thay đổi bất thường (minh họa)"
              className="flex cursor-pointer items-center justify-between rounded-xl border border-[#ECEDE6] bg-white p-3 px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(53,125,100,0.03)] transition hover:border-[#357D64]/40"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 pr-2">
                <div className="flex-shrink-0 text-[#4B7B6A]">
                  <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[12.5px] font-semibold text-[#173B32]">Thay đổi bất thường gần đây</h2>
                  <p className="mt-0.5 truncate text-[11.5px] text-[#688B7E]">Da dễ đổ dầu hơn, xuất hiện nhiều mụn viêm.</p>
                </div>
              </div>
              <svg className="h-4 w-4 flex-shrink-0 stroke-[2.2] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
            <article
              data-toast="Chọn mục tiêu chăm sóc da (minh họa)"
              className="flex cursor-pointer items-center justify-between rounded-xl border border-[#ECEDE6] bg-white p-3 px-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(53,125,100,0.03)] transition hover:border-[#357D64]/40"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 pr-2">
                <div className="flex-shrink-0 text-[#4B7B6A]">
                  <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" fill="currentColor" r="1.5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[12.5px] font-semibold text-[#173B32]">Mục tiêu chăm sóc da</h2>
                  <p className="mt-0.5 truncate text-[11.5px] text-[#688B7E]">Giảm mụn, kiểm soát dầu, da mịn hơn</p>
                </div>
              </div>
              <svg className="h-4 w-4 flex-shrink-0 stroke-[2.2] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
          </section>
        </main>
        <footer className="relative z-20 space-y-2.5 bg-gradient-to-t from-[#F7F8F2] via-[#F7F8F2]/95 to-transparent px-5 pb-4 pt-2">
          <button
            data-go="s12"
            className="flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[#357D64] text-[14px] font-medium text-white shadow-md transition-all hover:bg-[#357D64] active:scale-[0.99]"
            type="button"
          >
            <span>Hoàn tất hồ sơ và phân tích da</span>
            <svg className="h-4 w-4 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="mx-auto flex max-w-[340px] items-start justify-center gap-1.5 px-2 text-center">
            <svg
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 stroke-[1.9] text-[#84A79B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <line strokeLinecap="round" strokeWidth="2.5" x1="12" x2="12" y1="8" y2="8.01" />
              <line strokeLinecap="round" x1="12" x2="12" y1="11" y2="16" />
            </svg>
            <p className="text-[9.5px] leading-tight text-[#7A948B]">
              Các thông tin bạn cung cấp là do bạn tự khai báo và không thay thế cho chẩn đoán y khoa.
            </p>
          </div>
          <div className="flex justify-center pt-1.5">
            <div className="h-1 w-32 rounded-full bg-neutral-900/60" />
          </div>
        </footer>
      </div>
    </Screen>
  )
}
