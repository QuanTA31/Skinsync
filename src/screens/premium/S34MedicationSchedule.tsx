import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Svg, AppHeader, appMainStyle } from '@/components/layout/AppHeader'
import css from '@/screens/premium/premium.css?inline'

const ChevronRightIcon = () => (
  <Svg>
    <path d="m9 18 6-6-6-6" />
  </Svg>
)
const CheckIcon = () => (
  <Svg size={14} sw={2.5}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
)
const PillIcon = () => (
  <Svg size={18}>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </Svg>
)

const meds = [
  { tag: '10mg', cls: 'bg-pink-50 border-pink-100 text-pink-500', name: 'Isotretinoin 10mg', use: 'Uống 1 viên/ngày (sau ăn tối)' },
  { tag: 'GEL', cls: 'bg-purple-50 border-purple-100 text-purple-500', name: 'Benzac AC 2.5% Gel', use: 'Bôi một lớp mỏng vào buổi tối' },
  {
    tag: 'LOTION',
    cls: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    name: 'Clindamycin 1% Lotion',
    use: 'Bôi 2 lần/ngày (sáng và tối)',
  },
]

const days = ['Thứ 2, 21/10/2024', 'Thứ 3, 22/10/2024', 'Thứ 4, 23/10/2024']

/** Màn 34 · Lịch dùng thuốc của tôi */
export default function S34MedicationSchedule() {
  const [day, setDay] = useState(1)
  const [taken, setTaken] = useState<Record<string, boolean>>({ '08:00': true })

  const reminders = [
    { time: '08:00', name: 'Clindamycin 1% Lotion', note: 'Bôi ngoài da' },
    { time: '20:00', name: 'Isotretinoin 10mg', note: 'Uống 1 viên (sau ăn tối)' },
    { time: '21:00', name: 'Benzac AC 2.5% Gel', note: 'Bôi ngoài da' },
  ]

  return (
    <ScopedScreen id="s34" css={css} tab={4}>
      <main className="phone s30-root" style={appMainStyle}>
        <AppHeader back="s33" />

        <div className="custom-scrollbar no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-5 pb-4 pt-1">
          <div className="pt-1">
            <h1 className="font-skinsync-heading text-[22px] font-bold leading-tight text-[#173B32]">Lịch dùng thuốc của tôi</h1>
            <p className="text-skinsync-muted mt-0.5 text-[12.5px]">Nhắc nhở và theo dõi việc sử dụng thuốc theo đơn bác sĩ.</p>
          </div>

          {/* Đơn thuốc */}
          <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <PillIcon />
              </div>
              <div>
                <h3 className="font-skinsync-heading text-xs font-bold text-[#173B32]">Đơn thuốc điều trị mụn</h3>
                <p className="text-skinsync-muted text-[10px]">BS. Nguyễn Thị Minh Anh</p>
                <p className="text-[10px] text-slate-400">Ngày kê đơn: 22/10/2024</p>
              </div>
            </div>
            <button data-go="s28" className="cursor-pointer rounded-xl bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
              Xem đơn thuốc
            </button>
          </div>

          {/* Danh sách thuốc */}
          <div className="space-y-2">
            <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Danh sách thuốc</h2>
            <div className="space-y-2">
              {meds.map((m) => (
                <div
                  key={m.name}
                  data-go="s28"
                  className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-xs font-bold ${m.cls}`}>
                      {m.tag}
                    </div>
                    <div>
                      <h4 className="font-skinsync-heading text-xs font-bold text-[#173B32]">{m.name}</h4>
                      <p className="text-skinsync-muted text-[10px]">{m.use}</p>
                      <p className="text-[9px] text-slate-400">Từ 22/10/2024 – 22/01/2025</p>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
              ))}
            </div>
          </div>

          {/* Lịch nhắc */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Lịch nhắc hôm nay</h2>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#173B32]">
                <button className="cursor-pointer text-slate-400" onClick={() => setDay((d) => Math.max(0, d - 1))}>
                  ‹
                </button>
                <span>{days[day]}</span>
                <button className="cursor-pointer text-slate-400" onClick={() => setDay((d) => Math.min(days.length - 1, d + 1))}>
                  ›
                </button>
              </div>
            </div>

            <div className="space-y-2.5 rounded-2xl border border-slate-200/80 bg-white p-3 text-xs">
              {reminders.map((r) => {
                const done = !!taken[r.time]
                return (
                  <div
                    key={r.time}
                    className={`flex items-center justify-between rounded-xl p-2 ${done ? 'bg-slate-50' : 'border border-[#E0E4CC] bg-[#fffbf2]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#173B32]">{r.time}</span>
                      <div>
                        <p className="font-semibold text-[#173B32]">{r.name}</p>
                        <p className="text-skinsync-muted text-[10px]">{r.note}</p>
                      </div>
                    </div>
                    {done ? (
                      <button
                        onClick={() => setTaken({ ...taken, [r.time]: false })}
                        className="flex cursor-pointer items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600"
                      >
                        <CheckIcon /> Đã dùng
                      </button>
                    ) : (
                      <button
                        onClick={() => setTaken({ ...taken, [r.time]: true })}
                        data-toast="Đã ghi nhận bạn dùng thuốc"
                        className="cursor-pointer rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600"
                      >
                        Chưa dùng
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Thanh hành động */}
        <div className="z-20 shrink-0 border-t border-slate-200/60 bg-white/90 px-4 py-3">
          <div className="grid grid-cols-2 gap-2">
            <button data-go="s33" data-toast="Đã mở ghi nhận phản ứng" className="btn-skinsync-outline gap-1.5 text-xs">
              ⚠️ Báo cáo phản ứng
            </button>
            <button data-go="s28" className="btn-skinsync-outline gap-1.5 text-xs">
              📖 Xem hướng dẫn
            </button>
          </div>
        </div>
      </main>
    </ScopedScreen>
  )
}
