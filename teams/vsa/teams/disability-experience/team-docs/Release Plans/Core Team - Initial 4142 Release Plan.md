# Release Plan: 4142 Paper Sync - MVP 


## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. This release plan is specifically for the 4142 Paper Sync MVP (first release). 
It is not intended to include the next generation of enhancements to the 4142 product.

## Feature description

## Project goals
Create a new 4142 online form that will match the newest paper version of the PDF form. 
The data in the online form will be used in the generation of the new (2024) 4142 PDF that will be sent to Central Mail (and eventually the eFolder further downstream) after a successful submit.

## Success criteria
- Support 100% of 526 users in the ability to submit a 4142 that is the new 2024 version


## Resource materials
- [0781 Paper Sync Epic]
- [Story Mapping Board]
- [Figma 0781 redesigns]
- [Figma 0781 redesigns-final]
- [Final -0781 PS Field Mapping.md]
- [Final - 0781 PS New SubURL.md]
- [Architecture]
- Datadog log
- Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production)
- Product Guide
- [0781 Paper Sync Staging Test Plan]
- [Release calendar]


## New capabilities and changes
### Changes to the 0781 include:
**Conditions for evaluation**
Revisions to accommodate a broader set of mental health conditions beyond PTSD, including anxiety, depression, bipolar disorder, and others. And inclusion of a new choice page allowing for all claimants filing new conditions to self-identify to file the 0781 (3.2 in the design spec). Claimants who self-identify are able to file by uploading a PDF or answering questions online.

**Unified Filing**
Revisions to combine questions both legacy forms into one unified form to accommodating claimants filing  conditions related to combat events, personal assault, military Sexual Trauma (MST), other personal interactions and other event types — incorporating the collection of information relating to:

- Traumatic events (see 3.6 — 3.10 in the design spec) 
- Behavioral changes (see 3.11 — 3.14 in the design spec)
- 0781 related supporting document types (see 3.15 in the design spec)

**Branching logic and conditional prompts**
Branching logic and conditional prompts to support the following filing scenarios:

- Claimants filing mental health conditions related to incidents of MST
(see more below about MST Claim Indicator and Official Reports Filed)
Claimants filing mental health conditions related to combat events only
(see more below about behavioral changes).

**Streamlined Incident Reporting**
Revisions to reduce the complexity of collecting information about traumatic events / incidents. For combat-related incidents, the updated form eliminates the need to collect information relating to unit assignment and rank, medals and citations received, and persons killed or injured during the incidents. For personal and sexual assault, the updated form eliminates the need for providing sources of information related to the reported incidents.

This simplification is reflected in changes to pages supporting the collection of information related to traumatic events (see 3.6 — 3.10 in the design spec).

**Behavioral Change**
Revisions to collect descriptive detail about individual behavior changes. In the digital form this is captured through dedicated detail pages (see 3.13 in the design spec). Claimants reporting combat events only as trauma they experienced are offered an alternate introduction page allowing them to bypass providing behavioral change details (see 3.11b in the design spec).

**Sources of Information**
Revisions to collect types of medical condition related supporting documents in place of gathering named sources of information related to claimant mental health conditions. This information is gathered in the digital form through a separate page with a series of multi-select options (3.15 in the design spec).


### Additions to the 0781 include:

**Trauma-Related Medical Treatment**
Additions to gather provider information from treatment providers who provided treatment for the impact of  traumatic events claimants experienced. To facilitate the collection of this information, the digital form adds an additional field to VA and Private medical provider information related pages to identify whether or not the claimant received treatment at the facility relating to the impact of traumatic events (4.3 and 4.5 in the design spec, respectively) . The response in this question determines which forms the provider information is written to (526, 4142, or 0781, respectively).

**Official reports filed**
Additions to gather information about official reports filed about the traumatic events experienced —collected through an additional question in the traumatic event entry flow (see 3.9 in the design spec). Additional options to include military incident reports are available for claimants filing MST as a type of trauma experienced.

**VA Claim Event Indicator (MST Only)**
Additions to gather permission to have claim event indicators added to VHA records have also be included in the updated form. Collecting permission to include this indicator is collected through a dedicated page in the digital form (see 3.17 in the design spec).

### Additional functionality:
To allow for increased control over form data handling due to the sensitive nature of the topic covered by the 0781, destructive action prompts have been added to ensure that claimants are able to confirm when choices they make to revise entries result in the removal of previous form responses. This occurs when:

