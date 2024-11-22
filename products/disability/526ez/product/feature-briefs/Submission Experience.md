# Sub Ex Init Brief 11/20

# 1. Purpose
The purpose of this document is to describe and build alignment for what problems we aim to solve, why they are important to solve, and how we plan to improve the Veteran submission experience. It’s a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the Submission Experience initiative.

# 2. Problem or Opportunity
Through recent Veteran shadowing research and discovery In Q1 2024, we discovered that many Veterans do not have a positive experience when submitting a claim for disability compensation. After a Veteran clicks “submit” on a disability benefits application on va.gov they experience errors, confusion, a lack of clarity, missing information, and cognitive load that overburdens the Veteran during a time when they are asked to recall traumatic events.

# 3. Proposed Solution
We aim to give Veterans more clarity on the progress and outcome of their claim's submission status. We’ll provide timely & truthful information about their submission status after the Veteran clicks "Submit" and give the Veteran a record of their submission and a way to track it. In addition to being able to view submission status on MyVA and Claim Status Tool, we expect this will reduce duplicate submissions. In scenarios where a system failure causes the Veteran's claim not to be submitted, we'll inform the Veteran in plain language about what to expect and will make efforts to reduce the burden of resubmissions or eliminate it altogether.

# 4. Success
We’ll know we’re successful when the following are true.
* Veterans have a clear understanding of their submission status
* Veterans have the information they need to get help from the contact center
* Veterans can print or download a copy of their claim
* Veterans have greater confidence in the submission process
* Fewer Veterans submit duplicate claims
* Veterans can find the status of their submission on VA.gov (MyVA and CST)
* Veterans won’t have to re-do forms from scratch if their submission fails


# 5. Delivery

Delivery versions are represented in Github by Milestone. Each phase includes Research, Design, Testing, and Implementation. Features are prioritized using the benefits portfolio priority framework with consideration given to usability, feasibility, viability, and Veteran value. Details for each feature are listed below in section 6. Release timelines are represented as versions in the [Submission Experience User Story Map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1732231610329/b35926154a670461fa8cf3d71b17150066701abb). Each Version has in Github milestone that keep the user stories requred to ship that version organized.

## 5.1 In Scope
This initiative focuses on all paths for the submission and post submission experience.
* Evaluation of user-facing features such as the loading screen during submission and content on the confirmation page
* Post-submission notifications, including confirmation email and message on confirmation page.
* Providing Veterans a record of their claim and list of documents submitted (note concern about filenames potentially containing PII)
* Reevaluating how the 526 introduces the Claim Status Tool and connects Veterans to it
* Reducing duplicates (rethink when we clear the in-progress form)

  
## 5.2 Out of Scope
* SMS, web and mobile app notifications, paper mail, etc
* Notification of core 526 submission failures and file upload failures
* Any of the touchpoints in the lifecycle of the claim beyond when the claim is established in VBMS and all initial documents are successfully uploaded
* Given that the Claim Status Tool and MyVA are not managed by our team, any improvements across products will need to happen in collaboration CST and MyVA.

## 5.3 Risks and Challenges
2. User research will require planning around some challenges
   a. We prefer to have Veterans submit actual claims, which we know is difficult to recruit for and usually involves sensitive information
3. Any changes to the Claims Status Tool (CST) that impact how the Veteran accesses their submission status or what they are able to track as related to submission may need copy/link changes
4. Will need careful collaboration with back-up path and document failures to identify all use cases for full submission flow to make sure there are no missing or inaccurate notifications
5. Access to quantitative data, used to supplement our qualitiative research can be challenging to get, and in some cases not available.


# 6. Features
Brief descriptions of each feature are listed below, along with success criteria, scope, and known risks and challenges. As we learn about upcoming features, detail will be added and changed as needed to reflect the latest known information. Feature epics listed in section 5 are the best place to get detailed information about individual user stories for each feature.

## 6.1 New Confirmation Page
**Why**
After a Veteran hits “submit,” they expect to understand how long their application wil take to be processed and be presented with meaningful information that is easy to understand. 
**How**
Today, after the Veteran clicks “submit” they navigate to the Loading page that includes a sipinner with language explaining “Please wait while we submit your application and give you a confirmation number.” It can take up to 30 seconds for this to transition to the Confirmation page, but the Veteran doesn’t know this and may feel unsure about what is happening.

On the Confirmation page, the messaging they receive does not reflect the true submission status, setting false expectations for Veterans on the timeline for their claims processing. In some cases, the Veteran is shown error or warning alerts; “It’s taking us longer than expected to submit your claim.” or “We’re sorry. Something went wrong when we tried to submit your claim.” when the Veteran’s submission actually succeeded. In both cases, the warning and error alerts suggest calling the Contact Center, and provide a phone number. In these cases Veterans may feel a lack of confidence about VA filing their claim. They may call the Contact Center or simply try to submit again. If they submit again, this can result in a duplicate submission which must be resolved by the EP Merge process.


### 6.1.1 Success
1. Ensure expectations of the submission timeline are set truthfully for the Veteran
2. Ensure that Veterans feel confident the VA is trying to submit their claim
3. Ensure the language we use is straightforward so that Veterans feel understanding submission status is trivial

