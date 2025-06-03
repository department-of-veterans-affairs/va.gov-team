# Research Report: ARP pilot (POA request management) research

Office of the CTO - Digital Experience (OCTO-DE), Accredited Representative Facing Team

Date: 05/2025
- Jen Seipel, Eva Heintzelman (research preparation, session moderation, notetaking, interview synthesis)
- Marisa Dominguez (session moderation, notetaking)

Product: Accredited Representative Portal (ARP)


# Background

The Accredited Representative Facing (ARF) Team is building an Accredited Representative Portal (ARP) to support representatives in their work with Veterans.  We released the portal to representatives at one pilot organization, Connecticut Veterans Affairs (CT DVA), in March 2025. This release allows representatives to review and approve power of attorney (POA) requests submitted by Veterans using the online [VA Form 21-22 (on VA.gov)](https://www.va.gov/get-help-from-accredited-representative/appoint-rep/introduction/).

In this study, we used a prototype that matches the functionality currently in production to test the usability of the POA review and approval flow with five research participants from our pilot panel. We also spoke with three pilot participants from the CT DVA to watch them use the functionality and learn about their experience with the portal thus far. With both groups, we tested a few new concepts incorporating more advanced search and filter functionality, beyond what we released for this pilot. 


## Research goals

- Evaluate the usability of ARP, finding, reviewing, and accepting/declining a POA request.
- Understand accredited representative workflows more fully, especially related to POA.
- Understand high-level organizational procedures of a small NE state VSO, in this case, CT DVA.


## Methodology

**Usability testing, concept testing, and semi-structured interviews**

- **5 non-pilot participants** / 1:1 sessions 
  - POA usability testing: clickable Figma prototype 
  - Concept testing: clickable Figma prototype 
- **3 pilot participants** / 1:1 sessions
  - POA usability testing: clickable Figma prototype 
  - Concept testing: clickable Figma prototype 
- Followed by semi-structured interviews


## Research artifacts

- [Mural Synthesis Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1743630068812/0d1b6f777adf4a4990564a64d5fc657dd1e032e3?sender=u8c680948381f722d73501107)
- [2025 04 ARP Pilot - Research plan](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7BD9336A7C-9281-4D36-9CF5-A10838F96D0E%7D\&file=2025%2004%20ARP%20Pilot%20-%20Research%20plan.docx\&action=default\&mobileredirect=true) (Sharepoint)
- [2025 04 ARP Pilot - Representative convo guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B674138E2-D8FB-425B-83C4-F67474FFCF0C%7D\&file=2025-04%20ARP%20Pilot%20-%20Representative%20convo%20guide.docx\&action=default\&mobileredirect=true) (Sharepoint)

# Participant sample

Representatives using the 3rd party tools VetraSpec and VetPro are over-represented in the sample. Before starting work with CT Veterans Affairs, we had thought they were QuickSubmit and/or SEP users for POA establishment. It turned out that the organization had adopted VetraSpec recently. Our sample is also skewed toward more experienced representatives and supervisors.

|    | Veteran Service Organization | Tool used for POA                 | Other tools used for submissions                 | Supervisory role               | Cross/Single accreditation |
| -- | ---------------------------- | --------------------------------- | ------------------------------------------------ | ------------------------------ | -------------------------- |
| P1 | MN Dept of Veterans          | VetPro                            | QuickSubmit                                      | Non-supervisor (has assistant) | Cross (5)                  |
| P2 | Vietnam Vets of America      | QuickSubmit                       | VetPro                                           | Supervisor                     | Cross (2)                  |
| P3 | American Legion (MI)         | VetraSpec                         | SEP for dependency claims                        | Supervisor                     | Cross (2)                  |
| P4 | Idaho Dept of Vet Services   | VetraSpec                         | SEP for dependency claims                        | Non-supervisor                 | Cross (3)                  |
| P5 | SC Division of Vet Affairs   | VetPro                            | VetPro                                           | Supervisor                     | Cross (3)                  |
| P6 | CT Veterans Affairs          | VetraSpec, QuickSubmit for backup |                                                  | Non-supervisor                 | Single                     |
| P7 | CT Veterans Affairs          | VetraSpec                         | QuickSubmit for forms VetraSpec does not support | Non-supervisor                 | Single                     |
| P8 | CT Veterans Affairs          | VetraSpec                         |                                                  | Non-supervisor                 | Single                     |

# Summary of key findings

### **1. Adoption of new method for POA establishment**
- Representatives with “instant submission” of the 21-22 in their current process have limited reason to adopt the new method for POA establishment.
- Compared to the new method of POA establishment, current processes are better suited to establish POA in an in-person setting and with Veterans who do not have VA.gov accounts.
- Concerns that stem from a lack of familiarity with the new ARP method can be overcome with improved marketing materials and onboarding methods.

### **2. Usability of POA functionality in ARP and concept testing of future design ideas**
- Managing POA requests in the portal and the portal design overall, received positive feedback. Participants found the design straightforward and clear, and it was easy to complete tasks. But there are opportunities to add more clarity, and areas where functionality is insufficient.
- Participants favored concepts that gave them granular, yet flexible options for searching, sorting, and filtering POA requests. They expect to be able to search the portal using the same information they search in similar systems. 

### **3. Notifications**
- Representatives would benefit from notifications of key POA activity in the portal, but have concerns about notifications becoming noise.

### **4. Cross-accreditation**
- Cross-accredited representatives do not care what organization has POA.

### **5. Technology setup and usage of help resources**
- We should design the ARP Portal with desktop users in mind, because representatives do their work on a laptop, often with one or more external monitors. 
- Contacting their regional office (RO) was the most frequently mentioned help channel for resolving issues. (This is based on analysis from this study and the April Usability Test of Claims Submission study).  

# Key findings and recommendations

## 1. Adoption of the new ARP method for POA establishment

### **Representatives with “instant submission” of the 21-22 in their current process have limited reason to adopt the new ARP method for POA establishment.** 

- As expected, participants who currently use VetraSpec, which has “instant submission” of POA, did not value the new ARP method as much as participants without access to “instant submission.”
  - “This is just another avenue for submitting POA, no better or worse.” — P6 (uses VetraSpec for POA)
  - Most VetraSpec users complete the form in person with the Veteran and submit it during the meeting. But VetraSpec recently released another method for establishing POA that can be done 100% electronically. It involves sending documents to the Veteran (directly from VetraSpec) to digitally sign. 

- The one participant who used QuickSubmit for POA submission thought they would prefer the new ARP method because of speed.
  - “I think it is better and I’ll tell you why …We can’t have a deeper conversation about their claim until I can see their file. If this were instantaneous and on the very first meeting with a Veteran…If I could as a VSO see the file on that first meeting, that is a game changer.” — P2 (uses QuickSubmit for POA)

- Two participants in the study used VetPro for POA submission. They estimated 24-72 hours and 1-4 business days from submission to VBMS access. This wait time suggests that VetPro uses the Benefits Intake API and not the faster Benefits Claims API for 21-22 submission. 

**Recommendations**

- Conduct research with pilot organizations to better understand the feature set of popular tools like VetPro and VetraSpec and determine whether and how our product can provide incremental value beyond these tools.
  - Ask our pilot organization, CT DVA, to give us a demo of 21-22 submission using VetraSpec, including the in-person and all electronic methods.
  - Consider piloting with a VetPro organization to learn more about this tool. Confirm whether and how VetPro is leveraging Lighthouse APIs.

- Roll-out: Continue with the current strategy of targeting organizations that do not use third-party tools and instead rely on QuickSubmit or SEP for establishing POA. An exception is the recommendation to pilot with a VetPro organization for learning purposes.
  - To support this approach, compile intel on what tools organizations use for 21-22 submission. 

### **Compared to the new ARP method of POA establishment, current processes are better suited to establish POA in an in-person setting and with Veterans who do not have VA.gov accounts.**  

- All participants preferred in-person interaction, at least initially. Participants from all organizations described a similar process of meeting in person with a Veteran at the start of the engagement and using part of this initial meeting to establish POA. When meeting in-person and using current tools for 21-22 submission (VetraSpec, VetPro, or QuickSubmit), it does not matter whether the Veteran has a VA.gov account because the representative is filling out and submitting the form. All the Veteran needs to do is review and sign the form.  
  - “Ideally, I do have Veterans come into the office because the conversations we have sometimes are difficult and complicated. Sometimes there are pictures and drawings involved, and it makes it a lot easier if they’re here in person.” — P2
  - [See Appendix ](https://docs.google.com/document/d/1xnDp0MbgVIkj79msIeQCWLrXfB_fwVD0/edit#heading=h.od1e275705x)for a more detailed description of the current process for CT DVA.

- Even though the new ARP method could be used in-person if the Veteran has a VA.gov account and a device for completing the Appoint a Rep flow, some participants did not think of using it this way. Instead, they perceived it as a method for a remote scenario only. 
  - “Because they’re not in front of me…..This is pretty impersonal. I don’t care for it.” — P4
  - “I think the portal is great, but I’m not sure there is a use for it during in-person” — P7 (This was the only pilot participant who had gotten requests into the portal at the time we did the interviews. See [Appendix](https://docs.google.com/document/d/1xnDp0MbgVIkj79msIeQCWLrXfB_fwVD0/edit#heading=h.78gl1oy2rv6z) for stories of the first two submissions to the portal.)
  - One participant envisioned establishing POA using the new ARP method, PRIOR to meeting with the Veteran for the first time. He would call all of his appointments ahead of time and ask them to submit POA before the meeting, so that they don’t need to take time for this and can instead look at the Veteran’s files during the first in-person meeting.  

- Many Veterans, particularly older Veterans, do not have a VA.gov account, which is required to submit the 21-22 online on VA.gov. Even for representatives that do adopt this new ARP method, they will still need to rely on other methods, e.g., third-party tools or Quick Submit, for Veterans without VA.gov accounts.

  - “As time goes on, there will be fewer and fewer Veterans who do not have a way to log into VA.gov. But we still have a huge swath of Veterans who are not going to have a VA.gov account….They are homeless, they do not own technology.  Even if they have a phone, which most people do, they’re not capable of navigating these apps and doing that.” — P6
  - One participant estimated that about a third of the Veterans he works with have a VA.gov account, while another estimated “fewer than 50%.”

- While participants recognize that there is value for Veterans in having a VA.gov account, only one participant mentioned helping Veterans set it up as part of their services. Other participants wish there were more resources to help with account setup.
  - Two participants noted referring Veterans to external resources for help, like VA hospitals and a local non-profit.
  - One participant was not aware of any support for this: “It would be terrific if they had kiosks somewhere, where these guys who don’t have laptops, where they can set it \[VA.gov] up in some way and then be shown how to get the app on their phone.” — P6 

**Recommendations**

Short-term (before broad release)
- Compile a list of resources that representatives can share with Veterans for help with setting up VA.gov accounts.
- When onboarding a new pilot organization, talk to organization leadership (including at least one experienced representative) early to understand their current process and talk through how the new ARP method could be incorporated.

Long-term (after broad release)
- Consider prioritizing a method for POA establishment that can be completed in person by the representative and the Veteran together and that does not require the Veteran to have a VA.gov account.

### **Concerns that stem from a lack of familiarity with the new ARP method can be overcome with improved marketing materials and onboarding methods.** 

Participants had other concerns with the new ARP method, related to their lack of understanding how Veterans would authenticate and submit the request on their end of the process. We anticipate that these concerns are not blockers to adoption, if we address them proactively.

- Four participants expressed concerns about the security of the system. They wondered how they could confirm where the request is coming from and that the Veteran is who they say they are.
  - “The other thing you worry about is if somebody else is submitting the POA for somebody else, and I know it might take a lot to do that because you have to sign into VA.gov, etcetera, but you never know.”  — P8

- Two participants talked about the importance of understanding the Veteran side of the process more fully before recommending it to a Veteran. Because we did not go through the full Appoint a Rep flow during the interviews, they were not familiar with the Veteran submission process, unless they were a pilot participant from CT DVA.
  - “I would never use the system with a Veteran until I was familiar with it… I am a Veteran but also I like putting myself as the test case. I would go to VA.gov and I would try to do a 21-22 and know those steps, so that when I tell them, I am telling them not just from me guessing what it is but from me knowing what it is.” — P2

- Other one-off concerns
  - One pilot participant was concerned with using their personal email for login.gov, and co-mingling personal and business accounts.
  - One participant wondered if representatives could get overwhelmed by too many requests. They were not aware that a repeat request would replace a prior pending request in the portal.

**Recommendations**

Short-term (before broad release)

- Create a new ARP portal 101 document that explains in plain language how the portal works. Proactively address fraud concerns by explaining the required authentication on VA.gov. Talk about how the Appoint a Rep flow was designed for ease of use and encourage representatives to test the experience for themselves. Explain that the ARP Portal is a separate website (with its own subdomain) from VA.gov and that there is no co-mingling of information between the two.

- Adjustments to the onboarding process for pilot participants.

  - Have all pilot participants go through the Appoint a Rep flow during an onboarding session.

  - Remind participants that they can associate multiple emails with their login.gov accounts and that at least one of them should be their professional email that is on file with OGC (this is necessary for our upcoming self-authentication method anyway). 


## 2a. Usability of POA functionality in ARP

### **Managing POA requests in the portal and the portal design overall, received positive feedback. Participants found the design straightforward and clear, and it was easy to complete tasks. But there are opportunities to add more clarity, and areas where functionality is insufficient.**

[Prototype used to test ARP pilot functionality](https://www.figma.com/proto/LVCQBuW7a6nfVFNyhA4kv4/ARF---Form-21-22-Power-of-Attorney?page-id=6080%3A808590\&node-id=6240-704563\&p=f\&viewport=-776%2C225%2C0.25\&t=NJwE0ybsJEubBqJO-1\&scaling=min-zoom\&content-scaling=fixed\&starting-point-node-id=6240%3A704563)

- Task 1: Review and accept/decline a POA request with full authorization

- Task 2: Review and accept/decline a POA request with limited authorization

- Task 3: Find the exact date you accepted a POA request last week

- Task 4: Instruct a Veteran on how to submit VA Form 21-22 so it can be accepted in the portal

|    |                          |                           |                                                      |                                                            |                                                                       |                                                                                                     |
| -- | ------------------------ | ------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|    | **Task 1 and Task 2**    |                           |                                                      | **Task 3**                                                 |                                                                       | **Task 4**                                                                                          |
|    | Find pending POA request | Accept/decline using form | See & understand blue processing alert               | Find processed POA request                                 | Find accepted date                                                    | Sees content about the online 21-22 method                                                          |
| P1 | Success                  | Success                   | Success                                              | Success                                                    | Success                                                               | Success                                                                                             |
| P2 | Success                  | Success                   | Success                                              | Success                                                    | Success                                                               | Success                                                                                             |
| P3 | Success                  | Success                   | Success                                              | Success                                                    | Success                                                               | Success                                                                                             |
| P4 | Success                  | Success                   | Partial success (sees alert, does not understand it) | Success                                                    | Success                                                               | Partial success (doesn’t see content, assumes done on [VA.gov](http://va.gov/))                     |
| P5 | Success                  | Success                   | NA                                                   | Success                                                    | Success                                                               | Fail (doesn’t see content or have any guesses how)                                                  |
| P6 | Success                  | Success                   | Success                                              | Success                                                    | Success                                                               | Partial success (doesn’t see content, knows there is a link in the [VA.gov](http://va.gov/) footer) |
| P7 | NA                       | NA                        | NA                                                   | NA                                                         | NA                                                                    | NA                                                                                                  |
| P8 | Success                  | Success                   | Success                                              | Fail (doesn’t notice Processed tab, wants to look in VBMS) | Partial success (sees accepted date after we point out Processed tab) | NA                                                                                                  |


#### POA request list page

**Findings**

- Reps like the simplicity of the design, the layout, readability, and usability.

  - “I like that it says VA at the top, I deal with a lot of sites that claim to be something they’re not” - P1

- The POA cards are easy to scan, but would be more helpful if they showed which specific individual was being requested.

- Reps wonder if there’s a quicker way to find a Veteran, instead of just scrolling the list. The most commonly requested ways for narrowing the list were by Veteran name and Veteran location.

  - “First thing I’m looking for is where the Veteran lives” - P3

  - “If there was an easy way for me to go in and search, then I would use this constantly.” - P3

  - “A search box with the ability to put the Veteran’s name and the last 4” - P3

- Processed tab receives positive feedback, reps appreciate the Accepted and Declined statuses added to the cards. One rep specifically appreciates that Declined requests are still displayed.

  - “Sometimes declined things just drop off the radar, and it’s nice to still see those” - P2

- Four reps mention “Power of Attorney” language is off-putting to Veterans who may not understand how limited this specific POA is.

  - “We use "representation" with Veterans” - P4

  - “Representation form" is what we call POA” - P7

- It would feel odd for reps to receive an unexpected POA request in the portal, this isn’t their normal workflow. They are used to having conversations with the Veteran before filling out the VA Form 21-22.

  - “I have questions. Usually I'm the one who helps submit that POA, so I’d be wondering where these POA requests were coming from” - P4

|                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXexYzxXHD5vaqj8MRqaU9F6MbizDQzAD-H6F3cdxx4E0gBlt3oU-PRc5ae8i7VcTf0wv2YgL-tvsDaGSwns-zrp4H0TWm5-BQL3azgXmpKO0EXk7u49zz7C9BOpTMFdvPHNNbyqxroFjIdF8krn4w?key=yUIemHjjhCS6GRrbc1Pecw) | **Recommendations**Short-term (before broad release)- ~~Add some basic sorting/filtering, consider: last name, state, zip code, organization name, individual rep name~~ (this is not technically feasible due to PII restrictions)

- Add a filter above the list of POA requests to narrow to just the logged in individuals request

  - [GitHub ticket for these changes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109123)

- Add more detail to POA request cards

  - requested organization name

  - requested individual rep name

  - [GitHub ticket for these changes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107292)Long-term (after broad release)- Add more robust side filter options to narrow by organization, individual representative, and location

  - [GitHub ticket for these changes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109131)

- Adjust sort options to best work with the new designs

- Explore the technical feasibility of allowing users to filter POA request list by typing a first name or last name into a search bar

- Explore if “Power of Attorney” is the desired terminology (for both reps, and the VA) when referring to VA Form 21-22 |
|                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |


#### POA request details page 

**Findings**

- Initial reaction: the page is well organized, clear, and the information easy to digest. Most reps find the details on the page to be adequate. The accept/decline form location is good, it forces reps to scroll through the details. Some reps have clarifying questions.

  - “That’s pretty slick” - P1 (re: accept/decline form)

  - “So this is everything I’d see before making a decision to accept or decline?” - P2

- Accepting a POA request

  - Most reps won’t blindly accept a request, which is consistent with our expectation that they want to speak with Veterans first (this is also communicated in the online VA Form 21-22 flow). Before accepting POA, they want to understand what the Veteran’s needs are, and if they have an existing POA or in-progress claim. One rep mentions wanting to make sure the working relationship is a good fit.

    - “Knowing if they have an existing POA is a determining factor” - P2

    - “I can’t just blindly take POAs. I’d reach out using the contact information here first, to see what they need” - P8

    - “We need to both want to work with each other” - P6

- Declining a POA request

  - Most reps won’t outright decline a request. If there’s a problem with the request, they’ll contact the Veteran to explain the issue (usually that the Veteran didn’t give full authorization) and ask them to fix the form and resubmit.

  - If Veterans are hesitant to give full authorization, reps explain that their ability to help the Veteran will be limited, but most participants in our study  said they wouldn’t pressure the Veteran to give full authorization if the Veteran remains uncomfortable with it.

  - Unexpected finding: Many reps will still accept the request if the Veteran doesn’t give authorization. Only two reps said they require full authorization to accept a POA. 

    - “In 5 years, I don’t think I’ve declined a POA request” - P1

  - The only consistent reason all reps gave for declining requests is if the Veteran is outside the territory the rep is allowed to serve.

- There is some confusion over authorization. We could consider adding content to the POA details page that explains the implications.

  - More than one rep stated that if Veterans don’t authorize address change, the rep won’t be able to access any records.

    - “Limited medical is less important, change of address is a bigger deal, otherwise I won't be able to see any of his documents in VBMS” - P6

    - “Even change of address unauthorized will lock us out of all documents” - P3

- The accept/decline form can be improved.

  - There are reasons for declining a request that aren’t currently in the form (Veteran is outside of the rep’s territory, for example). Reps wonder if we need to add more options, or maybe provide a blank field so they can explain the declination to the Veteran.

    - “I think it’s important to close the loop on communication” - P1

  - Reps have questions/concerns that might be remedied by improving content. One rep asks for clarification on the Veteran receiving an email about the accepted or declined request (this is mentioned in hint text on the form). Another rep feels strongly that “decision” isn’t the correct language to use when talking about accepting/declining a request, and sounds like a VA decision.

    - “If I accept or decline this, does the Veteran get an email?” - P3

    - “Why does it say submit decision?  That's a confusing button there, it’s not a decision. Submit document." - P5

- The blue processing alert is helpful and feels expected, and the content is clear to most reps.

  - “I like that” - P3 (re: the alert specifying the expected time period)

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfYShcdNSAx_EBeY2UhOFyUyeiTLUC2c7VYuCD9RXfBp7C4MquwBhmL18WEvrqUqwiRDCF2bMoNrUDDBcMrqXihOUkDX2WRVXV-ZtpmhLhiDRtlrwAnm1RokfEqbl6cZRTf8V94X5mkODUQyPphCPU?key=yUIemHjjhCS6GRrbc1Pecw)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9UUXb8r5jFWkNlAXlF40EywafEib7tFoNIEFdP2rYKqG0IcPFtDMmdwhIpj5pZS5cN6AftUA4tf2pDU6tRKaM6jiILJmuAw45Pn_ZTIDqpjxL8-S5geVncKfTB6WO9asoNKVymd1dA1mIdgVxxXw?key=yUIemHjjhCS6GRrbc1Pecw) | **Recommendations**Short-term (before broad release)- Add the name of the requested individual to the POA details page

- Consider adding content that explains the implications of authorizations

- Considerations for the accept/decline form

  - Add radio button: Decline, because claimant is outside the organization’s territory

  - Add content explaining that submitting a new POA request will replace the existing request, or option to nudge Veteran to update and resubmit

  - Consider replacing the term “decision” with something more fitting (on the submit button, and the blue progress alert)

- Show declination reason on the page after a request is declined

- [GitHub ticket for these changes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109129) |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


## 2b. Concept testing future design ideas

### **Participants favored concepts that gave them granular, yet flexible options for searching, sorting, and filtering POA requests. They expect to be able to search the portal using the same information they search in similar systems.** 

#### Concept: VSO switch

The perceived value of this concept is mixed. Some reps find it valuable, while others think there are alternative methods of sorting the list that would work better for them.

**Recommendation:** We recommend not implementing the VSO switch, as reps would ideally like more robust filtering options.

|                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcEc24cKQeCE_q9YbvVSpbBXjOz4dBrsJeh7dKc_KR2gZR4NAlVaHcAv1GvIm0dDxBWmkSfaipjxSKhPivZzrHFod1Zo92ulTUM_Hby93tkC1m4xLZEm4it2odBzFRnk-dflRC84FLdEC_tCGkaMg?key=yUIemHjjhCS6GRrbc1Pecw) | **Quotes*** “I like that” -P3

* “Yes this would be extremely useful for those of us who are cross accredited” -P5

* “​​I guess you'd have less pending requests” -P5

* “More value in searching by name” -P1

* “This might be better suited for another user type” -P1 |


#### Concept: POA granular search/filter

Reps prefer the more granular search/filter approach over the VSO switch when searching through a long list of results. They like the more granular “Request status” filter (compared to the current Pending and Processed tabs). They also like that “Claimant type” is an option, and one rep mentions this provides insight into the type of claims that individual may need help with.

**Recommendation:** we recommend moving forward (long-term) with a search and filter design that aligns closely with this concept.

|                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4iJaMmvklb5-vwg4t7bWsMINwKIB21plYq_aTbi9r04Vu6axt_dinxVO88MYPS01I71DPKS8HqQ2IuYFoAd7VOYlXOIipWgttwxICKjA4khH98E01o3ZYHy0W9ysZFWmxRMxy06XATXg2lNxVSpc?key=yUIemHjjhCS6GRrbc1Pecw) | **Quotes*** “Pending and Processed are great; filters are even better" -P1

* “Search would be very helpful to search requests by name” -P7

* “I prefer this one because it gives me more options” -P3

* “We could use this to send a weekly report, this could do the counting for us” -P5

* “I feel like these will be very convenient down the road” -P7

* “Veteran vs. non-Veteran is helpful, it tips us off to the type of claims they might be looking for” -P7 |


#### Concept: Claimant search

Reps are happy to see familiar-looking search fields, especially SSN. Some reps question why all four fields are required to complete the search, as they’re used to searching just SSN in some systems. When asked what the rep expects to see after searching, responses are split between seeing search results that look similar to POA request cards, or being taken directly to a page or dashboard with details about the searched claimant.

**Recommendation:** We recommend that engineering explore the feasibility of searching by fewer required fields.

|                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfZGmYMIFJL_DzLq4IzFXd56gxpYyUpbXBZqXgEFTUki8nEF0IN1nevd1TshV0xeGNMQ4hE-RNCZqeKAerssr9KV0jh01uL2jlzYNg_0RKPVUoX5YTrtOIELG_bkCpkrWkJWGIN3IIV0HT2MMhp8g?key=yUIemHjjhCS6GRrbc1Pecw) | **Quotes*** “This would be useful when you have a lot of requests and you're trying to jump straight to an individual” -P1

* “This is difficult. If we want to make it easy for VSOs to search First name, last name, last 4.” -P3

* “First name and last name should be sufficient” -P7 |


## 3. Notifications

**Representatives would benefit from notifications of key POA activity in the portal, but have concerns about notifications becoming noise.** 

- Reps came up with a number of ideas for notifications they’d find helpful related to the portal. Being notified of a new POA request and a change to representation were the most frequently noted. 

- There is concern about noise with notifications if it is not configurable.

  - "If I get a notification for every status change I will start to ignore them." - P1

  - “Notifications are good for urgent matters” - P5

- One of the cross-accredited reps with a large org flagged specifically that they would want to configure by VSO org or by geographic area.

**Recommendations**

Short-term (before broad release)

- As the default setting, explore the technical feasibility of limiting notifications to just those that are specific to the individual representative.

Long-term (after broad release)

- Explore the feasibility of notifying representatives of changes in POA. Example: Veteran has POA with CT DVA and changes POA to another organization. CT DVA representatives get notification that their POA has been revoked. 

- Explore configuration options for notifications. Ideas: Ability to turn on/off overall, ability to select organizations, ability to select geographical area, ability to specify if you want to receive only requests directed to you as the individual or to your whole organization. 


## 4. Cross-accreditation

### **Cross-accredited representatives do not care what organization has POA**

- Two cross-accredited representatives noted that it is up to the Veteran what organization to choose and that cross-accreditation gives Veterans options. 

  - “It’s not up to me, it’s up to the Veteran” — P3

- One representative noted the benefit of being able to pick up new clients without needing a new POA, since many clients have prior POAs.

- EXCEPTION: One participant noted one of her three accredited organizations handles Veterans with a dishonorable discharge. The other organizations in the state prefer not to take these cases.


## 5. Technology setup and usage of help resources

### **We should design the ARP Portal with desktop users in mind, because representatives do their work on a laptop, often with one or more external monitors.** 

- In the office, all eight participants had a laptop with at least one external monitor. Several participants had 2 or even 3 additional monitors.  

  - “I have dual monitors. They are 24-inch HP monitors. I actually have a third monitor. And I have a TV mounted on the wall…I use it for in-person engagement, so I just mirror one of my computer screens so that my clients or my Veterans, if I’m working on a form. for example, \[can see it].”

- In the office, participants also have a work phone, printer, scanner and signature pad (for capturing signatures digitally).

- Four of the eight participants go into the field and serve Veterans in other locations, such as libraries or town halls. Their outreach setup includes a laptop, portable printer, hotspot, portable signature pad and cell phone. 

**Recommendations**

Long-term (after broad release)

- Explore feasibility of global design adjustments to the ARP Portal, while still leveraging the VA design system. Areas to explore:

  - Adjusting size of the viewport (max width) to accommodate design elements like tables and multi-column layouts that are more typical of desktop applications.

  - Adjusting the font size (smaller headings and/or smaller font for body text) to achieve greater density of information for expert users.

- If adjustments are feasible, test adjusted designs against the current state with representatives.


### **Contacting their regional office (RO) was the most frequently mentioned help channel for resolving issues. (This is based on analysis from this study and the April Usability Test of Claims Submission study.)**  

- Many representatives will work closely with their RO for help resolving issues with claims. The nature of the relationship depends on the representative and the RO, with some representatives relying on a supervisor to maintain the RO relationship.

- Participants mentioned a few other help channels that they have used.

  - VSO help line: 855-225-0809

  - VA benefits hotline (1-800 number)

  - AskVA

- Of the seven participants (across both studies) who were specifically asked whether they had used AskVA ever, four said they had and three said they had never used it. Some participants were not sure they had even heard of AskVA.

**Recommendations**

Short-term (before broad release)

- We should work internally to determine the most appropriate channel to direct representative technical questions about the ARP Portal.  Outside of contacting the RO, there is no one channel that representatives prefer using.


# Other findings

Below are other findings that are of interest, but not specific to the goals of this study.

- Three participants noted using a tool called “Share” to see which organization has POA with a Veteran. We would like to learn more about this tool and why reps can get access to it, even though per OGC, representatives should not have the ability to view the current POA if it is not with one of their accredited organizations.  

- Participants expressed varying perspectives on whether Veterans should take actions on their own vis-à-vis the VA or whether they should solely rely on the representative. Part of the challenge stems from the lack of visibility a representative has into actions a Veteran is taking.

  - “We are trying to empower the Veterans to use their own voice to advocate for themselves, to reach out to the primary hotline, 1-800-827-1000.”  — P1

  - “There are things on there \[VA.gov]  that I don’t want them to touch…if they send something to the VA without our reviewing it, and the claim gets denied. And we have no idea what they sent, it does make it challenging for us. I actually have a memorandum from the Veteran, if they do that, we will no longer represent them. Everything has to go through us.” — P3

- One participant suggested that he thought some organizations required claim review before submission to the VA, so that they can “track their numbers” and get credit for those claims. The purpose is not to review the claims submission for quality. 

- One participant noted that “pension is the most inconvenient process in the VA for benefits.” Could this be an area for exploration to determine if the ARP portal could improve this process for representatives?


# Appendix

## CT Veterans Affairs current process for establishing POA

At CT DVA, our pilot organization, each representative is assigned a Congressional District and covers towns within that District. There is a main office that takes emails or phone calls and creates a filtered list by town. Representatives pick up clients from this list in the order received.

We spoke with three representatives from CT DVA. They all had a similar process of first discussing with the Veteran their needs and determining if they can help. They typically will have a first meeting in person and use that time to explain the process and the purpose of the power of attorney (very limited, just gives the representative the ability to speak to the VA on their behalf).

They use VetraSpec (Tyler Technologies) to establish them as a new client (if they are not already in their system) and then generate a PDF of the 21-22 from the system. The representative fills out the form and then reviews it with the Veteran. Both the Veteran and the representative need to sign the form. They use a digital signature pad to capture the signatures (and this signature can be used then for future purposes). They then submit the 21-22 through VetraSpec, leveraging the Benefits Claims API. As long as the Veteran is in the VA system, the VA can process the claim almost immediately (“within 5 minutes”), and they can view the Veteran’s file in VBMS. If the Veteran is not in the VA system, they use what they call “Direct Submit” in VetraSpec,  which takes longer (presumably, this method goes through Central Mail). One representative said they use QuickSubmit as backup in these scenarios, in addition to using VetraSpec.

We learned that VetraSpec recently updated their functionality to include a fully electronic method for completing the 21-22. With this new ARP method, the representative can fill out the 21-22 and email the document directly from Tyler to the Veteran. The Veteran can sign electronically and return the documents to the representative for submission to the VA.


## Pilot participant experience

We talked with three pilot participants from CT DVA about their experience with the ARP Portal. One participant had not yet logged into the portal at the time of the interview, because of concerns with comingling business and personal information. Another participant had tested the Appoint a Rep flow on his own and felt he had a good grasp of how it looks on both sides. They were trying to identify clients who could use the new ARP method and had a young Veteran coming in soon. The last participant had used the method two times, but wasn’t sure there was a good use for it in person. Below are descriptions of how the first two submissions came about. 


### **First submission**

The representative initiated the first submission when they were wrapping up the day at a remote location and had already packed up. Online submission via VA.gov made it possible to establish POA without the representative having to set up again (computer, signature pad, etc.). The Veteran submitted using a mobile device, and the representative watched the Veteran go through the flow. It was quick and fast! The only hitch the representative could recall was the search function. The Veteran searched for Farmington and got all results in Farmington, CA (instead of CT,) and the representative’s name did not appear in the search results. The representative helped the Veteran adjust the search to Connecticut.


### **Second submission**

The representative initiated the second submission for a Veteran who lives far away from the representative’s office. Because the representative (who does field work) would not visit the area for another month, they used the new ARP method to establish POA without having to meet in person.


## Summary of recommendations

### **Short term recommendations (before broad release)**

|                                     |                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ARP adoption**                    | Conduct research with pilot organizations to better understand the feature set of popular tools like VetPro and VetraSpec and determine whether and how our product can provide incremental value beyond these tools.                                                                                                                                                                                  |
| **ARP adoption**                    | Roll-out: Continue with the current strategy of targeting organizations that do not use third-party tools and instead rely on QuickSubmit or SEP for establishing POA. An exception is the recommendation to pilot with a VetPro organization for learning purposes.                                                                                                                                   |
| **ARP adoption**                    | Compile a list of resources that representatives can share with Veterans for help with setting up VA.gov accounts.                                                                                                                                                                                                                                                                                     |
| **ARP adoption**                    | When onboarding a new pilot organization, talk to organization leadership (including at least one experienced representative) early to understand their current process and talk through how the new ARP method could be incorporated.                                                                                                                                                                 |
| **ARP adoption**                    | Create a new ARP portal 101 document that explains in plain language how the portal works.                                                                                                                                                                                                                                                                                                             |
| **ARP adoption**                    | Adjustments to the onboarding process for pilot participants. Have all pilot participants go through the Appoint a Rep flow during an onboarding session. Remind participants that they can associate multiple emails with their login.gov accounts and that at least one of them should be their professional email that is on file with OGC.                                                         |
| **POA list page**                   | Add a filter above the list of POA requests to narrow to just the logged in individuals request                                                                                                                                                                                                                                                                                                        |
| **POA list page**                   | Add more detail to POA request cards: requested organization name, requested individual rep name                                                                                                                                                                                                                                                                                                       |
| **POA request details page**        | Add the name of the requested individual to the POA details page                                                                                                                                                                                                                                                                                                                                       |
| **POA request details page**        | Consider adding content that explains the implications of authorizations                                                                                                                                                                                                                                                                                                                               |
| **POA request details page**        | Considerations for the accept/decline form: Add radio button: Decline, because claimant is outside the organization’s territory; Add content explaining that submitting a new POA request will replace the existing request, or option to nudge Veteran to update and resubmit; Consider replacing the term “decision” with something more fitting (on the submit button, and the blue progress alert) |
| **POA request details page**        | Show declination reason on the page after a request is declined                                                                                                                                                                                                                                                                                                                                        |
| **Concept: VSO switch**             | We recommend not implementing the VSO switch, as reps would ideally like more robust filtering options.                                                                                                                                                                                                                                                                                                |
| **Concept: granular search/filter** | We recommend moving forward with a long-term search and filter design that aligns closely with this concept.                                                                                                                                                                                                                                                                                           |
| **Concept: claimant search**        | We recommend that engineering explore the feasibility of searching by fewer required fields.                                                                                                                                                                                                                                                                                                           |
| **Notifications**                   | As the default setting, explore the technical feasibility of limiting notifications to just those that are specific to the individual representative.                                                                                                                                                                                                                                                  |
| **Notifications**                   | Explore the feasibility of notifying representatives of changes in POA. Example: Veteran has POA with CT DVA and changes POA to another organization. CT DVA representatives get notification that their POA has been revoked.                                                                                                                                                                         |
| **Notifications**                   | Explore configuration options for notifications. Ideas: Ability to turn on/off overall, ability to select organizations, ability to select geographical area, ability to specify if you want to receive only requests directed to you as the individual or to your whole organization.                                                                                                                 |
| **ARP Help**                        | We should work internally to determine the most appropriate channel to direct representative technical questions about the ARP Portal.  Outside of contacting the RO, there is no one channel that representatives prefer using.                                                                                                                                                                       |


### **Long term recommendations (after broad release)**

|                   |                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ARP adoption**  | Consider prioritizing a method for POA establishment that can be completed in person by the representative and the Veteran together and that does not require the Veteran to have a VA.gov account.                                                                                                                                                                                                                                       |
| **POA list page** | Add more robust side filter options to narrow by organization, individual representative, and location. Adjust sort options to best work with the new designs                                                                                                                                                                                                                                                                             |
| **POA list page** | Explore the technical feasibility of allowing users to filter POA request list by typing a first name or last name into a search bar                                                                                                                                                                                                                                                                                                      |
| **POA list page** | Explore if “Power of Attorney” is the desired terminology (for both reps, and the VA) when referring to VA Form 21-22                                                                                                                                                                                                                                                                                                                     |
| **Notifications** | Explore the feasibility of notifying representatives of changes in POA. Example: Veteran has POA with CT DVA and changes POA to another organization. CT DVA representatives get notification that their POA has been revoked.                                                                                                                                                                                                            |
| **Notifications** | Explore configuration options for notifications. Ideas: Ability to turn on/off overall, ability to select organizations, ability to select geographical area, ability to specify if you want to receive only requests directed to you as the individual or to your whole organization.                                                                                                                                                    |
| **Technology**    | Explore feasibility of global design adjustments to the ARP Portal, while still leveraging the VA design system. Areas to explore: Adjusting size of the viewport (max width) to accommodate design elements like tables and multi-column layouts that are more typical of desktop applications; Adjusting the font size (smaller headings and/or smaller font for body text) to achieve greater density of information for expert users. |
| **Technology**    | If adjustments are feasible, test adjusted designs against the current state with representatives.                                                                                                                                                                                                                                                                                                                                        |
