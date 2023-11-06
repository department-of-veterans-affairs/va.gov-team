# Design strategy: Phase 1
*Ask VA Front-End*

Last updated by @beckyphung on November 6, 2023 

## Product background

### Problem statement

Veterans, dependents, or other submitters need to be able to easily and intuitively ask the Department of Veterans Affairs a question online [[1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/ask-va-phase-1-product-outline.md)].

### Desired outcomes

At the end of Phase 1, submitters should be able to:
- ask a question on their phone or computer efficiently
- easily find Ask VA on VA.gov
- use Ask VA, including with assistive technology
- save time by having their information filled in, when they authenticate
- edit their VA Profile while asking a question, when they authenticate
- track their submitted inquiries online, when they authenticate

### KPIs

These KPIs will guide our decisions and help us measure success [[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20KPIs.md)]:
1. Reduce the time it takes to submit a question
2. Increase the percentage of submitters that successfully ask a question
3. Meet the target VA.gov user satisfaction score

## Design strategy

### VA.gov design system

We will use VA.gov’s design system to design content, components and patterns in Ask VA [[3](https://design.va.gov/)]. As is recommended by the Design System Team, VA.gov is moving towards USWDS v3. So some of our designs will use USWDS components that differ from VA.gov's current design system, when appropriate.

At a strategic level, our vision is based on the VA.gov design principles [[4](https://design.va.gov/about/principles)]. These are summarized as:
- Usable by everyone
- Simple
- Veteran first
- Impact

### Our vision

We used the VA.gov design principles to frame our vision. Through following this vision, we believe we’ll make design decisions that drive towards our desired outcomes and KPIs.

#### Usable by everyone

**Everyone should be able to use Ask VA.** We’ll make all design decisions with accessibility front of mind. For example, we'll avoid designing conditionals or updates that are made to the form *while* the user is still on the page. When we do research we’ll seek to include disabled Veterans, people who use assistive technology, Veterans and dependents, and people who submit a question on behalf of someone else.

**People should be able to use Ask VA on their mobile devices, in addition to their laptop or desktop.** We’ll use a mobile-first approach to designing Ask VA, which will require us to make decisions about what information and choices are most critical, given a smaller and more constrained context. This is one reason we'll start by asking one thing per page in the form [[5](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)]. It's also why we will avoid modals or pop-ups.

#### Simple

**People’s focus should be on asking a question to VA.** We’ll prioritize steps in the form that help a user complete their primary task of asking a question, and remove unnecessary steps. As mentioned, we’ll aim to ask one thing per page. We'll also avoid asking users for the same information more than once, and when it’s possible, we’ll pull in their information to save them time. When they're reviewing a question they submitted, we'll focus on highlighting the most recent message, so the most important thing comes first.

**People should feel like Ask VA is familiar.** Firstly, we will use familiar, plain language. We’ll also draw on other content and patterns used across VA.gov so Ask VA feels familiar to other experiences on VA.gov. In addition, we’ll aim for consistency within Ask VA itself. So, if a Veteran asks a question about life insurance or debt, the experience should feel as consistent as possible.

#### Veteran first

**Veterans should help design Ask VA.** We’ll prioritize making important decisions based on what we learn from Veterans through user research. When we do research, we’ll include Veterans from a range of perspectives in order to reduce bias and test our assumptions. As one example of how research informs our designs, through research we learned that submitters need to see messages and responses on the same page so they don't lose context. We used this insight to design an inbox that lets a submitters see everything on one page.

**Veterans come first, over what “looks good” or works in another context.** We understand that Veterans are unique, from other users and from one another. We also know their experience using all sorts of VA applications impact how they experience Ask VA. We’ll make decisions based on what we learn from our user research, over assumptions or what we think works best “in principle" or even what might work best in another context.

#### Impact

**Everyone has a right to the same experience.** Whether it’s on a different device, browser or using assistive technology, we’ll design a consistent and cohesive user experience for Ask VA. Many of our design decisions, like avoiding modals and conditionals that change the page while you're still on it, contribute to building a cohesive and fair experience.

**People should be able to find Ask VA, when they need it.** We'll make sure that existing links to Ask VA transition seamlessly when Ask VA moves to VA.gov. In addition, by moving Ask VA to the contact hub on VA.gov, we'll aim to improve how easy it is to find.

### Our approach

We've defined our notional timeline for Phase 1 in detail [[6](https://docs.google.com/document/d/1HasQogz7tYVx_HSzt1n-RBorCQMK2N2ZNJIa7D80PbA/)].

At a high-level, we will:
- Scope the design work by exploring the current system, past research and potential new features
- Design Ask VA in collaboration with key stakeholders, CAIA, the Platform team and business lines
- Test Ask VA with Veterans, dependents and other submitters
- Make updates based on insights from usability testing

By the end of Phase 1, submitters should be able to reach all their [desired outcomes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Design%20strategy:%20Phase%201.md#desired-outcomes).

We recognize the work will be iterative along the way.

#### References

[1] [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/ask-va-phase-1-product-outline.md)
<br>[2] [KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20KPIs.md)
<br>[3] [VA.gov design system](https://design.va.gov/)
<br>[4] [VA.gov design principles](https://design.va.gov/about/principles)
<br>[5] [One thing per page](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)
<br>[6] [Notional timeline](https://docs.google.com/document/d/1HasQogz7tYVx_HSzt1n-RBorCQMK2N2ZNJIa7D80PbA/)
