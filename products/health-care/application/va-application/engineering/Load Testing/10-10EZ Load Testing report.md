# 10-10EZ Veteran Health Care application - Load testing report
 

## Background

In order to validate that the 10-10EZ form on VA.gov service can handle production loads, load testing was performed on 08/28/2023-8/31/2023. Tests were performed to:

* test anticipated production loads, at 10x the usual volume

For every 1 application submitted, a request was made through the staging VA.gov reverse proxy to validate performance and that the applications were submitted successfully.


## Issues discovered during testing


### v0/hca_attachment fails at higher than 4 users per second

#### Background

- File size 1.1mb used for document uploads to attach with the 10-10EZ
- Test was run with 750 users at 10 per second, and again at 2 per second.

1. When many simultaneous connections are made to the file upload api, the postgres error "FATAL:  remaining connection slots are reserved for non-replication superuser connections" occurs. 
- File uploads will fail until the load decreases to the point where the postgres connections are no longer maxed out.

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

**500 users at 2 per second**
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 6,486 |  1,566   | 2 request per second |
|POST v0/health_care_applications | 6,824 | 23 |  2 request per second |
|GET v0/maintenance_windows  | 322  | 0   | 2 request per second |

#### Resolution

Changes(?) need to made to both vets-api and devops repos to test on preprod


## Baseline:

- In production during the last week (8/20/23-8/26/23), there was 4180 successful submissions and 4 failures.
- Over the last 7 months, there is a daily submission average of 6 applications that include file attachments for the 10-10EZ.  
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

...
100 users at 2 requests per second

### Results

**100 users at 2 requests per second**
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 1535 |  13   | 2 request per second |
|POST v0/health_care_applications | 1598| 6  |  2 request per second |
|GET v0/maintenance_windows  | 100  | 0   | 2 request per second |


**249 requests at .42 requests per second**

Below are the results for form submissions that all include a 5mb file upload: 249 requests at a rate of 0.42 requests per second and 16 failures. There were some failures but since we have a retry system they should all go through in the end.

| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/health_care_applications | 249| 16  |  0.42 request per second |


![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/58eab16e-31dd-4655-a77f-da6918f3c621)


### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/4c2b7bed-0a2a-4e14-b2a1-767f3e717c30)

### latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/4035c419-617f-4b6d-82c7-8cbe6fd19dca)

### network bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/4b87774b-8451-4ef1-87de-002dbcd244e5)

### network bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/23df1d4b-2042-45f5-aa6b-1e5f0bbeec13)




## Conclusion


### Summary - TBD

The 10-10EZ application’s performance is very good, with an acceptably low failure rate and ...... 

We are confident that the application is ready to support the increased traffic that is expected with the PACT Act special enrollment period.


### Additional conclusions



## Supporting Materials

**EXAMPLES BELOW**

* [Locust test definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/locustfile.py)
* [Baseline test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/baseline_test.html)
* [Production load test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/production_load_test.html)
* [Stress test report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/url-shortener/supporting_docs/stress_test.html)
