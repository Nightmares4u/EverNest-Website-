This is the production Next.js app for EverNest Consultants.

## Getting Started

Run all commands from the `evernest/` directory:

```bash
cd evernest
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app locally.

## Production Checks

Use these commands before shipping changes:

```bash
npm install
npm run lint
npm run build
```

## Vercel

Vercel should use `evernest/` as the project root for this repository.

The app config also pins `turbopack.root` to this directory so Next.js does not infer the wrong workspace root when multiple lockfiles exist in the parent folder.
