# Design strategy: Phase 1
*Ask VA VA.gov*

Last updated by @tygindraux on April 1, 2024 

## Product background

### Problem statement

Veterans, dependents, and other submitters need to be able to easily and intuitively ask the Department of Veterans Affairs a question online [[1]](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/ask-va-phase-1-product-outline.md).

### Desired outcomes

At the end of Phase 1 when the Ask VA front-end moves to VA.gov, submitters should be able to:
- ask VA a question on any device (phone, tablet, computer) efficiently, including with assistive technology
- easily find Ask VA on VA.gov
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

We will use VA.gov’s design system to design content, components, and patterns in Ask VA [[3](https://design.va.gov/)]. As is recommended by the Design System Team, VA.gov is moving towards USWDS v3 [[4]](https://designsystem.digital.gov/whats-new/updates/2022/04/28/introducing-uswds-3-0/). So some of our designs will use USWDS components that differ from VA.gov's current design system, when appropriate.

At a strategic level, our vision is based on the VA.gov design principles [[5](https://design.va.gov/about/principles)]. These are summarized as:
- **Usable by everyone**: Everyone can use any tool or application regardless of features or complexity.
- **Simple**: Everyone can easily understand how to use the tool and where they are in the process.
- **Veteran first**: We prioritize Veteran needs first before other users or stakeholders.
- **Impact**: We design with clear intentions on the impact of new features or tools, and how they exist within the larger VA digital system.

### Our vision

We used the VA.gov design principles to frame our vision. Through following this vision, we believe we’ll make design decisions that drive towards our desired outcomes and KPIs.

#### Usable by everyone

**Everyone should be able to use Ask VA.** We’ll make all design decisions with accessibility front of mind. For example, we will:
- Avoid designing conditionals or updates that are made to the form *while* the user is still on the page.
- Include disabled Veterans, Veterans from underserved communities, people who use assistive technology, dependents, and people who submit a question on behalf of someone else when we do research.

**People should be able to use Ask VA on their mobile devices, in addition to their laptop, tablet, or desktop.** We’ll use a mobile-first approach to designing Ask VA, which will require us to make decisions about what information and choices are most critical, given a smaller and more constrained context. For example, we will:
- Ask one thing per page in the form [[6](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)].
- Display questions primarily as cards for authenticated users in their dashboard view.
- Avoid modals or pop-ups unless absolutely necessary.

#### Simple

**People’s focus should be on asking a question to VA.** We’ll prioritize steps in the form that help a user complete their primary task of asking a question and remove unnecessary steps. For example, we will:
- Aim to ask one thing per page, as mentioned above.
- Avoid asking users for the same information more than once.
- Pull in information to save authenticated users time, when it's possible.
- Highlight the most recent message in a user's "inbox".

**People should feel like Ask VA is familiar.** We'll prioritize consistency to create a familar experience on VA.gov. For example, we will:
- Use familiar, plain language.
- Draw on other content and patterns used across VA.gov, so Ask VA feels familiar to other experiences on VA.gov.
- Aim for consistency within Ask VA itself – if a Veteran asks a question about life insurance or debt, the experience should feel as consistent as possible.

#### Veteran first

**Veterans should help design Ask VA.** We’ll prioritize making important decisions based on what we learn from Veterans through user research. For example, we will: 
- Include Veterans from a range of perspectives in order to reduce bias and test our assumptions when we do research.

**Veterans come first, over what “looks good” or works in another context.** We understand that Veterans are unique, from other users and from one another. We also know their experience using all sorts of VA applications impact how they experience Ask VA. For example, we will: 
- Make decisions based on what we learn from our user research, over assumptions, what we think works best “in principle," or even what might work best in another context.

#### Impact

**Everyone has a right to the same experience.** Regardless of the device used, level of familiarity with VA.gov tools, or cognitive ability, we’ll design a consistent and cohesive user experience for Ask VA that anyone can use. For example, we will:
- Ensure our design decisions, like avoiding modals and conditionals that change the page while you're still on it, contribute to building a cohesive and fair experience.

**People should be able to find Ask VA, when they need it.** We'll optimize the navigation pathways to Ask VA for Veterans and other submitters. For example, we will:
- Ensure existing links to Ask VA transition seamlessly when Ask VA moves to VA.gov.
- In addition, by moving Ask VA to the contact hub on VA.gov, we aim to improve how easy it is to find.

### Our approach

At a high-level, we will:
- scope the design work by exploring the current system, past research and potential new features
- design Ask VA in collaboration with key stakeholders, CAIA, the Platform team and business lines
- test Ask VA with Veterans, dependents and other submitters
- make updates based on insights from usability testing

By the end of Phase 1, submitters should be able to reach all their [desired outcomes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Design%20strategy:%20Phase%201.md#desired-outcomes).

This work will be iterative. We'll consider insights from Phase 1 and our overall product direction to inform Phase 2.

#### References

[1] [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/ask-va-phase-1-product-outline.md)
<br>[2] [KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20KPIs.md)
<br>[3] [VA.gov design system](https://design.va.gov/)
<br>[4] [USWDS 3.0](https://designsystem.digital.gov/whats-new/updates/2022/04/28/introducing-uswds-3-0/)
<br>[5] [VA.gov design principles](https://design.va.gov/about/principles)
<br>[6] [One thing per page](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)
