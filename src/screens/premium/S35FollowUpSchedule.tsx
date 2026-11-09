import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { ArrowRightIcon, Svg, AppHeader, appMainStyle } from '@/components/layout/AppHeader'
import css from '@/screens/premium/premium.css?inline'

const ChevronRightIcon = () => (
  <Svg>
    <path d="m9 18 6-6-6-6" />
  </Svg>
)
const CalendarIcon = () => (
  <Svg>
    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
  </Svg>
)
const VideoIcon = () => (
  <Svg>
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </Svg>
)
const MapPinIcon = () => (
  <Svg>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
)

const DoctorAvatar = () => (
  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-[#D2E4DD]">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#357D64" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
)

const dates = [
  { day: 'T3', date: '19/11' },
  { day: 'T4', date: '20/11' },
  { day: 'T5', date: '21/11' },
  { day: 'T6', date: '22/11' },
  { day: 'T7', date: '23/11' },
]
const times = ['08:00', '09:30', '10:00', '14:00', '15:30']
const prep = [
  { t: 'Cập nhật ảnh da gần nhất', on: true },
  { t: 'Ghi chú các thay đổi hoặc phản ứng bất thường', on: true },
  { t: 'Danh sách sản phẩm/thuốc đang sử dụng', on: false },
  { t: 'Chuẩn bị câu hỏi muốn hỏi bác sĩ', on: false },
]

/** Màn 35 · Lịch tái khám của bạn */
export default function S35FollowUpSchedule() {
  const [type, setType] = useState<'online' | 'offline'>('online')
  const [date, setDate] = useState('19/11')
  const [time, setTime] = useState('10:00')

  const sel = (on: boolean) =>
    on ? 'bg-[#357D64] text-white border-[#357D64]' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'

  return (
    <ScopedScreen id="s35" css={css} tab={4}>
      <main className="phone s30-root" style={appMainStyle}>
        <AppHeader back="s32" />

        <div className="custom-scrollbar no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-5 pb-4 pt-1">
          <div className="pt-1">
            <h1 className="font-skinsync-heading text-[22px] font-bold leading-tight text-[#173B32]">Lịch tái khám của bạn</h1>
            <p className="text-skinsync-muted mt-0.5 text-[12.5px]">Đặt lịch tái khám để tiếp tục theo dõi và điều chỉnh liệu trình.</p>
          </div>

          {/* Bác sĩ */}
          <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3">
            <div className="flex items-center gap-3">
              <DoctorAvatar />
              <div>
                <h3 className="font-skinsync-heading text-xs font-bold text-[#173B32]">BS. Nguyễn Thị Minh Anh</h3>
                <p className="text-skinsync-muted mt-0.5 text-[10px]">Bác sĩ Chuyên khoa Da liễu</p>
                <p className="text-skinsync-muted text-[10px]">Bệnh viện Da liễu Trung ương</p>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-[#B87A24]">
                  ⭐ <span className="font-bold">4.9</span> <span className="text-slate-400">(320 đánh giá)</span>
                </div>
              </div>
            </div>
            <button data-go="s24" className="cursor-pointer rounded-xl bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
              Xem hồ sơ
            </button>
          </div>

          {/* Quyền tái khám */}
          <div
            data-go="s32"
            className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EBF2EF] text-[#357D64]">
                <CalendarIcon />
              </div>
              <span className="text-xs font-semibold text-[#173B32]">Quyền tái khám trong tháng</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[#357D64]">Còn 1 lượt</span>
              <p className="text-[9px] font-semibold text-[#B87A24]">(Premium)</p>
            </div>
          </div>

          {/* Gợi ý */}
          <div className="space-y-1.5">
            <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Thời điểm tái khám được đề xuất</h2>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <CalendarIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#173B32]">Tuần 4 (± 3 ngày)</h4>
                  <p className="text-skinsync-muted text-[10px]">Dựa trên liệu trình hiện tại của bạn.</p>
                </div>
              </div>
              <div className="rounded-xl bg-[#FAF1DF] px-2.5 py-1 text-center text-[#7A5B20]">
                <p className="text-[9px]">Ngày gợi ý</p>
                <p className="text-xs font-bold">19/11/2024</p>
              </div>
            </div>
          </div>

          {/* Chọn lịch */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Chọn lịch hẹn</h2>
              <button data-go="s25" className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-[#357D64]">
                Xem thêm <ChevronRightIcon />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setType('online')}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${sel(type === 'online')}`}
              >
                <VideoIcon /> Khám trực tuyến
              </button>
              <button
                onClick={() => setType('offline')}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${sel(type === 'offline')}`}
              >
                <MapPinIcon /> Khám trực tiếp
              </button>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {dates.map((d) => (
                <button
                  key={d.date}
                  onClick={() => setDate(d.date)}
                  className={`cursor-pointer rounded-xl border p-2 text-center transition-all ${sel(date === d.date)}`}
                >
                  <p className="text-[10px] opacity-80" style={{ color: 'inherit' }}>
                    {d.day}
                  </p>
                  <p className="text-xs font-bold" style={{ color: 'inherit' }}>
                    {d.date}
                  </p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-1.5">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`cursor-pointer rounded-xl border py-1.5 text-center text-[11px] font-semibold transition-all ${sel(time === t)}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Chuẩn bị */}
          <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white p-3">
            <h3 className="font-skinsync-heading text-xs font-bold text-[#173B32]">Chuẩn bị trước khi khám</h3>
            <div className="text-skinsync-muted space-y-1.5 text-[11px]">
              {prep.map((p) => (
                <label key={p.t} className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" defaultChecked={p.on} className="rounded" style={{ accentColor: '#357D64' }} />
                  <span>{p.t}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Thanh hành động */}
        <div className="z-20 shrink-0 space-y-2 border-t border-slate-200/60 bg-white/90 px-4 py-3">
          <button
            data-go="s26"
            data-toast="Đã chọn lịch tái khám — vui lòng xác nhận"
            className="btn-skinsync-primary w-full gap-2 text-xs"
          >
            Đặt lịch tái khám <ArrowRightIcon />
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button data-go="s06" className="btn-skinsync-outline text-xs">
              📷 Cập nhật ảnh da
            </button>
            <button data-go="s23" className="btn-skinsync-outline text-xs">
              👨‍⚕️ Xem bác sĩ khác
            </button>
          </div>
        </div>
      </main>
    </ScopedScreen>
  )
}
