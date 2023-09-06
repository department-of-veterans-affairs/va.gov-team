# 10-10EZ Veteran Health Care application - Load testing report
 

## Background

In order to validate that the 10-10EZ form on VA.gov service can handle high production loads, load testing was performed on 08/28/2023-8/31/2023. Tests were performed to:

* test anticipated production loads, at at least 10x the usual volume


## Issues discovered during testing


### v0/hca_attachment fails at higher than 20 requests per second in staging environment (production environment has increased capacity)

#### Background

- File size 1.1mb used for document uploads to attach with the 10-10EZ
- Test was run with 200 users at 2 per second.

1. When >20 simultaneous connections are made to the file upload api, the postgres error "FATAL:  remaining connection slots are reserved for non-replication superuser connections" occurs. File uploads will fail until the load decreases to the point where the postgres connections are no longer maxed out.

| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 1901  |  2   | 25.6 request per second |
|POST v0/health_care_applications | 1926 | 8 |  26.0 request per second |

#### Resolution

We will coordinate with platform to fix this issue.  TBD ON ACTUAL SOLUTION


## Baseline:

- In production during the last week (8/20/23-8/26/23), there was 4180 successful submissions and 4 failures.
- Over the last 7 months, there is a daily submission average of 6 applications that include file attachments for the 10-10EZ.  
     - The 7 month total 1,468 submissions with attachments/7 month total 91,187 submissions = 1.6% of submissions include an attachment.

## Test Run on Enrollment & Eligibility endpoint: Load Test


### Configuration

Staging environment

We tested 4,114 requests through the Enrollment & Eligibility endpoint, sending 6.86 requests per second.  This is at over 900x the usual volume.  This endpoint connects to both the HCA E&E API and the MPI API. There were no errors and the endpoint performed well under stress.

### Results
 
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
| Enrollment & Eligibility | 4,114  |  0      |   6.86/s        |

The MPI data in the screenshot is for a fake test user, not real PII.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/922286fe-f94f-4a60-a4c4-564ce1eda51c)


### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/ff61a1f6-a8d8-42a8-9089-e1c340a62f0c)

### api latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/b481f6aa-ffcd-4045-8655-649364b4c691)

### network bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/1234e96a-ee50-4d05-9e14-943e103404fc)

### network bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/1b9d458f-36c0-4197-bc82-03a335220b10)


## Test Run on Submissions and document uploads: Load Test


### Configuration

We tested with 100 "users" sending requests through the endpoints listed below at 2 requests per second, which is over 28k times the usual volume with file attachments.  There were some failures at less than 1% of the requests sent.  At this configuration, the test performed well, however we did notice increased failures at higher request counts with file attachments.  This is outlined in the [Issues Discovered section](#issues-discovered-during-testing) above.

### Results

#### Asynchronous submission test

**100 users at 2 requests per second**
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 1535 |  13   | 2/s |
|POST v0/health_care_applications | 1598| 6  |  2/s |
|GET v0/maintenance_windows  | 100  | 0   | 2/s |


#### Synchronous submission test

**249 requests at .42 requests per second**

We tested 249 requests at .42 requests per second, each including a 5mb file attachment, which is over 6k times the usual volume.  There were 16 failures, 6% of total requests. There is a retry function in place for these failures, and we have high confidence that the failures would be retried and submitted successfully.  
Note: Most submissions are asynchronous, which also decreases the chance of synchronous submission failures.

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


### Summary

There were issues with the file upload API under heavy load, see the [Issues Discovered section](#issues-discovered-during-testing). Errors start happening at around 30 requests per second in the staging enviroment (which has less resources to handle high load compared to production). However, historically only 1.6% of applications have included an attachment.  The expectation is that users will not experience errors at the 10x increased volume load.

The Enrollment & Eligibility API performed well in the load test with no errors. There were a small number of errors with the 1010EZ submission API, but since we use retrying background jobs to submit applications, submissions should eventually go through even if there are initial errors.

The application is generally ready to support the increased traffic that is expected with the PACT Act special enrollment period.  We will look into improving the file upload API to fix the issues we found during load testing.

