# 10-10EZ Veteran Health Care application - Load testing report
 

## Background

In order to validate that the 10-10EZ form on VA.gov service can handle production loads, load testing was performed on 08/28/2023-8/31/2023. Tests were performed to:

* test anticipated production loads, at 10x the usual volume

For every 1 application submitted, a request was made through the staging VA.gov reverse proxy to validate performance and that the applications were submitted successfully.


## Issues discovered during testing


### v0/hca_attachment fails at higher than 4 users per second

#### Background

1.1mb File size used for document uploads to attach with the 10-10EZ
Test was run with 750 users at 10 per second, and again at 2 per second.
Failures increased as users increased.  

**750 users at 10 per second**
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/7b9b023e-3c3c-473c-bdea-eb13b6461353)

| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 25,145  |  9,234   | 10 request per second |
|POST v0/health_care_applications | 25,161 | 498 |  10 request per second |
|GET v0/maintenance_windows  | 750  | 0   | 10 request per second |

**750 users at 2 per second**
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 7,286 |  2,122   | 2 request per second |
|POST v0/health_care_applications | 7,262 | 373 |  2 request per second |
|GET v0/maintenance_windows  | 344  | 22   | 2 request per second |
#### Resolution

...


## Baseline:

In production during the last week (8/20/23-8/26/23), there was 4180 successful submissions and 4 failures.
Over the last 7 months, there is a daily submission average of 6 applications that include file attachments for the 10-10EZ.  
- The 7 month total 1,468 submissions with attachments/7 month total 91,187 submissions = 1.6% of submissions include an attachment.

## Test Run on Enrollment & Eligibility endpoint: Production Load Test


### Configuration

Staging environment
4184/(7 * 24 * 60 * 60) = 0.0069/s, or 944x normal throughput

### Results
 
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
| Enrollment & Eligibility | 4,114  |  0      |   6.86/s        |

 This endpoint connects to both the HCA E&E API and the MPI API. There were no errors. The MPI data in the screenshot is for a fake test user, not real PII.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/922286fe-f94f-4a60-a4c4-564ce1eda51c)

### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/ff61a1f6-a8d8-42a8-9089-e1c340a62f0c)

### api latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/b481f6aa-ffcd-4045-8655-649364b4c691)

### network bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/1234e96a-ee50-4d05-9e14-943e103404fc)

### network bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/1b9d458f-36c0-4197-bc82-03a335220b10)


## Test Run on Submissions and document uploads: Production Load Test


### Configuration

Multi-threaded [Locust](https://locust.io) instance with XX threads and XXXX simulated users running for XXXX minutes in Ubuntu on GFE.
100 users at 2 requests per second

### Results

| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 1535 |  13   | 2 request per second |
|POST v0/health_care_applications | 1598| 6  |  2 request per second |
|GET v0/maintenance_windows  | 100  | 0   | 2 request per second |

**INSERT IMAGES HERE**




## Conclusion


### Summary

The 10-10EZ application’s performance is very good, with an acceptably low failure rate and ...... 
We are confident that the application is ready to support the increased traffic that is expected with the PACT Act special enrollment period.


### Additional conclusions



## Supporting Materials

**EXAMPLES BELOW**

* [Locust test definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/locustfile.py)
* [Baseline test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/baseline_test.html)
* [Production load test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/production_load_test.html)
* [Stress test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/stress_test.html)
