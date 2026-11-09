import { BrandLogo } from '@/components/brand/BrandLogo'
import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S23FindDermatologist.css?inline'

interface Doctor {
  id: number
  name: string
  specialty: string
  hospital: string
  rating: string
  reviews: string
  experience: string
  image: string
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'BS. Nguyễn Thị Minh Anh',
    specialty: 'Bác sĩ Chuyên khoa Da liễu',
    hospital: 'Bệnh viện Da liễu Trung ương',
    rating: '4.9',
    reviews: '320',
    experience: '8 năm kinh nghiệm',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'BS. Trần Hoàng Long',
    specialty: 'Bác sĩ Da liễu',
    hospital: 'Phòng khám Da liễu An Phú',
    rating: '4.8',
    reviews: '215',
    experience: '10 năm kinh nghiệm',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'BS. Lê Thu Hà',
    specialty: 'Bác sĩ Da liễu',
    hospital: 'Bệnh viện Đại học Y Hà Nội',
    rating: '4.8',
    reviews: '186',
    experience: '7 năm kinh nghiệm',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [fav, setFav] = useState(false)
  return (
    <article className="doctor-card">
      <div className="doctor-info">
        <img className="doctor-image" src={doctor.image} alt={doctor.name} />

        <div className="doctor-details">
          <div className="verified-label">
            <span>✓</span> Đã xác minh
          </div>
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-specialty">{doctor.specialty}</p>
          <p className="doctor-hospital">{doctor.hospital}</p>
          <div className="doctor-rating">
            <span className="star">★</span>
            <span className="rating-number">{doctor.rating}</span>
            <span> ({doctor.reviews} đánh giá)</span>
            <span> · {doctor.experience}</span>
          </div>
          <div className="doctor-tags">
            <span className="doctor-tag">Khám trực tuyến</span>
            <span className="doctor-tag">Khám trực tiếp</span>
          </div>
        </div>

        <button className={`favorite${fav ? 'favorited' : ''}`} aria-label="Yêu thích bác sĩ" onClick={() => setFav(!fav)}>
          {fav ? '♥' : '♡'}
        </button>
      </div>

      <div className="card-actions">
        <button className="profile-btn" data-go="s24">
          Xem hồ sơ
        </button>
        <button className="booking-btn" data-go="s25">
          Đặt lịch khám
        </button>
      </div>
    </article>
  )
}

/** Màn 23 · Kết nối bác sĩ da liễu */
export default function S23FindDermatologist() {
  const [tab, setTab] = useState(0)
  const tabs = ['♧ Gần tôi', 'Khám trực tuyến', 'Khám trực tiếp']
  return (
    <ScopedScreen id="s23" css={css} tab={0}>
      <main className="phone">
        <div className="status-bar">
          <span>9:41</span>
          <span className="status-icons">●●● ◖ ▰</span>
        </div>

        <header className="header">
          <button className="back-button" data-back="s15">
            ‹
          </button>
          <BrandLogo className="logo" />
          <h1>Kết nối bác sĩ da liễu</h1>
          <p className="subtitle">Tìm bác sĩ da liễu uy tín, phù hợp với nhu cầu của bạn</p>
        </header>

        <section className="search-section">
          <div className="search-box">
            <span className="search-icon">⌕</span>
            <input type="text" placeholder="Tìm bác sĩ phù hợp" />
          </div>
          <button className="filter-button" data-toast="Bộ lọc bác sĩ (minh họa)">
            ☷
          </button>
        </section>

        <section className="tabs">
          {tabs.map((t, i) => (
            <button key={t} className={`tab${tab === i ? 'active' : ''}`} onClick={() => setTab(i)}>
              {t}
            </button>
          ))}
        </section>

        <section className="promo" data-go="s30">
          <div className="gift">♔</div>
          <div className="promo-content">
            <strong>Người dùng lần đầu đủ điều kiện được khám miễn phí</strong>
            <p>với các bác sĩ da liễu trên SKINSYNC.</p>
          </div>
          <div className="promo-arrow">›</div>
        </section>

        <section className="verified-heading">
          <div className="verified-left">
            <span className="shield">✓</span>
            <span>Chỉ hiển thị bác sĩ đã được xác minh</span>
          </div>
          <button className="see-all" data-toast="Xem tất cả bác sĩ (minh họa)">
            Xem tất cả ›
          </button>
        </section>

        <section className="doctor-list">
          {doctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </section>
      </main>
    </ScopedScreen>
  )
}
