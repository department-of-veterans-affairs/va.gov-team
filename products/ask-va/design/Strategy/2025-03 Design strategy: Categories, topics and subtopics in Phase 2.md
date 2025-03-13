# Design strategy: Categories, topics and subtopics in Phase 2

Office of the CTO - Digital Experience (OCTO-DE), Ask VA, Ask VA VA.gov Team

Last updated by @tygindraux on March 13, 2025

## Overview

Ask VA currently requires submitters to choose a category, topic and subtopic [[1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Category%2C%20topic%20and%20subtopic%20labels.md)]. This determines which routing queue to assign a question.

Despite making content changes so these labels are more consistent with content on VA.gov, we still find that choosing a category, topic and subtopic is not easy for submitters. We know that people find it easier to choose from shorter lists [[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-3-people-seek-a-specific-category-and-topic-and-they-would-find-it-easier-to-choose-from-shorter-lists)]. We also know that similar contact experiences on other websites only ask for a category and sometimes a topic, or neither [[3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#ask-va-is-type-1)].

In general, Ask VA includes more fields than other support experiences on VA.gov or other websites [[3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights), [4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20other%20support%20channels%20on%20VA.gov.md#insights)]. We hypothesize this contributes to a low completion rate, with currently only 30% of people who visit Ask VA (ask.va.gov) completing a support request [[5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)]. And a satisfaction score that is lower than VA.gov's average [[5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)].

We have an opportunity to improve the start of the form and reduce burden on submitters in order to increase form completion and satisfaction.

## Hypothesis

In 2024, we started an initiative to build and train a natural language processing (NLP) model to accurately predict a category, topic and subtopic based on a question [[6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)]. We hypothesized that by pre-filling these selections and letting a submitter review the predictions, we could improve the start of the form and reduce unnecessary burden.

We recently conducted user research to understand how an NLP model should surface predictions to submitters [[7]((https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md))].

Among other insights, we learned that:
- Part of a secure support experience is knowing who you're contacting.
- It's reasonable to suggest categories based on other similar questions that Veterans have asked in the past.
- People prefer choosing from a list of narrow options, rather than the tool jumping to a conclusion right away.
- While people are good at identifying if a suggestion is wrong, it's difficult to choose the correct category or topic from a list.

We can use this insight to shape the best approach to leveraging this NLP model now and later.

## Recommendation

### Recommend a shorter list of categories, topics and subtopics based on a question

Through research with Veterans and desk research, we've learned that:

- Ask VA Determine the right moment(s) to offer helpful links based on information people share

Veterans who are familiar with other VA services expect Ask VA to work similarly – and it may be unclear when to use Ask VA or another service.

## Next steps

These steps focus on design work. We may add to or amend these next steps as we move forward.

|Task|Ticket|
|:--|:--|
|Move question to the start of the form and consider any implications||
|Design updated category, topic and subtopic pages that recommend 1 or more option||
|Update confirmation page to confirm receiving team based on routing queue||
|Design and place alert that lets people know that a suggestion is based on other similar questions||

- Include descriptions on category, topic and subtopic radio buttons
- Include additional information component that lets people know what a category, topic and subtopic determine

|`Links`|Determine the right moment(s) to offer helpful links||
|`Links`|Design page or component to offer helpful links or continue with form||

## References

- [1] [Category, topic and subtopic labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Category%2C%20topic%20and%20subtopic%20labels.md)
- [2] [Findings from user research in August 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-3-people-seek-a-specific-category-and-topic-and-they-would-find-it-easier-to-choose-from-shorter-lists)
- [3] [Compare Ask VA to contact experiences on other websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights)
- [4] [Compare Ask VA to other support channels on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20other%20support%20channels%20on%20VA.gov.md#insights)
- [5] [Ask VA KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md) 
- [6] [Prefill topic questions with NLP data model initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)
- [7] [User research plan to test concepts that automate steps in Ask VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md)
- [8] [Findings from user research in February 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Findings.md#key-findings)
