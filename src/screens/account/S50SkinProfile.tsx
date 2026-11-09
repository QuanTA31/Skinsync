import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 50 · Hồ sơ làn da */
export default function S50SkinProfile() {
  return (
    <Screen tab={4}>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] font-sans antialiased">
        <SafeAreaTop />
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
              <img src="/img/skin/acne-cheek-1.jpg" alt="Ảnh soi da" className="h-full w-full object-cover" />
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
                  <img src="/img/products/effaclar-gel.jpg" alt="La Roche-Posay" className="h-full w-full object-contain p-0.5" />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Sữa rửa mặt</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">La Roche-Posay</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img src="/img/products/toner-blue.jpg" alt="Some By Mi" className="h-full w-full object-contain p-0.5" />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Toner</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">Some By Mi</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img src="/img/products/serum-dropper.jpg" alt="The Ordinary" className="h-full w-full object-contain p-0.5" />
                </div>
                <span className="line-clamp-1 text-[8.5px] font-bold leading-tight text-[#173B32]">Serum</span>
                <span className="mt-0.5 w-full truncate text-[7.5px] leading-tight text-[#71786D]">The Ordinary</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E7EAD8] bg-[#F7F8F2] p-1 text-center">
                <div className="mb-1 flex h-7 w-7 items-center justify-center overflow-hidden rounded border border-[#DADDC9] bg-white">
                  <img src="/img/products/anessa.jpg" alt="Anessa" className="h-full w-full object-contain p-0.5" />
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
      </div>
    </Screen>
  )
}
