# Enrollment Statuses

Worked through over email with Josh Faulkner and additional emails/calls with HEC administrators.

## All Applicants

For all applicants, we can reflect back the date they applied.

For people with multiple applications, we can only reflect back multiple dates if that person was enrolled in health care, canceled it, and then applied again.

## Verified

This means and application has been acccepted and the veteran has been enrolled in VA health care.

For people who are enrolled in health care, we know:

* When they enrolled
* Their VAMCs — The ES has the preferred facility field which is their home base/primary care facility.
  * MVI is the source for all the VAMCs where the person is known/has been to. 

## Pending

### Pending; Means Test Required

This is a pending application waiting for financial disclosures. Veteran can submit this paperwork to move application forward.

### Pending; Eligibility Status is Unverified

Two use cases here:

1. Application is newly submitted and has this status. According to Josh Faulkner:

> Not all applications submitted on va.gov are individually reviewed; only if they end up a pending status.
The initial application for a new person will always very first be set to Pending; Eligibility is Unverified.
Then, background processing kicks off the verification process for the system to automatically determine eligibility and enroll them. If the person is automatically enrolled there is no specific need for someone to review the application; you can be enrolled within 5 mins of submitting the application on va.gov, in the happy path flow.  
2. If someone's eligibility can not be determined automatically, then it needs to be reviewed manually. Veteran can submit DD214 to move this forward: 
> If data cannot be obtained to automatically verify eligibility then the record stays in pending status and get worked by the staff. There is not a status in ES that signifies – “application assigned to Mr. Smith, reached out to the veteran, status is waiting on reply from the veteran for more information” That kind of intermediate review status is all internal to the HEC staff; from a system perspective the enrollment status is just pending until it’s completed.

### Pending; Other

This is a catch-all pending category that is "pretty rare." According to Josh Faulkner:

> Pending Other is a legacy status; although there are still some records around like that just because they have not been touched in very long time. That status applies to records where the eligibility status is unknown, currently the eligibility status cannot be null, it must be one of: verified, pending verification, pending re-verification.
 
> Old legacy records that are pending with a null eligibility status fall into Pending Other; for all intents and purposes it is the exact same thing as Pending; Eligibility is Unverified.

Veteran should contact their VAMC for info on how to move forward.

### Pending; Purple Heart Unconfirmed

This is a pendng application waiting for verification of having received a purple heart.

## Rejected; Below Enrollment Group Threshold

Applications that are rejected are for people who are eligible to receive VA healthcare based on the length (ie. at least 24 months of service) and character of their service but who are not eligible based on other needs (eg. income or a SC disability). Someone may be rejected at one point and then may be accepted later on.

For this population, we can communicate to them that they should apply again if their circumstances change.

## Deceased

These are applications that are submitted for someone who is deceased, OR a status change that happens to someone's application after they die.

## Cancelled/Declined

This is a status for someone who had VA health care and then opted out of it (eg. they may have gotten private health care elsewhere).

## Not Eligible

This is the status for people who do no qualify for health care based on length or character of service (eg. did not serve long enough; had a discharge status that did not qualify) or certain other circumstances.

### Not Eligible; Ineligible Date

"Ineligible date" just means that a date was entered for when someone was determined ineligible. This is the most frequent designation given for ineligible applications.

**Reasons for ineligibiity**

Reasons for ineligibility are entered in a free-form field. Common reasons for ineligibility include:

* Someone served fewer than 24 months of active duty.
* Someone has not served long enough because they were only activated for training purposes (eg. active duty training).
* Someone is a national guard or reservist and either was not activated at all or was activated for too short a period of time (ie. less than 24 months).
* Someone has an ineligible character of service.
* Someone's military service can not be verified.

Less common reasons for ineligibility include:

* CHAMPVA — Apparently, people with CHAMPVA are eligible for HC but only at certain facilities. We are not sure why some of these people are deemed "ineligible" instead of "rejected," and why they are not routed to facilities where they would be eligible.
* Someone is a fugitive or felon.

Reasons listed for ineligibility that we aren't quite sure what they mean or what they have to do with eligibility:

* Medicare – These people are eligible and it is unclear whether the people we saw marked as "not eligible" are truly ineligible and the correct reason was not noted or if this is a mistake.
* Over age 65 — These people are eligible and it is unclear whether the people we saw marked as "not eligible" are truly ineligible and the correct reason was not noted or if this is a mistake.
* Filipino Scouts/Not a Citizen – This sounds like being a Filipino Scout or a non-citizen alone does not render you ineligible — what this depends on is if you are a veteran of certain foreign militaries AND a non-citizen. Either one in isolation is fine. So, you could be a Filipino Scout and now a US citizen, OR you could be a non-citizen but a member of the US military and you would be eligible.
* Need to verify financials/Income too high (these people should technically be "rejected" unless there is another reason for ineligibility).
* No SC disibility (these people should be rejected unless there is another reason for ineligibility).

### Not Eligible; Refused to Pay Copay

