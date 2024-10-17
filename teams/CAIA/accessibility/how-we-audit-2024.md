> [!CAUTION]
> **WIP**: Last udpated: Aug. 14, 2024 (see commit comments for details)

# How CAIA audits for accessibility

If you're a new accessibility specialist supporting VA.gov or on one of the product teams supported by one of those specialists, or an [A11Y Champ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/a11y-champs#accessibility-champions-community-aka-a11y-champs), you might wonder how CAIA's (Content, Accessibility and Information Architecture) team of accessibility specialists audits experiences for accessibility. 

**We'll go into that plus:**
- [What's an audit?](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/accessibility/how-we-audit-2024.md#whats-an-audit)
- [When does an audit happen?](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/accessibility/how-we-audit-2024.md#when-does-it-happen)
- [What are the outcomes of an audit?](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/accessibility/how-we-audit-2024.md#what-are-the-outcomes)
- [How long does an audit take?](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/accessibility/how-we-audit-2024.md#how-long-does-it-take)
- [What is tested during an audit?](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/accessibility/how-we-audit-2024.md#whats-tested)
- [How to get started with an audit?](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/accessibility/how-we-audit-2024.md#how-do-we-start-one-and-whats-the-process)
   
## What's an audit?

An accessibility audit can be a prototype review or a design and code review of a live, coded interface against current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/) and other identified best practices, which can include:
- [VA Experience Standards](https://design.va.gov/about/experience-standards/) 
- [VA Accessibility Defect Severity Rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)
- [Platform's Common Accessibility Issues](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility/common-issues)
- [Accessibility Best Practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov#AccessibilityonVA.gov-Applyaccessibilitybestpractices.1)
- [Section 508 ICT Testing Baseline](https://ictbaseline.access-board.gov)

### What's the difference between an audit from CAIA, accessibility feedback from the Governance team, and Section 508 testing?
- CAIA and the Governance team audit products to ensure **usability** by people of all abilities. The focus is on the overall experience, not legal compliance.
   - Contact CAIA at the start of the Collaboration Cycle. We'll review your product before your major touchpoints with the Governance team.
   - Governance will review your product at Midpoint and Staging Review. They'll provide accessibility feedback and create defect tickets for you to correct issues. 
- The Section 508 office audits products for **compliance** with Section 508 standards and policies. The focus is legal compliance. If anything doesn't meet compliance standards, they'll send you a report of issues to fix.


## When does it happen?

An audit can happen at any time, and vary in scope. 
- Generally, an audit should happen at least once a year on a complete product. 
- It should also happen when new features get created, or a new product.
- Audits can be completed on experimental components, prior to submitting to the Design System Council. 
- Audits can take place both inside and outside the Collaboration Cycle. 

## What are the outcomes?

- Teams get a list of accessibility findings in an audit report, which summarizes those issues and bugs, in addition to recommendations - and screenshots, where applicable.
- Accessibility specialists will also be available to help explain the issues identified and point to best practices for your team to use to remediate them.

## How long does it take?

This varies, depending on the scope of what's being tested. A good starting point is that testing five screens of mid-level complexity takes five days. This includes the testing and the writing of tickets that come out of that testing.

**Variables that can change the amount of time it takes are:**
- The testing environment and whether it requires logging in.
- The amount of form fields involved in the testing.
- The amount of errors and conditional content that need to be triggered and tested.
- How accessible the experience turns out to be. The fewer issues found, the quicker the audit gets completed.

## What's tested?

> [!IMPORTANT]
> - Please specify if you need testing completed on a certain device or assistive technology.
> - [These are the tools accessibility specialists use](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/tools-we-use.md).
>   - However, all accessibility specialists do not have access to the same technology.*
>   - As an example, some have access to JAWS, while others do not. Some do not have a mobile devlice, while others have an Android device, while others have iPhone and/or both.

### Devices Available for Testing*
- [x] Mobile Testing (iPhone and Android)
- [x] Desktop Testing
- [ ] Tablet Testing

### Testable Environments
- [x] Prototypes, such as Figma 
- [x] Coded Prototypes, such as CodePen and Codespace
- [x] Staging
- [x] Production

In general, accessibility specialists focus on five areas of testing for accessibility. 

**They are:**
1. Automated Testing
2. Keyboard Testing
3. Color contrast and color blind testing
4. Zoom testing
5. Screen reader testing

<details><summary>Toggle to view the five areas for accessibility testing in detail, along with linked resources</summary>
  
### Automated testing

- Run [axe checks](https://www.deque.com/axe/) on every page or unique state with the [free axe browser plug-in](https://www.deque.com/axe/browser-extensions/). (required)
- [Run WAVE](https://wave.webaim.org/) on every page if time allows. WAVE is more visual than axe, but offers some excellent ways to identify nested headings and HTML5 landmark tags.
- Some accessibility specialists may use other browser add-ons to test for different things, such as [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en), [ARC](https://www.tpgi.com/arc-platform/arc-toolkit/) and others.
- Some accessibility specialists may also run the HTML through a HTML validator as this sometimes can cause issues for assistive technology.

### Keyboard testing

Accessibility specialists will navigate the interface with the [keyboard alone](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/learning-sessions/abc02-getting-started-with-keyboard-navigation-and-screen-readers#table-of-contents), focusing on the happy path.

### Color contrast and colorblind testing

Accessibility specialists will use axe [to test for color contrast errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/tools-we-use.md#color-and-contrast) and a tool like [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) to spot check any [areas that may be problematic in regards to color](https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background).

### Zoom testing

[Accessibility specialists will zoom layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/tools-we-use.md#zoommagnification) to 400 percent at 1280 pixel width and inspect them for readability. If layouts break at 400 percent, they will start reducing them until they become stable, and log the zoom ratio when things begin breaking. Sometimes, the specialist can help identify what's breaking the page.

### Screen reader testing

Accessibility specialists will test interfaces with a screen reader with these preferred pairings:

- Chrome + JAWS
- Firefox + NVDA
- Safari + VoiceOver
- iOS Safari + VoiceOver (time and device permitting)
- Android + TalkBack (time and device permitting)

We generally rely on [WebAIM's recommended pairings](https://webaim.org/techniques/screenreader/#differences). 
- [We also may test with other pairings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/tools-we-use.md#screen-readers) if accessibility issues are reported from Veterans.
- [Screen reader testing is an intensive, manual process](https://depo-platform-documentation.scrollhelp.site/developer-docs/screen-reader-testing). 
- It involves subjective judgment and can take a lot of time.
- [Common screen reader issues](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility/common-issues#screen-readers)

</details>

## How do we start one and what's the process?

The best way to engage with CAIA is early! The earlier in a project that we can get involved, the better. If you have work coming down the line that you would like input on, let us know. 
- The best way to engage with us is to summon us into whatever slack channel you use to do the bulk of your work. Use @sitewide-caia-accessibility in Slack to ping all CAIA accessibility specialists, and we'll get the conversation started.
- You can also reach out to CAIA through our #sitewide-content-accessibility-ia Slack channel
- [We recommend starting with a CAIA Intake Ticket.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2CNaomiPMC&labels=sitewide+CAIA&projects=&template=sitewide-CAIA-intake-form.md&title=%5BCAIA+Intake%5D+%3CTeam+Name%3E%3A+%3CInitiative+Name%3E) From there we’ll connect your team with one or more practice area specialists, who can provide the input that your team is requesting.

## About this Documentation 
**Primary Source:** The framework of information used in this documentation was [taken from the previously-sunset VA Shared Support Team's version of "How We Audit" version Sept. 21, 2022.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/how-we-audit.md) 
