# University Management System (UMS) — Frontend

A modern, modular university management system frontend built with React 19, TypeScript, PrimeReact, and Tailwind CSS. Features a clean workspace-OS interface with modular dashboards for administration, academics, finance, governance, employee services, and campus events.

## Tech Stack

- **Core:** React 19 + TypeScript
- **Build:** Vite
- **UI:** PrimeReact, Tailwind CSS v4, Motion
- **State:** Zustand, TanStack React Query
- **Routing:** React Router v7
- **Forms:** React Hook Form + Joi
- **Charts:** Chart.js
- **Icons:** PrimeIcons + Material Symbols (Outlined)

## Project Structure

```
src/
├── config/              # App config, menu routes, constants
├── features/            # Feature modules
│   ├── home/            # Landing page, menu grid, service tiles
│   ├── master/          # Master data management
│   ├── sis/             # Student information system
│   └── _temp-dashboards/# Demo dashboards (CAS, FSCM, Core, Employee, etc.)
├── services/            # API layer, query hooks
├── shared/              # Reusable components, layouts, hooks
│   ├── components/      # Layout, tiles, workspace chrome
│   └── new-components/  # Design system (FormCard, Sidebar, Tabs, Stepper, etc.)
└── types/               # Global TypeScript definitions
```

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check only |

## Docker

```bash
docker compose up --build    # runs on port 5200
```

## Modules

- **Login** — Minimal white/black authentication page
- **Home** — Service grid with categorized modules
- **Master Data** — Location, subject, faculty, HR, college, grants, schemes
- **Dashboards** — CAS, FSCM, Core Overview, Programme, Admissions, Feedback, E-Housing, Communication, Affiliation, Employee Management, User Management
- **Employee Services** — Registration (quick/full onboarding), Directory, Settings
- **Get Involved** — Interactive calendar with 150+ events, event creation form
- **Profile** — Student profile with academic details, edit profile form
