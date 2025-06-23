# Veteran Status Card Use Cases
Last updated: June 2025

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

## User flow
- [Figma files](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-459250&t=4qBrNlwhsoeAPg30-1)
- [Test Rail QA] (TBD)
- [Staging test accounts] (TBD - will be added once staging is available)

## Common use cases

### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account

<details><summary>User can view their Veteran Status Card</summary>

- **Use case:** User has accurate data points that the VA can gather from their military records.
- **Status code:** 200
- **Content:** The page displays the digital Veteran Status Card with the following information:
  - Veteran's name
  - Branch of service (from latest period of service)
  - Service dates (from latest period of service) 
  - DoD ID number (if available, removed if not present)
  - Disability rating (removed if 0% or no rating)

- **Format:** Veteran Status Card
- **Link to designs:** [Success] (https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269050&t=QUfLyAtnaA9x2xSC-1)
- **Link to code:** [TBD]
- **Additional components**
  FAQs section (always displayed)
  "Print your Veteran Status Card (PDF)" link under FAQ "How do I get a physical version of my Veteran status card?" (only shown when user is confirmed as veteran)

</details>

### NotEligibleAlert: User is not eligible for Veteran Status Card
<details><summary> User is not Title 38 eligible </summary>

- **Use case: User is not Title 38 eligible**
- **Status code:** 200  
- **Not Confirmed Reason:** NOT_TITLE_38  
- **Content:**
H2: You're not eligible for a Veteran Status Card
To get a Veteran Status Card, you must have received an honorable discharge for at least one period of service. If you think your discharge status is incorrect, call the Defense Manpower Data Center at 800-538-9552 (TTY: 711). They're open Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
- **Format:** Info alert component  
- **Link to designs:** [[Ineligible Case]  ](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269210&t=4qBrNlwhsoeAPg30-1)
- **Link to code:** [TBD]

</details>
<details><summary> Discharge status requires research or other eligibility issues </summary>

- **Use case: Discharge status requires research or other eligibility issues**
- **Status code:** 200  
- **Not Confirmed Reason:** MORE_RESEARCH_NEEDED, PERSON_NOT_FOUND, or other non-NOT_TITLE_38 reasons; Also shown when user is CONFIRMED but has no service history  
- **Content:**
H2: There's a problem with your discharge status records
We're sorry. To fix the problem with your records, call the Defense Manpower Data Center at 800-538-9552 (TTY: 711). They're open Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
- **Format:** Warning alert component  
- **Link to designs:** [[Missing Service History]  ](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269252&t=4qBrNlwhsoeAPg30-1)
- **Link to code:** [TBD]
</details>

## Edge cases

### NotInServiceHistoryAlert: 
<details><summary>User does not have service history or cannot access records </summary>
  
- **Use case: 4xx & 5xx response (except 403)**
- **Status code:** 4xx & 5xx (except 403)  
- **Content:**
H2: This page isn't available right now
We're sorry. Something went wrong on our end. Refresh this page or try again later.
- **Format:** Warning alert component  
- **Link to designs:** [NoServiceHistory](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269294&t=4qBrNlwhsoeAPg30-1)
- **Link to code:** [TBD]
</details>

<details><summary> 403 response or successful response with no service history </summary>
  
- **Use case: 403 response or successful response with no service history**
- **Status code:** 403 or 200 with no serviceHistory key  
- **Content:**
H2: We can't match your information to any military service records
We're sorry for this issue. If you want to learn what military service records may be on file for you, call the Defense Manpower Data Center (DMDC) at 800-538-9552 (TTY: 711). The DMDC office is open Monday through Friday (except federal holidays), 8:00 a.m. to 8:00 p.m. ET.
If you think there might be a problem with your military service records, you can apply for a correction.
Learn how to correct your military service records on the National Archives website
- **Format:** Warning alert component  
- **Link to designs:** [Mismatch History](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269336&t=4qBrNlwhsoeAPg30-1)
- **Link to code:** [TBD]
</details>

## Errors
<details><summary> System error or API error </summary>
  
- **Use case:** System error or when Not Confirmed reason is ERROR  
- **Status code:** TBD  
- **Content:**
H2: Something went wrong
We're sorry. Try to view your Veteran Status Card later.
- **Format:** Error alert component  
- **Link to designs:** [[System Error]](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269378&t=4qBrNlwhsoeAPg30-1)
- **Link to code:** [TBD]
</details>

<details><summary>Error downloading PDF</summary>
  
- **Use case:** Error occurs when user clicks "Print your Veteran Status Card (PDF)" link 
- **Status code:** TBD  
- **Content:**
H2: Something went wrong
We're sorry. Try to download your Veteran Status Card later.
- **Link to designs:** [Error downloading PDF](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3003-269121&t=4qBrNlwhsoeAPg30-1)
</details>
