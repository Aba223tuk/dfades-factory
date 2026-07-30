# D'Fades Factory Barbershop — Website

Single-page, mobile-first site for **D'Fades Factory Barbershop**, 2009 Stillwell Ave,
Brooklyn, NY 11223 (Gravesend).

## Design

Palette taken directly from the shop's interior: charcoal walls, black chairs and cabinetry,
the **green LED perimeter strip** (carried through the site as a glowing line motif under the
header and on cards), and the **caramel tile floor** (used for prices, stars and section labels).
Display type is Anton — big, condensed, barbershop-poster energy; body is Inter.

Animations: spinning barber-pole mark (in shop colors), humming LED strip, staggered scroll
reveals, hover lifts, live open/closed status in NY time. All respect `prefers-reduced-motion`.

## Booking

The shop has no booking platform (verified — no Booksy/TheCut/Squire/Fresha), so the site
offers the three real channels: walk in, Instagram DM, call ahead — plus a **booking-request
form** that composes the appointment message, copies it to the clipboard, and opens the shop's
Instagram DM thread ready to paste.

## Files

- `index.html` / `styles.css` / `script.js` — no build step; open directly or `python3 -m http.server`
- `RESEARCH.md` — five-agent research compilation with sources and confidence labels

## Before launch — owner must confirm

1. **Phone number** — not indexed anywhere online; the Call button links to a placeholder `tel:`
2. **Prices** — no menu is published anywhere; site prices are calibrated to the immediate
   competitive set (cuts $25–40 nearby) and marked as placeholders in the footer demo note
3. **Hours** — daily 8 AM–8 PM per the Instagram bio (one listing claims Fri till 9 — unverified)
4. **Photos** — gallery tiles are typographic placeholders linking to @d_fadesfactory; replace
   with real cut photos
5. Barber roster names, if a team section is wanted
