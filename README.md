# Living Room Restaurant & Lounge — Website

Premium single-page site for **Living Room Restaurant & Lounge**, 178 Avenue U, Brooklyn,
NY 11223 (Gravesend). Replaces the previous D'Fades Factory demo in this repo (preserved in
git history).

## Design

Plush lounge palette: plum-black ground, **copper-rose** accent (drawn from the downstairs
flower wall), warm ivory type. Cormorant Garamond display with italic accents; Figtree body.
The site's structure mirrors the venue's own layout — **"Dinner upstairs. Lounge downstairs."**
— with a two-floor split, a real-priced menu with dotted leaders, a Thu/Fri/Sat nights
program, an italic serif quote wall, and a private-events panel.

Stock photography (Unsplash, free license) in the hero, floor cards and events panel — every
image has an `onerror` fallback to a styled tile so a failed load can never break the page.

## Facts on the page (all researched, sources in RESEARCH.md)

- Phone reservations (718) 996-8700 — the venue takes no online bookings
- Real menu prices from public listings (lamb chops $26, filet burger $24, wings $16 …)
- Hours: Sun–Thu 11–1:45 AM, Fri–Sat 11–3:45 AM, with correct late-night open-status logic
- DJ Thu–Sat, belly dance Saturdays, ~$20 hookah with Quasar tops
- Toast first-party online ordering linked (commission-free for the venue)
- Sister venue strip: Living Room Sushi & Steakhouse, 192 Avenue U
- Real guest quotes; no invented star ratings (Yelp aggregate is 3.5 — quotes carry the page)

## Before launch — venue must confirm

1. Hours conflict: directories say 11 AM open; an older listing says 5 PM (lounge schedule?)
2. Hookah menu and current pricing; bottle/VIP service; dress code
3. Private-room capacities and packages
4. Replace stock photos with the venue's own (flower wall, dining room, plated dishes)
5. Belly-dance night (Saturday per latest info; was Friday)

Deploys automatically: push to `main` → GitHub Pages via `.github/workflows/publish.yml`.
