import { BrandLogo } from '@/components/brand/BrandLogo'
import { useEffect, useRef, useState } from 'react'
import { useNav } from '@/navigation/NavProvider'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S27Consultation.css?inline'

/** Màn 27 · Buổi tư vấn của bạn */
export default function S27Consultation() {
  const nav = useNav()
  const [muted, setMuted] = useState(false)
  const [camera, setCamera] = useState(true)
  const [speaker, setSpeaker] = useState(true)
  const [ended, setEnded] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const endCall = () => {
    setEnded(true)
    nav.toast('Buổi tư vấn đã kết thúc')
    timer.current = window.setTimeout(() => nav.go('s28'), 1100)
  }

  return (
    <ScopedScreen id="s27" css={css} tab={0}>
      <main className="phone sc-screen sc-video">
        <div className="status-bar">
          <span>9:41</span>
          <span>●●● ◖ ▰</span>
        </div>

        <div className="sc-video-top">
          <header className="booking-header">
            <button className="back-button" data-back="s26">
              ‹
            </button>
            <BrandLogo className="logo" />
          </header>

          <div className="sc-top-actions">
            <button data-toast="Đã thêm vào yêu thích">♡</button>
            <button data-toast="Tùy chọn buổi tư vấn (minh họa)">•••</button>
          </div>
        </div>

        <section className="sc-video-heading">
          <h1>Buổi tư vấn của bạn</h1>
          <p>Bác sĩ đang tư vấn trực tuyến với bạn.</p>
        </section>

        <div className="sc-connection">
          <span>🔒</span>
          <span>Kết nối bảo mật</span>
          <span>•</span>
          <span>{ended ? 'Cuộc gọi đã kết thúc' : 'Đang diễn ra 12:36'}</span>
          <span className="sc-signal">▂▅▇</span>
        </div>

        <section className="sc-video-container">
          <img
            className="sc-doctor-video"
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700"
            alt="Bác sĩ Nguyễn Thị Minh Anh"
          />
          <div className="sc-doctor-label">
            <span>●</span> BS. Nguyễn Thị Minh Anh
          </div>
          <div className="sc-self-video">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Người khám" />
            <span>▣ Bạn</span>
          </div>
        </section>

        <section className="sc-call-controls">
          <button onClick={() => setMuted(!muted)}>
            <span>{muted ? '🔇' : '♩'}</span>
            <small>{muted ? 'Bật mic' : 'Tắt mic'}</small>
          </button>
          <button onClick={() => setCamera(!camera)}>
            <span>{camera ? '▣' : '▧'}</span>
            <small>{camera ? 'Tắt camera' : 'Bật camera'}</small>
          </button>
          <button onClick={() => setSpeaker(!speaker)}>
            <span>{speaker ? '◖' : '◗'}</span>
            <small>{speaker ? 'Loa' : 'Tắt loa'}</small>
          </button>
          <button className="sc-end-call" onClick={endCall}>
            <span>☎</span>
            <small>{ended ? 'Đã kết thúc' : 'Kết thúc'}</small>
          </button>
        </section>

        <div className="sc-security-note">
          <span>♙</span>
          <p>Cuộc tư vấn được bảo mật. Việc ghi âm hoặc chụp màn hình chỉ được thực hiện khi có sự đồng ý của cả hai bên.</p>
        </div>

        <section className="sc-video-links">
          <button data-go="s50">
            <span>▱</span>
            <strong>Xem hồ sơ đã chia sẻ</strong>
            <small>Hình ảnh, thông tin da liễu</small>
          </button>
          <button data-go="s28">
            <span>▤</span>
            <strong>Kết thúc buổi tư vấn</strong>
            <small>Ghi chú hoàn tất trao đổi</small>
          </button>
        </section>

        <div className="sc-video-benefit">
          <span>♔</span>
          <div>
            <strong>Đây là lượt khám đầu tiên của bạn</strong>
            <p>Nên được miễn phí.</p>
          </div>
        </div>
      </main>
    </ScopedScreen>
  )
}
