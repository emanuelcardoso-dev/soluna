# Soluna — Project Plan

> **A family calendar and routine planner designed for a shared fridge-door display, bringing everyone together and helping children gradually learn, participate in, and shape family life.**

**Project name:** Soluna  
**Project type:** Personal software engineering and portfolio project  
**Initial platform:** Web application  
**Initial language:** English  
**Status:** Planning and early development

---

## 1. Project Overview

Soluna is a family calendar and routine planner designed to help families organize their schedules, activities, and everyday routines in one shared place.

The main concept is to have a calendar displayed on the fridge door, making the family's plans visible and accessible to everyone at home. A web application will allow family members to manage schedules and routines, with the possibility of expanding to dedicated fridge-display hardware and Apple Watch integration in the future.

Soluna is also designed to help children gradually become involved in family planning. Through simple visuals, recognizable activity icons, and interactive routines, children can begin learning about daily schedules, responsibility, time, and decision-making as they grow.

The long-term vision is to make family planning more collaborative, visual, accessible, and enjoyable.

## 2. Vision and Goals

### Vision

Create a shared family planning experience that brings everyday life into harmony and helps every family member feel included.

### Main goals

- Bring family schedules, activities, and routines together in one place.
- Make the weekly family plan easy to understand at a glance.
- Design an interface suitable for a fridge-mounted display.
- Allow parents to manage family events and recurring routines.
- Encourage children to participate in age-appropriate planning activities.
- Make everyday routines more visual, engaging, and predictable.
- Keep family information synchronized across devices.
- Build a foundation for future smart-home and wearable integrations.
- Develop the project using professional software engineering practices.
- Use Soluna as a portfolio project demonstrating frontend, backend, testing, deployment, and system design skills.

## 3. Target Users

### Primary users: Parents and caregivers

Parents and caregivers need a convenient way to coordinate family schedules, manage recurring activities, and make plans visible to the entire household.

### Secondary users: Children

Children should be able to understand simple parts of the family schedule and gradually participate in planning.

Depending on their age, participation could include:

- Recognizing activities through illustrations and icons.
- Seeing what happens next.
- Choosing between suitable activities offered by a parent.
- Helping prepare for upcoming activities.
- Marking a routine as completed with appropriate supervision.
- Gradually learning to understand weekly schedules.

The interface should adapt to children's abilities without giving young children unrestricted access to household settings or sensitive information.

## 4. Core Product Principles

### Family first

Soluna should support the needs of the household rather than turn family life into a complicated productivity system.

### Visual and accessible

The calendar should be easy to understand from a distance, especially on a fridge-mounted display.

### Child-friendly

Use recognizable icons, simple language, predictable interactions, and age-appropriate choices.

### Collaborative

Family members should be able to contribute to planning according to their roles and permissions.

### Multilingual by design

The application will launch in English but should be structured to support Portuguese, Spanish, and Swedish later.

### Privacy and security

Family schedules and household information must be accessible only to authorized users.

### Built to grow

The initial architecture should support future devices and features without making the first version unnecessarily complicated.

## 5. Minimum Viable Product (MVP)

The MVP is the smallest useful version of Soluna that can be tested by a family.

### Essential features

#### 5.1 Weekly family calendar

- Display the week from Monday to Sunday.
- Show scheduled family events and activities.
- Display event titles, dates, and times.
- Provide clear navigation between weeks.
- Highlight the current day.
- Present information in a readable layout.

#### 5.2 Event management

- Create a family event.
- Edit an existing event.
- Delete an event.
- Assign a date and time.
- Display events on the calendar.
- Validate required information.
- Handle empty and error states.

#### 5.3 Daily routines

- Create routine definitions, such as morning preparation or bedtime.
- Support recurring routines.
- Display routines in a simple checklist.
- Mark a routine as completed.
- Record completion separately from the routine definition.
- Allow routines to be reused without creating duplicates every day.

#### 5.4 Responsive interface

- Support desktop and laptop screens.
- Support mobile browsers.
- Provide a clear layout for a future tablet or fridge display.
- Ensure important controls are usable with touch input.

#### 5.5 Basic household support

The initial data model should accommodate a household and multiple authorized family members.

Full household collaboration can be introduced after the basic calendar works locally.

### Features outside the initial MVP

These are planned possibilities, not requirements for the first release:

