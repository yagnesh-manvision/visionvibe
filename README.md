# VisionVibe Productions — website

Static marketing site built with Vite + React + TypeScript. No backend.

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Social links, contact details, upcoming show, nav pages, form endpoint | `src/config/site.ts` |
| Photography (Unsplash placeholders → swap for Mastis show photos) | `src/config/images.ts` |
| Colours, fonts, spacing tokens | top of `src/index.css` (`:root`) |
| Logo (vector, extracted from the brand PDF) | `src/assets/brand/` |

Pages live in `src/pages/` and are routed by hash (`#/about`, `#/events`, `#/services`,
`#/contact`). Sections live in `src/components/`; shared pieces (Button, Photo, Reveal,
Logo, Icons) live in `src/components/ui/`.

## Forms

The enquiry form (Contact) and the mailing-list form (Home / Upcoming Events) go through
`src/lib/forms.ts`. While `forms.endpoint` in `site.ts` is `null`, submitting opens the
visitor's email app with the message pre-filled to events@visionvibe.com.au. Set an
endpoint (Formspree, Web3Forms, Netlify Forms…) to send directly from the site.

## Waiting on content (from the brief)

- Our Shows page and testimonials: past-show details, photos, quotes (Ravi)
- Gallery page: 12–20 photos, 2–3 videos (Ravi)
- Home stats bar: real figures (Ravi)
- Founder portraits, Ravi's show count / artists / cities
- YouTube and TikTok links (icons are ready; add to `social` in `site.ts`)
- Artist name, venues and tickets for the May 2027 show
