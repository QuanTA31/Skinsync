import { BotanicalCorner } from '@/components/ui/BotanicalCorner'
import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 44 · Thông báo của bạn */
export default function S44Notifications() {
  return (
    <Screen>
      <div
        className="relative flex select-none flex-col overflow-hidden font-sans text-stone-800"
        style={{ width: '390px', height: '884px', position: 'relative', overflow: 'hidden', background: 'rgb(247,248,242)' }}
      >
        <BotanicalCorner />
        <StatusBar variant="floating" />
        <div className="z-20 shrink-0 px-5 pt-3" style={{ paddingTop: '50px' }}>
          <div className="relative flex h-8 w-full items-center justify-center">
            <button
              aria-label="Quay lại"
              data-back="s10"
              className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-stone-200/50"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center justify-center">
              <BrandLogo />
            </div>
          </div>
          <div className="mt-3 pr-8">
            <h2 className="font-serif text-[22px] font-bold leading-tight tracking-tight text-moss-dark" style={{ color: 'rgb(23,59,50)' }}>
              Thông báo của bạn
            </h2>
            <p className="mt-1 pr-4 text-[11.5px] font-medium leading-4 text-stone-500">
              Cập nhật những thông tin quan trọng và nhắc nhở để đồng hành cùng làn da của bạn.
            </p>
          </div>
          <div data-pills="" className="mt-3 flex w-full items-center justify-between text-xs">
            <button
              data-on=""
              className="whitespace-nowrap rounded-full bg-[#357D64] px-1.5 py-1 text-center text-[11px] font-semibold text-white shadow-sm transition-colors"
              type="button"
              style={{ backgroundColor: 'rgb(23,59,50)', color: 'rgb(255,255,255)' }}
            >
              Tất cả
            </button>
            <button
              className="whitespace-nowrap rounded-full border border-stone-200/60 bg-[#EEF3F1] px-1.5 py-1 text-center text-[11px] font-semibold text-stone-600 transition-colors hover:bg-stone-100"
              type="button"
            >
              Chăm sóc da
            </button>
            <button
              className="whitespace-nowrap rounded-full border border-stone-200/60 bg-[#EEF3F1] px-1.5 py-1 text-center text-[11px] font-semibold text-stone-600 transition-colors hover:bg-stone-100"
              type="button"
            >
              Lịch khám
            </button>
            <button
              className="whitespace-nowrap rounded-full border border-stone-200/60 bg-[#EEF3F1] px-1.5 py-1 text-center text-[11px] font-semibold text-stone-600 transition-colors hover:bg-stone-100"
              type="button"
            >
              Sản phẩm
            </button>
            <button
              className="whitespace-nowrap rounded-full border border-stone-200/60 bg-[#EEF3F1] px-1.5 py-1 text-center text-[11px] font-semibold text-stone-600 transition-colors hover:bg-stone-100"
              type="button"
            >
              Cộng đồng
            </button>
          </div>
        </div>
        <div className="no-scrollbar flex-1 space-y-2.5 overflow-y-auto px-4 py-2" style={{ paddingBottom: '6px', paddingTop: '4px' }}>
          <article
            data-go="s17"
            className="flex cursor-pointer items-start space-x-3 rounded-2xl border border-stone-200/60 bg-white/85 p-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgb(254,243,199)', color: 'rgb(217,119,6)' }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" stroke="currentColor" fill="#FDE68A" />
                <path
                  d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1 pr-1">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[12.5px] font-bold leading-snug text-stone-900" style={{ color: 'rgb(23,59,50)' }}>
                  Đã đến giờ chăm sóc da buổi sáng!
                </h3>
                <div className="ml-1.5 flex shrink-0 items-center space-x-1.5">
                  <span className="font-sans text-[10px] font-medium text-stone-400">5 phút trước</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>
              </div>
              <p className="mt-1 font-sans text-[11px] font-medium leading-tight text-stone-500">
                Đừng quên thực hiện các bước trong routine sáng nhé.
              </p>
              <span className="mt-1 block font-sans text-[10px] font-medium text-stone-400">5 phút trước</span>
            </div>
            <div className="shrink-0 self-center text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
          <article
            data-go="s11"
            className="flex cursor-pointer items-start space-x-3 rounded-2xl border border-stone-200/60 bg-white/85 p-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgb(224,242,254)', color: 'rgb(2,132,199)' }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 pr-1">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[12.5px] font-bold leading-snug text-stone-900" style={{ color: 'rgb(23,59,50)' }}>
                  Hôm nay là ngày thứ 14
                </h3>
                <span className="ml-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              </div>
              <p className="mt-1 font-sans text-[11px] font-medium leading-tight text-stone-500">
                Hãy cập nhật ảnh da để theo dõi tiến trình và nhận đánh giá từ bác sĩ.
              </p>
              <span className="mt-1 block font-sans text-[10px] font-medium text-stone-400">2 giờ trước</span>
            </div>
            <div className="shrink-0 self-center text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
          <article
            data-go="s27"
            className="flex cursor-pointer items-start space-x-3 rounded-2xl border border-stone-200/60 bg-white/85 p-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgb(254,226,226)', color: 'rgb(220,38,38)' }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" />
                <path d="M16 2v4M8 2v4M3 9h18" strokeLinecap="round" />
                <path d="M8 14l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 pr-1">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[12.5px] font-bold leading-snug text-stone-900" style={{ color: 'rgb(23,59,50)' }}>
                  Bạn có lịch tư vấn bác sĩ vào ngày mai
                </h3>
                <span className="ml-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              </div>
              <p className="mt-1 font-sans text-[11px] font-medium leading-tight text-stone-500">
                Thứ 4, 22/10/2024 • 10:00 – 10:30
                <br />
                hãy chuẩn bị ảnh da mới nhất nhé.
              </p>
              <span className="mt-1 block font-sans text-[10px] font-medium text-stone-400">5 giờ trước</span>
            </div>
            <div className="shrink-0 self-center text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
          <article
            data-go="s41"
            className="flex cursor-pointer items-start space-x-3 rounded-2xl border border-stone-200/60 bg-white/85 p-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgb(254,243,199)', color: 'rgb(217,119,6)' }}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 pr-1">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[12.5px] font-bold leading-snug text-stone-900" style={{ color: 'rgb(23,59,50)' }}>
                  Video của bạn đã được phê duyệt!
                </h3>
                <span className="ml-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              </div>
              <p className="mt-1 font-sans text-[11px] font-medium leading-tight text-stone-500">
                Nội dung "Hành trình 4 tuần của mình" đã được phê duyệt và cộng 10 điểm.
              </p>
              <span className="mt-1 block font-sans text-[10px] font-medium text-stone-400">1 ngày trước</span>
            </div>
            <div className="shrink-0 self-center text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
          <article
            data-go="s19"
            className="flex cursor-pointer items-start space-x-3 rounded-2xl border border-stone-200/60 bg-white/85 p-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgb(220,252,231)', color: 'rgb(22,163,74)' }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 pr-1">
              <h3 className="font-sans text-[12.5px] font-bold leading-snug text-stone-900" style={{ color: 'rgb(23,59,50)' }}>
                Ưu đãi dành riêng cho bạn
              </h3>
              <p className="mt-1 font-sans text-[11px] font-medium leading-tight text-stone-500">
                Giảm 20% các sản phẩm chăm sóc da cho thành viên Premium.
              </p>
              <span className="mt-1 block font-sans text-[10px] font-medium text-stone-400">1 ngày trước</span>
            </div>
            <div className="shrink-0 self-center text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
          <article
            data-go="s27"
            className="flex cursor-pointer items-start space-x-3 rounded-2xl border border-stone-200/60 bg-white/85 p-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgb(254,215,170)', color: 'rgb(194,65,12)' }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="12" r="1" fill="currentColor" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <circle cx="15.5" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 pr-1">
              <h3 className="font-sans text-[12.5px] font-bold leading-snug text-stone-900" style={{ color: 'rgb(23,59,50)' }}>
                Bác sĩ đã phản hồi tin nhắn của bạn
              </h3>
              <p className="mt-1 font-sans text-[11px] font-medium leading-tight text-stone-500">
                Vui lòng xem nội dung tư vấn trong tin nhắn.
              </p>
            </div>
            <div className="shrink-0 self-center text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
        </div>
        <div
          className="flex shrink-0 items-center space-x-2 bg-brandBg px-4 py-2"
          style={{ marginBottom: '86px', zIndex: 20, paddingTop: '6px', paddingBottom: '6px' }}
        >
          <button
            data-hide=".bg-blue-500"
            className="shadow-xs flex flex-1 items-center justify-center space-x-1.5 rounded-full border border-stone-300/80 bg-white px-2.5 py-2 text-stone-700 transition-all hover:bg-stone-50 active:scale-95"
            type="button"
          >
            <svg
              className="h-3.5 w-3.5"
              style={{ color: 'rgb(23,59,50)' }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8.5 12l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] font-semibold tracking-tight">Đánh dấu tất cả đã đọc</span>
          </button>
          <button
            data-go="s45"
            className="shadow-xs flex flex-1 items-center justify-center space-x-1.5 rounded-full border border-moss bg-moss px-2.5 py-2 text-white transition-all hover:bg-moss-dark active:scale-95"
            type="button"
            style={{ backgroundColor: 'rgb(23,59,50)', borderColor: 'rgb(23,59,50)', color: 'rgb(255,255,255)' }}
          >
            <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-[11px] font-semibold tracking-tight">Cài đặt thông báo</span>
          </button>
        </div>
        <BottomNav role="user" active={0} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
