2:30-3:30PMET

# Access

* https://zoom.us/j/722853312
* +16465588656,,722853312# US (New York)
* +17207072699,,722853312# US (Denver)

# Agenda / notes

* Announcements (Keifer, ...)
  * PSA: clean up your old branches / PRs!
  * Idea: set up bot to automatically delete branches when PR is merged?
* \[JP Ashenfelter\] CodeClimate Velocity
  * Lots of data, mostly about PRs and 
  * https://velocity.codeclimate.com/portal
* \[Erik Hansen\] Direct Deposit launch
  * Launched to 10%, monitoring Google Analytics + Sentry for errors
  * Relevant PRs for feature toggles:
    * [Bulk of work for using feature toggles](https://github.com/department-of-veterans-affairs/vets-website/commit/5dd83de9f1d29c8342fde041ca3fc35429301df2)
    * [Follow-up (feature toggle names into constants)](https://github.com/department-of-veterans-affairs/vets-website/commit/9eb8de965f5e7bc8928f33ac855141df9221e8fa)
* \[Rian Fowler\] Flipper and A/B testing / percentage rollouts
  * Heads-up: might start enforcing "in production a day before release", rolling out by percentage
  * See [documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags#release-toggles)
* \[Eugene Doan\] Flipper UI updates: matches VA.gov style, clearer to use now
* \[Lindsey Hattamer\] Build error output: rubocop output in Jenkins console
* \[Johnny Holton\] MVI Upgrade
  * [PR for upgrade to 4.1](https://github.com/department-of-veterans-affairs/vets-api/pull/3219)
* \[Brooks Johnson\] Updating our `fetch` patterns
  * [RFC](https://github.com/department-of-veterans-affairs/vets-website/pull/10845)
  * Proxies can't be transpiled/polyfilled for ES5
* \[Chris Valarida\] Redoing CMS/FE build integration
  * [RFC](https://github.com/department-of-veterans-affairs/va.gov-team/pull/2150)
