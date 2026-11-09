import { useState } from 'react'
import type { ReactNode } from 'react'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'
import { useNav } from '@/navigation/NavProvider'

const UPDATED_AT = '01/11/2026'

const SECTIONS = [
  {
    title: 'Phạm vi dịch vụ',
    body: 'SKINSYNC cung cấp công cụ phân tích làn da bằng AI, gợi ý quy trình chăm sóc, kết nối bác sĩ da liễu và cộng đồng chia sẻ kinh nghiệm chăm sóc da.',
  },
  {
    title: 'Không thay thế chẩn đoán y khoa',
    body: 'Kết quả phân tích AI chỉ mang tính tham khảo. Mọi chẩn đoán và chỉ định điều trị được thực hiện bởi bác sĩ da liễu trong buổi tư vấn hoặc thăm khám.',
  },
  {
    title: 'Tài khoản của bạn',
    body: 'Bạn chịu trách nhiệm cung cấp thông tin chính xác và bảo mật mật khẩu. Mỗi tài khoản chỉ dành cho một người sử dụng.',
  },
  {
    title: 'Ảnh da & dữ liệu sức khỏe',
    body: 'Ảnh chụp làn da và thông tin sức khỏe được mã hóa, chỉ dùng để phân tích, theo dõi tiến trình và chia sẻ với bác sĩ khi bạn cho phép. Bạn có thể yêu cầu xóa dữ liệu bất kỳ lúc nào.',
  },
  {
    title: 'Gói dịch vụ & thanh toán',
    body: 'Gói Base miễn phí. Các gói Premium Care, Premium Plus, Premium Complete và Pay-per Consultation được thanh toán trước; quyền lợi áp dụng theo thời hạn của từng gói.',
  },
  {
    title: 'Nội dung cộng đồng',
    body: 'Bài viết và hình ảnh bạn đăng phải tôn trọng người khác, không quảng cáo sai sự thật và có thể được kiểm duyệt trước khi hiển thị.',
  },
]

/** Màn 61 · Chấp nhận điều khoản sử dụng (sau "Tạo tài khoản", trước xác thực OTP) */
export default function S61TermsOfUse() {
  const { go } = useNav()
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptData, setAcceptData] = useState(false)
  const canContinue = acceptTerms && acceptData

  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] flex-col overflow-hidden bg-ivory text-ink">
        <StatusBar />

        <header className="relative flex shrink-0 items-center justify-center px-5 pb-2 pt-1">
          <button
            type="button"
            data-back="s04"
            aria-label="Quay lại"
            className="absolute left-5 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <BrandLogo />
        </header>

        <div className="shrink-0 px-6 pt-2">
          <h1 className="text-[24px] font-bold leading-tight">Điều khoản sử dụng</h1>
          <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
            Vui lòng đọc và đồng ý với các điều khoản dưới đây để hoàn tất tạo tài khoản SKINSYNC.
          </p>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-[10.5px] font-semibold text-primary">
            Cập nhật ngày {UPDATED_AT}
          </span>
        </div>

        <div className="card no-scrollbar mx-5 mt-3 flex-1 overflow-y-auto px-4 py-3">
          <ol className="space-y-3">
            {SECTIONS.map((s, i) => (
              <li key={s.title} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-tint text-[10.5px] font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-[13px] font-semibold">{s.title}</h2>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <footer className="shrink-0 space-y-2.5 px-6 pb-9 pt-3">
          <Checkbox checked={acceptTerms} onChange={setAcceptTerms}>
            Tôi đã đọc và đồng ý với <b className="text-primary">Điều khoản sử dụng</b> của SKINSYNC.
          </Checkbox>
          <Checkbox checked={acceptData} onChange={setAcceptData}>
            Tôi đồng ý cho SKINSYNC xử lý ảnh da và dữ liệu sức khỏe theo <b className="text-primary">Chính sách bảo mật</b>.
          </Checkbox>

          <button type="button" disabled={!canContinue} onClick={() => go('s05')} className="btn btn-primary mt-1 w-full">
            Đồng ý và tiếp tục
          </button>
          <button
            type="button"
            data-back="s04"
            data-toast="Bạn cần đồng ý điều khoản để sử dụng SKINSYNC"
            className="block w-full text-center text-[13px] font-semibold text-ink-soft"
          >
            Từ chối
          </button>
        </footer>

        <HomeIndicator />
      </div>
    </Screen>
  )
}

function Checkbox({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-[12px] leading-snug text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer rounded-[5px] border-[#C9D3CD] text-primary focus:ring-0 focus:ring-offset-0"
      />
      <span>{children}</span>
    </label>
  )
}
