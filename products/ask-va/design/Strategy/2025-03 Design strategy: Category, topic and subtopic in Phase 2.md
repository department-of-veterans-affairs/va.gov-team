# Design strategy: Category, topic and subtopic in Phase 2

Office of the CTO - Digital Experience (OCTO-DE), Ask VA, Ask VA VA.gov Team

Last updated by @tygindraux on March 13, 2025

## Overview

Ask VA currently requires submitters to choose a category, topic and subtopic [[1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Category%2C%20topic%20and%20subtopic%20labels.md)]. This is critical because it determines which routing queue to assign to a question.

Despite making content changes so these labels are more consistent with content on VA.gov, we still find that choosing a category, topic and subtopic is not easy for submitters. We know that people find it easier to choose from shorter lists [[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-3-people-seek-a-specific-category-and-topic-and-they-would-find-it-easier-to-choose-from-shorter-lists)]. We also know that similar contact experiences on other websites only ask for a category and sometimes a topic, or neither [[3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#ask-va-is-type-1)].

Overall, Ask VA includes more forms that other support experiences on VA.gov and other websites [3, 4]. Quantitatively, currently only 30% of people who visit Ask VA (ask.va.gov) will complete a support request. And the satisfaction score for ask.va.gov is 23%, compared to VA.gov's 29% CSAT score. [[5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)].

We have an opportunity to improve the start of the form and reduce burden on submitters.

### Hypothesis

In July 2024, we started an initiative to build a natural language processing (NLP) model that predicts a category, topic and subtopic based on a question [[6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)]. 

We hypothesized that by pre-filling these selections and letting a submitter review the predictions, we could reduce unnecessary burden. We expect this will improve satisfaction and reduct friction.y.

---

Submitters have to answer many questions in the Ask VA form than the typical contact form. There's opportunity to use an AI/NLP data model to accurate predict queue given question text and other variables that determine queue routing.

As a first step to test, if the model is successful, we could present predicted Category, Topic, and Subtopic answers to the submitter. The submitter can then simply review the prefilled information rather than answer these questions. Answers to these questions currently determine routing of the inquiry.

Originally, we thought this could also improve resolution time. After conducting an analysis on queue and resolution time, we determined that an AI model that returns an Ask VA queue given question text would likely only minimally impacts resolution time.

## NLP Data Model


https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md#problem-statement

Only 1/3 of Veterans, family members, and other people with questions for VA who visit the current Ask VA landing page (ask.va.gov) end up completing the support request. Ask VA's CSAT score is at 23%, compared to VA.gov's 29% CSAT score. User research has identified form burden as a barrier for Veterans to receiving answers to their inquiries. To expediently get Veterans the healthcare & benefits answers they deserve, VA is simplifying the process.

Solution: We'll reduce unnecessary Veteran inputs by auto-classifying the categories, topics, and subtopics needed to route Veteran inquiries to the right place. This is expected to improve satisfaction and reduce friction in the direct healthcare and benefits process.

## Insights

Through research with Veterans and desk research, we've learned that:

- Ask VA Determine the right moment(s) to offer helpful links based on information people share

Veterans who are familiar with other VA services expect Ask VA to work similarly – and it may be unclear when to use Ask VA or another service.

## Proposed approach

### Recommend a shorter list of categories, topics and subtopics based on a question



## Next steps

These steps focus on design work. We may add to or amend these next steps as we move forward.

|Focus|Task|Ticket|
|:--|:--|:--|
|`Categories` `Links`|Move question to the start of the form and consider any implications||
|`Categories`|Design updated category, topic and subtopic pages that recommend 1 or more option||
|`Categories`|Update confirmation page to confirm receiving team based on routing queue||
|`Links`|Determine the right moment(s) to offer helpful links||
|`Links`|Design page or component to offer helpful links or continue with form||
|`Categories` `Links`|Design and place alert that lets people know that a suggestion is based on other similar questions||

- Include descriptions on category, topic and subtopic radio buttons
- Include additional information component that lets people know what a category, topic and subtopic determine

## References

- [1] [Category, topic and subtopic labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Category%2C%20topic%20and%20subtopic%20labels.md)
- [2] [Findings from user research in August 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Findings.md#finding-3-people-seek-a-specific-category-and-topic-and-they-would-find-it-easier-to-choose-from-shorter-lists)
- [3] [Compare Ask VA to contact experiences on other websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20contact%20experiences%20on%20other%20websites.md#insights)
- [4] [Compare Ask VA to other support channels on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/02-2025%20Comparative%20analysis/Compare%20Ask%20VA%20to%20other%20support%20channels%20on%20VA.gov.md#insights)
- [5] [Ask VA KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md) 
- [6] [Prefill topic questions with NLP data model initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)
