[Draft]

# **Landing page on VA.gov: Data Collection Evaluation Plan**

## **Background**

This evaluation plan outlines how the Cartography team will measure and track the My HealtheVet transition to VA.gov. The plan focuses on analyzing Veterans' usage of the MHV landing page and other key transition metrics to gauge the success of the migration.

### **Objectives**

- Facilitate Veterans' transition to the new MHV landing page & features to complete health-related actions 

### **Key Results**

- Engagement rate (Datadog out-of-box): ≥50%
- Landing page conversion rate (non-header action): ≥ 40%

## **KPIs**

| **Theme** | **Ideation Question** | **Quant Question** | **Metric** | **Tools** | **Notes** | 
| --- | --- | --- | --- | --- | --- | 
| Engagement | What are users doing on the page? Where are they not going? | What are the top tasks on the MHV landing page? | Click (engagement/conversion rate); Top tasks | Datadog; GA4; might need export | Value add because they should be able to find other things they can't current | 
| Navigation and findability | Navigation throughout portal: track clicks on breadcrumbs, secondary nav, throughout the portal; How are they moving through the portal? | How are users navigating the portal? | Top tasks; Page views per session; Secondary nav engagement per session | GA4 | - Clicks on secondary nav throughout the portal (be able to compare clicks on secondary nav from a tool page vs. from the home page) - Clicks on breadcrumbs throughout the portal (be able to compare clicks on secondary nav from a tool page vs. clicks on breadcrumbs) Turn on screen reader support - Engagement for each tool / session - Conversions for each tool / session - Same stats but for national portal tools ^| 
| Understanding - Navigation and findability | what % of users use secondary nav vs those who use the home page as a hub (going back and forth) | what % of users use secondary nav vs those who use the home page as a hub (going back and forth)| Path exploration| GA4 | - Value add of SN? or do they prefer to flow back through the LP? - Observe: How initial visit behaviors change over time as they continue to use MHV in the future & become more proficient | 
| Navigation and findability | Are we seeing an uptick in health-related searches? | Are we seeing an uptick in health-related searches? | Search terms throughout site | GA4 | Keep an eye on search terms: Mikki for help if needed | 
| Usability and ease | Are we achieving OCTO goal of bringing MHV users into VA.gov for better access to benefits and other resources? | Are MHV nat'l users accessing more VA benefits since integration? | Path exploration | -- | - RS idea: Account activity log will show MHV registered users; what proportion has an additional action showing a benefit theyre also eligible for
- KF idea: MyVA auth page shows if you have upcoming appt & personalized info; could we access data about their other benefits here?



| Engagement Rate |  |  |
| Ease of Use | Do Veterans return to MHV National Portal? | Use of 'Go back to the previous version of My HealtheVet link |
| Ease of Use | Do Veterans provide positive feedback? | Sentiment analysis from qualitative survey feedback, Sentiment analysis from qualitative call center feedback, Sentiment analysis from qualitative feedback emails |
| Ease of Use | Do Veterans provide negative feedback? | Sentiment analysis from qualitative survey feedback, Sentiment analysis from qualitative call center feedback, Sentiment analysis from qualitative feedback emails |
| Ease of Use | Do Veterans follow the expected flow? | Funnel % |
| Ease of Use | Do Veterans spend excessive time on Secure Messaging? | Time between actions/steps/pages, Time to complete (per CTA), User Segments per page/section |
| Ease of Use | Do Veterans frequently return to the Secure Messaging landing page? | Page views per session |
| Service Completion | Are Veterans able to manage their healthcare with Secure Messaging? | Recurring users, Bounce rate/Engagement rate, Top dropoff/page exits |
| Service Completion | Is a Veteran able to send a message? | Completion % ('Send' CTA), Time between actions/steps/pages, Funnel % |
| Service Completion | Is a Veteran able to attach a file to a message? | Completion % ('Attach file' CTA), Time between actions/steps/pages |
| Service Completion | Is a Veteran able to read a message? | Completion % (subject link and/or expand accordion), Time between actions/steps/pages |
| Service Completion | Is a Veteran able to reply to a message? | Completion % ('Send' CTA from /thread), Time between actions/steps/pages, Funnel % |
| Service Completion | Is a Veteran able to continue a draft? | Completion % ('Send' CTA from /draft), Time between actions/steps/pages |
| Service Completion | Is a Veteran able to create a folder? | Completion % ('Create new folder' CTA), Time between actions/steps/pages |
| Service Completion | Is a Veteran able to move a message to a folder? | 'Move' + 'Confirm', Time between actions/steps/pages |
| Service Completion | Is a Veteran able to search for a message? | Completion % ('Filter' CTA), Time between actions/steps/pages |
| Service Completion | Is a Veteran able to extend a session? | Completion % ('I need more time' CTA) |
| Service Completion | Is a Veteran able to print messages? | 'Print' CTA + Radio Button + 'Print' CTA |
| Trust | Do Veterans return to MHV? | Use of 'Go back to previous version of secure messaging' link |
| Trust | Do Veterans provide positive feedback? | Sentiment analysis from qualitative survey feedback, Sentiment analysis from qualitative call center feedback, Sentiment analysis from qualitative feedback emails |
| Trust | Do Veterans provide negative feedback? | Sentiment analysis from qualitative e survey feedback, Sentiment analysis from qualitative call center feedback, Sentiment analysis from qualitative feedback emails |


## **Data Analysis Cadence**

Data analysis will be conducted each sprint with highlights shared as part of the update at the End of Sprint Demo with more comprehensive reporting done...

## **Data Source Point People**

| **Tool** | **Team Members** |
| --- | --- |
| Google Analytics | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe
| Medallia | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg |
| Domo | Kat Brinkley, Wesley Rowe |
| Datadog | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
