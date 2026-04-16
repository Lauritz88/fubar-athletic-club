# FUBAR Landing Page

Premium running apparel landing page for FUBAR Athletic Club.

## Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open http://localhost:3000

## Project Structure

```
fubar/
├── CLAUDE.md              # Project context for Claude Code
├── public/
│   └── img/               # Nano Banana generated images
├── app/
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Landing page
│   └── globals.css        # Tailwind + CSS variables
├── components/
│   ├── Hero.tsx
│   ├── Manifesto.tsx
│   ├── ProductGrid.tsx
│   ├── Details.tsx
│   ├── Community.tsx
│   ├── EmailSignup.tsx
│   └── Footer.tsx
└── lib/
    └── products.ts        # Product data
```

## Images

Place your Nano Banana images in `public/img/` with these names:
- `hero.jpg` — Main hero (runner silhouette)
- `road.jpg` — Foggy road
- `rain.jpg` — Runner in rain
- `recovery.jpg` — Recovery lifestyle shot
- `group.jpg` — Group run
- `shoes.jpg` — Still life with shoes
- `products/split-short.jpg`
- `products/pace-short.jpg`
- `products/half-tight.jpg`
- `products/beyond-tee.jpg`
- `products/foundation-crew.jpg`
- `details/badge.jpg` — FBR embroidery
- `details/label.jpg` — Neck label
- `details/hangtag.jpg` — Hangtag
- `details/gel-pocket.jpg` — Gel pocket detail

## Deployment

1. Push to GitHub
2. Import repo at vercel.com
3. Deploy — it auto-builds
4. Add custom domain (fubar.no / fubaratheltic.com)

## Next Steps

- [ ] Add Shopify Storefront API for real commerce
- [ ] Integrate Klaviyo/Mailchimp for email list
- [ ] Add analytics (Plausible or Vercel Analytics)
- [ ] Set up a blog/journal for drops
