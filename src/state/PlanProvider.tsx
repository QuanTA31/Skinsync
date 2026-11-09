import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { PLAN_BY_ID } from '@/data/plans'
import type { Plan, PlanId } from '@/data/plans'

interface PlanState {
  /** gói người dùng đang chọn ở màn 30 (đưa sang màn 31 để xác nhận) */
  selected: Plan
  select: (id: PlanId) => void
  /** gói đang hoạt động của tài khoản (màn 32, 48, 51) */
  active: Plan
  activate: (id: PlanId) => void
}

const PlanContext = createContext<PlanState | null>(null)

/** Lưu gói dịch vụ được chọn / đang dùng, dùng chung giữa các màn Premium. */
export function PlanProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<PlanId>('premium-care')
  const [activeId, setActiveId] = useState<PlanId>('premium-care')

  const value = useMemo<PlanState>(
    () => ({
      selected: PLAN_BY_ID[selectedId],
      select: setSelectedId,
      active: PLAN_BY_ID[activeId],
      activate: setActiveId,
    }),
    [selectedId, activeId],
  )
  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}

export function usePlan(): PlanState {
  const ctx = useContext(PlanContext)
  if (!ctx) throw new Error('usePlan must be used inside <PlanProvider>')
  return ctx
}
