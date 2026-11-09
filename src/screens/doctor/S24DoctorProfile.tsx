import { BrandLogo } from '@/components/brand/BrandLogo'
import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'

const doctor = {
  name: 'BS. Nguyễn Thị Minh Anh',
  specialty: 'Bác sĩ Chuyên khoa Da liễu',
  hospital: 'Bệnh viện Da liễu Trung ương',
  rating: '4.9',
  reviews: '320 đánh giá',
  experience: '8 năm kinh nghiệm',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
}

const certificates = [
  'Bác sĩ Chuyên khoa I Da liễu – Đại học Y Hà Nội',
  'Chứng chỉ đào tạo về laser và thẩm mỹ nội khoa',
  'Chứng chỉ điều trị mụn và bệnh lý da liễu',
]

const specialties = [
  'Mụn viêm và mụn trứng cá',
  'Viêm da, kích ứng',
  'Nám – Tàn nhang',
  'Lão hóa da',
  'Da nhạy cảm',
  'Chăm sóc da khoa học',
]

const schedules = [
  { day: 'T2', date: '21/10' },
  { day: 'T3', date: '22/10' },
  { day: 'T4', date: '23/10' },
  { day: 'T5', date: '24/10' },
  { day: 'T6', date: '25/10' },
  { day: 'T7', date: '26/10' },
]

/** Màn 24 · Hồ sơ bác sĩ */
export default function S24DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState('T3')
  const [showMore, setShowMore] = useState(false)
  const [method, setMethod] = useState(-1)

  return (
    <ScopedScreen id="s24" css="" tab={0}>
      <main className="phone">
        <div className="status-bar">
          <span>9:41</span>
          <span className="status-icons">●●● ◖ ▰</span>
        </div>

        <header className="top-header">
          <button className="back-button" data-back="s23">
            ‹
          </button>
          <BrandLogo className="logo" />
          <div className="header-actions">
            <button aria-label="Yêu thích" data-toast="Đã thêm bác sĩ vào yêu thích">
              ♡
            </button>
            <button aria-label="Chia sẻ" data-toast="Đã sao chép liên kết hồ sơ bác sĩ">
              ♧
            </button>
          </div>
        </header>

        <section className="profile-section">
          <img className="profile-image" src={doctor.image} alt={doctor.name} />
          <div className="profile-information">
            <h1>{doctor.name}</h1>
            <p>{doctor.specialty}</p>
            <p>{doctor.hospital}</p>
            <div className="profile-rating">
              <span className="star">★</span>
              <strong>{doctor.rating}</strong>
              <span>({doctor.reviews})</span>
            </div>
            <div className="experience">
              <span>▣</span> {doctor.experience}
            </div>
            <span className="verified-label">
              <span>✓</span> Đã xác minh
            </span>
          </div>
        </section>

        <section className="consultation-methods">
          {[
            ['▣', 'Khám trực tuyến'],
            ['▯', 'Khám trực tiếp'],
            ['◉', 'Tư vấn qua chat'],
          ].map(([ic, t], i) => (
            <button key={t} className={`method-button${method === i ? 'active' : ''}`} onClick={() => setMethod(i)}>
              <span>{ic}</span>
              {t}
            </button>
          ))}
        </section>

        <section className="content-section introduction">
          <h2>Giới thiệu</h2>
          <p>
            Bác sĩ Nguyễn Thị Minh Anh có hơn 8 năm kinh nghiệm trong khám và điều trị các vấn đề về da như mụn, viêm da, nám, tàn nhang,
            rosacea, da nhạy cảm...
          </p>
          {showMore && (
            <p className="more-description">
              Bác sĩ có kinh nghiệm tư vấn và xây dựng phác đồ chăm sóc da phù hợp với từng tình trạng da, đồng thời theo dõi quá trình cải
              thiện của bệnh nhân.
            </p>
          )}
          <button className="see-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Thu gọn ⌃' : 'Xem thêm ⌄'}
          </button>
        </section>

        <section className="content-section">
          <h2>Học vấn & Chứng chỉ</h2>
          <div className="certificate-list">
            {certificates.map((item, index) => (
              <div className="certificate-item" key={index}>
                <span className="certificate-icon">{index === 0 ? '♙' : '♧'}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section workplace">
          <h2>Nơi công tác</h2>
          <div className="workplace-info">
            <span className="workplace-icon">▦</span>
            <div>
              <strong>Bệnh viện Da liễu Trung ương</strong>
              <p>Số 15A Phương Mai, Đống Đa, Hà Nội</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Lĩnh vực tư vấn</h2>
          <div className="specialty-tags">
            {specialties.map((item, index) => (
              <span className="specialty-tag" key={index}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section schedule-section">
          <div className="section-heading">
            <h2>Lịch khám khả dụng</h2>
            <button
              className="see-all"
              data-go="s25"
              style={{ border: 'none', background: 'transparent', color: 'var(--primary)', fontSize: 10, textDecoration: 'underline' }}
            >
              Xem tất cả ›
            </button>
          </div>
          <div className="schedule-list">
            {schedules.map((item) => (
              <button
                key={item.day}
                className={`schedule-item ${selectedDate === item.day ? 'selected' : ''}`}
                onClick={() => setSelectedDate(item.day)}
              >
                <span>{item.day}</span>
                <strong>{item.date}</strong>
              </button>
            ))}
          </div>
        </section>

        <section className="free-banner" data-go="s30" style={{ cursor: 'pointer' }}>
          <div className="free-icon">♔</div>
          <div className="free-content">
            <strong>Lần khám đầu tiên: Miễn phí cho người dùng mới đủ điều kiện.</strong>
            <p>
              Từ lần tái khám thứ 2, cần gói Premium hoặc tư vấn lẻ Pay-per Consultation (250.000đ/lượt) để tiếp tục khám và theo dõi liệu
              trình.
            </p>
          </div>
        </section>

        <footer className="booking-footer">
          <div className="price-information">
            <span>Phí khám</span>
            <div>
              <strong>300.000đ</strong>
              <span className="info-icon">ⓘ</span>
            </div>
          </div>
          <button className="main-booking-button" data-go="s25">
            Đặt lịch với bác sĩ
            <span>→</span>
          </button>
        </footer>
      </main>
    </ScopedScreen>
  )
}
