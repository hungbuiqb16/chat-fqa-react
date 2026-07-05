import { useEffect, useRef, useState, useCallback } from 'react'
import Header from './components/Header.jsx'
import ChatMessage from './components/ChatMessage.jsx'
import TypingIndicator from './components/TypingIndicator.jsx'
import QuickChips from './components/QuickChips.jsx'
import ChatInput from './components/ChatInput.jsx'
import ConsentOverlay from './components/ConsentOverlay.jsx'
import { FAQ, FALLBACK, findAnswer } from './data/faq.js'

const WELCOME =
  'Xin chào 👋 Mình là TrợLý ABC. Mình có thể giúp bạn tra cứu thông tin đổi trả, vận chuyển, thanh toán, bảo hành và nhiều câu hỏi khác. Bạn chọn một chủ đề bên dưới hoặc nhập câu hỏi nhé!'

let idCounter = 0
const nextId = () => ++idCounter

export default function App() {
  const [overlayVisible, setOverlayVisible] = useState(true)
  const [consentChecked, setConsentChecked] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)

  const [messages, setMessages] = useState([{ id: nextId(), text: WELCOME, who: 'bot' }])
  const [typing, setTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const chatLogRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    const el = chatLogRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing, scrollToBottom])

  const addMessage = useCallback((text, who) => {
    setMessages((prev) => [...prev, { id: nextId(), text, who }])
  }, [])

  const botReply = useCallback(
    (text) => {
      setTyping(true)
      const delay = 550 + Math.random() * 450
      setTimeout(() => {
        setTyping(false)
        addMessage(text, 'bot')
      }, delay)
    },
    [addMessage],
  )

  const askFaq = useCallback(
    (item) => {
      addMessage(item.q, 'user')
      botReply(item.a)
    },
    [addMessage, botReply],
  )

  const handleAgree = () => {
    if (!consentChecked) return
    setOverlayVisible(false)
    setChatStarted(true)
  }

  const handleReopenTerms = () => {
    setOverlayVisible(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = inputValue.trim()
    if (!val) return
    addMessage(val, 'user')
    setInputValue('')
    const ans = findAnswer(val)
    botReply(ans || FALLBACK)
  }

  return (
    <div className="app-shell">
      <Header onReopenTerms={handleReopenTerms} />

      <main
        ref={chatLogRef}
        className="flex-1 overflow-y-auto scrollbar-thin px-4 pt-4 pb-3 space-y-3"
      >
        {messages.map((m) => (
          <ChatMessage key={m.id} text={m.text} who={m.who} />
        ))}
        {typing && <TypingIndicator />}
      </main>

      <QuickChips items={FAQ} onSelect={askFaq} />

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
        disabled={!chatStarted}
      />

      <ConsentOverlay
        visible={overlayVisible}
        checked={consentChecked}
        onCheckChange={setConsentChecked}
        onAgree={handleAgree}
      />
    </div>
  )
}
