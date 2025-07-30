# VA Form 686c Data Field Specification and Reference

## Overview

**Form Title:** Application Request to Add and/or Remove Dependents  
**Form Number:** VA Form 21-686c  
**Purpose:** This form is used by veterans to add or remove dependents from their VA benefits, which can affect compensation rates and other benefits.

---

## Section I: Veteran Information

### Personal Identification
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Social Security Number** | `veteranSSN` | Yes | Primary identifier for veteran records and benefit calculations | VBMS (Veterans Benefits Management System) |
| **VA File Number** | `vaFileNumber` | No | Alternative identifier when different from SSN | VBMS |
| **First Name** | `veteranFirstName` | Yes | Identity verification and record matching | VBMS |
| **Middle Name** | `veteranMiddleName` | No | Complete identity verification | VBMS |
| **Last Name** | `veteranLastName` | Yes | Identity verification and record matching | VBMS |
| **Suffix** | `veteranSuffix` | No | Complete name identification (Jr., Sr., III, etc.) | VBMS |

### Contact Information
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Mailing Address - Street** | `veteranMailingStreet` | Yes | Correspondence and benefit payments | VBMS |
| **City** | `veteranMailingCity` | Yes | Correspondence and benefit payments | VBMS |
| **State** | `veteranMailingState` | Yes | Correspondence and benefit payments | VBMS |
| **ZIP Code** | `veteranMailingZip` | Yes | Correspondence and benefit payments | VBMS |
| **Country** | `veteranMailingCountry` | No | International address verification | VBMS |
| **Telephone Number** | `veteranPhoneNumber` | No | Contact for claim processing and verification | VBMS |
| **Email Address** | `veteranEmailAddress` | No | Electronic correspondence and notifications | VBMS |

---

## Section II: Request Type

### Action Requested
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Add Dependent(s)** | `addDependents` | Yes* | Determines processing workflow and benefit calculations | VBMS |
| **Remove Dependent(s)** | `removeDependents` | Yes* | Determines processing workflow and benefit calculations | VBMS |
| **Report Death of Dependent** | `reportDependentDeath` | Yes* | Benefit adjustment and record updates | VBMS |

*At least one action must be selected

---

## Section III: Spouse Information

### Current Spouse Details
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **First Name** | `spouseFirstName` | Yes** | Dependent identification and benefit calculations | VBMS |
| **Middle Name** | `spouseMiddleName` | No | Complete spouse identification | VBMS |
| **Last Name** | `spouseLastName` | Yes** | Dependent identification and benefit calculations | VBMS |
| **Suffix** | `spouseSuffix` | No | Complete name identification | VBMS |
| **Social Security Number** | `spouseSSN` | Yes** | Dependent verification and benefit processing | VBMS |
| **Date of Birth** | `spouseDateOfBirth` | Yes** | Age verification and benefit eligibility | VBMS |
| **Place of Birth** | `spousePlaceOfBirth` | No | Identity verification | VBMS |
| **Date of Marriage** | `marriageDate` | Yes** | Benefit eligibility determination | VBMS |
| **Place of Marriage** | `marriagePlace` | Yes** | Marriage verification | VBMS |
| **Type of Marriage** | `marriageType` | Yes** | Legal status verification (ceremonial, common law, etc.) | VBMS |

**Required if adding spouse as dependent

### Previous Marriages
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Spouse's Previous Marriage** | `spousePreviousMarriage` | Yes** | Eligibility verification | VBMS |
| **How Previous Marriage Ended** | `spousePreviousMarriageEnd` | Yes*** | Legal status verification | VBMS |
| **Date Previous Marriage Ended** | `spousePreviousMarriageEndDate` | Yes*** | Timeline verification | VBMS |

**Required if adding spouse  
***Required if spouse had previous marriage

---

## Section IV: Children Information

