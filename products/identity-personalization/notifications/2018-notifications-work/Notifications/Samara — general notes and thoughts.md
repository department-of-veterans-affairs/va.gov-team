<h2>2/14/18</h2>

Sprint planning — what can I get done in the next two weeks:

* Continuing to look into email tools to power notifications
* User testing flow and script
* Email prototype
  * May need Mel's/someone's help since I don't have a Sketch license
  * Caveat: Contingent upon copy writing
* Finish product outline
* User testing to start next sprint
* Note: Only in the office Tuesday of next week; WFPA on Monday 2/26

----------------

User testing flow

Show last page of HCA (review your application) > Have them submit application > Show confirmation page > Show email > Ask questions.

_Show last page_

Let's pretend that you are applying for healthcare on Vets.gov, and that you have finished filling out the application at this point. You're at the point where you are ready to submit the application. When you're ready, you can go ahead and click **Submit Application**.

_Confirmation page_

What we are testing: New copy.

Now that you have submitted the application, you have been taken to this page.

- What is this page trying to communicate?
- What happens now that you've submitted the application? 
- Is there any information you would expect to find on this page that you are not seeing, or is there anything that should be removed?

It looks like you have an email. Let's check that.

_Email_

- What is this email trying to communicate?
- When will you receive a decision about your healthcare application?
- What would you do if you had questions?
- Is there any information you would expect to find in this email that you are not seeing, or is there anything that should be removed?
- Would you expect to receive an email like this?
- When would you expect this email would show up in your inbox?
  - If you didn't receive this email right away, what would you think if you received it a few hours after submitting your application? A day or two? A week?
- Do you find this email to be helpful or useful?
- Do you trust this email? (Why or why not?)

Now that we've had a chance to look at an email you might get from vets.gov, let's talk a little bit about other email and notifications. You do not need to look at the email we were just talking about anymore.

First, I want to ask you about your past experience filling out benefits applications with the VA.

- What benefits applications have you submitted to the VA?
- Tell me about that process.
  - Who filled out the application?
  - How long did it take to complete the applications?
  - What usually precipitated breaks? How long did you go between sessions where you were filling out the application?
  - Did you ever forget about the application?
- After you had completed and submitted this application, did you feel like you had insight into what was happening with the application at the VA? Why or why not? [If not] How could the VA have given you better insight?

Next, I want to ask you about emails you receive in general.

- What kinds of emails do you receive from companies/organizations? [If they need examples or seem confused] These would be things like purchase confirmations, email receipts, promotional emails, newsletter emails, etc.
- Which of those emails do you find to be useful? Which ones usually go ignored, or do you find not to be helpful?
- Do you receive any kind of correspondence from companies/orgamizations via text message? If so, what kind of messages do you receive?
- Would you be open to receiving text messages from the VA? If so, what kind of messages would be helpful?
- Remember the email we had looked at earlier that said the VA had received your healthcare application? How would you have felt if you had received that email confirmation as a text message instead?
  - Would you trust it? Why or why not? [If no] What would help you trust it?
- In addition to what we talked about earlier, what kinds of emails or text messages from the VA would be helpful?


<h2>2/12/18</h2>

What needs to happen this week?

* We need to figure what platform we are using to support emails. This will help Nick and Ben determine how long build-out will take.
* Nick and Ben need to review Lihan's code and my flow to determine how long buildout will take.
* We need to get some of Danielle's time for copywriting.
* We need to work with Kristen to get recruiting done.
* Other research planning (methods) needs to happen.

-----

Salesforce

- We would need to get another contract to use Salesforce for notification stuff.
  - Where are we gonna get the money for this?
- Sounds like salesforce can customize what we track about users.
- Ask Charles or Alex about how to get money.

<h2>2/9/18</h2>

<h4>OKRs for Notification MVP</h4>

Background

* There is no way to keep veterans informed about the status of their applications and benefits that are tracked on vets.gov without requirng that they log in to vets.gov.
* Vets.gov does not accept the submission of applications if VA databases are down, which might mean people fill out an application only to not be able to submit it.
* Calls to VA call centers about claims status account for a large percentage of their calls, even though this information is trackable online. (source?)
* Veterans request greater transparency into where their applications are in processing.
* Veterans want to know what they are eligible for with regards to benefits, and they want us (the VA) to inform them of that.

Objectives

Question — Is this objective to guide the healthcare MVP or beyond?

