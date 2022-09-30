# DRAFT VAOS Service Integration - Release Plan

Work for the vaos service integration is broken up into 4 toggles:
- Community Care appointments (va_online_scheduling_vaos_service_cc_appointments)
- Facilities (va_online_scheduling_facilities_service_v2)
- Request-related services (va_online_scheduling_vaos_service_requests)
- VA VistA-based appointments (va_online_scheduling_vaos_service_va_appointments)

For this launch, the rollout of each toggle will happen concurrently in order to avoid requests being routed to different systems at the same time.

---

## Prerequisites
All of the following are required before VAOS frontend enables the toggles for integration with the VAOS service:
- [ ] HSRM is launched and live in Production, and ready to manage appointment requests
- [ ] VAOS Service is launched and live in Production, and ready to accept scheduling and appointment transactions
- [ ] Business Stakeholders approved Veteran-facing launch
- [ ] VAOS Product Owner approved Veteran-facing launch

## Phase I: Code Deployment of VAOS Service Integration

### Planning

- Desired date: 
  - _VAOS Service Integration Code will be deployed to production on 07/29/22_
- How will you make the product available in production while limiting the number of users who can find/access it:  
  - _During this phase, code will be deployed to production but all feature flags will be disabled.  Commmunity Care appointment requests will continue to be sent to Scheduling Manager_
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
  - _Success will be determined by monitoring the current [Grafana Dashboard](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?orgId=1&from=now-24h&to=now&refresh=15m).  After deployment:_  
    - [Sum of Errors](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?viewPanel=6&orgId=1&from=now-7d&to=now&refresh=15m) should be less than 10 errors for any 10 minute period  
    - [Breaker Skipped Alert](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?viewPanel=4&orgId=1&from=now-7d&to=now&refresh=15m) should not register any alerts  
    - [Average VAOS Latency](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?viewPanel=2&orgId=1&from=now-7d&to=now&refresh=15m) should be less than 5s
- Links to dashboard(s) showing "success criteria" metrics:
  - [Grafana Dashboard](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?orgId=1&from=now-24h&to=now&refresh=15m)  
  - [Sum of Errors](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?viewPanel=6&orgId=1&from=now-7d&to=now&refresh=15m)  
  - [Breaker Skipped Alert](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?viewPanel=4&orgId=1&from=now-7d&to=now&refresh=15m)  
  - [Average VAOS Latency](https://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?viewPanel=2&orgId=1&from=now-7d&to=now&refresh=15m)

### Final VAOS Service Integration deployed to production, flags disabled

#### Planning

- Success metrics to be monitored by VAOS Front End engineering and product management teams
- Issues to be reported to:  
  - For front end issues related to VAOS website 
    - Create a ticket in Github and assign labels: vaos_v2_prod
    - Post Github issue in vaos-team channel
      - Title message with "VAOS V2 Prod"
      - Tag/notify VAOS frontend team using @vaos-fe-all in channel
- Percentage of users: 0%
- Length of time: 0-24 hrs

#### Results:
- Metrics at this stage (per your "success criteria"):
  - Sum of Errors = 
  - Breaker Skipped Alert = 
  - Average VAOS Latency = 
- Was the data submitted (if any) easy for VA to process?: yes/no
- Types of errors logged: 

## Phase II: Test VAOS Service Integration in Production with Select Veterans

### Planning

- Work with OCC to identify veterans that can test VAOS Service Integration prior to Go-Live
- Setup 15-30 minute meetings with veterans to walk through test workflows
- Add veteran user account to feature flags in production 30 minutes before scheduled meeting
- Disable feature flags for veteran after meeting

### Pre Go-Live Testing

#### Test workflows
- View upcoming appointments and appointment requests
- View Cancelled apppointments and Past appointments
- Schedule available appointment types (Direct, Request, Community Care)
- Cancel appointment types created in previous test

#### Results:
- Record load times
- Record comments on appointment details
- Record any errors encountered


## Phase III: VAOS Service Interation Go-Live in Production
### Planning

- Desired date range: _TBD by Office of Community Care_
- How will you make the product available in production while limiting the number of users who can find/access it: _The partial launch of the VAOS Service Integration would result in appointment requests being sent to multiple systems, varying by patient and clinic.  As a result, the Business Owners (OCC) have decided to do a 100% cutover.  This initial Go-Live will only impact Community Care appointment requests, which are a small percentage of the total requests received through VAOS._
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

## Go Live!

### Planning:
- Desired date: mm/dd/yy
- Post-launch KPI 1: xx lorem ipsum
- Post-launch KPI 2: xx lorem ipsum
- Post-launch KPI 3: xx lorem ipsum
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?
