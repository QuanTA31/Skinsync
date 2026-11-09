import { BrandLogo } from '@/components/brand/BrandLogo'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 15 · Làn da cần đánh giá thêm */
export default function S15NeedsReview() {
  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <svg
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-15px',
            width: '175px',
            height: '195px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: '.88',
          }}
          fill="none"
          viewBox="0 0 200 220"
        >
          <path d="M210 20C170 45 135 90 120 145" stroke="#72A593" strokeLinecap="round" strokeOpacity="0.45" strokeWidth="2.2" />
          <path d="M140 100C165 95 192 70 200 48C178 58 152 75 140 100Z" fill="#7EB2A0" fillOpacity="0.55" />
          <path d="M125 130C100 115 88 85 92 60C105 82 120 106 125 130Z" fill="#98B8AB" fillOpacity="0.6" />
          <path d="M115 150C92 155 60 140 45 120C68 126 95 134 115 150Z" fill="#74A594" fillOpacity="0.45" />
          <path d="M135 125C158 135 185 130 205 118C185 138 155 142 135 125Z" fill="#82B7A5" fillOpacity="0.5" />
          <path d="M175 60C155 40 152 15 158 -10C172 12 182 38 175 60Z" fill="#A2C1B4" fillOpacity="0.5" />
        </svg>
        <StatusBar />
        <section className="relative z-10 px-5 pb-2 pt-3">
          <div className="relative flex items-center justify-between">
            <button
              aria-label="Quay lại"
              data-back="s13"
              className="-ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/70 bg-white/80 text-stone-700 shadow-sm transition-transform active:scale-95"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-1 flex-col items-center justify-center pr-9">
              <BrandLogo variant="stacked" />
            </div>
          </div>
        </section>
        <main className="no-scrollbar z-10 flex flex-1 flex-col space-y-3.5 overflow-y-auto px-5 pb-3 pt-1.5">
          <h2 className="px-2 text-center font-serif text-[21px] font-bold leading-tight text-[#173B32]">
            Làn da của bạn cần được đánh giá thêm
          </h2>
          <article className="flex items-start space-x-3 rounded-2xl border border-[#F4D9CF] bg-[#FBEEE8] p-3.5 shadow-[0_2px_10px_-2px_rgba(23,59,50,0.05)]">
            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F5D8CE] text-[#8D3525]">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.518 11.59c.75 1.334-.213 2.98-1.742 2.98H3.48c-1.53 0-2.493-1.646-1.743-2.98l6.52-11.59zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-xs font-bold leading-snug text-[#8D3525]">
                Kết quả phân tích cho thấy một số dấu hiệu cần được bác sĩ da liễu kiểm tra.
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#A05344]">
                Đây có thể là mụn viêm mức độ trung bình đến nặng hoặc các vấn đề da phức tạp hơn.
              </p>
            </div>
          </article>
          <section className="space-y-2 pt-0.5">
            <h3 className="text-[13.5px] font-bold text-[#173B32]">Vì sao nên thăm khám bác sĩ?</h3>
            <div className="flex items-center space-x-3 rounded-xl border border-stone-200/60 bg-white px-3.5 py-2.5 shadow-sm">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F1ED] text-[#357D64]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-stone-800">Được chẩn đoán chính xác tình trạng da</span>
            </div>
            <div className="flex items-center space-x-3 rounded-xl border border-stone-200/60 bg-white px-3.5 py-2.5 shadow-sm">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F1ED] text-[#357D64]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-stone-800">Nhận phác đồ điều trị phù hợp và an toàn</span>
            </div>
            <div className="flex items-center space-x-3 rounded-xl border border-stone-200/60 bg-white px-3.5 py-2.5 shadow-sm">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F1ED] text-[#357D64]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                  <path
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-stone-800">Hạn chế nguy cơ để lại sẹo hoặc tái phát</span>
            </div>
          </section>
          <section
            data-go="s23"
            className="relative flex items-center justify-between overflow-hidden rounded-2xl border border-[#DDE7E3] bg-[#EEF4F1] p-3.5 shadow-[0_2px_10px_-2px_rgba(23,59,50,0.05)]"
          >
            <div className="z-10 w-[66%] pr-1">
              <h3 className="text-xs font-bold leading-snug text-[#173B32]">Tìm bác sĩ da liễu uy tín cùng SKINSYNC</h3>
              <p className="mt-1.5 text-[10.5px] leading-relaxed text-[#59766C]">
                Đặt lịch dễ dàng, tư vấn trực tuyến hoặc trực tiếp tại các phòng khám được kiểm duyệt.
              </p>
            </div>
            <div className="relative flex h-24 w-[34%] items-end justify-end">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASNA4V8WFebUSAjEvtXrfZnCxnv54WtOdMPXVjSiUKJjF8p9NEYool2_9Zma5tnrhUlAd1Aw6HAKCdH_JjIzn5ldDNteJP1TY5HGCT0Zjzu7GYVYiIo_vUeKi-GSQ1SdohMGE7Y5NyseS_jOFdRXono3GODPQ9qcSYihbUQ3pXqfJQEnJw-toPji8A2VvQ5xgm1xwwBLhiKCq62UizG72FTky309JOF-3P-w6mhmQ"
                  alt="Bác sĩ da liễu"
                  className="relative z-10 h-20 w-20 rounded-full object-cover shadow-sm"
                />
              </div>
            </div>
          </section>
          <section className="space-y-2 pt-0.5">
            <h3 className="text-[13.5px] font-bold text-[#173B32]">Quy trình đặt lịch khám</h3>
            <div className="grid grid-cols-4 items-start gap-1 pt-1">
              <div data-go="s23" className="relative flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DBE7E2] bg-[#E8F1ED] text-[#357D64]">
                  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <svg
                  className="absolute -right-2 top-3 h-3.5 w-3.5 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="mt-1.5 px-0.5 text-[10px] font-medium leading-tight text-stone-700">Chọn bác sĩ phù hợp</span>
              </div>
              <div data-go="s25" className="relative flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DBE7E2] bg-[#E8F1ED] text-[#357D64]">
                  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <svg
                  className="absolute -right-2 top-3 h-3.5 w-3.5 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="mt-1.5 px-0.5 text-[10px] font-medium leading-tight text-stone-700">Đặt lịch hẹn</span>
              </div>
              <div data-go="s27" className="relative flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DBE7E2] bg-[#E8F1ED] text-[#357D64]">
                  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                    <path
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <svg
                  className="absolute -right-2 top-3 h-3.5 w-3.5 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="mt-1.5 px-0.5 text-[9.5px] font-medium leading-tight text-stone-700">
                  Thăm khám <br />
                  (trực tuyến/trực tiếp)
                </span>
              </div>
              <div data-go="s28" className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DBE7E2] bg-[#E8F1ED] text-[#357D64]">
                  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="mt-1.5 px-0.5 text-[10px] font-medium leading-tight text-stone-700">Nhận hướng dẫn điều trị</span>
              </div>
            </div>
          </section>
          <section className="flex items-start space-x-3 rounded-xl border border-[#EAECDD] bg-[#FCF3EB] p-3 shadow-[0_2px_10px_-2px_rgba(23,59,50,0.05)]">
            <div className="mt-0.5 h-7 w-7 flex-shrink-0 text-[#C84931]">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0115 5h1a2 2 0 012 2v1a2 2 0 01-2 2h-1v7a2 2 0 01-2 2H5a2 2 0 01-2-2V10H2a2 2 0 01-2-2V7a2 2 0 012-2h3zm2-1a1 1 0 00-1 1h2.586A1 1 0 007 4zm6 0a1 1 0 00-.586 1H15a1 1 0 00-1-1zM4 9v7a1 1 0 001 1h4V9H4zm7 8h4a1 1 0 001-1V9h-5v8z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold text-[#173B32]">Tư vấn ban đầu</h4>
              <p className="mt-0.5 text-[10.5px] leading-snug text-[#6E5D52]">
                Bạn có thể được tư vấn ban đầu miễn phí hoặc ưu đãi đặc biệt nếu đủ điều kiện.
              </p>
            </div>
          </section>
        </main>
        <footer className="z-20 space-y-2.5 bg-[#F7F8F2] p-4 pt-1">
          <button
            data-go="s23"
            className="flex h-12 w-full items-center justify-center space-x-2 rounded-full bg-[#357D64] text-[14px] font-medium text-white shadow-[0_4px_12px_rgba(53,125,100,0.22)] transition-all hover:bg-[#357D64] active:scale-[0.99]"
            type="button"
          >
            <span>Tìm bác sĩ da liễu</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              data-go="s50"
              className="flex h-10 items-center justify-center space-x-1.5 rounded-full border border-[#B7C6C0] bg-white/90 text-xs font-medium text-stone-800 shadow-sm transition-all hover:bg-white active:scale-[0.98]"
              type="button"
            >
              <svg className="h-3.5 w-3.5 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Xem hồ sơ da</span>
            </button>
            <button
              data-go="s29"
              className="flex h-10 items-center justify-center space-x-1.5 rounded-full border border-[#B7C6C0] bg-white/90 text-xs font-medium text-stone-800 shadow-sm transition-all hover:bg-white active:scale-[0.98]"
              type="button"
            >
              <svg className="h-3.5 w-3.5 text-[#357D64]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Tìm phòng khám gần tôi</span>
            </button>
          </div>
          <div className="flex justify-center pb-1 pt-2">
            <div className="h-1 w-32 rounded-full bg-stone-300" />
          </div>
        </footer>
      </div>
    </Screen>
  )
}
