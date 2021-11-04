# VAOS service testing and release roadmap

This is a roadmap for the engineering work left to do in order to launch the VAOS service work into production

## Outstanding work

Here's what still needs to be completed:

- Any remaining backend changes to account for VAOS service 1.11 and 1.12 contract updates
- Community care provider name fetch from [facilities_api module](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32279)
  - May need to create separate FE ticket
- Updates related to issues listed in the [spreadsheet](https://docs.google.com/spreadsheets/d/1puA9NGzPFFRPwm-mYuugP441tMjB-1Kr0XrlkYrqGy4/edit#gid=2075084088)

## Staging validation

- The biggest current blocker for staging testing is https://issues.mobilehealth.va.gov/browse/VAOSR-2565, since it stops users from going through the flow
- Most issues on the list will also be noticed in manual testing, but shouldn't block testing on parts of the application
- In staging, need to validate that performance is reasonable.
   - One of the open issues is the eligibility checks timing out at 30+ seconds. This check should be a few seconds, like it is through the current services
   - We're fetching facility and clinic data as part of the appointments fetch, need to be on the lookout for any performance issues raised on the list page during manual testing and determine if this is the culprit.

## Releasing the changes

There are several feature toggles:

- va_online_scheduling_facilities_service_v2
  - With this on, the FE fetches facility data and VATS configuration data through MFSv2
- va_online_scheduling_vaos_service_requests
  - With this on, the FE submits requests to VAOS service and fetches requests from the VAOS service on the listpage
  - Note that it does not change how the eligibility checks in the flow work, it just changes where the request is submitted at the end
  - This is both VA and CC requests
- va_online_scheduling_vaos_service_cc_appointments
  - Fetches booked community care appointments through vaos service (meaning we get them from HSRM) 
- va_online_scheduling_vaos_service_va_appointments
  - With this on, the FE fetches VA appointments through the VAOS service on the list page, and also updates everything in the new appointment flow to use VAOS service (eligibility checks, plus clinics and slots calls)

Generally, it probably makes sense to turn `va_online_scheduling_facilities_service_v2` on first. This should be pretty safe, and you should be able to move it to 100% quickly. After that `va_online_scheduling_vaos_service_requests` is a good one to go next, since it's less impactful than the other two. Finally, you may want to do `va_online_scheduling_vaos_service_va_appointments` and `va_online_scheduling_vaos_service_cc_appointments` at the same time, it'll probably be less confusing, and we haven't done tons of testing with just one or the other on.

## Post-launch

After the launch, there's a lot of potential test cleanup

- Converting all the unit tests over to using vaos service endpoints
- Converting or removing Cypress tests that use the old endpoints
- Eventually, removing the old transformer code for the var-resources endpoints, along with the old mocks and api calls.
