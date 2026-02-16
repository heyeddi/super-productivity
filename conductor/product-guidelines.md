# Product Guidelines - Super Productivity

## Communication & Tone

- **Technical and Precise:** All user-facing text, error messages, and documentation should be technically accurate and concise. Avoid ambiguity and use industry-standard terminology where appropriate.
- **Utility-First:** Focus on providing the information the user needs to complete their task efficiently.

## Design & UI Philosophy

- **Visual Minimalism:** Prioritize a clean, focused interface. Use progressive disclosure for advanced features and settings to reduce cognitive load.
- **Functional Feedback:** Use subtle but clear visual cues (e.g., color indicators, progress bars) to convey status and state changes without cluttering the screen.
- **Consistency:** Adhere strictly to the established Material Design principles used throughout the app.

## Development Principles

- **API-First & Modular:** Design features with robust, internal APIs. Core logic should be isolated, and new features (like AI or advanced timers) should be developed as modular components or plugins to maintain a lean core and ensure long-term extensibility.
- **Performance-Centric:** All new code must be optimized for performance, especially when managing multiple concurrent timers and large task lists.

## Privacy & Security

- **Local-First & Data Ownership:** The user's machine is the primary source of truth. All data must reside locally by default.
- **Privacy by Design:** New features, especially those involving external services or AI, must require explicit user opt-in and use local processing whenever possible. Any external data transmission must be transparent and, where applicable, encrypted.
