import { useState, type FormEvent } from 'react'
import { photos } from '../config/images'
import { contact, social } from '../config/site'
import { submitForm } from '../lib/forms'
import { PageHero } from '../components/PageHero'
import { FormStatus, type FormState } from '../components/FormStatus'
import { Reveal } from '../components/ui/Reveal'
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, SocialIcon } from '../components/ui/Icons'

const enquiryTypes = ['Tickets', 'Artist booking', 'Sponsorship', 'Venue', 'Other']
const THANKS = 'Thanks for reaching out. Our team will get back to you within two business days.'

export function ContactPage() {
  const [state, setState] = useState<FormState>('idle')

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = new FormData(form)
    if (data.get('website')) return setState('sent') // honeypot: bots fill hidden fields
    const get = (k: string) => String(data.get(k) ?? '').trim()
    setState('sending')
    try {
      const result = await submitForm(`Website enquiry: ${get('type')} from ${get('name')}`, {
        Name: get('name'),
        Email: get('email'),
        Phone: get('phone'),
        'Enquiry type': get('type'),
        Message: get('message'),
      })
      setState(result)
      if (result === 'sent') form.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s <span className="gold-text">talk.</span>
          </>
        }
        intro="Planning an event, representing an artist, or interested in sponsorship? We would love to hear from you."
        photo={photos.handsUp}
      />

      <section className="section contact">
        <div className="container contact__grid">
          <Reveal>
            <form className="form form--panel" onSubmit={onSubmit}>
              <h2 className="contact__panel-title">Send us an enquiry</h2>
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
                  <span>Enquiry type</span>
                  <select name="type" required defaultValue="">
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {enquiryTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="field field--full">
                  <span>Message</span>
                  <textarea name="message" rows={6} required />
                </label>
              </div>
              <input className="form__hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className="btn btn--gold form__submit" type="submit" disabled={state === 'sending'}>
                <span>{state === 'sending' ? 'Sending…' : 'Send Message'}</span>
                <ArrowIcon className="btn__arrow" width={18} height={18} />
              </button>
              <FormStatus state={state} thanks={THANKS} />
            </form>
          </Reveal>

          <Reveal className="contact__panel" delay={150}>
            <h2 className="contact__panel-title">Get in touch</h2>
            <div className="contact__details">
              <a href={`mailto:${contact.email}`}>
                <MailIcon width={18} height={18} /> {contact.email}
              </a>
              <a href={contact.phoneHref}>
                <PhoneIcon width={18} height={18} /> {contact.phone}
              </a>
              <span>
                <PinIcon width={18} height={18} /> {contact.address}
              </span>
            </div>
            <div className="contact__social">
              {social.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <SocialIcon name={s.key} />
                </a>
              ))}
            </div>
            <iframe
              className="contact__map"
              title={`Map: ${contact.address}`}
              src={contact.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
