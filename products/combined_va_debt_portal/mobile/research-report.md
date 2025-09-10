---
title: "[Mobile App Debt Portal: Overpayments and Copayments Usability Study] Research Findings"
product: "Mobile App Debt Portal: Overpayments and Copayments"
team: "Mobile Feature Support"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-08-21"
researchers and designers:
  - "Emily DeWan - UX Researcher"
  - "Natasha Huckleberry - UX Designer"
  - "Thomas Michaud - UX Designer"
research_goals:
  - "Goal 1: Understand how users become aware of and locate information about money they owe in the app."
  - "Goal 2: Assess how well users understand and interpret their copay and overpayment information in the app."
  - "Goal 3: Identify what actions users want to take regarding money owed and evaluate how easily they can find guidance in the app."
  - "Goal 4: Evaluate the experience of completing actions outside the app."
  - "Goal 5: Prioritize features for the minimum viable product (MVP) that will handle overpayments and copayments in the app."
methodology:
  - "Moderated usability testing using high-fidelity Figma prototypes over Zoom"
devices_used:
    desktop: 0
    tablet: 0
    smartphone: X
    assistive_technology: 0
participants_total: 12
demographics:
  veterans: 12
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 1
    "35-44": 7
    "45-54": 0
    "55-64": 0
    "65+": 3
    unknown: 1
  education:
    high_school: 3
    some_college: 3
    associates: 0
    bachelors: 5
    masters: 1
    doctorate: 0
    unknown: 0
  location:
    urban: 9
    rural: 3
    unknown: 0
  race:
    white: 5
    black: 1
    hispanic: 2
    biracial: 1
    asian: 2
    native: 1
  disability:
    cognitive: 3
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Finding 1: Despite their frustrations with the payment process on mobile, participants preferred having this option over a version that only allowed viewing debt and bills."
  - "Finding 2: Navigation and labels need to be intuitive to prevent confusion."
  - "Finding 3: Participants have a need for clear, actionable options when searching for help with their debt or bills."
  - "Finding 4: Key payment information must be surfaced and easy to retain."
  - "Finding 5: Digital statements and documents are a core need for users."
  - "Finding 6: Separation of current and resolved debt is beneficial for clarity."
  - "Finding 7: Users want a clear, centralized way to manage their bills."
recommendations:
  - "Recommendation 1: Proceed with the MVP version, having the payment options of linking to pay.gov and pay.va.gov"
  - "Recommendation 2: Keep the name of “Payments” on the tab as-is for now"
  - "Recommendation 3: Provide a space for users to view resolved debt, and remove resolved debt from the current list of outstanding debts and bills"
  - "Recommendation 4: Improve the handoff experience to external payment sites. Make it very clear that the user needs to take action to save the payment information before they are redirected."
  - "Recommendation 5: Enable copy-and-paste functions for key payment information to make the external payment process more seamless."
  - "Recommendation 6: Clarify why a debt exists. Add easy and actionable ways for users to learn why they have a particular debt, moving away from the generic explanation."
  - "Recommendation 7: Add due dates for bills and debts on the Payments page to help users manage their finances at a glance."
  - "Recommendation 8: Prominently display a phone number, as Veterans often bypass help menus in search of a way to speak directly with someone."
  - "Recommendation 9: Surface non-payment options. The options of disputing a debt or requesting a payment plan were not being discovered in the Help menu and were somewhat hidden under the Resolve button."
  - "Recommendation 10: Provide access to debt letters. If not possible, provide a clear explanation for why they can not be read in the app"
  - "Recommendation 11: Make older PDF statements easier to find. The current structure requires much scrolling and is not clearly labeled."
  - "Recommendation 12: Look into making the PDFs as accessible as possible for all users."
  - "Recommendation 13: Clarify the structure of the copay statements. Until we are able to provide real-time transactions, make it clear that the copay details are in statement form and may not be up to date."
  - "Recommendation 14: Re-evaluate the alert accordion on the details page. Either make it clearly expandable with valuable content inside or replace it with a simple banner."
kpi_alignment:
  - "KPI 1: Total number of views of benefit overpayments and medical copayments. We expect this to be a non-zero amount and will increase once overpayments and copayments are viewable in the app. We will track the total number of views on a monthly basis."
  - "KPI 2: Overall app volume. We expect an increase in overall app volume as benefit overpayments and medical copayments debt information are implemented within the app. We will track the overall app volume on a monthly basis."
  - "KPI 3: Total number of clicks on the link to access VA.gov. We expect that Veterans will want to request help or dispute their debt or copay, and that this non-zero amount will increase. We will track the total number of clicks on the links to access VA.gov on a monthly basis."
  - "KPI 4: Total number of clicks on the 'Resolve Debt' and 'Resolve Copay' buttons. These buttons will allow users to begin the payment journey for their overpayment debt (on pay.va.gov) or copayment bill (on pay.gov). We expect this non-zero amount will increase. We will track the total number of clicks on each button to access the respective payment sites on a monthly basis."
  - "KPI 5: Total number of views of the PDF Copayment statements. We expect this to be a non-zero amount and expect that Veterans who have any copayment bills will want to view the PDF. We will track the total number of views on a monthly basis."
  - "KPI 6: Total number of error alerts shown to the user. We will want to track this metric to ensure that everything is functioning as intended and that if we see a high volume of errors, there is a problem that will need to be addressed. We will track the total number of errors on a monthly basis."
  - "KPI 7: Total number of clicks on the empty state of benefit overpayments and medical copayments. We expect this to be a non-zero amount and want to track this as a metric to assess the design, and not a metric determining the success of the debt feature itself. This will be a temporary metric that is tracked for 6 months."
