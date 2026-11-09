import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Top, useToggle } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

const benefits = ['☼\nGiảm mụn viêm', '◉\nMờ thâm sau mụn', '✣\nThu nhỏ lỗ chân lông']

/** Màn 39 · Thông tin dịch vụ */
export default function S39ServiceInfo() {
  const [fav, toggleFav] = useToggle(false)

  return (
    <ScopedScreen id="s39" css={css} tab={0}>
      <main className="screen">
        <Top
          back="s38"
          right={
            <span>
              <span onClick={toggleFav} data-toast={fav ? 'Đã bỏ khỏi yêu thích' : 'Đã thêm vào yêu thích'} style={{ cursor: 'pointer' }}>
                {fav ? '♥' : '♡'}
              </span>
              　
              <span data-toast="Đã sao chép liên kết dịch vụ" style={{ cursor: 'pointer' }}>
                ↗
              </span>
            </span>
          }
        />

        <h1>Thông tin dịch vụ</h1>
        <p>Tìm hiểu chi tiết về dịch vụ làm đẹp được thực hiện bởi cơ sở uy tín và bác sĩ có chuyên môn.</p>

        <div className="cover" style={{ height: 170, marginTop: 10 }}>
          <img src="/img/scenes/facial-treatment.jpg" alt="Điều trị laser trị mụn" />
        </div>
        <div className="row between" style={{ marginTop: 10 }}>
          <h2>Điều trị laser trị mụn</h2>
          <span className="pill">Dịch vụ phổ biến</span>
        </div>
        <p>Giảm mụn, cải thiện thâm và thu nhỏ lỗ chân lông, giúp da sáng và đều màu hơn.</p>

        <div className="grid3" style={{ marginTop: 10 }}>
          {benefits.map((x) => (
            <div key={x} className="small" style={{ textAlign: 'center', whiteSpace: 'pre-line', padding: 8 }}>
              {x}
            </div>
          ))}
        </div>

        <div className="notice warn">
          <p>Giá tham khảo</p>
          <h2>2.500.000đ – 4.000.000đ</h2>
          <p>Tùy tình trạng và cơ sở thực hiện</p>
        </div>

        <h3>Cơ sở cung cấp</h3>
        <div className="card row" data-go="s29">
          <div className="thumb" style={{ width: 65, height: 55 }}>
            <img src="/img/scenes/clinic-room.jpg" alt="Phòng khám" />
          </div>
          <div style={{ flex: 1 }}>
            <b>SIS Dermatology Clinic　✓</b>
            <p>⭐ 4.8 (320 đánh giá)</p>
            <p>⌖ 123 Nguyễn Văn Linh, Đà Nẵng</p>
          </div>
          <b>›</b>
        </div>

        <h3>Bác sĩ phụ trách</h3>
        <div className="card row" data-go="s24">
          <div className="avatar">
            <img src="/img/people/doctor-minh-anh.jpg" alt="BS. Nguyễn Thị Minh Anh" />
          </div>
          <div>
            <b>BS. Nguyễn Thị Minh Anh　✓</b>
            <p>Bác sĩ Chuyên khoa Da liễu</p>
            <p>Bệnh viện Da liễu Trung ương</p>
          </div>
        </div>

        <nav className="bottom">
          <button className="btn" data-go="s29">
            ⌖ Xem địa chỉ
          </button>
          <button className="btn" data-toast="Đang gọi phòng khám SIS Dermatology (minh họa)">
            Liên hệ phòng khám
          </button>
          <button className="btn primary" data-go="s25">
            Đặt lịch tư vấn
          </button>
        </nav>
      </main>
    </ScopedScreen>
  )
}
