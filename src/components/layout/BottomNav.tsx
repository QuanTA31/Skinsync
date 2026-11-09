import type { ReactNode } from 'react'

interface NavTab {
  label: string
  /** id màn hình đích */
  to: string
  icon: ReactNode
}

const ICONS = {
  home: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  community: (
    <>
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </>
  ),
  routine: (
    <>
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <circle cx="16" cy="16" r="6" />
      <path d="M16 14v2.2l1.6 1" />
    </>
  ),
  product: (
    <>
      <rect x="6" y="11" width="12" height="11" rx="2" />
      <path d="M9 11V8h6v3" />
      <path d="M12 8V4h4" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.66V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.66" />
    </>
  ),
}

/** Tab bar dùng chung cho mọi màn sau đăng nhập (người dùng) */
export const USER_TABS: NavTab[] = [
  { label: 'Trang chủ', to: 's10', icon: ICONS.home },
  { label: 'Cộng đồng', to: 's36', icon: ICONS.community },
  { label: 'Routine', to: 's16', icon: ICONS.routine },
  { label: 'Sản phẩm', to: 's19', icon: ICONS.product },
  { label: 'Hồ sơ', to: 's48', icon: ICONS.profile },
]

/** Tab bar phía bác sĩ – cùng giao diện, khác màn đích */
export const DOCTOR_TABS: NavTab[] = [
  { label: 'Trang chủ', to: 's53', icon: ICONS.home },
  { label: 'Cộng đồng', to: 's57', icon: ICONS.community },
  { label: 'Routine', to: 's54', icon: ICONS.routine },
  { label: 'Sản phẩm', to: 's60', icon: ICONS.product },
  { label: 'Hồ sơ', to: 's55', icon: ICONS.profile },
]

interface BottomNavProps {
  role?: 'user' | 'doctor'
  /** index tab đang chọn (0–4), -1 = không tab nào */
  active?: number
}

/** Thanh điều hướng đáy. Bấm tab = data-tab → xoá lịch sử và mở màn gốc của tab. */
export function BottomNav({ role = 'user', active = -1 }: BottomNavProps) {
  const tabs = role === 'doctor' ? DOCTOR_TABS : USER_TABS
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-40 flex h-[78px] items-start justify-around border-t border-line bg-[#FBFBF7] px-1 pt-2.5">
      {tabs.map((t, i) => {
        const on = i === active
        return (
          <button
            key={t.to}
            type="button"
            data-tab={t.to}
            aria-current={on ? 'page' : undefined}
            className={`flex flex-1 flex-col items-center justify-center gap-[3px] text-[11px] ${on ? 'font-bold text-primary' : 'font-medium text-muted'}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {t.icon}
            </svg>
            <span>{t.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
