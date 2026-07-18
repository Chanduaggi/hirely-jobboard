# Hirely — Job Board Web Application

A modern, responsive job board built with **React + Vite + Tailwind CSS** on the frontend and an **Express + MongoDB** API on the backend. This document is the AI-generated feature documentation for the project, plus setup, CI/CD, and deployment instructions.

> This project was scaffolded end-to-end (frontend, backend, CI/CD config, and docs) with AI assistance as part of a take-home engineering assessment.

---

## 1. Feature Overview

| Screen | Route | Description |
|---|---|---|
| Landing Page | `/` | Hero search, featured companies, popular categories, platform stats, featured jobs, testimonials, CTA |
| Login | `/login` | Email/password sign-in |
| Register | `/register` | Name/email/password sign-up |
| Jobs Listing | `/jobs` | Sidebar filters (search, type, experience, salary, location, work mode), sortable results, skeleton loading state, empty state |
| Job Details | `/jobs/:id` | Full job description, responsibilities, requirements, skills, benefits, apply/visit-website actions, similar jobs |
| Saved Jobs | `/saved` | Bookmarked jobs grid, empty state for logged-out or zero-saved users |
| Profile | `/profile` | Avatar, name, email, saved job count, edit/logout actions |
| Admin Dashboard | `/admin` | KPI stats, tabbed tables for Jobs / Companies / Users with search, edit, delete |
| Add/Edit Job | `/admin/jobs/new`, `/admin/jobs/:id/edit` | Full job posting form with validation |
| 404 | any unmatched route | Friendly not-found state with a way back home |
| Loading states | `/loading-demo` | Skeleton cards and skeleton profile used across the app while data loads |
| Error state | `/error-demo` | Friendly error illustration with a retry action |

### Cross-cutting features
- **Dark / light mode** — toggle in the navbar, persists via `prefers-color-scheme` on first load and a React context afterward.
- **Responsive design** — mobile-first layout, tested down to 360px width, with a collapsible mobile nav.
- **Accessibility** — visible focus rings, semantic form labelling (`fieldset`/`legend`), sufficient color contrast, alt/aria labels on icon-only buttons.
- **Reusable component library** — `Navbar`, `Footer`, `JobCard`, `Filters`, `Skeletons`, `EmptyState` are shared across every page.

---

## 2. Tech Stack

**Frontend:** React 18, Vite 5, React Router 6, Tailwind CSS 3, Lucide icons
**Backend:** Node.js, Express, Mongoose (MongoDB), JWT auth, bcrypt password hashing
**CI/CD:** GitHub Actions → build/lint → deploy to Vercel
**Hosting:** Vercel (frontend); backend deploys separately to any Node host (Render, Railway, Fly.io, etc.) since Vercel's serverless model isn't a natural fit for a long-lived MongoDB connection pool.

---

## 3. Project Structure

```
jobboard/
├── frontend/                 # React + Vite + Tailwind app
│   ├── src/
│   │   ├── components/       # Navbar, Footer, JobCard, Filters, Skeletons, EmptyState
│   │   ├── pages/             # One file per screen listed above
│   │   ├── context/          # AuthContext, ThemeContext
│   │   ├── data/mockData.js  # Sample jobs/companies/users powering the UI out of the box
│   │   └── App.jsx           # Route definitions
│   └── vercel.json
├── backend/                  # Express + MongoDB API
│   ├── models/                # Job, Company, User (Mongoose schemas)
│   ├── routes/                 # auth, jobs, companies, users
│   ├── middleware/auth.js     # JWT verification + admin guard
│   ├── seed.js                 # Populates sample data
│   └── server.js
└── .github/workflows/deploy.yml
```

---

## 4. Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```
The frontend runs standalone using `src/data/mockData.js` — no backend or database is required to explore every screen.

### Backend (optional, for real persistence)
```bash
cd backend
cp .env.example .env    # fill in MONGODB_URI and JWT_SECRET
npm install
npm run seed             # loads sample companies/jobs into MongoDB
npm run dev               # http://localhost:5000
```

To connect the frontend to the live API instead of mock data, point your API calls at `http://localhost:5000/api` (see `backend/routes` for available endpoints) and set `CLIENT_ORIGIN` in the backend `.env` to your frontend URL.

---

## 5. API Reference (backend)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | — | Create a candidate account |
| POST | `/api/auth/login` | — | Log in, returns a JWT |
| GET | `/api/jobs` | — | List jobs, supports `?query=&location=&type=&remote=` |
| GET | `/api/jobs/:id` | — | Job details |
| POST | `/api/jobs` | Admin | Create a job |
| PUT | `/api/jobs/:id` | Admin | Update a job |
| DELETE | `/api/jobs/:id` | Admin | Delete a job |
| GET | `/api/companies` | — | List companies |
| POST/PUT/DELETE | `/api/companies/:id` | Admin | Manage companies |
| GET | `/api/users/me` | Candidate | Current user profile + saved jobs |
| POST | `/api/users/me/saved-jobs/:jobId` | Candidate | Toggle a saved job |

---

## 6. CI/CD Pipeline

`.github/workflows/deploy.yml` runs on every push/PR to `main`:
1. **Install & lint** the frontend.
2. **Build** the Vite app (`npm run build`).
3. **Upload** the build as a workflow artifact for inspection.
4. On pushes to `main`, **deploy to Vercel** using the Vercel CLI in prebuilt mode.

### Required GitHub Secrets
Add these under **Repo → Settings → Secrets and variables → Actions**:
- `VERCEL_TOKEN` — from Vercel → Account Settings → Tokens
- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` — from running `vercel link` locally once, which creates a `.vercel/project.json` containing both values

---

## 7. Deploying Manually to Vercel

```bash
cd frontend
npm install -g vercel
vercel login
vercel link      # creates .vercel/project.json (org + project IDs)
vercel --prod
```

---

## 8. Notes on This Assessment Submission

This repository was built as a self-contained demo: the frontend works fully on mock data so reviewers can evaluate UX and feature completeness without provisioning a database. The backend is a real, runnable Express + MongoDB API with auth, CRUD, and validation, structured so it could be wired to the frontend with a thin API client layer in place of `src/data/mockData.js`.