- Claimants decide to change the way they submit the 0781, or decide they no longer wish to submit a 0781
- Claimants decide not to report MST as a type of traumatic event type they experienced
- Claimants who experienced only combat-related traumatic events decide not to report behavioral changes
- Claimants decide not include individual behavior change types, who have already supplied details about these behavioral changes

Users will also be prompted when they choose to delete details about their traumatic events. They are also prompted to confirm when they cancel adding or editing traumatic event entries..

## Production release plan
The production release will include a canary rollout. The rollout plan involves deploying the new 0781 flow version to a small, representative subset of users (the "canary" group) before releasing it to the entire user base, allowing for early detection of issues and a swift rollback if necessary. 

**Monitoring the Canary Deployment**

We'll closely monitor the canary deployment for performance issues, errors, and user feedback. We'll be looking at the following ... 
- Number of claims in progress with new 0781 mental health data/form
- Number of successful submissions with new 0781 mental health data/form
- Number of failed submissions with new 0781 mental health data/form
- Number of submissions with new 0781 mental health data/form down the primary path
- Number of submissions with new 0781 mental health data/form down the secondary/backup path
- Number of successful submissions with old 0781/a PTSD data/form

[Datadog monitors should be included here]

In addition to the monitoring and alerting in datadog, we also plan to do full tracing and validation of all claims within the initial rollouts of 1%,  and potentially 5% (depending on confidence and volume). Full tracing and validation includes making a sharepoint excel file to share with our team and the VA stakeholders, in which at least the following for each claim are denoted:

- va.gov DB claim ID
- Submission path (backup vs primary)
- VBMS ID or Backup  Submitted Claim ID (CMP ID)
- Any interim system IDs available
- Confirmed final destination received (checked in VBMS and confirmed where it should be)
- Confirmed properly categorized in VBMS
- Validate all fields against DB record JSON blob values
- Previously this has been a great way to increase confidence in the new form, as well as a way to potentially catch any errors/bugs early. 


**Scale Gradually**

Each week the team will be monitoring the progress of disability claims ... reporting the metrics in the # benefits-disability slack channel ... 

If the canary deployment is performing well, we'll gradually increase the percentage of traffic to the new 0781 flow. 

Once we're confident that the canary deployment is stable, we'll fully roll it out to all users by routing all traffic ...  

**Canary rollout plan**


| Percent |Go/No Go Date |Planned release date | Actual release date |Notes            |
|---------|--------------|---------------------|---------------------|-----------------|
|1% | 04/29/2025 | 04/30/2025 | | |
|5% | 05/05/2025 | 05/06/2025 | | |
|25% | 05/12/2025 | 05/13/2025 | | |
|50% | 05/19/2025 | 05/20/2025 | | |
|75% | 05/27/2025 | 05/28/2025 | |Memorial day holiday this week |
|100%|  06/08/2025 | 06/10/2025 | | |

_These dates do not represent commitment and are subject to change._


## Risks
With any new feature there are always risks. With our testing plan, and monitoring plan we hope to reduce risk as much as possible. The largest risks are enumerated below, along with steps taken to reduce risk.
  
**Risk:** In trying to release the new version of the form, we inadvertently negatively affect the existing version.

**Mitigation:** By having monitors that count the old version of the form submitted, and new, we will catch any dip or anomaly in old submissions. Additionally our unit testing, and end to end testing both test not only the new flow, but also that the old flow is unaffected.


 
**Risk:** Form is not being filled out correctly, or not getting where it needs to.

**Mitigation:** Post release monitoring and validation/tracing is designed to mitigate this risk.



**Risk:** Users are confused by the UI/UX form or flow.

**Mitigation:** Extensive user research has been done, and more is planned even post-release to ensure experience is good. Technical indicators (such as page drop-off, submission count/volume anomalies, etc) are also at our disposal to evaluate this. 



**Risk:** A bug in new code prevents the overall submission of the 526ez submission.

**Mitigation:** End to end testing covers most of this risk. Our dashboards also cover overall submissions numbers, and evaluation will be done with each roll-out increment to ensure error-rate and submission numbers are not anomalous. 


## Production issues recovery plan

DBEX team Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which will prevent any new 0781 submissions from being started. Manual troubleshooting and data fixing will be done for any new version 0781 submissions that are experiencing any submission blocking issues. 

The recovery playbook is included in the QA document linked in this issue. 


## Rollback

Rollback if any of the following is encountered
- Qualitative anomalies that affect a significant number of users
- Any new severe or widespread errors identified
- High volume of 500 errors
- High volume of Call Center complaints
- Abnormally high latency
- Traffic metrics deviate abnormally from the Flipper allotment
