import { usePlan } from '@/state/PlanProvider'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 48 · Tài khoản của tôi */
export default function S48Account() {
  const { active } = usePlan()
  return (
    <Screen tab={4} iconSize="sm">
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <div className="z-20 mb-[74px] flex flex-1 flex-col justify-between overflow-hidden px-4 pb-1 pt-1">
          <div className="flex flex-col">
            <div className="relative mb-1 flex h-7 items-center justify-between">
              <button
                aria-label="Quay lại"
                data-back="s10"
                className="-ml-1 flex h-7 w-7 items-center justify-center rounded-full text-[#173B32] transition active:bg-[#E7EAD9]/60"
                type="button"
              >
                <span className="material-symbols-outlined text-[21px]">chevron_left</span>
              </button>
              <BrandLogo />
              <div className="h-7 w-7" />
            </div>
            <div className="px-0.5">
              <h1 className="font-serif-brand text-[22px] font-bold leading-tight text-[#173B32]">Tài khoản của tôi</h1>
              <p className="mt-0.5 text-[12px] leading-snug text-[#5F8075]">Quản lý thông tin cá nhân và các cài đặt của bạn.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[18px] border border-[#E7ECEA] bg-white px-3.5 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="shadow-xs h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full border border-[#DEE4E2] bg-[#EDEFE2]">
              <img alt="Nguyễn Minh Anh" className="h-full w-full object-cover" src="/img/people/user-minh-anh.jpg" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-serif-brand truncate text-[15.5px] font-bold text-[#173B32]">Nguyễn Minh Anh</h2>
                <button
                  aria-label="Sửa thông tin"
                  data-go="s49"
                  className="flex items-center text-[#357D64] transition hover:text-[#173B32]"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">edit</span>
                </button>
                <span
                  data-go="s32"
                  className="shadow-xs ml-auto inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#173B32] px-2 py-0.5 text-[10px] font-semibold text-[#F3C969]"
                >
                  <span>👑</span> {active.name}
                </span>
              </div>
              <p className="mt-1 truncate text-[11px] text-[#7F9B91]">
                ID: SKS123456 <span className="mx-1 text-[#D5DDDA]">|</span> minh.anh@gmail.com
              </p>
            </div>
          </div>
          <a
            data-go="s50"
            className="flex items-center justify-between rounded-[16px] border border-[#D5E8E0] bg-[#EBF5F1] px-3.5 py-2.5 shadow-[0_2px_8px_rgba(23,59,50,0.03)] transition active:bg-[#E0EFE9]"
            href="#"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D7EBE3] text-[#173B32]">
                <span className="material-symbols-outlined text-[19px]">face_retouching_natural</span>
              </div>
              <div>
                <p className="text-[14px] font-bold leading-tight text-[#173B32]">Hồ sơ da của bạn</p>
                <p className="mt-0.5 text-[11px] leading-tight text-[#5F8075]">Đã cập nhật 14/10/2026</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[18px] text-[#173B32]">chevron_right</span>
          </a>
          <div className="divide-y divide-[#F1F4F3] rounded-[18px] border border-[#E7ECEA] bg-white px-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <a data-go="s49" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#E0F2FE]">
                  <span className="material-symbols-outlined text-[16px] text-[#0284C7]">person</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Hồ sơ cá nhân</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s50" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#FCE7F3]">
                  <span className="material-symbols-outlined text-[16px] text-[#DB2777]">temp_preferences_custom</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Hồ sơ làn da</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s32" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#FEF3C7]">
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">event_upcoming</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Gói dịch vụ của tôi</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s33" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7]">
                  <span className="material-symbols-outlined text-[16px] text-[#16A34A]">calendar_month</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Lịch sử khám</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s51" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE]">
                  <span className="material-symbols-outlined text-[16px] text-[#7C3AED]">shopping_bag</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Đơn hàng của tôi</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s41" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#FFEDD5]">
                  <span className="material-symbols-outlined text-[16px] text-[#EA580C]">stars</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Điểm thưởng</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11.5px] font-semibold text-[#173B32]">70 điểm</span>
                <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                  chevron_right
                </span>
              </div>
            </a>
          </div>
          <div className="divide-y divide-[#F1F4F3] rounded-[18px] border border-[#E7ECEA] bg-white px-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <a data-go="s44" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#CCFBF1]">
                  <span className="material-symbols-outlined text-[16px] text-[#0D9488]">notifications</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Thông báo</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s52" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[16px] text-[#475569]">security</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Quyền riêng tư và bảo mật</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
            <a data-go="s52" className="group flex items-center justify-between py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg bg-[#E0E7FF]">
                  <span className="material-symbols-outlined text-[16px] text-[#4F46E5]">help</span>
                </div>
                <span className="text-[12.5px] font-medium text-[#173B32]">Trợ giúp</span>
              </div>
              <span className="material-symbols-outlined text-[17px] text-[#9FB0A9] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </a>
          </div>
          <button
            data-tab="s02"
            data-toast="Đã đăng xuất"
            className="flex w-full items-center justify-center gap-2 rounded-[16px] border border-[#FBEAE8] bg-white py-2.5 text-[#E04F5F] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition active:bg-[#FEF5F5]"
            type="button"
          >
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2]">
              <span className="material-symbols-outlined text-[16px] text-[#DC2626]">logout</span>
            </div>
            <span className="text-[13px] font-bold text-[#E04F5F]">Đăng xuất</span>
          </button>
        </div>
      </div>
    </Screen>
  )
}
