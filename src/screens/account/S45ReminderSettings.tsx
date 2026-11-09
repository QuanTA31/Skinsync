import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'
import { Toggle } from '@/components/ui/Toggle'

/** Màn 45 · Tùy chỉnh nhắc nhở */
export default function S45ReminderSettings() {
  return (
    <Screen>
      <div className="relative flex h-[884px] w-[390px] flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans font-medium text-[#173B32] antialiased">
        <StatusBar />
        <header className="relative shrink-0 px-5 pb-1 pt-0.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-0 h-[82px] w-[108px] select-none overflow-hidden mix-blend-multiply"
          >
            <img
              src="/eucalyptus-corner.png"
              alt=""
              className="object-top-right pointer-events-none absolute right-0 top-0 h-[108px] w-[108px] max-w-none object-cover opacity-90"
            />
          </div>
          <div className="relative z-10 mb-1.5 flex items-center justify-between">
            <button
              aria-label="Quay lại"
              data-back="s44"
              className="-ml-1 flex h-7 w-7 cursor-pointer items-center justify-center text-[#357D64] transition active:opacity-60"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              <BrandLogo />
            </div>
            <div className="w-7" />
          </div>
          <h1 className="relative z-10 font-serif text-[19px] font-bold leading-tight tracking-tight text-[#173B32]">Tùy chỉnh nhắc nhở</h1>
          <p className="relative z-10 mt-0.5 max-w-[255px] text-[11px] font-medium leading-snug text-[#687F77]">
            Thiết lập lịch nhắc phù hợp để duy trì thói quen chăm sóc da và sinh hoạt lành mạnh.
          </p>
        </header>
        <main className="flex w-full flex-1 flex-col justify-between overflow-hidden px-3.5 pb-[76px] pt-1">
          <section className="flex flex-1 flex-col gap-0.5">
            <h2 className="mb-0.5 flex items-center gap-1 text-[12px] font-bold tracking-wide text-[#173B32]">Lịch nhắc của tôi</h2>
            <div className="flex flex-1 flex-col justify-between divide-y divide-[#EEF0E3] rounded-xl border border-[#E6E9D7] bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm">
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(254,235,200)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#D97706' }}>
                      wb_sunny
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Chăm sóc da buổi sáng</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">Nhắc nhở thực hiện routine sáng</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    07:00 <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(237,233,254)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#6366F1' }}>
                      dark_mode
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Chăm sóc da buổi tối</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">Nhắc nhở thực hiện routine tối</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    21:00 <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(224,242,254)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#0284C7' }}>
                      water_drop
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Nhắc uống nước</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">
                      Duy trì đủ nước cho làn da khỏe mạnh
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Mỗi 2 giờ <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(220,252,231)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#0D9488' }}>
                      bed
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Nhắc giờ ngủ</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">Đảm bảo giấc ngủ chất lượng</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    22:30 <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(209,250,229)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#059669' }}>
                      directions_run
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Nhắc vận động</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">
                      Duy trì hoạt động thể chất nhẹ nhàng
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn={false} />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    17:30 <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(224,242,254)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#2563EB' }}>
                      photo_camera
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Nhắc cập nhật da</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">Sau 14/28 ngày theo liệu trình</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    14 ngày <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between gap-1 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2 pr-1">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(221,231,227)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#15803D' }}>
                      calendar_month
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Lịch tái khám</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">Nhắc trước lịch hẹn với bác sĩ</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Toggle defaultOn />
                  <span
                    className="flex min-w-[72px] shrink-0 items-center justify-end text-[10px] font-semibold text-[#576D65]"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Trước 1 ngày <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-0.5 pt-2">
            <h2 className="mb-0.5 text-[12px] font-bold tracking-wide text-[#173B32]">Tùy chọn nâng cao</h2>
            <div className="divide-y divide-[#EEF0E3] rounded-xl border border-[#E6E9D7] bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(224,231,255)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#4F46E5' }}>
                      notifications_active
                    </span>
                  </div>
                  <div className="truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Giới hạn số lượng thông báo mỗi ngày</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">Tránh làm phiền bạn.</p>
                  </div>
                </div>
                <span className="flex shrink-0 items-center text-[10px] font-semibold text-[#576D65]">
                  Tối đa 5 thông báo <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 py-1">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <div
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgb(226,232,240)' }}
                  >
                    <span className="material-symbols-outlined text-[19px]" style={{ color: '#475569' }}>
                      notifications_paused
                    </span>
                  </div>
                  <div className="truncate">
                    <p className="truncate text-[11.5px] font-bold leading-tight text-[#173B32]">Thời gian không nhận thông báo</p>
                    <p className="mt-0.5 truncate text-[9.5px] font-medium leading-none text-[#787E72]">
                      Bạn sẽ không nhận thông báo trong khoảng thời gian này.
                    </p>
                  </div>
                </div>
                <span className="flex shrink-0 items-center text-[10px] font-semibold text-[#576D65]">
                  22:00 – 07:00 <span className="material-symbols-outlined ml-0.5 text-[13px] text-[#9EA398]">chevron_right</span>
                </span>
              </div>
            </div>
          </section>
          <div className="w-full pb-0 pt-2">
            <button
              data-toast="Đã lưu cài đặt nhắc nhở"
              data-back="s44"
              className="flex h-[44px] w-full cursor-pointer items-center justify-center rounded-full bg-[#173B32] text-[14px] font-bold tracking-wide text-white shadow-md transition-all hover:bg-[#173B32] active:scale-[0.99]"
              type="button"
            >
              Lưu cài đặt
            </button>
          </div>
        </main>
        <BottomNav role="user" active={2} />
        <HomeIndicator variant="inline" />
      </div>
    </Screen>
  )
}
