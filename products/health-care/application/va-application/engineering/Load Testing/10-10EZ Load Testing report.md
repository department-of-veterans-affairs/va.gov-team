# 10-10EZ Veteran Health Care application - Load testing report
 

## Background

In order to validate that the 10-10EZ form on VA.gov service can handle high production loads, load testing was performed on 08/28/2023-8/31/2023. Tests were performed to:

* test anticipated production loads, at at least 10x the usual volume


## Issues discovered during testing


### v0/hca_attachment fails at higher than 30 requests per second in staging environment (production environment has increased capacity)

#### Background
- Parameters
     - File size 1.1mb used for document uploads to attach with the 10-10EZ
     - Test was run with 200 users at 2 per second.

- When >30 simultaneous connections are made to the file upload api, the postgres error "FATAL:  remaining connection slots are reserved for non-replication superuser connections" occurs. File uploads will fail until the load decreases to the point where the postgres connections are no longer maxed out.
     - What is the connection pool issue exactly?
          - The connection pool multiplied by the number of servers and threads that the application is running is overloading the max connections allowed by the postgres database server (this is what I think is happening but I'm not 100% sure it's the cause).

| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 1901  |  2   | 25.6/s |
|POST v0/health_care_applications | 1926 | 8 |  26.0/s |
 
#### Resolution

- What steps are needed with Platform to resolve (if we know the steps)?
     - Change the connection pool variable so that the total number of application connections is less than the max connections allowed by postgres, then run the load test again and see if errors still occur. - Ticket [#65026](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65026) created for our team to work with Platform team on the resolution.
- If not fixed now, what does this mean for increased volume in production?
     - If there is greatly increased volume then users could experience random errors when calling any endpoint that uses the postgres database (including 1010ez attachment upload and 1010ez form submission).
- What is the liklihood that we will encounter this issue, as it is way over (how many times?) the usual volume of applications with attachments?
     - There are regularly around 4200 form submissions in a week. Historically 1.6% of submission have included an attachment. So about 67 form submissions per week include an attachment. The attachment upload API is overloaded in staging at around 30 requests per second. If the submission load increased 10x, then there would 670 form attachment uploads per week. That is still unlikely to overload the 30 request per second limit.


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

