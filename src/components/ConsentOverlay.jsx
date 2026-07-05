const TERMS = [
  {
    title: 'Dữ liệu hội thoại.',
    body: 'Nội dung bạn nhập có thể được lưu lại để cải thiện chất lượng trả lời và phục vụ tra soát khi cần.',
  },
  {
    title: 'Tính chính xác.',
    body: 'Trợ lý ảo trả lời dựa trên câu hỏi thường gặp, có thể chưa bao quát mọi trường hợp cá nhân.',
  },
  {
    title: 'Không thay thế tư vấn chính thức.',
    body: 'Với các vấn đề khẩn cấp hoặc pháp lý, vui lòng liên hệ trực tiếp bộ phận chăm sóc khách hàng.',
  },
  {
    title: 'Bảo mật.',
    body: 'Thông tin cá nhân được bảo vệ theo chính sách bảo mật, không chia sẻ cho bên thứ ba khi chưa có sự đồng ý.',
  },
]

function TermItem({ title, body }) {
  return (
    <div className="flex gap-3">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: 'var(--teal-tint)', color: 'var(--teal-dark)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <p className="text-[13.5px] text-slate-600 leading-relaxed">
        <span className="font-semibold text-slate-800">{title}</span> {body}
      </p>
    </div>
  )
}

export default function ConsentOverlay({ visible, checked, onCheckChange, onAgree }) {
  if (!visible) return null

  return (
    <div
      id="overlay"
      className="absolute inset-0 z-30 flex items-end sm:items-center justify-center bg-slate-900/55 p-0 sm:p-6"
    >
      <div
        className="term-card w-full sm:max-w-[400px] sm:rounded-3xl rounded-t-3xl bg-white flex flex-col overflow-hidden"
        style={{ maxHeight: '92dvh' }}
      >
        <div className="px-6 pt-6 pb-4 shrink-0" style={{ background: 'var(--navy)' }}>
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3"
            style={{ background: 'var(--teal)' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-white text-[19px] leading-tight">
            Trước khi bắt đầu trò chuyện
          </h2>
          <p className="text-[13px] mt-1" style={{ color: '#B9C6DA' }}>
            Vui lòng đọc và đồng ý với điều khoản sử dụng dịch vụ hỗ trợ tự động.
          </p>
        </div>

        <div className="px-6 py-4 overflow-y-auto scrollbar-thin space-y-3" style={{ maxHeight: '38dvh' }}>
          {TERMS.map((term) => (
            <TermItem key={term.title} title={term.title} body={term.body} />
          ))}
        </div>

        <div className="px-6 pt-3 pb-6 border-t border-slate-100 shrink-0 bg-white">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              className="consent-box mt-0.5 w-4 h-4 rounded shrink-0"
              checked={checked}
              onChange={(e) => onCheckChange(e.target.checked)}
            />
            <span className="text-[13px] text-slate-600 leading-snug">
              Tôi đã đọc và đồng ý với <span className="font-semibold text-slate-800">Điều khoản sử dụng</span> và{' '}
              <span className="font-semibold text-slate-800">Chính sách bảo mật</span> của dịch vụ.
            </span>
          </label>
          <button
            type="button"
            disabled={!checked}
            onClick={onAgree}
            className="mt-4 w-full py-3 rounded-full text-white font-display font-semibold text-[14.5px] transition disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: 'var(--teal)' }}
          >
            Đồng ý &amp; bắt đầu trò chuyện
          </button>
        </div>
      </div>
    </div>
  )
}
