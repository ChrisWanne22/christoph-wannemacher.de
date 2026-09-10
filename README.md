# Christoph Wannemacher — Personal Website

Next.js personal site (DE/EN) with a grayscale, cubic visual language.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For testing on a phone on the same Wi‑Fi:

```bash
npm run dev -- -H 0.0.0.0
```

Then open the Network URL shown in the terminal (see `allowedDevOrigins` in `next.config.ts` if Safari blocks client chunks).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Stack

Next.js (App Router), React, Tailwind CSS, TypeScript.