outcomes:
  user: "Veterans will want to view their benefit overpayment and medical copayment debt on the mobile app to understand how much money they owe to the VA and why that debt exists. This research supports our desired user outcome by confirming that the ability to view overpayment and copayment information is highly desired by users, with everyone currently using the app saying they would use the feature. It also validates that users are not just looking for a total amount, but for clarity on why their debt exists, wanting more details than what was provided in the prototype."
  business: "Increase the visibility of these debts by the business, so that it provides additional awareness to Veterans, informing them that they owe money to the VA. By adding these details to the mobile app, gives Veterans a convenient way to view money they might owe the VA and then take the necessary actions on their debt or bill. This research supports our desired business outcome by confirming that Veterans desire visibility into their debts and bills on the app. The findings validate that by adding these features, we are providing a solution for Veterans to become aware that they owe money to the VA, and the ability to take actions to resolve the debt or bill, request help, or dispute it."
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Area 1: Notifications: how do users want to be notified of new debts, new bills, and payments required?"
  - "Area 2: Possibly exploring naming options for “Payments” to find something that is more encompassing of money owed to VA and money owed to the Veteran."
  - "Area 3: Testing with users of assistive technology after this is built in the app."
underserved_groups_missing:
  - "Group 1: No degree"
  - "Group 2: Other than honorable"
  - "Group 3: Immigrant origin"
  - "Group 4: Expat (living abroad)"
  - "Group 5: Assistive technology users"
secondary_research:
  - "Reviewed previous research studies"
synthesis_tools_used:
  - "Mural"
  - "Numbers and Google Sheets"
---





# [Mobile App Debt Portal: Overpayments and Copayments] Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Mobile App Debt Portal: Overpayments and Copayments, Mobile Feature Support**

**Date:** 09-11-2025

**Contacts:** Emily DeWan - Researcher, Natasha Huckleberry - Designer, Thomas Michaud - Designer

<!-----

**[Link to Research Readout](link-here)**  
*Add a link to your research readout deck, if available.*

----->


**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)



## Research Goals

`1.` **Understand how users become aware of and locate information about money they owe in the app.**

`2.` **Assess how well users understand and interpret their copay and overpayment information in the app.**

`3.` **Identify what actions users want to take regarding money owed and evaluate how easily they can find guidance in the app.** 

`4.` **Evaluate the experience of completing actions outside the app.**

`5.` **Prioritize features for the minimum viable product (MVP) that will handle overpayments and copayments in the app.**

This touches many areas of the Veteran's journey, as the product deals with debt and healthcare. [See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

- Starting Up (Moment: Balancing Finances)
- Taking Care of Myself (Moment: Maintaining my health)
- Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)
- Retiring (Moment: Taking care of my health)
- Aging (Moment that Matters: Managing my declining health)

Outcomes we were aiming to achieve:

- Validate designs for viewing copays + overpayment debts
- Determine when and how to add  functionality that enables Veterans to take action on copays and overpayment and be notified about new debts. 
- Address and identify accessibility gaps (note: Due to prototype limitations, we likely will not identify all accessibility issues)


## Research Questions

**Goal 1: Understand how users become aware of and locate information about money they owe in the app.**

`1.` What prompts users to check on or take action regarding money they owe to the VA (in general, not specific to mobile)?  
`2.` How do users expect to be notified or informed about new bills or debts (in general, not specific to mobile)?  
`3.` Can users successfully locate the section of the app with information about money owed?  

**Goal 2: Assess how well users understand and interpret their copay and overpayment information in the app.**

`4.` Is the overview of money owed (copays and overpayments) clear, complete, and useful?  
`5.` Can users access and make sense of detailed information for each item?  
`6.` Do users feel confident they understand what they owe and why?  
`7. ` Do users find access to downloadable PDF copay statements helpful, and would they use this feature?  

**Goal 3: Identify what actions users want to take regarding money owed and evaluate how easily they can find guidance in the app.**

`8.` What types of actions (e.g., pay, request financial help, dispute a charge) do users expect to take in the app?  
`9.` How do users expect to complete each of these actions?  
`10.` Can users find clear, actionable guidance on how to proceed with each option?  

