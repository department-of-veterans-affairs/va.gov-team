# Business use cases
This doc explains how and why business submitters use Ask VA. A business submitter sends a message through Ask VA on behalf of a Veteran or other beneficiary. 

[Learn more about business inquiries (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Business%20vs.%20Personal.md).

**In this doc**
- [Methodology](#methodology)
- [Types of business inquiries](#types-of-business-inquiries)

## Methodology
Our goal was to understand how and why business submitters use Ask VA. These are the steps we took to review inquiries: 
- Review submitted inquiries in the CRM PROD agent UI
- Enable filters:
   - Level of Authentication = Business
   - Inquiry Created On is in December 2025
   - Filter by all categories and topics
- Note down patterns and screenshots with PII/PHI redacted [in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1765466554145/0fd0d26bdafaa7423966a416fee9b2d0a09274db)
- Determine different types of business inquiries 

## Types of business inquiries
We observed a few types of business inquiries based on frequency of submission, attachment present, and the **Your question** field.
- **Type 1: Recurring submissions, usually includes attachments**
- **Type 2: Ad hoc submissions, sometimes includes attachments**

### Type 1: Recurring submissions, usually includes documents
- **Who**: Mostly Work Study Site Supervisors and School Certifying Officials
- **Attachments**: Almost always includes attachments
- **Categories**: Submissions were usually under these categories
   - Education benefits and work study
   - Health care
   - Debt for benefit overpayments and health care copay bills

**Examples of Type 1**
**Category: Education benefits and work study**
|Example|Topic > Subtopic|Actual questions|
|---|---|---|
|Submit a PDF application|Work study > Application|- Spring 2026 Application for [Name]<br>- [Name] App 26/SP<br>- Please see Work Study Application for [Name] for Winter 2026.|
|Submit a time card|Work study > Time card|- Timecard for [Name] 2025-12-22<br>- time for [Name]<br>- [Name] final|
|Submit a work study contract|Work study > Signed contract|- Please see signed Work Study Contract for [Name]<br>- Signed SP26 contract [Name]1 attachment<br>- Can you please process the signed contract for this veteran?|
|Submit position description|Work study > Position description|- Job Description Attached.|
|Submit work study work site application|Work study > Position description|- Completed annual work site form, and description of work study duties.<br>- Attached is the VA Work Study Worksite Application and Duties for [Location]. This is a resubmission and please let me know if you have any questions or require further information.<br>- Attached is form 22-10219 as well as worksite duties for approval.|

**Category: Health care**
|Example|Topic > Subtopic|Actual questions|
|---|---|---|
|Submit CHAMPVA school enrollment certification letter|Family health benefits > CHAMPVA benefits|- Please process this Champ VA School Verification letter. <br>- I am submitting the CHAMPVA School Enrollment Certification Letter for [Name]([SSN]).<br>- Please see the attached CHAMPVA request for [Name]. (dependent)|

### Type 2: Ad hoc submissions, sometimes includes attachments**
- **Who**: All (Accredited rep, Other, Fiduciary, Funeral director, etc.)
- **Attachments**: Sometimes includes attachments
- **Categories**: Submissions were spread across all categories.
- **Examples**: Ad hoc questions varied across all categories. Some examples include:
   - Doc submission:
      - I am submitting a debt waiver request for the veteran. This was also uploaded to VBMS on 10/8/2025. (Debt for benefit overpayments and health care copay bills > Disability compensation overpayments)
   - Questions:
      - How Do I report this death ? [Name] on 12/16/2025 (Disability compensation > Guardianship, custodianship, or fiduciary issues)
   - Requests:
      - Requesting a copy of the DMC debt letter to send money for tuition back to VA. (Debt for benefit overpayments and health care copay bills > Education benefit overpayments (for school officials))
      - We are requesting a copy of the student's DMC debt letter for term: May 04, 2020 - May 30, 2020. (Debt for benefit overpayments and health care copay bills > Education benefit overpayments (for school officials))
      - Would you please provide our current debt list for facility codes [Code] and [Code]? (Debt for benefit overpayments and health care copay bills > Education benefit overpayments (for school officials))
   - Issue reports:
      - The PO number provided is not recognized in [Location]. (Veteran Readiness and Employment > Financial issues)
      - We are missing an authorization for this student (Veteran Readiness and Employment > Following up on application or contacting counselor)

