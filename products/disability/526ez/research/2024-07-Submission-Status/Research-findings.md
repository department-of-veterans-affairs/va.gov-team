# 526 Submission Status Findings Report

Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1  
Date: 7/29/24  
Evelyn Hilbrich Davis (evelyn@cityfriends.tech)

## Background

### Problem to solve:
When a Veteran hits “submit,” the messaging they receive does not reflect the true status of a claim, setting false expectations for Veterans on the timeline for their claims processing. If something goes wrong during submission, the onus is on the Veteran to contact VBA or resubmit failed documents via mail. 
 <br /> 
 
### Proposed solution:
In the days after applying, give Veterans timely and truthful information about their submission status. 
 <br /> 

### Design changes:

-   Redesigned loading page
    
-   Added email touchpoint triggered when Veteran presses “submit”
    
-   New confirmation page with only one state for all submission scenarios (previously 3 states)
    
-   Content changes submission received email

<img width="874" alt="Screenshot 2024-08-08 at 1 28 23 PM" src="https://github.com/user-attachments/assets/adf99b22-1edf-4a3f-9fc5-eb73c169c13d">

    
## Research Goals
The research study assessed the clarity of the proposed changes to submission statuses and timeline to see if Veterans have accurate expectations in the days following submission.

-   **Research Goal 1:** Evaluate how effectively the submission model sets clear expectations for claim submission timeline.
    
-   **Research Goal 2:** Evaluate if submission touchpoints are timely and useful for Veterans.
    
-   **Research Goal 3:** Generate ideas for the next design milestone to improve the claim record.
    

## Research Questions

-   Do Veterans have an accurate impression of their claim's status and the timeline to submission?
    
-   How does the timing of our communication meet Veteran’s expectations for submission updates?
    
-   How easy/difficult is it for Veterans to follow the submission process from touchpoint to touchpoint?
    
-   What information do Veterans expect to receive in a record of their claim?
    
-   How might Veterans use claim information to take action on failed submission?
    
-   How might Veteran interest in a PDF of their claim change if they had to access it after submission (not synchronously)?  
      
    

## Methodology

We conducted usability/concept testing with a high-fidelity clickable Figma prototype. In 60 minute sessions, 8 Veterans participated in three test scenarios in which they “submit” a 526ez and walk through the user experience for each submission scenario. Prototypes included: review and submit page, loading page, email communications and other current state pages.

### Scenarios tested:

1.  **Happy path scenario included:** Review and submit page, loading page, confirmation page, confirmation email, submission received email
    
2.  **Backup path scenario included:** Happy path scenario with submission received email delayed 3-4 days.
    
3.  **Evidence failure scenario included:** Confirmation page, confirmation email, evidence failure email requiring mail resubmission of a failed file.

## Key Findings

|**#** | **Research Finding** | **Do Veteran expectations match design intent?**| 
|--|--|--|
|**1**| Veterans’ mental models for claims processing do not map onto the VA timeline for electronic submission. |Expectation different from design intent|
|**2**| Participants who conflated the submission and tracking timelines had mixed expectations for next steps.|Expectation different from design intent|
|**3**| Participants would likely download a full PDF of their claim at a later date, but stated they had all the claim information they needed on the confirmation page.| Generative finding|
|**4**|The “submission received” email clearly communicated the final submission status.| Expectation matches design intent|
|**5**| Most participants didn't feel a need to check the status of their submission online once it was received.| Generative finding|
|**6**| The happy and backup path scenarios were easy to understand–and left participants feeling confident that their submission was complete. | Expectation matches design intent|
|**7**| Participants consider digital resubmission to be the safest and cheapest way to send their documents.|Generative finding confirms hypothesis|
|**8**|Missing touchpoints leads participants to worry that something went wrong with their submission.| Generative finding confirms hypothesis|
   
   <br /> 

## Detail of Key Findings
    
### Finding 1: Veterans’ mental models for claims processing do not map onto the VA electronic submission timeline.
   
- Half of participants presumed that submission was a human-driven process that involved VSRs long before their submission was in the eFolder.

  > “So he just submitted the claim and whoever will be processing their claim, they need time to check. And then there will be a lot of claims they have to go through. So for them it's like three days to receive and start the claim.” -P2

