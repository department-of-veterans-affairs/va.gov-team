# BigQuery Schema Proof of Concept

## Getting Started on BigQuery
To connect BigQuery to the Product Success Tool, the Analytics Insights team will first need verification that it has passed ATO. After this step, we then would need to set up the following:

- Create a Google Cloud organization
- Create a project under the GCP organization
- Establish billing - there are self-service vs. invoiced options; the latter requires we reach out to a GCP representative
 - Export one or more GA360 views (e.g. Modernized Education) to its own BigQuery table. This can only be done once per view, which will store 13 months of historical data. 

## BigQuery Schema

#### Overview of Google Analytics Structure**
The hierarchy of Google Analytis is the VA.gov is the parent "property" and child "views" are organized underneath it. More context is below:

- All VA.gov view - Houses all production activity across modernized and legacy sections
- Product views (e.g. Education Modernized, Disability and Claims Modernized) - Views are filtered down to a subdirectory (or subdirectories, when applicable) level to only include activity for that particular product suite

#### Google Analytics BigQuery Schema
1. There are several common metrics we will be collecting across most products. These are indicated in the table below: 
  
| Metrics | GA Dimensions | GA Metrics | Usage | Calculations | 
| --- | --- | --- |--- | --- |
| Form Submissions, Successes, and Failure Rates | ga:eventLabel | ga:TotalEvents | Used for error rates table | Error Rates = (sum of total events for failures)/(sum of total events for form submissions) by Product Area | 
| Form Funnel | userId, sessionId, pagePath | pageViews | Used to calculate form funnel | Dependent on each product | 
| Time to Task Completion | userId, sessionId, pagePath | hitTimestamp | Used to calculate  | Dependent on each product, but forms would be =`time of form submission`-`time of form initiation` | 

2. Input required for BigQuery Schema

- Should we export all Google Analytics views or only the "All VA.gov view"? 
   - For example, should we use only the `All VA.gov view` since it would contain the events and pageviews we need? What risks do we run by not exporting all of the individual product views, like "Education Modernized"?
   
- Should we structure it so that each row of metrics are stored as views ([See GCP article on Views](https://cloud.google.com/bigquery/docs/views-intro))

#### Call Center and Foresee Schema
This section is a placeholder for Call Center and Foresee Schema. The items below are expected processes we envision for the Call Center and Foresee data: 
- Removal of PII
- Aligning call center data with friendly product names, where applicable

#### Prometheus 

#### Ongoing Maintenance for BigQuery
- Monitor storage and processing costs to find ways to optimize performance
- As new KPIs are identified and added to Product Success tool, write SQL statements for new virtual tables 
- Set up alerts and monitor performance of BigQuery
- Ensure connections between BigQuery and Domo are performing as expected

