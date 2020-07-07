# Presentation of Biographical Data in the VA.gov Form System
**VSA eBenefits Team | July 2020**

`James Adams, designer`

---

### Situation

Forms are employed across VA.gov to provide an electronic alternative to paper applications. These forms are designed and engineers using standardized practices to deliever a consistent look, feel and function across the site. However, the collection of biographical data (name, DOB, SSN, etc.) from authenticated (logged-in) users falls into two categories: static and editable. There is no consistent indication to the user as to why methods differ.

Users regularly report their frustration with having to enter their "VA-known" information over and over with each new form, so presenting static infomation for review seems to be the correct presentation of known biographical user data. The case for known common data (address, phone, email, etc.) is less clear. Complicating the issue of presenting know data is the variety of Lines of Business (LOB), each with their own needs and constraints, and the large number of backend systems/data sources serving VA.gov.

This proposal explores the available options and presents a case for an "optimal" presentation of known data within the VA.gov form system.

### Form data

| **Biographical data form fields can include:** | **Common data form fields can include:** |
| --- | --- |
| - First Name | - Country |
| - Middle Name (Initial) | - APO/FPO/DPO |
| - Last Name | - Street Address 1 |
| - Suffix | - City |
| - Social Security Number | - State |
| - VA File Number | - ZIP (Postal) Code |
| - Service Number | - Phone Number(s) |
| - Date of Birth | - Email Address(es) |

### Use cases

#### User enters form unauthenticated:
- User completes required fields and submits form

#### User logs in and is authenticated:
- User has no data on-record (Error, missing info, etc.)
- User has partial data on record
- User has erroneous data on record
- User has correct data on-record

### Approaches

#### User enters form unauthenticated:
- Collect all required data

#### User logs in and is authenticated:
- Present static data for review
- Present editable data for review/revision
- Present combination of static/editable data for review/revision/completion

#### Diagram showing various approaches:

![ ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/Form_States_W1.png)

### Recommendations

---

