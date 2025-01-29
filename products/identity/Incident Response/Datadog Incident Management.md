# Datadog Incident Declaration Instructions
## Overview
This document describes how to declare an incident in Datadog and what the expected values should be when completing the documentation within the incident. 

> [!NOTE]  
> If an incident must be declared, the VA OCTO Identity Product Leadership must be notified directly via Slack and Pagerduty. [Roles and responsibilities for the incident response process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/IR%20Roles.md) are documented here.

## How to declare an incident

There are 2 ways to declare an incident:

1. Directly in the Datadog alert, click **Declare incident** in the upper right corner of the page.
2. Navigate to the [incidents page](https://vagov.ddog-gov.com/incidents?query=teams%3Aplatform-identity), and click **Declare incident** in the upper right corner of the page.

## Incident field value guidance

### Declare incident

- **Title:** {{[Service impacted](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response/System%20Recovery%20Procedures#list-of-services)}} is experiencing degraded service.
- **Severity level:** Follow the guidance from the [Incident Declaration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md#severity-levels).
    - Most production CSP outages fall into SEV-2 (because users can use other CSPs).
    - Anything that impacts more than one CSP should be set to SEV-1.
- **Incident Commander:** person on call or person declaring the incident.
- **Attributes:**
    - **Monitor:** Any of the alerts that are active can be used here.
    - **Severity:** Follow the [Incident Declaration documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md#severity-levels).
    - **Teams:** select “Platform Identity” from the drop down. Delete “identity” as it's not a team construct known to incidents.
        ![Screenshot 2024-10-15 at 14 56 58](https://github.com/user-attachments/assets/ac298f41-929d-4c07-ae4a-5e7c481796a4)

### Send a notification
> [!NOTE]  
> The first notification will open automatically after you declare the incident in the first step. Update the status of the investigation with a new notification at least every 30 minutes.

- Click the **Notifications** tab within the incident page
- Click **New notification**.
- Select the **slack-identity-support** Slack channel
- Modify any details about your update.
- Click **Send**.
       ![Screenshot 2024-10-15 at 14 51 05](https://github.com/user-attachments/assets/86212660-8e16-43e3-b72b-828aa06167c2)

### Complete the overview section

Complete as many of the fields on the “Overview page” as you can. Any fields you do not know, leave them blank. They can be modified later. For example, the number of users impacted likely cannot be completed until after the incident is resolved. However you can complete the “detection method” before the incident is resolved.
        ![Screenshot 2024-10-15 at 14 53 48](https://github.com/user-attachments/assets/62ced76c-075c-4355-88e8-5dde59e4e0a4)
- **Number of users impacted:** the best we can do is estimate how many users are impacted. Try to find the average over a given time period that matches the incident timing. For example, if DSLogon is down from 1-2 PM for the incident, check how many users logged in from 1-2 PM the same day the previous 2 weeks. Take these numbers to create an average and then set this to the number of users impacted.
    - There may be cases the impact is caused by an internal va.gov error. In this case you should use the logs to determine how many users were impacted.
- **Impacts:** This is an ongoing statement which should be modified as the impact to the customer becomes more clear. Ensure this is accurate prior to closing the incident.
- **Pending tasks:** Add any expected follow on tasks as a result of the incident to this section. It’s best to try and create JIRA tickets for each one and link them within the incident before setting the incident to complete.
    - It's possible there are no follow on tasks for an incident. It's on a per incident basis to determine what should be next. Reference [system recovery procedure documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response/System%20Recovery%20Procedures) to determine proper testing and communication.
- **Attributes section:** complete as many attributes as you can on the right side of the page.
    - **Services:** Identity
    - **Teams:** Platform Identity
    - **Priority:** P1-P4 (this should be auto set from the incident declaration prompt).
    - **Monitor:** set during the incident declaration prompt, choose the monitor which appears to be the most likely related to the cause.
    - **Application:** leave this field blank.
    - **Availability zone:** leave this field blank.
    - **Controller:** the 2 main controllers are v0/sign_in and v1/session. Select the appropriate one based on the alert impacted.
    - **Acknowledged by Team:** This should always be yes unless another team made the incident and the incident was resolved prior to us responding.
    - **Tracking issue:** if you get an SR from an external team enter it here. We sometimes get tickets from IAM if they make one for a service degradation event.
    - **Sub Service:** free text field, enter all the services known to identity that were impacted.
- **Timeline**
    - Add notes to the timeline for actions taken and investigations conducted during the incident. If you forget to enter something when it happens, set the time for when the event occurred. This will ensure when the post mortem is created the timeline of events is in the correct order.

### Resolve the incident

It’s common practice to set the incident to Resolved, complete all the fields in the incident, generate the postmortem, and in some cases meet with the team prior to setting the incident to Completed. 

> [!IMPORTANT]  
> Before setting the incident to Completed, ensure the postmortem and all other impact fields have been filled in.  Only the [incident commander](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/IR%20Roles.md) should set the value to completed after they have confirmed all data is complete and accurate.

- Click the “Active” button in the top left corner and select the appropriate state. 

![Screenshot 2024-10-15 at 15 28 43](https://github.com/user-attachments/assets/fadb6372-f715-4cc7-a40d-9a144cf6058b)
            
- Once the Incident is set to Resolved, send another notification.
    - Go to the Notifications tab and select **New Notification**.
    - The status should reflect your new Resolved state.
    - Enter any other details about the resolution.
    - Confirm the recipient is set to the **#identity-support** Slack channel.
   
### Generate the postmortem

After the incident is resolved, you’ll generate a postmortem report:

- Click **Generate postmortem**.
- Select the **Datadog Template** from the choose template section.
- Click **Generate**.
- Review the values to ensure everything was set appropriately and modify anything that requires an update.

### Notify OCTO leadership

The final step is to send a link to the completed incident to OCTO Identity leadership via Slack.
