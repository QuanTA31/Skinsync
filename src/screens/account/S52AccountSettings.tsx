import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 52 · Cài đặt tài khoản */
export default function S52AccountSettings() {
  return (
    <Screen>
      <div className="relative flex h-[884px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans">
        <div
          className="pointer-events-none absolute right-0 top-0 z-0 h-[104px] w-[108px] select-none overflow-hidden"
          aria-hidden="true"
          style={{
            WebkitMaskImage: 'linear-gradient(135deg, transparent 0%, #000 30%, #000 68%, transparent 100%)',
            maskImage: 'linear-gradient(135deg, transparent 0%, #000 30%, #000 68%, transparent 100%)',
          }}
        >
          <img
            src="/eucalyptus-corner.png"
            alt=""
            className="pointer-events-none h-full w-full object-cover"
            style={{ objectPosition: '100% 0', opacity: 0.52, mixBlendMode: 'multiply' }}
          />
        </div>
        <StatusBar />
        <header className="relative z-20 flex-shrink-0 px-4 pb-1 pt-1" style={{ paddingTop: '14px', paddingBottom: '2px' }}>
          <div className="relative mb-0.5 flex items-center justify-between">
            <button
              aria-label="Quay lại"
              data-back="s48"
              className="z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#E3E6D3] bg-white/70 text-[#357D64] transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[17px]">chevron_left</span>
            </button>
            <BrandLogo className="pointer-events-none absolute inset-0 flex items-center justify-center" />
            <div className="w-7" />
          </div>
          <div className="mt-1">
            <h1 className="text-[20px] font-bold leading-tight tracking-tight text-[#173B32]" style={{ fontFamily: 'var(--font-heading)' }}>
              Cài đặt tài khoản
            </h1>
            <p className="mt-0.5 font-sans text-[11px] font-normal leading-snug text-[#5A7184]">
              Quản lý bảo mật, quyền riêng tư và các tùy chọn tài khoản của bạn.
            </p>
          </div>
        </header>
        <main
          className="relative z-20 flex flex-1 flex-col justify-between overflow-hidden px-4 pb-1 pt-1"
          style={{ marginBottom: '88px', paddingTop: '2px', paddingBottom: '2px' }}
        >
          <section className="rounded-xl border border-[#E4ECE9] bg-[#F7F8F2]/90 p-2 shadow-sm">
            <div className="flex items-center gap-1.5 px-1 pb-1 text-[#173B32]">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: '#D3E6DE' }}>
                <span className="material-symbols-outlined text-[13px]" style={{ color: '#173B32' }}>
                  lock
                </span>
              </div>
              <h2 className="font-sans text-[12px] font-bold tracking-normal text-[#173B32]">Bảo mật tài khoản</h2>
            </div>
            <div className="divide-y divide-[#F0F4F2] rounded-lg bg-white text-[11.5px]">
              <button
                data-toast="Đổi mật khẩu (minh họa)"
                className="group flex w-full items-center justify-between rounded-t-lg px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#FEF3C7' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#D97706' }}>
                      key
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Đổi mật khẩu</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Quản lý phiên đăng nhập (minh họa)"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#E0F2FE' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#0284C7' }}>
                      devices
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Quản lý phiên đăng nhập</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Bật xác thực 2 lớp (minh họa)"
                className="group flex w-full items-center justify-between rounded-b-lg px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#CCFBF1' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#0D9488' }}>
                      verified_user
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Xác thực 2 lớp (2FA)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10.5px] font-medium" style={{ color: '#7C8377' }}>
                    Chưa bật
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                    chevron_right
                  </span>
                </div>
              </button>
            </div>
          </section>
          <section className="rounded-xl border border-[#E4ECE9] bg-[#F7F8F2]/90 p-2 shadow-sm">
            <div className="flex items-center gap-1.5 px-1 pb-1 text-[#173B32]">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: '#D3E6DE' }}>
                <span className="material-symbols-outlined text-[13px]" style={{ color: '#173B32' }}>
                  shield
                </span>
              </div>
              <h2 className="font-sans text-[12px] font-bold tracking-normal text-[#173B32]">Quyền riêng tư và dữ liệu</h2>
            </div>
            <div className="divide-y divide-[#F0F4F2] rounded-lg bg-white text-[11.5px]">
              <button
                data-toast="Quyền chia sẻ hồ sơ da (minh họa)"
                className="group flex w-full items-center justify-between rounded-t-lg px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#EDE9FE' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#7C3AED' }}>
                      group
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Quản lý quyền chia sẻ hồ sơ da</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Sự đồng ý xử lý dữ liệu (minh họa)"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#E0E7FF' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#4F46E5' }}>
                      assignment
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Sự đồng ý xử lý dữ liệu</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Quyền truy cập vị trí (minh họa)"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#DCFCE7' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#16A34A' }}>
                      location_on
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Quyền truy cập vị trí</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10.5px] font-medium" style={{ color: '#357D64' }}>
                    Đã bật
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                    chevron_right
                  </span>
                </div>
              </button>
              <button
                data-toast="Quyền truy cập hình ảnh (minh họa)"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#E0F2FE' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#0284C7' }}>
                      photo_camera
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Quyền truy cập hình ảnh</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10.5px] font-medium" style={{ color: '#357D64' }}>
                    Đã bật
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                    chevron_right
                  </span>
                </div>
              </button>
              <button
                data-toast="Đang chuẩn bị tệp dữ liệu cá nhân…"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#FFEDD5' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#EA580C' }}>
                      download
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Tải dữ liệu cá nhân</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Đã gửi yêu cầu xóa dữ liệu (minh họa)"
                className="group flex w-full items-center justify-between rounded-b-lg px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#FFE4E6' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#E11D48' }}>
                      delete
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Yêu cầu xóa dữ liệu</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
            </div>
          </section>
          <section className="rounded-xl border border-[#E4ECE9] bg-[#F7F8F2]/90 p-2 shadow-sm">
            <div className="flex items-center gap-1.5 px-1 pb-1 text-[#173B32]">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: '#CCFBF1' }}>
                <span className="material-symbols-outlined text-[13px]" style={{ color: '#0D9488' }}>
                  info
                </span>
              </div>
              <h2 className="font-sans text-[12px] font-bold tracking-normal text-[#173B32]">Thông tin và hỗ trợ</h2>
            </div>
            <div className="divide-y divide-[#F0F4F2] rounded-lg bg-white text-[11.5px]">
              <button
                data-toast="Điều khoản sử dụng (minh họa)"
                className="group flex w-full items-center justify-between rounded-t-lg px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#F1F5F9' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#475569' }}>
                      description
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Điều khoản sử dụng</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Chính sách bảo mật (minh họa)"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#D1FAE5' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#059669' }}>
                      verified_user
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Chính sách bảo mật</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Trung tâm trợ giúp (minh họa)"
                className="group flex w-full items-center justify-between px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#CFFAFE' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#0891B2' }}>
                      help
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Trung tâm trợ giúp</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
              <button
                data-toast="Hotline hỗ trợ: 1900 1234 (minh họa)"
                className="group flex w-full items-center justify-between rounded-b-lg px-2 py-1.5 text-left transition-colors hover:bg-[#F7F8F2]"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#DCFCE7' }}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ color: '#15803D' }}>
                      call
                    </span>
                  </div>
                  <span className="font-medium text-[#173B32]">Liên hệ hỗ trợ</span>
                </div>
                <span className="material-symbols-outlined text-[15px] text-[#74B19B] transition-colors group-hover:text-[#173B32]">
                  chevron_right
                </span>
              </button>
            </div>
          </section>
          <button
            data-tab="s02"
            data-toast="Đã đăng xuất"
            className="flex w-full flex-shrink-0 items-center justify-start gap-2.5 rounded-xl border border-[#FEE2E2] bg-[#FFF8F8] px-3 py-2 shadow-sm transition-all active:bg-red-100/70"
          >
            <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2]">
              <span className="material-symbols-outlined text-[16px] text-[#DC2626]">logout</span>
            </div>
            <span className="font-sans text-[12px] font-semibold text-[#DC2626]">Đăng xuất</span>
          </button>
        </main>
        <BottomNav role="user" active={4} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
