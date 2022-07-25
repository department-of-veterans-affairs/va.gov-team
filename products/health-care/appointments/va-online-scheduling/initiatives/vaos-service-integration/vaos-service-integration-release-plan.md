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
  - _VAOS Service Integration Code will be deployed to production on 08/02/22 preferably early morning (after 3am and prior to 8am)_
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

### Stage A: Canary

#### Planning

- Success metrics to be monitored by VAOS Front End engineering and product management teams
- Issues to be reported to:  

- Percentage of users: 0%
- Length of time: 0-4 hrs

#### Results:
- Metrics at this stage (per your "success criteria"):
  - Sum of Errors = 
  - Breaker Skipped Alert = 
  - Average VAOS Latency = 
- Was the data submitted (if any) easy for VA to process?: yes/no
- Types of errors logged: 

### Stage B: moderate

#### Planning

- Success metrics to be monitored by VAOS Front End product management team
- VAOS Front End engineering team on-call for any issues reported
- Issues to be reported to:  

- Percentage of users: 0%
- Length of time: 4-48 hrs

#### Results:
- Metrics at this stage (per your "success criteria"): 
  - Sum of Errors = 
  - Breaker Skipped Alert = 
  - Average VAOS Latency = 
- Was the data submitted (if any) easy for VA to process?: yes/no
- Types of errors logged: 

## Phase II: VAOS Service Interation Go-Live in Production
### Planning

- Desired date range: _TBD by Office of Community Care_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

### Stage A: Canary

- Percentage of users: 5%
- Length of time: 2 hrs

#### Results:
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum

### Stage B: moderate

#### Planning

- Percentage of users: 
- Length of time: 

#### Results:
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum

## Phase III: va_online_scheduling_vaos_service_cc_appointments

### Planning

- Desired date range: _\[mm/dd/yy - mm/dd/yy\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

### Stage A: Canary

- Percentage of users: 10%
- Length of time: 

#### Results:
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum

### Stage B: moderate

#### Planning

- Percentage of users: 
- Length of time: 

#### Results:
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum

## Phase IV: va_online_scheduling_vaos_service_va_appointments

### Planning

- Desired date range: _\[mm/dd/yy - mm/dd/yy\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

### Stage A: Canary

- Percentage of users: 5%
- Length of time: 1 hr

#### Results:
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum

### Stage B: moderate

#### Planning

- Percentage of users: 
- Length of time: 

#### Results:
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum


---

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