**Goal 4: Evaluate the experience of completing actions outside the app.**

`11.` How do users feel about having no option to pay their debt or bills through the app?  
`12.` How do users feel about leaving the app to pay their debt through pay.va.gov?  
`13.` How do users feel about leaving the app to pay their bills through pay.gov?  
`14.` Are users comfortable navigating to a new site and copying/pasting information from the app to complete a payment?  
`15.` How do users feel about being redirected to VA.gov to complete actions like requesting help or disputing a debt?  

**Goal 5: Prioritize features for the minimum viable product (MVP) that will handle overpayments and copayments in the app.**

`16.` Would users prefer the experiences of leaving the app to pay via pay.va.gov / pay.gov OR having no option to pay from the app at all?  
`17.` Would users prefer the experience of leaving the app to read help documentation OR seeing help documentation directly in the app?  



## Methodology 

Moderated usability testing using high-fidelity Figma prototypes over Zoom. Participants viewed and interact with the prototype via the Figma mobile app, using account credentials that we supplied during the sessions. 

The prototype simulated the mobile app's MVP debt portal where users can view details on their copays and overpayment debts, and also simulated the journey of leaving the mobile app to access payment portals via a web browser.

- The two flows, overpayment debts and copayment bills, were tested separately within the prototype. Half the participants saw the overpayment flow, and half saw the copayment flow. Depending on time, they sometimes also experienced the other flow.
- Participants were first shown a version of the prototype that did not have any payment links or mention of how to make payments. After getting feedback on the initial version, participants were then shown a second version that included the payment option to open the portals in a browser.


Sessions also included semi-structured interview questions. These questions explored:

- Experiences and awareness of debt before accessing the app
- Actions taken outside of the app that will not be included in the MVP, such as payments, disputing charges, and requesting financial assistance. For the initial release, users will be linked to VA.gov for these actions

Note on Accessibility: Due to prototype limitations, this study did not include testing with users of assistive technologies. However, design files were reviewed by accessibility specialists.



## Hypotheses and Conclusions

* Veterans will want notifications from the app when payments are due.
    * Maybe true / Not enough information
    * Some users do like the idea of in-app notifications for new debts
    * All users appreciated seeing the due dates listed clearly for each bill or debt, and many mentioned that they would like to see some sort of indicator on the home screen when something is due
    * We would need to conduct further research on the specific types of notifications that users would prefer
* Veterans will appreciate the overview of money owed from overpayment debts and copays.
    * Definitely true
    * Users were content with the overview of their debts and bills
* Veterans will find the details of each payment owed clear.
    * Likely true for overpayments
    * Most everyone found the details of overpayments clear
    * Likely false for copayments
    * There was much confusion about the structure of the copayments being in statement form
* PDF copay statements will not be useful.
    * Definitely false
    * Everyone found the statements very useful as a format they’re familiar with, where they like to confirm details and save as references.
* Veterans will find navigation confusing when redirected out of the app to complete tasks.
    * Likely false
    * Users were not confused, but they were annoyed
* Veterans will be frustrated by having to copy and paste information on another site to make payments.
    * Definitely true
    * The friction of having to find and re-enter payment information manually was a major point of frustration.
* Veterans will find the help pages overwhelming with too much information.
    * Likely false
    * When viewing full pages with information, users were fine with what was presented. They also often wanted to talk to someone first instead of reading through everything.


## Key Findings

1. Despite their frustrations with the payment process on mobile, participants preferred having this option over a version that only allowed viewing debt and bills.
2. Navigation and labels need to be intuitive to prevent confusion.
3. Participants have a need for clear, actionable options when searching for help with their debt or bills.
4. Key payment information must be surfaced and easy to retain.
5. Digital statements and documents are a core need for users.
6. Separation of current and resolved debt is beneficial for clarity.
7. Users want a clear, centralized way to manage their bills.



## Details of Findings 

_Note: there are two distinct flows within this section of money that Veterans owe to the VA: overpayments and copayments. Any mention of debt refers to overpayments, and bills refer to copayments._

### Finding 1: Despite their frustrations with the payment process on mobile, participants preferred having this option over a version that only allowed viewing debt and bills.

While most participants (10 out of 11) said they would use the app without a payment option, those same participants preferred the version that allowed them to make payments. Even with the friction of the mobile payment process and the lack of autofill features, they appreciated having this capability.

  * _The one outlier does not have interest in using the app and would not make any payments on phone_

No one is thrilled that they can't pay in the app and/or that their information is not auto-filled, but appreciate that they at least have the option to pay.


  > _“This is now one-stop shopping! And I love that.” - P2_
  
  > _“Yeah, the second one [version with payment option] for sure, because it gives options to resolve, however you choose to. So definitely the second option is better.” - P10_


### Finding 2: Navigation and labels need to be intuitive to prevent confusion.

