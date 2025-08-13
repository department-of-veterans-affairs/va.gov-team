# VA.GOV Performance Dashboard Data Process

The[ VA.Gov Performance Dashboard](https://www.va.gov/performance-dashboard/) has had a complete data redesign, utilizing Domo has our processing tool to deliver Google Analytics and Medallia (CSAT) data to the dashboard.

When IIR originally took on the project of revamping the data pipeline, we found many areas of improvement, including the removal of a process where someone would manually enter data, to creating ETL flows that improve performance and usability of the data.

Video Recordings:
- [Overview of what's in Domo](https://github.com/user-attachments/assets/162d02a0-f07d-4d1e-9f19-2e909697749e)
- [ETL flow - GA Portion](https://github.com/user-attachments/assets/ece9c3ae-b2f5-46df-9951-762b0445e4b9)
- [ETL flow - Medallia Portion](https://github.com/user-attachments/assets/5ec499df-f0e7-4b8a-83b8-e9db775343e7)
- [Medallia - VA.gov Experience Rating](https://github.com/user-attachments/assets/11550e72-bb27-4c40-8fdc-f1f061ccd7c4)


## Current Process

### 1. Data Ingestion to Domo

- Data comes into Domo for two primary sources, GA and Medallia

  - These sources are populated into Domo via

    - Big Query data pulls (GA)

      - The analytics team handles the data ingestion from GA -> BQ -> Domo

      - We handle the ETL work to get the Domo data ready for the Performance Dashboard

    - Domo email connector (Medallia)

      - The Platform support team handles the data ingestion from a VA hosted S3 bucket -> domo email connector

      - We handle the ETL work to get the Domo data ready for the Performance Dashboard

### 2. Data Cleanup (ETL)

- The Performance Dashboard functions fundamentally via three main things.

  - The Raw GA data

  - The Raw Medallia data

  - A Domo webform that defines the proper mapping logic for GA and Medallia to work together, as well as the general flow of the dashboard’s layout (ordering)

- The Performance Dashboard is fueled by the following [Domo Dataflow](https://va-gov.domo.com/datacenter/dataflows/317/graph)

  - The datasets within this dataflow that are denoted with BQ are the GA data that comes from Big Query

    - For any questions on the GA data, please reach out to the Analytics and Insights team

  - The dataset called [Output] – Medallia Performance Dashboard is the Medallia data

    - For any questions on the Medallia data please reach out to the Veteran Support team

  - The dataset called [Performance Dashboard Benefit Type Activities | Impacts All Outputs (PROD, STAGING, DEV)](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/data/table) is our webform data

    - This is our bread and butter, and as such we will go into more detail below

- [Performance Dashboard Benefit Type Activities | Impacts All Outputs (PROD, STAGING, DEV)](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview) is a Domo webform that contains all of the mapping logic required to make the Performance Dashboard function with GA and Medallia

  - GA data is mapped using a combination of Event Action, Event Label, and Event Category values, which are concatenated together from their raw BQ/GA datasets, with this document, to map them to the appropriate “Title”

  - Medallia data is mapped using the “Simplified URL” field, which is joined together with URL mapping logic from the raw Medallia data source, again to map to the appropriate Title

  - This document also contains Group values, and various sorts, that place the Groups and titles into particular orders on the Performance Dashboard

  - To fully understand how everything is working together, you’ll need to review the [Domo dataflow](https://va-gov.domo.com/datacenter/dataflows/317/graph) referenced above, and track the processing throughout

### 3. Data Processing

- Domo currently updates the GA and Medallia data as a Monthly cadence

  - We have plans to improve this to a daily pull, but requires working with the GA data specialists, and the Medallia data specialists to make sure their pushes to Domo come daily (many do, but not all). For consistency we did not want to push partial daily data, so until we can get it all, we are sticking with Monthly

- Adding a new Activity/Title

  - If you are looking to add a new activity to the Performance Dashboard, you’ll need to do a few things:

    - Gather the correct information via the form we are currently running - Form is currently locked, Megan is working to resolve

    - Add a new row of data in the Domo Webform, filling out all of the required information, from the GA Event Label, Action, Category details (review with the analytics team if you need help finding the correct values)

    - Fill out the Simplified URL value, reviewing the URL value from the Medallia dataset to properly link things together (work with the group requesting their data be added to the dashboard to insure you’re using the correct URL string)

    - Insert the correct group name for the new content

    - Develop an appropriate title value that will show on the dashboard

    - Modify the sorts where appropriate

- Removing an existing Activity/Title

  - To do this, simply make the metric no longer active by changing the Active Metric value for a row of data to 0, from 1

    - We do not recommend deleting the data, as it causes the loss of historical continuity

- Data calculations

  - Domo only performs one calculation, the CSAT scores for Medallia data

    - All other calculations are being handled by the backend processes that ingest the output dataset via an  API call to the Domo output datasets

    - If there are any questions on the calculations being displayed on the Performance Dashboard, please review with Backend and Front End Engineers


### 4. Data ingestion to Performance Dashboard

- The performance dashboard consists of two datasets:

  - [Google Analytics:](https://va-gov.domo.com/datasources/80fb77ca-621c-436b-8a3f-dfdad48c320d/details/data/table)

  - [Medallia](https://va-gov.domo.com/datasources/afb89759-292f-40f0-8be4-0ccee76006d5/details/overview):   

- The data is pushed to the performance dashboard’s backend code by connecting an API call to the two respective dataset IDs

  - GA: 80fb77ca-621c-436b-8a3f-dfdad48c320d

  - Medallia: afb89759-292f-40f0-8be4-0ccee76006d5

### 5. Testing

- As of October 1st 2024, the team has integrated duplicate data models for Dev and Staging, to allow us to make changes to the flows, without impacting production. If any changes need to be made to the flow, changes need to happen in Dev first, validated by product/dev, then move onto Staging, again validate, and finally production.

  - The Dev/Staging backend code now references the following dataset IDs for GA/Medallia respectfully: 

    - Dev GA dataset id: [9c5f58df-5399-4644-b33f-0df61af0716d](https://va-gov.domo.com/datasources/9c5f58df-5399-4644-b33f-0df61af0716d/details/data/table)

    - Dev Medallia dataset id: [f5bf5142-65e8-4bd8-b460-bc7e52f34518](https://va-gov.domo.com/datasources/f5bf5142-65e8-4bd8-b460-bc7e52f34518/details/data/table)

    - Staging GA dataset id: [c8ffc4d2-b4e5-4516-b6ad-e325fcaf1d6e](https://va-gov.domo.com/datasources/c8ffc4d2-b4e5-4516-b6ad-e325fcaf1d6e/details/data/table)

    - Dev Staging dataset id: [84d8c3be-f15b-49b4-8500-af737df737a0](https://va-gov.domo.com/datasources/84d8c3be-f15b-49b4-8500-af737df737a0/details/data/table)

  
## Metrics Mapping Guide (Stage 3)
### 1. Total Signed-In User Visits
   
  <img width="337" height="332" alt="Screenshot 2025-08-13 at 12 07 32 PM" src="https://github.com/user-attachments/assets/4fb90a19-910e-4010-9d93-7248635dadea" />
  <img width="785" height="535" alt="Screenshot 2025-08-13 at 12 26 51 PM" src="https://github.com/user-attachments/assets/efcabbba-709c-42b0-80c2-7e48d5511665" />

  - Domo Field: logged\_in\_users
  - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page that has a url like: [ www.va.gov/](http://www.va.gov/). We sum the distinct number of sessions for each month which is displayed on the bar graph and then add up those last completed 12 months to get the Total Signed-In User Visits. 
  - Dataset: [Performance Dashboard | Logged in Users | VA.GOV | Monthly | Staging](https://va-gov.domo.com/datasources/f7ae4c3e-d3b3-47d8-9588-e25f56391d72/details/data/table): 

### 2. Total Completed Activities

  <img width="323" height="348" alt="Screenshot 2025-08-13 at 12 17 34 PM" src="https://github.com/user-attachments/assets/aa29d79d-0b7d-4b7a-8ddd-34df22687637" />
  <img width="780" height="539" alt="Screenshot 2025-08-13 at 12 28 21 PM" src="https://github.com/user-attachments/assets/4abeeb4e-7012-4230-bb1b-87a3ff551b6c" />

  - Domo Field: total\_events
  - Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity. For every individual activity listed on the Performance Dashboard (apply for burial benefits, file for disability compensation, etc.), we add up all of those events for each month which is displayed on the bar graph and then add up the last completed 12 months to get the Total Completed Activities.
  - Dataset(s): 
      - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
      - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
      - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
      - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
      - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
      - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
      - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
    
### 3. Total user satisfaction

<img width="326" height="273" alt="Screenshot 2025-08-13 at 1 00 34 PM" src="https://github.com/user-attachments/assets/28a8eac2-fcb0-4bd9-ac93-76c42c869a99" />
<img width="790" height="559" alt="Screenshot 2025-08-13 at 1 00 48 PM" src="https://github.com/user-attachments/assets/d1217a92-9e5a-4d63-b266-a9ac988a1220" />

   - Domo Field: csat\_score
   - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table (no URL filtering). We tally all of those scores for each month which is displayed on the bar graph and then we do another calculation that tallies the scores from the last completed 12 months to get the Total User Satisfaction - we do not average the individual monthly percentage scores in the bar graph to get the last 12 months.
   - Dataset(s): [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)
     - NOTE: The dataflow that creates this dataset for us combines the "VA.gov Experience" column and the "Please rate your experience with this site today" column but just calls it "VA.gov Experience" in this dataset. Noting that it includes data from both survey fields.
    
### 4. Burials & memorials

<img width="1013" height="539" alt="Screenshot 2025-08-13 at 1 18 44 PM" src="https://github.com/user-attachments/assets/b4fa7fb2-0188-476b-8ce1-b8fc3655e9b3" />

  - Signed-In User Visits
     - Domo Field: logged\_in\_user
     - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page with a page hierarchy of 'burials-memorials'.
     - Dataset(s): [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)
  - Completed Activities
     -  Domo Field: total\_events
     -  Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity, but it is also broken down by benefit type, which is derived from the groups staging dataset. For every individual activity listed under the Burials & Memorials section on the Performance Dashboard we add up all of those events over the last completed month to get the Completed Activities number for the benefit type.
     -  Dataset(s):
        - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
        - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
        - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
        - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
        - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
        - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
        - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
  - User Satisfaction
    - Domo Field: csat\_score
    - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table. We filter by simplified URL from the groups staging table by benefit type. These are the URLs we look at for Burials & Memorials:
      -  WHEN `URL` LIKE '%burials%'
      -  WHEN `URL` LIKE '%pre-need/form-10007%'
          - Correlates to the "Apply for pre-need eligibility determination" activity
      -  WHEN `URL` LIKE '%application/530%'
          - Correlates to the "Apply for burial benefits" activity
    - Dataset(s): 
      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)


### 5. Disability

<img width="1012" height="593" alt="Screenshot 2025-08-13 at 3 40 18 PM" src="https://github.com/user-attachments/assets/c0e56249-843a-4c16-818f-709d78cb132b" />

  - Signed-In User Visits
     - Domo Field: logged\_in\_user
     - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page with a page hierarchy of 'disability'.
     - Dataset(s): [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)
  - Completed Activities
     -  Domo Field: total\_events
     -  Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity, but it is also broken down by benefit type, which is derived from the groups staging dataset. For every individual activity listed under the Disability section on the Performance Dashboard we add up all of those events over the last completed month to get the Completed Activities number for the benefit type.
     -  Dataset(s):
        - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
        - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
        - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
        - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
        - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
        - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
        - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
  - User Satisfaction
    - Domo Field: csat\_score
    - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table. We filter by simplified URL from the groups staging table by benefit type. These are the URLs we look at for Disability:
      - WHEN `URL` LIKE '%va.gov/disability%'
      - WHEN `URL` LIKE '%view-disability-rating%' 
      - WHEN `URL` LIKE '%track-claims%'
          - Correlates to the "Check VA claim or appeal status" activity
      - WHEN `URL` LIKE '%file-disability-claim-form-21-526ez%'
          - Correlates to the "File for disability compensation" activity
      - WHEN `URL` LIKE '%form-21-4142%'
          - Correlates to the  "Authorize the release of non-VA medical infomration to VA" activity
    - Dataset(s): 
      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)

### 6. Education

<img width="809" height="713" alt="Screenshot 2025-08-13 at 3 46 04 PM" src="https://github.com/user-attachments/assets/9e625915-8537-41c0-9262-d213c021ff11" />

  - Signed-In User Visits
     - Domo Field: logged\_in\_user
     - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page with a page hierarchy of 'education'.
     - Dataset(s): [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)
  - Completed Activities
     -  Domo Field: total\_events
     -  Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity, but it is also broken down by benefit type, which is derived from the groups staging dataset. For every individual activity listed under the Education section on the Performance Dashboard we add up all of those events over the last completed month to get the Completed Activities number for the benefit type.
     -  Dataset(s):
        - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
        - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
        - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
        - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
        - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
        - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
        - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
  - User Satisfaction
    - Domo Field: csat\_score
    - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table. We filter by simplified URL from the groups staging table by benefit type. These are the URLs we look at for Education:
      - WHEN `URL` LIKE '%gi-bill%'
      - WHEN `URL` LIKE '%education%' 
      - WHEN `URL` LIKE '%gi-bill-comparison-tool%'
          - Correlates to an activity we don't show on the dashboard anymore  - GI Bill Comparison Tool
      - WHEN `URL` LIKE '%application/1990%'
          - Correlates to "Apply for education benefits" activity
      - WHEN `URL` LIKE '%application/1990e%'
          - Correlates to "Apply to use transferred education benefits" activity
      - WHEN `URL` LIKE '%application/1995%'
          - Correlates to "Manage education benefits" activity
      - WHEN `URL` LIKE '%application/5495%'
          - Also correlates to "Manage education benefits" activity because there was a URL change
      - WHEN `URL` LIKE '%apply-for-vettec-form-22-0994%'
          - Correlates to an activity we don't show on the dashboard anymore - Apply for VET TEC
      - WHEN `URL` LIKE '%application/5490%'
          - Correlates to "Apply for education benefits as an eligible dependent" activity
      - WHEN `URL` LIKE '%/family-and-caregiver-benefits/education-and-careers/apply-for-dea-fry-form-22-5490/%'
          - Also correlates to "Apply for education benefits as an eligible dependent" activity because there was a URL change
      - WHEN `URL` LIKE '%application/1990n%'
          - Correlates to an activity we don't show on the dashboard anymore - Apply for education benefits under the NCS program
      - WHEN `URL` LIKE '%education/submit-school-feedback%'
          - Correlates to "GI Bill School Feedback Tool" activity
      - WHEN `URL` LIKE '%education/gi-bill%'
          - Correlates to "Check Post 9/11 GI Bill benefits" activity
      - WHEN `URL` LIKE '%check-remaining-post-9-11-gi-bill-benefits%
          - Also correlates to "Check Post 9/11 GI Bill benefits" activity because there was a URL change
      - WHEN `URL` LIKE '%apply-vre-form-28-1900%'
         - Correlates to "Apply for Veteran Readiness and Employment" activity
      - WHEN `URL` LIKE '%apply-career-guidance-form-25-8832%'
         - Correlates to "Apply for Personalized Career Planning and Guidance" activity
      - WHEN `URL` LIKE '%apply-career-guidance-form-27-8832%'
          - Also correlates to "Apply for Personalized Career Planning and Guidance" activity because there was a URL change
      - WHEN `URL` LIKE '%apply-career-guidance-form-28-8832%'
          - Also correlates to "Apply for Personalized Career Planning and Guidance" activity because there was a URL change
    - Dataset(s): 
      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)

### 7. Health Care

<img width="1010" height="595" alt="Screenshot 2025-08-13 at 4 04 44 PM" src="https://github.com/user-attachments/assets/012c8a54-7d94-47f8-9b05-b6d40fc00b2b" />

  - Signed-In User Visits
     - Domo Field: logged\_in\_user
     - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page with a page hierarchy of 'health-care'.
     - Dataset(s): [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)
  - Completed Activities
     -  Domo Field: total\_events
     -  Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity, but it is also broken down by benefit type, which is derived from the groups staging dataset. For every individual activity listed under the Health Care section on the Performance Dashboard we add up all of those events over the last completed month to get the Completed Activities number for the benefit type.
     -  Dataset(s):
        - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
        - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
        - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
        - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
        - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
        - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
        - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
  - User Satisfaction
    - Domo Field: csat\_score
    - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table. We filter by simplified URL from the groups staging table by benefit type. These are the URLs we look at for Health Care:
      - WHEN `URL` LIKE '%va.gov/health-care%'
      - WHEN `URL` LIKE '%my-health%'
      - WHEN `URL` LIKE '%va.gov/health-care/apply%'
          - Correlates to the "Apply for health care benefits" activity
      - WHEN `URL` LIKE '%schedule-view-va-appointments%'
          - Correlates to the "Schedule and view VA appointments online" activity
      - WHEN `URL` LIKE '%my-health/appointments%'
          - Also correlates to the "Schedule and view VA appointments online" activity because there was a URL change
      - WHEN `URL` LIKE '%covid19screen%'
          - Correlates to an activity we don't show on the dashboard anymore - Complete COVID-19 online screening
      - WHEN `URL` LIKE '%download-your-irs-1095-b%'
          - Correlates to the "Download 1095-B tax form" activity
    - Dataset(s): 
      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)
     
### 8. Pension & Fiduciary

<img width="1007" height="472" alt="Screenshot 2025-08-13 at 4 15 50 PM" src="https://github.com/user-attachments/assets/04e4b9e3-1cb9-4c37-9246-bada2d98f9bf" />

  - Signed-In User Visits
     - Domo Field: logged\_in\_user
     - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page with a page hierarchy of 'pension'.
     - Dataset(s): [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)
  - Completed Activities
     -  Domo Field: total\_events
     -  Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity, but it is also broken down by benefit type, which is derived from the groups staging dataset. For every individual activity listed under the Pension & Fiduciary section on the Performance Dashboard we add up all of those events over the last completed month to get the Completed Activities number for the benefit type.
     -  Dataset(s):
        - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
        - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
        - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
        - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
        - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
        - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
        - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
  - User Satisfaction
    - Domo Field: csat\_score
    - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table. We filter by simplified URL from the groups staging table by benefit type. These are the URLs we look at for Pension & Fiduciary:
      - WHEN `URL` LIKE '%pension%' 
      - WHEN `URL` LIKE '%application/527EZ%'
          - Correlates to the "Apply for Veterans Pension benefits" activity
    - Dataset(s): 
      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)
     
### 9. Profile & Records

<img width="1005" height="649" alt="Screenshot 2025-08-13 at 4 18 54 PM" src="https://github.com/user-attachments/assets/16ab5c46-a34d-4a14-8eb8-0a7861e5edfc" />

  - Signed-In User Visits
     - Domo Field: logged\_in\_user
     - Logic: Number of distinct GA sessions that are tagged as LOA 1 or 3 across any page with a page hierarchy of 'profile' or 'records'.
     - Dataset(s): [Performance Dashboard | Logged in Users | Benefit Type | Monthly | Staging](https://va-gov.domo.com/redirect-to-datasource-details/90dc5520-840f-42ac-9c27-b1d0c0e59363)
  - Completed Activities
     -  Domo Field: total\_events
     -  Logic: This field is calculated by taking the total events, married with the Groups staging dataset, and then aggregated at the respective granularity, but it is also broken down by benefit type, which is derived from the groups staging dataset. For every individual activity listed under the Profile & Records section on the Performance Dashboard we add up all of those events over the last completed month to get the Completed Activities number for the benefit type.
     -  Dataset(s):
        - [BQ - All Product Post-911 Events by Day](https://va-gov.domo.com/redirect-to-datasource-details/d8c0ad4e-1698-4e27-9107-64ece0a3807f)
        - [BQ - Claims Events by day](https://va-gov.domo.com/redirect-to-datasource-details/a8be940b-5929-46e6-874b-0ed0c77c016b)
        - [BQ - Product Form Events by Day](https://va-gov.domo.com/datasources/87b86c11-397b-4320-b632-d87896b5c4fd/details/overview)
        - [BQ - Records Letter Downloads](https://va-gov.domo.com/redirect-to-datasource-details/6ec00bab-98a0-4ea6-b7ec-6ac721dbb33e)
        - [Profile Detail for Performance Dashboard | Staging](https://va-gov.domo.com/redirect-to-datasource-details/f0e1c1a2-d8b8-4702-90b4-0125f66ceb5f)
        - [MTC | 1095-b | WIP](https://va-gov.domo.com/datasources/43142699-9a8c-443e-b22c-69a3d50e971e/details/overview)
        - [Performance Dashboard Groups | Staging](https://va-gov.domo.com/datasources/c9a4e6bb-9a91-4f88-8cd4-7a7b65b40a00/details/overview)
  - User Satisfaction
    - Domo Field: csat\_score
    - Logic: this field is calculated by taking any values that have a "VA.gov experience" score that is not null, flagging any values as 4 or 5 as 1, and then all values as 1, summing the 1s (4/5s) together and dividing by the total 1,2,3,4,5s, for all the data present in the table. We filter by simplified URL from the groups staging table by benefit type. These are the URLs we look at for Profile & Records:
      - WHEN `URL` LIKE '%profile%'
      - WHEN `URL` LIKE '%records%' 
      - WHEN `URL` LIKE '%profile/personal-information%'
          - Correlates to the "Update contact information & preferences" activity
      - WHEN `URL` LIKE '%change-direct-deposit%'
          - Correlates to the "Update direct deposit information" activity
      - WHEN `URL` LIKE '%download-va-letters%'
          - Correlates to the "Download VA benefits letters" activity 
      - WHEN `URL` LIKE '%request-coe-form-26-1880%'
          - Correlates to the "Request a VA home loan Certificate of Eligibility" activity

    - Dataset(s): 
      - [\[Output\] - Medallia Performance Dashboard](https://va-gov.domo.com/datasources/af732c87-6e1a-4ce2-9ca4-56e2398b6c36/details/overview)


## Megan's Notes for later (WIP):

  - Metric Name: Segment Bar Graph: Segment Bar Graph: Login Type

    - Domo Field :logged\_in\_user

    - Logic: this is taking the logged in users where LOA in (1,3) and the event\_label in ('login-success-dslogon', 'login-success-idme', 'login-success-logingov', 'login-success-mhv')

    - Dataset(s): 

      - [BQ | LOA 1&3 Users by Login Type | Staging](https://va-gov.domo.com/redirect-to-datasource-details/49133251-2ea2-4ed6-a29e-bcc8b184532f)

 

   
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
