import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'

/** màn mở đầu khi URL không chỉ định màn nào */
export const START_SCREEN = 's01'

interface NavApi {
  /** màn hình hiện tại */
  current: string
  /** chuyển sang màn mới (đẩy vào lịch sử) */
  go: (id: string) => void
  /** quay lại màn trước, nếu không có lịch sử thì về `fallback` */
  back: (fallback?: string) => void
  /** chuyển tab của bottom-nav: xoá lịch sử, đặt màn mới làm gốc */
  tab: (id: string) => void
  /** màn hình ngay trước màn hiện tại (nếu có) */
  previous: () => string | undefined
  /** hiện thông báo nhỏ trong khung điện thoại */
  toast: (message: string) => void
  toastMessage: string | null
}

const NavContext = createContext<NavApi | null>(null)

/** id màn hình hợp lệ trên URL: #/s01 … #/s61 */
const SCREEN_ID = /^s\d{2}$/

function readHash(): string {
  const h = window.location.hash.replace(/^#\/?/, '')
  return SCREEN_ID.test(h) ? h : START_SCREEN
}

export function NavProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<string>(readHash)
  const stack = useRef<string[]>([])
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)

  // đồng bộ URL hash <-> màn hình
  useEffect(() => {
    const target = `#/${current}`
    if (window.location.hash !== target) window.history.replaceState(null, '', target)
  }, [current])

  useEffect(() => {
    const onHash = () => {
      const next = readHash()
      setCurrent((prev) => {
        if (prev !== next) stack.current = []
        return next
      })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = useCallback((id: string) => {
    setCurrent((prev) => {
      if (prev !== id) stack.current.push(prev)
      return id
    })
  }, [])

  const back = useCallback((fallback?: string) => {
    const prev = stack.current.pop()
    setCurrent((cur) => prev ?? fallback ?? cur)
  }, [])

  const previous = useCallback(() => stack.current[stack.current.length - 1], [])

  const tab = useCallback((id: string) => {
    stack.current = []
    setCurrent(id)
  }, [])

  const toast = useCallback((message: string) => {
    setToastMessage(message)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToastMessage(null), 1800)
  }, [])

  const value = useMemo(
    () => ({ current, go, back, tab, previous, toast, toastMessage }),
    [current, go, back, tab, previous, toast, toastMessage],
  )
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export function useNav(): NavApi {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used inside <NavProvider>')
  return ctx
}
