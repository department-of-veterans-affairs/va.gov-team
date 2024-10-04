# Medallia feedback surveys: Trigger events and questions
Updated by @beckyphung on: September 25, 2024

## Background
We will include two Medallia surveys in the Ask VA flow, an intercept survey and a feedback button. 
- The intercept survey will interrupt 5% of users based on a triggering event (a step in the flow). 
- The feedback button will show a feedback survey (2 questions) when a user clicks on the feedback button, which will be available on all pages.

Both surveys are shown in modals. We will add these surveys to ask.va.gov (to establish a baseline) and Ask VA on VA.gov at va.gov/contact-us/ask-va.

## Intercept survey
🚧 9/10 note: we're still working with the VSignals team to determine the trigger for the intercept survey. See details for our intercept survey below.

### Current form: ask.va.gov
From https://ask.va.gov/ask-a-question/ the `Tell us about your question` page, a user responds to the required questions then clicks `Next`. We'll trigger an intercept survey for 5% of users who select one of the following responses to `My Inquiry is:` 
-	if `General Question` > directed to page `Tell us about yourself` (survey pop-up here)
-	if `About me, the Veteran` > directed to page `Tell us about the Veteran` (survey pop-up here)
-	if `About the dependent (and) I'm the dependent` > directed to page `Tell us about yourself` (survey pop-up here)
-	if `On behalf of a Veteran` > directed to page `Tell us about yourself` (survey pop-up here)

The survey triggers only once per session. This is the point at which the submitter is filling out their own information.

See example:
<br>
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/16775362-4c2c-4d0e-82ab-a42234392ba3" width="600">
<br>

The user sees this pop-up modal for the intercept survey.
<br>
<img src="https://github.com/user-attachments/assets/72368e5f-939c-4a23-a3de-ac006e8dd8af" width="600">
<br>

To determine the trigger event(s) for the intercept survey we considered:
- Comparison: We also want to add the intercept survey to ask.va.gov to establish a baseline metric. We chose a trigger event (or location) which is consistent enough whether it’s on Ask VA on VA.gov or ask.va.gov.
- Consistency: Given the conditionals in the form, we chose a step that is relatively similar across the different flows.
- Sad path: If we trigger the intercept survey at the end of the form, we'll only get feedback from people who make it all the way to the end. This is why we wanted the survey to trigger in the middle of the form.

Alternative: If this targeting rule isn't feasible, we could also trigger it when a user clicks `Next` on the second page in the form, regardless of what that page is. So, sometimes it'd be `Tell us about yourself` and other times it'd be `Tell us about the Veteran` (and you're not the Veteran).

### Future form: va.gov/contact-us/ask-va
🚧 9/25 note: we need to revise this section, since we've updated our form design.

For Ask VA on VA.gov, when a user clicks ‘Continue’ on the `Tell us who has a question` page or `Your relationship to VA` page (Category: Education), they will see a modal.

See example:
<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/ea484acb-e48a-4343-af4a-7f27071c2360)


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
|Please tell us what would make it easier to contact VA.|	Please don't enter personal information into the text box. This includes your name, address, Social Security Number, medical information or anything else that someone could use to identify you.|
