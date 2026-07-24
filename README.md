# Dinh Nhat Luan — AI Engineer Intern Portfolio

A clean, modern, lightweight, bilingual (EN | VI) portfolio website for **Dinh Nhat Luan** (AI Engineer Intern | Information Retrieval & Backend Developer). Built with Next.js App Router, TypeScript, Tailwind CSS, Lucide React icons, and Vercel Analytics & Speed Insights. Ready for zero-config Vercel deployment.

---

## 🚀 Features

- **Bilingual Support (EN | VI)**: Full English and Vietnamese switching with `localStorage` persistence and zero hydration flashing.
- **Single-page navigation**: Smooth scroll sections (`#hero`, `#about`, `#currently`, `#projects`, `#skills`, `#education`, `#contact`).
- **Recruiter-Friendly Light Theme**: Clean off-white background with high-contrast slate typography, royal blue accents, and emerald status badges.
- **Privacy-First Contacts**: Zalo privacy protection (no visible phone number), direct pre-filled email options, GitHub, and Facebook.
- **Next.js Open Graph**: Dynamic social share card generation via `opengraph-image.tsx`.
- **Vercel Analytics & Speed Insights**: Integrated performance and traffic telemetry.

---

## 📸 Adding Real Project Screenshots

To add real screenshot images for the featured projects:

1. Create a `projects` directory inside `public/`:
   ```bash
   mkdir public/projects
   ```
2. Save your 16:9 aspect ratio WebP image files as:
   ```text
   public/projects/legal-search.webp
   public/projects/furniture-shop.webp
   ```
3. **Recommended Specs**:
   - Aspect ratio: 16:9 (e.g., 1280x720 or 1920x1080 pixels)
   - Format: WebP or compressed JPG
   - File size: Under 200 KB per image for optimal loading performance.

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

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: enhance portfolio content and project presentation"
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Select **Add New Project** -> **Import**.
4. Choose the `dinh-nhat-luan-portfolio` repository.
5. Keep default Next.js build settings (`npm run build`).
6. Click **Deploy**.