Veterans rely on labels in multiple locations to find information about money they owe, such as the main tab, breadcrumbs, and help options.

Users had mixed initial assumptions on where to find money they owed, with their responses split almost evenly between three different areas



* The Payments tab (3 out of 12)
* Messages or Claims shortcuts (4 out of 12)
* Latest Payment link (4 out of 12)
* One participant looked under the Health tab

A significant majority of participants (7 out of 11) agreed that "Payments" was the most fitting name for the tab.



* Some of the suggested alternatives: Financial, Balance, and Debt or Bills
* Some participants (3 out of 11) initially thought "Payments" referred to money owed to them (e.g., disability benefits), but 2 of those were fine with the name after a brief explanation


> _“I'm inclined to think maybe payments might be anything I might be receiving. But then that's why the benefits tab is there? So yeah, I think payments is clear enough.” - P7_


### Finding 3: Participants have a need for clear, actionable options when searching for help with their debt or bills.

Most participants (9 out of 11) search for a phone number within the app when they have questions about their debt and bills. 

The Help menu was not easily discoverable, with many users (4 out of 5) not noticing it or only finding it after a long search.


  > _"That's something I wouldn't have noticed before you told me." - P14_

Users easily discovered help options under the Resolve menu (6 out of 6), though some wanted more specific and direct options beyond “request help” to be immediately visible instead of hidden behind another click.



* 1 wanted “dispute debt” to be a separate option
* 1 thought “other ways to pay” was how to request payment plans
* 1 had both of the above thoughts
* *This did not come up with the version with the Help menu, as all options were written out when they first arrived at that page*


> _[tapping “Other ways to pay”] "In my mind I thought that maybe there'd be other options where they can help me with making these payments much more doable. But instead, I got that [pay by phone or in person]" - P7_

> _[tapping “Resolve debt”] "Oh, it's really not that clear on what you can do when you're here. Under the Request Help I see "dispute this debt." I want to see this on the main portion." - P8_

Most participants (7 out of 11) did not open the yellow notification accordion that indicated to users they must pay or request help by a particular date. Of those who did, all 4 were looking for additional information on taking those actions, which they did not find.


  > _"This part that says, "pay or request help" is useless.  If I'm going to open this up, I want it to give me those two options: either pay it, or one-click button that takes me to someone who can help with a payment plan." - P11_

  > _"It says to avoid late fees or collection action, you must pay your full balance or request financial help. How do you request financial help? I think that it should have a contact information or an email." - P12_

The “Why might I have this debt” button proved unhelpful, as 4 out of 5 found the information too general and expected a more direct, personalized explanation.


  > _"Well, that just sounds like some generic information that's not specific to me. I would want to know exactly how this came to be." - P11_

  > _"Yeah, that's pretty standard. It gives you 3 options to ponder. So instead of 3 options, if there was some way to know exactly what it is – a direct line to contact." - P10_


### Finding 4: Key payment information must be surfaced and easy to retain.

Most users are not noticing that the app is providing them with important payment information (e.g. account number, payee number) that they will need when moving to pay portals outside of the app.



* In the overpayment flow, 5 out of 7 users did not notice this information
* In the copayment flow, all 10 missed it entirely

Users assume the app would automatically handle the information for them, and don’t expect to have to save the information before going to the payment portals.


  > _"There's nothing here that tells you that you're gonna need this. [reads again] I guess they do explain it. But it doesn't tell you that once you click on the "pay on pay.va.gov" thing that it's gonna take this information away from you." - P8_

  > _"It says you'll need to provide these details. But, I think I'm not really fully grasping that I need to write everything down, or that I'm going to need to toggle back and forth in the digital age." - P11_

As a result, users would not rely on the app for this information, but instead search for it on a physical letter or PDF statement.


  > _"I would click on "where do I find my VA account number?" Because I don't know that off top of my head. Or, if I do have it in any of my paper mail." - P9_

  > _"Well, I would need the account number, and that would be on the letter where they send the bill." - P13_

This difficult app-to-portal handoff led to a strong desire for in-app automation. All 10 participants in the copay flow would use the copy-and-paste function of the account number. Without this feature in the overpayment flow, users would resort to writing the information elsewhere or referring to the physical letter.


  > _"I guess I could jot this stuff down. But that'd be kind of cool if you can do like a copy and paste." - P5_

  > _"Does this allow copy? This won't allow you to copy, it doesn't look like, so I guess I'd have to write it down." - P8_


### Finding 5: Digital statements and documents are a core need for users.

The PDF statements in the copay experience were highly valued, with all 11 participants appreciating the inclusion. The most common reasons for using them were verifying charges (5 users) and saving them for future reference (4 users).


  > _[would you look at the statement within the app?] "Yeah, if I lost the letter or something. Just to verify that the info is correct." - P16_

  > _[would you use the statement in the app?] "For sure. I always download anything I have just to keep on record in case anything happens. Having access to these PDFs immediately, I think it makes everything more clear and concise and straightforward." - P10_

