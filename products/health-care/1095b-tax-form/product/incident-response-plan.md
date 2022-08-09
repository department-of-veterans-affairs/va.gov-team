# Incident response plan

Note: The team that is doing the initial MVP development is not the team that will be operating this page in production. The team that inherits the 1095-B product will need to adjust this incident response plan to fit to their process. 


## Incident response

### Incident commander
The first person on the team who hears about an issue in production is designated as the incident commander. The incident commander will then ensure all incident response procedures are followed until the incident response is complete, or until another person agrees to take over incident commander duties. The incident commander is not expected to personally resolve technical issues, and this is not necessarily a technical role. The incident commander is responsible to forming the response team. 


### Incident response process
1. Acknowledgement
    - Slack channels are updated and notified of incident   
    - Pull the response team together and assign responsibilities  
3. Identification
    - Which part of the process is responsible for the issue? 
    - Who are the SMEs for that system?
    - What is the impact/scope of the issue? 
5. Containment
    - Are there downstream effects of the bug? If so, isolate the system. Once isolated, we need to inform the downstream systems of issues and see if we can limit impact. 
7. Resolution
    - Implement any changes to address the issue. Whether that is code change and deploy, or infrastructure changes. The incident commander is responsible for coordinating the changes and communicating in the appropriate Slack channels. 
9. Recovery
    - Monitor changes made to address the issues
11. Incident documentation
    - Write up lessons learned from incident process
    - Tickets are created to resolve and solidfy any hot-fix issues
    - Tickets are created to address missing metrics or alarms that would have provided a warning
    - Schedule a post-mortem, and document it

## Contact information 

In an effort to keep contact information in one place, this is now in the [README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/README.md)

## Helpful information

### Links to technical diagrams
- [Architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/architecture-plan.md)
- [Data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/Data%20Flow%20Diagram.md)
- [Sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/1095-B%20Sequence%20Diagram.md)

### API endpoint descriptions
- API endpoint: 1095-B PDF download endpoint
    - Route: 'form1095_bs/download_pdf/:tax_year'
- API endpoint: 1095-B text file download endpoint
    - Route: 'form1095_bs/download_txt/:tax_year'
- API endpoint: Endpoint to get the time the form was last updated 
    - Route: 'form1095_bs/available_forms'

### Feature Toggle

We have a [feature toggle](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#Featuretogglesguide-1.AccessFlipperUI) for 1095-B: 'show_digital_form_1095b'. You can check the status of the toggle at the following links: 
- [Staging](https://staging-api.va.gov/flipper/features)
- [Production](https://api.va.gov/flipper/features)

To access the settings for the feature toggle: 

- [Staging](https://staging-api.va.gov/flipper/features/show_digital_form_1095b)
- [Production](https://api.va.gov/flipper/features/show_digital_form_1095b)
