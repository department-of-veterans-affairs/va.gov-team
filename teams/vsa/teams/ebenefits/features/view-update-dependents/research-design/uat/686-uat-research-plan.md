# Research plan for user acceptability testing (UAT) for Form 21-686c / staging environment
**VSA eBenefits Team | June 2021**

`James Adams, designer/researcher`

---

#### Background
VA uses the 21-686c (686) form to collect and process the information to allow a Veteran to add dependents to their disability claim. The same form is used to remove dependents who have left the household of the Veteran (death, divorce, marriage). The eBenefits team will conduct Acceptance Testing (UAT) ahead of launch, then closely monitor analytics to ensure the form is generating viable submissions across all 686 workflows.

#### Note regarding UAT
We're requesting that Perigean recruit Veterans who need to add (or remove) a dependent from their disability claim. This usually involves submitting a paper 686 or going to eBenefits. We realize that it may be difficult to find Veterans with such specific needs, but we need to ensure that actual claims go through, vs. submitting inaccurate claims and later asking that they be modified or removed.

For those Veterans we talk to in UAT, we intend to be very transparent about what we are testing--it's an actual, functioning form. We will be asking our (BGS-RBPS) partners to keep watch for the submissions coming out of UAT, while we watch for problems and errors in real time. Any PII that does need to be conveyed to partners (BGS-RBPS) outside of  UAT, will be handled securely either verbally or via Microsoft Teams (end-to-end encryption). We will be observing the transaction, But not recording it, and this will also be clearly communicated to the UAT participant.

In the event that we don’t get any Veterans that meet our criteria, or we can't find any who are comfortable displaying live/personal data, we may toggle the feature “on” to as tiny a percentage as possible, capture a small number of submissions during a "quieter" time of the week, and then revert back to eBenefits while we take some time to validate the small number of naturally gained submissions. With feature toggles we can control access quickly and with granularly. Again, we want to keep the data being collected real and accurate. In this scenario, it may take longer to get the volume of valid VA.gov submissions to 100%, but as our confince in the new feature increases, we should be able to accelerate to full deployment. 

One of the tasks we are looking into right now is ensuring that that RBPS can differentiate from legacy submissions coming from eBenefits vs VA.gov. We would also be amenable to working with Veterans via VSO’s that might know of someone in need of making a dependency change.

### Goals
- Confirm all form fields and workflows are available
- Confirm form collects data and advances as expected
- Confirm data successfully submits as input
- Confirm status of dependency claim properly displays in claim status tool

#### Key guiding question
Can users quickly and easily add and/or remove dependents from their disability claim?

### Method
We will engage in moderated User Acceptance Testing (UAT) conducted remotely using Zoom. Veterans with a need to add or remove dependents from their disability claims will be recruited, and will be given access to the new 686. Participants will use the form to apply to have their dependents changed. Remote observers and note takers may be in attendance.

#### Success criteria

Users will:
- Enter the form
- Select the desired form actions (workflows)
- Navigate the form
- Upload documents as needed
- Review and submit form
- Form will successfully submit to BGS for processing

#### The process

- There will be a quick introduction to UAT
- The participant will be guided to the 686 intro
- The user will proceed through the 686 and submit
- Participants will be advised as to what expect during processing
- There will be a quick Q/A and wrap-up 
- Success will be measured as 80% of participants can successfully submit their 686, with the remaining 20% having a straight-forward remediation path

### Participants & recruiting
Participants will be recruited via Perigean. The study will require Veterans who have a need to add or remove a dependent (or dependents) form their VA disability claim. Sessions will run between 30 and 45 minutes depending on the workflow, and potential technical issues; sessions should be scheduled for 45 minutes, and at least 30 minutes apart.

Recruit for a **minimum of 3** fulfilled sessions using the following criteria:

#### Must have for participants

- Do you have verified disability rating of greater than 30%? (pass = yes)
- Do you need to submit a 21-686c (or 21-674) to do one or more of the following (pass = yes):
  - Add a spouse
  - Add a child
  - Add a child (age 18 to 23) who is about to enroll or has enrolled in college (or other training/schools)
  - Remove a divorced spouse
  - Remove a deceased dependent (parent, spouse or child)
  - Remove a married child (under 18)
  - Remove a child (age 18 to 23) who has left school