However, participants found older statements difficult to locate. Only 2 out of 6 people were able to find them, and even those users noted the excessive scrolling and suggested a clearer label, such as “older statements” or “previous statements.”

  > _"If somebody did get seen pretty often, they'd have to scroll a long way before they get to the bottom. So if I were trying to look [for older statements], I wouldn't want to scroll all the way down, because I'm like, oh, it's just appointments and appointments and appointments." - P12_

  > _"No, I don't see where I could go find a previous statement. It shows a previous unpaid balance, but I don't see any place where it'll take me to previous statements." - P13_

In the overpayment flow, all participants found the inclusion of debt letters useful. They cited reasons such as knowing if they’re approaching a deadline and understanding a debt situation in case they had missed a physical letter.


  > _"It's showing the chronological timeline of 1st contact or 1st demand. So I imagine that the VA has all these timelines, so I would want to know: was I approaching any kind of a time deadline?" - P13_

  > _"I like that it also tells you when the 1st and 2nd letters were sent, because sometimes I miss a letter. But it tells me: oh, we submitted months ago." - P16_

A majority (6 out of 8) had a strong expectation that they should be able to view these documents directly in the app.


  > _"Can I open the letters? I would want to know exactly how this came to be, which I assume is in these demand letters at the bottom." - P11_

  > _"I would [expect to be able to view the letters]. It would be very easy instead of having to go to the VA website on a desktop." - P5_

  > _"If this had the letters, I would expect to click on it and view the letters." - P12_


### Finding 6: Separation of current and resolved debt is beneficial for clarity.

A majority of participants (3 out of 5) did not want to see resolved debt alongside current debt, as they expected the main debt page to only show outstanding actionable items.


  > _"If it's already paid off, it should be under payment history. Because when I click on these, I would think that these are the ones that are outstanding." - P9_

  > _"I think it's fine, but maybe after a month it will go away, I think maybe to payment history. Because if it's on here, it I would feel like I still owe them something." - P16_

The remaining participants (2 out of 5) were content with having the resolved and open debts together, but only if there was a clear distinction between them. They wanted it to be clear that there was no further action needed, suggesting a “closed label” or balance of zero.


  > _"Maybe something in green or a balance of 0, just letting me know that there's no further action required on my end." - P7_

  > _"'Closed' or some type of other wording that says it's been paid." - P10_


### Finding 7: Users want a clear, centralized way to manage their bills.

The overall structure of the Payments page is clear to the majority of participants (9 out of 12). A small group (3 of 12), all of whom were not receiving benefits in their real life, were confused by the section of payments made to them.

Initial impressions of the details written under the “Copays” and “Overpayments” titles were mixed – it mentions the total amount due and the quantity of debts and bills. About half (5 out of 9) were satisfied with the details, 4 of 9 wanted more specifics. They wanted to know the due dates and/or type of debt (e.g. medical, school,  home loan) displayed up front.


  > _"I think just telling you how much is going to be due, how much you owe, and maybe there's a deadline on when we need to pay it." - P8_

  > _"Yeah, I wanna know what the date is that it's due. So it should say due August 1st, 2025, or whatever." - P11_

  > _"What I would look for is what section I owe them something: medical, is it for school, or is it home loan, or something like that?" - P16_

Diving into the specifics of overpayment debts – both the overview page and the detail pages of each debt – most everyone found the information complete. There were a few suggestions that would make the information even more helpful:



* the original amount owed
* expected timeline to pay off debt
* late fees
* Information on automatic payments

The copay pages – both overview page and detail pages of each bill – were confusing to many. About half (5 out of 11) were confused by the bill structure, not realizing it was a monthly statement, plus one more participant who was aware of the structure but still concerned that it would be this way in the app. A small group (2 out of 11) were also confused by the grouping of locations together.


  > _"I just want to see right now, like what the breakdown of the $50 is like. I would say, separate these actual balances from the payments already received so that it's clear that's exactly my balance. And then if you really want to see your past payments, you could go to your statements." - P9_

  > _[the bill total was $50, they were looking for a single transaction that matched it] "I don't see one for $50, though. I want the one for $50 and it's not on there." - P14_

While the current experience for learning about new debt comes from physical letters, 3 of 6 participants would like to receive in-app notifications for anything new.



<!-----

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting

----->


## Recommendations


### The Payments hub

1. Proceed with the MVP version, having the payment options of linking to pay.gov and pay.va.gov.

    - _10 out of 11 participants preferred the version that allowed them to make payments. Even with the friction of the mobile payment process and the lack of autofill features, they appreciated having this capability._



2. Keep the name of “Payments” on the tab as-is for now.

    - _7 out of 11 users agreed that "Payments" was the most fitting name for the tab. Even most of those who initially thought "Payments" referred to money owed to them were fine with the name after they explored the contents of the tab._

