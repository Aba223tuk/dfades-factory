# D'Fades Factory Barbershop — Website

Single-page, mobile-first site for **D'Fades Factory Barbershop**, 2009 Stillwell Ave,
Brooklyn, NY 11223 (Gravesend).

## Design

Palette taken directly from the shop's own emblem (the Instagram logo): warm black ground,
**antique gold**, ivory type. The emblem's double-rule ornament ("═ CUT · SHAVE · FADE ═")
recurs as the section-label motif, the about card is a circular badge echoing the logo's ring,
and menu prices sit on dotted leaders like a printed shop card. Display type is Marcellus
(engraved-roman feel); body is Archivo. No neon, no glow effects.

Animations kept quiet: a slow-turning barber-pole mark in emblem colors, short fade-up reveals,
hover states, live open/closed status in NY time. All respect `prefers-reduced-motion`.

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
