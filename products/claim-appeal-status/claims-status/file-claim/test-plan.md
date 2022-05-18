# Test Plan
Engineers will be responsible for writing automated tests and ensuring a level of test coverage (can be verified using tools like SimpleCov and karma-coverage).

Automated tests will be run on each branch using Travis CI.

## Backend
The backend portions of the benefits application will be tested using automated tests. Developers will create the tests as they develop new features. Developers will ensure a minimum of 95% code coverage before merging new feature branches into main.

### Tools
RSpec/MiniTest (unit/integration)

## Frontend
The frontend portions of the benefits application will be tested using automated tests. Developers will create the tests as they develop new features. Developers will ensure a minimum of 95% code coverage before merging new feature branches into main.

Single-page applications should be tested prior to launch to ensure that there are no unnecessary files included in the application, and that static assests are delivered in a reasonable amount of time. This testing is the responsibility of the DevOps team with assistance from the Development team.

### Tools
Karma/Mocha/Chai/Jasmine (unit)
Nightwatch (integration)
SauceLabs (browser)

## 508 Compliance
508 compliance testing will be done using either VA systems like Deque, or tools like pa11y. Issues will be recorded as bugs and made a part of development sprint cycles.

## Acceptance
As each feature is completed, product owners are responsible for testing the feature in a staging environment to verify that the delivered feature meets the acceptance criteria specified in the user story. If a feature does not meet the criteria, developers will return to working on the feature until it is deemed acceptable by the product owner. Acceptable features can be pushed to production at any time.

## Security
Developers are responsible for security testing while adding new features. For Ruby on Rails applications, brakeman is used to conduct static code analysis that highlights any security issues. For JavaScript applications, some form of OWASP testing should be conducted.

Prior to launch, the DevOps team will conduct a simple pentration test, including scanning the site for common OWASP vulnerabilities such as SQL injection, Cross-site scripting vulnerabilities, and others (https://www.owasp.org/index.php/Top_10_2013).

All ssl configuration should be tested with SSL Labs (https://www.ssllabs.com/ssltest/).

## Performance
Before launch, all applications require performance testing to ensure they can meet expected load. Tools used will include blitz.io, SOASTA, or other load testing tools.

Performance testing will be conducted by the DevOps team.

Performance will be monitored in New Relic during the test.

The test will ensure that the site does not fail to service requests at peak load, and that auto-scaling of resources is properly functioning.

Load levels will be deteremined on a per-application basis.

Performance testing will ascertain that the service or application is able to maintain the following levels of service:
 - Response times of 250ms or less
 - Throughput of 1000 requests per minute
