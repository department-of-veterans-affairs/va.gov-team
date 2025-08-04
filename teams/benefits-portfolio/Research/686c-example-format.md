# VA Form 686c Data Field Specification and Reference
**Form Title:** Application Request to Add and/or Remove Dependents

**Purpose:** This form is used by veterans to add or remove dependents from their VA benefits, which can affect compensation rates for disability and pension.

**OMB Control Number:** 2900-0043 

**Respondent Burden:** 30 minutes

**Expiration Date:** 08/31/2025

## Instructions

### Step 1: Check your eligibility

You may be eligible to use this form to add or remove dependents from your VA benefits if one of the following is true:

- You’re a Veteran with a combined disability rating of 30% or higher
- You’re a Veteran receiving Veterans Pension benefits
- You’re a surviving spouse of a Veteran receiving survivors benefits

> **Note:** If you’re a surviving spouse receiving DIC (Dependency and Indemnity Compensation) benefits and your child is over 18 and receives their own DIC benefits, you can’t receive additional benefits for that child.

#### Eligible Dependents

You can use this form to add or remove:

- Your spouse (only if you’ve never received additional benefits for them before)
- An unmarried child under 18
- An unmarried child age 18–23 who attends school
- An unmarried child who became permanently disabled before turning 18

> **Note:** If your dependent parent died, you may use this form to remove them.  
> To add a parent as a dependent, use VA Form 21P-509 instead.

#### Step 2: Gather your information

You’ll need:

- Your personal info (date of birth, Social Security number, military service number, contact details)
- Your dependent’s personal info (date of birth, Social Security number)

You may also need documents like your marriage license or a birth certificate. We’ll tell you if more information is required.

#### Step 3: Get help if needed

If you want assistance, contact an accredited representative or Veterans Service Organization (VSO).

#### Step 4: Start your request

The process takes about 30 minutes. You’ll receive a confirmation message after submitting your form—you can print it for your records.

---

## Section I: Veteran Information

*Instructions: Provide your identifying and contact information. This helps VA match your application with your records and keep in touch with you during processing.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Social Security Number | Yes | Primary identifier for veteran records and benefit calculations | VA Profile | 9 digits, format XXX-XX-XXXX or XXXXXXXXX | Yes | `veteranSSN` | short text |
| VA File Number | No | Alternative identifier when different from SSN | VBMS | 8 or 9 digits, C-file format | Yes | `vaFileNumber` | short text |
| First Name | Yes | Identity verification and record matching | VA Profile | 1-30 characters, letters and hyphens only | Yes | `veteranFirstName` | short text |
| Middle Name | No | Complete identity verification | VA Profile | 0-30 characters, letters and hyphens only | Yes | `veteranMiddleName` | short text |
| Last Name | Yes | Identity verification and record matching | VA Profile | 1-30 characters, letters and hyphens only | Yes | `veteranLastName` | short text |
| Suffix | No | Complete name identification (Jr., Sr., III, etc.) | VA Profile | Valid suffix (Jr., Sr., I, II, III, IV) | Yes | `veteranSuffix` | short text |
| Date of Birth | No | Age verification and identity confirmation | VA Profile | Valid date in MM/DD/YYYY format, not in future | Yes | `veteranDateOfBirth` | date |
| Mailing Address - Street | Yes | Correspondence and benefit payments | VA Profile | 1-100 characters, valid street address | Yes | `veteranMailingStreet` | short text |
| City | Yes | Correspondence and benefit payments | VA Profile | 1-30 characters, letters only | Yes | `veteranMailingCity` | city select |
| State | Yes | Correspondence and benefit payments | VA Profile | Valid 2-letter state code | Yes | `veteranMailingState` | state select |
| ZIP Code | Yes | Correspondence and benefit payments | VA Profile | 5 digits or 5+4 format | Yes | `veteranMailingZip` | zip |
| Country | No | International address verification | VA Profile | Valid country name from ISO list | Yes | `veteranMailingCountry` | country select |
| Telephone Number (Daytime) | No | Contact for claim processing and verification | VA Profile | 10 digits, format XXX-XXX-XXXX | Yes | `veteranPhoneNumber` | phone number |
| Email Address | No | Electronic correspondence and notifications | VA Profile | Valid email format with @ symbol and domain | Yes | `veteranEmailAddress` | email  |

---

## Section II: Request Type

*Instructions: Select at least one action to request. This determines what type of update VA processes.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Add Dependent(s) | Yes* | Determines processing workflow and benefit calculations | VBMS | Boolean value | No | `addDependents` | single select |
| Remove Dependent(s) | Yes* | Determines processing workflow and benefit calculations | VBMS | Boolean value | No | `removeDependents` | single select |
| Report Death of Dependent | Yes* | Benefit adjustment and record updates | VBMS | Boolean value | No | `reportDependentDeath` | single select |

