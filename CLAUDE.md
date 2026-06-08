# Apexion Technologies — Website Project Guide

IT solutions studio in Kathmandu, Nepal (new company, founded 2026). Founder: **Subarna Katwal**.
This file is the source of truth for design + content decisions. Read it before editing or adding pages.

## Files
- `index.html` — the entire homepage (single file: inline `<style>` + inline `<script>`, no build step).
- `CLAUDE.md` — this guide.
- `assets/` — all images:
  - `founder.png` — founder portrait, bg removed, teal circular backdrop, mirrored (used in quote band).
  - `apexion-logo.png` / `.jpg` — full lockup (mark + "Apexion"), 1512×512. PNG transparent, JPG white bg.
  - `apexion-icon.png` / `.jpg` — mark only, 512×512.
  - `favicon.ico` (16/32/48/64) + `apple-touch-icon.png` (180) — wired into `<head>`.
- Brand logo = dark `#0c1b18` rounded square + white A-peak, Manrope-bold wordmark. This is the official logo (user confirmed). Regenerate from the A-peak SVG path if needed.
- Open by double-clicking `index.html` or `start index.html`. No server needed.

## What the site is
One-page marketing site for an IT solutions studio. Honest positioning for a **brand-new** company — no fabricated proof.

---

## Design system (KEEP CONSISTENT on every new page)

### Inspiration
Modeled on **bajratechnologies.com** (user loves it): clean white, simple, no fluff, centered hero, "Contact us" split off as its own button, sans-serif UI, generous spacing.

### Colors (CSS vars in `:root`)
- Background: white `#ffffff`; soft section bg `#f6f8fa`.
- Headings ink `#141c26`; body `#4a5663`; muted `#8b95a1`; lines `#e8ebef`.
- **Accent = deep teal-GREEN** `--amber: #0f766e`, hover `--amber-600: #0b5c55`, tint `--amber-50: #e8f3f1`.
  - NOTE: the accent CSS vars are historically named `--amber-*` but hold GREEN values. Don't rename without care; just keep them green.
- Dark sections / footer / CTA / quote band: `--ink-deep: #0c1b18`.
- ⛔ **NO amber/orange/yellow anywhere.** User strongly dislikes it. Accent is green only.

### Typography
- **Manrope** (Google Fonts) for everything. Headings 700–800, tight letter-spacing (`-.02em`). No serif (Georgia only used for the big decorative quote-mark glyph).

### Logo
- Mark = **dark square** (`--ink-deep`) with a white **A-peak SVG** (an angular "Λ/A" with NO crossbar): `path d="M12 3 4 19h4l4-9 4 9h4L12 3Z"`. Next to wordmark "Apexion". User loves this mark — do not change it.

### Writing style (IMPORTANT)
- **No em-dashes (—) or double hyphens** in copy. They read as "AI-written." Use commas, periods, colons, or "!" instead. (Short en-dash in numeric ranges like "1–3 weeks", "NPR 25k–150k" is fine.)
- Plain, confident, concrete. No flowery / "AI-slop" phrasing.

### Trusted-by logos
- Coding stacks only (no WordPress/Shopify/OpenAI): React, Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Python, Vercel. Via cdn.simpleicons.org, grayscaled.

### Width / containers
- Default container `.wrap` = 1200px centered. **`.wrap.wide` = 1480px** (4% side padding) for full-bleed-feeling feature sections on big screens (user dislikes everything boxed/centered).
- `wide` is applied to: homepage stats, about, services, why, industries; and every service-page subhero. Text-heavy blocks (FAQ, contact form, legal `.doc`) stay at 1200 for readability.
- Services grid (`.svc-grid`) is **3 columns** on desktop (→2 at ≤940px, →1 at ≤680px).

### Shape / depth
- Rounded corners (`--r-md/lg/xl` = 14/20/28px). Soft shadows only (`--sh-1/2`). Pill buttons (`border-radius:100px`).
- ⛔ **No neon / glow.** Removed yellow glow from CTA. Keep dark panels solid. Brand-green button shadow is OK and subtle.

---

