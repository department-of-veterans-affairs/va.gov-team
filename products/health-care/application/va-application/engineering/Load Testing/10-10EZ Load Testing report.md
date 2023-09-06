# 10-10EZ Veteran Health Care application - Load testing report
 

## Background
- The 10-10EZ Veteran health care application is an online form that allows Veterans to apply for VA health care enrollment.
- list of dependencies (both in internal and external to VA.gov
---

## Enrollment status load test
- **description** of what the this endpoint does
- This endpoint connects to both the HCA E&E API and the MPI API.
### Test configuration
We tested 4,114 requests through the Enrollment & Eligibility endpoint, sending 6.86 requests per second.  This is at over 900x the usual volume. 
### Results
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
| Enrollment & Eligibility | 4,114  |  0      |   6.86/s        |

The MPI data in the screenshot is for a fake test user, not real PII.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/922286fe-f94f-4a60-a4c4-564ce1eda51c)


#### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/ff61a1f6-a8d8-42a8-9089-e1c340a62f0c)

#### api latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/b481f6aa-ffcd-4045-8655-649364b4c691)

#### network bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/1234e96a-ee50-4d05-9e14-943e103404fc)

#### network bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/1b9d458f-36c0-4197-bc82-03a335220b10)

### Findings / Issues
- There were no errors and the endpoint performed well under stress.
---

## Document upload load test
### description of what the this endpoint does
### test configuration
- 
### results
### findings / issues
---

## Submission load test
### description of what the this endpoint does
### test configuration
### results
### findings / issues
---

## Conclusion and recommendation
