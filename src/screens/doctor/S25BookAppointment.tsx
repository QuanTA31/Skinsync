import { BrandLogo } from '@/components/brand/BrandLogo'
import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S25BookAppointment.css?inline'

const doctor = {
  name: 'BS. Nguyễn Thị Minh Anh',
  specialty: 'Bác sĩ Chuyên khoa Da liễu',
  hospital: 'Bệnh viện Da liễu Trung ương',
  rating: '4.9',
  reviews: '320 đánh giá',
  experience: '8 năm kinh nghiệm',
  image: '/img/people/doctor-minh-anh.jpg',
}

const dates = [
  { day: 'T2', date: '21/10' },
  { day: 'T3', date: '22/10' },
  { day: 'T4', date: '23/10' },
  { day: 'T5', date: '24/10' },
  { day: 'T6', date: '25/10' },
  { day: 'T7', date: '26/10' },
]

const times = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00']

/** Màn 25 · Đặt lịch khám da liễu */
export default function S25BookAppointment() {
  const [consultation, setConsultation] = useState('online')
  const [selectedDate, setSelectedDate] = useState('T3')
  const [selectedTime, setSelectedTime] = useState('10:00')
  const [reason, setReason] = useState('Mụn, thâm mụn và tư vấn chăm sóc da')
  const [attached, setAttached] = useState(false)

  return (
    <ScopedScreen id="s25" css={css} tab={0}>
      <main className="phone">
        <header className="booking-header">
          <button className="back-button" data-back="s24">
            ‹
          </button>
          <BrandLogo className="logo" />
        </header>

        <section className="page-heading">
          <h1>Đặt lịch khám da liễu</h1>
          <p>Vui lòng chọn thông tin phù hợp để đặt lịch khám.</p>
        </section>

        <section className="booking-doctor-card">
          <img src={doctor.image} alt={doctor.name} className="booking-doctor-image" />
          <div className="booking-doctor-info">
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
            <p>{doctor.hospital}</p>
            <div className="booking-doctor-meta">
              <span className="star">★</span>
              <strong>{doctor.rating}</strong>
              <span>({doctor.reviews})</span>
              <span className="experience-meta">♙ {doctor.experience}</span>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <h3>Hình thức khám</h3>
          <div className="consultation-options">
            <button className={`consultation-card ${consultation === 'online' ? 'active' : ''}`} onClick={() => setConsultation('online')}>
              <span className="consultation-icon">▣</span>
              <span className="consultation-text">
                <strong>Khám trực tuyến</strong>
                <small>Tư vấn qua video call</small>
              </span>
              {consultation === 'online' && <span className="selected-check">✓</span>}
            </button>
            <button
              className={`consultation-card ${consultation === 'offline' ? 'active' : ''}`}
              onClick={() => setConsultation('offline')}
            >
              <span className="consultation-icon">▦</span>
              <span className="consultation-text">
                <strong>Khám trực tiếp</strong>
                <small>Tại phòng khám</small>
              </span>
              {consultation === 'offline' && <span className="selected-check">✓</span>}
            </button>
          </div>
        </section>

        <section className="booking-section date-section">
          <h3>Chọn ngày khám</h3>
          <div className="date-list">
            {dates.map((item) => (
              <button
                key={item.day}
                className={`date-item ${selectedDate === item.day ? 'active' : ''}`}
                onClick={() => setSelectedDate(item.day)}
              >
                <span>{item.day}</span>
                <strong>{item.date}</strong>
              </button>
            ))}
          </div>
        </section>

        <section className="booking-section time-section">
          <h3>Chọn khung giờ</h3>
          <div className="time-list">
            {times.map((time) => (
              <button key={time} className={`time-item ${selectedTime === time ? 'active' : ''}`} onClick={() => setSelectedTime(time)}>
                {time}
              </button>
            ))}
          </div>
        </section>

        <section className="booking-section reason-section">
          <h3>Lý do khám</h3>
          <div className="reason-select">
            <select value={reason} onChange={(e) => setReason(e.target.value)}>
              <option>Mụn, thâm mụn và tư vấn chăm sóc da</option>
              <option>Viêm da và kích ứng</option>
              <option>Nám và tàn nhang</option>
              <option>Da nhạy cảm</option>
              <option>Lão hóa da</option>
              <option>Khám và tư vấn vấn đề da khác</option>
            </select>
            <span className="select-arrow">⌄</span>
          </div>
        </section>

        <section className="booking-section image-section">
          <h3>
            Chia sẻ hồ sơ da <span>(tùy chọn)</span>
          </h3>
          <div className="upload-card">
            <div className="upload-icon">▧</div>
            <div className="upload-description">
              <strong>{attached ? 'Đã chọn ảnh hồ sơ da' : 'Chia sẻ hồ sơ da và hình ảnh hiện tại'}</strong>
              <p>Để bác sĩ hiểu rõ hơn tình trạng của bạn.</p>
            </div>
            <button className="upload-button" onClick={() => setAttached(!attached)}>
              {attached ? 'Đã thêm' : 'Thêm ảnh'}
            </button>
          </div>
        </section>

        <section className="benefit-card">
          <div className="benefit-main">
            <span className="benefit-gift">♔</span>
            <div>
              <strong>Quyền lợi hiện tại: Khám lần đầu miễn phí</strong>
              <p>Dành cho người dùng mới đủ điều kiện.</p>
            </div>
          </div>
          <div className="premium-note" data-go="s30" style={{ cursor: 'pointer' }}>
            <span>♕</span>
            <p>Từ lần 2: cần Premium để tái khám và được theo dõi liệu trình.</p>
            <span className="premium-arrow">›</span>
          </div>
        </section>

        <section className="price-row">
          <span>Phí khám</span>
          <div className="price-values">
            <del>300.000đ</del>
            <strong>0đ</strong>
            <span className="info-icon">ⓘ</span>
          </div>
        </section>

        <footer className="booking-footer">
          <button className="confirm-button" data-go="s26">
            Tiếp tục xác nhận
            <span>→</span>
          </button>
        </footer>
      </main>
    </ScopedScreen>
  )
}
