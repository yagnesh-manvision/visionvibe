import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowIcon } from './Icons'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'gold' | 'ghost'
  children: ReactNode
  arrow?: boolean
  icon?: ReactNode
}

export function Button({ variant = 'gold', children, arrow, icon, className = '', ...rest }: Props) {
  const external = rest.href?.startsWith('http')
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {arrow && <ArrowIcon className="btn__arrow" width={18} height={18} />}
    </a>
  )
}
