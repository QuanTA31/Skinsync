# SKINSYNC demo – tiến độ

Cấu trúc code & quy ước: xem [README.md](README.md).

Figma file key: `6kWwoWZWWC88OsVJEOGAh2` · 60 màn gốc = 22 (page VietAnh) + 21 (page Vinh) + 17 (page QuanTA), cộng màn 61 (Điều khoản sử dụng) thêm mới.

## Node id (code layer)
- VietAnh: s01=57:587, s02=426:195, s03=515:198, s04=515:201, s05=515:204, s06=515:207, s07=515:210, s08=515:213, s09=515:216,
  s10=426:191, s11=515:219, s12=674:4, s13=674:7, s14=674:10, s15=741:15, s16=889:21, s17=889:24, s18=912:27,
  s19=980:31, s20=988:34, s21=994:37, s22=1004:40
- Vinh: s23=168:430, s24=89:417, s25=172:434, s26=172:437, s27=172:440, s28=172:446, s29=172:449, s30=450:5, s31=468:8,
  s32=468:11, s33=468:14, s34=468:17, s35=468:20, s36=468:23, s37=540:26, s38=540:30, s39=540:33, s40=540:36,
  s41=540:39, s42=540:42, s43=540:45
- QuanTA: s44=747:12, s45=747:15, s46=747:18, s47=747:21, s48=747:24, s49=747:27, s50=747:30, s51=747:33, s52=747:36,
  s53=747:39, s54=747:42, s55=747:45, s56=747:64, s57=747:51, s58=747:54, s59=747:57, s60=747:60

## Tiến độ

- [x] 61/61 màn đã dựng bằng React (TSX), dùng chung Screen / StatusBar / BottomNav / BrandLogo.
- [x] Bộ màu Sage Green + Ivory: primary #357D64 · chữ #173B32 · nền #F7F8F2 (src/styles/tokens.css).
- [x] Phông chữ thống nhất: Playfair Display (logo, tiêu đề) + Plus Jakarta Sans (nội dung).
- [x] Logo SKINSYNC thống nhất (components/brand/BrandLogo.tsx).
- [x] Màn 61 – chấp nhận điều khoản sử dụng (s04 → s61 → s05).
- [x] Gói dịch vụ: Base (miễn phí) · Premium Care 299.000đ/1 tháng · Premium Plus 549.000đ/2 tháng · Premium Complete 799.000đ/3 tháng · Pay-per Consultation 250.000đ/lượt (src/data/plans.ts).
- [x] Ảnh lỗi (lh3 …/aida/, cần đăng nhập) đã thay bằng ảnh cục bộ trong public/.
