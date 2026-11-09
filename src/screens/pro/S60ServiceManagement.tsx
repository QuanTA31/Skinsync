import { PLANS } from '@/data/plans'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 60 · Quản lý dịch vụ */
export default function S60ServiceManagement() {
  return (
    <Screen tab={3} role="doctor" iconSize="sm">
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2]">
        <header className="relative isolate z-20 w-full flex-shrink-0 overflow-hidden px-6">
          <SafeAreaTop />
          <div className="relative z-20 mb-1 mt-1 flex items-center justify-between">
            <button
              aria-label="Menu"
              data-toast="Menu bác sĩ (minh họa)"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#357D64] transition hover:bg-[#E7EAD8]"
            >
              <span className="material-symbols-outlined !text-[22px]">menu</span>
            </button>
            <div className="flex items-center space-x-1">
              <BrandLogo />
            </div>
            <div
              data-go="s58"
              className="shadow-xs flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-[#357D64]/20 bg-[#D9EAE3]"
            >
              <img src="/img/people/doctor-lan.jpg" alt="Doctor Avatar" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>
        </header>
        <main className="z-10 flex flex-1 flex-col justify-start overflow-hidden px-4 pb-1 pt-0.5" style={{ paddingBottom: '86px' }}>
          <div className="relative z-20 mb-1.5 px-1">
            <h1 className="text-[17px] font-bold leading-tight tracking-tight text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
              Quản lý dịch vụ SKINSYNC
            </h1>
            <p className="mt-0.5 text-[10.5px] font-medium leading-tight text-[#606860]">
              Quản lý sản phẩm, dịch vụ, gói thành viên và các hoạt động vận hành của hệ thống.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-1">
            <div
              data-go="s19"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(233,244,239)', color: 'rgb(21,128,61)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">inventory_2</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Danh mục sản phẩm</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Quản lý sản phẩm skincare &amp; y khoa</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    48
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    sản phẩm
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-toast="Giá bán &amp; tồn kho (minh họa)"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(226,240,234)', color: 'rgb(13,148,136)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">shopping_cart</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Giá bán và tồn kho</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Cập nhật giá, tồn kho, khuyến mãi</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#E06D14' }}>
                    12
                  </span>
                  <span className="mt-0.5 block text-[9px] font-medium leading-tight" style={{ color: '#E06D14' }}>
                    sắp hết
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-go="s30"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(254,243,199)', color: 'rgb(217,119,6)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">crown</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Gói dịch vụ & tư vấn lẻ</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Quản lý gói dịch vụ và quyền lợi</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    {PLANS.length}
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    gói dịch vụ
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-go="s35"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(233,244,239)', color: 'rgb(22,163,74)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">calendar_month</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Quyền lợi tái khám</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Thiết lập chính sách tái khám</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    3
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    chính sách
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-go="s29"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(224,242,254)', color: 'rgb(2,132,199)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">local_hospital</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Phòng khám đối tác</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Quản lý thông tin và hợp tác</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    12
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    phòng khám
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-go="s42"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(231,243,238)', color: 'rgb(5,150,105)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">hub</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Chương trình tiếp thị liên kết</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Quản lý cộng tác viên, hoa hồng</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    156
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    cộng tác viên
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-go="s45"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(232,239,236)', color: 'rgb(53,125,100)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">campaign</span>
                </div>
                <div>
                  <h2 className="text-[13px] font-semibold leading-tight text-[#173B32]">Mẫu thông báo và lịch gửi</h2>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#7A827A]">Tạo và lên lịch gửi thông báo</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    8
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    mẫu thông báo
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
            <div
              data-go="s58"
              className="shadow-xs flex items-center justify-between rounded-xl border border-[#E2E9E6] bg-white px-3 py-2 transition hover:bg-[#F7F8F2]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgb(233,244,239)', color: 'rgb(22,101,52)' }}
                >
                  <span className="material-symbols-outlined !text-[20px]">bar_chart</span>
                </div>
                <div>
                  <h2 className="line-clamp-1 text-[13px] font-semibold leading-tight text-[#173B32]">Báo cáo giao dịch &amp; hỗ trợ KH</h2>
                  <p className="mt-0.5 line-clamp-1 text-[11px] leading-tight text-[#7A827A]">Theo dõi doanh thu, đơn hàng &amp; hỗ trợ</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <div className="text-right">
                  <span className="block text-[13.5px] font-bold leading-none" style={{ color: '#173B32' }}>
                    725
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight" style={{ color: '#8A928A' }}>
                    giao dịch
                  </span>
                </div>
                <span className="material-symbols-outlined !text-[16px] text-[#8A928A]">chevron_right</span>
              </div>
            </div>
          </div>
          <div className="mt-1 grid flex-shrink-0 grid-cols-2 gap-1.5 border-t border-[#E5E8D4] pt-1.5">
            <button
              data-toast="Thêm sản phẩm mới (minh họa)"
              className="flex items-center justify-center space-x-1.5 rounded-xl bg-[#173B32] px-2 py-2 text-white shadow-sm transition active:scale-95"
            >
              <span className="material-symbols-outlined !text-[16px]">add</span>
              <span className="text-[11.5px] font-semibold leading-none">Thêm sản phẩm</span>
            </button>
            <button
              data-go="s30"
              className="flex items-center justify-center space-x-1.5 rounded-xl border border-[#357D64] bg-white px-2 py-2 text-[#173B32] transition active:bg-[#F0F2E8]"
            >
              <span className="material-symbols-outlined !text-[16px]">crown</span>
              <span className="text-[11.5px] font-semibold leading-none">Cập nhật gói</span>
            </button>
            <button
              data-go="s45"
              className="flex items-center justify-center space-x-1.5 rounded-xl border border-[#357D64] bg-white px-2 py-2 text-[#173B32] transition active:bg-[#F0F2E8]"
            >
              <span className="material-symbols-outlined !text-[16px]">campaign</span>
              <span className="text-[11.5px] font-semibold leading-none">Tạo thông báo</span>
            </button>
            <button
              data-go="s58"
              className="flex items-center justify-center space-x-1.5 rounded-xl border border-[#357D64] bg-white px-2 py-2 text-[#173B32] transition active:bg-[#F0F2E8]"
            >
              <span className="material-symbols-outlined !text-[16px]">bar_chart</span>
              <span className="text-[11.5px] font-semibold leading-none">Xem báo cáo</span>
            </button>
          </div>
        </main>
      </div>
    </Screen>
  )
}
