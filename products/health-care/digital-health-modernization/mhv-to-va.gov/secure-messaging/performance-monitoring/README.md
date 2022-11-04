# Secure Messaging Metrics, Performance, and Monitoring Approach [DRAFT]
Last Updated: 11/4/2022

The information in this document is based on guidance in the [VA Platform Product Development checklist](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/product-development-checklist#ProductDevelopmentChecklist-...secureandreliable?), discussion with the Health Apps team, VA Design System Components, and discussion with other teams that have implemented highly available products on VA.gov.

## Notes from meeting with Health Products team
- Need to have monitoring set up with Data Dog

## KPIs
### 


## Metrics
### Standard metrics based on predefined OKRs
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
- Medium-term things that could be addressed in the medium term of what the teams work on

### Additional metrics desired


## Performance and Issue Monitoring
- Devise plan for monitoring product performance and issues via an Incident Response Playbook
   - Example: [VAOS Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/incident_response/VAOS%20Incident%20Playbook.md)
   - Use tools to set thresholds of failures to auto alert teams through Slack with tie-ins to Grafana and/or DataDog.
      - Define and configure triggers
      - Take advantage of Slack integrations
   - Monitor Sentry closely after a production deploy for any issues that may come up
   - User PagerDuty to post alert banners that performance may be reduced
   - Demo
      - Stephen Barrs
      - Patrick
   - Immediate issues that may need remediation or further research

### Standard monitoring
### Additional monitoring desired
### Alerts

