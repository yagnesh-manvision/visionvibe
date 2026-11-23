import mark from '../../assets/brand/logo-mark.svg'
import wordmark from '../../assets/brand/logo-wordmark.svg'
import full from '../../assets/brand/logo-full.svg'

/** Horizontal lockup used in the navigation: monogram + wordmark */
export function LogoLockup({ className = '' }: { className?: string }) {
  return (
    <span className={`logo-lockup ${className}`}>
      <img src={mark} alt="" className="logo-lockup__mark" width={55} height={40} />
      <img src={wordmark} alt="VisionVibe Productions" className="logo-lockup__word" width={168} height={30} />
    </span>
  )
}

/** Stacked primary logo, as supplied by the brand */
export function LogoFull({ className = '', width = 260 }: { className?: string; width?: number }) {
  return (
    <img
      src={full}
      alt="VisionVibe Productions"
      className={className}
      width={width}
      height={Math.round((width * 260.8) / 499.6)}
    />
  )
}

