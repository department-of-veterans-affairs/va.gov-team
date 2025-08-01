# VA Form 686c Data Field Specification and Reference

## Overview

**Form Title:** Application Request to Add and/or Remove Dependents  
**Form Number:** VA Form 21-686c  
**Purpose:** This form is used by veterans to add or remove dependents from their VA benefits, which can affect compensation rates and other benefits.
**OMB Control Number:** 2900-0043
**Respondent Burden:** 30 minutes
**Expiration Date:** 08/31/2025

---

## Section I: Veteran Information

### Personal Identification
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Social Security Number** | Yes | Primary identifier for veteran records and benefit calculations | VBMS (Veterans Benefits Management System) | 9 digits, format XXX-XX-XXXX or XXXXXXXXX | Yes | `veteranSSN` |
| **VA File Number** | No | Alternative identifier when different from SSN | VBMS | 8 or 9 digits, C-file format | Yes | `vaFileNumber` |
| **First Name** | Yes | Identity verification and record matching | VBMS | 1-30 characters, letters and hyphens only | Yes | `veteranFirstName` |
| **Middle Name** | No | Complete identity verification | VBMS | 0-30 characters, letters and hyphens only | Yes | `veteranMiddleName` |
| **Last Name** | Yes | Identity verification and record matching | VBMS | 1-30 characters, letters and hyphens only | Yes | `veteranLastName` |
| **Suffix** | No | Complete name identification (Jr., Sr., III, etc.) | VBMS | Valid suffix (Jr., Sr., I, II, III, IV) | Yes | `veteranSuffix` |
| **Date of Birth** | No | Age verification and identity confirmation | VBMS | Valid date in MM/DD/YYYY format, not in future | Yes | `veteranDateOfBirth` |

### Contact Information
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Mailing Address - Street** | Yes | Correspondence and benefit payments | VBMS | 1-100 characters, valid street address | Yes | `veteranMailingStreet` |
| **City** | Yes | Correspondence and benefit payments | VBMS | 1-30 characters, letters only | Yes | `veteranMailingCity` |
| **State** | Yes | Correspondence and benefit payments | VBMS | Valid 2-letter state code | Yes | `veteranMailingState` |
| **ZIP Code** | Yes | Correspondence and benefit payments | VBMS | 5 digits or 5+4 format (XXXXX or XXXXX-XXXX) | Yes | `veteranMailingZip` |
| **Country** | No | International address verification | VBMS | Valid country name from ISO list | Yes | `veteranMailingCountry` |
| **Telephone Number (Daytime)** | No | Contact for claim processing and verification | VBMS | 10 digits, format XXX-XXX-XXXX | Yes | `veteranPhoneNumber` |
| **Email Address** | No | Electronic correspondence and notifications | VBMS | Valid email format with @ symbol and domain | Yes | `veteranEmailAddress` |

---

## Section II: Request Type

### Action Requested
*Instructions: Check all that apply. You must select at least one option.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Add Dependent(s)** | Yes* | Determines processing workflow and benefit calculations | VBMS | Boolean value | No | `addDependents` |
| **Remove Dependent(s)** | Yes* | Determines processing workflow and benefit calculations | VBMS | Boolean value | No | `removeDependents` |
| **Report Death of Dependent** | Yes* | Benefit adjustment and record updates | VBMS | Boolean value | No | `reportDependentDeath` |

*At least one action must be selected

---

## Section III: Spouse Information

*Instructions: Complete this section if you are adding a spouse as a dependent. If you are married to more than one person, list information for each spouse on separate forms.*

