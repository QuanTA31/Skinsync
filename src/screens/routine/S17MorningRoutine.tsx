import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 17 · Chăm sóc da buổi sáng */
export default function S17MorningRoutine() {
  return (
    <Screen tab={2}>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans antialiased"
        style={{ paddingBottom: '78px' }}
      >
        <SafeAreaTop />
        <main className="no-scrollbar relative z-20 flex-1 overflow-y-auto px-5 pb-8">
          <nav className="relative flex min-h-[52px] items-center justify-center pb-3 pt-3">
            <button
              aria-label="Quay lại"
              data-back="s16"
              className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5ECE9] bg-white/90 text-[#173B32] shadow-sm transition-all hover:bg-white active:scale-95"
            >
              <svg className="h-4 w-4 stroke-current stroke-[2.2]" fill="none" viewBox="0 0 24 24">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <BrandLogo />
            </div>
          </nav>
          <section className="mb-4 mt-3 text-center">
            <h2 className="text-[21px] font-bold leading-snug tracking-tight text-[#173B32]">Chăm sóc da buổi sáng</h2>
            <p className="mx-auto mt-1 max-w-[280px] text-[12px] leading-relaxed text-[#58766B]">
              Thực hiện đầy đủ các bước để bảo vệ và nuôi dưỡng làn da suốt cả ngày.
            </p>
          </section>
          <section className="shadow-xs mb-3.5 rounded-2xl border border-[#DAE6E1] bg-[#E6EFEB]/90 p-3.5 backdrop-blur-sm">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#4E7668]">QUY TRÌNH HÔM NAY</div>
            <div className="mb-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg leading-none">☀️</span>
                <span className="text-[15px] font-bold text-[#173B32]">Buổi sáng</span>
              </div>
              <span className="text-[13px] font-semibold text-[#496E61]">0/4 bước</span>
            </div>
            <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-[#D2E0DA]">
              <div className="h-full w-[0%] rounded-full bg-[#357D64]" />
            </div>
            <p className="text-center text-[11.5px] text-[#5E8175]">
              Đã hoàn thành <span className="font-semibold text-[#357D64]">0/4 bước</span> chăm sóc sáng.
            </p>
          </section>
          <div className="space-y-2.5">
            <article className="rounded-2xl border border-[#DEE8E4] bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[14px] font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold leading-tight text-[#173B32]">Làm sạch da</h3>
                    <p className="mt-0.5 text-[11px] font-medium text-[#68897E]">Bước 1 – Xem hướng dẫn và sản phẩm</p>
                  </div>
                </div>
                <span className="p-1 text-[#58766B]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="mb-3 flex items-center space-x-3 rounded-xl border border-[#EAF0ED] bg-[#F7F8F2] p-2.5">
                <div className="shadow-xs flex h-14 w-12 shrink-0 items-center justify-center rounded-lg border border-[#E4EBE8] bg-white p-1">
                  <svg className="h-12 w-8" fill="none" viewBox="0 0 40 60">
                    <path d="M12 8H28L26 44C26 48 24 50 20 50C16 50 14 48 14 44L12 8Z" fill="#EFF3F1" stroke="#B9C8C2" strokeWidth="1.5" />
                    <path d="M11 6H29V8H11V6Z" fill="#357D64" />
                    <rect fill="#729A8C" height="1.5" rx="0.5" width="6" x="17" y="24" />
                    <line stroke="#A4B7AF" strokeWidth="1" x1="16" x2="24" y1="28" y2="28" />
                    <line stroke="#A4B7AF" strokeWidth="1" x1="15" x2="25" y1="31" y2="31" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-[13px] font-bold text-[#173B32]">La Roche-Posay</h4>
                  <p className="truncate text-[11.5px] text-[#567A6E]">Effaclar Purifying Foaming Gel</p>
                </div>
              </div>
              <div className="mb-3.5 space-y-2 px-0.5 text-[11.5px] leading-snug">
                <div className="flex items-start space-x-2.5">
                  <span className="mt-0.5 shrink-0 text-sm text-[#537C6E]">🔄</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#173B32]">Cách sử dụng:</span>
                    <span className="text-[#517266]">
                      Lấy một lượng vừa đủ, tạo bọt và massage nhẹ nhàng lên da ướt, sau đó rửa sạch bằng nước.
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="mt-0.5 shrink-0 text-sm text-[#537C6E]">🕒</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#173B32]">Thứ tự sử dụng:</span>
                    <span className="text-[#517266]">Bước 1 (đầu tiên)</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="mt-0.5 shrink-0 text-sm text-[#537C6E]">ⓘ</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#173B32]">Lưu ý:</span>
                    <span className="text-[#517266]">Sử dụng 2 lần/ngày, tránh vùng mắt.</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <button
                  data-toast="Đã đánh dấu hoàn thành bước 1 – Làm sạch da"
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#357D64] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#357D64] active:scale-[0.99]"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/80 text-[10px]">✓</span>
                  <span>Đánh dấu hoàn thành</span>
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    data-go="s20"
                    className="flex items-center justify-center space-x-1.5 rounded-xl border border-[#DCE4E1] bg-[#F7F8F2] px-2 py-2 text-[11px] font-semibold text-[#357D64] transition-colors hover:bg-[#EAF3EF]"
                  >
                    <span className="text-xs">🛒</span>
                    <span>Xem sản phẩm</span>
                  </button>
                  <button
                    data-toast="Đã ghi nhận phản ứng da (minh họa)"
                    className="flex items-center justify-center space-x-1.5 rounded-xl border border-[#DCE4E1] bg-[#F7F8F2] px-2 py-2 text-[11px] font-semibold text-[#357D64] transition-colors hover:bg-[#EAF3EF]"
                  >
                    <span className="text-xs">📝</span>
                    <span className="truncate">Ghi nhận phản ứng da</span>
                  </button>
                </div>
              </div>
            </article>
            <article
              data-toast="Bước 2: Sản phẩm chăm sóc theo hồ sơ (minh họa)"
              className="shadow-xs rounded-2xl border border-[#DEE8E4] bg-white p-3 transition-colors hover:border-[#C8D5D0]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#528070] text-[14px] font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-bold leading-tight text-[#173B32]">Sản phẩm chăm sóc theo hồ sơ</h3>
                    <p className="mt-0.5 text-[10.5px] font-medium text-[#6D8E82]">Bước 2 – Xem hướng dẫn và sản phẩm</p>
                  </div>
                </div>
                <span className="p-1 text-[#658479]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
            <article
              data-toast="Bước 3: Dưỡng ẩm (minh họa)"
              className="shadow-xs rounded-2xl border border-[#DEE8E4] bg-white p-3 transition-colors hover:border-[#C8D5D0]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#528070] text-[14px] font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-bold leading-tight text-[#173B32]">Dưỡng ẩm</h3>
                    <p className="mt-0.5 text-[10.5px] font-medium text-[#6D8E82]">Bước 3 – Xem hướng dẫn và sản phẩm</p>
                  </div>
                </div>
                <span className="p-1 text-[#658479]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
            <article
              data-toast="Bước 4: Chống nắng (minh họa)"
              className="shadow-xs rounded-2xl border border-[#DEE8E4] bg-white p-3 transition-colors hover:border-[#C8D5D0]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#528070] text-[14px] font-bold text-white">
                    4
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-bold leading-tight text-[#173B32]">Chống nắng</h3>
                    <p className="mt-0.5 text-[10.5px] font-medium text-[#6D8E82]">Bước 4 – Xem hướng dẫn và sản phẩm</p>
                  </div>
                </div>
                <span className="p-1 text-[#658479]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
          </div>
        </main>
      </div>
    </Screen>
  )
}
