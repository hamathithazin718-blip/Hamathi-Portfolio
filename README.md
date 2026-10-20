# Hamathi Thazin — Portfolio Website

A modern, responsive personal portfolio for **Hamathi Thazin**, an aspiring software developer focused on Python, AI/ML, and web development.

Built with **React + Vite + TypeScript + Tailwind CSS**, using **Lucide React** for icons. No backend required — all content is driven from a single configuration file for easy editing.

---

## Features

- Fully responsive, mobile-first layout
- Light / dark theme toggle (remembers your preference)
- Smooth-scroll navigation with active-section highlighting
- Accessible, keyboard-friendly controls and visible focus states
- Subtle animations that respect `prefers-reduced-motion`
- Sections: Home, About, Skills, Projects, Education, Currently Learning, Future Goals, Contact
- All contact links (email, GitHub, LinkedIn) are real and verified
- No fabricated experience, awards, or project details
- Resume button is a clearly-marked placeholder until a real PDF is provided

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site runs locally at the URL shown in your terminal (usually `http://localhost:5173`).

### Build

```bash
npm run build
```

The production-ready output is written to the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

### Type-check

```bash
npm run typecheck
```

---

## Project Structure

```
.
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
├── vite.config.ts
└── src/
    ├── App.tsx                  # Page composition
    ├── main.tsx                 # App entry
    ├── index.css                # Theme tokens + Tailwind layers
    ├── data/
    │   └── portfolio.ts         # ⭐ All editable content lives here
    ├── hooks/
    │   └── useTheme.ts          # Dark/light theme logic
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── Education.tsx
        ├── LearningJourney.tsx
        ├── FutureGoals.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## How to Edit Your Content

Almost everything is configurable from **`src/data/portfolio.ts`** — no need to touch component code.

- **Personal info / contact links / tagline** → `personalInfo`
- **About cards** → `aboutCards`
- **Skills** → `skillCategories`
- **Projects (titles, descriptions, status, repo/demo links)** → `projects`
- **Education** → `education`
- **Currently Learning** → `learningPriorities`
- **Future Goals** → `futureGoals`
- **Navigation** → `navLinks`

---

## Things You Still Need to Update

A quick checklist of details to personalize before publishing:

1. **Resume PDF** — The "Download Resume" button in the Hero is intentionally disabled.
   - Add your real PDF to the `public/` folder (e.g. `public/resume.pdf`).
   - In `src/data/portfolio.ts`, set `resumeUrl: '/resume.pdf'`.
   - Then enable the button in `src/components/Hero.tsx` (swap the disabled `<button>` for an `<a>` tag pointing at `personalInfo.resumeUrl`).

2. **Image Steganography repository URL** — `projects[0].repoUrl` currently points to your GitHub *profile*. Replace it with the exact repository URL once available.

3. **Student Enrollment & Course Management System** — `projects[1].repoUrl` is `null` (shows "Repository link to be configured"). Add the exact repo URL and confirm the technology stack.

4. **SignSense — AI Sign Language Detector** — `projects[2].repoUrl` is `null`. Add the repository URL once you create it. Keep the status as "Planned" until work begins.

5. **Portfolio repository URL** — `projects[3].repoUrl` points to your GitHub profile. Update it to the actual repository URL once you push this project.

6. **Live demo links** — All `liveUrl` fields are `null`. Only fill these in once a demo is actually deployed.

---

## Uploading to GitHub

1. Create a new repository on GitHub (e.g. `portfolio`).
2. From the project root:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/hamathithazin718-blip/portfolio.git
git push -u origin main
```

> The included `.gitignore` already excludes `node_modules`, `dist`, and `.env`.

---

## Deployment

This is a static site — the `dist/` folder produced by `npm run build` can be hosted anywhere. Recommended options:

### Vercel (recommended for Vite)

1. Push your project to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Click **Deploy**. Vercel auto-deploys on every push.

### Netlify

1. Push to GitHub.
2. Go to [netlify.com](https://app.netlify.com) → **Add new site** → import the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy**.

### GitHub Pages

GitHub Pages works with Vite but requires setting the correct `base` path:

1. In `vite.config.ts`, set `base: '/repository-name/'`.
2. Build and deploy the `dist/` folder to the `gh-pages` branch (e.g. using the `gh-pages` npm package).
3. Your site will be live at `https://hamathithazin718-blip.github.io/repository-name/`.

> Vercel/Netlify are simpler for Vite apps because they handle routing and HTTPS automatically with zero config.

---

## Tech Stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Framework   | React 18 + TypeScript           |
| Build tool  | Vite                            |
| Styling     | Tailwind CSS                    |
| Icons       | lucide-react                    |
| Fonts       | Inter, Sora, JetBrains Mono (via Google Fonts) |

No additional UI libraries or backend services are required.

---

## Credits

Designed and developed for **Hamathi Thazin**.

> _"Designed with purpose. Built with curiosity."_
