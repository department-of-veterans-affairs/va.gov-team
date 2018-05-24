// Action types
// getLetterList() actions
export const BACKEND_AUTHENTICATION_ERROR = 'BACKEND_AUTHENTICATION_ERROR'; // 403
export const BACKEND_SERVICE_ERROR = 'BACKEND_SERVICE_ERROR'; // 503 or 504
export const GET_LETTERS_FAILURE = 'GET_LETTERS_FAILURE';
export const GET_LETTERS_SUCCESS = 'GET_LETTERS_SUCCESS';
export const INVALID_ADDRESS_PROPERTY = 'INVALID_ADDRESS_PROPERTY'; // 422
export const LETTER_ELIGIBILITY_ERROR = 'LETTER_ELIGIBILITY_ERROR';  // 502

// getMailingAddress() actions
export const GET_ADDRESS_FAILURE = 'GET_ADDRESS_FAILURE';
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';

// getAddressCountries() actions
export const GET_ADDRESS_COUNTRIES_FAILURE = 'GET_ADDRESS_COUNTRIES_FAILURE';
export const GET_ADDRESS_COUNTRIES_SUCCESS = 'GET_ADDRESS_COUNTRIES_SUCCESS';

// getAddressStates() actions
export const GET_ADDRESS_STATES_FAILURE = 'GET_ADDRESS_STATES_FAILURE';
export const GET_ADDRESS_STATES_SUCCESS = 'GET_ADDRESS_STATES_SUCCESS';

// getBenefitSummaryOptions() actions
export const GET_BENEFIT_SUMMARY_OPTIONS_FAILURE = 'GET_BENEFIT_SUMMARY_OPTIONS_FAILURE';
export const GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS = 'GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS';

// saveAddress() actions
export const SAVE_ADDRESS_PENDING = 'SAVE_ADDRESS_PENDING';
export const SAVE_ADDRESS_SUCCESS = 'SAVE_ADDRESS_SUCCESS';
export const SAVE_ADDRESS_FAILURE = 'SAVE_ADDRESS_FAILURE';

// getLetterPdf() actions
export const GET_LETTER_PDF_DOWNLOADING = 'GET_LETTER_PDF_DOWNLOADING';
export const GET_LETTER_PDF_FAILURE = 'GET_LETTER_PDF_FAILURE';
export const GET_LETTER_PDF_SUCCESS = 'GET_LETTER_PDF_SUCCESS';

// updateBenefitSummaryRequestOption() actions
export const UPDATE_BENFIT_SUMMARY_REQUEST_OPTION = 'UPDATE_BENFIT_SUMMARY_REQUEST_OPTION';

export const START_EDITING_ADDRESS = 'START_EDITING_ADDRESS';
export const CANCEL_EDITING_ADDRESS = 'CANCEL_EDITING_ADDRESS';

export const AVAILABILITY_STATUSES = Object.freeze({
  awaitingResponse: 'awaitingResponse',
  available: 'available',
  backendServiceError: 'backendServiceError',
  backendAuthenticationError: 'backendAuthenticationError',
  invalidAddressProperty: 'invalidAddressProperty',
  unavailable: 'unavailable',
  letterEligibilityError: 'letterEligibilityError'
});

export const DOWNLOAD_STATUSES = Object.freeze({
  pending: 'pending',
  downloading: 'downloading',
  success: 'success',
  failure: 'failure'
});

export const LETTER_TYPES = Object.freeze({
  benefitSummary: 'benefit_summary',
  commissary: 'commissary',
  proofOfService: 'proof_of_service',
  medicarePartD: 'medicare_partd',
  minimumEssentialCoverage: 'minimum_essential_coverage',
  serviceVerification: 'service_verification',
  civilService: 'civil_service',
  benefitVerification: 'benefit_verification'
});

// Benefit options returned from vets-api, used in UI
export const BENEFIT_OPTIONS = Object.freeze({
  awardEffectiveDate: 'awardEffectiveDate',
  monthlyAwardAmount: 'monthlyAwardAmount',
  serviceConnectedPercentage: 'serviceConnectedPercentage',

  hasNonServiceConnectedPension: 'hasNonServiceConnectedPension',
  hasServiceConnectedDisabilities: 'hasServiceConnectedDisabilities',
  hasSurvivorsIndemnityCompensationAward: 'hasSurvivorsIndemnityCompensationAward',
  hasSurvivorsPensionAward: 'hasSurvivorsPensionAward',
  hasAdaptedHousing: 'hasAdaptedHousing',
  hasChapter35Eligibility: 'hasChapter35Eligibility',
  hasDeathResultOfDisability: 'hasDeathResultOfDisability',
  hasIndividualUnemployabilityGranted: 'hasIndividualUnemployabilityGranted',
  hasSpecialMonthlyCompensation: 'hasSpecialMonthlyCompensation',
});

// Benefit Summary Letter request customization options, subset of BENEFIT_OPTIONS
// Currently only key removed is awardEffectiveDate
export const REQUEST_OPTIONS = Object.freeze({
  monthlyAwardAmount: 'monthlyAwardAmount',
  serviceConnectedPercentage: 'serviceConnectedPercentage',
  hasNonServiceConnectedPension: 'hasNonServiceConnectedPension',
  hasServiceConnectedDisabilities: 'hasServiceConnectedDisabilities',
  hasSurvivorsIndemnityCompensationAward: 'hasSurvivorsIndemnityCompensationAward',
  hasSurvivorsPensionAward: 'hasSurvivorsPensionAward',
  hasAdaptedHousing: 'hasAdaptedHousing',
  hasChapter35Eligibility: 'hasChapter35Eligibility',
  hasDeathResultOfDisability: 'hasDeathResultOfDisability',
  hasIndividualUnemployabilityGranted: 'hasIndividualUnemployabilityGranted',
  hasSpecialMonthlyCompensation: 'hasSpecialMonthlyCompensation',
});

import ADDRESS_DATA from '../../../platform/forms/address/data';

export const STATE_CODE_TO_NAME = ADDRESS_DATA.states;

export const ADDRESS_TYPES = Object.freeze({
  domestic: 'DOMESTIC',
  international: 'INTERNATIONAL',
  military: 'MILITARY'
});

// These probably aren't the best names, but they work...
export const MILITARY_CITIES = new Set(ADDRESS_DATA.militaryCities);
export const MILITARY_STATES = new Set(ADDRESS_DATA.militaryStates);
