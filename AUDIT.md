# Apexion Technologies — Full Website Audit (panel of 12 experts)
Date: 2026-06-05. Auditing local static build at `Desktop/Apexion Technologies/`.
Context: brand-new company (founded 2026), honest-positioning brochure site, no backend, not yet on a domain.

> HOW TO USE: this is the master tracking doc. Work top→bottom. Check items off. "STATUS" tags: ❌ not done · ⏳ pending external (domain/key/photos) · ✅ done. Roadmaps at bottom = the ordered plan.

---

## SECTION 1 — BUSINESS REVIEW  → 68/100
- Business = IT solutions studio, Kathmandu. Web dev, custom software, SEO, ads, automation/AI, hosting, hotel solutions.
- Message = clear. Hero + "what we do" read fast. Positioning honest (no fake proof). Good for trust, weak for desire.
- Target customer = Nepali SMBs (hotels, retail, clinics, schools). Stated well in Industries.
- Would visitor trust? Partly. Looks professional, but ZERO proof (new co) → doubt.
- Would visitor contact? Maybe. CTA + WhatsApp present, low friction. But no urgency/reason-to-act-now.
- Missing info: real address (only "Kathmandu"), map, hours detail, team faces, any past work, registration number (placeholder), business hours, response SLA proof.
- Creates doubt: founded 2026 + 1 founder photo + no portfolio + no reviews + placeholder reg/PAN + "wa.me" generic.
- Differentiation weak: "one team, fixed quote, you own everything" = good but every shop says similar. No sharp wedge.

## SECTION 2 — UI/UX REVIEW  → 80/100
GOOD: clean Bajra-style, consistent green accent, Manrope, good spacing, hover micro-motion, count-up, wide sections, mobile menu works, reduced-motion gated, breadcrumb/nav overlap fixed, 3-col services.
ISSUES:
- Accessibility: chat widget good aria, but color contrast of `--muted #8b95a1` on white ~3.0:1 → fails WCAG AA for small text. Eyebrow/stat labels risk.
- Focus states: no visible `:focus-visible` ring on links/buttons/inputs → keyboard users lost. CRITICAL a11y.
- Form labels present ✓. But no inline validation messaging beyond `alert()`.
- Subhero hero-art same framed-icon on all 7 pages → repetitive, no real imagery.
- No skip-to-content link.
- Tablet (768–940) → services 2-col ok, but `.wrap.wide` heroes can feel sparse.
- Buttons: green shadow uses old amber rgba name but value now green ✓. Fine.
- No 404 page → broken link = browser default ugly.
- No loading/empty states (chatbot ok).
- Hero centered + subpages left = slight inconsistency (intentional, acceptable).

## SECTION 3 — FEATURE COMPLETENESS  (what pro IT site needs)
CRITICAL (missing):
- Portfolio / Work — none. Biggest gap for an IT studio. Even 2–3 demo/sample builds.
- Case studies — none.
- Testimonials / reviews — none.
- About Us page (depth) — only homepage blurb + founder quote. No team, no story page.
- Terms & Conditions — missing (legal).
- Real contact page w/ map — contact is homepage section only.
HIGH:
- Team page / faces — trust killer absent.
- Pricing page (transparent) — only ranges in FAQ/subpages.
- Cookie policy + cookie consent banner (needed once analytics/ads pixels added).
- Blog / insights — sells SEO, has no content engine. Hurts own SEO + authority.
- Google Business Profile (off-site, but link/embed).
MEDIUM:
- Careers page (hiring signal = growth).
- Refund/guarantee policy page (you promise "on-time or we fix" → formalize).
- Newsletter / lead magnet (free audit form, checklist PDF).
- Live chat → WhatsApp deep-link widget (have bot; add direct WA button).
- Multi-language (Nepali) toggle.
LOW:
- Press/media kit, partners page, status page, changelog.
MISSING INTEGRATIONS/AUTOMATION:
- Analytics (GA4 / Plausible) — NONE. Flying blind.
- Meta Pixel / Google Ads tag — needed for the ads they sell.
- Email autoresponder on form submit.
- CRM capture (HubSpot free / Notion / Sheets).
- Calendar booking (Calendly/Cal.com) for "free consultation".
- Sitemap.xml + robots.txt.

