import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 16 · Quy trình chăm sóc của tôi */
export default function S16MyRoutine() {
  return (
    <Screen tab={2}>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans text-[#173B32] antialiased"
        style={{
          paddingBottom: '78px',
        }}
      >
        <header className="z-30 w-full shrink-0">
          <SafeAreaTop />
          <div className="relative mt-1 flex items-center justify-between px-5 pb-1">
            <button
              aria-label="Quay lại"
              data-tab="s10"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8EADF] bg-white/90 text-[#357D64] shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)] transition-all hover:bg-white active:scale-95"
            >
              <svg className="h-4 w-4 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center justify-center">
              <BrandLogo />
            </div>
            <div className="h-9 w-9 opacity-0" />
          </div>
        </header>
        <div className="no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-4 pb-4 pt-1">
          <section className="px-2 pt-1 text-center">
            <h1 className="font-serif text-[22px] font-semibold leading-snug tracking-tight text-[#173B32]">Quy trình chăm sóc của tôi</h1>
            <p className="mx-auto mt-1 max-w-[280px] text-[11.5px] font-normal leading-relaxed text-[#5D8074]">
              Theo dõi tiến trình chăm sóc da mỗi ngày để duy trì làn da khỏe mạnh hơn.
            </p>
          </section>
          <section className="rounded-[20px] border border-[#E7E9DE] bg-white p-3.5 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9E5E0] bg-[#E9F1EE]">
                <svg className="h-6 w-6 text-[#357D64]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A9.49 9.49 0 0 0 17 8z" />
                  <path d="M17 8C19 2 12 1 7 4c-3.1 1.86-4.5 4.8-4.7 7.7 2.2-2.1 5.3-3.7 9.7-3.7h5z" opacity="0.6" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="truncate pr-1 text-[13px] font-bold text-[#173B32]">Routine cơ bản cho da hỗn hợp</h2>
                  <button data-go="s19" className="shrink-0 text-[11px] font-medium text-[#357D64] hover:underline">
                    Chỉnh sửa
                  </button>
                </div>
                <div className="mt-1 flex items-center space-x-1.5 text-[11px] text-[#6B8B80]">
                  <svg className="h-3.5 w-3.5 text-[#5B8577]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span>
                    Bắt đầu từ <strong className="font-medium text-[#357D64]">15 tháng 3, 2026</strong>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-[20px] border border-[#E7E9DE] bg-white p-3.5 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]">
            <h3 className="mb-2.5 text-[12px] font-semibold text-[#357D64]">Tiến độ hôm nay</h3>
            <div className="flex items-center space-x-3.5">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <svg className="h-16 w-16" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" fill="none" r="26" stroke="#E8ECEA" strokeWidth="5" />
                  <circle
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    cx="32"
                    cy="32"
                    fill="none"
                    r="26"
                    stroke="#357D64"
                    strokeDasharray="163.36"
                    strokeDashoffset="122.5"
                    strokeLinecap="round"
                    strokeWidth="5.5"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-[#173B32]">2/8</span>
                </div>
              </div>
              <div className="flex-1 space-y-1.5">
                <h4 className="text-[12.5px] font-bold text-[#173B32]">Đã hoàn thành 2/8 bước</h4>
                <div className="flex items-start space-x-1.5 rounded-xl border border-[#E1E9E6] bg-[#F7F8F2] px-2.5 py-1.5">
                  <span className="mt-0.5 shrink-0 text-xs">🍃</span>
                  <p className="text-[10px] font-medium leading-tight text-[#50786A]">Cố gắng hoàn thành đầy đủ quy trình hôm nay nhé!</p>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-2 gap-2.5">
            <article className="flex flex-col justify-between rounded-[20px] border border-[#E7E9DE] bg-white p-3 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]">
              <div>
                <div className="mb-0.5 flex items-center space-x-1.5">
                  <span className="text-base text-amber-500">☀️</span>
                  <h3 className="text-[11.5px] font-bold leading-tight text-[#357D64]">Chăm sóc buổi sáng</h3>
                </div>
                <p className="mb-3 pl-6 text-[10.5px] font-medium text-[#729086]">0/4 bước</p>
              </div>
              <button
                data-go="s17"
                className="flex h-8 w-full items-center justify-center space-x-1 rounded-full bg-[#357D64] text-[11px] font-medium text-white shadow-sm transition-all hover:bg-[#357D64] active:scale-95"
              >
                <span>Bắt đầu ngay</span>
                <svg className="h-3 w-3 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
            <article className="flex flex-col justify-between rounded-[20px] border border-[#E7E9DE] bg-white p-3 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]">
              <div>
                <div className="mb-0.5 flex items-center space-x-1.5">
                  <span className="text-base text-indigo-400">🌙</span>
                  <h3 className="text-[11.5px] font-bold leading-tight text-[#357D64]">Chăm sóc buổi tối</h3>
                </div>
                <p className="mb-3 pl-6 text-[10.5px] font-medium text-[#729086]">2/4 bước</p>
              </div>
              <button
                data-go="s18"
                className="flex h-8 w-full items-center justify-center space-x-1 rounded-full border border-[#CBD8D3] bg-[#F7F8F2] text-[11px] font-semibold text-[#357D64] transition-all hover:bg-[#F1F6F4] active:scale-95"
              >
                <span>Tiếp tục</span>
                <svg className="h-3 w-3 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          </section>
          <section className="space-y-2">
            <div className="flex items-center justify-between px-0.5">
              <h3 className="text-[12.5px] font-bold text-[#173B32]">Sản phẩm trong quy trình (4)</h3>
              <button data-go="s19" className="flex items-center space-x-0.5 text-[11px] font-medium text-[#538573] hover:underline">
                <span>Xem tất cả</span>
                <svg className="h-3 w-3 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div
                data-go="s20"
                className="flex flex-col items-center rounded-2xl border border-[#E7E9DE] bg-white p-1.5 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]"
              >
                <div className="flex h-14 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F7F8F2] p-1">
                  <div className="flex h-11 w-5 flex-col items-center justify-between rounded-b-md rounded-t-sm border border-[#D5D8D4] bg-white py-1 shadow-inner">
                    <div className="h-1 w-3 rounded-full bg-[#1A73E8]" />
                    <div className="h-0.5 w-2.5 bg-gray-300" />
                    <div className="h-1.5 w-3.5 bg-[#4F88D0]" />
                  </div>
                </div>
                <p className="mt-1 line-clamp-2 h-5 text-center text-[9px] font-semibold leading-tight text-[#357D64]">
                  La Roche-Posay Effaclar Gel
                </p>
              </div>
              <div
                data-go="s20"
                className="flex flex-col items-center rounded-2xl border border-[#E7E9DE] bg-white p-1.5 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]"
              >
                <div className="flex h-14 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F7F8F2] p-1">
                  <div className="flex h-11 w-5 flex-col items-center">
                    <div className="h-2.5 w-2 rounded-t-md border border-gray-300 bg-white" />
                    <div className="h-1.5 w-3 bg-gray-400" />
                    <div className="flex h-7 w-5 items-center justify-center rounded-b-md border border-[#173B32] bg-[#357D64]">
                      <div className="h-3 w-3 bg-white/80" />
                    </div>
                  </div>
                </div>
                <p className="mt-1 line-clamp-2 h-5 text-center text-[9px] font-semibold leading-tight text-[#357D64]">
                  The Ordinary Niacinamide 10%
                </p>
              </div>
              <div
                data-go="s20"
                className="flex flex-col items-center rounded-2xl border border-[#E7E9DE] bg-white p-1.5 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]"
              >
                <div className="flex h-14 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F7F8F2] p-1">
                  <div className="shadow-xs flex h-8 w-8 flex-col items-center justify-between rounded-sm border border-[#CDD5D2] bg-white p-1">
                    <div className="h-1 w-full bg-[#00529B]" />
                    <span className="text-[5.5px] font-extrabold leading-none text-[#00529B]">CeraVe</span>
                    <div className="h-0.5 w-4 bg-gray-300" />
                  </div>
                </div>
                <p className="mt-1 line-clamp-2 h-5 text-center text-[9px] font-semibold leading-tight text-[#357D64]">
                  CeraVe Moisturizing Cream
                </p>
              </div>
              <div
                data-go="s20"
                className="flex flex-col items-center rounded-2xl border border-[#E7E9DE] bg-white p-1.5 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]"
              >
                <div className="flex h-14 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F7F8F2] p-1">
                  <div className="shadow-xs flex h-10 w-5 flex-col items-center justify-between rounded-b-md rounded-t-full border border-[#C5A65A] bg-[#E0C075] py-1">
                    <div className="h-2 w-2.5 rounded-full bg-[#F5E6BF]" />
                    <div className="h-2 w-3 bg-[#2D738A]/60" />
                  </div>
                </div>
                <p className="mt-1 line-clamp-2 h-5 text-center text-[9px] font-semibold leading-tight text-[#357D64]">
                  Anessa Perfect UV Sunscreen
                </p>
              </div>
            </div>
          </section>
          <section
            data-go="s11"
            className="flex items-center justify-between rounded-[20px] border border-[#E7E9DE] bg-white p-3 shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)]"
          >
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9E5E0] bg-[#E9F1EE] text-[#357D64]">
                <svg className="h-5 w-5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-[#173B32]">Lịch chụp ảnh da tiếp theo</h4>
                <div className="text-[10.5px] text-[#557D6F]">
                  <span className="font-semibold text-[#357D64]">Còn 3 ngày nữa</span>
                  <span className="ml-1 text-[#7E998F]">· Dự kiến: 20 tháng 3, 2026</span>
                </div>
              </div>
            </div>
            <button aria-label="Xem chi tiết lịch chụp ảnh" className="p-1 text-[#709488] hover:text-[#357D64]">
              <svg className="h-4 w-4 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </section>
        </div>
        <footer className="z-20 w-full shrink-0 space-y-2 border-t border-[#EAECE0] bg-[#F7F8F2]/95 px-4 pb-2 pt-2 backdrop-blur-sm">
          <button
            data-go="s17"
            className="flex h-[46px] w-full items-center justify-center space-x-2 rounded-full bg-[#357D64] text-[13.5px] font-semibold text-white shadow-md transition-all hover:bg-[#357D64] active:scale-[0.98]"
          >
            <span>Bắt đầu chăm sóc</span>
            <svg className="h-4 w-4 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              data-tab="s19"
              className="flex h-9 items-center justify-center space-x-1.5 rounded-full border border-[#D2DCD8] bg-white text-[11.5px] font-medium text-[#357D64] shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)] transition-all hover:bg-[#F7F8F2] active:scale-95"
            >
              <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Chỉnh sửa sản phẩm</span>
            </button>
            <button
              data-go="s22"
              className="flex h-9 items-center justify-center space-x-1.5 rounded-full border border-[#D2DCD8] bg-white text-[11.5px] font-medium text-[#357D64] shadow-[0_4px_18px_-2px_rgba(23,59,50,0.04),0_2px_6px_-1px_rgba(23,59,50,0.02)] transition-all hover:bg-[#F7F8F2] active:scale-95"
            >
              <svg className="h-3.5 w-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Xem lịch sử</span>
            </button>
          </div>
        </footer>
      </div>
    </Screen>
  )
}