- Dedicated touchscreen hardware.
- E-paper display support.
- Apple Watch application.
- Smart-home integrations.
- Push notifications.
- Advanced family permissions.
- Child-specific interactive modes.
- Multiple interface languages.
- AI-assisted scheduling.
- External calendar integrations.

## 6. Future Features

### Child-friendly planning

- Visual activity cards.
- Morning, afternoon, and bedtime routine views.
- Simple ways for children to help select activities.
- Age-appropriate completion interactions.
- Optional rewards or progress indicators, if they support healthy habits.
- Gradual participation as children grow.

### Fridge-door display

- A large-format weekly overview.
- High-contrast text and recognizable icons.
- Touch-friendly controls.
- A simplified display mode.
- Automatic refresh when family plans change.
- Recovery after network interruptions.
- A kiosk-style interface that stays on the calendar.

### Multilingual support

Planned languages:

1. English — initial release.
2. Portuguese.
3. Spanish.
4. Swedish.

The application should support different language preferences for individual family members in a future release.

### Apple Watch

Potential features include:

- Viewing today's activities.
- Checking the next scheduled event.
- Viewing assigned routines.
- Marking supported routines as completed.
- Receiving optional reminders.

### Smart-home integration

Potential future integrations include:

- Home Assistant.
- Smart displays.
- Household lighting or other suitable devices.
- Contextual routine reminders.

Smart-home actions must be permission-controlled and designed with safety in mind.

## 7. Technology Stack

The initial stack should be approachable, maintainable, and suitable for a portfolio project.

### Frontend

- React
- TypeScript
- Vite
- CSS Modules or Tailwind CSS
- React Testing Library
- Vitest

### Backend and database

- Supabase
- PostgreSQL
- Supabase Authentication
- Row Level Security (RLS)
- Database migrations

### Development tools

- Visual Studio Code
- Git
- GitHub
- GitHub Issues
- GitHub Projects

### Quality assurance

- Vitest for unit tests.
- React Testing Library for component tests.
- Playwright for end-to-end tests.
- ESLint for linting.
- Prettier for consistent formatting.
- GitHub Actions for continuous integration.

### Deployment

- Vercel or another suitable frontend hosting platform.
- Supabase for backend services.

### Future hardware and platforms

- SwiftUI and watchOS for Apple Watch.
- An existing tablet for the first fridge-display prototype.
- Potential ESP32 touchscreen or e-paper hardware for a later dedicated display.

Technology choices may change if testing or implementation reveals a better solution.

## 8. Internationalization and Localization

Soluna should be prepared for multiple languages from the beginning, even though the initial interface will be English-only.

### Implementation principles

- Avoid hardcoding user-facing text throughout components.
- Store interface strings in translation files.
- Use stable translation keys.
- Format dates and times according to locale.
- Support localized weekday and month names.
- Keep user-created event titles separate from translated interface text.
- Account for the household's configured time zone.
- Design components so text expansion does not break the layout.

### Proposed translation files

- `en.json`
- `pt.json`
- `es.json`
- `sv.json`

A library such as i18next can be evaluated for managing translations.

The initial implementation should only require complete English translations. Other languages can be added incrementally.

## 9. Data Model

The database should distinguish between recurring definitions and individual scheduled occurrences or completions.

### Proposed entities

#### Profiles

Stores information associated with an authenticated user.

Possible fields:

- `id`
- `display_name`
- `preferred_locale`
- `created_at`

#### Households

Represents a family or household.

Possible fields:

- `id`
- `name`
- `timezone`
- `created_at`

#### Household members

Connects users to households.

Possible fields:

- `id`
- `household_id`
- `user_id`
- `role`
- `created_at`

#### Events

Represents scheduled family activities.

Possible fields:

- `id`
- `household_id`
- `title`
- `description`
- `starts_at`
- `ends_at`
- `created_by`
- `created_at`
- `updated_at`

#### Routine definitions

Represents reusable activities or routines.

Possible fields:

- `id`
- `household_id`
- `title`
- `description`
- `icon`
- `recurrence_rule`
- `active`
- `created_at`
- `updated_at`

#### Routine completions

Records when a routine is completed.

Possible fields:

- `id`
- `routine_id`
- `household_id`
- `completed_by`
- `completed_for_date`
- `completed_at`

The final schema should be validated during implementation. Constraints, indexes, recurrence handling, and completion uniqueness should be designed to match actual application behavior.

## 10. Security and Privacy

Family schedules can reveal sensitive information about household members, so privacy must be considered from the beginning.

