/**
 * Logo SKINSYNC – MỘT phiên bản duy nhất cho toàn bộ app.
 * Mọi màn hình hiển thị logo đều dùng component này, không tự viết lại chữ "SKINSYNC".
 *
 *  <BrandLogo />                              header: biểu tượng lá + chữ, nằm ngang
 *  <BrandLogo variant="stacked" />            biểu tượng ở trên, chữ + khẩu hiệu ở dưới
 *  <BrandLogo variant="wordmark" size="lg" /> chỉ chữ (dùng trong tiêu đề)
 */
export const BRAND_NAME = 'SKINSYNC'
export const BRAND_TAGLINE = 'Da khỏe hơn · Sống tự tin hơn'

type Size = 'sm' | 'md' | 'lg'

interface BrandLogoProps {
  variant?: 'inline' | 'stacked' | 'wordmark'
  size?: Size
  /** hiện khẩu hiệu dưới chữ (mặc định: có ở dạng stacked) */
  tagline?: boolean
  className?: string
}

const WORD_SIZE: Record<Size, number> = { sm: 13, md: 15, lg: 22 }
const MARK_SIZE: Record<Size, number> = { sm: 16, md: 18, lg: 34 }

export function BrandLogo({ variant = 'inline', size = 'md', tagline, className = '' }: BrandLogoProps) {
  const showTagline = tagline ?? variant === 'stacked'
  const stacked = variant === 'stacked'
  const wordSize = stacked && size === 'md' ? 15 : WORD_SIZE[size]
  const markSize = stacked ? (size === 'lg' ? 34 : 24) : MARK_SIZE[size]

  return (
    <div className={`brand-logo ${stacked ? 'brand-logo--stacked' : ''} ${className}`} aria-label={BRAND_NAME} role="img">
      {variant !== 'wordmark' && <BrandMark size={markSize} />}
      <div className="flex flex-col items-center gap-1">
        <span className="brand-logo__word" style={{ fontSize: wordSize }}>
          {BRAND_NAME}
        </span>
        {showTagline && <span className="brand-logo__tagline">{BRAND_TAGLINE}</span>}
      </div>
    </div>
  )
}

/** Biểu tượng hai chiếc lá của SKINSYNC. */
export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 28C16 28 15 20 9 16C3 12 5 4 15 5C17 11 14 18 16 28Z" fill="var(--color-ink)" />
      <path d="M16 28C16 28 17.5 19 23.5 16.5C29.5 14 27.5 7 19.5 8C17.5 13.5 18 19 16 28Z" fill="var(--color-primary)" />
      <path d="M16 28V12" stroke="var(--color-bg)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}
