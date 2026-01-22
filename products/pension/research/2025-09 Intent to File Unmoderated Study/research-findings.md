# **Research Plan for Pension Benefits, Intent to File Content Study, September 2025**

Office of the CTO \- Digital Experience (OCTO-DE), Pension and Burial Benefits Team

Date: 09/2025

Elisabeth Chin [elisabeth.chin@coforma.io](mailto:elisabeth.chin@coforma.io) 

## **Background**

Since launching intent to file (ITF) functionality to the online pension application, we’ve introduced a front-end experience to help Veterans maximize their potential benefits.

This study aims to evaluate how our application of content design might reduce confusion and instill confidence in their application journey. We hypothesize that these content-related learnings will be broadly applicable to the intent to file experience across VA.gov.

## **Research Goals**

The goals of this research study are to:

1. Validate how intent to file messaging might be effective for Veterans in understanding intent to file and its impact on their application  
2. Evaluate the usability of the proposed pattern

## **Methodology**

We conducted recorded, unmoderated usability testing using Optimal Workshop's platform from September 22 to 25\. 

We recruited half of our participant pool to have filed a claim on VA.gov before, and half of our pool to not have filed a claim on [VA.gov](http://VA.gov) in order to get diverse exposure to intent to file as a concept. 

Participants were presented with a survey that guides them through a Figma prototype with limited interactivity, walking through one of three flows. 4 went through flow A, 9 went through flow B, 7 went through flow C. 

**Flow A**

1. Successful start: An authenticated Veteran starts a new pension application; a new intent to file is created.  
2. Successful return: An authenticated Veteran returns to an in-progress pension application; an existing intent to file is found. 

**Flow B**

1. Successful start: An authenticated Veteran starts a new pension application; a new intent to file is created.  
2. Failed return: An authenticated Veteran returns to an in-progress pension application; VA can’t check for an existing intent to file. 

**Flow C**

1. Failed start: An authenticated Veteran starts a new pension application; VA can’t check for an existing intent to file.  
2. Successful return: An authenticated Veteran returns to an in-progress pension application; an existing intent to file is found. 

### **Constraints**

* As an unmoderated study, participants occasionally provided vague or one-word answers. And, only one participant thought aloud during their screen recording. The lack of verbal explanation made it difficult to interpret data without much nuance, and did not provide clarity around what content participants paid attention to.   
* This study did not evaluate all possible use cases for intent to file, including if a user’s prior intent to file had expired.

## **Hypotheses and conclusions**

* Veterans will understand that by starting their application, they may receive benefits back to that date through their intent to file. 

  * MAYBE FALSE:  While many participants understood intent to file as a “plan to file”, they omitted what VA does with that information or how it impacts their potential benefits. 

* Veterans will take note of the date their application needs to be completed by (i.e. date the intent to file expires). 

  * LIKELY FALSE: When asked to recall the timeframe, the wide range of incorrect answers indicates that few participants noticed or recalled the date they needed to submit the application by to maximize their benefits. 

* When an intent to file cannot be found, Veterans’ next step will be to continue their application, rather than contact VA.

  * MAYBE TRUE: Participants who did not notice the warning alert would likely continue their application. However, some participants who did read the alert said they would call VA, suggesting that behavior is dependent on alert visibility. 

## **Key findings**

1. Participants understand intent to file as an action, but most did not mention the financial benefit.  
2. Most participants failed to recall the one-year completion timeframe.  
3. Most participants have a partial understanding of the consequences if they failed to complete their application within their intent to file timeframe.  
4. Several participants noted that they did not see the success and/or warning alerts at all.   
5. Most participants engaged with links on the introduction page.  
6. Although overlooking critical details, participants perceived the application flow positively.

## **Details of findings**

### **Finding 1:** **Participants understand intent to file as an action, but most did not mention the financial benefit.**

Most participants (15 out of 20\) indicated that they were familiar with the term, “intent to file”. 

However, at the end, we asked participants based on their experience with the study what the purpose of intent to file was, and out of 20:

* 7 mentioned that it notifies or alerts VA that they plan to file   
* 4 mentioned that it sets a start date for benefits  
* 2 mentioned a draft or incomplete application  
* 7 varied: “plan to file”, “to file a disability claim”, “to get pension benefits”, “for help from the government”, “to give the government your information, letting them know you’re eligible”, “maybe to alert the system to gather electronic records and await new information”, “not sure”

Despite many mentioning that an intent to file communicates a plan to VA, only a few mentioned the financial benefit of benefits potentially starting earlier. No participants mentioned retroactive or back payments.

Even though participants may not have read the content about intent to file, their responses validate that participants understand “intent to file” as an action, rather than a thing – such as a VA form to complete.

### **Finding 2: Most participants failed to recall the one-year completion timeframe.**

In every flow, we displayed one success alert when starting and/or returning to their application that informed users of two dates: 1\) their intent to file date (the date they start their application) and 2\) the date their intent to file expires (1 year later). Additionally, we display the date their intent to file expires again after a user clicks, “Finish this application later”. 

