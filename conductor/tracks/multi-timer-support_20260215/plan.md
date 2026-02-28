# Implementation Plan - Multi-Timer Support [checkpoint: 334a061]

## Phase 1: Core Logic Update (Task Model & State) [checkpoint: 334a061]

- [x] Task: Create feature branch `feat/multi-timer-logic` 20bb3de
- [x] Task: Update Task Model 334a061
- [x] Task: Update NgRx State Management 334a061
- [x] Task: Verify Persistence 334a061
- [x] Task: Conductor - User Manual Verification 'Core Logic Update (Task Model & State)' 334a061

## Phase 2: UI Implementation (Dashboard Component)

- [ ] Task: Create `ActiveTimersDashboardComponent`
  - [ ] Generate the new component using Angular CLI.
  - [ ] Implement the template to display a list of active tasks.
  - [ ] Use `TaskService` (or relevant facade) to select active tasks from the store.
  - [ ] Write unit tests for component rendering.
- [ ] Task: Integrate Dashboard into Today View
  - [ ] Add the `ActiveTimersDashboardComponent` to the top of the `WorkViewPageComponent` (or relevant page).
  - [ ] Ensure it updates reactively when tasks start/stop.
  - [ ] Write E2E test to verify the dashboard appears and updates correctly.
- [ ] Task: Conductor - User Manual Verification 'UI Implementation (Dashboard Component)' (Protocol in workflow.md)

## Phase 3: Task List Updates & Integration

- [ ] Task: Update Task List Item Component
  - [ ] Modify `TaskComponent` (or list item) to correctly display the active state for multiple tasks (e.g., play/pause icons).
  - [ ] Ensure click handlers for start/stop work correctly with the new multi-timer logic.
  - [ ] Write unit tests for updated task item interactions.
- [ ] Task: Verify External Sync Logic
  - [ ] Check if `JiraIssueService` or `GithubIssueService` assumes a single active task.
  - [ ] If necessary, refactor to sync time updates for each active task independently.
  - [ ] Write integration test for multi-task sync (mocked external service).
- [ ] Task: Conductor - User Manual Verification 'Task List Updates & Integration' (Protocol in workflow.md)

## Phase 4: Final Polish & Verification

- [ ] Task: Performance Check
  - [ ] Verify UI responsiveness with 5+ active timers.
  - [ ] Check CPU usage during multiple active timers.
- [ ] Task: Cross-Platform Check
  - [ ] Build and run on Electron (Desktop).
  - [ ] Build and verify on Mobile (Android/iOS simulator).
- [ ] Task: Conductor - User Manual Verification 'Final Polish & Verification' (Protocol in workflow.md)
