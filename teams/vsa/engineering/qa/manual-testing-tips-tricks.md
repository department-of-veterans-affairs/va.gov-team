# Manual-UI testing: Tips & Tricks

When testing Staging environment, there are things you need to do differently from testing locally.

## Authenticated flows

### Staging test-user passwords

**IMPORTANT**: Do NOT share passwords publically -- only list usernames in Use-/Test-Cases, and just provide link(s) to secure password doc(s).  Keep passwords out of any public-repository docs/issues \[e.g., va.gov-team repository\], emails, IMs, shared documents, etc.

Passwords for Staging test-accounts are documented _exclusively_ in our private [va.gov-team-sensitive][va-gov-team-sensitive] repository.  In public repositories and any other docs/emails/communications, _always link_ to the relevant password-reference(s) in va.gov-team-senstive.\*

Most Staging test-users are listed in [MVI Staging Users][mvi-stg-users] doc in va-gov-team-sensitive, and others can be found via the [vagov users homepage][vagov-users].

## Validating API-triggered error-states

Validating app error-states on Staging for API/backend errors often involves taking your browser or machine offline.  Mocking actual API error responses Staging per test-user is not feasible given limited Back-end/API team-capacities.

### Disconnecting networks

The most common way to go offline is to disconnect _all_ network connections:

1. Turn WiFi off \[and turn off cellular-data option too on Mobile\].
2. On Desktop, unplug Ethernet network cable too.

In **Chrome** browser, you can go offline just by selecting **Offline** from **Developer Tools** > **Network** tab > **Throttle** menu \[next to Disable cache option\].

## Restoring app state

### Deleting cookies

Occasionally, restoring a certain app state requires deleting a specific browser cookie.  For example, Find a VA Form has a PDF-download modal that only opens if the findForms cookie is absent, and you must delete that cookie to restore the modal on next test run.

__NOTE__: For mobile devices, it's best to test using [BrowserStack][browserstack], where browser dev-tools are available on the test-session window's left-panel.  It's generally much more difficult to access browser dev-tools on the actual, physical devices.

Check these online articles showing how to delete a cookie in different popular browsers:

- [Chrome](https://www.technipages.com/chrome-how-to-delete-specific-cookie-with-developer-tools)
- [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies)
- [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies)
- [Safari](https://eshop.macsales.com/blog/75708-how-to-delete-one-single-cookie-in-safari/)

---

\*  All VA.gov Application team-members should've been granted access to va.gov-team-senstive repository as part of standard onboarding process. Whoever doesn't have access should be referred to DevOps team for proper authentication & provisioning.

[va-gov-team-sensitive]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/
[mvi-stg-users]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv
[vagov-users]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Administrative/vagov-users
[browserstack]: https://browserstack.com/