3. Provide a space for users to view resolved debt, and remove resolved debt from the current list of outstanding debts and bills.

    - _3 out of 5 users did not want to see resolved debt alongside current debt, with the remaining two fine with having it there so long as there was a clear distinction between them._

### Clarity and Communication

4. Improve the handoff experience to external payment sites. Make it very clear that the user needs to take action to save the payment information before they are redirected.

    - _Most users did not notice that they app was providing this information for them: 5 out of 7 with the overpayment flow, and all 10 in the copayment flow._

5. Enable copy-and-paste functions for key payment information to make the external payment process more seamless.

    - _All 10 participants in the copay flow saw immediate value in the prototype's copy-and-paste function for the account number._

6. Clarify why a debt exists. Add easy and actionable ways for users to learn why they have a particular debt, moving away from the generic explanation.

    - _4 out of 5 felt the “Why might I have this debt” button was unhelpful, finding the information too general and expected a more direct, personalized explanation._

7. Add due dates for bills and debts on the Payments page to help users manage their finances at a glance.

    - _4 of 9 wanted more specifics up front, such as due date and type of debt._


### Help and Support

8. Prominently display a phone number, as Veterans often bypass help menus in search of a way to speak directly with someone.

    - _9 out of 11 searched for a phone number within the app for questions about their debt and bills._

9. Surface non-payment options. The options of disputing a debt or requesting a payment plan were not being discovered in the Help menu and were somewhat hidden under the Resolve button.

    - _3 out of 6 wanted more direct options to be surfaced upon tapping the Resolve button._

### Documentation and Notifications

10. Provide access to debt letters. If not possible, provide a clear explanation for why they can not be read in the app.

    - _Everyone found the debt letters useful, and 6 of 8 assumed they could access the letters in the app._

11. Make older PDF statements easier to find. The current structure requires much scrolling and is not clearly labeled.

    - _Only 2 out of 6 people were able to find them, and even those users noted the excessive scrolling and suggested a clearer label, such as “older statements” or “previous statements.”_

12. Look into making the PDFs as accessible as possible for all users.

    - _Everyone found the PDF statements useful, so we need to make sure they can be read by all users._

13. Clarify the structure of the copay statements. Until we are able to provide real-time transactions, make it clear that the copay details are in statement form and may not be up to date.

    - _5 out of 11 were confused by the bill structure, not realizing it was a monthly statement._

14. Re-evaluate the alert accordion on the details page. Either make it clearly expandable with valuable content inside or replace it with a simple banner.

    - _7 out of 11 did not open the yellow alert accordion. Of those who did, all 4 were looking for additional information on taking those actions, which they did not find._


## Product User and Business Outcomes


### Desired User Outcome 
Veterans will want to view their benefit overpayment and medical copayment debt on the mobile app to understand how much money they owe to the VA and why that debt exists.

  - This research supports our desired user outcome by confirming that the ability to view overpayment and copayment information is highly desired by users, with everyone currently using the app saying they would use the feature. It also validates that users are not just looking for a total amount, but for clarity on why their debt exists, wanting more details than what was provided in the prototype.
 
### Desired Business Outcome
Increase the visibility of these debts by the business, so that it provides additional awareness to Veterans, informing them that they owe money to the VA. By adding these details to the mobile app, gives Veterans a convenient way to view money they might owe the VA and then take the necessary actions on their debt or bill.

  - This research supports our desired business outcome by confirming that Veterans desire visibility into their debts and bills on the app. The findings validate that by adding these features, we are providing a solution for Veterans to become aware that they owe money to the VA, and the ability to take actions to resolve the debt or bill, request help, or dispute it. 



## Key Performance Indicators

### KPI 1: Total number of views of benefit overpayments and medical copayments.
We expect this to be a non-zero amount and will increase once overpayments and copayments are viewable in the app. We will track the total number of views on a monthly basis.

- How findings support the KPI: The research has shown that users are motivated to use the app to manage their debt and bills, with almost everyone reporting that they will likely use this new feature.

### KPI 2: Overall app volume.
We expect an increase in overall app volume as benefit overpayments and medical copayments debt information are implemented within the app. We will track the overall app volume on a monthly basis.

- How findings support the KPI: Participants preferring the payment version of the app cited its usefulness, suggesting that the feature will attract new users and increase overall app engagement.

### KPI 3: Total number of clicks on the link to access VA.gov.
We expect that Veterans will want to request help or dispute their debt or copy, and that this non-zero amount will increase. We will track the total number of clicks on the links to access VA.gov on a monthly basis.

- How findings support the KPI: Participants were motivated to seek help for their debt and bills, and were generally comfortable with seeing links that would direct them to further information on VA.gov.

### KPI 4: Total number of clicks on the "Resolve Debt" and Resolve Copay" buttons. 
These buttons will allow users to begin the payment journey for their overpayment debt (on pay.va.gov) or copayment bill (on pay.gov). We expect this non-zero amount will increase. We will track the total number of clicks on each button to access the respective payment sites on a monthly basis.

