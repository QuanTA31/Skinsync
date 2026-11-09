import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 57 · Quản lý bài viết / video */
export default function S57ContentManager() {
  return (
    <Screen iconSize="sm">
      <div
        className="relative flex select-none flex-col overflow-hidden"
        style={{ width: '390px', height: '884px', backgroundColor: '#F7F8F2' }}
      >
        <img
          alt=""
          aria-hidden="true"
          src="/eucalyptus-corner.png"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 0,
            width: '112px',
            height: '112px',
            objectFit: 'contain',
            objectPosition: 'top right',
            opacity: '.48',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
        <StatusBar />
        <header className="relative z-40 flex items-center justify-between px-5 pb-1.5 pt-2">
          <button
            aria-label="Menu"
            data-toast="Menu bác sĩ (minh họa)"
            className="shadow-xs flex h-8 w-8 items-center justify-center rounded-xl border border-[#E0E7E4] bg-white text-[#173B32] transition active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
          <div className="flex items-center">
            <BrandLogo />
          </div>
          <div data-go="s58" className="shadow-xs h-8 w-8 overflow-hidden rounded-full border border-[#D3DFDA] bg-white">
            <img alt="Doctor avatar" className="h-full w-full object-cover" src="/img/avatar.svg" />
          </div>
        </header>
        <main className="relative z-20 flex flex-1 flex-col justify-between overflow-hidden px-4 pb-[90px] pt-1">
          <div className="mb-1">
            <h1 className="font-serif text-[18px] font-bold leading-tight tracking-tight text-[#173B32]">Quản lý bài viết và video</h1>
            <p className="mt-0.5 text-[10.5px] leading-tight text-[#627E74]">
              Tạo và quản lý nội dung chia sẻ kiến thức, tư vấn chăm sóc da cho cộng đồng.
            </p>
          </div>
          <div data-pills="" className="mb-1.5 flex items-center gap-1.5">
            <button
              data-on=""
              className="shadow-xs flex-1 rounded-xl bg-[#173B32] px-2.5 py-1 text-center text-[10.5px] font-semibold text-white"
              type="button"
            >
              Bài viết
            </button>
            <button
              className="flex-1 rounded-xl bg-[#EDF3F0] px-2.5 py-1 text-center text-[10.5px] font-medium text-[#506D63] transition hover:bg-[#E4ECE9]"
              type="button"
            >
              Video
            </button>
            <button
              data-go="s60"
              className="flex-1 truncate rounded-xl bg-[#EDF3F0] px-2.5 py-1 text-center text-[10.5px] font-medium text-[#506D63] transition hover:bg-[#E4ECE9]"
              type="button"
            >
              Nội dung dịch vụ
            </button>
          </div>
          <div className="mb-1.5">
            <span className="mb-0.5 block text-[10px] font-semibold text-[#173B32]">Tải lên hình ảnh / video</span>
            <div className="grid grid-cols-2 gap-2">
              <div
                data-toast="Chọn hình ảnh để tải lên (minh họa)"
                className="shadow-2xs flex cursor-pointer flex-col items-center justify-center rounded-xl border-[1.5px] border-dashed border-[#90A99F] bg-white/70 px-2 py-1.5 text-center transition hover:bg-white active:scale-[0.99]"
              >
                <span className="material-symbols-outlined mb-0.5 text-[19px] text-[#173B32]">image</span>
                <span className="text-[10px] font-semibold leading-tight text-[#173B32]">Tải lên hình ảnh</span>
                <span className="text-[8.5px] text-[#7D978E]">JPG, PNG (tối đa 10MB)</span>
              </div>
              <div
                data-toast="Chọn video để tải lên (minh họa)"
                className="shadow-2xs flex cursor-pointer flex-col items-center justify-center rounded-xl border-[1.5px] border-dashed border-[#90A99F] bg-white/70 px-2 py-1.5 text-center transition hover:bg-white active:scale-[0.99]"
              >
                <span className="material-symbols-outlined mb-0.5 text-[19px] text-[#173B32]">smart_display</span>
                <span className="text-[10px] font-semibold leading-tight text-[#173B32]">Tải lên video</span>
                <span className="text-[8.5px] text-[#7D978E]">MP4, MOV (tối đa 500MB)</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div>
              <label className="mb-0.5 block text-[10px] font-semibold text-[#173B32]">
                Tiêu đề bài viết <span className="text-rose-500">*</span>
              </label>
              <input className="custom-input h-[29px] rounded-xl py-1 text-[10.5px]" placeholder="Nhập tiêu đề bài viết..." type="text" />
            </div>
            <div>
              <label className="mb-0.5 block text-[10px] font-semibold text-[#173B32]">
                Mô tả nội dung <span className="text-rose-500">*</span>
              </label>
              <textarea
                className="custom-input h-[46px] resize-none rounded-xl py-1 text-[10.5px]"
                placeholder="Nhập nội dung chi tiết..."
                rows={2}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#173B32]">
                  Chủ đề <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select className="custom-input h-[29px] cursor-pointer appearance-none rounded-xl bg-white py-1 pr-6 text-[10.5px] text-[#506D63]">
                    <option value="">Chọn chủ đề</option>
                    <option value="1">Chăm sóc da mụn</option>
                    <option value="2">Phục hồi da</option>
                    <option value="3">Dưỡng trắng</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[15px] text-[#658479]">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
              <div>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#173B32]">Nguồn tham khảo</label>
                <input className="custom-input h-[29px] rounded-xl py-1 text-[10.5px]" placeholder="Nguồn (nếu có)..." type="text" />
              </div>
            </div>
          </div>
          <div className="mt-1 rounded-xl border border-[#D6E4DE] bg-[#EFF5F2] p-2">
            <span className="block text-[10px] font-bold leading-tight text-[#173B32]">Thông tin dịch vụ thẩm mỹ (nếu có)</span>
            <p className="mb-1.5 text-[9px] leading-tight text-[#658479]">
              Áp dụng cho nội dung giới thiệu các dịch vụ, liệu trình tại cơ sở
            </p>
            <div className="space-y-1">
              <div>
                <label className="mb-0.5 block text-[9px] font-semibold text-[#173B32]">
                  Tên cơ sở <span className="text-rose-500">*</span>
                </label>
                <input
                  className="custom-input h-[27px] rounded-xl px-2 py-0.5 text-[9.5px]"
                  placeholder="Nhập tên cơ sở / phòng khám..."
                  type="text"
                />
              </div>
              <div>
                <label className="mb-0.5 block text-[9px] font-semibold text-[#173B32]">Điều kiện áp dụng</label>
                <input
                  className="custom-input h-[27px] rounded-xl px-2 py-0.5 text-[9.5px]"
                  placeholder="Nhập đối tượng phù hợp, điều kiện..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 pt-1">
            <button
              data-toast="Đã lưu bản nháp"
              className="shadow-2xs flex h-[35px] flex-1 items-center justify-center space-x-1.5 rounded-xl border-[1.5px] border-[#173B32] bg-white text-[11px] font-bold text-[#173B32] transition hover:bg-[#F7F8F2] active:scale-[0.98]"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">description</span>
              <span>Lưu bản nháp</span>
            </button>
            <button
              data-toast="Đã gửi duyệt – chờ kiểm duyệt nội dung"
              data-go="s59"
              className="shadow-xs flex h-[35px] flex-1 items-center justify-center space-x-1.5 rounded-xl bg-[#357D64] text-[11px] font-bold text-white transition hover:bg-[#173B32] active:scale-[0.98]"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
              <span>Gửi duyệt</span>
            </button>
          </div>
        </main>
        <BottomNav role="doctor" active={1} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
