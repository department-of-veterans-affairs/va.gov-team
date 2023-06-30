# Experimental Design Process + Component Build (WIP)

_Shell document to capture My VA's experience navigating the the experimental design system and design system as the team worked to build the new notification component._

## Design

Things to consider when proposing a new component to the design system:

[Guidance from Platform about experimental components](https://design.va.gov/about/contributing-to-the-design-system/)

- If it's a new component that's not in the design system in any form, consider all other options first.
  - Your request to add a component to the design system is most compelling if you've explored all existing options and researched them with Veterans.
  - Give a concise, detailed explanation of the feedback you received in research and why no component in the design system fits the use case.

### Things we tried before designing a new component

- We explored and researched all available options in the design system.
  - We started with the [background only warning alert](https://design.va.gov/storybook/?path=/docs/components-va-alert--dismissable-background-only-icon#background-only-with-icon) and in testing, [Veterans said the alert didn't stand out to them and wasn't low-vision friendly.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md#33-multiple-participants-commented-that-the-light-yellow-color-for-the-alert-did-not-stand-out-to-them-and-one-participant-stated-it-made-the-text-very-difficult-to-read)
  - We opted to use the [default warning alert](https://design.va.gov/components/alert#warning-alert) instead for our launch of our first on-site notification, but we knew it wasn't the best longterm solution since Platform guidance is to use this "to warn a user, such as when there are negative consequences, or when something has gone wrong."

### Process of proposing a new notification component

- Having exhausted all possible VA pattern library options, we explored other [design options for onsite notifications](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/xrJ1EYV) and landed on a new notification [design](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ZOkzKM7) as a team.
- We submitted an [experimental design request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1181#issuecomment-1447073790) to Platform for the new notification component.
- We presented the component in a weekly design system council meeting, along with our reasoning for why no other components in the design system worked for our use case (supported by research findings).
- The Platform team iterated on the component and gave feedback and updated us on progress in the comments of the [experimental design ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1181#issuecomment-1447073790).
