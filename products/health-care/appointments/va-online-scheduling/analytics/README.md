# Appointments FE Analytics Strategy [WIP]

WIP doc status: 02/01/2024 Rough draft working document to define our strategy. 

## Resources

[Appointments OKRs/KPIS](vaos-kpis.md)
These haven't been updated in a few years.

[Appointments Analytics Dashboards](vaos-analytics-links.md)

[Appointments Analytics Definitions]([draft]vaos-analytics-definitions.md) - Tracking that's currently set up in the Appointments tool.

[How to request and process Veteran feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/how-to-request-medallia-feedback.md)


## Data Sources and Query Tools

[Google analytics](https://analytics.google.com/analytics/web/#/report-home/a50123418w177519031p176188361)

[VSSC Reports](https://reports.vssc.med.va.gov/ReportServer/Pages/ReportViewer.aspx?/Access/VA+Online+Scheduling&rs:Command=Render)

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

### User Research

We run regular testing throughout the year, from concepts to prototypes to UAT of features in production.

[Research folder]()

[Appointments research in EnjoyHQ]()

[Analysis of themes from research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/themes.md)




## Objectives


### 📈 Increase number of Veterans who are able to successfully request or schedule an appointment.

[VAOS Key Product Data](https://lookerstudio.google.com/reporting/2d972405-6655-4718-85d6-4bdd56c4e858/page/p_rxu0pq17qc) (Google Data Studio)
- What's the source data for this chart?


### 📈 Increase veteran satisfaction rates of the MHV Appointments experience.

Not currently tracked:
- We could track overall VA satisfaction through Medallia
- We could analyze sentiment across pages and features


### 📉 Decrease the percentage of sessions that encounter, or end in any error state.

Not currently tracked:
- Will DataDog let us track this?

### 📉 Decrease time taken to schedule or request any appointment successfully.


### Veterans understand how to navigate the appointments tool.

How should we measure this? We could gather this info through UAT. It'd be nice if there was an automated/unmoderated way to test this...


### Veterans can find all the information they need about their appointments by using the tool.

- Medallia feedback: data issues decrease.
- User research: no new data requests come in, all data is clear

### Veterans have all the tools they need to manage their appointments.

Feature requests in Medallia feedback and usability studies should decrease as we add new features.


### Veterans understand, and can easily answer, all questions in scheduling flow.

No current way to track this fully, only to some degree during usabilty tests when we update the feature.


### Increase percentage of underrepresented Veterans who schedule appointments through VAOS.

We add all of our studies to the [Aggregate Equity Checker](https://docs.google.com/spreadsheets/d/1FptjVArKot0wb2X8efpNtTAl3Rd1qroaEQmWtJ-bDxM/edit#gid=1035614575) (Google Doc) - Demographics of participants in our Veteran studies. We review this when recruiting and update our recruitment criteria to include those we haven't spoken to.