- How findings support the KPI: The research confirms that the "Resolve Debt" and "Resolve Copay" buttons are a critical feature. Participants overwhelmingly preferred the version with these buttons, as they liked having a “one stop shop” for their financial management.

### KPI 5: Total number of views of the PDF Copayment statements.
We expect this to be a non-zero amount and expect that Veterans who have any copayment bills will want to view the PDF. We will track the total number of views on a monthly basis.

- How findings support the KPI: Research shows that the PDF statements are a desired feature, with some participants noting they would use them regularly to verfy charges, while others would refer to them only if needed.

### KPI 6: Total number of error alerts shown to the user.
We will want to track this metric to ensure that everything is functioning as intended and that if we see a high volume of errors, there is a problem that will need to be addressed. We will track the total number of errors on a monthly basis.

- How findings support the KPI: Any error the user encounters would most likely lead to frustration. The research identified several points of friction that could lead to this frustration, including a confusing handoff to external payment sites, difficulty locating financial help, and a lack of prominently displayed phone numbers.

### KPI 7: Total number of clicks on the empty state of benefit overpayments and medical copayments. 
We expect this to be a non-zero amount and want to track this as a metric to assess the design, and not a metric determining the success of the debt feature itself. This will be a temporary metric that is tracked for 6 months.

- How findings support the KPI: This research did not directly touch upon this KPI. However, the findings show that a few users were confused about some of the cards on the Payments page if they did not have experience with them in their real life (e.g. the payments made to them).


## Next Steps

 🚧 🚧 🚧
 
