import type { ReactNode } from 'react'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { StatusBar } from '@/components/layout/StatusBar'

/* Header + icon dùng chung cho nhóm màn Premium (30–35) */

export const Svg = ({
  size = 16,
  sw = 2,
  fill = 'none',
  stroke = 'currentColor',
  children,
}: {
  size?: number
  sw?: number
  fill?: string
  stroke?: string
  children: ReactNode
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
)

export const ChevronLeftIcon = () => (
  <Svg size={20} sw={2.5}>
    <path d="m15 18-6-6 6-6" />
  </Svg>
)

export const GemIcon = ({ stroke = 'currentColor' }: { stroke?: string }) => (
  <Svg size={20} stroke={stroke}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M11 3 8 9l4 12 4-12-3-6" />
    <path d="M2 9h20" />
  </Svg>
)

export const ArrowRightIcon = () => (
  <Svg sw={2.5}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Svg>
)

export const CheckIcon = () => (
  <Svg sw={2.5}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
)

export const SignalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="16" width="3" height="5" rx="0.5" />
    <rect x="7" y="12" width="3" height="9" rx="0.5" />
    <rect x="12" y="8" width="3" height="13" rx="0.5" />
    <rect x="17" y="4" width="3" height="17" rx="0.5" />
  </svg>
)

export const WifiIcon = () => (
  <Svg size={14}>
    <path d="M12 20h.01" />
    <path d="M2 8.82a15 15 0 0 1 20 0" />
    <path d="M5 12.85a10 10 0 0 1 14 0" />
    <path d="M8.5 16.88a5 5 0 0 1 7 0" />
  </Svg>
)

export const BatteryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="7" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="9" width="9" height="6" rx="1" />
    <path d="M22 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/** Họa tiết lá góc trên + status bar + header (nút quay lại · logo). */
export function AppHeader({ back, backToast }: { back: string; backToast?: string }) {
  return (
    <>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-32 w-32 overflow-hidden opacity-40">
        <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
          <path d="M100 0C70 10 50 40 40 80C35 50 10 20 0 0H100Z" fill="#357D64" opacity="0.15" />
          <path d="M100 0C80 20 70 50 65 100C60 70 30 30 0 0H100Z" fill="#357D64" opacity="0.2" />
        </svg>
      </div>

      <StatusBar />

      <div className="z-20 flex shrink-0 items-center justify-between px-5 py-2">
        <button
          data-back={back}
          data-toast={backToast}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200/60 bg-white/80 text-slate-700 shadow-sm transition-all hover:bg-white active:scale-95"
          aria-label="Back"
        >
          <ChevronLeftIcon />
        </button>
        <BrandLogo />
        <div className="w-9" />
      </div>
    </>
  )
}

/** Style cho thẻ <main> của nhóm màn Premium: cột flex, chừa 78px cho tab bar. */
export const appMainStyle = {
  padding: '0 0 78px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
} as const
