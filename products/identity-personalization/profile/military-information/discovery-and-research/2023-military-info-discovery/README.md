# Research outline: Expanding the military information section of the VA.gov profile

**Last Updated: January 11, 2023**

## Table of Contents

- [Overview](#overview)
- [Problems](#problems)
- [Goals](#goals)
- [Project risks & challenges](#project-risks--challenges)
- [Questions](#questions)
- [Scope](#scope)
- [Research documents](#research-documents)

---

### Roles & communications

### POCs
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

#### Roles  
[This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

---

## Overview

As of January 2023, the military information section of VA.gov only shows military branch(es), period(s) of service, service dates, information on how to fix data if it appears to be incorrect, and a link to the DD214. We have access to a lot more information [through our VA Profile integration](https://qa.vaprofile.va.gov:7005/profile-service/swagger-ui/index.html?configUrl=%2Fprofile-service%2Fv3%2Fapi-docs%2Fswagger-config&urls.primaryName=ProfileServiceV3#/Profile-v3) (note: you need to be on the VA network to view this link), but it is unclear what else we should surface here, if anything. We've never talked to veterans about this section of the profile, so we have little sense of whether it is meeting peoples needs and expectations.

Furthermore, with passage of the [PACT Act](https://www.va.gov/resources/the-pact-act-and-your-va-benefits/), there is renewed internal interest internally to surface more about veterans' miltary histories on VA.gov. While VA Profile does not support military health information -- a key component of the PACT Act -- it is possible that we could get other information (eg. deployment location) that might be helpful in signaling to people that they should check out whether they are eligible for expanded disability benefits.

In order to determine if and how we might expand the military information section on VA.gov, we need to conduct discovery to figure out what would be helpful to veterans.

## Problems

- We have little understanding of users needs and expectations around the military information section of the VA.gov profile since it's never been as high priority as work on other sections of the profile. This makes it near impossible to figure out if we should update or expand the section in any way.
- With the PACT Act passing, VA is looking for a way to surface related information to help veterans understand if they are eligible for expanded benefits.

## Goals

- Determine how the current military information section does or does not meet user needs.
- Determine what information, if any, would be helpful to add to this section.
- Determine what, if any, information people might expect to see here with regards to the PACT Act.

## Project risks & challenges

- It may be hard to glean what people actually need. We don't want to be too leading since people tend to say they want whatever is offered to them. We should aim to be as generative as possible.

## Questions

- What kind of military records do people need regular access to? And for what purposes?
- What kind of personalized military information do people expect to see when they log in to a site like VA.gov?
- How does the current military information section of the VA.gov profile meet peoples' needs? How could it be improved?
- Are people familiar with the PACT Act? Do people expect to see personalized PACT Act information on VA.gov? If so, what would that look like?

## Scope

### In scope

- User interviews.
- Analytics review (if needed).

### Out of scope

- Creating any mockups of proposed changes to military information.
- Any code changes to military info.

## Research documents

- Analytics review (if applicable)
- Research plan
- Conversation guide
- Findings summary
