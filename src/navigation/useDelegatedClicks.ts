import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { useNav } from './NavProvider'

/**
 * Bắt click trên nội dung HTML tĩnh / JSX theo thuộc tính data-*:
 *   data-go="s10"        → chuyển tới màn s10
 *   data-back            → quay lại (data-back="s10" = màn dự phòng)
 *   data-tab="s10"       → chuyển tab (xoá lịch sử)
 *   data-toast="..."     → hiện thông báo demo
 *   data-hide=".sel"     → ẩn các phần tử khớp selector trong màn hình (vd: chấm "chưa đọc")
 *   data-pills           → trên container: bấm 1 phần tử con để chọn (đổi giao diện active với phần tử có data-on)
 *   data-toggle data-alt="…" → công tắc: bấm để đổi class hiện tại <-> class trong data-alt
 *   (data-toast có thể đi kèm data-go / data-back: hiện thông báo rồi chuyển màn)
 */
function swapLook(a: HTMLElement, b: HTMLElement) {
  // nếu 2 phần tử có cấu trúc con giống nhau → đổi giao diện của từng cặp con tương ứng
  const as = [a, ...Array.from(a.querySelectorAll<HTMLElement>('*'))]
  const bs = [b, ...Array.from(b.querySelectorAll<HTMLElement>('*'))]
  if (as.length === bs.length) as.forEach((el, i) => swapOne(el, bs[i]))
  else swapOne(a, b)
}

function swapOne(a: HTMLElement, b: HTMLElement) {
  const ca = a.getAttribute('class')
  const sa = a.getAttribute('style')
  const cb = b.getAttribute('class')
  const sb = b.getAttribute('style')
  if (cb === null) a.removeAttribute('class')
  else a.setAttribute('class', cb)
  if (sb === null) a.removeAttribute('style')
  else a.setAttribute('style', sb)
  if (ca === null) b.removeAttribute('class')
  else b.setAttribute('class', ca)
  if (sa === null) b.removeAttribute('style')
  else b.setAttribute('style', sa)
}

export function useDelegatedClicks() {
  const nav = useNav()
  return useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement

      // liên kết giả <a href="#"> không được đổi hash
      if (target.closest('a[href="#"]')) e.preventDefault()

      // chọn pill / tab trong nhóm
      const pill = target.closest<HTMLElement>('[data-pills] > *')
      if (pill && pill.parentElement) {
        const group = pill.parentElement
        const on = group.querySelector<HTMLElement>(':scope > [data-on]')
        if (on && on !== pill) {
          swapLook(on, pill)
          on.removeAttribute('data-on')
          pill.setAttribute('data-on', '')
        }
      }

      // công tắc bật/tắt: đổi class hiện tại với class trong data-alt
      const tg = target.closest<HTMLElement>('[data-toggle]')
      if (tg) {
        const alt = tg.getAttribute('data-alt')
        if (alt !== null) {
          tg.setAttribute('data-alt', tg.getAttribute('class') ?? '')
          tg.setAttribute('class', alt)
        }
      }

      // kích hoạt nút đang "disabled": [data-activate="#id"] → phần tử đích đổi sang class data-alt và nhận data-go-after
      const activator = target.closest<HTMLElement>('[data-activate]')
      if (activator) {
        const root = document
        root.querySelectorAll<HTMLElement>(activator.dataset.activate!).forEach((el) => {
          const alt = el.getAttribute('data-alt')
          if (alt !== null) {
            el.setAttribute('class', alt)
            el.removeAttribute('data-alt')
          }
          if (el.dataset.goAfter) {
            const prev = nav.previous()
            const from = el.dataset.altFrom?.split(',')
            el.dataset.go = el.dataset.goAfterAlt && prev && from?.includes(prev) ? el.dataset.goAfterAlt : el.dataset.goAfter
            delete el.dataset.goAfter
          }
          el.removeAttribute('data-toast')
        })
      }

      // tăng / giảm số lượng: nút [data-step="±1"] trong khối [data-qty-group] có phần tử [data-qty]
      const stepper = target.closest<HTMLElement>('[data-step]')
      if (stepper) {
        const q = stepper.closest('[data-qty-group]')?.querySelector<HTMLElement>('[data-qty]')
        if (q) q.textContent = String(Math.max(1, (parseInt(q.textContent ?? '1', 10) || 1) + Number(stepper.dataset.step)))
      }

      // hiện / ẩn mật khẩu: nút [data-reveal] nằm cùng khối .relative với <input>
      const reveal = target.closest<HTMLElement>('[data-reveal]')
      if (reveal) {
        const input = reveal.parentElement?.querySelector<HTMLInputElement>('input')
        if (input) input.type = input.type === 'password' ? 'text' : 'password'
      }

      // xoá thẻ chứa nút (vd: duyệt xong thì thẻ biến mất khỏi danh sách)
      const dismisser = target.closest<HTMLElement>('[data-dismiss]')
      if (dismisser) dismisser.closest(dismisser.dataset.dismiss!)?.remove()

      // ẩn phần tử
      const hider = target.closest<HTMLElement>('[data-hide]')
      if (hider) {
        const root = document
        root.querySelectorAll<HTMLElement>(hider.dataset.hide!).forEach((n) => (n.style.display = 'none'))
      }

      const el = target.closest<HTMLElement>('[data-go],[data-back],[data-tab],[data-toast]')
      if (!el) return
      const ds = el.dataset
      e.preventDefault()
      if (ds.toast !== undefined) nav.toast(ds.toast)
      if (ds.go !== undefined) nav.go(ds.go)
      else if (ds.back !== undefined) nav.back(ds.back || undefined)
      else if (ds.tab !== undefined) nav.tab(ds.tab)
    },
    [nav],
  )
}
