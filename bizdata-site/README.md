# Business Data Solutions LLC — Marketing Website

**"Enabling AI for your business sustainable growth"**

Production-ready React marketing website for [Business Data Solutions LLC](https://bizdatasolutions.com) — an AI consulting firm specializing in practical automation for small and mid-sized businesses.

---

## Design System

**Neural Circuit** — dark emerald + gold premium tech aesthetic.

| Token | Value | Role |
|---|---|---|
| `--bg-primary` | `#0A2E1F` | Page background |
| `--bg-surface` | `#0F3D2A` | Cards, elevated surfaces |
| `--accent-gold` | `#C98A0A` | Headings, borders, CTAs |
| `--accent-glow` | `#00E887` | Hover glows, active indicators |
| `--text-primary` | `#F0F4F1` | Main text |
| `--text-secondary` | `#8AADA0` | Body / secondary text |
| `--border-subtle` | `#1E4A35` | Dividers, card borders |

**Fonts:** [Syne](https://fonts.google.com/specimen/Syne) (headings) · [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI (functional components + hooks) |
| Vite | Build tooling & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll reveals, page animations |
| React Router v6 | Client-side routing |
| Lucide React | Icons |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Clone
git clone https://github.com/aieasytouse/bizdatasolutions.com.git
cd bizdatasolutions.com

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
├── index.html                  # HTML entry point (loads Google Fonts)
├── vite.config.js
├── tailwind.config.js          # Color tokens, font mapping, shadows
├── postcss.config.js
├── public/
│   └── images/
│       ├── bizda.jpg           # BDS logo (circuit-board style)
│       ├── pic01.jpg           # About section — analytics visual
│       ├── pic02.jpg           # Hero section — AI brain visual
│       └── pic10.jpg           # Results section — background
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Router setup + ScrollToTop
    ├── index.css               # Design tokens, animations, component classes
    ├── data/
    │   └── services.js         # All 6 service definitions (edit here to update copy)
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav with Services dropdown + mobile menu
    │   ├── Footer.jsx          # 4-column footer with contact info
    │   ├── CircuitBackground.jsx  # Animated SVG circuit traces overlay
    │   ├── ScrollReveal.jsx    # Framer Motion scroll-animation wrapper
    │   ├── AnimatedCounter.jsx # Animated number counter (scroll-triggered)
    │   └── MobileStickyCTA.jsx # Floating mobile CTA button
    └── pages/
        ├── Home.jsx            # Assembles all homepage sections
        ├── ServiceDetail.jsx   # Dynamic service detail page (/services/:slug)
        └── sections/
            ├── Hero.jsx        # Full-width hero with circuit background
            ├── Services.jsx    # 6-card service grid
            ├── About.jsx       # About + differentiators + stats
            ├── HowWeWork.jsx   # 4-step process
            ├── SocialProof.jsx # Stats banner + testimonials
            └── Contact.jsx     # Contact form + info panel
```

---

## Updating Content

### Services
Edit `src/data/services.js` — each object drives both the home page card and the full `/services/:slug` detail page.

### Contact Form
The form in `src/pages/sections/Contact.jsx` POSTs to an AWS API Gateway endpoint:
```js
const API_ENDPOINT = 'https://zluofjedy1.execute-api.us-east-1.amazonaws.com/Prod/bds-contact-us'
```
If the API is unreachable, it automatically falls back to a `mailto:info@bizdatasolutions.com` link with all form data pre-populated.

### Brand Colors
Edit `tailwind.config.js`:
```js
navy: '#0A2E1F'        // bg-primary
cyan.DEFAULT: '#C98A0A' // accent gold
glow: '#00E887'         // glow accent (use sparingly)
```

### Fonts
Loaded via Google Fonts in `index.html`. Syne is mapped to the `font-sora` Tailwind class for backwards compatibility.

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Set the **output directory** to `dist`.

### AWS S3 + CloudFront
```bash
npm run build
# Upload /dist to your S3 bucket
# Configure CloudFront distribution pointing to the bucket
```

### Traditional Hosting
```bash
npm run build
# Upload contents of /dist to your web host
```

> For React Router to work on any host, configure the server to serve `index.html` for all routes (SPA fallback).

---

## Contact

| | |
|---|---|
| Email | info@bizdatasolutions.com |
| Phone | (617) 544-7230 |
| Address | 850 Clark Street #1493, South Windsor, CT 06074 |
| Web | [bizdatasolutions.com](https://bizdatasolutions.com) |
