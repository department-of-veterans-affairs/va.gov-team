# Should we turn on parallel testing in Mocha 8?

The purpose of this document is to outline the results of our discovery task to explore the risks, benefits, and effort behind turning on the new feature in Mocha 8: parallel tests ([Read more about parallel tests from the Mocha documentation](https://mochajs.org/#parallel-tests)). Before v8.0.0, Mocha only ran tests in order: one test must finish before moving on to the next. This methodology can start to bog down larger test suites, which is why we wanted to look into it further for feasibility.

Drafted by: Tim Wright, Staff Software Engineer, VSP FE Tools

## Context

The vets-website repository runs over 6000 unit tests one at a time, some tests taking over 10 seconds to complete. To try and speed up the overall execution time of the tests (and now that we're upgraded to Mocha 8), we wanted to explore running these tests in parallel.

Largely the move to parallel tests was pretty smooth. We had to upgrade the [testing library](https://testing-library.com/docs/dom-testing-library/install/) and correct some breaking changes in the VAOS application. The performance improvement wasn't mind-blowing, but there were a couple minutes shaved off the overall processing time.

In moving forward with the upgrade, we discovered that `--coverage` no longer worked in mocha with parallel tests because of a dependency called [workerpool](https://github.com/josdejong/workerpool/). Mocha is currently a patch behind the newest version of workerpool that claims to fix this problem, but manually adding the resolution in yarn did not fix the issue, so there's probably a reason Mocha hasn't pulled in the latest workerpool yet. There are also some other limitations with parallel tests like, [not being able to run exclusive tests](https://mochajs.org/#exclusive-tests-are-disallowed) and [some reporters are no longer supported](https://mochajs.org/#reporter-limitations).

In addition to the `--coverage` issue we encountered problems with [mock API calls in the personalization app](https://github.com/department-of-veterans-affairs/vets-website/blob/14a066d42b12f219a0194d43c2004a8aef1962e0/src/applications/personalization/profile/msw-mocks.js); This was specifically happening with the tests included in the [personal-information component](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/tests/components/personal-information). The recurring issues were isolated to those tests.

After speaking with the Authenticated Experience team, the conclusion was that, "The mocked API responses are tripping over each other with parallelization of the tests [in Mocha]," and the tests would likely need to be rewritten and the mock APIs calls isolated with a relatively high level of effort. These tests were written as an experiment to see if it'd even be feasible to write mocha tests that function as fully integrated tests with a mocked API. They are also amongst the slowest tests in the system.

## Paths forward:

We discussed multiple options including:

- Exclude these tests and run them separately without parallelization (this didn't work and would also result in a whack-a-mole process if other tests started using similar mocks).
- Assigning a specific port to each call (needs discovery)
- Rewrite all the tests that aren't working and using mocks
- Turning off the tests using mock API calls and convert them into Cypress (re-writing the tests).

## Decision

The combination of issues with `--coverage`, the personal-information tests needing to be rewritten, and the overall performance of the tests not really making a noticeable dent in the processing time, felt like a good reason to set this task aside since we're planning to break apart the applications anyway.

After that, we can address these items individually at the application level, especially since, for the most part, parallel tests worked fine. Our original plan was too see if parallel tests could be a quick win, turns out that mostly it is, but in the areas it isn't the effort is pretty high.