- In addition, participants expect electronic submission to happen instantaneously– not over 3 days. The loading screen may have contributed to this perception, as 6 out of 8 participants thought their application was being “uploaded” on the loading screen. 

    > “My submission's done, like I submitted it. I hit submit. I can imagine me and the other 20 people that might be doing this we'll say, what do you mean it's taking three days for you to receive it? You just told me you got it….It doesn't take 3 days for electrons to travel. I don't understand why the electronic system didn't just receive, validate, and say it was received. What it does in-house is different than what I see here.” -P5

 <img width="941" alt="Screenshot 2024-08-08 at 1 26 07 PM" src="https://github.com/user-attachments/assets/d40fd958-8f36-4db2-abdb-2fd215790a76">


<br /> 

### Finding 2: Participants who conflated the submission and tracking timelines had mixed expectations for next steps.
    
- The confirmation page and email outlined two separate timelines: Submission (3 days) and Online Tracking (7-10 days).
 <img width="809" alt="Screenshot 2024-08-08 at 1 22 47 PM" src="https://github.com/user-attachments/assets/e39e8d95-b91e-48ea-a6a7-f05f63711f16">

- A majority of confusion originated from the email, since only 3 participants opened the “How Can I Check the Status” accordion on the confirmation page.
- 4 of 8 participants had inaccurate expectations of when their submission would be received.  

    > “Well, within 13 days you'll find something, because it takes three days to apply for it to appear online. 10 days to have a decision. So within two weeks you should hear something.” -P8
    > 
    > “Confusing. Up here you say 3 days. Down here you say 7-10 days…. This is electronic. Why does it take 3 days? You're saying it takes 10 days to get an update. Just leave it at 10 days, I'm fine with that. Some sticklers are anal retentive. You told me 3 then 10.” -P1


<br /> 

### Finding 3: Participants would likely download a full PDF of their claim for their records if it were available at a later date.
    
- All participants said they would digitally save or print a copy of their confirmation page using the “print this page” button or a screenshot of the blue box.

    > “Date initiated, conditions filed for, claim ID number. That's short,sweet, and simple.” -P1
    >“Yes, I think so. Especially the blue box, 'cause the date and then the claim ID number just in case anything the documents get lost and I have a reference to go to... I'll screenshot it and then I'll just store it in my iCloud or Google doc in the documents where I save usually for my stuff.” -P2

- Participants who were interested in the opportunity to download later thought it could be useful if something went wrong– but wonder where they would expect to find it on VA.gov.
    
    > “Now if I want to go back, should I be able to print it out again, I'd say yes. Once I leave this page, I'm not sure if it's viewable again at a later date. -P1

<img width="786" alt="Screenshot 2024-08-08 at 1 30 09 PM" src="https://github.com/user-attachments/assets/a3c08f38-411f-41f2-aeb9-088cbfabd10a">

  
<br /> 

 ### Finding 4: The final “received” email clearly communicated the final submission status and clarified next steps.
    
- Even if participants presumed a human-controlled process or conflated timelines, they accurately understand that the “submission received” email indicated that VA has their claim and it is ready for initial review.
    
- As one example, P11’s expectation for submission came from her job in the federal government. She presumed a human-controlled submission that moves faster than the 526ez– but found her expectations met in the final email.
 
    >   [Loading screen] “Maybe it's transmitting to the actual VA systemthat receives the request, the files….I assume on the next screen itwill say that it was received or no errors.”
    >     
    > [Confirmation page] “I'm assuming that an intake team has received this in some intake inbox.”
    >     
    > [Received email] “They've received my claim… That [intake team] has to hand it off in an imaginary world to an initial reviewing team to check that everything they need to get this to a claims person - the name, the social, everything on the form was accurate.”
    

<br /> 

 ### Finding 5: Most participants didn't feel a need to check the status of their submission online once it was received.
- 5 out of 8 participants wouldn't expect an update given the 7-10 day timeline for online tracking; others felt like they already had the most up-to-date status in their email.
- However, 2 participants shared that they would check every day to see if their claim was available online (P2 and P10).
    
    > “I could check it and it'll just tell me that it's been received, so I would not even check right then, I would give it some time, you know. I would actually probably wait at least a business week…It tells me at the bottom I would wait 7 -10 business days for my claim to appear online.” -P4

    > “I would try now and then again every day since then because I have a link to it. ” -P2

<img width="731" alt="Screenshot 2024-08-08 at 1 21 33 PM" src="https://github.com/user-attachments/assets/e99d7b0b-0fff-4f57-8e3a-29134810bb20">

<br /> 

### Finding 6:  The happy and backup path scenarios were easy to understand–and left participants feeling confident that their submission was complete.
    
