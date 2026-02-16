# Technology Stack - Super Productivity

## Core Frontend

- **Framework:** Angular 21 (State management via NgRx)
- **UI Framework:** Angular Material
- **Styling:** SCSS (following BEM where applicable)
- **Icons:** Material Symbols

## Platforms & Runtime

- **Runtime:** Node.js (v22.18.0)
- **Desktop:** Electron
- **Mobile:** Capacitor (supporting Android and iOS)
- **Persistence:** IndexedDB (local-first storage)

## Development & Tooling

- **Build Tool:** Angular CLI
- **Packaging:** Electron Builder
- **Linting:** ESLint & Stylelint
- **Formatting:** Prettier
- **Git Hooks:** Husky

## Testing

- **End-to-End (E2E):** Playwright
- **Unit Testing:** Jasmine & Karma
- **Type Safety:** TypeScript (strict mode)

## Architecture

- **Monorepo:** Organized with `packages/` for shared logic and plugins.
- **Service-Oriented:** Heavy use of Angular Services for cross-component logic and state management.