[Spreadsheet with recommendations and their statuses (Google Sheet)](https://docs.google.com/spreadsheets/d/1b2y2qA8gWbx0GtgiDoCnUsUiYlQksZIuN6oCClm0458/edit?gid=2073713253#gid=2073713253)
  - Feedback needed: The "Recommendation Status" column – confirm, fix, or update cells as necessary
  - The table below is from the above spreadsheet – I'll update the table once everyone has viewed + adjusted the spreadsheet

| Recommendation | Status | Note |
| :--- | :--- | :--- |
| Proceed with the MVP version, having the payment options of linking to pay.gov and pay.va.gov | Design updated | |
| Keep the name of “Payments” on the tab as-is for now | no action | |
| Provide a space for users to view resolved debt, and remove resolved debt from the current list of outstanding debts and bills | Future: consider for v2 | Not currently technically feasible |
| Improve the handoff experience to external payment sites. Make it very clear that the user needs to take action to save the payment information before they are redirected. | Design updated | |
| Enable copy-and-paste functions for key payment information to make the external payment process more seamless. | Design updated | |
| Clarify why a debt exists. Add easy and actionable ways for users to learn why they have a particular debt, moving away from the generic explanation. | Future: consider for v2 | Research needed on what is technically feasible |
| Add due dates for bills and debts on the Payments page to help users manage their finances at a glance. | Future: consider for v2 | |
| Prominently display a phone number, as Veterans often bypass help menus in search of a way to speak directly with someone. | In progress | |
| Surface non-payment options. The options of disputing a debt or requesting a payment plan were not being discovered in the Help menu and were somewhat hidden under the Resolve button. | Design updated | |
| Provide access to debt letters. If not possible, provide a clear explanation for why they can not be read in the app | Future: consider for v2 | Research needed: will PII always block adding letters? Research needed: what is allowed to be written? |
| Make older PDF statements easier to find. The current structure requires much scrolling and is not clearly labeled. | Design updated | |
| Look into making the PDFs as accessible as possible for all users. | Pending | |
| Clarify the structure of the copay statements. Until we are able to provide real-time transactions, make it clear that the copay details are in statement form and may not be up to date. | Design updated | |
| Re-evaluate the alert accordion on the details page. Either make it clearly expandable with valuable content inside or replace it with a simple banner. | In progress | |


## Further research needed

- Notifications: how do users want to be notified of new debts, new bills, and payments required?
- Possibly exploring naming options for “Payments” to find something that is more encompassing of money owed to VA and money owed to the Veteran.
  - In a comparative analysis we conducted, we found that most apps did not group incoming and outgoing money together. The few that did used the terms "Transact" and "Transfer & Pay." [Read the full comparative analysis report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Naming_Conventions_Report.md).
- Testing with users of assistive technology after this is built in the app.


## Appendix

### Research documents
- [Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/conversation_guide.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal/mobile/session-transcripts)
- [Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal/mobile/session-notes)
- [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1752611263909/251a9de646f8e1f1243c9d66902ad9e2466ab623?sender=u456b54784628aa29fbf80697)
<!-----
- [User flow](https://www.figma.com/board/jHdoq3dF3iEZABqUzir6ot/MFS---Overpayments---Copays--Sitemap-flows--%7C-VA-Mobile?node-id=135-6256&t=jNUjASjwhmmfxBSV-4)
----->
- [Comparative analysis report on naming conventions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Naming_Conventions_Report.md)

### Tools used for Synthesis

- Mural (taking notes during sessions)
- Numbers and Google Sheets (tagging keywords, pulling quotes)
  
### Pages and applications used

- Prototype: [version with no payment option](https://www.figma.com/proto/kRA7JHbthNrSLxTQHrzH8T/MFS---Overpayments---Copays-%7C-VA-Mobile?page-id=2001%3A429&node-id=7274-61308&starting-point-node-id=7274%3A61308&scaling=min-zoom&content-scaling=fixed&show-proto-sidebar=1&hotspot-hints=0&t=908xt3WmHfQCvYYB-1) (Figma)
- Prototype: [version with payment options](https://www.figma.com/proto/kRA7JHbthNrSLxTQHrzH8T/MFS---Overpayments---Copays-%7C-VA-Mobile?page-id=2001%3A429&node-id=7372-28070&starting-point-node-id=7372%3A28070&scaling=min-zoom&content-scaling=fixed&show-proto-sidebar=1&hotspot-hints=0&t=908xt3WmHfQCvYYB-1) (Figma)


### Secondary research

Previous research studies reviewed and referenced
* [Debt Portal & eFSR Medallia Report: December 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/medallia_reports/Medallia-December-2024.md)
* [2024-09 VHA Debt Portal Payment History, Usability Study, September 2024](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/684)
* [2024-06 Usability Study: Debt Portal Payment History](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/560)
* [2024-02 Exploratory & Concept Study, Debt Portal (Debt Resolution Team)](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/483)



### Research participants 

#### Recruitment criteria

Two cohorts of Veterans: those who had experience with benefits overpayment debts, and those who have experience with VA healthcare copayments. Some participants had experience with both.

We talked with 12 Veterans

- 6 discussions focusing on overpayments
- 5 discussions focusing on copayments
- 1 that was interview only and not a usability test (due to technical issues)
- No assistive technology users or accessibility features turned on
    * (this is due to prototype limitations; we will be testing with assistive technology at a later date)


#### Demographics 

We talked to **12 participants.**

Audience segment:
* Veterans: 12
* Caregivers: 0 
* Family members of a Veteran: 0


Gender:
* Male: 9
* Female: 3


LGBTQ+:
* Member of the LGBTQ+ community: 2
* Transgender: unknown
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown
* Gay, lesbian, or bisexual: unknown


Devices used during study: 
* Desktop: 0
* Tablet: 0
* Smart phone: 12
* Assistive Technology: 0


Age:
* 25-34: 1
* 35-44: 7
* 45-54: 0
* 55-64: 0
* 65+: 3
* Unknown: 1


Education:
* High school degree or equivalent: 3
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 0
* Bachelor's degree: 5
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 9
* Rural: 3
* Unknown: 0


Race:
* White: 5
* Black: 1
* Hispanic: 2
* Biracial: 1
* Asian: 2
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 3
* No assistive technology users due to prototype limitations


#### Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* No degree
* Other than honorable
* Immigrant origin
* Expat (living abroad)
* Assistive technology users

Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers:
![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/supporting-files/VA%20Recruitment%20Checker.png)



<details>
  <summary>A more accessible version of the table in the above image</summary>
   

### Underserved groups

**Final # of participants:** 12  
**# of AT users:** 0  
**# of no shows:** 4

#### General

| Category | % Target | Study | P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11 | P12 | P13 | P14 | P15 | P16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Age 55-64+ | 50.00% | 6 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 
| Cognitive Disability | 50.00% | 6 | 3 | 0 | 0 | N | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |
| Mobile user | 50.00% | 6 | 1 | 2 | N | 1 | N | N | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 
| Rural | 25.00% | 3 | 3 | 0 | 1 | N | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | N | 0 |
| No degree | 25.00% | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Other than honorable | 21.00% | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | 17.00% | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | 10.00% | 2 | 3 | N | 0 | N | N | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 1 |
| Expat (living abroad) | 0.40% | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |


#### Race

| Category | % Target | Study | P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11 | P12 | P13 | P14 | P15 | P16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Black or African American | 15.00% | 2 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N | 0 |
| Hispanic, Latino, or Spanish origin | 12.00% | 2 | 2 | N | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| Biracial | 3.90% | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Asian | 3.00% | 1 | 2 | 0 | 0 | 0 | N | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| Native Hawaiian or other Pacific Islander | | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | 0.30% | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

#### LGBTQ+

| Category | % Target | Study | P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11 | P12 | P13 | P14 | P15 | P16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Gay, lesbian, or bisexual | --% | 1 | 2 | 0 | 0 | N | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | --% | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | --% | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

#### Assistive Tech (AT)

No assistive tech users

 </details>