## Components & patterns
- **Nav:** sticky, white, logo left, links centered, "Contact us" as a dark pill button far-right (flips green on hover). Subtle border/shadow appears on scroll.
- **Hero:** CENTERED, no image. Rotating pill ("We bring `<word>` to life") + big two-line rotating headline (line 2 green). Single primary CTA + ghost CTA. Hero sits in a card with the animated border-highlight on hover. Rotation interval = 4s.
- **`.hl` animated border highlight:** on hover, a green conic-gradient border sweeps around (uses `@property --hl-a`). Applied to service cards + hero card. This effect is a keeper — reuse it for interactive cards.
- **Stats strip:** promise-based, honest for a brand-new shop (0 hidden fees, 1:1 direct no middleman, free first consultation, 100% yours no lock-in). No fake project/client counts, no reply-time guarantee we can't keep, no founding-year/service-count brag.
- **Cards** (`.card`, `.svc`): white, 1px border, lift + shadow on hover.
- **Why Apexion tabs:** People / Process / Technology. **Auto-cycles every 3.5s once scrolled into view**, with fade; stops on click or hover (then manual). This signals they're clickable — keep this behavior.
- **Founder quote band:** dark band, big quote, green-highlighted phrase, circular `founder.png` + "Subarna Katwal, Founder".
- **Chatbot:** fixed bubble, Groq-powered (see below), offline keyword fallback, booking form, typing dots.
- All motion respects `prefers-reduced-motion` and stays minimal (1–2 things per view).

---

## What the user LIKES / DISLIKES (hard-won — don't relearn)
LIKES: Bajra-style clean white look; the dark-square white A-peak logo; deep-green accent; centered rotating hero; the hover border-highlight; auto-cycling tabs; honest tone; founder quote with real photo.

DISLIKES / REJECTED (do NOT bring back):
- Amber/orange/yellow, and any neon/glow.
- 3D Three.js hero (spinning globe; connected-network with moving "balls"/packets) — hated the moving balls + mouse parallax.
- Mouse-follow / parallax interactions.
- Fake stats, fake testimonials with invented names, fake/stock team photos.
- Flowery serif poetry headlines; "AI-slop" gradient look.
- Random gif/photo strips in the hero.

---

## Content rules
- Honest for a new company: no invented metrics, clients, reviews, or capabilities. Use written guarantees instead (fixed quotes, on-time-or-we-fix, you own everything, real WhatsApp support).
- Services (4 outcome areas → 6 service cards): Web Development, Custom Software, SEO & Google Business, Digital Ads, Automation & AI, Cloud/Hosting/Support. Also Hotel Solutions package.
- Pricing ranges (NPR, "fixed quote after a call"): websites 25k–150k+, SEO 8k–25k/mo, automation 15k–50k, AI chatbots 20k–60k, hotel 30k–100k+.
- Contact: WhatsApp wa.me/977, hello@apexion.com.np, Kathmandu. Reply within 24h.
- Nepal payments: only eSewa/Khalti/Fonepay work for receiving (no Stripe/PayPal payout to Nepal).

---

## Chatbot / Groq
- Widget calls Groq (`llama-3.3-70b-versatile`) with a STRICT system prompt: only Apexion topics; refuses essays/code/general knowledge/off-topic in one line and steers back; 1–3 sentence replies; no inventing facts; nudges booking.
- Key slot: `var GROQ_KEY = ''` in the chatbot `<script>`. Empty = safe offline keyword mode.
- ⚠ **SECURITY:** a key in this client file is visible in page source and can be stolen/abused. The old hardcoded key was removed — revoke it at console.groq.com. **Before going public, move the call to a backend proxy** (Vercel serverless function holds the key; widget fetches that endpoint). Use a usage-limited key.

---

## TODO / next steps
- ✅ DONE — **Services subpages** built (6, one per homepage service card): `services/web-development.html`, `custom-software.html`, `seo.html`, `digital-ads.html`, `automation-ai.html`, `hosting-support.html`. Each has: breadcrumb, subhero (problem→solution + framed icon art), "what's included" (6 cards), 4-step process, fixed-price pricing card, FAQ accordion, CTA, footer, chatbot. Homepage service cards + footer "Services" column now link to these (with a hover "Learn more →" affordance on each card). Optional future page: `hotel-solutions.html` (hotel package, not a homepage card yet).
- ✅ DONE — Shared CSS extracted to `styles.css` and shared JS to `app.js` (nav-scroll, scroll-reveal, FAQ accordion, mobile burger, chatbot). Every page links both. `index.html` keeps only its page-specific inline JS (hero rotation + why tabs). **When editing design tokens/components, edit `styles.css` once — it applies everywhere.**
- Groq proxy before launch (chatbot key still client-side, currently empty/offline).
- **Before launch, replace placeholder domain `https://apexion.com.np`** in canonical + Open Graph + Twitter + JSON-LD tags (every page `<head>`) and the OG image URL with the real domain (OG needs absolute URLs).
- **Social links are placeholders (`href="#"`)** in every footer `.socials` (Facebook, Instagram, LinkedIn, X). Swap in real URLs when pages exist.
- **Registration number + PAN are placeholders `XXXXXXXX` / `XXXXXXXXX`.** Appear in (a) every footer copyright line (`.foot-bottom`, all 8 pages) and (b) the homepage FAQ "Are you a registered company?" answer. Replace with the real Company Reg. No. and PAN once registration is complete. ⚠ If the company is NOT yet registered at launch, remove these / change wording to "registration in progress" — do not display fake numbers.
- Optional: add `sitemap.xml` + `robots.txt` and a custom 404 page.

