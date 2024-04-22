# Appointments FE Analytics Strategy [WIP]

WIP doc status: 02/01/2024 Rough draft working document to define our strategy. 


## Objectives

### UAE Goals
- Increase number of Veterans who can successfully request, schedule, pre-check-in, check-in, view an AVS, and submit a travel pay claim for an appointment.
- Increase Veteran satisfaction rates of VA online scheduling experience.
- Improve access to accurate appointment data
- VA.gov handles all fatal performance errors from the backend gracefully

### 📈 Increase access to appointment scheduling.

- Number of unique users increase.
- Number of enabled clinics increase.

Not currently tracked.

Questions and notes:
- We track unique Veterans/site usage
- Enabled clinics are available as a VSSC report. Kay may be able to own this one.

### 📈 Increase number of Veterans who are able to successfully request or schedule an appointment.

Tracked in the [VAOS Key Product Data](https://lookerstudio.google.com/reporting/2d972405-6655-4718-85d6-4bdd56c4e858/page/p_rxu0pq17qc) (Google Data Studio)

Questions and notes:
- Data comes from GA - conversion rates may be out of date
- VSSC reports also have raw submission numbers
- Could we use Big Query as data source? DataDog?
- Can we make this more accessible/available?

### 📈 Increase Veteran satisfaction rates of the MHV Appointments experience.

Tracked in the [Medallia overall satisfaction](https://va-gov.domo.com/page/825663825) Contact Center Domo dashboard.

Questions and notes:
- Need to chat with Robyn Singleton to talk about overall satisfaction tracking across all the health tools/all VA.gov possibly.
- We could add nuance by looking at task completion rate and sentiment analysis from Veteran user feedback.
- Could track the number of positive/negative comments as a percentage of total unique users per week. Goal would be a lower pct of negative comments, even as user numbers increase. 

### 📉 Decrease the percentage of request and scheduling sessions that end in abandonment.

Tracked in the [VAOS Key Product Data](https://lookerstudio.google.com/reporting/2d972405-6655-4718-85d6-4bdd56c4e858/page/p_rxu0pq17qc) (Google Data Studio)

Questions and notes:
- We have conversion through GA, need to verify accuracy.
- Need to review current tracking against user flows.
- May get some of this through DataDog.
- Need to understand better where the dropoffs are happening, esp if reqs are an option

### 📉 Decrease the percentage of sessions that end in a fatal error.

Not currently tracked.

Questions and notes:
- Errors come up through GA
- We're logging/generating alerts in DataDog but not setting a baseline/tracking over time.


### Veterans understand how to navigate the appointments tool.

Not currently tracked.

**Questions and notes**
- How should we measure this? We could gather this info through UAT. It'd be nice if there was an automated/unmoderated way to test this...

### Veterans can find all the information they need about their appointments by using the tool.

Not currently tracked.

**Questions and notes**  
Ideas for tracking:
- Medallia feedback: data issues decrease.
- User research: no new data requests come in, all data is clear
- Are there other ways aside from qualitative we can track this.

### Veterans have all the tools they need to manage their appointments.

Not currently tracked.

**Questions and notes**
- Feature requests in Medallia feedback and usability studies should decrease as we add new features.


### Veterans understand, and can easily answer, all questions in scheduling flow.

Not currently tracked

Questions and notes:
- 
- 


### Increase percentage of underrepresented Veterans who schedule appointments through VAOS.

We add all of our studies to the [Aggregate Equity Checker](https://docs.google.com/spreadsheets/d/1FptjVArKot0wb2X8efpNtTAl3Rd1qroaEQmWtJ-bDxM/edit#gid=1035614575) (Google Doc) - Demographics of participants in our Veteran studies. We review this when recruiting and update our recruitment criteria to include those we haven't spoken to.

Questions and notes:
- 
- 


## What we're not tracking and why

### 📉 Decrease time taken to schedule or request any appointment successfully.

This would help to understand if performance/comprehension is impacted by a release. We'd like to track this, but want to set up other metrics first.

Unclear if time to completion is currently tracked.

Questions and notes:
- May be very difficult to get accurate data. Time on page and load time might be trackable. Process may be too dynamic to accurately track.
- Could measure after a release if we have a baseline - how did release impact speed.
- IVC is currently tracking how long it takes for reqs to get scheduled/disposed from time submitted in VAOS.

- 
-----

## Resources

[Appointments OKRs/KPIS](vaos-kpis.md)
These haven't been updated in a few years.

[Appointments Analytics Dashboards](vaos-analytics-links.md)

[Appointments Analytics Definitions]([draft]vaos-analytics-definitions.md) - Tracking that's currently set up in the Appointments tool.

[How to request and process Veteran feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/how-to-request-medallia-feedback.md)


### Data Sources and Query Tools

[Google analytics](https://analytics.google.com/analytics/web/#/report-home/a50123418w177519031p176188361)

[VSSC Reports](https://reports.vssc.med.va.gov/ReportServer/Pages/ReportViewer.aspx?/Access/VA+Online+Scheduling&rs:Command=Render)
- Clinic information: https://app.powerbigov.us/groups/me/apps/741625e9-a049-4f8e-a424-d13c7a723da7/reports/1e199d02-3cc6-4d5c-8caa-9a5a41bb4214/ReportSection4359bd0f5e2440101126?bookmarkGuid=Bookmark1e0e849bfb8edae90d32

[User Feedback Sharepoint Folder](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FAppointments%2FUser%20Feedback&viewid=9384f3a8%2De3e8%2D4abb%2Db2ab%2D24cf305ccdac)

**Other Sources:**  Loki, Domo, Continuous research with Veterans, Medallia Feedback, Research equity tracker.

Sources we'd don't have yet, but would like to include:
- Office Of Connected Care Feedback (TBD)
- VSignals Feedback
- Dev team is looking at DataDog
- End-to-end UAT once a year for task success/failure rate. Might be able to get this from DataDog... 

### Medallia Feedback
Contact Center captures feedback from a survey delivered randomly via modal, and the feedback button at the bottom of each page.

We request this data weekly and process it:
[Q1 2024 Medallia Feedback Analysis (WIP)] (https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Appointments/User%20Feedback/2024%20Q1%20Analysis.xlsx?d=w8257a39f90ce446d9621d5c524a209e4&csf=1&web=1&e=8AUAor)  (Sharepoint/VA Network) 

### Mobile app feedback

The feedback link at the bottom of the footer leads to this form. Feedback is available in a Power BI report with select access.

### VSignals feedback

Looking into getting access to this.

### User Research

We run regular testing throughout the year, from concepts to prototypes to UAT of features in production.

[Research folder]()

[Appointments research in EnjoyHQ]()

[Analysis of themes from research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/themes.md)
