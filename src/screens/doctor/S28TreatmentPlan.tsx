import { BrandLogo } from '@/components/brand/BrandLogo'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S28TreatmentPlan.css?inline'

/** Màn 28 · Liệu trình chăm sóc và điều trị */
export default function S28TreatmentPlan() {
  return (
    <ScopedScreen id="s28" css={css} tab={0}>
      <main className="phone sc-screen sc-treatment">
        <header className="booking-header">
          <button className="back-button" data-back="s27">
            ‹
          </button>
          <BrandLogo className="logo" />
        </header>

        <section className="sc-treatment-heading">
          <h1>Liệu trình chăm sóc và điều trị</h1>
          <p>Dựa trên buổi tư vấn với bác sĩ, đây là phác đồ phù hợp với tình trạng da của bạn.</p>
        </section>

        <section className="sc-treatment-doctor" data-go="s24" style={{ cursor: 'pointer' }}>
          <img src="/img/people/doctor-minh-anh.jpg" alt="Bác sĩ Nguyễn Thị Minh Anh" />
          <div>
            <strong>BS. Nguyễn Thị Minh Anh</strong>
            <p>Bác sĩ Chuyên khoa Da liễu</p>
            <p>Bệnh viện Da liễu Trung ương</p>
            <small>▣ Ngày tư vấn: 22/10/2024 · 10:00</small>
          </div>
        </section>

        <section className="sc-treatment-section">
          <div className="sc-section-title">
            <span>▤</span>
            <div>
              <strong>Đánh giá tình trạng da</strong>
              <p>
                Da dầu, mụn viêm mức độ nhẹ đến trung bình, kèm thâm sau mụn. Không có dấu hiệu nhiễm trùng nặng. Cần kiên trì điều trị và
                chăm sóc đúng cách.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-treatment-section">
          <div className="sc-section-title">
            <span>✧</span>
            <div>
              <strong>Hướng dẫn điều trị và chăm sóc</strong>
              <ul>
                <li>Kiểm soát dầu thừa, giảm mụn viêm.</li>
                <li>Phục hồi hàng rào bảo vệ da.</li>
                <li>Giảm thâm và ngăn ngừa mụn tái phát.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sc-treatment-section">
          <div className="sc-section-title">
            <span>♙</span>
            <strong>Sản phẩm và thuốc được chỉ định</strong>
          </div>

          <div className="sc-product-list">
            <div className="sc-product" data-go="s20">
              <div className="sc-product-image">
                <img src="/img/products/effaclar-box.jpg" alt="Effaclar Gel" />
              </div>
              <strong>Effaclar Gel</strong>
              <small>Sữa rửa mặt</small>
            </div>
            <div className="sc-product" data-go="s20">
              <div className="sc-product-image">
                <img src="/img/products/cream-jar.jpg" alt="Niacinamide" />
              </div>
              <strong>Niacinamide 10% + Zinc 1%</strong>
              <small>Serum</small>
            </div>
            <div className="sc-product" data-go="s34">
              <div className="sc-product-image">
                <img src="/img/products/effaclar-box.jpg" alt="Adapalene" />
              </div>
              <strong>Adapalene 0.1%</strong>
              <small>Thuốc bôi</small>
            </div>
          </div>
        </section>

        <section className="sc-treatment-section">
          <div className="sc-section-title">
            <span>☼</span>
            <strong>Lịch sử dụng hằng ngày</strong>
          </div>

          <div className="sc-routine-list">
            <div className="sc-routine morning">
              <strong>☀ Buổi sáng</strong>
              <ul>
                <li>Rửa mặt</li>
                <li>Serum Niacinamide</li>
                <li>Kem chống nắng</li>
              </ul>
            </div>
            <div className="sc-routine evening">
              <strong>☾ Buổi tối</strong>
              <ul>
                <li>Rửa mặt</li>
                <li>Adapalene 0.1%</li>
                <li>Kem dưỡng ẩm</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sc-treatment-section">
          <div className="sc-section-title">
            <span>ⓘ</span>
            <div>
              <strong>Lưu ý đặc biệt</strong>
              <p>Tránh nặn mụn, hạn chế đồ ăn nhiều dầu mỡ, ngủ đủ giấc và duy trì chăm sóc da đều đặn.</p>
            </div>
          </div>
        </section>

        <section className="sc-treatment-section" data-go="s35" style={{ cursor: 'pointer' }}>
          <div className="sc-section-title">
            <span>▣</span>
            <div>
              <strong>Lịch tái khám đề xuất</strong>
              <p>Sau 4 tuần · 19/11/2024</p>
            </div>
          </div>
        </section>

        <div className="sc-premium-note" data-go="s30">
          <span>♕</span>
          <p>Từ lần tái khám thứ 2, người dùng gói Premium (từ 299.000đ/tháng) để tái khám và được theo dõi liệu trình.</p>
        </div>

        <button className="sc-treatment-history" data-go="s34">
          Xem lịch sử sử dụng <span>→</span>
        </button>

        <div className="sc-treatment-actions">
          <button data-tab="s19">♙ Xem sản phẩm</button>
          <button data-go="s30">
            ▣ Đặt lịch tái khám
            <br />
            Nâng cấp Premium
          </button>
        </div>
      </main>
    </ScopedScreen>
  )
}
