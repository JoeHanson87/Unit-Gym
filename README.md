# The Unit Gym — Website (Sevenoaks, UK)

Modern static site for **The Unit Gym** — Unit 65, Heaver Trading Estate, Ash Road, Sevenoaks TN15 7HJ. Static HTML + Tailwind via CDN. Deploys to GitHub Pages with zero build step.

Branding and all membership/hours info match the official gym flyer in `assets/Scraped Content/` (also copied to `assets/img/membership-poster.png` and displayed on-page). Logo: `assets/img/unit-logo.png`. Accent green `#7FC400` sampled from the flyer.

## Membership (from flyer, GBP, no contracts)

- Day pass £7.50 · Weekly pass £20.00 · Direct debit £25.00/month · Monthly £35.00/month · Student £20.00/month
- First session free · Ages 14+ · Beginners & experienced welcome

## Hours (from flyer)

- Mon–Fri 9:00am–9:00pm · Sat–Sun 10:00am–4:00pm

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Edit

- Copy/pricing/hours: `index.html` (`#membership`, `#hours`, `#faq`, `#location`)
- Styles: `css/styles.css` (brand accent: `--volt: #7FC400`)
- Interactions (nav, lightbox, reveal): `js/main.js`

## Deploy (GitHub Pages)

1. Push `main` to GitHub.
2. Repo → Settings → Pages → Deploy from branch → `main` / `/ (root)`.
3. Live URL: `https://<user>.github.io/Unit-Gym/`
