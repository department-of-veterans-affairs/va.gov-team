# Check-in URL Shortener Load testing report


## Background

In order to validate that the VA.gov URL shortener service can handle production loads, load testing was performed on 2/11/2022 according to the [performance testing plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/performance_testing.md). Tests were performed to:



* obtain baseline performance
* test anticipated production loads
* stress test at 150% of anticipated production loads

For every 10 URLs created, a request was made through the development VA.gov reverse proxy to validate performance and that the original URLs were accurately returned for the given short URL.


## Issues discovered during preparatory testing


### Authorization token verification latency


#### Background

During initial load testing, the average response time for the URL shortening endpoint was ~650ms. Investigation revealed that ~300ms of time were taken to retrieve the CHIP secret key and verify the incoming JWT token.


#### Resolution

The CHIP service layer was modified to store the secret key in an environment variable at deploy time instead of retrieving it from AWS Secrets Manager on each request in [PR #526](https://github.com/department-of-veterans-affairs/chip/pull/526). This improvement was applied to all CHIP endpoints doing JWT verification. After the PR, the average response time for the endpoint is ~300ms.


### Lambda concurrency limit


#### Background

During initial high volume load testing, an unacceptably high failure rate was seen, with the AWS API gateway returning 500 error responses without triggering the lambda function. Investigation revealed that the default per-account [Lambda execution concurrency limit of 1000](https://aws.amazon.com/about-aws/whats-new/2017/11/set-concurrency-limits-on-individual-aws-lambda-functions/) was being reached.


#### Resolution

The peak production system load is expected to be well below the current execution concurrency limit, and the improvements to the function response time also reduce concurrency. The CHIP team has been made aware of the issue, and will institute monitoring & alerting of the production execution concurrency.


## Test Run #1: Baseline


### Configuration

Single-threaded [Locust](https://locust.io) instance with one simulated user running for 5 minutes in Ubuntu on GFE.


### Results

| Endpoint           | # Requests | # Failures | Avg response (ms) | Requests / s |
| ------------------ | ---------- | ---------- | ----------------- | ------------ |
| Create short URL   | 1006       | 0          | 277               | 3.2          |
| Retrieve short URL | 100        | 0          | 341               | 0.3          |


## Test Run #2: Production Load Test


### Configuration

Single-threaded [Locust](https://locust.io) instance with 175 simulated users running for 10 minutes in Ubuntu on GFE.


### Results

| Endpoint           | # Requests | # Failures | Avg response (ms) | Requests / s |
| ------------------ | ---------- | ---------- | ----------------- | ------------ |
| Create short URL   | 292979     | 1          | 291               | 471.5        |
| Retrieve short URL | 29210      | 0          | 399               | 47.0         |

![total_requests_per_second_1644624045](https://user-images.githubusercontent.com/101649/153686676-f40bdd05-4090-47b3-8d80-b1a2d71940be.png)
![response_times_(ms)_1644624045](https://user-images.githubusercontent.com/101649/153686673-ec82afb9-5f6a-4e9c-a1d2-6a5e15fb8c71.png)

## Test Run #3: Stress Test


### Configuration

Multi-threaded [Locust](https://locust.io) instance with 3 threads and 250 simulated users running for 10 minutes in Ubuntu on GFE.


### Results

| Endpoint           | # Requests | # Failures | Avg response (ms) | Requests / s |
| ------------------ | ---------- | ---------- | ----------------- | ------------ |
| Create short URL   | 495550     | 9          | 271               | 825.9        |
| Retrieve short URL | 49423      | 0          | 292               | 82.4         |

![total_requests_per_second_1644623201](https://user-images.githubusercontent.com/101649/153686467-d8eb3dd5-1196-46bb-97d8-112a4b6f446a.png)
![response_times_(ms)_1644623201](https://user-images.githubusercontent.com/101649/153686531-75afd5ad-05a4-41ca-9d81-de23ac182178.png)



## Conclusion


### Summary

The URL shortener application’s performance is very good, with an acceptably low failure rate and very good average response times of below 300ms for both the creation API and end-user facing service. Proceeding with implementation is recommended.


### Additional conclusions

With somewhat north of 1 million shortened URLs created during testing with no retrieval errors, race conditions or hash collisions do not appear to be an issue.

As with any API, callers of the service should be able to tolerate occasional faults and implement retry logic, fail gracefully or both. A relatively short client timeout of ~5s is recommended when calling this API, since the general response time is extremely quick (99.99 percentile response time of 2300ms under heavy load) and a request that doesn’t succeed within a few seconds is quite unlikely to succeed at all.


## Supporting Materials

* [Locust test definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/locustfile.py)
* [Baseline test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/baseline_test.html)
* [Production load test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/production_load_test.html)
* [Stress test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/stress_test.html)
