# Bezalel Media — Portfolio

Portfolio website for **Bezalel Media** (Azeem Imtiaz). Tagline: *Crafted with Purpose.*

Built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis.

## Run locally

```bash
npm install
npm run dev       # development server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Sections

- Intro: cinematic portrait intro with logo reveal, Skip button, plays once per browser session (skipped automatically with reduced-motion settings)
- Hero: "WE CRAFT / DIGITAL / EXPERIENCES." with Explore My Work and Download Resume buttons
- About, Projects, Skills, Experience (includes education), Contact (email, GitHub, portfolio, location)

## Updating content

- Text and data live in `src/components/*.tsx` (projects, skills, experience and contact arrays are at the top of each file).
- Portrait: `src/assets/owner-portrait.jpg`
- Resume: `public/resume.pdf` (the Download Resume button links to it)
- Brand colours: Midnight Navy `#0A1628`, Warm Gold `#D4AF37`, Pure White, Slate Gray `#94A3B8`
- Typography: Poppins (Google Fonts)

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.
