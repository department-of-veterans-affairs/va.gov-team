# Health Aparmtment Metrics, Performance, and Monitoring Approach [DRAFT]
Last Updated: 11/4/2022

The information in this document is based, in part, on guidance in the [VA Platform Product Development checklist](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/product-development-checklist#ProductDevelopmentChecklist-...secureandreliable?), information presented by Health Apps team, VA Design System Components, and discussion with other teams that have implemented highly-available products on VA.gov.

## Top-Line Recommendations
- Consider making instrumentation and visualization acceptance criteria for almost all transactions
   - Endpoint connections
   - Database connections
- Work with stakeholders to understand the objectives and goals and defining success criteria
- Build measurements into the thought process for all new development and changes

## OKRs
- TBD

## KPIs
- TBD


## Metrics
### Standard metrics based on predefined OKRs and KPIs
- Work with OCTO leadership and stakeholders to define what success is for your product. 
- Research and decide what tools and data is available for measuring
   - Google Analytics - determine transactions that are available or could be available
   - Domo - for dashboard view of analytics
   - VSSC - VHA-led reporting tool mostly based on data in CDW that comes from VistA.  Health Tools team has had success in working with this group to get reports built to help track real-time use and type of use for a product.
   
### User satisfation based on user feedback
- Review feedback scores and comments monthly or quarterly (suggest monthly as it can be a lot)
- Look for trends or categories of feedback that an be captured, prioritized, and tracked
- Sometimes you may notice an unidentified bug or something that isn't working as intended
- Translate feedback into action items as we are able to
- Sources 
    - Medallia
    - Mobile Feedback UI
    - Helpdesk
    - VSignals feedback - Health Tools team gets a weekly report of raw data
- Medium-term things that could be addressed in the medium term of what the teams work on
- Longer-term things - examples:
   - 10-10CG issues sending data from VA.gov to Caregiver back-end Karma SalesForce system
   - Short form usage on 10-10EZ

### Additional metrics desired
- TBD

## Performance and Issue Monitoring
- Work with [team] to do pre-launch testing to identify potential bottlenecks - inefficient queries, slow API responses, redirect issues, etc.
- Devise plan for monitoring product performance and issues via an Incident Response Playbook
   - Example: [VAOS Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/incident_response/VAOS%20Incident%20Playbook.md)
   - Use tools to set thresholds of failures to auto alert teams through Slack with tie-ins to Grafana and/or DataDog.
      - Define and configure triggers
      - Take advantage of Slack integrations
      - DataDog tracks back-end transactions; some experimentation is being done using its front-end metrics as well
   - Monitor Sentry closely after a production deploy for any issues that may come up
   - User PagerDuty to post alert banners that performance may be reduced
   - Demo
      - Stephen Barrs
      - Patrick Bateman
   - Immediate issues that may need remediation or further research

## Reporting
- Monthly report card for stakeholders
   - Usage from Google Analytics
   - Usage by Month for key transactions
   - Overall usage data from VSSC report pulled from CDW data - the VHA service center team can build a report
   - Submissions from Google Analytics
   - Veteran feedback
      - Have to find the sweet spot so that you don't spend too much time, but still glean actionable feedback
   - Determine changes that can be made to address issues, complaints
   - Conversion rate
