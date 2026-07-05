export default function TypingIndicator() {
  return (
    <div className="msg-enter flex justify-start">
      <div className="bubble-bot px-4 py-3 flex items-center gap-1.5 shadow-sm">
        <span className="dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--teal)' }}></span>
        <span className="dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--teal)' }}></span>
        <span className="dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--teal)' }}></span>
      </div>
    </div>
  )
}
