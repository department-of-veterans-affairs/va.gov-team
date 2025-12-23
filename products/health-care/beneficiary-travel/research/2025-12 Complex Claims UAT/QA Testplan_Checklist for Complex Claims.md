# Quality Assurance (QA) Test Plan for Complex Claims 

### **Introduction**

This document serves as a guideline geared towards QA testing for the Complex Claims features that will be implemented and going through the Staging Review process

### **Feature Description**

Complex Claims release will add functionality for Travel Claims for the [VA.gov](http://VA.gov) website. This functionality adds more variance to the expense types as well as document upload.

### **Goals of this Test Plan**

Verify features are working as intended as well as perform regression testing and accessibility testing to ensure there is enough validation to pass Staging Review without finding critical issues that will impact the end user experience negatively

## **Scope of Testing**

### **In Scope**

* Starting a complex claim from a past appointment  
* Adding expense types and documentation  
* Canceling adding expense types and documentation  
* Editing expense types and documentation  
* Canceling editing expense types and documentation  
* Deleting expense types and documentation  
* Canceling deleting expense types and documentation  
* Leaving and re-entering an unsubmitted claim  
* Submitting a claim for travel reimbursement  
* BTSSS redirect in the case that a claim contains unassociated documents  
* BTSSS redirect in the case that a claim was started in BTSSS  
* User entry errors  
* System errors

### **Out of Scope**

* Appointments that are ineligible for travel pay (e.g. virtual appointments and community care appointments)  
* Direct Deposit set up cases

## **Testing Objectives**

* To verify that all functional requirements of complex claims MVP are met  
* To identify and report any defects or issues with complex claims or from Regression Testing  
* To confirm that existing functionalities are not affected from the new added functionality by Complex Claims  
* To document validation from a functional, regression, and accessibility testing guideline to ensure successful Staging Review acceptance

## **Test Environment & Setup**

### **Test Environment**

You must access the [VA.gov](http://VA.gov) website on a web browser for testing purposes. The environment will be the staging environment and the URL is below. There will be credentials to use from test users within this environment.

Environment URL: [Staging.va.gov](http://Staging.va.gov)

### **Test Data Requirements**

Test users with the following configurations are required:

* 1 provider available for scheduling  
* 2 or more providers available for scheduling  
* No providers available for scheduling  
* No relationships with any providers  
* Test user eligible for travel pay with 1 in-person appointment at a VA facility that occurred within 30 days(may not need travel pay eligibility for testing)  
* Test user eligible for travel pay with 1 in-person appointment at a VA facility that occurred over 30 days ago(may not need travel pay eligibility for testing)  
* Test user with 1 in-person appointment at a VA facility that occurred within 30 days, in which the expenses and files have become disassociated  
* Test user with 1 in-person appointment at a VA facility that occurred within 30 days, in which the expenses and files have become disassociated with an appointment over 30 days old  
* Test user with 1 in-person appointment at a VA facility that occurred within 30 days, in which the claim was started from BTSSS  
* Test user with 1 in-person appointment at a VA facility that occurred over 30 days ago, in which the claim was started from BTSSS

Started in VA.gov: 

* 20 appointments inside 30 days, started in VA.gov, all files associated (recall that we need to submit at least 9 claims in order to test all the various expense types, so 20 doesn't sound unreasonable)   
* 3 appointments inside 30 days, started in VA.gov, with **disassociated** files  
* 5 appointments **outside** 30 days, started in VA.gov, all files associated  
* 3 appointments **outside** 30 days, started in VA.gov, with **disassociated** files

Started in BTSSS (all of these scenarios should show alerts directing you back to BTSSS to finish your claim, but alert will vary if it's over or under 30 days): 

* 5 appointments inside 30 days, started in BTSSS, all files associated  
* 3 appointments inside 30 days, started in BTSSS, with **disassociated** files  
* 5 appointments **outside** 30 days, started in BTSSS, all files associated   
* 3 appointments **outside** 30 days, started in BTSSS, with **disassociated** files

### **Test Users**

The user wants a table with 3 columns and an unspecified number of rows to be inserted at the cursor position, which is under the "Test Users" heading. Given the surrounding context of a QA Test Plan, the table should be structured to list test user credentials or personas relevant to the complex claims testing. Since specific user credentials are not available, the table structure will be generated with placeholder content for Test User information. Testers will access the [Staging.Va.Gov](http://Staging.Va.Gov) website and select “[ID.Me](http://ID.Me)” as the login type and proceed to enter test user credentials to log in.

| Test User  | Role/Persona | Username | Password | Scenarios to Test |
| :---- | :---- | :---- | :---- | :---- |
| **Noelle Barakat** | Veteran with existing claims and direct deposit | Nollebarakat@gmail.com | Btsss123\!@\# | TBD |
| **Judy Morrison** | Veteran with no prior claims or direct deposit set up | Judy.morrison@id.me | Password1234\! | TBD |
| **TBD** | Veteran with an incomplete claim over 30 days old |  |  | TBD |

## **Test Strategy & Approach**

### **Types of Testing** 

* Smoke Testing: Quick tests to ensure the most critical functions work before detailed testing.  
* Functional Testing: Verifying each function of the software as specified in the requirements.  
* Negative Testing: Testing edge cases such as invalid data, forward/back buttons at any point of flow to break the system to see how error handling behaves  
* Compatibility Testing: Testing on different browsers, devices, and operating systems.  
* Regression Testing: Ensuring existing functionality is not broken by new changes.  
* Accessibility Testing: Ensuring the feature is usable by people with disabilities.

### **Validation Approach**

**Manual Testing**

* These features will be manually tested from member(s) of the Travel Pay team closely aligned to the introduction of these features which may  include DEV, QA, UX, PM resources to conduct the testing effort  
* This testing will be based on the functionality meeting acceptance criteria for the development tickets associated with this [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126761)  
* This testing will also look to validate the [Complex Claims Figma Designs](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51243&t=3Fk8LgLajWLH38cX-1)  as documented from a workflow user perspective


**Accessibility testing**

* As per guidelines for [accessibility testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/accessibility-testing-checklist.md) from the VA Platform team to test if it meets those guidelines with the use of dev tools and some extensions within web browsers

# Testing Checklist Complex Claims 

Acceptance criteria to validate will be derived from this github ticket [Frontend Complex Claims](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126761)

[Add link logic on appointment details page \#124862](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124862)  
[Design Reference](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-52156&t=VfOl8NjyBl027E5A-0)  
Acceptance criteria

- [ ] New claim  
      - [ ] Link at the top says: "File a travel reimbursement claim"  
      - [ ] Link at the bottom says: "File a travel reimbursement claim"  
      - [ ] Link navigates user to Travel Pay Intro page  
- [ ] Existing claim, no expenses (aka Incomplete claim)  
      - [ ] Link at the top says: "Complete your travel reimbursement claim"  
      - [ ] Link at the bottom says: "Complete and file your claim"  
      - [ ] Link navigates user to expense selection page  
- [ ] Existing claim, at least 1 expense (aka Saved claim)  
      - [ ] Link at the top says: "Complete your travel reimbursement claim"  
      - [ ] Link at the bottom says: "Complete and file your claim"  
      - [ ] Link navigates user to claim review page  
- [ ] (regression) Submitted claim  
      - [ ] No link at the top  
      - [ ] Link at the bottom says: "Check your claim status"  
      - [ ] Link navigates user to claim detail page

[Content Updates \- 11/17/2025 \#125480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125480)

[Design Reference](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51243&t=6HzA6sBqcI6imWlA-1)

Intro Page

- [ ] Content change “To be eligible for travel pay” instead of “reimbursement”  
- [ ] Change "Travel pay" from "General health" in Step 3  
- [ ] Confirm that all links work. The only link that should open in a new tab is the BTSSS link. 


[Integration: Intro \#122763](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122763)

- [ ] Show link to continue if expense  
- [ ] Show link to start if \~claim or claim && \~expense  
- [ ] Create claim if \~claim and user clicks continue  
- [ ] Show error if API fail

Add mileage expense

- [ ] I can select a mileage expense from the list of expenses  
- [ ] I can select any combination of radio buttons  
- [ ] Selecting another address and/or one way result in a message to go to BTSSS  
- [ ] The selections I made appear on the “Your unsubmitted expenses” page  
- [ ] The mileage expense card in the accordion on the “Your unsubmitted expenses” page always says (1) in the header, reflecting only 1 mileage expense

[Expense Selection \#115832](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115832)

[Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8204-35764&t=Ci13h5UhZne9mx8f-4)

[Design for only 1 mileage (b/c we only allow round trip mileage in this iteration)](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8197-35518&t=Ci13h5UhZne9mx8f-4)

- [ ] I can choose from the expense types selected on the screen  
      - [ ] Only 1 expense is selected at a time  
- [ ] I can click a back button and go back to the intro page.  
- [ ] I can click a continue button to the next page (navigation unavailable until expense pages are created)  
- [ ] I will see an error if I attempt to continue without making a selection.

[Edit (and cancel editing) mileage \#122784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122784)

[Design Reference](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8197-29821&t=EEqHWbcON5j3RCYB-4)

- [ ]  I can click on "Edit" from the review page to edit my expense types of different permutations  
- [ ] When I click "edit" on the review page, I am taken to the same page as when I entered my mileage, but with my options chosen  
      - [ ] This will only be possible for round-trip/one-way  
      - [ ] Address is not saved as part of expense request to API  
- [ ] When I edit my mileage expense, and I click "Save and continue", I am taken back to the review page  
- [ ] When I click the "Cancel" button, takes you back to the review page  
- [ ] When I select "one way" or "different address" or both, I get a message directing me to the portal to finish my claim.

[Add mileage description to expense selection page \#125017](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125017)

[Design Reference](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51680&t=6HzA6sBqcI6imWlA-1)

- [ ] Content is added to the mileage radio button \- "You can submit 1 mileage expense for this claim." and appears on all expense list pages.

Add a parking; toll; public transportation, taxi, or rideshare; airfare; lodging; meal; and other expense type (try each once)

- [ ] On the expense selection page, I can select an expense from the list of expenses.  
      - [ ] Mileage should only let you add 1 mileage expense to your claim. If you try to add a 2nd mileage expense to your claim, you will see an [error](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9764-76672&t=p0BIVjAiIL3ybT3i-1).  
      - [ ] All other expense types should let you create infinite expenses for that expense type \- test that you can add multiple expenses for each expense type.   
      - [ ] I cannot select multiple expense types at once.  
      - [ ] If I try to Continue without selecting an expense, I see an [error.](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9764-76866&t=p0BIVjAiIL3ybT3i-1)  
- [ ] On the expense creation page, I can enter data in all the fields.  
      - [ ] I can upload files that match the supported file types (try once with each supported file type)  
      - [ ] I **cannot** upload files that do not match the supported file types (check that you get an [error](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9764-80405&t=p0BIVjAiIL3ybT3i-1))  
      - [ ] I **cannot** upload a file more than 5 MB (check that you get an [error](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9764-80405&t=p0BIVjAiIL3ybT3i-1)).  
      - [ ] I can add a file with a super long name.  
      - [ ] I can add a file type with weird characters in the name  
- [ ] Errors display correctly when I enter illogical or poorly formatted data (see [Figma](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9764-77458&t=p0BIVjAiIL3ybT3i-1) for errors; we could spell out all the errors here or let the tester reference Figma for all the ways the user can enter erroneous data)  
- [ ] The selections I made appear on the “Your unsubmitted expenses” page.  
      - [ ] The expense card in the accordion on the “Your unsubmitted expenses” page accurately reflects the number of expenses you’ve entered for that expense type in parenthesis. 

Clicking “Back” or breadcrumb while creating an expense

- [ ] If I click the Back button at the bottom of the screen or the breadcrumb at the top of the screen…  
      - [ ] If I’m on the expense selection page or the add expense page, I will see a modal saying “**Leave page?** If you leave, you'll lose any changes you made to this expense.”  
      - [ ] If I’m on the “Your unsubmitted expenses” page, I will not see this modal.  
- [ ] If I click the back button, I’ll be brought to the previous page I was on.  
- [ ] If I click the breadcrumb button…  
      - [ ] If I was on the form Introduction page, I'll be taken back to my appointment detail page.  
      - [ ] If I was on any other page, I’ll be taken to my list of travel claims.

Edit (and cancel editing) other expense types

- [ ] I can click on "Edit" from the review page to edit a parking; toll; public transportation, taxi, or rideshare; airfare; lodging; meal; and other expense type. (Try once with each expense type.)  
- [ ] When I click "edit" on the review page, I am taken to the same page as when I entered that expense, but with my data displayed in the fields.  
- [ ] I can edit my document  
      - [ ] I can click “Change file” to choose a new file. This will replace my existing file and show the new file name on the review page.  
      - [ ] I can click “Delete” to delete my file. When I delete my file, I cannot continue until I’ve added a new file.   
- [ ] When I edit my expense, and I click "Save and continue", I am taken back to the review page with my edits made.  
- [ ] When I click the "Cancel" button, I am taken back to the review page with NO edits made.

Deleting expenses

- [ ] I can click on "Delete" from the review page to delete any expense type. (Try once with each expense type.)  
- [ ] I see a modal window:  
      - [ ] For mileage expenses, I see a modal that says “This will delete your **mileage** expense.”  
      - [ ] For all other expense types, I see a modal that says “This will delete your \[**date**\], \[**amount**\] \[expense type\].”  
- [ ] When I click “Keep expense,” I am brought back to the “your unsubmitted expenses” page, with my expense still present.  
- [ ] When I click “Delete”, I am brought back to the “your unsubmitted expenses” page, with my expense deleted.  
- [ ] My estimated reimbursement total in the gray card at the bottom of the page is updated to reflect the expense deletion. 

Empty state

- [ ] If I delete every expense, I see a [blank review page](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8494-36007&t=p0BIVjAiIL3ybT3i-1).   
      - [ ] Note that the button should change from a white “Add more expenses” button to a blue “Add expenses" button.

Estimated expenses are calculated correctly

- [ ] Every time I add an expense and am taken to the “Your unsubmitted expenses” page, I see the amount I entered in the “amount requested” field for that expense type in the gray box at the bottom of the page.  
- [ ] If I have more than one expense for a given expense type (e.g. 2 parking expenses), the bullet point for that expense type sums up all the “amount requested” fields for both of/all of those expenses.  
- [ ] The total below the bullet points accurately sums up each of the bullet points above it.  
- [ ] If I edit the “amount requested” for my expense types, the appropriate bullet point changes and the total below the bullet points also changes.  
- [ ] Note: there should not be a way for the user to edit their mileage reimbursement, as that is auto-calculated. 

[Travel Pay \- Expense Page, Choose Expense Type Page and Agreement Page Updates \#124809](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124809)

[Expense page design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51768&t=CankMMtYo0BaoNNS-0)

[Choose Expense Type Page Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51680&t=CankMMtYo0BaoNNS-0)

[Agreement Page Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51658&t=CankMMtYo0BaoNNS-0)

- [ ] Expense page is updated and matches figma designs  
- [ ] Choose Expense Type page is updated and matches figma designs  
- [ ] Agreement page is updated and matches figma designs

[Travel Pay \- Mileage Page \- Add unsupported option logic \#124800](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124800)

[Figma Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9119-70903&t=Zcm91WMnOaevIoI6-0)

- [ ] When a user selects Another Address radio option and then clicks continue they will see the [unsupported option logic](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9119-70903&t=p0BIVjAiIL3ybT3i-1)  
- [ ] When a user selects One way radio option and then clicks continue they will see the same [unsupported option logic](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9119-70903&t=p0BIVjAiIL3ybT3i-1)  
- [ ] When a user selects BOTH One way and Another address and clicks continue they will see the same [unsupported option logic](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9119-70903&t=p0BIVjAiIL3ybT3i-1)  
- [ ] When a user selects the address and Round trip radio options and then clicks continue they will NOT see the unsupported option logic  
- [ ] Clicking “Back” allows them to get back to the mileage expense page

[Upload File \#121480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121480)

[Figma Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51736&t=he8HzxMn0krCWeER-1)

- [ ] The following information exists on the page  
- [ ] Document Upload Component  
- [ ] How to upload files additional information drop down

[Claim details error alert \#124596](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124596)

[Figma Design](https://www.figma.com/design/RJ6OVm0MWD2WprVfO7E3lp/Travel-reimbursement-status-page?node-id=5387-9320&t=6L29M3qS63o4CMmV-1)

- [ ] For failing claim details calls, the page will show an error alert matching designs

[Resume an unfinished claim \#124336](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124336)

[Figma Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9294-69883&t=oZWPetVkOfwV97xO-4)

- [ ] Saved claim  
      - [ ] under 30 days  
            - [ ] Content indicating "saved expenses" & call to action  
            - [ ] Link to continue claim  
                  - [ ] navigates to review page  
      - [ ] over 30 days  
            - [ ] Same content, link as "under 30 days"  
            - [ ] [Yellow warning box](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9294-69885&t=f6oLOJOn1RXOKVe5-4) cautioning them about probably denial  
- [ ] Incomplete claim  
      - [ ] under 30 days  
            - [ ] [Content](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9294-69886&t=f6oLOJOn1RXOKVe5-4) indicating incomplete claim  
            - [ ] Link to continue claim  
                  - [ ] navigates to expense selection page  
      - [ ] over 30 days  
            - [ ] Same content as "under 30 days"  
            - [ ] [Yellow warning box](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9294-69885&t=f6oLOJOn1RXOKVe5-4) cautioning them about probably denial

[Redirect/Route protection logic \#124909](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124909)

[Data Flow Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122765#issuecomment-3468000785)

- [ ] A component exists that is rendered at the :claimId index that will redirect them to a valid page based on their complex claim state  
- [ ] There is logic on the intro page component to redirect to /choose-expense if the claim exists and there are no expenses  
- [ ] There is logic on the intro page component to redirect to /review if the claim exists and there are expenses

[Unsupported mileage page \#124445](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124445)(May be covered under the sections above)

[Figma Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9119-70903&t=MFsKxJLVc7MeHKEM-0)

- [ ] An "unsupported mileage" page exists that matches [the designs](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9119-70903&t=MFsKxJLVc7MeHKEM-0)  
- [ ] Selecting "another address" or "one way" on the Mileage expense page takes them to this page upon clicking continue  
- [ ] Clicking back on the new page allows them to get back to their mileage expense page  
- [ ] 

[Mileage Expense Review \#122047](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122047)(May be covered under other tickets above)

[Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8197-26982&t=Ci13h5UhZne9mx8f-4)

- [ ] I should see an accordion specific to mileage expense review  
- [ ] I should be able to edit my mileage expense  
- [ ] I should see details about my mileage expense as described in the designs  
- [ ] I should see an estimated mileage reimbursement amount (in dollars) and a total estimated reimbursement amount (in dollars) on the estimated reimbursement box.

[Mileage page \#121834](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121834)  
[Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8197-29821&t=pYeckJxcVcuhjoyM-4)

- [ ] Page displays radio buttons need for mileage expense  
- [ ] User can select departure address (home address or another address)  
- [ ] User can select trip type (round trip or one way)  
- [ ] Special navigation flows for "another address" and "one way" selections  
- [ ] Continue/back navigation buttons  
- [ ] Unit tests created & pass

[Travel Agreement Page \#121984](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121984)  
[Designs](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8197-26862&t=aNQG0FUFFybCjJAi-4)  
[Question about the separation of this statement to its own page](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf?node-id=8197-26862#1465830682) 

- [ ] I should be able to read the travel agreement statement  
- [ ] I should be able to check and uncheck the attestation box  
- [ ] I should be able to submit my claim if the attestation checkbox is checked  
      - [ ] I should NOT be able to submit my claim if the attestation checkbox is NOT checked

[Confirmation Page \#121399](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121399)

[Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=7896-21661&t=oeAHQ444RY4PDQyb-0)

- [ ] The following information exists on the page  
      - [ ] Title  
      - [ ] Confirmation alert (green box)  
      - [ ] “Print this page for your records” button  
      - [ ] “Submitted expenses” accordions opens and displays all expenses as created by the user  
      - [ ] What happens next section  
            - [ ] Ensure all links work
   

- [ ] Action link "Review" instead of "View"  
- [ ] Direct deposit link: “travel pay” instead of “travel reimbursement”  



Need help/footer

- [ ] Ensure all links work

Submit:

- [ ] Claims for which the appointment is **within** 30 days  
      - [ ] At least one claim that has mileage **only**  
      - [ ] At least one claim with parking expenses **only**  
      - [ ] At least one claim with tolls expenses **only**  
      - [ ] At least one claim with public transportation, taxi, or rideshare expenses **only**  
      - [ ] At least one claim with airfare expenses **only**  
      - [ ] At least one claim with lodging expenses **only**  
      - [ ] At least one claim with meals expenses **only**  
      - [ ] At least one claim with other travel expenses **only**  
      - [ ] At least one claim that has **ALL** expense types  
- [ ] Claims for which the appointment is **older than** 30 days  
      - [ ] At least one claim that has mileage **only**  
      - [ ] At least one claim that has any combination of other expenses  
- [ ] Devices and OS  
      - [ ] At least one claim on a mobile device  
            - [ ] At least one iOS  
            - [ ] At least one Android  
      - [ ] At least one claim on a desktop device  
            - [ ] At least one Mac  
            - [ ] At least one PC

Claim status page

- [ ] (We need some AC around this, including testing the various claim statuses. For now, [Figma](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9954-85556&t=p0BIVjAiIL3ybT3i-1) contains some mocks of Saved and Incomplete claims, though they’ll change depending on if the appointment is over 30 days and where the claim started.)

**Test Case Creation**

For Documentation purposes and purposes to ensure Staging Review tasks are satisfied, test cases will be created and stored within [VA Travel Pay Instance Testrail](https://dsvavsp.testrail.io/index.)

Test cases will include the following

* Test cases for each ticket to validate acceptance criteria  
  * Cross check Figma Design document to ensure those scenarios are covered  
* Accessibility test case to document accessibility results and update results onto this [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126647)

**Test Execution**

TestRail will be used to document test execution for Staging Review purposes. The test cases will be based on the acceptance criteria of the development tickets. QA will run the test case manually and update the following

* Pass/Fail result for each test case  
* Recordings/Screenshots for validation/failure evidence of test

**Defect/Issue Management**

**Discovery**

During test execution, if any issues or bugs are found, the team will need to internally triage the root of the issue before confirmation of creating a bug ticket is created. Here are some questions that need be answered first

* Environment stability  
  * If Staging environment is unstable, it might result in abnormal edge case issues which may not be prevalent and hard to reproduce under stable conditions  
    * Testing may not be viable and should be paused until environment is stable  
* Test data  
  * Some acceptance criteria may require specific test data. If the test user being used in the application under test does not have the data required it may not produce the result needed for validation  
* Existing defect  
  * During testing, if an issue is identified as an existing production defect with a scheduled fix in a future release, the finding should be internally noted (and linked to the existing ticket) rather than raising a new bug. This applies only when the defect does not prevent the successful deployment of new MVP features.

**Defect Creation**

If a new defect is confirmed to be found during testing, follow these guidelines to create the defect based on this template(TBD)

**Defect Priority/Severity**  
If a new defect is confirmed during testing, the team must gauge how much it affects the MVP of the new and existing features it disrupts in relation to the workflow and end user experience. Here are some questions to think before deciding priority and severity level:  
What is the direct impact on the user or system?

* *Check:* Does the bug block a key workflow (High/Critical)? Does it cause a system crash (Critical)? Or is it a minor inconvenience or cosmetic flaw (Low)?

Does the issue impact features outside the scope of the current work/sprint?

* *Check:* If a defect is found in an older, stable part of the application, it might signal a regression caused by a recent code change. This often raises its priority.

Is this impacting the Minimum Viable Product (MVP) for the current deployment?

* *Check:* If the bug prevents the successful deployment of the current release's core features, it must be addressed immediately.

**Requirements Traceability Matrix**

A Requirements Traceability Matrix (RTM) will be developed to formally map the association between the TestRail test cases and the corresponding development tickets (or design documents). This matrix will track the execution results (Pass/Fail) to ensure comprehensive test coverage of the complex claim features. This RTM Report within Testrail will also serve as documentation for Staging Review requirements.

## References

* [Complex Claims Post Midpoint Figma Design](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=9065-51243&t=3Fk8LgLajWLH38cX-1)  
* [Frontend Complex Claims](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126761)  
* TBD(More references to be added)

