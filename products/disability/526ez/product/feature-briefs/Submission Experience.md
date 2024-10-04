**Note: there are a couple of open questions we are working through [in Google Doc form](https://docs.google.com/document/d/1-QiOIr1s-iO3jp1d06W4v89RF3JNNhdGp65_8FbfQls/edit). We will update the content here when we finalize edits in the Google Doc. **

# 1. Purpose
The purpose of this document is to describe and build alignment for what problems we aim to solve, why we’re solving them, and how we plan to improve the Veteran submission experience. It’s a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the Submission Experience initiative.

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
Each delivery phase consists of one Feature and is represented in Zenhub by one Epic. Each phase includes Research, Design, Testing, and Implementation. Features are prioritized using the benefits portfolio priority framework with consideration given to usability, feasibility, viability, and Veteran value. Details for each feature are listed below in section 6.
| Phase | Feature                                                      | Epic                                                         | Forecasted Date |
|-------|--------------------------------------------------------------|--------------------------------------------------------------|-----------------|
| 1     | Timely and Truthful Submission | [Epic Link](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/82076) | September ‘24   |
| 2     | Submission Record and Tracking  | [Epic link](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/86772) | September ‘24   |
| 3     | Reduce Duplicate Submissions | [Epic link](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/86774) | October ‘24     |
| 4     | Submission Status on VA.gov | [Epic link](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/86884) | Q4              |
| 5     | Reduce Resubmission Burden | [Epic link](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/83500) | Q4              |
| 6     | Reciept of Claim Material |                                                              | Q1 '25          |

## 5.1 In Scope
This initiative focuses on all paths for the submission and post submission experience.
* Evaluation of user-facing features such as the loading screen during submission and content on the confirmation page
* Post-submission notifications, including confirmation email and message on confirmation page,.
* Providing Veterans a record of their claim and list of documents submitted (note concern about filenames potentially containing PII)
* Reevaluating how the 526 introduces the Claim Status Tool and connects Veterans to it
* Reducing duplicates (rethink when we clear the in-progress form)

  
## 5.2 Out of Scope
* SMS, web and mobile app notifications, paper mail, etc
* Notification of core 526 submission failures and file upload failures
* Any of the touchpoints in the lifecycle of the claim beyond when the claim is established in VBMS and all initial documents are successfully uploaded
* Given that the Claim Status Tool is not managed by our team, any improvements across products will need to happen in collaboration CST

## 5.3 Risks and Challenges
1. This work is dependent on the /submit endpoint migration from legacy EVSS services to Lighthouse and must be completed first
2. User research will require planning around some challenges
    a. We prefer to have Veterans submit actual claims, which we know is difficult to recruit for and usually involves sensitive information
    b. Otherwise, how might we understand whether our attempts to mitigate duplicate submissions will work?
3. Any changes to the Claims Status Tool (CST) that impact how the Veteran accesses their submission status or what they are able to track as related to submission may need copy/link changes
4. Will need careful collaboration with back-up path and document failures to identify all use cases for full submission flow to make sure there are no missing or inaccurate notifications
5. Access to quantitative data, used to supplement our qualitiative research can be challenging to get, and in some cases not available.


# 6. Features
Brief descriptions of each feature are listed below, along with success criteria, scope, and known risks and challenges. As we learn about upcoming features, detail will be added and changed as needed to reflect the latest known information. Feature epics listed in section 5 are the best place to get detailed information about individual user stories for each feature.

## 6.1 Timely and Truthful Submission
Once a Veteran hits “submit,” the messaging they receive does not reflect the true submission status, setting false expectations for Veterans on the timeline for their claims processing. Similarly, after leaving the confirmation page, Veterans have nowhere on VA.gov to follow up on a submission until it appears in Claim Status Tool. This creates a communication gap— up to multiple days for some Veterans. This work is prioritized because it addresses one of the most painful parts of the Veteran experience, where much about the problem is known and the implementation is less complex. Moreover, this phase spans the entire user journey leading to a high-value, low-effort feature.

## 6.1.1 Success
1. Ensure expectations of the submission timeline are set truthfully for the Veteran
2. Ensure that Veterans feel confident the VA is trying to submit their claim
3. Ensure the language we use is straightforward so that Veterans feel understanding submission status is trivial
4. Ensure an email confirmation is received in a timely manner and contains information the Veteran deems useful 

## 6.1.2 Out of Scope
- Changes to MyVA
- Changes to CST
- Changes with how 526 and ancillary forms are processed after a successful submission

## 6.1.3 Risks and Challenges
- We don't have detailed knowledge of when a claim's submission status becomes available in CST and MyVA. Instead of timing any communication with the actual point at which a claim shows up in those tools, we are keeping with the current (in production) approach to messaging that it may take a certain number of days for submission status to show up there.
  - This is a known limitation that will be eliminated in the future epic "Submission status on VA.gov".

## 6.2 Submission Record and Tracking
In the 2024-07 [Submission Status Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-07-Submission-Status/Research-findings.md), all participants stated they had the claim information they needed on the confirmation page. When asked if they would be interested in downloading a full PDF at a later date, a majority of Veterans said yes.

However, today it’s not possible for Veterans to do this. Before the Veteran submits their application, they can view the details of the application in detail on the Review & Submit screen, but there is no option to print or save. After the Veteran clicks “Submit application” they are redicted to the Confirmation page where the Veteran can view their name, date the application was submitted, the conditions they claimed, and a Claim ID number. The ability to print, save, or view a copy of the completed and submitted 526 form, is not a given option on this page. If the Veteran wants the application’s details and uses the browser’s back button they are taken to the start page of the 526 form, not the Review and Submit page where they may have expected to go. Veterans also expressed a desire to be able to locate and view a copy of their completed form online at a later time. A record of their submission could ease resubmission challenges for Veterans who are asked to mail in failed documents like evidence or a 4142/0781. Easy access to full evidence file names and completed ancillary forms could save Veterans calls to the Contact Center or refilling forms.

## 6.2.1 Success
- Veterans can view, save, or print a record of their submission that matches the submitted claim VA has on file
- Should Veterans want help with their application, they have the information they need to get help

### 6.2.1.1 As Jobs To Be Done
* When I want information on my completed 526 form, I need my printed form on hand so I can find the information I need
* When I want to keep a copy of my completed 526 form I need to be able to download it so I can save it on my computer or in my cloud storage
* When I need help with my application, I need access to my completed 526 form so I can get the information I need for myself or to give to someone who is helping me

### 6.2.1.2 As Themes
Ensure [result] for [persona]
* Ensure a printable copy of the submission record is available to the Veteran
* Ensure a copy of the submission record is available as a download for the Veteran
* Ensure that the submission record contains the information needed to get help for the Veteran

### 6.2.1.3 As User Stories
* As a [persona] I want [desire or goal] so that [benefit/result] 
* As a Veteran I want a printed copy of my submission so that I can find the information I need
* As a Veteran I want to download a copy of my submission record so taht I can save it on my computer or in my cloud storage
* As a Veteran I want the information I need to be captured in a submission record so I can get the information I need when seeking help about my submission

## 6.2.2 Out of Scope
- Veterans can access their completed 526 online at VA.gov at a later time

## 6.2.3 Risks and Challenges
* We can only hold Veteran data 60 days post submission (by policy) and that we'd probably need to have Veterans access this by secure message (which we don't have) or through CST (maybe it's thought of as a letter download type thing) which requires another team collaboration.
* Need to better determine what is considered a "submission record"
* Need to determine if ancillary forms are included as part of this record
* Due to occasional long processing times for submitting the application, technical feasibility of providing this in the moment is unclear
* What percentage of claims have the 526 in the Veteran's eFolder within 30 seconds?
* It may not be feasible to include ancillary forms, however consideration could be given to the interaction design of how we might do this

## Key Stakeholders
- Contact Center
- DBEX Teams 1 & 2
- OCTO
- VBA

## 6.3 Reduce Duplicate Submissions
TBC

## 6.4 Submission Status on VA.gov
TBC

## 6.5 Reduce Submission Burden
TBC

## 6.6 Reciept of Claim Material
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
