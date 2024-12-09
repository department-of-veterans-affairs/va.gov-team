# 5490, Datadog
_last updated: 11/5/2024_

## Audience 
_Team members responding to Datadog monitor alerts`_  

# Required access
_Access required to complete the steps in this playbook.  Intended for readers to review in advance._
```
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack] https://dsva.slack.com/archives/C068EHVQG6R
```   

# Steps
_Diagnosis or action steps to verify the issue, resolve the problem, and/or notify the correct people._ 
```
- Open a tracking issue at [va.gov-teams](https://github.com/department-of-veterans-affairs/va.gov-team/issues)   
- Review the recent list of notifications for this error in the #[my-education-benefits] slack channel page for frequency and error count.
- Check the (https://vagov.ddog-gov.com/dashboard/ye8-nsi-r45/gi-bill-meb-educationbenefitscontroller) and (https://vagov.ddog-gov.com/dashboard/rpq-78t-qth/gi-bill-meb-formscontroller) Dashboard.  In particular
  check to see what controllers & methods are having errors, what percentage of messages are errors, and if
  there are any other anomalies.
- Check to see if any anomalies relate to a recent release; if there is a relation between a change in traffic or errors with a new release deployment release 
- contact the My Education Benefits team at Slack channel [my-education-benefits](https://dsva.slack.com/archives/C068EHVQG6R).
  If the issue relates to a specific release, you can stop here.  
- MebApi::V0::EducationBenefitsController and MebApi::V0::FormsController are both related services. For a recent group of high errors. Can also search the logs for the APM Trace details by using the query `env:eks-prod @payload.controller:"MebApi::V0::EducationBenefitsController" ` Or
`env:eks-prod @payload.controller:"MebApi::V0::FormsController"`
- We recommend explicitly calling out @Sebastian Caso and @Bradley Bergeron.Tell them what application you support, the issues you are seeing and any other details for them to look into.
  Post a link to your question or comment in the [my-education-benefits](https://dsva.slack.com/archives/C068EHVQG6R) for awareness.
- To drill into details on a specific error at a specific time, click on a bar in the "Click on items to View Related Traces." widget at the bottom of the Dashboard.
- Our My Education Benefits team, Bradley and Sebastian, will triage the issue. If necessary, create a bug in the DGIB JIRA system. Or if it is an issue observed by the watch officer, they can create a GitHub watch tower ticket for tracking.
- Fixes, as identified, will be coordinated with EDU/VA stakeholders to resolve the specific issue.  
```
