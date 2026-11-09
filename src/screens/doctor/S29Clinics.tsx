import { BrandLogo } from '@/components/brand/BrandLogo'
import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S29Clinics.css?inline'

const clinics = [
  {
    name: 'SIS Dermatology Clinic',
    distance: '0.8 km',
    address: '123 Nguyễn Văn Linh, Đà Nẵng',
    doctors: '3 bác sĩ da liễu',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400',
    tags: ['Khám trực tiếp', 'Khám trực tuyến', 'Điều trị da', 'Laser & thẩm mỹ da'],
  },
  {
    name: 'DermaCare Clinic',
    distance: '1.5 km',
    address: '456 Lê Duẩn, Đà Nẵng',
    doctors: '4 bác sĩ da liễu',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400',
    tags: ['Khám trực tiếp', 'Điều trị mụn', 'Chăm sóc da chuyên sâu', 'Trẻ hóa da'],
  },
]

const areas = ['Gần tôi', 'Hà Nội', 'Đà Nẵng', 'TP. Hồ Chí Minh']

/** Màn 29 · Phòng khám dành cho bạn */
export default function S29Clinics() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('Gần tôi')

  const filtered = clinics.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.address.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <ScopedScreen id="s29" css={css} tab={0}>
      <main className="phone sc-screen sc-clinics">
        <div className="status-bar">
          <span>9:41</span>
          <span>●●● ◖ ▰</span>
        </div>

        <header className="booking-header">
          <button className="back-button" data-back="s15">
            ‹
          </button>
          <BrandLogo className="logo" />
        </header>

        <section className="sc-clinic-heading">
          <h1>Phòng khám dành cho bạn</h1>
          <p>Khám da liễu tại các cơ sở đối tác uy tín, gần bạn</p>
        </section>

        <div className="sc-clinic-search">
          <span>⌕</span>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm tên phòng khám, địa điểm..." />
          <button aria-label="Bộ lọc" data-toast="Bộ lọc nâng cao (minh họa)">
            ☷
          </button>
        </div>

        <div className="sc-clinic-filters">
          {areas.map((tab) => (
            <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              {tab === 'Gần tôi' ? '♧ ' : ''}
              {tab}
            </button>
          ))}
        </div>

        <section className="sc-map">
          <div className="sc-map-road road-one" />
          <div className="sc-map-road road-two" />
          <div className="sc-map-road road-three" />
          <div className="sc-map-water" />
          <span className="sc-map-pin pin-one">♥</span>
          <span className="sc-map-pin pin-two">●</span>
          <span className="sc-map-pin pin-three">♥</span>
          <span className="sc-map-pin pin-four">●</span>
          <button className="sc-map-button" data-toast="Bản đồ chi tiết (minh họa)">
            Xem bản đồ ↗
          </button>
        </section>

        <div className="sc-clinic-list-heading">
          <h2>Các phòng khám gợi ý</h2>
          <button data-toast="Đang hiển thị toàn bộ phòng khám gợi ý">Xem tất cả ›</button>
        </div>

        <section className="sc-clinic-list">
          {filtered.map((clinic) => (
            <article className="sc-clinic-card" key={clinic.name}>
              <div className="sc-clinic-main">
                <img src={clinic.image} alt={clinic.name} />
                <div className="sc-clinic-info">
                  <div className="sc-clinic-title">
                    <strong>{clinic.name}</strong>
                    <small>◉ {clinic.distance}</small>
                  </div>
                  <p className="sc-clinic-verified">
                    <span>●</span> Đối tác xác minh
                  </p>
                  <p className="sc-clinic-address">♧ {clinic.address}</p>
                  <div className="sc-clinic-doctors">
                    <span>👩🏻‍⚕️</span>
                    <span>👨🏻‍⚕️</span>
                    <span>👩🏻‍⚕️</span>
                    <small>{clinic.doctors}</small>
                  </div>
                </div>
              </div>

              <div className="sc-clinic-tags">
                {clinic.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="sc-clinic-actions">
                <button data-go="s23">Xem chi tiết</button>
                <button className="primary" data-go="s25">
                  Đặt lịch
                </button>
                <button data-toast="Đang mở chỉ đường (minh họa)">➤ Chỉ đường</button>
              </div>
            </article>
          ))}

          {filtered.length === 0 && <p className="sc-clinic-empty">Không tìm thấy phòng khám phù hợp.</p>}
        </section>
      </main>
    </ScopedScreen>
  )
}
