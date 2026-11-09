import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 53 · Trang chủ bác sĩ */
export default function S53DoctorHome() {
  return (
    <Screen>
      <div
        className="relative flex h-[884px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-[#1F2937] antialiased"
        style={{
          width: '390px',
          height: '884px',
          backgroundColor: 'rgb(247,248,242)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 overflow-hidden"
          style={{ width: '88px', height: '64px', lineHeight: 0, background: 'transparent' }}
        >
          <img
            src="/eucalyptus-corner.png"
            alt=""
            className="select-none"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '112px',
              maxWidth: 'none',
              height: '112px',
              objectFit: 'cover',
              objectPosition: 'top right',
              opacity: 0.52,
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }}
          />
        </div>
        <StatusBar />
        <header className="relative z-20 flex-shrink-0 px-6 pt-0">
          <nav className="mt-1 flex items-center justify-between">
            <button
              aria-label="Menu mở rộng"
              data-toast="Menu bác sĩ (minh họa)"
              className="flex h-8 w-8 items-center justify-center text-gray-700 hover:text-black focus:outline-none"
            >
              <svg className="h-5 w-5 stroke-current" fill="none" strokeLinecap="round" strokeWidth="2.2" viewBox="0 0 24 24">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="16" y1="18" y2="18" />
              </svg>
            </button>
            <BrandLogo />
            <div data-go="s58" className="relative flex h-9 w-9 items-center justify-center">
              <img
                alt="Avatar Bác sĩ Lan"
                className="relative z-10 h-8 w-8 rounded-full object-cover shadow-sm ring-2 ring-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe4IXlViD1haUPyBs2puLX5IG3Q7md9No1Dv_DVKXRn3hN0vw0iqNcve3hGKqq_s8IspBobD8Qt-V8RkZ5DfFZVOffuiqqF703HgHCZSMO4lHVe0sAw-h2YjxMKOBqm1rxtTDjWLciHPa6ZD8V8w_9KkRzoQ4OHx5s_-CY6QOsghKHSDx6T0AEMNeYYmULaXTkd_sg846b4oWsuRttYb5DLbveFUiUcY2dKhycG9M"
              />
            </div>
          </nav>
        </header>
        <main className="no-scrollbar flex-1 overflow-y-auto px-4 pb-3 pt-3" style={{ paddingBottom: '96px' }}>
          <section className="mb-2 mt-1">
            <h2 className="text-[19px] font-bold tracking-tight text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
              Xin chào, BS. Nguyễn Thị Lan
            </h2>
            <p className="mt-0.5 text-[12px] font-normal text-[#587C6F]">Chăm sóc làn da khỏe mạnh hơn mỗi ngày</p>
          </section>
          <div className="mb-2.5">
            <button
              aria-label="Chọn ngày xem"
              data-toast="Chọn ngày xem lịch (minh họa)"
              className="flex w-full items-center justify-between rounded-xl border border-[#E4EBE8] bg-white px-3.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-colors hover:border-[#C7D4CF]"
            >
              <div className="flex items-center space-x-2.5">
                <svg className="h-4 w-4 text-[#4C7969]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span className="text-[13px] font-semibold text-[#357D64]">Thứ Ba, 22/10/2024</span>
              </div>
              <svg className="h-4 w-4 text-[#6E867E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
          <section className="mb-3 grid grid-cols-2 gap-2">
            <article
              data-go="s54"
              className="flex items-start justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
            >
              <div>
                <span className="block text-[21px] font-bold leading-tight text-[#173B32]">8</span>
                <span className="mt-0.5 block text-[11.5px] font-medium leading-tight text-[#65867A]">Lịch hẹn hôm nay</span>
              </div>
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(208,230,221)', color: 'rgb(23,59,50)' }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
            </article>
            <article
              data-go="s55"
              className="flex items-start justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
            >
              <div>
                <span className="block text-[21px] font-bold leading-tight text-[#173B32]">24</span>
                <span className="mt-0.5 block text-[11.5px] font-medium leading-tight text-[#65867A]">Bệnh nhân đang theo dõi</span>
              </div>
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(208,230,221)', color: 'rgb(23,59,50)' }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </article>
            <article
              data-go="s56"
              className="flex items-start justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
            >
              <div>
                <span className="block text-[21px] font-bold leading-tight text-[#173B32]">3</span>
                <span className="mt-0.5 block text-[11.5px] font-medium leading-tight text-[#65867A]">Yêu cầu tái khám</span>
              </div>
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(208,230,221)', color: 'rgb(23,59,50)' }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
            </article>
            <article
              data-toast="5 thông báo quan trọng (minh họa)"
              className="flex items-start justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
            >
              <div>
                <span className="block text-[21px] font-bold leading-tight text-[#D04437]">5</span>
                <span className="mt-0.5 block text-[11.5px] font-medium leading-tight text-[#65867A]">Thông báo quan trọng</span>
              </div>
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(248,223,220)', color: 'rgb(186,45,32)' }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
            </article>
          </section>
          <section className="mb-3">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
                Lịch khám sắp diễn ra
              </h3>
              <a data-go="s54" className="flex items-center text-[12px] font-semibold text-[#4C7969] hover:underline" href="#">
                Xem tất cả
                <svg className="ml-0.5 h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
            <div className="space-y-2">
              <article
                data-go="s55"
                className="flex items-center justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center space-x-2.5">
                  <img
                    alt="Nguyễn Minh Anh"
                    className="h-9 w-9 flex-shrink-0 rounded-full border border-gray-100 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFLkmWrLbKIfjDEP-0uDBd-_SsdjXDLpCwh0VYwROqzKL2WRJRPNAXePPZcmBSReZ_akCChKogmSqdwK3bEP752__W9RYYH8y6vHsPlQ9TNJh_VBLFDMsaHhIDUx-2EG65Ica4RVV_yex00aMmxl8s_2EuXkW0iuOYUVp5UlP6gzhGEDPfjjQ7DpROy8mniiHtpH8wIZyoWVIibLpGeD5F1dtR_zHLJfmLY3-J3o"
                  />
                  <div>
                    <p className="mb-0.5 text-[11px] font-medium leading-none text-[#768F86]">09:00 - 09:30</p>
                    <h4 className="text-[13.5px] font-bold leading-snug text-[#173B32]">Nguyễn Minh Anh</h4>
                    <div className="mt-1 flex items-center space-x-1.5">
                      <span className="inline-block rounded-full bg-[#EDF5F2] px-2 py-0.5 text-[10px] font-medium text-[#357D64]">
                        Tư vấn online
                      </span>
                      <span className="inline-block rounded-full bg-[#F5F7EF] px-2 py-0.5 text-[10px] font-medium text-[#756641]">
                        Tái khám
                      </span>
                    </div>
                  </div>
                </div>
                <svg className="h-4 w-4 text-[#8A968E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </article>
              <article
                data-go="s55"
                className="flex items-center justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center space-x-2.5">
                  <img
                    alt="Trần Hoàng Nam"
                    className="h-9 w-9 flex-shrink-0 rounded-full border border-gray-100 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKmSZMjvIKHks9zBGj6ERrBCaOrEkqqKGrT69hqMlS-QbvNE3VPXpXjo1istNOtJZZpdLMwIIIqrgPUFmkx2xtgWUNrzgKY7JRGdPyiFGY9D6_djM728JZewZzC6b5eTu03uIQ2B1Ppu-7BHRpc1KR3EtArRCw_zs9c_Fa7femU5uhIbsjIVK18pMdEFLUEx9DI4N0SJ8Iot8sS-bAqdh4D67o2v90jyCVzKXUObw"
                  />
                  <div>
                    <p className="mb-0.5 text-[11px] font-medium leading-none text-[#768F86]">10:00 - 10:30</p>
                    <h4 className="text-[13.5px] font-bold leading-snug text-[#173B32]">Trần Hoàng Nam</h4>
                    <div className="mt-1 flex items-center space-x-1.5">
                      <span className="inline-block rounded-full bg-[#EDF5F2] px-2 py-0.5 text-[10px] font-medium text-[#357D64]">
                        Khám trực tiếp
                      </span>
                      <span className="inline-block rounded-full bg-[#F5F7EF] px-2 py-0.5 text-[10px] font-medium text-[#756641]">
                        Lần đầu
                      </span>
                    </div>
                  </div>
                </div>
                <svg className="h-4 w-4 text-[#8A968E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </article>
              <article
                data-go="s55"
                className="flex items-center justify-between rounded-2xl border border-[#E4EBE8] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center space-x-2.5">
                  <img
                    alt="Lê Thu Hà"
                    className="h-9 w-9 flex-shrink-0 rounded-full border border-gray-100 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKqZQSRhD3St9sDt_wGVYWks52VcH8t_iqwBekd-Q91oo-qp_AsIzH723Hdqo23b5HbgZ_w90N5gojkzhUJvAbiWSseUa1g_-JvXSM9XxR1_X02qa74d4jvhduMI0K90W5U559P2KhK1GOlvEaeqfxShfIYHQz2jRA7aCTjd_XN7Jg-_NvsD78dv1QsUi1bpLpnniLw8iGNfD-60dskCdxGHAOsuaQWHKeKJutTk"
                  />
                  <div>
                    <p className="mb-0.5 text-[11px] font-medium leading-none text-[#768F86]">11:00 - 11:30</p>
                    <h4 className="text-[13.5px] font-bold leading-snug text-[#173B32]">Lê Thu Hà</h4>
                    <div className="mt-1 flex items-center space-x-1.5">
                      <span className="inline-block rounded-full bg-[#EDF5F2] px-2 py-0.5 text-[10px] font-medium text-[#357D64]">
                        Tư vấn online
                      </span>
                      <span className="inline-block rounded-full bg-[#F5F7EF] px-2 py-0.5 text-[10px] font-medium text-[#756641]">
                        Theo dõi
                      </span>
                    </div>
                  </div>
                </div>
                <svg className="h-4 w-4 text-[#8A968E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </article>
            </div>
          </section>
          <section className="mb-1.5 space-y-2">
            <button
              data-go="s54"
              className="flex w-full items-center justify-center space-x-2 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition active:scale-[0.99]"
              style={{ backgroundColor: 'rgb(23,59,50)' }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>Xem lịch khám</span>
            </button>
            <button
              data-go="s55"
              className="flex w-full items-center justify-center space-x-2 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition active:scale-[0.99]"
              style={{ backgroundColor: 'rgb(23,59,50)' }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Xem bệnh nhân</span>
            </button>
          </section>
        </main>
        <BottomNav role="doctor" active={0} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