> *At least one action must be selected.

## Section III: Spouse Information

*Instructions: Complete this section if you are adding a spouse as a dependent. If your spouse has prior marriages, complete the additional fields below. Use a separate form for each spouse if necessary.*

### New Spouse Details

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| First Name | Yes** | Dependent identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | No | `spouseFirstName` | short text |
| Middle Name | No | Complete spouse identification | VBMS | 0-30 characters, letters and hyphens only | No | `spouseMiddleName` | short text |
| Last Name | Yes** | Dependent identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | No | `spouseLastName` | short text |
| Suffix | No | Complete name identification | VBMS | Valid suffix (Jr., Sr., I, II, III, IV) | No | `spouseSuffix` | short text |
| Social Security Number | Yes** | Dependent verification and benefit processing | VBMS | 9 digits, format XXX-XX-XXXX or XXXXXXXXX | No | `spouseSSN` | short text |
| Date of Birth | Yes** | Age verification and benefit eligibility | VBMS | Valid date in MM/DD/YYYY format, not in future | No | `spouseDateOfBirth` | short text |
| Place of Birth (City, State/Country) | No | Identity verification | VBMS | City, State format or City, Country for foreign births | No | `spousePlaceOfBirth` | short text |
| Date of Marriage | Yes** | Benefit eligibility determination | VBMS | Valid date in MM/DD/YYYY format, not in future | No | `marriageDate` | short text |
| Place of Marriage (City, State/Country) | Yes** | Marriage verification | VBMS | City, State format or City, Country for foreign marriages | No | `marriagePlace` | short text |
| Type of Marriage | Yes** | Legal status verification (ceremonial, common law, etc.) | VBMS | Valid selection from predefined list | No | `marriageType` | single select |

**Required if adding spouse as dependent

---

### Spouse's Previous Marriages

*Instructions: Complete this section if your spouse was previously married.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Was your spouse previously married? | Yes** | Eligibility verification | VBMS | Boolean value or "None" | No | `spousePreviousMarriage` | single select |
| How did previous marriage end? | Yes*** | Legal status verification | VBMS | Valid selection (Death, Divorce, Annulment) | No | `spousePreviousMarriageEnd` | single select |
| Date previous marriage ended | Yes*** | Timeline verification | VBMS | Valid date in MM/DD/YYYY format, before current marriage date | No | `spousePreviousMarriageEndDate` | short text |
| Name of previous spouse | No*** | Record verification | VBMS | 1-60 characters, letters and spaces | No | `spousePreviousSpouseName` | short text |

**Required if adding spouse  
***Required if spouse had previous marriage

## Section IV: Children Information

*Instructions: Complete this section for each child you want to add or remove as a dependent. Use a separate page for each child if necessary.*

### Child Details

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| First Name | Yes | Child identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | Yes | `childFirstName` | short text |
| Middle Name | No | Complete child identification | VBMS | 0-30 characters, letters and hyphens only | Yes | `childMiddleName` | short text |
| Last Name | Yes| Child identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | Yes | `childLastName` | short text |
| Suffix | No | Complete name identification | VBMS | Valid suffix (Jr., Sr., I, II, III, IV) | No | `childSuffix` | short text |
| Social Security Number | Yes | Child verification and benefit processing | VBMS | 9 digits, format XXX-XX-XXXX or XXXXXXXXX | Yes | `childSSN` | short text |
| Date of Birth | Yes | Age verification and benefit eligibility | VBMS | Valid date in MM/DD/YYYY format, not in future | Yes | `childDateOfBirth` | short text |
| Place of Birth (City, State/Country) | No | Identity verification | VBMS | City, State format or City, Country for foreign births | No | `childPlaceOfBirth` | short text |
| Relationship to Veteran | Yes | Benefit eligibility determination | VBMS | Valid selection (Biological, Adopted, Stepchild) | Yes | `childRelationship` | single select |

Prefil any existing or past dependents in Veteran record

---

### Child Status Information

*Instructions: Check all that apply to this child.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Child lives with you | Yes| Dependency verification | VBMS | Boolean value | No | `childLivesWithVeteran` | single select |
| Child is married | Yes | Benefit eligibility determination | VBMS | Boolean value | No | `childIsMarried` | single select |
| Child attends school (if 18-23 years old) | No | Educational benefit eligibility | VBMS | Boolean value | No | `childAttendsSchool` | single select |
| Child is permanently incapable of self-support | No | Extended benefit eligibility | VBMS | Boolean value | No | `childIsDisabled` | single select |
| Child was adopted | No | Legal relationship verification | VBMS | Boolean value | No | `childIsAdopted` | single select |
| Child is a stepchild | No | Legal relationship verification | VBMS | Boolean value | No | `childIsStepchild` | single select |
| Child previously married | No | Benefit eligibility determination | VBMS | Boolean value | No | `childPreviouslyMarried` | single select |

