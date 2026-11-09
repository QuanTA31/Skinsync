/**
 * Thanh "home" của iPhone. Do <Screen> vẽ ở đáy cho MỌI màn (cách mép dưới 8px),
 * màn hình không tự render component này.
 */
export function HomeIndicator({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <div className="pointer-events-none absolute bottom-2 left-1/2 z-[70] -translate-x-1/2">
      <div className={`h-[5px] w-[134px] rounded-full ${tone === 'light' ? 'bg-white' : 'bg-[#111111]'}`} />
    </div>
  )
}
