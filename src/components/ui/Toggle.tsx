import { useState } from 'react'

interface ToggleProps {
  defaultOn?: boolean
  onChange?: (on: boolean) => void
  label?: string
}

/** Công tắc bật/tắt nhỏ (màn cài đặt, nhắc nhở). */
export function Toggle({ defaultOn = false, onChange, label }: ToggleProps) {
  const [on, setOn] = useState(defaultOn)
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => {
        setOn(!on)
        onChange?.(!on)
      }}
      className={`flex h-[18px] w-8 shrink-0 items-center rounded-full p-0.5 transition-colors ${on ? 'justify-end bg-primary' : 'justify-start bg-[#CCC8BC]'}`}
    >
      <span className="h-3.5 w-3.5 rounded-full bg-white shadow-sm" />
    </button>
  )
}
