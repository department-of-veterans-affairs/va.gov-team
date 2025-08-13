# Data visualization guidelines

Guidelines & best practices for data visualization & UX on VSP Analytics & Insights.

## KPI dashboard visualization & content

**What are some basics for visualizing KPI dashboards (on Domo?)**

KPI dashboards have been designed for ease of use and clarity.

- Having charts directly under the KPI helps teams relate the data back to the KPI.
-  Including a **link to the source** (GA, foresee etc) helps teams trust that information, and it’s convenient for when they want to dig deeper into that information. 
- **Having color be meaningful** (example: failed submissions = red-ish, successful submissions = teal-ish (colorblindness)) 
- **Having color be distinctive** (blue is the DOMO default, and gets visually exhausting after a while. For each dashboard have a distinctive color for each thing, when possible) 
- **More information**: 
  - https://medium.com/nightingale/how-to-create-brand-colors-for-data-visualization-style-guidelines-dbd69c586dd9
  - https://blog.datawrapper.de/beautifulcolors/

**How do we visualize funnels?**

- Look at the pages that the funnel represents and identify logical groupings (example: pages about STEM eligibility) these groupings should sit in the same color family. 

- Intro and review pages sit in the grey family

- Match color to table row. Not the whole row should be colorful, it’s too visually overwhelming. 

- The first 3 tints in the DOMO color scheme work best for color contrast since the title of the funnel chunk sits on top of the funnel in dark grey and can’t be changed to a different color. 

**How do we show date ranges? How do we know if it should be week over week vs. daily vs. monthly?**

- Most **KPI dashboards** are weekly, except when it’s necessary for another granularity. 
- Weekly data shows better trends, daily data shows the dips of weekends, which is really noisy.
- Monthly data is usually not granular enough. 
- Foresee data is the exception here, because the numbers of responses are often very low.
- **Rollout dashboards** will have a finer granularity of displaying the data, probably daily or hourly, depending on the teams needs and what they look at to make decisions. 

**How do we choose visualizations to help answer product questions**

- [Choose the right chart for the data](https://extremepresentation.typepad.com/files/choosing-a-good-chart-09.pdf)

**When something as urgent as Covid happens, how do we visualize dashboards when we're in "panic mode" vs. "maintenance mode"?**

- Right now (non-urgent times) we are in maintenance mode. We look at the dashboard, make sure everything is working, and call out any huge changes. Most data is displayed in weeks. Some data is displayed in months, because we only get the monthly data. 
- Eventually, we expect to go back to “panic mode” when there’s a vaccine. Veterans and the VA will want to know more information quickly. The data can then be set to be displayed daily, and the time scale for what the charts show can be shortened to show the last month or so. 

**Any Domo tricks?**

- Dashboard export **layout** “trick” to put each card in it’s own layout so the document will export. 
- Turn off **Multi projection period** for line charts ("Hide" in Projection Controls)

## Miscellaneous

**What user research and design/UX risks are involved in an analytics scorecard?**

Every product is unique in terms of users and submission rate. If you start grading teams on increasing the number of successful form submissions, it creates bad incentives for the teams. It’s as much a marketing problem as it is a tech problem. You would also need more data like number of paper forms and processing time to know if there’s “digital success.”

- **What could an iteration of this build look like?** 

  It would need to be performance based. Are they building something that performs well and is technically usable, rather than are they building something that is used.

- **If we continued building the [Product Health MVP](https://docs.google.com/spreadsheets/d/1-1GYhR5RFItrYee2Yki_nuMW3XKYrWVzoZ8dppS3hb4/edit) with additional website performance metrics that we have available and will probably have available next year, what would that look like? Do you think the design risks the same if there isn’t a “score”?**

  If there’s not a score, it’s not as quick to use and access. It’s harder to compare products/teams. Which might actually be beneficial. 

- **What visualization and UX knowledge should someone designing these charts need to know?**

  They should be able to think through the data visualization design holistically, with an understanding of human-centered design

**How should we visualize the side-by-side time comparisons (2 numbers for 2 date ranges, with a % difference) for the CTO's office?**

- You could use a slope chart and show multiple forms on the same chart.
- You can probably round to 1 decimal place











