# Covid Screener Google Analytics Information:

GA data can be viewed in the `VA.gov - production -> WBC - VA.gov - Modernized Content` view

Anonymous metrics around completion rate (total starts vs total finish) and time to completion are being collected.

> Metrics Dashboard
>
> Metrics for number of users who tap a button to start the application flow and the number of users that see a results screen are recorded on the dashboard linnked below. Additionally, current active users, geographic based data and total pageviews are available. Additional fields will be added as more analytics are gathered.
>
> [General Information Dashboard](https://analytics.google.com/analytics/web/#/dashboard/qHm9KfILQnmYWnUVDycH0w/a50123418w177519031p184624291/)

> **Time to Complete data:**
>
> Time from first click to first results screen is captured by a custom Caulculated Metric. Because this is still a Beta feature of GA it is only available to view on a custom dashboard. This URL contains the template to add that to your GA view:
>
> [Results Displayed Information and Time Report Template](https://analytics.google.com/analytics/web/template?uid=BpNwXw09TqeiKwY3cFkPrA)

**Event and Label details:**

> **Event: User clicks an answer for the first time:**
>
> - Event Action: `COVID Screening Tool - Start`
> - Event Label: `covid-screening-tool-start`

> **Event: User completes all required questions and result is `pass`:**
>
> - Event Action: `COVID Screening Tool - Result Displayed - Pass`
> - Event Label: `covid-screening-tool-result-displayed`
> - Event Label: `time-to-complete`

> **Event: User completes all required questions and result is `more screening needed`:**
>
> - Event Action: `COVID Screening Tool - Result Displayed - More screening needed`
> - Event Label: `covid-screening-tool-result-displayed`
> - Event Label: `time-to-complete`

> **Additional metrics planned**:
>
> Story #9400 is for collecting the number of retakes/reloads
