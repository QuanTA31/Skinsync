import { useEffect, useMemo, useRef, useState } from 'react'
import { useNav } from '@/navigation/NavProvider'
import { SCREENS } from './screens'
import type { ScreenDef } from './screens'

/** Panel bên trái: tìm và nhảy nhanh tới bất kỳ màn hình nào. */
export function ScreenPanel({ onClose }: { onClose: () => void }) {
  const { current, tab } = useNav()
  const [query, setQuery] = useState('')
  const activeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' })
  }, [current])

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const map = new Map<string, ScreenDef[]>()
    for (const s of SCREENS) {
      if (needle && !`${s.id} ${s.title}`.toLowerCase().includes(needle)) continue
      map.set(s.group, [...(map.get(s.group) ?? []), s])
    }
    return [...map.entries()]
  }, [query])

  return (
    <aside className="demo-panel">
      <div className="demo-panel__head">
        <div className="demo-panel__title-row">
          <strong className="demo-panel__title">SKINSYNC · DEMO</strong>
          <button className="demo-btn" onClick={onClose} title="Ẩn danh sách">
            ✕
          </button>
        </div>
        <p className="demo-panel__hint">{SCREENS.length} màn hình · bấm vào nút trong màn hình để di chuyển</p>
        <input className="demo-panel__search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm màn hình…" />
      </div>

      <div className="demo-panel__list">
        {groups.map(([group, list]) => (
          <section key={group}>
            <h3 className="demo-panel__group">{group}</h3>
            {list.map((s) => {
              const on = s.id === current
              return (
                <button
                  key={s.id}
                  ref={on ? activeRef : undefined}
                  onClick={() => tab(s.id)}
                  className={`demo-panel__item ${on ? 'is-active' : ''}`}
                >
                  <span className="demo-panel__num">{s.id.slice(1)}</span>
                  <span>{s.title}</span>
                </button>
              )
            })}
          </section>
        ))}
      </div>
    </aside>
  )
}
