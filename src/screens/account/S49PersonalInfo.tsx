import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 49 · Thông tin của tôi */
export default function S49PersonalInfo() {
  return (
    <Screen>
      <div className="relative flex h-[884px] w-[390px] select-none flex-col overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <img
          src="/eucalyptus-corner.png"
          alt=""
          className="pointer-events-none absolute right-0 top-0 z-10 w-[120px] select-none"
          style={{ mixBlendMode: 'multiply' }}
        />
        <StatusBar />
        <header className="relative flex shrink-0 items-center justify-between px-4 pb-1 pt-1">
          <button
            aria-label="Quay lại"
            data-back="s48"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#173B32] transition-colors active:bg-[#E3E6D3]/50"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>
          <div className="flex items-center justify-center">
            <BrandLogo />
          </div>
          <div className="pointer-events-none h-8 w-8" />
        </header>
        <main className="flex flex-1 flex-col justify-between overflow-y-auto px-4 pb-[90px] pt-1">
          <div className="mb-1">
            <h1 className="font-serif text-[22px] font-bold leading-snug tracking-tight text-[#173B32]">Thông tin của tôi</h1>
            <p className="mt-0.5 text-[12px] font-medium leading-tight text-[#4E7165]">Cập nhật thông tin cá nhân để hoàn thiện hồ sơ.</p>
          </div>
          <div className="my-0.5 flex items-center justify-center">
            <div className="relative h-[84px] w-[84px]">
              <img
                alt="Ảnh đại diện"
                className="h-[84px] w-[84px] rounded-full border-2 border-white object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXkyVhjMLsUtZa3KSvD9RvBn3udOWL8b0dxJYL0KgORjV1ICnQQ231dek0ciEt4F_j7OfMnCx6UgAmRQPaaExneq4mmQ2c-3c1vuLFPjpMU2VUiezbs5jEjJyunLy2u1ghcz7gkT1qVS6q-oASF7-INJPOXKeoQDRbi-yN3NzhceGmiyHuop66lAHV5fESBwNE9-2bY46rao3rSrHbCvPOEBC0xmzj9opMGB44Lw0"
              />
              <button
                aria-label="Đổi ảnh đại diện"
                data-toast="Chọn ảnh đại diện từ thư viện (minh họa)"
                className="absolute bottom-0 right-0 flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 border-[#F7F8F2] bg-[#357D64] text-white shadow-md transition-transform active:scale-95"
                type="button"
              >
                <span className="material-symbols-outlined text-[15px]">photo_camera</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <label className="mb-1 text-[12px] font-semibold text-[#173B32]">Họ và tên</label>
              <div className="relative flex items-center rounded-xl border border-[#E3E6D3] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors focus-within:border-[#357D64]">
                <input
                  className="w-full border-none bg-transparent p-0 text-[13px] font-semibold text-[#173B32] focus:ring-0"
                  type="text"
                  defaultValue="Nguyễn Minh Anh"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-[12px] font-semibold text-[#173B32]">Ngày sinh</label>
              <div className="relative flex items-center justify-between rounded-xl border border-[#E3E6D3] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors focus-within:border-[#357D64]">
                <input
                  className="w-full border-none bg-transparent p-0 text-[13px] font-semibold text-[#173B32] focus:ring-0"
                  type="text"
                  defaultValue="20/05/2004"
                />
                <span className="material-symbols-outlined text-[18px] text-[#4E7165]">calendar_today</span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-[12px] font-semibold text-[#173B32]">Số điện thoại</label>
              <div className="relative flex items-center justify-between rounded-xl border border-[#E3E6D3] bg-white px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors focus-within:border-[#357D64]">
                <input
                  className="w-1/2 border-none bg-transparent p-0 text-[13px] font-semibold text-[#173B32] focus:ring-0"
                  type="text"
                  defaultValue="0901 234 567"
                />
                <div
                  className="flex shrink-0 items-center space-x-1 rounded-full px-2 py-0.5 text-[11px] font-bold"
                  style={{ backgroundColor: 'rgb(23,59,50)', color: 'rgb(255,255,255)', border: '1px solid rgb(23,59,50)' }}
                >
                  <span>Đã xác thực</span>
                  <span className="text-[10px] font-bold">✓</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-[12px] font-semibold text-[#173B32]">Email</label>
              <div className="relative flex items-center justify-between rounded-xl border border-[#E3E6D3] bg-white px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors focus-within:border-[#357D64]">
                <input
                  className="w-[170px] truncate border-none bg-transparent p-0 text-[13px] font-semibold text-[#173B32] focus:ring-0"
                  type="email"
                  defaultValue="minh.anh@gmail.com"
                />
                <div
                  className="flex shrink-0 items-center space-x-1 rounded-full px-2 py-0.5 text-[11px] font-bold"
                  style={{ backgroundColor: 'rgb(23,59,50)', color: 'rgb(255,255,255)', border: '1px solid rgb(23,59,50)' }}
                >
                  <span>Đã xác thực</span>
                  <span className="text-[10px] font-bold">✓</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-[12px] font-semibold text-[#173B32]">Khu vực sinh sống</label>
              <div
                data-toast="Chọn khu vực sinh sống (minh họa)"
                className="relative flex cursor-pointer items-center justify-between rounded-xl border border-[#E3E6D3] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#357D64]"
              >
                <div className="flex items-center space-x-1.5 text-[13px] text-[#173B32]">
                  <span className="material-symbols-outlined text-[17px] text-[#173B32]">location_on</span>
                  <span className="font-semibold">Đà Nẵng, Việt Nam</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[#4E7165]">expand_more</span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2 bg-transparent px-1 py-1 text-[11px] font-medium leading-tight text-[#8A8F84]">
            <span className="material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-[#587C6F]">info</span>
            <span className="font-medium text-[#587C6F]">
              Các thay đổi liên quan đến số điện thoại và email cần được xác thực để đảm bảo an toàn tài khoản.
            </span>
          </div>
          <div className="pt-0.5">
            <button
              data-toast="Đã lưu thay đổi thông tin"
              data-back="s48"
              className="w-full rounded-xl bg-[#357D64] py-3 text-[14px] font-bold text-white shadow-md transition-all hover:bg-[#173B32] active:scale-[0.99]"
              type="button"
              style={{ backgroundColor: 'rgb(23,59,50)', color: 'rgb(255,255,255)' }}
            >
              Lưu thay đổi
            </button>
          </div>
        </main>
        <BottomNav role="user" active={4} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
