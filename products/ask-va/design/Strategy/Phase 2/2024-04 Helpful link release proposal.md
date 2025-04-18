# Helpful link release proposal

Last updated by @tygindraux: April 18, 2025

This document proposes releasing a new helpful link feature on Ask VA for specific topics.

## About the feature

We will surface links to content on VA.gov after a submitter chooses a topic in the form. They will have the option to self-serve and find an answer to their question on VA.gov, or, to continue and submit a question through Ask VA.

### Scope

We propose releasing this feature on 3 distinct topics using pre-determined or static links. In the future, these links could be surfaced dynamically in order to make them more specific to an individual submitter's question.

Testing this feature in production using static links on a limited number of topics, will allow us to:

- build, test and release the new UI in production
- analyze whether we have chosen the right success metrics for this feature and adjust as needed
- track success and determine whether this initiative should be scaled

### Designs

Designs are ready in [Figma](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=690-205858&t=kbttHIbiRuLRt65v-4). We are awaiting a content review from VA.gov content and IA centralized team ([#107821](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107821)).

## Outcomes

Research shows that people expect to receive help earlier than 7 business days and as soon as in real time. This approach aims to provide helpful information as soon as possible while still allowing submitters the ability to contact a person at VA when information on VA.gov doesn't answer their question or they choose not to self-serve.

|Outcome|Description|
|:---|:---|
|Improved customer support efficiency|Ask VA can provide a more efficient support experience by providing information sooner than 7 business days. In addition, we expect the volume of submissions to decrease if some users self-serve, thereby increasing agent response time to inquiries.|
|Improved user satisfaction|Users are more satisfied with Ask VA because they're able to self-serve and get answers to some questions sooner, and when they can't or choose not to, they still have the opportunity to escalate to a real person.|
|Improved trust in VA|Users trust VA more when they notice Ask VA wants to help them get answers to their questions as soon as possible and without sharing unnecessary information.|
|Improved scalability|Ask VA handles more questions without a proportional increase in resources, due to surfacing links that help resolve people's questions without a submission.|

## Measuring success

These Key Performance Indicators (KPIs) can help us understand how Ask VA is meeting expected submitter outcomes and operational performance of our Ask VA application. We'll track these primary KPIs over time.

### User experience KPIs
- **Satisfaction**: Increase customer satisfaction score (CSAT) for form and dashboard
- **Experience**: Increase experience rating for form and dashboard
- **Form completion rate**: Increase the percentage of questions successfully sent by submitters for form
- **Time to submit form**: Decrease the average time it takes submitters to send a question for form
- **Reply rate**: Increase the number of replies to questions for dashboard
- **Time to reply**: Decrease the average time it takes submitters to reply to a question for dashboard

Note: The satisfaction and experience metrics are different. The satisfaction rating comes from the [Medallia feedback button survey](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data#AccessingandUtilizingVeteranSupportData-FeedbackSurveyQuestions). The experience rating comes from the [Medallia intercept survey](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data#AccessingandUtilizingVeteranSupportData-MedalliaInterceptSurveyQuestions).
