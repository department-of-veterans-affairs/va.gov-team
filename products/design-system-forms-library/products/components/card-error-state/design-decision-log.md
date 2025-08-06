# Card Component Error State Design Decisions
Last updated: 08/06/2025

This document outlines the key design decisions made for implementing error states in the VA Design System Card component. These Architecture Decision Records (ADRs) capture the context, decisions, and consequences of our design choices to ensure consistency and provide guidance for future development.


- [ADR: 001 - Cards will not support success, warning, or info states](#ADR-001---Cards-will-not-support-success-warning-or-info-states)
- [ADR: 002 - User must be able to resolve the error](#ADR-002---User-must-be-able-to-resolve-the-error)
- [ADR: 003 - Default tag will be used for launch](#ADR-003---Default-tag-will-be-used-for-launch)
- [ADR: 004 - The card will be interactive when in the error state](#ADR-004---The-card-will-be-interactive-when-in-the-error-state)
- [ADR: 005 - Figma update for card error state will be a breaking change](#ADR-005---Figma-update-for-card-error-state-will-be-a-breaking-change)


## ADR 001 - Cards will not support success, warning, or info states

### Status: Accepted

- Date issue raised: 07/17/2025
- Decision date: 07/17/2025

### Context
Many design system components support multiple status states (warning, error, success, and info) that operate similarly to communicate various conditions to users.

### Decision
We have decided to limit card status indicators to only the error state. Other status states are not being considered at this time and are not planned for the immediate future.

### Consequences
- Teams that want to communicate success, warning, or info states will need to use alternative approaches
- When error states are resolved, teams cannot show a success state directly on the card
- Teams are encouraged to use other alert components in combination with cards to communicate non-error states

### Open Questions
N/A

## ADR 002 - User must be able to resolve the error

### Status: Accepted

- Date issue raised: 07/17/2025
- Decision date: 08/04/2025

### Context
Cards sometimes represent errors caused by API failures or system issues that users cannot directly correct. We want to reserve the card error state specifically for errors that users can take action to resolve.

### Decision
Cards displaying an error state must include a visible secondary action link that allows users to correct the error. This action link must be present in all card states (missing, error, and default). The link text may change contextually (for example, from `Add` to `Edit`).

### Consequences
- Error state cards will always provide users with a clear path to resolution
- Since users need to navigate to a different page to fix the error, the corrective action uses a link element rather than a button
- System-generated errors that users cannot resolve should use different UI patterns

### Open Questions
N/A


## ADR 003 - Default tag will be used for launch

### Status: Accepted

- Date issue raised: 07/31/2025
- Decision date: 08/04/2025

### Context
The experimental design request specified using a colored tag for the error state. However, colored tags are not currently available in the VA Design System.

### Decision
We will implement the card error state using the default tag style. Once colored tags become available in the design system, we will update the card component to use the appropriate colored tag.

### Consequences
- Cards with error states may need to be refactored when colored tags become available
- The team is investigating ways to control this styling from a single source to minimize future refactoring effort

### Open Questions
N/A


## ADR 004 - The card will be interactive when in the error state

### Status: Accepted

- Date issue raised: 07/31/2025
- Decision date: 08/04/2025

### Context
When users tab away from a card in an error state and then return to it via keyboard navigation, we want to ensure they're still aware that an error needs to be resolved.

### Decision
We will make cards interactive (focusable) when they are in an error state.

#### Accessibility Implementation
Pages containing cards typically do not include form fields (such as text inputs, select menus, or checkboxes). As a result, screen reader users are unlikely to be in Forms Mode when they encounter these cards. Instead, they will most likely be in Browse Mode (Virtual Cursor Mode), which allows navigation using headings, landmarks, and arrow keys.

To ensure error states remain discoverable and perceivable in Browse Mode:

- **Error announcements:** Error messages use `role="alert"` to trigger immediate screen reader announcements
- **Keyboard accessibility:** The entire card becomes keyboard-focusable (`tabindex="0"`) when in an error state
- **Programmatic associations:** Cards use `aria-labelledby` and `aria-describedby` to connect headings with error messages
- **Semantic structure:** Headings inside cards use semantic `<h2>` tags, enabling navigation via heading shortcuts

This approach ensures screen reader users receive the same information and interaction cues as visual users, regardless of their navigation mode.

### Consequences
- Cards in error states will be part of the keyboard tab order
- Some screen reader users may experience unexpected verbosity when encountering focusable cards
- The interaction pattern provides consistent accessibility across different assistive technologies

### Open Questions
N/A

## ADR 005 - Figma update for card error state will be a breaking change

### Status: Accepted

- Date issue raised: 08/04/2025
- Decision date: 08/06/2025

### Context
To add an error state to the Figma card component, we have two options:
1. Duplicate the existing component structure (preserving legacy design patterns)
2. Issue a new breaking-change version that improves the component's construction for future maintenance
   
### Decision
We will redesign the card component to better align with the coded implementation. This involves:

1. **Separated concerns:** The new card component will have three visual style variants (border, background, drop shadow) with two states each (default and error)
2. **Flexible content:** Card content will be either prebuilt options or a flexible option for teams to add custom content

Currently, the component combines content and visual style into single variants. We are separating these concerns to create a more maintainable structure.


### Implementation Plan
- **Legacy preservation:** The current card component will be renamed to "Card - Legacy"
- **New default:** The improved card component will use the standard "Card" name
- **Opt-in adoption:** Teams can choose when to migrate to the new design structure
- **Error state requirement:** Teams wanting to use error states must adopt the new component design
  
### Consequences
- **Breaking changes:** Teams updating to the new component structure will lose any existing customizations
- **Migration effort:** Teams will need to plan for updating their card implementations
- **Improved maintainability:** The separated structure will be easier to maintain and extend
- **Communication needed:** We need to determine how and when to communicate this change to teams

### Open Questions
- How should we communicate this breaking change to affected teams?
- What timeline should we establish for the migration period?
