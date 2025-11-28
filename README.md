# LBBA Next.js - Hội Doanh Nghiệp Phường Long Bình

Website Đại Hội Thành Lập Hội Doanh Nghiệp Phường Long Bình được xây dựng bằng Next.js 14 và Tailwind CSS.

## Yêu cầu

- Node.js 18.17 trở lên
- npm hoặc yarn

## Cài đặt Node.js

### Windows:
1. Tải Node.js từ: https://nodejs.org/
2. Chọn bản LTS (Long Term Support)
3. Chạy file cài đặt và làm theo hướng dẫn

### Kiểm tra cài đặt:
```bash
node --version
npm --version
```

## Cài đặt Dependencies

```bash
cd "d:\Web Long Bình\lbba-nextjs"
npm install
```

## Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt và truy cập: **http://localhost:3000**

## Build cho Production

```bash
npm run build
npm start
```

## Export Static Site

```bash
npm run build
```

File HTML tĩnh sẽ được tạo trong thư mục `out/`

## Công nghệ sử dụng

- **Next.js 14** - React Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React 18** - UI Library

## Cấu trúc thư mục

```
lbba-nextjs/
├── app/
│   ├── layout.tsx       # Layout chính
│   ├── page.tsx         # Trang chủ
│   └── globals.css      # Styles toàn cục
├── components/          # React components
├── public/             # Static files
├── package.json
└── next.config.js
```

## Tính năng

✅ Server-side Rendering (SSR)
✅ Responsive Design  
✅ Tailwind CSS
✅ TypeScript Support
✅ Static Export
✅ SEO Optimized
✅ Tiếng Việt UTF-8 chuẩn

## Liên hệ

Hội Doanh Nghiệp Phường Long Bình
- **Địa chỉ**: 325 Nguyễn Văn Tăng, P. Long Bình, TP. Thủ Đức
- **Điện thoại**: 0912 116 668 | 0978 727 438
