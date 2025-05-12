# Research Findings for Usability Test of Claims Submission (Search, 686c Submission, Submission page) April 2025

Office of the CTO - Digital Experience (OCTO-DE), Accredited Representative Facing Team

Date: 02/2025

* Laura Paradis and Kate Albee (research preparation, session moderation, notetaking, interview synthesis)
* Eva Heintzelman (research preparation)
* Marisa Dominguez (notetaking)

Product: Accredited Representative Portal (ARP)

Type of Research: User Interview and Usability test

Jump to:

* [Background](#background)
* [Research Goals](#research-goals)
* [Executive Summary](#executive-summary)
* [Participant Sample](#participant-sample)
* [Key Findings and Recommendations](#key-findings-and-recommendations)
  + [Claim submission flow](#the-21-686-submission-flow-is-not-intuitive,-but-is-accepted)
    - [Landing page – Find Claimant](#landing-page-after-log-in)
    - [Submit form intro page](#submit-21-686c-intro-page)
    - [Step 1/3 Claimant and representative information](#step-1-of-3-claimant-and-representative-information)
    - [Step 2/3 Upload files](#step-2-of-3-upload-files)
    - [Step 2/3 Upload files – Form mismatch](#step-2-of-3-upload-files-form-mismatch-message)
    - [Step 3/3 Review and Submit](#step-3-of-3-review-and-submit)
    - [Success](#success)
    - [Perceived overall value of claim submission solution](#for-ARP’s-claims-submission-solution-to-have-greater-value,-continue-to-track-and-align-with-long-term-goals)
  + [Submissions page](#the-submissions-page-can-fulfill-its-goal-as-a-quick-reference-after-applying-content-improvements.)
    - [Individual versus organizational view](#individual-versus-organization-level-views)
    - [60-day limit](###60-day-limit)
    - [Sort options](###sort-options)
    - [Card view](###card-view)
    - [Perceived speed in using submission page](###for-users-of-QuickSubmit-and-SEP,-improving-the-search-on-this-page-and-content-of-each-card-can-increase-how-fast-representatives-accomplish-tasks-on-this-page.)
  + [Cross-accreditation](##cross-accreditation-did-not-change-the-claim-submission-process)
* [Appendix](#appendix)

# Background

The Accredited Representative Facing (ARF) Team is building an Accredited Representative Portal (ARP) that will allow Veteran Service Organization (VSO) representatives to submit online any claim and supporting evidence to the VA. For an early release of ARP’s claim submission feature, we are allowing representatives to submit form 21-686c Add Dependents and view their prior submissions.

The prototype used in this study starts with the homepage, and upon log-in, the user lands on a “Find Claimant” page. After the representative enters information about the claimant, they retrieve a search result with a link to submit the 21-686c. The link leads them down a linear flow where they submit a 21-686c with evidence. They can then reference their submission on the “Submissions” page.

# Research Goals

* Evaluate usability and value of ARP’s 686c claim submission. Is it intuitive, clear, and easy to use? What could be improved?
* Evaluate the usability and value of a submissions history view. What is valuable for a representative to reference at a glance? What could be improved?
* Understand how representatives, including cross-accredited ones, typically submit 686c and other forms. How could this impact future designs?

# Executive Summary

As hypothesized, this early iteration of claim submission has yet to meet expectations of representatives in terms of its value and efficiency. Representatives’ experiences with tools like QuickSubmit, SEP or third-party software set expectations for a one-page (interpreted as one-step) submit process or features that offer workflow efficiencies.

* In general, participants felt that this process of submitting a 21-686c was worse or the same as their current solution, with 3/5 participants stating that it was worse, and 2/5 noting it felt about the same.
* Most participants noted that the process of submitting or referencing a past submission felt slower in this design than their current solutions.

Participants recognized that ARP’s submission flow contained more steps than QuickSubmit and did not reflect SEP’s immediacy of information. They also noted that being able to sign for the Veteran in SEP saved time, but when using a pdf form they preferred the Veteran sign.

The content and directions shown for submitting a 21-686c were clear and overall easy to follow. The content on the Submissions page was less clear, with representatives unsure if “claim submission status” referred to the claim being in VBMS or at the Regional Office (RO), or being worked on by a VBA employee.

The long-term plan for ARP is to improve efficiency of the claim submission process, and future anticipated features like pdf pre-fill and claimant page can contribute to workflow efficiency. From this study, the team documented changes that could be made prior to the first release to improve clarity as well as changes to address post first release and long-term. Subsequent user testing is expected to continuously gauge our progress and ensure we are working in the right direction.

When considering rollout and communication of ARP, this study also suggested that we focus our efforts on those who currently use QuickSubmit and do not use third-party or proprietary software.

# Participant sample

Our sample skewed toward more experienced representatives who were mainly state VSOs. The following chart highlights key characteristics of these participants.


|  | VSO | Tools used | Supervisory role | Cross/Single accreditation |
| --- | --- | --- | --- | --- |
| P1 | Illinois | QuickSubmit | Not a supervisor | Single |
| P2 | Michigan | VetPro | Supervisor | Cross |
| P3 | DAV | Propriety software, SEP | Supervisor | Single |
| P4 | North Carolina | SEP, QuickSubmit | Supervisor | Cross |
| P5 | New Mexico | VetraSpec | Supervisor | Single |

# Key Findings and Recommendations

## The 21-686 submission flow is not intuitive, but is accepted

When submitting a 21-686c from ARP, representatives’ expectations of what would happen from screen to screen were based on current tools they used. The flow tested in this prototype started at Find claimant -> Search result/Submit 21-686c link -> Intro page of 21-686c -> Step 1/3 Claimant information -> Step 2/3 Upload forms -> Step 3/3 Review and Submit -> Success.

<img width="577" alt="image" src="https://github.com/user-attachments/assets/cb916624-8b6a-4d38-b763-b0252ca6f924" />

### Landing page after log-in

On “Find Claimant” page, 3/5 representatives did not expect, but accepted, what they saw in the search results.

1. One participant thought they would see a dashboard of that claimant.
2. Two participants were unsure what the purpose of this search was, if it only showed POA status and a link to submit one type of form.
3. One participant was not certain that the result shown was a claimant they had POA with.

Additionally, one participant also noted that the number of fields they needed to complete felt extraneous, especially because they use only SSN to search for a claimant in VBMS.

1. “We handle a lot of people. So sometimes just copying and pasting the social over from VBMS or our CMS just makes it easier. Just have the social [security number] be required.” — P3

**Recommendations**
Prior to first release:

1. Move the descriptor text and increase size to highlight “Find claimants who have designated you as their representative…” to increase visibility.
2. Emphasize the value of showing only those they have POA with, to differentiate this tool from QuickSubmit.
3. Change “Submit” to “Start” 21-686c as “Submit” indicates that the next screen will be the 21-686c form.

Post first release:

1. Conduct internal research to see if we can only use SSN as the search field.
2. Improve messaging on homepage and on the “Find Claimant” page to clarify what functionality currently exists in ARP.

![image](https://github.com/user-attachments/assets/e3fd0bf6-5ef5-4ab7-94e8-e64fa81c78c9)

![image](https://github.com/user-attachments/assets/7e904e41-b068-40fb-9c68-d04ee9f8986d)

### Submit 21-686c Intro Page

After finding the claimant through search and seeing the “Submit 21-686c” option, 5/5 expected to see a different page other than the Submit 21-686c intro page. While this Submit 21-686c intro page was unexpected, participants were not surprised. The page looked similar to what is shown on VA.gov, and they were comfortable with the language.

1. Three participants believed they would see a view similar to SEP, where they would see information about existing spouse(s) or dependent(s).
2. Two participants believed they would go directly to a fillable form.
3. Overall, all of them believed they would be one step ahead of where they currently landed on.

4/5 participants would ignore the prompt to download the form because downloading the form at this point does not align with their workflow.

1. One of them particularly noted that this would be an ineffective workflow; they would have to download, complete the form and then log-in again to submit the form.
2. “Vetraspec gives me a list of docs to use, where I click on 686c, and because I have a file on him, that auto-populates into the form… if I had to download the form it would add 20 min to the appointment.” — P5
3. Two others had current forms on their computers with regular maintenance to ensure they used the most updated forms.

When representatives complete a pdf (versus using SEP), they prefer to have the Veteran sign the form to confirm the information, and so they typically spend time with the Veteran after downloading the form before uploading it. Also, P1 noted that some Veterans don’t know you can use e-signatures, which expedites the process.

1. “Technically I could probably sign that form [21-686c], but if it’s a paper form I prefer to have the Veteran sign it…to me it’s always better to have the Veteran signature then for me to sign anyway.” — P4

Overall, participants felt that the instructions on the intro page were “standard” and “straightforward” (P4, P2). They did not feel the content was excessive, and all participants knew what additional evidence they would upload for the 21-686c.

**Recommendations**

Prior to first release: Adding examples of what additional evidence constitutes does not add value for representatives. Representatives receive training and coaching before submitting forms on their own; they have this knowledge. If we considered including examples, recognize that it is low-value information.

Post first release:

1. Identify ways for the “Download form” feature to exist on its own, decoupled from this submission flow. We currently have a ticket to explore this through the claimant page designs.
2. Further investigate needs around signature completion and whether or not this would be a high-value feature to pursue, especially if we continue to request pdf form uploads.

![image](https://github.com/user-attachments/assets/a8bb73d9-5237-46d7-8388-c80315edda9d)

### Step 1 of 3 Claimant and representative information

After the intro page, participants expected that they would see the 21-686c form. 2/5 representatives referenced QuickSubmit’s one-step format. While they did not expect to see claimant and representative information, they also accepted this as a first step to submitting the form.

**Recommendations**

See recommendations in the section “Overall value” that address how this flow could be improved.

### Step 2 of 3 Upload files

4/5 participants felt that this page was clear and expected; 1/5 participants expected a format similar to SEP, where dependent information is shown.

### Step 2 of 3 Upload files form mismatch message

3/5 participants noticed the alert while two others did not notice it. After reviewing the alert, all participants believed that they would need to check the recency of the form used. This however is not the purpose of the alert.

**Recommendations**

Prior to first release:

1. Change copy of alert to focus on form number rather than whether or not the form is the most up-to-date.
2. Potentially change alert to red for more prominence.

![image](https://github.com/user-attachments/assets/06345740-1d15-4851-82ad-30c65ecd4a26)

### Step 3 of 3 Review and Submit

All the participants recognized the value of checking information one last time prior to submission; the information on this page was clear.

### Success

3/5 participants expected this message; the other 2/5 participants looked for the confirmation number in the success message. 3/5 expected for the 21-686c to appear in 24 hours based on their experience with SEP; they did not understand that this current solution submits through Central Mail.

1. “Confirmation is a must… I’d normally print this page but no reason to print it because it’s so generic.” — P4
2. “I wish there was a confirmation number… even with QuickSubmit we get a confirmation number.” — P3

**Recommendations**

Prior to first release: Update the success message to include the confirmation code and information about how this is processed to set expectations on time it takes for the claim to reach VBMS. Suggested content is below.

*Submitted April 9, 2025*
 *Confirmation code: 36 character long GUID*
 *This submission is being processed through Central Mail before reaching VBMS.*
 *The submission is in progress.*

![image](https://github.com/user-attachments/assets/af3612f5-a0f8-4909-9fd9-37b241386f6a)


## For ARP’s claims submission solution to have greater value, continue to track and align with long-term goals

|  | Now that you’ve walked through this, how would you compare this approach to the current way you are using to submit 686c. Is it better, worse, or the same? | Does this seem faster, slower, or about the same as your current approach to submitting the 686c? |
| --- | --- | --- |
| P1, QuickSubmit | Same | Same |
| P2, VetPro | Worse | Slower |
| P3, Proprietary and SEP | Same | Slower |
| P4, SEP and QuickSubmit | Worse | Slower |
| P5, Vetraspec | Worse | Slower |

**Overall value**

In general, participants felt that this process of submitting a 686c was worse or the same as their current solution, with 3/5 participants stating that it was worse, and 2/5 noting it felt about the same.

1. One participant noted that this process would be better than QuickSubmit, if she did not know if she had POA with a claimant because ARP checks for POA assignment (P1).
2. One participant who used VetPro noted that if the ARP solution auto-established the 21-686c in VBMS, they would potentially use this (P3); VetPro currently does not.
3. “[This process] can’t get in the way of my battle rhythm of how I’m assisting this Veteran… [Vetraspec] auto populates all those documents with their demographics and I get their signature. This would be helpful to VSOs that are not anywhere near as busy and experienced as someone in our office.” — P5

4/5 participants felt that this process was slower than their current solution, and one stated it felt about the same.

1. “There are more steps involved so I guess it would be slower…if SEP wasn’t around I’d continue to use QuickSubmit [over this tool].” — P4

**Recommendations**

We recognize that the solution tested in this study represents one early iteration of a longer product development process. We expect that the following recommendations can be addressed.

Near-term

1. Reevaluate places where we can combine two pages into one or remove steps from the flow.
2. For rollout of this tool, focus on those who do not use third-party tools and rely on SEP and QuickSubmit, or other manual claims submission processes.

Long-term

1. Continue to aim for a solution where pdf information is pre-filled; the current solution does not make it easy enough for representatives to efficiently complete tasks. Several participants valued pre-filled pdfs and from prior research we know that some VSO orgs who do not use third-party tools copy and paste claimant information into pdfs.
2. Utilize the RBPS API for auto-establishing the 21-686c.

## The Submissions page can fulfill its goal as a quick reference after applying content improvements.

The Submissions page provides a way for a representative to quickly view their submitted claims and see if claims are in VBMS. The purpose of this page is to provide a quick reference, not as a way to track the claims journey from ARP to decision letter.

### Individual versus organization level views

Representatives wanted greater clarity that they were only seeing Veterans they submitted claims for, not what their whole organization submitted. Most participants we spoke with referenced other systems where they, as managers, could review claims submitted by other representatives in their organization.

**Recommendations**

Prior to first release: Change the subheading to “This list shows only your submissions sent through this portal from the past 60 days.”

Post first release (long-term):

1. Consider what permissions and functions a VSO representative manager role might need, and how to design for this persona.

### 60 day limit

4/5 participants wanted to see submissions prior to 60 days, especially when systems like Vetraspec and QuickSubmit allow them to view submissions across years, and “some forms have been out there for 8-9 months” — P2. If this view was limited to 60 days, representatives would go to VBMS to look for the submission and its status.

**Recommendations**

Prior to first release: Emphasize that this is a limited view by changing the heading from “Submissions History” to “Recent Submissions.”

Post first release: Provide context for the purpose of this page, and note that if they want to see more detailed information about submissions, they can access claimant page through the search.

### Sort options

At least one representative noted that if this list showed submissions from 60 days, they would see many pages of submissions. Other representatives hoped they would be able to sort by name and filter so they could quickly find the right information.

**Recommendation**

Post first release: Provide a more robust sort, filter and/or search option.

![image](https://github.com/user-attachments/assets/1692f028-4402-4cee-b54c-c5a67dfd3dbb)

### Card view

Representatives overall found that the name, type of submission, date of submission, claim status and confirmation were all must-have pieces of information, with confirmation number being the least important of these if they had the number on the prior page and by email. Also, they did not perceive “Print confirmation” as a must-have feature, especially because they would receive an email with the confirmation.

While they appreciated the information shown, the term “claim submission status” shown on the card confused representatives. (The term “claim submission status” was tested as that language is what is reflected on MyVA dashboard for Veterans, that leverages the Benefits Intake API. We do have future plans to reflect what is in the Claim Status Tool, but not on this Recent Submissions page that shows 60 days of submissions.)


|  | Is John Snyder's packet submission status clear or unclear? | Is Grayson’s 21-686c packet status clear or unclear? | Is Paula Higashi's packet status clear or unclear? |
| --- | --- | --- | --- |
| P1, QuickSubmit | Clear | Clear | Unclear |
| P2, VetPro | Unclear | Unclear | Unclear |
| P3, Proprietary and SEP | Clear | Clear | Unclear |
| P4, SEP and QuickSubmit | Clear | Unclear | Unclear |
| P5, Vetraspec | Unclear | Unclear | Unclear |

1. When the claim submission status was “in progress,” 2/5 representatives believed that the submission was received by VBMS (RO).
   1. “As a veteran, that to me means the VA is working on it, as a VSO that means to me the VA is working on it, though I don't know what stage ... So I would probably want to go and pull open my VBMS.” — P5
   2. “I would actually kick over to VBMS and see if it's actually sitting at an RO or if it's in the national queue...Because that would give me a better answer to tell him [the Veteran who asked him about status] that. Hey, Yep, it's been submitted and, you know, Detroit is working on it.” — P2
2. When the claim submission status was “Received,” 3/5 participants wanted more specificity on what this meant, whether it was received by the RO, by VBMS, by another system.
   1. “Received could mean two different things… we’ve received it, but we’ve not actually assign that EP code. Or it could be received and it’s sitting there.” — P4
   2. “I really don't know. Then because there's different standards for these terms. But again, this being a VA system, I would hope that that means it's in VBMS, but that's not what it means in VetroSpec or even vet pro. [In VetraSpec] That doesn't mean that it's been uploaded into the portal yet, and so we for us it when it says received, we're not done. — P5
3. When the claim submission status was “Action needed,” 5/5 participants believed they needed to supply the claim with additional evidence. This however, refers to a system or processing error.

**Recommendations**

Prior to first release:

1. Clarify the statuses so that “status” refers to status in VBMS or the specific system and phase that the claim is in.
2. Include, as part of the “Status in VBMS,” the date received in VBMS. Representatives noted that this would be a nice-to-have, and mitigates the need to look in VBMS for this information.
3. Change “Action needed” to a phrase that reflects the status and offer the representative next step option.
4. Remove “Print confirmation” feature.

Post first release:

1. Investigate more fully if a representative can view their submission while also meeting security standards. Being able to preview submissions is a feature in QuickSubmit and from prior research and this research, some representatives would use this feature.

![image](https://github.com/user-attachments/assets/dabb692c-5f68-469b-acbd-8e76f60665b6)


### For users of QuickSubmit and SEP, improving the search on this page and content of each card can increase how fast representatives accomplish tasks on this page.

Overall, this approach to referencing a past submission felt slower than their current solution.

1. 3/5 participants perceived this approach to referencing a past submission as slower than VetPro, VetraSpec, and SEP.
2. 1/5 participants felt like it was faster because the information was less condensed than QuickSubmit and more readable.
3. 1/5 participants noted that while this felt faster than SEP, it also felt slower than QuickSubmit.

**Recommendations**

Prior to first release: Show the date received by VBMS. This is currently not shown in QuickSubmit, and two representatives noted that this would be helpful information.

Post first release: Include more information about the timeline of the claim (e.g. similar to claim status tool). This change would increase the value of this tool over a tool like QuickSubmit that cannot share this information. Third-party tools like VetraSpec plan to share this information as well.

## Cross-accreditation did not change the claim submission process

We spoke with only two representatives who were cross-accredited, and they noted that their cross accreditations did not impact how they submitted claims. One of them stated that they were cross-accredited so they could more likely access the Veteran’s information in VBMS and view the Veteran’s history early on when they were having their first meeting with the Veteran.

**Recommendations**

Post first release: Continue to ask questions about cross-accreditation impact on the POA acceptance and claim submission process. We only spoke with two participants in this study, so repeated learning would help confirm/not confirm findings.

# Appendix

### Recommendations listed prior to first release and post first release


| Page | Recommendation for prior to first release |
| --- | --- |
| Find claimant page | Move the descriptor text and increase size to highlight “Find claimants who have designated you as their representative…” to increase visibility. |
| Find claimant page | Emphasize the value of showing only those they have POA with, to differentiate this tool from QuickSubmit. |
| Find claimant page | Change “Submit” to “Start” 21-686c as “Submit” indicates that the next screen will be the 21-686c form. |
| Intro page | Adding examples of what additional evidence constitutes does not add value for representatives. Representatives receive training and coaching before submitting forms on their own; they have this knowledge. If we considered including examples, recognize that it is low-value information. |
| Form mismatch message | Change copy of alert to focus on form number rather than whether or not the form is the most up-to-date. |
| Form mismatch message | Potentially change alert to red for more prominence. |
| Success page | Update the success message to include the confirmation code and information about how this is processed to set expectations on time it takes for the claim to reach VBMS. |
| Submission page | Emphasize that this is a limited view by changing the heading from “Submissions History” to “Recent Submissions.” |
| Submission page | Clarify the statuses so that “status” refers to status in VBMS.   1. Include, as part of the “Status in VBMS,” the date received in VBMS. Representatives noted that this would be a nice-to-have, and mitigates the need to look in VBMS for this information. 2. Change “Action needed” to a phrase that reflects the status and offer the representative next step option. |
| Submission page | Remove “Print confirmation” feature. |

List of changes to make post first release and long-term, to discuss and prioritize with the team.

| Page | Recommendation for prior to first release |
| --- | --- |
| Find claimant page | Conduct internal research to see if we can only use SSN as the search field. |
| Find claimant page | Improve messaging on homepage and on the “Find Claimant” page to clarify what functionality currently exists in ARP. |
| Intro page | Identify ways for the “Download form” feature to exist on its own, decoupled from this submission flow. We currently have a ticket to explore this through the claimant page designs. |
| Intro page | Further investigate needs around signature completion and whether or not this would be a high-value feature to pursue, especially if we continue to request pdf form uploads. |
| Claim submission general | Reevaluate places where we can combine two pages into one or remove steps from the flow. |
| Claim submission general | Continue to aim for a solution where pdf information is pre-filled |
| Claim submission 21-686c general | Utilize the RBPS API for auto-establishing the 21-686c. |
| Submissions page | Provide context on the purpose of this page, and if they want to see more detailed information about submissions, they can access claimant page through the search |
| Submissions page | Provide a more robust sort, filter and/or search option. |
| Submissions page | Investigate more fully if a representative can view their submission while also meeting security standards. |
| Other | Consider what permissions and functions a VSO representative manager role might need, and how to design for this persona. |
| Other | Include more information about the timeline of the claim (e.g. similar to claim status tool). |

**Resources**

[**Figma prototype tested**](https://www.figma.com/proto/aBVHHAKHh6y1syFBVd5msl/ARF---Claims-Submission-686C--ARCHIVED-?node-id=6392-177288&p=f&t=yeU3TnbnyCx12621-0&scaling=min-zoom&content-scaling=fixed&page-id=5627%3A168425&starting-point-node-id=6392%3A177288&show-proto-sidebar=1)

[**Mural board notes and synthesis**](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1744125696428/1bba2379bdb4d1f1016b3eb271ac8eafe5338c95)

