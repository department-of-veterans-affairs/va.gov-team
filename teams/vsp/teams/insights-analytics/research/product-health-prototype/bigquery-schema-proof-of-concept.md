### BigQuery Schema Proof of Concept

#### Getting Started on BigQuery
To connect BigQuery to the Product Success Tool, the Analytics Insights team would need access to a data engineer to help us with the following configuration. 

1. Google Analytics for All Product Suites: 
- We will need to first enable the Google Analytics 360 connection to BigQuery: 
  - Export each GA360 view (e.g. Modernized Education) to its own BigQuery table. This can only be done once per view, which will store 13 months of historical data. 
  - Craft SQL statements that will build virtual tables; each virtual table should be aligned with a chart(s) in the Product Success Tool 

  
  | Virtual Table Name | GA Dimensions | GA Metrics | Usage | Calculations | 
  | --- | --- | --- |--- | --- |
  | Form Submissions, Successes, and Failures | ga:eventLabel | ga:TotalEvents | Used for error rates table | Error Rates = (sum of total events for failures)/(sum of total events for form submissions) by Product Area | 
  | Form Funnel | userId, sessionId, pagePath | pageViews | Used to calculate form funnel | TBD - Nedie and Jon to Pull BQ Recipe | 
  
2. Develop process for transforming flat call center files. Considerations include:
 - Removal of PII
 - Aligning call center data with friendly product names, where applicable

#### Other Maintenance within BigQuery
- Monitor storage and processing costs to find ways to optimize performance
- As new KPIs are identified and added to Product Success tool, write SQL statements for new virtual tables 
- Set up alerts and monitor performance of BigQuery
- Ensure connections between BigQuery and Domo are performing as expected

#### Resources for Common BigQuery Recipes
