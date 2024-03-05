# SSO Accessibility Test Credentials

So you're ready for an accessibility review as part of your [VSP staging review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley&labels=product+support%2C+content-ia-team&template=staging-review.md&title=Staging+Review+%5BFeature-Name%5D). Outstanding! In order to ensure the accessibility review goes smoothly, please make a copy of this template and your [accessibility test cases](#link-to-test-cases). Save them to the [va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/) repository.

Please include as much information as you can. There is no such thing as over-communicating! The comments are there to help you fill out the template and will not appear when you save your file.

Each section has comments that look like this:

```<!-- This is the comment. Do not type inside the angle brackets -->```

## Team Name

SSO-Login
Slack: va-sso

<!-- Enter your team name like vsa-public-websites. This name can match your Slack channel. -->



## Product Description

<!-- Tell us about your product. Add as much detail as you want, and be sure to call out key items like intended audience(s), the stated purpose, and anything else you feel is relevant to an accessibility review. -->

This will impact all authenicated users of VA.gov. For more details please see our [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/README.md)

## Staging URL and Test User(s)

<!-- Provide a Staging URL and any test users that the accessibility specialist should use to review your product -->

* Staging URL (Cerner sign-in):https://staging.va.gov/sign-in/?application=myvahealth
* Staging URL (general sign-in): https://staging.va.gov/
* Staging URL (sign-out): https://staging.va.gov/sign-in/?auth=logged_out
* Test Users: 

DS Logon Test Accounts: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/ds-logon-lower-env-test-accounts.md

MHV Test Accounts: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mhv-lower-env-test-accounts.md

id.me Accounts: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv

## Link to Test Cases

<!-- Include a link to your TestRail or Markdown test plan. The staging accessibiilty review will be more completed more quickly when teams have done their own testing ahead of time. -->
Use the TestRail or Markdown template to document your accessibility test cases. These must be completed before the VSP staging accessibility review can start.

*Markdown: Github accessibility test results new UX components:*
* [Sign-in Page: Cerner users only](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/accessibility-plan-signin-page.md)
* [Modal: all first time users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/accessibility-plan-modal.md)
* [Sign-Out Page: Cerner users only](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/accessibility-plan-sign-out.md)


## Known Issues

<!-- If you find accessibility issues during your testing, please open Github issues for them and include links to those issues here. The accessibility specialist will create an epic to collect these issues and any findings from the staging accessibility review. -->

* [Create an accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)
* [7777](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/7777)
* [7767](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/7767)
* [7813](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/7813)
