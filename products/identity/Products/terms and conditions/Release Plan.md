
<!-- markdownlint-disable MD024 -->
# Release Plan 

---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| `terms_of_use` | Toggles the Terms of Use Accept/Decline actions (FE only) |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

- This change does not add substantial new functionality to VA.gov
- This change does not impact user flows through tasks
- This change does not affect traffic to backend services

#### Exceptions

Currently, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

DEPO VSP / OCTO leads can approve other exceptions to this requirement.

### Define the Rollback process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

**Frontend Regression**

Steps for `content-build`: (this will force Terms of Use to go back to staging)
1. Navigate to `content-build` repository
2. Create a Pull Request that changes the `registry.json` file for Terms of Use from `"vagovprod": true` to `"vagovprod": false`
3. Merge that Pull Request

**Backend Regression**

Steps for `vets-api`:
- SSOe disable:
  1. Create PR that removes apps from TERMS_OF_USE_ENABLED_CLIENTS in lib/saml/url_service.rb
- SiS disable:
  1. In the rails console, set enforced_terms on all ClientConfigs to nil
 
**External partners**

Steps for `IAM`
1. 

Steps for `Sign up Service (SuS)`
1.

Steps for `Oracle Health`
1. 

[See regression plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/terms%20and%20conditions/Regression%20Test%20Plan.md)


#### Rollout Planning

Phase 1 Rollout will take place on 4/4/2024 to My VA Health (Oracle Health) only at 9pm EST. There will be a member from each practice area within the Identity team to include the product manager attending the live call. Should there by any issue that is not able to be remedied in the moment, we will refer to the Regression Plan listed above.

Phase 2 Rollout will take place 1-2 weeks later with the releases for VA.gov and MHV. More info to come.

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