- Require authentication for private family data.
- Restrict household data to authorized household members.
- Enable and test Row Level Security policies.
- Never expose service-role or other privileged secrets in frontend code.
- Store environment-specific configuration securely.
- Validate input on both client and server sides where applicable.
- Avoid collecting unnecessary personal information.
- Keep children's participation age-appropriate.
- Do not expose private family schedules in public portfolio screenshots or demo data.
- Use fictional data in public demonstrations.
- Review permissions before adding integrations or shared displays.

## 11. User Experience and Design

### Visual direction

Soluna should feel warm, calm, modern, and welcoming.

The visual identity should balance a family-friendly appearance with a clean, professional interface.

### Design considerations

- Clear visual hierarchy.
- Readable typography.
- Consistent spacing.
- Recognizable activity icons.
- Carefully chosen colors with sufficient contrast.
- Large touch targets for tablet use.
- Responsive layouts for different screen sizes.
- Clear feedback after interactions.
- Accessible keyboard navigation.
- Screen-reader support for important controls.

### Initial screens

1. Weekly calendar.
2. Event creation and editing.
3. Routine list.
4. Routine creation and editing.
5. Basic household settings.

The fridge-display layout can initially be a responsive variant of the weekly calendar rather than a separate application.

## 12. Development Roadmap

### Phase 1 — Product planning

- Define the problem Soluna solves.
- Identify target users.
- Define MVP features.
- Write user stories and acceptance criteria.
- Create the GitHub repository.
- Create the GitHub Projects board.
- Write project documentation.

**Deliverable:** A clear scope and an organized development plan.

### Phase 2 — UX and UI design

- Sketch the weekly calendar.
- Design desktop and mobile layouts.
- Plan the fridge-display view.
- Establish a basic design system.
- Define the main user flows.
- Review accessibility and child-friendly interactions.

**Deliverable:** Wireframes and an initial interface design.

### Phase 3 — Technical foundation

- Set up React, TypeScript, and Vite.
- Configure Git and the repository.
- Add linting and formatting.
- Establish a component structure.
- Add environment configuration.
- Create the initial README and development instructions.

**Deliverable:** A working local application with a clean project structure.

### Phase 4 — Frontend MVP

- Build the application layout.
- Create the weekly calendar.
- Add event creation and editing interfaces.
- Build routine lists and completion interactions.
- Add validation and user feedback.
- Implement responsive behavior.
- Test the core interface.

**Deliverable:** A usable frontend with sample data.

### Phase 5 — Backend and database

- Create the Supabase project.
- Design and apply database migrations.
- Configure authentication.
- Implement household membership.
- Add event and routine operations.
- Configure Row Level Security.
- Test database permissions.

**Deliverable:** A secure backend for family data.

### Phase 6 — Full-stack integration

- Connect the calendar to real data.
- Implement event management.
- Implement routine management.
- Persist routine completions.
- Handle loading and network errors.
- Test concurrent changes and permissions.
- Add cross-device updates where appropriate.

**Deliverable:** A functioning family calendar backed by real data.

### Phase 7 — Testing and quality

- Write unit tests.
- Add component tests.
- Test important user journeys.
- Verify authorization boundaries.
- Check keyboard accessibility.
- Test responsive layouts.
- Configure continuous integration.
- Resolve critical bugs.

**Deliverable:** A tested and maintainable MVP.

### Phase 8 — Deployment and portfolio

- Deploy the application.
- Configure production environment variables.
- Document local setup.
- Document architecture and technology decisions.
- Add screenshots or a demonstration video.
- Write a portfolio case study.
- Use fictional data for public demonstrations.

**Deliverable:** A publicly demonstrable version of Soluna.

### Phase 9 — Fridge-display prototype

- Test the application on an existing tablet.
- Create a readable display mode.
- Optimize touch interactions.
- Test automatic refresh.
- Handle network interruptions.
- Evaluate dedicated display hardware only after the tablet prototype is useful.

**Deliverable:** A practical household display prototype.

### Phase 10 — Wearables and smart home

- Explore a SwiftUI watchOS companion.
- Identify the most useful watch interactions.
- Add appropriate synchronization.
- Explore Home Assistant integration.
- Test permissions and failure behavior.
- Document supported devices and limitations.

**Deliverable:** A small, focused companion integration.

## 13. Testing Strategy

Testing should be introduced throughout development rather than postponed until the end.

### Unit tests

