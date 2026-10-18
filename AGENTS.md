# Boreal Clean — landing page

Single-page marketing site (Brazilian Portuguese) for Boreal Clean, an upholstery and air-conditioner evaporator cleaning company. Its only conversion goal is opening a WhatsApp chat.

## Structure

- `src/routes/index.tsx` — the whole landing page. `WHATSAPP_NUMBER` / `WHATSAPP_DISPLAY` constants at the top drive every CTA; `whatsappLink()` builds `wa.me` URLs with a prefilled message. Content arrays (`services`, `benefits`, `steps`, `faqs`) live in the same file.
- `src/routes/__root.tsx` — document shell, `lang="pt-BR"`, SEO metadata, Google Fonts (Bricolage Grotesque for display, DM Sans for body).
- `src/styles.css` — Tailwind 4 `@theme` palette (night/deep/ice/frost/glacier/aurora + WhatsApp greens) and small animations (aurora blobs, CTA pulse) that respect `prefers-reduced-motion`.
- `public/img/` — AI-generated photos. Always reference them through the Netlify Image CDN via the `img(file, width)` helper, never the raw PNGs.

## Conventions and decisions

- All copy is in Portuguese; keep it that way.
- No backend, forms, or storage — leads go to WhatsApp.
- Avoid unverifiable claims (years in business, client counts, testimonials, service area) until the owner provides real data. The service area is intentionally not stated.
- The service cards each send a service-specific WhatsApp message.
