import { BrandLogo } from '@/components/brand/BrandLogo'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S26ConfirmBooking.css?inline'

const doctor = {
  name: 'BS. Nguyễn Thị Minh Anh',
  specialty: 'Bác sĩ Chuyên khoa Da liễu',
  hospital: 'Bệnh viện Da liễu Trung ương',
  rating: '4.9',
  reviews: '320 đánh giá',
  experience: '8 năm kinh nghiệm',
  image: '/img/people/doctor-minh-anh.jpg',
}

const skinImages = ['/img/skin/face-front.jpg', '/img/skin/face-left.jpg', '/img/skin/face-right.jpg']

/** Màn 26 · Xác nhận thông tin đặt lịch */
export default function S26ConfirmBooking() {
  return (
    <ScopedScreen id="s26" css={css} tab={0}>
      <main className="phone confirmation-screen">
        <header className="booking-header">
          <button className="back-button" data-back="s25">
            ‹
          </button>
          <BrandLogo className="logo" />
        </header>

        <section className="confirmation-heading">
          <h1>Xác nhận thông tin đặt lịch</h1>
          <p>Vui lòng kiểm tra thông tin trước khi xác nhận.</p>
        </section>

        <section className="confirmation-card doctor-confirm-card">
          <div className="confirmation-doctor">
            <img src={doctor.image} alt={doctor.name} className="confirmation-doctor-image" />
            <div className="confirmation-doctor-info">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialty}</p>
              <p>{doctor.hospital}</p>
              <div className="confirmation-rating">
                <span className="star">★</span>
                <strong>{doctor.rating}</strong>
                <span>({doctor.reviews})</span>
              </div>
              <div className="confirmation-experience">
                <span>▣</span>
                {doctor.experience}
              </div>
            </div>
          </div>

          <div className="confirmation-divider" />

          <div className="confirmation-info-row">
            <span className="confirmation-icon">▦</span>
            <strong>Thời gian khám</strong>
            <span className="confirmation-value">10:00 - Thứ 3, 22/10/2024</span>
          </div>

          <div className="confirmation-info-row">
            <span className="confirmation-icon">▣</span>
            <strong>Hình thức khám</strong>
            <span className="confirmation-value">Tư vấn qua điện thoại</span>
          </div>
        </section>

        <section className="confirmation-card detail-confirm-card">
          <div className="confirmation-detail-row">
            <span className="confirmation-icon detail-icon">♙</span>
            <div className="confirmation-detail-content">
              <h3>Thông tin người khám</h3>
              <strong>Nguyễn Thị Thu Hà</strong>
              <p>Nữ · 26 tuổi · 0987 654 321</p>
            </div>
          </div>

          <div className="confirmation-divider" />

          <div className="confirmation-detail-row">
            <span className="confirmation-icon detail-icon">▤</span>
            <div className="confirmation-detail-content">
              <h3>Lý do khám</h3>
              <p>Mụn, thâm mụn và tư vấn chăm sóc da</p>
            </div>
          </div>

          <div className="confirmation-divider" />

          <div className="confirmation-detail-row record-row" data-go="s50" style={{ cursor: 'pointer' }}>
            <span className="confirmation-icon detail-icon">▱</span>
            <div className="confirmation-detail-content">
              <h3>Hồ sơ da liễu được chia sẻ</h3>
              <p>Đã chia sẻ 3 ảnh da đủ điều kiện tư vấn</p>
              <div className="skin-image-list">
                {skinImages.map((image, index) => (
                  <img key={index} src={image} alt={`Hình ảnh hồ sơ da ${index + 1}`} />
                ))}
              </div>
            </div>
            <span className="record-arrow">›</span>
          </div>
        </section>

        <section className="confirmation-benefit">
          <span className="confirmation-gift">♔</span>
          <div>
            <strong>Quyền lợi hiện tại: Khám lần đầu miễn phí</strong>
            <p>Dành cho người dùng mới đủ điều kiện.</p>
          </div>
        </section>

        <section className="confirmation-price">
          <strong>Chi phí khám</strong>
          <div className="confirmation-price-values">
            <del>300.000đ</del>
            <strong>0đ</strong>
            <span className="confirmation-info">ⓘ</span>
          </div>
        </section>

        <footer className="confirmation-footer">
          <button className="confirmation-primary" data-toast="Thông tin đặt lịch đã được xác nhận!" data-go="s27">
            Xác nhận đặt lịch
            <span>→</span>
          </button>
          <button className="confirmation-secondary" data-go="s25">
            Thay đổi lịch
          </button>
        </footer>
      </main>
    </ScopedScreen>
  )
}
