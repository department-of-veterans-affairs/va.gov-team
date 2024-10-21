# ​​2024-09 CHAMPVA Claims 10-7959a Usability/Interviews Research Findings

Office of the CTO - Digital Experience (OCTO-DE), Form 10-7959a, IVC Forms Team

Date: 09/27/2024

Rachael Penfil (rachael.penfil@adhocteam.us), Steven Straily (steven.straily@agile6.com), Jamie Fiore (jamie.fiore@adhocteam.us)

Jump to:
- [Overview](#overview)
- [Research goals](#research-goals)
- [Research questions](#research-questions)
- [Methodology](#methodology)
- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings at a glance](#key-findings-at-a-glance)
- [Details of findings](#details-of-findings)
- [Recommendations at a glance](#recommendations-at-a-glance)
- [Further research needed](#further-research-needed)
- [Next steps](#next-steps)
- [Who we talked to](#who-we-talked-to)

 


## Overview

The CHAMPVA Claims Usability interviews were conducted from Aug 23rd 2024 - Sept 11th 2024. During that period, we talked to 6 participants and 1 pilot all of which were either a Veteran or a Veteran’s caregiver. They each had a variety of cognitive abilities and were aged 35 years old and up. You can read more about the study’s demographics in the “[Who we talked to](#who-we-talked-to)" of this report.

 

Each of these participants answered questions about their past experience with the CHAMPVA program with the primary focus on the claims reimbursement process. They also performed tasks on a working prototype of the digital CHAMPVA claims form and shared their thoughts on the interactivity, content and process of each step of the form.


## Research goals

This study provided insight into the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA) program and unauthenticated digital flow for the CHAMPVA claim form (Form 10-7959a). With this form, certain dependents of disabled Veterans who don’t qualify for TRICARE can submit reimbursement claims to CHAMPVA for their eligible medical expenses. If eligible, CHAMPVA will cover the cost of some of the beneficiary’s healthcare services and supplies. While veterans and their dependents may be familiar with the paper form for submitting claims and with CHAMPVA as a whole, the digital form was newly created for this effort. 

The moments that matter within the Veteran journey are:

* Starting up - depending on their disability status and eligibility for Tricare, the Veteran and/or their family may qualify for benefits through CHAMPVA at this point in their journey.
* Putting down roots - as the Veteran puts down roots, if they are qualified for CHAMPVA, they will need to revisit the application for their dependents over time. Veterans and their dependents who didn’t previously qualify for CHAMPVA may be eligible if the Veteran’s disability status changes. If their dependents are registered in CHAMPVA they may begin submitting claims for their eligible medical expenses.
* Aging - Disability status can change as Veterans age. Veterans or their dependents may become eligible for benefits through CHAMPVA as Veterans’ disability statuses change. There are moments in these scenarios where caregivers, dependents, adopted children, or step-children may be more likely to fill out the application on someone else’s behalf and can also start submitting claims as they become CHAMPVA eligible.

 

The overarching research goals for this project were:

 



* Goal 1: Test the usability of the current iteration of the 10-7959a prototype.
* Goal 2: Test high-level accessibility for the current iteration of the 10-7959a prototype.
* Goal 3: Extract insights about the participants’ experience with the current CHAMPVA claims (10-7959a) process. This will inform artifacts and build evidence to address pain points discovered during stakeholder interviews and support continued service design efforts.

 


## Research questions

Usability and content



* Will users understand and navigate the digital form experience without significant issues when interacting with the prototype through a think-out-loud protocol?
* Will users have difficulty understanding what type of claim they are submitting?
* Will users have difficulty understanding the insurance uploads?
* Will users understand what information and documents they need to submit with their claim for speedy processing and reimbursement?

Accessibility



* Can any major accessibility issues be identified at this point in the development process through questions and observations?
* Is the form’s plain language effective and accessible?

Service design



* With interview questions, can we gather further information to inform our service-related artifacts or our understanding of the customer experience?


## Methodology

A mixed-method approach was used, combining a usability study with a user interview. There was 30-45 minutes of usability testing, utilizing the think-out-loud protocol while interacting with the prototype to identify significant issues with the digital form. 

Exit interview questions were asked in the remaining 15-30 minutes, less any time it took to prepare or troubleshoot for the participant. We chose to ask these questions at the end to avoid any bias that may impact interactions with the prototype, as well as comments gathered through the execution of the think-out-loud protocol. This method is appropriate for the research goals because it addresses them directly. The maturity of the design should be appropriate to accommodate all of the aforementioned research.


## Hypotheses and conclusions



- Based on our understanding of current patterns and best practices for forms, the digital prototype 10-7959a will be easy to understand and navigate.
    - **Mostly True.** All participants successfully navigated and submitted the form. They were able to form a basic understanding of what they were trying to accomplish and why certain tasks were necessary; however, there were some components in the form that the users were not expecting to behave in the way it did.
- Based on our understanding of accessibility best practices, we believe the 10-7959a prototype will be free of significant accessibility issues.
   - **Not enough information.** We had only one assistive technology user in our study, a beginner screen reader and keyboard navigation user. This user was able to navigate and submit the form but further research with assistive technology users is needed to fully assess the accessibility of the form.
- Users may experience confusion due to inconsistent, mistimed, or absent feedback when using the new list-and-loop pattern.
    - **Mostly true.** Most of the users were distracted by the alert presented on the insurance review page. Despite this slow down, users were able to move onto the next step once they read and understood the alert.
- Users could experience issues with the new upload pattern that has yet to be thoroughly tested.
     - **Not enough information.** The new upload pattern was not available at the time of testing. 
* Users may experience confusion in understanding the information and documents they need to submit with their claims.
    - **Mostly true.** Users understood from their own past experiences what they needed to process a claim. However, specifics on the supporting documents detailing what to include (DX, NCT codes, etc..,) were not clear to them.
- Our understanding of stakeholder research about the process leads us to believe that users who have filed a claim for CHAMPVA benefits through the existing process will highlight similar pain points (e.g., visibility of claim status, lengthy processing time, frustration with the lack of available options to submit supporting documents digitally).
   - **True**. All participants expressed their frustration about the long wait times (60-90 days) to hear anything about their claim from VA.

     



## Key findings at a glance



1. Participants had a basic understanding of what they may need to complete the claim form but still needed some further clarification.
2. Participants who had previously applied for VA benefits knew requirements could be difficult, so they read instructions in depth.
3. Participants had a good understanding of what a single claim was but desired a different experience when needing to submit multiple claims at one time.
4. Participants had difficulty when navigating the form as a third-party representative or sponsor.
5. Participants were able to work through the majority of the “list and loop” pattern without friction when adding insurances but demonstrated low confidence when filling out their insurance details.
6. After adding the correct maximum number of insurance policies allowed on the form participants hesitated to move forward when shown the alert box on the insurance policy review page.
7. Participants understood the work or auto accident-related injury question. However, they expected to have to submit more details with their claim if they chose “yes” for an answer for either question.
8. Participants knew how to use the file upload screen almost immediately after landing on the page, but many participants were not expecting the “additional notes” accordion component to behave or contain the information that it did when they expanded it.
9. All the participants immediately noticed and understood the “change of address” question. They stated that they would know what address they used on their last CHAMPVA form submission.
10. All the participants expressed that they thought there was enough information on the confirmation page but wished there was another way to save the content that is shown on the page which includes date, how long it will take to process and what the appeals process is.
11. Most of the participants were unfamiliar with what the CHAMPVA number was or what their number was specifically.

 


## Details of findings


### **Finding 1** : Participants had a basic understanding of what they may need to complete the claim form but still needed some further clarification.

Most of the participants understood that they would need some level of proof of payment or billing statement from their doctor or pharmacy prior to entering the form or shortly after reading the introduction page. They all knew where they could find the requested proof, either in the physical format or by utilizing their insurance company’s portal.

 

In most cases, the participants did not understand the details of what was needed on their documents. For example, participants weren’t sure what a DX or CPT code was or if it would be present on their doctor’s bill. One participant mentioned that one of the requirements (social security number) most likely wouldn’t be present on the explanation of benefits document.

 

Some participants demonstrated signs of fatigue after reading through the supporting document upload screens.

 



* P1: “Most doctors will give you their bill when you leave, or something. I mean it. It kind of lists everything they need”.
* P8: “I don't know what the DX, CPT, HCPCS codes [are]. I don't know what that means.  Google, that's what I would do.”
* P8: Still don't know what those codes are (NPI and CPT codes listed on the explanation of benefits), but at least I know that it's 10-digit code and 5-digit code.
* P14: “So it says, it's the papers attached to the medication. So, I look at the medication bottle, or I will just call the pharmacy and get them to print off for me, which is kind of a pain.”


#### Recommendation



* Consider including some common examples of where to find the codes listed on the upload page for medical claims or in what format these codes are commonly found (like the explanation and benefits upload page).

 


### **Finding 2**:  Participants who had previously applied for VA benefits expected the requirements to be difficult, so they read instructions in depth.

Influenced by their past experiences applying for benefits with VA, participants anticipated frequent changes to the requirements for submitting claims. To ensure that they had up-to-date information and knew what documents the CHAMPVA would ask for, they carefully read most or all the content on the page before proceeding to the form. 

 



* P1: “That one year requirement. I don't know if sometimes things change, if there's a possibility, maybe they extended longer than a year, or maybe they shorten it. Now that limits your time, that you could submit it. There are a lot of changes that come down (from VA). So, you just gotta be aware if there's any new changes.”
* P3: “The documents (that needed to be submitted) was quite a few. She (participant’s spouse) took that claim form from the VA and the document from the health insurance, and she submitted that.”
* P3: “Most of the form was pretty simple, but you do need to have certain information with you on insurances and claim because they (VA) get into detail. They want you to certify everything that you put in here.”
* P8: “It's been a while since I did a claim with it (CHAMPVA). It's not the most familiar thing. Just from having gone through submitting so many different disability claims and stuff to the VA over the years I have a file with all of stuff that I have ready to submit to the VA.”
* P14: “All this stuff (prescription information needed on pharmacy document) would be helpful to know. So now I know ahead of time before I actually commit to doing the (claim) form”


#### Recommendation
Consider including all the claim requirements and supporting documents in the introduction page and making this top level in the hierarchy of the layout.


     


### **Finding 3**:  Participants had a good understanding of what a single claim was but desired a different experience when needing to submit multiple claims at one time.

All of the participants had a good understanding of what was meant by a claim (each date of service or physician location is a separate claim). Most participants explained that if they did have multiple claims to submit that they would fill the form out for each claim. One participant remarked that they would upload all of their claims in one form submission to see if VA would accept them and if the claims were denied in this format, they would then send each claim in separate form submissions.

 

Despite this understanding of what a claim was, nearly all participants preferred to upload all claims within one session on the form.

 



* P1: “Just knowing how the medical world operates you're gonna have to put 2 claims in for (two dates of service). It just makes it more difficult.”
* P4: “My granddaughter was going once a week for [procedure redacted], so it would be nice if she could just wait till like the end of the month, and then upload all 4 things.”
* P4: “I don't remember seeing if there was a place to upload multiple visits. It's (filling out the form) fairly easy but if you have to go through that whole thing (form) every week. It might get kind of annoying.”
* P8: “It would just be the one claim, but you would file multiple different supporting documents. I would put them (the claims) together and if they deny part of it, then I would separate them and file a separate claim (form) for it.”


#### Recommendation



* Continue with the discovery and engineering of a workflow that will allow a user to submit several claims in one form session. Also continue to research how to best organize the output of the form submissions for the claims processors to efficiently enter the claims into their systems. (Refer to the[ CHAMPVA claims service blueprint](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723309711950/72864bacb39ee1c8cd48f80735b6f6994a72b6ca?sender=u10700c583aaa99f809c88675)).

     



### **Finding 4**: Participants had difficulty when navigating the form as a third-party representative or sponsor.

Participants hesitated when filling out the fields for sponsor information. In most cases the hesitation occurred when the person filling out the form was a Veteran. Participants that were Veterans felt that it wasn’t necessary to fill out their information in the sponsor fields because they’d already entered it under the signer information.

 

During the study, 3 out of the 7 participants (including the pilot study) were not confident in defining what sponsor means.

 

Some participants struggled to determine who the signer, the sponsor and the beneficiary would be in their scenario.

 



* P1: “I know a lot of military spouses aren’t accustomed to the verbiage that the military has.”
* P3: “She's my spouse, so I'm not her spouse, right? So, I don't know which one. I must provide a response. I'm going to (select) ‘relationship not listed’ because I'm the husband.”
* P14: “We went from the beneficiary, now we're talking about sponsor. It’s okay but it just could be a little bit less complex. I think you just say put in your information, or if you're the veteran, put in your information here.”

 


#### Recommendations



* Consider adding another screener question as a follow up to signer information that asks if they are also the sponsor. This will eliminate the redundant questions for the signers who are also the sponsor.
* Consider redefining the term “sponsor” using the phrase “the service member the beneficiary is connected to.” This recommendation should be aligned on all the CHAMPVA forms.


### **Finding 5**: Participants were able to work through the majority of the “list and loop” pattern without friction when adding insurances but demonstrated low confidence when filling out their insurance details.

Each participant was asked to complete the claim form as if they had two health insurance plans. The majority understood that CHAMPVA acted as a “third insurance” which would pay after the other two insurances paid. Some details such as policy numbers or type of insurance seemed unclear to most of the participants, though most of them knew where they could find this information.  

 

Even though the policy number and insurance phone number fields were not required every participant except for the assistive technology user completed it.

 



* P1: (In reference to the insurance review page) “That's kind of straightforward to me. It's the information I entered. It gives you the option to edit if you see something wrong and delete it.”
* P8: “I have no idea how many numbers and what they (the insurance policy) start with, or they start with like an X.”
* P14: “I would look at the insurance card (for the policy number). I think I have it on my phone, too.”

     



#### Recommendations



* The policy numbers and the insurance phone numbers are not required, so consider removing them from the form to alleviate the burden on the users.
* Continue to use the new list and loop pattern to ask for the insurance information with some adjustments [see Finding 6](#finding-6).

     



### **Finding 6**: After adding the correct maximum number of insurance policies allowed on the form participants hesitated to move forward when shown the alert box on the insurance policy review page.

Most of the participants became distracted from their current task of reviewing their insurance information when the alert box appeared on the insurance review page.

Some seemed to be caught a little off guard and stated that it seemed like they had done something wrong.

 

The participants only felt comfortable moving forward after reading the description in the alert box.

 



* Pilot: “That's the max number [of insurances allowed]. I don't feel like I've done anything incorrect yet.”
* P8: “I saw the little triangle and exclamation [mark]. It seemed like a little warning thing that popped up. So read it real quick, like, okay, what does this mean?”

 


#### Recommendations



* Consider removing the yellow alert on the insurance review page. Instead, don’t allow the user to add anymore additional insurances unless they remove one first.
* Add some additional context about the maximum of two insurances on the insurance review page. Possibly use an error message to direct the content to only users trying to add more than 2 insurances.


### **Finding 7**:  Participants understood the work or auto accident-related injury question. However, they expected to have to submit more details with their claim if they chose “yes” for an answer for either question.

The participants were familiar with the procedure to have the claim processed through third party liability if the illness or injury was caused during work or by an auto accident. However, there were mixed feelings about whether they would continue submitting the claim through CHAMPVA. One participant remarked that they would not answer truthfully in fear that their claim would be denied, or they would have to answer more questions. Some participants also expressed confusion on how to answer the question for a minor dependent.

Almost all the participants expected to have to submit additional information about the injury or illness including details on what happened and/or police or accident reports.

 



* Pilot:” If my auto insurance already paid me then, and let's say they paid it in full. I probably would just drop off the flow right now and not continue to submit.”
* P1: “I thought it would be asking me to describe what happened…give me a date, time, location.”
* P1: I guess if it happened at work, they're gonna deny your claim.”
* P3: “I would put ‘no’ otherwise I'm gonna have other stuff to fill out”
* P8: “I just misunderstood this because it's not a claim related to work because it's involving your children.”

 


#### Recommendations



* Consider adding some additional context on the work-related and auto-accident injury questions that explains how CHAMPVA would use this information. This should set better expectations of what would come next and how it would affect their claim. 
* Consider exploring the removal of the work-related injury question if the beneficiary is under the legal working age (14 years old).


### **Finding 8**: Participants knew how to use the file upload screen almost immediately after landing on the page, but many participants were not expecting the “additional notes” accordion component to behave or contain the information that it did when they expanded it.

 

Participants confidently navigated and uploaded files on the form. Without much guidance from the content of the form itself, they explained how they would normally convert a paper receipt or bill to a digital file to upload. However, many participants were not expecting the “additional notes” section on the upload screen to contain basic guidelines about filing a claim. Instead, they were anticipating that it would contain an area that allows them to add some more context about their claim.

 

One participant stopped on the accordion on the upload screen and then tabbed back to check the intro page. Another did not interact with additional info component before uploading a file. They only did so while waiting for the file to upload during a slow internet connection.

 



* P1: “The additional notes, either remove it or change it to an area (to input information about the claim) or reword it. It kind of confused me. I thought it was more like additional notes that I had to provide.”
* P1: “(The additional notes accordion is) just reminding you one year (to file timeline). If I forgot what I read in the beginning it would be helpful).”

 


#### Recommendation



* Consider rewording the “Additional notes” header on the accordion component to be more descriptive of the content that it contains to set better expectations.

     



### **Finding 9**: All the participants immediately noticed and understood the “change of address” question. They stated that they would know what address they used on their last CHAMPVA form submission.

Some participants expressed that they do not change addresses very often so they would know if their current address was used on the last CHAMPVA application or claim. They also assumed that if a person did change addresses frequently that they may not remember the last address they used on a CHAMPVA form. One participant mentioned using tools like the address book on their Amazon account to help them remember which address they may have used.

 

One participant expected a different experience other than the current state of the digital form. They were expecting the form to allow them to update the address on another after checking the “new address” checkbox as opposed to using the editable address fields above this checkbox to make updates.



* P1: “I expect if it has changed, it's gonna give me an option to put my new address since it's changed. If I put “yes” and continue, it's gonna ask me to put in my new address.”
* P8: “I've had the same address for like 12 years now. So, in my case, yes, (would remember the last address used) but I mean, I guess if you're moving around a lot, maybe you might not.”
* P12: “I guess it depends on the sickness of your beneficiary, too, if they're always filing claims left and right and need help, and they move around quite a bit, whether that be the military or just our own personal situations, then that could cause them to be like, where were we the last time we had that claim? But hopefully, they're not filing that many claims. Maybe some other identifying questions that could let you see when the last time you filed a claim might be helpful. But for the most part you should probably know (your address that was last used).”
* P14: “I haven't moved recently. I would hope it'd be the same address that I'm at now but if I moved, honestly, what I do because I've done some moving, is just open another browser, look at my Amazon account, look at my delivery address.”

     



#### Recommendations



* After the digital version of the form is live, consider reviewing analytics to find out how many users select “yes” or “I’m not sure” when their address has not changed. This will help designers ideate on future improvements to collect address updates from beneficiaries.
* In the future, consider developing a method to show the last saved address on their CHAMPVA profile while filling out the digital form.


### **Finding 10**:  All of the participants expressed that they thought there was enough information on the confirmation page but wished there was another way to save the content that is shown on the page which includes date, how long it will take to process and what the appeals process is.

Participants expressed that the confirmation page had necessary information and was easy to understand. Some acknowledged the additional information regarding the appeals process.

 

One participant shared that they preferred to save the confirmation information in a digital format such as a downloadable pdf or an email rather than having the ability to print the page.

 



* P1: “It tells you the day I submitted it, the date and you know how long it's gonna take my expected, you know, time is gonna be for my claims. Yeah, that's good. This is not too many words or verbiage. It's pretty, you know, straightforward.”
* P4: “It tells you how to do appeals if you don't agree with their decision. So that's good to know.”
* P4: “I would print this page just to keep in my file.”
* P14: “Some way to keep a copy. Whatever option you guys offer me that copies it. I'm gonna keep a copy for myself. For me, email it to me. That way I don't have to worry about putting it on my computer. (It) would just be in my email server.”


#### Recommendations



* Consider adding a component to download the information on the confirmation page. This will help users that are not familiar with the “print to pdf” native OS function save the confirmation page as a digital format.
* Consider sending a post-form submission email with the information on the confirmation page so beneficiaries can have a digital version of this information.


### **Finding 11**: Most of the participants were unfamiliar with what the CHAMPVA number was or what their number was specifically.

Most of the participants stated that they would use their social security number to fill out the CHAMPVA member number. Some stated that they would need to reference their spouse’s CHAMPVA card.

 

All of the participants eventually used the helper text to confirm the CHAMPVA member number was their Social Security number as well.

 



* P1: “To me, it (CHAMPVA member number) doesn't mean anything it says right here. It's just the same as my social security number. I don't think there was any difference.”
* P3: “I don't have a membership number. I don't know what to do. They want a membership number. She (participant’s spouse) has a card, but I don't. I don't know what she has. I don’t even know how many numbers it would be.”
* P4: “Yes, it's just my social security number. It's (CHAMPVA member number) not printed on the card. So, you really have to know it.”
* P8: “If it's not (on the CHAMPVA card) you could look in like you'd look in your VA account like if you'd logged into it. And it says right there as well, if you're reading it (the text under the question) says (the CHAMPVA member number is) usually the same as the social security number.”

 

 


#### Recommendation



* Follow up with IVC stakeholders to determine if the social security number acts as the CHAMPVA member number 100% of the time. If this is true, consider updating the question to collect the SSN rather than the CHAMPVA member number. This will ease mental burden on the user and prevent uncertainty when answering this question.


## Additional insights


### **Additional insight 1**:  All of the participants anticipated a long wait time for processing their forms.

Participants expressed that they expected to wait 60 days and up to 2 years to receive their reimbursements. The long wait time prioritized the importance of completing the form accurately the first time they submit it.

 

During the study, 2 of the 7 participants displayed frustration by the amount of time it took to receive the reimbursements. One participant explained that they eventually gave up on submitting claims because of the wait time.

 



* P1: “I was already aware it's gonna take a while.”
* P8: “Anywhere from 6 months to 2 years they'll get back to you. The first time I tried to use CHAMPVA I don't even remember how long it took and that's kind of why I stopped trying to use it.”
* P14: “I guess it's normal (the 90-day claim processing time), because you have a lot of people applying for benefits.”


#### Recommendation



* The digitization of the claims form will eliminate the time it takes to send and receive correspondence through the mail. It is recommended to continue to digitize the process to help reduce labor and enhance workflows which will decrease the time it takes to receive, process and send the reimbursement of the claim.

     



### **Additional insight 2**: During testing, 4 of 7 participants used autofill to complete the online form.

Participants seemed to use autofill whenever it was available to reduce burden. The participant using assistive technology (screen reader and screen magnification) seemed to rely on autofill to help complete the form.

 


#### Recommendation



* The digitization of the claims form will increase accessibility and reduce burden by having the ability to autofill common information if the user chooses to use it.


### **Additional insight 3**: All the participants found the review screen for the insurances and the form useful and intuitive.

All participants expressed that they would use these types of screens to double check their form inputs for accuracy. During the interview, 3 out of 7 participants expected the edit buttons on the review page to take them back to the previous step. They were concerned that if they clicked on the edit button it would take them back to the question in the form and then they would have to manually navigate back to the review page again. They seemed pleasantly surprised when the component allowed them to make changes to a form field inline with the page.

 



* P1: “There's an option to edit if I see something wrong, it takes me back to that step. I'm sure.”
* P1: “I've been to many websites that if you want to edit takes you to the step, like Step 2, and then you gotta go through it again, and review and press next, next, next, and then you bring you back to step 6. So, I like that. You could just edit it right here.”
* P8: “So if we're going to review it all, I definitely start by expanding it. Go through everything just to check, to make sure that I didn't mess anything up as I was going through it.”
* P12: “I can appreciate it, not bouncing me back to 1 of 6 (steps) in the application, and let me edit it right here. I think that's great.”

     



#### Recommendation



* It’s recommended to keep the current pattern for the review page. For any future enhancements of the review page pattern consider keeping the edits inline within the review page or create an experience that only brings the user to the page they need to edit and then navigate them back to the review page when finished.


### **Additional insight 4**: During the session, 3 out of 7 participants verbally acknowledged the privacy policy and statement of truth on the form submission and understood the importance of these security measures.

The participants expressed some relief in the signature check and security statements that explained the consequences of falsifying information. Some participants mentioned that they appreciate the privacy statement, but they would not read it because they are already familiar with these types of statements from submitting VA forms in the past.

 



* P1: “No (would not read the privacy policy), honestly, because of I've been dealing with military for a quarter of a century. I kind of I understand what I'm doing.”
* P1: “Legally, you always have to put your name in some way so that you understand that all the information that you provide is accurate to the best of your knowledge. Just so, you make sure you're aware that you know, this is legal. You could get in trouble. Basically, if you're trying to make a false claim.”

     



#### Recommendation



* The statement of truth and privacy statement are well known patterns among regular VA.gov forms users. Consider monitoring analytics post-launch to discover any friction as newer VA form users start to use the form.

     



### **Additional insight 5**:  During the study, 2 of 7 participants mentioned that they had a CHAMPVA claim denied. The reasons for the rejections were not well understood or expected by the participants.

One of the participants who recently received a notice of claim rejection at the time of the interview had not read the letter in depth but their first impression was that the reason listed for denial seemed confusing. The second participant thought that the reasons for their denial were clear but indicated they weren’t initially educated on all of the limitations on CHAMPVA benefits coverage, such as non-coverage of over-the-counter medications care outside of VA.

 



* P1: “The reason that they put it is that I already claimed it before, which is kind of confusing.”
* P1: “But it gives you an option to, you know, to reapply, (appeal the claim) or call a number.”
* P4: “Well, I understood the over-the-counter one (pharmacy claim). I didn't understand the [procedure redacted] one (claim) until I called them (VA).”


#### Recommendation



* Consider creating more resources that will help educate beneficiaries on common services or products that are not covered by CHAMPVA. This information can be included in media that is easily updatable when program requirements change such as in a digital version of CHAMPVA handbook and/or added to the CHAMPVA information page on VA.gov.


### **Additional insight 6**:  The majority of the participants that were also Veterans stated that they would sign in before filling out the claims form.

The participants expected to have some of the parts of the form pre-filled after they logged in to their VA profile. Most of the participants did not notice the “Start your claim without signing in” immediately. One participant scrolled through the page several times before finding the link. Other participants who immediately navigated to the "Sign in” links acted surprised when they discovered the link to start the form without signing.

 



* P1: “Well, typically I'll sign in. Just because I do everything through. VA, but I mean.”
* P1: “I never knew that that button (the start your form without signing in link) was there because I was signing in”
* P3: “There's nothing else after that it just says sign in, and blue highlighted thing sign in to start your form. [when looking where to start the form without signing in]”
* P4: “Yeah (would normally sign in), but I don't know if I have an account.”
* P8: “I would figure if I am signed in, if for any reason I have to stop, it should save my progress. Also, if I'm signed in, hopefully, my thought is, it should be able to pull any of the info that I have already uploaded to the system”

 


#### Recommendation



* Consider adding some pre-fill functionality to the form to satisfy the signed-in experience that Veteran users are accustomed to with VA.gov forms.
* Continue to monitor bounce rates and form utilization among users that do not have a VA profile to discover the need to make the “Start your claim without signing in“ link more prominent.

 


## Recommendations at a glance


### [Recommendation for finding 1](#finding-1--participants-had-a-basic-understanding-of-what-they-may-need-to-complete-the-claim-form-but-still-needed-some-further-clarification)



* Consider including some common examples of where to find the codes listed on the upload page for medical claims or in what format these codes are commonly found (like the explanation and benefits upload page).


### [Recommendation for finding 2](#finding-2-participants-who-had-previously-applied-for-va-benefits-expected-the-requirements-to-be-difficult-so-they-read-instructions-in-depth)



* Consider including all of the claim requirements and supporting documents in the introduction page and making this top level in the hierarchy of the layout.


### [Recommendation for finding 3](#finding-3-participants-had-a-good-understanding-of-what-a-single-claim-was-but-desired-a-different-experience-when-needing-to-submit-multiple-claims-at-one-time)



* Continue with the discovery and engineering of a workflow that will allow a user to submit several claims in one form session. Also continue to research how to best organize the output of the form submissions for the claims processors to efficiently enter the claims into their systems. (Refer to the[ CHAMPVA claims service blueprint](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723309711950/72864bacb39ee1c8cd48f80735b6f6994a72b6ca?sender=u10700c583aaa99f809c88675)).


### [Recommendations for finding 4](#finding-4-participants-had-difficulty-when-navigating-the-form-as-a-third-party-representative-or-sponsor)



* Consider adding another screener question as a follow up to signer information that asks if they are also the sponsor. This will eliminate the redundant questions for the signers who are also the sponsor.
* Consider redefining the term “sponsor” using the phrase “the service member the beneficiary is connected to.” This recommendation should be aligned on all the CHAMPVA forms.


### [Recommendations for finding 5](#finding-5-participants-were-able-to-work-through-the-majority-of-the-list-and-loop-pattern-without-friction-when-adding-insurances-but-demonstrated-low-confidence-when-filling-out-their-insurance-details)



* The policy numbers and the insurance phone numbers are not required, so consider removing them from the form to alleviate the burden on the users.
* Continue to use the new list and loop pattern to ask for the insurance information with some adjustments. [See finding 6](#finding-6-after-adding-the-correct-maximum-number-of-insurance-policies-allowed-on-the-form-participants-hesitated-to-move-forward-when-shown-the-alert-box-on-the-insurance-policy-review-page).


### [Recommendations for finding 6](#finding-6-after-adding-the-correct-maximum-number-of-insurance-policies-allowed-on-the-form-participants-hesitated-to-move-forward-when-shown-the-alert-box-on-the-insurance-policy-review-page)



* Consider removing the yellow alert on the insurance review page and not allow the user to add anymore additional insurances unless they remove one first.
* Add some additional context about the maximum of two insurances on the insurance review page. Possibly use an error message to direct the content to only users trying to add more than 2 insurances.


### [Recommendations for finding 7](#finding-7--participants-understood-the-work-or-auto-accident-related-injury-question-however-they-expected-to-have-to-submit-more-details-with-their-claim-if-they-chose-yes-for-an-answer-for-either-question)



* Consider adding some additional context on the work-related and auto-accident injury questions that explains how CHAMPVA would use this information. This should set better expectations of what would come next and how it would affect their claim. 
* Consider exploring the removal of the work-related injury question if the beneficiary is under the legal working age (14 years old).


### [Recommendation for finding 8](#finding-8-participants-knew-how-to-use-the-file-upload-screen-almost-immediately-after-landing-on-the-page-but-many-participants-were-not-expecting-the-additional-notes-accordion-component-to-behave-or-contain-the-information-that-it-did-when-they-expanded-it)



* Consider rewording the “Additional notes” header on the accordion component to be more descriptive of the content that it contains to set better expectations.


### [Recommendations for finding 9](#finding-9-all-the-participants-immediately-noticed-and-understood-the-change-of-address-question-they-stated-that-they-would-know-what-address-they-used-on-their-last-champva-form-submission)



* After the digital version of the form is live, consider reviewing analytics to find out how many users select “yes” or “I’m not sure” when their address has not changed. This will help designers ideate on future improvements to collect address updates from beneficiaries.
* In the future, consider developing a method to show the last saved address on their CHAMPVA profile while filling out the digital form.


### [Recommendations for finding 10](#finding-10--all-of-the-participants-expressed-that-they-thought-there-was-enough-information-on-the-confirmation-page-but-wished-there-was-another-way-to-save-the-content-that-is-shown-on-the-page-which-includes-date-how-long-it-will-take-to-process-and-what-the-appeals-process-is)



* Consider adding a component to download the information on the confirmation page. This will help users that are not familiar with the “print to pdf” native OS function save the confirmation page as a digital format.
* Consider sending a post-form submission email with the information on the confirmation page so beneficiaries can have a digital version of this information.


### [Recommendation for finding 11](#finding-11-most-of-the-participants-were-unfamiliar-with-what-the-champva-number-was-or-what-their-number-was-specifically)



* Follow up with IVC stakeholders to determine if the social security number acts as the CHAMPVA member number 100% of the time. If this is true, consider updating the question to collect the SSN rather than the CHAMPVA member number. This will ease mental burden on the user and prevent uncertainty when answering this question.


### [Recommendation for additional insight 1](#additional-insight-1--all-of-the-participants-anticipated-a-long-wait-time-for-processing-their-forms)



* The digitization of the claims form will eliminate the time it takes to send and receive correspondence through the mail. It is recommended to continue to digitize the process to help reduce labor and enhance workflows which will decrease the time it takes to receive, process and send the reimbursement of the claim.


### [Recommendation for additional insight 2](#additional-insight-2-during-testing-4-of-7-participants-used-autofill-to-complete-the-online-form)



* The digitization of the claims form will increase accessibility and reduce burden by having the ability to autofill common information if the user chooses to use it.


### [Recommendation for additional insight 3](#additional-insight-3-all-the-participants-found-the-review-screen-for-the-insurances-and-the-form-useful-and-intuitive)



* It’s recommended to keep the current pattern for the review page. For any future enhancements of the review page pattern consider keeping the edits inline within the review page or create an experience that only brings the user to the page they need to edit and then navigate them back to the review page when finished.


### [Recommendation for additional insight 4](#additional-insight-4-during-the-session-3-out-of-7-participants-verbally-acknowledged-the-privacy-policy-and-statement-of-truth-on-the-form-submission-and-understood-the-importance-of-these-security-measures)



* The statement of truth and privacy statement are well known patterns among regular VA.gov forms users. Consider monitoring analytics post-launch to discover any friction as newer VA form users start to use the form.


### [Recommendation for additional insight 5](#additional-insight-5--during-the-study-2-of-7-participants-mentioned-that-they-had-a-champva-claim-denied-the-reasons-for-the-rejections-were-not-well-understood-or-expected-by-the-participants)



* Consider creating more resources that will help educate beneficiaries on common services or products that are not covered by CHAMPVA. This information can be included in media that is easily updatable when program requirements change such as  in a digital version of CHAMPVA handbook and/or added to the CHAMPVA information page on VA.gov.


### [Recommendation for additional insight 6](#additional-insight-6--the-majority-of-the-participants-that-were-also-veterans-stated-that-they-would-sign-in-before-filling-out-the-claims-form)



* Consider adding some pre-fill functionality to the form to satisfy the signed-in experience that Veteran users are accustomed to with VA.gov forms.
* Continue to monitor bounce rates and form utilization among users that do not have a VA profile to discover the need to make the “Start your claim without signing in“ link more prominent.


## Further research needed

Further research with assistive technology users would fully assess the accessibility of the form. With this information we can implement enhancements and/or resolve issues that would allow these users successfully understand and submit their CHAMPVA claims online.

 

Researching the type of information the beneficiaries prefer to keep a record of after they submit a claim could allow them to keep better track of their claims submissions in their preferred manner.

 

Studying the new upload pattern that features a “drag and drop” component will help better understand how beneficiaries use and understand uploading files in this method. We can then implement any further enhancements on that pattern.


## Next steps



* Share information relevant to the program and potentially actionable with stakeholders. Continue to work with stakeholders on interim solutions to give beneficiaries more visibility into the status of their claim.
* Make content modifications based on the observed interactions.
* Investigate potential solutions for problems that need design input once they are prioritized.
* Continue pursuing opportunities to enhance the outreach capabilities, eligibility requirements clarity, and required claims submission documentation through OCTO’s capabilities and VA.gov.

 


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/user-research/Research-Plan-for-Integrated-Veteran-Care-(IVC)-Team%2C-Form-10-7959a%2C-August-1st.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/user-research/Conversation-Guide-for-Integrated-Veteran-Care-(IVC)-Team%2C-Form-10-7959a%2C-August-1st.md)

[Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaivc/Shared%20Documents/Forms%20Modernization/10-7959a%20(Champva%20claim%20form)/User%20interviews/Scrubbed%20Transcripts?csf=1&web=1&e=qRe9mi)


## Tools used for synthesis

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724429351481/1c421fa57889726df80b9bae0311733c27f705af?sender=u10700c583aaa99f809c88675)


## Pages and applications used

[Form 10-7959a - staging](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/file-champva-claim-10-7959a/introduction)


## Secondary research

Stakeholder interview findings

[Preliminary form improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/research/stakeholders/CHAMPVA-Claims-(10-7959a)-Stakeholder-Research-Findings.md)


## Who we talked to

Recruitment criteria:

The intended audience for this research was Veterans whose dependents had submitted claims for CHAMPVA benefits and dependents of Veterans who had submitted claims for CHAMPVA benefit. We talked to 7 participants. Our pilot participant was a dependent who was familiar with  CHAMPVA benefits, but we did not collect their demographic information. Therefore, we included them in our analysis but they are not reflected in the following demographic information.

Audience segment:



* Veterans: 5
* Family members/Caregivers of a Veteran: 1

Gender:



* Male: 3
* Female: 2
* Non-binary: 1

LGBTQ+:



* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 0

Devices used during study:



* Desktop: 7
* Mobile: 0
* Assistive Technology: 1

Age:



* 25-34: 0
* 35-44: 3
* 45-54: 1
* 55-64: 2
* 65+: 1
* Unknown: 0


Education:



* High school degree or equivalent: 0
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 0
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 0

Geographic location:



* Urban: 4
* Rural: 2
* Unknown: 0

Race:



* White: 1
* Black: 2
* Hispanic: 1
* Biracial: 0
* Asian: 0
* Native: 0
* Not given: 2

Disability and Assistive Technology (AT):



* Cognitive: 2
* AT beginner: 1 (sort of - used a Google Chrome plugin)
* AT advanced user: 0
* Desktop screen reader: 1 sort of - used a Google Chrome plugin)
* Mobile screen reader: 0
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to

[VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726) (master)

[Our completed spreadsheet](https://docs.google.com/spreadsheets/d/1Ae42llVPxKsPQx3ZP4-od-GrdF28UzZP-hQ_DH47uDY/edit#gid=1116550612)

This research does not include the perspectives of the following marginalized Veteran groups:



* Veterans with other than honorable discharge
* Veterans of immigrant origin
* Expats
* Transgender users
* Assistive technology users
