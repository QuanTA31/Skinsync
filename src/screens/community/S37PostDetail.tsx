import { useState } from 'react'
import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { useToggle } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

/** Màn 37 · Chi tiết bài viết */
export default function S37PostDetail() {
  const [following, toggleFollow] = useToggle(false)
  const [liked, toggleLike] = useToggle(false)
  const [saved, toggleSave] = useToggle(false)
  const [comment, setComment] = useState('')

  return (
    <ScopedScreen id="s37" css={css} tab={1}>
      <main className="screen" style={{ paddingTop: 18 }}>
        <span
          className="back"
          data-back="s36"
          style={{
            position: 'absolute',
            left: 14,
            top: 26,
            zIndex: 3,
            width: 32,
            height: 32,
            lineHeight: '29px',
            textAlign: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,.85)',
          }}
        >
          ‹
        </span>
        <div className="cover" style={{ height: 255, fontSize: 80 }}>
          👩🏻‍⚕️
        </div>

        <article className="card">
          <div className="row">
            <div className="avatar" data-go="s24">
              👩🏻‍⚕️
            </div>
            <div style={{ flex: 1 }} data-go="s24">
              <b>BS. Nguyễn Thị Minh Anh　✓</b>
              <p>Bác sĩ Chuyên khoa Da liễu</p>
            </div>
            <button className={'btn' + (following ? ' primary' : '')} onClick={toggleFollow}>
              {following ? 'Đang theo dõi' : 'Theo dõi'}
            </button>
          </div>
          <h2 style={{ marginTop: 12 }}>Làm thế nào để xây dựng thói quen chăm sóc da phù hợp?</h2>
          <p>12.4K lượt xem · 2 ngày trước</p>
          <p style={{ marginTop: 8 }}>
            Trong video này, bác sĩ sẽ chia sẻ cách xây dựng routine chăm sóc da phù hợp với từng loại da, những lưu ý quan trọng và sai lầm
            thường gặp...
          </p>
          <div className="tags">#Chăm sóc da cơ bản　 #Routine　 #Da mụn</div>
          <div className="row between">
            <span onClick={toggleLike} style={{ cursor: 'pointer' }}>
              {liked ? '♥' : '♡'} {liked ? '1.2K+' : '1.2K'}
            </span>
            <span data-toast="Đang xem bình luận">☏ 56</span>
            <span data-toast="Đã sao chép liên kết bài viết">↗ Chia sẻ</span>
            <span onClick={toggleSave} data-toast={saved ? 'Đã bỏ lưu bài viết' : 'Đã lưu bài viết'} style={{ cursor: 'pointer' }}>
              {saved ? '♥ Đã lưu' : '♧ Lưu'}
            </span>
          </div>
          <div className="grid2" style={{ marginTop: 12 }}>
            <button className="btn" data-go="s38">
              ♧　Tôi quan tâm
            </button>
            <button className="btn primary" data-go="s25">
              Nhận tư vấn
            </button>
          </div>
        </article>

        <div className="row between">
          <b>Bình luận (56)</b>
          <span className="small" data-toast="Hiển thị toàn bộ bình luận">
            Xem tất cả ›
          </span>
        </div>
        <div className="listrow">
          <div className="avatar">👩🏻</div>
          <div>
            <b>Linh Trần · 1 ngày trước</b>
            <p>Cảm ơn bác sĩ, video rất dễ hiểu và hữu ích!</p>
          </div>
        </div>
        <div className="input row between" style={{ padding: '14px 14px' }}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Viết bình luận..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: 12,
              fontFamily: 'inherit',
              color: '#173B32',
              userSelect: 'text',
            }}
          />
          <span style={{ cursor: 'pointer', color: '#357D64' }} data-toast="Đã gửi bình luận" onClick={() => setComment('')}>
            ➤
          </span>
        </div>
      </main>
    </ScopedScreen>
  )
}
