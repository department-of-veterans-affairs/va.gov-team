# VA Online Scheduling - Zero Silent Failures Checklist
*Last updated: 2024-09-25*

## Team Questions

### Does your application have a user-facing transaction that is submitted to a back-end system?

- VA Direct Schedule Flow
    - [x] Yes [JL]
    - [ ] No
- COVID Vaccine Flow
    - [x] Yes [JL]
    - [ ] No
- VA Request Flow
    - [x] Yes [JL]
    - [ ] No
- CC Request Flow
    - [x] Yes [JL]
    - [ ] No
- Manage Appointments Flow
    - [ ] Yes
    - [x] No [JL] Assuming this means only the display of appointment lists and details
- Cancellation Flows
    - [x] Yes [JL]
    - [ ] No

> [!NOTE]
> This is not limited to online forms! Other examples can include:
> - Uploads of documents and/or attachments
> - Performing an action (Such as refilling a prescription or ordering supplies)

### Are you using any of the following APIs

> - [VA Facilities API](https://developer.va.gov/explore/api/va-facilities)
> - Any others?

- VA Direct Schedule Flow
    - [x] Yes [JL]
    - [ ] No
- COVID Vaccine Flow
    - [x] Yes [JL]
    - [ ] No
- VA Request Flow
    - [x] Yes [JL]
    - [ ] No
- CC Request Flow
    - [x] Yes [JL]
    - [ ] No
- Manage Appointments Flow
    - [x] Yes [JL]
    - [ ] No
- Cancellation Flows
    - [x] Yes [JL]
    - [ ] No

- [JL] FYI all `/vaos/v2/appointments/` calls will hit the facilities and clinics APIs since we augment each appointment retrieved/created/updated with location information and service/friendly names. Here's a list of all the non-appointments APIs we hit I've found so far:
    ```
    From vets-website:
    (note: I'm not including APIs to appointments APIs maintained by us)
    GET /facilities_api/v1/ccp/provider?latitude=${latitude}&longitude=${longitude}&radius=${radius}&per_page=${perPage}&page=${page}&${bboxQuery}&${specialtiesQuery}&trim=true
    GET /vaos/v2/epsApi/referralDetails?facilityId=${facilityId}&clinicId=${clinicId}&start=${startDate}&end=${endDate} (Not used yet, WIP feature)
    GET /vaos/v2/epsApi/referralDetails/${referralId} (Not used yet, WIP feature)
    From vets-api:
    GET/POST /vaos/v1/patients/#{user.icn}/appointments
    GET/POST /vpg/v1/patients/#{user.icn}/appointments (Turned off via Flipper)
    /my-health/medical-records/summaries-and-notes/visit-summary/#{sid} (Not used yet, WIP feature)
    GET/PUT /vaos/v1/patients/#{user.icn}/appointments/#{appointment_id}
    GET/PUT /vpg/v1/patients/#{user.icn}/appointments/#{appointment_id} (Turned off via Flipper)
    GET /vaos/v1/locations/#{station_id}/clinics
    GET /facilities/v2/scheduling/configurations
    GET /facilities/v2/facilities
    GET /facilities/v2/facilities/#{id}
    GET /ppms/v1/providers/#{id}
    GET /vaos/v1/patients/#{user.icn}/eligibility
    GET /vpg/v1/patients/#{user.icn}/eligibility (Turned off via Flipper)
    GET /vpg/v1/patients/#{user.icn}/relationships (I don't think we use this yet @cferris32? A: Correct, this is not yet in use [CF])
    GET /vaos/v1/locations/#{location_id}/clinics/#{clinic_id}/slots
    GET /vpg/v1/slots (Turned off via Flipper)
    GET /cce/v1/patients/#{user.icn}/eligibility/#{service_type}
    GET /var/VeteranAppointmentRequestService/v4/rest/patient/ICN/#{user.icn}/preference (I don't think we use this PreferenceService @cferris32? A: Correct, this endpoint is not called anywhere in our VAOS code [CF])
    GET /users/v2/session/jwts
    POST /users/v2/session?processRules=true
    ```
    Note that I'm excluding v1 endpoints but let me know if we need to look into that as well @cferris32.
    A: The v1 endpoints as they are defined in the VAOS routes have virtually never been used. From our routes perspective, we went straight from v0 to v2 (v0 has long since been    deleted). I cannot find any evidence that these endpoints are currently being used even by stray clients, but this might be worth additional investigation and possibly shutting off the routes if we believe they aren't needed and don't want to chance them being hit. [CF]

### Does your application submit to an API that relies on Sidekiq (or another background job processor)?

- VA Direct Schedule Flow
    - [ ] Yes
    - [x] No [JL]
- COVID Vaccine Flow
    - [ ] Yes
    - [x] No [JL]
- VA Request Flow
    - [ ] Yes
    - [x] No [JL]
- CC Request Flow
    - [ ] Yes
    - [x] No [JL]
- Manage Appointments Flow
    - [ ] Yes
    - [x] No [JL]
- Cancellation Flows
    - [ ] Yes
    - [x] No [JL]

- [JL] Technically yes we do since we have a user service that uses a Sidekiq job to refresh user sessions for all vets-api endpoints. However, my understanding is that this is a non-critical job and failures do not break user workflows since they will simply create a new session on the next API call to the backend. @cferris32 to double check my understanding here. If so, can we say we don't **rely** on Sidekiq jobs since the Sidekiq job can't break our user workflows?
A: I believe you are correct and I will look into confirming this. @JunTaoLuo where did you find that info on the sidekiq jobs? [CF]
A: I'm just looking through Sidekiq documentation and the code [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vaos/app/services/vaos/user_service.rb#L26). [JL]
A: Confirmed that our understanding of the sidekiq job for the user session is correct, this should not be breaking failure in our flow. [CF]
A: FYI I've found another Sidekiq job that validates appointments_index schema [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vaos/app/services/vaos/v2/appointments_service.rb#L43) but this is currently turned off via Flipper.
- [JR] We don't have visibility to downstream services so we can only confirm that we don't use Sidekiq in the Appointments FE (src/applications/vaos) and BE (modules/vaos).

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

## Checklist

### Start

- [ ] Do you know when your applications shipped to production? (*If not, use Github to determine, roughly, when your application shipped to users.*)
 - [RS] The src/applications/vaos/vaos-entry.jsx file was added to the repository on 2019-08-15, that doesn’t mean that is when it was turned on for production users however but when it was first added to the repository. This was determined from a git log command and filter.
 - [JL] Looking through the history of issues and tickets, my understanding is that the initial rollout was in Spring 2020, though it seems Tony would probably know best. I’m basing my understanding on three tickets in particular: 6498 tracked phase 1 of the roll out and was completed in March 2020, 6644 tracked the redirection of MHV traffic to VAOS after 100% rollout to va.gov and was completed in April 2020, 4164 is an epic that tracked production readiness and was finally closed in June 2020.

- [ ] Do your applications use the same APIs when it shipped as it does today?
 - [JL] As Simi mentioned, we have fully migrated from v0 to v2 APIs. I agree that I think it’s not useful to document v0 APIs since those are completely removed at this point.

If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.

### Monitoring
- [x] Do you monitor the APIs that you submit to via Datadog?

- VA Direct Schedule Flow
    - [x] Yes [JL]
    - [ ] No
- COVID Vaccine Flow
    - [x] Yes [JL]
    - [ ] No
- VA Request Flow
    - [x] Yes [JL]
    - [ ] No
- CC Request Flow
    - [x] Yes [JL]
    - [ ] No
- Manage Appointments Flow
    - [x] Yes [JL]
    - [ ] No
- Cancellation Flows
    - [x] Yes [JL]
    - [ ] No

- [JL] The dashboard is located [here](https://vagov.ddog-gov.com/dashboard/7t4-7fw-pgj/vaos-alerts?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1726685791928&to_ts=1726858591928&live=true).

If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).

- [x] Does your Datadog monitoring use the appropriate tagging?

    - VA Direct Schedule Flow
        - [x] Yes [JL]
        - [ ] No
    - COVID Vaccine Flow
        - [x] Yes [JL]
        - [ ] No
    - VA Request Flow
        - [x] Yes [JL]
        - [ ] No
    - CC Request Flow
        - [x] Yes [JL]
        - [ ] No
    - Manage Appointments Flow
        - [x] Yes [JL]
        - [ ] No
    - Cancellation Flows
        - [x] Yes [JL]
        - [ ] No

 - [JL] I'm not sure if I found all the monitors but so far I see 5 that send updates to our slack channel [here](https://vagov.ddog-gov.com/monitors/manage?q=notification%3Aslack-appointments-alerts&order=desc). I'm not sure if there are other ones (maybe PagerDuty or other alerts)? Here are the tags we set:
   - VAOS Vets API Errors Per Second, VAOS Vets API Error Rate, VAOS Request Rate is Low, VAOS Breakers Outage
    ```
    env:eks-prod
    team:mhv-appointments
    itportfolio:health-delivery
    service:mhv-appointments
    ```
   - Composite Number of Partial Responses from VAOS Service is High
    ```
    env:eks-prod
    team:mhv-appointments
    itportfolio:health-delivery
    service:external
    dependency:map
    ```

If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!

- [x] Do errors detected by Datadog go into a Slack notifications channel?

    - VA Direct Schedule Flow
        - [x] Yes [JL]
        - [ ] No
    - COVID Vaccine Flow
        - [x] Yes [JL]
        - [ ] No
    - VA Request Flow
        - [x] Yes [JL]
        - [ ] No
    - CC Request Flow
        - [x] Yes [JL]
        - [ ] No
    - Manage Appointments Flow
        - [x] Yes [JL]
        - [ ] No
    - Cancellation Flows
        - [x] Yes [JL]
        - [ ] No

 - [JL] We have this set up too. Messages go to [#appointments-alerts](https://dsva.slack.com/archives/C016QB6T340) channel.

If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.

Link to channel where alerts are populated: [#appointments-alerts](https://dsva.slack.com/archives/C016QB6T340)

- [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
    - [x] Yes
    - [ ] No

- [JL] Theoretically we do, and there’s a schedule [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/application-monitoring/VAOS%20Alerts%20On%20Call%20Roster.md). However, we haven’t been following this since August. Though I often see Jeff, Corey and Nicholas being active in the slack channel.

If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

- [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
    - [x] Yes
    - [ ] No
 - [JL] Yes we do. While we usually acknowledge issues in the slack channel directly using comments and threads, we can adopt the recommended methods listed in the linked document.
 - [JL] We've decided to revisit how we respond to issues given the platform recommendations but we'll keep the current alert channel name of #appointments-alerts.

If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

Link to Playbook:

> [!WARNING]
> **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.**
> If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

### Reporting errors
- [X] Have you filed issues for errors that are appearing in Datadog / Slack?

 - [JL] We have filed issues using data from our DataDog monitoring tools in the past when additional backend work was needed, e.g. 86316, 89619 and 90026. I believe there are currently no outstanding issues that need to be filed but we should update our practices to match the expectations listed in the linked document.
 - [JR,SA] Mentioned during the meeting that we also file MAPSUP tickets when needed.

If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)

- [X] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
 - [LD] We currently have alerts in the Appointments application
 - 500 error state - [SA] We follow the design system guidlines for displaying alert/error to display an alert with this message. "We’re sorry. We’ve run into a problem. Something went wrong on our end. Please try again later."
 - 400 error state - [SA] We follow the design system guidlines for displaying alert/error to display an alert with this message. "We’re sorry. We’ve run into a problem. Something went wrong on our end. Please try again later."
 - FE alerts diagram (will insert here) 

  - [JL] I’m not sure how we can be certain of this but I suppose the documentation part will help us answer this question?

If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)

### Documentation

- [X] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?

_Our [architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/vaos_2024_v1.png) may suffice here and we may not need to diagram for each flow [RS]_

    - VA Direct Schedule Flow
        - [ ] Yes
        - [ ] No
    - COVID Vaccine Flow
        - [ ] Yes
        - [ ] No
    - VA Request Flow
        - [ ] Yes
        - [ ] No
    - CC Request Flow (WIP [RS])
        - [ ] Yes
        - [ ] No
    - Manage Appointments Flow
        - [x] Yes [JL]
        - [ ] No
    - Cancellation Flows
        - [x] Yes [JL]
        - [ ] No

If not, then [create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md) that captures this information.

Link to data flow diagram:

- VA Direct Schedule Flow
- COVID Vaccine Flow
- VA Request Flow
- CC Request Flow (WIP [RS])
- Manage Appointments Flow
- Cancellation Flows

- [X] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down? This should be captured in the data flow diagram or a separate document.

 - [LD] Our team understands when we recieved an error from the upstream services. We cannot tell what caused the issue from the upstream services.  

If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.

Link to user flow diagram:

- VA Direct Schedule Flow
- COVID Vaccine Flow
- VA Request Flow
- CC Request Flow
- Manage Appointments Flow
- Cancellation Flows

- [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?

    - VA Direct Schedule Flow
        - [ ] Yes
        - [ ] No
    - COVID Vaccine Flow
        - [ ] Yes
        - [ ] No
    - VA Request Flow
        - [ ] Yes
        - [ ] No
    - CC Request Flow
        - [ ] Yes
        - [ ] No
    - Manage Appointments Flow
        - [ ] Yes
        - [ ] No
    - Cancellation Flows
        - [ ] Yes
        - [ ] No
 - [JL] This will likely be a large work item since we’ll need to coordinate with OCTO to obtain agreements with all the systems listed in the diagram [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/vaos_2024_v1.png). But I feel that we will not need to take much action other than communicating what services we depend on.

If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
Please document the outcome of this conversation in your product's documentation in Github and link here:

### User experience

- [X] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
- [LD] We have alerts in the UI that displays when there is an issue with the application 

### Possible silent errors
- [PR] Clinic phone numbers being disabled or mis-entered
- [PR] Staff data coming through the "details about your concern" field
- [PR] Data missing from video appointments
- [PR] Staff-canceled appointments disappearing from the list/no email notification
- [JL] Long standing requests without response?
- [JL] ~~Session extension failure (Sidekiq job)~~ Does not break user flow upon failure
- [JL] ~~Schema validation failure (Sidekiq job)~~ Turned off via Flipper
- [JL] Partial responses
- [JM] ~~Clinic location mis-entered with codes rather than floor or room number~~ Does not break application
- [SA] When user gets dropped to request flow due to ineligibility for direct schedule, no message is shown to end user. Is this considered a silent failure?


If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md). That diagram will help us to help you and your team to create this user experience.

### Link to user flow diagram:

- [VA Direct Schedule Flow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3649&t=cc4aBjvQIeqdAjYg-1)
- [COVID Vaccine Flow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3569&t=cc4aBjvQIeqdAjYg-1)
- [VA Request Flow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3877&t=cc4aBjvQIeqdAjYg-1)
- [CC Request Flow)](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3760&t=cc4aBjvQIeqdAjYg-1)
- [Manage Appointments Flow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2696&t=cc4aBjvQIeqdAjYg-1)
- [Cancellation Flow: Upcoming](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=cc4aBjvQIeqdAjYg-1)
- [Cancellation Flow: Requests](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3518&t=cc4aBjvQIeqdAjYg-1)
