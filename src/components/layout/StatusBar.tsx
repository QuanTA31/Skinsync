interface StatusBarProps {
  /** dark: chữ/icon đen (nền sáng) · light: chữ/icon trắng (nền ảnh tối, camera) */
  tone?: 'dark' | 'light'
}

/**
 * Thanh trạng thái iOS + tai thỏ (dynamic island).
 * Do <Screen> vẽ ở vị trí cố định cho MỌI màn – màn hình không tự render component này,
 * chỉ chừa chỗ bằng <SafeAreaTop /> (xem SafeArea.tsx).
 */
export function StatusBar({ tone = 'dark' }: StatusBarProps) {
  const color = tone === 'light' ? 'text-white' : 'text-neutral-900'
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-0 z-[70] flex h-safe-top items-center justify-between px-7 pt-1 ${color}`}>
      <span className="w-[54px] text-[14px] font-semibold tracking-tight">9:41</span>
      <DynamicIsland />
      <StatusIcons />
    </div>
  )
}

/** Tai thỏ: căn giữa, cách mép trên 11px */
function DynamicIsland() {
  return (
    <div className="absolute left-1/2 top-[11px] flex h-[32px] w-[116px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-3">
      <div className="mr-1.5 h-3 w-3 rounded-full bg-[#1c1c1e]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#0a192f]/70" />
    </div>
  )
}

function StatusIcons() {
  return (
    <div className="flex w-[54px] items-center justify-end gap-1.5" aria-hidden="true">
      <svg className="h-3.5 w-4 fill-current" viewBox="0 0 17 11">
        <rect height="3" rx="0.5" width="2.5" x="0" y="8" />
        <rect height="5" rx="0.5" width="2.5" x="4" y="6" />
        <rect height="8" rx="0.5" width="2.5" x="8" y="3" />
        <rect height="11" rx="0.5" width="2.5" x="12" y="0" />
      </svg>
      <svg className="h-3 w-3.5 fill-current" viewBox="0 0 16 12">
        <path d="M8 9.6a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm-4.7-3a6.6 6.6 0 019.4 0 .8.8 0 001.1-1.1 8.2 8.2 0 00-11.6 0 .8.8 0 001.1 1.1zm-2.4-2.4a10 10 0 0114.2 0 .8.8 0 001.1-1.1 11.6 11.6 0 00-16.4 0 .8.8 0 001.1 1.1z" />
      </svg>
      <div className="relative flex h-2.5 w-5 items-center rounded-[3px] border border-current p-[1px] opacity-90">
        <div className="h-full w-full rounded-[1.5px] bg-current" />
        <div className="absolute -right-1 top-0.5 h-[5px] w-[1.5px] rounded-r-sm bg-current" />
      </div>
    </div>
  )
}
