# Title, including Monitor name if appropriate
_last updated: date_  

## Audience 
_Who this document is written for.  For instance: `team members responding to Datadog ["Example App errors"](https://vagov.ddog-gov.com/monitors/#####) monitor alerts`_  

# Required access
_Access required to complete the steps in this playbook.  Intended for readers to review in advance.  Example:_   
```
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
```   

# Steps
_Diagnosis or action steps to verify the issue, resolve the problem, and/or notify the correct people.  Example:_  
```
- Open a tracking issue at [va.gov-teams](https://github.com/department-of-veterans-affairs/va.gov-team/issues)   
- Review the recent list of notifications for this error either in the #[...] slack channel
  or on the ["Sample App errors"](https://vagov.ddog-gov.com/monitors/####) page for frequency and error count.
- Check the [Sample App Tool](https://vagov.ddog-gov.com/dashboard/[...]/sample-app) Dashboard.  In particular
  check to see what controllers & methods are having errors, what percentage of messages are errors, and if
  there are any other anomalies.
- Check to see if any anomalies relate to a recent release (location for the list TBD), if there is a relation
  between a chance in traffic or errors
  and a release contact the Sample App team at Slack channel [#sample-app-slack-channel](https://dsva.slack.com/archives/########).
  If the issue appears to relate to a specific release you can stop here.  
- v0::thiscontroller and v0::thatcontroller are both related services.  For a recent group of high errors 
  associated with these controllers contact the Backend production support team in the [#example-backend-prod-support] 
  (https://dsva.slack.com/archives/[.....]) channel.  I recommend specifically calling out @Example Administrator
  and @Another Example Administrator specifically.  Tell them what application you support, the issues you are seeing
  Post a link to your question or comment in the [#their-slack-channel](https://dsva.slack.com/archives/[...]) for awareness.
- To drill into details on a specific error at a specific time, click on a bar in the "Click on items to View Related Traces"
  widget at the bottom of the Dashboard.  
```
