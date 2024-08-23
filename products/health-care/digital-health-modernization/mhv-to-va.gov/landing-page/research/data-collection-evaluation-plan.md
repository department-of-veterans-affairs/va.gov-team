# **Data Collection Evaluation Plan**

## **Background**

This evaluation plan outlines how the Cartography team will measure and track real-world use of products under the Cartography team's purview including MHV home page and the portal's secondary navigation and breadcrumbs. 

### **Objectives**

- Surface clues for what MHV users are finding most and least valuable and/or usable on the MHV home page and within the portal
- Measure and track voluntary adoption of MHV on VA.gov
- Understand what else MHV users are doing on VA.gov
  
## **KPIs**

**Must have**

| **Theme**| **Question** | **Metric** | **Currently tracking** | **Link to ticket** | **Link to instructions** | 
| --- | --- | --- | --- | --- | ---- |
| Engagement | What are the top tasks on the MHV landing page? | Click (engagement/conversion rate); Top tasks | GA4| No | 
| Navigation and findability | what % of users use secondary nav across the entire portal? |Click analytics| Datadog; GA4 |No|[Link to ticket](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/89719)|
| Navigation and findability | What methods are using to navigate the portal?| Clicks on breadcrumbs, links on MHV landing page, Secondary nav engagement| Yes | ---||
| Navigation and findability | How are users getting to the landing page? (What are the rates of users who click try-me banners versus those who login to get to MHV?) | Account activity logs from DAT team: # of clicks from the discrete locations in MHV classic. Reverse path exploration in GA4 using my/health/. what proportion are coming from specific links? |  | --- | [Link to ticket](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/89722)|
| User segmenting | What is the ratio of new versus returning users to MHV LP? | Segmented reports in GA4 |  | --- ||
| Usability and ease | How many users choose to go back to the national portal? In which tools are users clicking that link the most? | Clicks on Go-back links (3); Pull into excel, month to month (# of clicks in each) | | Yes | [Link to ticket](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/89113)|

**Nice to have** 

| **Theme**| **Question** | **Metric** | **Tools** | **Currently tracking**| 
| --- | --- | --- | --- | --- |
| Navigation and findability| What are the most common ways users get to the LP? And how do rates compare for first time try-ers vs. return users | Path exploration | GA4 |  --- | 
| Usability and ease | Are MHV nat'l users accessing more VA benefits since integration? | Path exploration | -- | -- |
| Navigation and findability | Are we seeing an uptick in health-related searches? | Search terms throughout site | GA4 | --- | 
| User segmenting | What can we learn about first time tryers vs. tryers that return vs. those who tried and never returned? | -------- | ----- | ------- | ----------| 
| User segmenting | How many tools do users make use of in a single session? How does that compare with national portal stats? | Analytics channel | GA4 | ----- | 
| User segmenting | Do Veterans use more than one tool per session? | Page views per session | ---- | ---- | 
| Findability | How much of the page is being looked at by Veterans? | Page view percentages by scroll depth | ---- | ---- | 
| Access to help | How many Veterans call the My HealtheVet help desk when they need support?| Help desk | ---- | --- |
| Ease of use | Do we have latency or other data loading issues? | ---- | Page load times | ---- | ----- | 


## **Data Source Point People**

| **Tool** | **Team Members** |
| --- | --- |
| Google Analytics | Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
| Medallia | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg |
| Domo | Wesley Rowe | Florence McCafferty |
| Datadog | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
