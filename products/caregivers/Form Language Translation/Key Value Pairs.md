## Key Value Pairs for the 10-10CG application


### Constant
  - address: 'veteranAddress',
  - alternativePhoneNumber: 'veteranAlternativePhoneNumber',
  - dateOfBirth: 'veteranDateOfBirth',
  - email: 'veteranEmail',
  - facilityType: 'veteranFacilityType',
  - fullName: 'veteranFullName',
  - gender: 'veteranGender',
  - plannedClinic: 'plannedClinic',
  - preferredFacilityInfoView: 'view:preferredFacilityInfo',
  - preferredFacilityStateView: 'veteranFacilityState',
  - preferredFacilityView: 'veteranPreferredFacility',
  - previousTreatmentFacility: 'veteranLastTreatmentFacility',
  - primaryPhoneNumber: 'veteranPrimaryPhoneNumber',
  - ssn: 'veteranSsnOrTin',



  - address: 'primaryAddress',
  - alternativePhoneNumber: 'primaryAlternativePhoneNumber',
  - dateOfBirth: 'primaryDateOfBirth',
  - email: 'primaryEmail',
  - emailEncouragementMessage: 'view:emailEncouragementMessage',
  - fullName: 'primaryFullName',
  - gender: 'primaryGender',
  - hasSecondaryCaregiverOne: 'view:hasSecondaryCaregiverOne',
  - primaryPhoneNumber: 'primaryPrimaryPhoneNumber',
  - ssn: 'primarySsnOrTin',
  - vetRelationship: 'primaryVetRelationship',
  - hasHealthInsurance: 'primaryHasHealthInsurance',
  - hasPrimaryCaregiver: 'view:hasPrimaryCaregiver',



  - address: 'secondaryOneAddress',
  - alternativePhoneNumber: 'secondaryOneAlternativePhoneNumber',
  - dateOfBirth: 'secondaryOneDateOfBirth',
  - email: 'secondaryOneEmail',
  - emailEncouragementMessage: 'view:emailEncouragementMessage',
  - fullName: 'secondaryOneFullName',
  - gender: 'secondaryOneGender',
  - hasSecondaryCaregiverTwo: 'view:hasSecondaryCaregiverTwo',
  - primaryPhoneNumber: 'secondaryOnePrimaryPhoneNumber',
  - ssn: 'secondaryOneSsnOrTin',
  - vetRelationship: 'secondaryOneVetRelationship',



  - address: 'secondaryTwoAddress',
  - alternativePhoneNumber: 'secondaryTwoAlternativePhoneNumber',
  - dateOfBirth: 'secondaryTwoDateOfBirth',
  - email: 'secondaryTwoEmail',
  - emailEncouragementMessage: 'view:emailEncouragementMessage',
  - fullName: 'secondaryTwoFullName',
  - gender: 'secondaryTwoGender',
  - primaryPhoneNumber: 'secondaryTwoPrimaryPhoneNumber',
  - ssn: 'secondaryTwoSsnOrTin',
  - vetRelationship: 'secondaryTwoVetRelationship',



  - signAsRepresentativeYesNo: 'signAsRepresentativeYesNo',
  - documentUpload: 'signAsRepresentativeDocumentUpload',


