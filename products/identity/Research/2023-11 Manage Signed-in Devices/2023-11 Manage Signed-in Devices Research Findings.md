# 2023-11 Manage Devices Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Manage Signed-in Devices, Core Identity team**

- [Research readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products[…]d-in%20Devices%20/Manage%20Devices%20-%20Research%20Readout.pdf)
- Researchers
  - Charlye Tran | charlye@bluetiger.digital
  - Clayton Zook | clayton.zook@oddball.io
 
    
### Research Goals:

-   Explore Veterans' knowledge of personal device management as well as management of concurrent sessions on multiple devices.
-   Explore Veterans' understanding of the use cases for device management and the security implications of multiple active sessions on various devices.
-   Test the user flow for how a Veteran would access device management and signing out of multiple devices at once.
    

### Research Questions:

1. Are there any potential concerns about ending sessions and signing people out of their accounts on all devices? (Review previous research on stickiness of sessions).
2. Does the prototype allow users to successfully navigate to and utilize the proposed user flow for managing their devices?
3. What updates to the user flow could we incorporate to make it more intuitive for Veterans?
4. Is there any confusion regarding connected applications and device management?
    
### Methodology:
-  Remote usability testing will evaluate the prototype with participants, in remote sessions over Zoom. We tested with both mobile and desktop users.

### Hypotheses and Conclusions:

1. Veterans will be split on their understanding of a rationale for signing out of all devices.
	-   Mostly False
2. Most Veterans will never have used the option of signing out of all of their devices on other websites.
	-   Mostly True
3. Veterans will need an explanation of the implications of signing out of all their devices in order to make an informed decision to proceed.
	-   False
4. Veterans will expect the platform to take accountability for their security e.g. if there are suspected instances of malware, phishing scams, etc. the VA.gov website will automatically end all user sessions and inform the Veteran.
	- Mostly True
5. Veterans are willing to sacrifice security for convenience of not having to sign back into their devices.
	-   False

### Key Findings (General):
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `PRDT: Login`, `PRDT: VA.gov Profile`,  `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`

-   Most Veterans did not have security concerns with being signed into concurrent sessions on their accounts. Some saw using the internet as having an inherent risk but did not consider signing out of their devices as primary safeguard.

	-   Related to Hypothesis 1

-   Most Veterans stated that they had not leveraged the sign out of all devices option on any other websites. A couple were able to state that they had signed out of a streaming account or Facebook account, but it took prodding for them to recall they had taken such an action.
  
	-   Related to Hypothesis 2, Question 3

-   Veterans did not have difficulty with choosing to sign out of their devices remotely when presented with the option and understood the inherent implications (that they'd lose their sessions and would be prompted to sign back in), and they did not express any hesitation to complete the action.

	-   Related to Hypothesis 3

-   Most Veterans recognized that the systems would sign them out after a certain time out period. However, they did not solely leave security considerations up to the platform(s)/applications; they also protected their accounts with MFA options when it wasn't too cumbersome or closed out their applications/browsers.

	-   Related to Hypothesis 4 and 5

-   Surprisingly, Veterans understood that being timed out was a security protocol intended to protect them so they understood that they would always have to re-enter their credentials to gain access to VA.gov. However, some Veterans expressed frustration at the time it took to complete logging in process, especially once MFA was added as an additional security measure.
    
	-   Related to Hypothesis 5
    
-   Most Veterans recognized that the systems would sign them out after a certain time out period. However, they did not solely leave security considerations up to the platform(s)/applications; they also protected their accounts with MFA options when it wasn't too cumbersome or they proactively closed out their applications/browsers.

	-   Related to Hypothesis 4 and 5

### Key Findings (Design):
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `PRDT: Login`, `PRDT: VA.gov Profile`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`

-   Veterans assumed that hitting the “sign out” option under their name/profile would sign them out of all devices.
	
    
-   Once Veterans were informed about the new manage devices feature, most were able to navigate to the “Account Security” card to find the option.  
    
-   Veterans desired a confirmation prior to and after signing out of a singular device and all devices.

  

### Key Findings (Password):
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`

-   Most Veterans we spoke to used password management options through their phone or computer. Some still used pen and paper or memory to keep track of their passwords.
    
-   Some Veterans used MyHealtheVet because it allowed them to keep using their same passwords year after year.
    
-   Several of the Veterans used MFA during the sign on process.
    
-   Most Veterans would attempt to change their password if they suspected their accounts were tampered with or there was a sign in from a device they did not recognize.
    

  

### Key Findings (Connected Apps):
Labels: `Accessibility`, `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `PRDT: Login`, `PRDT: VA.gov Profile`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`

-   Veterans don’t know or understand what connected apps are and have not connected other applications to their VA.gov accounts. None reported connecting any devices e.g. a fitness tracker to their account.


### Recommendations

#### Recommendations - Manage Devices (current feature)

|   | Recommendation  |
|---|---|
| 1 | Indicate time period for which the devices are shown e.g. 45 days.  |
| 2 | Replace sign out button with “signed out” for devices that are no longer active.  |
| 3 | Add in disclaimer that the user will be signed out of all sessions including the current session and will need to sign back in if they confirm “sign out of all devices”.  |
| 4 | Hyperlink “changing your password” in the body text.  |
| 5 | Work with Danielle Thierry  to create a communication plan for feature roll-out since this is a new user experience.  |

#### Recommendations - Future Feature Enhancements

|   | Recommendation  |
|---|---|
| 1  | Under Account Security, add in a bullet for “Manage Devices”  |
| 2  | Research on how we might align how the “manage devices” feature can be leveraged to protect account security (alongside features like changing your password and etc.)  |
| 3  | Gather metrics and conduct further research to identify future features  |



#### Recommendations - Security

|   | Recommendation  |
|---|---|
| 1  | Users have an expectation that they will be automatically sign out of their sessions in 30 minutes; if we are extending this time period to 45 days, Veterans should be educated on the security implications of concurrent sessions. |
| 2  | Collaborate with CSPs to ensure how we might educate Veterans on account security is consistent, e.g. password management, password reset, usage of MFA, etc. |
| 3  | Consider proactive measures to warn Veterans about suspicious sign-ins from new devices or locations. |



### Who we talked to 

**Recruitment criteria**

See also our [Research Plan section on recruitment criteria](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/433) 

We recruited participants who either used their desktop or mobile devices to access Va.gov.  We wanted a mix between the various devices in order to test this new user flow.

We talked with **13 participants** out of 15 participants who were recruited

Gender:
* Male: 6
* Female:  7

LGBTQ+:
* Transgender:  x
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: 5
* Tablet: 0
* Smart phone: 8
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 1
* 45-54: 2
* 55-64: 4
* 65+: 6
* Unknown: 0


Education:
* High school degree or equivalent: 2
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 2
* Master's degree: 5
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 10
* Rural: 3
* Unknown: 13


Race:
* White: 9
* Black: 1
* Hispanic: 0
* Biracial: 1
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 5


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* We didn't get a completed session with any users who identified as LGBTQ+.
* We didn't talk with anyone who identitfies as Black.
* We didn't speak to anyone who leveraged an assistive device.
