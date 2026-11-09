import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 54 · Lịch khám của tôi */
export default function S54DoctorSchedule() {
  return (
    <Screen tab={2} role="doctor" iconSize="sm">
      <div
        className="relative flex select-none flex-col overflow-hidden"
        style={{ width: '390px', height: '844px', backgroundColor: '#F7F8F2' }}
      >
        <SafeAreaTop />
        <section className="relative mt-1 flex select-none items-center justify-between px-4 pb-1 pt-3">
          <button
            aria-label="Menu"
            data-toast="Menu bác sĩ (minh họa)"
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-[#173B32] transition-colors hover:bg-[#E6E9D7]"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <div className="relative z-10 flex flex-1 items-center justify-center">
            <BrandLogo />
          </div>
          <div data-go="s58" className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center">
            <div className="shadow-2xs relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#D1DFD9]">
              <img alt="Bác sĩ" className="h-full w-full object-cover" src="/img/people/doctor-lan.jpg" />
            </div>
          </div>
        </section>
        <main className="flex flex-1 flex-col justify-between overflow-hidden px-3.5 pb-1" style={{ paddingBottom: '90px' }}>
          <section>
            <div className="mt-0.5">
              <h1
                className="text-[24px] font-bold leading-tight tracking-tight text-[#173B32]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Lịch khám của tôi
              </h1>
              <p className="mt-1 text-[12.5px] leading-tight text-[#357D64]">Quản lý lịch hẹn, sắp xếp thời gian và theo dõi bệnh nhân.</p>
            </div>
            <div data-pills="" className="mt-2 flex rounded-full bg-[#EBF0EE] p-1 text-xs">
              <button
                data-on=""
                className="shadow-xs flex-1 rounded-full bg-[#173B32] py-1.5 text-center font-bold text-white"
                type="button"
              >
                Ngày
              </button>
              <button
                className="flex-1 rounded-full py-1.5 text-center font-medium text-[#357D64] transition-colors hover:text-[#173B32]"
                type="button"
              >
                Tuần
              </button>
              <button
                className="flex-1 rounded-full py-1.5 text-center font-medium text-[#357D64] transition-colors hover:text-[#173B32]"
                type="button"
              >
                Tháng
              </button>
            </div>
          </section>
          <section className="shadow-2xs mt-2.5 rounded-2xl border border-[#E4ECE9] bg-[#F7F8F2] px-3 py-2">
            <div className="flex items-center justify-between px-1 pb-1.5 text-xs font-semibold text-[#173B32]">
              <button
                aria-label="Ngày trước"
                data-toast="Ngày 21/10/2024"
                className="flex items-center justify-center p-1 text-[#697368] transition-colors hover:text-[#173B32]"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <div className="flex cursor-pointer items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#173B32]">calendar_month</span>
                <span className="text-[13px] font-bold tracking-tight text-[#173B32]">22/10/2024</span>
              </div>
              <button
                aria-label="Ngày sau"
                data-toast="Ngày 23/10/2024"
                className="flex items-center justify-center p-1 text-[#697368] transition-colors hover:text-[#173B32]"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
            <div data-pills="" className="grid grid-cols-7 gap-1 border-t border-[#E5EDEA] pt-1 text-center">
              <div className="flex cursor-pointer flex-col items-center rounded-xl py-1">
                <span className="text-[9.5px] text-[#7E887B]">T2</span>
                <span className="mt-0.5 text-[12px] font-semibold text-[#4C6159]">21</span>
              </div>
              <div data-on="" className="shadow-xs flex flex-col items-center rounded-xl bg-[#173B32] py-1 text-white">
                <span className="text-[9.5px] font-medium text-[#A6C0B5]">T3</span>
                <span className="mt-0.5 text-[12px] font-bold">22</span>
              </div>
              <div className="flex cursor-pointer flex-col items-center rounded-xl py-1">
                <span className="text-[9.5px] text-[#7E887B]">T4</span>
                <span className="mt-0.5 text-[12px] font-semibold text-[#4C6159]">23</span>
              </div>
              <div className="flex cursor-pointer flex-col items-center rounded-xl py-1">
                <span className="text-[9.5px] text-[#7E887B]">T5</span>
                <span className="mt-0.5 text-[12px] font-semibold text-[#4C6159]">24</span>
              </div>
              <div className="flex cursor-pointer flex-col items-center rounded-xl py-1">
                <span className="text-[9.5px] text-[#7E887B]">T6</span>
                <span className="mt-0.5 text-[12px] font-semibold text-[#4C6159]">25</span>
              </div>
              <div className="flex cursor-pointer flex-col items-center rounded-xl py-1">
                <span className="text-[9.5px] text-[#7E887B]">T7</span>
                <span className="mt-0.5 text-[12px] font-semibold text-[#4C6159]">26</span>
              </div>
              <div className="flex cursor-pointer flex-col items-center rounded-xl py-1">
                <span className="text-[9.5px] text-[#7E887B]">CN</span>
                <span className="mt-0.5 text-[12px] font-semibold text-[#4C6159]">27</span>
              </div>
            </div>
          </section>
          <section className="relative my-2 flex flex-1 flex-col justify-between gap-2">
            <div style={{ position: 'absolute', left: '45px', top: '14px', bottom: '14px', width: '1.5px', backgroundColor: '#DFE2CE' }} />
            <article className="relative z-10 flex items-center gap-2">
              <div className="w-10 shrink-0 text-right">
                <span className="block text-[10.5px] font-bold leading-none text-[#173B32]">09:00</span>
              </div>
              <div className="-ml-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#F7F8F2]" style={{ backgroundColor: '#E5B638' }} />
              <div className="shadow-2xs flex-1 rounded-2xl border border-[#E8EBDC] bg-white px-2.5 py-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2">
                    <img alt="Nguyễn Minh Anh" className="h-7 w-7 shrink-0 rounded-full object-cover" src="/img/people/user-minh-anh.jpg" />
                    <div className="truncate">
                      <h4 className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Nguyễn Minh Anh</h4>
                      <p className="mt-0.5 truncate text-[9.5px] leading-tight text-[#7C8578]">Tư vấn online • Tái khám</p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                    style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
                  >
                    Sắp diễn ra
                  </span>
                </div>
                <div className="mt-1.5 flex gap-2 border-t border-[#F3F4EB] pt-1.5">
                  <button
                    data-go="s55"
                    className="flex-1 rounded-lg border border-[#D1DFD9] bg-[#F7F8F2] py-1 text-center text-[10px] font-medium text-[#173B32] transition-colors hover:bg-[#EDF0E2]"
                    type="button"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    data-go="s27"
                    className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-[#173B32] py-1 text-[10px] font-medium text-white transition-colors hover:bg-[#173B32]"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[13px]">videocam</span>
                    <span>Tham gia</span>
                  </button>
                </div>
              </div>
            </article>
            <article className="relative z-10 flex items-center gap-2">
              <div className="w-10 shrink-0 text-right">
                <span className="block text-[10.5px] font-bold leading-none text-[#173B32]">10:00</span>
              </div>
              <div className="-ml-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#F7F8F2]" style={{ backgroundColor: '#16A34A' }} />
              <div className="shadow-2xs flex-1 rounded-2xl border border-[#E8EBDC] bg-white px-2.5 py-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2">
                    <img
                      alt="Trần Hoàng Nam"
                      className="h-7 w-7 shrink-0 rounded-full object-cover"
                      src="/img/people/patient-hoang-nam.jpg"
                    />
                    <div className="truncate">
                      <h4 className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Trần Hoàng Nam</h4>
                      <p className="mt-0.5 truncate text-[9.5px] leading-tight text-[#7C8578]">Khám trực tiếp • Lần đầu</p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                    style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}
                  >
                    Đã xác nhận
                  </span>
                </div>
                <div className="mt-1.5 flex gap-2 border-t border-[#F3F4EB] pt-1.5">
                  <button
                    data-go="s55"
                    className="flex-1 rounded-lg border border-[#D1DFD9] bg-[#F7F8F2] py-1 text-center text-[10px] font-medium text-[#173B32] transition-colors hover:bg-[#EDF0E2]"
                    type="button"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    data-toast="Đã gửi yêu cầu hủy lịch (minh họa)"
                    className="flex-1 rounded-lg border border-[#ECCACA] bg-[#FDF6F6] py-1 text-center text-[10px] font-medium text-[#8F3E3E] transition-colors hover:bg-[#FCE8E8]"
                    type="button"
                  >
                    Hủy lịch
                  </button>
                </div>
              </div>
            </article>
            <article className="relative z-10 flex items-center gap-2">
              <div className="w-10 shrink-0 text-right">
                <span className="block text-[10.5px] font-bold leading-none text-[#173B32]">11:00</span>
              </div>
              <div className="-ml-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#F7F8F2]" style={{ backgroundColor: '#DC2626' }} />
              <div className="shadow-2xs flex-1 rounded-2xl border border-[#E8EBDC] bg-white px-2.5 py-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2">
                    <img alt="Lê Thu Hà" className="h-7 w-7 shrink-0 rounded-full object-cover" src="/img/people/patient-thu-ha.jpg" />
                    <div className="truncate">
                      <h4 className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Lê Thu Hà</h4>
                      <p className="mt-0.5 truncate text-[9.5px] leading-tight text-[#7C8578]">Tư vấn online • Theo dõi</p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                    style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}
                  >
                    Đã xác nhận
                  </span>
                </div>
                <div className="mt-1.5 flex gap-2 border-t border-[#F3F4EB] pt-1.5">
                  <button
                    data-go="s55"
                    className="flex-1 rounded-lg border border-[#D1DFD9] bg-[#F7F8F2] py-1 text-center text-[10px] font-medium text-[#173B32] transition-colors hover:bg-[#EDF0E2]"
                    type="button"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    data-go="s27"
                    className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-[#173B32] py-1 text-[10px] font-medium text-white transition-colors hover:bg-[#173B32]"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[13px]">videocam</span>
                    <span>Tham gia</span>
                  </button>
                </div>
              </div>
            </article>
            <article className="relative z-10 flex items-center gap-2">
              <div className="w-10 shrink-0 text-right">
                <span className="block text-[10.5px] font-bold leading-none text-[#173B32]">14:00</span>
              </div>
              <div className="-ml-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#F7F8F2]" style={{ backgroundColor: '#2563EB' }} />
              <div className="shadow-2xs flex-1 rounded-2xl border border-[#E8EBDC] bg-white px-2.5 py-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2">
                    <img
                      alt="Phạm Quỳnh Trang"
                      className="h-7 w-7 shrink-0 rounded-full object-cover"
                      src="/img/people/patient-quynh-trang.jpg"
                    />
                    <div className="truncate">
                      <h4 className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Phạm Quỳnh Trang</h4>
                      <p className="mt-0.5 truncate text-[9.5px] leading-tight text-[#7C8578]">Khám trực tiếp • Tái khám</p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                    style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
                  >
                    Chờ xác nhận
                  </span>
                </div>
                <div className="mt-1.5 flex gap-2 border-t border-[#F3F4EB] pt-1.5">
                  <button
                    data-go="s55"
                    className="flex-1 rounded-lg border border-[#D1DFD9] bg-[#F7F8F2] py-1 text-center text-[10px] font-medium text-[#173B32] transition-colors hover:bg-[#EDF0E2]"
                    type="button"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    data-toast="Đã xác nhận lịch khám"
                    className="flex-1 rounded-lg bg-[#173B32] py-1 text-center text-[10px] font-medium text-white transition-colors hover:bg-[#173B32]"
                    type="button"
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </article>
            <article className="relative z-10 flex items-center gap-2">
              <div className="w-10 shrink-0 text-right">
                <span className="block text-[10.5px] font-bold leading-none text-[#173B32]">15:30</span>
              </div>
              <div className="-ml-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#F7F8F2]" style={{ backgroundColor: '#EA580C' }} />
              <div className="shadow-2xs flex-1 rounded-2xl border border-[#E8EBDC] bg-white px-2.5 py-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2">
                    <img
                      alt="Hoàng Đức Thịnh"
                      className="h-7 w-7 shrink-0 rounded-full object-cover"
                      src="/img/people/patient-duc-thinh.jpg"
                    />
                    <div className="truncate">
                      <h4 className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Hoàng Đức Thịnh</h4>
                      <p className="mt-0.5 truncate text-[9.5px] leading-tight text-[#7C8578]">Tư vấn online • Lần đầu</p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                    style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}
                  >
                    Đã xác nhận
                  </span>
                </div>
                <div className="mt-1.5 flex gap-2 border-t border-[#F3F4EB] pt-1.5">
                  <button
                    data-go="s55"
                    className="flex-1 rounded-lg border border-[#D1DFD9] bg-[#F7F8F2] py-1 text-center text-[10px] font-medium text-[#173B32] transition-colors hover:bg-[#EDF0E2]"
                    type="button"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    data-go="s27"
                    className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-[#173B32] py-1 text-[10px] font-medium text-white transition-colors hover:bg-[#173B32]"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[13px]">videocam</span>
                    <span>Tham gia</span>
                  </button>
                </div>
              </div>
            </article>
          </section>
          <button
            data-toast="Đã thêm khung giờ trống (minh họa)"
            className="mb-1 mt-1 flex w-full shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#173B32] bg-transparent py-2 text-[12px] font-semibold text-[#173B32] transition-colors hover:bg-[#EDF0E2]"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Thêm lịch trống</span>
          </button>
        </main>
        <div
          style={{
            width: '134px',
            height: '5px',
            backgroundColor: '#111111',
            borderRadius: '10px',
            position: 'absolute',
            bottom: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50,
          }}
        />
      </div>
    </Screen>
  )
}