However, when we asked participants to recall how long they have to finish their application, most said they were unsure or provided an incorrect answer. Out of 20: 

* 6 participants said the correct answer of 1 year   
  * 3 out of the 6 participants correctly provided an exact date (eg. September 22, 2026\)  
* 3 participants said they were unsure or didn’t know  
* 3 participants said 30 days  
* 3 participants said 30 minutes  
* 1 participant said 30-60 days  
* 1 participant said 10 minutes  
* 1 participant said until midnight  
* 1 participant said no time limit

While we do mention the respondent burden of 30 minutes on the introduction page, the varied responses indicate that participants may not have read the success alert. Additionally, participants may have provided the correct answer either because of prior claims filing experience – already familiar that intent to file lasts for 1 year, or that applications on VA.gov expire within 1 year. 

### **Finding 3: Most participants have a partial understanding of the consequences if they do not complete their application within their intent to file timeframe.**

After asking participants about how long they have to complete their application, we asked them what they understood would happen if they didn’t complete it by that date. Out of 20: 

* 10 mentioned starting over or refiling  
* 4 mentioned expiry, discarding, or cancellation  
* 2 participants mentioned that their effective date would change if not completed  
* 2 participants mentioned they’d be denied or will not be able to file their claim  
* 1 participant said they were unsure  
* 1 participant said no time limit

“Starting over” is partially true – if users do not submit their application by their intent to file expiry date, they would need to return to their application to trigger the API call or submit a separate intent to file form, in order to “start over” their benefits timeline. Users would not need to start over their application if an intent to file expires, unless it is on the same date as their application expiry date. 

Compounded by the mixed responses about when the application needed to be completed, the partial answers suggest that participants did not read the green success alert to form a complete mental model of intent to file. 

### **Finding 4: Several participants noted that they did not see the success and/or warning alerts at all.**

Participants were not just challenged by recalling intent to file deadlines, but some participants reported that they did not notice or see alerts at all.

In flows A and C, we displayed another green success alert upon returning to their application, informing users that we found their intent to file was found. When we asked participants how often they would expect to see this green alert, out of 11: 

* 5 said they expected to see it every time they return  
* 2 said they did not see the alert  
* 2 said they were unsure  
* 2 said: “when a task is completed. Completion feedback”, “when you have saved your work for later”

Behaviorally, 6 out of the 11 participants immediately scrolled past the success alert to fill out their application.

In flows B and C, we displayed a yellow warning alert informing users that we couldn’t find their intent to file (ie. API failure). When we asked participants what the main problem the alert was telling them about, out of 16:

* 3 reiterated the alert title, that a record of an intent to file couldn’t be found  
* 2 said that an intent to file was not recorded or in the system  
* 4 said they did not see an alert  
* 2 suggested that their application was incomplete  
* 5 varied: “it could not find my application”, “I wasn’t on file”, “i was unknown in this part of the system”, “I didn’t return to the application”, “complete application later”

Behaviorally, 8 out of the 16 participants immediately scrolled past the yellow warning alert to fill out their application. Only 1 participant paused to interact with the additional info component in the yellow warning alert, “What’s an intent to file?” 

Of the 5 participants that mentioned intent to file in the warning alert’s message, 3 said they were likely to call VA. 2 said they would restart their application. 

### **Finding 5: Most participants engaged with links on the introduction page.** 

11 participants attempted to click at least 1 link provided on the introduction page. Hyperlinks were disabled to focus our comprehension evaluation within the application experience.

* 9 clicked “Find out if you’re eligible for pension benefits”  
* 5 clicked “Learn more about intent to file”  
* 4 clicked “Learn about the different types of pension”  
* 3 clicked on the additional info components: “Other information we may ask for”; “What happens after you apply”