### New Spouse Details
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **First Name** | Yes** | Dependent identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | No | `spouseFirstName` |
| **Middle Name** | No | Complete spouse identification | VBMS | 0-30 characters, letters and hyphens only | No | `spouseMiddleName` |
| **Last Name** | Yes** | Dependent identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | No | `spouseLastName` |
| **Suffix** | No | Complete name identification | VBMS | Valid suffix (Jr., Sr., I, II, III, IV) | No | `spouseSuffix` |
| **Social Security Number** | Yes** | Dependent verification and benefit processing | VBMS | 9 digits, format XXX-XX-XXXX or XXXXXXXXX | No | `spouseSSN` |
| **Date of Birth** | Yes** | Age verification and benefit eligibility | VBMS | Valid date in MM/DD/YYYY format, not in future | No | `spouseDateOfBirth` |
| **Place of Birth (City, State/Country)** | No | Identity verification | VBMS | City, State format or City, Country for foreign births | No | `spousePlaceOfBirth` |
| **Date of Marriage** | Yes** | Benefit eligibility determination | VBMS | Valid date in MM/DD/YYYY format, not in future | No | `marriageDate` |
| **Place of Marriage (City, State/Country)** | Yes** | Marriage verification | VBMS | City, State format or City, Country for foreign marriages | No | `marriagePlace` |
| **Type of Marriage** | Yes** | Legal status verification (ceremonial, common law, etc.) | VBMS | Valid selection from predefined list | No | `marriageType` |

**Required if adding spouse as dependent

### Spouse's Previous Marriages
*Instructions: Complete if your spouse was previously married.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Was your spouse previously married?** | Yes** | Eligibility verification | VBMS | Boolean value or "None" | No | `spousePreviousMarriage` |
| **How did previous marriage end?** | Yes*** | Legal status verification | VBMS | Valid selection (Death, Divorce, Annulment) | No | `spousePreviousMarriageEnd` |
| **Date previous marriage ended** | Yes*** | Timeline verification | VBMS | Valid date in MM/DD/YYYY format, before current marriage date | No | `spousePreviousMarriageEndDate` |
| **Name of previous spouse** | No*** | Record verification | VBMS | 1-60 characters, letters and spaces | No | `spousePreviousSpouseName` |

**Required if adding spouse  
***Required if spouse had previous marriage

### Claimant's Previous Marriages
*Instructions: Complete if you (the veteran/claimant) were previously married.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Were you previously married?** | Yes | Eligibility verification | VBMS | Boolean value or "None" | Yes | `claimantPreviousMarriage` |
| **How did previous marriage end?** | Yes**** | Legal status verification | VBMS | Valid selection (Death, Divorce, Annulment) | No | `claimantPreviousMarriageEnd` |
| **Date previous marriage ended** | Yes**** | Timeline verification | VBMS | Valid date in MM/DD/YYYY format, before current marriage date | No | `claimantPreviousMarriageEndDate` |
| **Name of previous spouse** | No**** | Record verification | VBMS | 1-60 characters, letters and spaces | No | `claimantPreviousSpouseName` |

****Required if claimant had previous marriage

---

## Section IV: Children Information (Repeating Section)

*Instructions: Complete this section for each child you want to add or remove as a dependent. Use a separate page for each child if necessary.*

### Child Details
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **First Name** | Yes***** | Child identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | No | `childFirstName` |
| **Middle Name** | No | Complete child identification | VBMS | 0-30 characters, letters and hyphens only | No | `childMiddleName` |
| **Last Name** | Yes***** | Child identification and benefit calculations | VBMS | 1-30 characters, letters and hyphens only | No | `childLastName` |
| **Suffix** | No | Complete name identification | VBMS | Valid suffix (Jr., Sr., I, II, III, IV) | No | `childSuffix` |
| **Social Security Number** | Yes***** | Child verification and benefit processing | VBMS | 9 digits, format XXX-XX-XXXX or XXXXXXXXX | No | `childSSN` |
| **Date of Birth** | Yes***** | Age verification and benefit eligibility | VBMS | Valid date in MM/DD/YYYY format, not in future | No | `childDateOfBirth` |
| **Place of Birth (City, State/Country)** | No | Identity verification | VBMS | City, State format or City, Country for foreign births | No | `childPlaceOfBirth` |
| **Relationship to Veteran** | Yes***** | Benefit eligibility determination | VBMS | Valid selection (Biological, Adopted, Stepchild) | No | `childRelationship` |

*****Required if adding/removing child

