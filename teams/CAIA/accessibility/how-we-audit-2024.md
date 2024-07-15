# How we audit for accessibility

If you're a new accessibility specialist supporting VA.gov or on one of the product teams supported by one of those specialists, you might wonder how the Shared Support team audits experiences for accessibility. We'll go into that plus what you need to do to start an audit, and what comes out an audit in the end.

## What's an audit?

An accessibility audit is a design and code review of a live, coded interface against current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/) and other identified best practices.

## When does it happen?

An audit can happen at any time, and vary in scope. Generally, an audit should happen at least once a year on a complete product. It should also happen when new features get created.

## What are the outcomes

Teams get a list of accessibility bugs and an audit report that summarizes those issues. Accessibility specialists will also be ready to engage in helping fix any found issues in the future.

## How long does it take?

This varies, depending on the scope of what's being tested. A good starting point is that testing five screens of mid-level complexity takes five days. This includes the testing and the writing of tickets that come out of that testing.

Variables that can change the amount of time it takes are:

- the testing environment and whether it requires logging in.
- the amount of form fields involved in the testing.
- the amount of errors and conditional content that need to be triggered and tested.
- how accessible the experience turns out to be. The fewer issues found, the quicker the audit gets completed.

## What's tested?

In general, Shared Support accessibility specialists focus on five areas of testing for accessibility. 

They are:

### Automated testing

- Run [axe checks](https://www.deque.com/axe/) on every page or unique state (required)
- [Run WAVE](https://wave.webaim.org/) on every page if time allows. WAVE is more visual than axe, but offers some excellent ways to identify nested headings and HTML5 landmark tags.
- Some accessibility specialists may use other browser add-ons to test for different things, such as [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en), [ARC](https://www.tpgi.com/arc-platform/arc-toolkit/) and others.
- Some accessibility specialists may also run the HTML through a HTML validator as this sometimes can cause issues for assistive technology. 

### Keyboard testing

Accessibility specialists will navigate the interface with the keyboard alone, focusing on the happy path.

### Color contrast and colorblind testing

Accessibility specialists will use axe to test for color contrast errors and a tool like [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) to spot check any areas that may be problematic.

### Zoom testing

Accessibility specialists will zoom layouts to 400 percent at 1280 pixel width and inspect them for readability. If layouts break at 400 percent, they will start reducing them until they become stable, and log the zoom ratio when things begin breaking. Sometimes, the specialist can help identify what's breaking the page.

### Screen reader testing

Accessibility specialists will test interfaces with a screen reader with these preferred pairings:

- Chrome + JAWS
- Firefox + NVDA
- Safari + VoiceOver
- iOS Safari + VoiceOver (time and device permitting)

We generally rely on [WebAIM's recommended pairings](https://webaim.org/techniques/screenreader/#differences). We also may test with other pairings if accessibility issues get reported from Veterans.

## How do we start one and what's the process?

The best way to engage with Shared Support is early! The earlier in a project that we can get involved, the better. If you have work coming down the line that you would like input on, let us know. The best way to engage with us is to summon us into whatever slack channel you use to do the bulk of your work. Use @va-shared-support-a11y-specialists, and we'll get the conversation started.

You can also reach out to Eli Mellen. He is the Associate Product Manager (APM) for Shared Support and is a good first point of contact for any work. From there we’ll connect your team with one or more practice area specialists who can provide the input that your team is requesting.
