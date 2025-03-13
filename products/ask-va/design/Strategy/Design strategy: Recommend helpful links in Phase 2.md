# Design strategy: Recommend helpful links in Phase 2

Office of the CTO - Digital Experience (OCTO-DE), Ask VA, Ask VA VA.gov Team

Last updated by @tygindraux on March 13, 2025

## Overview

Ask VA currently requires submitters to choose a category, topic and subtopic [[1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Category%2C%20topic%20and%20subtopic%20labels.md)]. This determines which routing queue to assign a question.

Despite making content changes so these labels are more consistent with content on VA.gov, we still find that choosing a category, topic and subtopic is not easy for submitters. We know that people find it easier to choose from shorter lists [[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-3-people-seek-a-specific-category-and-topic-and-they-would-find-it-easier-to-choose-from-shorter-lists)]. We also know that similar contact experiences on other websites only ask for a category and sometimes a topic, or neither [[3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#ask-va-is-type-1)].

In general, Ask VA includes more fields than other support experiences on VA.gov or other websites [[3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights), [4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20other%20support%20channels%20on%20VA.gov.md#insights)]. We hypothesize this contributes to a low completion rate, with currently only 30% of people who visit Ask VA (ask.va.gov) completing a support request [[5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)]. And a satisfaction score that is lower than VA.gov's average [[5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)].

We have an opportunity to improve the start of the form and reduce burden on submitters in order to increase form completion and satisfaction.

## Hypothesis

In 2024, Ask VA started an initiative to build and train a natural language processing (NLP) model to accurately predict a category, topic and subtopic based on a question [[6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)]. We hypothesized that by pre-filling these selections and letting a submitter review the predictions, we could improve the start of the form and reduce unnecessary burden.

To build on this work, we recently conducted user research to understand how an NLP model should surface predictions to submitters [[7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md)].

Among other insights, we learned that:
- Part of a secure support experience is knowing who you're contacting.
- It's reasonable to suggest categories based on other similar questions that Veterans have asked in the past.
- People prefer choosing from a list of narrow options, rather than the tool jumping to a conclusion right away.
- While people are good at identifying if a suggestion is wrong, it's difficult to choose the correct category or topic from a list.
- However, categories and topics often don't match what people expect or they require further description.

These insights can shape our approach to leveraging an NLP model now and later.

## Proposed approach

We propose that we use an NLP model to predict and surface category, topic and subtopic options that are over a certain confidence score. We will determine which level of confidence is significant enough, and then anything that falls above this threshold will be surfaced to a submitter, whereas anything below will be hidden.

This means, we may surface 1 option (no selection) or multiple options (selection required) to submitters, depending on how confident the model is that it picked the correct option(s) for the question. We also plan to:
- Add descriptions to categories, topics and subtopics
- Add an alert that lets people know that our prediction is based on similar questions other Veterans have asked in the past
- Consider adding an additional information component that lets people know what a category, topic and subtopic determine

Research shows that people want to make a selection and the context of multiple options helps them feel more confident in the correct one. That being said, we also don't want to show people options that the model is not confident in. This approach aims to achieve a balance of providing choice, making it easier to choose and making the decision for you when we're very confident.

## Next steps

These steps focus on design work. We may add to or amend these next steps as we move forward.

|Task|Ticket|
|:--|:--|
|Move question to the start of the form and consider any implications|[#1667](https://github.com/department-of-veterans-affairs/ask-va/issues/1667)|
|Design updated category, topic and subtopic pages that predicts 1 or more option|[#1665](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/1?filterQuery=sprint%3A%22Sprint+47%22+label%3Adesign&pane=issue&itemId=2911941048&issue=department-of-veterans-affairs%7Cask-va%7C1665)|
|Update confirmation page to confirm which team will receive a question based on routing queue|[#1668](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/1?filterQuery=sprint%3A%22Sprint+47%22+label%3Adesign&pane=issue&itemId=2918508967&issue=department-of-veterans-affairs%7Cask-va%7C1668)|
|Create prototype(s) to describe proposed category, topic and subtopic approach|[#1669](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/1?filterQuery=sprint%3A%22Sprint+47%22+label%3Adesign&pane=issue&itemId=2918509991&issue=department-of-veterans-affairs%7Cask-va%7C1669)|

## References

- [1] [Category, topic and subtopic labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Category%2C%20topic%20and%20subtopic%20labels.md)
- [2] [Findings from user research in August 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-3-people-seek-a-specific-category-and-topic-and-they-would-find-it-easier-to-choose-from-shorter-lists)
- [3] [Compare Ask VA to contact experiences on other websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights)
- [4] [Compare Ask VA to other support channels on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20other%20support%20channels%20on%20VA.gov.md#insights)
- [5] [Ask VA KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md) 
- [6] [Prefill topic questions with NLP data model initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)
- [7] [User research plan to test concepts that automate steps in Ask VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md)
- [8] [Findings from user research in February 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#key-findings)
