# **How to GA4: Data Collection Evaluation Plan**

### **Base explore report**

As a starting point, create an explorer report that contains the following dimensions:
- Page path and screen class
- Heading
- Event name
- Link text
- DataLayer Event Name
- Link location

And add the following metrics:
- Views
- Views per user
- Active users
- Event count
- Event count per user
- Sessions

Add values:
- Event count
- Event count per user

With the above dimensions and metrics, one can run reports for many of the data we want to track. However, at this point, no data will populate within the report. Follow the instructions below for each metric to add to and change the base report into something useable.

## **Set up explore reports to track our eval plan metrics**
Start with the base report described above.

### What are the most clicked links on the landing page? Which are least clicked?

Add rows: 
- Heading
- Link text
- Event name

Add values:
- Event count
- Event count per user
- Active users

Add filters:
- Page path and screen class exactly matches regex: "/my-health|/my-health/"
- Event name exactly matches regex: "link_click|navigation|outbound_link"

Notes
- This report will include a few random links from the sitewide footer. You can just ignore those links.
- If you want to see highest clicks per area of the page, i.e. Which cards have the highest clicks?, then change dropdown Nested Rows to yes. To get highest clicks to lowest irrespective of their location on the page, change dropdown Nested Rows to no. 

### How are users navigating the portal, i.e. breadcrumbs, landing page, secondary nav?

#### Where do breadcrumbs get most clicks? And which breadcrumbs get the most clicks?

Add rows: 
- Page path and screen class
- Link text

Add filters: 
- Page path and screen class begin with "/my-health"
- Event name exactly matches "breadcrumb"

Notes
- If you want to see the report sorted by pages with highest clicks, set Nested Rows to yes. To see report sorted by highest click per breadcrumb, irrespective of the page, set Nested Rows to no.
- To see which breadcrumb link text and url combination gets the most clicks throughout the portal, remove Page path and screen class from Rows.

#### Where does the secondary nav get the most clicks? And which secondary nav link gets the most clicks?

Add rows: 
- Page path and screen class
- Link text

Add filters: 
- Page path and screen class begin with "/my-health"
- Event name exactly matches "breadcrumb"

Add rows: 
- Heading
- Link text
- Event name

Add filters:
- Page path and screen class begins with: "/my-health"
- Event name exactly matches: "breadcrumb"

Notes
- This report will include a few random links from the sitewide footer. You can just ignore those links.
- If you want to see highest clicks per area of the page, i.e. Which cards have the highest clicks?, then change dropdown Nested Rows to yes. To get highest clicks to lowest irrespective of their location on the page, change dropdown Nested Rows to no. 



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