Test isolated functions, validation logic, date calculations, and recurrence-related behavior.

### Component tests

Test calendar interactions, forms, routine completion, and important UI states.

### Integration tests

Test communication between the frontend, backend, and database.

### End-to-end tests

Test critical workflows, including:

- Viewing the weekly calendar.
- Creating an event.
- Editing and deleting an event.
- Creating a recurring routine.
- Completing a routine.
- Verifying that unauthorized users cannot access household data.

### Manual testing

Test the application at different viewport sizes, with touch input, and on an actual tablet before investing in dedicated hardware.

## 14. Project Management

GitHub is the central workspace for code, documentation, and task tracking.

### Repository

Name: `soluna`

### Project board

Name: `Soluna Roadmap`

### Board statuses

- Todo
- In Progress
- In Review
- Done

### Working approach

- Create GitHub Issues for meaningful tasks.
- Keep issues small enough to complete and review.
- Define acceptance criteria for substantial features.
- Work on a limited number of tasks at a time.
- Use descriptive branch names and commit messages.
- Review changes before merging.
- Update documentation when important decisions change.
- Close issues when their acceptance criteria are met.

## 15. Definition of Done

A feature is considered complete when:

- It meets its stated requirements.
- It works in the intended user flow.
- Loading, empty, and error states are handled where relevant.
- It works at the supported screen sizes.
- Important interactions are accessible.
- Relevant automated tests pass.
- No sensitive information or secrets are exposed.
- Changes are committed and pushed to GitHub.
- Documentation is updated when necessary.
- The corresponding issue is moved to `Done`.

## 16. Success Criteria

The initial MVP will be considered successful when:

- A user can view a complete family week.
- A user can create, edit, and delete events.
- A user can create and reuse routines.
- Routine completions are stored correctly.
- The interface is usable on desktop and mobile.
- The application can be deployed and accessed reliably.
- Household data is protected by tested permissions.
- The project can be set up by following the documentation.

Longer-term success means the calendar becomes useful in everyday family life and children can gradually participate in age-appropriate planning.

## 17. Risks and Considerations

### Scope creep

The project could become too large if hardware, smart-home integrations, and multiple languages are attempted too early.

**Mitigation:** Complete the web MVP first and introduce future features incrementally.

### Data synchronization

Multiple family members may change schedules at the same time.

**Mitigation:** Establish clear update behavior, appropriate database constraints, and tests for conflicting changes.

### Recurring routines

Recurring schedules can become complicated when dates, time zones, or daylight-saving changes are involved.

**Mitigation:** Start with simple recurrence requirements and test date behavior carefully.

### Fridge-display usability

A responsive website may not automatically be readable from a distance.

**Mitigation:** Test on a real tablet and refine typography, contrast, and information density.

### Family privacy

Household schedules should not be exposed unintentionally.

**Mitigation:** Use secure authentication, tested access policies, and fictional data for public demonstrations.

## 18. Proposed Repository Structure

```text
soluna/
├── README.md
├── docs/
│   ├── PROJECT-PLAN.md
│   ├── FEATURES.md
│   └── TECH-DECISIONS.md
├── public/
├── src/
│   ├── components/
│   ├── features/
│   │   ├── calendar/
│   │   ├── events/
│   │   └── routines/
│   ├── hooks/
│   ├── lib/
│   ├── i18n/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── .env.example
├── .gitignore
├── package.json
└── vite.config.ts
```

The structure may evolve as the application grows. Keep it simple until there is a real reason to introduce more layers.

## 19. Current Priorities

The immediate priorities are:

1. Finalize the MVP scope.
2. Sketch the first weekly calendar interface.
3. Set up the React and TypeScript application.
4. Build the first visible calendar screen.
5. Add event and routine interactions.
6. Introduce the backend once the frontend flow is clear.

Do not begin with dedicated hardware or Apple Watch development.

## 20. Long-Term Vision

Soluna aims to grow from a simple family calendar into a shared household experience that connects schedules, routines, and everyday participation.

The fridge display will serve as a visible family hub. The web application will provide the main planning interface, while future wearable and smart-home integrations may make routines easier to follow throughout the day.

As children grow, Soluna should help them move from simply seeing the family plan to understanding it, contributing to it, and eventually taking an active role in shaping it.

The goal is not to make every moment of family life scheduled. It is to create more clarity, collaboration, and time for what matters.

---

**Soluna — Our family. Our world. Our rhythm.**
