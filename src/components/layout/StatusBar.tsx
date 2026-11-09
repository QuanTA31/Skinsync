interface StatusBarProps {
  /**
   * inline   (mặc định): dynamic island + thanh trạng thái nằm trong luồng bố cục, cao 44px
   * floating: thanh trạng thái đè lên nội dung (position: absolute), dùng cho màn có ảnh/khối tràn lên đỉnh
   */
  variant?: 'inline' | 'floating'
}

/** Thanh trạng thái iOS giả lập (giờ, sóng, wifi, pin) + dynamic island. */
export function StatusBar({ variant = 'inline' }: StatusBarProps) {
  if (variant === 'floating') {
    return (
      <header className="absolute left-0 top-0 z-50 flex h-[44px] w-full shrink-0 items-center justify-between px-7 text-stone-900">
        <span className="text-[14px] font-semibold tracking-tight">9:41</span>
        <DynamicIsland className="top-[10px]" />
        <StatusIcons />
      </header>
    )
  }
  return (
    <>
      <DynamicIsland className="top-[10px]" />
      <div className="z-40 flex h-[44px] w-full shrink-0 items-center justify-between px-7 pt-3 text-xs font-semibold tracking-tight text-neutral-900">
        <span className="pl-1">9:41</span>
        <StatusIcons />
      </div>
    </>
  )
}

function DynamicIsland({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute left-1/2 z-50 flex h-[32px] w-[112px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-3 ${className}`}
    >
      <div className="mr-1 h-3 w-3 rounded-full bg-[#1c1c1e]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#0a192f]/60" />
    </div>
  )
}

function StatusIcons() {
  return (
    <div className="flex items-center gap-1.5 pr-0.5">
      <svg className="h-3.5 w-4 fill-current" viewBox="0 0 17 11" aria-hidden="true">
        <rect height="3" rx="0.5" width="2.5" x="0" y="8" />
        <rect height="5" rx="0.5" width="2.5" x="4" y="6" />
        <rect height="8" rx="0.5" width="2.5" x="8" y="3" />
        <rect height="11" rx="0.5" width="2.5" x="12" y="0" />
      </svg>
      <svg className="h-3 w-3.5 fill-current" viewBox="0 0 16 12" aria-hidden="true">
        <path d="M8 9.6a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm-4.7-3a6.6 6.6 0 019.4 0 .8.8 0 001.1-1.1 8.2 8.2 0 00-11.6 0 .8.8 0 001.1 1.1zm-2.4-2.4a10 10 0 0114.2 0 .8.8 0 001.1-1.1 11.6 11.6 0 00-16.4 0 .8.8 0 001.1 1.1z" />
      </svg>
      <div className="relative flex h-2.5 w-5 items-center rounded-[3px] border border-black/80 p-[1px]">
        <div className="h-full w-full rounded-[1.5px] bg-black" />
        <div className="absolute -right-1 top-0.5 h-[5px] w-[1.5px] rounded-r-sm bg-black" />
      </div>
    </div>
  )
}
