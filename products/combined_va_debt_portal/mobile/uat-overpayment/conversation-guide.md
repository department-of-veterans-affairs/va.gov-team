---
title: "Conversation Guide for [Team, Product, Date]"
author: "[AUTHOR NAME]"
date_created: "[YYYY-MM-DD]"
last_modified: "[YYYY-MM-DD]"
tags:
  - "[Tag1]"
  - "[Tag2]"
description: "A template for moderating research sessions including logistics, intro script, task outlines, and consent steps."
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your conversation guide below.**
> 
> Use the [GitHub Copilot Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed conversation guide.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags based on your tasks and research objectives.

# Conversation Guide for [initiative]

## Moderator logistics 📋✅
### 2-3 days before the session

> [!NOTE]
> Review VA Platform's [Research Checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-checklist).

`List and complete any project-specific setup tasks for this study below:`

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

### Day of the session

> [!TIP]
> - Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers.
> - Mute your Slack notifications.
> - Send out the [observer instructions](https://depo-platform-documentation.scrollhelp.site/research-design/Observer-guidelines.1622311177.html) to your observers (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel)).

### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
> - Check your [screensharing setup] and share permissions for participants.
> - When the participant is ready, begin the session with the following intro*

## Intro - 5 minutes

Thank you so much for joining today. My name is Emily, and [NAME] here will be taking notes. I also have a couple other colleagues in the digital waiting room who would like to observe, but we’ll get to that momentarily.

Today, we’re testing a pre-release version of the VA app specifically to check the Debt Portal. You may have done usability tests before where we look at how easy an app or website is to navigate. Today’s session is a bit different: it’s called a User Acceptance Test. Instead of looking at the 'feel' of the design, we're checking to see if the actual technology handles your  data correctly. We’re basically making sure that when you tap a button, the VA systems in the background do exactly what they’re supposed to do.

Your participation in this is completely voluntary. Nothing you do here will affect your VA benefits in any way. During this session, we'll be asking you to share your screen which will show your personal debt records. If you would like to stop the session or do not want to show us something at any time, that's no problem. Please let me know.

I know you saw details from Perigean, but I want to review a few things to make absolutely sure you're okay with what will happen in this session
- You're on a mobile phone now? Is it an iPhone or an Android?
- You indicated that you have a current overpayment debt. Are you able to see the details of this debt when you log into your VA account on the website?
- You have your username and password ready to log into the app? [ID.me or Login.gov and can access your two-factor authentication - text code or app]
- _screensharing_
    - _[yes to screen sharing]_ Are you okay with sharing your screen as you click through various parts of your overpayment details?
    - _[no to screen sharing]_ As you click though various parts of the app, you'll be describing what you see.
- You have access to your email account here on this phone?
- I'll be helping you download a test version of the app. If you currently have the VA app on this phone, this test version will replace it. I'll help you restore the original version once you're done.
- Are you connected to WiFi? [If not, are they able to be?]

* I have [number] colleagues who are interested in observing this session to better understand the Veteran experience. Would you be okay with them observing?
    * If no: Use Slack to kindly ask the observers to leave the Zoom.
    * If yes: Admit observers.
    * Then, ask the notetaker and observers to give a brief, camera-on introduction, like their first name and position with VA.gov. 
    * Once complete, ask the notetaker and observers to turn off their cameras for the remainder of the session to save bandwidth

* If you would be okay with it, we would like to record this session today, but let me explain things first before you consent. 
    * Any reporting I do from this would not use your name or personal details.
    * I will pause the recording when you are entering your password so that your login details are not captured.
    * Knowing this, are you comfortable with me recording the session?
    * Once we record I'm going to ask again just so it's on the record.

Start recording.


* I have started recording. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?


## Set-up

First, I'd like you share your screen.

Now I'm going to send you a link to get started with the test version of the app.
- [iOS directions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_iOS.md)
- [Android directions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_android.md)

## Test paths

Now I'm going to ask you to go to various parts of the app where I'll be checking to see that elements appear correctly.
- [Spreadsheet: Test paths and success criteria - Overpayment UAT](https://docs.google.com/spreadsheets/d/1xfHJGzPQJaIeO-uPp8D4aboEO-qSDvBVp0b5QABg_5Q/edit?gid=0#gid=0)



## Consent to use video clips

- I want to circle back and re-confirm: Are you okay with us sharing anonymized video clips from today’s session with VA partners?
- Is there any part of our conversation you would NOT want included?


## Thank-You and Closing - X minutes

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the digital experience and make sure it really works for Veterans.

Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!


# Emergency Exit 🚨

[Emergency guidance](https://depo-platform-documentation.scrollhelp.site/research-design/research-safety-and-emergency-exit-strategies#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies)

If needing to exit the session

1. "If for any reason and at any time you want to stop the session, please let me know. You will not lose your stipend or be penalized in any way if we need to stop."
2. “I’ve just learned that the prototype we were planning on using today is having some technical issues, so we will have to end this session early.”
3. Thank them profusely for their feedback or for making the time to talk to you.

---

## After You Save This Convo Guide ✅

- [ ] Complete the YAML frontmatter at the top of this file using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)
- [ ] Review alignment with your research plan tags
- [ ] Update the last_modified date

### Sample Conversation Guide _(note: this link points to resources in the va.gov-team GitHub repo)_

- [Veteran ID Card Discovery Interview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-id-cards/research/discovery/discovery-conversation-guide.md)