### Child Details (Repeatable Section)
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **First Name** | `childFirstName` | Yes**** | Child identification and benefit calculations | VBMS |
| **Middle Name** | `childMiddleName` | No | Complete child identification | VBMS |
| **Last Name** | `childLastName` | Yes**** | Child identification and benefit calculations | VBMS |
| **Suffix** | `childSuffix` | No | Complete name identification | VBMS |
| **Social Security Number** | `childSSN` | Yes**** | Child verification and benefit processing | VBMS |
| **Date of Birth** | `childDateOfBirth` | Yes**** | Age verification and benefit eligibility | VBMS |
| **Place of Birth** | `childPlaceOfBirth` | No | Identity verification | VBMS |
| **Relationship to Veteran** | `childRelationship` | Yes**** | Benefit eligibility determination | VBMS |

****Required if adding/removing child

### Child Status Information
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Child Lives with Veteran** | `childLivesWithVeteran` | Yes**** | Dependency verification | VBMS |
| **Child is Married** | `childIsMarried` | Yes**** | Benefit eligibility determination | VBMS |
| **Child Attends School** | `childAttendsSchool` | No | Educational benefit eligibility | VBMS |
| **Child is Disabled** | `childIsDisabled` | No | Extended benefit eligibility | VBMS |
| **Child is Adopted** | `childIsAdopted` | No | Legal relationship verification | VBMS |
| **Child is Stepchild** | `childIsStepchild` | No | Legal relationship verification | VBMS |

### Child Support Information
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Veteran Pays Child Support** | `veteranPaysChildSupport` | No | Financial obligation tracking | VBMS |
| **Child Support Amount** | `childSupportAmount` | No***** | Benefit calculation adjustments | VBMS |

*****Required if veteran pays child support

---

## Section V: Income Information

### Spouse Income
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Spouse's Annual Income** | `spouseAnnualIncome` | No | Benefit rate calculations for certain programs | VBMS |
| **Expected Income This Year** | `spouseExpectedIncome` | No | Current year benefit calculations | VBMS |

### Child Income
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Child's Annual Income** | `childAnnualIncome` | No | Benefit eligibility for adult children | VBMS |

---

## Section VI: Military Service Information

### Service Details
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Branch of Service** | `branchOfService` | No | Service verification | VBMS |
| **Service Number** | `serviceNumber` | No | Military record identification | VBMS |
| **Dates of Service** | `serviceDates` | No | Service period verification | VBMS |

---

## Section VII: Additional Information

### Supporting Documentation
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Marriage Certificate Required** | `marriageCertificateRequired` | No | Documentation tracking | VBMS |
| **Birth Certificate Required** | `birthCertificateRequired` | No | Documentation tracking | VBMS |
| **Divorce Decree Required** | `divorceDecreeRequired` | No | Documentation tracking | VBMS |
| **Death Certificate Required** | `deathCertificateRequired` | No | Documentation tracking | VBMS |

### Remarks
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Additional Information** | `additionalInformation` | No | Supplementary details for claim processing | VBMS |

---

## Section VIII: Certification and Signature

### Veteran Certification
| Field Label | JSON Variable | Required | Data Usage | System of Record |
|-------------|---------------|----------|------------|------------------|
| **Veteran Signature** | `veteranSignature` | Yes | Legal certification of information accuracy | VBMS |
| **Date Signed** | `signatureDate` | Yes | Form completion timestamp | VBMS |

---

## Data Processing Notes

### System Integration
- **Primary System:** VBMS (Veterans Benefits Management System) serves as the main repository for all form data
- **Secondary Systems:** Data may be shared with VBA rating systems and payment processing systems
- **Processing Time:** Typically 30-60 days for standard requests

### Data Retention
- All form data is retained permanently as part of the veteran's official record
- Personal information is protected under the Privacy Act and VA security protocols

### Validation Rules
- SSN format validation (XXX-XX-XXXX)
- Date format validation (MM/DD/YYYY)
- Required field validation based on request type
- Cross-reference validation with existing VA records

---

## Common Use Cases

1. **Adding New Spouse:** Requires marriage certificate and spouse identification
2. **Adding Newborn Child:** Requires birth certificate showing veteran as parent
3. **Removing Divorced Spouse:** Requires divorce decree with effective date
4. **Reporting Death:** Requires death certificate and relationship documentation

---

*This specification is based on VA Form 21-686c and is subject to updates as the form evolves. Always refer to the most current version of the form for official requirements.*
```