## ⏳ PENDING (before launch)
- **Contact form access key.** Homepage `#contact-form` now sends **directly to the inbox via Web3Forms** (AJAX, no redirect, inline success message; `app.js` handles it). Needs a free key: sign up at web3forms.com with hello@apexion.com.np, paste it into `value="YOUR_WEB3FORMS_ACCESS_KEY"` in `index.html`. Until set, the form fails gracefully and shows WhatsApp/email fallback. (Submissions land as email; switch provider or add a backend later if volume grows.)
- **Real images.** Site currently uses inline SVG illustrations (framed-icon hero art on service pages, abstract bar chart in Why panel) + the real `founder.png`. Replace/augment with real photos: team, office/Kathmandu, sample work/project screenshots, and proper hero imagery. Service-page hero art (`.subhero-art`) and homepage are the main slots. Optimise (WebP, lazy-load) when added.

## ✅ Visual polish DONE (light color + basic animation)
- Soft single-tone green radial wash behind heroes (`.hero::before`, `.subhero::before/::after`, ~0.06–0.10 opacity, NOT neon/glow). `--bg-soft` nudged to faint green-grey `#f3f7f6`.
- Micro-interactions: card/service/step icons scale+tilt on hover; animated green underline on nav links; gentle float on service-page hero art (`@keyframes floaty`).
- Stats count-up on scroll (`app.js`, leading number animates, suffix kept, year skipped).
- All motion gated by `prefers-reduced-motion` (existing global reset + JS `reducedMotion` check). Stays within: green-only, no amber, no AI-slop gradients.

## 🚀 LAUNCH CHECKLIST (do when domain is live)
0. **Set up Web3Forms** for the contact form: sign up at web3forms.com with hello@apexion.com.np, get the free access key, paste it into `value="YOUR_WEB3FORMS_ACCESS_KEY"` in `index.html` `#contact-form`. Test a submission lands in inbox. (Form sends direct to inbox, no redirect; fails to WhatsApp/email fallback until key is set.)
1. Find-replace placeholder domain `https://apexion.com.np` → real domain in all `<head>` canonical/OG/Twitter/JSON-LD + the `og:image` URLs.
2. Replace footer + FAQ **Reg. No. `XXXXXXXX`** and **PAN `XXXXXXXXX`** with real numbers (or remove if not yet registered).
3. Replace 4 social `href="#"` placeholders with real profile URLs.
4. Replace temp WhatsApp/phone `9703901454` if a permanent number is issued (currently `wa.me/9779703901454`, `tel:+9779703901454`).
5. Add `sitemap.xml` + `robots.txt`; submit to Google Search Console.
6. Move chatbot Groq call to a backend proxy + set a usage-limited key (currently `GROQ_KEY=''`, offline mode).
7. Set up Google Business Profile (Maps).

## DONE (full audit pass, 2026-06-05)
- **Phone/WhatsApp wired everywhere:** temp number 9703901454 → `wa.me/9779703901454`, `tel:+9779703901454`, displayed as "+977 9703901454". (Was placeholder `wa.me/977`.)
- **Contact form** on homepage (`#contact`): name/phone/service/message → composes a WhatsApp message and opens chat (no backend needed). Handler in `app.js` (`#contact-form`, fields `cf-name/cf-phone/cf-service/cf-msg`). Plus an info card (phone, email, location, hours) and email fallback.
- **Homepage FAQ** accordion section (`#faq`) added before contact; service subpages already had their own FAQ.
- **Hotel Solutions** is now a real page (`services/hotel-solutions.html`) + 7th homepage service card + footer link (fixes the chatbot that offered it with no page). Stats strip "10+"→"7+".
- **Privacy Policy** page (`privacy.html`, root) linked in every footer bottom (`.foot-legal`). Needed for FB/Google ads.
- **SEO/share:** Open Graph + Twitter cards + theme-color + canonical on all pages; LocalBusiness/ProfessionalService JSON-LD on homepage, per-service `Service` JSON-LD on each subpage.
- **Footers** rebuilt site-wide: social icon row, `tel:` link, FAQ link, Hotel Solutions link, Privacy link.
- **Design fixes:** chat-button shadow amber→green (was `rgba(245,158,11,...)`, violated no-amber rule); mobile nav now a real toggle dropdown (open/close, styled, closes on link tap) via `app.js`; active-page marker (`.nav-links a.active`) on the Services link in every subpage nav.

## Conventions
- Single-file HTML for now; inline styles/scripts; vanilla JS (no framework); ES5-ish syntax used.
- External deps via CDN: Google Fonts (Manrope), simpleicons (trusted-by logos). Needs internet; degrade gracefully offline.
