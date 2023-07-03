# Decisions We've Made

* Add more links as you add more decisions
* [Significant Decisions template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/documentation/significant-decisions-template.md)

<hr>

#### Table of Contents

* Form 4142
  * [Form 4142: How limited consent is captured](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-4192-how-limited-consent-is-captured)
  * [Form 4142: Spelling of 'acknowledgement'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-4142-spelling-of-acknowledgement)
  * [Form 4142: Patient Acknowledgement is checked by default](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-4142-patient-acknowledgement-is-checked-by-default)
* Form 0781/a
  * [Form 0781/a: Ignoring 'PTSD/4' (aka 'Non-PTSD Personal Trauma')](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-0781a-ignoring-ptsd4-aka-non-ptsd-personal-trauma)
  * [Form 0781/a: Add another event, Add another individual](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-0781a-add-another-event-add-another-individual)
  * [Form 0781: Location of Medals and Citations question](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-0781-location-of-medals-or-citations-question)
  * [Form 0781: Format of Medals and Citations question](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-0781-format-of-medals-or-citations-question)  
  * [Form 0781a: Behavior Changes across multiple pages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-0781a-behavior-changes-on-multiple-pages)
  * [Form 0781a: Behavior Changes, excluding Suicidal thoughts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-0781a-suicidal-thoughts-or-tendencies)
* Form 8940
  * [Form 8940: Disabilities that are eligible](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-8940-disabilities-that-are-eligible)
  * [Form 8940: Use of the term "Substantially gainful employment"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-8940-use-of-the-phrase-substantially-gainful-employment)
  * [Form 8940: Medical Care Dates - Add another](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-8940-medical-care-dates-add-another)
