# CricPulse - Production Grade Cricket Live Score Platform

## Architecture
- **Client**: Next.js 15 + TypeScript + Tailwind + Framer Motion + Zustand + React Query + Recharts + Socket.IO client
- **Server**: Express + TypeScript + Prisma + PostgreSQL + Redis + Socket.IO
- **Realtime**: `join:match` room subscription and `ball:event` broadcasting.
- **AI module**: pluggable service in `server/src/ai` for summaries/commentary/predictions.

## Features
- Live scoreboards with ball-by-ball feeds
- Admin scoring endpoint and event emission
- Authentication with JWT
- Match/tournament/team/player data models
- Redis-cached match list
- Responsive glassmorphism UI foundation
- Analytics chart scaffold (worm graph)

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npm --workspace server run prisma:generate`
4. `npm --workspace server run prisma:migrate`
5. `npm --workspace server run seed`
6. `npm run dev`

## API Surface
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/matches`
- `GET /api/matches/:id/live`
- `POST /api/admin/ball-event` (admin)

## Scalability Notes
- Add Kafka/NATS for high-scale live ingestion.
- Move AI jobs to queue workers.
- Enable CDN edge caching for static data.
- Add OpenTelemetry + Prometheus.
