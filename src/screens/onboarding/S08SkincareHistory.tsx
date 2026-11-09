import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 08 · Lịch sử chăm sóc da */
export default function S08SkincareHistory() {
  return (
    <Screen>
      <div className="relative flex h-[852px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased">
        <div
          className="pointer-events-none absolute -right-12 -top-12 z-0 h-48 w-48"
          style={{
            backgroundImage: 'radial-gradient(circle at 100% 0%,rgba(122,173,155,.18) 0%,rgba(198,219,210,.08) 45%,transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-10 z-0 h-44 w-44"
          style={{
            backgroundImage: 'radial-gradient(circle at 0% 100%,rgba(122,173,155,.15) 0%,rgba(198,219,210,.05) 50%,transparent 70%)',
          }}
        />
        <svg
          className="pointer-events-none absolute right-0 top-0 z-0 h-36 w-36 text-[#5D9B85] opacity-35"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M100 0 C 80 15 65 35 60 60 C 55 40 45 25 20 15 C 50 15 75 5 100 0 Z" />
          <path d="M100 20 C 85 30 75 45 72 70 C 68 55 58 45 40 38 C 65 38 85 30 100 20 Z" opacity="0.6" />
          <path d="M85 0 C 70 20 50 35 48 55 C 52 40 60 25 85 0 Z" opacity="0.4" />
        </svg>
        <StatusBar />
        <main className="no-scrollbar relative z-10 flex-1 overflow-y-auto px-4 pb-24 pt-2">
          <nav className="relative flex items-center justify-center pb-2 pt-1">
            <button
              aria-label="Quay lại"
              data-back="s07"
              className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E4DE] bg-white/80 text-[#173B32] shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <BrandLogo variant="stacked" />
            </div>
          </nav>
          <section className="mb-4 mt-3 px-2 text-center">
            <h1 className="text-[20px] font-bold leading-tight tracking-tight text-[#173B32]">Lịch sử chăm sóc da của bạn</h1>
            <p className="mx-auto mt-1 max-w-[270px] text-[12px] leading-snug text-[#759389]">
              Hãy chia sẻ để chúng tôi hiểu rõ hơn về hành trình chăm sóc da của bạn.
            </p>
          </section>
          <div className="space-y-3.5 text-[12.5px]">
            <article className="rounded-[18px] border border-[#E3ECE8]/80 bg-white/90 p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <div className="mb-2.5 flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-semibold text-white">
                  1
                </span>
                <h2 className="text-[13px] font-semibold leading-snug text-[#173B32]">Bạn đã từng điều trị mụn trước đây chưa?</h2>
              </div>
              <div data-pills="" className="grid grid-cols-3 gap-1.5 rounded-full border border-[#D6E4DE] bg-neutral-100/60 p-0.5">
                <button
                  className="rounded-full px-2 py-1.5 text-center text-[11.5px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Chưa từng
                </button>
                <button
                  data-on=""
                  className="rounded-full bg-[#357D64] px-2 py-1.5 text-center text-[11.5px] font-semibold text-white shadow-sm"
                  type="button"
                >
                  Đã từng
                </button>
                <button
                  className="rounded-full px-2 py-1.5 text-center text-[11.5px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Đang điều trị
                </button>
              </div>
              <div className="mt-3.5 border-t border-dashed border-[#E3ECE8] pt-2">
                <div className="mb-2 flex items-center justify-between text-[12px] font-medium text-[#173B32]">
                  <span>Phương pháp điều trị</span>
                  <svg className="h-4 w-4 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-medium bg-white text-neutral-600 border border-[#D6E4DE]"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#357D64]/40 bg-[#DDEBE5] px-2.5 py-1 text-[11px] font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg className="h-3.5 w-3.5 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Chăm sóc tại nhà
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#DDEBE5] text-[#357D64] border border-[#357D64]/40"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                    type="button"
                  >
                    <span className="h-3 w-3 rounded-full border border-neutral-300" />
                    Điều trị tại phòng khám
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#DDEBE5] text-[#357D64] border border-[#357D64]/40"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                    type="button"
                  >
                    <span className="h-3 w-3 rounded-full border border-neutral-300" />
                    Peel da, laser, lăn kim, phi kim
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#DDEBE5] text-[#357D64] border border-[#357D64]/40"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                    type="button"
                  >
                    <span className="h-3 w-3 rounded-full border border-neutral-300" />
                    Khác
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <label className="mb-1 block text-[11.5px] font-medium text-[#173B32]">Lần gần nhất thực hiện khi nào?</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3">
                    <svg className="h-4 w-4 text-[#759389]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                  <input
                    className="w-full cursor-pointer rounded-xl border border-[#E3ECE8] bg-[#F7F8F2] py-2 pl-9 pr-8 text-[11.5px] text-neutral-600 placeholder:text-neutral-400 focus:border-[#357D64] focus:ring-1 focus:ring-[#357D64]"
                    placeholder="Chọn thời gian (tháng/năm)"
                    readOnly
                    type="text"
                  />
                  <span className="pointer-events-none absolute right-3">
                    <svg className="h-3.5 w-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
            <article className="rounded-[18px] border border-[#E3ECE8]/80 bg-white/90 p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <div className="mb-2.5 flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-semibold text-white">
                  2
                </span>
                <h2 className="text-[13px] font-semibold leading-snug text-[#173B32]">
                  Bạn đã từng hoặc đang sử dụng thuốc điều trị mụn không?
                </h2>
              </div>
              <div data-pills="" className="grid grid-cols-4 gap-1 rounded-full border border-[#D6E4DE] bg-neutral-100/60 p-0.5">
                <button
                  className="truncate rounded-full px-1 py-1 text-center text-[11px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Chưa từng
                </button>
                <button
                  data-on=""
                  className="truncate rounded-full bg-[#357D64] px-1 py-1 text-center text-[11px] font-semibold text-white shadow-sm"
                  type="button"
                >
                  Đã từng
                </button>
                <button
                  className="truncate rounded-full px-1 py-1 text-center text-[11px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Đang sử dụng
                </button>
                <button
                  className="truncate rounded-full px-1 py-1 text-center text-[11px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Không nhớ
                </button>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-dashed border-[#E3ECE8] pt-2">
                <div>
                  <label className="mb-1 block text-[11px] font-medium text-[#173B32]">Tên thuốc đã sử dụng</label>
                  <textarea
                    className="w-full resize-none rounded-xl border border-[#E3ECE8] bg-[#F7F8F2] p-2.5 text-[11px] text-[#173B32] placeholder:italic placeholder:text-neutral-400 focus:border-[#357D64] focus:ring-1 focus:ring-[#357D64]"
                    placeholder="Ví dụ: Isotretinoin, Tretinoin..."
                    rows={3}
                  />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#173B32]">
                      Chụp ảnh bao bì <span className="font-normal text-neutral-400">(nếu có)</span>
                    </span>
                  </div>
                  <button
                    data-toast="Chụp ảnh bao bì thuốc (minh họa)"
                    className="flex h-[68px] w-full flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-[#D6E4DE] bg-[#F7F8F2] text-[#759389] transition-colors hover:border-[#357D64] hover:text-[#357D64]"
                    type="button"
                  >
                    <svg className="h-5 w-5 text-[#357D64]/80" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] font-medium text-neutral-600">Chụp ảnh bao bì</span>
                  </button>
                </div>
              </div>
            </article>
            <article className="rounded-[18px] border border-[#E3ECE8]/80 bg-white/90 p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <div className="mb-2.5 flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-semibold text-white">
                  3
                </span>
                <h2 className="text-[13px] font-semibold leading-snug text-[#173B32]">
                  Trước đây da bạn đã từng kích ứng với mỹ phẩm hoặc thuốc chưa?
                </h2>
              </div>
              <div data-pills="" className="grid grid-cols-3 gap-1.5 rounded-full border border-[#D6E4DE] bg-neutral-100/60 p-0.5">
                <button
                  className="rounded-full px-2 py-1.5 text-center text-[11.5px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Chưa từng
                </button>
                <button
                  data-on=""
                  className="rounded-full bg-[#357D64] px-2 py-1.5 text-center text-[11.5px] font-semibold text-white shadow-sm"
                  type="button"
                >
                  Đã từng
                </button>
                <button
                  className="rounded-full px-2 py-1.5 text-center text-[11.5px] font-medium text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Không chắc chắn
                </button>
              </div>
              <div className="mt-3 border-t border-dashed border-[#E3ECE8] pt-2">
                <label className="mb-1 block text-[11.5px] font-medium text-[#173B32]">Mô tả rections (triệu chứng)</label>
                <input
                  className="w-full rounded-xl border border-[#E3ECE8] bg-[#F7F8F2] px-3 py-2 text-[11.5px] text-[#173B32] placeholder:italic placeholder:text-neutral-400 focus:border-[#357D64] focus:ring-1 focus:ring-[#357D64]"
                  placeholder="Mô tả phản ứng của bạn..."
                  type="text"
                />
              </div>
              <div className="mt-2.5">
                <label className="mb-1.5 block text-[11px] font-medium text-[#173B32]">
                  Triệu chứng gặp phải <span className="font-normal text-[#759389]">(có thể chọn nhiều)</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[11px] font-medium bg-white text-neutral-600 border border-[#D6E4DE] hover:bg-neutral-50"
                    className="inline-flex items-center gap-1 rounded-full bg-[#357D64] px-2.5 py-1 text-[11px] font-medium text-white"
                    type="button"
                  >
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Đỏ rát
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[11px] font-medium bg-white text-neutral-600 border border-[#D6E4DE] hover:bg-neutral-50"
                    className="inline-flex items-center gap-1 rounded-full bg-[#357D64] px-2.5 py-1 text-[11px] font-medium text-white"
                    type="button"
                  >
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Ngứa
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#357D64] text-white"
                    className="rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:bg-neutral-50"
                    type="button"
                  >
                    Nổi mẩn
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#357D64] text-white"
                    className="rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:bg-neutral-50"
                    type="button"
                  >
                    Bong tróc
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#357D64] text-white"
                    className="rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:bg-neutral-50"
                    type="button"
                  >
                    Sưng
                  </button>
                  <button
                    data-toggle=""
                    data-alt="inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#357D64] text-white"
                    className="rounded-full border border-[#D6E4DE] bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:bg-neutral-50"
                    type="button"
                  >
                    Khác
                  </button>
                </div>
              </div>
            </article>
            <article className="rounded-[18px] border border-[#E3ECE8]/80 bg-white/90 p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <div className="mb-2.5 flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#357D64] text-[11px] font-semibold text-white">
                  4
                </span>
                <h2 className="text-[13px] font-semibold leading-snug text-[#173B32]">
                  Bạn duy trì quy trình chăm sóc da thường xuyên ở mức nào?
                </h2>
              </div>
              <div data-pills="" className="grid grid-cols-4 gap-1 rounded-[14px] border border-[#D6E4DE] bg-neutral-100/60 p-0.5">
                <button
                  className="rounded-[10px] px-1 py-2 text-center text-[10.5px] font-medium leading-tight text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Chưa có
                  <br />
                  quy trình cố định
                </button>
                <button
                  className="rounded-[10px] px-1 py-2 text-center text-[10.5px] font-medium leading-tight text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Thỉnh thoảng
                </button>
                <button
                  data-on=""
                  className="rounded-[10px] bg-[#357D64] px-1 py-2 text-center text-[10.5px] font-semibold leading-tight text-white shadow-sm"
                  type="button"
                >
                  Hầu hết
                  <br />
                  các ngày
                </button>
                <button
                  className="rounded-[10px] px-1 py-2 text-center text-[10.5px] font-medium leading-tight text-[#759389] transition-colors hover:text-[#173B32]"
                  type="button"
                >
                  Đều đặn
                  <br />
                  sáng và tối
                </button>
              </div>
            </article>
          </div>
        </main>
        <footer className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#F7F8F2] via-[#F7F8F2]/95 to-transparent px-4 pb-3 pt-3">
          <div className="mx-auto flex max-w-[360px] items-center gap-2.5">
            <button
              data-back="s07"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#357D64] bg-white/60 px-4 py-2.5 text-[13px] font-medium text-[#357D64] transition-all active:scale-95"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Quay lại
            </button>
            <button
              data-go="s09"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#357D64] px-4 py-2.5 text-[13px] font-medium text-white shadow-[0_8px_24px_rgba(53,125,100,0.08)] transition-all hover:bg-[#357D64] active:scale-95"
              type="button"
            >
              Tiếp tục
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mt-3 flex flex-col items-center">
            <div className="mb-0.5 mt-1.5 h-1 w-32 rounded-full bg-black/80" />
          </div>
        </footer>
      </div>
    </Screen>
  )
}
