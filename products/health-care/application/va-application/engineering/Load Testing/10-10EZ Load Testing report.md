# VA.gov 10-10EZ Veteran Health Care application - PACT Act readiness load testing report
 

## Background
The VA.gov 10-10EZ Veteran health care application allows Veterans to apply for VA health care. The frontend web application depends on vets-api as an interface with various VA systems. The specific vets-api endpoint dependencies for the VA.gov 10-10EZ are:
    

    - GET v0/health_care_applications/enrollment_status
    - POST v0/hca_attachments
    - POST v0/health_care_applications
 
These endpoints and their downstream dependencies are the subject of the load tests detailed below.

In addition, accessing the 10-10EZ in an authenticated state generates calls to:

    - GET, POST, PUT v0/in_progress_forms/1010ez
    - GET v0/health_care_applications/rating_info
    - GET v0/user

The teams responsible for these endpoints and related resources will be conducting their own PACT Act readiness assessment.
 
## Enrollment status load test (v0/health_care_applications/enrollment_status)

The Enrollment Eligibility endpoint is used for checking if an applicant is disqualified from the submitting a 10-10EZ or has already applied. This endpoint depends on the VES Enrollment and Eligibility system and the MPI system.

### Test configuration
We tested 4,114 requests at 6.86 requests per second through the Enrollment Eligibility endpoint, which is ~900x usual volume.

### Results
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
| Enrollment Eligibility | 4,114  |  0      |   6.86/s        |


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

## Document upload load test (POST v0/hca_attachments)
- The attachments endpoint is used for uploading optional attachments to be submitted with a completed 10-10EZ health care application, such as a DD214. Typically 1-2% of 10-10EZ submitted on VA.gov include attachments.

### Test configuration
- We tested at 1 request per second, with a 1.2mb file attachment through the hca_attachments endpoint, at ~10,000x the usual volume.  

### Results
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 55 |  0   | 1/s |

### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/fd02bbca-ad65-4bdc-b84c-0a6563ef6ea0)

### latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/e9444997-5899-43c4-9efa-389809b13ad7)

### bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/317a2df9-f395-41ec-9b2c-c3f80b98eb29)

### bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/51251d42-c26b-47ab-9ffa-dfccbb77410d)


### Findings / Issues
- There were no errors and the endpoint performed well under stress. _Note: previously, we tested at more than 100,000x the usual volume and saw connection pool errors between vets-api and its backing Postgres database. The issue has been ticketed and we are working with the VA.gov platform team to resolve. However, given the extreme level of load used in the test, these errors have no impact on our conclusion._

---

## Submission load test
The health_care_applications endpoint API is used for submitting the health care application.

### Test configuration
We tested 249 requests at .42 requests per second with 5mb file attachment through the health_care_applications endpoint, at 60x usual volume.

### Results

| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/health_care_applications | 249| 16  |  0.42 request per second |

### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/4c2b7bed-0a2a-4e14-b2a1-767f3e717c30)

### latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/4035c419-617f-4b6d-82c7-8cbe6fd19dca)

### network bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/4b87774b-8451-4ef1-87de-002dbcd244e5)

### network bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/23df1d4b-2042-45f5-aa6b-1e5f0bbeec13)

### Findings / Issues
There was a 6.4% error rate for this test. The failures were a result of maxing out available connections with the downstream VES Enrollment and Eligibility system's lower environment. We've reviewed the results with the VES team and have determined that this the connection pool in the lower enviroment is configured to a higher level in production. We conclude that this type of failure would not be replicated in production under the load tested here. In addition, vets-api has queuing and retry functionality implemented for 10-10EZ submissions to the Enrollment and Eligibility system. This means that any failed submissions are retried up to 25 times over a span of 3 days.

---

## Conclusion and recommendation
In conclusion, we are confident that the resources we tested are well prepared for 10x normal load. We recommend close monitoring of all resources discussed above during the weeks leading up to 9/30 and coordination with downstream system owners.
