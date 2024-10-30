# Rules for Determining UX Modality in the VA Health & Benefits App

This document is intended to guide development teams building experiences in the VA Health & Benefits Mobile App. It helps teams decide whether a feature should exist natively within the app, use a WebView, transition to an authenticated browser experience (via SSO), or simply link externally, and provides recommendations for designing the best user experience.

It starts with high-level decision criteria which should be reviewed before building any experience, then provides additional context for each user experience type.

For a quick overview of differences between web apps vs. native apps, see [here](https://aws.amazon.com/compare/the-difference-between-web-apps-native-apps-and-hybrid-apps/)

## Key Decision Criteria:

### User Experience:
The primary goal is to ensure veterans can complete tasks easily and efficiently. This means providing the best possible experience and removing friction, whether the feature is within the app, uses a WebView, or requires transitioning to a browser.

### Accessibility:
All experiences (native, WebView, SSO, or external link) must prioritize accessibility to support veterans with disabilities. This includes ensuring compatibility with screen readers and assistive technologies, as well as adhering to WCAG/MCAG standards for color contrast, font resizing, and navigation simplicity.

### Performance:
Consider the speed and performance of the experience. High-frequency, performance-sensitive features (e.g., prescription refills) should exist in both the native mobile app and in an authenticated web experience to ensure a fast and reliable experience across platforms.

### Task Frequency and Complexity:
- **High-Frequency, Simple Tasks** (e.g., prescription refills, scheduling appointments, secure messaging): Should be native to the app for faster performance and a more seamless experience.
- **Complex, Infrequent Tasks** (e.g., viewing labs and test results, reviewing medical records): May be better suited for a WebView or an SSO transition to a browser due to the complexity of building and maintaining these experiences natively.

---

## UX Options for Feature Implementation

### 1. Native Mobile App:
- **Condition**:
  Users have to install the mobile app on their hardware device(s)
- **When to Use**: 
  For high-frequency, task-oriented actions that benefit from direct interaction with native device functionality (e.g., secure messaging, prescription refills, checking claims & appeals).
- **Example**: Prescription refills are available natively due to their frequent use and the need for performance optimization.
- **Additional considerations**:
  - Many native features, that do not leverage mobile capabilities, will have corresponding web experiences. There should be consistent user experience across platforms.
  - For features not yet available natively in the app but essential for user tasks (e.g., scheduling appointments), teams could start with an SSO integration (see #3) and plan for future native development.

### 2. WebView:
- **Condition**: Users have to install the mobile app on their hardware device(s) and click on a link in-app
- **When to Use**: For displaying external content or information within the app without requiring the user to leave the app or log in again. WebViews are ideal for tasks that involve retrieving information from VA.gov but don't need deep interaction.
- **Example**: "Find VA Locations" is a WebView implementation, where the top URL, navigation bar, and headers are removed, but the footer remains for key links and guidance. This simplification helps avoid confusion with non-functional elements (e.g., search or login buttons) and maximizes the mobile screen's usable space while speeding up performance.
- **Additional considerations**: To create a streamlined experience, remove unnecessary elements like top URLs, navigation bars, and headers. This prevents redundancy with app navigation, optimizes screen space, and focuses the user on the core content.

### 3. Single Sign On (SSO) to Browser:
- **Condition**: SSO from mobile app to va.gov works -- as of October 2024, development is in progress, with estimated target delivery of December 2024. Users can access directly from a browser. Users install the mobile app on their hardware device(s), click on a link in-app, and navigate to a browser.
- **When to Use**: For more complex or secure actions that do not have a native implementation and require authentication (e.g., viewing labs and test results).
- **Example**: A "Labs & Tests" feature could be implemented by sending users via SSO to the authenticated VA.gov browser experience, where they can access their results without needing a fully native implementation.
- **Additional considerations**:
  - For features where the user SSOs into a browser, an entry point needs to be built. For example, a “Labs & Tests” navigation in the Health category screen.
  - If a user is likely to need their progress saved during a task (e.g., filling out forms), it may benefit from being a web experience where users can return to it later via a web browser.

### 4. External Link:
- **Condition**: Users can access directly from a browser. Users install the mobile app on their hardware device(s), click on a link in-app, and navigate to a browser.
- **When to Use**: For linking to informational resources that do not require authentication and are simple to navigate (e.g., informational pages).
- **Example**: The link titled "About VA Disability Ratings" in the mobile app directs users to an external VA.gov webpage that provides extensive information without requiring login.
