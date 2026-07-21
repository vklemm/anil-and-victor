# Anil & Victor — Wedding Website 💍

A lightweight, single-page wedding invitation, live at
**https://vklemm.github.io/anil-and-victor/**

Plain HTML/CSS/JS — no build step, no dependencies. Push to `main` and GitHub Pages redeploys automatically (takes ~1 minute).

## Editing content

| What | Where |
|---|---|
| All texts, in all 4 languages | `js/translations.js` — one block per language (`de`, `tr`, `en`, `it`). Keys map to `data-i18n` attributes in `index.html`. |
| Wedding date/time (countdown) | `js/main.js`, the `WEDDING_DATE` constant — **and** the date strings in `js/translations.js` (`hero.date`, `program.sub`, `title`) plus the footer line in `index.html`. |
| Colors | `css/style.css`, the `:root` block at the top. |
| Names / structure / sections | `index.html`. German text in the HTML is only the pre-JS fallback — the visible text always comes from `translations.js`. |

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Wiring up the RSVP buttons (currently placeholders)

The two buttons in the RSVP section show a "coming soon" toast. Three easy ways to make them real:

**Option A — Email (zero setup).** In `index.html`, replace the two `<button>` elements with mailto links:

```html
<a class="btn btn-fill" href="mailto:YOU@example.com?subject=Zusage%20Hochzeit%20Anil%20%26%20Victor&body=Name:%0AAnzahl%20Personen:%0AAllergien/Essenswünsche:%0A">Mit Freude zusagen</a>
```

(keep the `data-i18n` attributes if you want the labels translated). Then delete the toast handler at the bottom of `js/main.js`.

**Option B — Google Form.** Create a form (name, attending yes/no, number of guests, dietary needs, song wish 🎵), then point both buttons (or a single button) at the form URL:

```html
<a class="btn btn-fill" href="https://forms.gle/YOUR-FORM-ID" target="_blank" rel="noopener">RSVP</a>
```

**Option C — Formspree (form directly on the page).** Free tier: 50 submissions/month. Create a form at formspree.io, then replace the buttons with a `<form action="https://formspree.io/f/YOUR-ID" method="POST">` containing name/guests/diet fields. Submissions arrive by email.

## Notes

- The welcome animation plays once per browser session (per tab); it is skipped for visitors with "reduce motion" enabled and can be skipped with a click/tap.
- Language auto-detects from the browser (German default) and is remembered in `localStorage`.
- After 19.09.2026, 15:00 the countdown turns into "Just married!".