### Child Status Information
*Instructions: Check all that apply to this child.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Child lives with you** | Yes***** | Dependency verification | VBMS | Boolean value | No | `childLivesWithVeteran` |
| **Child is married** | Yes***** | Benefit eligibility determination | VBMS | Boolean value | No | `childIsMarried` |
| **Child attends school (if 18-23 years old)** | No | Educational benefit eligibility | VBMS | Boolean value | No | `childAttendsSchool` |
| **Child is permanently incapable of self-support** | No | Extended benefit eligibility | VBMS | Boolean value | No | `childIsDisabled` |
| **Child was adopted** | No | Legal relationship verification | VBMS | Boolean value | No | `childIsAdopted` |
| **Child is a stepchild** | No | Legal relationship verification | VBMS | Boolean value | No | `childIsStepchild` |
| **Child previously married** | No | Benefit eligibility determination | VBMS | Boolean value | No | `childPreviouslyMarried` |

### Child Support Information
*Instructions: Complete if you pay child support for this child.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Do you pay child support for this child?** | No | Financial obligation tracking | VBMS | Boolean value | No | `veteranPaysChildSupport` |
| **Monthly child support amount** | No****** | Benefit calculation adjustments | VBMS | Currency format, greater than $0.00 | No | `childSupportAmount` |
| **Name of person receiving support** | No****** | Support tracking | VBMS | 1-60 characters, letters and spaces | No | `childSupportRecipient` |

******Required if veteran pays child support

### School Information (if applicable)
*Instructions: Complete if child is 18-23 years old and attending school.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Name of school** | No******* | Educational verification | VBMS | 1-100 characters | No | `schoolName` |
| **School address** | No******* | Educational verification | VBMS | Valid address format | No | `schoolAddress` |
| **Date school term began** | No******* | Educational verification | VBMS | Valid date in MM/DD/YYYY format | No | `schoolTermStartDate` |
| **Date school term will end** | No******* | Educational verification | VBMS | Valid date in MM/DD/YYYY format | No | `schoolTermEndDate` |
| **Number of credit hours** | No******* | Educational verification | VBMS | Numeric value, 1-30 | No | `schoolCreditHours` |

*******Required if child attends school

---

## Section V: Income Information

*Instructions: Report all income from all sources. This information is used to determine benefit eligibility and rates.*

### Spouse Income
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Spouse's gross annual income from employment** | No | Benefit rate calculations for certain programs | VBMS | Currency format, non-negative value | No | `spouseEmploymentIncome` |
| **Spouse's other annual income** | No | Benefit rate calculations for certain programs | VBMS | Currency format, non-negative value | No | `spouseOtherIncome` |
| **Expected income this year** | No | Current year benefit calculations | VBMS | Currency format, non-negative value | No | `spouseExpectedIncome` |

### Child Income (if 18 or older)
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Child's gross annual income** | No | Benefit eligibility for adult children | VBMS | Currency format, non-negative value | No | `childAnnualIncome` |

---

## Section VI: Military Service Information

*Instructions: This information may be prefilled from your military records.*

### Service Details
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Branch of Service** | No | Service verification | VBMS | Valid selection from military branches | Yes | `branchOfService` |
| **Service Number** | No | Military record identification | VBMS | Valid format based on service era | Yes | `serviceNumber` |
| **Dates of Service (From - To)** | No | Service period verification | VBMS | Valid date range in MM/DD/YYYY format | Yes | `serviceDates` |

---

## Section VII: Additional Information

### Supporting Documentation
*Instructions: Check the documents you are submitting with this form.*

| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Marriage Certificate** | No | Documentation tracking | VBMS | Boolean value | No | `marriageCertificateRequired` |
| **Birth Certificate** | No | Documentation tracking | VBMS | Boolean value | No | `birthCertificateRequired` |
| **Divorce Decree** | No | Documentation tracking | VBMS | Boolean value | No | `divorceDecreeRequired` |
| **Death Certificate** | No | Documentation tracking | VBMS | Boolean value | No | `deathCertificateRequired` |
| **School Enrollment Certification** | No | Documentation tracking | VBMS | Boolean value | No | `schoolCertificationRequired` |
| **Medical Evidence of Disability** | No | Documentation tracking | VBMS | Boolean value | No | `medicalEvidenceRequired` |

### Remarks
| Field Label | Required | Data Usage | System of Record | Validation Rules | Prefill | JSON Variable |
|-------------|----------|------------|------------------|------------------|---------|---------------|
| **Additional Information** | No | Supplementary details for claim processing | VBMS | 0-1000 characters, no special formattin