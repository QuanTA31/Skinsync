import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 58 · Bảng thống kê */
export default function S58Dashboard() {
  return (
    <Screen tab={0} role="doctor" iconSize="sm">
      <div
        className="relative flex select-none flex-col justify-between overflow-hidden text-neutral-800"
        style={{ width: '390px', height: '844px', backgroundColor: '#F7F8F2' }}
      >
        <SafeAreaTop />
        <div className="flex flex-1 flex-col justify-between px-3.5 pt-0.5" style={{ paddingBottom: '100px' }}>
          <section className="flex items-center justify-between py-1">
            <button
              aria-label="Menu"
              data-toast="Menu bác sĩ (minh họa)"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 active:bg-[#EAECDE]"
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
            <div className="flex items-center gap-1.5">
              <BrandLogo />
            </div>
            <div
              data-go="s53"
              className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-[#357D64]/50 bg-[#DCE7E2]"
            >
              <img src="/img/people/doctor-lan.jpg" alt="Doctor avatar" className="h-full w-full object-cover" />
            </div>
          </section>
          <section className="mb-1.5 mt-0.5 flex items-start justify-between">
            <div className="max-w-[210px]">
              <h1 className="font-serif-brand text-[16px] font-bold leading-tight tracking-tight text-[#357D64]">
                Bảng điều khiển quản trị
              </h1>
              <p className="mt-0.5 text-[9px] font-normal leading-tight text-neutral-500">
                Tổng quan hoạt động hệ thống, người dùng, lịch khám và nội dung trên SKINSYNC.
              </p>
            </div>
            <div
              data-toast="Chọn tháng báo cáo (minh họa)"
              className="shadow-2xs flex items-center gap-1 rounded-full border border-[#E3E6D3] bg-white px-2.5 py-1 text-[10.5px] font-medium text-[#357D64]"
            >
              <span className="material-symbols-outlined text-[12px] text-[#357D64]">calendar_today</span>
              <span className="text-[10px] font-semibold">Tháng 10/2026</span>
              <span className="material-symbols-outlined text-[13px] text-neutral-400">expand_more</span>
            </div>
          </section>
          <section className="mb-1.5 grid grid-cols-2 gap-1.5">
            <div className="shadow-2xs flex items-center gap-2 rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(231,243,238)', color: 'rgb(5,150,105)' }}
              >
                <span className="material-symbols-outlined text-[15px]">group</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[9.5px] font-medium leading-none text-neutral-500">Tổng tài khoản</span>
                <span className="my-0.5 text-[14px] font-bold leading-tight text-[#173B32]">2.845</span>
                <span className="whitespace-nowrap text-[8px] font-medium leading-none text-[#1B8354]">↑ 12% so với tháng trước</span>
              </div>
            </div>
            <div className="shadow-2xs flex items-center gap-2 rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(224,242,254)', color: 'rgb(2,132,199)' }}
              >
                <span className="material-symbols-outlined text-[15px]">person</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[9.5px] font-medium leading-none text-neutral-500">Người dùng Base</span>
                <span className="my-0.5 text-[14px] font-bold leading-tight text-[#173B32]">2.120</span>
                <span className="whitespace-nowrap text-[8px] font-medium leading-none text-[#1B8354]">↑ 10% so với tháng trước</span>
              </div>
            </div>
            <div className="shadow-2xs flex items-center gap-2 rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(254,243,199)', color: 'rgb(217,119,6)' }}
              >
                <span className="material-symbols-outlined text-[15px]">workspace_premium</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[9.5px] font-medium leading-none text-neutral-500">Người dùng Premium</span>
                <span className="my-0.5 text-[14px] font-bold leading-tight text-[#173B32]">725</span>
                <span className="whitespace-nowrap text-[8px] font-medium leading-none text-[#1B8354]">↑ 18% so với tháng trước</span>
              </div>
            </div>
            <div className="shadow-2xs flex items-center gap-2 rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(226,240,234)', color: 'rgb(13,148,136)' }}
              >
                <span className="material-symbols-outlined text-[15px]">calendar_month</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[9.5px] font-medium leading-none text-neutral-500">Lịch khám</span>
                <span className="my-0.5 text-[14px] font-bold leading-tight text-[#173B32]">368</span>
                <span className="whitespace-nowrap text-[8px] font-medium leading-none text-[#1B8354]">↑ 15% so với tháng trước</span>
              </div>
            </div>
            <div className="shadow-2xs flex items-center gap-2 rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(233,244,239)', color: 'rgb(22,101,52)' }}
              >
                <span className="material-symbols-outlined text-[15px]">shopping_bag</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[9.5px] font-medium leading-none text-neutral-500">Đơn hàng</span>
                <span className="my-0.5 text-[14px] font-bold leading-tight text-[#173B32]">156</span>
                <span className="whitespace-nowrap text-[8px] font-medium leading-none text-[#1B8354]">↑ 22% so với tháng trước</span>
              </div>
            </div>
            <div className="shadow-2xs flex items-center gap-2 rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgb(233,244,239)', color: 'rgb(21,128,61)' }}
              >
                <span className="material-symbols-outlined text-[15px]">forum</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[9.5px] font-medium leading-none text-neutral-500">Hoạt động cộng đồng</span>
                <span className="my-0.5 text-[14px] font-bold leading-tight text-[#173B32]">1.240</span>
                <span className="whitespace-nowrap text-[8px] font-medium leading-none text-[#1B8354]">↑ 30% so với tháng trước</span>
              </div>
            </div>
          </section>
          <section className="shadow-2xs mb-1.5 flex flex-col justify-between rounded-[10px] border border-[#E8EEEB] bg-white p-2.5">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#357D64]">Biểu đồ người dùng mới</span>
              <div
                data-toast="Chọn khoảng thời gian (minh họa)"
                className="flex items-center rounded-full bg-[#F1F3E9] px-2 py-0.5 text-[9px] font-medium text-neutral-600"
              >
                <span>6 tháng</span>
                <span className="material-symbols-outlined ml-0.5 text-[11px]">arrow_drop_down</span>
              </div>
            </div>
            <div className="relative flex h-[62px] w-full items-end pb-0.5 pt-3">
              <div
                className="pointer-events-none absolute inset-0 flex flex-col justify-between pr-1 text-[7px] text-neutral-400"
                style={{ height: '48px', top: '2px' }}
              >
                <div className="flex w-full items-center justify-between border-b border-dashed border-neutral-100">
                  <span>500</span>
                </div>
                <div className="flex w-full items-center justify-between border-b border-dashed border-neutral-100">
                  <span>300</span>
                </div>
                <div className="flex w-full items-center justify-between border-b border-dashed border-neutral-100">
                  <span>100</span>
                </div>
                <div className="flex w-full items-center justify-between border-b border-neutral-200">
                  <span>0</span>
                </div>
              </div>
              <div className="relative z-10 flex h-[48px] w-full items-end justify-between pl-6 pr-2">
                <div className="flex w-6 flex-col items-center gap-1">
                  <div className="w-3.5 rounded-t-sm" style={{ height: '16px', backgroundColor: '#B2CBC1' }} />
                  <span className="text-[7.5px] text-neutral-400">Tháng 5</span>
                </div>
                <div className="flex w-6 flex-col items-center gap-1">
                  <div className="w-3.5 rounded-t-sm" style={{ height: '20px', backgroundColor: '#B2CBC1' }} />
                  <span className="text-[7.5px] text-neutral-400">Tháng 6</span>
                </div>
                <div className="flex w-6 flex-col items-center gap-1">
                  <div className="w-3.5 rounded-t-sm" style={{ height: '24px', backgroundColor: '#8FB8A7' }} />
                  <span className="text-[7.5px] text-neutral-400">Tháng 7</span>
                </div>
                <div className="flex w-6 flex-col items-center gap-1">
                  <div className="w-3.5 rounded-t-sm" style={{ height: '28px', backgroundColor: '#8FB8A7' }} />
                  <span className="text-[7.5px] text-neutral-400">Tháng 8</span>
                </div>
                <div className="flex w-6 flex-col items-center gap-1">
                  <div className="w-3.5 rounded-t-sm" style={{ height: '33px', backgroundColor: '#8FB8A7' }} />
                  <span className="text-[7.5px] text-neutral-400">Tháng 9</span>
                </div>
                <div className="relative flex w-6 flex-col items-center gap-1">
                  <div className="shadow-xs absolute -top-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap rounded border border-[#CDDAD5] bg-white px-1 text-[7px] text-neutral-800">
                    <span className="font-bold text-[#357D64]">420</span>
                    <span className="text-[6.5px] text-neutral-500">người dùng mới</span>
                  </div>
                  <div className="shadow-xs w-3.5 rounded-t-sm bg-[#357D64]" style={{ height: '42px' }} />
                  <span className="text-[7.5px] font-bold text-[#357D64]">Tháng 10</span>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-2 grid grid-cols-2 gap-1.5">
            <div className="shadow-2xs flex flex-col justify-between rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div className="mb-1 flex items-center justify-between border-b border-neutral-100 pb-1">
                <span className="text-[10px] font-bold text-[#357D64]">Nội dung chờ duyệt</span>
                <a data-go="s59" className="flex items-center text-[8.5px] font-semibold text-[#1B8354] hover:underline" href="#">
                  Xem tất cả &gt;
                </a>
              </div>
              <div className="space-y-1.5 py-0.5">
                <div className="flex items-center justify-between text-[9.5px]">
                  <div className="flex min-w-0 items-center gap-1.5 text-neutral-700">
                    <div
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#E9F4EF', color: '#16A34A' }}
                    >
                      <span className="material-symbols-outlined text-[13px]">article</span>
                    </div>
                    <span className="truncate font-medium">Bài viết</span>
                  </div>
                  <span className="rounded bg-[#F0F6F3] px-1.5 py-0.5 text-[9px] font-bold text-[#173B32]">12</span>
                </div>
                <div className="flex items-center justify-between text-[9.5px]">
                  <div className="flex min-w-0 items-center gap-1.5 text-neutral-700">
                    <div
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#FFE4E6', color: '#E11D48' }}
                    >
                      <span className="material-symbols-outlined text-[13px]">smart_display</span>
                    </div>
                    <span className="truncate font-medium">Video</span>
                  </div>
                  <span className="rounded bg-[#F0F6F3] px-1.5 py-0.5 text-[9px] font-bold text-[#173B32]">5</span>
                </div>
                <div className="flex items-center justify-between text-[9.5px]">
                  <div className="flex min-w-0 items-center gap-1.5 text-neutral-700">
                    <div
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
                    >
                      <span className="material-symbols-outlined text-[13px]">shopping_bag</span>
                    </div>
                    <span className="truncate font-medium">Nội dung dịch vụ</span>
                  </div>
                  <span className="rounded bg-[#F0F6F3] px-1.5 py-0.5 text-[9px] font-bold text-[#173B32]">3</span>
                </div>
              </div>
            </div>
            <div className="shadow-2xs flex flex-col justify-between rounded-[10px] border border-[#E8EEEB] bg-white p-2">
              <div className="mb-1 flex items-center justify-between border-b border-neutral-100 pb-1">
                <span className="text-[10px] font-bold text-[#357D64]">Báo cáo tổng quan</span>
              </div>
              <div className="space-y-1 py-0.5">
                <a
                  data-toast="Báo cáo người dùng (minh họa)"
                  href="#"
                  className="flex items-center justify-between py-0.5 text-[9px] text-neutral-700 hover:text-[#357D64]"
                >
                  <span className="truncate">Báo cáo người dùng</span>
                  <span className="text-[10px] text-neutral-400">&gt;</span>
                </a>
                <a
                  data-toast="Báo cáo doanh thu (minh họa)"
                  href="#"
                  className="flex items-center justify-between py-0.5 text-[9px] text-neutral-700 hover:text-[#357D64]"
                >
                  <span className="truncate">Báo cáo doanh thu</span>
                  <span className="text-[10px] text-neutral-400">&gt;</span>
                </a>
                <a
                  data-toast="Báo cáo lịch khám (minh họa)"
                  href="#"
                  className="flex items-center justify-between py-0.5 text-[9px] text-neutral-700 hover:text-[#357D64]"
                >
                  <span className="truncate">Báo cáo lịch khám</span>
                  <span className="text-[10px] text-neutral-400">&gt;</span>
                </a>
                <a
                  data-toast="Báo cáo hoạt động (minh họa)"
                  href="#"
                  className="flex items-center justify-between py-0.5 text-[9px] text-neutral-700 hover:text-[#357D64]"
                >
                  <span className="truncate">Báo cáo hoạt động</span>
                  <span className="text-[10px] text-neutral-400">&gt;</span>
                </a>
              </div>
            </div>
          </section>
          <section className="flex w-full gap-1.5">
            <button
              data-toast="Báo cáo tổng hợp (minh họa)"
              className="shadow-2xs flex flex-1 items-center justify-center gap-1 rounded-[10px] border border-[#CDDAD5] bg-white px-1 py-2 text-[10px] font-semibold text-[#357D64] active:bg-[#F1F3E9]"
            >
              <span className="material-symbols-outlined text-[13px]">bar_chart</span>
              <span>Xem báo cáo</span>
            </button>
            <button
              data-go="s55"
              className="shadow-xs flex flex-1 items-center justify-center gap-1 rounded-[10px] border border-[#173B32] bg-[#173B32] px-1 py-2 text-[10px] font-semibold text-white"
            >
              <span className="material-symbols-outlined text-[13px]">group</span>
              <span>Quản lý người dùng</span>
            </button>
            <button
              data-go="s60"
              className="shadow-2xs flex flex-1 items-center justify-center gap-1 rounded-[10px] border border-[#CDDAD5] bg-white px-1 py-2 text-[10px] font-semibold text-[#357D64] active:bg-[#F1F3E9]"
            >
              <span className="material-symbols-outlined text-[13px]">settings</span>
              <span>Quản lý hoạt động</span>
            </button>
          </section>
        </div>
      </div>
    </Screen>
  )
}
