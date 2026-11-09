import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 51 · Đơn hàng và thanh toán */
export default function S51OrdersPayments() {
  return (
    <Screen tab={4}>
      <div
        className="relative flex select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased"
        style={{ width: '390px', height: '844px' }}
      >
        <SafeAreaTop />
        <main
          className="relative z-10 flex flex-1 flex-col overflow-hidden px-4"
          style={{ paddingBottom: '96px', overflowY: 'auto', scrollbarWidth: 'none' }}
        >
          <header className="relative z-10 flex items-center justify-between pb-2 pt-1">
            <button
              aria-label="Quay lại"
              data-back="s48"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-700 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <BrandLogo className="flex items-center justify-center" />
            <div className="w-8" />
          </header>
          <div className="z-10 mb-2.5 mt-1">
            <h1 className="font-serif text-[20px] font-bold leading-snug tracking-tight text-[#173B32]">Đơn hàng và thanh toán</h1>
            <p className="mt-0.5 text-[11.5px] leading-tight text-[#636A5E]">
              Theo dõi đơn hàng, lịch sử thanh toán và các giao dịch dịch vụ của bạn.
            </p>
          </div>
          <nav data-pills="" className="z-10 mb-2.5 flex items-center gap-1.5 overflow-x-hidden text-xs">
            <button data-on="" className="rounded-full bg-[#357D64] px-3.5 py-1.5 text-[11px] font-medium text-white shadow-sm">
              Tất cả
            </button>
            <button className="rounded-full border border-[#DDE0CF] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[#4D695F]">
              Sản phẩm
            </button>
            <button className="rounded-full border border-[#DDE0CF] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[#4D695F]">
              Dịch vụ
            </button>
            <button className="rounded-full border border-[#DDE0CF] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[#4D695F]">
              Gói dịch vụ
            </button>
          </nav>
          <div className="z-10 flex flex-1 flex-col space-y-2 overflow-hidden pb-1">
            <article className="flex flex-col justify-between rounded-2xl border border-[#E8EADC]/80 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-[#F5F6EF] p-1">
                    <img src="/img/products/effaclar-gel.jpg" alt="Sữa rửa mặt dịu nhẹ" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10.5px] font-medium text-gray-500">#DH250922001</span>
                      <span className="text-[10px] text-gray-400">•</span>
                      <span className="text-[10.5px] text-gray-400">22/09/2025</span>
                    </div>
                    <h2 className="mt-0.5 text-[13.5px] font-bold leading-tight text-[#173B32]">Sữa rửa mặt dịu nhẹ</h2>
                    <div className="mt-0.5 flex items-center space-x-2">
                      <span className="text-[11px] text-gray-500">1 sản phẩm</span>
                      <span className="text-[13px] font-bold text-[#173B32]">219.000đ</span>
                    </div>
                  </div>
                </div>
                <span
                  className="flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgb(187,219,206)', borderColor: 'rgb(146,194,174)', color: 'rgb(23,59,50)' }}
                >
                  <span className="material-symbols-outlined text-[12px]">local_shipping</span>
                  Đang giao hàng
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between gap-1.5 border-t border-gray-100 pt-2 text-[11px]">
                <button
                  data-toast="Chi tiết đơn #DH250922001 (minh họa)"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-2 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Xem chi tiết
                </button>
                <button
                  data-go="s21"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-2 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Mua lại
                </button>
                <button
                  data-toast="Đơn hàng đang trên đường giao đến bạn"
                  className="flex-1 rounded-xl border border-[#173B32] px-2 py-1.5 text-center font-semibold text-[#173B32] hover:bg-emerald-50"
                >
                  Theo dõi
                </button>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-2xl border border-[#E8EADC]/80 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-[#F5F6EF] p-1">
                    <img src="/img/products/moisturizer-set.jpg" alt="Bộ dưỡng ẩm phục hồi" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10.5px] font-medium text-gray-500">#DH180920001</span>
                      <span className="text-[10px] text-gray-400">•</span>
                      <span className="text-[10.5px] text-gray-400">18/09/2025</span>
                    </div>
                    <h2 className="mt-0.5 text-[13.5px] font-bold leading-tight text-[#173B32]">Bộ dưỡng ẩm phục hồi</h2>
                    <div className="mt-0.5 flex items-center space-x-2">
                      <span className="text-[11px] text-gray-500">3 sản phẩm</span>
                      <span className="text-[13px] font-bold text-[#173B32]">568.000đ</span>
                    </div>
                  </div>
                </div>
                <span
                  className="flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgb(187,219,206)', borderColor: 'rgb(146,194,174)', color: 'rgb(23,59,50)' }}
                >
                  <span className="material-symbols-outlined text-[12px]">check</span>
                  Đã giao
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between gap-1.5 border-t border-gray-100 pt-2 text-[11px]">
                <button
                  data-toast="Chi tiết đơn #DH180920001 (minh họa)"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-2 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Xem chi tiết
                </button>
                <button
                  data-go="s21"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-2 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Mua lại
                </button>
                <button
                  data-go="s20"
                  className="flex-1 rounded-xl border border-[#173B32] px-2 py-1.5 text-center font-semibold text-[#173B32] hover:bg-emerald-50"
                >
                  Đánh giá
                </button>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-2xl border border-[#E8EADC]/80 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#F4E3BA] bg-[#FAF2DC] p-1 text-[#9A731F]">
                    <svg className="h-8 w-8 text-[#9A731F]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10.5px] font-medium text-gray-500">10/09/2025</span>
                    </div>
                    <h2 className="mt-0.5 text-[13.5px] font-bold leading-tight text-[#173B32]">Premium Care · 1 tháng</h2>
                    <div className="mt-0.5 flex items-center space-x-2">
                      <span className="text-[13px] font-bold text-[#173B32]">299.000đ</span>
                      <span className="text-[10px] text-gray-400">Tự gia hạn: 10/10/2025</span>
                    </div>
                  </div>
                </div>
                <span
                  className="flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgb(187,219,206)', borderColor: 'rgb(146,194,174)', color: 'rgb(23,59,50)' }}
                >
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                  Đã thanh toán
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-end gap-2 border-t border-gray-100 pt-2 text-[11px]">
                <button
                  data-go="s31"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-3 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Xem chi tiết
                </button>
                <button
                  data-go="s32"
                  className="flex-1 rounded-xl border border-[#173B32] px-3 py-1.5 text-center font-semibold text-[#173B32] hover:bg-emerald-50"
                >
                  Quản lý gói
                </button>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-2xl border border-[#E8EADC]/80 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-[#F5F6EF]">
                    <img
                      src="/img/people/doctor-minh-anh.jpg"
                      alt="Tư vấn bác sĩ da liễu"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10.5px] font-medium text-gray-500">05/09/2025</span>
                    </div>
                    <h2 className="mt-0.5 text-[13.5px] font-bold leading-tight text-[#173B32]">Tư vấn bác sĩ da liễu</h2>
                    <div className="mt-0.5 flex items-center space-x-2">
                      <span className="text-[13px] font-bold text-[#173B32]">300.000đ</span>
                    </div>
                  </div>
                </div>
                <span
                  className="flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgb(187,219,206)', borderColor: 'rgb(146,194,174)', color: 'rgb(23,59,50)' }}
                >
                  <span className="material-symbols-outlined text-[12px]">check_circle</span>
                  Hoàn thành
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-end gap-2 border-t border-gray-100 pt-2 text-[11px]">
                <button
                  data-go="s27"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-3 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Xem chi tiết
                </button>
                <button
                  data-go="s25"
                  className="flex-1 rounded-xl border border-[#173B32] px-3 py-1.5 text-center font-semibold text-[#173B32] hover:bg-emerald-50"
                >
                  Đặt lại lịch
                </button>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-2xl border border-[#E8EADC]/80 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-[#F5F6EF] p-1">
                    <img src="/img/products/sunscreen.jpg" alt="Kem chống nắng quang phổ rộng" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10.5px] font-medium text-gray-500">#DH020920001</span>
                      <span className="text-[10px] text-gray-400">•</span>
                      <span className="text-[10.5px] text-gray-400">02/09/2025</span>
                    </div>
                    <h2 className="mt-0.5 text-[13.5px] font-bold leading-tight text-[#173B32]">Kem chống nắng quang phổ rộng</h2>
                    <div className="mt-0.5 flex items-center space-x-2">
                      <span className="text-[11px] text-gray-500">1 sản phẩm</span>
                      <span className="text-[13px] font-bold text-[#173B32]">615.000đ</span>
                    </div>
                  </div>
                </div>
                <span
                  className="flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgb(187,219,206)', borderColor: 'rgb(146,194,174)', color: 'rgb(23,59,50)' }}
                >
                  <span className="material-symbols-outlined text-[12px]">check</span>
                  Đã giao
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-end gap-2 border-t border-gray-100 pt-2 text-[11px]">
                <button
                  data-toast="Chi tiết đơn #DH020920001 (minh họa)"
                  className="flex-1 rounded-xl border border-[#D0DCD7] px-3 py-1.5 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Xem chi tiết
                </button>
                <button data-go="s21" className="flex-1 rounded-xl bg-[#173B32] px-3 py-1.5 text-center font-medium text-white shadow-sm">
                  Mua lại
                </button>
              </div>
            </article>
          </div>
        </main>
      </div>
    </Screen>
  )
}
