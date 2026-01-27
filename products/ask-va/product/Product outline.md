# Product outline for Ask VA
Last updated by Stephanie Vargo on 1/27/2026

This product outline gives an overview of the Ask VA product. 

**Jump to:**
- [Overview](#overview)
- [Problem statement](#problem-statement)
- [Outcomes](#outcomes)
- [Measuring success](#measuring-success)
- [Team and VA partners](#team-and-va-partners)

## Overview
Ask VA (AVA) is a digital support channel for Veterans, family members and other submitters. You can use Ask VA to ask a question about education benefits, disability compensation, health care and many other topics. Ask VA should only be used for non-urgent needs.

You can reach Ask VA at [va.gov/contact-us/ask-va](https://va.gov/contact-us/ask-va).

## Problem statement
**Background**: Veterans and family members can ask a variety of questions to VA because VA offers many different types of benefits. There are different VA staff teams, each specialized in answering specific types of questions. Reaching out to VA online can be more convenient and accessible than calling or visiting a VA facility in person.

**Ask VA's solution**: Ask VA is frontend application (contact form and inbox) where Veterans, family members, and other submitters can get answers to any VA question. Users don't need to understand VA's internal bureaucracy to ensure they get a correct answer to their question. The frontend integrates with a backend customer relationship management (CRM) application that routes questions to the appropriate VA team. Multiple VA teams can access and use the CRM.

## Outcomes
- **User experience outcomes**: Ensure users have an easy and accessible interaction with Ask VA.
- **Functional outcomes**: Ensure the system operates correctly and efficiently with Ask VA.
- **Business outcomes**: Ensures increased efficiency for VA customer support. 

### User experience outcomes
|Outcome|Description|
|:---|:---|
|Easy to find|Users can easily locate the Ask VA contact form and inbox on VA.gov to quickly get in touch and check responses.|
|Quick to complete|The contact form is short, simple, and prefilled with known information for authenticated users, making it quick and easy to fill out.|
|Clear instructions and information|Users receive clear guidance on what information to provide, what to expect, and how to track their inquiries.|
|Mobile-friendly|The contact form and inbox are fully functional and user-friendly on mobile devices.|
|Accessibility|Users can access the form and dashboard using any assistive technology, ensuring all users can easily contact VA.|
|Easy to track|Authenticated users can view their question history and statuses in their inbox. Unauthenticated users can also check the status of their questions.|

### Functional outcomes
|Outcome|Description|
|:---|:---|
|Form submission (CRM integration)|All form submissions are correctly routed. Users receive confirmation or error messages.|
|Retrieving questions to display in inbox (CRM integration)|Users can see all their previous questions in their inbox after logging in.|
|Check question status unauthenticated (CRM integration)|Users can check the status of their questions using a question number on the unauthenticated landing page.|
|Successful integrations with non-CRM APIs|The system successfully retrieves data from other APIs, such as medical or school facilities.|

### Business outcomes
|Outcome|Description|
|:---|:---|
|Improved customer support efficiency|With fewer resources and a more streamlined process for routing and managing questions, Ask VA: (1) provides a higher quality customer support experience compared to traditional channels, like phone calls, (2) handles a larger volume of questions, and (3) answers a variety of questions in a single system rather than multiple systems.|
|Improved user satisfaction|Users are more satisfied with Ask VA as compared to traditional customer support experiences.|
|Improved trust in VA|Users trust VA and VA services more after getting answers through Ask VA.|
|Improved scalability|Ask VA handles more questions without a proportional increase in resources, due to an efficient CRM integration.|
|Improved flexibility|Ask VA's flexibility in integrating with other systems and APIs allows for more efficient future enhancements and expanded services.|

## Measuring success
Key Performance Indicators (KPIs) help us understand how Ask VA is meeting expected submitter outcomes and operational performance of our Ask VA application. We'll track these primary KPIs over time.

### User experience KPIs
- **Satisfaction**: Increase customer satisfaction score (CSAT) for form and dashboard
   - This KPI comes from the [Medallia intercept survey](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data#AccessingandUtilizingVeteranSupportData-MedalliaInterceptSurveyQuestions).
   - This is our primary satisfaction rating because this survey displays randomly to users. Feedback is less biased because users don't intentionally submit feedback.
- **Feedback button satisfaction**: Increase feedback button satisfaction rating for form and dashboard
   - This KPI comes from the [Medallia feedback button survey](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data#AccessingandUtilizingVeteranSupportData-FeedbackSurveyQuestions).
   - This is our secondary satisfaction rating because users must select the feedback button on purpose to provide feedback. Feedback is skewed towards lower ratings because of this.
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
The Ask VA CRM business team tracks business KPIs, which include metrics like: average resolution time (days to solve), number of authenticated submitters, submissions by category, and more. Learn more in [the AVA Power BI report](https://app.powerbigov.us/groups/me/reports/e895dbed-17f3-45d1-8219-2b3fe27b8b7e?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&pbi_source=linkShare&bookmarkGuid=72bfed1d-0745-4452-a5e8-6a36551cb166). Request accesss to view the report.

## Team and VA partners
### Team
View our team [in this doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/README.md#our-team).

### VA partners
We closely work with the Ask VA CRM development team. Learn more about our partnership [in this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696976895933/4f5410b3e8770441f4101cbabd565aa0cd13dac7).
