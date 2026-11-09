import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { NavProvider, useNav } from '@/navigation/NavProvider'
import { PlanProvider } from '@/state/PlanProvider'
import { ScreenPanel } from './ScreenPanel'
import { SCREEN_BY_ID } from './screens'
import './demo-shell.css'

const PHONE_W = 406 // 390 + viền 2×8
const PHONE_H = 860
const PANEL_W = 320

export default function App() {
  return (
    <NavProvider>
      <PlanProvider>
        <DemoStage />
      </PlanProvider>
    </NavProvider>
  )
}

/** Sân khấu demo: panel danh sách màn + điện thoại được thu phóng vừa cửa sổ. */
function DemoStage() {
  const { current, toastMessage, back } = useNav()
  const [panelOpen, setPanelOpen] = useState(() => window.innerWidth > 900)
  const phoneRef = useRef<HTMLDivElement>(null)
  const size = useNaturalSize(phoneRef, current)
  const scale = useFitScale(panelOpen, size.w, size.h)
  const screen = SCREEN_BY_ID[current]
  const ScreenComponent = screen?.component

  useEffect(() => {
    document.title = screen ? `${current.slice(1)} · ${screen.title} – SKINSYNC` : 'SKINSYNC – Demo'
  }, [current, screen])

  // về đầu trang khi đổi màn hình
  useEffect(() => {
    phoneRef.current?.querySelectorAll<HTMLElement>('*').forEach((el) => {
      if (el.scrollTop) el.scrollTop = 0
    })
  }, [current])

  return (
    <div className="demo-root">
      {panelOpen && <ScreenPanel onClose={() => setPanelOpen(false)} />}

      <main className="demo-stage">
        {!panelOpen && (
          <button className="demo-btn demo-btn--float demo-btn--left" onClick={() => setPanelOpen(true)}>
            ☰ Danh sách màn hình
          </button>
        )}
        <button className="demo-btn demo-btn--float demo-btn--right" onClick={() => back()} title="Quay lại màn trước">
          ← Quay lại
        </button>

        <div style={{ width: size.w * scale, height: size.h * scale, position: 'relative' }}>
          <div ref={phoneRef} className="demo-phone" style={{ transform: `scale(${scale})` }}>
            <Suspense fallback={<div style={{ width: PHONE_W, height: PHONE_H }} />}>
              {ScreenComponent ? <ScreenComponent key={current} /> : <p className="demo-missing">Không tìm thấy màn {current}</p>}
            </Suspense>
            {toastMessage && <div className="demo-toast">{toastMessage}</div>}
          </div>
        </div>
      </main>
    </div>
  )
}

/** đo kích thước thật của màn đang hiển thị (các màn cao 844 hoặc 884px) */
function useNaturalSize(ref: RefObject<HTMLElement | null>, dep: unknown) {
  const [size, setSize] = useState({ w: PHONE_W, h: PHONE_H })
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => {
      const w = el.offsetWidth || PHONE_W
      const h = el.offsetHeight || PHONE_H
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref, dep])
  return size
}

/** hệ số thu nhỏ để điện thoại vừa cửa sổ trình duyệt */
function useFitScale(panelOpen: boolean, w: number, h: number) {
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const calc = () => {
      const availH = window.innerHeight - 32
      const availW = window.innerWidth - (panelOpen && window.innerWidth > 900 ? PANEL_W : 0) - 16
      setScale(Math.min(1, availH / h, availW / w))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [panelOpen, w, h])
  return scale
}
