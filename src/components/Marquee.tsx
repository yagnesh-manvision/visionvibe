const items = ['Live Music', 'DJ Nights', 'Cultural Celebrations', 'Private Events', 'Concerts', 'Festivals', 'Galas']

export function Marquee() {
  const row = (hidden?: boolean) => (
    <div className="marquee__row" aria-hidden={hidden}>
      {items.map((t) => (
        <span key={t} className="marquee__item">
          {t}
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0 14.6 9.4 24 12 14.6 14.6 12 24 9.4 14.6 0 12 9.4 9.4Z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        {row()}
        {row(true)}
      </div>
    </div>
  )
}
