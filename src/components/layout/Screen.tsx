import { useEffect, useRef } from 'react'
import type { ReactNode, RefObject } from 'react'
import { useNav } from '@/navigation/NavProvider'
import { useDelegatedClicks } from '@/navigation/useDelegatedClicks'

interface ScreenProps {
  children: ReactNode
  /** "sm": icon Material mặc định 19px (một số màn thiết kế dùng icon nhỏ) */
  iconSize?: 'sm'
}

/**
 * Khung điện thoại dùng chung cho MỌI màn hình.
 *  - vẽ viền máy, bo góc, nền ivory (xem .phone-frame trong styles/app.css)
 *  - bắt click theo thuộc tính data-go / data-back / data-tab / data-toast… (navigation/useDelegatedClicks.ts)
 *  - [data-auto-go="sNN"] (+ data-auto-delay="ms"): tự chuyển màn sau một khoảng thời gian
 *  - [data-slider]: thanh trượt so sánh ảnh trước / sau
 */
export function Screen({ children, iconSize }: ScreenProps) {
  const onClick = useDelegatedClicks()
  const { go } = useNav()
  const ref = useRef<HTMLDivElement>(null)

  useAutoGo(ref, go)
  useCompareSlider(ref)

  return (
    <div ref={ref} className="phone-frame" data-icon-size={iconSize} onClick={onClick} onSubmit={(e) => e.preventDefault()}>
      {children}
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
