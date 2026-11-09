import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 21 · Giỏ hàng */
export default function S21Cart() {
  return (
    <Screen tab={3}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased">
        <SafeAreaTop />
        <nav className="relative z-20 flex items-center justify-between px-5 pb-2 pt-3">
          <button
            aria-label="Quay lại"
            data-back="s19"
            className="shadow-xs flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E8DD]/60 bg-white/80 text-[#173B32] transition-transform active:scale-95"
            type="button"
          >
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <div className="mb-0.5 flex h-6 w-6 items-center justify-center">
              <svg className="h-5 w-5 fill-[#357D64]" viewBox="0 0 32 32">
                <path d="M16 3C11.58 3 8 7.58 8 13.25C8 18.92 12.45 22.8 16 29C19.55 22.8 24 18.92 24 13.25C24 7.58 20.42 3 16 3ZM16 22.5C14.07 19.2 10.5 16.14 10.5 13.25C10.5 9.17 12.96 5.5 16 5.5C19.04 5.5 21.5 9.17 21.5 13.25C21.5 16.14 17.93 19.2 16 22.5Z" />
                <path d="M15 8C13 11 13 16 17 20" fill="none" stroke="#357D64" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
            <BrandLogo />
          </div>
          <div className="w-9" />
        </nav>
        <main className="no-scrollbar relative z-10 flex-1 space-y-4 overflow-y-auto px-4 pb-44 pt-1">
          <section className="flex items-center justify-between pt-1">
            <h1 className="flex items-center gap-1.5 text-[17px] font-bold text-[#173B32]">
              <span>Giỏ hàng của bạn</span>
              <span className="text-[13px] font-normal text-[#717D6F]">(3 sản phẩm)</span>
            </h1>
            <button
              data-dismiss="main"
              data-hide="article"
              data-toast="Đã xóa tất cả sản phẩm"
              className="flex items-center gap-1 text-[12px] text-[#717D6F] transition-colors hover:text-red-700"
              type="button"
            >
              <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="underline decoration-dotted">Xóa tất cả</span>
            </button>
          </section>
          <section className="space-y-2.5">
            <article className="shadow-xs flex items-center gap-2.5 rounded-2xl border border-[#E6E8DD]/70 bg-white p-2.5">
              <button
                data-toggle=""
                data-alt="w-5 h-5 rounded-md border border-neutral-300 bg-white flex items-center justify-center text-transparent shrink-0"
                className="shadow-xs flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#357D64] text-white"
                type="button"
              >
                <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neutral-100 bg-[#F5F5F7] p-1">
                <div className="relative flex h-12 w-8 flex-col items-center justify-end">
                  <div className="h-2 w-4 rounded-t-sm bg-blue-500" />
                  <div className="flex h-9 w-6 flex-col items-center justify-start rounded-b-md border border-blue-400 bg-white pt-1 shadow-inner">
                    <div className="mb-0.5 h-1.5 w-3.5 bg-blue-600" />
                    <div className="h-0.5 w-3 bg-neutral-300" />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-[12.5px] font-semibold leading-tight text-[#173B32]">La Roche-Posay Effaclar Purifying Gel</h2>
                <p className="mt-0.5 text-[11px] text-[#717D6F]">150ml</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#173B32]">355.000đ</span>
                  <div className="flex items-center gap-2">
                    <div
                      data-qty-group=""
                      className="flex items-center rounded-full border border-[#E6E8DD] bg-[#F7F8F2] px-2 py-0.5 text-xs font-semibold"
                    >
                      <button data-step="-1" className="px-1 text-sm leading-none text-neutral-500 hover:text-black" type="button">
                        −
                      </button>
                      <span data-qty="" className="mx-2 text-xs font-medium text-neutral-800">
                        1
                      </span>
                      <button data-step="1" className="px-1 text-sm leading-none text-neutral-500 hover:text-black" type="button">
                        +
                      </button>
                    </div>
                    <button
                      data-dismiss="article"
                      data-toast="Đã xóa sản phẩm khỏi giỏ hàng"
                      className="p-1 text-neutral-400 transition-colors hover:text-red-600"
                      type="button"
                    >
                      <svg className="h-4 w-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="shadow-xs flex items-center gap-2.5 rounded-2xl border border-[#E6E8DD]/70 bg-white p-2.5">
              <button
                data-toggle=""
                data-alt="w-5 h-5 rounded-md border border-neutral-300 bg-white flex items-center justify-center text-transparent shrink-0"
                className="shadow-xs flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#357D64] text-white"
                type="button"
              >
                <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neutral-100 bg-[#F5F5F7] p-1">
                <div className="relative flex h-12 w-7 flex-col items-center justify-center">
                  <div className="h-3 w-2.5 rounded-t-sm bg-neutral-400" />
                  <div className="h-1.5 w-3.5 bg-neutral-300" />
                  <div className="shadow-xs flex h-7 w-5 flex-col items-center justify-center rounded-b-md border border-amber-300/80 bg-amber-100">
                    <div className="h-3 w-3 border border-neutral-200 bg-white/90 text-center text-[5px] font-bold">10%</div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-[12.5px] font-semibold leading-tight text-[#173B32]">The Ordinary Niacinamide 10%</h2>
                <p className="mt-0.5 text-[11px] text-[#717D6F]">30ml</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#173B32]">298.000đ</span>
                  <div className="flex items-center gap-2">
                    <div
                      data-qty-group=""
                      className="flex items-center rounded-full border border-[#E6E8DD] bg-[#F7F8F2] px-2 py-0.5 text-xs font-semibold"
                    >
                      <button data-step="-1" className="px-1 text-sm leading-none text-neutral-500 hover:text-black" type="button">
                        −
                      </button>
                      <span data-qty="" className="mx-2 text-xs font-medium text-neutral-800">
                        1
                      </span>
                      <button data-step="1" className="px-1 text-sm leading-none text-neutral-500 hover:text-black" type="button">
                        +
                      </button>
                    </div>
                    <button
                      data-dismiss="article"
                      data-toast="Đã xóa sản phẩm khỏi giỏ hàng"
                      className="p-1 text-neutral-400 transition-colors hover:text-red-600"
                      type="button"
                    >
                      <svg className="h-4 w-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="shadow-xs flex items-center gap-2.5 rounded-2xl border border-[#E6E8DD]/70 bg-white p-2.5">
              <button
                data-toggle=""
                data-alt="w-5 h-5 rounded-md border border-neutral-300 bg-white flex items-center justify-center text-transparent shrink-0"
                className="shadow-xs flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#357D64] text-white"
                type="button"
              >
                <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neutral-100 bg-[#F5F5F7] p-1">
                <div className="relative flex h-10 w-9 flex-col items-center justify-center">
                  <div className="h-2.5 w-8 rounded-t-md border border-neutral-300 bg-white" />
                  <div className="shadow-xs flex h-6 w-8 items-center justify-center rounded-b-md border border-blue-400 bg-white">
                    <span className="text-[7px] font-bold tracking-tighter text-blue-600">CeraVe</span>
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-[12.5px] font-semibold leading-tight text-[#173B32]">CeraVe Moisturizing Cream</h2>
                <p className="mt-0.5 text-[11px] text-[#717D6F]">340g</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#173B32]">430.000đ</span>
                  <div className="flex items-center gap-2">
                    <div
                      data-qty-group=""
                      className="flex items-center rounded-full border border-[#E6E8DD] bg-[#F7F8F2] px-2 py-0.5 text-xs font-semibold"
                    >
                      <button data-step="-1" className="px-1 text-sm leading-none text-neutral-500 hover:text-black" type="button">
                        −
                      </button>
                      <span data-qty="" className="mx-2 text-xs font-medium text-neutral-800">
                        1
                      </span>
                      <button data-step="1" className="px-1 text-sm leading-none text-neutral-500 hover:text-black" type="button">
                        +
                      </button>
                    </div>
                    <button
                      data-dismiss="article"
                      data-toast="Đã xóa sản phẩm khỏi giỏ hàng"
                      className="p-1 text-neutral-400 transition-colors hover:text-red-600"
                      type="button"
                    >
                      <svg className="h-4 w-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="pt-1">
            <label className="mb-1.5 block text-[13px] font-semibold text-[#173B32]" htmlFor="coupon-input">
              Mã ưu đãi
            </label>
            <div className="flex items-center gap-2">
              <div className="shadow-2xs flex flex-1 items-center rounded-xl border border-[#E6E8DD] bg-white px-3 py-2">
                <svg className="mr-2 h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.5] text-[#717D6F]" viewBox="0 0 24 24">
                  <path
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  className="w-full border-none bg-transparent p-0 text-xs text-[#173B32] placeholder-neutral-400 focus:outline-none focus:ring-0"
                  id="coupon-input"
                  placeholder="Nhập mã giảm giá"
                  type="text"
                />
              </div>
              <button
                data-toast="Mã ưu đãi không hợp lệ (minh họa)"
                className="shrink-0 rounded-xl bg-[#DFE8E4] px-4 py-2 text-xs font-semibold text-[#717D6F] transition-colors hover:bg-[#357D64] hover:text-white"
                type="button"
              >
                Áp dụng
              </button>
            </div>
          </section>
          <section className="pt-1">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-[#173B32]">Địa chỉ nhận hàng</span>
            </div>
            <div className="flex items-start gap-2.5 rounded-2xl border border-[#E6E8DD]/70 bg-white p-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3F4EC] text-[#357D64]">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1 pr-1">
                <p className="truncate text-xs font-bold text-[#173B32]">
                  Nguyễn Minh Anh <span className="font-normal text-[#717D6F]">| 0901 234 567</span>
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-[#717D6F]">123 Đường ABC, Quận Cầu Giấy, Hà Nội</p>
              </div>
              <button
                data-go="s49"
                className="flex items-center self-center whitespace-nowrap text-[12px] font-medium text-[#357D64] hover:opacity-80"
                type="button"
              >
                Thay đổi
                <svg className="ml-0.5 h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </section>
          <section className="pt-1">
            <span className="mb-1.5 block text-[13px] font-semibold text-[#173B32]">Phương thức thanh toán</span>
            <div
              data-pills=""
              className="shadow-2xs divide-y divide-[#E6E8DD]/50 overflow-hidden rounded-2xl border border-[#E6E8DD]/70 bg-white"
            >
              <label data-on="" className="flex cursor-pointer items-center gap-3 px-3.5 py-3 transition-colors hover:bg-neutral-50/60">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#357D64]">
                  <svg className="h-2.5 w-2.5 fill-none stroke-current stroke-[3] text-white" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-[#357D64]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                    <path
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="flex-1 text-xs font-medium text-[#173B32]">Thanh toán khi nhận hàng (COD)</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 px-3.5 py-3 transition-colors hover:bg-neutral-50/60">
                <div className="h-4 w-4 shrink-0 rounded-full border border-neutral-300" />
                <div className="text-[#717D6F]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                    <path
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="flex-1 text-xs font-normal text-[#173B32]">Thẻ ngân hàng / Ví điện tử</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 px-3.5 py-3 transition-colors hover:bg-neutral-50/60">
                <div className="h-4 w-4 shrink-0 rounded-full border border-neutral-300" />
                <div className="flex items-center gap-0.5">
                  <div className="h-2.5 w-2.5 rotate-12 rounded-sm bg-red-600" />
                  <div className="-ml-1 h-2.5 w-2.5 -rotate-12 rounded-sm bg-blue-600" />
                </div>
                <span className="flex-1 text-xs font-normal text-[#173B32]">Thanh toán qua VNPay</span>
              </label>
            </div>
          </section>
          <section className="space-y-1.5 pb-2 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#717D6F]">Tạm tính (3 sản phẩm)</span>
              <span className="font-bold text-[#173B32]">1.083.000đ</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#717D6F]">Phí vận chuyển (dự kiến)</span>
              <span className="font-medium text-[#173B32]">30.000đ</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#717D6F]">Giảm giá</span>
              <span className="font-medium text-[#173B32]">- 0đ</span>
            </div>
            <div className="mt-2 flex items-baseline justify-between border-t border-[#E6E8DD]/60 pt-2">
              <span className="font-serif text-[17px] font-bold text-[#173B32]">Tổng cộng</span>
              <span className="font-sans text-[20px] font-bold tracking-tight text-[#357D64]">1.113.000đ</span>
            </div>
          </section>
        </main>
        <footer
          className="absolute left-0 right-0 z-30 bg-gradient-to-t from-[#F7F8F2] via-[#F7F8F2]/95 to-transparent px-5 pb-1 pt-3"
          style={{ bottom: '78px' }}
        >
          <button
            data-toast="Đặt hàng thành công! Đơn hàng đang được xử lý."
            data-go="s51"
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#357D64] text-[14px] font-semibold text-white shadow-lg transition-all duration-150 hover:bg-[#173B32] active:scale-[0.98]"
            type="button"
          >
            <span>Xác nhận đặt hàng</span>
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </footer>
      </div>
    </Screen>
  )
}
