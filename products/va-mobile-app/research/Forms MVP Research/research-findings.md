---
title: "Forms MVP Usability Study Research Findings"
product: "VA Health & Benefits Mobile App"
team: "Mobile App & Platform Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-08-28"
researchers:
  - "Christine Julian (Researcher)"
  - "Jonathan Post (UX Designer)"
research_goals:
  - "Understand if Veterans can find and interact with forms from the app."
  - "Identify if Veterans can fill out a form from the app on their own."
  - "Identify any usability issues Veterans may experience when interacting with forms on the mobile app."
  - "Identify if Veterans can start a form and come back to it at a later time to complete."
methodology:
  - "Moderated Usability Testing"
  - "System Usability Scale Survey"
devices_used:
    desktop: X
    tablet: X
    smartphone: 11
    assistive_technology: X
participants_total: 11
demographics:
  veterans: 11
  service_members: X
  caregivers: X
  dependents: X
  VA_staff: X
  age:
    "25-34": X
    "35-44": 1
    "45-54": 3
    "55-64": 4
    "65+": 3
  education:
    high_school: X
    some_college: X
    associates: 1
    bachelors: 3
    masters: 7
    doctorate: X
    unknown: X
  location:
    urban: 4
    rural: 7
    unknown: X
  race:
    white: 4
    black: 2
    hispanic: 2
    biracial: 2
    asian: 1
    native: X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
  - 1. Forms from the app were generally well received.
  - 2. Veterans may navigate to this activity from various paths.
    3. Veterans were confused about the wording of the options on the 'What would you like to do?' screen that directs them to various forms.
    4. Veterans struggle to return to the app from webview.
    5. Mobile users are prone to typing errors in their form entry. Typing on a smaller device is frustrating for many Veterans as they experience smaller touch targets & compact keyboards.
    6. Users may miss screen content or attempt to scroll around instead of dismiss toast messages in the app.
    7. Users desire more information about the status of a form after submission as proposed statuses may be interpreted in different ways.
recommendations:
- 1. Move forward with an MVP of forms in the mobile app.
- 2. Consider multiple pathways to forms. Direct users to the 21-4138 form also under the context of claims.
- 3. Update the wording of the options on the screen 'What would you like to do?’. 
- 4. Update the text of the ‘Done’ button. 
- 5. Consider smaller ‘light-weight’ forms that require shorter responses with less manual entry for the mobile app.
- 6. Consider alternative methods of delivering messages to an app user rather than a toast, or encourage users to dismiss the message more clearly.
- 7. Provide the steps of processing the form to decision reflecting the current progress in relation to the whole with meaningful details and dates.

kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Test with assistive tech users"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Github CoPilot Ai: Gemini 2.0"
  - "Affinity Mapping in Figjam"
---

---

# Forms MVP Usability Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), VA Health and Benefits App, Mobile App and Platform Team**

**Date:** 08/28/2025

**Contacts:** Christine Julian (Researcher), Jonathan Post (Designer), Ken Li (Developer)

