# Sprint 34

##### 11/4 - 11/17

## Frontend
- [ ] [~Statement of truth checkboxes~](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/14697) (blocked/on hold)
- [ ] [Frontend work to support secondary caregiver only applications] (
- [ ] [Look into unnesting recent medical care questions in schema](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15160)



## Backend
- [ ] Connect to CARMA from Review Instance for testing
- [ ] Research
     - [ ] How many PDFs haven't been sent?
     - [x] How long do submissions API calls take (on average)?
       
       Response time of successful API responses for form submissions on 11-05-20 UTC, in seconds.

       |metric|value|
       |------|----:|
       | Average            | 10.370 |
       | Min                |  6.365 |
       | Max                | 53.528 |
       | 95th Percential    | 13.283 |
       | Standard Deviation |  3.475 |
       
       \* *more details here*: https://dsva.slack.com/archives/CMJ2V70UV/p1604702251367000

- [x] Backend work to support secondary caregiver only applciations
     | Repo    | Ticket | PR |
     |---------|--------|----|
     |Schema   |        | [537](https://github.com/department-of-veterans-affairs/vets-json-schema/pull/537) |
     |Backend  |        | [5264](https://github.com/department-of-veterans-affairs/vets-api/pull/5264) |
- [ ] Real-time downtime message when MPI is down
- [ ] Resolving 10-10CG submission errors
     - [PDFs not being sent - research](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/14429)
     - [Logging](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15146)
     - [Attempt resubmission of PDF on failure](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15147)

## Design
- [x] [Rough draft designs for secondary caregiver flows](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15161)
- [ ] [Discovery plan for 10-10EZ](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/14698)
- [x] Research plan for testing secondary caregviver 

## PTO
- Justin: 11/9 - 11/13
