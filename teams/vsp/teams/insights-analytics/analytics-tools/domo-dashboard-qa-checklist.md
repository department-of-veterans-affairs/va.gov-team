## Dashboard Release Checklist

**Summary:** What does the VSP Analytics & Insights team need to complete before "releasing" dashboards to stakeholders?

[Reference link to Mural workshop.](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1588869654736/1016c93b9f51bc33c49b1d404c716730b052ed90)

---

**GA Reporting Specialist:**
  - [ ] For user/session based metrics, create shared GA segment
  - [ ] Stable automated connection to data source, BigQuery where possible
  - [ ] Data is structured in a convenient way to meet the metric with little manual effort
  - [ ] QA data sources to ensure data accuracy & cleanliness
  - [ ] Non line graphs have date ranges (dynamic text boxes)
  - [ ] Cross-team: work with designer to ensure the data is explained
  - [ ] Cross-team: work with designer to ensure each "card" has a data source that is clearly linked & that the link works
      - If Google data is not in GA, please make a note in the dashboard for transparency to our users (i.e. this data is being calculated from BigQuery, with no direct reporting source from GA)

**Designer - Data Engineer:**

  - [ ] Content is not "too long" so that export is possible
  - [ ] All graphs are logically grouped in layouts so exporting works and feels logical
  - [ ] Each graph and table has appropriate titles & labels
  - [ ] Each graph has appropriate date ranges
  - [ ] Set goal lines
  - [ ] Cross-team: work with GA Reporting Specialist to ensure that data is explained ([metric definitions reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/google-analytics-cheat-sheet.md))
  - [ ] Cross-team: work with GA Reporting Specialist to ensure each "card" has a data source that is clearly linked & that the link works
        - If Google data is not in GA, please make a note in the dashboard for transparency to our users (i.e. this data is being calculated from BigQuery, with no direct reporting source from GA)

**Contact Center Team:**
_If needed_

  - [ ] Ensure accuracy of contact center data
  - [ ] Contact center data has appropriate dimensions, descriptions, and sources

**Product Manager:**

  - [ ] Groom descriptions for grammar, date ranges, & accuracy
  - [ ] Groom titles for grammar, date ranges, & accuracy
  - [ ] Groom notes for grammar, date ranges, & accuracy
  - [ ] Groom dashboard and charts for flow & usability
  - [ ] Schedule onboarding with VFS PM/PO/Stakeholder
