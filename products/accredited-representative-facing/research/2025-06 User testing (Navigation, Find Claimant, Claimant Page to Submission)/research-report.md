# Research Findings for User Testing of Find Claimant, Claimant page and Navigation June 2025

Office of the CTO - Digital Experience (OCTO-DE), Accredited Representative Facing Team

Date: 06/2025

* Laura Paradis and Kate Albee (research preparation, session moderation, notetaking, interview synthesis)
* Eva Heintzelman (research preparation)

Product: Accredited Representative Portal (ARP)

Type of Research: User Interview and Usability test

Jump to:

* [Background](#Background)
* [Research Goals](#Research-Goals)
* [Executive Summary](#Executive-Summary)
* [Participant Sample](#Participant-sample)
* [Key Findings and Recommendations](#Key-Findings-and-Recommendations)
  + [ARP navigation is intuitive enough](#ARP-navigation-is-intuitive-enough)
  + [Representatives expect a dashboard and search fields they can complete](#Representatives-expect-a-dashboard-and-search-fields-they-can-complete)
  + [Representatives appreciated the clear simple claimant page as is currently designed](#Representatives-appreciated-the-clear-simple-claimant-page-as-is-currently-designed)
  + [Enable multiple options for submission when available](#Enable-multiple-options-for-submission-when-available)
  + [Representatives held a more positive perception of this submission solution than the prior design shown](#Representatives-held-a-more-positive-perception-of-this-submission-solution-than-the-prior-design-shown)
* [Additional Insights](#Additional-insights)
  + [Signature workflow](#Signature-workflow)
  + [Uploading an additional piece of evidence for an existing claim](#Uploading-an-additional-piece-of-evidence-for-an-existing-claim)
* [Appendix](#Appendix)
* [Resources](#Resources)

# Background

The Accredited Representative Facing (ARF) Team is building an Accredited Representative Portal (ARP) that will allow Veteran Service Organization (VSO) representatives to submit online any claim and supporting evidence to the VA. Currently, representatives mail, fax, use QuickSubmit, Stakeholder Enterprise Portal (SEP) or third-party tools to submit claims and evidence.

In this version of ARP that we are testing, representatives search for a specific claimant which then leads them to a Claimant Page. From this page they can submit a claim, view claimant information, view representation requests, or view claimant’s submission history. In this version, the navigation only shows “Find Claimant,” “Representative requests,” and “Help,” with “Your recent history” as part of a dropdown menu underneath the representative’s name.

# Research Goals

* Evaluate the navigation. Are the sections and their purpose clear?
* Evaluate the usability of the search. Is it clear and intuitive? What could be improved?
* Evaluate the value of the Claimant Page overview. Is the information useful? What could improve its value?
* Evaluate the clarity and value of the claim submission flow, starting from Claimant Page. What could be improved?

# Executive Summary

Participants found overall, that this design solution to submit forms felt similar to or better than QuickSubmit but still lagged behind other third-party tools like VetraSpec and VetPro. Representatives appreciated the simple one-page claimant overview, and several recognized that ARP required them to complete fewer fields than QuickSubmit. The navigation of the site felt simple and intuitive enough, especially because at this point, the site it still small. To be comparable or better than third-party tools, representatives called out features such as pre-filled forms (e.g. with demographic information) forms, VetPro’s signature solution, synchronous confirmation sent to Veteran, and including additional context on the Claimant page.

# Participant sample

Our sample skewed toward more experienced representatives. All the representatives used QuickSubmit and came from both state and national organizations. Representatives worked with a range of Veterans from rural or more urban areas. P4 also particularly worked with Veterans ages 70+, who did not utilize digital applications as much as other populations. The following chart highlights key characteristics of these participants.

|  | VSO | Tools used | Cross/Single accreditation |
| --- | --- | --- | --- |
| P1 | DAV | QuickSubmit, SEP | Single |
| P2 | VFW | SEP, QuickSubmit,  VetraSpec | Single |
| P3 | Missouri Veterans Commission | QuickSubmit, state-based software eVetAssist | Single |
| P4 | Vietnam Veterans of America, Berkshire County | QuickSubmit, VetPro | Cross |
| P5 | Alabama Department of Veterans Affairs, American Legion | QuickSubmit, VetPro | Cross |

# Key Findings and Recommendations

## ARP navigation is intuitive enough

Each participant completed 3/4 or 4/4 navigation tasks successfully. Though this is small sample, representatives felt very confident in their ability to navigate this site (their confidence ratings were at 4s or 5s out of a 5 point scale). The site felt simple enough to easily learn and understand what was behind each section.

* “It's gonna take some time to learn, but I would think it would be pretty easy... It's very simple...not very many options to choose from to get lost.” (P5)

Most participants also accurately described the difference between "Submission history (under Claimant)" and "Your recent history (under My Profile)." In our initial releases however, these sections will be the same.

**Recommendations**

Prior to first release: Add a note in Submission History to state that "We are working to add more submissions in this view. "

## Representatives expect a dashboard and search fields they can complete

### Landing page after log-in: Find Claimant
In our prior study, representatives raised some unexpected questions about this page. In this study, we examined this page in more depth.

![image (11) Medium](https://github.com/user-attachments/assets/7927bf5e-a05b-49e9-8e00-5c50701c41e0)


Similar to the last study, the majority of representatives (4/5) did not expect, but accepted landing on the find claimant page after log in.

* 3/5 expected a dashboard of activity and to-dos
* 1/5 wanted to directly see the claimant's information (based on the scenario).
* “When I when I log in and authenticate myself, my assumption is I'm going to go to my dashboard portion... And if I wanted to go to the extra mile of finding someone, that would be a separate option... [This design is] assuming every time I log in, I want to go find someone, that’s not necessarily true.” (P4)

Additionally, we learned that representatives interpret “limited POA” as having limited access to Veterans’ files in VBMS (e.g., medical records), which is not how we intend them to interpret that phrase.

### Find Claimant search fields

We tested a truncated version of the search (removing birthdate) with only three required fields, because two prior studies showed that representatives felt that four fields including birthdate was cumbersome.

While the three fields shown felt appropriate, representatives acknowledged that they may not know a claimant's Social Security Number or birthdate prior to accepting representation requests. If they did not know this information, they would call the claimant to ask and did not seem alarmed to do so. They also may not know what first and last name the claimant uses in the VA system. One representative stated that he would prefer to search by Social Security Number and get multiple results rather than attempt to get the accurate first and last name.

Any search whose fields request information that the representative does not immediately have will require more effort. The only information representatives readly have is the Veteran’s contact information; two representatives use claimant's phone number or last four digits of the phone number. These representatives also recognized however that this contact information may match what is in the VA system.

**Recommendations**

Prior to first release:

1. Remove sentence "Results do not include limited POAs." Conduct some desk research on what we want reps to understand when it comes to the definition of limited POAs. Rephrase it in terms they will understand.

Post first release:

* Conduct design discovery on what a landing page might be. Several representatives noted the following could be useful pieces of information.
  + High-level view of what was pending or recently completed
  + Organizations the representative is accredited with
  + Status of submissions
* Follow up with this SSN ticket to understand possibilities around search and selecting a more optimal solution over the current one, based on representative preferences and how they search in other tools. Also, having more comprehensive sort and filter options in Representation requests would help to resolve this issue.

## Representatives appreciated the clear simple claimant page as is currently designed.

![image (12) Medium](https://github.com/user-attachments/assets/02964d14-bcfc-47ca-804e-afd43a87384e)


### Claimant page alerts

Participants readily noticed the representation request pending alert and also appreciated the alert icon beside an intent-to-file that was soon to expire. 1/5 participants wanted the ITF expiration notice to be included in this top alert, as one central place for all alerts.

**Recommendation**

Post first release:

Consider a more holistic alert design for portal for the following immediate scenarios.

* Pending POA request
* POA failed
* Claims submission processing error

### Claimant page sections on representation

5/5 Representatives interpret "General POA" as having full access to all the Veterans’ files in VBMS (as they typically do when they accept 21-22) and "Limited POA" as having limited access to these files.

Also, representatives stated they could look up which organization a Veteran was accredited with in SHARE, even if they did not have POA for them. So 4/5 participants believed that they could see representation requests to organizations they were not accredited with. We don't expect that representatives will fully understand this rule if representatives can access this information in SHARE.

* “SHARE allows us to be able to tell somebody who their POA is... So if I don't have access to VBMS, I can plug their social in the SHARE and then I can direct them down the hall and tell them, hey, you're represented by the state ... If you want to go down there and see if they can help you now, they have access immediately.” (P1)
* When not seeing information about the Veteran’s current representation, one participant stated, “Give me who the [accreditation is with] ... who he is represented by [because] that’s not HIPAA or privacy act. Because I can look at it on SHARE.” (P3)

**Recommendation**

Prior to first release:

* Change "General POA information" to "Current representation" and remove the note on general POA. Conduct some desk research on what we want reps to understand when it comes to the definition of limited POAs. Rephrase it in terms they will understand.
* Change copy from "Recent representation requests" to "Your organizations' requests." Though we recommend this content change, we realize this change will likely not increase representatives’ understanding of what they are allowed to see.
* Add some information in Recent representation requests to identify that these requests only include requests submitted digitally through va.gov from the past 60 days.

Post first release:

* Consider a longer-term content strategy for helping representatives understand that representation requests are digital from 60 days only, while other parts of the portal like Claimant page -> Submission history will show a wider set of information.

### Intent to File (ITF) section

All participants enjoyed seeing ITF on the claimant overview page.

* P5 used the word “cool” three separate times when providing feedback on the ITF section. “I thought it was actually pretty cool. Like it shows when they submitted it shows whenever it expires so I can inform the Veteran, ‘Hey you have this amount of time until your stuff expires to actually file a claim.’ ”
* “I like not having to go to another tab to have an ITF... he's got an ITF expiring in June. We would definitely wanna be filing right away.” (P2)

For non-Veteran claimants, we are not certain if an ITF for the Veteran and an ITF for a non-Veteran claimant can exist at the same time. If a widow of a Veteran wants to file a claim, the representative and widow would want to see whether an active ITF for the Veteran exists. In that case, the representative would file for a Substitution of the claim, which would allow the widow to act as the Veteran in filing of this claim. That widow at some point may also have their own ITF.

**Recommendation**

Post first release:

* Conduct desk research to understand this scenario and what ITFs might exist for non-Veteran claimants. Design for this scenario.

### Improving the claimant page further

3/5 participants noted that more context about the Veteran would improve the usefulness of this page further. The portal could act more like a "one-stop shop" (P1) rather than having to go to VBMS.

* “If it's kind of a one stop shop then you would want to know do they have an ITF pending? Do they have a claim pending? What information has previously been service connected? What contentions I should say have been previously service connected? And what have they been denied for?” (P1)
* “You know if the veteran has like a service connected disability, I don't even don't even need to know what it is... but it would be nice to have 20% service connected disability or veteran non-service connected pension since [insert date]...Flags for like homelessness, financial hardship, I think that would be very, very beneficial... it changes my priority of their claim.” (P2)

**Recommendation**

Post first release:

* Identify if we could add other Veteran characteristics to the claimant page that representatives continuously refer to, such as the Veteran’s disability rating or flags for expedited handling.

## Enable multiple options for submission when available

![image (13) Medium](https://github.com/user-attachments/assets/decaa9dd-74d9-4388-be54-990695a37596)


### Submit Forms

Participants preferred different submission options based on their situation and context. There is no one path that would meet all their needs. Sometimes, they need to mail a form for a Veteran who is housebound, or a representative finds it easier to review a complex 526EZ on pdf they want to review a complex 526EZ (in this case the representative felt like it was easier to review a complex case on pdf).

In the example we shared that included two options for creating an ITF, “Fill out ITF online – Active within minutes” and “Start ITF submission through form upload tool,” 3/5 participants accurately interpreted that “Fill out ITF online” would lead to a digital form that would establish ITF faster than the other option. One participant, however, interpreted "Fill out" as meaning he would need to complete a pdf form.

While 3/5 participants would only select the faster option for completing an ITF, one wanted both options presented. One participant did not trust the digital submission process after a negative experience with QuickSubmit, and so finds it easier, faster and more effective to call the 1800 number, with Veteran on speakerphone, to establish the ITF over the phone.

* “If we're talking like a 526, I think having both options would be beneficial. Sometimes claims are a little more involved and you need to go in and manually do things and make sure you're crossing the t's and dotting the i's… but if it's like, you know what are you filing for claim for increase for hearing loss... And it's one button... that would be awesome.” (P2)
* “I feel like there is a time that I would have to utilize [the ITF submission options], you know differently. It just depends on the veteran, the situation and so forth.” (P5)

**Recommendation**

Prior to first release:

* When both synchronous establishment and form upload options both exist, offer both options. We can't guess the scenario.
* Consider using word like "Submit" or "Complete" ITF online instead of "Fill out."
* Change “Start submission through form upload tool” to "Upload completed form.”
* While "Active within minutes" is appropriate for ITF, another phrase may be needed for other form types (e.g. "Faster processing to VBMS").

## Representatives held a more positive perception of this submission solution than the prior design shown

Overall finding: While we still fall short of other VetPro or VetraSpec, representatives perceived us as being about the same as QuickSubmit, and our long-term roadmap includes features that will get us even closer to parity with third-party tools (pre-filled pdf forms and utilizing RBPS API for 21-686c)

### Previous study

|  | Now that you’ve walked through this, how would you compare this approach to the current way you are using to submit 686c. Is it better, worse, or the same? | Does this seem faster, slower, or about the same as your current approach to submitting the 686c? |
| --- | --- | --- |
| P1, QuickSubmit | Same | Same |
| P2, VetPro | Worse | Slower |
| P3, Proprietary and SEP | Same | Slower |
| P4, SEP and QuickSubmit | Worse | Slower |
| P5, Vetraspec | Worse | Slower |

This study has more participants who felt this solution was about the same as their current one, and two participants who noted it was better in some ways.

|  | Now that you’ve walked through this, how would you compare this approach to the current way you are using to submit 686c. Is it better, worse, or the same? | Does this seem faster, slower, or about the same as your current approach to submitting the 686c? |
| --- | --- | --- |
| P1, SEP and QuickSubmit | Same | Faster than QuickSubmit |
| P2, QuickSubmit, SEP, VetraSpec | Worse than SEP | Slower than SEP |
| P3, QuickSubmit and eVetAssist | Better | Same |
| P4, QuickSubmit, VetPro | Same | Same |
| P5, QuickSubmit, VetPro | Same as QuickSubmit | Slower than VetPro |

* "In QuickSubmit I have to always put in six or eight pieces of information. Name, file number, zip code, category is it pension, is it compensation? And then there's the drop down box to confirm that it's under the organization that I'm submitting for.... But the other thing that I didn't see on here was the ability to flash." (P4, on the pros and cons of ARP and QuickSubmit)

### Changes to the submission flow steps 1-2

For step 1, 2/5 participants explicitly requested that the Veteran also receive the email. 3/5 representatives noted they would typically email the Veteran this confirmation of submission. If we can also send an email to the Veteran with the confirmation, this capability would streamline representatives' workflow.

For step 2/2, at least one person noted they like to preview the submission prior to sending, similar to QuickSubmit. This mirrors what we heard from the QuickSubmit study; one participant used this feature to double check what was being sent.

On the confirmation page, our participants noted that the most common next step is to email the Veteran or copy the confirmation into their own system. Aside from that, representatives base their next step on whether or not they would have additional forms to submit on behalf of this claimant.

**Recommendations**

Prior to first release:

* On step 1/2 under “Upload files” change “Upload VA Form” to “Upload VA Form 21-686c.”
* On step 1/2, clarify whether or not any characters are acceptable in the file name.
* On confirmation page, provide a link to "Submissions History (under claimant)"

Post first release:

* Discuss with engineering on how to coordinate messaging to Veteran and to representative.
* Discuss with engineering and other relevant parties on what preview capability is and should be possible given data privacy.

# Additional insights

Based on prior studies, we asked some open-ended questions at the beginning of the study related to signatures and additional evidence uploads.

### Signature workflow

While representatives may legally sign forms on Veterans’ behalf, their preference is for Veterans to sign. All five participants we spoke with wanted Veterans “fully informed (P2)” so in most cases will obtain an electronic signature (VetPro signature solution, signature pad) or in-person wet signature depending on the situation. When representatives request for an electronic signature, they get verbal consent prior to applying the signature.

Overall, representatives expected Veterans to sign for the following types of forms.

* Initial claim (This also follows a VA rule that Veterans sign the initial claim.)
* 21-686c Adding or Removing dependents (Representatives felt comfortable signing for the Veteran in SEP, but not on a pdf version of the form.)
* Anything related to financial reporting such as the financial status report waiver

Representatives felt more comfortable signing on behalf of a Veteran for the following types of forms.

* Supplemental forms
* New service connection (e.g. PTSD)
* Other "straightforward" claims that are not initial claim.

The following quotes describe the nuances of form signatures in greater depth.

* “If they want to do an appeal, that's going to be their signature. If they want to verify their dependents, that's going to be their signature. If they're asking for like a financial status report, waiver, you know, because they're limited funds that has to be their signature... Because I’m not going to be able to corroborate how much money they have coming in or coming out ...” (P1)
* We can file supplemental claims on their behalf, higher level reviews, appeals to the board. We can sign 21-0781 is on their behalf, but then like dependency forms if we are filing the physical forms, it has to be signed by the either the veteran or the claimant... Anytime we are signing on behalf of the veteran, our office policy is at least to always have their either verbal or written authorization. So if I'm having contact with the Veteran I will always have them sign it even if it's even if it's a form I can sign on their behalf, like if we're filing a supplemental claim.” (P2)
* “I always try to have the Veteran sign except for 21-4138. A supplemental claim I'll sign for them on that one. That way they don't have to show up to the office because I'm in a remote location.” (P3)
* “[If cannot have in-person meeting] I allow the veteran to meet with me virtually and then I get their verbal permission to apply their digital signature to a form... I may call them on the phone because I recognize their voice and I say, ‘hey, hey, John. I can take care of this and I can apply your digital signature or I can even sign it myself as your designated representative. Are you comfortable with that? And I'll document in our system called Vet Pro that I have verbal approval to apply a digital signature... You know the first and best [option] is the ink signature for me because that makes sure that I walk through that form. I always take every opportunity to walk through every form because I do believe deeply that if they understand what's going on and they're involved in the process that the outcome's gonna be better for everybody.” (P4)
* “I really try not to [sign on Veteran’s behalf] for the most part. Most Veterans have emails and VetPro offers the ability to sign electronically. So I'm able to talk to them on the phone, be like, hey, I'm sending you an e-mail. You go ahead and go through the link and sign it, so they'll typically sign it themselves. Very rare for me to actually sign something for them.” (P5)

**Recommendation**

Post first release:

As we pursue form submission solutions in the future, we should treat signature like its own mini-workflow to be optimized.

### Uploading an additional piece of evidence for an existing claim

Representatives take multiple approaches for adding a piece of evidence to a claim that was previously submitted. First, they gauge how long it’s been since they submitted that claim. They will see what status the claim is in and if a decision has already been made. If they can add additional evidence to an existing claim, they then might take either of the following steps.

* Complete form 4138, Statement in Support of a claim. One representative also added the claim number and ICN number to each piece of new evidence to submit.
* Submits the claim again (e.g. will submit another 526EZ)

2/5 participants noted that adding evidence may change their fully developed claim to a standard one, which would result in a slightly longer processing time.

**Recommendation**

Post first release:

From this short inquiry, we may not know all the ways that representatives approach this problem. We will likely have to conduct desk research to direct them to a best possible route to address this use case.

# Appendix

### Recommendations listed prior to first release

| Page | Recommendation for prior to first release |
| --- | --- |
| Submission history (under Claimant page) | Add a note in Submission History to state that "We are working to add more submissions in this view. " |
| Find claimant page | Remove sentence "Results do not include limited POAs." Conduct some desk research on what we want reps to understand when it comes to the definition of limited POAs. Rephrase it in terms they will understand. |
| Claimant page | Content recommendations include:   * Change "General POA information" to "Current representation" and remove the note on general POA. Conduct some desk research on what we want reps to understand when it comes to the definition of limited POAs. Rephrase it in terms they will understand. * Change copy from "Recent representation requests" to "Your organizations' requests." Though we recommend this content change, we realize this change will likely not increase representatives’ understanding of what they are allowed to see. |
| Claimant page | Add some information in Recent representation requests to identify that these requests only include requests submitted digitally through va.gov from the past 60 days. |
| Submit forms page | Content recommendations include:   * Consider using word like "Submit" or "Complete" ITF online instead of "Fill out." * Change “Start submission through form upload tool” to "Upload completed form.” * While "Active within minutes" is appropriate for ITF, another phrase may be needed for other form types (e.g. "Faster processing to VBMS"). |
| Submission flow steps 1-2 | Content recommendations include:   * On step 1/2 under “Upload files” change “Upload VA Form” to “Upload VA Form 21-686c.” * On step 1/2, clarify whether or not any characters are acceptable in the file name. * On confirmation page, provide a link to "Submissions History (under claimant)" |

List of changes to make post first release

| Page | Recommendation for post first release |
| --- | --- |
| Landing page after log in | Conduct design discovery on what a landing page might be. Several representatives noted the following could be useful pieces of information. |
| Find claimant page | Follow up with this SSN ticket to understand possibilities around search and selecting a more optimal solution over the current one, based on representative preferences and how they search in other tools. Also, having more comprehensive sort and filter options in Representation requests would help to resolve this issue. |
| Alerts | Consider a more holistic alert design for portal for the immediate scenarios   * Pending POA request * POA failed * Claims submission processing error |
| Content strategy for limitations on information shown | Consider a longer-term content strategy for helping representatives understand that representation requests are digital from 60 days only, while other parts of the portal like Claimant page -> Submission history will show a wider set of information. |
| ITF | Conduct desk research to understand this scenario and what ITFs might exist for non-Veteran claimants. Design for this scenario. |
| Claimant page | Identify if we could add other Veteran characteristics to the claimant page that representatives continuously refer to, such as the Veteran’s disability rating or flags for expedited handling. |
| Submission flow steps 1-2; contact information | Discuss with engineering on how to coordinate messaging to Veteran and to representative. |
| Submission flow steps 1-2; review and submit | Discuss with engineering and other relevant parties on what preview capability is and should be possible given data privacy. |
| Form signatures | Optimize the signature workflow so that it is both efficient and ensures that Veterans understand what is being signed, so that representatives adopt the solution. |
| Adding one additional piece of evidence to a claim. | Conduct desk research to direct representatives to the best possible route for adding one more piece of evidence. |


# Resources

[**Figma prototype tested**](https://www.figma.com/proto/APOPs9bzbrIcbKXjV8Xnu8/ARF---Claimant-page---search?page-id=1435%3A269407&node-id=1466-107235&p=f&viewport=457%2C268%2C0.13&t=bplHxsbf9kAjzpaA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1466%3A107235&show-proto-sidebar=1)

**[Mural board notes and synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748443476739/77822ec4fd5c093b453e1e99640ed7a42382570a)**
