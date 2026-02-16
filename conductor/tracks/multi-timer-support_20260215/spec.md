# Track Specification: Multi-Timer Support

## Goal

Enable users to track time on multiple tasks simultaneously within the "Today" view, providing a clear overview of all active work streams.

## Core Features

1.  **Concurrent Timer Logic:**
    - Update the task model and state management (NgRx) to support multiple tasks having an "active" status simultaneously.
    - Ensure that starting a new timer does _not_ automatically stop other running timers.
    - Persist the start times of all active tasks correctly.

2.  **Active Timers Dashboard:**
    - Create a new UI component at the top of the "Today" view (e.g., `<active-timers-dashboard>`).
    - This component should display a list of all currently running tasks.
    - Each item in the dashboard should show:
      - Task Title
      - Current Duration (updating in real-time)
      - Stop Button
    - Clicking an item should navigate to or focus the task in the main list.

3.  **Task List Updates:**
    - Update the main task list items to reflect the multi-active state.
    - Ensure visual indicators (e.g., play/pause icons, highlighting) correctly represent multiple active tasks.

4.  **Data & Persistence:**
    - Ensure that time tracking calculations (total time spent) account for overlapping intervals correctly if required by the reporting logic (or treat them as independent parallel streams, summing up to > 24h/day if necessary).
    - _Decision:_ For this iteration, we will treat time streams as independent. If a user runs two tasks for 1 hour, the total time logged is 2 hours.

## Technical Constraints

- Must maintain performance with 5+ active timers.
- Must work seamlessly across Desktop (Electron) and Mobile (Capacitor).
- Must not break existing integrations (Jira/GitHub) which may expect a single active task. _Note:_ External integrations typically log time against a specific issue. We will sync time updates for each task independently.

## UI/UX

- **Dashboard:** prominent, sticky at the top of the view.
- **Style:** Minimalist, using existing Material Design tokens.
