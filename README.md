# RoamRaw MVP

RoamRaw is a travel experience platform connecting explorers through curated trips, shared journeys, and community adventures.

This monorepo contains:
- **frontend/** – Next.js + Tailwind dummy UI
- **backend/** – Express API with a dummy `/api/trips` endpoint

## Quickstart

### 1) Backend (Railway)
```bash
cd backend
npm install
npm run dev
# set MONGO_URI in Railway/your .env when deploying
```

### 2) Frontend (Vercel)
```bash
cd frontend
npm install
# set NEXT_PUBLIC_API to your deployed Railway URL, e.g.
# NEXT_PUBLIC_API=https://your-api.onrender.com/api  (or Railway URL)
npm run dev
```

## Deploy Notes
- Frontend → Vercel (set `NEXT_PUBLIC_API` env var)
- Backend → Railway (set `MONGO_URI` env var; not required for dummy endpoint)
- Domain/DNS → Cloudflare free tier

## License
MIT
