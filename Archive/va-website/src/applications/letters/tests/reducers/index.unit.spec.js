import { expect } from 'chai';

import lettersReducer, { initialState } from '../../reducers';

import {
  AVAILABILITY_STATUSES,
  BACKEND_AUTHENTICATION_ERROR,
  BACKEND_SERVICE_ERROR,
  DOWNLOAD_STATUSES,
  GET_ADDRESS_FAILURE,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_COUNTRIES_SUCCESS,
  GET_ADDRESS_COUNTRIES_FAILURE,
  GET_ADDRESS_STATES_SUCCESS,
  GET_ADDRESS_STATES_FAILURE,
  GET_BENEFIT_SUMMARY_OPTIONS_FAILURE,
  GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS,
  GET_LETTERS_FAILURE,
  GET_LETTERS_SUCCESS,
  GET_LETTER_PDF_DOWNLOADING,
  GET_LETTER_PDF_SUCCESS,
  GET_LETTER_PDF_FAILURE,
  INVALID_ADDRESS_PROPERTY,
  LETTER_ELIGIBILITY_ERROR,
  LETTER_TYPES,
  SAVE_ADDRESS_PENDING,
  SAVE_ADDRESS_SUCCESS,
  SAVE_ADDRESS_FAILURE,
  UPDATE_BENFIT_SUMMARY_REQUEST_OPTION,
  START_EDITING_ADDRESS,
  CANCEL_EDITING_ADDRESS
} from '../../utils/constants';

function reduce(action, state = initialState) {
  return lettersReducer.letters(state, action);
}

const benefitSummaryOptionData = {
  data: {
    attributes: {
      benefitInformation: {
        awardEffectiveDate: '1965-01-01T05:00:00.000+00:00',
        monthlyAwardAmount: 200,
        hasChapter35Eligibility: true
      },
      militaryService: [
        {
          branch: 'ARMY',
          characterOfService: 'HONORABLE',
          enteredDate: '1965-01-01T05:00:00.000+00:00',
          releasedDate: '1972-10-01T04:00:00.000+00:00'
        }
      ]
    }
  }
};

