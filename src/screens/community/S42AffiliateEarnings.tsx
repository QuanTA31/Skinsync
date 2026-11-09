import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Top } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

const products = [
  ['/img/products/effaclar-gel.jpg', 'La Roche-Posay', 'Sữa rửa mặt dịu nhẹ'],
  ['/img/products/serum-dropper.jpg', 'Skin1004', 'Serum rau má'],
  ['/img/products/cream-jar.jpg', 'CeraVe', 'Kem dưỡng ẩm'],
]
const orders = [
  ['La Roche-Posay Effaclar Duo+', '12/10/2024', '+24.000đ'],
  ['CeraVe Moisturizing Cream', '05/10/2024', '+18.000đ'],
  ['Skin1004 Centella Ampoule', '28/09/2024', '+20.000đ'],
]

/** Màn 42 · Thu nhập từ giới thiệu sản phẩm */
export default function S42AffiliateEarnings() {
  return (
    <ScopedScreen id="s42" css={css} tab={4}>
      <main className="screen">
        <Top back="s41" />

        <h1>Thu nhập từ giới thiệu sản phẩm</h1>
        <p>Chia sẻ sản phẩm bạn yêu thích và nhận hoa hồng khi đơn hàng hợp lệ.</p>

        <div className="notice" style={{ marginTop: 12 }}>
          <b>👑　Đã đủ điều kiện tham gia</b>
          <p>Bạn có thể tạo liên kết giới thiệu sản phẩm.</p>
        </div>

        <div className="card grid2">
          <div>
            <p>Tổng hoa hồng dự kiến</p>
            <h2>245.000đ</h2>
            <p>Đơn hàng phát sinh</p>
            <b>12</b>
          </div>
          <div>
            <p>Hoa hồng đã xác nhận</p>
            <h2>120.000đ</h2>
            <p>Đơn hàng hợp lệ</p>
            <b>8</b>
          </div>
        </div>

        <button className="btn primary full" data-toast="Đã sao chép liên kết giới thiệu của bạn">
          ♧　Tạo liên kết giới thiệu
        </button>
        <div className="grid2" style={{ marginTop: 8 }}>
          <button className="btn" data-go="s51">
            ▢　Xem đơn hàng
          </button>
          <button className="btn" data-go="s43">
            ▤　Xem quy định
          </button>
        </div>

        <div className="row between" style={{ marginTop: 14 }}>
          <b>Sản phẩm có thể giới thiệu</b>
          <span className="small" data-go="s19">
            Xem tất cả ›
          </span>
        </div>
        <div className="grid3">
          {products.map((p) => (
            <div className="card" key={p[1]} style={{ padding: 7 }}>
              <div className="product" data-go="s20">
                <img src={p[0]} alt={p[2]} />
              </div>
              <p>
                <b>{p[1]}</b>
                <br />
                {p[2]}
              </p>
              <p>Hoa hồng: 5%</p>
              <button className="btn" style={{ padding: '6px', width: '100%' }} data-toast={`Đã tạo liên kết giới thiệu ${p[1]}`}>
                Tạo liên kết
              </button>
            </div>
          ))}
        </div>

        <div className="row between" style={{ marginTop: 8 }}>
          <b>Lịch sử đơn hàng</b>
          <span className="small" data-go="s51">
            Xem tất cả ›
          </span>
        </div>
        {orders.map((x) => (
          <div className="listrow" key={x[0]} data-go="s51">
            <div className="thumb" style={{ width: 40, height: 40 }}>
              <img src="/img/products/effaclar-gel.jpg" alt="" />
            </div>
            <div style={{ flex: 1 }}>
              <b>{x[0]}</b>
              <p>
                {x[1]}　<span className="pill">Đã xác nhận</span>
              </p>
            </div>
            <b className="small">{x[2]}</b>
          </div>
        ))}
      </main>
    </ScopedScreen>
  )
}
