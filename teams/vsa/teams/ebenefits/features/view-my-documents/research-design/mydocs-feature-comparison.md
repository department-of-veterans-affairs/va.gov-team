# MyDocuments feature comparison/design discovery
**VSA eBenefits Websites team | October 2021**

`James Adams, designer`

---

The focus of this document is to outline the flow and functionality around users' documentation. We're looking for how three features--My Documents, Benefits Letters, and Claim Status Tool -- complement or overlap each other. We are documentingBenefits My Documents feature.

---

### My Documents
The My Documents tool provides users a list of viewable, downloadable documents that they or their representative have submitted in association with a benefits claim.

<details>
  <summary><strong>eBenefits My Documents feature details</strong> (Click to open accordion)</summary>

#### Users
Users of the My Documents tool are beneficiaries (Veterans, dependents, service members?) who have a benefits claim history with VA. Users must authenticate to access their dashboard and view their uploaded documents.

#### Flow
The eBenefits My Documents feature is available to users after they log into their eBenefits dashboard. It is part of the "My Profile" options in the left-hand navigation. 

**User flow:** Home >> Sign-in >> Dashboard >> My Documents

#### Functionality
The tool presents a paginated list of user-uploaded (or representative-uploaded) documents that can be sorted or filtered, by document type and received date. Each document can be viewed/downloaded via a link. There is no upload functionality. Only electronically uploaded documents will appear; no handcarried, mailed, or faxed documents will display (Verify this is still true).
  
Uploaded documents can include:
- VA 21-686c Application Request To Add And/Or Remove Dependents
- 5103 Notice Acknowledgement
- Correspondence
- VA 21-526EZ, Fully Developed Claim (Compensation)
- VA 21-0781, Statement in Support of Claim for PTSD
- Disability Benefits Questionnaire (DBQ) - Veteran Provided
- Medical Treatment Records - Furnished by SSA
- Military Personnel Record
- Buddy / Lay Statement
- STR - Dental - Photocopy
- Medical Treatment Record - Government Facility
- Certificate of Release or Discharge From Active Duty (e.g. DD 214, NOAA 56-16, PHS 1867)
- Civilian Police Reports
- VA 21-0781a, Statement in Support of Claim for PTSD Secondary to Personal Assault
- VA 21-674 Report of School Attendance
- Medical Treatment Record - Non-Government Facility
- STR - Medical - Photocopy
- VA Form 21-8940 - Veterans Application for Increased Compensation Based on Un-employability
- VA 21-8940 Veterans Application for Increased Compensation Based on Unemployability
- Disability Benefits Questionnaire (DBQ)
- Appeal Substitution Review
- VA 21-4502 Application for Automobile or Other Conveyance and Adaptive Equipment Under 38 U.S.C. 3901-3904
- VA 21-2680 Examination for Housebound Status or Permanent Need for Regular Aid and Attendance
- VA Form 21-686 - Declaration of Status of Dependents
- VA Form 21-4142 - Authorization To Disclose Information
- Copy of a DD214
- VA Form 21-2680 - Examination for Housebound Status or Permanent Need for Regular Aid & Attendance
- VA Form 21-4502 - Application for Automobile or Other Conveyance and Adaptive Equipment Under 38 U.S.C. 3901-3904
- VA Form 21-0781a - Statement in Support of Claim for PTSD Secondary to Sexual Assault
- VA 21-4142a General Release for Medical Provider Information
- VA Form 21-4142a - General Release for Medical Provider Information
- VA 21-4192 Request for Employment Information in Connection with Claim for Disability
- VA 26-4555 Veterans Application in Acquiring Specially Adapted Housing or Special Home Adaptation Grant Under Title 38 U.S.C. 2101(a) or (b)
- VA 21-0779 Request for Nursing Home Info In Connection with Claim for Aid and Attendance
- VA Form 21-4142 Authorization for Release of Information
- Signature page VDC submitted 21-526EZ
- VA Form 21-4192 - Request for Employment Information in Connection with Claim for Disability
- Outpatient treatment records from Personal Physician
- Social Security Disability Documentation
- Medical evidence from Personal Physician
- VA Form 21-674 - Request for Approval of School Attendance
- Goldmann Perimetry Chart/Field Of Vision Chart
- VA Form 21-0781 - Statement in Support of Claim for PTSD
- Photographs
- Other Correspondence
- VA Form 26-4555 - Application in Acquiring Specially Adapted Housing or Special Home Adaptation Grant
- VA Form 21-0779 - Request for Nursing Home Information in Connection with Claim for Aid & Attendance
- L533
- L034
- VA Form 21-2680 - Examination for Housebound Status or Permanent Need for Regular Aid & Attendance
  
