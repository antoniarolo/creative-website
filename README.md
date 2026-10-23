# Garden

Faithful implementation of the supplied Garden hero template with React 19, TypeScript, Vite 8, Tailwind CSS 4, and Framer Motion.

## Development

Use Node.js 22.12+ and pnpm 10.

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

The production base path is `/creative-website/`. Preview at `http://localhost:4173/creative-website/`.

## Publishing

Repository: https://github.com/antoniarolo/creative-website

Website: https://antoniarolo.github.io/creative-website/

In repository Settings → Pages → Build and deployment, select **GitHub Actions** as the source. Pushes to `main` lint, build, and deploy automatically. To retry, select **Actions → Deploy to GitHub Pages → Run workflow → main**.

The supplied template has active navigation highlighting and button hover effects. It does not define destinations or click actions for the hero buttons, or separate About, Services, and Contact sections; those behaviors are preserved.

The original background video is stored at `public/hero-video.mp4`. Cormorant Garamond loads from Google Fonts as specified.
