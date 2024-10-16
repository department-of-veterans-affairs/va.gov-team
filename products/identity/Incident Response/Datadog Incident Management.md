# Datadog Incident Declaration Instructions
This document describes the two methods to declare an incident and what the expected values should be when completing the documentation within the incident.

## How to declare an incident

1. From within the alert you can can click “declare incident” in the upper right corner of the page.
2. The second method is to go directly to the [incidents page](https://vagov.ddog-gov.com/incidents?query=teams%3Aplatform-identity) and click declare incident. in the upper right corner of the page.

## Incident field value guidance

### The initial pop up when declaring the incident

1. **Title**: {{service impacted}} is experiencing degraded service
2. **Severity level**: Follow the guidance from the [Incident Declaration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md#severity-levels), most production CSP outages fall into SEV-2 (because users can use other CSPs), anything that impacts more than one CSP should be set to SEV-1.
3. **Incident Commander**: person on call or person declaring the incident
4. **Attributes**:
    1. **Monitor**: Any of the alerts that are active can be used here
    2. **Priority**: Follow the guidance form the [Incident Declaration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md#priority-levels), normally anything longer than a 15 minute outage will be a P1.
    3. Teams: select “Platform Identity” from the drop down. Delete “identity” as its not a team construct known to incidents.
        ![Screenshot 2024-10-15 at 14 56 58](https://github.com/user-attachments/assets/ac298f41-929d-4c07-ae4a-5e7c481796a4)

### Declared Incident page
Note: this will open automatically after you declare the incident in the previous step

1. Update the status of the investigation within the incident at least every 30 minutes. Click on the Notifications tab within the incident page, click new notification. Choose the “identity-support” slack channel and modify any details about your update, click send.
       ![Screenshot 2024-10-15 at 14 51 05](https://github.com/user-attachments/assets/86212660-8e16-43e3-b72b-828aa06167c2)

2. Complete as many of the fields on the “overview page” as you can. The number of users impacted for example likely cannot completed until after the incident is resolved. However you can complete the “detection method” before the incident is resolved. Any fields you do not know, leave them blank, they can be modified later.
        ![Screenshot 2024-10-15 at 14 53 48](https://github.com/user-attachments/assets/62ced76c-075c-4355-88e8-5dde59e4e0a4)
    1. **Number of Users impacted:** the best we can do is estimate how many users are impacted. Try to find the average over a given time period that matches the incident timing. For example, if DSLogon is down from 1-2 PM for the incident, check how many users logged in from 1-2 PM the same day the previous 2 weeks. Take these numbers to create an average and then set this to number of users impacted.
            1. There may be cases the impact is caused by an internal va.gov error. In this case you should use the logs to determine how many users were impacted.
    2. **Impacts:**
            1. This is an ongoing statement which should be modified as the impact to the customer becomes more clear. Ensure this is accurate prior to closing the incident.
    3. **Pending tasks:**
            1. Add any expected follow on tasks as a result of the incident to this section. It is best to try and create JIRA tickets for each one and link them within the incident before setting the incident to completed. Its possible there are no follow on tasks for an incident, its on a per incident basis to determine what should be next.       
    3. **Attributes section:**
    1. Services: Identity
    2. Teams: Platform Identity
    3. Priority: P1-P5 (should be auto set from the incident declaration prompt)
    4. Monitor: set during the incident declaration prompt, choose the monitor which appears to be the most likely related to the cause
    5. Application: leave blank
    6. Availability zone: leave blank
    7. Controller: the two main controllers are `v0/sign_in` and `v1/session` , select the appropriate on based on the alert impacted
    8. Acknowledged by Team: Yes or no. This should always be yes unless another team made the incident and was resolved prior to us responding.
    9. Tracking issue: if you get an SR from an external team enter it here. We sometimes get tickets from IAM if they make one for a service degradation event
    10. Sub Service: free text field, enter all the services known to identity that were impacted.
4. **Timeline**
    1. Add notes to the timeline for actions take and investigations conducted during the incident. If you forget to enter something when it happens, set the time for when the event occurred. This will ensure when the post mortem is created the timeline of events is in the correct order.
5. **Resolve the incident**
    1. click the “Active” button in the top left corner and select the appropriate state. Before setting the incident to completed, ensure the postmortem and all other impact fields have been filled in.

       ![Screenshot 2024-10-15 at 15 28 43](https://github.com/user-attachments/assets/fadb6372-f715-4cc7-a40d-9a144cf6058b)
            
    2. It is common practice to set the incident to resolved, complete all the fields in the incident, generate the postmortem, and in some cases meet with the team prior to setting the incident to completed. Only the incident commander should set the value to completed after they have confirmed all data is complete and accurate.
    3. Once the Incident is set to Resolved, send another notification by going to the Notifications tab and selecting New Notification. The status should reflect your new “resolved” state. Type in any other details you wish and ensure the recipient is set to the Identity Support Slack channel.
6. **Postmortem**
    1. Once the incident is in a resolved stated, its time to click on “generate post mortem”. Select the “Datadog Template” from the choose template section. Click on Generate. 
    2. Review the values to ensure everything was set appropriately and modify anything that requires an update.

### Resolution
The final step of the Datadog Incident Declaration Instructions is to send a copy of the URL of the completed incident to the OCTO Identity leadership via slack.