</details>  

---

### Benefits letters
The Download VA benefits letters feature resides on VA.gov within the Records hub. This tool provides users with downloadable PDFs that document their VA benefits and service history.

<details>
  <summary><strong>Benefits letters feature details</strong> (Click to open accordion)</summary>

#### Users

Judging from the documents themselves, users are primarily Veterans. Users must authenticate to view the download page.

#### Flow
There is a direct link from the "Records" white quadrant on the VA.gov homepage. There is an intermediate landing page [(Download VA benefit letters)](https://staging.va.gov/records/download-va-letters/) providing info and instructions, and prompting users to sign-in. The next screen asks for an address correction/confirmation before allowing the user to continue to the downloadable documents. 

**User flow:** Home >> Download VA benefit letters >> Sign-in >> VA letters and documents (address check) >> VA letters and documents 

#### Functionality
On the Download Documents are a set of accordions containing links to the view and/or download the corresponding PDFs. There are also several links to other "document" resources.

Download accordions:
- Proof of Service Card
- Proof of Creditable Drug Coverage
- Proof of Minimum Essential Coverage
- Service Verification
- Civil Service Preference
- Benefits Summary and Service Verification (Both?)
- Benefit Summary

Links:
- Post-9/11 GI Bill Statement of Benefits
- Request for VA home loan Certificate of Eligibility (eBenefits)
- Request for DD 214 (eBenefits)
</details>

---

### Claim status tool
The Claim status tool (CST) allows users to see status and review details of their VA benefits claims and appeals.

<details>
  <summary><strong>Claim status tool feature details</strong> (Click to open accordion)</summary>

#### Users

Users of the Claim status tool are beneficiaries (Veterans, dependents, service members?) who have a benefits claim history with VA. Users must authenticate (LOA3) to view the CST.

#### Flow
As with Benefits letters, there is a direct link from the home page in the the "Disability" white quadrant. There is an intermediate landing page [(Check your VA claim or appeal status)](https://www.va.gov/claim-or-appeal-status/). once logged-in, the users is presented with a paginated list of their claims. 

**User flow:** Home >> Check your VA claim or appeal status >> Sign-in >> Check your claim or appeal status

#### Functionality
The Claim Status tool presents considerable detail for each individual claim with tabs for Status, Files, and Details. The Files tab list the supporting documentation by name, type and date. These files are **not** viewable or downloadable from the page.Document upload is available to users who need to submit supporting evidence for their claims.

The list of what can be tracked using the CST includes (list is unverified):
- Disability compensation
- Veterans or Survivors Pension benefits
- Special monthly compensation
- Dependency and Indemnity Compensation (DIC)
- Burial allowance
- VA health care
- GI Bill or other education benefits
- Veteran Readiness and Employment (VR&E)
- VA home loan Certificate of Eligibility (COE)
- Specially Adapted Housing (SAH) or Special Housing Adaptation (SHA) grants
- Life insurance
</details>

---

### Feature comparison

| Functionality | My Documents | Benefits Letters | Claim Status Tool |
| :--- | :---: | :---: | :---: |
| What kind of documents | User-uploaded/submitted | VA Benefits proof/documentation |  User-uploaded/submitted  |
| Documents list  | X | X |  Within claim tab  |
| Search | -- | -- |  --  |
| Filtering | X | -- |  -- |
| Sorting | X | -- |  --  |
| Pagination | X | -- |  X  |
| Viewable documents | X | X |  --  |
| Document download | X | X |  --  |
| Document upload | -- | -- |  X  |

X = Yes

### Use case comparison

| The user wants to: | My Documents | Benefits Letters | Claim Status Tool |
| :--- | :---: | :---: | :---: |
| See a list/history of docs they uploaded | X | -- |  X  |
| View docs they uploaded | X | -- |  --  |
| Download docs they uploaded  | X | -- |  --  |
| Search for an uploaded doc | -- | -- |  --  |
| Find uploaded docs with sorting/filtering | X | -- |  -- |
| Find uploaded docs by claim | -- | -- |  X  |
| Upload new documentation | -- | -- |  X  |
| View/download proof of VA benefits | -- | X |  --  |

X = Yes

### Initial findings
The My Documents feature strongly complements the Claim Status Tool; so much that their functionality should be merged or at least co-located. Documents, documentation, submissions, letters, etc. could be easily conflated by users, so some consideration should be give to either strongly differentiating user-uploaded documentation from downloadable VA letters, or to creating a documentation "hub." Research is need to determine users' expectations.


---

