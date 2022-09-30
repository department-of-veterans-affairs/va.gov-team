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

### Routes to code

The following (merged) PRs are probably the best way to show the code for 1095-B

vets-website:

- [Widget for downloading 1095-B form](https://github.com/department-of-veterans-affairs/vets-website/pull/20619)
- [Text version of 1095-B form](https://github.com/department-of-veterans-affairs/vets-website/pull/21847/files)
- [Add analytics to pdf,text radio buttons](https://github.com/department-of-veterans-affairs/vets-website/pull/21887)
- [End to end testing](https://github.com/department-of-veterans-affairs/vets-website/pull/21919)
- [Feature toggle](https://github.com/department-of-veterans-affairs/vets-website/pull/21926)

vets-api:

- [vets-api PR](https://github.com/department-of-veterans-affairs/vets-api/pull/10285/files)
- [Script that loads 1095-B data from S3 bucket](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/form1095/new1095_bs_job.rb)


### Accessing and viewing logs
Start by using this documentation to gain access to and then navigate to Grafana:
https://depo-platform-documentation.scrollhelp.site/developer-docs/centralized-logging-with-loki-and-grafana 

In ‘Log browser’, start by entering `{app="vets-api-worker"} |= “New1095BsJob”`, and set the time period to whatever you desire. This will display all logs for the New1095BsJob in the given time period.

To narrow down your search, here are some key words to search for:

- “error”: displays error level logging that has occurred in the given time period
- “warn”: displays warn level logging
- “info”: displays info level logging
- “failed to save”: displays logging for any files that failed to load in all 1095B forms in the file
- “Successfully read”: shows logging for successfully read files
- “files read successfully”: show final result logging for script (displays # files read successfully out of total files it attempted to read)
- "files found”: shows how many files the script is going to try to read in
- “Failed to save”: show any forms that failed to save (gives form id from flat file with it)

append ` |= “key word”` to Log browser to search 1095B logging for given key word. i.e. `{app="vets-api-worker"} |= “New1095BsJob” |= “key word”`


### Links to technical diagrams
- [Architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/architecture-plan.md)
- [Data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/Data%20Flow%20Diagram.md)
- [Sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/1095-B%20Sequence%20Diagram.md)

### API endpoint descriptions
- API endpoint: [1095-B PDF download endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_1095_b/downloadPdfForm1095B)
    - Route: 'form1095_bs/download_pdf/:tax_year'
- API endpoint: [1095-B text file download endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_1095_b/downloadTextForm1095B)
    - Route: 'form1095_bs/download_txt/:tax_year'
- API endpoint: [Endpoint to get the time the form was last updated](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_1095_b/getAvailable1095BForms)
    - Route: 'form1095_bs/available_forms'

### Feature Toggle

We have a [feature toggle](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#Featuretogglesguide-1.AccessFlipperUI) for 1095-B: 'show_digital_form_1095b'. 

You can check the status of the toggle at the following links: 
- [Staging](https://staging-api.va.gov/flipper/features)
- [Production](https://api.va.gov/flipper/features)

To access the settings for the feature toggle:

- [Staging](https://staging-api.va.gov/flipper/features/show_digital_form_1095b)
- [Production](https://api.va.gov/flipper/features/show_digital_form_1095b)

### Security

Our product has PII. We get all the data we need from the Enrollment System for the 1095-B form. These data elements are: 

- Veteran ICN
- Name
- Last 4 of social
- Address (street, city, state, zip, country)
- Birth data
- Months in which they had health care coverage through the VA

That's what's stored in the text file in the S3 bucket (encrypted), and in the vets-api database (also encrypted). With the exception of the ICN, that's what's displayed on the 1095-B form (text, PDF). 

See the [data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/Data%20Flow%20Diagram.md) for more detail. 
