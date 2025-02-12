 VA.GOV Performance Dashboard Data Process

 

The[ VA.Gov Performance Dashboard](https://www.va.gov/performance-dashboard/) has had a complete data redesign, utilizing Domo has our processing tool to deliver Google Analytics and Medallia (CSAT) data to the dashboard.

 

When IIR originally took on the project of revamping the data pipeline, we found many areas of improvement, including the removal of a process where users manually entered data, to creating ETL flows that improve performance and useability of the data.

 

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

5.

- As of October 1st 2024, the team has integrated duplicate data models for DEV and Staging, to allow us to make changes to the flows, without impacting production. 

  - The DEV/Staging backend code now references the following dataset IDs for GA/Medallia respectfully: 

    - DEV GA dataset id: 9c5f58df-5399-4644-b33f-0df61af0716d

    - [Link](https://va-gov.domo.com/datasources/9c5f58df-5399-4644-b33f-0df61af0716d/details/data/table): 

    - DEV Medallia dataset id: f5bf5142-65e8-4bd8-b460-bc7e52f34518

    - [Link](https://va-gov.domo.com/datasources/f5bf5142-65e8-4bd8-b460-bc7e52f34518/details/data/table): 

    - Staging GA dataset id: c8ffc4d2-b4e5-4516-b6ad-e325fcaf1d6e

    - [Link](https://va-gov.domo.com/datasources/c8ffc4d2-b4e5-4516-b6ad-e325fcaf1d6e/details/data/table): 

    - Dev Staging dataset id: 84d8c3be-f15b-49b4-8500-af737df737a0

    - [Link](https://va-gov.domo.com/datasources/84d8c3be-f15b-49b4-8500-af737df737a0/details/data/table): 



Metrics Mapping Guide (Stage 3)

**Metrics:** 

- **Google Analytics (GA)** 

  - Metric Name: Total Signed in User Visits 

    - Domo Field: logged\_in\_users

    - Logic:  looking at all data where the loa is in (1,3) (logged in, and logged in verified users), as well as any page that has the url like:[ www.va.gov/](http://www.va.gov/)

    - Dataset: 

      - [Performance Dashboard | Logged in Users | VA.GOV | Monthly | Staging](https://va-gov.domo.com/datasources/f7ae4c3e-d3b3-47d8-9588-e25f56391d72/details/data/table): 

  - Metric Name: Total Completed Activities

    - Domo Field: total\_events

    - Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity

    - Dataset(s): 

      - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)

      - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)

      - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)

      - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)

      - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)

      - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)

  - Metric Name: Segment Bar Graph: Signed-in user visits

    - Domo Field :logged\_in\_users

    - Logic: looking at all data where the loa is in (1,3) (logged in, and logged in verified users), as well as any page that has the url like:[ www.va.gov/](http://www.va.gov/)

    - Dataset(s): 

      - [Performance Dashboard | Logged in Users | VA.GOV | Monthly | Staging](https://va-gov.domo.com/datasources/f7ae4c3e-d3b3-47d8-9588-e25f56391d72/details/data/table)

  - Metric Name: Segment Bar Graph: Segment Bar Graph: Login Type

    - Domo Field :logged\_in\_user

    - Logic: this is taking the logged in users where LOA in (1,3) and the event\_label in ('login-success-dslogon', 'login-success-idme', 'login-success-logingov', 'login-success-mhv')

    - Dataset(s): 

      - [BQ | LOA 1&3 Users by Login Type | Staging](https://va-gov.domo.com/redirect-to-datasource-details/49133251-2ea2-4ed6-a29e-bcc8b184532f)

  - Metric Name: Segment Bar Graph: Completed Activities

    - Domo Field: total\_events

    - Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity

    - Dataset(s): 

      - Same big list as above

  - Metric Name: Segment Bar Graph: Completed Activities by benefit type

    - Domo Field: total\_events

    - Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity , but it is also broken down by benefit type, which is derived from the groups staging dataset

    - Dataset(s): 

      - Same big list as above

  - Metric Name: Signed-in user visits by benefit type

    - Domo Field: logged\_in\_user

    - Logic: looking at all data where the loa is in (1,3) (logged in, and logged in verified users), as well as any page that has a URL that has been mapped in the Groups staging dataset

    - Dataset(s): 

      - [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)

  - Metric Name: Completed activities by benefit type

    - Domo Field: total\_events

    - Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity , but it is also broken down by benefit type, which is derived from the groups staging dataset

    - Dataset(s): 

      - Same big list as above

  - Metric Name: completed activities by activity

    - Domo Field: total\_events

    - Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity , but it is also broken down by activity, which is derived from the groups staging dataset

    - Dataset(s): 

      - Same big list as above

- **Medallia (CSAT)**

  -  Metric Name: Total User Satisfaction

    - Domo Field: csat\_score

    - Logic: this field is calculated by taking any values that have a[ va.gov](http://va.gov/) experience that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table (no URL filtering)

    - Dataset(s): 

      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)

  -  Metric Name: Segment Bar Graph: User satisfaction

    - Domo Field: csat\_score

    - Logic: this field is calculated by taking any values that have a[ va.gov](http://va.gov/) experience that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table (no URL filtering)

    - Dataset(s): 

      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)

  -  Metric Name: Segment Bar Graph: 4s and 5s User Ratings

    - Domo Field: Total 4s, Total 5s

    - Logic: These two data points are calculated by totalling all of the 4s and all of the 5s, and storing them in their own respective columns

    - Dataset(s): 

      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)

  -  Metric Name: user satisfaction by benefit type

    - Domo Field: csat\_score

    - Logic: this field is calculated by taking any values that have a[ va.gov](http://va.gov/) experience that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table (filtered by simplified URL from the groups staging table by benefit type)

    - Dataset(s): 

      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)

  -  Metric Name: user satisfaction by activity

    - Domo Field: csat\_score

    - Logic: this field is calculated by taking any values that have a[ va.gov](http://va.gov/) experience that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table (filtered by simplified URL from the groups staging table by activity type)

    - Dataset(s): 

      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)
