# IVC-CHAMPVA Forms Datadog Dashboard Readme

# Overview
The IVC ChampVA Forms Dashboard provides a comprehensive overview of the status and performance of form submissions within the IVC ChampVA system. This dashboard is part of our monitoring and reporting tool to ensure the reliability and efficiency of form processing. Below is a detailed explanation of each section of the dashboard and what it represents.

# Dashboard Sections
 ![image](images/main.png)

## 1 Missing Pega Status

Description: This section highlights the number of forms that are missing a status update from the third-party system, Pega.
Key Metric: The large orange box shows the total count of forms currently missing a status update. As of the latest data, this number is 89.

The "Missing Pega Status" section relies on a background job that checks for forms without a status update from Pega.

### Explanation

#### Module and Class: Defines the MissingFormStatusJob class within the IvcChampva module.
#### Sidekiq Integration: Utilizes Sidekiq to run background jobs.
#### Perform Method:
1. Check Settings: Ensures the job is enabled before proceeding.
2. Fetch Forms: Retrieves forms that lack a status update from Pega.
3. Send Metrics to DataDog: Reports the count and details of these forms to DataDog.
4. Error Handling: Logs any errors encountered during execution.
   
This job is crucial for keeping track of form processing status and ensuring that issues are promptly identified and addressed.

## 2 All Upload Submissions

Description: This graph displays the number of form submissions over time.
Key Metric: The bar graph helps identify trends and peaks in submission activity, indicating busy periods.

## 3 Success (Upload)
Description: This metric shows the percentage of successful form uploads.
Key Metric: A high success rate, currently at 98.53%, indicates the system's reliability in processing forms without errors.

## 4 Errors (Upload)

Description: This metric shows the percentage of form uploads that resulted in errors.
Key Metric: The error rate is currently at 1.47%. Monitoring this helps in identifying issues that need attention to improve the system's performance.

## 5 Missing Pega Status List

Description: This list details each form that is missing a status update.
Key Metric: The table shows the form ID and the number of days it has been without a status update. All forms listed have been missing updates for 30 days.

## 6 Specific Form Submissions

Description: These small charts show the number of submissions for specific form types.
Key Metrics:
10-10D Submissions: Tracking submissions for form type 10-10D.
10-7959F-1 Submissions: Tracking submissions for form type 10-7959F-1.
10-7959F-2 Submissions: Tracking submissions for form type 10-7959F-2.
10-7959C Submissions: Tracking submissions for form type 10-7959C.
10-7959A Submissions: Tracking submissions for form type 10-7959A.

## 7 All Pega API Calls

Description: This graph shows the volume of API calls to the Pega system.
Key Metric: The number of API calls over time helps in understanding the interaction volume between our system and Pega, indicating potential performance or load issues.
Missing Pega Status Job
The "Missing Pega Status" section relies on a background job that checks for forms without a status update from Pega. Below is an explanation of the job's code.