* Potential objective — To keep user better informed about the submission status of their healthcare application.
* Potential objective — To lay the foundation for a system that keeps veterans informed about their applications and eligibility.
* Potential objective — Establish foundation for vets.gov external notification system.

Key Results

How do we measure for key results when the MVP isn't actually intended to result in user action?

* Vets.gov allows healthcare applications to be submitted when VA databases are down and continues to attempt to submit them until they are received by VA systems. For applications with no validation errors, this asynchronous process works 100% of the time and results in 0 failed submissions.
* Vets.gov successfully generates 100% of confirmation emails (via a third-party tool) when the healthcare application is submitted and received.
* 98% of confirmation emails are received and not marked as SPAM (98% is cited as [GovDelivery's success rate](https://insights.govdelivery.com/Communications/CommunicationsCloud/Getting_Started/Deliverability). Note: we need to confirm we can track this metric.

Quotes 

* [VIC research] “Is there a way they can email you to say your app has been submitted for review and email you when it has been approved with an expected timing and then an email once the card has been shipped to you so that you know when to look out for it.”

------

<h4>Research objectives</h4>

* To evaluate updated confirmation messaging in vets.gov.
* To evaluate email content for confirmation messages.
* To evaluate participants' reactions to a plain text confirmation email.
* To learn more about what kind of notifications would be helpful for people who have used vets.gov or have filled out any type of application within the VA.

Who we want to talk to

* Veterans who have been through the benefits application process for any kind of benefit within the VA, whether on vets.gov, another digital tool, or even on paper.

<h2>2/8/18</h2>

What is the truest MVP we can test and launch?

**Group agrees this is MVP**

* Synchronous submission use case OR Asynchronous submission where the system goes down but comes back within 21 days AND no validation errors
  * Logged in OR logged out user
  * User submits an application. We show "We've submitted your application" confirmation message.
  * We send a "The VA has recceived your application" email (plain text).

Note: The only difference between synchronous and asynchronou submission in this use case is that there is a time lapse between when the application is submitted and when the confirmation is received because we have to wait for the system to come back up.

-----

**We should get stats on how often these use cases happen before we incorporate them into our work plan.**

What is the next step?

* Asynchronous submission — system goes down and does not come back up within 21 days
  * Logged in user
    * Send an email asking them to resubmit their application.

What is the next step?

* Asynchronous submission — system goes down and does not come back up within 21 days
  * Logged out user
    * Send an email letting them know they need to fill out the application again.

What is the next step?

* A styled email template.

What is the next step?

* Asynchronous submission — validation errors
  * Logged out user
  * We fix validation errors.
  * Send an email letting them know they need to fill out the application again.

What is the next step?

* Asynchronous submission — validation errors
  * Logged in user
  * We fix validation errors.
  * Send an email asking them to fix errors (unspecified) and to resubmit the application.
  * On Vets.gov, we show where the errors are.

What is the next step?

* Improvements — How do we make it so logged in users aren't waiting 21 days to get a "sorry, your application didn't go through" message if the system is down for the full 21 days?
* Improvements — How do we make it so logged out users aren't losing their applications if the system goes down?
* Improvements — How do we make it so logged out users aren't losing their applications due to validation errors?   

What is the next step?

* Moving onto reminder notifications (eg. don't forget to finish your application; your application is about to expire).

<h2>2/2/18</h2>

Meeting with Mel

* Have writer involved for notification copy
* Mel can help with email template visual design
  * Should we just do a plain text email?
  * Might want to do some background research on this.
* How does this work within logged in/logged out/save in progress? Add this to technical discovery notes
* We should think about synchronous flow as well while we do this.
* Scope (Conditions) — put together next week
  * Other conditions we need to consider
    * Is the user logged out?
    * What if they have never saved their application? Do they have to start from scratch?
    * Is the user logged in? If logged in, does the application automatically save if I don't select "save in progress" but I go to another page?
* Instead of telling people there is an error, we should tell them we submitted it > and then send a confirmation that the VA has received it. We don't need to worry them by telling them there is a problem because they probably won't think much of it if the email comes a bit after they've submitted (asynchronous use case).
  * This means we're essentially testing asynchonous and synchronous at the same time — win!

<h2>1/31/18</h2>

In order to get a prototype out, I need to:

* Talk to Lihan about what he's done with the HCA notification work he's already done and understand exactly what his vision was and what it can do.
* Talk to a developer about the best way to build a prototype for this.
* Figure out exactly what we want to test in user testing.
* Work with the team to finalize a flow.
* Start designing the prototype with Mel.
* Work with developer to build the prototype.

I also need to do the following, though this may not hold up a prototype:

* Work with a developer on technical discovery.
  * Figure out where email addresses come from and what can power notifications.
  * Figure out what of Lihan's work we can leverage.

<h2>1/30/18</h2>

<h4>VIC notifications: How I can best be involved</h4>

* Stay updated on all conversations and help/chime in as necessary so we can leverage lessons learned for notifications across vets.gov.
* Help the team figure out what the success metric is for VIC notifications.
  * Success metric: Users understand the status of their VIC application/card and any possible next steps based on the content of the emails we send them.
* Help the team figure out how to best keep tabs on notifications or notification-related feedback.
  * To track the above success metric, we may want to monitor click-through rates from links in emails, monitor VIC-related feedback that comes in through the "provide feedback" functionality on vets.gov, and keep updated on the kinds of VIC-related feedback coming in through the call center.

Otherwise, we are not planning on conducting any additional testing/research to what the VIC team has already done.

----------------


<h4>VIC notification discovery</h4>

I need to ask or figure out:

* What is their current timeline for launching this feature?
  * 2/21 target launch date.
* Who is approving the copy?
  * VA stakeholder.
* Is there someone else we can go to to get blanket approval on sending things like application types, etc.?
  * Still need to look into this.
* If/how replies or follow-up action (eg. a call to the call center; clicking on links) will be monitored.
  * Probably some level of analytics tracking.
  * Call center feedback.
  * Feedback functionality on vets.gov.
* If any type of testing is neccessary or possible before launch.
  * No, not necessary. Notifications were created based on research done in the last few weeks.
* Will there a place on vets.gov where they can view their VIC progress/updates?
  * No.
* Is there a way to opt-out or turn off notifications? Idk that there needs to be but I'm curious.
  * From looking at these emails, I don't think there is. Also, since there is no other way to get in touch with people, it is probably OK that there is no opt-out in these cases. It's unlikely someone would get more than ~3 emails, and they are all important status updates.
* Success metrics with these emails.
  * That people understand the status of their card/application or next steps. We can monitor this by keeping an eye on any feedback that comes in about the process to see if anything is notification related (eg. I don't know when my card is getting here).

They need to figure out

* The email address the emails are coming from and how replies will be handled.
  * I should keep tabs on this conversation and bring lessons learned to other notifications work.
* Ryan to talk to call center and let them know VIC updates are going out.

<h2>1/29/18</h2>

<h4>VIC Notifications</h4>

**Is VIC the real MVP?**

Things that need to happen:

* VIC notification copy needs to be approved.
  * Has already been sent to stakeholders for approval.
* We need to confirm that everything we are sending over email is OK to send.
  * This may be addressed by the stakeholders approving copy.
  * BUT we should also figure out where we can get blanket approval to send things like application type, discharge, confirmation number, etc., so the team can use those guidelines going forward.
* Figure out the email address the emails are coming from.
* Ryan to talk to call center and let them know VIC updates are going out.
* Is there anyway to track how many people call the call center as the result of our emails?
* What kind of tracking do we have on links in the email?
* Can we pilot an email somehow?
* How are we measuring success with these emails?
* What kind of testing can we do before this launches?
  * When is this set to launch? Should we just wait until after?
* Does anything need opt-out?

<h4>Healthcare App MVP</h4>

**MVP: Asynchronous submission use case**

Flow

* User submits application
* If VA systems are up:
* (Notification 1: In-app) We let user know we've received their application.
  * Do users expect/benefit from an email or text notification here?
* VA systems are down:
* (Notification 1: In-app) We let user know we're working on submitting the application and will let them know as soon as it's submitted.
  * Where are we getting the email address to send the notification?
  * How do we know the systems are down?
  * Is there ever a chance it will take a few seconds to submit the application? If so, how long do we wait before showing them this notification?
* Vets.gov keeps trying to submit the application in the background.
  * Scenario 1: The application submits successfully
    * (Notification 2a: Email/text): Application was received successfully
  * Scenario 2: The application fails to submit
    * (Notification 2b: Email/text): Unable to successfully submit the application. User needs to re-submit.
  * User signs in to resubmit application. Flow begins again.

Questions for devs

* Where are we getting the email address to send the notification? Assuming this is whatever email address they use to sign in, or do we have to get them to enter an email address into vets.gov?
* How do we know the systems are down?
* Is there ever a chance it will take a few seconds to submit the application? If so, how long do we wait before showing them this notification?
* Is there ever a chance submission will fail entirely? If so, under what circumstances might this circumstance arise?

Open questions

* Do users expect or benefit from an email or text notification that their application was successfully received if submission happens instantaneously?
* Should we be pursuing this before we have an idea of what kind of "approvals" we may need re: transmitting notifications over email/text?

Next steps:

* Talk to Ryan about:
  * Work that's been done so far re: HCA to make sure we have all use cases accounted for
  * I'm going to try to do some investigating into who we can talk to re: notification approvals. Goal: Get definitive yes or no answers on what we can share and use those as guidelines for all notifications so we don't have to get signular approvals.
  * Timeline — when do we think we might have some development support?
* Create another flow chart that more thoroughly outlines this use case
* Figure out how we can simulate sending an email/text

<h4>Questions re: what we can send to veterans over email/text</h4>

Based on the types of notifications we want to send, we have questions around whether we can send the following over email/text:

* The type of application they've submitted (eg. healthcare, education, disability, etc).
* The type of claim or appeal they are tracking (ie. disability)
* Confirmation numbers
* Discharge status (eg. honorable, less than honorable, etc)
* The date something was submitted or received

<h2>1/24/18</h2>

Question for developers:

* Assuming VA systems are down when submitting an address update (disability flow) or any application, is it possible that the application won't submit at all even when the VA system comes back up?

<h2>1/22/18</h2>

- [**Tuesday**] Chat with someone else on the VA team about research process. Rachael says to do some light research on best practices and then design prototype. Good idea?
  * [Best UX practices for notifications](https://www.google.com/search?client=safari&rls=en&ei=PltmWoapM6HI_Qam9piwDw&q=best+practices+UX+notifications&oq=best+practices+UX+notifications&gs_l=psy-ab.3..0i71k1l4.0.0.0.3111.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vvhzDk2TZKk)
- [**Tuesday**] Disability: look into that flow and figure out where notifications are (something about addresses). [Here is the prototype](https://adhoc.invisionapp.com/share/RGFEXO4A2N3#/screens/274351324_ssic-0-1-Preamble).
- [**Wednesday**] Map out prescription flow and see where there are holes.
- [**Wednesday**] Finalize preliminary research plan.
- [**Thursday**]Talk to Steve and Ben Barone. Run by them what we've done so far and general plan.

<h2>1/18/2018</h2>

Chat with Marvo about what we can send to veterans.

* Use resources found here https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Health%20care/Scheduling/Appointment%20Reminders/VEText


<h2>1/16/2018</h2>

What's been done:
* Mapped out healthcare application flow and found opportunities for notifications.
* Mapped out education application flow and found opportunities for notifications.
* Took an initial look at the prescription flow, took notes, and compiled questions.
* Took an initial look at the messaging flow, took notes, and compiled questions.
* Took an initial look at the claims & appeals flows, took notes, and compiled questions.

What needs to happen:

* Get questions answered on prescriptions, messaging, and claims & appeals.
* Map flows for prescriptions, messaging, and claims & appeals.
* Share flows with each product team lead to make sure we haven't left out any opportunities for notifications.
* Finish Discovery Brief and start on [Product Outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Product%20Outline.md)
* Take that information and start figuring out what kind of research we need. 
* Plan research. Figure out who is going to run that/how that works.

Will revisit the rest of the tasks that need to happen after we get research planned.

<h2>1/8/2018</h2>

<h4>Chat with Rachael</h4>

Incorporated most of our conversation in the questions listed under 1/5, but here are the important takeaways:

* Create flows for all existing applications, prescriptions, messaging, and anything else that might result in notifications.
* Check in Slack:
  * If it's OK if I submit applications on staging.
  * What emails are sent (if any) re: sign up?
* For Wednesday: have Discovery Brief as complete as possible, and any flow work ready to discuss.

<h4>Touchpoints for notifications</h4>

* Vets.gov
  * Action Center
  * Claims & Appeals page
  * Prescriptions page
  * Messages to your healthcare team
  * Vets.gov profile for notification settings
  * Providing Feedback on vets.gov
* Email (maybe)
* Text message (maybe)
* VA initiative to allow people to opt-out of paper correspondence [discussed here](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/4773).

<h2>1/5/2018</h2>

Next:

* Chat with Rachael on Monday re: different forms/processes and flows
* Make a list of all the different touch points this may effect
* Check to see if we have any user stories/flows on GitHub somewhere re: applications
* Start filling out discovery brief
* Talk to Marvo about text/SMS notifications

<h4>Chat with Steve</h4>

* Personilized Experience — User Story — As a Veteran, how do I know this thing I am looking at is relevant/personal to me. Only showing them what they need to get their goals achieved.
  * Action center
  * Notifications
  * Outreach
  * Personalized content
* Near term — Profile/action center — A veteran profile... here is the general information we have about you all in one place where you can manage it. Action center is basically a dashboard where you can see everything in one view.
  * Eligibility rules engine — Takes what we know about you and tells you what you are eligible for.
* Already have done some work on pre-fill/save in place meaning a lot of the work is done. Still need to figure out who figures out the eligibility rules but thinks this shouldn't take long to design/build once that stuff is hammered out.
* Where notifications fit in:
  * Claim status is biggest use case — Know when your claim has moved from one status to the next, or if you need to do something.
  * Maybe — we realized you're eligible for something.
* Tie-in to action center — this would probably be where people set their settings. 
* Action center would act as a dashboard on vets.gov. Settings for notifications would live in the profile.
* Marcy, Steve, & co. talked to team at 18F who'd gotten $$ to build out a proof of concept for a government-wide notification system, but that was very in its stages.
* We have a Twilio account if we wanted to test SMS notifications.
* Talk to Marvo about text (SMS) notifications.

<h4>Notification discovery</h4>

Application types:

1. Healthcare (10-10EZ)
2. Education benefits (22-1990; 22-1990N; 22-1995; 22-5495)
3. Pension (21P-527EZ)
4. (in the works) VR&E form
5. Disability compensation — MVP should be up in 2 months
6. Pre-need — burial related; before you pass, you can fill out this form so your benefits are in order. Not launched yet, but almost done and is just waiting for approval.

- Application received
- Saved/In-progress form is about to expire
- (maybe) Reminder to come back and finish an application

Other forms:

1. Prescription refills
- Status

2. Messages to your healthcare team
- New message received

3. Claims & Appeals
- Status
- Whether it has been received

Questions

* Applications
  * Can I see screenshots for each application — healthcare, education, pension? 
      * What are the different states of each?
      * What happens after various forms are submitted?
      * Statuses
        * Do this with Rachael and prescriptions with Natalie. I should take 3 different types of forms and do process mapping for communication.
        * Rainbows manages all forms
  * Any application flows I missed?
  * In addition to the Voc. Rehab form that is being added, are there any new forms in the works?
  * In [this github note](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Scenarios%20that%20may%20require%20notifications.md) it mentions that forms expire. Why/when do forms expire?
  
  * That has to do with the Save in Progress feature. If you start a form and don't finish it, but we don't store those forms in the VA database. Those are stored on the frontend. We only store them for 60 days.
  
  * Do we have documentation somewhere re: user stories with regards to applications on vets.gov?
* Claims & Appeals
  * Are claims and appeals related to the above applications, or are they separate?
    * If separate, where/how are they being filed? What are they?
    
      * Only for disability claims. Disability claim stuff isn't actually launched yet but they are hoping to launch in next couple of months.
      * Apply > get rating > appeal.
      * It takes four years to process an appeal, so VA tries to get people to not appeal.
      * Where is status info coming from? — VA databases. For claims and appeals, they accept the application and then it's transitioned into digital information.
    
  * What kind of statuses are there re: claims?
* Prescriptions
  * How do people refill prescriptions?
  
    * You can refill prescriptions on vets.gov
  
  * What is a prescription delivery? Where does it go (home? somewhere to be picked up?)?
  
    * Rachael thinks this means it's actually been delivered somewhere, but double check.
  
* Private Messaging
  * How does the "message your healthcare team" feature work? Do we send messages directly to people's email inboxes?
  
  * Don't receive it via email. Only on Vets.gov.
  
* Sign up
  * What kind of account activation info are people emailed now?
  
    * Rachael's unsure. Ask in Slack inn identity channel.
    
  * Is it safe to assume ID.me and DS Logon handle correspondence for their own account creation, password resets, etc?
* To confirm: we are not responsible for any applications handled outside of Vets.gov, correct? (eBenefits, Scheduling a VA appointment)

  * Nope.