### Content
- export const downloadErrorsByCode = 
    - 'We’re sorry. VA.gov is down right now. If you need help right now, please call the VA Help Desk at 800-698-2411. If you have hearing loss, call TTY:711.',
  default:
    - 'We’re sorry. Something went wrong on our end. If you need help right now, please call the VA Help Desk at 800-698-2411. If you have hearing loss, call TTY:711.',

  - findLocations: {
    - link: 'https://www.va.gov/find-locations',
    - label: 'Find locations with our facility locator tool',
 
  - caregiverSupportCoordinators: {
    - link: 'https://www.caregiver.va.gov/support/New_CSC_Page.asp',
    - label: 'Use our online Caregiver Support Coordinator search tool',
  
  - caregiverHelp: {
    - link: 'https://www.caregiver.va.gov/help_landing.asp',
    - label: 'Get help filing your claim.',
  
  - caregiverHelpPage: {
    - link: 'https://www.caregiver.va.gov/',
    - label: 'www.caregiver.va.gov',
  
  - applyVAHealthCare: {
    - link: 'https://www.va.gov/health-care/how-to-apply/',
    - label: 'Application for Health Benefits',
 
  - privacyPolicy: {
    - link: 'https://www.va.gov/privacy-policy/',


- export const veteranLabel = `Veteran\u2019s`;
- export const primaryLabel = `Primary Family Caregiver applicant\u2019s`;
- export const representativeLabel = `Representative\u2019s`;
- export const secondaryOneLabel = `Secondary Family Caregiver applicant\u2019s`;
- export const secondaryTwoLabel = `Secondary Family Caregiver (2) applicant\u2019s`;
- export const primaryPageIntro = `Please complete the following information about the Primary Family Caregiver.`;
- export const primaryContactIntro = `If the Primary Family Caregiver\u2019s address is the same as the Veteran\u2019s address, we can fill those fields out for you.`;
- export const secondaryOnePageIntro = `Please complete the following information about the Secondary Family Caregiver.`;
- export const secondaryTwoPageIntro = `Please complete the following information about the Secondary Family Caregiver (2).`;
- export const secondaryOneContactIntro = `If the Secondary Family Caregiver\u2019s address is the same as the Veteran\u2019s address, we can fill those fields out for you.`;
- export const secondaryTwoContactIntro = `If the Secondary Family Caregiver\u2019s (2) address is the same as the Veteran\u2019s address, we can fill those fields out for you.`;

- export const veteranSignatureContent = [
  - 'I certify that I give consent to the individual(s) named in this application to perform personal care services for me upon being approved as Primary and/or Secondary Family Caregivers in the Program of Comprehensive Assistance for Family Caregivers.',


- export const primaryCaregiverContent = [
  - 'I certify that I am at least 18 years of age.',
  - 'I certify that either: (1) I am a member of the Veteran\u2019s family (including a parent, spouse, a son or daughter, a step-family member, or an extended family member) OR (2) I am not a member of the Veteran\u2019s family, and I reside with the Veteran full-time or will do so upon designation as the Veteran\u2019s Primary Family Caregiver.',
  - 'I agree to perform personal care services as the Primary Family Caregiver for the Veteran named on this application.',
  - 'I understand that the Veteran or the Veteran\u2019s surrogate may request my discharge from the Program of Comprehensive Assistance for Family Caregivers (PCAFC) at any time and that my designation as a Primary Family Caregiver may be revoked or I may be discharged from PCAFC by the Secretary of Veterans Affairs (or designee) as set forth in 38 CFR 71.45.',
  - 'I understand that participation in the PCAFC does not create an employment relationship between me and the Department of Veterans Affairs.',

- export const secondaryCaregiverContent = [
  - 'I certify that I am at least 18 years of age.',
  - 'I certify that either: (1) I am a member of the Veteran\u2019s family (including a parent, spouse, a son or daughter, a step-family member, or an extended family member) OR (2) I am not a member of the Veteran\u2019s family, and I reside with the Veteran full-time or will do so upon designation as the Veteran\u2019s Secondary Family Caregiver.',
  - 'I agree to perform personal care services as the Secondary Family Caregiver for the Veteran named on this application.',
  - 'I understand that the Veteran or the Veteran\u2019s surrogate may request my discharge from the Program of Comprehensive Assistance for Family Caregivers (PCAFC) at any time and that my designation as a Secondary Family Caregiver may be revoked or I may be discharged from PCAFC by the Secretary of Veterans Affairs (or designee) as set forth in 38 CFR 71.45.',
  - 'I understand that participation in the PCAFC does not create an employment relationship between me and the Department of Veterans Affairs.',


- export const representativeSignatureContent = [
  - 'Signed by the Veteran’s legal representative on behalf of the Veteran.',
  - 'I certify that I give consent to the individual(s) named in this application to perform personal care services for me (or if the Veteran’s Representative, the Veteran) upon being approved as a Primary and/or Secondary Family Caregiver(s) in the Program of Comprehensive Assistance for Family Caregivers.',


- export const signatureBoxNoteContent =
  - 'According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or providing incorrect information. (See 18 U.S.C. 1001)';
