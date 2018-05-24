import environment from '../../platform/utilities/environment';

// Base URL to be used in API requests.
export const api = {
  url: `${environment.API_URL}/v0/facilities/va`,
  settings: {
    headers: {
      'X-Key-Inflection': 'camel',
    }
  }
};

/* eslint-disable camelcase */
export const facilityTypes = {
  va_health_facility: 'Health',
  va_cemetery: 'Cemetery',
  va_benefits_facility: 'Benefits',
  vet_center: 'Vet Center',
  health: 'Health',
  cemetery: 'Cemetery',
  benefits: 'Benefits',
};
/* eslint-enable camelcase */

export const benefitsServices = {
  All: 'All',
  ApplyingForBenefits: 'Applying for benefits',
  BurialClaimAssistance: 'Burial claim help',
  DisabilityClaimAssistance: 'Disability claim help',
  eBenefitsRegistrationAssistance: 'eBenefits registration help',
  EducationAndCareerCounseling: 'Education and career counseling',
  EducationClaimAssistance: 'Education claim help',
  FamilyMemberClaimAssistance: 'Family member claim help',
  HomelessAssistance: 'Help for homeless Veterans',
  VAHomeLoanAssistance: 'VA Home Loan help',
  InsuranceClaimAssistanceAndFinancialCounseling: 'Insurance claim help and financial counseling',
  IntegratedDisabilityEvaluationSystemAssistance: 'Integrated Disability Evaluation System Assistance (IDES)',
  PreDischargeClaimAssistance: 'Pre-discharge claim help',
  TransitionAssistance: 'Transition help',
  UpdatingDirectDepositInformation: 'Updating direct deposit information',
  VocationalRehabilitationAndEmploymentAssistance: 'Vocational Rehabilitation and Employment (VR&E) help',
};

export const vetCenterServices = [
  'Individual and group counseling for Veterans, Servicemembers, and their families',
  'Family counseling for military related issues',
  'Bereavement (grief) counseling',
  'Military sexual trauma counseling and referral',
  'Community outreach and education',
  'Substance abuse assessment and referral',
  'Employment referral',
  'Referral of other VA services',
];

export const healthFacilityServices = [
  'AllergyAndImmunology',
  'Audiology',
  'CardiacSurgery',
  'CardiologyCareServices',
  'ColoRectalSurgery',
  'ComplementaryAlternativeMed',
  'DentalServices',
  'DermatologyCareServices',
  'Diabetes',
  'DiagnosticServices',
  'Dialysis',
  'EmergencyDept',
  'Endocrinology',
  'ENT',
  'EyeCare',
  'Gastroenterology',
  'GeneralSurgery',
  'Gynecology',
  'Hematology',
  'ImagingAndRadiology',
  'InfectiousDisease',
  'InternalMedicine',
  'LabServices',
  'MentalHealthCare',
  'Nephrology',
  'Neurology',
  'Neurosurgery',
  'Oncology',
  'Orthopedics',
  'OutpatientMedicalSpecialty',
  'OutpatientMHCare',
  'OutpatientSpecMHCare',
  'OutpatientSurgicalSpecialty',
  'PainManagement',
  'PlasticSurgery',
  'Podiatry',
  'PrimaryCare',
  'PulmonaryRespiratoryDisease',
  'Rehabilitation',
  'Rheumatology',
  'SleepMedicine',
  'ThoracicSurgery',
  'UrgentCare',
  'Urology',
  'VascularSurgery',
  'VocationalAssistance',
  'WellnessAndPreventativeCare',
];
