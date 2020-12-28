# Sprint 37 :snowman:

##### Sprint dates: 12/16 - 12/29

##### [Code freeze:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/deployment-policy.md#holiday-release-freeze-schedule) 12/23 - 1/1


## Frontend

| Status | Points | User story | Notes |
| ------ | :------: |----------- |------ |
|        | 8 |[10-10EZ Address Field](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15159)| 12/21 - Work is in progress, working on feature flip work
|        | ? |[Set up demo with stakeholders for 10-10EZ Address work](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/17541) |
|        | ? |[Transition save-in-progress forms to new schema](https://dsva.slack.com/archives/CE4304QPK/p1608053928057500?thread_ts=1608052936.055000&cid=CE4304QPK) | 12/21 - will start on after address field work
|        | 5 |[Refactor/flatten 10-10CG UI schema](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16874)
|        | 5 | [Refactor/flatten 10-10EZ UI schema](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17071)

### Stretch
| Status | Points | User story | Notes |
| ------ | :------: |----------- |------ |
|        | 1 | Use (tool) to document unit test coverage on the 10-10CG & 10-10EZ
|        | 2 |Create tickets to increase unit test coverage on the 10-10CG & 10-10EZ
|        | TBD |Implement tickets to increase unit test coverage on the 10-10CG & 10-10EZ

## Backend

| Status | Points | User story | Notes |
| ------ | :------: |----------- |------ |
| Complete |  5 | [[Research] Familiarize with backend set up of the online 10-10EZ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17618) |
|        |  3 | [Testing and production release of background processing on 10-10CG](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17538) | 12/21 - sorting out permission issues to see Production-level dashboard. Next steps: reach out to platform
| Complete |  5 | [Research] backend changes to support 10-10EZ address additions (+ generate tickets) |
|        |  8 | [Backend changes needed to support 10-10EZ address additions](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/17809) |
|        |  ? | [Research: Automated reporting for the 10-10CG](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/17778) |
|        |  U |[Set up Sentry Alerts for 10-10CG in Slack](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16875) |  
|        |  5 |[Add support for "medical facility where you last recieved care" decoupling to 10-10CG schema](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16883)
|        |  5 |[Connect to CARMA via review instance](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15881)

### Stretch 

| Status | Points | User story | Notes |
| ------ | :------: |----------- |------ |
|        |  5 |[Timestamp research on the 10-10EZ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16876)
|        |  5 |Tech debt: [Remove CARMA::Models::Base for more explicit hard-coded #to_request_payload methods](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16129)
|        |  3 |Tech debt: [Add mocks for Metadata in CARMA::Models::Submission spec](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16130)
|        |  ? |Tech debt: [Rescue from MVI::Errors::DuplicateRecords error on MPI](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17163)
|        |  ? |Tech debt: [Refactor the Form1010cg::Service specs to have better nested context blocks]()
|        |  5 |Tech debt: [Do not raise errors of MPI Search on caregivers for 10-10CG](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14309)
|        | 13 |Tech debt: [Refactor MVI Lookup in Form1010cg::Service to not build a UserIdentity](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9083)
|        |  8 |Tech debt: [Remove data validation for user-requested 10-10CG PDF download](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14287)


## Design


| Status | Points | User story | Notes |
| ------ | :------: |----------- |------ |
|        | 2 |[Support 10-10EZ address implementation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15159) |  
|        | 13|[Moderate and synthesize findings from 10-10CG Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16873) |
|        | 13|[Stretch: Start design/research on POA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16452)


## PTO
- Alayna: 12/23 - 1/1
- Justin: 12/24 - 12/25, 1/1
- Kevin: 12/24,12/25, 1/1
- Jonathan: 12/24 - 1/1
- Ming: 12/29 - 1/1

## Product Goals
- Align on sizing and pointing
- Update Team Charter

## Alayna's OOO Plan
- Jason will share ToT slide on 12/22, no ToT update on 12/29
- Team is aware of and has talked through all sprint commitments, and has stretch goals ready in case there's downtime
- Backlog Grooming and Sprint Planning will take place the week of 1/4
- Program calls have been cancelled 
- Team huddle Zoom calls have been set up for 12/23, 12/28, and 12/30
- Sprint Report has been prepped to wrap up on 1/4
