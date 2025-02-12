# Medallia feedback surveys: Trigger events and questions
Updated by @beckyphung on: November 19, 2024

## Background
We will include two Medallia surveys in the Ask VA flow, an intercept survey and a feedback button. 

- **11/19 update**: We've decided to not move forward with the intercept survey on ask.va.gov.
- The intercept survey on va.gov/contact-us/ask-va will interrupt 5% of users based on a triggering event (a step in the flow). 
- The feedback button on both the current and new front-end will show a feedback survey (2 questions) when a user clicks on the feedback button, which will be available on all pages.

Both surveys are shown in modals. We will add these surveys to ask.va.gov (to establish a baseline) and Ask VA on VA.gov at va.gov/contact-us/ask-va.

Jump to: 
- [Intercept survey](#intercept-survey)
- [Feedback survey](#feedback-survey)

## Intercept survey

### Future form: va.gov/contact-us/ask-va
- Intercept survey triggered for 5% of users.
- The survey triggers only once per session.
- The survey triggers when the user lands on the **Your contact information** page.
   - Joe mentioned can call the script from anywhere in the form.
   - Todd would need some time to determine.

See **Your contact information** page:

<img src="https://github.com/user-attachments/assets/b3599d4e-f3c9-4f4c-aff8-30c51758f794" alt="Screenshot of Your contact information page" width="70%" height="auto">

### Intercept survey questions

|Question|Answer choices|
|:---|:---|
|How was your experience contacting VA today?|Very bad<br>Somewhat bad<br>Neither good nor bad<br>Somewhat good<br>Very good|
|Why did you select that rating?|Please don't enter personal information into the text box. This includes your name, address, Social Security Number, medical information or anything else that someone could use to identify you.|
|Please rate how understandable this site's information is.|Difficult to understand<br>Somewhat difficult to understand<br>Some is easy, some is difficult<br>Somewhat easy to understand<br>Easy to understand|
|How did this interaction change your trust in Veterans Affairs?|Decreased my trust<br>Somewhat decreased my trust<br>Neither increased nor decreased my trust<br>Somewhat increased my trust<br>Increased my trust|
|How much do you trust Veterans Affairs to fulfill our country’s commitment to Veterans?|High level of distrust<br>Modest level of distrust<br>Neither trust or distrust<br>Modest level of trust<br>High level of trust

## Feedback survey
100% of users will see the pop-up modal, if they click the feedback button.

### Feedback survey questions
|Question|Answer choices|
|:---|:---|
|How was your experience contacting VA today?|Very bad<br>Somewhat bad<br>Neither good nor bad<br>Somewhat good<br>Very good|
|Please tell us what would make it easier to contact VA.|	Please don't enter personal information into the text box. This includes your name, address, Social Security Number, medical information or anything else that someone could use to identify you.|
