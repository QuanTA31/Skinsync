import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Pills, Top } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

const activities = [
  {
    icon: '💆🏻',
    tag: 'THỬ THÁCH',
    title: 'Chụp ảnh tiến trình 14 ngày',
    desc: 'Cập nhật hình ảnh da sau 14 ngày và chia sẻ cảm nhận của bạn.',
    reward: '+10 điểm',
    go: 's06',
  },
  {
    icon: '🧾',
    tag: 'CÂU ĐỐ KIẾN THỨC',
    title: 'Hiểu đúng về mụn',
    desc: 'Trả lời 5 câu hỏi để nhận ngay mã ưu đãi chăm sóc da.',
    reward: '+5 điểm',
    go: '',
    toast: 'Bắt đầu câu đố: Hiểu đúng về mụn',
  },
  {
    icon: '👩🏻‍⚕️',
    tag: 'SỰ KIỆN ĐẶC BIỆT',
    title: 'Góc chia sẻ cùng bác sĩ',
    desc: 'Đặt câu hỏi và nhận giải đáp trực tiếp từ bác sĩ da liễu.',
    reward: 'Lượt tư vấn',
    go: 's23',
  },
  {
    icon: '🧴',
    tag: 'ƯU ĐÃI ĐỐI TÁC',
    title: 'Ưu đãi độc quyền tháng 10',
    desc: 'Giảm đến 20% cho các sản phẩm chăm sóc da chính hãng.',
    reward: 'Giảm đến 20%',
    go: 's19',
  },
]

/** Màn 43 · Hoạt động và quà tặng */
export default function S43ActivitiesRewards() {
  return (
    <ScopedScreen id="s43" css={css} tab={4}>
      <main className="screen">
        <span className="leaf">🌿</span>
        <Top back="s41" />

        <h1>Hoạt động và quà tặng</h1>
        <p>Tham gia các thử thách, mini game và sự kiện cộng đồng để nhận quà tặng và ưu đãi hấp dẫn.</p>

        <Pills items={['Tất cả', 'Thử thách', 'Câu đố', 'Ưu đãi', 'Sự kiện']} />

        <div className="campaign">
          <div>
            <span className="pill">🌼　SỰ KIỆN CỘNG ĐỒNG</span>
            <h2 style={{ marginTop: 8 }}>
              Thử thách 28 ngày
              <br />
              Làn da khỏe hơn
            </h2>
            <p>Cùng nhau xây dựng thói quen chăm sóc da tốt hơn mỗi ngày!</p>
            <p style={{ marginTop: 8 }}>◷ 01/11/2024 – 30/11/2024</p>
            <button className="btn primary" style={{ marginTop: 8 }} data-go="s40" data-toast="Bạn đã tham gia thử thách 28 ngày!">
              Tham gia ngay →
            </button>
          </div>
          <div style={{ fontSize: 54 }}>👩🏻‍🦰</div>
        </div>

        {activities.map((x) => (
          <div className="card row" key={x.title}>
            <div className="thumb" style={{ width: 72, height: 75, fontSize: 28 }}>
              {x.icon}
            </div>
            <div style={{ flex: 1 }}>
              <span className="pill">{x.tag}</span>
              <h3 style={{ marginTop: 4 }}>{x.title}</h3>
              <p>{x.desc}</p>
              <p>◷ 01/10/2024 – 31/10/2024</p>
            </div>
            <div style={{ textAlign: 'center', color: '#d99b28' }}>
              🎁
              <br />
              <b className="small">{x.reward}</b>
              <br />
              <button
                className="btn"
                style={{ padding: '6px 10px', marginTop: 5 }}
                {...(x.go ? { 'data-go': x.go } : {})}
                data-toast={x.toast ?? `Đã tham gia: ${x.title}`}
              >
                Tham gia
              </button>
            </div>
          </div>
        ))}

        <div className="notice warn row between" data-go="s41">
          <b>🏆　Quà của tôi</b>
          <span>›</span>
        </div>
      </main>
    </ScopedScreen>
  )
}
