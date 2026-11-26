import { contact } from '../config/site'
import type { FormResult } from '../lib/forms'

export type FormState = 'idle' | 'sending' | FormResult | 'error'

/** Message shown under a form after it has been submitted. */
export function FormStatus({ state, thanks }: { state: FormState; thanks: string }) {
  if (state === 'sent') {
    return (
      <p className="form__status form__status--ok" role="status">
        {thanks}
      </p>
    )
  }
  if (state === 'mail-app') {
    return (
      <p className="form__status form__status--ok" role="status">
        Your email app should now open with your message ready to go. Just press <strong>Send</strong>.{' '}
        {thanks} If nothing opened, email us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    )
  }
  if (state === 'error') {
    return (
      <p className="form__status form__status--error" role="alert">
        Sorry, something went wrong sending your message. Please try again or email us at{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    )
  }
  return null
}
