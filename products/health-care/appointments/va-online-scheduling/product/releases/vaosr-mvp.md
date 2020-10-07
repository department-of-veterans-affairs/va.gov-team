# VA online scheduling (VAOSR) MVP

### [Phased rollout strategy for MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/VAOS%20MVP%20Launch%20Strategy/phased-rollout-plan.md)

-------

### MVP Implementation
The goal of the MVP is to improve usability of VAOS by rewritting the tool on VA.gov using existing design patterns already implemented there. We will not be introducing any new features compared to the existing tool, but will instead focus solely on veteran-centered usability.

  - KPIs
    - overall veteran usage of the tool
    - Task completion rates (requests, self-schedules)
    - Veteran satisfaction rates & contact center help requests
  - Goals
    - Increase the number of veterans entering the 'new appointment' flow compared to the existing tool
    - Increase the percent of veterans who are able to successfully request or schedule an appointment after starting the 'new appointment' flow compared to the existing tool
    - Decrease the number of contact center support tickets created about VAOS

#### Acceptance Criteria
To achieve these MVP goals we'll focus on implementing a tool on VA.gov that mostly mirrors the functionality of the existing VAOS tool
- Veterans can see details for their pending & confirmed appointments
- Veterans can cancel an existing confirmed or requested appointment
- Veterans can directly schedule a new Primary Care or Mental Health appointment at clinic where they were seen previously
- Veterans can request to schedule a new appointment for a type of care at a participating VA facility
- Veterans can request to schedule a new appointment for Community Care for a given type of care when eligible based on static code or drive time eligibility
- Veterans can message a scheduling clerk during the process of requesting an appointment
- Preferred appointment times are captured for both requests and self-scheduled appointments so that the VA can continue to track wait times

Additionally, the front end will need to talk to a new vets-api wrapper for the existing VAMF services. This wrapper will need to:
- Authenticate with necessary VAMF services (via integration with User Service)
- Send the front end data in a format that matches existing VAMF services as closely as possible

## Value Propositions

#### User Value
Makes it easier for veterans to directly schedule or request a healthcare appointment, either with the VA or a Community Care provider. The experience is integrated and cohesive with VA.gov, which is already a property with which many veterans are familiar.

#### Business Value
Better trust and satisfaction with the VA. More appointments scheduled and requested online, reducing support costs for phone-based bookings. More maintainable solution by in-house teams over the long-term.

## OKRs

### Objectives
- Increase number of logged in users on VAOS on VA.gov
- Increase number of appointments scheduled online (including % increase) -- measured as completion/conversion
- Improve perception of scheduling experience among veterans
- Decrease percent of scheduled appointments that result in no-shows
- Decrease processing time for schedulers
- Decrease phone volume for appointment scheduling
- Reduce volume of appointments scheduled via Secure Messaging

### KRs

- Number and Percent of veterans who are able to complete the scheduling flow
  - Measure with GA events and GA user funnels
- Type of care/speciality per scheduling type (VA request, CC request, or Self Schedule)
  - Measure with GA events/users
- Retention rate of Veterans returning back to VAOS tool
- Number and Percent of overall appointments scheduled or requested online
  - Cross-comparison of GA VAOS events to VHA Scheduling data
- Percent of veterans who feel that they've accomplished what they set out to do
  - Consider using Foresee in future to prompt in flow questions
- Number of healthcare appointments scheduled over the phone
  - Need to collect information from VHA scheduling data
- Veteran satisfaction
  - TBD
- Latency, uptime, production bug volume, deploy speed
  - Sentry Dashboarad collects these metrics
