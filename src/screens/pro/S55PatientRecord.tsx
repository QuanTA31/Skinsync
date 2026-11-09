import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'

/** Màn 55 · Hồ sơ bệnh nhân */
export default function S55PatientRecord() {
  return (
    <Screen iconSize="sm">
      <div
        className="relative flex select-none flex-col justify-between overflow-hidden"
        style={{ width: '390px', height: '884px', backgroundColor: '#F7F8F2', color: '#173B32' }}
      >
        <div className="relative z-40 h-[46px] w-full flex-shrink-0 bg-[#F7F8F2]">
          <div className="pointer-events-none absolute left-1/2 top-[10px] flex h-[32px] w-[112px] -translate-x-1/2 items-center justify-between rounded-full bg-black px-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#151515]" />
            <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#1b1c28]/60">
              <div className="h-1.5 w-1.5 rounded-full bg-[#081a2e]" />
            </div>
          </div>
          <div className="absolute left-7 top-[15px] text-[13px] font-semibold tracking-tight text-neutral-900">9:41</div>
          <div className="absolute right-7 top-[15px] flex items-center space-x-1.5 text-neutral-900">
            <span className="material-symbols-outlined text-[15px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[15px]">wifi</span>
            <span className="material-symbols-outlined text-[18px]">battery_full</span>
          </div>
        </div>
        <main className="flex flex-1 flex-col overflow-hidden px-4 pb-1 pt-1" style={{ paddingBottom: '86px' }}>
          <div className="pointer-events-none absolute right-0 top-0 z-10 flex h-28 w-28 items-start justify-end overflow-hidden">
            <img
              src="/eucalyptus-corner.png"
              alt=""
              className="h-28 w-28 object-contain object-top opacity-70"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <header className="relative z-20 mb-1.5 flex h-9 items-center justify-between">
            <button
              data-back="s54"
              className="shadow-xs flex h-7 w-7 items-center justify-center rounded-full border border-[#E3E6D2] bg-white/70 text-[#357D64] transition active:bg-neutral-200/50"
            >
              <span className="material-symbols-outlined text-[17px]">arrow_back_ios_new</span>
            </button>
            <BrandLogo />
            <button
              data-toast="Thêm tùy chọn hồ sơ (minh họa)"
              className="shadow-xs flex h-7 w-7 items-center justify-center rounded-full border border-[#E3E6D2] bg-white/70 text-[#357D64] active:bg-neutral-200/50"
            >
              <span className="material-symbols-outlined text-[18px]">more_horiz</span>
            </button>
          </header>
          <div className="z-20 mb-2.5">
            <h1 className="text-[18px] font-bold leading-tight text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
              Hồ sơ bệnh nhân
            </h1>
            <p className="mt-0.5 text-[10.5px] leading-tight text-[#357D64]">Xem và cập nhật thông tin, lịch sử điều trị của bệnh nhân.</p>
          </div>
          <section
            data-go="s56"
            className="shadow-xs z-20 mb-2 flex items-center justify-between rounded-2xl border border-[#E9EBDB] bg-white p-2.5"
          >
            <div className="flex items-center space-x-3">
              <div className="shadow-xs h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-[#E5E8D8] bg-amber-50">
                <img
                  alt="Nguyễn Minh Anh"
                  className="h-full w-full rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8BTxuqKvldWgdN8qxig1d041T01K35HTlGZ2X6NxsxdZiBBV-bYm_y6hEqIC1vGKKroCfSrlFBFUPStk6lOpBRMnMcqTf8ZM84rEKCt2aZIRkLyhZhjrTL4npV31WBeBVK7WRFWIAfK82d8IMTN2BOExyv3pPE37xR7_km9biRPW1Oz3bWnNAqINuCQZL-4Mui5q5g9OuKUeywcftD1kx6aXmtw3DKuK7iMv_O6w"
                />
              </div>
              <div>
                <h2 className="text-[13.5px] font-bold leading-tight text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Nguyễn Minh Anh
                </h2>
                <p className="mt-0.5 text-[10px] font-medium text-neutral-500">Nữ • 19 tuổi</p>
                <div className="mt-0.5 flex items-center text-[10px] font-semibold text-[#357D64]">
                  <span className="material-symbols-outlined mr-1 text-[12px]">call</span>
                  <span>+84 912 345 678</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-[18px] text-neutral-400">chevron_right</span>
          </section>
          <nav data-pills="" className="no-scrollbar z-20 mb-2 flex items-center space-x-1.5 overflow-x-auto">
            <button
              data-on=""
              className="shadow-xs whitespace-nowrap rounded-full bg-[#173B32] px-3 py-1 text-[11px] font-semibold text-white"
            >
              Tổng quan
            </button>
            <button className="whitespace-nowrap rounded-full border border-[#E5E8D5] bg-[#F3F4EB] px-2.5 py-1 text-[11px] font-medium text-[#357D64]">
              Lịch sử khám
            </button>
            <button className="whitespace-nowrap rounded-full border border-[#E5E8D5] bg-[#F3F4EB] px-2.5 py-1 text-[11px] font-medium text-[#357D64]">
              Hình ảnh da
            </button>
            <button className="whitespace-nowrap rounded-full border border-[#E5E8D5] bg-[#F3F4EB] px-2.5 py-1 text-[11px] font-medium text-[#357D64]">
              Điều trị
            </button>
          </nav>
          <div className="z-20 flex flex-1 flex-col justify-between space-y-2 overflow-hidden">
            <article className="shadow-xs rounded-xl border border-[#E9EBDB] bg-white/80 p-2.5">
              <div className="mb-1.5 flex items-center justify-between border-b border-neutral-100 pb-1.5">
                <span className="text-[11.5px] font-bold text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Thông tin cơ bản
                </span>
                <button
                  data-toast="Chỉnh sửa thông tin cơ bản (minh họa)"
                  className="flex items-center text-[10px] font-semibold text-[#357D64] hover:underline"
                >
                  <span className="material-symbols-outlined mr-0.5 text-[12px]">edit</span> Chỉnh sửa
                </button>
              </div>
              <div className="space-y-1 text-[10.5px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">Ngày sinh</span>
                  <span className="font-medium text-[#173B32]">15/06/2005</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">Khu vực</span>
                  <span className="font-medium text-[#173B32]">Đà Nẵng, Việt Nam</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">Loại da (tự khai báo)</span>
                  <span className="font-medium text-[#173B32]">Da dầu, dễ nổi mụn</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">Mục tiêu chăm sóc</span>
                  <span className="font-medium text-[#173B32]">Giảm mụn, cải thiện thâm</span>
                </div>
              </div>
            </article>
            <article className="shadow-xs rounded-xl border border-[#E9EBDB] bg-white/80 p-2">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11.5px] font-bold text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Tình trạng da gần đây
                </span>
                <button data-go="s56" className="flex items-center text-[10px] font-medium text-neutral-500 hover:text-[#173B32]">
                  Xem chi tiết <span className="material-symbols-outlined ml-0.5 text-[11px]">chevron_right</span>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <div className="text-center">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-[#D5CEBF] bg-[#F5F6EF]">
                    <img
                      alt="01/08/2024"
                      className="absolute h-full max-w-none object-cover"
                      style={{ left: '0%', width: '400%' }}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3mUy91qIpB05yXil5cfX5_icemYhvN5ilKtzVvFWDvk5B56EITJgWwRH1P2dYY2Va_dmariMVCX1HDS__dhUBb-EHkV2iFYi-RMPjLjBbIRnuD6wizeAy0mi_iE5ItKhyj7Gaxf-1I8nZp3tBQWdPGOlbUWUhEjhh-REpFz8-hU_jUAho83yCnpt24kWv3j250zWWM6_V9HrMsSwbWoKVZ3xohqb-1pFAPxefy8uyS_mpjHWnrjQ7"
                    />
                  </div>
                  <span className="mt-0.5 block text-[8.5px] font-medium text-neutral-600">01/08/2024</span>
                </div>
                <div className="text-center">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-[#D5CEBF] bg-[#F5F6EF]">
                    <img
                      alt="15/08/2024"
                      className="absolute h-full max-w-none object-cover"
                      style={{ left: '-100%', width: '400%' }}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3mUy91qIpB05yXil5cfX5_icemYhvN5ilKtzVvFWDvk5B56EITJgWwRH1P2dYY2Va_dmariMVCX1HDS__dhUBb-EHkV2iFYi-RMPjLjBbIRnuD6wizeAy0mi_iE5ItKhyj7Gaxf-1I8nZp3tBQWdPGOlbUWUhEjhh-REpFz8-hU_jUAho83yCnpt24kWv3j250zWWM6_V9HrMsSwbWoKVZ3xohqb-1pFAPxefy8uyS_mpjHWnrjQ7"
                    />
                  </div>
                  <span className="mt-0.5 block text-[8.5px] font-medium text-neutral-600">15/08/2024</span>
                </div>
                <div className="text-center">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-[#D5CEBF] bg-[#F5F6EF]">
                    <img
                      alt="10/09/2024"
                      className="absolute h-full max-w-none object-cover"
                      style={{ left: '-200%', width: '400%' }}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3mUy91qIpB05yXil5cfX5_icemYhvN5ilKtzVvFWDvk5B56EITJgWwRH1P2dYY2Va_dmariMVCX1HDS__dhUBb-EHkV2iFYi-RMPjLjBbIRnuD6wizeAy0mi_iE5ItKhyj7Gaxf-1I8nZp3tBQWdPGOlbUWUhEjhh-REpFz8-hU_jUAho83yCnpt24kWv3j250zWWM6_V9HrMsSwbWoKVZ3xohqb-1pFAPxefy8uyS_mpjHWnrjQ7"
                    />
                  </div>
                  <span className="mt-0.5 block text-[8.5px] font-medium text-neutral-600">10/09/2024</span>
                </div>
                <div className="text-center">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-[#D5CEBF] bg-[#F5F6EF]">
                    <img
                      alt="22/10/2024"
                      className="absolute h-full max-w-none object-cover"
                      style={{ left: '-300%', width: '400%' }}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3mUy91qIpB05yXil5cfX5_icemYhvN5ilKtzVvFWDvk5B56EITJgWwRH1P2dYY2Va_dmariMVCX1HDS__dhUBb-EHkV2iFYi-RMPjLjBbIRnuD6wizeAy0mi_iE5ItKhyj7Gaxf-1I8nZp3tBQWdPGOlbUWUhEjhh-REpFz8-hU_jUAho83yCnpt24kWv3j250zWWM6_V9HrMsSwbWoKVZ3xohqb-1pFAPxefy8uyS_mpjHWnrjQ7"
                    />
                  </div>
                  <span className="mt-0.5 block text-[8.5px] font-medium text-neutral-600">22/10/2024</span>
                </div>
              </div>
            </article>
            <article className="shadow-xs rounded-xl border border-[#E9EBDB] bg-white/80 p-2">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11.5px] font-bold text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Sản phẩm đang sử dụng
                </span>
                <button data-go="s56" className="flex items-center text-[10px] font-medium text-neutral-500 hover:text-[#173B32]">
                  Xem chi tiết <span className="material-symbols-outlined ml-0.5 text-[11px]">chevron_right</span>
                </button>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                <div className="shadow-xs flex h-12 items-center justify-center overflow-hidden rounded-lg border border-[#E9EBDB] bg-[#F7F8F2]">
                  <img src="/img/product.svg" alt="Sữa rửa mặt" className="h-10 w-full object-contain p-0.5" />
                </div>
                <div className="shadow-xs flex h-12 items-center justify-center overflow-hidden rounded-lg border border-[#E9EBDB] bg-[#F7F8F2]">
                  <img src="/img/product.svg" alt="Serum" className="h-10 w-full object-contain p-0.5" />
                </div>
                <div className="shadow-xs flex h-12 items-center justify-center overflow-hidden rounded-lg border border-[#E9EBDB] bg-[#F7F8F2]">
                  <img src="/img/product.svg" alt="Kem dưỡng ẩm" className="h-10 w-full object-contain p-0.5" />
                </div>
                <div className="shadow-xs flex h-12 items-center justify-center overflow-hidden rounded-lg border border-[#E9EBDB] bg-[#F7F8F2]">
                  <img src="/img/product.svg" alt="Kem chống nắng" className="h-10 w-full object-contain p-0.5" />
                </div>
                <div className="shadow-xs flex h-12 items-center justify-center overflow-hidden rounded-lg border border-[#E9EBDB] bg-[#F7F8F2]">
                  <img src="/img/product.svg" alt="Toner dưỡng ẩm" className="h-10 w-full object-contain p-0.5" />
                </div>
              </div>
            </article>
            <article className="shadow-xs rounded-xl border border-[#E9EBDB] bg-white/80 p-2">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11.5px] font-bold text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Thuốc và điều trị
                </span>
                <button data-go="s56" className="flex items-center text-[10px] font-medium text-neutral-500 hover:text-[#173B32]">
                  Xem chi tiết <span className="material-symbols-outlined ml-0.5 text-[11px]">chevron_right</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 rounded-lg border border-[#E9EBDB] bg-[#F7F8F2] p-1.5">
                  <div className="shadow-xs flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#E9EBDB] bg-white">
                    <img src="/img/product.svg" alt="Adapalene tube" className="h-7 w-7 object-contain" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="truncate text-[10px] font-bold leading-tight text-neutral-800">Adapalene 0.1%</p>
                    <p className="mt-0.5 truncate text-[8.5px] leading-tight text-neutral-500">Bôi buổi tối</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 rounded-lg border border-[#E9EBDB] bg-[#F7F8F2] p-1.5">
                  <div className="shadow-xs flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#E9EBDB] bg-white">
                    <div className="shadow-xs flex h-3 w-6 rotate-[-30deg] overflow-hidden rounded-full border border-amber-200/80">
                      <div className="h-full w-1/2 bg-[#E57373]" />
                      <div className="h-full w-1/2 bg-[#F4F5F0]" />
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <p className="truncate text-[10px] font-bold leading-tight text-neutral-800">Doxycycline 100mg</p>
                    <p className="mt-0.5 truncate text-[8.5px] leading-tight text-neutral-500">Uống theo chỉ định</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <section className="z-20 grid grid-cols-3 gap-1.5 pb-1 pt-2">
            <button
              data-go="s54"
              className="shadow-xs flex h-8 items-center justify-center space-x-1 rounded-xl border border-[#D5CEBF] bg-white text-[10px] font-semibold text-[#173B32] active:bg-neutral-100"
            >
              <span className="material-symbols-outlined text-[13px]">schedule</span>
              <span>Xem lịch sử</span>
            </button>
            <button
              data-toast="Đã lưu ghi chú bệnh nhân (minh họa)"
              className="shadow-xs flex h-8 items-center justify-center space-x-1 rounded-xl bg-[#173B32] text-[10px] font-semibold text-white active:opacity-90"
            >
              <span className="material-symbols-outlined text-[13px]">edit_note</span>
              <span>Cập nhật ghi chú</span>
            </button>
            <button
              data-go="s56"
              className="shadow-xs flex h-8 items-center justify-center space-x-1 rounded-xl border border-[#D5CEBF] bg-white text-[10px] font-semibold text-[#173B32] active:bg-neutral-100"
            >
              <span className="material-symbols-outlined text-[13px]">folder_open</span>
              <span>Mở hồ sơ điều trị</span>
            </button>
          </section>
        </main>
        <BottomNav role="doctor" active={4} />
        <div className="relative z-30 flex h-[18px] w-full items-start justify-center bg-[#F7F8F2] pb-2">
          <div className="h-[5px] w-[134px] rounded-full bg-[#111111]" />
        </div>
      </div>
    </Screen>
  )
}
