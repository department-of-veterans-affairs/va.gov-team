# Design Review a11y findings: Benefits and Claims | Lifestage Benefits Crew | Non-Disability Experience
- [Prototype link](https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/3BF5B061-A74A-4EF7-9842-682E66AA879B/canvas)
- [DSVA slack channel](https://dsva.slack.com/archives/C057W3N9K2S) for contacting product team

## Product team
- **OCTO-DE product owner:** Emily Theis
- **Product manager:** Laura Steele
- **Designer:** Fiorella Glavez, Maya Carroll

## Auditor(s)
- Kate Murphy
  
## Testing Coverage
- N/A

### Manual Testing
  * [x] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
  * [x] Color blindness checks
  * [x] Buttons vs links
  * [x] Cognitive flow
  * [x] Design consistency across screens
### Screen Reader
  * [x] Behavior & navigation advice
## Findings
_All findings given in comments directly on Sketch file, this is a high-level summary._

Please reach back our for any additional support during CAIA office hours or on our  [DSVA channel](https://dsva.slack.com/archives/C01K37HRUAH) at any time. <br>

### High-Level Summary
### Color Checks
- Color checks all seem to be in line and consistent with VADS. <br>
### Buttons and Links
- Buttons and links seem to be used consistently, limited links within form. (Be mindful of interchanging these functions and always remember Links _GO_ and buttons _DO_) <br>
### Cognitive Flow
- Cognitive flow: complex information with multiple users, requiring specific knowledge or financial information. <br>
    - Create unique headings for sub steps (this will help inform URLS/IA and be beneficial for users to feel progression through form) <br>
    - Favor language to be person centric <br>
    - Review steps and sub steps holistically ensure that when asking about additional family memebers the order you ask is consistent across steps <br>
    - Think about fidelity and complexity of questions and review overal form questions order (moving contact information into step one with applicant info instead of last?) <br>
    - Review and clarify what is required to fill out and waht is optional/addtional data <br>
### Step Consistency
- Review consistency across steps in language and overal layout (using H2 headings, and typography for the heading) <br>
### Navigation
- Navigation currently looks logical and functional will need to check with keyboard once in staging later on (when passing work to DEV share suggested Heading structure in annotations) <br>

## Full Details
_Comments included (newest to oldest in each section), along with links to that section or step of the prototype.
_
<details><summary>Intro Page Comments</summary>

https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/0C7C4F5E-82B6-44DD-AC2F-80D95351BDD8/canvas#Comment

 ### Katherine
I don't think this link to rates is relevant here on the intro page of the form
 
 ### Katherine
using "certain needs or disabilities" language from existing va.gov page: https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/
 
 ### Katherine
@Fiorella @ Maya - I removed the list of additional forms for special circumstances from this page. The list doesn't provide enough context on this page to be useful to Veterans. They won't be able to tell if which additional forms they may need at this point. 
I've replaced the list with one sentence about additional forms.
 
 ### Katherine
CAIA recommendation: Break the bulleted list into shorter chunks for easier reading. Recommended copy below:
 
 ### Katherine
noting here that VA.gov doesn't use directional language ("below") for accessibility reasons. "Pension" should also be lower case.
 
 ### Katherine
This is outside the purple note of areas to review, but noting here that steps 3 and 4 aren't steps the Veteran takes, so we don't need them on this page.
 
 ### Katherine
changed this instruction to "Complete and submit" (from "Complete and mail")
 
 ### Katherine
@Maya @Fiorella I revised this list. We'll need stakeholders to confirm the accuracy.
 
 ### Katherine
Just noting for the designers that I messed up the style of these bullet points.
 
### Fiorella
I noticed the phone number is different the request appeal. What is the number selection they should press to get help right away?
 
### Fiorella
What would the new expiration date be?
 
### Fiorella
I updated the time to 45 mins from 15 mins, I still think 45 mins is not enough, this from is a beast and I think it would take someone longer than 45 mins
 
### Fiorella
ITF is something we’d like to include automatically, should we still keep this copy here, adjust it, or remove it?

</details>



<details><summary>Intent to File Comments</summary>

https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/3BF5B061-A74A-4EF7-9842-682E66AA879B/canvas#Comment
 
 ### Katherine
changed
 
 
 ### Kate
If you are looking to distinguish this additional info section from the alert more there is an additional 'no border' alternate option.

</details>


<details><summary>Step 1: Applicant Information</summary>

https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/467E6E7E-9020-4C29-B732-B774FECC95B3/canvas#Comment

 
 
 ### Maya
@Katherine @Vicky I wouldn't make an assumption that the user has read the hint text on this field. Additionally, please include error validation for this input in case they enter their social security number here.
 
 
 ### Katherine
remove hint text
 
 
 ### Katherine
Is this asking whether the Veteran has ever filed a VA pension claim, or any kind of claim with VA before?
 
 
 ### Katherine
@Maya What action triggers this alert to show up on this screen?
 
 
 ### Todd
On vets-website they encourage us to follow component patterns for common user submitted fields. The Social Security number component pattern doesn't include an option to add an 'example, 123 45 6789' hint. This would be a deviation from other vets-website forms.
 
 
 ### Katherine
lower cased "number"
 
 
 ### Katherine
@Maya is it considered in scope to remove "Your" from the other fields on this page, i.r. "Your first name"? I noticed "VA file number" doesn't have "Your." If removing "Your" isn't in scope, then I'll update to say "Your VA file number"


</details>

<details><summary>Step 2: Military History</summary>

 https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/316E2F85-A392-40B8-9DF2-B0178C7CA260/canvas#Comment


 
 ### Todd
The pension benefits form automatically saves your progress as you fill it out, including additional service periods. When the veteran selects 'Add another service period' the form will continue to auto-save. The exception is when you 'Edit' an existing service period. In that case you need to manually save the changes with the 'Update' button. Adding a manual 'Save' button to a new service period would be a deviation from the existing pattern and may potentially require some significant refactoring.
 
 
 ### Katherine
What is a VA service number?


</details>

<details><summary>Step 3: Pension, Employment, Medical Centers</summary>

 https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/AFA43D59-B983-46B6-9702-F37DDB5ABF6D/canvas#Comment

 
 ### Vicky
Zenhub task: https://app.zenhub.com/workspaces/benefits-pension-64e775aaa6b1ca1ed49b2ede/issues/gh/department-of-veterans-affairs/va.gov-team/69725
 
 
 ### Katherine
@Maya @Julie I updated the copy on this page based on the language from the PDF form
 
 
 ### Katherine
I'm discussing this recommendation with the CAIA team, but in the meantime, I suggest doing this: 
Insert an "additional info" component: 
https://design.va.gov/components/additional-info

Link text: 
What's special monthly compensation? 

Expandable copy: 
If you have certain health needs or disabilities, we'll pay you extra money. We call this special monthly compensation. 

You may be eligible to claim SMC if you experience any of these situations:

The physical loss of one or both eyes
The loss of sight or total blindness in one or both eyes
Being permanently bedridden (unable to get out of bed)
Needing daily help with basic needs (like eating, dressing, and bathing), also called “Aid and Attendance”
 
 
 ### Katherine
Question for product team: Is there a reason we only ask about severe visual impairment, and not other situations that are eligible for special monthly compensation? 
The amputation of one or more limbs or extremities
The loss of use of one or more limbs or extremities (meaning you have no effective function remaining)
The physical loss of one or both eyes
The loss of sight or total blindness in one or both eyes

Source: https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/#how-we-assign-smc-levels-l-thr
 
 
 ### Katherine
@Maya I changed the header for step 3
 
 
 ### Katherine
@Maya changing subheader to "VA medical centers" for accessibility
 
 
 ### Katherine
@Maya I changed subheader to "VA medical centers" for accessibility
 
 
 ### Katherine
@Maya changing sub hed to "VA medical centers" for accessibility
 
 
 ### Kate
Consider the order of these questions, to help with cognitive load we would want to think of the information in a funnel approach starting with the most broad to most specific. Review this screen and previous screen and decide if making these questions in a different order makes sense.
 
 
 ### Kate
Be cautious of pages where the headings and content are all the same until the 'decision point' question, this can be confusing and make folks answer incorrectly thinking they are on a previous screen.
 
 
 ### Kate
Be cautious when adding new information to an existing page, think through reasoning on why to continue this pattern over creating new pages for additional steps.
 
 
 ### Katherine
@Maya does VA need to know if this person has ever received treatment from a VA medical center, within a specific time frame, or something else?
 
 
 ### Katherine
Question for the product team: How should someone complete and submit this form if they're completing a pension form online?
 
 
 ### Katherine
CAIA recommendation: The form should ask one question at a time for ease of reading, and to reduce cognitive overload. Suggested questions below. For the 2nd question, I assume we want to know if they're currently in the process of waiting for a Medicaid decision, not whether they've applied for it and been denied?
 
 
 ### Katherine
CAIA recommendation: The form should ask one question at a time for ease of reading, and to reduce cognitive overload. Suggested questions below. For the 2nd question, I assume we want to know if they're currently in the process of waiting for a Medicaid decision, not whether they've applied for it and been denied?
 
 
 ### Katherine
@Maya @Fiorella - Do all of the questions in step 3 relate to special monthly compensation? Or disabilities? I might want to recommend a different name for this section, since pension is very general and applies to the entire application.
 
 
 ### Katherine
Question: I'd like to ask this in a different way, but before I can suggest other language, how does this question affect the Veteran's eligibility?
 
 
 ### Katherine
minor change to fix spelling and add question mark
 
 
 ### Katherine
minor change to add missing words
 
 
 ### Katherine
corrected spelling of "currently"
 
 
 ### Katherine
corrected spelling of "currently"
 
 
 ### Katherine
minor change to add missing word
 
 
 ### Katherine
minor change for style
 
 
 ### Kate
This seems to be a different pattern than the previous screens. Was there a reason for adapting to a new pattern mid step? I recommend keeping consistent throughout the form. This secondary heading could be useful to help build unique URLs for each page.
 
 
 ### Katherine
new copy
 
 
 ### Katherine
changed copy to align with VA.gov style standards
 
 
 ### Kate
if using situational logic like this and new questions appear based off the Veterans answers, ensure robust testing is done so that they are clearly communicated with screen reader users. Generally the preferred approach would be less steps per page and more pages. Be prepared to share reasoning on choosing the design pattern less traveled.
 
 
 ### Kate
Consider adding more context here, this can also help inform your URLs and build more inclusive IA. ex. 3 of 7 Pension information: [narrower description of this pages questions]
 
 
 ### Katherine
I changed this question to be active voice from passive voice. I also rephrased it so that users can answer yes or no more easily.
Viewed
 
 
 ### Katherine
I'd like to suggest content recommendations for this question, but I'd like to know: 
How do we define "recently"?
Are there other examples of federal medical facilities other than military bases?



</details>

<details><summary>Step 4: Household Info</summary>

 https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/2647C492-EE5E-4C31-B060-D04332452461/canvas#Comment

 
 ### Katherine
@Maya flagging a small copy change here.
 
 
 ### Katherine
@Maya @ Julie I saw the answer from the pension biz stakeholders. I re-phrased these options with input from the sitewide content team, and removed "illness" since it falls under "medical reason"
 
 
 ### Katherine
@Maya @ Julie I saw the answer from the pension biz stakeholders. I re-phrased these options with input from the sitewide content team, and removed "illness" since it falls under "medical reason." This question refers to living apart, not being legally separated right? That's what I gather from the Teams chat with stakeholders.
 
 
 ### Vicky
Task for engineering: https://app.zenhub.com/workspaces/benefits-pension-64e775aaa6b1ca1ed49b2ede/issues/gh/department-of-veterans-affairs/va.gov-team/69554
 
 
 ### Katherine
@Maya For consistency on this page, consider a subheader for the address, like "Where does your child live?" 
This will be consistent with the next subheader on the page "Who does your child live with?"
 
 
 ### Katherine
changed "Are they" to "Is your child..."
 
 
 ### Katherine
@Maya The checkbox copy is clear. I think we can remove the copy in parentheses here (Foreign nation, etc.). Unless there's a reason we need to keep it?
 
 
 ### Kate
This is a lot of questions per page, consider breaking apart. Also think through fidelity of information, does it make sense to ask specific questions like if the child is married and if the child is in school or disabled at the same time?
 
 
 ### Katherine
changed from "Describe how your marriage ended" because this page is asking about the current spouse's former marriage, not the user's marriage.
 
 
 ### Katherine
The scope of the content review is just the areas with purple notes, but noting that some of the other labels on this page need tweaks (for example: Spouse's first name needs an apostrophe s after spouse). Should also use consistent sentence casing (for example: Spouse's suffix)
 
 
 ### Kate
Review styling across all screens collectively to find cohesive and consistent heading level.
 
 
 ### Katherine
fixed capitalization for "state"
 
 
 ### Katherine
removed James Smith's name from this question
 
 
 ### Katherine
lower cased "information" in header
 
 
 ### Katherine
Changed "Are they" to "Is your child..."
 
 
 ### Katherine
changed "Who do they live with?" to "Who does your child live with?" so there's no confusion over who "they" is.
 
 
 ### Katherine
lower cased address
 
 
 ### Katherine
updated the expandable text for plain language. Product team will need to confirm the accuracy with stakeholders.
 
 
 ### Katherine
aligned this link text to the preceding question
 
 
 ### Katherine
@Fiorella @Maya do we know how VA uses the information from this question? How does it affect the pension benefit?
 
 
 ### Katherine
fixed spelling of "currently" and added question mark
 
 
 ### Katherine
aligned this link text to the preceding question
 
 
 ### Katherine
corrected spelling of "seriously disabled"
 
 
 ### Katherine
change form labels to "Former spouse's first name," "Former spouse's middle name," etc.


</details>

<details><summary>Step 5: Financial Disclosure</summary>
https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/694C1A7E-2096-46A5-AF79-0BAEE169B065/canvas#Comment

 
 ### Katherine
@Maya I removed the instruction about reporting income ("If you leave a question blank...") from this screen since it doesn't have any fields for reporting income.
 
 
 ### Katherine
@Maya Beth Potts, one of the OCTO CAIA leads, and I simplified this instruction further.
 
 
 ### Katherine
@Maya Beth Potts, one of the OCTO CAIA leads, and I simplified this instruction further.
 
 
 ### Katherine
@Maya Beth Potts, one of the OCTO CAIA leads, and I simplified this instruction further.
 
 
 ### Katherine
I changed "your or your dependents" to "you and your dependents" for accuracy.
 
 
 ### Katherine
@Maya based on the Teams chat with pension biz stakeholders, it seems like we need to include a field that asks: 
When did you pay? 

They'll include some expenses based on when you paid. For example, burial expenses only qualify to be deducted if they're within a certain time frame. The PDF says: "Burial expenses are
unreimbursed amounts you paid for the last illness and burial of a spouse at any time prior to the end of the year following the year of death."
 
 
 ### Katherine
Question for product team: 
How should a Veteran complete and submit the additional form if they're applying for pension online?
 
 
 ### Katherine
@Fiorella @Maya do Veterans get to exclude the value of all their personal belongings, or just appliances and transportation vehicles?
 
 
 ### Katherine
flagging a change to the copy here to move the question closer to the "yes/no" options
 
 
 ### Katherine
flagging small tweaks to the options copy here
 
 
 ### Katherine
flagging small tweaks to the options copy here
 
 
 ### Katherine
updated this copy
 
 
 ### Katherine
@Maya what's the difference between the type of expense on the previous screens (hospital) and in-home care or care facility expenses?
 
 
 ### Katherine
@Maya this screen feels strange to me because we ask about a specific date that you paid, and then we ask if this payment is recurring. Could we ask the frequency first? And then if it's a one time payment, we can ask when? 
If it's a recurring payment, can we forgo the question about the payment date?
 
 
 ### Katherine
reverse the order of these options. start with one-time, end with annually
 
 
 ### Katherine
@Maya can you share the screen that asks if someone has care expenses?
 
 
 ### Katherine
changed header to "Your care expenses"
 
 
 ### Katherine
minor tweak for capitalization
 
 
 ### Katherine
minor tweak for capitalization
 
 
 ### Katherine
button text should specify "pension or service retirement income"
 
 
 ### Katherine
How much do they pay you every month?
 
 
 ### Katherine
re-phrased question
 
 
 ### Katherine
Consider making this question required and removing this paragraph.
 
 
 ### Katherine
@Maya @Fiorella can we make these questions required to avoid the assumption they have unspecified income or have no income to report? If they have no income to report, they can enter $0.
 
 
 ### Katherine
@Fiorella @Maya can we make this the first question of the gross monthly income section? Because the previous section allows you to add other monthly income, someone may think to add pension or service retirement income in the previous section.
 
 
 ### Katherine
How much do they pay you every month?
 
 
 ### Katherine
re-phrased the question
 
 
 ### Kate
@ Katherine Can this be rephrased to make more clear the question is asking about a spouse's expenses?
 
 
 ### Katherine
@Fiorella @Maya is there a reason we ask for the payment frequency, instead of asking for the yearly total?
 
 
 ### Katherine
What was the purpose of this expense? (*Required) 
Examples include doctor fees, hospital charges, attorney fees, or tuition.
 
 
 ### Katherine
Who did you pay?
 
 
 ### Katherine
@Maya - Should "entire question" say "entire section" or "entire page"? 
Right now, we say if you skip any items, we'll consider it unspecified income. But we also say if you leave the question blank, we assume you have no income to report. Skipping an item and leaving a question blank sound like the same thing.
 
 
 ### Katherine
removed definition of assets
 
 
 ### Katherine
removed definition of assets
 
 
 ### Katherine
removed definition of assets here
 
 
 ### Katherine
@Fiorella @Maya - does this page exist in the current online pension form? Just want to confirm. If so, I won't suggest any edits for it.
 
 
 ### Katherine
removed .00 cents for VA style
 
 
 ### Kate
this information along with the description of what not to include make the question hard to discover on the page, think about the content design/layout here and see if implementing other patterns makes the question more prominent.
 
 
 ### Katherine
changed header to say "Your income and assets"
 
 
 ### Kate
Think through the order of these sub steps, it may be confusing being asked a catch all other expenses question before asking a question that is specific of their care. I also see grouping all the care questions for self, spouse and dependents. Review with other sections where information is needed about multiple entities and remain consistent to what is best for your user's cognitive load.
 
 
 ### Kate
Review header consistency
 
 
 ### Kate
I do not see any of these questions as required across all the pages, is this correct that this is all optional information?
 
 
 ### Kate
Can not review this page for a11y based on layout confusion. based on previous screens no immediate concerns, please reach out if you would like to review together.
 
 
Fiorella
@Maya I only created the first page for the Veteran’s child. This page is identical as the previous 4 pages I created for the Veteran’s Spouse that has “Josh Smith’s in-home care or care facility expenses:” title
 
 
 ### Katherine
@Maya @Fiorella - just confirming, this is for expenses the Veteran already paid? Not expenses they expect to pay?
 
 
 ### Katherine
@Maya - What should a Veteran enter for provider? If they're getting in home care, should they enter the name of their care attendant, or the agency the attendant works for? 
If they're in a care facility, should they enter the name of the facility?
 
 
 ### Katherine
made "facility" lower case
 
 
 ### Katherine
removed question mark from "Type of care"
 
 
 ### Katherine
shortened all the headers in this stage to "Your care expenses" or "[name of person's] care expenses"
 
 
 ### Katherine
changed "Do you" to "Does your spouse..."
 
 
 ### Katherine
changed "Do you" to "Does your child..."
 
 
 ### Katherine
tweaking this for VA.gov
 
 
 ### Katherine
@Maya - is this question asking about non-VA pension? What are examples of "service retirement income"?
 
 
 ### Katherine
How should someone complete and submit this additional form if they're filling out the pension form online?
 
 
 ### Katherine
minor tweak
 
 
 ### Katherine
corrected spelling
 
 
 ### Katherine
tweaked this button copy because "add monthly income" sounds like a way to add the 3 previous fields
 
 
 ### Katherine
minor tweak
 
 
 ### Katherine
@Maya - What types of payments are we asking about in the "Civil Service" field?
 
 
 ### Katherine
@Maya - I'm changing this header from "Financial Disclosure" to "Financial information" on all step 5 of 7 screens. 
Is it ok if I don't input the change in this Sketch file? Is there a way to make the change simultaneously for all the screens?
 
 
 ### Katherine
@Maya - do we know if this question is asking if the Veteran or their dependents has more than 4 sources of income EACH? Or if the Veteran and their dependents have more than 4 sources of income total? Should this question also include the Veteran's spouse?
 
 
 ### Katherine
see comment on previous screen
 
 
 ### Katherine
see comment on previous screen
 
 
 ### Katherine
changed header
 
 
 ### Katherine
changed header
 
 
 ### Katherine
changed header
 
 
 ### Katherine
changed header
 
 
 ### Katherine
removed period after "Finish this application later"
 
 
 ### Katherine
re-worded this question so it's easier to read
 
 
 ### Katherine
shortening this sentence to align with VA.gov explanation of assets
 
 
 ### Katherine
shortening this sentence to align with VA.gov explanation of assets
 
 
 ### Katherine
removed period after "Finish this application later"
 
 
 ### Katherine
removed period after "Finish this application later"
 
 
 ### Katherine
removed period after "Finish this application later"
 
 
 ### Katherine
removed period after "Finish this application later"
 
 
 ### Katherine
removed period after "Finish this application later"
 
 
 ### Katherine
removed .00 cents for VA style
 
 
 ### Katherine
removed the .00 cents to align with VA style
 
 
 ### Katherine
removed period at end of "Finish this application later"
 
 
 ### Katherine
I put new copy here to clarify the information around asset transfers, but I didn't move any of the components around because I didn't to mess anything up.
 
 
 ### Katherine
minor tweaks to this copy
 
 
 ### Katherine
changed this header
 
 
 ### Katherine
changed this header
 
 
 ### Katherine
minor tweaks for plain language
 
 
 ### Katherine
changed header to "Financial information"
 
 
 ### Katherine
minor changes here to align with VA.gov style
 
 
 ### Katherine
minor tweaks for plain language
 
 
 ### Katherine
minor tweaks for plain language
 
 
 ### Katherine
changed header to "Financial information"
 
 
 ### Katherine
Question for product team: I changed this to provide clarifying information to the user. Can you confirm with stakeholders if this is accurate?
 
 
 ### Katherine
changed the header to "Financial information"
Viewed
 
 
 ### Julie
@Fiorella I listened to the 9/12 SME call & understood them to say that Service Retirement/Pension is one that needs a source (and there may be multiple entries b/c multiple sources).
They did note that they liked that it says "retirement," which I took to mean that people do well to have a prompt for retirement. I think we should handle that by adding examples of types of income in the "Additional monthly income" area -- rather than by keeping it in the group of Federal income sources.



</details>

<details><summary>Step 6: Contact Info.</summary>

 https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/15062C97-052C-489F-BD0B-D72FD0C71E73/canvas#Comment

 
 ### Katherine
changed this text to reflect the new copy of the checkbox
 
 
 ### Katherine
I changed this expanded text to make it active voice (i.e. "We automatically enter..." instead of "The United States is automatically chosen...")
 
 
 ### Kate
it seems all information requested in this section is contact information; should this step be called contact information instead? Then you can break apart these questions more easily to be:
Contact information | Mailing address
Contact information | Phone numbers
Contact information | Email
 
 
 ### Katherine
change this to match design pattern


</details>

<details><summary>Step 7: Review (we will not implement this new design)</summary>

https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/3F02808A-D2D4-4766-9C24-340D3B42FB55/canvas#Comment

No comments listed.


</details>

<details><summary>Submitted</summary>

 https://www.sketch.com/s/75b363db-6be8-4b7e-8655-8f12f1ea5554/p/E62826B1-9AF9-450D-9740-D61A29A2EB2A/canvas#Comment

No comments listed.

</details>

