# Medallia feedback surveys: Trigger events and questions

## Background
We will include two Medallia surveys in the Ask VA flow, an intercept survey and a feedback button. The intercept survey will interrupt 5% of users based on a triggering event (a step in the flow). 
The feedback button will show a feedback survey (2 questions) when a user clicks on the feedback button, which will be available on all pages. Both surveys are shown in modals.

We will add these surveys to ask.va.gov (to establish a baseline) and Ask VA on VA.gov at va.gov/contact-us/ask-va.

## Intercept survey
5% of users will see the pop-up modal.

To determine the trigger event(s) for the intercept survey we considered:
- Consistency: Given the number of conditionals in Chapter 4, we think the survey should appear before most conditionals
- Sad path: If the intercept survey falls at the end of the form, we will only get feedback from people who make it all the way to the end
- Comparison: We also want to add the intercept survey to ask.va.gov to establish a baseline metric. We chose a trigger event (or location) which is consistent enough whether it’s on Ask VA on VA.gov or ask.va.gov.

For Ask VA on VA.gov, when a user clicks ‘Continue’ on the `Tell us who has a question` page or `Your relationship to VA` page (Category: Education), they will see a modal.
See example:
<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/ea484acb-e48a-4343-af4a-7f27071c2360)


For ask.va.gov, when a user clicks ‘Next’ on the `Tell us about your question` page, they will see a modal.

See example:
<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/16775362-4c2c-4d0e-82ab-a42234392ba3)

### Intercept survey questions
|Question|Answer choices|
|:---|:---|
|How was your experience contacting VA today?|Very bad<br>Somewhat bad<br>Neither good nor bad<br>Somewhat good<br>Very good|
|Why did you select that rating?|Please don't enter personal information into the text box. This includes your name, address, Social Security Number, medical information or anything else that someone could use to identify you.|
|Please rate how understandable this site's information is.|Difficult to understand<br>Somewhat difficult to understand<br>Some is easy, some is difficult<br>Somewhat easy to understand<br>Easy to understand|
|How did this interaction change your trust in Veterans Affairs?|Decreased my trust<br>Somewhat decreased my trust<br>Neither increased nor decreased my trust<br>Somewhat increased my trust<br>Increased my trust|
|How much do you trust Veterans Affairs to fulfill our country’s commitment to Veterans?|High level of distrust<br>Modest level of distrust<br>Neither trust or distrust<br>Modest level of trust<br>High level of trust|

## Feedback survey
100% of users will see the pop-up modal, if they click the feedback button.

### Feedback survey questions
|Question|Answer choices|
|:---|:---|
|How was your experience contacting VA today?|Very bad<br>Somewhat bad<br>Neither good nor bad<br>Somewhat good<br>Very good|
|Please tell us what would make it easier to contact VA.|*Text area*|
