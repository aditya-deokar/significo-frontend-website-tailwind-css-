# 🏥 Significo — Healthcare Frontend Website

> A pixel-perfect, animation-rich frontend clone of the **Significo** healthcare technology website, built to demonstrate advanced CSS, smooth scroll animations, and interactive UI patterns.

🔗 **Live Demo:** [aditya-deokar.github.io/significo-frontend-website-tailwind-css-](https://aditya-deokar.github.io/significo-frontend-website-tailwind-css-/)

---

## 📌 About the Project

Significo is a custom health software company that builds human-centric healthcare technology. This project is a **frontend recreation** of their website — faithfully reproducing the design, layout, typography, scroll-driven animations, and interactive effects seen on the original site.

The goal was to push the limits of what's possible with vanilla HTML, CSS, and JavaScript by implementing advanced animation techniques without any heavy UI frameworks.

---

## ✨ Key Features

- **Scroll-Driven Hero Animation** — A cinematic clip-path reveal transition that zooms a full-screen hero image in as the user scrolls down.
- **Animated Marquee Rows** — Multiple rows of text and circular portrait images slide in opposite directions on scroll, creating a dynamic, layered effect.
- **Horizontal Scroll Section** — The "Real Talk, Real Impact" section uses GSAP to create a horizontal slide carousel driven entirely by vertical scrolling.
- **Interactive Team List** — Each team member row reveals a circular profile photo and a colored highlight bar on hover using GSAP micro-animations.
- **Scroll-Animated Text** — A review quote that fades in word-by-word as the user scrolls through the section.
- **Dynamic Theme Switching** — The page background color changes automatically as the user scrolls into each section (black → cyan → orange → lime-yellow), powered by GSAP ScrollTrigger.
- **Smooth Locomotive Scroll** — Integrated LocomotiveScroll for buttery-smooth, momentum-based page scrolling.
- **Responsive Design** — All sections adapt for both mobile and large desktop screens using Tailwind CSS responsive utilities.
- **Custom Typography** — Uses the premium **PP Neue Machina** typeface (both Inktrap Medium and Light weights) for editorial-grade typography.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **Tailwind CSS v3** | Utility-first responsive styling |
| **Custom CSS (app.css)** | CSS variables for theming, clip-path animations, font-face declarations |
| **JavaScript (ES6)** | Animation orchestration and DOM manipulation |
| **GSAP (GreenSock)** | Scroll-driven and timeline-based animations |
| **GSAP ScrollTrigger** | Pinned sections, scrubbed animations, section-entry callbacks |
| **LocomotiveScroll** | Smooth momentum scrolling |
| **Vite** | Lightning-fast development server and build tool |
| **PostCSS + Autoprefixer** | CSS processing and cross-browser compatibility |
| **PP Neue Machina** | Custom premium typeface for headings |

---

## 🎨 Design & Animation Highlights

### Hero Section
- Full-viewport image with a `clip-path: circle()` reveal driven by a GSAP scroll timeline.
- Title text uses a second clip-path animation, expanding simultaneously with the image as the user scrolls.
- Marquee rows animate in opposing X directions to create a parallax depth effect.

### "Real Talk, Real Impact" — Horizontal Scroll
- Four full-screen slides containing impact statistics (20.4M users, 49% women in tech, 13 nationalities) scroll horizontally as the user scrolls vertically — a popular modern web design pattern.

### Team Section
- Each row uses `mouseenter`/`mouseleave` to animate a colored fill bar rising from the bottom and fading in a circular portrait image simultaneously.

### Review Section
- A testimonial paragraph is split into individual `<span>` elements via JavaScript. GSAP then staggers each word from `opacity: 0.1` to `opacity: 1` as the section scrolls into view.

### Dynamic Theming
- CSS custom properties (`--cyan`, `--salman`, `--orangeG`, `--black`) power four distinct color themes.
- GSAP ScrollTrigger watches each section and sets a `theme` attribute on `<body>`, which CSS selectors use to swap background and text colors with a smooth `transition`.

---

## 📂 Project Structure

```
significo-frontend-website-tailwind-css-/
├── index.html          # All page sections (home, craft, real talk, team, review, explore)
├── app.css             # Custom CSS: fonts, CSS variables, clip-path, theme rules
├── style.css           # Additional base styles
├── script.js           # All GSAP animations and scroll interactions
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS + Autoprefixer setup
├── fonts/              # PP Neue Machina font files (TTF)
├── img/                # Local hero image (hero.webp)
└── package.json        # Project dependencies and scripts
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm test        # runs: vite
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💡 What I Learned / Skills Demonstrated

- Advanced **GSAP** animation techniques: timelines, `scrub`, `pin`, `stagger`, and `ScrollTrigger` callbacks.
- Implementing **clip-path** based reveal animations controlled by CSS custom properties and GSAP.
- Creating **horizontal scroll** experiences driven by vertical scroll events.
- Dynamic **theme switching** with CSS attribute selectors and custom properties.
- Building fully **responsive layouts** using Tailwind CSS breakpoints (`max-sm`, `lg`).
- Integrating **LocomotiveScroll** with GSAP ScrollTrigger for smooth-scroll compatibility.
- Working with **custom web fonts** via `@font-face` and Tailwind's `font-[]` arbitrary value syntax.

---

## 📸 Sections Overview

| Section | Description |
|---|---|
| **Home** | Clip-path hero reveal + animated marquee rows |
| **Craft** | Sticky left panel with company mission statement |
| **Real Talk** | Horizontal scroll with impact statistics |
| **Team** | Interactive hover list with animated portraits |
| **Review** | Word-by-word scroll-animated testimonial |
| **Explore** | Vertical reveal cards for product exploration |

---

*Built by [Aditya Deokar](https://github.com/aditya-deokar) as a frontend development practice project.*
