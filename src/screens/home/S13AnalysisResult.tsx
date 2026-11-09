import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaBottom, SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 13 · Kết quả phân tích */
export default function S13AnalysisResult() {
  return (
    <Screen>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden font-sans text-[#173B32] antialiased"
        style={{
          backgroundColor: '#F7F8F2',
        }}
      >
        <SafeAreaTop />
        <div className="relative z-20 flex items-center px-5 pt-3">
          <button
            aria-label="Quay lại"
            data-back="s11"
            className="shadow-xs flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/80 text-gray-700 transition-transform hover:bg-white active:scale-95"
            type="button"
          >
            <svg className="h-4 w-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex flex-1 flex-col items-center justify-center pr-9">
            <BrandLogo />
          </div>
        </div>
        <div className="no-scrollbar flex-1 space-y-3.5 overflow-y-auto px-5 pb-8 pt-3">
          <div className="pt-1 text-center">
            <h1 className="font-serif text-[26px] font-bold leading-tight text-[#173B32]">Kết quả phân tích làn da</h1>
            <p className="mt-0.5 text-xs text-[#828A84]">Dựa trên hình ảnh và thông tin bạn cung cấp</p>
          </div>
          <div className="shadow-2xs flex items-center justify-center space-x-2 rounded-xl border border-black/5 bg-white/70 px-3.5 py-2 text-xs text-[#173B32]/90">
            <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
              <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>
              Ngày phân tích: <strong className="font-semibold text-gray-900">10/10/2026</strong>
            </span>
          </div>
          <div className="shadow-xs flex items-start space-x-3 rounded-2xl border border-[#FADCC7] bg-[#FFF4EB] p-3.5">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFE5D3] text-[#C95B28]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 4L12 3l3.5 6L21 5l-2 11H5zm14 3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h14v1z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-bold leading-snug text-[#BA4335]">Có dấu hiệu mụn nhẹ</h2>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#735246]">
                Tình trạng da của bạn hiện có một số nốt mụn viêm nhẹ, đồng thời lỗ chân lông hơi to và vùng da dầu.
              </p>
            </div>
          </div>
          <div className="shadow-xs rounded-2xl border border-black/5 bg-white p-3">
            <div className="grid grid-cols-2 items-center gap-3">
              <div className="relative aspect-[4/3.8] overflow-hidden rounded-xl border border-black/5 bg-gray-100 shadow-inner">
                <img
                  alt="Vùng da má có mụn viêm nhẹ và lỗ chân lông to"
                  className="h-full w-full object-cover object-center"
                  src="/img/skin/acne-cheek-2.jpg"
                />
              </div>
              <div className="flex h-full flex-col justify-between pl-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold leading-tight text-[#173B32]">
                    Vùng da
                    <br />
                    có vấn đề
                  </span>
                  <div className="relative h-14 w-12 shrink-0">
                    <svg className="mx-auto h-14 w-12" viewBox="0 0 100 115">
                      <path
                        d="M18 42 C18 18 32 10 50 10 C68 10 82 18 82 42 C82 66 74 95 50 95 C26 95 18 66 18 42 Z"
                        fill="#FCEEE6"
                        stroke="#E5C7B8"
                        strokeWidth="1.8"
                      />
                      <path d="M36 94 L36 108 M64 94 L64 108" stroke="#E5C7B8" strokeWidth="1.8" />
                      <path d="M18 45 C13 46 13 60 18 65" fill="#FCEEE6" stroke="#E5C7B8" strokeWidth="1.5" />
                      <path d="M82 45 C87 46 87 60 82 65" fill="#FCEEE6" stroke="#E5C7B8" strokeWidth="1.5" />
                      <path d="M30 45 Q36 47 42 45" fill="none" stroke="#CBB1A3" strokeWidth="1.5" />
                      <path d="M58 45 Q64 47 70 45" fill="none" stroke="#CBB1A3" strokeWidth="1.5" />
                      <path d="M50 49 L47 62 L53 62" fill="none" stroke="#E0BDB0" strokeWidth="1.2" />
                      <path d="M43 76 Q50 80 57 76" fill="none" stroke="#E0A99A" strokeWidth="1.5" />
                      <ellipse cx="50" cy="27" fill="#F59385" opacity="0.45" rx="14" ry="7" />
                      <ellipse cx="32" cy="58" fill="#F37E6F" opacity="0.55" rx="8" ry="11" />
                      <ellipse cx="68" cy="58" fill="#F37E6F" opacity="0.55" rx="8" ry="11" />
                      <ellipse cx="50" cy="62" fill="#F59385" opacity="0.4" rx="4.5" ry="6" />
                      <ellipse cx="50" cy="85" fill="#F37E6F" opacity="0.4" rx="7" ry="5" />
                      <circle cx="34" cy="56" fill="#D84435" r="1.8" />
                      <circle cx="29" cy="62" fill="#D84435" r="1.5" />
                      <circle cx="66" cy="58" fill="#D84435" r="1.6" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[10.5px] text-gray-700">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E85B4E]" />
                    <span className="truncate">Mụn viêm nhẹ</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10.5px] text-gray-700">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F59080]" />
                    <span className="truncate">Lỗ chân lông to</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10.5px] text-gray-700">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E58872]" />
                    <span className="truncate">Vùng da dầu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <h3 className="mb-2 text-xs font-bold text-[#173B32]">Những vấn đề được ghi nhận</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="shadow-2xs flex items-center space-x-2 rounded-xl border border-black/5 bg-white p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F6F7F0] text-[#4C7265]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path
                      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold leading-tight text-gray-800">Mụn viêm nhẹ</span>
              </div>
              <div className="shadow-2xs flex items-center space-x-2 rounded-xl border border-black/5 bg-white p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F6F7F0] text-[#4C7265]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" fill="currentColor" r="2.5" />
                    <path d="M12 6v2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold leading-tight text-gray-800">Lỗ chân lông to</span>
              </div>
              <div className="shadow-2xs flex items-center space-x-2 rounded-xl border border-black/5 bg-white p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F6F7F0] text-[#4C7265]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    <path d="M9 14h6m-3-3v6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold leading-tight text-gray-800">Da dầu vùng T</span>
              </div>
              <div className="shadow-2xs flex items-center space-x-2 rounded-xl border border-black/5 bg-white p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F6F7F0] text-[#4C7265]">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold leading-tight text-gray-800">Kết cấu da chưa đều màu</span>
              </div>
            </div>
          </section>
          <section>
            <h3 className="mb-2 text-xs font-bold text-[#173B32]">Thông tin có liên quan từ hồ sơ của bạn</h3>
            <div className="shadow-2xs space-y-2.5 rounded-2xl border border-black/5 bg-white/90 p-3.5 text-[11px]">
              <div className="flex items-start space-x-2.5 text-gray-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                <p>
                  <span className="font-medium text-gray-900">Loại da:</span>{' '}
                  <span className="font-normal text-[#828A84]">Da dầu, dễ nổi mụn</span>
                </p>
              </div>
              <div className="flex items-start space-x-2.5 text-gray-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <p>
                  <span className="font-medium text-gray-900">Tiền sử:</span>{' '}
                  <span className="font-normal text-[#828A84]">Đã từng bị mụn nhẹ</span>
                </p>
              </div>
              <div className="flex items-start space-x-2.5 text-gray-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
                  <rect height="18" rx="2" width="18" x="3" y="4" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <p>
                  <span className="font-medium text-gray-900">Sản phẩm đang dùng:</span>{' '}
                  <span className="font-normal text-[#828A84]">3 sản phẩm</span>
                </p>
              </div>
              <div className="flex items-start space-x-2.5 text-gray-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
                  <path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>
                  <span className="font-medium text-gray-900">Tình trạng gần đây:</span>{' '}
                  <span className="font-normal text-[#828A84]">Da dễ đổ dầu, thỉnh thoảng có mụn mới</span>
                </p>
              </div>
            </div>
          </section>
          <div className="flex items-start space-x-2.5 rounded-xl bg-[#EBF1EE] p-3 text-[11px] leading-snug text-gray-700">
            <svg className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current stroke-[2] text-[#4C7265]" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="16" y2="12" />
              <line x1="12" x2="12.01" y1="8" y2="8" />
            </svg>
            <span className="text-[#173B32]/80">Kết quả AI chỉ hỗ trợ tham khảo, không thay thế đánh giá của bác sĩ da liễu.</span>
          </div>
          <div className="space-y-2.5 pt-2">
            <button
              data-go="s14"
              className="flex h-12 w-full items-center justify-center space-x-2 rounded-full bg-[#4C7265] text-xs font-medium text-white shadow-md transition-all hover:bg-[#426A5C] active:scale-[0.99]"
              type="button"
            >
              <span>Xem hướng chăm sóc phù hợp</span>
              <svg className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                data-go="s15"
                className="flex h-11 items-center justify-center space-x-1.5 rounded-full border border-[#4C7265]/40 bg-white/90 text-xs font-semibold text-[#173B32] transition-all hover:bg-[#4C7265]/5 active:scale-95"
                type="button"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
                  <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Kết nối bác sĩ</span>
              </button>
              <button
                data-toast="Đã lưu kết quả phân tích"
                className="flex h-11 items-center justify-center space-x-1.5 rounded-full border border-[#4C7265]/40 bg-white/90 text-xs font-semibold text-[#173B32] transition-all hover:bg-[#4C7265]/5 active:scale-95"
                type="button"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-[#4C7265]" viewBox="0 0 24 24">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Lưu kết quả</span>
              </button>
            </div>
          </div>
        </div>
        <SafeAreaBottom />
      </div>
    </Screen>
  )
}
