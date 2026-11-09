interface HomeIndicatorProps {
  /** floating (mặc định): nổi ở đáy màn hình · inline: nằm trong luồng bố cục */
  variant?: 'floating' | 'inline'
}

/** Vạch "home" của iPhone ở đáy màn hình. */
export function HomeIndicator({ variant = 'floating' }: HomeIndicatorProps) {
  if (variant === 'inline') {
    return (
      <div className="flex w-full shrink-0 justify-center bg-ivory pb-2 pt-0.5">
        <div className="h-[5px] w-[134px] rounded-full bg-black/90" />
      </div>
    )
  }
  return (
    <div className="pointer-events-none absolute bottom-[8px] left-1/2 z-50 -translate-x-1/2">
      <div className="h-[5px] w-[134px] rounded-[3px] bg-[#111111]" />
    </div>
  )
}
