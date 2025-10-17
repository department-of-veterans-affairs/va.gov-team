# [DRAFT] Research Findings for Providing Veterans with a Copy of Form Submission

**Office of the CTO - Digital Experience (OCTO-DE), Benefits Claim Application, Core Team**

**Date:** 10/17/2025

**Contacts:** Kevin Shih, Irene Vailikit, Qian Chen

**Jump to:**
- [Background](#background)
- [Research Goals](#research-goals)
- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Methodology](#methodology)
- [Who we talked to](#who-we-talked-to)

## Background
At the present, Veterans cannot see, download, or print a copy of their completed disability application data (form 526ez, and nested forms) for their records after they submit their claims online. Previous research has shown that Veterans would like to keep a copy of their completed and submitted form for their records. To address this user need, we have built a prototype by implementing the design platform's pattern "[keep a record of submitted information](https://design.va.gov/patterns/help-users-to/keep-a-record-of-submitted-information)" in a new confirmation page to enable users to access what they entered on the disability benefits form after they click "Submit." In this prototype, we have also added header titles to make the information hierarchy more scannable.

[Insert screenshot of prototype]

This research evaluates our updates and proposed improvements to online disability benefits form's confirmation page.

## Research Goals
1. Gather feedback on the overall content of the confirmation page.   
      -  Without any prompts, how do users interact with the confirmation page?
      -  What sections of the confirmation page do users find the most valuable?
      -  What sections of the confirmation page do users have questions about?
      -  Do people understand they won’t be able to come back to this page once they leave it?
      -  How do people expect to access a copy of their submission after they leave this page?
2. Evaluate the effectiveness of the formatting and visual hierarchy of submitted information within the confirmation page's accordion.
      - Can a user easily interact with the accordion and find the information they submitted?
      - Can a user find specific pieces of information within the accordion? (e.g., Dates of service, conditions, etc)
      - Do users intuitively understand that the accordion only shows information they inputted (i.e., it omits sections of the 526EZ form that they skipped)?
3. Evaluate whether users are able to find information on “What happens next” and how to ask for help on the page.
      - From the confirmation page, are the users clear on the next steps of the claims process and how to reach out to VA for help?
4. Determine if users understand how and are able to save and/or print all the content from the confirmation page.
      - Can a user view/save/and print their submitted information?
      - Without intervention, how would users save the content on the confirmation page?
      - When printing the page, what do users expect to be actually printed from the confirmation page?
      - Is the default browser functionality for printing (button for ‘Print this page’) sufficient and intuitive for all users?


## Hypotheses and Conclusions
| Hypothesis                                                                                      | Conclusion                                                                                                                                                                                                 |
|:------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Most participants are able to intuitively interact with the submitted data accordion to find the info they entered in their disability benefits application.| **Mostly true.** Some participants (5/8) were able to intuitively interact with the accordion. However, all of our participants (8/8) knew they would find the info they entered in their disability benefits application in the submitted data accordion.|
| Most participants will not understand that the info on this page disappears (i.e., not retrievable) after they quit/leave the page. | **True.** All of our participants (7/7) thought their copies of submission were retrievable on VA.gov after they leave the confirmation page.|
| Most participants will be able to find specific pieces of information they filled out in their application within the accordion, despite its length. | **True.** All of our participants (8/8) were able to pinpoint our demo user's toxic exposure info and military services dates within the accordion.|
| From the confirmation page, most participants are able to learn what happens next in the disability claim process. | **True.** All of our participants (7/7) were able to accurately articulate what the current status of the demo user's application is and what is going to happen next with the application.|
| From the confirmation page, most participants will be able to locate how to ask the VA for help on their disability claim.| **True.** All of our participants (7/7) were able to easily locate the information on how to ask the VA for help on their disability claim on the confirmation page.|
| Most participants will be able to successfully save or print their submitted information. | **True.** All of our participants (7/7) were able to successfully save their submitted information.|
| Participants find the new functionality of saving and printing a copy of their submission useful. | **Mostly true.** Most participants (5/7) were able to articulate the value of having a saved copy of their submission.| 




## Key Findings
1. [Some participants (5/8) were able to intuitively interact with the submitted data accordion on the confirmation page.](#1-some-participants-were-able-to-intuitively-interact-with-the-submitted-data-accordion-on-the-confirmation-page)
2. [Almost all participants (7/8) thought the most useful piece of information on the confirmation page is their claim status, which is found in the green box.](#2-almost-all-participants-thought-the-most-useful-piece-of-information-on-the-confirmation-page-is-their-claim-status-which-is-found-in-the-green-box)
3. [All of our participants (7/7) did not understand that the info on the confirmation page disappears (i.e., not retrievable) after they leave the page.](#3-all-of-our-participants-did-not-understand-that-the-info-on-the-confirmation-page-disappears-ie-not-retrievable-after-they-leave-the-page)
4. [Most participants (6/8) thought they could still edit and modify their submission from the confirmation page, even though they needed to officially submit their online application to get to the confirmation page.](#4-most-participants-thought-they-could-still-edit-and-modify-their-submission-from-the-confirmation-page-even-though-they-needed-to-officially-submit-their-online-application-to-get-to-the-confirmation-page)
5. [All of our participants (8/8) were able to find specific pieces of information in their copies of submission within the accordion, despite its length.](#5-all-of-our-participants-were-able-to-find-specific-pieces-of-information-in-their-copies-of-submission-within-the-accordion-despite-its-length)
6. [Most participants (5/7) did not expect to see skipped questions and sections in their copies of submission.](#6-most-participants-did-not-expect-to-see-skipped-questions-and-sections-in-their-copies-of-submission) 
7. [From the confirmation page, all of our participants (7/7) were able to correctly articulate what happens next in the disability claim process.](#7-from-the-confirmation-page-all-of-our-participants-were-able-to-correctly-articulate-what-happens-next-in-the-disability-claim-process)
8. [From the confirmation page, all of our participants (7/7) were able to locate how to ask the VA for help on their disability claim.](#8-from-the-confirmation-page-all-of-our-participants-were-able-to-locate-how-to-ask-the-va-for-help-on-their-disability-claim)
9. [All of our participants (7/7) were able to successfully save their copies of submission from the confirmation page.](#9-all-of-our-participants-were-able-to-successfully-save-their-copies-of-submission-from-the-confirmation-page)
10. [Most participants (5/7) were able to articulate the value of having a saved copy of their submission.](#10-most-participants-were-able-to-articulate-the-value-of-having-a-saved-copy-of-their-submission)




# Details of Findings 

### 1. Some participants were able to intuitively interact with the submitted data accordion on the confirmation page.
When tasked to think-out-loud as they read through the confirmation page for the first time, 5 of 8 participants noticed the submitted data accordion without prompting. Three participants missed the accordion, and they were all accessing their research sessions from either their smartphones (2) or tablet (1). When reviewing the page, they noticed the "Print this page for your records" button and then found the "What to expect" section immediately afterwards, completely skipping the submitted data accordion.

[Screenshot for mobile focused in on the print-what to expect]

Although P1 and P9 were among the participants that noticed the submitted data accordion without prompting, they expressed some concerns with how the accordion is displayed on the confirmation page. P9 explicitly told us that their prior experience with VA.gov has made them aware that the accordion is expandable, and P1 speculated that older veterans are likely to miss the accordion.

> “Because I’ve seen the VA website before, I know this is the accordion. But on another website I might not have known. I would have skipped past it.” - P9

> “…A heck of a lot of veterans are older. And not as computer savvy. Whether it's plus or minus, if there was a place that said, ‘click on plus if you want to expand and click on minus if you want to reduce,’ that wouldn't be a bad thing to have at some point, so that…people understand that that's not just information.” - P1

Even though some of our participants missed the accordion when they first encountered the confirmation page, all of our participants (8/8) knew they would find the info they entered in their disability benefits application in the submitted data accordion once the component was brought to their attention. This provides strong evidence that "Information you submitted on this form" is a clear enough descriptor for the submitted data accordion.


### 2. Almost all participants thought the most useful piece of information on the confirmation page is their claim status, which is found in the green box.
After reviewing the confirmation page in its entirety, almost all of our participants (7/8) thought that the information provided in the green box is the most important piece of information on the page because they are mostly concerned about where their application is, and whether there is anything they need to do at this point in time. In the eyes of our participants, the green box outlines clearly that their submission is in progress and they do not need to do anything else at the moment (but wait for a confirmation email, which should come within 10 days).

> "I'm always interested in where [my application] is. You know, is it in step 1, step 2, step 3, step 4?" - P1

> "Literally just this part [is most important to me]... like just knowing that the claim was submitted, the date it was submitted, what I submitted for, just getting confirmation that it was done." - P5

Some participants (P9 and P8) find the status of their application so important that they admitted that the next thing they would most likely do when they land on the confirmation page is to click on the "Check the status of your form on My VA" link before scrolling through the rest of the page.

> "I want to check the status of my forms... so I'll be honest... I'd probably clicked that [link found in the green box] before I went through [the rest of the page]." - P8

Only P6 thought that the claim ID found in the blue box is the most useful piece of information.


### 3. All of our participants did not understand that the info on the confirmation page disappears (i.e., not retrievable) after they leave the page. 
Currently, Veterans who apply for disability benefits online do not have a way to access a copy of their form, including their verbatim answers to all of the questions, after they have submitted the application. When asked how they would expect to access a copy of their form submission after they leave our confirmation page, 7 of 7 participants thought they could retrieve their copies of submission on VA.gov by logging into their accounts and going to their records.

> "I would probably go to VA Benefits and Healthcare, and then locate my claims, and then there'd somehow, someway, be a way to get back to this page or a version of this page, and get my information." - P5

Although its true that they can find the status of their disability benefits application on VA.gov (specifically My VA) after they submitted, and there is a record of some of the info (e.g., conditions) they submitted in their application, there is no way to retrieve all of their answers to their applications from their VA accounts online. 


### 4. Most participants thought they could still edit and modify their submission from the confirmation page, even though they needed to officially submit their online application to get to the confirmation page.
Although we never explicitly asked our participants about this, most participants (6/8) expressed that they could go back and edit and modify their disability benefits applications online if they noticed there is something that they would like to change in their copy of submission. 

P1, P3, P5, and P6 explicitly talked about going back into the online form and editing their answers if they noticed there were answers they’d like to change. P1 and P5 believes that the way to go back to edit their answers from the confirmation page is by clicking on the link in the green box: "Check the status of your form on My VA", whereas P6 believes they can find a edit button next to their disability form under their My VA account's submissions. 

> "If I am remembering correctly, this can all be edited even after submission, but I can't remember. I think if the claim wasn't fully submitted, I could go back and finish it... But I believe it takes you to another form entirely." - P5

On the other hand, P2 and P7 (as well as P3) expressed that they still have the ability to submit more documents and evidence to prove the nexus between their conditions and service history. Given that P2, P3, and P7 (like all of our other participants) have had prior experience applying for disability benefits, it sounds like they have gone back and forth with the VA to submit the "right" evidence to acquire a desired rating for their service-related condition. In that regard, their conceptions of how they can modify their submission from the confirmation page is not inaccurate.

> "Although this did not come up in my situation, I helped another Vet recently, and he forgot to put something down in the original form. [It would be nice to see a] text box saying, 'Okay if you forget something, if you didn't list all of your injuries, you can always come back and add that.'"(when asked what they would like to see changed about the confirmation page) - P2

For what it's worth, this study’s setup may have influenced our participants’ beliefs of what they can and cannot do from the confirmation page. Although we did show our participants the “Review and Submit” page before we asked them to engage with the confirmation page, the fact that we did not ask them to seriously engage with “Review and Submit” page, may have led them into thinking that they can still review and edit the content on their copy of submission found on the confirmation page.

### 5. All of our participants were able to find specific pieces of information in their copies of submission within the accordion, despite its length.
To evaluate the scanability of the information architecture in our confirmation page prototype, we asked our participants to find pieces of information in the page's copy of submission. Specifically we asked all of our users to look for the demo user's:

1. Military service dates
2. Asbestos and radiation exposure info

All of our participants (8/8) were able to successfully locate the appropriate sections within the copy of submission that described this info. When asked to locate the demo user's military service dates, P9 was confused at first because they mistook the toxic exposure section for a place they can find their military service as well. However, once they had a chance to go back to the top of the page, they were able to correctly pinpoint the military service section.

When asked about their experience looking for submitted information on the confirmation page, all participants found the experience easy, albeit some did admit that the copy of submission is lengthy (requires scrolling).

> "I was thinking I would see something much more complicated. This is more user-friendly and easy to understand" (when reviewing the submission copy in the accordion) - P3

> "[The experience of finding the demo user's military service dates is] pretty easy. I mean very simply, you just have to scroll." - P6


### 6. Most participants did not expect to see skipped questions and sections in their copies of submission. 
When asked if they would expect to see the questions they skipped in their copies of submission, 5 of 7 participants said they did not expect to see what they skipped in their disability benefits application to be displayed on the confirmation page. 

P1 and P6 were the only participants that thought it would be nice to see the optional questions and sections they skipped displayed on the confirmation page. Instead of having the optional questions embedded in their respective sections in the disability benefits form, P1 would like to see a dedicated "Optional questions not answered" section for them to review on the confirmation page. On the other hand, P6 thought having the skipped questions displayed would provide ease of mind - another chance to make sure they have filled out everything appropriately in their disability benefits application.

> "Maybe... I wouldn't be expecting [to see the optional questions I skipped], but maybe I might have a little asterisk on there saying you forgot that you missed something. Even though it says that it may be optional, it's still... with Veterans, it's just hard-headedness, it's just like you need to go and look at it again... If you don't want to fill it out, you don't have to fill it out, but at least go and look at it again." - P6


### 7. From the confirmation page, all of our participants were able to correctly articulate what happens next in the disability claim process.
When asked what the current status of the application is as they are on the confirmation page, all of our participants (7/7) were able to correctly articulate what is happening next to their application - they need to wait to receive an email from the VA confirming their submission. Most of the participants (5/7) were able to glean this information from the green box at the very top of the page, whereas P3 and P7 found this information from the "What to expect" section.

Although everybody was able to articulate what is going to happen next in the disability claim process, there was some confusion about what the actual status of the submission is when someone is on the confirmation page. P3, P8, and P9 were able to accurately articulate that the submission is started. On the other hand, P1 claimed that their application is accepted when they are on the confirmation page, which is technically incorrect. P5, P6, and P7 described their application as submitted, with P6 and P7 expressing explicit uncertainty as to what this means.

> "I mean, when we submit it, it would just be nice just for it to just say, okay, your form is submitted, it's gonna take so many days for us to get back to you, but for them to receive the form. I thought we were already submitting the form." - P6

> "Well, I would think you'd get an immediate receipt of the form being submitted." - P7


### 8. From the confirmation page, all of our participants were able to locate how to ask the VA for help on their disability claim.
From the confirmation page, we asked our participants to find how they could ask for help or how they could contact the VA if they had any questions about their online disability benefits application. 7 of 7 of participants were able to successfully locate the "How to contact us if you have questions" section on the confirmation page.

### 9. All of our participants were able to successfully save their copies of submission from the confirmation page.
When asked to save a copy of their submission from the confirmation page, all of our participants (7/7) were able to successfully do so by "printing" the page. 6 of the 7 participants chose to save a copy via the "Print this page for your records" button on the page, in which they would either print a hard-copy or save a pdf of the page. P5 would use their browser’s print function to achieve the same results.

3 of 7 participants expressed confusion as to what is being saved when they choose to print the page. P6, accessing the page from their phone, thought the print function would only allow them to print the first half of the page (i.e., the green and blue box before the accordion), and they would take screenshots of what is presented within the accordion. P5 and P9 erroneously thought that they needed to explicitly expand the accordion for the contents within the accordion to be printed. This confusion around what would be printed goes beyond device-type, as P5 and P6 joined their sessions with their phones, and P9 joined with their desktop/laptop computer.


### 10. Most participants were able to articulate the value of having a saved copy of their submission.
When asked whether the information found on the confirmation page was worth saving for their personal records, most participants (5/7) expressed that it is useful to have a copy of their submission. All 5 participants believed that there is a chance that their applications may be lost within the VA, and having a copy of their submission would serve as a receipt that they could refer to (or use as proof) when they are communicating with the VA.

> “I was an electronic technician in the military… one of the things I learned is: there are always going to be glitches in the matrix, and you never know when someone says ‘gee we don’t have that,’ and [with a saved copy] I can say… ‘give me your email address, or your whatsapp, and I’ll send it to you.’” - P1

> “[When someone from the VA says] something is not received, I can say, ‘hey this is what I submitted, this is my copy.’ I just think… since [my application] was submitted electronically, at least [this saved copy of submission] is my evidence of what I submitted.” - P3

> “I’m a millennial. So I want physical and digital.” - P8 

Among the two participants that think it was not useful to save a copy of their submission: P5 thought it would be useful to save a copy only if they needed to ensure that they are writing the exact same thing as their submission for another application. P9 didn’t think it would be useful because they erroneously believe that the VA automatically saves everything users input on the VA website, and they can easily retrieve it again if they needed it.

---

## Additional Insights
#### Showing the "dependents" section only for users who have dependents
With the way its currently organized, P5 thought the dependents section was difficult to sift through:

> “For a veteran with anxiety, this is already too much right here [mouses over "if I have dependents"] they're not going to read all this. [Maybe] there's a simpler way to ask these questions and direct them immediately to what they need to do?” - P5

To address this problem, both P5 and P6 suggested that we could include an "if-then" display, in which the confirmation page only shows the dependent information for Veterans who explicitly indicate that they have dependents and are interested in receiving additional benefits for them:

> "Or maybe even another tool with 'if-then,' you know what I mean? If you have dependent parents, then you can do this. If... and then you click the button and it takes you that way." - P5

> "I wouldn't even need to do this [dependents section] because if I don't have any children, that would be nice. Just have one of those questions in the beginning, just say 'do you have any children between the ages of 18 and 23 or below?' Just 'no,' and just so [this dependents section] wouldn't pop up." - P6

#### A comprehensive view of all the remaining steps they need to go through to receive their disability benefits
Although a big-picture, high-level view of the different steps a Veteran needs to take to receive disability benefits is presented up front before they start their disability benefits application, both P6 and P7 want to see that information again when they are on the confirmation page. Potentially influenced by their previous experiences of applying for disability benefits, they described a desire of getting ahead of the push back or requests that are going to be coming down from the VA during this process:

> "... okay so I already know what the next step's going to be, but what can I expect, you know, in advance, so in case I need to get something ready, or prepare for it... because if I'm running, and there's a wall in front of me, I'm not... I want to know what's behind that wall, because I already know there's a wall in front of me. So I already know if I keep running, I am going to hit it, but I don't know what's on the other side." - P6

> " I'd like to see... something that explains the process, the different stages that we'll go through." - P7


#### A table of contents for the confirmation page?
When asked how they would change the confirmation page, some participants thought that a table of contents at the top of the page would be helpful, especially if it was listed as hyperlinks to the different sections on the page.

> "Maybe what I would do is... one of those things where you could have like a little menu tab, click on it, and you just... it'll have like almost like a table of contents, you click on it, and it'll just take you right straight there." - P6



## Recommendations
1. **Recommendation:** Explore how to make the data submitted accordion a component that stands out to users, especially on mobile.   
   - _Supporting evidence: Given that a substantial number of our participants (3/8) missed the data submitted accordion without prompting, and that most of our participants would find value in keeping a copy of their submission, it is crucial that we make the accordion a component that users cannot miss so they know they could save a copy of their submission from the confirmation page._
1. **Recommendation:** Explore how to explicitly indicate to users that the info on the confirmation page will disappear once they leave the page.  
   - _Supporting evidence: Given there is a misconception among participants that the confirmation page and their copy of submission is retrievable in My VA, there is a good chance that Veterans who want to keep a copy of submission would miss their chance to do so if we don't explicitly indicate to users that this page and its corresponding info will not be retrievable once they leave the page._
1. **Recommendation:** Explore how we can make it clearer to users that the "Print this page for your records" button will allow them to print everything on the page, including the info within the accordion, regardless of whether it is expanded or not.
   - _Supporting evidence: There was some confusion among participants about what would be printed if they clicked on the "print" button, leading one participant to actually consider taking screenshots of the info within the accordion. As we want our participants to efficiently engage with this page (with no ambiguity in what happens when they do something), it might be helpful to explicitly indicate to our users what will be printed when they engage with the "print" button._

## Next Steps

Share findings and recommendations with the Disability Benefits Core Form Team. 


## Methodology 
We conducted one-hour moderated remote usability sessions with 8 Veterans from 9/22/25 - 9/29/25. During each session, participants were tasked to interact with a functional, high-fidelity prototype in a Codespaces environment. Participants were asked to assume the identity of a demo user and interact with 3 pages:

-   **Page 1: Login Page**

	-   Will simulate the user logging back into their account after taking a break filling out the form.

-   **Page 2: Review and Submit Page**

	-   Will help situate the user within the form so they understand that they have finished filling out the form and are going to submit their information.

-   **Page 3: Confirmation Page**

	-   This is the page we are conducting usability testing on. This page lets the user know that they have submitted their form and that they are able to print a copy of their submission.

This study was conducted over Zoom, in which 7 participants shared their screens as they engaged with our prototype. Due to technical difficulties, 1 participant had to watch and react to a research moderator interact with the prototype. They also weren't able to go through the full conversation guide due to their technical difficulties.

All participants were recruited by Perigean: 4 participants joined their sessions from their mobile phones; 1 joined from their tablet; 3 used a desktop or laptop computer.

### Limitations
- All of this study's participants have had prior experiences applying for VA disability benefits so the way they engaged with the confirmation page may be influenced by their personal experiences with the process. It would be interesting to see how Veterans who are completely new to the disability benefits application (form 526ez, and nested forms) would engage with our confirmation page.
- Although we recruited for Veterans that self-identified as having difficulty reading and understanding what they are reading, the 2 participants that we included in the study have also self-identified as people who speak English as a second language (ESL). Representation from Veterans who have cognitive disabilities that affect reading and reading comprehension, like dyslexia, may be needed in future studies to fully understand how accessible the confirmation page is. 
- Although we had one Veteran who identified as legally blind and used the zoom functionality to participate in our study, this research could have benefited from more representation from some underserved communities, such as assistive technology users.



### Research documents
- [Superepic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107258)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-09-Copy%20of%20Submission/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-09-Copy%20of%20Submission/conversation-guide.md)
- [Topline summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-09-Copy%20of%20Submission/topline-summary.md)


### Tools used for synthesis
- [Mural for notetaking and quick synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1757964985217/b44b625888f1a0d8d12bf246c993c81deb72ccb4)
- [EnjoyHQ for transcripts coding](https://app.enjoyhq.com/sh/pj/3e6505e3-0a54-43bb-a4cc-621360b4481c)



### Pages and applications used
- [Figma prototype](https://www.figma.com/proto/zduybBnXDjVkKpJosfC6oh/526---Submission---Provide-a-Copy-Update-7.2?page-id=635%3A13286&node-id=1248-187297&viewport=1069%2C2016%2C0.04&t=pDGopIaHeSs9N4Bk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1248%3A187297&show-proto-sidebar=1)
- [Codespaces prototype](https://tinyurl.com/y7j36kar)



## Who we talked to
### Recruitment criteria
Perigean recruited 10 people. There were 2 cancellations, resulting in 8 actual sessions.

#### Primary recruitment criteria
1. All participants had to have previous experience applying for VA benefits (either paper or online) in the past 2 years.
2. At least 4 participants joining the session on mobile.
3. At least 3 participants that find it difficult to read or understand what they read (we were only able to get 2).

### Final participant pool 

We talked to **8 participants.**

Audience segment:
* Veterans: 8
* Caregivers: 0
* Family members of a Veteran: 0


Gender:
* Male: 6
* Female: 2 


LGBTQ+:
* Transgender: Unknown 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: Unknown
* Gay, lesbian, or bisexual: 1


Devices used during study: 
* Desktop: 3 
* Tablet: 1 
* Smart phone: 4 
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 3
* 45-54: 2
* 55-64: 1
* 65+: 2
* Unknown: x


Education:
* High school degree or equivalent: 0
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 2
* Master's degree: 3
* Doctorate degree: 1
* Unknown: 0


Geographic location:
* Urban: 6
* Rural: 2
* Unknown: 0


Race:
* White: 4
* Black: 1
* Hispanic: 2
* Biracial: Unknown
* Asian: 1
* Native: Unknown


Disability and Assistive Technology (AT):
* Cognitive: Unknown
* AT beginner: Unknown
* AT advanced user: Unknown
* Desktop screen reader: Unknown
* Mobile screen reader: Unknown
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: Unknown
* Hearing aids: Unknown
* Sighted keyboard: Unknown
* Captions: Unknown


### Underserved groups we haven’t talked to 
This research does not include the perspectives of the following marginalized Veteran groups:
* Other than honorable
* Immigrant origin
* Expat
* Biracial
* Native Hawaiian or other Pacific Islander
* First Nations (Canada)
* Native, American Indian or Alaska Native
* Transgender
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman
* Assistive technology users

[VA-recruitment-checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing):

➡️ _[insert screenshot of completed recruitment checker in the format below]_

#### A more accessible version of the table in the above image:
| Category | Target % | Target # | # in Study | Target Achieved? | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All participants | Total | n/a | n/a | 8 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Assistive Tech (AT) users | Total | n/a | n/a |  | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| No-show participants | Total | n/a | n/a | 2 | n/a | n/a | n/a | n/a | 1 | n/a | n/a | n/a | n/a | 1 |
| Age 55-64+ | General | 50% | 4 | 3 | no | 1 | 1 | 0 | N | 0 | 0 | 1 | 0 | 0 | 0 |
| Cognitive Disability | General | 50% | 4 | 2 | no | 0 | 0 | 1 | N | 0 | 0 | 0 | 0 | 1 | 0 |
| Mobile user | General | 50% | 4 | 4 | yes | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| Rural | General | 25% | 2 | 2 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |
| No degree | General | 25% | 2 | 1 | no | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N |
| Other than honorable | General |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | General |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | General | 10% | 1 | 2 | yes | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | N |
| Expat (living abroad) | General |  | 0 | 1 | no | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Black or African American | Race | 15% | 2 | 1 | no | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| Hispanic, Latino, or Spanish origin | Race | 12% | 1 | 2 | yes | 0 | 0 | 1 | N | 0 | 1 | 0 | 0 | 0 | 0 |
| Biracial | Race | 3.9% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Asian | Race | 2.7% | 1 | 1 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| Native Hawaiian or other Pacific Islander | Race | .3% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | Race | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | Race | 1.6% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Gay, lesbian, or bisexual | LGBTQ+ | n/a | 1 | 1 | yes | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Beginner AT User | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Experienced AT User | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Desktop Screen Reader (SR) | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile Screen Reader (SR) | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Magnification/Zoom | AT |  | 0 | 1 | no | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| Speech Input Tech (Siri, Dragon) | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hearing Aids | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Sighted Keyboard | AT |  | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Captions | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Switch Device | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Braille Reader | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

