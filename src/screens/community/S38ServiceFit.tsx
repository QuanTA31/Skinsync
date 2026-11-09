import { ScopedScreen } from '@/components/layout/ScopedScreen'
import { Top } from '@/components/layout/CompactHeader'
import css from '@/styles/scoped/compact.css?inline'

const profile = ['◉\nDa dầu mụn', '♧\nMụn viêm (mức độ nhẹ)', '☼\nCó thâm mụn', '▧\nKhông tiền sử điều trị laser']

/** Màn 38 · Dịch vụ có phù hợp với bạn? */
export default function S38ServiceFit() {
  return (
    <ScopedScreen id="s38" css={css} tab={0}>
      <main className="screen">
        <Top back="s37" />

        <h1>Dịch vụ này có phù hợp với bạn?</h1>
        <p>Chúng tôi sử dụng thông tin hồ sơ của bạn để đánh giá sơ bộ mức độ phù hợp với dịch vụ này.</p>

        <div className="card row" data-go="s39">
          <div className="thumb" style={{ width: 100, height: 80 }}>
            <img src="/img/scenes/facial-treatment.jpg" alt="Điều trị laser trị mụn" />
          </div>
          <div style={{ flex: 1 }}>
            <h3>Điều trị laser trị mụn</h3>
            <p>Giảm mụn, cải thiện thâm và thu nhỏ lỗ chân lông</p>
            <span className="pill">Dịch vụ làm đẹp</span>
          </div>
          <b>›</b>
        </div>

        <h3>
          Thông tin hồ sơ đã được tham khảo　
          <span className="small" data-go="s50">
            Chỉnh sửa ›
          </span>
        </h3>
        <div className="grid3">
          {profile.map((x) => (
            <div key={x} className="card small" style={{ whiteSpace: 'pre-line', textAlign: 'center' }} data-go="s50">
              {x}
            </div>
          ))}
        </div>

        <div className="notice">
          <b>🟢　Những yếu tố có thể phù hợp</b>
          <p>
            • Phù hợp với tình trạng da dầu mụn nhẹ - trung bình
            <br />
            • Có thể hỗ trợ giảm mụn và cải thiện thâm sau mụn
            <br />• Phù hợp với mục tiêu cải thiện bề mặt da
          </p>
        </div>
        <div className="notice warn">
          <b>🟠　Những điểm cần hỏi bác sĩ trước khi thực hiện</b>
          <p>
            • Tình trạng da hiện tại có đủ điều kiện thực hiện không
            <br />
            • Số buổi điều trị phù hợp với tình trạng da
            <br />• Các rủi ro, tác dụng phụ có thể gặp
          </p>
        </div>
        <div className="notice blue">
          <b>♧　Khuyến nghị</b>
          <p>Bạn nên trao đổi trực tiếp với bác sĩ da liễu để được thăm khám, đánh giá chi tiết và tư vấn phác đồ phù hợp.</p>
        </div>

        <button className="btn primary full" data-go="s39">
          Xem thông tin dịch vụ　→
        </button>
        <button className="btn full" style={{ marginTop: 7 }} data-go="s23">
          ▦　Tư vấn bác sĩ　→
        </button>
      </main>
    </ScopedScreen>
  )
}
