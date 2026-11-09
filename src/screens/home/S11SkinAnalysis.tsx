import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 11 · Phân tích làn da */
export default function S11SkinAnalysis() {
  return (
    <Screen tab={0}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <div className="no-scrollbar relative flex-1 overflow-y-auto px-5 pb-24 pt-2">
          <div className="relative mb-2 mt-1 flex items-center justify-between">
            <button
              data-back="s10"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DFEAE5] bg-white/80 text-stone-700 shadow-sm transition-all hover:bg-white active:scale-95"
            >
              <svg className="h-4 w-4 stroke-current stroke-[2.2]" fill="none" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center">
              <svg className="h-6 w-6 text-[#467162]" fill="none" viewBox="0 0 32 32">
                <path
                  d="M16 4C11 10 10 17 15 22C19 26 24 24 26 19C28 13 22 7 16 4Z"
                  stroke="#467162"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path d="M16 28C21 22 22 15 17 10C13 6 8 8 6 13C4 19 10 25 16 28Z" fill="#568B78" opacity="0.75" />
              </svg>
              <BrandLogo className="mt-0.5" />
            </div>
            <div className="w-8" />
          </div>
          <div className="mb-5 mt-3 text-center">
            <h1 className="font-serif text-[22px] font-bold tracking-tight text-[#173B32]">Phân tích làn da</h1>
            <p className="mt-1 text-[12px] leading-snug text-[#6D8C81]">Theo dõi tình trạng da của bạn qua công nghệ AI</p>
          </div>
          <section className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-[14px] font-bold text-[#173B32]">Kết quả gần nhất</h2>
              <span className="text-[12px] font-medium text-[#6D8C81]">10/10/2024</span>
            </div>
            <div className="rounded-[20px] border border-[#DFEAE5] bg-white p-3 shadow-sm">
              <div className="flex gap-3">
                <img
                  src="/img/skin/acne-cheek-4.jpg"
                  alt="Ảnh phân tích da"
                  className="h-[106px] w-[96px] shrink-0 rounded-[14px] border border-black/5 object-cover"
                />
                <div className="flex flex-1 flex-col justify-between py-0.5">
                  <div>
                    <div className="inline-flex items-center gap-1 rounded-full bg-[#FDF1E6] px-2 py-0.5 text-[11px] font-semibold text-[#B96316]">
                      <span className="text-[10px]">👑</span>
                      <span>Có dấu hiệu mụn nhẹ</span>
                    </div>
                    <p className="mt-2 text-[11.5px] leading-[1.38] text-stone-600">
                      Da có một số nốt mụn viêm nhẹ, đồng thời lỗ chân lông hơi to vùng má.
                    </p>
                  </div>
                  <button
                    data-go="s13"
                    className="mt-2.5 flex w-full items-center justify-center gap-1 rounded-full border border-[#467162]/50 px-3 py-1.5 text-[11px] font-semibold text-[#467162] transition-colors hover:bg-[#EDF4F1]"
                  >
                    <span>Xem chi tiết kết quả</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-4 grid grid-cols-3 gap-2.5">
            <button
              data-go="s13"
              className="flex flex-col items-center rounded-[16px] border border-[#DFEAE5] bg-white px-1.5 py-3 text-center shadow-sm transition-all hover:border-[#467162]/40 active:scale-[0.98]"
            >
              <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full text-[#467162]">
                <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 7V5a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2m-10 0H5a2 2 0 01-2-2v-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect height="8" rx="1.5" width="8" x="8" y="8" />
                </svg>
              </div>
              <span className="text-[11px] font-medium leading-tight text-stone-800">
                Xem kết quả
                <br />
                gần nhất
              </span>
            </button>
            <button
              data-go="s22"
              className="flex flex-col items-center rounded-[16px] border border-[#DFEAE5] bg-white px-1.5 py-3 text-center shadow-sm transition-all hover:border-[#467162]/40 active:scale-[0.98]"
            >
              <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full text-[#467162]">
                <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-medium leading-tight text-stone-800">
                Theo dõi
                <br />
                tiến triển
              </span>
            </button>
            <button
              data-go="s22"
              className="flex flex-col items-center rounded-[16px] border border-[#DFEAE5] bg-white px-1.5 py-3 text-center shadow-sm transition-all hover:border-[#467162]/40 active:scale-[0.98]"
            >
              <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full text-[#467162]">
                <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-medium leading-tight text-stone-800">
                Lịch sử
                <br />
                chụp da
              </span>
            </button>
          </section>
          <section className="mb-5">
            <button
              data-go="s06"
              className="flex h-[48px] w-full items-center justify-center space-x-2 rounded-full bg-[#467162] font-medium text-white shadow-md shadow-[#467162]/25 transition-all hover:bg-[#357D64] active:scale-[0.99]"
            >
              <svg className="h-5 w-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[14px] font-semibold tracking-wide">Phân tích da mới</span>
              <span className="text-sm">→</span>
            </button>
          </section>
          <section>
            <div className="mb-2.5 flex items-center justify-between">
              <h2 className="text-[14px] font-bold text-[#173B32]">Lịch sử phân tích</h2>
              <a data-go="s22" className="flex items-center text-[12px] font-medium text-[#6D8C81] hover:text-[#467162]" href="#">
                <span>Xem tất cả</span>
                <span className="ml-0.5 text-[10px]">›</span>
              </a>
            </div>
            <div className="space-y-2.5 divide-y divide-gray-100 rounded-[20px] border border-[#DFEAE5] bg-white p-2.5 shadow-sm">
              <div data-go="s13" className="flex items-center justify-between pt-1">
                <div className="flex items-center space-x-2.5">
                  <img
                    src="/img/skin/acne-cheek-4.jpg"
                    alt="Ảnh phân tích da"
                    className="h-10 w-10 shrink-0 rounded-[10px] border border-black/5 object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-semibold leading-tight text-stone-800">10/10/2024</p>
                    <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#FDF1E6] px-1.5 py-0.5 text-[10px] font-semibold text-[#B96316]">
                      <span>👑</span>
                      <span>Có dấu hiệu mụn nhẹ</span>
                    </div>
                  </div>
                </div>
                <svg className="h-4 w-4 shrink-0 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div data-go="s13" className="flex items-center justify-between pt-2.5">
                <div className="flex items-center space-x-2.5">
                  <img
                    src="/img/skin/acne-cheek-4.jpg"
                    alt="Ảnh phân tích da"
                    className="h-10 w-10 shrink-0 rounded-[10px] border border-black/5 object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-semibold leading-tight text-stone-800">24/09/2024</p>
                    <div className="mt-1 inline-flex items-center rounded-full bg-[#E7F2ED] px-2 py-0.5 text-[10px] font-semibold text-[#357D64]">
                      <span>Da tương đối ổn định</span>
                    </div>
                  </div>
                </div>
                <svg className="h-4 w-4 shrink-0 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div data-go="s13" className="flex items-center justify-between pt-2.5">
                <div className="flex items-center space-x-2.5">
                  <img
                    src="/img/skin/acne-cheek-4.jpg"
                    alt="Ảnh phân tích da"
                    className="h-10 w-10 shrink-0 rounded-[10px] border border-black/5 object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-semibold leading-tight text-stone-800">05/09/2024</p>
                    <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#FDF1E6] px-1.5 py-0.5 text-[10px] font-semibold text-[#B96316]">
                      <span>👑</span>
                      <span>Có dấu hiệu mụn nhẹ</span>
                    </div>
                  </div>
                </div>
                <svg className="h-4 w-4 shrink-0 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Screen>
  )
}
