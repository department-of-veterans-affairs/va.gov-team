# Running Agenda for IVC Forms Production Readiness Sync

# 2024-07-09
## Agenda
- Extensions that aren't .PDF are missing from file_names in the IvcChampvaForm data table.
   - Might not be an issue with what Cindy said in her email but worth noting.
- I [Bryan] placed an elaborate 10-10D submission with PNG, JPEG and PDF supporting docs
   - Cindy is likely still looking into this as I write this.
   - We need to make sure that they get these documents and know how they are grouped. Right now they all have their own form_UUID, I wonder if we need to group them but we'll know when Cindy gets back to us.
- Form Status Email Verbiage
  - Is anyone working on this yet? The emails are still generic with Lorem ipsum.

## Notes
- Action items

# 2024-06-11
## Agenda
- Previous action items
   - Set up meeting with OCTO engineers to review recommendations and actions taken (Bo)
      - Schedule now, wait for Premal, do it async?
   - Check in with Adrien for clarification on PDF validation (Bo)
      - How is this validation impacted by multiple PDFs (e.g. >3 10-10d applicants)
- Reminder - [Sprint & Release Planning](https://docs.google.com/spreadsheets/d/1miQJuXb_AkQ0GNkU8B-Wqexl_p-dgjrb_3NeO6swH0g/edit?gid=1379257114#gid=1379257114)
- [Security readiness review - intake ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78216)
- Monitoring: [See example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Existing%20Monitors%20and%20Alerts.md) and [additional info](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitoring-performance)
- [Load testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/load-tests)
- SOP for submit errors
   - Logging
   - Reporting
   - Business process
- SLA for IVC Forms - PEGA
   - Downtime procedures
   - Error reporting
   - Product will draft
## Notes
- Action items
   - Set up meeting with OCTO engineers to review recommendations and actions taken (Bo)
   - Create ticket for Don to investigate load testing (Bo)
   - Refine ticket for PDF validation (Bo)
   - Diagram/document s3 backup that Premal is looking into (Bo)

# 2024-06-11
## Agenda
#### Attendees: Bo, Michael, Devi, Bryan, Don, Mary, Rachel

- Updates on responses to OCTO feedback in this document: [Overall Finding of IVC code by VA office of CTO Engineering](https://dvagov-my.sharepoint.com/:w:/r/personal/premal_shah_va_gov/_layouts/15/Doc.aspx?sourcedoc=%7B22A7CC02-9D93-47A8-800C-9ECBC90FA513%7D&file=Overall%20Finding%20of%20IVC%20code%20by%20VA%20office%20of%20CTO%20Engineering.docx&action=default&mobileredirect=true)
   - Report back to OCTO team
- What's left for launch (10-10d)
   - "post go-live" label added in Zenhub to indicate things that are NOT part of launch
   - Confirmation page and email still need content/ux work
   - Error handling on submit
   - Product is putting together release plan and targets for upcoming sprints
- QA topics
   - [PDF Validation](https://dsva.slack.com/archives/C068Y3ZFKNJ/p1718057908811949?thread_ts=1717690517.038599&cid=C068Y3ZFKNJ)

## Notes
- Action items
   - Set up meeting with OCTO engineers to review recommendations and actions taken (Bo)
   - Check in with Adrien for clarification on PDF validation (Bo)


# 2024-05-28
## Agenda
- OCTO feedback in this document: [Overall Finding of IVC code by VA office of CTO Engineering](https://dvagov-my.sharepoint.com/:w:/r/personal/premal_shah_va_gov/_layouts/15/Doc.aspx?sourcedoc=%7B22A7CC02-9D93-47A8-800C-9ECBC90FA513%7D&file=Overall%20Finding%20of%20IVC%20code%20by%20VA%20office%20of%20CTO%20Engineering.docx&action=default&mobileredirect=true)
- [Platform QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-regression-test-planRegressionTestPlan)
- Monitoring: Current state of 10-10d Datadog dashboard
   - Two dashboards, ChampVA IVC Forms and 1010d IVC
   - What's the data source, are numbers correct?
## Notes

#### Attendees
* Michael
* Bryan
* Don
* Mary
* Bo

#### Discussion
- Overall Finding of IVC code by VA OCTO Engineering
  * Vets-website
    * Unit test coverage was called out, but 
    * Ticket would be good to add missing PropTypes and linting errors (one per form)
  * Vets-api
    * Testing for data dog to validate numbers
    * Ticket to set up data dog dashboard
    * Need business rules for communicating errors to users
    * Create ticket for communicating errors combined for FE & BE
    * Errors on submit: 
      * 200 all uploads successful
      * 400 all failed
      * 206 some failed
        * Think through error message and instructions to user
    * s3 could return more granular statuses—send to data dog, logging
    * Add ticket to ensure back end test coverage
      * IVC forms files in vets-api
    * Get clarification on question about tests validating PDF format
    * If PDF version expires, it will be a manual process to replace the old with new in the repository so low risk of this happening silently
    * Add ticket for updating README
      * Link to ADR, implementation, and PEGA details
  * Some suggestions…
    * Watchtower - need more info
    * Cypress tests are good for 10-10d and 79c
- Product to understand who needs to own which aspects of testing
- Ticket to add date and timestamp watermark for signature/statement of truth

```
current_time = "#{Time.current.in_time_zone('America/Chicago').strftime('%H:%M:%S')} "
      auth_text = case current_loa
                  when 3
                    'Signee signed with an identity-verified account.'
                  when 2
                    'Signee signed in but hasn’t verified their identity.'
                  else
                    'Signee not signed in.'
                  end
      stamp_text = SUBMISSION_TEXT + current_time
```

#### Decisions
* 
* 

#### Actions
- Tickets to add
  - add missing PropTypes and linting errors (one per form)
  - Ticket to add to and validate data dog dashboard
  - Create ticket for communicating errors combined for FE & BE
    - Need business rules for communicating errors to users
  - Add ticket to ensure back end test coverage
  - add date and timestamp watermark for signature/statement of truth
  - Add ticket for updating README
- Product to understand who needs to own which aspects of testing