- At the end of each scenario, we asked participants two questions about the submission experience. Early confusion and mixed expectations on the happy path did not have a high impact on ratings overall.
  <br /> 
    > *Ease of understanding:* “4 just because of the different numbers of days bouncing around. Otherwise I think it was pretty easy.” -P1
    > 
    >  *Confidence:* “5, very confident. As soon as I submitted, I got an email saying it was submitted. Then another email saying it was received. It's very proactive on the VA's part.” -P1

|**Submission scenario**  | **On a scale of 1 to 5, how easy was it to understand and track your claim’s submission status?**  |**On a scale of 1 to 5, how confident are you that your claim is fully submitted and ready for initial review?**|
|--|--|--|
| Happy Path| 4.4 | 5|
|Backup path| 4.6| 5|
| Evidence failure| 4.1| 2.2|

<br /> 

### Finding 7: Participants consider digital resubmission to be the safest and cheapest way to send their documents. They are frustrated that snail mail is their only option.
    
- Participants point to the insecurity of mail for PII like social security numbers and noted the financial cost of tracking it.
 
    > “I’m gonna have a frustrated reaction to it… I'm wondering why I can't resubmit electronically because you're telling me I have to mail it, which confounds me because the whole reason why we have the electronic submission is to avoid mailing it because PPI in the mail is a risk mail takes a long time, it's more costly, yada, yada, yada. -P5  
    > 
    > “Not sure why we don't give an option to just do online again, which is the safest and quickest way to transmit something. Kicking us to USPS mail or whatever form of getting the mail to you now turns into a whole different process for a Veteran, cost associated with it.” -P11  
      
- Sometimes, a VA documentation request is a pain point that never gets resolved. P8 shared that she never resubmitted documentation for her claim, while P1 spoke to the frustration a fellow Veteran experienced trying to send material VA already was supposed to have. 

  <br /> 

### Finding 8: Missing touchpoints lead participants to worry that something went wrong – and call the Contact Center.
    
- All participants expected VA to send them a notification when their mailed evidence was received– which does not exist. 7 out of 8 participants would call the Contact Center 1-3 weeks after mailing the evidence.
    

    > “I would hope they would contact me and say, Hey, we received your letter, there's nothing else you need to do now on your part…It doesn't give me a whole lot of confidence that if you can't receive a PDF via an email, how are you gonna receive a letter? -P3

    >“Because being submitted electronically, I would think that it was received and if I didn't hear anything, didn't receive an email, I would assume that it was lost. ” -P10

- On the backup path, the delayed email concerned 4 out of 6 participants. When claim ID was absent, participants comfortably defaulted to using a SSN and VA file number.

    > “IT glitch? I think maybe something was missing and I just haven't heard from them yet. But definitely if it's been 7 days and it says up to 3, then I think something has went wrong.” -P11
    > 
    >“I would somewhat think: " "why is it still saying it takes 3 days? I did it a week ago."" It's very slow. and it seems weird. Is there a delay in the system somewhere.” -P1
    

<br /> 

## Additional Findings

|**#** | **Additional Finding** | **Do Veteran expectations match design intent?**| 
|--|--|--|
|**1**| Across scenarios, participants understood when they needed to take action–and when none was required.  |Expectation matches design intent|
|**2**| Participants saw email touchpoints as a welcome, new way to receive submission updates from VA. |Expectation matches design intent|
|**3**| Language like “date initiated” could be fine-tuned to ensure more even comprehension.| Expectation differs from design intent|
|**4**|Visual hierarchy and more precise language would help clarify “next steps.”|Expectation differs from design intent|

### Additional Finding 1: Across scenarios, participants understood when they needed to take action– and when none was required. 
- Participants accurately understood that no action was required on the happy path. In the evidence failure scenario, all participants understood that action was required to complete their submission. 
- However, many thought that VA was requesting new information or that there was a problem with the file itself rather than a backend system issue. Participants did not think it would be challenging to find the correct file if asked to resubmit.
  
    > “Before I would create an application online, I would put everything sorted into - have it named in a file folder called "tinnitus." And that way it would be easy to find what I submitted to them. I would just print it off from there. -P10
    > 
    > “I'm a computer guy's nightmare. I keep everything on my desktop. I'd look for the filename and print it out. Look over it; is this what I sent to the va? -P1
    
  <br /> 
