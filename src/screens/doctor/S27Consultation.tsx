import { BrandLogo } from '@/components/brand/BrandLogo'
import { useEffect, useRef, useState } from 'react'
import { useNav } from '@/navigation/NavProvider'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import css from './S27Consultation.css?inline'

/** Màn 27 · Buổi tư vấn qua điện thoại */
export default function S27Consultation() {
  const nav = useNav()
  const [muted, setMuted] = useState(false)
  const [speaker, setSpeaker] = useState(true)
  const [ended, setEnded] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const endCall = () => {
    if (ended) return
    setEnded(true)
    nav.toast('Buổi tư vấn đã kết thúc')
    timer.current = window.setTimeout(() => nav.go('s28'), 1100)
  }

  return (
    <ScopedScreen id="s27" css={css} tab={0}>
      <main className="phone sc-screen sc-call">
        <header className="booking-header">
          <button className="back-button" data-back="s26" aria-label="Quay lại">
            ‹
          </button>
          <BrandLogo className="logo" />
          <button className="sc-top-more" data-toast="Tùy chọn buổi tư vấn">
            •••
          </button>
        </header>

        <section className="sc-call-heading">
          <h1>Buổi tư vấn của bạn</h1>
          <p>Bác sĩ tư vấn qua điện thoại và xem ảnh da bạn đã chia sẻ.</p>
        </section>

        <div className="sc-connection">
          <span>🔒</span>
          <span>Kết nối bảo mật</span>
          <span>•</span>
          <span>{ended ? 'Cuộc gọi đã kết thúc' : 'Đang diễn ra 12:36'}</span>
          <span className="sc-signal">●</span>
        </div>

        <section className="sc-call-doctor">
          <img src="/img/people/doctor-minh-anh.jpg" alt="Bác sĩ Nguyễn Thị Minh Anh" />
          <div>
            <span className="sc-call-live"><span /> Đang tư vấn</span>
            <h2>BS. Nguyễn Thị Minh Anh</h2>
            <p>Bác sĩ Chuyên khoa Da liễu</p>
            <small>Cuộc gọi thoại · 12 phút 36 giây</small>
          </div>
        </section>

        <section className="sc-shared-photos">
          <div className="sc-shared-photos-heading">
            <div>
              <strong>Ảnh da đã chia sẻ với bác sĩ</strong>
              <p>Ảnh chụp rõ, đủ điều kiện để tư vấn</p>
            </div>
            <span>3 ảnh</span>
          </div>
          <div className="sc-shared-photo-list">
            <img src="/img/skin/face-front.jpg" alt="Ảnh da chính diện đã chia sẻ" />
            <img src="/img/skin/face-left.jpg" alt="Ảnh da góc trái đã chia sẻ" />
            <img src="/img/skin/face-right.jpg" alt="Ảnh da góc phải đã chia sẻ" />
          </div>
          <button className="sc-shared-photos-link" data-go="s50">
            Xem hồ sơ ảnh đã chia sẻ <span>→</span>
          </button>
        </section>

        <section className="sc-call-controls">
          <button onClick={() => setMuted(!muted)} aria-label={muted ? 'Bật mic' : 'Tắt mic'}>
            <span>{muted ? '🔇' : '♩'}</span>
            <small>{muted ? 'Bật mic' : 'Tắt mic'}</small>
          </button>
          <button onClick={() => setSpeaker(!speaker)} aria-label={speaker ? 'Tắt loa' : 'Bật loa'}>
            <span>{speaker ? '◖' : '◗'}</span>
            <small>{speaker ? 'Loa ngoài' : 'Tai nghe'}</small>
          </button>
          <button className="sc-end-call" onClick={endCall} disabled={ended}>
            <span>☎</span>
            <small>{ended ? 'Đã kết thúc' : 'Kết thúc'}</small>
          </button>
        </section>

        <div className="sc-security-note">
          <span>♙</span>
          <p>Ảnh da đã chia sẻ chỉ được dùng để phục vụ buổi tư vấn. Sau cuộc gọi, bạn có thể xem tóm tắt và hướng dẫn từ bác sĩ.</p>
        </div>

        <section className="sc-call-next">
          <strong>Hoàn tất buổi tư vấn</strong>
          <p>Kết thúc cuộc gọi để xem tóm tắt và hướng dẫn chăm sóc từ bác sĩ.</p>
          <button onClick={endCall}>{ended ? 'Đang chuyển đến tóm tắt…' : 'Kết thúc và xem tóm tắt'}</button>
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
