# Soluna — Project Plan

> **A family calendar and routine planner designed for a shared fridge-door display, bringing everyone together and helping children gradually learn, participate in, and shape family life.**

**Project name:** Soluna  
**Project type:** Personal software engineering and portfolio project  
**Initial platform:** Web application  
**Initial language:** English  
**Status:** Planning and early development

---

## 1. Project Overview

Soluna is a shared family calendar and daily routine planner designed to help everyone in a household stay connected, understand each other's plans, and make the most of their time together.

The main concept is a calendar displayed on a screen in the home, ideally on the fridge door, where family members can quickly see the week's plans and understand what is happening today. A web application will allow the family to manage events and routines, with the possibility of expanding to dedicated display hardware and Apple Watch integration in the future.

Soluna also places importance on children's development. Predictable daily structure can help children understand what to expect and navigate everyday transitions. Visual routines and simple interactions can help them participate in family life and gradually develop independence, in ways appropriate to their age and abilities.

Soluna is not about scheduling every minute or enforcing a perfect routine. It is about creating a flexible, shared family rhythm that supports connection, clarity, and more time for what matters.

## 2. Vision and Goals

### Vision

Create a shared family planning experience that keeps family members connected, makes everyday life easier to understand, and helps the family make the most of its time together.

### Main goals

- Keep family members informed about shared events, activities, and responsibilities.
- Make the weekly family plan easy to understand at a glance.
- Help children understand what happens next through visible, predictable routines.
- Give children age-appropriate ways to participate in routines and gradually develop independence.
- Help parents coordinate family life with less mental effort and fewer repeated reminders.
- Create more opportunities for quality time by making plans and expectations clearer.
- Design an interface suitable for a fridge-mounted display while remaining usable on other devices.
- Keep household information private and synchronize it safely across authorized devices.
- Build the project using professional software engineering practices and use it as a portfolio project.

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

The MVP is the smallest complete version of Soluna that a family can use to coordinate its week and follow everyday routines in one shared place. It must support both adults' need for a family overview and children's need to understand their day and participate in age-appropriate ways.

### 5.1 Core outcomes

The MVP should let a family:

1. **See the family's plans:** understand what is happening this week and when.
2. **Understand today's rhythm:** see relevant daily routines in a clear sequence, including what comes next.
3. **Participate:** mark a routine as complete and see that completion reflected in the app.
4. **Stay in sync:** access the same household information from authorized devices.

### 5.2 Must-have features

#### A. Weekly family calendar

- Display Monday through Sunday.
- Highlight the current day and provide navigation to previous and next weeks.
- Show event title, date, start time, and end time.
- Provide a clear, readable overview on desktop and a landscape tablet-sized display.
- Provide a usable responsive layout on mobile browsers.

#### B. Event management

- Create an event with a title, date, start time, and end time.
- Edit and delete an event.
- Validate required fields and prevent invalid time ranges.
- Show useful loading, empty, success, and error states.
- Persist events so they remain available when the app is reopened or accessed on another authorized device.

#### C. Daily routines

- Create and edit reusable routine definitions, such as getting dressed, brushing teeth, preparing a bag, or bedtime.
- Give routines a title and optional simple icon; allow a basic recurrence pattern such as selected weekdays.
- Show the routines relevant to the selected day in a clear checklist or sequence.
- Let a user mark a routine as complete for that date and undo the completion if needed.
- Store completions separately from routine definitions so a routine can recur without creating a new routine each day.
- Keep a completion for one date separate from its completion on another date.

#### D. Shared household access and data protection

- Provide authenticated access to private family data for the MVP release.
- Support a basic household membership model so household data is available only to authorized members.
- Protect database reads and writes with tested access policies, including Supabase Row Level Security (RLS) if Supabase remains the chosen backend.
- Never expose privileged service keys in browser code or public repository files.
- Use fictional demo data in public screenshots and portfolio demonstrations.

#### E. Fridge-display-friendly experience

- Make the main calendar and routine interactions comfortable to use on a touchscreen.
- Use readable text, clear visual hierarchy, sufficient contrast, and appropriately large touch targets.
- Test the responsive web app on a real tablet before considering dedicated display hardware.
- The first version may run in a normal browser; a dedicated kiosk mode is not required for the MVP.

#### F. Language and quality baseline

- Launch the interface in English.
- Keep user-facing text structured so more languages can be added later, but full translations are not required for the MVP.
- Include automated tests for important date/routine logic and core user interactions.
- Document how to install, run, test, and configure the application.

### 5.3 Explicitly outside the MVP

Do not build these for the initial release:

