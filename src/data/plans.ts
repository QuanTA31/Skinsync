/**
 * Các gói dịch vụ SKINSYNC – nguồn dữ liệu duy nhất cho màn 30 (chọn gói), 31 (xác nhận), 32 (gói của tôi),
 * 51 (đơn hàng) và 60 (quản lý dịch vụ). Muốn đổi giá / quyền lợi: chỉ sửa ở đây.
 */
export type PlanId = 'base' | 'premium-care' | 'premium-plus' | 'premium-complete' | 'pay-per-consultation'

export interface Plan {
  id: PlanId
  name: string
  /** giá (VND), 0 = miễn phí */
  price: number
  /** thời hạn hiển thị, vd "1 tháng", "1 lượt" */
  duration: string
  /** số tháng của gói thuê bao (để tính ngày hết hạn); null = không theo tháng */
  months: number | null
  /** số lượt tái khám / tư vấn trực tuyến kèm theo */
  consultations: number
  summary: string
  benefits: string[]
  badge?: string
}

export const PLANS: Plan[] = [
  {
    id: 'base',
    name: 'Base',
    price: 0,
    duration: 'Theo chính sách sử dụng',
    months: null,
    consultations: 0,
    summary: 'Chăm sóc da cơ bản cùng AI, miễn phí.',
    benefits: [
      'Phân tích sơ bộ tình trạng da bằng AI',
      'Gợi ý routine chăm sóc cơ bản',
      'Ghi nhận tiến trình làn da',
      'Nhắc nhở chăm sóc hằng ngày',
    ],
  },
  {
    id: 'premium-care',
    name: 'Premium Care',
    price: 299_000,
    duration: '1 tháng',
    months: 1,
    consultations: 1,
    summary: 'Theo dõi chuyên sâu cùng bác sĩ trong 1 tháng.',
    benefits: [
      'Toàn bộ quyền lợi của gói Base',
      '1 lượt tái khám trực tuyến với bác sĩ da liễu',
      'Hồ sơ liệu trình chuyên sâu, theo dõi cùng bác sĩ',
      'Cộng đồng nâng cao (chia sẻ, hỏi đáp)',
    ],
  },
  {
    id: 'premium-plus',
    name: 'Premium Plus',
    price: 549_000,
    duration: '2 tháng',
    months: 2,
    consultations: 2,
    summary: 'Đồng hành 2 tháng, điều chỉnh liệu trình theo tiến triển.',
    badge: 'Phổ biến',
    benefits: [
      'Toàn bộ quyền lợi của Premium Care',
      '2 lượt tái khám trực tuyến với bác sĩ da liễu',
      'Điều chỉnh liệu trình theo tiến triển của da',
      'Tiết kiệm 8% so với đăng ký từng tháng',
    ],
  },
  {
    id: 'premium-complete',
    name: 'Premium Complete',
    price: 799_000,
    duration: '3 tháng',
    months: 3,
    consultations: 3,
    summary: 'Lộ trình trọn vẹn 3 tháng, ưu tiên bác sĩ.',
    badge: 'Tiết kiệm nhất',
    benefits: [
      'Toàn bộ quyền lợi của Premium Plus',
      '3 lượt tái khám trực tuyến với bác sĩ da liễu',
      'Ưu tiên đặt lịch, bác sĩ phản hồi trong 24 giờ',
      'Tiết kiệm 11% so với đăng ký từng tháng',
    ],
  },
  {
    id: 'pay-per-consultation',
    name: 'Pay-per Consultation',
    price: 250_000,
    duration: '1 lượt',
    months: null,
    consultations: 1,
    summary: 'Tư vấn lẻ một lần, không cần đăng ký gói.',
    benefits: ['1 lượt tư vấn trực tuyến với bác sĩ da liễu', 'Không cần đăng ký gói thuê bao', 'Nhận tóm tắt và đề xuất sau buổi tư vấn'],
  },
]

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<PlanId, Plan>

/** 299000 → "299.000đ", 0 → "Miễn phí" */
export function formatPrice(price: number): string {
  return price === 0 ? 'Miễn phí' : `${price.toLocaleString('vi-VN')}đ`
}

/** gói trả phí theo thời hạn (không phải Base, không phải tư vấn lẻ) */
export const isSubscription = (p: Plan) => p.months !== null
