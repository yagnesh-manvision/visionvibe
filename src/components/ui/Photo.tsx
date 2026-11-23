import type { ImgHTMLAttributes } from 'react'
import { photoSrcSet, photoUrl, type Photo as PhotoT } from '../../config/images'

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  photo: PhotoT
  /** CSS `sizes` hint so the browser picks the right resolution */
  sizes: string
  priority?: boolean
  maxWidth?: number
}

export function Photo({ photo, sizes, priority, maxWidth, alt, className = '', ...rest }: Props) {
  return (
    <img
      src={photoUrl(photo.id, 1200)}
      srcSet={photoSrcSet(photo.id, maxWidth)}
      sizes={sizes}
      alt={alt ?? photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`photo ${className}`}
      {...rest}
    />
  )
}
