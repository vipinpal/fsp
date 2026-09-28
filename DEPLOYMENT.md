# Production Deployment Guide: 100% Static School Website

This application is built with **zero backend architecture** and produces pure static HTML, CSS, JS, and SVG assets in `dist/`.

## 1. Cloudflare Pages Deployment (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the **Cloudflare Dashboard**, navigate to **Compute (Workers) > Pages > Connect to Git**.
3. Select your repository.
4. Set the Build Configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.
6. Cloudflare CDN will automatically distribute your website across 300+ global edge data centers with free HTTPS and DDoS protection.

### Cloudflare Custom Domain Setup
- Go to your Project > **Custom Domains**.
- Add `www.yourschool.edu.in` and `yourschool.edu.in`.
- Cloudflare will configure DNS records and provision an automatic SSL/TLS certificate.

---

## 2. GitHub Pages Deployment (Alternative)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Static School Website
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 3. Rebranding for a New School in Minutes
To deploy this platform for a different school, simply update the following configuration files without touching any UI code:
1. `src/config/schoolConfig.ts`: School name, contact numbers, email, address, CBSE affiliation number.
2. `src/theme/schoolTheme.ts`: Primary and secondary brand colors, font choices, border radii.
3. `src/content/*.ts`: School history, director message, fees, facilities descriptions, and FAQs.
4. `src/media/mediaConfig.ts`: Set `provider: "google-drive"` or customize demo images.
5. `public/branding/logo.svg`: Replace with the school's SVG or PNG logo.
