# Experimental Design Process + Component Build

**Last updated: August 2023, added recommendations section**

_Document outlining My VA's experience navigating the the experimental design process and design system as the team worked to build the new notification component._

## Design

**Things to consider when proposing a new component to the design system:**

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
  - We didn't hear back for a few months so [we followed up with them in the comments of the ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1181) and it seemed like that nudge was necessary to keep the process going, as this team has a lot on their plate and other conflicting priorities.
  - At this point they gave us the go-ahead to start coding the component to contribute to the design system so we submitted a [collab cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/55405) for the component.
  - This process was somewhat unfamiliar to the Platform team as well and we [communicated on Slack](https://dsva.slack.com/archives/CBU0KDSB1/p1684524228447229) to align on the necessary steps.

---


## Engineering

### Process

After the experimental design was approved (and while we were waiting for it to be approved), we started working on [building the Notification component](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48726) on `vets-website` within the `/personalization/dashboard/` directory. Because this is in our own application folder, the build won't affect any other team.

After building, testing, and [merging the initial build](https://github.com/department-of-veterans-affairs/vets-website/pull/24028), we started researching how to contribute a new componnet to the [component library repository](https://github.com/department-of-veterans-affairs/component-library). There is now [thorough documentation](https://design.va.gov/about/developers/contributing) on design.va.gov with guidance on code contributions.

After meeting with the Design System team, we learned that we needed to build a `va-card` as the base component for a future `va-notification`. I worked with Jami Gibbs and Andrew Steele (both from the DST) extensively for code reviews, clarification, and questions. 

After `va-card` web component was merged, we started the `va-notification` web component build. Note that this is **not the same** as the initial build mentioned above. What we had in staging for My VA was a React component. The developer's task now is to **convert** the React component to a web component.

After the `va-notification` web component is merged into component-library's `main` branch, the DST will package up all changes and [schedule a release for component-library](https://dsva.slack.com/archives/C01DBGX4P45/p1685981099310449?thread_ts=1685640394.418239&cid=C01DBGX4P45) every other Wednesday (after their sprint ends) at a minimum. Once it is released, a PR on **vets-website** will need to be submitted, reviewed, and approved to update the component-library dependency, which usually only takes a day. Once approved and merged in, the component will become immediately available for local development after that. 

Note to dev: pull in the latest changes on main, then run yarn install to make sure you have the latest component-library dependency version.

### Design System Team release schedule
| Sprint end | Release | vets-website release |
|--|--|--|
| Every other Tuesday (one week off from AE's sprint) | Wednesdays after end of sprint | every day |

### Timeline (2023)

| Date | Details |
|--|--|
| 3/29 | AJ [pings **#platform-design-system** team on Slack](https://dsva.slack.com/archives/C01DBGX4P45/p1680118181355759) that we're starting to build the component |
| 4/3 | Notification design sync with Patrick Bateman (health care products [office of cto / usds / depo]), Matt D (OCTO/Platform - Product Owner & Designer for Design System & Forms System [USDS]), Coulton Bunney (VA/OCTO - Design Lead - Health Care Apartment) |
| 4/6 | Start component build. [Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48726) |
| 4/18 | [Sent design questions](https://dsva.slack.com/archives/C909ZG2BB/p1681842304304229) to Angela |
| 4/24 | [Opened pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/24028) for initial Notification component build |
| 4/26 | Merged to `vets-website`; started researching how to contribute to component library |
| 4/27 | [Messaged #platform-design-system](https://dsva.slack.com/archives/C01DBGX4P45/p1682623983970319) re: contributing new component code; scheduled a meeting with the Design System team to go over contributing component code |
| 5/1 | Met with the Design system team to get more guidance on what to do next on contributing code for the Notification component. Basically I need to create a `va-card` component and convert Notification (what we have on vets-website) to a web component, then submit it to the `component-library` repo
| 5/2 | Installed [`component-library` repo](https://github.com/department-of-veterans-affairs/component-library) locally (needed to learn Storybook and Stencil). Got a `va-card` component to show up on Storybook
| 5/8 | [Opened PR](https://github.com/department-of-veterans-affairs/component-library/pull/695) for `va-card` component. Met with Jami Gibbs re: nesting web components and how to access props via slots. Got quick feedback from Jami on `va-card` PR. |
| 5/9 | Started work on `va-notification`. Added variations |
| 5/17 | Merged `va-card` PR into main after addressing some feedback |
| 5/23 | Opened PR for `va-notification` (analytics not included) |
| 6/7 | PR for `va-notification` merged, after discussions with Jami and Andrew Steele |
| 6/12 | Started work on replacing current Notification component (on staging.va.gov/my-va) with new `va-notification` (coming from CL) |

Tip for dev: need to rebuild stencil: `yarn build` (&& `yarn build-bindings` to be safe?) in /web-components/

### Recommendstions going forward
- Set up [`component-library` repo](https://github.com/department-of-veterans-affairs/component-library) locally
- Start component work directly on the `component-library` repo, instead of duplicating work on `vets-website` AND `component-library`
- Time work so your work can be released before **DST's** sprint ends.
  - Make sure your PR is reviewed, approved, and merged before EOD Tuesday before their end of sprint
  - Keep an eye out on their [release changelogs](https://github.com/department-of-veterans-affairs/component-library/releases), and the #platform-design-system Slack channel to get latest updates
- DST doesn't host office hours anymore, but they are willing to meet when they are available. (We met with them during their standup meeting time)
 
### Resources
- [Contributing](https://design.va.gov/about/developers/contributing) (VA Design System)
- [Epic: Notification Component build + implementation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59398) (GitHub)
- [logic ticket (contains initial tasks)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/56767)
- [Component library repo](https://github.com/department-of-veterans-affairs/component-library)

