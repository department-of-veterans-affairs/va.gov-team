# 10-10EZ Veteran Health Care application - Load testing report
 

## Background
- The 10-10EZ Veteran health care application is an online form that allows Veterans to apply for VA health care enrollment.
- List of endpoint dependencies include:
    - /v0/user/
    - v0/health_care_applications/
    - v0/health_care_applications/enrollment_status/
    - v0/in_progress_forms/1010ez/
    - v0/disability_compensation_form/rating_info

- List of API dependencies include
     - Vets-API
     - MPI API
     - HCA Enrollment System API
     - HEA Enrollment Eligibility API
     - GovDelivery API
     - BGS API
     - EVSS PCIU
---

## Enrollment status load test

- The Enrollment Eligibility endpoint **DESCRIPTION NEEDED** 
- This endpoint connects to both the HCA E&E API and the MPI API.

### Test configuration
We tested 4,114 requests through the Enrollment Eligibility endpoint, sending 6.86 requests per second. 

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
- The hca_attachments endpoint  **DESCRIPTION NEEDED** 

### Test configuration
- We tested 20 users at 2 requests per second, up to 8.81 requests per second, with a 1.2mb file attachment through the hca_attachments endpoint.  

### Results
| Endpoint           | # Requests | # Failures |  Requests / s |
| ------------------ | ---------- | ---------- |  ------------ |
|POST v0/hca_attachments | 5271 |  0   | 8.81/s |

#### cpu load
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/219deb4f-d12c-46d2-9f06-fc29c157e3d9)

#### latency
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/2e7e53e2-8d01-4cda-a821-681e25fd1443)

#### bytes sent
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/0519754e-a5c8-4015-9486-d4f0a5ac9328)

#### bytes received
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/830084/fc8c0bbe-cd09-4e8e-95c1-75f26a01176e)

### Findings / Issues
- There were no errors and the endpoint performed well under stress.

---

## Submission load test
- The health_care_applications endpoint  **DESCRIPTION NEEDED** 

### Test configuration
- We tested 249 requests at .42 requests per second with 5mb file attachment through the health_care_applications endpoint.  

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
While there were failures, there is a retry function in place and we have high confidence that the failures would be retried and submitted successfully.  
**NEED EXPLANATION OF FAILURES - WHY DO WE THINK THEY ARE OCCURING FOR THIS TEST?  OR IS THIS PART OF THE PLATFORM WORK WE WOULD NEED DONE?**

---

## Conclusion and recommendation
