[Ticket #73](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/73#issue-2456544578)
- USWDS wants us to first create an issue describing the proposal before making a PR. If you have a PR already, then attach it to the proposal.

- Add pattern example/preview and pattern code. (e.g., [https://designsystem.digital.gov/patterns/create-a-user-profile/address/](https://designsystem.digital.gov/patterns/create-a-user-profile/address/))
- Consider documentation for sections on the pattern page (e.g., Guidance, when to use pattern, etc).

**What we are going to put in the proposal**

1. **Prefill alerts**
    1. Blue info alert that says ‘sign in to prefill your info’ (unauthenticated user)
    2. Blue info alert that says ‘since you’re signed in, we can prefill your application’
2. **Components**
    1. Locked address component with prefilled info such as DOB, SSN **OR**
    2. Gray card component with prefilled info instead of address component
    3. Unlockable view of multiple prefilled data fields (purple task)
    4. Edit page with data prefilled in the form fields

**Code changes**

1. VADS styling needs to be converted to USWDS styling (e.g., “vads–” to “usa-”)
2. Components in USWDS are written using Twig template (.twig), which is a modern template engine for PHP.
3. Each component uses a JSON file to house the content info that will be used inside the component.

**Steps needed**

1. Create an issue with our [proposal](https://github.com/uswds/uswds/issues/new?assignees=&labels=Type%3A+Feature+Request%2CStatus%3A+Triage&template=feature_request.yaml&title=USWDS+-+Feature%3A+%5BYOUR+TITLE%5D).
2. Fork the USWDS repo.
3. Build the Storybook component for our pattern.
4. Create a PR with the pattern.

**Questions**

1. How should we build the pattern in the USWDS codebase?
    1. Where should this code live in their repo?
        1. Interestingly, there is a PR label for “is pattern” but a pattern has never been introduced/contributed before.
        2. Under the “packages” folder where all the components live (based on looking at past PRs). **OR**
        3. Under "templates" folder.
        4. There is a “Patterns” section in their Storybook (only 1 form in there). Perhaps this is where we will put our Prefill pattern form Storybook component.
        5. Similar to how we built a demo pattern in VADS.
2. What should the timeline look like for this?
    1. For the proposal, should we wait for the user research to be completed so we know what our final pattern would be?
    2. In the meantime, should we start building the Storybook pattern?
3. How should we organize the issue/proposal writing task? Since the design team will be preparing the proposal for VADS, we can use similar language to maintain consistency.