**[Link to Research Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Forms%20MVP%20Research/VAHB%20App%20Forms%20MVP%20Research%20Shareout.pdf))**  

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Key Performance Indicators](#key-performance-indicators)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
The key objective of this study is to evaluate the usability of completing a VA form in a webview from the VA Health and Benefits app. Additionally, the research aims to uncover the following:

1. Understand if Veterans can find and interact with forms from the app.
2. Identify if Veterans can fill out a form from the app on their own.
3. Identify any usability issues Veterans may experience when interacting with forms on the mobile app.
4. Identify if Veterans can start a form and come back to it at a later time to complete.

This research can impact Veterans across many phases of the Veteran journey from Getting out to Death
[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

**Guiding Questions:**  
- What are the key moments this tool supports in the Veteran’s journey?  
- The results of the study will help us determine if Veterans are able to fill out and complete forms from the mobile app and to identify any pain points. This will inform future form development on the app. 



## Research Questions

Research goal #1: Understand if Veterans can find and interact with forms from the app.

1. How easily can Veterans locate the forms section within the mobile app?
2. What steps do Veterans take to start a new form from within the app?
3. Are there any points of confusion or difficulty when Veterans attempt to start a new form?

Research goal #2: Identify if Veterans can fill out a form from the app on their own.

1. Can Veterans independently complete all required fields in a form using the mobile app?
2. Do Veterans understand the instructions and language used in the forms?
3. How do Veterans interpret the status of the form once the form is submitted?

Research goal #3: Identify any usability issues Veterans may experience when interacting with forms on the mobile app.

1. What challenges, if any, do Veterans encounter while entering information into the forms?
2. What, if any, technical or design barriers prevent Veterans from successfully interacting with forms?
3. How do Veterans feel about the overall experience of using forms in the mobile app?
4. Research goal #4: Identify if Veterans can start a form and come back to it at a later time to complete.

Can Veterans locate and resume a form they previously started in the mobile app?
1. Do Veterans encounter any challenges or confusion when attempting to access and complete a saved or in-progress form?
2. What steps do Veterans take to find and finish a form they started earlier?
3. Are there any barriers that prevent Veterans from successfully submitting a previously started form through the app?


## Methodology 

- Method 1: Moderated usability study (remote)
- Method 2: SuS Survey (system usability scale)


## Hypotheses and Conclusions

- **Hypothesis Statement:**

Research goal #1: Understand if Veterans can find and interact with forms from the app.

1. Veterans will be able to easily locate the forms section within the mobile app without extensive guidance.
- **Likely False**. 6 participants needed guidance to locate the "Go to my forms" button, as they initially thought to look under "Claims" or "Benefits." 
2. Veterans will be able to follow the intended navigation steps to start a new form from within the app.
- **Likely True**. Veterans could generally follow the steps, but the research also revealed issues with participants skipping introductory text on screen "Submit a statement in support of a claim" and being unclear about which option to choose on the screen 'What would you like to do".
3. Some Veterans may experience confusion or difficulty due to unclear labeling or navigation options related to forms.
- **Definitely True**. User confusion on the form selection screen 'What would you like to do', returning to the app from webview via the "Done" button placement, combined with lower SuS scores on "well integrated" directly contribute to a less usable system.

Research goal #2: Identify if Veterans can fill out a form from the app on their own.

1. Most Veterans will be able to independently complete all required fields in a form using the mobile app.
- **Likely True**. The research showed that Veterans could complete the fields. Although they encountered some challenges with typing difficulties from their mobile devices. In part, related to small touch targets and auto-corrections from their device.
2. The instructions and language used in the forms will be clear and understandable to Veterans.
- **Definitely False**. The research revealed that the instructions and language used in the forms were often not clear and understandable, particularly on the form selection screen 'What would you like to do?' and regarding the meaning of the "In Progress" status following submission of the form.
3. Some Veterans may experience confusion interpretting the status of the form after submission.
- **Definitely True**. The "In Progress" status was consistently misinterpreted, with Veterans unsure if it meant the form had been submitted, was still being drafted, or was being reviewed.

Research goal #3: Identify any usability issues Veterans may experience when interacting with forms on the mobile app.

1. Veterans may encounter difficulty entering information into forms from their mobile device.
- **Definitely True**. The research confirmed that typing on a mobile device was a significant challenge, leading to errors and frustration.
2. Technical or design barriers, such as small touch targets or required page scrolling, may add additional frustration for Veterans when completing forms from a mobile device.
- **Definitely True**. The research identified the "Done" button placement required to return to the mobile app from webview was widely missed, while users often did not dismiss toast messages blocking needed content, and the small touch targets on their mobile keyboards resulted in typos that caused additional frustration.
3. Veterans will have mixed feelings about the overall experience, with some expressing frustration regarding usability issues and others finding the process straightforward.
- **Definitely True**. The research revealed a range of feelings, with some Veterans finding the process relatively easy while others expressed significant frustration with the identified usability issues. The overall SUS scores, along with the specific responses to questions about ease of use, complexity, and consistency, provide strong quantitative evidence that usability issues are negatively impacting the user experience.

Research goal #4: Identify if Veterans can start a form and come back to it at a later time to complete.

1. Veterans will be able to locate and resume a form they previously started within the mobile app.
- **Definitely True**. Veterans were able to locate and resume previously started forms without difficulty.
2. Barriers such as difficulty finding saved forms or unclear resumption instructions will prevent some Veterans from successfully submitting a previously started form.
- **Likely False**. Users did not experience problems directly related to the ability to find started forms, resume and successfully submit.  



## Key Findings

**1.** Forms from the app were generally well received.  

**2.** Veterans may navigate to this activity from various paths.

**3.** Veterans were confused about the wording of the options on the 'What would you like to do?' screen that directs them to various forms.

**4.** Veterans struggle to return to the app from webview.  

**5.** Mobile users are prone to typing errors in their form entry. 

**6.** Users may miss screen content or attempt to scroll around instead of dismiss toast messages in the app.

**7.** Users desire more information about the status of a form after submission as proposed statuses may be interpreted in different ways.



## Details of Findings 

**1.** Forms from the app were generally well received.  
- All 9 respondents to our SuS survey expressed a positive desire to use this system frequently.
- With an overall SuS score of 82.77 which translates to excellent. Resolving found usability issues during this study are likely to result in a well received MVP.
- Survey respondents answered question 1 'I think I would like to use this system frequently.' as 3 moderatley agree, and 6 strongly agree.

> *"You know, I actually like it, to tell the truth. I like that the forms are available right there because as I said now, you have to literally go and search for forms." (p4)*

**2.** Veterans may navigate to this activity from various paths.
- 5 participants would navigate to 'Claims' and 1 participant navigating to ‘Benefits Tab > Claims'.
- 4 participants looked first for an area called ‘Forms’.

**3.** Veterans were confused about the wording of the options on the 'What would you like to do?' screen that directs them to various forms.
- 6 participant selected ‘I have new evidence to submit for an open claim.’
- 3 participant selected ‘I want to provide context or details about a claim.’
- 5 participant selected ‘What I want to do isn’t listed here.’
- 1 participant selected ‘I want to request faster claim processing because of my situation’.
  
*Note that some participants called out multiple options 

**4.** Veterans struggle to return to the app from webview.
- Only 1 participant self-identified the 'Done' button to return to the app during or after submitting the form.
- The majority of participants needed support to get back to the app either mid-form or after completing the form. 
- Forms today are designed for the web experience, links that direct the user to save their progress or navigate back to their starting point are oriented around VA.gov.

> *"The only thing, the ‘Done’ button. I wouldn’t have expected it to be up there in the left hand corner.” - “That’s a good place to have it, but I wouldn’t have suspected it to be there. Because when you were saying hit done, I looked below.” (p11) [regarding returning to the app when leaving a form from webview]                                                                                                                            

**5.** Mobile users are prone to typing errors in their form entry. Typing on a smaller device is frustrating for many Veterans as they experience smaller touch targets & compact keyboards.
- Users may not catch errors to correct (mobile devices may auto-correct an uncommon word without the users knowledge).
- Users often utilized native functionality like predictive text or quick path typing which offer supportive field entry methods.
- Prefilled form data will greatly reduce the amount of manual typing Veterans are required to do, improving the form entry process on a mobile device.

**6.** Users may miss screen content or attempt to scroll around instead of dismiss toast messages in the app.
- Only 1 participant dismissed a toast message within the app during the study.
- Depending on the font size and phone screen size important content could be completely hidden by a toast message such as the ‘Continue form’ section.

**7.** Users desire more information about the status of a form after submission as proposed statuses may be interpreted in different ways.
- Some Veterans may interpret the status ‘In Progress’ as meaning they have not completed the form.
- Veterans expect to see their progress over time within the steps of claims processing.
- Users often checked both tabs ‘Active’ and ‘Complete’ to find their form as complete to them may translate to the fact that they have completed the form.  

>*"If I come back here week after week, and see its in progress then I’m probably going to be likely to find is there a phone number that I can call?…I would like to see some sort of gauge…it could even be a bar like moving to complete.”


---

## **Additional Insights**
**1.** Veterans desire the ability to get support while using the app. Participants mentioned the desire to request support through the form scenario during the following points. 
- Ensuring they are completing the right form for their scenario (selecting the right option on screen ‘What would you like to do?’.
- Returning to the app from a web view.
- Printing or saving their confirmation number after completion of the form.
- Getting more information about the status or progress of their form.

>*"Have a little button or something that says if you’re having problems with this here is how you can get more information, click here.”(p10)

**2.** Veterans need confirmation of their form completion after leaving the form.
- Multiple participants expressed an expectation that they’d receive an email with their confirmation. 
- Users may not be equipped or set up to print their confirmation from their mobile device, and desire the ability to do so at a later time. 
- Users may have multiple claims and multiple forms active at one time, they need additional identifiers to distinguish them.  
- After submission users may expect to find the submitted form associated with their claim under claims. 

**3.** The experience of being sent to a web view outside of the app made Veterans feel like the system was less integrated. 
- The SuS question where responses were more split. With a range of answers in every option from strongly disagree to strongly agree.
- Users desired the form to be more relational to the claims area of the app.
- Links that direct users out of the form direct users to areas of va.gov vs. the app.
- Users struggled to return to the app during and after the form process.

**4.** Mental models: Veterans know they need to complete a specific task such as ‘provide a statement in support of a claim’ but they may not see it as a form that the VA requires separately.

>*"Is this considered a form? - It’s better if its all in one place that has to do with providing more context or details. Typically if you select to submit a statement its because you are giving information to the examiner to support your claim or if they call me about it. - Doing this is like being proactive.” (p8)

## Recommendations

1. **Move forward with an MVP of forms in the mobile app.**
2. **Consider multiple pathways to forms. Direct users to the 21-4138 form also under the context of claims.**
3. **Update the wording of the options on the screen 'What would you like to do?’.**
4. **Update the text of the ‘Done’ button.**
5. **Consider smaller ‘light-weight’ forms that require shorter responses with less manual entry for the mobile app.**
6. **Consider alternative methods of delivering messages to an app user rather than a toast, or encourage users to dismiss the message more clearly.**
7. **Provide the steps of processing the form to decision reflecting the current progress in relation to the whole with meaningful details and dates.**

### Recommendations based on additional findings 
1. Surface support hotlines throughout the process and ensure call center staff are equipped to assist Veterans who are navigating the app. In the future, consider in-app support options.
2. Send a notification to the user including the details displayed on the confirmation page. Surface confirmation numbers in the app after submission of a form.
3. Consider building forms directly into the app vs. launching a web view. 
4. Relate the action closer to the claim itself. 

## Product User and Business Outcomes

- **Desired User Outcome**
The overarching outcome of combining these native features into one app is that it will make it simpler and faster for users to interact with VA and complete day-to-day transactions.

  - This research supports our desired user outcome by bringing the digital forms experience into the app with the MVP being a commonly utilized form making it both simpler and faster to interact with the VA. 
 
- **Desired Business Outcome**
Empower business lines to provide targeted communication to Veterans. By building a mobile app, business units have the opportunity to close some of the existing communication gaps that exist at VA. For example, business units will be able to push notifications to users when pertinent information is available on either an individual or VA-wide level. This reduces the burden on Veterans themselves from having to navigate through VA to track down the status of their claims, or when their next healthcare appointment is.
  - This research supports our desired business outcome by providing users with supporting actions related to their claims together in the app and making available relevant information and updates about those actions.


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

- **KPI 1**
  -  This research supports measurement of this KPI by....


## Next Steps

1. Run study with assistive tech users to ensure accessibility.
2. Make suggested updates to improve the form and app relational navigation.
3. Share research findings with other impacted teams.
4. Determine if the introductory form screens for the 21-4138 should be included prior to the MVP launch of the form from the app, and make recommended revisions if so. 


## Further research needed

In the future we will also run a study with assistive tech users and recommend testing the form introductory screens related to 21-4138 after updates to content.


## Appendix
[Product Outline]([link here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/archive/2021/Product-Outline.md))

[Research plan]([link here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Forms%20MVP%20Research/Research-Plan.md))

[Conversation guide]([link here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Forms%20MVP%20Research/Conversation-guide.md))

[Interview transcripts](link here)


## Tools used for Synthesis

- Github Copilot (Gemini 2.0) for analysis
- Affinity mapping in Figjam
  
## Pages and applications used

[Prototype link for iOS]([link here](https://testflight.apple.com/join/RrO0Cw2q))
[Prototype link for Android] ([link here]https://appdistribution.firebase.dev/i/6bea6c3fabc1a872)
**Note to run the prototype:** Codespace must manually be launched each time an individual desires to access the prototype. The device used to access the prototype MUST be a mobile device.
 
**Instructions to access prototype from an iOS mobile device:**
1. Use the link provided to install test flight on your mobile device.
2. Once you've installed it (or if you already have it installed), select step 2 "view in test flight" from your mobile device.
3. Under App Informaton at the bottom of the screen, select "Previous builds"
4. Select the VA Health and Benefits mobile app version: 2.55.1
5. Select 'Install' button next to correct build number 2871 (may have to select Load more builds to find version).
6. It can take a few minutes to download.
7. Once downloaded select "next".
8. Select "start testing from the Share feedback screen.
9. In order to test the prototype our developer needs to launch codespace during your session. Please ping researcher developer Ken Li to run codespace during your prototype (slack K_li).

**Instructions to access prototype from an Android mobile device:**
1. Provide your email when launching the link above.
2. After which, you will receive an email invite to the email you supplied us to download the testing app. Please navigate to your email and select that link now.
3. Open the email and click on "Get started"
4. It may require you to sign in again to authorize the install.
5. Select "Download app tester".
6. While this is downloading, go to your device homescreen > Go to settings > About > click on play store version 7 times (may need to Select "app permissions")
7. Receive a note "You are now a developer"
8. Scroll up and press General, click on "Developer options"
9. Toggle the "interal app sharing"
10. Return to the window with the steps
11. Download the release (ensure newest one #7)
12. If you already have the app installed you'll have to select "Uninstall"
13. And then go ahead and "Install"

**Note for all users:** You'll be interacting with a demo prototype today. Since it's a demo, note that none of your actions will affect your own VA information or benefits.

## Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


## Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

## Who we talked to 

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **11 participants.**

Audience segment:
* Veterans: 11 
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 6 
* Female: 5


Devices used during study: 
* Desktop: 0 
* Tablet: 0 
* Smart phone: 11
* iOS devices: 7
* Android devices: 4
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 1
* 45-54: 3
* 55-64: 4
* 65+: 3
* Unknown: 0


Education:
* High school degree or equivalent: 0
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 3
* Master's degree: 7
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 4
* Rural: 11
* Unknown: x


Race:
* White: 4
* Black: 2
* Hispanic: 2
* Biracial: 2
* Asian: 1
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x



VA Health & Benefits Mobile App Users:
* Had previously used/use: 10
* Never used: 1

## Underserved groups we haven’t talked to 

See participant tracker reflected below.
This research does not include the perspectives of the following marginalized Veteran groups:

- Live abroad
- Cognitive disability
- Don’t have a degree
- Other than honorable
- Immigrant origin
- Expat
- Identify as LGBTQ+
- Assistive tech users

_[<img width="970" height="838" alt="Screenshot 2025-08-29 at 1 22 24 PM" src="https://github.com/user-attachments/assets/99c0c8e7-05ed-4a9c-adcc-85e3ea3c1440" />
]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