- Arduino, ESP32, e-paper, or other custom fridge hardware.
- Apple Watch or other wearable apps.
- Smart-home or Home Assistant integrations.
- Push notifications, reminders, or AI-assisted scheduling.
- External calendar synchronization.
- Multiple household profiles with complex role and permission systems.
- Full Portuguese, Spanish, and Swedish translations.
- A child account or reward system; children can participate through simple, supervised interactions in the shared household interface.
- Advanced drag-and-drop planning or elaborate analytics.

These ideas can be reconsidered after the basic web experience has been tested with real family use.

### 5.4 MVP user stories

- **As a family member,** I want to see the family's week in one place so I can understand upcoming plans.
- **As a parent or caregiver,** I want to create, edit, and remove events so the shared calendar stays accurate.
- **As a parent or caregiver,** I want to define recurring routines so I do not have to recreate the same activities every day.
- **As a child,** I want to see what comes next so the day feels easier to understand.
- **As a child with appropriate support,** I want to mark a routine as complete so I can take part in everyday responsibilities.
- **As a household member,** I want the family's information to stay synchronized and private so that everyone sees the correct plan without exposing it to strangers.

### 5.5 Acceptance criteria for the MVP

The MVP is ready for family testing when all of the following are true:

- [ ] An authorized user can sign in and access the household's calendar.
- [ ] The calendar displays Monday through Sunday, highlights today, and supports week navigation.
- [ ] An authorized user can create, edit, and delete an event; changes persist after reload.
- [ ] Invalid event details are rejected with understandable feedback.
- [ ] An authorized user can create and edit a routine and select the weekdays on which it should appear.
- [ ] The routine list for a selected date shows the routines scheduled for that day.
- [ ] A routine can be marked complete and unmarked; the completion is associated with the selected date and remains saved after reload.
- [ ] Calendar events and routine data are visible only to authorized members of the relevant household, verified with permission tests.
- [ ] The main flows work on desktop, mobile, and a landscape tablet viewport; touch targets and text remain usable.
- [ ] Loading, empty, validation, and error states are handled for the core flows.
- [ ] Automated tests cover the main event and routine behaviors, and lint/build checks pass.
- [ ] Setup and testing instructions are documented in the repository.

### 5.6 First GitHub task: Define Soluna's MVP features

**Goal:** Turn the product vision into an agreed, bounded first-release scope before implementation grows.

**Task:** Review the problem statement, core outcomes, must-have features, non-goals, user stories, and acceptance criteria in this section. Adjust wording or priorities where needed, then treat this section as the source of truth for the initial release.

**Deliverable:** An MVP specification committed to the repository and linked from the project plan. A separate `docs/MVP.md` file may be created later if it is useful to keep the specification independently accessible.

**This planning issue is complete when:**

- [ ] The problem and intended users are clearly stated.
- [ ] Must-have and out-of-scope features are explicitly separated.
- [ ] Core user stories describe the adult and child experiences.
- [ ] Each MVP feature has observable acceptance criteria.
- [ ] The scope is small enough to build and test before starting hardware or wearable work.

### 5.7 Implementation order

Build in this order to reduce risk:

1. Sketch the weekly calendar and today's routine view.
2. Set up the React, TypeScript, and Vite foundation.
3. Build the main screens with sample data.
4. Implement event and routine interactions and their tests.
5. Add authentication, persistence, household access controls, and RLS.
6. Test responsive layouts and the core user journeys.
7. Deploy a private or appropriately protected test version and try it on a tablet.

The backend may be introduced after the main UI flow is clear during development, but secure persistence and household access controls are required before the MVP is used with real family data.

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

Check file TECH-STACK.md.

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

1. Complete the GitHub issue **Define Soluna's MVP features** using the scope and acceptance criteria in Section 5.
2. Sketch the combined weekly family calendar and today's routine experience.
3. Set up the React, TypeScript, and Vite application.
4. Build the first calendar screen with sample data.
5. Implement event management and routine completion.
6. Add secure persistence, authentication, household access controls, and RLS before using real family data.
7. Test the core flows on desktop, mobile, and a landscape tablet.

Do not begin with dedicated hardware, Apple Watch, or smart-home development.

## 20. Long-Term Vision

Soluna aims to grow from a simple family calendar into a shared household experience that connects schedules, routines, and everyday participation.

The fridge display will serve as a visible family hub. The web application will provide the main planning interface, while future wearable and smart-home integrations may make routines easier to follow throughout the day.

As children grow, Soluna should help them move from simply seeing the family plan to understanding it, contributing to it, and eventually taking an active role in shaping it.

The goal is not to make every moment of family life scheduled. It is to create more clarity, collaboration, and time for what matters.

---

**Soluna — Our family. Our world. Our rhythm.**
