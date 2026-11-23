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
| Instagram / Facebook / YouTube URLs, contact email, location, nav | `src/config/site.ts` |
| Upcoming & past events | `src/config/site.ts` (`upcomingEvents`, `pastEvents`) |
| Photography (Unsplash IDs → swap for your own) | `src/config/images.ts` |
| Colours, fonts, spacing tokens | top of `src/index.css` (`:root`) |
| Logo (vector, extracted from the brand PDF) | `src/assets/brand/` |

Sections live in `src/components/` (one component each); shared pieces
(Button, Photo, Reveal, Logo, Icons) live in `src/components/ui/`.
