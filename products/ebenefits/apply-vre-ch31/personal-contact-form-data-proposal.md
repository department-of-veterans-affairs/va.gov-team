# Presentation of personal and contact information within the VA.gov form system
**VSA eBenefits Team | July 2020**

`James Adams, designer`

---

### Situation

Forms are employed across VA.gov to provide an electronic alternative to paper applications. These forms are designed and engineers using standardized practices to deliver a consistent look, feel and function across the site. However, the collection of personal data (name, DOB, SSN, etc.) from authenticated (logged-in) users falls into two categories: static and editable. There is no consistent indication to the user as to why methods differ.

Users regularly report their frustration with having to enter their "VA-known" information over and over with each new form, so presenting static information for review seems to be the correct presentation of known personal user data. The case for known contact info (address, phone, email, etc.) is less clear. Complicating the issue of presenting know data is the variety of Lines of Business (LOB), each with their own needs and constraints, and the large number of backend systems/data sources serving VA.gov.

This proposal explores the available options and presents a case for an "optimal" presentation of known data within the VA.gov form system.

### Form data

| **Personal data form fields can include:** | **Contact data form fields can include:** |
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

Forms on VA.gov are processed by various Lines of Business. These LOBs often have different backend systems and data sources that help process applications, and they each use their own balance of automated and 'manual' procedures to move submissions through their respective workflows. These processing differences drive how forms present (known) personal and contact info is presented to users.

The systems associated with VA.gov are VA-Profile-integrated, and indicated by a gold star icon.
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/Gold_Star.png" alt="gold star icon" width="25">

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

There are many databases and repositories within the VA ecosystem that serve as sources for users' personal and contact info, with several being considered 'sources of truth.' However, users of VA.gov expect that their known information is centralized and accessible at all VA touchpoints. 

#### Considerations

1. Consistent rationale and pattern(s) are needed across VA.gov
2. Unauthenticated users should understand their data is application-only
3. Unauthenticated users should be encouraged to sign-in to complete forms
4. Authenticated users may have one, two or no addresses in their profile, and possibly missing info
5. Authenticated users need a path to remedy data errors
6. Users should stay in the form to reduce abandonment

#### Scenario 1: Unauthenticated users

This case is relaitvely strtightforward. For forms that don't require a sign-in, users can access the form unauthenticated. Personal and contact info are entered by the user and submitted to the LOB. All form fields will be presented per requirements. The LOB receiving this data will process the form and update the 'canon' databases as needed--likely, manually.

We suggest adding a brief statement regarding how a user's information will be used--possibly at the top of the form's initial screen. This statement will complement the messaging in the sign-in widget on the form intro page:

> Because you are not signed-in, any information you enter will only be used for this application. 

Additionally, a sign-in link could be presented to encourage the user to authenticate:

> To use information we have on file, sign in.

Mockups showing unauthenticated begin [here.](https://xd.adobe.com/view/0c64c9ff-aba2-422e-4d6e-be1ec4cab845-7a55/screen/bf06d4a5-e662-4beb-be90-588529883ef9)

![ ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/Unauthenticated.png)

#### Scenario 2: Authenticated users with known contact data

### CARD PRESENTATION

Authenticated users have confirmed personal data, but their contact info can--and often does--change. If there are known addresses within VA-profile, existing contact info 'should' be used to complete the form, but the user should be allowed to update old/bad info within the form with an expectation that this will populate throughout the system.

**Use case 1: User has single instances of all required contact info (e.g. addresses) for form** This is the simplest case. The user is presented all info known/required. A link will expand a section into an editable list/loop-style 'formlet.' If contact data is populated by an 'uneditible' system, the user will not have an edit link.

**Use case 2: User has multiple instances of all required contact info for form** If there are two addresses on record (mailing and home), the user should have the option to override the mailing address in favor of the home location. Other contact info could be presented together, with a single 'default' instance being presented; e.g. home phone. Required contact info outside of what's available from the VA profile can be collected on a subsequent screen.

**Use case 3: User has missing required info for form** One thought here is to expand a given section to reveal the missing required info. The 'formlet' could be pre-filled with what's known, and prompt the user to supply the missing required info. The user would be prompted a field-level error when trying to proceed without providing the required data.

Mockups showing the 'card' authenticated variation begin [here.](https://xd.adobe.com/view/0c64c9ff-aba2-422e-4d6e-be1ec4cab845-7a55/screen/56f1579b-ce0a-46ab-b336-684ac17b8ff2)

![ ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/Authenticated.png)

#### Scenario 2: Authenticated users with known contact data

### PRE-FILL PRESENTATION

Authenticated users will see pre-filled data within editable form fields. Know data will be pulled from Your Profile if possible, and editing will be allowed within the context of the form. a lightweight info box will inform the user as to whether or not their profile will be updated. Alternatively, the user could 'opt-in' to have their profile updated by checking a box.

**Use case 1: User has single instances of all required contact info (e.g. addresses) for form** The user will see pre-filled form fields, review (or edit as needed, and continue. Mailing address and home phone will be presented by default.

**Use case 2: User has multiple instances of all required contact info for form** The user will see the same presentation as the use case above. Radio button selectors will allow the user to select and/or edit contact info.

**Use case 3: User has missing required info for form** Again, the user will see pre-filled data, review the information, then comple any missing required fields to continue.

Mockups showing the 'pre-fill' authenticated variation begin [here.](https://xd.adobe.com/view/0c64c9ff-aba2-422e-4d6e-be1ec4cab845-7a55/screen/2501c294-379b-42c9-80fc-54822ebd43ec)

---

