# Lab 2 — VibeTech

Landing page dùng HTML5, CSS3 và JavaScript thuần. Mở `index.html` bằng trình duyệt để xem; không cần cài dependency hay build.

## Cấu trúc

- `index.html`: navbar, phần giới thiệu căn giữa, tám sản phẩm và footer.
- `style.css`: Flexbox, Grid, media queries, hover và reduced motion.
- `script.js`: tìm kiếm và giỏ hàng demo trong bộ nhớ; tải lại trang sẽ xóa giỏ hàng. Không có checkout hay thanh toán.
- `images/`: tám ảnh PNG local, không phụ thuộc vào dịch vụ ảnh lúc chạy.

## Trạng thái thiết kế

Đã chỉnh lại theo screenshot desktop Figma do người dùng cung cấp: tiêu đề “Unleash the Next Level” căn giữa; logo tím dạng các lớp xếp; nền sản phẩm xám nhạt; giá tím; nút xanh đen toàn chiều rộng; Hot ở chuột, Sale ở đồng hồ/đèn và New ở màn hình. Giữ nguyên tỉ lệ ảnh với object-fit: contain. Đã tìm được ảnh stock tương ứng cho chuột đen và tai nghe nền vàng. Đã đọc ảnh tham chiếu ba frame 1920/1024/768px trong trang 14 của PDF bài tập do người dùng chỉ ra. Đã chỉnh vùng ảnh tự co theo tỉ lệ ở 1024px, vùng ảnh cao 260px ở 768px và giữ cỡ tiêu đề tablet như desktop. Ảnh máy đánh chữ “Update” trong thẻ cuối được dùng theo mẫu (tên và giá chân đế vẫn giữ theo đề). Không sao chép PDF vào repository. Font và thông số được ước lượng từ ảnh raster; chưa lấy được thông số trực tiếp từ Figma vì HTTP 403.

Tham chiếu: https://www.figma.com/design/ZJ8VO4OBkr6HNWOLq75zKr/e-commerce?node-id=0-1

## Kiểm thử

Đã kiểm thử bằng Edge headless với trang được phục vụ qua HTTP local:

| Chiều rộng | Cột sản phẩm | Tràn ngang | Ảnh | Tìm kiếm / giỏ hàng / hover |
| --- | --- | --- | --- | --- |
| 1920px | 4 | Không | Đủ | Đạt |
| 1024px | 4 | Không | Đủ | Đạt |
| 768px | 2 | Không | Đủ | Đạt |
| 430px | 2 | Không | Đủ | Đạt |
| 375px | 2 | Không | Đủ | Đạt |

Kiểm tra thêm: tám sản phẩm; navbar Flexbox và sticky khi cuộn; nút Add to Cart cao tối thiểu 44px; tổng tiền, xóa giỏ hàng, tìm kiếm có/không có kết quả, phím Escape; không có lỗi JavaScript hoặc HTTP asset. Đã xem ảnh chụp toàn trang desktop/mobile. Đã đối chiếu cả ba bố cục 1920/1024/768px với ảnh tham chiếu trong PDF; trang vẫn hiển thị đủ tám sản phẩm ở 768px dù ảnh mẫu chỉ chụp sáu thẻ đầu. Chưa kiểm tra trên thiết bị thật.

## Nguồn ảnh

Bảy ảnh sản phẩm từ Unsplash, thu nhỏ và chuyển sang PNG; giữ tỉ lệ gốc. [Điều khoản sử dụng Unsplash](https://unsplash.com/license). Ảnh Update trùng mẫu được lấy từ bản sao công khai có tên nguồn viarami/Pixabay bên dưới và hiển thị với khung cắt 3:2 bằng CSS.

| File | Nguồn |
| --- | --- |
| mouse.png | https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7 |
| keyboard.png | https://images.unsplash.com/photo-1587829741301-dc798b83add3 |
| headphone.png | https://images.unsplash.com/photo-1505740420928-5e560c06d30e |
| smartwatch.png | https://images.unsplash.com/photo-1523275335684-37898b6baf30 |
| monitor.png | https://images.unsplash.com/photo-1527443224154-c4a3942d3acf |
| microphone.png | https://images.unsplash.com/photo-1590602847861-f357a9332bbc |
| lamp.png | https://images.unsplash.com/photo-1507473885765-e6ed057f782c |
| laptop-stand.png | https://abronhillha.org.uk/data/1024x1024-viarami_update_5238325_1920_2026_03_25_16_27_34_909.jpg |

## GitHub Pages

Repository trống lúc clone, nhánh mặc định `main`; không có lab hoặc workflow hiện hữu để ghi đè. GitHub Pages đã được bật bằng API với nguồn `main` và `/(root)`, HTTPS được bật. Không tạo workflow hoặc sửa file bên ngoài `Lab2/`.

Cấu hình tương ứng: **Settings → Pages → Deploy from a branch → main → /(root)**. Cách này phục vụ toàn bộ repository và giữ các bài khác ở đường dẫn riêng. Các lần push tiếp theo lên `main` sẽ cập nhật Pages.

Đã xác minh ngày 11/11/2026: trang live, CSS, JavaScript và cả tám ảnh trả về HTTP 200.

https://phamnguyenminhtam.github.io/26560053-Ph-m-Nguy-n-Minh-T-m-Web/Lab2/
