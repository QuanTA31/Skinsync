import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

/**
 * Danh sách toàn bộ màn hình của demo (thứ tự = thứ tự trong panel bên trái).
 * Thêm màn mới: tạo file trong src/screens/<nhóm>/ rồi khai báo 1 dòng ở đây.
 */
export interface ScreenDef {
  /** id dùng trên URL (#/s01) và trong data-go="s01" */
  id: string
  title: string
  group: string
  component: LazyExoticComponent<ComponentType>
}

export const GROUPS = {
  onboarding: '1 · Đăng ký & hồ sơ ban đầu',
  home: '2 · Trang chủ & phân tích da',
  routine: '3 · Routine & sản phẩm',
  doctor: '4 · Tìm bác sĩ & đặt lịch',
  premium: '5 · Gói dịch vụ & điều trị',
  community: '6 · Cộng đồng & điểm thưởng',
  account: '7 · Thông báo & tài khoản',
  pro: '8 · Phía bác sĩ',
} as const

export const SCREENS: ScreenDef[] = [
  // 1 · Đăng ký & hồ sơ ban đầu
  { id: 's01', title: 'Chào mừng', group: GROUPS.onboarding, component: lazy(() => import('@/screens/onboarding/S01Welcome')) },
  { id: 's02', title: 'Đăng nhập', group: GROUPS.onboarding, component: lazy(() => import('@/screens/onboarding/S02Login')) },
  {
    id: 's03',
    title: 'Cùng SKINSYNC hiểu làn da',
    group: GROUPS.onboarding,
    component: lazy(() => import('@/screens/onboarding/S03OnboardingIntro')),
  },
  { id: 's04', title: 'Tạo tài khoản', group: GROUPS.onboarding, component: lazy(() => import('@/screens/onboarding/S04SignUp')) },
  { id: 's61', title: 'Điều khoản sử dụng', group: GROUPS.onboarding, component: lazy(() => import('@/screens/onboarding/S61TermsOfUse')) },
  {
    id: 's05',
    title: 'Xác thực tài khoản (OTP)',
    group: GROUPS.onboarding,
    component: lazy(() => import('@/screens/onboarding/S05VerifyOtp')),
  },
  { id: 's06', title: 'Chụp ảnh làn da', group: GROUPS.onboarding, component: lazy(() => import('@/screens/onboarding/S06SkinCapture')) },
  {
    id: 's07',
    title: 'Sản phẩm đang sử dụng',
    group: GROUPS.onboarding,
    component: lazy(() => import('@/screens/onboarding/S07CurrentProducts')),
  },
  {
    id: 's08',
    title: 'Lịch sử chăm sóc da',
    group: GROUPS.onboarding,
    component: lazy(() => import('@/screens/onboarding/S08SkincareHistory')),
  },
  {
    id: 's09',
    title: 'Tình trạng da gần đây',
    group: GROUPS.onboarding,
    component: lazy(() => import('@/screens/onboarding/S09RecentSkinCondition')),
  },
  // 2 · Trang chủ & phân tích da
  { id: 's10', title: 'Trang chủ', group: GROUPS.home, component: lazy(() => import('@/screens/home/S10Home')) },
  { id: 's11', title: 'Phân tích làn da', group: GROUPS.home, component: lazy(() => import('@/screens/home/S11SkinAnalysis')) },
  { id: 's12', title: 'Đang phân tích', group: GROUPS.home, component: lazy(() => import('@/screens/home/S12Analyzing')) },
  { id: 's13', title: 'Kết quả phân tích', group: GROUPS.home, component: lazy(() => import('@/screens/home/S13AnalysisResult')) },
  {
    id: 's14',
    title: 'Bắt đầu hành trình chăm sóc da',
    group: GROUPS.home,
    component: lazy(() => import('@/screens/home/S14JourneyStart')),
  },
  { id: 's15', title: 'Làn da cần đánh giá thêm', group: GROUPS.home, component: lazy(() => import('@/screens/home/S15NeedsReview')) },
  // 3 · Routine & sản phẩm
  {
    id: 's16',
    title: 'Quy trình chăm sóc của tôi',
    group: GROUPS.routine,
    component: lazy(() => import('@/screens/routine/S16MyRoutine')),
  },
  {
    id: 's17',
    title: 'Chăm sóc da buổi sáng',
    group: GROUPS.routine,
    component: lazy(() => import('@/screens/routine/S17MorningRoutine')),
  },
  { id: 's18', title: 'Chăm sóc da buổi tối', group: GROUPS.routine, component: lazy(() => import('@/screens/routine/S18EveningRoutine')) },
  { id: 's19', title: 'Sản phẩm chăm sóc da', group: GROUPS.routine, component: lazy(() => import('@/screens/routine/S19Products')) },
  { id: 's20', title: 'Chi tiết sản phẩm', group: GROUPS.routine, component: lazy(() => import('@/screens/routine/S20ProductDetail')) },
  { id: 's21', title: 'Giỏ hàng', group: GROUPS.routine, component: lazy(() => import('@/screens/routine/S21Cart')) },
  {
    id: 's22',
    title: 'Hành trình làn da của tôi',
    group: GROUPS.routine,
    component: lazy(() => import('@/screens/routine/S22SkinJourney')),
  },
  // 4 · Tìm bác sĩ & đặt lịch
  {
    id: 's23',
    title: 'Kết nối bác sĩ da liễu',
    group: GROUPS.doctor,
    component: lazy(() => import('@/screens/doctor/S23FindDermatologist')),
  },
  { id: 's24', title: 'Hồ sơ bác sĩ', group: GROUPS.doctor, component: lazy(() => import('@/screens/doctor/S24DoctorProfile')) },
  { id: 's25', title: 'Đặt lịch khám da liễu', group: GROUPS.doctor, component: lazy(() => import('@/screens/doctor/S25BookAppointment')) },
  {
    id: 's26',
    title: 'Xác nhận thông tin đặt lịch',
    group: GROUPS.doctor,
    component: lazy(() => import('@/screens/doctor/S26ConfirmBooking')),
  },
  { id: 's27', title: 'Buổi tư vấn của bạn', group: GROUPS.doctor, component: lazy(() => import('@/screens/doctor/S27Consultation')) },
  {
    id: 's28',
    title: 'Liệu trình chăm sóc và điều trị',
    group: GROUPS.doctor,
    component: lazy(() => import('@/screens/doctor/S28TreatmentPlan')),
  },
  { id: 's29', title: 'Phòng khám dành cho bạn', group: GROUPS.doctor, component: lazy(() => import('@/screens/doctor/S29Clinics')) },
  // 5 · Gói dịch vụ & điều trị
  {
    id: 's30',
    title: 'Chọn gói đồng hành cùng làn da',
    group: GROUPS.premium,
    component: lazy(() => import('@/screens/premium/S30ChoosePlan')),
  },
  { id: 's31', title: 'Xác nhận đăng ký gói', group: GROUPS.premium, component: lazy(() => import('@/screens/premium/S31ConfirmPlan')) },
  { id: 's32', title: 'Gói dịch vụ của tôi', group: GROUPS.premium, component: lazy(() => import('@/screens/premium/S32MyPlan')) },
  {
    id: 's33',
    title: 'Hồ sơ điều trị của tôi',
    group: GROUPS.premium,
    component: lazy(() => import('@/screens/premium/S33TreatmentRecords')),
  },
  {
    id: 's34',
    title: 'Lịch dùng thuốc của tôi',
    group: GROUPS.premium,
    component: lazy(() => import('@/screens/premium/S34MedicationSchedule')),
  },
  {
    id: 's35',
    title: 'Lịch tái khám của bạn',
    group: GROUPS.premium,
    component: lazy(() => import('@/screens/premium/S35FollowUpSchedule')),
  },
  // 6 · Cộng đồng & điểm thưởng
  { id: 's36', title: 'Cộng đồng yêu da', group: GROUPS.community, component: lazy(() => import('@/screens/community/S36Community')) },
  { id: 's37', title: 'Chi tiết bài viết', group: GROUPS.community, component: lazy(() => import('@/screens/community/S37PostDetail')) },
  {
    id: 's38',
    title: 'Dịch vụ có phù hợp với bạn?',
    group: GROUPS.community,
    component: lazy(() => import('@/screens/community/S38ServiceFit')),
  },
  { id: 's39', title: 'Thông tin dịch vụ', group: GROUPS.community, component: lazy(() => import('@/screens/community/S39ServiceInfo')) },
  {
    id: 's40',
    title: 'Chia sẻ hành trình của bạn',
    group: GROUPS.community,
    component: lazy(() => import('@/screens/community/S40ShareJourney')),
  },
  {
    id: 's41',
    title: 'Điểm thưởng của tôi',
    group: GROUPS.community,
    component: lazy(() => import('@/screens/community/S41RewardPoints')),
  },
  {
    id: 's42',
    title: 'Thu nhập từ giới thiệu sản phẩm',
    group: GROUPS.community,
    component: lazy(() => import('@/screens/community/S42AffiliateEarnings')),
  },
  {
    id: 's43',
    title: 'Hoạt động và quà tặng',
    group: GROUPS.community,
    component: lazy(() => import('@/screens/community/S43ActivitiesRewards')),
  },
  // 7 · Thông báo & tài khoản
  { id: 's44', title: 'Thông báo của bạn', group: GROUPS.account, component: lazy(() => import('@/screens/account/S44Notifications')) },
  { id: 's45', title: 'Tùy chỉnh nhắc nhở', group: GROUPS.account, component: lazy(() => import('@/screens/account/S45ReminderSettings')) },
  {
    id: 's46',
    title: 'Lịch sử dùng thuốc',
    group: GROUPS.account,
    component: lazy(() => import('@/screens/account/S46MedicationHistory')),
  },
  {
    id: 's47',
    title: 'Thời tiết & chăm sóc da hôm nay',
    group: GROUPS.account,
    component: lazy(() => import('@/screens/account/S47WeatherCare')),
  },
  { id: 's48', title: 'Tài khoản của tôi', group: GROUPS.account, component: lazy(() => import('@/screens/account/S48Account')) },
  { id: 's49', title: 'Thông tin của tôi', group: GROUPS.account, component: lazy(() => import('@/screens/account/S49PersonalInfo')) },
  { id: 's50', title: 'Hồ sơ làn da', group: GROUPS.account, component: lazy(() => import('@/screens/account/S50SkinProfile')) },
  {
    id: 's51',
    title: 'Đơn hàng và thanh toán',
    group: GROUPS.account,
    component: lazy(() => import('@/screens/account/S51OrdersPayments')),
  },
  { id: 's52', title: 'Cài đặt tài khoản', group: GROUPS.account, component: lazy(() => import('@/screens/account/S52AccountSettings')) },
  // 8 · Phía bác sĩ
  { id: 's53', title: 'Trang chủ bác sĩ', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S53DoctorHome')) },
  { id: 's54', title: 'Lịch khám của tôi', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S54DoctorSchedule')) },
  { id: 's55', title: 'Hồ sơ bệnh nhân', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S55PatientRecord')) },
  { id: 's56', title: 'Theo dõi liệu trình', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S56TreatmentTracking')) },
  { id: 's57', title: 'Quản lý bài viết / video', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S57ContentManager')) },
  { id: 's58', title: 'Bảng thống kê', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S58Dashboard')) },
  { id: 's59', title: 'Kiểm duyệt nội dung', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S59ContentModeration')) },
  { id: 's60', title: 'Quản lý dịch vụ', group: GROUPS.pro, component: lazy(() => import('@/screens/pro/S60ServiceManagement')) },
]

export const SCREEN_BY_ID: Record<string, ScreenDef> = Object.fromEntries(SCREENS.map((s) => [s.id, s]))
