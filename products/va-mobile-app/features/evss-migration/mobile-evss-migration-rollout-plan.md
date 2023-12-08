## EVSS Migration for VA Mobile App - Rollout & Monitoring Plan 


### Q2 2023


### Background

[EVSS Migration Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/evss-migration/evss-migration-product-brief.md)

[Mobile App Release Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/releases)


### What’s the plan?

The EVSS Service Suite is being sunset in August of 2023.  We need to ensure everywhere the app uses EVSS is migrated prior to that.  We will be re-using integrations built in vets-api by other VA.gov teams.

We will target the beginning of August for having all migrations complete so we can monitor during the month of August for any issues before EVSS is turned off.


## Status

| EVSS Service | New Lighthouse Service | VA.gov Team building vets-api layer | Expected to be ready for us | Target Prod cut-over |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Claims Status | Claims Status API | Benefits Team 1 - Jerek Shoemaker | ready now | June |
| Set 5103 Waiver | Claims Status API | Benefits Team 1 - Jerek Shoemaker | ready now | June |
| Letters | VA Letter Generator API | Benefits Team 1 - Jerek Shoemaker | ready now | June |
| Direct Deposit | Direct Deposit API | Authenticated Experience Profile - Tom Harrison | Waiting for Error Code updates | July |
| Rated Disability | Veteran Verification API | Benefits Disability Experience - Mark Chae | ready mid-May | July |
| Documents | Benefits Documents API | Benefits Team 1 - Jerek Shoemaker | May | July |


We will not do phased rollouts for the service migration as we will be following the VA.gov teams in turning them live so those teams should find any major issues.  We can always roll it back if needed.

