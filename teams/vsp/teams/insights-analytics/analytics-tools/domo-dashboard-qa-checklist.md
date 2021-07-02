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
### Example design & product checklist

| Test                                 | Expected Behavior                                            | Actual Behavior                                              | Pass/Fail |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | --------- |
| Default page                         | Page does not automatically filter, and description reflects lack of filter | Page does not automatically filter, and description reflects lack of filter | Pass ✅    |
| Filter on Forms                      | Every chart gets filtered for every form                     | "Top pages viewed before accessing the form" in `Finding the form` section is blank for 526 and 5655 | Fail ❌    |
| Filter on Device Category            | Every chart gets filtered on device category                 | Every chart gets filtered on device category                 | Pass ✅    |
| Filter on Browser                    | Every chart gets filtered on browser                         | Every chart gets filtered on browser                         | Pass ✅    |
| Date Filters                         | Every chart gets filtered on date                            | Every chart gets filtered on browser                         | Pass ✅    |
| How to use this dashboard - header   | Links to Platform Website, "How to use this dashboard" page  | Links to Platform Website, "How to use this dashboard" page  | Pass ✅    |
| How to use this dashboard - footer   | Links to Platform Website, "How to use this dashboard" page  | Links to Platform Website, "How to use this dashboard" page  | Pass ✅    |
| Chart Title                          | Corresponding filtered form appears as the page title        | Corresponding filtered form appears as the page title        | Pass ✅    |
| See form landing page                | Links for all available Forms go to the correct VA.gov production landing page | Links for all available Forms go to the correct VA.gov production landing page | Pass ✅    |
| Form description                     | Corresponding filtered form description appears with every filtered form | Corresponding filtered form description appears with every filtered form | Pass ✅    |
| Data sources                         | Correct data sources appear                                  | Correct data sources appear                                  | Pass ✅    |
| Section titles                       | Every section title & question is spelled correctly          | Every section title & question is spelled correctly          | Pass ✅    |
| Chart titles                         | Every chart title is spelled correctly                       | Every chart title is spelled correctly                       | Pass ✅    |
| Annotations                          | Every annotation "makes sense" and is spelled correctly      | Every annotation "makes sense" and is spelled correctly      | Pass ✅    |
| Labels                               | All data labels appear where expected.                       | All data labels appear where expected.                       | Pass ✅    |
| Hover text                           | All hover text "makes sense" and is spelled correctly        | "Forms by status" in `Highlights` title annotation says, "Test description" | Fail ❌    |
| Funnel hover text                    | All funnel hover text "makes sense" and is spelled correctly for each form | All funnel hover text "makes sense" and is spelled correctly for each form | Pass ✅    |
| VA.gov Analytics Playbook link       | Links to Github Analytics Playbook                           | Links to Github Analytics Playbook                           | Pass ✅    |
| Google Analytics link                | Links to Google Analytics 360                                | Links to Google Analytics 360                                | Pass ✅    |
| VA.gov Data Dictionary link - header | Links to Platform Website, "Forms Data Dictionary" page      | Links to Platform Website, "Forms Data Dictionary" page      | Pass ✅    |
| VA.gov Data Dictionary link - footer | Links to Platform Website, "Forms Data Dictionary" page      | Links to Platform Website, "Forms Data Dictionary" page      | Pass ✅    |
| Domo Help Center link                | Links to Domo Help Center                                    | Links to Domo Help Center                                    | Pass ✅    | Export to PDF | Entire dashboard exports to PDF without chart cutoffs or missing labels | Entire dashboard exports to PDF without chart cutoffs or missing labels |  Pass ✅    | Export to PDF | Entire dashboard exports to PowerPoint without chart cutoffs on the slides or missing labels | Entire dashboard exports to PowerPoint without chart cutoffs on the slides or missing labels |  Pass ✅    |
