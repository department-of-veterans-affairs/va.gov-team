# Card Component Error State Design Decisions
Last updated: 08/04/2025

- [ADR: 001 - Cards will not support success, warning, or info states](#ADR-001---Cards-will-not-support-success-warning-or-info-states)
- [ADR: 002 - User must be able to resolve the error](#ADR-002---User-must-be-able-to-resolve-the-error)
- [ADR: 003 - Default tag will be used for launch](#ADR-003---Default-tag-will-be-used-for-launch)
- [ADR: 004 - The card will be interactive when in the error state](#ADR-004---The-card-will-be-interactive-when-in-the-error-state)
- [ADR: 005 - Figma update for card error state will be a breaking change](#ADR-005--Figma-update-for-card-error-state-will-be-a-breaking-change)


## ADR 001 - Cards will not support success, warning, or info states

### Status: Accepted

- Date issue raised: 07/17/2025
- Decision date: 07/17/2025

### Context
Many times components support multiple states, including warning, error, success, and info and they operate similarly to communicate the various states.

### Decision
For this use case the decision has been made to limit card statuses to only the error state. Other states are not being considered at this time and are not planned to be in the immediate future.

### Consequences
Teams may want to include various states, or need to include a success state when an error state is resolved. For now, teams are encouraged to use other alerts in combination with cards to communicate other states.

### Open Questions
N/A

## ADR 002 - User must be able to resolve the error

### Status: Accepted

- Date issue raised: 07/17/2025
- Decision date: 08/04/2025

### Context
There are many times a card represents errors made by an API that a user cannot correct. We want to use the error state for those items that a user can correct. 

### Decision
Cards using an error state must include a visible secondary action link that allows the user to correct the error. In the missing, error, and default state of cards the link must persist. Link text may change from `Add` to `Edit`

### Consequences
Because the user will navigate to a new page to fix the error, the navigation action will be with a link, not a button.

### Open Questions
N/A


## ADR 003 - Default tag will be used for launch

### Status: Accepted

- Date issue raised: 07/31/2025
- Decision date: 08/04/2025

### Context
The experimental design request was designed using a colored tag. Colored tags are not available in the design system at this time.

### Decision
We will build using the default tag. Once the colored tag is available, the component/card will be updated to use the colored tag.

### Consequences
We may need to refactor any cards that launch with the default tag. But the team is looking into ways to control this from a single source.

### Open Questions
N/A


## ADR 004 - The card will be interactive when in the error state

### Status: Accepted

- Date issue raised: 07/31/2025
- Decision date: 08/04/2025

### Context
When a user tabs out of the error state and to another element and back into the card with an error, we want the user to know there is still an error that needs to be resolved. 

### Decision
We will make the card interactive when in the error state.

These pages do not contain any form fields (e.g., text inputs, selects, or checkboxes). As a result, screen reader users are unlikely to be in Forms Mode when they arrive on pages with cards. Instead, they will most likely be in Browse Mode (Virtual Cursor Mode), which allows them to navigate using headings, landmarks, and the arrow keys.

To ensure that the error state is still discoverable and perceivable in this mode:
- The error message uses `role="alert"` to trigger screen reader announcements
- The entire card becomes keyboard-focusable (`tabindex="0"`) when in the error state
- The card uses `aria-labelledby` and `aria-describedby` to programmatically associate the heading and error message
- The heading inside the card uses a semantic `<h2>` tag, making it easy to navigate to using heading navigation shortcuts

This approach ensures screen reader users receive the same information and cues as visual users, even when not in Forms Mode.


### Consequences
This may cause unexpected verbosity for some screen reader users.

### Open Questions
N/A

## ADR 005 - Figma update for card error state will be a breaking change

### Status: Accepted

- Date issue raised: 08/04/2025
- Decision date: 08/06/2025

### Context
We need to add an error state into the figma component of card. We can either, duplicate existing legacy issues in the card component design, or issue a new breaking-change version of the card component, which improves it's constructions for future maintenance.

### Decision
We are going to design the card component to more align with the coded component. This means:
1. The new default card component will have the three variants based on visual styles (border, background, drop shadow), with 2 states (default, and error)
2. The content in the card will be one of the prebuilt options or an option for teams to add in whatever content they want.

Right now the component is constructed of variants that combine content and visual style. We're going to separate those out.

### Consequences
This means that when teams update existing cards to use the new component construction, they will lose any customizations they have made.  For that reason we are going to rename the current card compoennt to `Card - Legacy` and the new card will have the same `Card` name. This will encourage new cards to use the new design, and teams can opt-in to the new design when they are ready to tackle the breaking changes.

Any team wanting to add error states to their card will have to use the new design.

### Open Questions
- Need to determine how/when to communicate this to teams.

