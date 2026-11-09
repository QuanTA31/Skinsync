import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaBottom, SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'
import { useNav } from '@/navigation/NavProvider'

/** Màn 62 · Email phụ huynh */
export default function S62ParentEmail() {
  const { go } = useNav()

  return (
    <Screen>
      <div className="relative flex h-[844px] w-[390px] select-none flex-col overflow-hidden bg-ivory font-sans text-ink antialiased">
        <SafeAreaTop />
        <main className="relative z-10 flex flex-1 flex-col px-6 pb-6 pt-3">
          <nav className="mb-5">
            <button
              aria-label="Quay lại"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink shadow-sm active:scale-95"
              data-back="s04"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          </nav>

          <div className="mb-5 flex flex-col items-center">
            <BrandLogo variant="stacked" size="lg" />
          </div>

          <section className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-tint text-primary">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m7-11a4 4 0 100-8 4 4 0 000 8zm7-3h6m-3-3v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="text-[24px] font-bold leading-tight">Email phụ huynh</h1>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              Bạn sinh trong giai đoạn 2009–2011. Vui lòng cung cấp email phụ huynh hoặc người giám hộ để tiếp tục đăng ký.
            </p>
          </section>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault()
              go('s61')
            }}
          >
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold">Email phụ huynh / người giám hộ</span>
              <input
                autoComplete="email"
                className="h-12 w-full rounded-2xl border border-line bg-white px-4 text-[14px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                name="parentEmail"
                placeholder="example@email.com"
                required
                type="email"
              />
            </label>

            <p className="rounded-2xl bg-primary-tint px-3.5 py-3 text-[11px] leading-relaxed text-ink-soft">
              Email này dùng cho bước xác nhận và hỗ trợ bảo vệ tài khoản người dùng chưa đủ 18 tuổi.
            </p>

            <button className="btn btn-primary mt-2 w-full" type="submit">
              Tiếp tục đăng ký <span aria-hidden="true">→</span>
            </button>
          </form>
        </main>
        <SafeAreaBottom />
      </div>
    </Screen>
  )
}
