

# Release Plan 

## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| `terms_of_use` | Toggles the Terms of Use Accept/Decline actions (Frontend only) |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback/Regression process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible. [See regression plan for Identity team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/terms%20and%20conditions/Regression%20Test%20Plan.md)
 
### External partners

> IAM regression plan

Steps for `IAM`

1. 

> Sign up Service (SuS) regression plan

Steps for `Sign up Service (SuS)`

1.


---

### Rollout Planning

| Application | Phase | Rollout Date | Production URL |
| --- | --- | --- | --- |
| My VA Health (Oracle Health) | Phase 1 | Thursday April 4th, 2024 @ 9PM EDT | https://va.gov/terms-of-use/myvahealth |
| My VA Health (Oracle Health) | Phase 1, 2nd Attempt | Thursday April 25th, 2024 @ 9PM EDT |
| My HealtheVet | Phase 1 | Wednesday May 15th, 2024 @ 9PM EDT | |
| VA Flagship mobile | | | |
| VA.gov | | | |


> Phase 1 - My VA Health (Oracle Health)

Rollout will take place on Thursday 4/4/2024 at 9pm EST for My VA Health (Oracle Health). There will be a member from each practice area within the Identity team to include the product manager attending the live call. Should there by any issue that is not able to be remedied in the moment, we will refer to the Regression Plan listed above.

**Launch checklist**
- [x] Identity team (frontend) will merge `content-build` and `vets-website` PRs to enable production
- [x] Identity team (frontend) will enable `terms_of_use` Flipper flag
- [ ] IAM will be required to enable enforcement of terms of use with the new VA.gov production URL - https://va.gov/terms-of-use/myvahealth
- [ ] IAM will release a fix to the logout bug with the patient portal
- [ ] IAM will add production declined terms app key
- [ ] Sign up Service enable changes to version 3 of Terms of Use

**After launch (analysis)**

> Phase 2 - TBD

Rollout will take place 1-2 weeks later with the releases for VA.gov and MHV. More info to come.

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
