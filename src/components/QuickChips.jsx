export default function QuickChips({ items, onSelect }) {
  return (
    <div className="shrink-0 px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-thin">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => onSelect(item)}
          className="chip shrink-0 whitespace-nowrap text-[12.5px] font-medium px-3.5 py-2 rounded-full border"
          style={{
            borderColor: '#CBEFEA',
            background: 'var(--teal-tint)',
            color: 'var(--teal-dark)',
          }}
        >
          {item.q}
        </button>
      ))}
    </div>
  )
}