### Additional Finding 2: Participants saw email touchpoints as a welcome, new way to receive submission updates from VA. 
- Participants preferred to be notified by email of submission status updates. A couple of participants each expressed interest in additional communication methods like SMS, app notifications, and paper mail.
  
    >“I'm a little surprised it says it's all email, I always get letters from the VA actually.  I received most of my stuff via the good old fashioned mail. -P3
    >“If you have to have an email to use this feature, then this is great, because then you don't have to address postal.” -P11
- If they get emails for each submission status update, they might also expect them for significant updates to their claims that happen downstream.
    >“That would make me feel good that someone is giving me a notification. And I'm starting to think, "are they going to give me a notification at each step?" Oh, so if they're missing anything they're going to contact me.” -P1
- Veterans who struggle with authentication might find value from email updates that save them from logging on to VA.gov. 
    >“I don't really trust the VA. It's complicated once you get on [the website]. Well, [sigh] if you have to go, your passwords and stuff, there's like two-step verification just to get on there…..Once you get past that, it's good, don't get me wrong...It's the hassle of getting through.” -P8
    
  <br /> 
### Additional Finding 3: Visual hierarchy and more precise language would help clarify “next steps.”
- **Be precise about days:**“Now, if it's business days, it should say business days….I'm also not a fan of it saying ASAP because everything at VA has a time nexus. Almost always with VA, there was a "you need to do it by this date. Claims at the VA are like the milk in your fridge or your bread. Claims at the VA have an expiration date whether you know it or not." -P11
   <br /> 
- **Visualize next steps:**"[The Claim Status Tool page] is more visualized, it's easier to understand. Definitely. In the green box it says in progress. So I'm like a little bit relieved that it's on the process and they receive the claim. Then, Step 1 out of 5. So I kind of know where I'm at and see what is gonna happen next.” -P2

<img width="641" alt="Screenshot 2024-08-08 at 1 33 17 PM" src="https://github.com/user-attachments/assets/d648bcd8-9362-43f0-9878-35c2c216d68b">


### Additional Finding 4: Language like “date initiated” could be fine-tuned to ensure more even comprehension.

- The submission redesign used the language "Date initiated" to refer to the day Veteran pressed "submit" on their 526ez.
- 3 Veterans guessed the term may refer to the Intent to File, while other participants saw it as the day they started or submitted their application.
- 
    > “The day I filed my claim, so I know when you file a claim they have, so say I was to get this, this claim was approved, I would get the compensation from that date right there…Retroactive or something like that. You know what I mean?” -P1
    >
    > “Date initiated - I started a PACT claim - that's when I initiated it.…Hector's should say "date submitted" or we should add a field for "date submitted". Initiated and submitted are two separate things.” -P11

## Recommendations
A majority of the recommended changes are geared toward improving Veteran comprehension of the submission process. We expect to work closely with CAIA to rethink content for clarity and accessibility.

### Truthful submission statuses 
- Convey that submission is a 3 day electronic process– not immediate or human-controlled.
- Address how earlier instances of the word “submission” could be confusing Veterans. For example, “Submit application” and loading screen promote a model of instant submission.
 - Consider this as part of a longer term effort to refine the submission model– not a priority to address in this iteration. 
- Change language from “date initiated” to “date submitted” to address mixed comprehension– and align with MyVA language. 
  
### Clear submission timeline
- Feature only one timeline per touchpoint to avoid confusing Veteran expectations. 
- Explore strategies for making “next steps” clearer to Veterans– especially in the submission received email. 
- For example, using the Claim Status Tool steps (or create our own) to outline the process.
  
### Timely touchpoints 
- Introduce email touchpoints for significant milestones in the claims process– starting with a message for when claim tracking is available on VA.gov.
- Remove the link to the Claim Status Tool before the claim is available.
- Ensure the purpose of both emails is clear-- the first as a copy of submission w/ claim details, the second as proof of receipt. 
 - Trigger the confirmation email as close to pressing submit as possible so it reads as a copy of submission rather than an update.
  
### Evidence failure scenario 
- Introduce a digital resubmission option for Veterans experiencing evidence failure. 
- Communicate to Veterans that their mailed evidence resubmission has been received– or if it hasn’t. 
- Review our request for evidence to see if we reduce PII needed, such as social security numbers.
  
### Claim record & tracking
- Continue to explore means of providing Veterans with a full record of their claim.
- Determine if there is a more useful ID (such as application ID) that we can provide Veterans looking to get help on their submission. 




    
