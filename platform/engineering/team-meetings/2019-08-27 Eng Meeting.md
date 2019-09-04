2:30-3:30PMET

# Access

* https://zoom.us/j/722853312
* +16465588656,,722853312# US (New York)
* +17207072699,,722853312# US (Denver)

# Agenda / notes

* \[Eugene Doan\] Consumer-driven contract testing
  * So far: TestCafe as e2e test framework
    * Looking for reliable/fast tests for e2e/integration
    * Complexity around mocks (backends), failure reasons, etc.
    * Looking into alternative frameworks/tools
  * Consumer-driven contract tests with Pact
    * Addressing low confidence in mocks
    * Contract testing: consumer (`vets-website`) declares responses to expect from API (`vets-api`) as part of test
    * Verifies API response is accurate as expected
    * Consumer produces contract, provider verifies it.
  * Has [FE draft](https://github.com/department-of-veterans-affairs/vets-website/pull/10635/files) of how this kind of test integrates with API
  * Different kind of e2e test (doesn't load + run everything) --- focus on specific integrations, expected endpoint response
  * Doesn't invalidate e2e testing, but likely to be more reliable / less flaky. Failures more believable.
  * Potentially keep TestCafe as standalone daily job
  * TestCafe not currently blocking in deploy flow, but selenium tests (with mocked API) are
* \[Anna Carey\] Release toggles (Flipper)
  * Release toggles vs. ops toggles
    * Release: new feature to release
    * Ops: problematic service that you can turn off
  * New gem: `flipper`
    * Demo: `localhost:3000/flipper`
  * To add feature:
    * Add feature to config file, include name + description + side effects
  * `/v0/feature_toggles` endpoint: shows which features are enabled
  * Still TBD: access, who has access / who's making toggles
  * How to use?
    * React parts + helper functions. Values bootstrapped into HTML document, so you know what to render
    * Working on client documentation for it
    * Backend: just reference `flipper.?feature_name`, can pass in user as argument if needed
    * Prefer not querying `all` as opposed to individual feature
  * Release vs. toggle?
    * Would need flag in release at least a day before
  * What about DB migration?
    * \[Anna\] DB migration should always be first, feature toggle shouldn't rely on that
    * \[Rian\] More about FE feature hiding than BE
* \[Erik Hansen\] Use of `babel-plugin-module-resolver` in FE codebase to aid with module imports
  * Example: `import [...] from 'applications/...'` -- not a node module
  * `applications`, `platform`, or `site` should be able to be resolved from the base directory
  * Cleaner code at the top
  * Can also add special `aliases` in that for long paths that we repeat frequently (i.e. `vet360` example)
  * Works with VS Code if configured in `jsconfig.json`
  * When should we create aliases?
    * \[Nick\] i.e. what happens if we install an `applications` npm module?
    * \[Jeff\] aliases might prevent people from thinking critically about deeply-nested code
    * \[Michael T\] make it harder for new people to tell where things are
  * \[Bill\] Alt path vs. relative path: might happen organically?
  * \[Johnny\] Can aliases be preceded by a special character to call them out as distinct?
  * \[Gunsch\] Would rather see a consistent codebase-wide guideline.
* \[Keifer Furzland\] [RFC for dockerizing the load testing toolchain](https://github.com/department-of-veterans-affairs/va.gov-team/pull/1319) (initial discussion)
  * Difficult to run load testing as-is, especially onboarding new folks
* \[Bill Tran\] Vagrant Windows Box
  * Trying to get vets service working on Windows development (especially for GFEs)
  * Ubuntu 18.04, with correct ruby version + all necessary gems
    * Means that we need to update Vagrant box when we do Ruby version changes
  * Useful for developing on Windows, or testing the website on Windows
  * \[Keifer\] Approval process for running software?
    * Bill: went to VA office for IT support, downloaded everything there (Windows subsystem, Vagrant etc.)
    * Administrative access stuff is tricky though
    * Can install pretty much whatever at VA office in-person
  * Note: `box` file is pretty large (1.6GB?). Also works on Mac/Linux!