* Form 4192
  * [Form 4192: New design pattern (aka: Why there's no slider)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-4192-new-design-pattern)
  * [Form 4192: Conditional content options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#form-21-4192-conditional-content-options)
* General (applicable to all forms)
  * [General: Uploading Supporting Documents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#general-document-upload-decisions)
  * [General: Summary of disabilities display](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/decisions.md#general-summary-of-disabilities-display)


<hr>

## Form 4142: How limited consent is captured

### Background and problem to solve
We had to create a way to capture a Veteran’s limited consent in the online interview for 4142 that would map to the limited consent field on the pdf when it’s created after submission.

### Constraints
1. Limited consent definition (and varying understandings)
1. Time to implement a fully researched/tested design (BAH team took over the design for 4142 from Ad Hoc team)

### Decision made
1. Create a checkbox for limited consent at the aggregate level (not by provider).  If user limits consent by checking the box then he is limiting it for a condition, or date range, NOT for a provider.
1. If the user checks the box for limited consent then a text field displays, and the user is required to input the limitation.

#### Other designs considered:
  * N/A

#### Deciding factor for our decision
  * If a user checks the box for limited consent then he must input the limitation so that whatever is typed in to that text field will be what appears in Field 12 on the actual 4142 pdf once it is created upon submission.

### Deciders
Andrea (DSVA Product Manager), Paul Shute, BAH team 

### When to revisit this decision
TBD

<hr>

## Form 4142: Spelling of ‘acknowledgement’

### Background and problem to solve
There are two acceptable spellings for ‘acknowledgement’.  This word is presented multiple times during the 4142 interview. 

### Constraints
1. N/A

### Decision made
1. Use ‘acknowledgement’- The Patient Acknowledgement content that you and the team developed looks good. Also, prefer the acknowledgement spelling that uses the “e”: “acknowledgement.” (per Paul Shute)

#### Other designs considered:
  * N/A

#### Deciding factor for our decision
  * This is what the business decided

### Deciders
Andrea (DSVA Product Manager), Paul Shute 

### When to revisit this decision
N/A

<hr>

## Form 4142: Patient Acknowledgement is checked by default

### Background and problem to solve
In the 4142 online interview, the user is presented with the option to manually upload their private medical records or the option for the VA to get their private medical records for them. When the user selects the option for the VA to get their private medical records, then they must accept the Patient Acknowledgement in order to proceed. 

### Constraints
1. Originally, there was concern around the fact that part of the Patient Acknowledgement included verbiage around the fact that the Veteran could be charged a fee for the VA to get their records, but this is FALSE.  If the VA gets the Veteran’s private medical records then the VA pays any fees associated, NEVER the Veteran.

### Decision made
1. To always default the Patient Acknowledgement to being checked.  If the Veteran unchecks it for some reason then they cannot proceed.

#### Other designs considered:
  * See Story #15444

#### Deciding factor for our decision
  * There was not time in our delivery schedule to implement a new page for the Patient Acknowledgement, or change it to be an active (vs passive) experience for the user

### Deciders
Andrea (DSVA Product Manager), Paul Shute 

### When to revisit this decision
Post January 2019 launch 

<hr>

## Form 0781/a: Ignoring 'PTSD/4' (aka 'Non-PTSD Personal Trauma')

### Background and problem to solve
PTSD/4 is the special issues code specific to Non-PTSD Personal Trauma.  This was not in scope to be included to the list of PTSD types presented to the user in the 0781/a online interview because it is assigned to disabilities other than PTSD .

### Constraints
1. N/A

### Decision made
To only display 4 options for PTSD in the online interview: 
1.	Combat = PTSD/1
1.	Sexual trauma = MST 
1.	Personal assault = PTSD/3 
1.	Non-combat PTSD other than sexual trauma or personal assault = PTSD/2

#### Other designs considered:
  * N/A

#### Deciding factor for our decision
  * The 0781/a online interview is only to capture the details for a new PTSD claim.  In this case the PTSD special issue code is misleading. 

### Deciders
Paul Shute 

### When to revisit this decision
N/A

<hr>

## Form 21-0781/a: Add another Event, Add another Individual

### Background and problem to solve

The current system design does not allow for the Veteran to enter an undetermined array of “stressful incidents” nor “individuals involved” through a guided interview.

### Constraints

The system does not allow for looping and it requires the array count to be specified.  

### Decision made

For the first iteration of 21-0781 and 21-0781a, we will provide the guided interview for up to 3 events (in a predetermined array) and then encourage Veterans to describe additional events in a single textbox.  

For the first iteration of 21-0781, we will collect information about individuals involved in the incident using the “Add another” pattern.

### Other designs considered:

* N/A

### Deciding factor(s) for our decision

* Current forms allow for 2 stressful events and 2 individuals per event.  The decision expands on that, allowing for guided interview for up to 3 events, and provides specific prompts if there are >3 events. 

### Deciders

Andrea Schneider, DSVA. Paul Shute, VBACO.

### When to revisit this decision

ASAP. 

<hr>

## Form 21-0781: Location of Medals or Citations Question

### Background and problem to solve

The question “Have you received a medal or citation for this event” appears at the beginning of the 21-0781 incident interview flow.  It was placed here anticipating that eventually the response to the question will allow the Veteran to bypass all questions about the incident if they’ve received specific medals or citations.  

However, during our testing with Veterans who do not have PTSD, we heard the question, “Why are you asking this question first?” on more than 1 occasion.  The test participants were concerned that the Veterans filing PTSD claims could experience survivors guilt when presented with this question.   

Note that none of the Veterans with PTSD that we tested with expressed this specific concern. 

### Constraints

Time.  The testing sessions where this finding presented were the follow-on testing for the “Tech MVP Approach” with the revised Incident / Individual interview.  When we launched that testing, the team was aware that significant changes to the forms would be addressed post-launch.   

### Decision made

The question was rephrased to be less jarring.  It now leads with the reason why the question is asked: “To help us research your claim, please let us know the names of any medals or citations you received for the event.”

### Other designs considered:

* N/A

### Deciding factor(s) for our decision

* We managed the decision to update the content of the specific question and not rework the entire flow based on time available for the effort.  

### Deciders

Andrea Schneider, DSVA. Booz Allen Team: Amy Knox, Theresa McMurdo, Cindy Cruz.

### When to revisit this decision

The location of “Medals or Citations” in the interview flow should be readdressed when the logic to by-pass interview questions based on the response can be built.  

<hr>

## Form 21-0781: Format of Medals or Citations Question

### Background and problem to solve

With some Veterans having served across multiple branches and possibly being awarded medals and citations from these different branches, it is important to simplify how they input this information into their application.

Initially, we wanted to make this process easier for Veterans by using a dropdown checklist in the UI where they could select 1 or more options. Due to restrictions with the system design, it was necessary to strip back the UI around the “Medals or citations page” to instead allow Veterans to input their decorations into a free-text field. 

### Constraints

The system does not allow for a dropdown checkbox where users may select 1 or more options. 

### Decision made

For the first iteration of 21-0781, we will permit Veterans to input any relevant decorations they received into a free-text field. 

### Other designs considered:

* Dropdown checklist

### Deciding factor(s) for our decision

* The proposed design pattern of a dropdown checklist would be considered a new design pattern, as it does not currently exist in the Vets.gov pattern library. DSVA did not approve the new pattern and preferred a simpler approach.

### Deciders

Andrea Schneider, DSVA. Alex Taylor, Ad Hoc. Booz Allen Team: Amy Knox, Theresa McMurdo, Cindy Cruz.

### When to revisit this decision

When possible.

<hr>

## Form 21-0781/a: Behavior Changes on Multiple Pages

### Background and problem to solve

Question 12 on the 21-0781a paper form provides examples of behavior changes Veterans may experience following their incident, followed by a remarks area where they may provide details. 

When we translated this to the digital form, we first tried showing sample behavior changes in the helper text and providing a dropdown-checklist which allowed users to select all behavior changes that applied to them. 

The UI became complicated and ultimately we chose to display the behavior changes in categorized groupings over several pages. 

### Constraints

* The system does not allow for a dropdown checkbox where users may select 1 or more options.
* Having all of the behavior changes on one page may not provide the most user-friendly experience. 

### Decision made

For the first iteration of 21-0781a, we will provide Veterans with categorized lists of behavior changes presented across several pages, in addition to the option of selecting that none of those changes apply to them. 

For the first iteration of 21-0781a, for Veterans who may have one or more changes that are not listed, they are offered an “Other” option and may input their info in a free-text field.

### Other designs considered:

* Dropdown checklist
* Helper text content

### Deciding factor(s) for our decision

* The proposed design pattern of a dropdown checklist would be considered a new design pattern, as it does not currently exist in the Vets.gov pattern library. DSVA did not approve the new pattern and preferred a simpler, more user-friendly approach.
* Due to the sensitive nature of the content, guiding users through categories of changes is preferred to having all of the behavior changes listed on one page. 

### Deciders

Liz Hunt, DSVA. Alex Taylor, Ad Hoc. Booz Allen Team: Amy Knox, Theresa McMurdo, Cindy Cruz

### When to revisit this decision

N/A

<hr>

## Form 21-0781/a: Suicidal thoughts or tendencies

### Background and problem to solve

When Veterans testing the Form 21-0781a prototype reviewed the Behavior Changes, they wondered why “Suicidal thoughts or tendencies” was not included as a behavior change.  

### Constraints

This concept had been explored prior to Booz Allen joining the project. It was decided that including questions such as “suicidal thoughts or tendencies” as a behavior change would create an incorrect expectation that the VA could identify these instances quickly and respond directly to individuals when this behavior change was selected as part of the 21-0781a filing.   

### Decision made

For this iteration, we will not include “suicidal thoughts or tendencies” as a behavior change.   

### Other designs considered:

* N/A

### Deciding factor(s) for our decision

* Previous conversations on resourcing & capacity.  
* The 21-0781a application does display detailed Veteran Crisis Line contact information multiple times throughout the interview process. 

### Deciders

Andrea Schneider, DSVA. Paul Shute, VBA.

### When to revisit this decision

When possible. 

<hr>

## Form 8940: Disabilities that are eligible 

### Background and problem to solve
A Veteran needs to select disabilites that would contribute to applying for Individual Unemployability. We want to determine which disabilities to display to the Veteran.  

### Constraints
In the current application, we access previously rated disabilities and new disabilities the Veteran has identified during the process of this application. We do not access pending claims decisions, which could be a factor in applying for Individual Unemployability. 

### Decision made
For the first iteration of 8940, it is okay to offer only previously rated disabilities and newly claimed disabilities.

### Other designs considered:
  * N/A

### Deciding factor for our decision
  * While it is important to provide the Veteran with all options to select (previously rated disabilities, newly claimed disabilities, and pending disabilities), it is more important to launch the application without delay and incorporate the pending disabilities in an iteration shortly after launch. Keep this requirement in the backlog for future implementation.

### Deciders
Andrea (DSVA Product Manager), Paul Shute (Chief of Operational Innovation, VBA), BAH team (12/27/2018)

### When to revisit this decision
We will revisit including Pending Claims after January 2019 launch

<hr>

## Form 8940: Use of the phrase “substantially gainful employment”

### Background and problem to solve
The phrase “substantially gainful employment” appears within Form 21-8940 and is used throughout M21-1, Part IV, Subpart ii, Chapter 2, Section F - Compensation Based on Individual Unemployability (IU). Article ID: 554400000014564 https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000014564/M21-1-Part-IV-Subpart-ii-Chapter-2-Section-F-Compensation-Based-on-Individual-Unemployability-IU

To ensure that Veterans are providing accurate information, we need to include the phrase “substantially gainful employment” even if it is not plain language. 

### Constraints
All VA forms are written in plain language.  

### Decision made
We will use the term “substantially gainful employment” in the content of the form and provide helper text in close proximity that explains the phrase in plain language.  

### Other designs considered:
  * N/A

### Deciding factor for our decision
  * VSO’s and Veterans we interviewed were keenly aware of the phrase ‘“substantially gainful employment” and concerned when it was not part of the language used in the prototype we tested. 

### Deciders
Peggy Gannon, (AdHoc). Booz Allen team.

### When to revisit this decision
N/A 

<hr>

## Form 8940: Medical Care Dates (Add Another)

### Background and problem to solve
Many Veterans who file Form 21-8940 have more than one treatment date for each provider or hospital they enter on the form. The fillable PDF allows for 6 from- to- dates of care. These dates are not clearly associated with either hospitalization or physician’s care.  

We could not use the “Add another” pattern for the dates as it was already in play with “Add Another provider. And we did not want Veterans to have to enter the provider(s) multiple times to capture multiple dates so we implemented a free text box to allow Veterans to enter all treatment date(s) for each provider.  

Unfortunately, the text box solution we implemented to capture treatment dates does not fill the Dates of Care fields in the PDF sent to VBMS.  

### Constraints
The system does not allow for the entering of multiple treatment dates for each doctor or provider. 

The system does not allow for “loop within a loop” which would allow for “Add another date” within the Add a Hospital / Add a Provider steps of the interview.

### Decision made
  * Use text box as input for dates of care; post input in Dates of Care text box to overflow section of PDF sent to VBMS.

### Other designs considered:
  * Ask for from/to date ranges along with provider or hospital details with the option to Add Another date and Add Another Provider
  * Ask Veterans for the name and address details of their doctor and hospital while giving them the option of adding as many as they need to. For each doctor or hospital that is entered, the system will then display follow-up pages where users may enter as many dates as they need to.

For the first doctor that is entered, the provider info will be output to the corresponding field on the pdf. Any additional doctors will be written to the overflow page. The first 6 date ranges entered will be output to their corresponding fields on the PDF, and anything else will be written to the overflow page. The same applies to hospitals entered. 

### Deciding factor for our decision
  * Ease of use. This solution allows Veterans to enter as many doctors, hospitals, and date ranges.

### Deciders
Booz Allen team

### When to revisit this decision
When possible.  

<hr>

## Form 21-4192: New Design Pattern

### Background and problem to solve
Our research indicated that many users experience confusion with filling out VA Form 21-4192 due to the involvement of third parties. We created a page of instructions to guide users through the process of completing this form. 

After considering and presenting several design concepts for the content and UI, a slider concept was selected that users could swipe through to see the instructions in “steps.”  This new design concept also included the use of thumbnail images, which weren’t present on other VA.gov forms. 

Testing quickly revealed that novice users missed the contents of the slider as their tendency is to click the more prominent Continue button, rather than the slider’s navigational controls. 

A standard approach of displaying the content in flat html pages and allowing users to click the “Continue” button to advance through the content was chosen to support a better user experience.   

### Constraints
Novice users tended to miss the slider navigation and contents. They tended to scroll past the controls and click the visually dominant Continue button at the bottom of the page. 

### Decision made
For the first iteration of 4192, we will provide users with instructional images and content that is distributed across several pages, and that is aligned with existing forms on VA.gov. 

### Other designs considered:

* Accordion
* Slider
* Modals

### Deciding factor(s) for our decision
* The current design allows for users to be guided through instructional content and images while providing helper content—where necessary, and not interfering with pre-existing navigation on VA.gov.

### Deciders
Alex Taylor (AdHoc UX Designer), Liz Hunt (DSVA). Booz Allen team. 

### When to revisit this decision
N/A

<hr>

## Form 21-4192: Conditional Content Options

### Background and problem to solve
On the 4192, our team wanted to ensure users can view all options on the 4192, particularly if they change their mind after selecting only “Review Instructions” or only “Download the Form” on the first page of the flow. 

Previously, for users that selected 2 or fewer options on the introduction page, they would be unable to view the other options they completed those sections unless they went back to the beginning of the application. 

### Constraints
The system does not allow for users to loop through the form nor can we create links to other pages within the form. 

### Decision made
We created a screen that lists conditional items based on what the user has already seen in the application. 

A page will appear at the end of the application interview and before the exit/thank you page with conditional options that display based on what the user selected on the intro page.

### Other designs considered:
  * If user exits application, when logging back in, they could be prompted to see the guide, upload or download the form, or be done with the 4192.

### Deciding factor(s) for our decision
  * The current design gives users a second chance to take other actions in the 4192 flow without having to use the “Back” button to return to the beginning of the application. 

### Deciders
Alex Taylor (AdHoc UX Designer). Booz Allen team. 

### When to revisit this decision
N/A

<hr>

## General: Document upload decisions

### Background and problem to solve
There are various places to upload documents during the online interview for 4142, 0781/a, 8940/4192.  The user experience should be consistent across forms.

### Constraints
1. N/A

### Decision made
1.	Document/File name will not be editable by the user- the file name when uploaded is what will appear in the application
1. Document type dropdown will be filtered based on where the user is in the workflow
1. IF the user is at the point in the 0781, 0781a, 8940, 4192 interview where they are asked to specifically upload a COMPLETED VA Form [0781, 0781a, 8940, 4192], then the document type will be automatically defaulted to the official VA Form name and not editable
1.	Document type dropdown on supporting doc upload page (within 4142, 0781a and 8940 interviews): Removed Multiple Documents because there could not be Multiple Documents and Other mapping to the same L023 code 

### Other designs considered:
  * N/A

### Deciding factor for our decision
  * These decisions were made during several of our stakeholder meetings, except for # 4.  That was made during development due to a technical limitation.

### Deciders
Paul Shute, Andrea Schneider, BAH team

### When to revisit this decision
Post January 2019 launch

<hr>

## General: Summary of disabilities display 

### Background and problem to solve
After a user enter/selects PTSD as a new condition in the 526 flow, they are taken through the 0781/a online interview accordingly.  After completing the online interview we display a summary page to reiterate the conditions/disabilities that they just told us about.

### Constraints
1. N/A

### Decision made
1.	Nesting the PTSD types under the original condition entered by the user (screenshot below)


    ![pasted graphic](https://user-images.githubusercontent.com/41083101/51220127-053ca400-1902-11e9-9797-9e2b37c93a19.jpg)

### Other designs considered:
  * N/A

#### Deciding factor for our decision
  * These decisions were made by the BAH team as it was the best way to display to the user what PTSD type(s) they just entered

### Deciders
BAH team

### When to revisit this decision
Post January 2019 launch

<hr>


