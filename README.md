# Dinh Nhat Luan — AI Engineer Intern Portfolio

A clean, modern, lightweight, one-page portfolio website for **Dinh Nhat Luan** (AI Engineer Intern | Information Retrieval & Backend Developer). Built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide React icons. Ready for one-click Vercel deployment.

---

## 🚀 Features

- **Single-page navigation**: Smooth scroll sections (`#hero`, `#about`, `#projects`, `#skills`, `#education`, `#contact`).
- **Responsive design**: Pixel-perfect layout across mobile (320px, 375px), tablet (768px), and desktop (1024px, 1440px).
- **Dark developer theme**: High-contrast slate/navy dark mode with cyan/blue accents and subtle grid overlays.
- **Verified engineering details**: Structured project showcase with expandable full metrics drawers.
- **Centralized data**: All content managed in `src/data/portfolio.ts` for zero maintenance friction.
- **SEO optimized**: OpenGraph cards, meta descriptions, `robots.txt`, and `sitemap.xml` included.

---

## 📂 Project Structure

```
dinh-nhat-luan-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global dark theme styles & background grid
│   │   ├── layout.tsx          # Root layout & SEO metadata
│   │   ├── page.tsx            # Single-page layout assembling all 8 sections
│   │   ├── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation bar with mobile drawer
│   │   ├── Hero.tsx            # Hero section with CTA & availability badge
│   │   ├── About.tsx           # Professional introduction & highlight cards
│   │   ├── Projects.tsx        # Featured projects container
│   │   ├── ProjectCard.tsx     # Project card with expandable details
│   │   ├── Skills.tsx          # Categorized technical skill pills
│   │   ├── Education.tsx       # Degree & relevant coursework
│   │   ├── Contact.tsx         # Contact channels (Email, GitHub, LinkedIn, Resume)
│   │   └── Footer.tsx          # Footer & back-to-top button
│   └── data/
│       └── portfolio.ts        # Centralized editable content store
├── public/
│   ├── resume.pdf              # Downloadable resume PDF
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # XML Sitemap
├── package.json
└── README.md
```

---

## 📄 Resume PDF Instructions

To update the downloadable resume:
1. Place your compiled CV / Resume PDF file in the `public` directory.
2. Ensure the filename is named `resume.pdf`:
   ```bash
   public/resume.pdf
   ```
3. The "Download Resume" buttons on the portfolio site will automatically trigger a browser download for `public/resume.pdf`.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 🌐 Vercel Deployment Instructions

This repository is pre-configured for zero-config deployment on Vercel:

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: build professional AI engineering portfolio"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New Project** and select **Import**.
4. Choose the `dinh-nhat-luan-portfolio` repository.
5. Keep default Next.js build settings (`npm run build`).
6. Click **Deploy**.
