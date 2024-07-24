 VA.GOV Performance Dashboard Data Process

 

The[ VA.Gov Performance Dashboard](https://www.va.gov/performance-dashboard/) has had a complete data redesign, utilizing Domo has our processing tool to deliver Google Analytics and Medallia (CSAT) data to the dashboard.

 

When IIR originally took on the project of revamping the data pipeline, we found many areas of improvement, including the removal of a process where users manually entered data, to creating ETL flows that improve performance and useability of the data.

****

 

The current process can be broken down into the following steps:

1. **Data Ingestion to Domo**

- Data comes into Domo for two primary sources, GA and Medallia

  - These sources are populated into Domo via

    - Big Query data pulls (GA)

      - The analytics team handles the data ingestion from GA -> BQ -> Domo

      - We handle the ETL work to get the Domo data ready for the Performance Dashboard

    - Domo email connector (Medallia)

      - The Platform support team handles the data ingestion from a VA hosted S3 bucket -> domo email connector

      - We handle the ETL work to get the Domo data ready for the Performance Dashboard

2. **Data Cleanup (ETL)**

- The Performance Dashboard functions fundamentally via three main things.

  - The Raw GA data

  - The Raw Medallia data

  - A Domo webform that defines the proper mapping logic for GA and Medallia to work together, as well as the general flow of the dashboard’s layout (ordering)

- The Performance Dashboard is fueled by the following[ Domo Dataflow](https://va-gov.domo.com/datacenter/dataflows/317/graph)

  - The datasets within this dataflow that are denoted with BQ are the GA data that comes from Big Query

    - For any questions on the GA data, please reach out to the Analytics and Insights team

  - The dataset called \[Output] – Medallia Performance Dashboard is the Medallia data

    - For any questions on the Medallia data please reach out to the Veteran Support team

  - The dataset called Performance Dashboard Groups | Staging is our webform data

    - This is our bread and butter, and as such we will go into more detail below

- [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview) is a Domo webform that contains all of the mapping logic required to make the performance dashboard function with GA and Medallia

  - GA data is mapped using a combination of Event Action, Event Label, and Event Category values, which are concatenated together from their raw BQ/GA datasets, with this document, to map them to the appropriate “Title”

  - Medallia data is mapped using the “Simplified UR” field, which is joined together with URL mapping logic from the raw Medallia data source, again to map to the appropriate Title

  - This document also contains Group values, and various sorts, that place the Groups and titles into particular orders on the Performance Dashboard

  - To fully understand how everything is working together, you’ll need to review the Domo dataflow referenced above, and track the processing throughout

****

3. **Data Processing**

- Domo currently updates the GA and Medallia data as a Monthly cadence

  - We have plans to improve this to a daily pull, but requires working with the GA data specialists, and the Medallia data specialists to make sure their pushes to Domo come daily (many do, but not all). For consistency we did not want to push partial daily data, so until we can get it all, we are sticking with Monthly

- Adding a new Activity/Title

  - If you are looking to add a new activity to the Performance Dashboard, you’ll need to do a few things:

    - Gather the correct information via the form we are currently running (**Get a link for this from Megan)**

    - Add a new row of data in the Domo Webform, filling out all of the required information, from the GA Event Label, Action, Category details (review with the analytics team if you need help finding the correct values)

    - Fill out the simplified URL value, reviewing the URL value from the Medallia dataset to properly link things together (work with the group requesting their data be added to the dashboard to insure you’re using the correct URL string)

    - Insert the correct group name for the new content

    - Develop an appropriate title value that will show on the dashboard

    - Modify the sorts where appropriate

- Removing an existing Activity/Title

  - To do this, simply make the metric no longer active by changing the Active Metric value for a row of data to 0, from 1

    - We do not recommend deleting the data, as it causes the loss of historical continuity

- Data calculations

  - Domo only performs one calculation, the CSAT scores for Medallia data

    - All other calculations are being handled by the backend processes that ingest the output dataset via an  API call to the Domo output datasets

    - If there are any questions on the calculations being displayed on the Performance Dashboard, please review with your Backend and Front End Engineers

 

4. Data ingestion to Performance Dashboard:

- The performance dashboard consists of two datasets:

  - [Google Analytics:](https://va-gov.domo.com/datasources/80fb77ca-621c-436b-8a3f-dfdad48c320d/details/data/table)

  - [Medallia](https://va-gov.domo.com/datasources/afb89759-292f-40f0-8be4-0ccee76006d5/details/overview):   

- The data is pushed to the performance dashboard’s backend code by connecting an API call to the two respective dataset IDs

  - GA: 80fb77ca-621c-436b-8a3f-dfdad48c320d

  - Medallia: afb89759-292f-40f0-8be4-0ccee76006d5
