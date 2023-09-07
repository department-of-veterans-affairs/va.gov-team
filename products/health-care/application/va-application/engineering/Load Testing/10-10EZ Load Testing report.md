# 10-10EZ Veteran Health Care application - Load testing report
 

## Background
- The 10-10EZ Veteran health care application is an online form that allows Veterans to apply for VA health care enrollment. 
- List of endpoint dependencies include:
    - /v0/user/
    - v0/health_care_applications/
    - v0/health_care_applications/enrollment_status/
    - v0/in_progress_forms/1010ez/
    - health_care_application/rating_info

- List of API dependencies include
     - Vets-API
     - MPI API
     - HCA Enrollment System API
     - HCA Enrollment Eligibility API
     - GovDelivery API
     - VA Profile API
     - BGS API
     - EVSS PCIU
---

## Enrollment status load test

- The Enrollment Eligibility endpoint. This endpoint is used for checking if an applicant is disqualified from the 1010EZ or has already applied.
- This endpoint connects to both the HCA E&E API and the MPI API.

### Test configuration
We tested 4,114 requests at 6.86 requests per second through the Enrollment Eligibility endpoint, at over 900x usual volume.

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

## Document upload load test
- The hca_attachments endpoint. This endpoint is used for uploading attachments to be submitted with the health care application (for example a scan of the veteran's DD214).

### Test configuration
- We tested at 1 request per second, with a 1.2mb file attachment through the hca_attachments endpoint, at 10,000x the usual volume.  

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
- There were no errors and the endpoint performed well under stress.
     - Note: We tested at extreme levels of more than 100,000x the usual volume and saw connection pool errors. These errors exist in the testing environment, and are not expected in production.  These errors have no impact on our conclusion.

---

## Submission load test
- The health_care_applications endpoint API is used for submitting the health care application.

### Test configuration
- We tested 249 requests at .42 requests per second with 5mb file attachment through the health_care_applications endpoint, at 60x usual volume.

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
The failures during this test was determined to be a result of connection pool errors from the enrollment system.  
We do not expect to see these errors in production, which has a higher connection pool setting. The 10-10EZ has a retry function in place and we have high confidence that in the event failures are experienced, they would be retried and submitted successfully.  
The failures we saw during this test have no impact on our conclusion.

---

## Conclusion and recommendation
- In conclusion, we are confident that the resources we tested are well prepared for 10x normal load.
