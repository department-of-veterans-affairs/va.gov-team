### BigQuery Schema Proof of Concept

- Google Analytics to BigQuery: 
  - Export each view to its own BigQuery table
  - Build virtual tables to align with Product Success Tool Charts; Using education as the MVP Product Suite
  
  
  
  | Virtual Table Name | GA Dimensions | GA Metrics | Usage | 
  | --- | --- | --- |--- |
  | Form Submissions, Successes, and Failures | ga:eventLabel | ga:TotalEvents | Used for error rates table |
  
  
### Resources for Common BigQuery Recipes
