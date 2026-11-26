import { contact, forms } from '../config/site'

export type FormResult = 'sent' | 'mail-app'

/**
 * Sends a form. With a configured endpoint the data is POSTed as JSON; otherwise the
 * visitor's email app opens with everything pre-filled, addressed to the events inbox.
 */
export async function submitForm(subject: string, fields: Record<string, string>): Promise<FormResult> {
  if (forms.endpoint) {
    const res = await fetch(forms.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject, ...fields }),
    })
    if (!res.ok) throw new Error(`Form service responded ${res.status}`)
    return 'sent'
  }

  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mail-app'
}
