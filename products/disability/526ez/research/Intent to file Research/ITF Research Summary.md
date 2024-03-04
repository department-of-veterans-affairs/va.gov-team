# Intent to file Research Summary 

**Office of the CTO - Digital Experience (OCTO-DE), Benefits and Claims Disability Experience Team 2 (aka team Carbs)**

Date: 02/20/2024

Nichole Nicholas 
nichole.nicholas@coforma.io

Julie Pedtke 
julie.pedtke@coforma.io

_Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here)

**Jump to:**

- [Goals and Methods](#goals-and-methods)
- [What is intent to file](#what-is-intent-to-file)
- [Findings and Recommendations](#findings-and-recommendations)
    * [Veterans are unable to start their 526 (or supplemental) disability claim when the intent to file endpoint is unavailable.](#Veterans-are-unable-to-start-their-526-disability-claim-when-the-intent-to-file-endpoint-is-unavailable.)
    * [The various ways Veterans can express their intent to file (and the implications of each) are not clear to Veterans.] (#The-various-ways-Veterans-can-express-their-intent-to-file-are-not-clear-to-Veterans.) 
    * [The intent to file expiration is a concern for Veterans, and not well understood.] 
    * [Information on intent to file is inconsistent across forms.] 
    * [We don’t know how much Veterans care about their intent to file date after submission of a claim.] (
- [Conclusion](#conclusion)

## Goals and Methods

We reviewed past and ongoing research studies and existing pages on the VA website. We documented our work in a Mural board with insights, observations, open questions, and recommendations. Our goals are to:
Identify known pain points that Veterans encounter around intent to file, and recommendations for improvement
Determine the scope and impact of these pain points, and assess if a broader redesign of intent to file in the 526 experience is needed (for example, redesigning how intent to file is introduced, how it appears on the confirmation page or claim status tool, etc.)
This document is a summary of our findings. 

Artifacts in this review include:

- 526 Shadowing Research
- 526 Medallia Research
- Technical discovery and ongoing work:
    * Initial discovery on expiration issues
    * Expired ITF preventing submission
    * Technical Spike: Research ability to save 526 form data and create new ITF after expiration
    * Async solutioning
    * Research - ITF Experience and Policy Options
    * Implement Immediate ITF Fix (show current ITF time)
    * SC | Review ITF messaging
    * Intent to File in CST
- Proactive Benefits Research
- VA webpage audit
    * About VA Form 21-0966 (intent to file)
    * New Digital Intent to File Form (not launched yet)
    * About VA Form 21P-527EZ (Pension)
    * About VA Form 21P-527 (Pension evidence)
    * About VA Form 21P-534EZ (DIC, Survivors Pension, Accrued Benefits)
    * About VA Form 21P-534 (DIC, Survivors Pension, Accrued Benefits)
    * About VA Form 21-526EZ (Disability)
- Recurring Q&A sessions with VBA stakeholders

## What is intent to file?

Intent to file sets a potential start date (or effective date) for Veteran benefits by notifying the VA that they plan to file a claim. This can enable the Veteran to receive retroactive payments (payments from the time between when they submitted an intent to file and when the VA approves the claim). The Veteran has one year from the time they submit an intent to file their claim to receive the earliest possible effective date. 

An intent to file is not required for any type of claim—however, it is built into the digital form for disability benefits (VA Form-21-526EZ). Currently, for both pension (VA Form 21P-527EZ) and dependency and indemnity compensation (VA Form 21P-534EZ), intent to file is not part of the online form but can be submitted via an additional paper claim (VA Form 21-0966). A Veteran can also call the VA by phone to express their intent to file. 

The date the VA receives the intent to file will be used to inform the effective date, but there are many other factors that go into determining an effective date, including changes in law (such as the PACT Act), and the medical evidence in the claim. After a year has passed, the initial intent to file will expire, but if the Veteran continues with an in-progress claim the system will create a new intent to file with a new expiration date a year in the future.

From conversations with VBA, we’ve learned law changes replaced the informal claim process with the intent to file. “VBA was working to formalize all of the claim submission processes by requiring specific forms and more detailed expression of the claims requested, moving away from the classic ‘we accept claims on napkins’ comment you have likely heard before.” This change also ensured that when a Veteran began an application online this attempt was captured as an official attempt to file a claim and recorded as such. This means that certain forms that don’t yet include this functionality could be considered noncompliant. 

    (1) An intent to file a claim can be submitted in one of the following three ways: (i) Saved electronic application. When an application otherwise meeting the requirements of this paragraph (b) is electronically initiated and saved in a claims-submission tool within a VA web-based electronic claims application system prior to filing of a complete claim, VA will consider that application to be an intent to file a claim. (See 38 CFR 3.155)

Open Questions

> (Perhaps too philosophical to be in scope…) Why does the date of the Veteran’s intent to file or submission date factor into an effective date at all? If the medical evidence shows that a Veteran was impacted by a disability for a given length of time, why are their benefits limited by the fact that they may not have applied until much later?

> Currently, VBA does not consider an authenticated user downloading a PDF 526 form as proof of intent to file. Are there use cases like this where it might make sense to expand the definition of what is considered an intent to file?

## Findings & Recommendations

**Veterans are unable to start their 526 (or supplemental) disability claim when the intent to file endpoint is unavailable.**

**526 Technical discovery**

- Veterans are met with an error message when the system checks the intent to file endpoint and the endpoint is unavailable. The error resolves once the backend system recovers; however, this is not communicated to Veterans, who are directed to call the Contact Center for assistance. 

![We're sorry error message] --- note add image here---

- Currently, this error prevents a Veteran from moving forward with their claim. There is a “back” button on this page, but no “continue” button.

- We have designed an MVP solution for bypassing this error. This solution requires backend work to ensure we can manage claims submitted while the intent to file endpoint is down — see discovery work ticket. Engineering capacity is the only thing holding up implementation. 

Open Questions

> - The root cause of intent to file endpoint failure and the number of Veterans impacted is unknown, but based on the Medallia and shadowing research it appears to happen with some frequency.
   > - How many of these Veterans follow through with submitting their claim at a later time (once the endpoint is available), and are they able to do so before their intent to file expires?
   > - How long after seeing an intent to file error message do Veterans typically wait to come back to their application?

**526 Medallia Research**

- The intent to file error message was one of the top issues we heard about in the Medallia feedback for March 2023. (As far as we know, this error has not been resolved since then.)
  
- We saw this error reported on several pages throughout the form, which implies that many of the Veterans reporting the issue had a form in progress and were coming back for another session.

- This error was especially frustrating for Veterans who were close to their intent to file expiration date and worried that they would lose out on a year's worth of benefits.
   - “My intent to file expires today. I completed my application and was trying to upload my supporting documents but now says your system is down and my application is now due next year. It is still March 7th so why can I not complete my application?” -Medallia Feedback

- Many Veterans reported reaching out to the Contact Center and still not having their issue resolved. Several Veterans reported long wait times of up to several hours or being transferred multiple times.

Recommendations

> - Conduct research with the Contact Center to understand how they troubleshoot intent to file errors and what information they are sharing with Veterans around the intent to file.

**526 Shadowing Research**

- We validated that the intent to file messages was still a blocker for some Veterans starting their claims (interviews took place in December 2023). Three out of five participants received intent to file errors when they started to file, leading Veterans to doubt themselves or VA.
  
   - “I guess I did something wrong… This is the part that… makes me stop and start again.” -P12
     
   - "Something wrong happened on our end... Welcome to the VA… 50% of the time I get error messages like that. I don't think I'm stupid, I think someone who is older and more feeble than I am would get mad.” -P11
- Veterans do not understand why they are being blocked by the intent to file error messages—or how to correct them. This makes some doubt if they are taking the appropriate steps towards filing a claim. 
   - “Maybe if I go get the additional form, I won't get the error message—maybe there is something precursor I should've done. Like maybe I need that [supporting form].” -P11

Open Questions

> - During Shadowing Research we noticed the intent to file error in two separate interviews on the same day, hours apart. How long is the intent to file endpoint usually down?

Recommendations

> - Allow participants to continue to file even if the intent to file endpoint system is down. 
> - Rethink how we introduce the concept of intent to file to clarify how it relates to past claims and conditions. 
> - Reinforce understanding of intent to file by making it accessible in other places, such as the confirmation page after submission, the Veteran's profile, or the Claim Status Tool.

**The various ways Veterans can express their intent to file (and the implications of each) are not clear to Veterans.**

**526 Shadowing Research**

- Only 1 of 5 Veterans interviewed were confused by intent to file, but this participant raised some interesting concerns. While these concerns raised doubt and slowed them down, they were ultimately able to continue and file their claim. 
   - They were confused by the message saying they already had an intent to file, and hesitated with how to continue to file their claim. They saw the intent to file and starting an application as two separate steps.
      > - “[The error] says I have to do an intent to file, but I didn't say I wanted to do an intent to file, I wanted to start an application… So because I have an intent to file, does that mean I have to file from the intent to file, I can't start a new claim?” -P12
   - They also thought that the intent to file was linked to a previous condition, and wouldn’t be appropriate to use for their new claim for different conditions.
      > - “I think [the intent to file] was from my last condition ... that's what I never got responses to. I would think it would let me start a new claim rather than start a new claim based on my intent to file, because I don't even remember what this intent to file… it may have been for [past condition].” -P12

**Proactive Benefits Research**

- While nearly all participants expressed some familiarity with intent to file, most of them seem unaware of the benefits intent to file provides. Even for Veterans who have filed an intent to file in the past, there is still confusion about the purpose, how to do it, and what to expect.
  
- A few participants erroneously inferred that the various options laid out for submitting an intent to file or filing would lead to different experiences. For example, despite one participant saying she would ideally want to file online, she got the impression that she would have the benefit of extended time if she decided to file in person rather than online.

Recommendations

> - Focusing on intent to file may be a barrier to action rather than a motivator. In an effort to reduce uncertainty about what to do next, explain the value of starting the claim process as soon as possible, rather than specifically mentioning intent to file itself.

Open Questions

> - We don’t know much about how VSOs interact with Veterans regarding their intent to file, in person or over the phone. Do they complete a paper form, or use SEP? How long does it take for this to get into the system, and what expiration date do they tell the Veteran?
> - When someone who is not a Veteran, such as a family member, completes a claim (such as DIC), VA needs to verify that they are able to represent that Veteran before the ITF date is set. It’s unclear how long this takes, and when exactly the expiration date would be set. This is why the stand-alone form does not provide an exact date and time like the 526.
> - We’re also not sure how the endpoint checks for duplicates if a Veteran submits via multiple channels. As far as we know, if there are multiple intent to files, the earliest date will be used.

**The intent to file expiration is a concern for Veterans, and not well understood.**

**526 Technical discovery**

- Veterans should be able to continue to file a claim even after an intent to file expires. There were previously errors that prevented this on the 526, but these have since been resolved. (We’re still working to track down all related tickets, but here are a couple: 63533 and 60705)
- The intent to file expires exactly one year after creation—down to the second. This causes confusion when a change in the Veteran’s timezone might result in the expiration falling on a different date entirely. 
   - We partially address this pain point by adjusting the intent to file messaging to include the exact expiration time with timezone (see discovery ticket). 
   - We did some exploration around other possible solutions, such as rounding the expiration time to the nearest day to ensure every Veteran would have at least a year, regardless of time zone. This turned out to be more complex than expected, so was paused in lieu of other priorities. (See alternative solutions ticket).
- We learned from VBA that Veterans who call in or submit a paper intent to file receive a batch letter in the mail regarding their intent to file.  No other reminders are provided. The “batch letter” informs the Veteran that the VA received the intent to file, and includes the time requirements and forms required to complete the application. Batch letters are automated letters VBA creates and mails without human interaction.
   - We’re unsure if batch letters include the exact time or just the date.
- The Benefit Management Tools team has in their backlog to add an intent to file "object" into the Claim Status Tool as a placeholder after the Veteran submits an intent to file but before they finish the claim, which doesn’t exist today. This could be another way for Veterans to track their intent to file expiration date.

**526 Medallia Research**

- Many Veterans were concerned with completing their application by the intent to file expiration date. They expressed this with words like, “My intent to file expires today,” “It has to be in by today,” and after expiration: “My application is now due next year.” See Medallia Synthesis.
- These Veterans were primarily returning to an in-progress claim, and several mentioned that they were returning to finish uploading documentation or ancillary forms such as 21-0781a. 

**Proactive Benefits Research**

- Misunderstandings about the intent to file timeline may cause some Veterans to act quickly out of stress, while others will wait to gather more information before "starting the clock." 
   - Many saw it as a one-year deadline to file a claim; some participants took this to mean that they had to rush to file before their claim was seen as invalid, while others said they would wait to file an intent to file until they knew what to expect or had all of their documents to not run out the one-year clock prematurely.
- There was confusion about how to know what date your intent to file is associated with and how the VA would notify you of that information. "What's not clear is when the start date of a year begins? When I mail it? Will I get a letter back from the VA stating 'you have a year from this date?" - P9

Open Questions

> - Is the intent to file timeline consistent across business lines? Do 527 and 534 claims also expire after one year?
> - How many Veterans whose intent to file expires come back and complete their claims, vs how many believe that they can no longer submit their claim after the “deadline”?

Recommendations

> - Explain the benefit of getting started immediately in plain language. Communicate that submitting an intent to file for disability benefits online is built into the process and is therefore a low-effort action to take immediately to help maximize monetary benefits. See Proactive Benefits teams’ plain language outreach on Sharepoint.
> - Clarify that intent to file is NOT a one-year deadline and, if you take longer than a year to submit, you won't lose out on your opportunity to apply for benefits.

**Information on intent to file is inconsistent across forms.**

**VA.gov audit**

- Since the intent to file is built into the digital 526 process, it’s not clear from the About 526 page what a Veteran should do if they’re not ready to file a claim, but want to submit an intent to file. 
   - The page does not make clear that starting a 526 claim (even if they don’t plan to complete it right away) is the fastest way to create an intent to file, as compared with using the stand-alone intent to file form. 
- A digital intent to file process is not currently built into the 527 and 534 forms the way it is for 526. To submit an intent to file for these benefits, Veterans would need to use a paper form or phone it in.
- Intent to file information on VA.gov could be improved:
   - There is no mention of intent to file on the 534EZ page or the (non-EZ) 534 page.
   - There is a mention of intent to file on the 527EZ page, where it’s listed under “related forms and instructions.” It’s pretty far down the page and doesn’t stand out as a potential first step for people who are still preparing their documents.  
   - There is no intent to file needed for the 527 non-EZ because Veterans would already have a submitted claim. However, it is confusing to have similar form names that require a different process.
- Paper forms 534EZ and 527EZ mention intent to file, but the description is not plain language and the link goes to the general forms URL rather than the intent to file page itself.

---images of va.gov forms here---

- New (not yet launched) intent to file landing page is an improvement and could clarify what happens after an intent to file expires, to make sure Veterans understand that they can still submit a claim after an intent to file expires. 

---images of va.gov forms here---

- VA Platform content guidelines for talking about intent to file on VA.gov are continuously being updated.
   - The current guidance from the Word List is that almost all instances are lowercase unless referencing the full name of the form.
      - Like this: Fill out your intent to file form.
      - Like this: Submit your intent to file.

Open Questions

> - VA.gov has numerous pages with overlapping information. What are the most common pages Veterans visit to look for information on intent to file?
> - Some Veterans may be submitting multiple claims at one time. Can one intent to file apply across multiple claim types (eg. 526 and Supplemental Claim)? Our current understanding is:
   > - Intent to file is connected to the first claim that’s submitted. It doesn’t distinguish between claim types.
   > - If the Veteran submitted a second claim around the same time, it would create a new intent to file if the past one was “used up” by the first claim submission.
   > - Rare use case, but if the Veteran had a second form in progress, it’s unclear if the system checks when they hit “Continue” button and generates a new ITF then.

Recommendations

> - Update the 534EZ and 534 About web pages to include information on intent to file with a direct link to the intent to file landing page, and ensure it is consistent with 526 and 527EZ.
> - Update the 526 About page with clarity for Veterans who want to submit an intent to file, but are not ready to start a 526 claim. 
> - Update the 534, 534EZ, and 527EZ  paper forms to include plain language and a direct link to the intent to file page.

**We don’t know how much Veterans care about their intent to file date after submission of a claim.**

- In discussion with the Decision Review and Benefit Management Tools teams, we learned that effective dates are clear in Veteran decision letters and the rated disability page on VA.gov once awarded, so it’s only while waiting for a decision that the Veteran might need to reference their intent to file date. More research would be required to assess this need.

## Conclusion

The intent to file error message is a known blocker for Veterans and should be resolved to unblock Veterans from submitting their claims even when the intent to file endpoint is down. 

Beyond the error message, Veterans do not have a clear understanding of the potential benefits of intent to file and that it is an optional process that could help maximize their benefits. The purpose of intent to file should be explained more clearly (and consistently) across the forms and related web pages. 

Based on this research review, we believe improving communications around intent to file in a holistic redesign could have the following benefits:

- Encourage Veterans to start their claim process sooner, increasing the benefits they could be eligible to receive
- Reduce confusion at two key moments in the 526 form: 1) the early steps of the form, and 2) when a Veteran returns to an in-progress claim
- Reduce Veteran frustration and form abandonment after an intent to file expires
- Increase overall submission rates

While it was somewhat outside the scope of the research reviewed, we did not find much evidence that the intent to file date is important to Veterans after submission (for example, something that is critical to include on the confirmation page or in the Claim Status Tool). We’d recommend further consultation with teams who have explored the Veteran journey after submission before prioritizing these improvements.




