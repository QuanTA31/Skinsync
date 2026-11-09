import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 10 · Trang chủ */
export default function S10Home() {
  return (
    <Screen tab={0}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <main className="no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-4 pb-24 pt-2">
          <section className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-3">
              <div
                data-tab="s48"
                className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-[#D1DDD8] bg-white p-0.5 shadow-sm"
              >
                <img alt="Minh Anh Avatar" className="h-full w-full rounded-full object-cover" src="/img/people/user-minh-anh.jpg" />
              </div>
              <div>
                <h1 className="text-[16px] font-bold leading-tight tracking-tight text-[#173B32]">Xin chào, Minh Anh!</h1>
                <p className="mt-0.5 text-[12px] leading-snug text-[#66897D]">
                  <span className="block font-medium text-[#173B32]">Chào buổi sáng!</span>
                  <span>Hôm nay bạn đã chăm sóc da chưa?</span>
                </p>
              </div>
            </div>
            <button
              aria-label="Thông báo"
              data-go="s44"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E8EBDC] bg-white text-[#173B32] shadow-sm transition-all hover:bg-neutral-50 active:scale-95"
              type="button"
            >
              <svg className="h-5 w-5 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#E34A4A] ring-2 ring-white" />
            </button>
          </section>
          <section className="relative overflow-hidden rounded-2xl border border-[#EAECDF] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="pointer-events-none absolute -top-1 right-1 h-24 w-24 opacity-80">
              <svg className="h-full w-full" fill="none" viewBox="0 0 100 100">
                <path d="M75,10 C65,30 50,45 25,60" stroke="#86AC9F" strokeLinecap="round" strokeWidth="1.8" />
                <path d="M55,25 C62,20 68,18 74,18 C72,25 68,30 55,30" fill="#C7D9D2" opacity="0.6" />
                <path d="M45,35 C52,30 60,30 65,32 C62,38 56,42 45,41" fill="#B7CEC4" opacity="0.6" />
                <path d="M38,45 C30,42 22,46 16,50 C24,54 32,54 38,49" fill="#D0E0D9" opacity="0.6" />
                <path d="M60,20 C72,22 80,32 82,42 C72,40 65,32 60,20" fill="#99B2A8" opacity="0.6" />
              </svg>
            </div>
            <div data-go="s22" className="mb-1.5 flex items-center space-x-2 text-[#173B32]">
              <svg className="h-4 w-4 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[13px] font-bold tracking-tight">Hành trình làn da của bạn</span>
            </div>
            <div className="mt-2 flex items-center space-x-2.5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EEF5F2] text-[#357D64]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-[16px] font-bold leading-tight text-[#173B32]">Ngày 14/10</div>
            </div>
            <div className="mt-2.5">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E2EDE8]">
                <div className="h-full w-1/2 rounded-full bg-[#357D64]" />
              </div>
              <p className="mt-1.5 text-[11px] font-medium text-[#66897D]">Đang theo dõi quá trình chăm sóc</p>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-[#D7E6E0] bg-[#E6F0EC] p-3">
              <div className="flex-1 space-y-2 pr-3">
                <p className="text-[11.5px] font-semibold leading-tight text-[#173B32]">Đã đến lịch cập nhật tình trạng da</p>
                <button
                  data-go="s06"
                  className="inline-flex w-full max-w-[170px] items-center justify-center space-x-2 rounded-full bg-[#357D64] px-4 py-2 text-[11.5px] font-semibold text-white shadow-sm transition-transform active:scale-95"
                  type="button"
                >
                  <span>Chụp ảnh ngay</span>
                  <span className="text-[12px] leading-none">→</span>
                </button>
              </div>
              <div className="shadow-xs h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-[#C6D8D1] bg-[#F6DDD3]">
                <img alt="Chẩn đoán da với chuyên gia" className="h-full w-full object-cover" src="/img/scenes/skin-scan.png" />
              </div>
            </div>
          </section>
          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-[14px] font-bold tracking-tight text-[#173B32]">Chăm sóc hôm nay</h2>
              <a data-tab="s16" className="flex items-center text-[11.5px] font-semibold text-[#66897D] hover:text-[#357D64]" href="#">
                Xem chi tiết <span className="ml-0.5 text-xs font-normal">›</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col justify-between space-y-2.5 rounded-2xl border border-[#EAECDF] bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                <div className="flex items-start space-x-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF5DF] text-[#EAA132]">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" />
                      <path
                        d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold leading-tight text-[#173B32]">Buổi sáng</h3>
                    <span className="text-[10px] text-[#66897D]">4 bước chăm sóc</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 pt-0.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#357D64] text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#357D64] text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E2E9E6]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E2E9E6]" />
                </div>
                <button
                  data-go="s17"
                  className="flex w-full items-center justify-center space-x-1 rounded-full border border-[#D4E2DC] bg-[#F0F6F3] px-2 py-1.5 text-[11px] font-bold text-[#357D64] transition-all hover:bg-[#E2ECE8] active:scale-95"
                  type="button"
                >
                  <span>Bắt đầu ngay</span>
                  <span className="text-xs leading-none">→</span>
                </button>
              </div>
              <div className="flex flex-col justify-between space-y-2.5 rounded-2xl border border-[#EAECDF] bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                <div className="flex items-start space-x-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF2FC] text-[#4B73B4]">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.3 2a10 10 0 0 0 9.7 13.7 10 10 0 1 1-13.7-9.7 1 1 0 0 1 4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold leading-tight text-[#173B32]">Buổi tối</h3>
                    <span className="text-[10px] text-[#66897D]">3 bước chăm sóc</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 pt-0.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#357D64] text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#357D64] text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E2E9E6]" />
                </div>
                <button
                  data-go="s18"
                  className="flex w-full items-center justify-center space-x-1 rounded-full border border-[#D4E2DC] bg-[#F0F6F3] px-2 py-1.5 text-[11px] font-bold text-[#357D64] transition-all hover:bg-[#E2ECE8] active:scale-95"
                  type="button"
                >
                  <span>Bắt đầu ngay</span>
                  <span className="text-xs leading-none">→</span>
                </button>
              </div>
            </div>
          </section>
          <section className="pt-1">
            <h2 className="mb-2.5 text-[14px] font-bold tracking-tight text-[#173B32]">Khám phá SKINSYNC</h2>
            <div className="grid grid-cols-4 gap-2">
              <button data-tab="s11" className="group flex flex-col items-center space-y-1.5 text-center focus:outline-none" type="button">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7E9DB] bg-white text-[#357D64] shadow-sm transition-colors group-hover:bg-[#F0F6F3]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-semibold leading-tight tracking-tight text-[#173B32]">Phân tích da</span>
              </button>
              <button data-tab="s23" className="group flex flex-col items-center space-y-1.5 text-center focus:outline-none" type="button">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7E9DB] bg-white text-[#357D64] shadow-sm transition-colors group-hover:bg-[#F0F6F3]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 11v2m-1-1h2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-semibold leading-tight tracking-tight text-[#173B32]">Tìm bác sĩ</span>
              </button>
              <button data-tab="s19" className="group flex flex-col items-center space-y-1.5 text-center focus:outline-none" type="button">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7E9DB] bg-white text-[#357D64] shadow-sm transition-colors group-hover:bg-[#F0F6F3]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-semibold leading-tight tracking-tight text-[#173B32]">Sản phẩm</span>
              </button>
              <button data-tab="s36" className="group flex flex-col items-center space-y-1.5 text-center focus:outline-none" type="button">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7E9DB] bg-white text-[#357D64] shadow-sm transition-colors group-hover:bg-[#F0F6F3]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[10.5px] font-semibold leading-tight tracking-tight text-[#173B32]">Cộng đồng</span>
              </button>
            </div>
          </section>
          <section data-go="s27" className="rounded-2xl border border-[#EAECDF] bg-white p-3.5 shadow-[0_1px_6px_rgba(0,0,0,0.03)]">
            <div className="mb-2 flex items-center space-x-1.5 text-[#173B32]">
              <svg className="h-4 w-4 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[12.5px] font-bold tracking-tight">Lịch hẹn sắp tới</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-2.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF1FA] text-[#3E6BA8]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[12.5px] font-bold leading-tight text-[#173B32]">Khám da liễu trực tuyến</h4>
                  <p className="mt-0.5 text-[11px] text-[#66897D]">ThS.BS. Nguyễn Thu Hà</p>
                  <p className="mt-0.5 text-[10px] text-[#8C948B]">Thứ 6, 25/10/2024 • 10:00</p>
                </div>
              </div>
              <div className="pr-1 text-[#92A29B]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </section>
          <section
            data-go="s30"
            className="flex items-center justify-between rounded-2xl border border-[#DBE0C4] bg-gradient-to-r from-[#FBF2E3] to-[#F5E2C6] p-3.5 shadow-[0_1px_5px_rgba(215,160,56,0.12)]"
          >
            <div className="flex items-center space-x-3 pr-2">
              <div className="shadow-xs flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FCE9C8] text-[#E5A93C]">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[13px] font-bold leading-tight text-[#6D4C1B]">Nâng cấp Premium</h3>
                <p className="mt-0.5 text-[10.5px] leading-snug text-[#876735]">
                  Mở khóa phân tích chuyên sâu, tư vấn 1:1
                  <br />
                  và nhiều đặc quyền khác.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pr-1 text-[#B98C46]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </section>
        </main>
      </div>
    </Screen>
  )
}