describe('letters reducer', () => {
  it('should not modify state if an unrecognized action is passed', () => {
    const state = reduce({ type: 'FOO_BAR' });

    expect(state).to.deep.equal(initialState);
  });

  it('should handle failure to fetch letters', () => {
    const state = reduce({ type: GET_LETTERS_FAILURE });

    expect(state.letters).to.be.empty;
    expect(state.lettersAvailability).to.equal(AVAILABILITY_STATUSES.unavailable);
  });

  it('should handle backend service error', () => {
    const state = reduce({ type: BACKEND_SERVICE_ERROR });

    expect(state.letters).to.be.empty;
    expect(state.lettersAvailability).to.equal(AVAILABILITY_STATUSES.backendServiceError);
  });

  it('should handle backend authentication error', () => {
    const state = reduce({ type: BACKEND_AUTHENTICATION_ERROR });

    expect(state.letters).to.be.empty;
    expect(state.lettersAvailability).to.equal(AVAILABILITY_STATUSES.backendAuthenticationError);
  });

  it('should handle invalid address', () => {
    const state = reduce({ type: INVALID_ADDRESS_PROPERTY });

    expect(state.letters).to.be.empty;
    expect(state.lettersAvailability).to.equal(AVAILABILITY_STATUSES.invalidAddressProperty);
  });

  it('should handle a successful request for letters', () => {
    const state = reduce(
      {
        type: GET_LETTERS_SUCCESS,
        data: {
          data: {
            attributes: {
              letters: [
                {
                  letterType: LETTER_TYPES.commissary,
                  name: 'Commissary Letter'
                }
              ],
              fullName: 'Johann Bach'
            }
          }
        }
      }
    );

    expect(state.letters[0].name).to.eql('Commissary Letter');
    expect(state.letterDownloadStatus[LETTER_TYPES.commissary]).to.equal(DOWNLOAD_STATUSES.pending);
    expect(state.fullName).to.equal('Johann Bach');
    expect(state.lettersAvailability).to.equal(AVAILABILITY_STATUSES.available);
  });

  it('should handle failure to fetch benefit summary options', () => {
    const state = reduce({ type: GET_BENEFIT_SUMMARY_OPTIONS_FAILURE });

    expect(state.benefitInfo).to.be.empty;
    expect(state.serviceInfo).to.be.empty;
    expect(state.optionsAvailable).to.be.false;
  });

  it('should handle a successful request for benefit summary options', () => {
    const state = reduce(
      {
        type: GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS,
        data: benefitSummaryOptionData
      }
    );

    expect(state.benefitInfo.hasChapter35Eligibility).to.be.true;
    expect(state.serviceInfo[0].branch).to.equal('ARMY');
    expect(state.optionsAvailable).to.be.true;
  });

  it('should update benefit summary request options', () => {
    const state = reduce(
      {
        type: GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS,
        data: benefitSummaryOptionData
      }
    );
    expect(state.requestOptions.chapter35Eligibility).to.be.true;
    expect(state.requestOptions.monthlyAward).to.be.true;
    // TODO: Test what makes it to requestOptions when we have a firmer grasp of the business logic
  });

  it('should handle a successful request for the address', () => {
    const state = reduce(
      {
        type: GET_ADDRESS_SUCCESS,
        data: {
          data: {
            attributes: {
              address: {
                addressOne: '2746 Main St'
              },
              controlInformation: {
                canUpdate: true,
              }
            }
          }
        }
      }
    );

    expect(state.address.addressOne).to.equal('2746 Main St');
    expect(state.canUpdate).to.be.true;
  });

  it('should handle failure to fetch the address', () => {
    const state = reduce({ type: GET_ADDRESS_FAILURE });

    expect(state.address).to.be.empty;
    expect(state.addressAvailability).to.equal(AVAILABILITY_STATUSES.unavailable);
  });

  it('should handle successful request for the countries', () => {
    const countries = ['USA', 'France', 'India'];
    const state = reduce(
      {
        type: GET_ADDRESS_COUNTRIES_SUCCESS,
        countries: {
          data: {
            attributes: {
              countries
            }
          }
        }
      }
    );

    expect(state.countries).to.equal(countries);
    expect(state.countriesAvailable).to.be.true;
  });

  it('should handle an empty response for the countries', () => {
    const state = reduce(
      {
        type: GET_ADDRESS_COUNTRIES_SUCCESS,
        countries: {
          data: {
            attributes: {
              countries: []
            }
          }
        }
      }
    );

    expect(state.countries).to.not.contain('USA');
    expect(state.countriesAvailable).to.be.false;
  });

  it('should handle failure to fetch countries', () => {
    const state = reduce({ type: GET_ADDRESS_COUNTRIES_FAILURE });

    expect(state.countries).to.be.empty;
    expect(state.countriesAvailable).to.be.false;
  });

  it('should handle successful request for the states', () => {
    const states = ['IL', 'MA', 'DC'];
    const state = reduce(
      {
        type: GET_ADDRESS_STATES_SUCCESS,
        states: {
          data: {
            attributes: {
              states
            }
          }
        }
      }
    );

    expect(state.states).to.equal(states);
    expect(state.statesAvailable).to.be.true;
  });

  it('should handle empty response for the states', () => {
    const state = reduce(
      {
        type: GET_ADDRESS_STATES_SUCCESS,
        states: {
          data: {
            attributes: {
              states: []
            }
          }
        }
      }
    );

    expect(state.states).to.not.contain('IL');
    expect(state.statesAvailable).to.be.false;
  });

  it('should handle failure to fetch states', () => {
    const state = reduce({ type: GET_ADDRESS_STATES_FAILURE });

    expect(state.states).to.be.empty;
    expect(state.statesAvailable).to.be.false;
  });


  it('should handle a letter eligibility error', () => {
    const state = reduce({ type: LETTER_ELIGIBILITY_ERROR });

    expect(state.lettersAvailability).to.equal(AVAILABILITY_STATUSES.letterEligibilityError);
  });

  it('should handle updating a benefit summary request option', () => {
    const state = reduce(
      {
        type: UPDATE_BENFIT_SUMMARY_REQUEST_OPTION,
        propertyPath: 'foo',
        value: 'bar'
      }
    );

    expect(state.requestOptions.foo).to.equal('bar');
  });

  it('should handle downloading a pdf', () => {
    const state = reduce(
      {
        type: GET_LETTER_PDF_DOWNLOADING,
        data: 'foo' // The letter name
      }
    );

    expect(state.letterDownloadStatus.foo).to.equal(DOWNLOAD_STATUSES.downloading);
  });

  it('should handle successfully downloading a pdf', () => {
    const state = reduce(
      {
        type: GET_LETTER_PDF_SUCCESS,
        data: 'foo' // The letter name
      }
    );

    expect(state.letterDownloadStatus.foo).to.equal(DOWNLOAD_STATUSES.success);
  });

  it('should handle failing to download a pdf', () => {
    const state = reduce(
      {
        type: GET_LETTER_PDF_FAILURE,
        data: 'foo' // The letter name
      }
    );

    expect(state.letterDownloadStatus.foo).to.equal(DOWNLOAD_STATUSES.failure);
  });

  it('should handle save address pending', () => {
    const state = reduce({ type: SAVE_ADDRESS_PENDING });

    expect(state.savePending).to.be.true;
  });

  it('should handle successfully saving an address', () => {
    const state = reduce(
      {
        type: SAVE_ADDRESS_SUCCESS,
        address: '123 Main St'
      }
    );

    expect(state.address).to.equal('123 Main St');
    expect(state.savePending).to.be.false;
  });

  it('should handle failing to save an address', () => {
    const state = reduce(
      {
        type: SAVE_ADDRESS_FAILURE,
        address: '123 Main St'
      }
    );

    expect(state.savePending).to.be.false;
    expect(state.saveAddressError).to.be.true;
  });

  it('should handle editing and address', () => {
    const state = reduce({ type: START_EDITING_ADDRESS });
    expect(state.isEditingAddress).to.be.true;
  });

  it('should handle cancelling editing and address', () => {
    const state = reduce({ type: CANCEL_EDITING_ADDRESS });
    expect(state.isEditingAddress).to.be.false;
  });
});
