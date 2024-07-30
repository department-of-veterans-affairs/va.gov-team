[Draft]

# **Landing page on VA.gov: Data Collection Evaluation Plan**

## **Background**

This evaluation plan outlines how the Cartography team will measure and track the My HealtheVet transition to VA.gov. The plan focuses on analyzing Veterans' usage of the MHV landing page and other key transition metrics to gauge the success of the migration.

### **Objectives**

- Facilitate Veterans' transition to the new MHV landing page & features to complete health-related actions 

### **Key Results**

- Increased product use
- Increased product Veteran feedback
- Decreased negative Veteran feedback

## **KPIs**

| **Theme** | **Ideation Question** | **Quant Question** | **Metric** | **Tools** | **Notes** | 
| --- | --- | --- | --- | --- | --- | 
| Engagement | What are users doing on the page? Where are they not going? | What are the top tasks on the MHV landing page? | Click (engagement/conversion rate); Top tasks | Datadog; GA4; might need export | Value add because they should be able to find other things they can't current | 
| Navigation and findability | Navigation throughout portal: track clicks on breadcrumbs, secondary nav, throughout the portal; How are they moving through the portal? | How are users navigating the portal? | Top tasks; Page views per session; Secondary nav engagement per session | GA4 | - Clicks on secondary nav throughout the portal (be able to compare clicks on secondary nav from a tool page vs. from the home page) - Clicks on breadcrumbs throughout the portal (be able to compare clicks on secondary nav from a tool page vs. clicks on breadcrumbs) Turn on screen reader support - Engagement for each tool / session - Conversions for each tool / session - Same stats but for national portal tools ^| 
| Understanding - Navigation and findability | what % of users use secondary nav vs those who use the home page as a hub (going back and forth) | what % of users use secondary nav vs those who use the home page as a hub (going back and forth)| Path exploration| GA4 | - Value add of SN? or do they prefer to flow back through the LP? - Observe: How initial visit behaviors change over time as they continue to use MHV in the future & become more proficient | 
| Navigation and findability | Are we seeing an uptick in health-related searches? | Are we seeing an uptick in health-related searches? | Search terms throughout site | GA4 | Keep an eye on search terms: Mikki for help if needed | 
| Usability and ease | Are we achieving OCTO goal of bringing MHV users into VA.gov for better access to benefits and other resources? | Are MHV nat'l users accessing more VA benefits since integration? | Path exploration | -- | - RS idea: Account activity log will show MHV registered users; what proportion has an additional action showing a benefit they are also eligible for - KF idea: MyVA auth page shows if you have upcoming appt & personalized info; could we access data about their other benefits here? | 
| Usability and ease | When do users go back to the classic portal? | How many users choose to go back to the national portal? In which tools are users clicking that link the most? | Clicks on Go-back links (3); Pull into excel, month to month (# of clicks in each) | Datadog - already tracked | Overall count; divided by the Go Back links assoc. with med records vs the others, and differentiate the link from Secure Messaging (different, not on VA.gov yet) | 
| Navigation and findability | How are users coming into the portal? (Try-me banners, national header, health hub tool pages, My VA tool links) Look at general trends and movement | What are the rates of users who click try-me banners versus those who login to get to MHV? | Account activity logs from DAT team: # of clicks from the discrete locations in MHV classic. Reverse path exploration in GA4 using my/health/. what proportion are coming from specific links? | DAT request | - RS used account activity logs from DAT team: # of clicks from the discrete locations in MHV classic - Get URLs for try me links in classic and see if we have that data in GA4: Kaitlin posted in slack - Do users come in from different health hub pages? | 
| User segmenting | What can we learn about first time tryers vs. tryers that return vs. those who tried and never returned? | -------- | ? | ? | ----------| 
| Navigation and findability| How do users get to the landing page? | What are the most common ways users get to the LP? And how do rates compare for first time try-ers vs. return users | Path exploration | ? | ? | 
| User segmenting | How many new users versus how many have come back? | What is the ratio of new versus returning users to MHV LP? | Analytics channel | GA4 | Can we create groups for new vs returning users, and can we segment from there based on the other behaviors ^? | 
| User segmenting | How many tools do users make use of in a single session? How does that compare with national portal stats? | Analytics channel | GA4 | Can we create groups for new vs returning users, and can we segment from there based on the other behaviors ^? | ----- | - Engagement for each tool / session - Conversions for each tool / session - Same stats but for national portal tools ^ | ? | --- | 
| User segmenting | are Veterans returning to VA.gov tools for a second session? | Do Veterans use more than one tool per session? | Page views per session | ---- | ---- | 
| Findability | How much of the landing page do users see on average? | How much of the page is being looked at by Veterans? | Page view percentages by scroll depth | ---- | ---- | 
| Access to help | MHV help desk call volume and successful answers; track change over time especially as concerns national portal vs. on VA.gov | ------ | - Help desk call volume, Success rate at answering Veteran's question, Same for national portal (all-time?)| ---- | ---- | 
| Ease of use | Do we have latency or other data loading issues? | ---- | Page load times | ---- | ----- | 
| Ease of use | What MHV pages are getting the most bookmarks? | ---- | Funnel | ---- | ----- | 

## **Data Analysis Cadence**

Data analysis will be conducted each sprint with highlights shared as part of the update at the End of Sprint Demo with more comprehensive reporting done as requested. 

## **Data Source Point People**

| **Tool** | **Team Members** |
| --- | --- |
| Google Analytics | Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
| Medallia | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg |
| Domo | Wesley Rowe | Florence McCafferty |
| Datadog | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
