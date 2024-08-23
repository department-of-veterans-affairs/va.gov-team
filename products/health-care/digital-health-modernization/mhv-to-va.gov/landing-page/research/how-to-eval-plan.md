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


#### On which pages do breadcrumbs get most clicks? And which breadcrumb link texts get the most clicks? Or, how many clicks on breadcrumbs throughout the portal?

Add rows: 
- Page path and screen class
- Link text

Add filters: 
- Page path and screen class begin with "/my-health"
- Event name exactly matches "breadcrumb"

Notes
- If you want to see the report sorted by pages with highest clicks, set Nested Rows to yes. To see report sorted by highest click per breadcrumb, irrespective of the page, set Nested Rows to no.
- To see which breadcrumb link text and url combination gets the most clicks throughout the portal, remove Page path and screen class from Rows.
  

#### Which secondary nav link gets the most clicks throughout the portal? Or, how many clicks does each secondary navigation link receive? Or, how many total clicks does the secondary navigation receive?

Add rows: 
- Link text

Add filters: 
- Page path and screen class begin with "/my-health"
- Datalayer event name exactly matches "nav-mhv-secondary"


#### Which secondary nav link on which page gets the most clicks? Or, where do users click the secondary nav the most?

Add rows: 
- Link text
- Page path and screen class

Add filters: 
- Page path and screen class begin with "/my-health"
- Datalayer event name exactly matches "nav-mhv-secondary"

Notes:
- This will create a report sorted by page-link combo with greatest number of clicks (Nested rows: No)
- Create a report sorted by secondary nav link text with most clicks by switching Nested rows to yes

#### What percent of users use secondary nav across the entire portal?

Use the report created just to find number of clicks on secondary nav throughout the portal. The total event count is the numerator for this metric.

The denominator, portal views, can be fetched with the following report. 

Add filters: 
- Page path and screen class begin with "/my-health"

#### How are users getting to the landing page?


#### What is the ratio of new versus returning users?


#### How many users chose to go back to the national portal? In which tools are users clicking to go back the most? 


**Nice to have** 


#### Segment based on first time try-ers vs. return users 


#### Are we seeing a change in health-related searches?


#### How many tools do users make use of in a single session?

