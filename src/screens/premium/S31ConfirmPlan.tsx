import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { ArrowRightIcon, GemIcon, AppHeader, appMainStyle } from '@/components/layout/AppHeader'
import { formatPrice, isSubscription } from '@/data/plans'
import { useNav } from '@/navigation/NavProvider'
import { usePlan } from '@/state/PlanProvider'
import css from './premium.css?inline'

type Pay = 'card' | 'wallet' | 'banking'

function Radio({ on }: { on: boolean }) {
  return (
    <div
      className={`flex h-4 w-4 items-center justify-center rounded-full border ${on ? 'border-[#357D64] bg-[#357D64]' : 'border-slate-300'}`}
    >
      {on && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
    </div>
  )
}

const START_DATE = '09/11/2026'

/** "09/11/2026" + n tháng → "09/12/2026" */
function addMonths(ddmmyyyy: string, months: number) {
  const [d, m, y] = ddmmyyyy.split('/').map(Number)
  const date = new Date(y, m - 1 + months, d)
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

/** Màn 31 · Xác nhận đăng ký gói (gói lấy từ lựa chọn ở màn 30) */
export default function S31ConfirmPlan() {
  const [pay, setPay] = useState<Pay>('card')
  const [autoRenew, setAutoRenew] = useState(true)
  const [agree, setAgree] = useState(true)
  const { selected: plan, activate } = usePlan()
  const { go, toast } = useNav()
  const price = formatPrice(plan.price)
  const subscription = isSubscription(plan)

  const handlePay = () => {
    if (!agree) return toast('Vui lòng đồng ý điều khoản để tiếp tục')
    activate(plan.id)
    toast(`Thanh toán thành công! Đã kích hoạt ${plan.name}`)
    go('s32')
  }

  const row = (id: Pay) =>
    `flex items-center justify-between p-2.5 rounded-xl cursor-pointer border transition-all ${
      pay === id ? 'border-[#357D64] bg-[#F7F8F2]' : 'border-transparent hover:bg-slate-50'
    }`

  return (
    <ScopedScreen id="s31" css={css} tab={4}>
      <main className="phone s30-root" style={appMainStyle}>
        <AppHeader back="s30" />

        <div className="custom-scrollbar no-scrollbar z-10 flex-1 space-y-4 overflow-y-auto px-5 pb-4 pt-1">
          <div className="pt-1 text-center">
            <h1 className="font-skinsync-heading text-[22px] font-bold leading-tight text-[#173B32]">Xác nhận đăng ký gói</h1>
            <p className="text-skinsync-muted mt-1 text-[12px]">Vui lòng kiểm tra thông tin trước khi thanh toán.</p>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF0D9]">
                <GemIcon stroke="#dfb060" />
              </div>
              <div>
                <h3 className="font-skinsync-heading text-sm font-bold text-[#173B32]">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-bold text-[#173B32]">{price}</span>
                  <span className="text-skinsync-muted text-[10px]">/ {plan.duration}</span>
                </div>
                <p className="text-skinsync-muted mt-0.5 text-[11px]">{plan.summary}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#436A5D]">
                <span>Ngày bắt đầu</span>
                <span className="font-semibold">{START_DATE}</span>
              </div>
              <div className="flex justify-between text-[#436A5D]">
                <span className="flex items-center gap-1">Ngày kết thúc dự kiến ℹ️</span>
                <span className="font-semibold">{subscription ? addMonths(START_DATE, plan.months!) : 'Đến khi dùng hết lượt'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Phương thức thanh toán</h2>
            <div className="space-y-2.5 rounded-2xl border border-slate-200/80 bg-white p-3 text-xs">
              <label onClick={() => setPay('card')} className={row('card')}>
                <div className="flex items-center gap-2.5">
                  <Radio on={pay === 'card'} />
                  <span className="font-medium text-[#173B32]">Thẻ ngân hàng</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">VISA</span>
                  <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-600">MC</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-900">napas</span>
                </div>
              </label>

              <label onClick={() => setPay('wallet')} className={row('wallet')}>
                <div className="flex items-center gap-2.5">
                  <Radio on={pay === 'wallet'} />
                  <span className="font-medium text-[#173B32]">Ví điện tử (MoMo, ZaloPay)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="rounded bg-pink-50 px-1 py-0.5 text-[10px] font-bold text-pink-600">momo</span>
                  <span className="rounded bg-blue-50 px-1 py-0.5 text-[10px] font-bold text-blue-500">ZaloPay</span>
                </div>
              </label>

              <label onClick={() => setPay('banking')} className={row('banking')}>
                <div className="flex items-center gap-2.5">
                  <Radio on={pay === 'banking'} />
                  <span className="font-medium text-[#173B32]">Chuyển khoản ngân hàng</span>
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {subscription && (
              <>
                <div className="flex items-center justify-between">
                  <span className="font-skinsync-heading text-sm font-bold text-[#173B32]">Tự động gia hạn</span>
                  <button
                    onClick={() => setAutoRenew(!autoRenew)}
                    className={`relative h-6 w-11 cursor-pointer rounded-full p-0.5 transition-colors ${autoRenew ? 'bg-[#357D64]' : 'bg-slate-300'}`}
                  >
                    <div
                      className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${autoRenew ? 'translate-x-5' : 'translate-x-0'}`}
                    />
                  </button>
                </div>

                <p className="text-skinsync-muted text-[11px] leading-relaxed">
                  Tôi đồng ý tự động gia hạn gói {plan.name} với mức phí {price}/{plan.duration}. Tôi có thể hủy bất kỳ lúc nào trong phần
                  Quản lý gói.
                </p>
              </>
            )}

            <label className="flex cursor-pointer items-start gap-2 pt-1">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mt-0.5 rounded"
                style={{ accentColor: '#357D64' }}
              />
              <span className="text-[11px] leading-snug text-[#436A5D]">
                Tôi đã đọc và đồng ý với{' '}
                <a href="#" className="font-semibold underline" data-go="s61">
                  Điều khoản sử dụng
                </a>{' '}
                và{' '}
                <a href="#" className="font-semibold underline" data-toast="Chính sách thanh toán (minh họa)">
                  Chính sách thanh toán
                </a>
                .
              </span>
            </label>
          </div>
        </div>

        <div className="z-20 shrink-0 border-t border-slate-200/60 bg-white/90 px-4 py-3">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-skinsync-muted text-xs">Tổng thanh toán</span>
            <span className="text-base font-bold text-[#173B32]">{price}</span>
          </div>
          <button type="button" onClick={handlePay} className="btn-skinsync-primary w-full gap-2" style={{ opacity: agree ? 1 : 0.5 }}>
            Thanh toán {price} <ArrowRightIcon />
          </button>
        </div>
      </main>
    </ScopedScreen>
  )
}
