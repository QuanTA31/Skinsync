import { AppHeader, CheckIcon, GemIcon, Svg, appMainStyle } from '@/components/layout/AppHeader'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { PLANS, formatPrice } from '@/data/plans'
import type { Plan } from '@/data/plans'
import { useNav } from '@/navigation/NavProvider'
import { usePlan } from '@/state/PlanProvider'
import css from './premium.css?inline'

const LeafIcon = () => (
  <Svg size={20}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Svg>
)

const ChatIcon = () => (
  <Svg size={20}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
)

function PlanIcon({ plan }: { plan: Plan }) {
  if (plan.id === 'base') return <LeafIcon />
  if (plan.id === 'pay-per-consultation') return <ChatIcon />
  return <GemIcon />
}

/** Màn 30 · Chọn gói dịch vụ (Base · Premium Care · Premium Plus · Premium Complete · Pay-per Consultation) */
export default function S30ChoosePlan() {
  const { selected, select } = usePlan()
  const { go, tab, toast } = useNav()

  const confirm = () => {
    if (selected.price === 0) {
      toast('Bạn đang dùng gói Base miễn phí')
      tab('s10')
    } else go('s31')
  }

  return (
    <ScopedScreen id="s30" css={css} tab={4}>
      <main className="phone s30-root" style={appMainStyle}>
        <AppHeader back="s28" />

        <div className="no-scrollbar z-10 flex-1 space-y-2.5 overflow-y-auto px-5 pb-4 pt-1">
          <div className="pb-1 pt-1 text-center">
            <h1 className="text-[22px] font-bold leading-tight text-ink">Chọn gói đồng hành cùng làn da</h1>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-soft">
              Linh hoạt từ chăm sóc cơ bản đến theo dõi chuyên sâu cùng bác sĩ.
            </p>
          </div>

          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} active={plan.id === selected.id} onSelect={() => select(plan.id)} />
          ))}

          <p className="px-1 pt-1 text-center text-[10.5px] leading-snug text-muted">
            Giá đã gồm VAT. Không bao gồm thuốc, sản phẩm và thủ thuật tại phòng khám.
          </p>
        </div>

        <div className="z-20 shrink-0 border-t border-line bg-white/90 px-4 py-3">
          <button type="button" onClick={confirm} className="btn btn-primary w-full">
            {selected.price === 0 ? 'Tiếp tục với gói Base' : `Đăng ký ${selected.name} · ${formatPrice(selected.price)}`}
          </button>
        </div>
      </main>
    </ScopedScreen>
  )
}

function PlanCard({ plan, active, onSelect }: { plan: Plan; active: boolean; onSelect: () => void }) {
  const premium = plan.id.startsWith('premium')
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`relative block w-full rounded-2xl border bg-white p-3.5 text-left transition-all ${
        active ? 'border-primary shadow-md ring-2 ring-[#357D64]/15' : 'border-line shadow-sm'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-2.5 right-4 rounded-full bg-gold px-2.5 py-0.5 text-[10.5px] font-semibold text-white shadow-sm">
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${premium ? 'bg-gold-soft text-gold' : 'bg-primary-tint text-primary'}`}
        >
          <PlanIcon plan={plan} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-[15px] font-bold text-ink">{plan.name}</h3>
          <p className="text-[11px] text-ink-soft">{plan.duration}</p>
        </div>
        <div className="text-right">
          <div className="text-[16px] font-bold tracking-tight text-ink">{formatPrice(plan.price)}</div>
        </div>
        <span
          className={`ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${active ? 'border-primary bg-primary' : 'border-[#C9D3CD]'}`}
        >
          {active && <span className="h-2 w-2 rounded-full bg-white" />}
        </span>
      </div>

      {active && (
        <ul className="mt-3 space-y-1.5 border-t border-line pt-2.5 text-[11.5px] font-medium text-ink-soft">
          {plan.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">
                <CheckIcon />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </button>
  )
}
