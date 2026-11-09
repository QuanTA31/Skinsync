import type { ReactNode } from 'react'
import baseCss from '@/styles/scoped/base.css?inline'
import { BottomNav } from './BottomNav'
import { HomeIndicator } from './HomeIndicator'
import { Screen } from './Screen'

interface ScopedScreenProps {
  /** id màn hình – cũng là class bọc CSS riêng (vd: "s23") */
  id: string
  /** CSS riêng của màn (import bằng `?inline`), chỉ áp dụng trong phạm vi `.${id}` */
  css: string
  /** tab đang active (0–4); null = không hiện tab bar */
  tab: number | null
  role?: 'user' | 'doctor'
  children: ReactNode
}

const scoped = (selector: string, css: string) => `@scope (${selector}) {\n${css.replace(/:root/g, ':scope')}\n}`

/**
 * Khung cho các màn viết bằng CSS thuần (không phải Tailwind).
 *  - styles/scoped/base.css: bộ style nền, áp dụng trong `.scoped`
 *  - css riêng của màn: áp dụng trong `.${id}`
 * Cả hai được bọc @scope nên không rò rỉ sang màn khác.
 */
export function ScopedScreen({ id, css, tab, role = 'user', children }: ScopedScreenProps) {
  return (
    <Screen>
      <div className={`scoped ${id} relative h-[844px] w-[390px] overflow-hidden bg-ivory`}>
        <style>{scoped('.scoped', baseCss)}</style>
        <style>{scoped(`.${id}`, css)}</style>
        {children}
        {tab !== null && (
          <>
            <BottomNav role={role} active={tab} />
            <HomeIndicator />
          </>
        )}
      </div>
    </Screen>
  )
}
