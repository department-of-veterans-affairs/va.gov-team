# Initial Discovery: Education/ Career Counseling (CH36)
March 25, 2020

## Background & Paper Form
Chapter 36 refers to its place in [Title 38 of the US legal code](https://www.law.cornell.edu/uscode/text/38/3697A) (check breadcrumbs) but doesn't really convey context, so when outside the team, try to use "Education/ Career Counseling."  (Title 38 is all about Veteran Benefits.  All the work we do, the power of the VA to provide benefits to the Veteran and their dependents, derives from this language.)  Technically anyone who is elgible for education assistance including CH33, which GI Bill, is also eligible  for this benefit.  All benefits that the VA offers, roll up to a single Veterans eligibility.  However you are related to that Veteran, that's how your eligibility is formed.

The paper form is [28-8832](https://www.vba.va.gov/pubs/forms/VBA-28-8832-ARE.pdf) and starts with applicant information (**PART I - APPLICANT INFORMATION**, _note: an applicant might not be the Veteran_), the next two parts are relevant where the Veteran may not be the one applying (**PART II - INFORMATION CONCERNING DISABLED OR DECEASED VETERAN OR INDIVIDUAL ON ACTIVE DUTY**, **PART III - SPECIAL INFORMATION CONCERNING APPLICANT**) where there is also a section asking if there has been an application for any of the following benefits: 
```diff
13.
A. VOCATIONAL REHABILITATION BENEFITS (Chapter 31)
B. VETERANS' EDUCATION ASSISTANCE BASED ON YOUR OWN SERVICE (Specify benefit)
C. DEPENDENTS' EDUCATIONAL ASSISTANCE (Chapter 35)
D. SURVIVORS' AND DEPENDENTS EDUCATIONAL ASSISTANCE (Complete Items 14A and 14B) on reverse)
E. OTHER (Specify)
F. NONE
```
Another notable section is **PART IV - APPLICANT'S MILITARY SERVICE** where more service information is requested and can be pre-filled from the Enterprise Military Information Service (eMIS) which gets its info from DoD.

The last two parts are centered around signatures (**PART V - CERTIFICATION AND SIGNATURE OF APPLICANT**, **PART VI - SIGNATURE OF PARENT, GUARDIAN, OR CUSTODIAN**)

In summary: Who am I? What has been my military service if any? And against what Veterans benefits am I claiming?

## General Notes on Current Application
This current EBN feature allows a Veteran to apply for education and career counseling services as they move out of service.  This is overseen by the TED (Transitional Education Development) Office.  It is a simple process where an authenticated Veteran walks up to the request and submits contact and historical information to the TED Office via Central Mail.  Currently there is a confirmation notification that the request has been submitted.

If you are not logged in and you still want to apply for Chapter 36, you should be able to. We may need adjust [the static landing page](https://www.va.gov/careers-employment/education-and-career-counseling/) to accommodate an unauthenticated user with a form that captures the relevant information manually instead of pre-filling, as well as remove unnecessary EBN instructions.  The new green button might say something like "**Login to apply**" as well as have a link to "**Start your application here**."

This feature can be found in EBN, after logging in, under **Additional Benefits** (Under "Things you can view here:") / **Vocational Rehabilitation and Employment** and can be initiated by clicking the blue button **"Request Counseling."**  There is a link to edit any information that looks like [this](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/discovery/images/pers-info.JPG).

![Additional Benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/discovery/images/addtl-benefits.JPG)  
_Additional Benefits (Under "Things you can view here:") / Vocational Rehabilitation and Employment_
![Authenticated View](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/screenshot.png)
_Authenticated View_

## Filtering for Eligibility
It would be great to pre-fill as much as possible but keeping this to one button click would be great.  It tough to know a future discharge date, but we _might_ be able to find out when they were separated from active duty, are in another education program and/or currently receiving VA education benefits (GI Bill eligibly is on the platform).  Again, while it would be super helpful to position this feature to send on only highly convertible candidates to the stakeholders, we should err on the side of sending more less than qualified and let the stakeholders make the final decision.

![Education/ Career Counseling Eligibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/discovery/images/eligible.JPG)  
_Education/ Career Counseling Eligibility_

## Technical
There is no backend system here, the stakeholders (TED) have requested that this form get PDF'd and sent to Central Mail, which routes it to the TED Office.  
**Side note:** DoD's system for military service, at the Pentagon, has a system called the Defense Enrollment Eligibility Reporting System (DEERS) which syncs with the VA system called VA Department of Defense Identity Repository (VADIR), every 30 minutes. Mentioned above, eMIS is a webservice that we can use to access information in VADIR.

## Use Cases
1. **I am a Veteran, and I want to apply for Education/ Career Counseling** (CH36), so that I can get help with:
- Counseling to help you decide which civilian or military jobs you want
- Educational and Career Counseling to help you find a training program or job
- Academic and adjustment counseling to help you deal with issues that get in the way of your success in training or employment
2. **I am related to a Veteran, and I want to apply for Education/ Career Counseling** (CH36) so that I can get help with:
- Counseling to help you decide which civilian or military jobs you want
- Educational and Career Counseling to help you find a training program or job
- Academic and adjustment counseling to help you deal with issues that get in the way of your success in training or employment

