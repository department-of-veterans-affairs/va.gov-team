# Frontend Engineering Standards and Procedures
## Purpose
This document outlines the standards and procedures for Frontend Engineering within the Identity team. Its purpose is to ensure consistency, quality, and efficiency in our development process.

## When to Reach Out for Help
- If you're stuck on a problem for more here is when to reach out to the team for assistance.
  - High priority item: **1 hour**
  - Low priority item: **1 day**
- If you're unsure about the implementation of a feature or bug fix, consult with your Frontend Lead (Alexander Garcia). If you encounter a critical issue that affects the application's functionality or performance, alert the team immediately in the Identity Engineer channel

## Code ownership

### Applications

| Application | Page / Description | Ownership |
| --- | --- | --- |
| Auth | `/auth/login/callback` page. Serves as the entry to client-side session setup and unified auth error page | Ian (primary), Caitlin (secondary) |
| Login (Unified sign-in page, USiP) | `/sign-in/*`. Serves as entry to the authentication process. | Caitlin (primary), Afia (secondary) |
| Verify | `/verify`. Serves as entry to start identity verification process | Afia (primary), Alex (secondary) | 
| Sign-in Changes | `/sign-in-change-reminder` | Afia (primary), Caitlin (secondary) |
| Static-pages / CTA | Serves entry into reusable sign-in widgets served across VA.gov | Alex (primary), Caitlin (secondary) |
| Terms of Use | `/terms-of-use`. Serves entry into terms of use application | Alex (primary), Ian (secondary) |

### Platform

| Application | Folder / Description | Ownership |
| --- | --- | --- |
| Platform Authentication | `platform/user/authentication/*`. Serves as shared directory for authentication | Everyone |
| Platform Authorization | `platform/user/authorization/*`. Serves as shared directory for authorization | Everyone |
| Platform Utilities | `platform/utilities/sso/*` + `platform/utilities/oauth/*`. Serves as shared directory for OAuth and SSO capabilities | Everyone |

## Testing Expectations
- Write unit tests for all new components and functionality.
  - All unit tests must end in `.jsx`
- Ensure that all tests pass before submitting a pull request.
- Aim for a minimum test coverage of 85% for new code
- Use our testing framework to write and run tests.
  - Try to use React Testing Library, Mocha, Mock Service Worker
- E2E tests must have at least 1 accessibility check

## Coding Best Practices
- Prefer VA Design System web components
  - Use semantic HTML and accessible CSS
  - Report missing functionality to VA Design System team
- Components
  - Keep components modular and reusable.
  - Ensure components have named defaults
  - useEffect MUST HAVE a dependency array
- Use a consistent naming convention (e.g., camelCase, PascalCase).
- Avoid duplicated code; refactor when necessary.
- Use comments to explain complex logic or functionality.
  - When code is too complex create documentation as necessary
- Use Datadog as appropriate to capture code metrics and monitoring
- Use Sentry as appropriate to capture error
- Use Google Analytics as appropriate to capture user analytics

## Peer Reviews
- Create Draft PRs prior to marking PRs ready for review
- Before moving a Pull Request from Draft to Ready
- Unit, integration, and E2E tests must be passing
- Pull Requests must be filled out with a linked issue
- Provide screenshots when styles (not functionality) changes
- A minimum of two Frontend Engineers will review and approve a Pull Request

## Pair Programming
- For more in-depth assistance you can reach out to another engineer using the “When to Reach Out” section.
- Pair sessions can be set up as needed using Slack Huddles, Zoom, or Microsoft Teams
- Pair sessions can also be ad-hoc conversations via Slack threads. Try to limit Direct Messages so we can share knowledge rather than siloing it

