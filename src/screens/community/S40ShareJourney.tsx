import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Pills, Top } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

/** Màn 40 · Chia sẻ hành trình của bạn */
export default function S40ShareJourney() {
  const [caption, setCaption] = useState('')
  const [showFace, setShowFace] = useState(true)
  const [agree, setAgree] = useState(true)

  return (
    <ScopedScreen id="s40" css={css} tab={1}>
      <main className="screen">
        <Top back="s36" />

        <h1>Chia sẻ hành trình của bạn</h1>
        <p>Truyền cảm hứng cho cộng đồng qua câu chuyện chăm sóc da của chính mình.</p>

        <div className="notice warn" style={{ marginTop: 12 }}>
          <b>👑　Tính năng dành cho thành viên Premium</b>
          <p>Nâng cấp Premium để đăng video hành trình, nhận điểm thưởng và tham gia chương trình gắn kết cộng đồng.</p>
          <u className="small" data-go="s30" style={{ cursor: 'pointer' }}>
            Xem gói Premium →
          </u>
        </div>

        <h3>Tải video lên</h3>
        <div className="row">
          <div
            className="card"
            style={{ height: 102, flex: 1, textAlign: 'center', paddingTop: 18, cursor: 'pointer' }}
            data-toast="Đã chọn video minh họa (demo.mp4)"
          >
            ♧<br />
            <b>Nhấn để tải video</b>
            <p>
              (Thời lượng tối đa 5 phút, định dạng MP4, MOV)
              <br />
              Dung lượng tối đa 500MB
            </p>
          </div>
          <div className="thumb" style={{ width: 100, height: 102 }}>
            <img src="/img/skin/clear-face.jpg" alt="Ảnh hành trình" />
          </div>
        </div>

        <h3 style={{ marginTop: 10 }}>Viết chú thích</h3>
        <div className="input" style={{ position: 'relative', minHeight: 95 }}>
          <textarea
            value={caption}
            maxLength={500}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Chia sẻ hành trình, cảm nhận, hoặc kinh nghiệm của bạn..."
            style={{
              width: '100%',
              height: 55,
              border: 'none',
              outline: 'none',
              resize: 'none',
              background: 'transparent',
              fontSize: 12,
              fontFamily: 'inherit',
              color: '#173B32',
              userSelect: 'text',
            }}
          />
          <p style={{ textAlign: 'right', marginTop: 8 }}>{caption.length}/500</p>
        </div>

        <h3 style={{ marginTop: 12 }}>Chọn chủ đề</h3>
        <Pills items={['#Routine hàng ngày', '#Trị mụn', '#Phục hồi da', '#Da nhạy cảm', '#Review sản phẩm', '#Khác']} />

        <div className="listrow">
          <b>▣　Chia sẻ hình ảnh khuôn mặt</b>
          <span style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={() => setShowFace(!showFace)}>
            {showFace ? '🟢' : '⚪'}
          </span>
        </div>
        <p>Bạn có thể mặt hoặc làm mờ để bảo vệ quyền riêng tư.</p>

        <div className="listrow" style={{ cursor: 'pointer' }} onClick={() => setAgree(!agree)}>
          <b>{agree ? '☑' : '☐'}　Tôi xác nhận video không vi phạm quy định cộng đồng</b>
        </div>

        <div className="notice warn">⭐　Bạn sẽ nhận 10 điểm cho mỗi video hợp lệ sau khi được duyệt.</div>

        <button className="btn primary full" data-go="s36" data-toast="Đã gửi bài — chờ xét duyệt. Bạn sẽ nhận 10 điểm khi bài được duyệt">
          Gửi bài để xét duyệt
        </button>
      </main>
    </ScopedScreen>
  )
}
