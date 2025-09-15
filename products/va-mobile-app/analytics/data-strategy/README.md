# Mobile Measurement & Data Strategy

The VA Mobile Platform team kicked off several surge support sprints to discover, document, and define a measurement and data strategy to **capture the overall health and performance of how the VAHB is meeting Veteran needs.**

## Metric Definition
**[Defining the Most Important Metrics for the VAHB Mobile App](./measurement-framework.md)**
- To capture the overal health of the Mobile app, we're interested in telling 2 stories:
     - A story about the user’s experience ([experiential metrics](./data-strategy/measurement-framework.md#experiential-metrics))
     - A story about the platform’s health ([platform metrics](./data-strategy/measurement-framework.md#platform-metrics))
 
**Metrics Data Dictionary**
- We built an initial data dictionary for the metrics in the measurement framework, prioritizing metrics that most often need clarification.
- An editable version of the metrics data dictionary can be found in [Sharepoint here](https://dvagov.sharepoint.com/:f:/r/sites/VA.govMobileFlagshipTeam/Shared%20Documents/VA.gov%20Mobile%20Flagship%20Team%20Channel/Mobile%20App%20%26%20Platform%20Documentation/Data?csf=1&web=1&e=1ipJ01).
- Next steps:
     - Add definitions for the remainder of the metrics from the measurement framework
     - Add data dictionary to PowerBI dashboard

## Ecosystem Documentation
**[Current State Data Pipeline Documentation](./Mobile%20current%20state%20data%20pipeline.png)**
- We captured the current state data pipleine for the VAHB mobile app, including how data is collected and the supporting analytics infrastructure.
- An editable version of the diagram is in [FigJam here](https://www.figma.com/board/V0rDE80KylZ5jod3SWxAzC/Mobile-Surge-Support---Measurement---Data-Strategy?node-id=45-455&t=vAcBHQIYfPXqgIEI-4).

**[Future State Data Pipeline Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/analytics/data-strategy/Mobile%20future%20state%20data%20pipeline.png)**  
- We also documented the potential future state data pipeline for the VAHB mobile app, with a focus on increasing automation, streamlining data processing, and removing deprecated systems.
- An editable version of the diagram is in [FigJam here](https://www.figma.com/board/V0rDE80KylZ5jod3SWxAzC/Mobile-Surge-Support---Measurement---Data-Strategy?node-id=673-2731&t=LQrtgAmFB3YgJ4Rg-0).
- Next steps: update as changes are made to the data pipeline

**[Systems Inventory](./Mobile%20-%20Measurement%20System%20Inventory.pdf)**
- We documented each system involved in data collection, processing, and analysis for the mobile app. 
- An editable version of the system inventory can be found in [Sharepoint here](https://dvagov.sharepoint.com/:f:/r/sites/VA.govMobileFlagshipTeam/Shared%20Documents/VA.gov%20Mobile%20Flagship%20Team%20Channel/Mobile%20App%20%26%20Platform%20Documentation/Data?csf=1&web=1&e=1ipJ01).
- Next steps: update as changes are made to the data pipeline

**List of Existing Data Points**
- We documented the data points that are currently being collected across data systems.
- An editable version of the list of data points can be found in [Sharepoint here](https://dvagov.sharepoint.com/:f:/r/sites/VA.govMobileFlagshipTeam/Shared%20Documents/VA.gov%20Mobile%20Flagship%20Team%20Channel/Mobile%20App%20%26%20Platform%20Documentation/Data?csf=1&web=1&e=1ipJ01).
- Next steps: update as new data points are added for data collection

## Dashboard/Visualization Designs
- We designed the following designs for implementation in PowerBI:
     - [Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/analytics/data-strategy/Mobile%20-%20PowerBI%20design%20landing%20page.png)
     - [Experience or Platform Page (example: Appointments)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/analytics/data-strategy/Mobile%20-%20PowerBI%20design%20experience%20page.png)
     - [Data Dictionary Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/analytics/data-strategy/Mobile%20-%20PowerBI%20design%20data%20dictionary%20page.png)
     - An editbale version of the designs can be found [Figma here](https://www.figma.com/board/V0rDE80KylZ5jod3SWxAzC/Mobile-Surge-Support---Measurement---Data-Strategy?node-id=1178-2795&t=HoJTu9cAZHt6l8iz-0)
- Documentation of existing reports and data visualization brainstorming can be found in [Figma here](https://www.figma.com/board/V0rDE80KylZ5jod3SWxAzC/Mobile-Surge-Support---Measurement---Data-Strategy?node-id=80-679&t=Y6lHMElVgm9bwJSi-0). 
- Next steps: build out in PowerBI
- Considerations: to reduce dashboard load time, consider opportunities to optimize data queries
