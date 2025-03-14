# Design strategy: Recommend helpful links in Phase 2

Office of the CTO - Digital Experience (OCTO-DE), Ask VA, Ask VA VA.gov Team

Last updated by @tygindraux on March 13, 2025

## Overview

Ask VA currently requires submitters to fill out and submit a form and wait up to 7 business days for a reply.

Although we have made significant improvements to improve the process of asking a question through Ask VA, it still takes up to 7 business days to receive a reply [[1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%201/2024-04%20Design%20strategy%3A%20Phase%201.md)]. And Veterans consistently tell us that this is too long for them to wait for a reply [[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2024%20Submit%20an%20inquiry/Findings.md#finding-7-veterans-who-are-familiar-with-other-va-services-expect-ask-va-to-work-similarly--and-it-may-be-unclear-when-to-use-ask-va-or-another-service), [3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/04-2024%20Progress%20bar/Findings.md#additional-insights), [4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-1-most-veterans-can-easily-complete-the-form-without-help-but-struggle-to-imagine-using-ask-va-over-another-tool), [5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#details-of-findings)]. Veterans hope to receive help in real time [[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2024%20Submit%20an%20inquiry/Findings.md#finding-7-veterans-who-are-familiar-with-other-va-services-expect-ask-va-to-work-similarly--and-it-may-be-unclear-when-to-use-ask-va-or-another-service), [3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/04-2024%20Progress%20bar/Findings.md#additional-insights), [5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#details-of-findings)].

When we compared Ask VA's reply window to similar support experiences on other websites, we found that other contact forms will respond in 1 to 3 business days [[6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights)]. We hypothesize this contributes to a low completion rate, with currently only 30% of people who visit Ask VA (ask.va.gov) completing a support request [[7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)]. And a satisfaction score that is lower than VA.gov's average [[7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)].

We have an opportunity to improve how quickly we attempt to answer a submitter's question.

## Hypothesis

There are two ways we can improve how quickly someone gets help through Ask VA:
- shorten the amount of time it takes for an agent to reply back
- and/or offer automated help in real time.

Reviewing contact experiences on other websites highlighted ways that Ask VA could become a more supportive contact experience through providing help in real time [[6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights)]. Rather than focusing on letting someone submit a question to VA, our focus could shift towards guiding someone to an answer. We hypothesize that if we can provide helpful information while someone is filling out the form, they could reach resolution sooner, thereby improving satisfaction with Ask VA overall.

We recently conducted user research to understand how surfacing helpful links is received by submitters [[8](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md)].

Among other insights, we learned that [[9](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#key-findings)]:
- Receiving help or information quickly is the key to a good support experience.
- People associate automation with efficiency or making tasks easier.
- If Ask VA provides automated suggestions of helpful links, then people expect to receive an answer more quickly.
- Even if people don't get the answer they need, they still feel like VA is trying to listen and support them if Ask VA suggests help in real time.
- If helpful links don't answer their question, people should be able to continue and send their question to VA.

These insights can shape our approach to providing help before someone submits their question.

## Proposed approach

We propose that we provide a set of helpful links based on information people share in the form. We will only link to content on VA.gov.

We need to determine which moment(s) in the form to provide help and whether this will be on the same page as other form fields or its own interstitial page. For now, our assumption is the question will be the most helpful information in determining which links to provide, so we plan to move the question up to the start of the form. We also plan to add an alert that lets people know that helpful links we have provided are based on similar questions other Veterans have asked in the past. These details will need to be determined alongside a technical approach to surfacing links.

Research shows that people expect to receive help earlier than 7 business days and as soon as in real time. This approach aims to provide helpful information as soon as possible while still allowing submitters the ability to contact a person at VA when information on VA.gov doesn't answer their question or they choose not to self-serve.

## Next steps

These steps focus on design work. We may add to or amend these next steps as we move forward.

|Task|Ticket|
|:--|:--|
|Move question to the start of the form and consider any implications|[#1667](https://github.com/department-of-veterans-affairs/ask-va/issues/1667)|
|Determine the right moment(s) to offer helpful links|[#1670](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/1?filterQuery=sprint%3A%22Sprint+47%22+label%3Adesign&pane=issue&itemId=2918596480&issue=department-of-veterans-affairs%7Cask-va%7C1670)|
|Design page or component to offer helpful links or continue with form|[#1671](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/1?filterQuery=sprint%3A%22Sprint+47%22+label%3Adesign&pane=issue&itemId=2918597940&issue=department-of-veterans-affairs%7Cask-va%7C1671)|
|Create prototype(s) to describe proposed helpful link approach|[#1672](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/1?filterQuery=sprint%3A%22Sprint+47%22+label%3Adesign&pane=issue&itemId=2918599032&issue=department-of-veterans-affairs%7Cask-va%7C1672)|

## References

- [1] [Design strategy for Phase 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%201/2024-04%20Design%20strategy%3A%20Phase%201.md)
- [2] [Findings from user research in January 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2024%20Submit%20an%20inquiry/Findings.md#finding-7-veterans-who-are-familiar-with-other-va-services-expect-ask-va-to-work-similarly--and-it-may-be-unclear-when-to-use-ask-va-or-another-service)
- [3] [Findings from user research in April 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/04-2024%20Progress%20bar/Findings.md#additional-insights)
- [4] [Findings from user research in August 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-1-most-veterans-can-easily-complete-the-form-without-help-but-struggle-to-imagine-using-ask-va-over-another-tool)
- [5] [Findings from user research in February 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#details-of-findings)
- [6] [Compare Ask VA to contact experiences on other websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights)
- [7] [Ask VA KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md) 
- [8] [User research plan to test concepts that automate steps in Ask VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md)
- [9] [Findings from user research in February 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#key-findings)
