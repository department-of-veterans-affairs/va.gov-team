---
name: Offboarding request
about: To inform the Platform team when a team VSP or VFS team member has left and
  needs offboarding.
title: Offboarding of [individual]
labels: analytics-insights, Offboarding, operations
assignees: ''

---

# Instructions
Fill out name of individual and *Description* section below.

*(Please add only one individual per form)*

# Description
Please provide the following information about the individual being offboarded:
- name:
  > Janet Doe
- team name:
  >
- role on team:
  >
- expected last day: _(MM/DD/YYYY)_
  >
- company they work for:
  >
- email: _(Multiple emails listed in order of relevance to VA business, VA, Company, Personal, etc....)_
  >
- GitHub username: _(Please include @ symbol)_
  >
- COR:
  >
- PM:
  >
- additional access they may have: _(First line formatted with access titles only. Additional notes may be added on second line after the list.)_
  > ex: SOCKS, Pagerduty, Google analytics, etc.


:raised_hands: :tada: All done. Don't fill out or modify anything below here. :tada: :raised_hands:


## Acceptance Criteria

_The following steps are performed by the **Platform Support** team. Detailed instructions found [here](https://vfs.atlassian.net/wiki/spaces/OT/pages/2097545323/Offboard+Team+Member)_

 - [ ] Requested removal from DSVA Slack (if applicable. Search for them in Slack)
   > A comment on this ticket prefixed with `/request` (i.e. `/request FirstName LastName`) will send a message to the Slack admins automatically!
 - [ ] Requested removal from Confluence (if applicable. Check [confluence members](https://vfs.atlassian.net/wiki/people/search?q=))
 - [ ] Remove from [VFS Team Roster](https://www.va.gov/atlas/product_directory/team_members) (if applicable)
 - [ ] SOCKS access removed (if applicable. Search their email in [config.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/global/config.yml))
   > Use the [Remove SOCKS and AWS access Github Workflow](https://github.com/department-of-veterans-affairs/devops/actions/workflows/offboarding.yml). You'll need the user's email address associated with their public key (found in `config.yml`). Merge the PR.
 - [ ] AWS access removed (if applicable. Search their name in [AWS IAM](https://console.amazonaws-us-gov.com/iamv2/home#/home))
   > Use the same [SOCKS and AWS access Workflow](https://github.com/department-of-veterans-affairs/devops/actions/workflows/offboarding.yml) to remove user's entry from [iam_users.tf](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/global/iam_users.tf). You'll need the user's AWS username (typically `First.Last`). Merge the PR and apply Terraform.
 - [ ] User removed from the VA GitHub Org (if applicable. Check [department-of-veterans-affairs/people](https://github.com/orgs/department-of-veterans-affairs/people))
   > Fill out request found [here](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new?assignees=&labels=remove-user&template=user-remove.yml&title=Remove+User+from+Org%3A+%5Busername%5D).
 - [ ] Pagerduty access removed (if applicable. Check [pd users](https://dsva.pagerduty.com/users-new))
 - [ ] [Okta account](https://vfs.atlassian.net/wiki/spaces/OT/pages/2532508159/Offboarding+users+from+Okta) disabled
 - [ ] Datadog (if applicable. Check [Datadog users](https://vagov.ddog-gov.com/organization-settings/users))
    - [ ] Disable in Datadog UI
    - [ ] [Submit an ECC request](https://vfs.atlassian.net/wiki/spaces/OT/pages/2526282894/Offboarding+Users+from+Datadog)
 - [ ] Sentry access removed (if applicable. Check [Sentry members](http://sentry.vfs.va.gov/settings/vsp/members/))
 - [ ] TestRail access removed (if applicable, Check [TestRail User List](https://dsvavsp.testrail.io/index.php?/admin/users/overview))
 - [ ] Google analytics and Domo access removed (if applicable. Make sure the `analytics-insights` label is on this Issue)
 - [ ] Bot (`va-bot`, `va-vfs-bot`, and `va-vsp-bot`) user GitHub account(s) YubiKey(s) removed
   > This is rare. See [documentation](https://vfs.atlassian.net/wiki/spaces/OT/pages/1908932642/Remove+YubiKeys+of+Offboarded+Operations+Team+Members) for current users and removal process.
 - [ ] Sketch editor access removed (if applicable. Check [Sketch settings](https://www.sketch.com/workspace/c99d3e96-7c23-4210-b173-92a2b73a8788/settings/people))
 - [ ] Removed from Monday Design Meeting invite

 CC: @department-of-veterans-affairs/vsp-operations ,  @department-of-veterans-affairs/platform-analytics-insights-team , @department-of-veterans-affairs/confluence-admins, @department-of-veterans-affairs/platform-design
