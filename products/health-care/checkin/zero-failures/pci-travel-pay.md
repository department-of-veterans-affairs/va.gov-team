# Checklist for PCI Travel Pay

This covers the Zero Silent Failure audit for Travel Pay during PCI

The systems involved are

- va.gov
- vets-api
- Claims Ingest API

## Start

- [x] Do you know when your application shipped to production?
  - Pilot was released Summer of 2023
  - Full release was Winter of 2023
- [x] Did your application use the same APIs when it shipped as it does today?
  - Yes

## Monitoring

- [x] Do you monitor the API that you submit to via Datadog?
  - [Dashboard that containers monitors](https://vagov.ddog-gov.com/dashboard/5pd-req-u6d/check-in-travel-claims?fromUser=false&refresh_mode=sliding&from_ts=1726837576797&to_ts=1726841176797&live=true).
- [X] Does your Datadog monitoring use the appropriate tagging?
- [x] Do errors detected by Datadog go into a Slack notifications channel?
  - slack channel that alerts are posted to : #check-in-experience-apm
- [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
  - This is part of the PCI app and follows the on-call practices of the PCI team.
- [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
  - [The PCI Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/vetext-pci-incident-response/incident-response-playbook.md)

## Reporting errors

- [x] Have you filed issues for errors that are appearing in Datadog / Slack?
- [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  - No, there is a scenario where a submission fails and the text message also fails.
  - See [action items](#action-items)
  
## Documentation

- [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
  - [Sequence Diagram or backend flow from the sidekiq worker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/travel-pay/async-travel-claim-submission.md)
  - [Full diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/travel-pay/claim-status-api-integration.md)
- [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
- [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  - The API either returns an error, or a claim number. The claim number is acknowledgement that the claims was filed and is in their system
  
## User experience

- [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  - We show a Travel Pay integration down message
  - We send errors to the user via SMS message
  
## Action Items

- [ ] How are we handling the silent failure of Submission Failed + Text Message Failed
