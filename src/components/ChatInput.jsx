export default function ChatInput({ value, onChange, onSubmit, disabled }) {
  return (
    <footer className="shrink-0 border-t border-slate-200 bg-white px-3 py-3">
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <input
          type="text"
          autoComplete="off"
          placeholder="Nhập câu hỏi của bạn…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="flex-1 min-w-0 bg-slate-100 rounded-full px-4 py-2.5 text-[14px] outline-none focus:ring-2 transition"
          style={{ '--tw-ring-color': 'var(--teal)' }}
        />
        <button
          type="submit"
          disabled={disabled}
          className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white transition disabled:opacity-40"
          style={{ background: 'var(--teal)' }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M3 11.5L20.5 3l-8 17.5-2.6-7.3L3 11.5z" fill="white" />
          </svg>
        </button>
      </form>
    </footer>
  )
}
