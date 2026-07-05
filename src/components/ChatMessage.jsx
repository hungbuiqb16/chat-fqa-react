export default function ChatMessage({ text, who }) {
  const isUser = who === 'user'
  return (
    <div className={'msg-enter flex ' + (isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={
          (isUser ? 'bubble-user text-white' : 'bubble-bot text-slate-700') +
          ' max-w-[80%] px-4 py-2.5 text-[14px] leading-relaxed shadow-sm'
        }
      >
        {text}
      </div>
    </div>
  )
}
