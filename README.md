# TrợLý ABC — Chatbot FAQ (React 19 + Vite + Tailwind v4)

Chatbot FAQ hỗ trợ khách hàng, được chuyển đổi từ bản HTML/vanilla JS gốc sang một
project React 19 hoàn chỉnh, dùng Vite làm build tool và Tailwind CSS v4.

## Cấu trúc project

```
chatbot-faq-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # entry point
    ├── App.jsx               # state & logic chính (chat, typing, consent)
    ├── index.css             # Tailwind + custom CSS (giữ nguyên style gốc)
    ├── data/
    │   └── faq.js            # dữ liệu FAQ + hàm tìm câu trả lời
    └── components/
        ├── Header.jsx
        ├── ConsentOverlay.jsx
        ├── ChatMessage.jsx
        ├── TypingIndicator.jsx
        ├── QuickChips.jsx
        └── ChatInput.jsx
```

## Cài đặt & chạy

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ hiện ra trong terminal (mặc định `http://localhost:5173`).

Build bản production:

```bash
npm run build
npm run preview
```

## Những gì đã được giữ nguyên từ bản gốc

- Toàn bộ giao diện, màu sắc (navy/teal/amber), font chữ (Be Vietnam Pro + Inter).
- Luồng "Điều khoản sử dụng" bắt buộc đồng ý trước khi chat.
- Danh sách 6 câu hỏi thường gặp (chip gợi ý) và cơ chế dò từ khóa để trả lời tự do.
- Hiệu ứng typing indicator (3 chấm nhảy), animation tin nhắn xuất hiện (fade up).
- Nút mở lại điều khoản trên header.

## Những gì đã thay đổi khi chuyển sang React

- Toàn bộ thao tác DOM thủ công (`document.getElementById`, `innerHTML`...) được thay
  bằng state của React (`useState`) và render khai báo (declarative).
- Tách nhỏ thành các component tái sử dụng được, dữ liệu FAQ tách riêng ra `data/faq.js`.
- Dùng Tailwind CSS v4 qua plugin `@tailwindcss/vite` thay vì Tailwind CDN script.
- Có thể build production tối ưu (minify, tree-shaking) thay vì chỉ chạy 1 file HTML tĩnh.
# chat-fqa-react
