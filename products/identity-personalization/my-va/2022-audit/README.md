# Project outline: My VA audit, updates, and documentation

Last updated October 3, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; my-va-dashboard
- **Slack channel**: vsa-authd-exp

### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Problems](#problems)
- [Solution approach](#solution-approach)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

As of April 2022, My VA "2.0" has been out for a little less than a year, yet it already has many inconsistencies between its five sections -- the "nametag", Claims and appeals, Health care, Benefit payments and debts, and Apply for benefits. This is making the page hard to manage and hard to scale.

As a result, we've decided to conduct an audit of My VA to document and evaluate the following:

- All of the states of each section of My VA
- Whether all states are necessary
- Where we can simplify without losing important personalization
- How we can bring greater consistency between sections

Ultimately, we plan to make design updates that bring greater consistency to how each section loads, handles errors, and shows conditional information, resulting in a page that is easier to manage and scale. We hypothesize that this will improve the end user experience by increasing clarity and ease of use, as well as by making it easier for us to continue to add features we know people expect.

Once we have completed updates to each section, we also plan to create comprehensive My VA documentation, which does not currently exist. This will help new and existing team members to better manage this page.

## Problems

- We show sections of My VA conditionally, which causes the following issues:
  - Some sections will start to show as loading, and then disappear once we determine there is no data to show. This isn't friendly for accessibility or general UX.
  - We lose the opportunity to educate people on what might be available to them at VA.
- Each section of My VA handles loading, errors, and conditional states differently.
- Each section of My VA has so many states that the My VA team can't remember or easily test them all.
- Errors sometimes float at the top of My VA becacuse we don't show section headings unless the section loads successfully.
- My VA is hard to scale since these inconsistencies cause a fair amount of chaos every time a new section is added.
- We do not have comprehensive My VA documentation, and we need that in order to more easily onboard new folks and manage this page.

## Solution approach

To mitigate each of the problems above, we plan to do the following:

- **Always show all sections and section headings regardless of benefit status**: This is probably the biggest improvement to this page. It will eliminate issues around sections showing as loading and then disappearing; it will provide an opportunity to guide veterans towards benefits or opportunities regardless of their current status; and it will set a structure that allows us to make the overall page more consistent in how we handle loading and errors.
- **Clean up loading and error handling**: This will bring greater consistency to the page from a UX perspective, and also make this page significantly easier to manage for our team since each section won't be handling loading/errors in a different way.
- **Eliminate unnecessary conditional states**: While this page needs to be personalized, we have some very nuanced conditionals that don't really make much of a difference to the user but make the page harder to manage for our team. Eliminating personalization that doesn't make a big difference will provide more consistency for users and make the page easier to manage for our us.
- **Make other small changes that we feel support the overall simplification on this page**: While the goal of this work is mostly about cleanup and consistency, we are open to small changes that support the overall improvement of this page. For example, there are some links we think make more sense in certain sections than others. This will simplify the page and place content currently living in less important sections in sections that get more traction.

## User Outcomes

### Desired User Outcomes

- It will be clear to users what section an error message is associated with.
- It will be clearer to users what information is loading on the page, instead of sections popping in randomly after they load.
- (If we decide to persistently show each section) It will be clearer to users what they can do/track on VA.gov even if they don't have something in flight.

### Undesired User Outcomes
 
- We inadvertently remove important personalization for the sake of simplicity that minimizes the user experience.
 
## Business Outcomes

### Desired Business Outcomes

- My VA will be more consistent.
- My VA will be easier to manage.
- My VA will be easier to scale.
- My VA will have comprehensive documentation.

### Undesired Business Outcomes

- These updates don't really improve the page for us or the end user.

## Measuring Success

### Objective: Provide greater consistency and simplification of My VA for users, regardless of where they are in their benefits journey.

**When filling in data -- update dates to be 1 month pre-launch, one month post launch (to 100%), and the second month post-launch (to 100%) based on actual launch dates.**

**KPI: We will see at least a 10% increase in key interactions on My VA, since each section now shows persistently.**

|KPI/metric|Baseline: [One month pre-launch to 25%]|Post-launch: [One month post-launch to 100%]| Post-launch: [Second month post-launch to 100%]|
|----------|-------------|---------------|-------------------|
|Clicks into "Manage all claims and appeals"|TBD|TBD|TBD|
|Clicks into individual claims, "View claim"|TBD|TBD|TBD|
|Clicks into "Learn how to file a claim"|TBD|TBD|TBD|
|Clicks into "Manage and schedule your appointments"|TBD|TBD|TBD|
|Clicks into "Send a secure message to your health care team"|TBD|TBD|TBD|
|Clicks into "Refill and track your prescriptions"|TBD|TBD|TBD|
|Clicks into "Manage your VA debt"|TBD|TBD|TBD|
|Clicks into "View your payment history"|TBD|TBD|TBD|

**KPI: We will see a reduction in searches for terms related to new links added to My VA.**

**Note**: Certificates of eligibility apply to both education benefits and home loans.

|KPI/metric|Baseline: [One month pre-launch to 25%]|Post-launch: [One month post-launch to 100%]| Post-launch: [Second month post-launch to 100%]|
|----------|-------------|---------------|-------------------|
|Search rank for "gi bill” or similar from My VA (whichever comes first)|TBD|TBD|TBD|
|Search rank for "coe” or "certificate of eligibility" (whichever comes first)|TBD|TBD|TBD|

**KPI: Establish baseline metrics for clicks into new links from My VA.**

|KPI/metric|Post-launch: [One month post-launch to 100%]|Post-launch: [Second month post-launch to 100%]|
|----------|---------------|-------------------|
|Clicks into "Compare GI Bill benefits by school" from My VA |TBD|TBD|
|Clicks into "Check your GI Bill statement of benefits" from My VA |TBD|TBD|

## Key deliverables

- Angela's audits

### Key Dates

- March 2022: Audit begins
   
## Screenshots

### Before

![My VA with benefits payments and debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/My%20VA_April%202022.jpeg)

### After

