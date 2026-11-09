import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 47 · Thời tiết & chăm sóc da hôm nay */
export default function S47WeatherCare() {
  return (
    <Screen tab={0}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
        <main className="flex flex-1 flex-col justify-between overflow-hidden px-4 pb-2 pt-1" style={{ paddingBottom: '74px' }}>
          <header className="relative flex h-[36px] items-center justify-between px-1">
            <button
              aria-label="Quay lại"
              data-back="s10"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3E6D3] bg-white/70 text-[#357D64] transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <div className="flex items-center gap-1.5">
              <BrandLogo />
            </div>
            <div className="h-8 w-8" />
          </header>
          <section className="mt-1">
            <h1 className="font-serif text-[19px] font-bold leading-tight tracking-tight text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
              Thời tiết và chăm sóc da hôm nay
            </h1>
            <p className="mt-0.5 text-[10.5px] font-medium leading-snug text-[#697268]">
              Cập nhật điều kiện thời tiết và môi trường để giúp bạn chăm sóc da phù hợp hơn mỗi ngày.
            </p>
          </section>
          <section className="mt-2 flex items-center justify-between gap-2">
            <div
              data-toast="Chọn khu vực: Đà Nẵng, Hà Nội, TP. Hồ Chí Minh…"
              className="shadow-xs flex flex-1 items-center justify-between rounded-full border border-[#E4E7D6] bg-white/85 px-3 py-1.5"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-[#357D64]">location_on</span>
                <span className="text-[11.5px] font-semibold text-[#357D64]" style={{ color: 'rgb(23,59,50)' }}>
                  Đà Nẵng, Việt Nam
                </span>
              </div>
              <span className="material-symbols-outlined text-[16px] text-[#7C8879]">expand_more</span>
            </div>
            <button
              data-toast="Cài đặt khu vực (minh họa)"
              className="shadow-xs flex items-center gap-1 rounded-full border border-[#E4E7D6] bg-white/85 px-2.5 py-1.5 text-[11px] font-semibold text-[#466D5F] transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">settings</span>
              <span>Cài đặt khu vực</span>
            </button>
          </section>
          <section className="shadow-xs relative mt-2 h-[142px] w-full overflow-hidden rounded-[20px] border border-[#E2E5D2]">
            <img
              src="/img/scenes/da-nang.jpg"
              alt="Da Nang Dragon Bridge"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-white/20" />
            <div className="relative z-10 flex h-full w-full items-stretch justify-between gap-2 p-2.5">
              <div className="flex flex-col justify-between py-0.5 pl-1">
                <div className="flex items-center gap-2">
                  <div className="relative flex shrink-0 items-center justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#FFB300] to-[#FFE082] shadow-[0_0_18px_rgba(255,179,0,0.8)]">
                      <div className="backdrop-blur-xs h-6 w-6 rounded-full bg-[#FFA000]/25" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold uppercase leading-none tracking-wider text-[#4A6475]">Hiện tại</span>
                    <span className="text-[24px] font-extrabold leading-tight tracking-tight text-[#1F3E50]">32°C</span>
                  </div>
                </div>
                <div className="backdrop-blur-xs shadow-xs inline-block w-fit rounded-full border border-white/60 bg-white/80 px-2 py-0.5">
                  <p className="text-[10px] font-semibold text-[#2A485A]">Trời nắng, ít mây</p>
                </div>
              </div>
              <div className="backdrop-blur-xs shadow-xs flex w-[158px] flex-col justify-between rounded-[16px] border border-[#E2E5D2] bg-white/90 p-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-semibold text-[#357D64]">Chỉ số UV</span>
                    <span className="material-symbols-outlined text-[13px] text-[#7C8879]">info</span>
                  </div>
                  <div className="mt-0.5 flex items-baseline gap-1.5">
                    <span className="text-[22px] font-extrabold leading-none text-[#173B32]">8</span>
                    <span className="rounded-full border border-[#F8C8C2] bg-[#FFEBE7] px-1.5 py-0.5 text-[9px] font-bold leading-none text-[#D04436]">
                      Rất cao
                    </span>
                  </div>
                  <div className="relative mt-1 w-full">
                    <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#5EC29F] via-[#F4B400] to-[#E53935]" />
                    <div className="absolute -top-1 left-[72%] h-0 w-0 -translate-x-1/2 border-l-[3.5px] border-r-[3.5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#D04436]" />
                  </div>
                </div>
                <p className="mt-0.5 border-t border-[#EDEFE2] pt-1 text-[8px] font-medium leading-tight text-[#5B746B]">
                  <strong className="font-semibold text-[#D04436]">Cần bảo vệ da kỹ.</strong> Hạn chế ra nắng 10:00 - 15:00.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-2 grid grid-cols-3 gap-2">
            <div className="shadow-xs flex items-center gap-2 rounded-2xl border border-[#E6E9D8] bg-white/85 p-2">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3F2FD]"
                style={{ backgroundColor: 'rgb(214,228,251)' }}
              >
                <span className="material-symbols-outlined fill text-[18px] font-medium text-[#1E88E5]">water_drop</span>
              </div>
              <div className="min-w-0">
                <span className="block text-[9px] font-medium leading-none text-[#6E7B70]">Độ ẩm</span>
                <span className="block text-[13px] font-bold leading-tight text-[#173B32]">68%</span>
                <span className="block truncate text-[8.5px] font-medium leading-none text-[#6C897F]">Trung bình</span>
              </div>
            </div>
            <div className="shadow-xs flex items-center gap-2 rounded-2xl border border-[#E6E9D8] bg-white/85 p-2">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E9F4EF]"
                style={{ backgroundColor: 'rgb(206,228,219)' }}
              >
                <span className="material-symbols-outlined text-[18px] font-medium text-[#43B28B]">air</span>
              </div>
              <div className="min-w-0">
                <span className="block truncate text-[8.5px] font-medium leading-none text-[#6E7B70]">CL không khí</span>
                <span className="block text-[13px] font-bold leading-tight text-[#173B32]">Tốt</span>
                <span className="block text-[8.5px] font-medium leading-none text-[#43B28B]">AQI 42</span>
              </div>
            </div>
            <div className="shadow-xs flex items-center gap-2 rounded-2xl border border-[#E6E9D8] bg-white/85 p-2">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF3E0]"
                style={{ backgroundColor: 'rgb(252,227,210)' }}
              >
                <span className="material-symbols-outlined text-[18px] font-medium text-[#FB8C00]">device_thermostat</span>
              </div>
              <div className="min-w-0">
                <span className="block truncate text-[8.5px] font-medium leading-none text-[#6E7B70]">Nhiệt cảm nhận</span>
                <span className="block text-[13px] font-bold leading-tight text-[#173B32]">34°C</span>
                <span className="block truncate text-[8.5px] font-medium leading-none text-[#D87D25]">Nắng gắt</span>
              </div>
            </div>
          </section>
          <section className="mt-1 flex items-center justify-between px-1 text-[9.5px] font-medium text-[#717F72]">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">schedule</span>
              <span>Cập nhật lúc: 10:30, 22/10/2024</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">sync</span>
              <span>Dự kiến cập nhật lại sau 1 giờ</span>
            </div>
          </section>
          <section className="shadow-xs relative mt-1 overflow-hidden rounded-[22px] border border-[#D5E6DF] bg-gradient-to-r from-[#EDF5F2] via-[#F7F8F2] to-[#F7F8F2] p-3">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-serif text-[13.5px] font-bold text-[#173B32]" style={{ color: 'rgb(23,59,50)' }}>
                Lời khuyên chăm sóc da hôm nay
              </h2>
              <button
                data-go="s17"
                className="flex items-center text-[9.5px] font-semibold text-[#357D64] hover:underline"
                type="button"
                style={{ color: 'rgb(23,59,50)' }}
              >
                Xem chi tiết
                <span className="material-symbols-outlined text-[13px]">chevron_right</span>
              </button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <ul className="z-10 flex-1 space-y-1.5">
                <li className="flex items-center gap-2 text-[10.5px] font-semibold text-[#3D5C51]">
                  <img
                    src="/img/products/sunscreen.jpg"
                    alt="Kem chống nắng SPF 50"
                    className="shadow-xs h-7 w-7 shrink-0 rounded-full bg-white/70 object-contain p-0.5"
                    style={{ backgroundColor: 'rgb(220,235,229)' }}
                  />
                  <span>Sử dụng kem chống nắng SPF 50+</span>
                </li>
                <li className="flex items-center gap-2 text-[10.5px] font-semibold text-[#3D5C51]">
                  <img
                    src="/img/scenes/sun-hat.jpg"
                    alt="Nón rộng vành che nắng"
                    className="shadow-xs h-7 w-7 shrink-0 rounded-full bg-white/70 object-contain p-0.5"
                    style={{ backgroundColor: 'rgb(220,235,229)' }}
                  />
                  <span>Hạn chế ra nắng trực tiếp 10:00 – 15:00</span>
                </li>
                <li className="flex items-center gap-2 text-[10.5px] font-semibold text-[#3D5C51]">
                  <img
                    src="/img/products/mineral-water.jpg"
                    alt="Nước khoáng cấp ẩm"
                    className="shadow-xs h-7 w-7 shrink-0 rounded-full bg-white/70 object-contain p-0.5"
                    style={{ backgroundColor: 'rgb(220,235,229)' }}
                  />
                  <span>Dưỡng ẩm đầy đủ, bổ sung nước cho cơ thể</span>
                </li>
              </ul>
              <div
                className="pointer-events-none relative -my-3 -mr-3 flex h-28 w-28 shrink-0 items-center justify-end overflow-hidden rounded-r-[22px]"
                style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 38%)' }}
              >
                <img
                  src="/img/products/skincare-set.jpg"
                  alt="Cosmetic skincare tube and cream jar"
                  className="h-full w-full object-cover object-center"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </section>
          <section className="mt-1 grid grid-cols-12 gap-1.5">
            <button
              data-toast="Đang xem thời tiết hôm nay"
              className="shadow-xs col-span-3 flex items-center justify-center gap-1 rounded-full border border-[#E0E3CF] bg-white/90 px-1 py-2 text-[10.5px] font-semibold text-[#357D64] transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">cloud</span>
              <span className="truncate">Thời tiết</span>
            </button>
            <button
              data-toast="Cài đặt khu vực (minh họa)"
              className="shadow-xs col-span-4 flex items-center justify-center gap-1 rounded-full border border-[#E0E3CF] bg-white/90 px-1 py-2 text-[10.5px] font-semibold text-[#357D64] transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">location_on</span>
              <span className="truncate">Khu vực</span>
            </button>
            <button
              data-go="s17"
              className="col-span-5 flex items-center justify-center gap-1 rounded-full bg-[#173B32] px-2 py-2 text-[10.5px] font-bold text-white shadow-md shadow-[#357D64]/20 transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">wb_sunny</span>
              <span className="truncate">Quy trình sáng</span>
            </button>
          </section>
        </main>
      </div>
    </Screen>
  )
}
