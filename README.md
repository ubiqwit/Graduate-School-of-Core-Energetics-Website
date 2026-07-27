# North Star Counseling — Website

A static, no-build-tools website. Open `index.html` directly in a browser
to preview, or deploy the whole folder as-is to any static host
(Cloudflare Pages, Netlify, GitHub Pages, etc.).

## Folder structure

```
site/
├── index.html          ← the homepage
├── css/
│   ├── variables.css   ← design tokens: colors, fonts (edit this first)
│   ├── base.css        ← resets + global element defaults
│   ├── nav.css         ← header/navigation bar
│   ├── hero.css        ← landing visual + headline
│   └── sections.css    ← every content section below the hero
├── js/
│   └── hero-video.js   ← pauses the hero video for prefers-reduced-motion users
├── assets/
│   ├── images/         ← put photos here (portrait, logo, etc.)
│   └── video/          ← put your hero background video here
└── README.md            ← this file
```

## Before you launch: replace the placeholders

**Hero video** — the biggest one: in `index.html`, find:

```html
<source src="assets/video/YOUR-VIDEO-FILE.mp4" type="video/mp4">
```

Drop your video file into `assets/video/` and change `YOUR-VIDEO-FILE.mp4`
to match its actual filename. Keep the file reasonably compressed — it
autoplays on every visit, so a huge file will slow the page down.

Other placeholders below:

Search the project for `[` to find every bracketed placeholder:

- `[Therapist Name]`, `[Credentials — ...]` — in `index.html`, About section
- `[ (555) 555-0100 ]`, address, hours — in `index.html`, Contact section
- `[Insurance / payment details — placeholder]` — FAQ section
- `hello@example.com` — swap for your real email
- "North Star Counseling" — swap for your real practice name (appears in
  `<title>`, the nav, and the footer)

## Growing into a multi-page site

Each new page is just another HTML file at the project root (or in a
subfolder, e.g. `blog/post-1.html`). To keep pages consistent:

1. Copy `index.html` as a starting point.
2. Every page should link the shared stylesheets in this order:
   `variables.css` → `base.css` → `nav.css`, then any page-specific
   CSS file (e.g. a new `about.css` if a page needs its own layout).
3. Keep the same `<nav>` markup across pages so the header stays
   consistent — consider updating the nav links to point to real pages
   instead of `#anchor` links once you have more than one page
   (e.g. `href="about.html"` instead of `href="#about"`).
4. New shared components (buttons, cards) belong in a new
   `css/components.css` once you have more than one page reusing them —
   right now everything lives in `sections.css` since there's only one page.

## Hosting

This is a plain static site — no build step, no framework. It can be
dragged-and-dropped or Git-connected to Cloudflare Pages, Netlify, GitHub
Pages, or any static host, and pointed at a custom domain via DNS once
you've registered one.
