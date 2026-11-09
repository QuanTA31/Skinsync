import { BottomNav } from '@/components/layout/BottomNav'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { HomeIndicator } from '@/components/layout/HomeIndicator'
import { Screen } from '@/components/layout/Screen'
import { StatusBar } from '@/components/layout/StatusBar'

/** Màn 50 · Hồ sơ làn da */
export default function S50SkinProfile() {
  return (
    <Screen>
      <div className="relative flex h-[884px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-[120px] w-[120px] overflow-hidden opacity-90">
          <img
            src="/eucalyptus-corner.png"
            alt=""
            className="object-top-right pointer-events-none h-full w-full object-contain"
            style={{ background: 'transparent', mixBlendMode: 'multiply' }}
          />
        </div>
        <StatusBar />
        <main className="flex flex-1 flex-col justify-between overflow-hidden px-3.5 pb-[88px] pt-0">
          <header className="relative flex items-center justify-between py-1">
            <button
              aria-label="Quay lại"
              data-back="s48"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E3E6D3] bg-white/80 text-[#357D64] transition-transform active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[17px]">arrow_back_ios_new</span>
            </button>
            <div className="flex items-center justify-center">
              <BrandLogo />
            </div>
            <div className="flex h-7 w-7 items-center justify-center" />
          </header>
          <div className="pt-0.5">
            <h1 className="font-serif text-[18px] font-bold leading-tight tracking-tight text-[#173B32]">Hồ sơ làn da</h1>
            <p className="mt-0.5 text-[11px] leading-tight text-[#697268]">Theo dõi tình trạng da, lịch sử chăm sóc và tiến trình.</p>
          </div>
          <div data-go="s13" className="flex items-center space-x-3 rounded-xl border border-[#E3E6D3] bg-white p-2.5 shadow-sm">
            <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-lg border border-[#E8EBDA] bg-[#F4F6ED]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvd1N5zw96XzfhzEBIlIU17dpZM36l_nK_Gkre6vkzwChFcS_YjCDG6mlvBnT6maCthl9yy-VdGL9dXd7omPF3GvgLJ0f3tU3agaEuowNIGT9Miz_KQAltu4QNSih-KGcuODxcnblpfGlhxDMSZskNrXOEJWR1Xk5eblF_5PQpKTuVb4xeG_Nh_QT-9v-fI5_LyYwQh8tAYhGJwIfe0A30gKZaACddwNtb0JRn95M"
                alt="Ảnh soi da"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 py-0.5 text-center backdrop-blur-[2px]">
                <span className="block text-[8px] font-medium tracking-tight text-white">14/10/2024</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#6D776B]">Tình trạng hiện tại</span>
                <span className="rounded bg-[#E5EFEB] px-1.5 py-0.5 text-[10px] font-semibold text-[#357D64]">78/100 Điểm</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#173B32]">Mụn nhẹ</span>
                <span className="material-symbols-outlined text-[16px] text-[#8A8F84]">chevron_right</span>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1">
                <span className="rounded bg-[#F1F3E9] px-1.5 py-0.5 text-[9.5px] font-medium text-[#546A63]">Dầu nhẹ</span>
                <span className="rounded bg-[#F1F3E9] px-1.5 py-0.5 text-[9.5px] font-medium text-[#546A63]">Lỗ chân lông to</span>
                <span className="rounded bg-[#F1F3E9] px-1.5 py-0.5 text-[9.5px] font-medium text-[#546A63]">Dễ kích ứng</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              data-go="s06"
              className="shadow-xs flex flex-col items-center justify-center rounded-xl border border-[#E3E6D3] bg-white px-1 py-2 transition-colors active:bg-[#F1F3E9]"
              type="button"
            >
              <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F2EE] text-[#357D64]">
                <span className="material-symbols-outlined text-[17px]">photo_camera</span>
              </div>
              <span className="text-[11px] font-semibold text-[#357D64]">Chụp da mới</span>
            </button>
            <button
              data-go="s22"
              className="shadow-xs flex flex-col items-center justify-center rounded-xl border border-[#E3E6D3] bg-white px-1 py-2 transition-colors active:bg-[#F1F3E9]"
              type="button"
            >
              <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F2EE] text-[#357D64]">
                <span className="material-symbols-outlined text-[17px]">bar_chart</span>
              </div>
              <span className="text-[11px] font-semibold text-[#357D64]">Xem lịch sử</span>
            </button>
            <button
              data-go="s09"
              className="shadow-xs flex flex-col items-center justify-center rounded-xl border border-[#E3E6D3] bg-white px-1 py-2 transition-colors active:bg-[#F1F3E9]"
              type="button"
            >
              <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F2EE] text-[#357D64]">
                <span className="material-symbols-outlined text-[17px]">edit_note</span>
              </div>
              <span className="text-[11px] font-semibold text-[#357D64]">Cập nhật hồ sơ</span>
            </button>
          </div>
          <div className="rounded-xl border border-[#E3E6D3] bg-white p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#173B32]">Tình trạng da do bạn khai báo</span>
              <button data-go="s09" className="text-[10px] font-semibold text-[#357D64] underline underline-offset-2" type="button">
                Chỉnh sửa
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full border border-[#FADCC7] bg-[#FFD7C2] px-2 py-0.5 text-[10px] font-semibold text-[#A33518]">
                Da dầu
              </span>
              <span className="rounded-full border border-[#F8D2D0] bg-[#FCD8D4] px-2 py-0.5 text-[10px] font-semibold text-[#A82337]">
                Dễ nổi mụn
              </span>
              <span className="rounded-full border border-[#D0DCEB] bg-[#E5ECF6] px-2 py-0.5 text-[10px] font-semibold text-[#2E4A62]">
                Thỉnh thoảng kích ứng
              </span>
              <span className="rounded-full border border-[#CBDCD5] bg-[#E0EAE6] px-2 py-0.5 text-[10px] font-semibold text-[#357D64]">
                Da nhạy cảm
              </span>
            </div>
          </div>
          <div className="rounded-xl border border-[#E3E6D3] bg-white p-2.5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#173B32]">Lịch sử chăm sóc &amp; điều trị</span>
              <button data-go="s33" className="text-[10px] font-semibold text-[#357D64] underline underline-offset-2" type="button">
                Xem tất cả
              </button>
            </div>
            <div className="relative space-y-2.5">
              <div className="relative flex items-start text-[10px]">
                <span className="w-[32px] shrink-0 pt-0.5 font-mono text-[10px] font-semibold text-[#6D776B]">2024</span>
                <div className="relative mr-2 flex flex-col items-center pt-1">
                  <span className="z-10 h-2 w-2 rounded-full bg-[#357D64] ring-2 ring-white" />
                  <span className="absolute top-2 h-[calc(100%+14px)] w-[1.5px] bg-[#D6E3DE]" />
                </div>
                <div className="min-w-0 flex-1 pr-1">
                  <span className="block truncate text-[10px] font-semibold leading-tight text-[#357D64]">
                    Điều trị mụn tại phòng khám da liễu
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight text-[#7F867C]">(T3 – T6/2024)</span>
                </div>
              </div>
              <div className="relative flex items-start text-[10px]">
                <span className="w-[32px] shrink-0 pt-0.5 font-mono text-[10px] font-semibold text-[#6D776B]">2023</span>
                <div className="relative mr-2 flex flex-col items-center pt-1">
                  <span className="z-10 h-2 w-2 rounded-full bg-[#769E90] ring-2 ring-white" />
                </div>
                <div className="min-w-0 flex-1 pr-1">
                  <span className="block truncate text-[10px] font-medium leading-tight text-[#4C625A]">
                    Sử dụng treatment (BHA, Retinol)
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight text-[#7F867C]">(8/2023 – 12/2023)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#E3E6D3] bg-white p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#173B32]">Sản phẩm đang sử dụng</span>
              <button data-go="s07" className="text-[10px] font-semibold text-[#357D64] underline underline-offset-2" type="button">
                Chỉnh sửa
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuARz9A9N3luLvI9-VyWcUUb8bgGQE5zjBr0Hyn9YsruXMsc-ICXOsWtthiAL0btNarIAQu0SXPUwlNcpRxiDMt8Qgv4LEEevbdZsCF2qi6rE2f_frc-gF_9IZXZC1wL_JBUj9VfOUtc6oI_f_Ch8OkriTsq0jLHc6d4KD5CtsyJujYOvvxA5LoABdmPxRFrv_Aho_feGNFsW9p-Jr8CawsCiy3WJ3Y-WJ3R-6jAl3g"
                    alt="La Roche-Posay"
                    className="h-full w-full object-contain p-0.5"
                  />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Sữa rửa mặt</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">La Roche-Posay</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAihwJ8EPyBLCmWCZKSmOEA2OZZF9AyiIbD_aK45CvYRodulZ5FVPVG7gPua0RIcFB1bvKtaMHtiBLosXLUvtdUBYcYmiu9L6e5Tv0nMdP7adMD-DZIVTKJerzjz_eqyvyjzV3-DJcyOYCuRUS8H3JpVFP1fM9SOYI-wnabAFGa16bKCzYfxsyIaLN0rCoM7Sd8DQTiCD2R4wUfF6YPo_R52n5jFug1ORfSf-oEv0"
                    alt="Some By Mi"
                    className="h-full w-full object-contain p-0.5"
                  />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Toner</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">Some By Mi</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrJJa5psrcuk_j7yh9epYtABaZvKS0mX5KODKCgnSkfbeM9UYkg8qyOwqnVKqtqk_hqOIIRuYLje1yz780JIJjIqLmXtmFEtC__Zcxohix-OGHmcyBP1U-JpNViyirWOb0MsJyAFdgTeedtFbz9nGSBGFr7R2cb8Yc3nIYtAwX1OaAnimrV4hY2sN7I9tLAXR-uvjYO-0KVDcs7QwEawQFHQlb7wsSSzjUlucX2xQ"
                    alt="The Ordinary"
                    className="h-full w-full object-contain p-0.5"
                  />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Serum</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">The Ordinary</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4pN48EGIYOXrlagTPFFg471EmBYxSUXrXgynY1-i1L-HojJX94MlwbqMlRPlOrOKJkSGLAUcwvOXJWf3b2rII0Ny7Jf0YYXwCGPTdA-h8UosVouP2HRBw2WbtFwZvHJNLc1uppvhcwjukf0LQh0Dj2Mdae9Fi2c8b_PQXn2NUrPNmY3hs7dRaCbQYroq2ROBkE4oH3JFgA52g2Vrwa11_2Vn2TqV-YYTDf_Ophdg"
                    alt="Anessa"
                    className="h-full w-full object-contain p-0.5"
                  />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Kem chống nắng</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">Anessa</span>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#173B32]">Phản ứng hoặc kích ứng đã ghi nhận</span>
              <button data-go="s09" className="text-[10px] font-semibold text-[#357D64] underline underline-offset-2" type="button">
                Chỉnh sửa
              </button>
            </div>
            <div
              data-toast="Chi tiết phản ứng đã ghi nhận (minh họa)"
              className="flex items-center space-x-2 rounded-xl border border-[#F8D2D0] bg-[#FBECEB] px-2.5 py-1.5"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] text-[#C53030]">
                <span className="material-symbols-outlined fill text-[13px]">error</span>
              </div>
              <span className="flex-1 truncate text-[10px] font-medium leading-tight text-[#9B2C2C]">
                Da hơi đỏ khi sử dụng sản phẩm chứa Retinol.
              </span>
              <span className="material-symbols-outlined ml-auto shrink-0 text-[14px] text-[#C53030]">chevron_right</span>
            </div>
          </div>
        </main>
        <BottomNav role="user" active={4} />
        <HomeIndicator />
      </div>
    </Screen>
  )
}