---

### Child Support Information

*Instructions: Complete this section if you pay child support for this child.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Do you pay child support for this child? | Yes | Financial obligation tracking | VBMS | Boolean value | No | `veteranPaysChildSupport` | single select |
| Monthly child support amount | Yes | Benefit calculation adjustments | VBMS | Currency format, greater than $0.00 | No | `childSupportAmount` | short text |
| Name of person receiving support | Yes | Support tracking | VBMS | 1-60 characters, letters and spaces | No | `childSupportRecipient` | short text |

---

### School Information (if applicable)

*Instructions: Complete this section if the child is 18–23 years old and attending school.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Name of school | Yes| Educational verification | VBMS | 1-100 characters | No | `schoolName` | short text |
| School address | Yes | Educational verification | VBMS | Valid address format | No | `schoolAddress` | short text |
| Date school term began | Yes | Educational verification | VBMS | Valid date in MM/DD/YYYY format | No | `schoolTermStartDate` | short text |
| Date school term will end | Yes | Educational verification | VBMS | Valid date in MM/DD/YYYY format | No | `schoolTermEndDate` | short text |
| Number of credit hours | Yes | Educational verification | VBMS | Numeric value, 1–30 | No | `schoolCreditHours` | short text |


## Section V: Income Information

*Instructions: Report income only if required. This helps determine benefit eligibility or rates when adding certain dependents.*

### Spouse Income

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Spouse's gross annual income from employment | No | Benefit rate calculations for certain programs | VBMS | Currency format, non-negative value | No | `spouseEmploymentIncome` | short text |
| Spouse's other annual income | No | Benefit rate calculations for certain programs | VBMS | Currency format, non-negative value | No | `spouseOtherIncome` | short text |
| Expected income this year | No | Current year benefit calculations | VBMS | Currency format, non-negative value | No | `spouseExpectedIncome` | short text |

### Child Income (if 18 or older)

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Child's gross annual income | No | Benefit eligibility for adult children | VBMS | Currency format, non-negative value | No | `childAnnualIncome` | short text |

---

## Section VI: Military Service Information

*Instructions: This section may be prefilled from VA records. You may update it if needed.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Branch of Service | No | Service verification | VBMS | Valid selection from military branches | Yes | `branchOfService` | single select |
| Service Number | No | Military record identification | VBMS | Valid format based on service era | Yes | `serviceNumber` | short text |
| Dates of Service (From - To) | No | Service period verification | VBMS | Valid date range in MM/DD/YYYY format | Yes | `serviceDates` | short text |

---

## Section VII: Additional Information

*Instructions: Use this section to indicate what documents you're including and to provide any extra remarks that may help us process your request.*

### Supporting Documentation

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Marriage Certificate | No | Documentation tracking | VBMS | Boolean value | No | `marriageCertificateRequired` | single select |
| Birth Certificate | No | Documentation tracking | VBMS | Boolean value | No | `birthCertificateRequired` | single select |
| Divorce Decree | No | Documentation tracking | VBMS | Boolean value | No | `divorceDecreeRequired` | single select |
| Death Certificate | No | Documentation tracking | VBMS | Boolean value | No | `deathCertificateRequired` | single select |
| School Enrollment Certification | No | Documentation tracking | VBMS | Boolean value | No | `schoolCertificationRequired` | single select |
| Medical Evidence of Disability | No | Documentation tracking | VBMS | Boolean value | No | `medicalEvidenceRequired` | single select |

### Remarks

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Additional Information | No | Supplementary details for claim processing | VBMS | 0–1000 characters, no special formatting | No | `additionalInformation` | paragraph |

---

## Section VIII: Certification and Signature

*Instructions: Read carefully and sign to confirm the information provided is true to the best of your knowledge.*

### Veteran Certification

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable | Form Question Format |
|-------------|----------|------------|------------------|------------------|---------|---------------|----------------------|
| Veteran Signature | Yes | Legal certification of information accuracy | VBMS | Non-empty string, electronic signature format | No | `veteranSignature` | signature component |
| Date Signed | Yes | Form completion timestamp | VBMS | Valid date in MM/DD/YYYY format, not in future | No | `signatureDate` | short text |
