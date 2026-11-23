import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  style?: CSSProperties
}

/** Fades + lifts its children into view once, when scrolled into the viewport. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
