export default function Header({ onReopenTerms }) {
  return (
    <header className="relative shrink-0" style={{ background: 'var(--navy)' }}>
      <div className="flex items-center gap-3 px-5 pt-5 pb-8 text-white">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'var(--teal)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.19 4.53 3.06 5.99-.1.99-.5 2.28-1.46 3.51-.15.2 0 .5.28.46 1.86-.27 3.4-1.02 4.4-1.68A10.6 10.6 0 0012 19.5c4.97 0 9-3.58 9-8s-4.03-8.5-9-8.5z"
              fill="white"
            />
          </svg>
        </div>
        <div className="min-w-0">
          <h1 className="font-display font-semibold text-[15px] leading-tight truncate">
            TrợLý ABC
          </h1>
          <p className="text-[12px] flex items-center gap-1.5" style={{ color: '#B9C6DA' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-dot"></span>
            Đang hoạt động — phản hồi ngay
          </p>
        </div>
        <button
          type="button"
          title="Điều khoản sử dụng"
          onClick={onReopenTerms}
          className="ml-auto w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:bg-white/10 transition"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B9C6DA"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="11" x2="12" y2="16.5" />
            <circle cx="12" cy="7.7" r="0.6" fill="#B9C6DA" stroke="none" />
          </svg>
        </button>
      </div>
      {/* wave divider */}
      <svg
        className="absolute -bottom-px left-0 w-full"
        viewBox="0 0 480 24"
        preserveAspectRatio="none"
        style={{ height: '20px' }}
      >
        <path d="M0,24 C120,0 360,0 480,24 L480,24 L0,24 Z" fill="var(--bg)" />
      </svg>
    </header>
  )
}
