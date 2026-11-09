/**
 * Vùng an toàn của màn hình – giống safe-area trên iPhone.
 * Status bar + tai thỏ và thanh home do <Screen> vẽ đè lên trên ở vị trí cố định,
 * nội dung mỗi màn chỉ cần chừa đúng khoảng trống này để không bị lệch layout.
 */

/** Khoảng trống 44px dưới status bar / tai thỏ – đặt ở đầu mỗi màn */
export function SafeAreaTop() {
  return <div aria-hidden="true" className="h-safe-top w-full shrink-0" />
}

/** Khoảng trống cho thanh home ở đáy – dùng cho màn KHÔNG có tab bar */
export function SafeAreaBottom() {
  return <div aria-hidden="true" className="h-safe-bottom w-full shrink-0" />
}
