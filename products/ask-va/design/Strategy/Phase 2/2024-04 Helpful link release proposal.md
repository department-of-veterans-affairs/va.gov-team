# Helpful link release proposal

Last updated by @tygindraux: April 18, 2025

This document proposes releasing a new helpful link feature on Ask VA for specific topics.

## About the feature

We will surface links to content on VA.gov after a submitter chooses a topic in the form. They will have the option to self-serve and find an answer to their question on VA.gov, or, to continue and submit a question through Ask VA.

This [strategy document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-03%20Design%20strategy%3A%20Recommend%20helpful%20links%20in%20Phase%202.md) describes additional context.

### Scope

We propose releasing this feature on 3 distinct topics using pre-determined or static links. In the future, these links could be surfaced dynamically in order to make them more specific to an individual submitter's question.

Testing this feature in production using static links on a limited number of topics, will allow us to:

- build, test and release the new UI in production
- analyze whether we have chosen the right success metrics for this feature and adjust as needed
- track success and determine whether this initiative should be scaled

### Designs

Designs are ready for review in [Figma](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=690-205858&t=kbttHIbiRuLRt65v-4). We have requested a content review from VA.gov centralized content team ([#107821](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107821)). After the content review, we expect these designs to be ready for development.

## Outcomes

Research shows that people expect to receive help earlier than 7 business days and as soon as in real time. This approach aims to provide helpful information as soon as possible while still allowing submitters the ability to contact a person at VA when information on VA.gov doesn't answer their question or they choose not to self-serve.

|Outcome|Description|
|:---|:---|
|Improved customer support efficiency|Ask VA can provide a more efficient support experience by providing information sooner than 7 business days. In addition, we expect the volume of submissions to decrease if some users self-serve, thereby increasing agent response time to inquiries.|
|Improved user satisfaction|Users are more satisfied with Ask VA because they're able to self-serve and get answers to some questions sooner, and when they can't or choose not to, they still have the opportunity to escalate to a real person.|
|Improved trust in VA|Users trust VA more when they notice Ask VA wants to help them get answers to their questions as soon as possible and without sharing unnecessary information.|
|Improved scalability|Ask VA handles more questions without a proportional increase in resources, due to surfacing links that help resolve people's questions without a submission.|

## Measuring success

These Key Performance Indicators (KPIs) can help us understand whether this feature is meeting expected outcomes.

> [!NOTE]
> We need Ariel's thoughts and edits below. I've copied over the KPI's from our Product Outline as a starting point.

### User experience KPIs
- **Satisfaction**: Increase customer satisfaction score (CSAT) for form and dashboard
- **Experience**: Increase experience rating for form and dashboard
- **Form completion rate**: Increase the percentage of questions successfully sent by submitters for form
- **Time to submit form**: Decrease the average time it takes submitters to send a question for form
- **Reply rate**: Increase the number of replies to questions for dashboard
- **Time to reply**: Decrease the average time it takes submitters to reply to a question for dashboard

### Performance KPIs
- **Zero silent failures**: At any point in time, there are zero silent failures in sending or receiving data needed for VA agents to answer submitter questions for form and dashboard
- **Error rates**: Decrease error rates in sending or receiving data from the Ask VA CRM and other APIs
- **Latency**: Decrease average time to receive data from the Ask VA CRM and other APIs
- **Throughput**: Increase the number of transactions without impact to latency or error rates

View more details in the [Ask VA KPIs doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md)

### Business KPIs
The Ask VA CRM business team tracks business KPIs, which include metrics like: average resolution time (days to solve), number of authenticated submitters, submissions by category, and more. Learn more in [the AVA Power BI report](https://app.powerbigov.us/groups/me/reports/e895dbed-17f3-45d1-8219-2b3fe27b8b7e?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&pbi_source=linkShare&bookmarkGuid=72bfed1d-0745-4452-a5e8-6a36551cb166). You'll have to request permission to view the report.
