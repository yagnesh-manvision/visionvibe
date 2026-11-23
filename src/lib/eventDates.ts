import type { EventDetails } from '../config/events'

/** Format an event timestamp in the venue's own time zone */
export const formatInZone = (iso: string, timeZone: string, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-AU', { timeZone, ...opts }).format(new Date(iso))

export const eventDay = (e: EventDetails) => formatInZone(e.start, e.timeZone, { day: '2-digit' })
export const eventMonthYear = (e: EventDetails) =>
  formatInZone(e.start, e.timeZone, { month: 'short', year: 'numeric' })
export const eventLongDate = (e: EventDetails) =>
  formatInZone(e.start, e.timeZone, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
export const eventTime = (iso: string, e: EventDetails) =>
  formatInZone(iso, e.timeZone, { hour: 'numeric', minute: '2-digit', hour12: true }).toUpperCase()

const icsStamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
const icsEscape = (s: string) => s.replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\n/g, '\\n')

/** Download an .ics file so visitors can add the event to any calendar app */
export function downloadIcs(e: EventDetails, pageUrl: string) {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//VisionVibe Productions//Events//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${e.slug}@visionvibe`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(new Date(e.start))}`,
    `DTEND:${icsStamp(new Date(e.end))}`,
    `SUMMARY:${icsEscape(`${e.title} — VisionVibe Productions`)}`,
    `DESCRIPTION:${icsEscape(`${e.summary}\n\n${pageUrl}`)}`,
    `LOCATION:${icsEscape(`${e.venue}, ${e.city}`)}`,
    `URL:${pageUrl}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }))
  const a = Object.assign(document.createElement('a'), { href: url, download: `${e.slug}.ics` })
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
