## VAOS-R MVP Testing Scope
As part of the redesign and development, VA Online Scheduling implemented the follow test plan to assure quality and usability. Our testing process is in line with the best practices deployed by [VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/process.md). 

- Automated unit & E2E testing for VAOS front-end
  - E2E tests cover the three primary user flows and any additional variations to ensure that all pages are covered
    - E2E tests also include aXe checks on each page
  - Unit tests are intended to test all major functionality of the app and cover at least 80% of application code (at 85% as of 2/28/20)
- Automated unit and E2E testing for vets-api
- Local and staging testing of user flows - 3 flow paths
  - *Path 1* - Direct Schedule Flow (including create new appointment, review scheduled appointment, cancel appointment)
  - *Path 2* - Request VA Appointment (including create new appointment, review scheduled appointment, cancel appointment)
  - *Path 3* - Request Community Care Appointment (including create new appointment, review scheduled appointment, cancel appointment)
- Production testing of flows with veterans and scheduling clerks - performed X number of UAT in production
- Load testing
   - Though scripts were written to enable VAOS-R load testing, the VistA instances associated with the VAMF Staging environment has rules prohibiting load testing.  Additionally, because Staging is not production-like, any load testing performed there may not be indicative of success in Production.
   - Based on the inability to load test, we will be heavily dependent on our phased rollout plan for MVP deployment. This also means that here is a greater chance of experiencing issues during the phased roll out that will need to be addressed and may cause delays to the phased rollout schedule.  

## User Acceptance Testin (UAT) Overview
As part of testing protocol we testing the new VAOS tool with actual users. This ensures the tool can properly handle required tasks in real-world scenarios in a production environment. This also enable us to collect feedback, identify bugs, and eliminate potential risks. 

### UATs Completed for each Flow
1. View Appointments / Request List -- Completed Nov 2019, see documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research/november-2019-uat)
   - 15 veterans participated
   - *Issues found were resolved*
2. Cancel Appts / Requests; Create New VA Appointment Request -- Completed Dec 2019, see documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research/december-2019-uat)
    - 7 veterans participated
    - *Issues found were resolved*
3. Create Community Care Appointment Request -- Completed Jan 2020, see documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research/january-2020-uat)
4. Direct Scheduling -- Completed Jan/Feb 2020, see documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research/feb-2020-uat-direct-schedule)

### UAT Completed in Schedule Manager (Currently in-progress: GH-5059)

## TestRail Plan
https://dsvavsp.testrail.io/index.php?/auth/login/L3N1aXRlcy92aWV3LzIxJmdyb3VwX2J5PWNhc2VzOnNlY3Rpb25faWQmZ3JvdXBfb3JkZXI9YXNjLTYwZWY4NmFiZGM5MzRiZDJmMGViZTlkODI5ODA5YWZlOGQ1NGUwYWI1OTk1ZjE2MTY3MWM4ODdkYTVlOTVjN2E:
need to verify that Mark enabled this plan once @lenaecb gets access to TestRail account.