The high engagement with the introduction page suggests that users are actively seeking information prior to starting their application process. This validates the page's crucial role as a primary touchpoint for setting expectations, and that learning about intent to file may extend outside of the application experience.

### **Finding 6:** **Although overlooking critical details, participants perceived the application flow positively.**

When we asked participants what they liked about the experience overall, 10 participants used words such as "easy" or "straightforward". 4 said they had nothing to note or that the experience was similar to their previous experiences on VA.gov.

When we asked what they would change, 9 participants said "nothing." The remaining responses were often unrelated to the study, such as having information saved indefinitely, getting eligibility feedback using the participants’ own information, and that they would’ve read more closely if they were to do the experience again. 2 participants said at the end of the study that they wanted more explanation around the alert – to explain more what the Veteran should accomplish, and to explain what might cause the intent to file date to not be recorded.

In flow A and C, we asked about anything surprising or unexpected in the prototype upon returning, and out of 11:

* 8 said no  
* 1 said the prototype prefilling information was jarring  
* 1 said not enough info to answer   
* 1 said they did not know what to do

In flows B and C, we asked whether anything was unclear or confusing about their experience in the failure scenario. Out of 16:

* 12 said nothing  
* 2 cited technical issues navigating the prototype  
* 1 said they were unclear about why the intent to file was not found  
* 1 said they were unclear about when to finish the application

While the alerts were dismissed, they were also not disruptive. The usability of the core flow was a success; the core problem was unrelated to their application experience, but rather the tendency to overlook key dates and errors that impact their benefits. 

## **Recommendations**

The core application flow succeeds in its primary goal of providing Veterans an easy and straightforward application experience. The in-form alert currently functions as a safety net, offering a secondary opportunity for engaged users to learn about their benefits timeline without disrupting the main user goal of completing the pension form. 

Alert blindness is widespread across studies at [VA.gov](http://VA.gov); a prior intent to file study (October 2024\) also attempted to solve alert visibility by leading with intent to file’s benefits on the introduction page to nudge users to start their application sooner, as well as displaying intent to file status alerts on their own page. Despite different placement and messaging approaches, users still did not engage with intent to file content until prompted.

Exploring other channels for communicating critical information Veterans’ benefits, rather than focusing on content changes within the existing alert components that continue to go unnoticed. The key challenge was less about the comprehension of the content, but rather the visibility of the component itself. As such, we recommend to:

1. Explore other touchpoints, such as email, notifications, and/or the Claims Status Tool to introduce intent to file incrementally and at moments when Veterans are more likely to notice and make more informed decisions.

2. Monitor completion times for forms that automate intent to file. In order to identify and mitigate the risk of Veterans missing out on benefits due to completing their application beyond 12 months, we should be aware of existing behavior and how widespread it might be.

3. Simplifying the intent to file process may also prevent further confusion, such as aligning the timelines of intent to file with the timelines of application expiry, so that Veterans do not have to track two dates, comprehend how our systems behave, and risk losing out on retroactive payments. 

## **Appendix**

* [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025-09%20Intent%20to%20File%20Unmoderated%20Study/research-findings.md)  
* [Prototypes used in testing](https://www.figma.com/design/0hU7Y56EO2skWUjS8HxFjf/Prototypes---Intent-to-FIle?node-id=53-27168&p=f&t=t75TDvNSY52whZ7J-0)  
* [Mural synthesis board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1758559181731/d81360908f76608767d5c14fa751253883121edb)  
* Link to Optimal Workshop studies (see Github repo for login credentials)  
  * [Flow A](https://app.optimalworkshop.com/a/dj540s05/prototype/results/0237dfde-79d7-42fe-85db-ffd32c5d093a#/t/results/participants/list)  
  * [Flow B](https://app.optimalworkshop.com/a/dj540s05/prototype/results/d9802237-a9fd-476e-8281-60ea03e62174#/t/results/analysisTools/recordings)  
  * [Flow C](https://app.optimalworkshop.com/a/dj540s05/prototype/results/f7e9aa34-423d-4726-8c53-3f4c838e94fc#/t/results/analysisTools/recordings)

### **Secondary research**

* October 2024: [527 Intent to File Comprehension](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/research-findings.md)   
* May 2024: [527 Intent to File Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md)  
* December 2023: [526 Intent to File Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md)
