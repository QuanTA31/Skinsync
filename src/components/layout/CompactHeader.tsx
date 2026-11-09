import { useState, type ReactNode } from 'react'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { StatusBar } from './StatusBar'

/** Header chung của các màn Cộng đồng (36–43): status bar, nút quay lại, logo, nội dung bên phải. */
export function Top({ back, right }: { back: string; right?: ReactNode }) {
  return (
    <>
      {/* bù padding của .screen để status bar sát mép như các màn khác */}
      <div className="-mx-5 -mt-[26px] mb-1">
        <StatusBar />
      </div>
      <header className="top">
        <span className="back" data-back={back}>
          ‹
        </span>
        <BrandLogo className="brand" />
        {right ?? <span style={{ width: 30 }} />}
      </header>
    </>
  )
}

/** Dãy pill chọn một (chỉ đổi trạng thái active tại chỗ). */
export function Pills({ items, initial = 0, onPick }: { items: string[]; initial?: number; onPick?: (item: string) => void }) {
  const [on, setOn] = useState(initial)
  return (
    <div className="tags">
      {items.map((x, i) => (
        <span
          key={x}
          className={'pill ' + (i === on ? 'active' : '')}
          onClick={() => {
            setOn(i)
            onPick?.(x)
          }}
        >
          {x}
        </span>
      ))}
    </div>
  )
}

/** Nút bật/tắt đơn giản (like, lưu...). */
export function useToggle(initial = false) {
  const [v, setV] = useState(initial)
  return [v, () => setV((x) => !x)] as const
}