### 6.1.2 Out of Scope
- Changes to MyVA
- Changes to CST
- Changes with how 526 and ancillary forms are processed after a successful submission

### 6.1.3 Risks and Challenges
- We don't have detailed knowledge of when a claim's submission status becomes available in CST and MyVA, although we believe it to be 7-10 days. Instead of timing any communication with the actual point at which a claim shows up in those tools, we are keeping with the current approach to use messaging that it may take a certain number of days for their claim to show up there.
  - This is a known limitation that will be eliminated in the future epic "Submission status on VA.gov".


## 6.2 New Email Touchpoints
After a Veteran hits “submit” they expect to recieve an email in a timely manner, containing useful information and confirming that that VA received their claim.

Today Veterans recieve an email that contains information about the type of claim (“Disability Compensation Claim”), Claim ID, and date submitted. There are instructions on how to check claim status via a link to Claim Status Tool and Veterans are told “Please allow 24 hours for your disability claim to show up there” Later they are told “We’ll notify you by mail once we’ve processed your claim.”

Unfortunately only some Veterans recieve this email because for various reasons the system isn’t able to process the application synchronously. In these cases, roughly 1% of submissions, VA does not send an email. While 1% sounds low, this impacted 1,959 Veterans between April 1 and July 31, 2024. Additionally, the timeline it sets is incorrect as it can take up to 7-10 days for a Veteran’s claim to appear in Claim Status Tool. The email also isn’t clear enough about what to expect next when they’re told “We’ll notify you by mail once we’ve processed your claim”.

Additionally, these emails are sent when ancillary jobs are triggered, as opposed to when the claim reaches the system of record, VBMS. This introduces a risk for the Veteran that the system could fail to submit the application, but has told the Veteran that it’s been recieved. 

### 6.2.1 Success
1. Ensure expectations of the submission timeline are set truthfully for the Veteran
2. Ensure that Veterans feel confident the VA is trying to submit their claim
3. Ensure an email confirmation is received in a timely manner and contains information the Veteran deems useful, no matter how VA processes it

### 6.2.3. Out of Scope
* Changes to CST

### 6.3.1 Risks and Challenges
* The backup path will stil be used so we’ll have to determine how we can send an email in these cases.
* To follow the VA design Pattern for “Stay informed of their form submission status” means that the Veteran should recieve two emails. One when the submission is in progress and one when VA recieves a submitted form in the system of record.


## 6.3 Provide a Copy
When Veterans file a claim for disability compensation, they expect to be able to view, print, or save a copy of their claim so they have claim information on hand if they need it. 

Veterans may use it when calling the Contact Center for help or use it when someone is helping them with their claim. Veterans also want to save a printed copy, or download the file for storing. In the 2024-07 [Submission Status Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-07-Submission-Status/Research-findings.md), all participants stated they had the claim information they needed on the confirmation page, but when asked if they would be interested in downloading a full PDF at a later date, a majority of Veterans said yes.

However, today it’s not possible for Veterans to do this. Before the Veteran submits their application from the Review & Submit page, they can view the information they provided but there’s no option to print or save. After the Veteran clicks “Submit application” they navigate to the Confirmation page where the Veteran can view their name, date the application was submitted, the conditions they claimed, and a Claim ID number. However, while the Veteran can print the page, it’s not possible to view or download a copy of the claim they submitted.

If the Veteran wants the application’s details and uses the browser’s back button they are taken to the start page of the 526 form, instead of the Review and Submit page where they expected to go. Veterans want to be able to locate and view a copy of their completed form online at a later time. A record of their submission could ease resubmission challenges for Veterans who are asked to mail in failed documents like evidence or a 4142/0781. Easy access to full evidence file names and completed ancillary forms could save Veterans calls to the Contact Center or refilling forms.

### 6.3.1 Success
- Veterans can view, save, or print a record of their submission that matches the submitted claim VA has on file
- Should Veterans want help with their application, they have the information they need to get help

### 6.3.2 Out of Scope
- Direct changes to MyVA and CST. We may partner with them to include a copy of the Veteran’s claim insofar is feasilble and viable, but we do not control these applications or have direct influence over their roadmap. 

