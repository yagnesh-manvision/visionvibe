import { useState, type FormEvent } from 'react'
import { submitForm } from '../lib/forms'
import { Reveal } from './ui/Reveal'
import { ArrowIcon } from './ui/Icons'
import { FormStatus, type FormState } from './FormStatus'

const THANKS = 'Thanks for joining the list. We’ll be in touch with show announcements and early-bird offers.'

export function Subscribe() {
  const [state, setState] = useState<FormState>('idle')

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const data = new FormData(ev.currentTarget)
    if (data.get('website')) return setState('sent') // honeypot: bots fill hidden fields
    const name = String(data.get('name') ?? '').trim()
    setState('sending')
    try {
      const result = await submitForm(`Subscribe: ${name}`, {
        Form: 'Mailing list sign-up',
        Name: name,
        Email: String(data.get('email') ?? '').trim(),
        Phone: String(data.get('phone') ?? '').trim(),
        City: String(data.get('city') ?? '').trim(),
      })
      setState(result)
    } catch {
      setState('error')
    }
  }

  return (
    <section id="subscribe" className="section subscribe" aria-labelledby="subscribe-title">
      <div className="container subscribe__inner">
        <div>
          <Reveal as="p" className="eyebrow">
            Stay in the loop
          </Reveal>
          <Reveal as="h2" className="display-2" delay={80}>
            <span id="subscribe-title">
              Be the <em className="gold-text">first to know.</em>
            </span>
          </Reveal>
          <Reveal as="p" className="lede" delay={160}>
            Join our list for show announcements, early-bird tickets and exclusive offers.
          </Reveal>
        </div>

        <Reveal delay={200}>
          <form className="form form--panel" onSubmit={onSubmit}>
            <div className="form__grid">
              <label className="field">
                <span>Name</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="field">
                <span>City</span>
                <input name="city" autoComplete="address-level2" />
              </label>
            </div>
            <input className="form__hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button className="btn btn--gold form__submit" type="submit" disabled={state === 'sending'}>
              <span>{state === 'sending' ? 'Sending…' : 'Subscribe'}</span>
              <ArrowIcon className="btn__arrow" width={18} height={18} />
            </button>
            <FormStatus state={state} thanks={THANKS} />
          </form>
        </Reveal>
      </div>
    </section>
  )
}
