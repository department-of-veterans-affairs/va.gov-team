## Dashboard Release Checklist - QA

**Summary:** What does the VSP Analytics & Insights team need to QA before "releasing" dashboards to stakeholders?

[Reference link to Mural workshop.](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1588869654736/1016c93b9f51bc33c49b1d404c716730b052ed90)

---


**Data:**
  - [ ] Stable automated connections to BigQuery, unless we don't have it in BigQuery. Data source documented.
  - [ ] If a metric is not in plain language or requires a calculation, then add an explanation of the metric logic.
  - [ ] Data is structured in a convenient way to meet the metric with little manual effort. Note if data is manually updated.
  - [ ] QA data sources to ensure data accuracy & cleanliness
  - [ ] Non line graphs have date ranges (dynamic text boxes or in the summary)
  - [ ] Chart structures reflect design mockup
  - [ ] Labels (for hover overs) have units of measurement

**Design/UX:**

- [ ] Check that final dashboard lines up with the mock up design (some things to check for:)
  - [ ] Content is in plain language (titles, labels on charts, labels in columns, annotations)
  - [ ] PPT and PDF exports are possible ("layouts" are not too long)
  - [ ] All graphs are logically grouped in layouts so exporting works and feels logical
  - [ ] Each graph and table has appropriate titles & labels
  - [ ] Each graph has appropriate date ranges
  - [ ] Goal lines are set

**Product:**

  - [ ] Groom descriptions for grammar, date ranges, & accuracy
  - [ ] Groom titles for grammar, date ranges, & accuracy
  - [ ] Groom notes for grammar, date ranges, & accuracy
  - [ ] Groom dashboard and charts for flow & usability
  - [ ] Schedule onboarding with VFS PM/PO/Stakeholder
