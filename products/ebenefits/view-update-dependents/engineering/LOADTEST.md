## Overview
Any time a new endpoint is introduced into vets-api, it needs to be exercised to ensure resiliency under high load.
The 21-686c uses up to 4 different calls to vets-api:
1. Verify a user has a valid VA file number on record
1. Save in progress
1. Document upload
1. Form submission

### Resources
- [526 load test](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/form526/form526_locust.py)
    - Good example of testing save in progress, document upload, and form submission
- [526 submission JSON](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/form526/submit_form.json)
    - Data mirrors what an actual payload would look like for the 526
- [526 SIP JSON](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/form526/save_in_progress.json)
    - Data used to mock save in progress
- [Generating user sessions](https://github.com/department-of-veterans-affairs/devops/tree/master/loadtest/form526)
    - The steps in this readme are used for extracting valid user sessions to be used in load tests
- [Get requests](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/rated_disabilities/rated_disabilities_locust.py)
    - Rated disabilities load tests for simple get requests. Helpful for the VA file number endpoint potentially
- [Locust docs](https://docs.locust.io/en/stable/)
    - Documentation for locust load testing client
- [VA.gov load testing readme](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/README.md)

### General steps
1. Generate user sessions in Jenkins
1. Extract JSON payload for 686 from dev tools to use in load test
1. Test VA file number verification
1. Test save in progress. [Example](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/form526/form526_locust.py#L87)
1. Test document upload. [Example](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/form526/form526_locust.py#L94)
1. Test form submission. [Example](https://github.com/department-of-veterans-affairs/devops/blob/master/loadtest/form526/form526_locust.py#L102)
