# Kaizen Academy Thrithala — PRD

## Original Problem Statement
Build a world-class, premium, modern educational institution website for Kaizen Academy Thrithala, comparable to Xylem, PW, Eduport — premium ed-tech startup feel with cinematic motion, conversion focus, multi-page (Home/About/Courses/Contact), Resend-powered admission enquiry form.

## Architecture
- **Frontend**: React 19 (CRA) + Tailwind + Shadcn primitives + Framer Motion + Lenis smooth scroll + custom canvas particle network
- **Backend**: FastAPI on :8001 with `/api` prefix, MongoDB (motor)
- **Email**: Resend (`auth.classvia.in` sender domain, recipient `kaizenacademy5@gmail.com`)
- **Routing**: react-router-dom v7 — `/`, `/about`, `/courses`, `/contact`

## User Personas
- Parents researching coaching for Class 8–12 / CA / commerce / B.Pharm
- Students self-discovering programs and applying
- Visitors connecting via WhatsApp / Instagram / phone

## Core Requirements (Static)
- Premium animated multi-page site
- Admission enquiry form → DB + email
- WhatsApp / Call / Instagram floating actions
- Google Maps embed on Contact
- Mobile responsive
- SEO meta tags

## What's Implemented (16 Jun 2026)
- ✅ Hero with canvas particle-network background + animated counters
- ✅ Glassmorphism sticky navbar with mobile drawer
- ✅ Premium loading screen with gradient logo reveal
- ✅ Scroll progress bar (top)
- ✅ Lenis smooth scrolling sitewide
- ✅ Home: hero, stats, about teaser, 4 course category cards, masonry campus gallery, dark "why choose us" grid, founder section, testimonials slider with dots, social proof cards (Instagram/YouTube/Facebook), full-gradient admission CTA
- ✅ About page: founder section, values grid, animated stats, campus gallery
- ✅ Courses page: filter pills + 4 detailed program cards
- ✅ Contact page: contact details, social, Google Maps embed iframe, admission enquiry form with validation, sonner toasts, success banner
- ✅ FloatingActions FAB (WhatsApp/Call/Instagram) with pulse animation
- ✅ Footer with logo, quick links, programs, contact, social
- ✅ Backend `POST /api/admission-enquiry` → MongoDB insert + Resend email (graceful failure handling)
- ✅ Backend `GET /api/admission-enquiries` admin list endpoint
- ✅ Fonts: Fraunces (display) + Outfit (body)
- ✅ Tested: 100% backend, 100% frontend pass (iteration_1.json)
- ✅ Confirmed: Resend email actually delivered

## Updates (18 Feb 2026)
- ✅ Added `/gallery` page route
- ✅ Removed all AI-generated stock photos; replaced with real Kaizen Academy photos
- ✅ Added 30+ batch photos (Photo 5–9 + multiple WhatsApp batches): cultural events, sports trophies, classroom sessions, campus gatherings
- ✅ New gallery tags added: `Events`, `Activities`, `Videos`
- ✅ Homepage "Courses Offered" counter updated from `15+` to `9`
- ✅ Homepage Campus section limited to first 5 photos + "View All Photos" CTA → `/gallery`
- ✅ Added 4 promo videos to Gallery (muted autoplay tiles, fullscreen lightbox with controls)
- ✅ Added "Our Story" video section to About page (prominent player with controls)
- ✅ Mobile responsiveness overhaul: hero font sizes scale from text-4xl, sections use py-16 on mobile, px-5 padding, stats/grids 2-col on phone, smaller h2/h3, lighter tile heights in gallery (140px on mobile)

## Updates (18 Feb 2026 — Round 3)
- ✅ Fixed huge gap between content and footer (removed `mt-32` from Footer)
- ✅ Removed double `pt-32` padding from Contact + Courses page main+section
- ✅ About page Campus section now limited to 5 photos with a "View All Photos" CTA → `/gallery`
- ✅ Founder image: constrained to `max-w-sm md:max-w-md` on mobile/tablet, full size on desktop only (Home + About)
- ✅ Added institute logo as favicon + Apple touch icon (`/public/index.html`)
- ✅ Replaced all 3 campus stock photos with the single red building photo (`rvqpr0rg_image.png`)
- ✅ Gallery video tiles forced to landscape orientation (`col-span-2`); lightbox preserves original portrait via `object-contain`

## Backlog (P0 → P2)
- P1: Admin dashboard to view enquiries (currently only GET endpoint, no UI)
- P1: Live Instagram/YouTube feed embed (currently links only)
- P2: Replace stock student avatars in testimonials with real Kaizen students
- P2: Add blog/news section for SEO content
- P2: Multi-language (Malayalam) toggle
- P2: Online fee payment / razorpay
- P2: Domain verification reminder if Resend domain ever unverifies
