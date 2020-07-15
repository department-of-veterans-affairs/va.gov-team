# Presentation of Biographical Data in the VA.gov Form System
**VSA eBenefits Team | July 2020**

`James Adams, designer`

---

### Situation

Forms are employed across VA.gov to provide an electronic alternative to paper applications. These forms are designed and engineers using standardized practices to deliver a consistent look, feel and function across the site. However, the collection of biographical data (name, DOB, SSN, etc.) from authenticated (logged-in) users falls into two categories: static and editable. There is no consistent indication to the user as to why methods differ.

Users regularly report their frustration with having to enter their "VA-known" information over and over with each new form, so presenting static information for review seems to be the correct presentation of known biographical user data. The case for known common data (address, phone, email, etc.) is less clear. Complicating the issue of presenting know data is the variety of Lines of Business (LOB), each with their own needs and constraints, and the large number of backend systems/data sources serving VA.gov.

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

### Data sources

Forms on VA.gov are processed by various Lines of Business. These LOBs often have different backend systems and data sources that help process applications, and they each use their own balance of automated and 'manual' procedures to move submissions through their respective workflows. These processing differences drive how forms present (known) biographical and common data is presented to users.

![ ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/Data_Architecture.png)

---

### Approaches

#### User enters form unauthenticated:
- Collect all required data

#### User logs in and is authenticated:
- Present static data for review
- Present editable data for review/revision
- Present combination of static/editable data for review/revision/completion

#### Diagram showing various approaches:

![ ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/Form_States_W1.png)

---

### Recommendations

There are many databases and repositories within the VA ecosystem that serve as sources for users' biographical and common data, with several being considered 'sources of truth.' However, users of VA.gov expect that their known information is centralized and accessible at all VA touchpoints. 

#### Considerations

1. Consistent patterns are needed across VA.gov
2. Unauthenticated users should understand their data is application-only
3. Authenticated users should be encouraged to sign-in to complete forms
4. Authenticated users may have one, two or no addresses in their profile
5. Authenticated users need a path to remedy data errors
6. Users should stay in the form to reduce abandonment



#### Unauthenticated users

This case is relaitvely strtightforward. For forms that don't require a user to sign-in, biographical and common data are entered by the user and submitted to the LOB. All form fields will be presented per requirements, and the user is free to enter all information. The LOB receiving this data will process the form and update the 'canon' databases as needed--likely, manually.

We suggest adding a brief statement regarding how a user's information will be used--possibly at the top of the form's initial screen. This statement will complement the messaging in the sign-in widget on the form intro page.

> Because you are not signed-in, any information you enter will apply only to this application.

Additionally, a sign-in link could be presented:

> To use information we have on file, sign in.

#### Authenticated users



---

