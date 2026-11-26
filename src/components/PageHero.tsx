import type { ReactNode } from 'react'
import type { Photo as PhotoT } from '../config/images'
import { pagePath } from '../config/site'
import { Photo } from './ui/Photo'

interface Props {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  photo: PhotoT
}

/** Header band at the top of every inner page. */
export function PageHero({ eyebrow, title, intro, photo }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" aria-hidden="true">
        <Photo photo={photo} sizes="100vw" priority alt="" />
        <div className="page-hero__overlay" />
        <div className="grain" />
      </div>
      <div className="container page-hero__content">
        <nav className="page-hero__crumbs" aria-label="Breadcrumb">
          <a href={pagePath('home')}>Home</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <h1 className="page-hero__title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
    </section>
  )
}
