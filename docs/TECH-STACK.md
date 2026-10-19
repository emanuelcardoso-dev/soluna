# Soluna Tech Stack

Soluna is a shared family calendar designed for a tablet mounted on the fridge, with weekly/monthly planning, household categories, family-member filters, and routine tracking.

## Core application

- **Next.js (App Router)**: framework, routing, layouts, Server Components, Server Actions, Route Handlers.
- **React**: interactive UI components.
- **TypeScript** (strict): typed events, members, routines and app logic.
- **Tailwind CSS**: responsive styling, gradients, glass effects. Put the accent color (#7C5CFF), fonts (Plus Jakarta Sans) and radii in the Tailwind config as design tokens.
- **Lucide React**: line icons.
- **Custom SVG components**: the logo and the five routine illustrations (get dressed, breakfast, brush teeth, pack daycare bag, story and bedtime) are hand-built.
- **shadcn/ui + Radix UI**: added later, when building the event dialog, dropdowns and settings forms.

## Forms and validation

- **React Hook Form**: event forms, household settings, routine editing (added with the first form).
- **Zod**: validate form data and all untrusted server input.
- **date-fns**: date formatting, week/month navigation, calendar calculations.

## Backend and persistence

- **Next.js Server Actions and Route Handlers**: server-side operations and API endpoints.
- **PostgreSQL**: users, households, memberships, events, recurrence rules, routines, completion history. Run locally with Docker Compose.
- **Prisma ORM**: typed database access and migrations.
- **Auth.js**: authentication and sessions, added after event CRUD works. Clerk is an alternative if managed auth is preferred.

### Security requirements

- Validate untrusted input on the server.
- Check household membership and permissions on every relevant read and write.
- Do not rely on hiding UI elements as authorization.
- Keep secrets in environment variables; never commit real credentials.
- Define timezone behavior before implementing recurring events.

## Testing and code quality

- **Vitest**: unit tests.
- **React Testing Library**: component behavior tests.
- **Playwright**: end-to-end tests (sign-in, calendar navigation, event management, household access).
- **ESLint** and **Prettier**: linting and formatting.
- **GitHub Actions**: CI for lint, tests and build.

## Deployment and monitoring

- **Vercel**: hosts the Next.js app.
- **Neon**: hosted PostgreSQL.
- **Sentry**: optional error monitoring after deployment.

## Optional additions (only when there is a concrete need)

- **@dnd-kit**: drag-and-drop calendar events.
- **TanStack Query**: client-side server-state caching for complex interactive flows.

## Architecture

```text
Browser
  |
  v
Next.js UI
(React + TypeScript + Tailwind CSS)
  |
  v
Server Actions / Route Handlers
  |-- Zod validation
  |-- Authentication
  |-- Household authorization
  |
  v
Prisma ORM
  |
  v
PostgreSQL
```

## Implementation order

1. Recreate the responsive Soluna "Balanced" design as a static page with mock data (week grid, filter chips, Today highlight, routine cards). Cover tablet and phone breakpoints with large touch targets.
2. Add week/month navigation, member filters, event forms and routine interactions.
3. Add PostgreSQL and Prisma migrations; implement event CRUD.
4. Add authentication, household membership and server-side authorization.
5. Add recurring events and robust timezone handling.
6. Add unit, integration and end-to-end tests.
7. Deploy, set up CI, document the architecture and prepare safe demo data.

## Official documentation

- Next.js: https://nextjs.org/docs
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs
- Prisma: https://www.prisma.io/docs
- PostgreSQL: https://www.postgresql.org/docs/
- Auth.js: https://authjs.dev/
- Zod: https://zod.dev/
- React Hook Form: https://react-hook-form.com/
- date-fns: https://date-fns.org/
- Vitest: https://vitest.dev/
- Playwright: https://playwright.dev/docs/intro
- Vercel: https://vercel.com/docs
