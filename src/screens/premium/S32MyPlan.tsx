import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { GemIcon, Svg, AppHeader, appMainStyle, DoctorAvatar } from '@/components/layout/AppHeader'
import { formatPrice } from '@/data/plans'
import { usePlan } from '@/state/PlanProvider'
import css from './premium.css?inline'

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
const SettingsIcon = () => (
  <Svg size={18}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
)
const PhoneCallIcon = () => (
  <Svg size={14}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
)
const MessageSquareIcon = () => (
  <Svg size={14}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
)
const VideoIcon = () => (
  <Svg>
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </Svg>
)

/** Màn 32 · Gói dịch vụ của tôi */
export default function S32MyPlan() {
  const { active } = usePlan()
  const quota = Math.max(active.consultations, 1)
  return (
    <ScopedScreen id="s32" css={css} tab={4}>
      <main className="phone s30-root" style={appMainStyle}>
        <AppHeader back="s48" />
        {/* nút cài đặt ở góc phải header (đặt chồng lên khoảng trống bên phải) */}
        <button
          data-go="s45"
          className="absolute z-30 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200/60 bg-white/80 text-slate-700 shadow-sm"
          style={{ right: 20, top: 56 }}
          aria-label="Cài đặt"
        >
          <SettingsIcon />
        </button>

        <div className="custom-scrollbar no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-5 pb-4 pt-1">
          <div className="pt-1">
            <h1 className="font-skinsync-heading text-[22px] font-bold leading-tight text-[#173B32]">Gói dịch vụ của tôi</h1>
            <p className="text-skinsync-muted mt-0.5 text-[12.5px]">Quản lý gói dịch vụ và các quyền lợi của bạn.</p>
          </div>

          {/* Gói đang hoạt động */}
          <div className="skinsync-card space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF0D9]">
                  <GemIcon stroke="#dfb060" />
                </div>
                <div>
                  <h3 className="font-skinsync-heading text-sm font-bold text-[#173B32]">{active.name}</h3>
                  <p className="text-skinsync-muted text-[11px]">
                    {formatPrice(active.price)} · {active.duration}
                  </p>
                  <span className="text-[10px] font-medium text-[#B87A24]">Còn 23 ngày</span>
                </div>
              </div>
              <span className="rounded-full bg-[#EBF2EF] px-2.5 py-1 text-[10px] font-semibold text-[#357D64]">Đang hoạt động</span>
            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="flex items-center gap-1.5 text-[#357D64]">
                  <VideoIcon /> Lượt tái khám trực tuyến
                </span>
                <span className="font-bold text-[#357D64]">
                  {quota} / {quota} lượt
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-full rounded-full bg-[#357D64]" />
              </div>
            </div>
          </div>

          {/* Bác sĩ đang theo dõi */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Bác sĩ đang theo dõi</h2>
              <button data-go="s24" className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-[#357D64]">
                Xem hồ sơ <ChevronRightIcon />
              </button>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3">
              <div className="flex cursor-pointer items-center gap-3" data-go="s24">
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
              <div className="flex flex-col gap-2">
                <button
                  data-go="s27"
                  aria-label="Gọi video"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBF2EF] text-[#357D64]"
                >
                  <PhoneCallIcon />
                </button>
                <button
                  data-toast="Đã mở khung chat với bác sĩ (minh họa)"
                  aria-label="Nhắn tin"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBF2EF] text-[#357D64]"
                >
                  <MessageSquareIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Lịch tái khám tiếp theo */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Lịch tái khám tiếp theo</h2>
              <button data-go="s35" className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-[#357D64]">
                Xem tất cả <ChevronRightIcon />
              </button>
            </div>

            <div
              data-go="s35"
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EBF2EF] text-[#357D64]">
                  <CalendarIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#173B32]">Thứ 3, 19/11/2024</h4>
                  <p className="text-skinsync-muted text-[11px]">10:00 – 10:30 (Khám trực tuyến)</p>
                </div>
              </div>
              <ChevronRightIcon />
            </div>
          </div>

          {/* Lịch sử sử dụng */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Lịch sử sử dụng quyền lợi</h2>
              <button data-go="s33" className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-[#357D64]">
                Xem tất cả <ChevronRightIcon />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div
                data-go="s33"
                className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200/60 bg-white p-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600">📅</div>
                  <div>
                    <p className="font-semibold text-[#173B32]">22/10/2024</p>
                    <p className="text-skinsync-muted text-[10px]">Khám da liễu trực tuyến</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Đã hoàn thành</span>
              </div>

              <div
                data-go="s33"
                className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200/60 bg-white p-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600">💬</div>
                  <div>
                    <p className="font-semibold text-[#173B32]">15/10/2024</p>
                    <p className="text-skinsync-muted text-[10px]">Tư vấn qua chat</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Đã hoàn thành</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thanh hành động */}
        <div className="z-20 shrink-0 space-y-2 border-t border-slate-200/60 bg-white/90 px-4 py-3">
          <button data-go="s25" className="btn-skinsync-outline w-full gap-2 text-xs">
            <CalendarIcon /> Đặt lịch tái khám
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button data-go="s30" className="btn-skinsync-outline text-xs">
              Xem quyền lợi
            </button>
            <button data-go="s31" className="btn-skinsync-outline text-xs">
              Quản lý gói
            </button>
          </div>
        </div>
      </main>
    </ScopedScreen>
  )
}