### 6.3.3 Risks and Challenges
* We can only hold Veteran data 60 days post submission (by policy) and that we'd probably need to have Veterans access this by secure message (which we don't have) or through CST (maybe it's thought of as a letter download type thing) which requires another team collaboration.
* Need to determine how ancillary forms and evidence are included as part of this record
* How will we provide a copy when submissions use the backup path?
* What percentage of claims have the 526 in the Veteran's eFolder within 30 seconds?
* Accesible PDFs remain a challenge

### 6.3.4 Key Stakeholders
- Contact Center
- DBEX Teams 1 & 2
- OCTO
- VBA


## 6.4 Submission Status on VA.gov
After a Veteran clicks “Submit” they expect to be able to check the status of their claim at any time. 

Today, after the Veteran leaves the Confirmation page they cannot revist it. When they get the Recieved email, Veterans are told they check their claim status in CST within 24 hours, but we know that it can take up to 10 days to show up there. Before the application appears in Claim Status Tool, Veterans have nowhere on va.gov to view the current status of their application. 

This creates a gap for the Veteran where they may feel confused or less confident in the submission process, as handled by VA. MyVA and Claims Status Tool are both established touchpoints for Veterans, but today MyVA isn't used as such for the 526 form. Today, if the Veteran visited MyVA while they have a 526 in progress, they would see a "Draft" status in the upper left hand corner of the VA Form 21-526EZ card within the "Benefit Application Drafts" section. However, once the 526 is submitted, the card disappears because the application is no longer in a Draft status and there is no MyVA card that appears with an application status listed.

Many Veterans file a claim that includes ancillary forms and uploaded evidence, and similar to 526 these forms also do not appear on MyVA.

### 6.4.1 Success
* Veterans have greater confidence in the submission process
* Veterans can find claim status in MyVA
* Veterans can find short-term claim status in CST

### 6.4.2 Out of Scope
* Direct changes to MyVA and CST. We may partner with them to include a copy of the Veteran’s claim insofar is feasilble and viable, but we do not control these applications or have direct influence over their roadmap.

### 6.4.3 Risks and Challenges
* Direct changes to MyVA and CST are not possible. We may partner with them to include a copy of the Veteran’s claim insofar is feasilble and viable, but we do not control these applications or have direct influence over their roadmap.
* Form statuses on MyVA show status for only the forms specified in the SubmissionStatusesController controller method
* 526 is not one of the forms specified in this controller method, which my VA owns
* MyVA retrieves records from the form_submissions table and, for each form, uses the benefits_intake_uuid to retrieve the status via the LH Benefits Intake API
* MyVA displays a user's list of form submissions along with their statuses on the MyVA dashboard page, but MyVA doesn't actively poll for updates
* MyVA plans to add more forms in the future, but the timeline for 526 is unclear
* Thus, feasibility of displaying an up-to-date submission status on a MyVA card is unclear due to unknown timing of 526 being included in the list of specfied forms
* The MyVA/Profile team is currently working to understand if changes to MyVA would require DEBX to go through Collaboration Cycle
* For changes in the near term, MyVA/Profile team would more likely be involved
* MyVA/Profile team is considering how to enable other teams to develop under their guidance, support for this is a ways off
* How to handle duplicate submissions are something that we'll need to figure out
* Form 526 is not saved to the form_submissions table. We can put it in there, but to it will be complicated to retroactively add people's submissions. Perhaps we don't do this.
* 526 primary path submission do not go to benefits intake api. They go straight to vbms. Only the backup path goes to benefits intake.

### 6.4.4 Possible Solutions
One approach we could take would be to make an adapter to get the 526 and add it on to the response from the SubmissionStatusesController. We can retrieve status in this way:
- Primary path: VBMS itself via LH Claims endpoint using its submitted claim id
- Backup path: Benefits intake api, much like the controller is doing now

We're already using the [Lighthouse Benefits Claims API](https://developer.va.gov/explore/api/benefits-claims/docs?version=current) that returns claim status. Using this would be the easiest route, but it's unclear if this endpoint uses VBMS for status or where status comes from. The documentation reads "A 200 response means that the claim was successfully submitted by the API. It does not mean VA has received the claim." Since we're using the LH synchronous endpoint, this establishes the claim in VBMS right away. We believe the "Pending" status indicates it was recieved and there is also a "Claim Received" but by nature of us having the the submitted/established claim id from VBMS, we know it was received but it doesn't say if the 526 pdf made it into the Veteran's eFolder.

## 6.5 Reduce Duplicate Submissions
TBD
## 6.6 Reduce Submission Burden
TBC

## 6.7 Reciept of Claim Material
TBC
 
# 7. FAQ
### Where can I follow along with this work?
We are tracking the work in the [Submission Experience project on the roadmap](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/roadmap?project=z2lkoi8vcmfwdg9yl1byb2ply3qvodiymty) - see various epics within it.

The [User Story Map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711478063212/5b744d81f239e5ae30aaf28ff98414a9dc3c7e72?sender=ubd79255de28cd574d7575469) is used to map out the initiative's features and user stories.
### When does the submission experience “end”?
When the claim is established in VBMS and all initial doc uploads succeed or the submission process ultimately fails (clarified [in Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1712083884346289?thread_ts=1711719139.052369&cid=C053UDWMH7U)).
### What is the detailed delivery plan?
Each delivery phase of the Submission Experience is detailed in the Epic for each phase. Links provided above in section 5.

# Appendix

## D. Links
[526ez Shadowing Veteran Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md)
[Submission Experience Maps](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711478063212/5b744d81f239e5ae30aaf28ff98414a9dc3c7e72?sender=ubd79255de28cd574d7575469)
[DBEX Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?sender=ubd79255de28cd574d7575469)
[Submission Research Plan](https://docs.google.com/document/d/1GLBJqNpNMyOfcidtigNqWd8F2c6adueraY-ybj7Q5E8/edit) for "Veteran has clear expectations of submission status"

