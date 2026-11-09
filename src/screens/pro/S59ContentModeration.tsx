import { BrandLogo } from '@/components/brand/BrandLogo'
import { SafeAreaTop } from '@/components/layout/SafeArea'
import { Screen } from '@/components/layout/Screen'

/** Màn 59 · Kiểm duyệt nội dung */
export default function S59ContentModeration() {
  return (
    <Screen tab={1} role="doctor">
      <div className="relative flex h-[844px] w-[390px] select-none flex-col justify-between overflow-hidden bg-[#F7F8F2] text-[#2D312E]">
        <div className="flex w-full flex-1 flex-col overflow-hidden">
          <SafeAreaTop />
          <header className="relative z-10 flex shrink-0 items-center justify-between px-4 pb-1 pt-1">
            <button
              aria-label="Menu"
              data-toast="Menu bác sĩ (minh họa)"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#357D64] transition hover:bg-black/5"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <div className="flex-1 pr-2 text-center">
              <BrandLogo />
            </div>
            <div data-go="s58" className="relative z-20 flex items-center">
              <img
                alt="Avatar Bác sĩ"
                className="h-8 w-8 rounded-full border border-[#D3DFDA] object-cover shadow-sm"
                src="/img/people/doctor-lan.jpg"
              />
            </div>
          </header>
          <main className="no-scrollbar flex flex-1 flex-col justify-start gap-1.5 overflow-y-auto px-3.5 pb-24">
            <div>
              <h1
                className="text-[18px] font-bold leading-tight tracking-tight text-[#173B32]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Kiểm duyệt nội dung
              </h1>
              <p className="mt-0.5 text-[10.5px] leading-snug text-[#636C65]">
                Xem xét, phê duyệt và quản lý nội dung do người dùng đăng tải trên SKINSYNC.
              </p>
            </div>
            <nav data-pills="" className="mt-0.5 flex items-center gap-1.5 overflow-x-hidden text-[11px]">
              <button
                data-on=""
                className="shadow-xs whitespace-nowrap rounded-lg bg-[#357D64] px-3 py-1 font-medium text-white transition"
                type="button"
              >
                Bài viết
              </button>
              <button
                className="whitespace-nowrap rounded-lg border border-[#DEE2C9]/60 bg-[#EDEFE3] px-2.5 py-1 font-medium text-[#4F5651]"
                type="button"
              >
                Video
              </button>
              <button
                className="whitespace-nowrap rounded-lg border border-[#DEE2C9]/60 bg-[#EDEFE3] px-2.5 py-1 font-medium text-[#4F5651]"
                type="button"
              >
                Báo cáo vi phạm
              </button>
              <button
                className="whitespace-nowrap rounded-lg border border-[#DEE2C9]/60 bg-[#EDEFE3] px-2.5 py-1 font-medium text-[#4F5651]"
                type="button"
              >
                Lịch sử duyệt
              </button>
              <button
                className="whitespace-nowrap rounded-lg border border-[#DEE2C9]/60 bg-[#EDEFE3] px-2.5 py-1 font-medium text-[#4F5651]"
                type="button"
              >
                Điểm thưởng
              </button>
            </nav>
            <div className="flex items-center justify-between pt-0.5 text-[11.5px]">
              <div className="font-bold text-[#173B32]">
                Danh sách chờ duyệt <span className="font-normal">(12)</span>
              </div>
              <button
                data-toast="Sắp xếp: Mới nhất / Cũ nhất (minh họa)"
                className="flex items-center gap-0.5 bg-transparent text-[11px] font-medium text-[#555E57]"
                type="button"
              >
                <span>Mới nhất</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1.5">
              <article className="shadow-xs rounded-[11px] border border-[#E3E6D3] bg-white p-2">
                <div className="flex items-center gap-2">
                  <img
                    alt=""
                    className="h-[58px] w-[58px] shrink-0 rounded-lg border border-[#ECEEE0] object-cover"
                    src="/img/scenes/facial-treatment.jpg"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <img alt="" className="h-4 w-4 rounded-full object-cover" src="/img/people/member-3.jpg" />
                        <span className="truncate text-[11px] font-semibold text-[#173B32]">Nguyễn Thảo Vy</span>
                        <span className="shrink-0 text-[9.5px] text-[#868F88]">2 giờ trước</span>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#FDE68A]/60 bg-[#FFF5E6] px-1.5 py-0.5 text-[9px] font-medium text-[#D97706]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>{' '}
                        Chờ duyệt
                      </span>
                    </div>
                    <h2 className="mt-0.5 truncate text-[11.5px] font-semibold leading-tight text-[#173B32]">
                      Review liệu trình trị mụn tại SKINSYNC
                    </h2>
                    <div className="mt-0.5 flex items-center gap-2.5 text-[9.5px] text-[#69746C]">
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>{' '}
                        Bài viết
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>{' '}
                        Kinh nghiệm điều trị
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1.5 border-t border-[#F1F2E8]/80 pt-1 text-[10px]">
                  <button
                    data-toast="Đã phê duyệt nội dung"
                    data-dismiss="article"
                    className="shadow-xs flex flex-1 items-center justify-center gap-1 rounded-md bg-[#357D64] py-1 font-medium text-white"
                    type="button"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{' '}
                    Phê duyệt
                  </button>
                  <button
                    data-toast="Đã từ chối nội dung"
                    data-dismiss="article"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#EAA2A2] bg-white py-1 font-medium text-[#D03D3D]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>{' '}
                    Từ chối
                  </button>
                  <button
                    data-toast="Đã gửi yêu cầu chỉnh sửa cho tác giả"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#357D64]/40 bg-white py-1 font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>{' '}
                    Yêu cầu chỉnh sửa
                  </button>
                </div>
              </article>
              <article className="shadow-xs rounded-[11px] border border-[#E3E6D3] bg-white p-2">
                <div className="flex items-center gap-2">
                  <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-lg border border-[#ECEEE0]">
                    <img alt="" className="h-full w-full object-cover" src="/img/products/moisturizer-set.jpg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="shadow-xs flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#357D64" stroke="#357D64" strokeWidth="1">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <img alt="" className="h-4 w-4 rounded-full object-cover" src="/img/people/member-5.jpg" />
                        <span className="truncate text-[11px] font-semibold text-[#173B32]">Trần Minh Quân</span>
                        <span className="shrink-0 text-[9.5px] text-[#868F88]">5 giờ trước</span>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#FDE68A]/60 bg-[#FFF5E6] px-1.5 py-0.5 text-[9px] font-medium text-[#D97706]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>{' '}
                        Chờ duyệt
                      </span>
                    </div>
                    <h2 className="mt-0.5 truncate text-[11.5px] font-semibold leading-tight text-[#173B32]">
                      Hướng dẫn chăm sóc da sau peel
                    </h2>
                    <div className="mt-0.5 flex items-center gap-2.5 text-[9.5px] text-[#69746C]">
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="14" height="12" x="2" y="6" rx="2" />
                          <path d="m22 7-6 4 6 4V7Z" />
                        </svg>{' '}
                        Video
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        </svg>{' '}
                        Hướng dẫn chăm sóc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1.5 border-t border-[#F1F2E8]/80 pt-1 text-[10px]">
                  <button
                    data-toast="Đã phê duyệt nội dung"
                    data-dismiss="article"
                    className="shadow-xs flex flex-1 items-center justify-center gap-1 rounded-md bg-[#357D64] py-1 font-medium text-white"
                    type="button"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{' '}
                    Phê duyệt
                  </button>
                  <button
                    data-toast="Đã từ chối nội dung"
                    data-dismiss="article"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#EAA2A2] bg-white py-1 font-medium text-[#D03D3D]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>{' '}
                    Từ chối
                  </button>
                  <button
                    data-toast="Đã gửi yêu cầu chỉnh sửa cho tác giả"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#357D64]/40 bg-white py-1 font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>{' '}
                    Yêu cầu chỉnh sửa
                  </button>
                </div>
              </article>
              <article className="shadow-xs rounded-[11px] border border-[#F0D5D5] bg-white p-2">
                <div className="flex items-center gap-2">
                  <img
                    alt=""
                    className="h-[58px] w-[58px] shrink-0 rounded-lg border border-[#F5E0E0] object-cover"
                    src="/img/products/cleansing-oil.jpg"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <img alt="" className="h-4 w-4 rounded-full object-cover" src="/img/people/member-2.jpg" />
                        <span className="truncate text-[11px] font-semibold text-[#173B32]">Lê Thu Hà</span>
                        <span className="shrink-0 text-[9.5px] text-[#868F88]">1 ngày trước</span>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#FECACA] bg-[#FEE2E2] px-1.5 py-0.5 text-[9px] font-bold text-[#DC2626]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                          <line x1="12" x2="12" y1="9" y2="13" />
                          <line x1="12" x2="12.01" y1="17" y2="17" />
                        </svg>{' '}
                        Bị báo cáo
                      </span>
                    </div>
                    <h2 className="mt-0.5 truncate text-[11.5px] font-semibold leading-tight text-[#173B32]">
                      Da bị kích ứng sau khi dùng sản phẩm này?
                    </h2>
                    <div className="mt-0.5 flex items-center gap-2.5 text-[9.5px] text-[#69746C]">
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>{' '}
                        Bài viết
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>{' '}
                        Phản hồi sản phẩm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1.5 border-t border-[#F1F2E8]/80 pt-1 text-[10px]">
                  <button
                    data-toast="Đã phê duyệt nội dung"
                    data-dismiss="article"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#357D64] bg-white py-1 font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{' '}
                    Phê duyệt
                  </button>
                  <button
                    data-toast="Đã từ chối nội dung"
                    data-dismiss="article"
                    className="shadow-xs flex flex-1 items-center justify-center gap-1 rounded-md bg-[#C53F3F] py-1 font-medium text-white"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>{' '}
                    Từ chối
                  </button>
                  <button
                    data-toast="Đã gửi yêu cầu chỉnh sửa cho tác giả"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#357D64]/40 bg-white py-1 font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>{' '}
                    Yêu cầu chỉnh sửa
                  </button>
                </div>
                <div className="mt-1 flex items-center gap-1.5 rounded-md border border-[#FDE8E8] bg-[#FFF2F2] px-2 py-1 text-[9px] text-[#9E2B2B]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="truncate">
                    <strong className="font-semibold">Lý do từ chối:</strong> Nội dung cần bổ sung nguồn.
                  </span>
                </div>
              </article>
              <article className="shadow-xs rounded-[11px] border border-[#E3E6D3] bg-white p-2">
                <div className="flex items-center gap-2">
                  <img
                    alt=""
                    className="h-[58px] w-[58px] shrink-0 rounded-lg border border-[#ECEEE0] object-cover"
                    src="/img/scenes/facial-treatment.jpg"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <img alt="" className="h-4 w-4 rounded-full object-cover" src="/img/people/member-4.jpg" />
                        <span className="truncate text-[11px] font-semibold text-[#173B32]">Phạm Quỳnh Trang</span>
                        <span className="shrink-0 text-[9.5px] text-[#868F88]">3 giờ trước</span>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#FDE68A]/60 bg-[#FFF5E6] px-1.5 py-0.5 text-[9px] font-medium text-[#D97706]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>{' '}
                        Chờ duyệt
                      </span>
                    </div>
                    <h2 className="mt-0.5 truncate text-[11.5px] font-semibold leading-tight text-[#173B32]">
                      Cách xử lý mụn đầu đen vùng mũi hiệu quả tại nhà
                    </h2>
                    <div className="mt-0.5 flex items-center gap-2.5 text-[9.5px] text-[#69746C]">
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>{' '}
                        Bài viết
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>{' '}
                        Kinh nghiệm điều trị
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1.5 border-t border-[#F1F2E8]/80 pt-1 text-[10px]">
                  <button
                    data-toast="Đã phê duyệt nội dung"
                    data-dismiss="article"
                    className="shadow-xs flex flex-1 items-center justify-center gap-1 rounded-md bg-[#357D64] py-1 font-medium text-white"
                    type="button"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{' '}
                    Phê duyệt
                  </button>
                  <button
                    data-toast="Đã từ chối nội dung"
                    data-dismiss="article"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#EAA2A2] bg-white py-1 font-medium text-[#D03D3D]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>{' '}
                    Từ chối
                  </button>
                  <button
                    data-toast="Đã gửi yêu cầu chỉnh sửa cho tác giả"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#357D64]/40 bg-white py-1 font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>{' '}
                    Yêu cầu chỉnh sửa
                  </button>
                </div>
              </article>
              <article className="shadow-xs rounded-[11px] border border-[#E3E6D3] bg-white p-2">
                <div className="flex items-center gap-2">
                  <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-lg border border-[#ECEEE0]">
                    <img alt="" className="h-full w-full object-cover" src="/img/products/moisturizer-set.jpg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="shadow-xs flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#357D64" stroke="#357D64" strokeWidth="1">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <img alt="" className="h-4 w-4 rounded-full object-cover" src="/img/people/member-5.jpg" />
                        <span className="truncate text-[11px] font-semibold text-[#173B32]">Hoàng Đức Thịnh</span>
                        <span className="shrink-0 text-[9.5px] text-[#868F88]">4 giờ trước</span>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#FDE68A]/60 bg-[#FFF5E6] px-1.5 py-0.5 text-[9px] font-medium text-[#D97706]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>{' '}
                        Chờ duyệt
                      </span>
                    </div>
                    <h2 className="mt-0.5 truncate text-[11.5px] font-semibold leading-tight text-[#173B32]">
                      Quy trình routine buổi sáng cho da dầu mụn nhạy cảm
                    </h2>
                    <div className="mt-0.5 flex items-center gap-2.5 text-[9.5px] text-[#69746C]">
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="14" height="12" x="2" y="6" rx="2" />
                          <path d="m22 7-6 4 6 4V7Z" />
                        </svg>{' '}
                        Video
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        </svg>{' '}
                        Hướng dẫn chăm sóc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1.5 border-t border-[#F1F2E8]/80 pt-1 text-[10px]">
                  <button
                    data-toast="Đã phê duyệt nội dung"
                    data-dismiss="article"
                    className="shadow-xs flex flex-1 items-center justify-center gap-1 rounded-md bg-[#357D64] py-1 font-medium text-white"
                    type="button"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{' '}
                    Phê duyệt
                  </button>
                  <button
                    data-toast="Đã từ chối nội dung"
                    data-dismiss="article"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#EAA2A2] bg-white py-1 font-medium text-[#D03D3D]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>{' '}
                    Từ chối
                  </button>
                  <button
                    data-toast="Đã gửi yêu cầu chỉnh sửa cho tác giả"
                    className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#357D64]/40 bg-white py-1 font-medium text-[#357D64]"
                    type="button"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>{' '}
                    Yêu cầu chỉnh sửa
                  </button>
                </div>
              </article>
              <div className="shadow-xs flex items-center justify-between gap-2 rounded-[11px] border border-[#E3E6D3] bg-white p-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8EFEC] text-[#357D64]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="8" width="18" height="4" rx="1" />
                      <path d="M12 8v13" />
                      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[11px] font-bold text-[#173B32]">Cộng điểm &amp; quyền liên kết</div>
                    <div className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-[#69746C]">
                      Duyệt điểm thưởng cho người dùng và yêu cầu quyền tham gia chương trình liên kết.
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="whitespace-nowrap rounded-full border border-[#FDE68A]/60 bg-[#FFF5E6] px-1.5 py-0.5 text-[8.5px] font-semibold text-[#D97706]">
                    4 yêu cầu chờ duyệt
                  </span>
                  <button
                    data-toast="Lịch sử cộng điểm (minh họa)"
                    className="flex items-center gap-0.5 rounded-full border border-[#357D64]/40 bg-white px-2 py-0.5 text-[9px] font-medium text-[#357D64] transition hover:bg-[#F7F8F2]"
                    type="button"
                  >
                    <span>Xem lịch sử điểm</span>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Screen>
  )
}
