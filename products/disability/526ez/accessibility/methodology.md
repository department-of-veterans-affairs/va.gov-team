# Accessibility Audit Methodology

## Evaluation methods

- Includes & builds on [Platform’s Foundational Accessibility Tests](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#foundational-testing)
- Automated accessibility checkers such as [Axe DevTools](https://www.deque.com/axe/devtools/) and manual testing by accessibility specialists
- Bugs and violations are recorded in a spreadsheet with specific WCAG violation, [severity level](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric#Accessibilitydefectseverityrubric-Typesofseverity1issuesinwebapplicationsandpages) and an general estimated "level of effort."
- We test against [WCAG 2.2 Level AA](https://www.w3.org/WAI/WCAG22/quickref/)

## Environments evaluated

- Note: Latest versions of supported browsers - Safari, Edge, Chrome, Firefox
- Desktop
    - VoiceOver / Safari
    - JAWS / Chrome
    - NVDA / Firefox
    - Narrator / Edge
- Mobile
    - iOS / VoiceOver / Safari
    - Android / TalkBack / Chrome
- Other assistive technology - ZoomText, Voice Control
