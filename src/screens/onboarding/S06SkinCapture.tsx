import { SafeAreaBottom, SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'
import { useNav } from '@/navigation/NavProvider'

/** Màn 06 · Chụp ảnh làn da */
export default function S06SkinCapture() {
  const nav = useNav()
  const postConsultation = nav.previous() === 's27'

  return (
    <Screen>
      <div
        className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden font-sans text-[#173B32] antialiased shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]"
        style={{
          backgroundColor: '#F7F8F2',
        }}
      >
        <SafeAreaTop />
        <nav className="relative z-20 flex items-center px-5 pt-3">
          <button
            aria-label="Quay lại"
            data-back="s03"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#173B32] shadow-[0_2px_8px_rgba(23,59,50,0.08)] backdrop-blur-sm transition-all hover:bg-white active:scale-95"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="-ml-10 flex-1 text-center text-[17px] font-semibold tracking-tight text-[#173B32]">
            {postConsultation ? 'Chụp ảnh da sau tư vấn' : 'Chụp ảnh làn da của bạn'}
          </h1>
        </nav>
        <main className="flex flex-1 flex-col justify-start overflow-hidden px-4 pt-3">
          {postConsultation && (
            <p className="mb-2 rounded-xl border border-[#DEE8E4] bg-[#ECF3F0]/85 px-3 py-2 text-[11px] leading-snug text-[#173B32]">
              Chụp ảnh rõ ở ba góc để bác sĩ cập nhật hồ sơ và hoàn thiện tóm tắt sau buổi tư vấn.
            </p>
          )}
          <div className="relative h-[308px] w-full overflow-hidden rounded-[24px] bg-stone-200 shadow-[0_4px_20px_-2px_rgba(23,59,50,0.06)]">
            <img
              alt="Xem trước khuôn mặt trực tiếp"
              className="pointer-events-none h-full w-full object-cover object-center"
              src="/img/skin/face-front.jpg"
            />
            <div className="absolute left-4 top-4 h-5 w-5 rounded-tl-[3px] border-l-[3px] border-t-[3px] border-white shadow-sm" />
            <div className="absolute right-4 top-4 h-5 w-5 rounded-tr-[3px] border-r-[3px] border-t-[3px] border-white shadow-sm" />
            <div className="absolute bottom-4 left-4 h-5 w-5 rounded-bl-[3px] border-b-[3px] border-l-[3px] border-white shadow-sm" />
            <div className="absolute bottom-4 right-4 h-5 w-5 rounded-br-[3px] border-b-[3px] border-r-[3px] border-white shadow-sm" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                style={{
                  width: '178px',
                  height: '236px',
                  border: '2px dashed rgba(255,255,255,.88)',
                  borderRadius: '50% 50% 48% 48% / 56% 56% 44% 44%',
                  boxShadow: '0 0 10px rgba(0,0,0,.1)',
                }}
              />
            </div>
          </div>
          <section className="mt-3 grid grid-cols-3 gap-2.5">
            <button data-toast="Đã chọn góc chụp: Chính diện" className="group flex flex-col items-center focus:outline-none" type="button">
              <div className="h-[62px] w-full overflow-hidden rounded-[14px] border-2 border-[#357D64] bg-[#357D64]/10 p-0.5 shadow-sm transition-transform active:scale-95">
                <div className="h-full w-full overflow-hidden rounded-[10px]">
                  <img
                    alt="Góc chụp chính diện"
                    className="h-full w-full scale-150 object-cover object-[center_28%]"
                    src="/img/skin/face-front.jpg"
                  />
                </div>
              </div>
              <span className="mt-1.5 text-[12px] font-semibold tracking-tight text-[#357D64]">Chính diện</span>
            </button>
            <button
              data-toast="Đã chọn góc chụp: Bên trái"
              className="group flex flex-col items-center opacity-80 transition-opacity hover:opacity-100 focus:outline-none"
              type="button"
            >
              <div className="h-[62px] w-full overflow-hidden rounded-[14px] border border-transparent bg-stone-100 shadow-sm transition-transform active:scale-95">
                <div className="h-full w-full overflow-hidden rounded-[12px]">
                  <img
                    alt="Góc chụp bên trái"
                    className="h-full w-full -rotate-[15deg] scale-150 object-cover object-[center_28%] brightness-95 filter"
                    src="/img/skin/face-left.jpg"
                  />
                </div>
              </div>
              <span className="mt-1.5 text-[12px] font-medium text-[#6D8E82]">Bên trái</span>
            </button>
            <button
              data-toast="Đã chọn góc chụp: Bên phải"
              className="group flex flex-col items-center opacity-80 transition-opacity hover:opacity-100 focus:outline-none"
              type="button"
            >
              <div className="h-[62px] w-full overflow-hidden rounded-[14px] border border-transparent bg-stone-100 shadow-sm transition-transform active:scale-95">
                <div className="h-full w-full overflow-hidden rounded-[12px]">
                  <img
                    alt="Góc chụp bên phải"
                    className="h-full w-full rotate-[20deg] scale-150 object-cover object-[center_28%] brightness-95 filter"
                    src="/img/skin/face-right.jpg"
                  />
                </div>
              </div>
              <span className="mt-1.5 text-[12px] font-medium text-[#6D8E82]">Bên phải</span>
            </button>
          </section>
          <section className="mt-3 rounded-[18px] border border-[#DEE8E4] bg-[#ECF3F0]/85 p-3">
            <div className="mb-1.5 flex items-center space-x-1.5 text-[13px] font-semibold text-[#173B32]">
              <svg className="h-4 w-4 shrink-0 text-[#173B32]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Một số lưu ý khi chụp ảnh:</span>
            </div>
            <ul className="space-y-1.5 text-[12px] font-normal leading-tight text-[#173B32]">
              <li className="flex items-center space-x-2">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#357D64]">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Chụp ở nơi đủ sáng, ánh sáng tự nhiên</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#357D64]">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Không sử dụng bộ lọc (filter)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#357D64]">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Hạn chế trang điểm để kết quả chính xác hơn</span>
              </li>
            </ul>
          </section>
          <section className="mt-3.5 space-y-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <button
                data-toast="Chụp lại ảnh"
                className="flex h-[46px] items-center justify-center space-x-2 rounded-full border border-[#DFE6E3] bg-white/95 text-[14px] font-medium text-[#173B32] shadow-sm transition-all hover:bg-white active:scale-95"
                type="button"
              >
                <svg className="h-4 w-4 text-[#173B32]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Chụp lại</span>
              </button>
              <button
                data-activate="#use-photo"
                data-toast="Đã chụp ảnh – bấm “Sử dụng ảnh này” để tiếp tục"
                className="flex h-[46px] items-center justify-center space-x-2 rounded-full bg-[#357D64] text-[14px] font-medium text-white shadow-[0_2px_8px_rgba(23,59,50,0.08)] transition-all hover:bg-[#357D64] active:scale-95"
                type="button"
              >
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Chụp ảnh</span>
              </button>
            </div>
            <button
              id="use-photo"
              data-toast="Hãy bấm “Chụp ảnh” trước khi tiếp tục"
              data-go-after="s07"
              data-go-after-alt="s12"
              data-go-after-s27="s28"
              data-alt-from="s10,s11,s13,s14,s15,s22,s50"
              data-alt="w-full h-[46px] rounded-full bg-[#357D64] text-white flex items-center justify-center space-x-2 text-[14px] font-medium tracking-wide shadow-[0_2px_8px_rgba(23,59,50,0.08)] active:scale-95 transition-all"
              className="flex h-[46px] w-full cursor-not-allowed items-center justify-center space-x-2 rounded-full bg-[#D8DEDC]/80 text-[14px] font-medium tracking-wide text-[#889E96]"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Sử dụng ảnh này</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </section>
        </main>
        <SafeAreaBottom />
      </div>
    </Screen>
  )
}
