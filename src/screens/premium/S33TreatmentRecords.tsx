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

const DoctorAvatar = () => (
  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-[#D2E4DD]">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#357D64" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
)

const stages = [
  { bg: 'bg-rose-100', fg: 'text-rose-400', tag: 'Trước', title: 'Trước điều trị', date: '22/10/2024' },
  { bg: 'bg-amber-100', fg: 'text-amber-500', tag: '4 tuần', title: 'Sau 4 tuần', date: '19/11/2024' },
  { bg: 'bg-emerald-100', fg: 'text-emerald-600', tag: '8 tuần', title: 'Sau 8 tuần', date: '19/12/2024' },
  { bg: 'bg-teal-100', fg: 'text-teal-700', tag: 'Hiện tại', title: 'Hiện tại', date: '22/01/2025' },
]

const timeline = [
  { date: '22/10/2024', title: 'Khám lần 1', body: 'Đánh giá tình trạng da, kê liệu trình điều trị.', done: true },
  { date: '19/11/2024', title: 'Khám lần 2', body: 'Da giảm viêm, tiếp tục liệu trình.', done: true },
  { date: '19/12/2024', title: 'Khám lần 3', body: 'Da cải thiện rõ rệt, điều chỉnh sản phẩm.', done: false },
]

/** Màn 33 · Hồ sơ điều trị của tôi */
export default function S33TreatmentRecords() {
  return (
    <ScopedScreen id="s33" css={css} tab={4}>
      <main className="phone s30-root" style={appMainStyle}>
        <AppHeader back="s32" />

        <div className="custom-scrollbar no-scrollbar z-10 flex-1 space-y-3.5 overflow-y-auto px-5 pb-4 pt-1">
          <div className="pt-1">
            <h1 className="font-skinsync-heading text-[22px] font-bold leading-tight text-[#173B32]">Hồ sơ điều trị của tôi</h1>
            <p className="text-skinsync-muted mt-0.5 text-[12.5px]">Theo dõi toàn bộ quá trình điều trị cùng bác sĩ.</p>
          </div>

          {/* Bác sĩ theo dõi */}
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

          {/* 2 ô trạng thái */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EBF2EF] text-[#357D64]">
                <CalendarIcon />
              </div>
              <div>
                <p className="text-skinsync-muted text-[10px]">Ngày bắt đầu liệu trình</p>
                <p className="text-xs font-bold text-[#173B32]">22/10/2024</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xs font-bold text-emerald-600">
                !
              </div>
              <div>
                <p className="text-skinsync-muted text-[10px]">Tình trạng hiện tại</p>
                <p className="text-xs font-bold text-emerald-700">Đang điều trị</p>
              </div>
            </div>
          </div>

          {/* Gallery ảnh da */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Hình ảnh da theo từng giai đoạn</h2>
              <button data-go="s11" className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-[#357D64]">
                Xem tất cả <ChevronRightIcon />
              </button>
            </div>

            <div className="custom-scrollbar no-scrollbar flex items-center justify-between gap-1 overflow-x-auto pb-1">
              {stages.map((s, i) => (
                <div key={s.title} className="flex items-center gap-1">
                  {i > 0 && <span className="text-xs text-slate-300">➔</span>}
                  <div data-go="s11" className="shrink-0 cursor-pointer text-center">
                    <div
                      className={`h-16 w-16 rounded-xl ${s.bg} flex items-center justify-center overflow-hidden border border-slate-200`}
                    >
                      <span className={`text-xs ${s.fg} font-bold`}>{s.tag}</span>
                    </div>
                    <p className="mt-1 text-[10px] font-bold text-[#173B32]">{s.title}</p>
                    <p className="text-[9px] text-slate-400">{s.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-skinsync-heading text-sm font-bold text-[#173B32]">Lịch sử khám và hướng dẫn điều trị</h2>
              <button data-go="s35" className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-[#357D64]">
                Xem tất cả <ChevronRightIcon />
              </button>
            </div>

            <div className="relative space-y-3 rounded-2xl border border-slate-200/80 bg-white p-3">
              {timeline.map((t) => (
                <div
                  key={t.title}
                  data-go="s28"
                  className={`relative flex cursor-pointer items-start gap-3 border-l-2 pl-4 ${t.done ? 'border-[#357D64]' : 'border-slate-200'}`}
                >
                  <div className={`absolute -left-[5px] top-1 h-2 w-2 rounded-full ${t.done ? 'bg-[#357D64]' : 'bg-slate-300'}`} />
                  <div>
                    <span className="text-[10px] text-slate-400">{t.date}</span>
                    <h4 className="text-xs font-bold text-[#173B32]">{t.title}</h4>
                    <p className="text-skinsync-muted text-[11px]">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ghi nhận phản ứng */}
          <div
            data-go="s34"
            className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200/60 bg-[#EEF4F1] p-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#357D64] text-xs text-white">🛡️</div>
              <div>
                <h4 className="text-xs font-bold text-[#173B32]">Ghi nhận phản ứng</h4>
                <p className="text-skinsync-muted text-[10px]">Bạn đã ghi 3 phản ứng trong quá trình sử dụng sản phẩm.</p>
              </div>
            </div>
            <ChevronRightIcon />
          </div>
        </div>

        {/* Thanh hành động */}
        <div className="z-20 shrink-0 space-y-2 border-t border-slate-200/60 bg-white/90 px-4 py-3">
          <button data-go="s06" className="btn-skinsync-primary w-full gap-2 text-xs">
            Cập nhật tình trạng da <ArrowRightIcon />
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button data-go="s34" className="btn-skinsync-outline text-xs">
              Xem lịch sử điều trị
            </button>
            <button data-go="s25" className="btn-skinsync-outline text-xs">
              Đặt lịch tái khám
            </button>
          </div>
        </div>
      </main>
    </ScopedScreen>
  )
}
