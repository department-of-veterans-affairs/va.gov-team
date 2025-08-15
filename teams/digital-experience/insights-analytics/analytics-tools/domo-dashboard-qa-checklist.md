## Dashboard Release Checklist - QA

**Summary:** What does the VSP Analytics & Insights team need to QA before "releasing" dashboards to stakeholders?

[Reference link to Mural workshop.](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1588869654736/1016c93b9f51bc33c49b1d404c716730b052ed90)

Document all findings in a Github QA ticket. Use participant tester to replicate VFS use. Attach any screenshots where necessary.

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
  - [ ] Content is in plain language & spelled correctly. (titles, labels on charts, labels in columns, annotations)
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

--- 
### Example design & product checklist for the standardized Content KPI Dashboards

| Test                                 | Expected Behavior                                            | Actual Behavior                                              | Pass/Fail                                                    |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Default page                         | Page does not automatically filter, and description reflects lack of filter | Page does not automatically filter, and description reflects lack of filter | Pass ✅                                                       |
| Filter on Products                   | Every chart gets filtered for every product                  | Every chart gets filtered for every product                  | Pass ✅                                                       |
| Filter on Product URLs               | Every chart gets filtered for filtered product URLs          | Every chart gets filtered for filtered product URLs          | Fail ❌<br />Is "translate.googleusercontent.com/translate_c" supposed to be a part of VA Medical Center Sites? |
| Filter on Device Category            | Every chart gets filtered on device category                 | Every chart gets filtered on device category                 | Pass ✅                                                       |
| Filter on Browser                    | Every chart gets filtered on browser                         | Every chart gets filtered on browse                          | Pass ✅                                                       |
| Date Filters                         | Every chart gets filtered on date                            | Every chart gets filtered on date                            | Pass ✅                                                       |
| How to use this dashboard - header   | Links to Platform Website, "How to use this dashboard" page  | Links to Platform Website, "How to use this dashboard" page  | Pass ✅                                                       |
| How to use this dashboard - footer   | Links to Platform Website, "How to use this dashboard" page  | Links to Platform Website, "How to use this dashboard" page  | Pass ✅                                                       |
| Chart Title                          | Corresponding filtered form appears as the page title        | Corresponding filtered form appears as the page title        | Pass ✅                                                       |
| Product description                  | Corresponding filtered product description appears with every filtered form | [VA Medical Center Sites' description](https://docs.google.com/spreadsheets/d/1j5IBSAqNEJI9_tmHhYakukwrRIvCGAsh5e6hJ38hw9w/edit#gid=0) does not appear | Fail ❌                                                       |
| Data sources                         | Correct data sources appear                                  | Correct data sources appear                                  | Pass ✅                                                       |
| Section titles                       | Every section title & question is spelled correctly          | Every section title & question is spelled correctly          | Pass ✅                                                       |
| Chart titles                         | Every chart title is spelled correctly                       | Every chart title is spelled correctly                       | Pass ✅                                                       |
| Annotations                          | Every annotation "makes sense" and is spelled correctly      | Every annotation "makes sense" and is spelled correctly      | Pass ✅                                                       |
| Labels                               | All data labels appear where expected.                       | All data labels appear where expected.                       | Pass ✅                                                       |
| Hover text                           | All hover text "makes sense" and is spelled correctly        | All hover text "makes sense" and is spelled correctly        | Pass ✅                                                       |
| VA.gov Analytics Playbook link       | Links to Github Analytics Playbook                           | Links to Github Analytics Playbook                           | Pass ✅                                                       |
| Google Analytics link                | Links to Google Analytics 360                                | Links to Google Analytics "WBC- VA.gov Modernized Content" View home page | Pass ✅                                                       |
| VA.gov Data Dictionary link - header | Links to Platform Website, "Content KPIs Data Dictionary" page | Links to Confluence                                          | Fail ❌                                                       |
| VA.gov Data Dictionary link - footer | Links to Platform Website, "Content KPIs Data Dictionary" page | Links to Confluence                                          | Fail ❌                                                       |
| Domo Help Center link                | Links to Domo Help Center                                    | Links to Domo Help Center                                    | Pass ✅                                                       |
| Export to PPT                        | Entire dashboard exports to PowerPoint without chart cutoffs on the slides or missing labels | All section headers end up getting cut off from the charts within them | Pass ✅<br />Domo issue. Redirecting VFS teams to export using screenshots |
| Export to PDF                        | Entire dashboard exports to PDF without chart cutoffs on the slides or missing labels | All section headers end up getting cut off from the charts within them | Pass ✅<br />Domo issue. Redirecting VFS teams to export using screenshots |
| Color accessibility                  | Any charts with differing colors has distinguishable  values using a color blindness tester. | Any charts with differing colors has distinguishable  values using a color blindness tester. | Pass ✅                                                       |
| Misc                                 | Charts should be similar to approved design                  | In Links section, under the question "Which links were selected most often?", there's an additional chart titled "TEST Links with highest engagement." I'm assuming this is for QA, but this needs to be removed before launch. | Fail ❌                                                       |
