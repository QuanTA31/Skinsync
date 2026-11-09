import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Pills, Top, useToggle } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

/** Màn 36 · Cộng đồng yêu da */
export default function S36Community() {
  const [liked, toggleLike] = useToggle(false)

  return (
    <ScopedScreen id="s36" css={css} tab={1}>
      <main className="screen">
        <span className="leaf">🌿</span>
        <Top back="s10" right={<span data-toast="Tìm kiếm bài viết (minh họa)">⌕</span>} />

        <h1>Cộng đồng yêu da</h1>
        <p>Chia sẻ kiến thức, kinh nghiệm và đồng hành cùng làn da khỏe mạnh hơn mỗi ngày.</p>

        <div className="card row between" data-toast="Nhập từ khóa để tìm bài viết (minh họa)">
          <span>⌕　Tìm bài viết, chủ đề, bác sĩ...</span>
          <b data-toast="Bộ lọc bài viết (minh họa)">☷</b>
        </div>

        <Pills items={['Dành cho bạn', 'Bác sĩ', 'Hành trình làn da', 'Sản phẩm']} />

        <article className="card">
          <div className="row">
            <div className="avatar" data-go="s24">
              👩🏻‍⚕️
            </div>
            <div style={{ flex: 1 }} data-go="s24">
              <b>BS. Nguyễn Thị Minh Anh　✓</b>
              <p>Bác sĩ Chuyên khoa Da liễu · 2 ngày trước</p>
            </div>
            <span data-toast="Tùy chọn bài viết (minh họa)">···</span>
          </div>
          <h3 style={{ marginTop: 9 }} data-go="s37">
            Làm thế nào để xây dựng thói quen chăm sóc da phù hợp?
          </h3>
          <div className="thumb hero" data-go="s37">
            👩🏻‍⚕️
          </div>
          <div className="row between">
            <div className="row">
              <button className="btn" onClick={toggleLike}>
                {liked ? '♥　1.2K' : '♡　1.2K'}
              </button>
              <button className="btn" data-go="s37">
                ☏　56
              </button>
              <button className="btn" data-toast="Đã lưu bài viết">
                ♧　Lưu
              </button>
            </div>
            <button className="btn primary" data-go="s38">
              ● Quan tâm
            </button>
          </div>
        </article>

        <article className="card">
          <div className="row">
            <div className="avatar">👩🏻</div>
            <div style={{ flex: 1 }} data-go="s37">
              <b>Nguyễn Thu Hà</b>
              <p>Thành viên Premium · 5 ngày trước</p>
            </div>
            <span className="pill" data-go="s40">
              Hành trình làn da
            </span>
          </div>
          <h3 data-go="s37">Cập nhật da sau 4 tuần: sự khác biệt thật sự!</h3>
          <div className="grid2" data-go="s37">
            <div className="thumb" style={{ height: 95 }}>
              🌸
            </div>
            <div className="thumb" style={{ height: 95 }}>
              ✨
            </div>
          </div>
        </article>
      </main>
    </ScopedScreen>
  )
}
