# 10-10EZ Veteran Health Care application - Load testing report
 

## Background

In order to validate that the 10-10EZ form on VA.gov service can handle production loads, load testing was performed on 08/28/2023. Tests were performed to:

* test anticipated production loads
* stress test at 150% of anticipated production loads

For every 1 application submitted, a request was made through the staging VA.gov reverse proxy to validate performance and that the applications were submitted successfully.


## Issues discovered during testing


### ANY???


#### Background

...


#### Resolution

...


### ANY???


#### Background

...

#### Resolution

...

## Test Run #1: Baseline


### Configuration

Single-threaded [Locust](https://locust.io) instance with XXX simulated user running for XXXX minutes in Ubuntu on GFE.


### Results

last week there was 4180 successful submissions in production and 4 failures


## Test Run #2: Production Load Test


### Configuration

Single-threaded [Locust](https://locust.io) instance with XXXX simulated users running for XXXX minutes in Ubuntu on GFE.


### Results

 4114 test requests to the enrollment eligibility endpoint in the staging environment at a rate of 6.86 requests per second. This endpoint connects to both the HCA e&e api and the MPI API. There were no errors. The MPI data in the screenshot is for a fake test user, not real PII.

 so 4184/(7 * 24 * 60 * 60) = 0.0069/s, or 944x normal throughput
 
| Endpoint           | # Requests | # Failures | Avg response (ms) | Requests / s |
| ------------------ | ---------- | ---------- | ----------------- | ------------ |
| XXXX               | XXXX       |  XXXX      |  XXXX             |  XXXX        |
| XXXX               | XXXX       | XXXX       | XXXX              |  XXXX        |

**INSERT IMAGES HERE

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/922286fe-f94f-4a60-a4c4-564ce1eda51c)

## Test Run #3: Stress Test


### Configuration

Multi-threaded [Locust](https://locust.io) instance with XX threads and XXXX simulated users running for XXXX minutes in Ubuntu on GFE.


### Results

| Endpoint           | # Requests | # Failures | Avg response (ms) | Requests / s |
| ------------------ | ---------- | ---------- | ----------------- | ------------ |
| XXXX               | XXXX       |  XXXX      |  XXXX             |  XXXX        |
| XXXX               | XXXX       | XXXX       | XXXX              |  XXXX        |


**INSERT IMAGES HERE - EXAMPLES BELOW**

![total_requests_per_second_1644623201](https://user-images.githubusercontent.com/101649/153686467-d8eb3dd5-1196-46bb-97d8-112a4b6f446a.png)
![response_times_(ms)_1644623201](https://user-images.githubusercontent.com/101649/153686531-75afd5ad-05a4-41ca-9d81-de23ac182178.png)



## Conclusion


### Summary

XXXXX
The 10-10EZ application’s performance is very good, with an acceptably low failure rate and very good average response times of below 300ms for both the creation API and end-user facing service. Proceeding with implementation is recommended.


### Additional conclusions

With somewhat north of XXX 10-10EZ Applications started and submitted during testing with no retrieval errors, race conditions or hash collisions do not appear to be an issue.

As with any API, callers of the service should be able to tolerate occasional faults and implement retry logic, fail gracefully or both. A relatively short client timeout of ~5s is recommended when calling this API, since the general response time is extremely quick (99.99 percentile response time of 2300ms under heavy load) and a request that doesn’t succeed within a few seconds is quite unlikely to succeed at all.


## Supporting Materials

**EXAMPLES BELOW**

* [Locust test definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/locustfile.py)
* [Baseline test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/baseline_test.html)
* [Production load test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/production_load_test.html)
* [Stress test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/stress_test.html)
