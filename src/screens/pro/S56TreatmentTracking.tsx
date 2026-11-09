import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 56 · Theo dõi liệu trình */
export default function S56TreatmentTracking() {
  return (
    <Screen tab={2} role="doctor">
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <main className="flex flex-1 flex-col overflow-hidden px-4 pb-1 pt-1" style={{ paddingBottom: '86px' }}>
          <nav className="relative flex items-center justify-between border-b border-brand-border/40 pb-1.5 pt-0.5">
            <button
              aria-label="Menu"
              data-toast="Menu bác sĩ (minh họa)"
              className="shadow-xs flex h-8 w-8 items-center justify-center rounded-full border border-brand-border bg-white/80 text-brand-primary transition hover:bg-neutral-50"
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
            <BrandLogo />
            <div data-go="s58" className="h-8 w-8 overflow-hidden rounded-full border border-brand-border bg-brand-pill p-[1.5px]">
              <img alt="Bác sĩ điều trị" className="h-full w-full rounded-full object-cover" src="/img/people/doctor-lan.jpg" />
            </div>
          </nav>
          <section className="mb-2 mt-2 flex flex-col">
            <h1 className="text-[19px] font-bold leading-tight text-brand-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              Theo dõi liệu trình
            </h1>
            <p className="mt-0.5 text-[11px] font-normal leading-snug text-neutral-500">
              Quản lý bệnh nhân, cập nhật tiến trình điều trị và theo dõi hiệu quả liệu trình.
            </p>
          </section>
          <section className="mb-2 flex items-center gap-2">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-neutral-400">
                search
              </span>
              <input
                className="h-8 w-full rounded-lg border border-brand-border bg-white pl-8 pr-3 text-[11px] text-neutral-800 placeholder-neutral-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                placeholder="Tìm kiếm bệnh nhân (tên, SĐT, mã hồ sơ...)"
                type="text"
              />
            </div>
            <button
              aria-label="Bộ lọc"
              data-toast="Bộ lọc bệnh nhân (minh họa)"
              className="shadow-2xs flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-brand-border bg-white text-brand-primary hover:bg-neutral-50"
            >
              <span className="material-symbols-outlined text-[17px]">tune</span>
            </button>
          </section>
          <section data-pills="" className="mb-2.5 flex items-center gap-1.5 overflow-x-hidden">
            <button
              data-on=""
              className="shadow-xs whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium"
              style={{ backgroundColor: 'rgb(23,59,50)', color: 'rgb(255,255,255)' }}
            >
              Đang theo dõi (12)
            </button>
            <button className="whitespace-nowrap rounded-full border border-brand-border bg-white px-2.5 py-1 text-[11px] font-medium text-brand-primary">
              Cần xem lại (4)
            </button>
            <button className="whitespace-nowrap rounded-full border border-brand-border bg-white px-2.5 py-1 text-[11px] font-medium text-brand-primary">
              Đã hoàn thành
            </button>
          </section>
          <div className="flex flex-1 flex-col justify-start gap-2 overflow-hidden">
            <article className="shadow-xs flex flex-col gap-1.5 rounded-xl border border-brand-border/70 bg-white p-2.5">
              <div data-go="s55" className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Nguyễn Minh Anh"
                    className="h-8 w-8 rounded-full border border-brand-border/50 object-cover"
                    src="/img/people/user-minh-anh.jpg"
                  />
                  <div>
                    <h2 className="text-[12px] font-bold leading-tight text-neutral-900">Nguyễn Minh Anh</h2>
                    <p className="text-[10px] text-neutral-500">25 tuổi • MS: BN001</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-[#CDE5DB] bg-[#EBF4F0] px-2 py-0.5 text-[10px] font-medium text-[#357D64]">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#357D64]" />
                  Đang điều trị
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-medium text-neutral-700">
                    Liệu trình: <span className="font-semibold text-brand-primary">Điều trị mụn viêm</span>
                  </span>
                  <span className="font-medium text-neutral-500">
                    Tuần 3 / 12 &nbsp;
                    <strong className="font-bold text-neutral-800">25%</strong>
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EDEFE3]">
                  <div className="h-full rounded-full bg-brand-primary" style={{ width: '25%', backgroundColor: '#173B32' }} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <div className="flex flex-shrink-0 items-center space-x-1">
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/acne-cheek-4.jpg"
                  />
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/clear-cheek.jpg"
                  />
                  <div className="relative h-[34px] w-[34px] overflow-hidden rounded-md border border-neutral-200">
                    <img alt="" className="h-full w-full object-cover" src="/img/skin/acne-cheek-1.jpg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60 text-[10px] font-semibold text-white">
                      +2
                    </div>
                  </div>
                </div>
                <div className="flex min-h-[34px] flex-1 flex-col justify-center rounded-md border border-brand-border/60 bg-[#F7F8F2] p-1.5">
                  <span className="flex items-center gap-1 text-[9.5px] font-bold text-neutral-700">
                    <span className="material-symbols-outlined text-[11px] text-[#357D64]">edit_note</span> Ghi chú mới
                  </span>
                  <p className="line-clamp-2 text-[9.5px] leading-tight text-neutral-600">
                    Da giảm viêm, ít sưng hơn. Tiếp tục liệu trình.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <button
                  data-toast="Đã cập nhật hướng dẫn cho Nguyễn Minh Anh"
                  className="flex h-6 items-center justify-center rounded-md border border-brand-border bg-[#F7F8F2] text-[10.5px] font-semibold text-brand-primary hover:bg-neutral-100"
                >
                  Cập nhật hướng dẫn
                </button>
                <button
                  data-toast="Đã xác nhận đơn thuốc cho Nguyễn Minh Anh"
                  className="flex h-6 items-center justify-center rounded-md text-[10.5px] font-semibold text-white hover:bg-opacity-95"
                  style={{ backgroundColor: '#173B32' }}
                >
                  Xác nhận đơn thuốc
                </button>
              </div>
              <button
                data-go="s54"
                className="flex h-6 w-full items-center justify-center space-x-1 rounded-md border border-brand-border bg-white text-[10px] font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <span className="material-symbols-outlined text-[13px] text-neutral-600">calendar_today</span>
                <span>Đặt lịch tái khám</span>
              </button>
            </article>
            <article className="shadow-xs flex flex-col gap-1.5 rounded-xl border border-brand-border/70 bg-white p-2.5">
              <div data-go="s55" className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Trần Hoàng Nam"
                    className="h-8 w-8 rounded-full border border-brand-border/50 object-cover"
                    src="/img/people/patient-hoang-nam.jpg"
                  />
                  <div>
                    <h2 className="text-[12px] font-bold leading-tight text-neutral-900">Trần Hoàng Nam</h2>
                    <p className="text-[10px] text-neutral-500">28 tuổi • MS: BN002</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-[#CDE5DB] bg-[#EBF4F0] px-2 py-0.5 text-[10px] font-medium text-[#357D64]">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#357D64]" />
                  Có tiến triển
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-medium text-neutral-700">
                    Liệu trình: <span className="font-semibold text-brand-primary">Phục hồi da sau mụn</span>
                  </span>
                  <span className="font-medium text-neutral-500">
                    Tuần 6 / 10 &nbsp;
                    <strong className="font-bold text-neutral-800">60%</strong>
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EDEFE3]">
                  <div className="h-full rounded-full bg-brand-primary" style={{ width: '60%', backgroundColor: '#173B32' }} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <div className="flex flex-shrink-0 items-center space-x-1">
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/acne-cheek-2.jpg"
                  />
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/acne-cheek-4.jpg"
                  />
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/clear-cheek.jpg"
                  />
                </div>
                <div className="flex min-h-[34px] flex-1 flex-col justify-center rounded-md border border-brand-border/60 bg-[#F7F8F2] p-1.5">
                  <span className="flex items-center gap-1 text-[9.5px] font-bold text-neutral-700">
                    <span className="material-symbols-outlined text-[11px] text-[#357D64]">edit_note</span> Ghi chú mới
                  </span>
                  <p className="line-clamp-2 text-[9.5px] leading-tight text-neutral-600">
                    Da cải thiện rõ rệt, tiếp tục duy trì skincare.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <button
                  data-toast="Đã cập nhật hướng dẫn cho Trần Hoàng Nam"
                  className="flex h-6 items-center justify-center rounded-md border border-brand-border bg-[#F7F8F2] text-[10.5px] font-semibold text-brand-primary hover:bg-neutral-100"
                >
                  Cập nhật hướng dẫn
                </button>
                <button
                  data-toast="Đã xác nhận đơn thuốc cho Trần Hoàng Nam"
                  className="flex h-6 items-center justify-center rounded-md text-[10.5px] font-semibold text-white hover:bg-opacity-95"
                  style={{ backgroundColor: '#173B32' }}
                >
                  Xác nhận đơn thuốc
                </button>
              </div>
              <button
                data-go="s54"
                className="flex h-6 w-full items-center justify-center space-x-1 rounded-md border border-brand-border bg-white text-[10px] font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <span className="material-symbols-outlined text-[13px] text-neutral-600">calendar_today</span>
                <span>Đặt lịch tái khám</span>
              </button>
            </article>
            <article className="shadow-xs flex flex-col gap-1.5 rounded-xl border border-brand-border/70 bg-white p-2.5">
              <div data-go="s55" className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Lê Thu Hà"
                    className="h-8 w-8 rounded-full border border-brand-border/50 object-cover"
                    src="/img/people/patient-thu-ha.jpg"
                  />
                  <div>
                    <h2 className="text-[12px] font-bold leading-tight text-neutral-900">Lê Thu Hà</h2>
                    <p className="text-[10px] text-neutral-500">32 tuổi • MS: BN003</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-[#FDE68A] bg-[#FFF4E5] px-2 py-0.5 text-[10px] font-medium text-[#D97706]">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                  Cần xem lại
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-medium text-neutral-700">
                    Liệu trình: <span className="font-semibold text-brand-primary">Điều trị nám - tàn nhang</span>
                  </span>
                  <span className="font-medium text-neutral-500">
                    Tuần 2 / 8 &nbsp;
                    <strong className="font-bold text-neutral-800">25%</strong>
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EDEFE3]">
                  <div className="h-full rounded-full bg-[#D97706]" style={{ width: '25%' }} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <div className="flex flex-shrink-0 items-center space-x-1">
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/acne-cheek-2.jpg"
                  />
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/acne-cheek-3.jpg"
                  />
                  <img
                    alt=""
                    className="h-[34px] w-[34px] rounded-md border border-neutral-200 object-cover"
                    src="/img/skin/acne-cheek-4.jpg"
                  />
                </div>
                <div className="flex min-h-[34px] flex-1 flex-col justify-center rounded-md border border-brand-border/60 bg-[#F7F8F2] p-1.5">
                  <span className="flex items-center gap-1 text-[9.5px] font-bold text-neutral-700">
                    <span className="material-symbols-outlined text-[11px] text-[#D97706]">warning</span> Ghi chú mới
                  </span>
                  <p className="line-clamp-2 text-[9.5px] leading-tight text-neutral-600">
                    Da còn khô, xuất hiện bong tróc nhẹ. Cần giảm liều.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <button
                  data-toast="Đã cập nhật hướng dẫn cho Lê Thu Hà"
                  className="flex h-6 items-center justify-center rounded-md border border-brand-border bg-[#F7F8F2] text-[10.5px] font-semibold text-brand-primary hover:bg-neutral-100"
                >
                  Cập nhật hướng dẫn
                </button>
                <button
                  data-toast="Đã xác nhận đơn thuốc cho Lê Thu Hà"
                  className="flex h-6 items-center justify-center rounded-md text-[10.5px] font-semibold text-white hover:bg-opacity-95"
                  style={{ backgroundColor: '#173B32' }}
                >
                  Xác nhận đơn thuốc
                </button>
              </div>
              <button
                data-go="s54"
                className="flex h-6 w-full items-center justify-center space-x-1 rounded-md border border-brand-border bg-white text-[10px] font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <span className="material-symbols-outlined text-[13px] text-neutral-600">calendar_today</span>
                <span>Đặt lịch tái khám</span>
              </button>
            </article>
          </div>
        </main>
      </div>
    </Screen>
  )
}
