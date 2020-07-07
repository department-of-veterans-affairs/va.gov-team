# Presentation of Biographical Data in the VA.gov Form System
**VSA eBenefits Team | July 2020**

`James Adams, designer`

---

### Situation

Forms are employed across VA.gov to provide an electronic alternative to paper applications. These forms are designed and engineers using standardized practices to deliever a consistent look, feel and function across the site. However, the collection of biographical data (name, DOB, SSN, etc.) from authenticated (logged-in) users falls into two categories: static and editable. There is no consistent indication to the user as to why methods differ.

Users regularly report their frustration with having to enter their "VA-known" information over and over with each new form, so presenting static infomation for review seems to be the correct presentation of known biographical user data. The case for known common data (address, phone, email, etc.) is less clear.

This proposal explores the available options and presents a case for an "optimal" presentation of known data within the VA.gov form system.

### Form data

#### Biographical data form fields can include:
- First Name
- Middle Name (Initial)
- Last Name
- Suffix
- Social Security Number
- VA File Number
- Service Number
- Date of Birth

#### Common data form fields can include:
Address (Primary, secondary, mailing, physical, etc.)
- Country
- APO/FPO/DPO
- Street Address 1
- Street Address 2
- Street Address 3
- City
- ZIP (Postal) Code

Phone Number(s)
- Home
- Mobile

Email Address
- Primary 
- Secondary

#### Use cases for form data:
User logs in and is authenticated
- User has no data on-record (Error, missing info, etc.)
- User has partial data on record
- User has erroneous data on record
- User has correct data on-record

User enters form unauthenticated
- User completes required fields and submits form

#### Approaches for presenting form data:
User logs in and is authenticated
- Present static data for review
- Present editable data for review/revision
- Present combination of static/editable data for review/revision/completion

User enters form unauthenticated
- Collect all required data

---

