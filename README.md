# PRIYABRATA MAHARANA — Portfolio

A modern, dark-themed personal portfolio built with **React 18** + **Tailwind CSS v3** + **Vite**.

---

## Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with scroll-spy & mobile menu
│   │   ├── Hero.jsx         # Landing section with animated background
│   │   ├── About.jsx        # Bio, highlights, code-style profile card
│   │   ├── Projects.jsx     # 6-card project grid with hover effects
│   │   ├── Skills.jsx       # Progress bars + tech badge cloud
│   │   └── Contact.jsx      # Contact form + social links + footer
│   ├── data/
│   │   └── index.js         # Projects array, skills object, nav links
│   ├── hooks/
│   │   ├── useTheme.js      # Dark/light theme toggle with localStorage
│   │   └── useScrollSpy.js  # Active nav link tracking via IntersectionObserver
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Tailwind directives + custom animations + Google Fonts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Getting Started

### Prerequisites
- Node.js **18+**
- npm or yarn

### Installation

```bash
# 1. Unzip the project
unzip portfolio.zip
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customization

### 1. Update your info
Edit `src/data/index.js` to swap in your real projects and skills.

### 2. Change your name
Search for `Alex Morgan` across the components and replace with your name.

### 3. Update contact details
In `src/components/Contact.jsx`, update the email address and social links.

### 4. Swap accent color
The main accent is `#00f5a0` (mint green). Do a find-and-replace across all files to change it.

---

## Build for Production

```bash
npm run build
# Output goes to /dist — deploy to Vercel, Netlify, or any static host
```

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Syne (Google Font) | Display / heading font |
| JetBrains Mono | Monospace / body font |
| IntersectionObserver | Scroll-spy for active nav links |

---

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with scroll-spy active links
- ✅ Smooth section scrolling
- ✅ Dark / Light theme toggle (persisted in localStorage)
- ✅ Animated hero background (floating orbs + grid)
- ✅ Project cards with per-project accent colors
- ✅ Tabbed skill progress bars
- ✅ Contact form with submit feedback states
- ✅ Custom scrollbar styling
- ✅ CSS-only animations (no extra dependency needed)
