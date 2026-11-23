import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, intro, align = 'left' }: Props) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <Reveal as="p" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" className="display-2" delay={80}>
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" className="lede" delay={160}>
          {intro}
        </Reveal>
      )}
    </header>
  )
}
