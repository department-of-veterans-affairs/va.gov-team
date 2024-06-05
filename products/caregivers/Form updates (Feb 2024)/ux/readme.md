**Placeholder page for noting any UX decisions, pattern updates, content recommendations and research**

### Helpful Links
- [Figma working ticket file](https://www.figma.com/file/TxXD5bGUOhbHHWLb85GPjK/10-10CG?type=design&node-id=376-15166&mode=design&t=Mr2muMTvCsSXtxmr-0)
- [Mural user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711491442696/6c33e417dbfd2cb893452606262192fcb79a579b?sender=uadf1ed7fe7c76f0914967329)
- [Figma link to content changes SME document](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=1214-25163&t=U4D0aixhCfiTe1Ht-0)
- [Figma design decision visuals](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=1069-27287&t=y1s0pUO3YbfvRdDQ-4)
- [Mobile Prototype](https://www.figma.com/proto/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=1492-24291&t=y1s0pUO3YbfvRdDQ-0&scaling=scale-down&page-id=376%3A15166&starting-point-node-id=1492%3A24291&prev-org-id=external-teams)

### Summary
- Updates to the online CG form to a) align with the paper form updates, CARMA processing fields and schema update; and b) align with the latest VADS pattern and component guidance.


### Design Decisions

#### [Figma section with visuals](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=1069-27287&t=U4D0aixhCfiTe1Ht-4)

**[WIP] County field**
- Flagged by design system
- Design system team very against a required County field
- Concerned people will enter it incorrectly anyway and it’s wrong to put the burden on the user
- Look into USPS API and Mapbox APIs to see if we can auto-compute this
- Consider maybe asking for postal code first and having that pre-populate other fields including County. There’s some educational friction there because people expect the zip code to be last but it is a pattern being used in other places.
- Consider a dropdown of counties based on postal code or state
- Make it clear to our stakeholders that this puts a lot of unnecessary burden on the user

- **Why does the burden need to fall on the Veteran/Caregiver to provide? Other options available?**



---


**Social Security Numbers**
- Alignment with [DS Social Security Pattern](https://design.va.gov/patterns/ask-users-for/social-security-number)

**Contact info phone number labels**
- approved this deviation from the design system and acknowledged the current pattern probably needs more options for different scenarios (Design Office hours 5/21/24)
- Work with the forms team to make that a variation of the existing phone number pattern

**Caregiver address order**
- We were struggling with guidance in DS to ask for mailing address first
- Approved asking for home address first (Design Office hours 5/21/24)

**Statement of truth - Plain language**
- It's okay for you all to leave in the previous plain language adjustments in the statement of truth sections that are in the version of the form that's in production. When you all have SMEs/stakeholders review, just have them confirm that's okay.



#### Future Notes

**Primary and Secondary Caregiver Clarification**
- Received non-urgent SME feedback to include more clarification around caregiver roles, eligibility and benefits on the intro page and within the form
- Have old epic [ON-HOLD - 10-10CG - Primary/Secondary Caregiver clarification #37541]()


**Relationship to Veteran question**
Content standards are to avoid gendered language whenever possible. We discussed updating with the business and the work to update and align their database fields are not an initiative at this time but they did mention it being on their radar to align with VA-wide standards.

- Have options to select (and in CARMA) and in content be gender neutral.
- Example being: not son or daughter but child, not mother or father but parent.
- Move to own page, one question per page



**Birth sex / gender question**

- Updated label and hint text but not adding option for “X” with these June 2024 updates. Option not available in backend systems and want to align within VA and program.
- SME Answers 5.3.24
- SIGI field in CARMA, but MPI uses Birth Sex field for legal identity traits - If this inforamtion is not provided, it prevents a health record from being created - A health record is created for all Caregivers (Primary and both Secondary) - Working with VA LGBTQ+ contacts & MPI for advisement - Eventually being standardized across VA - Workaround until standard update is implemented - Veteran and Caregivers can provide SIGI with CG staff
- Link provided in chat - https://www.patientcare.va.gov/LGBT/docs/FAQ-BirthSex-SelfIdentifiedGenderIdentityFactSheet.pdf

**Multiple Responses List-and-loop Pattern**

- This just recently became a pattern available in the forms library vs a custom experimental pattern
- There are slight differences between the custom solution and what is available, will determine in ticket #83290 next steps



------


### UX Tickets
- [UX] 10-10CG - Form Update: Update Designs with agreed changes #78497
- [[CAIA intake] Updates to 10-10CG Caregiver Application #81190](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81190)
- [UX] 10-10CG Content Review Process for Form Updates #81922
- [[UX] 10-10CG June Form Updates - Stakeholder Content Check Docs #83393](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83393)
- [[UX]10-10CG Caregiver application post-SME feedback content/design file adjustments #84352](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84352)
- [[UX, FE] 10-10CG - Improvements: Exploration on adding List & Loop pattern on Secondary Caregiver section #83290](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83290)
- 
