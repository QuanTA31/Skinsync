import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 18 · Chăm sóc da buổi tối */
export default function S18EveningRoutine() {
  return (
    <Screen>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] antialiased"
        style={{ paddingBottom: '78px' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-4 z-0 h-44 w-44 opacity-25">
          <svg fill="#357D64" viewBox="0 0 200 200">
            <path d="M180,10 C140,50 90,40 60,90 C80,95 110,75 140,40 Z" />
            <path d="M190,40 C140,90 100,100 80,140 C110,135 140,110 160,70 Z" />
            <path d="M160,80 C120,120 70,140 30,160 C50,175 100,150 130,120 Z" />
            <path d="M200,0 C170,60 110,120 40,180" fill="none" stroke="#357D64" strokeWidth="2" />
          </svg>
        </div>
        <StatusBar />
        <main className="no-scrollbar relative z-10 flex-1 overflow-y-auto px-4 pb-4 pt-1">
          <section className="relative flex flex-col items-center pb-3 pt-1 text-center">
            <button
              aria-label="Quay lại"
              data-back="s16"
              className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <BrandLogo variant="stacked" />
            <h1 className="mt-2 text-[20px] font-bold tracking-tight text-[#173B32]">Chăm sóc da buổi tối</h1>
            <p className="mt-0.5 px-4 text-[11.5px] font-normal leading-snug text-[#557D6F]">
              Làm sạch sâu, phục hồi và nuôi dưỡng làn da sau một ngày dài.
            </p>
          </section>
          <section className="mb-3 rounded-2xl border border-[#DBE7E2] bg-[#E8F1ED] p-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <h2 className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4C7667]">Quy trình hôm nay</h2>
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 fill-current text-[#357D64]" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="text-[13px] font-bold text-[#173B32]">Buổi tối</span>
              </div>
              <span className="text-[11px] font-medium text-[#477062]">0/4 bước</span>
            </div>
            <div className="mb-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#D3E2DC]">
              <div className="h-full w-0 rounded-full bg-[#487565]" />
            </div>
            <p className="text-center text-[10.5px] font-normal text-[#557F70]">Đã hoàn thành 0/4 bước chăm sóc tối.</p>
          </section>
          <div className="mb-3 space-y-2.5">
            <article className="rounded-2xl border border-[#DCE7E2] bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#487565] text-[12px] font-semibold text-white">
                    1
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-bold leading-tight text-[#173B32]">Làm sạch da</h3>
                    <p className="mt-0.5 text-[11px] text-[#698B7F]">Bước 1 – Xem hướng dẫn và sản phẩm</p>
                  </div>
                </div>
                <span className="pt-0.5 text-[#598173]">
                  <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="mt-2.5 border-t border-[#EEF4F1] pt-2">
                <div className="mb-2.5 flex items-center gap-3 rounded-xl border border-[#E6EFEB] bg-[#F7F8F2] p-2">
                  <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-lg border border-[#E0EAE6] bg-white p-1">
                    <img
                      alt="DHC Cleansing Oil"
                      className="h-full rounded object-contain"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLDNzx12b7W7u1xM-KLVdekWtgoKyCP6y8tm0BYZwdPAakPTC6Xg6A_ctUMN311T_hs0edKGgrF6t_t24cTojHEBpY7xwq-L1oNpcLAS-YaKCsSPyfLn6s6QkdQVN63KfldgDvbQGiSKQ2xOdK-GUj60O_0vT_WxqxGxfEUrYfoO-5u7kJiavs0Nsz_xOko8SLkJXNjUsu53g0xx10_UFsRjmT8-WFVht7x5l_qz8"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-[12.5px] font-bold text-[#173B32]">DHC Deep Cleansing Oil</h4>
                    <p className="text-[11px] text-[#5E8778]">Dầu tẩy trang</p>
                  </div>
                </div>
                <dl className="mb-3 space-y-1.5 text-[11px]">
                  <div className="flex items-start gap-1.5">
                    <dt className="flex w-28 shrink-0 items-center gap-1 font-medium text-[#467162]">
                      <svg className="h-3.5 w-3.5 text-[#598173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      Cách sử dụng
                    </dt>
                    <dd className="flex-1 text-[#173B32]">
                      Lấy 2–3 pump, massage nhẹ nhàng lên da khô, thêm chút nước để nhũ hóa rồi rửa sạch.
                    </dd>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <dt className="flex w-28 shrink-0 items-center gap-1 font-medium text-[#467162]">
                      <svg className="h-3.5 w-3.5 text-[#598173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      Thứ tự sử dụng
                    </dt>
                    <dd className="flex-1 text-[#173B32]">Bước 1 (đầu tiên)</dd>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <dt className="flex w-28 shrink-0 items-center gap-1 font-medium text-[#467162]">
                      <svg className="h-3.5 w-3.5 text-[#598173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      Lưu ý
                    </dt>
                    <dd className="flex-1 text-[#173B32]">Phù hợp cho tẩy trang vào buổi tối.</dd>
                  </div>
                </dl>
                <button
                  data-toast="Đã đánh dấu hoàn thành bước 1 – Làm sạch da"
                  className="mb-2 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#487565] py-2.5 text-[12.5px] font-semibold text-white shadow-sm transition-colors active:bg-[#357D64]"
                  type="button"
                >
                  <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Đánh dấu hoàn thành
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    data-go="s20"
                    className="flex w-full items-center justify-center gap-1 rounded-full border border-[#CEDED7] bg-white px-2 py-1.5 text-[11px] font-medium text-[#357D64] active:bg-[#F7F8F2]"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                    Xem sản phẩm
                  </button>
                  <button
                    data-toast="Đã ghi nhận phản ứng da (minh họa)"
                    className="flex w-full items-center justify-center gap-1 rounded-full border border-[#CEDED7] bg-white px-2 py-1.5 text-[11px] font-medium text-[#357D64] active:bg-[#F7F8F2]"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                    Ghi nhận phản ứng da
                  </button>
                </div>
              </div>
            </article>
            <article
              data-toast="Bước 2: Sản phẩm điều trị theo hồ sơ (minh họa)"
              className="flex items-center justify-between rounded-2xl border border-[#DCE7E2] bg-white p-3 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#487565] text-[12px] font-semibold text-white">
                  2
                </span>
                <div>
                  <h3 className="text-[13px] font-bold leading-tight text-[#173B32]">Sản phẩm điều trị theo hồ sơ</h3>
                  <p className="mt-0.5 text-[10.5px] text-[#698B7F]">Bước 2 – Xem hướng dẫn và sản phẩm</p>
                </div>
              </div>
              <span className="text-[#598173]">
                <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
            <article
              data-toast="Bước 3: Dưỡng ẩm (minh họa)"
              className="flex items-center justify-between rounded-2xl border border-[#DCE7E2] bg-white p-3 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#487565] text-[12px] font-semibold text-white">
                  3
                </span>
                <div>
                  <h3 className="text-[13px] font-bold leading-tight text-[#173B32]">Dưỡng ẩm</h3>
                  <p className="mt-0.5 text-[10.5px] text-[#698B7F]">Bước 3 – Xem hướng dẫn và sản phẩm</p>
                </div>
              </div>
              <span className="text-[#598173]">
                <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
            <article
              data-toast="Bước 4: Sản phẩm phục hồi (tùy chọn) (minh họa)"
              className="flex items-center justify-between rounded-2xl border border-[#DCE7E2] bg-white p-3 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#487565] text-[12px] font-semibold text-white">
                  4
                </span>
                <div>
                  <h3 className="text-[13px] font-bold leading-tight text-[#173B32]">Sản phẩm phục hồi (tùy chọn)</h3>
                  <p className="mt-0.5 text-[10.5px] text-[#698B7F]">Bước 4 – Xem hướng dẫn và sản phẩm</p>
                </div>
              </div>
              <span className="text-[#598173]">
                <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          </div>
          <section className="mb-3 rounded-2xl border border-[#DBE7E2] bg-[#E8F1ED] p-2.5">
            <div className="mb-2 flex items-start gap-2">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D1E1DA] bg-white/80 text-[#4A7667]">
                <svg className="h-4 w-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 10h.01M15 10h.01" strokeLinecap="round" />
                  <path d="M9.5 15a3.5 3.5 0 005 0" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-[11.5px] font-bold leading-tight text-[#173B32]">Ghi nhận tình trạng da sau khi chăm sóc</h4>
              </div>
            </div>
            <div className="flex items-center justify-between gap-1 pt-0.5">
              <button
                data-toast="Đã ghi nhận: Bình thường"
                className="shadow-xs flex-1 whitespace-nowrap rounded-full border border-[#D1E1DA] bg-white px-1.5 py-1 text-center text-[10.5px] font-medium text-[#357D64] active:bg-[#487565] active:text-white"
                type="button"
              >
                Bình thường
              </button>
              <button
                data-toast="Đã ghi nhận: Khô da"
                className="shadow-xs flex-1 whitespace-nowrap rounded-full border border-[#D1E1DA] bg-white px-1.5 py-1 text-center text-[10.5px] font-medium text-[#357D64] active:bg-[#487565] active:text-white"
                type="button"
              >
                Khô da
              </button>
              <button
                data-toast="Đã ghi nhận: Đỏ"
                className="shadow-xs flex-1 whitespace-nowrap rounded-full border border-[#D1E1DA] bg-white px-1.5 py-1 text-center text-[10.5px] font-medium text-[#357D64] active:bg-[#487565] active:text-white"
                type="button"
              >
                Đỏ
              </button>
              <button
                data-toast="Đã ghi nhận: Kích ứng"
                className="shadow-xs flex-1 whitespace-nowrap rounded-full border border-[#D1E1DA] bg-white px-1.5 py-1 text-center text-[10.5px] font-medium text-[#357D64] active:bg-[#487565] active:text-white"
                type="button"
              >
                Kích ứng
              </button>
              <button
                data-toast="Đã ghi nhận: Khác"
                className="shadow-xs flex-1 whitespace-nowrap rounded-full border border-[#D1E1DA] bg-white px-1.5 py-1 text-center text-[10.5px] font-medium text-[#357D64] active:bg-[#487565] active:text-white"
                type="button"
              >
                Khác
              </button>
            </div>
          </section>
          <section className="mb-2 space-y-2">
            <button
              data-toast="Đã hoàn thành chăm sóc tối"
              data-back="s16"
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#487565] py-3 text-[13.5px] font-bold text-white shadow-md transition-transform hover:bg-[#446D5F] active:scale-[0.99]"
              type="button"
            >
              <span>Hoàn thành chăm sóc tối</span>
              <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              data-go="s22"
              className="flex w-full items-center justify-center gap-1.5 rounded-full border border-[#B2C7BE] bg-white py-2.5 text-[12.5px] font-bold text-[#357D64] active:bg-[#F0F6F3]"
              type="button"
            >
              <svg className="h-3.5 w-3.5 text-[#4D7969]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Ghi nhận tình trạng da
            </button>
          </section>
          <footer className="flex items-start justify-center gap-1.5 px-2 py-1 text-center">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#719689]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
              <line strokeWidth="2" x1="12" x2="12" y1="16" y2="12" />
              <line strokeWidth="2" x1="12" x2="12.01" y1="8" y2="8" />
            </svg>
            <p className="text-left text-[10px] leading-tight text-[#698B7F]">
              Ứng dụng không tự động khuyến nghị thuốc kê đơn. Vui lòng tham khảo ý kiến bác sĩ da liễu khi cần thiết.
            </p>
          </footer>
        </main>
        <BottomNav role="user" active={2} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
