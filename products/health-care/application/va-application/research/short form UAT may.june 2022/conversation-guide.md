# [DRAFT] Conversation Guide: Health Care application 10-10EZ, UAT of shortened form based on disability rating, October 2022

- [ ] Make sure dev team has turned on feature for user
- [ ] Review whether or not the participant roster states the participant has a diability rating and what percentage it is, what group the participant will be testing. 
- [ ] Start a thread in #feedback-backchannel

### Starting the session
In the Attendees section, make sure everyone except the participant is on mute.
In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
Check your [screensharing setup] and share permissions for participants.
When the participant is ready, begin the session with the following intro*

## Intro - 5 minutes

Thanks for joining us today! My name is [NAME] and [NOTETAKER NAME] is taking notes. I also have a couple other colleagues who would like to observe and take notes. Perigean did ask for your consent to allow observers, but I want to be sure before we get going. Are you okay with a couple additional observers during this session?
- If participant does not consent, use Slack to kindly ask the observers to leave the Zoom.
- If participant consents, admit observers.
Ask notetaker and observers to give a brief, camera-on, introduction, like their first name and position with VA.gov. (This is meant to humanize the interaction of observation for the participant)
Once complete ask notetaker and observers to turn off their cameras for remainder of the session to save bandwidth

Today we're going to talk about adding a new feature that reduces the length of the health care applications for Veterans. The purpose of our session today is to make sure that the feature is working as expected in your account and that you're able to interact with it as intended.

Before we start, a few things I want to mention:
- This entire session should take about 45 minutes. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- In this session, we want to hear your honest opinions. We are not testing your ability. We just want to improve these tools to better meet Veteran's needs. I will not be offended by any opinions you express, and I welcome your feedback.
* **We will be able to see your real information today.** This may include some personal information such as address, phone number,and Social Security numbers as well as your date of birth and marital status, military service history, and income. During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable.
* **If for any reason and at any time you want to stop the session, please let me know.**

_(I don't plan to record these sessions)_



## Warm-up Questions (Optional) - 3 minutes

Prod link: [https://www.va.gov/health-care/apply/application/introduction](https://www.va.gov/health-care/apply/application/introduction)

As part of the scheduling for this session, we asked what your service-connected disability rating is. According to the info I got, you have a service-connected disability rating of %. Is that correct? _The % determines which flow they will go on_

Please log in to your account. 

## Health Care application flows 

### Group A (Disability 50% or greater on record)
**Task: Validate that there are no issues or bugs for authenticated users with 50% or greater disability rating on record - 15 minutes**
- Short form alert on Place of birth page
- Short form alert accordion opens and closes as expected
- On each screen green alert accordion open and closes as expected
- Review page has the proper accordions
- **Stop here and do not submit - note about removing saved application from profile?**


### Group B (Disability 40% or less or no diability on record)
**Task: Validate that there are no issues or bugs for authenticated users with less than 50% disability rating on record - 15 minutes**
- No indication of short form is shown before self-report
- If user selects no to compensation question, they are shown pension question
- If user selects yes to 40% or less compensation question, they are shown Military Service section
- If user selects yes to 50% or greater to compensation question, they are shown short form confirmation
- User can move back from short form confirmation
- If user selects no to compensation question, they are shown pension question
- If user selects yes to 40% or less compensation question, they are shown Military Service section
- If user selects yes to 50% or greater to compensation question, they are shown short form confirmation

**Task: Validate that there are no issues or bugs for authenticated users with no disability rating on record, but self-report a disability rating of 50% or higher - 5 minutes**
- User can confirm and move forward
- Short form alert on Medicaid page
- On each screen green alert accordion open and closes as expected
- Review page has the proper accordions
- **Stop here and do not submit - note about removing saved application from profile?**



## Post-Task Interview - 2 minutes
Thank you so much! That concludes our session for today. This has been so helpful for our team. Do you have any feedback on what we looked at in this session or questions for me?

## Thank-You and Closing - 1 minute
Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans.

Thanks! Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!



## Resources	
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/short%20form%20UAT%20may.june%202022/research-plan.md)
- [User flows](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/A71F1C96-FF98-42A2-9ADD-6D4B7A1DDB20)
- [Production link](https://va.gov/health-care/apply/application/introduction)
