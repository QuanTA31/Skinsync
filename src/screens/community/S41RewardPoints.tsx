import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Top } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

const history = [
  ['Video chia sẻ ngày thứ 14', '12/10/2024', '+10 điểm'],
  ['Video quy trình chăm sóc da', '05/10/2024', '+10 điểm'],
  ['Review sản phẩm phục hồi', '28/09/2024', '+10 điểm'],
  ['Chia sẻ kinh nghiệm trị mụn', '20/09/2024', 'Đang xét duyệt'],
]

/** Màn 41 · Điểm thưởng của tôi */
export default function S41RewardPoints() {
  return (
    <ScopedScreen id="s41" css={css} tab={4}>
      <main className="screen">
        <Top back="s48" />

        <h1>Điểm thưởng của tôi</h1>
        <p>Chia sẻ hành trình, nhận điểm thưởng và mở quyền giới thiệu sản phẩm.</p>

        <div className="score">
          <p style={{ color: 'white' }}>TỔNG ĐIỂM CỦA BẠN</p>
          <strong>70</strong> /100 điểm
          <div className="progress">
            <i />
          </div>
          <p style={{ color: 'white' }}>Còn 30 điểm để đủ điều kiện đăng ký gắn liên kết sản phẩm.</p>
        </div>

        <div className="grid2">
          <div className="stat" data-go="s40">
            🔴　<b>10</b>
            <p>Điểm / video hợp lệ</p>
          </div>
          <div className="stat" data-go="s42">
            🪙　<b>5%</b>
            <p>Hoa hồng đơn hợp lệ</p>
          </div>
        </div>

        <div className="row between" style={{ marginTop: 14 }}>
          <b>Lịch sử tích điểm</b>
          <span className="small" data-toast="Hiển thị toàn bộ lịch sử tích điểm">
            Xem tất cả ›
          </span>
        </div>
        {history.map((r) => (
          <div className="listrow" key={r[0]} data-go="s36">
            <div className="thumb video" style={{ width: 42, height: 42 }}>
              <img src="/img/skin/clear-cheek.jpg" alt="Video" />
            </div>
            <div style={{ flex: 1 }}>
              <b>{r[0]}</b>
              <p>
                {r[1]}　<span className="pill">Đã duyệt</span>
              </p>
            </div>
            <b className="small">{r[2]}</b>
          </div>
        ))}

        <div className="notice blue">
          ⓘ　Điểm và lịch sử chỉ mang tính minh họa. Điều kiện, hình thức và mức thưởng có thể thay đổi theo chương trình.
        </div>

        <nav className="bottom">
          <button className="btn" data-go="s43">
            Xem quy chế
          </button>
          <button className="btn" data-go="s40">
            Đăng video
          </button>
          <button className="btn primary" data-go="s42">
            ♙ Đăng ký mở quyền liên kết
          </button>
        </nav>
      </main>
    </ScopedScreen>
  )
}
