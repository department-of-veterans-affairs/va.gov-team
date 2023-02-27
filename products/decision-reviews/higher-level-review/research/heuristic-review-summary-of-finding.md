### Topline Summary

# Higher-Level Review Heuristic Review
Date: January 2023

This is a high-level, top of mind summary of findings from the recent heuristic review to help our team align on the current condition of the experience, potential opportunities, and determine specific directions to pursue.

The review was conducted by  [Eva Floyd](mailto:eva.floyd@coforma.io)  and  [Gary Homidas](mailto:gary.homidas@adhocteam.us) , using the lens of two VA personas: Day by Day, and In Transition Veteran, covering a set of heuristics that can be found  [here](https://docs.google.com/spreadsheets/d/1uo-8LvnGaEF1rLi4p_QUVp2YpDo6dK7tRM5CxEMkd_k/edit?usp=sharing). 

## Tasks covered in this review

1. Case manager issues notification letter. After an additional review, the Veteran’s claim is still denied or received a lower rating than expected.
2. Veterans who decide if they would like to file for HLR, have the option for legal representation. Review options on the website or in the letter,  [https://www.va.gov/decision-reviews/](https://www.va.gov/decision-reviews/)   
3. Begin appeal pathway on  [va.gov](https://www.va.gov/)  
4. Requests HLR for disability compensation 
5. Step 1-5 of the 20-0996 form
6. Submits form
7. Wait for informal conference

## Heuristic value ratings
* Unusable: imperative to fix Unusable (0)
* Major issue: Important to fix with high priority Critical (1)
* Minor issue: should be given low priority Moderate (2)
* Minor issue: could be improved but does not affect the process (3)
* Meets Criteria No Issues (Default Value) (4)

## Executive Summary
During this evaluation, we found that the form is mostly usable in the sense that many users will be able to progress through the application. Though the application performs well in multiple categories, which will be highlighted later in this paper; we have identified several opportunities for improvement. 

### Positive findings we have discovered

* Valuable - the application satisfies a real need for users and they are likely to understand and describe its value.
* Findable - generally, users can locate the information they need to complete the form, and the navigation is consistent.
* Error Prevention - the application does a great job indicating where errors occur and how to resolve them. 

### Opportunities for improvement

* Error Prevention - some pages are difficult to scan and difficult to understand. Especially the entry page before making an HLR request. 
* Trustworthy/Credible - contacting a help person was challenging and there isn’t a chat feature on the page.
* Control and Freedom - if a veteran indicates they are homeless, the application does not allow them to move forward without an address or phone number. There also isn’t a message to inform users about how to update their contact information, assuming this operation can not be completed within the application.
* Error Prevention - When errors occur on the review page, the highlighted error disappears without the user making any correction.
* Findable - We do not have any information about veterans’ experience in cross-channels (e.g. from letters to a VA center to online).
* Control and Freedom - Veterans have no way to share their completed forms (e.g. download filled-out PDF).
* Aligns System and Real World - If a user clicks on a breadcrumb, with the intention of navigation back a couple pages in the HLR request form, the breadcrumb link will take them out of the form flow and into an unauthenticated page.
 

## Findings arranged by Heuristics Categories

### 1. Aligns System and Real World
**Score**: 2.83 

**Area of Concern**

**S3:** Assists in the understanding of where they are in the system through the design of environments and information

**Concern:** There are breadcrumbs at the top of the page to help me understand where I am, but if I click on the breadcrumb links, it takes me to article pages. I was expecting that it would take me back along the application path. In other parts of the bread crumb works as expected. (Refer Figure 1)

|<img alt="breadcrumb" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-1_breadcrumb.jpg" width="800" height="">|
|---|
|_Figure 1._ |


<br>

**S4:** Uses familiar words and concepts

**Concern:** Several instances of new language, such as "decision review" , "board of appeals" , is it "higher level review" or "board appeal".

<br>

### 2. Valuable
**Score**: 3 

**Area of Concern**

**V3:** Are tasks and information a user would reasonably want to accomplish available?

**Concerns:** 

* If the user denotes that they are homeless, they would need to update the contact information on the next screen. If said user doesn’t have a home address, the system doesn’t allow them to move forward without an address or phone. (Refer Figure 2-1 thru 2-3)
* Disability HLR can happen online but the other types of benefits must be appealed via the paper form. (Refer Figure 2-4)

|<img alt="risk of homelessness question" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-2-1_homelessness.png" width="650" height=""> |
|---|
|_Figure 2-1_ |


|<img alt="user contact information" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-2-2_contact-info.png" width="400" height="">  | <img alt="error state for missing field  in the contact update form" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-2-3_contact-info-error.jpg" width="300" height="">|
|---|---|
| _Figure 2-2_ Desktop, User can not progress if they have no email to input.  | _Figure 2-3_ Mobile, any empty field will result in the user being stuck.  |
 
|<img alt="user selected other benefits for the type of claim being filed" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-2-4_other-benefits.png" width="600" height="">|
|---|
|_Figure 2-4_ Other types of benefits must be appealed via the paper form.|

<br>

**V4:** Does it serve new users as well as loyal users in ways that satisfy their needs uniquely?

**Concern:** New users will not have a clear understanding of the decision review options and process. There are 3 options on the page, but they are not easily identifiable. (Refer Figure 2-5, 2-6)

| ![Supplemental claims option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-2-5_options-supp-claims.png)  | ![Higher-Level Review option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-2-6_options-hlr.png)  |
|---|---|
| _Figure 2-5_ Supplemental claims option  | _Figure 2-6_ HLR option  |

See a live example by visiting the  [web page](https://staging.va.gov/resources/choosing-a-decision-review-option/) .

<br>

### 3. Findable
**Score**: 3.29 

**Area of Concern**

**F3:** Once users navigate within areas of the application, do users have a path to higher levels of navigation?

**Concern:** The user can use the “back” button to navigate the form, but if they click the breadcrumb, this will take them out of the application and into an unauthenticated experience. This would break the flow for users if they clicked there.
(Refer to Figure 1)

**F4**: Can users find what they’re looking for across channels (from letters, to VA center, to online)?

**Concern**: Cross-channel study would be helpful.

<br>

### 4. Clear
**Score**: 2.7

**Area of Concern**

**C5:** Avoids jargon and system-specific terms

**Concern:** On step 2, Issues eligible for review, we reference the “appeals modernization act” but there’s no link to learn more about it or any context on what changed. (Refer to Figure 4)

| <img alt="unfamiliar terms being used on process acknowledgment page" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-4_old-to-new-process.png" width="800" height="">  |
|---|
|_Figure 4_   |


<br>

### 5. Trustworthy/Credible
**Score**: 2.8

**Area of Concern**

**T3:** Is it easy to contact a helpful person?

**Concern:** There is a persistent helpline phone number and TTY on the pages, but I think having chat options with live agents would help. Also; it isn’t easy to get through the call center. Can we provide other options? (Refer to Figure 5-1)

| <img alt="VA hotline number" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-5-1_need-help.png" width="800" height="">  |
|---|
| _Figure 5-1_  |


<br>

**T4**: Does the application have help/support content where needed?

**Concern:** If a user needs additional help with their application, as an option they are provided a link to visit a facility locator tool. The tool is helpful, but the instructions come after the form fields. The map doesn’t become interactive until someone has entered the values into form. Placing the instruction before the form could be helpful or figuring out another way to prioritize the form input first, then the map second.  (Refer to Figure 5-2)

|<img alt="facility locator" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-5-2_facility-locator.png" width="800" height="">   |
|---|
| _Figure 5-2_ |

<br>

**T5**: Does the user feel secure answering questions and giving personal information? Do they know why they’re being asked?

**Concern:** It doesn’t provide a way for a person to review evidence that has been submitted

<br>

### 6. Control and Freedom
**Score**: 2.6

**Area of Concern**

**CF2:** Are features offered to allow the user to tailor information or functionality to their context? (personalization?)*

**Concern:**

* The user can tailor information in terms of adding/editing their previous medical conditions, but nothing else.
* When presented with the option to specify if I am experiencing homelessness, even if I selected yes, the application continues assuming I have a home address or phone, with no option to specify that I do no. Ultimately, the user can not progress unless they have an address, phone or email.

(Refer Figure 2-1 thru 2-3)

**CF5:** Can appropriate content be shared in a useful way? (i.e. printing completed form for caregiver to see)

**Concern:** There is a print button on the confirmation page, but it only prints the page, not the form data. We don’t have anything set up on the backend to return a filled-out PDF of the form. (Refer Figure 6)

| <img alt="print confirmation page" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-6-submission.png" width="600" height="">  |
|---|
| _Figure 6_  |

<br>

### 7. Learnable
**Score**: 3.17

**Area of Concern**

**E1:** Does the design reduce uncertainty?

**Concern:**

* In step 2 of 4, _Issues eligible for review_, we’ve raised some questions about the decision to use a check box to transition an older claim into a new process. Other than speeding up the review processing, are there any other changes that are noteworthy? Does anything happen if my claim pre-dates Feb 2019 and I do not check the box? If my claim was after Feb 2019 and I checked the box, is it moot at this point?
* Somewhat, because this is a hard process to understand. You don’t know what evidence has been provided initially, so there may be a lack of confidence in the decision, or that it will be different the next time. 
(Refer Figure 7)

|<img alt="checkbox to confirm transition from old to new review process" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-7_old-to-new-process.png" width="600" height="">|
|---|
| _Figure 7_|


<br>

### 8. Error Prevention
**Score**: 3.1

**Area of Concern**

**E2:** Can users quickly and effectively scan pages of content?

**Concern:** There’s a lot of copy on the page and there’s no visual separation for content other than the persistent h1 tag and the progress steps (4 bars at the top). This makes it difficult to scan the page for options (Refer Figure 8).



| <img alt="compilation of screenshots to illustrate poor scanability of the page" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-8-1_scannability.jpg" width="800" height="">  |
|---|
| _Figure 8-1_ On mobile view, the page is more difficult to scan; especially with the page being much longer to scroll.  |


**E3:** Does it provide an appropriate level of information for quick recognition of information and tasks?

**Concern:** In step 2, there’s a disclaimer statement (moving to a new review process); if I check the box to switch to the new review process, nothing happens on the screen to acknowledge the change and the step’s title remains the same. (Refer Figure 7)

**E6:** When errors do occur, how easily can a user recover?

**Concern:** In steps 4 of 4 (mobile & desktop), when I expanded the accordion to edit the “issues for eligibility,” I added a medical condition. Initially, the system error highlighted the appropriate accordion title, I had to manually scroll the page to see where the issue was and how to resolve it. I saw the highlighted question, “what do you disagree with…”. The highlight was helpful, but after I collapsed the accordion title (without making any changes) and expanded the section again, the highlight disappeared. I lost the question that needed correction. Finally, when I made the update and returned to the review page, the error for the missing information didn’t go away until I submitted the application (Refer Figure 8-2).

|<img alt="errors on the summary page" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/research/images-for-summary-of-findings/Figure-8-2_review-page.jpg" width="800" height="">   |
|---|
| _Figure 8-2_ |


<br>

### 9. Frictionless
**Score**: 2.8

**Concern:** We need to look at data to see what percentage of people are viewing the HLR form on a mobile device.

## Primary Opportunity Areas
* Learn more about cross-channel experiences and contacting support during form use.
* Add navigation that allows users to jump through steps in the application or repurpose the four progress bars to a navigation component with titles that helps the user predict the next topic in the form.
* Add instructions on updating contact information for homeless individuals.
* Simplify language to make it easier to understand and choose the right pathway.
* Find metrics on satisfaction and completion rates.
* Understand what happens if a VET fails to check the box for moving to a new claims process. Are there any setbacks?
* Current gap, HLR process is only available online for disability claims, all others (i.e. burial, still uses the paper flow)
