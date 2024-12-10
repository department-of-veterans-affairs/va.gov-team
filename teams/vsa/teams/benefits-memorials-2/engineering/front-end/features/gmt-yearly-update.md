# GMT yearly update
## What is this?
This document provides context and instructions on how to update the GMT year for the streamlined process of a [Financial Status Report (Form 5655)](https://www.va.gov/manage-va-debt/request-debt-help-form-5655/introduction) submission.  

## Table of Contents
1. [What you came here for](#what-you-came-here-for)
2. [Background](#background)
3. [Resources](#resources)


## What you came here for
### The business process
The two major players for us are our downstream partners at the VHA, and the team that manages the Income Limits database. 

1. Coordinate with downstream partners at VHA (usually via our PO) to confirm they are ready to start using the new year GMT data. 
2. Contact the Income Limits team at [#sitewide-public-websites](https://dsva.slack.com/archives/C52CL1PKQ) on **Office of CTO @ VA Slack** to confirm the database has been updated with the new year data.
3. Follow instructions in the next section ([The `code` update](#the-code-update)) to update the GMT year in FSR.
4. Monitor Sentry for GMT related errors (see [Monitoring](#monitoring)), and confirm valid submisisons with downstream partners. 

### The `code` update
Updating the GMT year is pretty straightforward in the FSR, all of the relevant actions for fetching GMT data can be found in [geographicMeansThreshold.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/actions/geographicMeansThreshold.js). **The necessary update is just changing the `GMT_YEAR` constant to the new calendar year.** 
#### Note: 
Generally the year that is passed in is the calendar year (which pulls the previous fiscal year's calculations iirc). The income limits app does [a little -1 to the year in an internal process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/engineering/technical-architecture.md#geographic-means-test-gmt-threshold). It's best to spot check some different zip codes and number of dependents to confirm the data is there, and you can hit the URL directly (`/income_limits/v1/limitsByZipCode/${zipCode}/${GMT_YEAR}/${dependents}`) with some examples if you want to confirm with VHA the numbers match. 

### Monitoring
We have Sentry logging set up (in [geographicMeansThreshold.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/actions/geographicMeansThreshold.js#L108-L111) to notify us if we get funky responses from the income limits endpoint. You can search by keyword `income_limits failed:`. 

## Background
The Financial Status Report (FSR) is for Veterans or service members who need help with debt related to VA benefit overpayments or health care copays. We have implemented a 'streamlined' version of the form, so veterans who meet specific financial criteria are not required to complete the entire form as a means to ease the time, stress and cognitive burden. 

These criteria for the streamlined version are set by VHA business and are currently only at the VHA for health care copays submissions. There are a number of factors that are considered when calculating the outcome for a streamlined version of the form, but they all depend on the Geographic Means Threshold (GMT). GMT is provided by a government service based on average income and number of dependents for a particular county. GMT data is updated annually and therefore requires a code change to ensure the correct data is being used.

### How the sausage is made
The in depth process flow for GMT data moves from HUD -> VES -> CSV -> Income Limits database (based on an [initial convo](https://dsva.slack.com/archives/C52CL1PKQ/p1694702514600379) with the site wide public websites team). The Income Limits database is set up to serve the [Income Limits application](https://www.va.gov/health-care/income-limits/introduction), and the FSR leverages their database because it's the most digestible version of the data for our purposes. 

This flow is what makes things a little tricky for the update. The HUD updates based on previous fiscal year data, and that takes time to process and get approved, so the official numbers take a while to trickle down to the point where it's available to us. I'm not going to pretend to have a grasp on it, and I'm not sure it's completely relevant for this document, but context can be helpful. Point is, it'll be a good idea to conform with all parties we have access to, and are using the correct data. 

## Resources
Here's a pile of links with hopefully relevant resources if you're into that kind of thing
### Code
 - [geographicMeansThreshold.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/actions/geographicMeansThreshold.js) (FSR file for fetching GMT data)
	 - [EmploymentQuestion.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/components/employment/EmploymentQuestion.jsx) (FSR page where we make the call)
  - If you want to do some testing locally and update the gmt database and you're running docker you can [find those docs here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/front-end/howto-local-gmt-db-update.md)!
### Links
- [HUD data source](https://www.huduser.gov/portal/datasets/il.html#data_2024)
- [Income Limits API Data Source and Migrations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/data/README.md#income-limits-api-data-source-and-migrations)
- [Income Limits Technical Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/engineering/technical-architecture.md#geographic-means-test-gmt-threshold) 
### Some relevant tickets:
-  **[FSR] Update documentation for GMT year update [#90545](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90545)** (Ticket for generating this documentation)
- **[FSR] Update GMT year for 2024 [#88120](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88120)** (Title kinda says it all)
### DSVA Slack convos 
- [Initial implementation dialog with sitewide public websites team](https://dsva.slack.com/archives/C52CL1PKQ/p1694702514600379)
- [Another potentially helpful convo about some issues with zip codes that offers insight into year passed in vs data](https://dsva.slack.com/archives/C52CL1PKQ/p1698161355128349?thread_ts=1698156487.939009&cid=C52CL1PKQ )
- [2024 convo with sitewide team about updating year and formalizing process](https://dsva.slack.com/archives/C52CL1PKQ/p1722343494690099)

