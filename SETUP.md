# FUBAR — Setup Guide for Claude Code

## Prerequisites

Install these first:
1. **Node.js 18+** — download from nodejs.org
2. **Git** — git-scm.com
3. **Claude Pro subscription** ($20/mo) — for Claude Code access
4. **VS Code** (or any editor) — code.visualstudio.com

## Step 1: Install Claude Code

### macOS / Linux (recommended — native installer)
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Windows (PowerShell)
```powershell
irm https://claude.ai/install.ps1 | iex
```

### Alternative (npm, works on all platforms)
```bash
npm install -g @anthropic-ai/claude-code
```

Verify:
```bash
claude --version
```

## Step 2: Set Up the Project

1. Create a folder for the project:
```bash
mkdir ~/fubar && cd ~/fubar
```

2. Copy all files from this starter pack into the folder.

3. Start Claude Code:
```bash
claude
```

4. On first launch, it opens your browser to authenticate. Log in with your Claude account.

## Step 3: Install Dependencies

Tell Claude Code:
> "Install all npm dependencies for this Next.js project"

Or do it manually:
```bash
npm install
```

## Step 4: Add Your Nano Banana Images

Put your images in these folders:
- `public/img/hero.jpg` — Fjellsilhuett-bildet
- `public/img/road.jpg` — Tåkevei
- `public/img/rain.jpg` — Løper i regn
- `public/img/products/split-short.jpg`
- `public/img/products/pace-short.jpg`
- ...etc (see README.md for full list)

Ask Claude Code:
> "Help me optimize the JPG images in public/img/ for web — max 1200px wide, quality 80"

## Step 5: Run Locally

```bash
npm run dev
```

Open http://localhost:3000

## Step 6: Have Claude Code Build Out the Rest

The starter has Hero, Manifesto, ProductGrid, and Footer.
Ask Claude Code to add:

> "Read CLAUDE.md for context. Now build a RainRunner component that displays the Storm Shell jacket with a full-bleed lifestyle image (/img/rain.jpg) and product info overlay. Use the Framer-like scroll fade-in animation we're already using."

> "Build a Details component that shows a 2x2 grid of close-up detail photos: FBR embroidery, gel pockets, neck label, and fabric macro. Add a subtle caption line below."

> "Build an EmailSignup component with a dark minimal form that says 'GET NOTIFIED — DROP 001'. Use Tailwind classes consistent with our design system."

> "Build a Community component that shows the group run photo full-width with a tagline 'Ikke et merke. Et crew.'"

## Step 7: Deploy to Vercel

1. Create a GitHub account if you don't have one
2. Push your project:
```bash
git init
git add .
git commit -m "Initial FUBAR landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fubar.git
git push -u origin main
```

3. Go to vercel.com → "Import Git Repository" → select fubar
4. Click Deploy — it auto-builds in ~1 minute
5. You get a URL like `fubar.vercel.app`
6. Buy a domain (Namecheap, domeneshop.no) and connect it in Vercel settings

## Useful Claude Code Commands

Once inside `claude`:
- `/help` — see all commands
- `/clear` — clear conversation
- `/cost` — check API usage
- Just talk to it in natural language — "add a section that...", "fix the spacing on...", "make the hero image darker"

## Tips

1. **Always start with:** "Read CLAUDE.md before we begin" — keeps Claude Code on-brand
2. **Be specific:** "Match the style of the existing Hero.tsx component"
3. **Ask to review before building:** "Show me a plan before writing any code"
4. **Use git often:** `git commit -am "added details section"` — easy to roll back if needed
5. **One thing at a time:** Build component by component, don't ask for the entire site at once

## Troubleshooting

**Fonts not loading?** Check that the `<link>` tag in `app/layout.tsx` has both Space Mono and DM Sans.

**Images not showing?** File names are case-sensitive — `Hero.jpg` ≠ `hero.jpg`.

**Hover effects not working?** Make sure components with interactivity have `"use client"` at the top.

**Tailwind classes not applying?** Restart the dev server after changing `globals.css`.
