# Anıl & Victor — Wedding Website 💍

A lightweight, single-page wedding invitation, live at
**https://vklemm.github.io/anil-and-victor/**

Plain HTML/CSS/JS — no build step, no dependencies. Push to `main` and GitHub Pages redeploys automatically (takes ~1 minute).

## Editing content

| What | Where |
|---|---|
| All texts, in all 5 languages | `js/translations.js` — one block per language (`de`, `tr`, `en`, `it`, `fr`). Keys map to `data-i18n` attributes in `index.html`. `\n` inside a string makes a line break (used in the tram card). |
| Wedding date/time (countdown) | `js/main.js`, the `WEDDING_DATE` constant — **and** the date strings in `js/translations.js` (`hero.date`, `program.sub`, `title`) plus the footer line in `index.html`. |
| RSVP deadline | `rsvp.deadline` in `js/translations.js` (all 5 languages). |
| Colors | `css/style.css`, the `:root` block at the top. |
| Names / structure / sections | `index.html`. German text in the HTML is only the pre-JS fallback — the visible text always comes from `translations.js`. |

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## RSVP form → Telegram

The RSVP form sends each submission as a Telegram message to the group
"Victor and Anıl❤️" via the bot `@anil_victor_wedding_bot` (fields: name,
couple/alone/decline, food preferences, comments, plus the language the guest used).
There is no backend — the browser calls the Telegram Bot API directly.

- **Where the credentials live:** `js/main.js`, the `TG` object. The three values are
  base64-encoded (`TG.a` = bot id, `TG.b` = token secret part, `TG.c` = group chat id;
  note: if Telegram ever converts the group to a supergroup, the chat id changes —
  re-encode the new one).
  This is **obfuscation, not encryption** — on a static site the token is ultimately
  public. We accepted this tradeoff knowingly.
- **If the bot ever gets abused** (spam messages arriving): open Telegram → @BotFather →
  `/revoke` → pick the bot → you get a fresh token. Split it at the `:` and re-encode both
  parts (`echo -n "NEW_ID" | base64`, `echo -n "NEW_SECRET" | base64`), put them into `TG.a`/`TG.b`, push.
- **Spam protection:** a hidden "website" honeypot field silently swallows bot submissions.

## Notes

- The welcome animation plays on every page load; it is skipped for visitors with "reduce motion" enabled and can be skipped with a click/tap.
- Language auto-detects from the browser (German default) and is remembered in `localStorage`.
- After 19.09.2026, 15:00 the countdown turns into "Just married!".
