Blogging Website

Giới thiệu
- Đây là dự án Website Blog được xây dựng theo kiến trúc Client – Server, sử dụng MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS).
- Hệ thống cho phép người dùng đăng ký, đăng nhập, viết bài blog, quản lý bài viết, tương tác (like, comment), nhận thông báo và cá nhân hóa hồ sơ người dùng.

Công nghệ sử dụng

*Frontend
- ReactJS (Vite)
- React Router DOM – quản lý routing
- Axios – gọi REST API
- Context API – quản lý trạng thái đăng nhập, blog, theme
- Tailwind CSS – xây dựng giao diện
- Framer Motion – animation
- EditorJS – soạn thảo nội dung blog
- Firebase Authentication – đăng nhập Google

*Backend
- NodeJS
- ExpressJS
- MongoDB (Mongoose)
- JWT (JSON Web Token) – xác thực người dùng
- BcryptJS – mã hóa mật khẩu
- AWS S3 – lưu trữ hình ảnh
- dotenv – quản lý biến môi trường

Chức năng chính

*Người dùng
- Đăng ký tài khoản
- Đăng nhập / đăng nhập bằng Google
- Cập nhật hồ sơ cá nhân
- Đổi mật khẩu

*Blog
- Viết bài blog bằng EditorJS
- Lưu nháp hoặc xuất bản bài viết
- Quản lý bài viết đã đăng
- Xem danh sách blog mới và blog nổi bật
- Tìm kiếm blog theo từ khóa / tag

*Tương tác
- Like / Unlike bài viết
- Bình luận bài viết
- Trả lời bình luận
- Nhận thông báo khi có tương tác
