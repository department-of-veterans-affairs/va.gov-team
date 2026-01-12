# Veteran Status Card use cases

Last updated: January 2026  
* [User flow](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=2-19060&t=e0M5UWTlvjhI7lLs-1)  
* [Figma files](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=2-19060&t=e0M5UWTlvjhI7lLs-1)  
* [Test Rail QA](https://dsvavsp.testrail.io/index.php?/suites/view/3627&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)  
  * See individual use cases below for staging user accounts.

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

[Edge cases](#edge-cases)

[Flags](#flags)

- [Profile shared flags](#profile-shared-flags)

[Errors](#errors)

- [Veteran Status Card errors](#veteran-status-card-errors)

- [Profile shared errors](#profile-shared-errors)

# Overview 

The **Veteran Status Card** page allows Veterans to view their Veteran Status Card, which allows Veterans to receive discounts. For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

The **Veteran Status Card** is currently owned by the **Core Veteran Experience Team**. The Authenticated Experience Team does not own or manage this page.

# Use cases 

## User can successfully view their Veteran Status Card 

* **Description:** User has accurate data that can be gathered from their military service history and vet verification status records. The **DoD ID number** does not show if it is not present. The **VA disability rating** does not show if there is no rating. The **How do I get a physical version of my Veteran Status Card?** Accordion information ***only*** shows in this view.  
* **Staging user:** vets.gov.user+127@gmail.com  
* **Status code:** Service history: 200, Vet verification status: 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=2-19062&t=e0M5UWTlvjhI7lLs-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L239)

## User is not Title 38 eligible 

* **Description:** User is not Title 38 eligible. Show when Not Confirmed Reason is NOT\_TITLE\_38.  
* **Staging user:** vets.gov.user+32@gmail.com  
* **Status code:** Service history: 200, Vet verification status: 200  
* **Format:** [Standard warning alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)  
* [Link to designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4013-3727&t=e0M5UWTlvjhI7lLs-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L188)

## Discharge status requires research or other eligibility issues 

* **Description:** Show when discharge status requires research or other eligibility issues. Show when Not Confirmed Reason is MORE\_RESEARCH\_NEEDED, PERSON\_NOT\_FOUND, or other non-NOT\_TITLE\_38 reasons. Also shown when user is CONFIRMED but has no service history.  
* **Staging user:** vets.gov.user+57@gmail.com  
* **Status codes:** Service history: 200, Vet verification status: 200  
* **Format:** [Standard warning alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)  
* [Link to designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4013-4059&t=e0M5UWTlvjhI7lLs-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L203)

## NotInDEERSAlert, NoServiceHistoryAlert: User does not have a Department of Defense ID or service history 

* **Description:** Message shows if:  
  * ‘GET service\_history’ returns a 403\. Meaning the user does not have a DoD ID in DEERS.  
  * \`GET service\_history\` returned an empty service history array. Meaning the user does not have a service history in DEERS.  
* **Staging user:** vets.gov.user+90@gmail.com  
* **Status code:** Service history: 200 (with no service history) or 403 error, Vet verification status: 200  
* **Format:** [Standard warning alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)  
* [Link to designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4013-5530&t=e0M5UWTlvjhI7lLs-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L211)

# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors 

### Veteran Status Card errors 

#### Error downloading PDF 

* **Description:** Error occurs when user clicks "Print your Veteran Status Card (PDF)" link. The **How do I get a physical version of my Veteran Status Card?** section of the FAQ shows in this use case.  
* **Status code:** None, PDF generation is done client-side.  
* **Format:** [Error alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--error)  
* [Link to designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4013-5918&t=e0M5UWTlvjhI7lLs-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/2efc99e6c2c3049197d083cb9b9216b55af264f3/src/applications/personalization/profile/components/veteran-status-card/FrequentlyAskedQuestions.jsx#L44)

#### Vet verification status responds with an error 

* **Description:** Vet verification status responds with an error.   
* **Staging user:** vets.gov.user+41@gmail.com  
* **Status codes:** Service history: any response, Vet verification status: 4xx & 5xx response  
* **Format:** [Standard warning alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)  
* [Link to designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4013-6206&t=e0M5UWTlvjhI7lLs-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L214)

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)



---



<details><summary>Archive | Veteran Status Card Use Cases, July 2025</summary>

# Veteran Status Card Use Cases

Last updated: July 31, 2025

- [User flow](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3111-6818&t=J5aMFPlJyzhhZKP0-1)
- [Figma files](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-327398&t=J5aMFPlJyzhhZKP0-1)
- [Test Rail QA](https://dsvavsp.testrail.io/index.php?/suites/view/3627&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
   - See individual use cases below for staging user accounts.

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

## Common use cases
### User logs in with LOA3 account

<details><summary>User can successfully view their Veteran Status Card</summary>

- **Use case:** User has accurate data that can be gathered from their military service history and vet verification status records.
- **Staging user:** `vets.gov.user+127@gmail.com`
- **Status codes:** Service history: 200, Vet verification status: 200
- **Content:** The page displays the digital Veteran Status Card with the following information:
  - Veteran's name
  - Branch of service (from latest period of service)
  - Service dates (from latest period of service)
  - DoD ID number (if available, removed if not present)
  - Disability rating (shown if >= to 0%; removed if no rating)
- **Format:** Veteran Status Card
- **Link to designs:** [Success](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-327419&t=L0Y6FLu3mEhMKaEu-1)
- **Link to code:** [Display Veteran Status Card](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L239)
- **Additional components:**
  - "Frequently asked questions" section (displayed)
  - "Print your Veteran Status Card (PDF)" link under FAQ "How do I get a physical version of my Veteran status card?" (only shown when user is confirmed as veteran)

</details>

<details><summary>User is not Title 38 eligible</summary>

- **Use case:** User is not Title 38 eligible
- **Staging user:** `vets.gov.user+32@gmail.com`
- **Status codes:** Service history: 200, Vet verification status: 200
- **Not Confirmed Reason:** NOT_TITLE_38
- **Content:**
  - You're not eligible for a Veteran Status Card
    To get a Veteran Status Card, you must have received an honorable discharge for at least one period of service. If you think your discharge status is incorrect, call the Defense Manpower Data Center at 800-538-9552 (TTY: 711). They're open Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
- **Format:** [Warning Alert Component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)
- **Link to designs:** [Ineligible Case](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-327532&t=L0Y6FLu3mEhMKaEu-1)
- **Link to code:** [Display Not Eligible Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L188)
- **Additional components:**
  - "Frequently asked questions" section (displayed)
  - "How do I get a physical version of my Veteran status card?" (FAQ not displayed)

</details>

<details><summary>Discharge status requires research or other eligibility issues</summary>

- **Use case:** Discharge status requires research or other eligibility issues
- **Staging user:** `vets.gov.user+57@gmail.com`
- **Status codes:** Service history: 200, Vet verification status: 200
- **Not Confirmed Reason:** MORE_RESEARCH_NEEDED, PERSON_NOT_FOUND, or other non-NOT_TITLE_38 reasons; Also shown when user is CONFIRMED but has no service history
- **Content:**
  - There's a problem with your discharge status records
    We're sorry. To fix the problem with your records, call the Defense Manpower Data Center at 800-538-9552 (TTY: 711). They're open Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
- **Format:** [Warning Alert Component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)
- **Link to designs:** [Problem with Discharge Records Case](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3110-5055&t=L0Y6FLu3mEhMKaEu-1)
- **Link to code:** [Display Discharge Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L203)
- **Additional components:**
  - "Frequently asked questions" section (displayed)
  - "How do I get a physical version of my Veteran status card?" (FAQ not displayed)

</details>

## Edge cases
### Validation
There are no validation use cases for this page.

### Flags

<details><summary>Vet status confirmed with non-403 response for service history</summary>
  
- **Use case:** Vet status confirmed with non-403 response for service history
- **Staging user:** Not available (use mock API to simulate)
- **Status codes:** Service history: non-403 error, Vet verification status: 200  
- **Content:**
  - This page isn't available right now.
  We’re sorry. Something went wrong on our end. Refresh this page or try again later.
- **Format:** [Warning Alert Component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)
- **Link to designs:** [Page Unavailable Alert](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3110-5775&t=L0Y6FLu3mEhMKaEu-1)
- **Link to code:** [Display Page Unavailable Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L228)
- **Additional components:**
  - Intro paragraph (not displayed)
  - "Frequently asked questions" section (not displayed)
  
</details>

<details><summary>Vet status confirmed with 403 response or no service history</summary>
  
- **Use case:** Vet status confirmed with 403 response or no service history
- **Staging user:** `vets.gov.user+90@gmail.com`
- **Status codes:** Service history: 200 (with no service history) or 403 error, Vet verification status: 200  
- **Content:**

  Header: We can't match your information to any military service records

  We're sorry for this issue. If you want to learn what military service records may be on file for you, call the Defense Manpower Data Center (DMDC) at 800-538-9552 (TTY: 711). The DMDC office is open Monday through Friday (except federal holidays), 8:00 a.m. to 8:00 p.m. ET.
  If you think there might be a problem with your military service records, you can apply for a correction.

  Learn how to correct your military service records on the National Archives website

- **Format:** [Warning Alert Component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)
- **Link to designs:** [Mismatch Service History](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3110-5535&t=J5aMFPlJyzhhZKP0-1)
- **Link to code:** [Display Mismatch Service History Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L211)
- **Additional components:**
  - "Frequently asked questions" section (displayed)
  - "How do I get a physical version of my Veteran status card?" (FAQ not displayed)

</details>

[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### Errors

<details><summary>Vet verification status responds with an error</summary>
  
- **Use case:** Vet verification status responds with an error
- **Staging user:** `vets.gov.user+41@gmail.com`
- **Status codes:** Service history: any response, Vet verification status: 4xx & 5xx response
- **Content:**
  - Something went wrong
  We’re sorry. Try to view your Veteran Status Card later.
- **Format:** [Warning Alert Component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)
- **Link to designs:** [Something Wrong Alert](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3110-5295&t=L0Y6FLu3mEhMKaEu-1)
- **Link to code:** [Display Something Wrong Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/ecee7bb9aa8e40034119700e0b523f0ade08aa0e/src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx#L214)
- **Additional components:**
  - "Frequently asked questions" section (displayed)
  - "How do I get a physical version of my Veteran status card?" (FAQ not displayed)

</details>


<details><summary>Error downloading PDF</summary>
  
- **Use case:** Error occurs when user clicks "Print your Veteran Status Card (PDF)" link 
- **Status codes:** None (PDF generation is done client-side)  
- **Content:**
  - Something went wrong
  We're sorry. Try to print your Veteran Status Card later.
- **Format:** [Error Alert Component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--error)
- **Link to designs:** [PDF Error Alert](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-327467&t=L0Y6FLu3mEhMKaEu-1)
- **Link to code:** [Display PDF Error Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/2efc99e6c2c3049197d083cb9b9216b55af264f3/src/applications/personalization/profile/components/veteran-status-card/FrequentlyAskedQuestions.jsx#L44)
- **Additional components:**
  - "Frequently asked questions" section (displayed)
</details>

</details>
