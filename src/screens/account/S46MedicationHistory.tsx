import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 46 · Lịch sử dùng thuốc */
export default function S46MedicationHistory() {
  return (
    <Screen>
      <div className="botanical-bg relative flex h-[884px] w-[390px] flex-col justify-between overflow-hidden bg-[#F7F8F2] antialiased">
        <img src="/eucalyptus-corner.png" alt="" aria-hidden="true" className="botanical-img" />
        <StatusBar />
        <main className="z-10 flex flex-1 flex-col overflow-hidden px-4 pb-1 pt-0" style={{ paddingBottom: '92px' }}>
          <header className="relative mb-1.5 flex items-center justify-between py-1">
            <button
              aria-label="Quay lại"
              data-back="s48"
              className="shadow-xs flex h-8 w-8 items-center justify-center rounded-full border border-[#E4E7D5] bg-white/90 text-[#173B32] transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <div className="flex items-center justify-center gap-1.5">
              <BrandLogo />
            </div>
            <div className="pointer-events-none h-8 w-8" />
          </header>
          <section className="mb-2.5">
            <h1
              className="font-serif-brand text-[20px] font-bold leading-tight tracking-tight text-[#173B32]"
              style={{ color: 'rgb(23,59,50)' }}
            >
              Lịch sử dùng thuốc
            </h1>
            <p className="mt-1 pr-3 text-[10px] font-medium leading-relaxed text-[#648076]">
              Nhắc nhở bạn dùng thuốc đúng giờ theo đơn của bác sĩ. Vui lòng tuân thủ hướng dẫn và liên hệ bác sĩ nếu có bất kỳ phản ứng bất
              thường nào.
            </p>
          </section>
          <section className="shadow-2xs mb-2.5 rounded-2xl border border-[#E9EBDB] bg-white/80 px-1.5 py-1.5">
            <div data-pills="" className="grid grid-cols-7 items-center gap-1 text-center">
              <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-2 text-[#79948B]">
                <span className="text-[10px] font-semibold leading-none">T2</span>
                <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-tight text-[#466359]">21/10</span>
              </div>
              <div
                data-on=""
                className="shadow-xs flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl bg-[#357D64] px-0.5 py-2 text-white"
                style={{ backgroundColor: 'rgb(23,59,50)' }}
              >
                <span className="text-[10px] font-semibold leading-none text-emerald-100">T3</span>
                <span className="whitespace-nowrap text-[10px] font-extrabold leading-none tracking-tight text-white">22/10</span>
              </div>
              <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-2 text-[#79948B]">
                <span className="text-[10px] font-semibold leading-none">T4</span>
                <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-tight text-[#466359]">23/10</span>
              </div>
              <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-2 text-[#79948B]">
                <span className="text-[10px] font-semibold leading-none">T5</span>
                <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-tight text-[#466359]">24/10</span>
              </div>
              <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-2 text-[#79948B]">
                <span className="text-[10px] font-semibold leading-none">T6</span>
                <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-tight text-[#466359]">25/10</span>
              </div>
              <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-2 text-[#79948B]">
                <span className="text-[10px] font-semibold leading-none">T7</span>
                <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-tight text-[#466359]">26/10</span>
              </div>
              <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-2 text-[#79948B]">
                <span className="text-[10px] font-semibold leading-none">CN</span>
                <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-tight text-[#466359]">27/10</span>
              </div>
            </div>
          </section>
          <div className="mb-1.5 flex items-center justify-between px-0.5">
            <h2
              className="font-serif-brand whitespace-nowrap text-[15px] font-bold tracking-tight text-[#173B32]"
              style={{ color: 'rgb(23,59,50)' }}
            >
              Hôm nay, Thứ 3, 22/10/2024
            </h2>
          </div>
          <section className="flex flex-1 flex-col justify-start gap-1.5">
            <article className="shadow-2xs rounded-xl border border-[#E9EBDB] bg-white p-2">
              <div className="flex items-center justify-between gap-2">
                <div className="shadow-2xs flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0F2F1] p-1">
                  <svg className="h-6 w-6" viewBox="0 0 36 36" fill="none">
                    <ellipse
                      cx="12"
                      cy="19"
                      rx="6.5"
                      ry="3.5"
                      fill="#F48FB1"
                      stroke="#E91E63"
                      strokeWidth="0.8"
                      transform="rotate(-15 12 19)"
                    />
                    <line x1="8" y1="19.5" x2="16" y2="18.5" stroke="#C2185B" strokeWidth="0.8" strokeLinecap="round" />
                    <ellipse
                      cx="23"
                      cy="18"
                      rx="6.5"
                      ry="3.5"
                      fill="#F06292"
                      stroke="#C2185B"
                      strokeWidth="0.8"
                      transform="rotate(10 23 18)"
                    />
                    <line x1="19.5" y1="17.5" x2="26.5" y2="18.5" stroke="#880E4F" strokeWidth="0.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-extrabold leading-tight text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
                    Isotretinoin 10mg
                  </h3>
                  <p className="mt-0.5 truncate text-[9px] font-semibold leading-tight text-[#587C6F]">Uống 1 viên (sau ăn tối)</p>
                  <div className="mt-0.5 flex items-center gap-1 text-[9px] font-bold text-[#173B32]">
                    <span className="material-symbols-outlined text-[11px] text-[#173B32]">schedule</span>
                    <span>08:00</span>
                  </div>
                </div>
                <div className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#D1E3DC] bg-[#E2EFEA] px-2 py-0.5 text-[9px] font-bold text-[#357D64]">
                  <span className="material-symbols-outlined text-[12px] font-bold text-[#357D64]">check_circle</span>
                  <span>Đã dùng</span>
                </div>
              </div>
              <div className="mt-1.5 rounded-md bg-[#F7F8F2] px-2 py-0.5 text-[8.5px] leading-tight">
                <span className="font-extrabold text-[#173B32]">Lưu ý:</span>{' '}
                <span className="font-semibold text-[#357D64]">Uống sau bữa ăn, không uống khi bụng đói.</span>
              </div>
            </article>
            <article className="shadow-2xs rounded-xl border border-[#E9EBDB] bg-white p-2">
              <div className="flex items-center justify-between gap-2">
                <div className="shadow-2xs flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0F2F1] p-1">
                  <svg className="h-7 w-5" viewBox="0 0 28 36" fill="none">
                    <path d="M11 6h6v2h-6z" fill="#B0BEC5" />
                    <path d="M9 4h10v2H9z" fill="#90A4AE" />
                    <path d="M8 4h-2a1 1 0 0 1-1-1v-0.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1V4" stroke="#78909C" strokeWidth="1.2" fill="none" />
                    <rect x="7" y="8" width="14" height="24" rx="3" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="1" />
                    <rect x="9" y="14" width="10" height="12" rx="1" fill="#ECEFF1" />
                    <line x1="11" y1="17" x2="17" y2="17" stroke="#78909C" strokeWidth="1" />
                    <line x1="11" y1="20" x2="15" y2="20" stroke="#90A4AE" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-extrabold leading-tight text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
                    Clindamycin 1% Lotion
                  </h3>
                  <p className="mt-0.5 truncate text-[9px] font-semibold leading-tight text-[#587C6F]">Bôi một lớp mỏng vào buổi tối</p>
                  <div className="mt-0.5 flex items-center gap-1 text-[9px] font-bold text-[#173B32]">
                    <span className="material-symbols-outlined text-[11px] text-[#173B32]">schedule</span>
                    <span>20:00</span>
                  </div>
                </div>
                <button
                  data-toast="Đã ghi nhận: đã dùng Clindamycin 1% Lotion"
                  className="shadow-xs shrink-0 rounded-lg bg-[#357D64] px-2.5 py-1 text-[9.5px] font-bold text-white transition-all hover:bg-[#173B32] active:scale-95"
                  type="button"
                  style={{ backgroundColor: 'rgb(23,59,50)' }}
                >
                  Đã dùng thuốc
                </button>
              </div>
              <div className="mt-1.5 rounded-md bg-[#F7F8F2] px-2 py-0.5 text-[8.5px] leading-tight">
                <span className="font-extrabold text-[#173B32]">Lưu ý:</span>{' '}
                <span className="font-semibold text-[#357D64]">Làm sạch da trước khi bôi, tránh vùng mắt.</span>
              </div>
            </article>
            <article className="shadow-2xs rounded-xl border border-[#E9EBDB] bg-white p-2">
              <div className="flex items-start justify-between gap-2">
                <div className="shadow-2xs flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0F2F1] p-1">
                  <svg className="h-7 w-5" viewBox="0 0 28 36" fill="none">
                    <rect x="11" y="29" width="6" height="4" rx="0.8" fill="#90A4AE" />
                    <path d="M8 5h12l-1.5 24h-9L8 5z" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="1" />
                    <path d="M7 3h14v2.5H7z" fill="#ECEFF1" stroke="#CFD8DC" strokeWidth="0.8" />
                    <path d="M10 11h8" stroke="#5C6BC0" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="10.5" y1="15" x2="16.5" y2="15" stroke="#90A4AE" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-extrabold leading-tight text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
                    Benzac AC 2.5% Gel
                  </h3>
                  <p className="mt-0.5 truncate text-[9px] font-semibold leading-tight text-[#587C6F]">Bôi ngoài da (vùng mụn)</p>
                </div>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 text-[9px] font-bold text-[#173B32]">
                  <span className="material-symbols-outlined text-[11px] text-[#173B32]">schedule</span>
                  <span>21:00</span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    data-toast="Sẽ nhắc lại sau 15 phút"
                    className="shadow-2xs whitespace-nowrap rounded-lg border border-[#BEC9C4] bg-white px-2 py-1 text-[9px] font-bold text-[#357D64] transition-all active:scale-95"
                    type="button"
                  >
                    Nhắc lại sau
                  </button>
                  <button
                    data-toast="Đã ghi nhận: đã dùng Benzac AC 2.5% Gel"
                    className="shadow-xs whitespace-nowrap rounded-lg bg-[#357D64] px-2 py-1 text-[9px] font-bold text-white transition-all hover:bg-[#173B32] active:scale-95"
                    type="button"
                    style={{ backgroundColor: 'rgb(23,59,50)' }}
                  >
                    Đã dùng thuốc
                  </button>
                </div>
              </div>
              <div className="mt-1.5 rounded-md bg-[#F7F8F2] px-2 py-0.5 text-[8.5px] leading-tight">
                <span className="font-extrabold text-[#173B32]">Lưu ý:</span>{' '}
                <span className="font-semibold text-[#357D64]">Có thể gây khô da nhẹ, sử dụng theo hướng dẫn của bác sĩ.</span>
              </div>
            </article>
            <article className="shadow-2xs rounded-xl border border-[#E9EBDB] bg-white p-2">
              <div className="flex items-start justify-between gap-2">
                <div className="shadow-2xs flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0F2F1] p-1">
                  <svg className="h-7 w-5" viewBox="0 0 28 36" fill="none">
                    <rect x="11" y="29" width="6" height="4" rx="0.8" fill="#26A69A" />
                    <path d="M8 5h12l-1.5 24h-9L8 5z" fill="#E2F0EA" stroke="#87C4AB" strokeWidth="1" />
                    <path d="M7 3h14v2.5H7z" fill="#B6DBCC" stroke="#54BE99" strokeWidth="0.8" />
                    <path d="M10 11h8" stroke="#7E57C2" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="10.5" y1="15" x2="16.5" y2="15" stroke="#26A69A" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-extrabold leading-tight text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
                    Klenzit MS 0.1% Gel
                  </h3>
                  <p className="mt-0.5 truncate text-[9px] font-semibold leading-tight text-[#587C6F]">Bôi mỏng vùng mụn ẩn</p>
                </div>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 text-[9px] font-bold text-[#173B32]">
                  <span className="material-symbols-outlined text-[11px] text-[#173B32]">schedule</span>
                  <span>21:30</span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    data-toast="Sẽ nhắc lại sau 15 phút"
                    className="shadow-2xs whitespace-nowrap rounded-lg border border-[#BEC9C4] bg-white px-2 py-1 text-[9px] font-bold text-[#357D64] transition-all active:scale-95"
                    type="button"
                  >
                    Nhắc lại sau
                  </button>
                  <button
                    data-toast="Đã ghi nhận: đã dùng Klenzit MS 0.1% Gel"
                    className="shadow-xs whitespace-nowrap rounded-lg bg-[#357D64] px-2 py-1 text-[9px] font-bold text-white transition-all hover:bg-[#173B32] active:scale-95"
                    type="button"
                    style={{ backgroundColor: 'rgb(23,59,50)' }}
                  >
                    Đã dùng thuốc
                  </button>
                </div>
              </div>
              <div className="mt-1.5 rounded-md bg-[#F7F8F2] px-2 py-0.5 text-[8.5px] leading-tight">
                <span className="font-extrabold text-[#173B32]">Lưu ý:</span>{' '}
                <span className="font-semibold text-[#357D64]">Bôi cách ngày trong 2 tuần đầu, tránh thoa khóe mũi và khóe miệng.</span>
              </div>
            </article>
            <article className="shadow-2xs rounded-xl border border-[#E9EBDB] bg-white p-2">
              <div className="flex items-center justify-between gap-2">
                <div className="shadow-2xs flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0F2F1] p-1">
                  <svg className="h-7 w-6" viewBox="0 0 32 36" fill="none">
                    <rect x="6" y="7" width="20" height="5" rx="1" fill="#90CAF9" />
                    <path
                      d="M8 12h16c1 0 2 1 2 3v13c0 2-2 3-4 3H10c-2 0-4-1-4-3V15c0-2 1-3 2-3z"
                      fill="#FFFFFF"
                      stroke="#BBDEFB"
                      strokeWidth="1"
                    />
                    <path d="M11 20h10" stroke="#1E88E5" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M13 24h6" stroke="#64B5F6" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-extrabold leading-tight text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
                    Kem dưỡng phục hồi B5
                  </h3>
                  <p className="mt-0.5 truncate text-[9px] font-semibold leading-tight text-[#587C6F]">Thoa đều toàn mặt làm dịu da</p>
                  <div className="mt-0.5 flex items-center gap-1 text-[9px] font-bold text-[#173B32]">
                    <span className="material-symbols-outlined text-[11px] text-[#173B32]">schedule</span>
                    <span>22:00</span>
                  </div>
                </div>
                <button
                  data-toast="Đã ghi nhận: đã dùng Kem dưỡng phục hồi B5"
                  className="shadow-xs shrink-0 rounded-lg bg-[#357D64] px-2.5 py-1 text-[9.5px] font-bold text-white transition-all hover:bg-[#173B32] active:scale-95"
                  type="button"
                  style={{ backgroundColor: 'rgb(23,59,50)' }}
                >
                  Đã dùng thuốc
                </button>
              </div>
              <div className="mt-1.5 rounded-md bg-[#F7F8F2] px-2 py-0.5 text-[8.5px] leading-tight">
                <span className="font-extrabold text-[#173B32]">Lưu ý:</span>{' '}
                <span className="font-semibold text-[#357D64]">Thoa một lớp mỏng vừa đủ sau 15 phút bôi treatment.</span>
              </div>
            </article>
            <div
              data-go="s34"
              className="shadow-2xs flex cursor-pointer items-center justify-between rounded-xl border border-[#D3E2DC] bg-[#F7F8F2] p-2 transition-colors active:bg-[#E8F2EE]"
            >
              <div className="flex min-w-0 items-center gap-2">
                <div className="shadow-2xs flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#CDE0D8] bg-white text-[#357D64]">
                  <span className="material-symbols-outlined text-[16px] text-[#357D64]">receipt_long</span>
                </div>
                <div className="truncate">
                  <p className="text-[10.5px] font-extrabold leading-tight text-[#173B32]">Xem đơn thuốc</p>
                  <p className="mt-0.5 truncate text-[8.5px] font-medium leading-tight text-[#587C6F]">
                    Xem chi tiết đơn thuốc và hướng dẫn của bác sĩ.
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[16px] text-[#357D64]">chevron_right</span>
            </div>
          </section>
        </main>
        <BottomNav role="user" active={2} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