## SECTION 4 — CONVERSION (CRO)  → 58/100
- Lead capture: 1 form (homepage) + WhatsApp + email + chatbot. Decent paths.
- CTA visibility: hero CTA good. But subpages bottom-heavy; no sticky/mid-page CTA on long pages.
- Trust signals: weak (no proof) → kills conversion most.
- Social proof: ZERO. No reviews, counts, logos, "X businesses helped".
- Why visitors leave: no proof, no urgency, no pricing certainty, no portfolio to judge quality.
- Why not contact: unsure if legit/experienced; no calendar to book instantly; phone number temp.
- Fixes: add testimonials (even 2–3 early), add "book a free call" calendar, add sticky "Get quote" button, add risk-reversal ("free quote, no obligation, reply in 24h") near every CTA, add exit-intent or lead magnet (free website audit), add WhatsApp floating button (separate from bot).

## SECTION 5 — TRUST & CREDIBILITY  → 45/100
- Testimonials: none. Reviews: none. Certifications: none. Client logos: none (only tech-stack logos). Awards: none.
- Company registration: placeholder `XXXXXXXX` / PAN `XXXXXXXXX`.
- Team transparency: 1 founder photo+quote only. No team, no LinkedIn.
- Contact: email + temp WhatsApp + "Kathmandu". No physical address, no map, no landline.
- Legitimacy: privacy page ✓ (good), but no T&C, no real reg number, placeholder domain.
- Would I trust w/ $10k project? Not yet. Looks clean but unproven. Need: 1–2 real case studies, 3+ named testimonials, real reg number, real address+map, team faces, real domain+SSL, business email (not gmail shown anywhere).
- Every credibility issue: no proof of work, no reviews, no team, placeholder legal IDs, temp phone, generic wa.me, no SSL yet (file://), founded-this-year with nothing shipped shown.

## SECTION 6 — SEO  → 70/100 (foundation strong, execution blocked)
GOOD: unique titles/descriptions per page, semantic headings (single h1), OG+Twitter cards, canonical, JSON-LD (ProfessionalService + per-service Service), clean URLs, internal linking (cards/footer/breadcrumb), theme-color, lang=en.
BAD/MISSING:
- Placeholder domain `https://apexion.com.np` in ALL canonical/OG/JSON-LD → invalid until real domain.
- No sitemap.xml, no robots.txt.
- No real images → no image SEO, no og:image actually rendering (points to logo only).
- og:image = logo, not a designed 1200×630 social card.
- No Google Business Profile (huge for "IT company Kathmandu" local).
- No blog → no keyword surface, no long-tail.
- JSON-LD `sameAs` empty (no socials).
- No hreflang (if Nepali added).
- Headings: some sections use `<h2>` w/ `<em>` color — fine. h3/h4 hierarchy ok.
- Local SEO: NAP not consistent (no full address). Add LocalBusiness w/ geo + opening hours.
QUICK WINS: real domain replace, sitemap+robots, GBP, designed og-image, fill sameAs.
LONG: blog/content cadence, backlinks, case-study pages targeting "[service] Nepal".

## SECTION 7 — PERFORMANCE  → 85 now / ~96 potential
GOOD: light, mostly inline SVG (no img weight yet), 1 CSS + 1 JS file, system+Manrope font w/ preconnect, lazy on founder img, reduced-motion.
ISSUES:
- CSS + JS unminified (fine now, minify for prod).
- Fonts from Google CDN (extra DNS/connect) → self-host Manrope subset for speed.
- simpleicons.org logos = 8 external requests, render-block-ish (loading=lazy ✓). Self-host or sprite.
- No `font-display` control beyond Google default (swap ok).
- Once REAL images added → must WebP/AVIF + width/height + lazy or LCP tanks. Biggest future risk.
- No caching headers / compression (host-dependent, set on deploy).
- backdrop-filter blur on nav = paint cost on low-end Android. Acceptable.
- CLS risk: count-up changes text width ("100"→pad) minor; stats have fixed layout ok. Hero rotating headline can shift — watch.
- No CDN (deploy on Vercel/Netlify/Cloudflare fixes).

## SECTION 8 — SECURITY  → 70/100, risk LOW-MED (static)
Attack surface small (static, no DB, no auth, no uploads). But:
- HTTPS/SSL: not yet (file://). MUST on deploy. Host gives free.
- Security headers: none set (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy). Add via host config (Vercel `vercel.json` / Netlify `_headers`).
- XSS: chatbot uses `textContent` (safe) ✓; FAQ/why use innerHTML w/ static strings (safe). Contact form FormData → Web3Forms. Low risk. If ever inject user input to innerHTML → sanitize.
- CSRF: no sessions → N/A.
- Injection: no DB/server → N/A now. Web3Forms handles spam (honeypot added ✓).
- API security: Web3Forms access key is PUBLIC by design (domain-restricted on their side) — ok, but enable domain allowlist in their dashboard. Groq key slot EMPTY ✓ (was hardcoded historically — REVOKE old key at console.groq.com if not done).
- Rate limiting / DDoS: host/CDN responsibility (Cloudflare). Form spam → Web3Forms + add hCaptcha.
- Sensitive data: none stored client-side. ✓
- Error handling: form has try/catch fallback ✓. Chatbot fallback ✓.
FIX: deploy w/ HTTPS + headers + revoke old Groq key + Web3Forms domain lock + add captcha to form.

## SECTION 9 — CODE QUALITY  → 78/100
GOOD: shared styles.css + app.js (DRY), CSS vars design tokens, ES5 vanilla (no build), guarded selectors (`if present`), reduced-motion, semantic HTML, aria labels.
DEBT:
- Nav/footer/chatbot markup DUPLICATED across 9 HTML files → edit one = edit all (error-prone). No templating/includes. Biggest maintainability risk.
- No build step → no minify/bundle/cache-bust.
- Inline styles in a few spots (price-range span styles).
- No component system; scaling to 20 pages = pain.
- No linting/formatting config.
- CSS var naming misleading (`--amber-*` holds green) — documented but trap.
REFACTOR PATH: move to a static site generator (Astro / 11ty / Next static) → layouts + components kill duplication, add build/minify, MDX for blog. Keep current look 1:1.

## SECTION 10 — PRODUCTION READINESS
- 1k/day: fine once on any static host (Vercel/Netlify/Cloudflare Pages). Trivial.
- 10k/day: fine. Static + CDN scales free-tier.
- 100k/day: fine for static assets on CDN. BUT Web3Forms free tier (250 submissions/mo) + Groq (if enabled, rate/cost) = bottlenecks. Chatbot LLM cost uncapped if key added client-side (DANGER).
RISKS:
- No analytics → can't see traffic/conversions.
- No monitoring/uptime alerts.
- No backup/version control (NOT in git!) → 1 disk fail = gone. CRITICAL.
- Form provider single point of failure.
- Client-side LLM key (future) = financial DoS risk → must proxy.
- No staging/preview env.

## SECTION 11 — INVESTOR REVIEW (brutal)
Would NOT invest on this site alone because:
- No traction shown (0 clients, 0 revenue proof, 0 case studies).
- New co (2026) + solo founder visible + no team = key-person risk.
- Brochure site = service business, not scalable product. Low multiple.
- No differentiation / moat. Commodity dev shop in crowded market.
- No metrics (no analytics, no pipeline).
- Placeholder legal/contact = looks unfinished.
- No proof of delivery capability.
FIX BEFORE INVEST: ship 3+ real client projects w/ case studies + testimonials, show revenue/pipeline, build a team page, define a niche/product wedge (e.g. "hotel direct-booking SaaS for Nepal"), add analytics + traction dashboard, register company properly.

## SECTION 12 — COMPETITOR GAP (vs Bajra/Cotiviti-tier/typical agencies)
Competitors have, this lacks:
- Portfolio + case studies w/ metrics.
- Named testimonials + client logos.
- Team page w/ photos + roles + LinkedIn.
- Blog / insights (SEO + authority).
- Detailed About + company story + values + careers.
- Process/methodology page.
- Service-level detail + tech stack per service (partly have).
- Trust badges (ISO, partners, Google Partner, Meta Partner).
- Case-study-driven CTAs.
- Newsletter + content offers.
- Multi-channel proof (Clutch/Google reviews embedded).
- Booking calendar.

## SECTION 13 — ENTERPRISE READINESS  → 30/100
Large corp would NOT sign yet. Blockers:
- No proof of capability/scale (no enterprise case studies).
- No security posture page (no SOC2/ISO/policies, no DPA).
- No SLA/support docs.
- No T&C/MSA, no data processing agreement.
- Solo-founder optics = delivery risk for big contract.
- No NDA/process/onboarding docs.
- No real company verification (placeholder reg).
- No careers/team = looks too small for enterprise.
Enterprise not the right target yet — focus SMB. To unlock enterprise: team, certs, case studies, security/compliance docs, legal contracts.

---

## TOP 50 ISSUES (ranked, highest impact first)
1. Not in git / no version control / no backup. ❌
2. Placeholder domain in all SEO/OG/JSON-LD. ⏳
3. No analytics (GA4/Plausible). ❌
4. No real proof: 0 testimonials. ❌
5. No portfolio/case studies. ❌
6. Web3Forms key not set → form not delivering. ⏳
7. Placeholder Reg.No + PAN. ⏳
8. Temp/generic WhatsApp credibility. ⏳
9. No SSL/HTTPS (not deployed). ⏳
10. No security headers. ❌
11. No sitemap.xml / robots.txt. ❌
12. No Google Business Profile. ❌
13. Old Groq key may be unrevoked. ⏳
14. No real images (SVG placeholders). ⏳
15. No team page / faces. ❌
16. No :focus-visible (keyboard a11y). ❌
17. `--muted` contrast fails WCAG AA. ❌
18. No 404 page. ❌
19. No T&C / cookie / refund pages. ❌
20. No cookie consent (needed w/ pixels). ❌
21. Nav/footer/chatbot duplicated across 9 files. ❌
22. No build/minify/cache-bust. ❌
23. No booking calendar. ❌
24. No email autoresponder on submit. ❌
25. No CRM capture. ❌
26. No Meta Pixel / Google tag (sells ads, can't track). ❌
27. No blog / content engine. ❌
28. No about-depth / story page. ❌
29. No mid-page / sticky CTA on long subpages. ❌
30. No designed og social-card image. ❌
31. Self-host fonts/icons for perf + offline. ❌
32. JSON-LD sameAs empty. ⏳
33. No full NAP address + map. ⏳
34. No real business email config (deliverability). ⏳
35. Social links placeholder `#`. ⏳
36. No uptime monitoring. ❌
37. No staging env. ❌
38. Hero headline rotation CLS risk. ❌
39. Inline styles (price-range). ❌
40. No linting/format config. ❌
41. Web3Forms free 250/mo cap risk. ⏳
42. No captcha on form (spam). ❌
43. No skip-to-content link. ❌
44. simpleicons external requests. ❌
45. No image dimensions set (future CLS). ❌
46. Chatbot LLM future client-key cost risk. ⏳
47. No newsletter/lead magnet. ❌
48. No multilingual (Nepali). ❌
49. No structured pricing page. ❌
50. No process/methodology page. ❌

## TOP 50 MISSING FEATURES
Pages: Portfolio, Case Studies, Testimonials, Team, About (full), Blog, Careers, Pricing, T&C, Cookie Policy, Refund/Guarantee, Process, Contact (full + map), 404, Thank-you page, Nepali version.
Sections: client logos, reviews band, stats-with-proof, "as featured/partners", lead magnet, newsletter, sticky CTA, mid-page CTAs, FAQ schema, comparison table, guarantee band, video intro, founder LinkedIn.
Features: GA4, Meta Pixel, Google tag, cookie consent, Calendly booking, email autoresponder, CRM sync, WhatsApp float button, live chat→WA, search, dark mode (optional), sitemap, robots, RSS (blog), 301 redirects, downloadable proposals/brochure PDF, service quote calculator, multi-step lead form, exit-intent, A/B testing hook, hCaptcha, status page, changelog, partner/affiliate, review-collection flow, schema FAQ/Breadcrumb/Org, GBP embed, map embed, testimonials carousel, portfolio filter, case-study template, blog CMS, careers ATS link.

## TOP 20 SECURITY IMPROVEMENTS
1 Deploy HTTPS. 2 Add CSP. 3 X-Frame-Options DENY. 4 X-Content-Type-Options nosniff. 5 Referrer-Policy. 6 HSTS. 7 Permissions-Policy. 8 Revoke old Groq key. 9 Web3Forms domain allowlist. 10 hCaptcha on form. 11 Cloudflare in front (DDoS/WAF). 12 Subresource Integrity on CDN scripts. 13 Proxy any future LLM key server-side w/ rate limit. 14 Rate-limit form endpoint. 15 Sanitize any future user-rendered HTML. 16 Secure cookie flags (when cookies added). 17 .env for keys (when build added). 18 Dependabot/SCA (when deps added). 19 Disable directory listing on host. 20 Privacy/DPA + breach process docs.

## TOP 20 PERFORMANCE IMPROVEMENTS
1 Deploy on CDN (Vercel/CF Pages). 2 Minify CSS/JS. 3 Self-host Manrope subset. 4 Self-host/sprite icons. 5 WebP/AVIF for real images. 6 width/height on all imgs. 7 lazy-load below-fold imgs. 8 preload hero LCP image. 9 gzip/brotli (host). 10 long cache + hashed filenames. 11 defer non-critical JS. 12 inline critical CSS, async rest. 13 reduce backdrop-filter cost on mobile. 14 font-display swap. 15 remove unused CSS on build. 16 HTTP/2-3 (host). 17 cap CLS (reserve hero headline width). 18 prefetch service pages. 19 image CDN (Cloudinary). 20 Lighthouse CI gate.

## TOP 20 SEO IMPROVEMENTS
1 Real domain everywhere. 2 sitemap.xml. 3 robots.txt. 4 Google Search Console. 5 Google Business Profile. 6 Designed 1200×630 og-image. 7 Fill JSON-LD sameAs. 8 LocalBusiness + geo + hours. 9 FAQ schema on FAQ. 10 BreadcrumbList schema. 11 Blog w/ "[service] Nepal" targets. 12 Case-study pages (keyword rich). 13 Image alt audit. 14 Internal link blog→services. 15 Backlink outreach (local dirs, Clutch). 16 Nepali hreflang version. 17 Unique meta per future page. 18 Speed (Core Web Vitals = ranking). 19 NAP consistency across web. 20 Review schema once reviews exist.

## TOP 20 CONVERSION IMPROVEMENTS
1 Add testimonials. 2 Add portfolio/case studies. 3 Calendly "book free call". 4 Sticky "Get quote" button. 5 WhatsApp float button. 6 Risk-reversal text by CTAs. 7 Lead magnet (free audit/checklist). 8 Mid-page CTAs on subpages. 9 Client logos / "trusted by". 10 Real proof stats. 11 Exit-intent offer. 12 Shorter form (name+phone only option). 13 Thank-you page + next step. 14 Email autoresponder. 15 Pricing transparency page. 16 Urgency ("X slots this month"). 17 Live chat→WhatsApp. 18 Video founder intro. 19 Comparison/why-us table. 20 Multi-step quote form.

## TOP 20 TRUST IMPROVEMENTS
1 Real testimonials (named+photo). 2 Case studies w/ metrics. 3 Team page + faces + LinkedIn. 4 Real reg number + PAN. 5 Real address + Google map embed. 6 Real domain + SSL + pro email. 7 Google reviews embed. 8 Clutch/local-directory profile. 9 Client logos. 10 Guarantee/refund page. 11 T&C + cookie policy. 12 Trust badges/partners. 13 Founder LinkedIn + bio. 14 Phone (landline) + verified WhatsApp Business. 15 "Registered in Nepal" + certificate thumbnail. 16 Years/projects counter (real). 17 Press/mentions. 18 Security/privacy commitments. 19 Live response-time proof. 20 Physical office photos.

---

## ⭐ SMB FOCUS — TRUST + CONVERSION FIRST (the real priority)
Target = Nepali SMBs (hotels, retail, clinics, schools). IGNORE enterprise score (30) — not the customer. Move TRUST (45) + CONVERSION (58); everything else serves those.

TRUST (do first — proof is the #1 SMB blocker):
- T1. 3+ real testimonials, named + photo + business (beta/pilot/friends-of-founder count if real).
- T2. 2–3 portfolio items (label demos "sample build" honestly).
- T3. Team/founder faces + LinkedIn + short bios.
- T4. Real reg number + PAN + real address + Google map embed.
- T5. Real domain + HTTPS + business email (not gmail) + verified WhatsApp Business.
- T6. Client-logos / "trusted by" band (even tools/partners early).
- T7. Guarantee band restated ("fixed quote · on-time or we fix · you own it · reply in 24h").

CONVERSION (do right after trust):
- C1. WhatsApp float button (1-tap, every page) — Nepal converts on WA.
- C2. Calendly/Cal.com "Book free consultation".
- C3. Sticky "Get a free quote" bar + mid-page CTAs on long subpages.
- C4. Risk-reversal line beside every CTA ("free, no obligation, 24h reply").
- C5. Lead magnet: free website/SEO audit form (capture email).
- C6. Web3Forms key live + email autoresponder + thank-you page.
- C7. Per-campaign landing pages (1 service, 1 offer, no nav) for ads.
- C8. GA4 + Meta Pixel (measure what converts; required for the ads you sell).

## ROADMAPS

### 7-DAY (foundation + trust + visibility) — do in order
D1: `git init` + first commit + push to private GitHub (BACKUP first, everything else after). 
D1: Deploy to Vercel/Netlify/Cloudflare Pages → get HTTPS + real URL (use temp `*.vercel.app` if domain not ready).
D2: Buy domain (apexion.com.np or .com) → connect. Find-replace placeholder domain in all canonical/OG/JSON-LD.
D2: Web3Forms key → set + test form delivers. Web3Forms domain allowlist.
D3: GA4 (or Plausible) + cookie consent banner. Add security headers (vercel.json/_headers).
D3: sitemap.xml + robots.txt. Submit Google Search Console + Bing.
D4: Google Business Profile (Kathmandu). Designed 1200×630 og-image.
D4: Real reg number + PAN (or "registration in progress" if not done). Real address + map embed.
D5: Collect + add 3 testimonials (even early/beta clients, friends&family pilots — real, named).
D5: Add 2–3 portfolio/sample items (demo builds count if labeled "sample").
D6: Real images: founder/team photo, 2–3 work screenshots, hero imagery (WebP, sized).
D6: a11y quick wins: :focus-visible ring, fix --muted contrast, skip link, 404 page.
D7: Calendly booking + WhatsApp float button + sticky "Get quote" CTA. Revoke old Groq key. Test everything mobile.

### 30-DAY (depth + lead engine)
- Real About page (story, values, team). Process/methodology page.
- T&C, Cookie Policy, Refund/Guarantee pages.
- Pricing page (transparent tiers).
- Case studies (2–3 detailed, metrics).
- Blog setup + 4 posts ("[service] Nepal" keywords).
- Meta Pixel + Google Ads tag (for the ads service).
- Email autoresponder + CRM (HubSpot free / Sheets).
- Lead magnet (free website audit form / checklist PDF).
- Self-host fonts+icons, minify, Lighthouse 95+.
- FAQ + Breadcrumb schema. Fill sameAs once socials live.
- Collect Google reviews → embed.

### 90-DAY (scale + authority + product)
- Migrate to Astro/11ty (kill markup duplication, add build/CMS/blog).
- Blog cadence (1–2/wk). Backlink outreach. Clutch profile.
- 5+ case studies. Client logos wall.
- Nepali language version.
- Pick a product wedge (e.g. hotel direct-booking SaaS) → start productizing.
- Monitoring (uptime, Lighthouse CI). Staging env.
- Enterprise track: security/compliance docs, certs, MSA/DPA templates.
- Careers page + first hires (kills solo-founder optics).

---

## SCORES
- Overall: 62/100
- Business: 68/100
- UI/UX: 80/100
- SEO: 70/100
- Security: 70/100
- Performance: 85/100
- Trust: 45/100
- Conversion: 58/100
- Enterprise readiness: 30/100

---

## CTO 48-HOUR PLAN (before ad spend) — ranked by ROI
Goal: don't pay for traffic that leaks. Plug funnel + tracking first.
1. **Deploy live w/ HTTPS + real domain** (Vercel + domain). No ads to a file:// / placeholder. [blocker]
2. **Set Web3Forms key + test form** end-to-end. A lead that vanishes = wasted ad rupees. [blocker]
3. **GA4 + Meta Pixel + Google tag.** Can't optimize ads w/o conversion tracking. Highest ROI for paid. [blocker]
4. **WhatsApp float button + Calendly "book free call".** Nepal converts on WhatsApp — make it 1 tap, everywhere.
5. **Add 3 real testimonials + 2 sample works + client logos band.** Proof = the #1 conversion lever for cold ad traffic.
6. **Risk-reversal + sticky CTA** ("Free quote, reply in 24h, no obligation") on hero + sticky bar.
7. **Designed og-image + GBP.** Ad/social shares look legit; local searches find you.
8. **Dedicated landing page per ad campaign** (1 service, 1 offer, 1 CTA, no nav) — converts 2–3× better than homepage.
9. **Real reg number + address + map.** Kills "is this legit?" doubt from paid visitors.
10. **Cookie consent + privacy** (Meta/Google require for ads). Compliance = ads not rejected.
Skip for now: blog, enterprise docs, refactor — zero ad-campaign ROI in 48h.
```

---
TONIGHT'S STATE: audit only (no code changed this session beyond writing this file). All fixes above are NOT yet applied. Resume tomorrow at 7-DAY roadmap D1.
