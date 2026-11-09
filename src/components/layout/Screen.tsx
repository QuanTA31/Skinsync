import { useEffect, useRef } from 'react'
import type { ReactNode, RefObject } from 'react'
import { BotanicalCorner } from '@/components/ui/BotanicalCorner'
import { useNav } from '@/navigation/NavProvider'
import { useDelegatedClicks } from '@/navigation/useDelegatedClicks'
import { BottomNav } from './BottomNav'
import { HomeIndicator } from './HomeIndicator'
import { StatusBar } from './StatusBar'

interface ScreenProps {
  children: ReactNode
  /** tab đang chọn trên tab bar (0–4). Bỏ trống = màn không có tab bar */
  tab?: number
  /** tab bar phía người dùng hay bác sĩ */
  role?: 'user' | 'doctor'
  /** màu chữ status bar + thanh home: "light" khi đỉnh/đáy màn là ảnh tối */
  tone?: 'dark' | 'light'
  /** lá trang trí góc phải trên (mặc định có). Tắt cho màn toàn ảnh như màn chào, camera */
  decor?: boolean
  /** "sm": icon Material mặc định 19px (một số màn thiết kế dùng icon nhỏ) */
  iconSize?: 'sm'
}

/**
 * "Thân máy" dùng chung cho MỌI màn hình – 390×844 (iPhone 14).
 *
 *  ┌──────────────────────────┐
 *  │ 9:41   (tai thỏ)   ▮▮ ⌔ ▭ │  ← StatusBar: luôn cùng vị trí (màn chừa chỗ bằng <SafeAreaTop />)
 *  │                      🌿   │  ← BotanicalCorner: trang trí chung
 *  │        nội dung màn       │
 *  │ ⌂     ◫     ◷     ▢     ◯ │  ← BottomNav (khi có prop `tab`)
 *  │          ▬▬▬▬▬            │  ← HomeIndicator
 *  └──────────────────────────┘
 *
 * Ngoài ra: bắt click theo data-go / data-back / data-tab / data-toast… (navigation/useDelegatedClicks.ts),
 * [data-auto-go] tự chuyển màn, [data-slider] thanh so sánh ảnh trước/sau.
 */
export function Screen({ children, tab, role = 'user', tone = 'dark', decor = true, iconSize }: ScreenProps) {
  const onClick = useDelegatedClicks()
  const { go } = useNav()
  const ref = useRef<HTMLDivElement>(null)

  useAutoGo(ref, go)
  useCompareSlider(ref)

  return (
    <div className="phone-frame" data-icon-size={iconSize} onClick={onClick} onSubmit={(e) => e.preventDefault()}>
      <div ref={ref} className="phone-screen">
        {children}
        {decor && <BotanicalCorner />}
        {tab !== undefined && <BottomNav role={role} active={tab} />}
        <StatusBar tone={tone} />
        <HomeIndicator tone={tab !== undefined ? 'dark' : tone} />
      </div>
    </div>
  )
}

function useAutoGo(ref: RefObject<HTMLDivElement | null>, go: (id: string) => void) {
  useEffect(() => {
    const el = ref.current?.querySelector<HTMLElement>('[data-auto-go]')
    if (!el) return
    const timer = window.setTimeout(() => go(el.dataset.autoGo!), Number(el.dataset.autoDelay ?? 3000))
    return () => window.clearTimeout(timer)
  }, [ref, go])
}

function useCompareSlider(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const box = ref.current?.querySelector<HTMLElement>('[data-slider]')
    const clip = box?.querySelector<HTMLElement>('[data-slider-clip]')
    const handle = box?.querySelector<HTMLElement>('[data-slider-handle]')
    if (!box || !clip || !handle) return

    let dragging = false
    const update = (clientX: number) => {
      const r = box.getBoundingClientRect()
      const scale = r.width / box.offsetWidth || 1 // khung điện thoại có thể đang bị thu nhỏ bằng transform
      const x = Math.min(Math.max(clientX - r.left, 0), r.width) / scale
      const pct = (x / box.offsetWidth) * 100
      clip.style.width = `${pct}%`
      handle.style.left = `${pct}%`
    }
    const down = (e: PointerEvent) => {
      dragging = true
      update(e.clientX)
    }
    const move = (e: PointerEvent) => dragging && update(e.clientX)
    const up = () => (dragging = false)

    box.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    return () => {
      box.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
  }, [ref])
}