- Are you LOA3 (identity verified) on VA.gov? (pass = yes) 
  - This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. 

#### Good to have for participants

- At least 1 woman
- At least 1 person of color
- At least 1 participant 35 or under and 1 participant over 55
- At least one person that does not have a college degree (to include enlisted Vets)
- At least one person that has a college degree (to include of officer Vets)
- At least one person who lives in a rural or remote area
- At least one person who lives in a major metropolitan area

#### Recruitment requirements

- The participants have Zoom downloaded prior to the session
- The participants know how to screenshare

**Note:** we do not expect to cover every scenario in the "Must have" criteria above. Priority scenarios are (in order):
- Add a spouse
- Add a child
- Add a child (age 18 to 23) who is about to enroll or has enrolled in college (or other training/schools)
- Remove a divorced spouse
- All others

**Important:** Certain scenarios will require the participants to gather information or documents. If possible, participants should review form instructions (will be provided) ahead of their UAT session.

#### eBenefits Team Availability
We're providing a two-week window due to potential difficulty in recruiting users who need to add dependents to their disability claims.

**Team availability**
| Dates | Times (EDT) |
| --- | --- |
| June 21 | 9 AM to 5 PM |
| June 22 | 9 AM to 5 PM |
| June 23 | 9 AM to Noon |
| June 24 | 9 AM to 5 PM |
| June 25 | 9 AM to 5 PM |
| June 28 | 9 AM to 5 PM |
| June 29 | 9 AM to Noon |
| June 30 | 9 AM to Noon |
| July 1 | 9 AM to 5 PM |
| July 2 | 9 AM to 5 PM |

- Schedule sessions as 30-minute blocks
- Please leave at least 30 minutes between sessions 

### Team members
- James Adams | jadams@governmentcio.com -- Moderator, designer
- Candy Clark | cclark@governmentcio.com -- Researcher, designer
- Jason Wolf | jwolf@governmentcio.com -- eBenefits product manager
- Kathleen Crawford | kcrawford@governmentcio.com -- Backend engineer
- Micah Chiang | micah@adhocteam.us -- Frontend engineer
- Jesse Cohn | jesse.cohn@adhocteam.us -- Frontend engineer
- Sabrina Mohamed | sabrina.mohamed@va.gov -- Product Co-Owner
- Perigean -- Participant recruiting & screening, notetaking
- Note-takers -- Various as available
- Observers -- various as available
- Others -- Pending

### Resources
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/uat/686-uat-convo-guide.md)

---

### Required information & documentation to submit 21-686c
#### To add a spouse, you need to know:

Spouse’s:
- Name
- Address
- Social Security number
- Date of birth
- Marriage date
- Place of marriage (state, country, city)
- Names of former spouses

Applicant’s former spouses: 
- Names
- Marriage start and end dates
- Places marriage started and ended (state, country, city)

**You’ll need documentation:**

IF the marriage was not a religious or civil ceremony OR IF the Applicant lives outside of the U.S. (bases are considered within the U.S.)

What you’ll need:
- A copy of the original marriage certificate OR
- An affidavit of the clergyman or magistrate who conducted the marriage ceremony OR
- Affidavits or certified statements signed by two or more witnesses who attended the marriage ceremony OR
- The official report from your branch of service showing a marriage happened while you were in service OR
- Other documents will be considered

Documentation can be a JPEG, JPG, PNG or PDF file.

#### To add a child, you need to know:

Child’s:
- Name
- Address
- Social Security number
- Date of birth
- Place of birth (state, country, city)

**You’ll need documentation:**

IF the Applicant lives outside of the U.S. (bases are considered within the U.S.)
- Birth certificate

IF adding stepchild
- Birth certificate

IF adding adopted child
- The final decree of adoption OR
- The adoptive placement agreement OR
- The interlocutory decree of adoptions, OR
- The revised birth certificate

IF adding a child not capable of self-support
- Medical evidence showing a permanent mental or physical disability existed before his/her 18th birthday, AND
- A statement from an attending physician showing the nature and extent of the child’s physical or mental impairment

Documentation can be a JPEG, JPG, PNG or PDF file.

#### To remove a dependent you need to know:

Dependent’s:
- Name
- Address (if stepchild under 18)
- Social Security number
- Date of birth

------

#### Approval
_Plan approval TBA_
