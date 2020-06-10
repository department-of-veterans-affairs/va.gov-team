# External page unexpectedly redirecting

The following page on `benefits.va.gov` was discovered to be redirecting to `www.va.gov` via our front-end injection script on June 8th, 2020, on the `vsa-public-websites` [Slack channel](https://dsva.slack.com/archives/C52CL1PKQ/p1591648982184600).

- __Page__: https://www.benefits.va.gov/compensation/claimexam.asp
- __Redirecting to__: https://www.va.gov/disability/va-claim-exam/


## Background
The Public Websites team was instructed to implement this redirect by [March 10, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6087). We opened and merged a [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/11808) on that date to do so.

However, after the work was deployed, a team member validated that the redirects are working correctly and discovered that [two of the redirects were not working](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6087#issuecomment-597307632), including this redirect. We investigated this and discovered that the page included in this redirect and one other did _not_ include our injection script - most likely, these two pages used a unique TeamSite template, and this template simply did not include our injection script in the page. In summary, in a set of nine redirects implemented on March 10th, these two pages were __not__ redirecting because the two pages did not include our injection script -

- `https://www.benefits.va.gov/compensation/claimexam.asp` ->	`https://www.va.gov/disability/va-claim-exam/`
- `https://benefits.va.gov/compensation/add-dependents.asp` ->	`https://www.va.gov/disability/add-remove-dependent/`

Because these pages did not include our injection script, we did not have the ability to redirect those pages. Instead, on April 29th, we instructed the benefits.va.gov team to implement the redirect [on their side](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6087#issuecomment-621363437).

### What went wrong
However, although we sent an email to the `benefits.va.gov` team to implement the redirects themselves, we did _not_ remove the not-working redirects that included those pages from our injection script. We didn't remove these redirects because the redirects were considered harmless (as in, they have no effect) if the injection script isn't included on the page.

At some point between stakeholder communications and the discovery of this redirect now taking effect unexpectedly, however, our injection script was added in those two pages that could not be redirected previously. Since the redirect was still included in our injection script, this would cause those two pages to immediately begin redirecting to `www.va.gov`.

## Solution
We confirmed that the redirect was being performed by our injection script by loading the page on benefits.va.gov locally and using Chrome devtools to block our JS injection script from loading. This confirmed that it is our injection script executing the redirect.

We merged a [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/13011) that removed the redirect from our injection script. Then, we received approval for and issued an off-schedule front-end deployment, removing the redirect from production.

### What went right
After discovering that these two pages were redirecting, we quickly identified the issue, opened and merged a pull request implementing the fix, then deployed it. The recovery was very quick.

### Lesssons
We absolutely need a stronger model for implementing cross-domain redirects. The current model was not intending for the level of growth we have seen with these redirects - we need a model of implementing redirects that can be easily ready and verified by non-engineering team members and some level of integration into CI to confirm redirects are working or else failing the pull request. If this were implemented in our CI, we would have been able to identify the non-functional redirects prior to merge, so the redirects for these two pages would not have been able to merged. I believe we can start exploring these possibilities in this [issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9487).