This is a status given to people who are either a) accepted into the healthcare system but then at some point refuse to pay their copay (not 100% sure when this is happening, but Lisa Palmer mentioned something about VISTA and Neshelle Thaxton mentioned something about the live enrollment process); or b) by them refusing to provide income on their means test.

We asked why these people aren't rejected instead, and didn't get a straightforward answer. Neshelle Thaxton says they _are_ rejected, but we're not sure why the label is "Not Eligible...".

## Not Applicable 

Not Applicable is an enrollment status that applies to all non-vets (service members, employees, collaterals, caretakers, allied veteran, other federal agency).

Service members are differentiated from these other user types by the designation that they have Tricare and/or a sharing agreement. Josh Faulkner shared this snippet of code:

Non-veteran eligibility codes of Tricare or Sharing Agreement identifies active duty members.
 
`<primaryEligibility>
                  <indicator>P</indicator>
                  <eligibilityReportDate>2017-11-09T14:02:27.000-06:00</eligibilityReportDate>
                  <type>TRICARE</type>
               </primaryEligibility>
<secondaryEligibilities>
                  <eligibility>
                     <indicator>S</indicator>
                     <eligibilityReportDate>2017-11-04T00:14:27.000-05:00</eligibilityReportDate>
                     <type>SHARING AGREEMENT</type>
                  </eligibility>
               </secondaryEligibilities>`

### Service members

There are two circumstances in which Service Members might be in the enrollment system:

- They have applied for health care.
  - HCAs from Service Members are processed right away but not given a final determination until there are discharged. They are flagged as ‘future discharge date’ record in a NA status until then. Service members are kept as a non-vet, and the ESR does not add the application date until their discharge date is reached.
  - This means that once they are discharged, they become like any other veteran and move to a Pending/Enrolled/Ineligible/Rejected status as is determined by their application.
  - Once they are discharged and enrolled they get contacted the same way as others. 
- While in the service, they have received care at a VA Medical Center because they are stationed somewhere where a VAMC happens to jointly treat Veterans and Service Members. This group is known to ESR but would still need to apply for VA health care in order to receive it.

**Service Members can only apply for health care if they have their separation orders and if they are within one year of separation**.

### Non-service members

This is our understanding as of now. It sounds like there are 4 scenarios:
 
- Non-veteran/non-service members who have received care at a VAMC but are not otherwise eligible for VA health care (eg. someone who went to a VAMC emergency room instead of the ER at a non-VA hospital).
- Non-veteran/non-service members who are eligible for/are enrolled in VA health care (eg. eligible care takers and family members).
- Non-veteran/non-service members who are known to VA because they make appointments on behalf of veterans (eg. caretakers) but are not enrolled in VA health care themselves.
- Random people who are not eligible for VA health care but have submitted a health care application for some reason. I would assume this would be an outlier case but still technically possible.

## Closed Application

This is a status given to applications that were pending but veterans never responded with the supplemental information the HEC needed. Submitted applications are closed after a year if the supplemental materials needed are never submitted.

## People in the ES who have not applied for health care

* There are people in the enrollment system who have not applied for health care. They got in there because they had a comp & pen exam and were entered into VISTA at that time.
>In vista registration, they will get to a screen with a question ‘do you want to enroll’ (or something like that) – if you answer No, then you can skip the rest of the enrollment fields such as enrollment application date, preferred facility, financial information, etc. That is what is known as a registration-only record; meaning they are registered in VHA and in ES, but did not apply for health care benefits, registered only for VBA disability benefits.
* For the people in this category for whom eligibility can be verified, they are **automatically enrolled in health care**, but they do not have an application date.
* For the people in this category whose eligibility can not be verified, they are put into a pending status until someone on the enrollment team can review them. They will not have an application date.
* Once someone from the enrollment team reviews an applicant’s case, their status changes to whatever circumstances apply (enrolled, rejected, etc) based on that review. By the time the review closes, they are supposed to have an application date added (but this doesn’t happen reliably).

## Next Steps

**For all of these, people are supposed to call the Enrollment Case Management Team 1-877-222-VETS(8387). I'm not sure how we can verify if these are the right steps or not.**

* What can a veteran do to correct their records if the following things are incorrect:
  * Their length of service (ie. service >24 months)?
  * Their discharge status?
  * No proof of military service?
  * The veteran is recorded as deceased?
* If a veteran's application is pending, how can they go about submitting the following:
  * Financial disclosures?
  * Proof of service?
  * Proof of being a Purple Heart recipient?
* Who can a veteran contact if they have questions about the following:
  * What the VA has recorded for their length of service? (assume they are ineligble)
  * What the VA has recorded for their character of service? (assume they are ineligble)
  * That VA does not have proof of service? (assume they are ineligble)
  * That the veteran is recorded as deceased?
  * Applying for healthcare at the VA while they are still a service member?
  * How to submit paperwork (financial disclosures, proof of service, Purple Heart) to move forward a pending application?
  * Anything about their applications decision (eg. why they are ineligible or rejected, etc)?
