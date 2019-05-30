import { expect } from 'chai';
import sinon from 'sinon';

import {
  ADDRESS_TYPES,
  BACKEND_SERVICE_ERROR,
  BACKEND_AUTHENTICATION_ERROR,
  GET_ADDRESS_COUNTRIES_SUCCESS,
  GET_ADDRESS_COUNTRIES_FAILURE,
  GET_ADDRESS_STATES_SUCCESS,
  GET_ADDRESS_STATES_FAILURE,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILURE,
  GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS,
  GET_BENEFIT_SUMMARY_OPTIONS_FAILURE,
  GET_LETTER_PDF_DOWNLOADING,
  GET_LETTER_PDF_SUCCESS,
  GET_LETTER_PDF_FAILURE,
  GET_LETTERS_SUCCESS,
  GET_LETTERS_FAILURE,
  LETTER_ELIGIBILITY_ERROR,
  LETTER_TYPES,
  SAVE_ADDRESS_PENDING,
  SAVE_ADDRESS_FAILURE,
  SAVE_ADDRESS_SUCCESS,
} from '../../utils/constants';

import {
  getLetterList,
  getLetterListAndBSLOptions,
  getMailingAddress,
  getBenefitSummaryOptions,
  getLetterPdf,
  saveAddress,
  getAddressCountries,
  getAddressStates,
} from '../../actions/letters';

/**
 * Setup() for each test requires stubbing global fetch() and setting userToken
 * in global sessionStorage. Teardown() resets everything back to normal
 */
let oldFetch;
let oldSessionStorage;
let oldWindow;
const setup = () => {
  oldSessionStorage = global.sessionStorage;
  oldFetch = global.fetch;
  oldWindow = global.window;
  global.sessionStorage = {
    userToken: '123abc'
  };
  global.fetch = sinon.stub();
  global.fetch.returns(Promise.resolve({
    headers: { get: () => 'application/json' },
    ok: true,
    json: () => Promise.resolve({})
  }));
  global.window.dataLayer = [];
  global.window.URL = {
    createObjectURL: () => { },
    revokeObjectURL: () => { }
  };
};
const teardown = () => {
  global.fetch = oldFetch;
  global.sessionStorage = oldSessionStorage;
  global.window = oldWindow;
};
const getState = () => ({});

describe('saveAddress', () => {
  const frontEndAddress = {
    addressOne: '123 Any Street',
    addressThree: '',
    addressTwo: 'Apt 102',
    city: 'APO',
    countryName: 'USA',
    stateCode: 'AE',
    type: ADDRESS_TYPES.military,
    zipCode: '12345',
    zipSuffix: ''
  };

  const successResponse = {
    data: {
      attributes: {
        address: {
          addressEffectiveDate: null,
          addressOne: frontEndAddress.addressOne,
          addressThree: frontEndAddress.addressThree,
          addressTwo: frontEndAddress.addressTwo,
          militaryPostOfficeTypeCode: frontEndAddress.city,
          militaryStateCode: frontEndAddress.stateCode,
          type: frontEndAddress.type,
          zipCode: frontEndAddress.zipCode,
          zipSuffix: frontEndAddress.zipSuffix
        }
      }
    }
  };

  beforeEach(setup);
  afterEach(teardown);

  it('dispatches SAVE_ADDRESS_PENDING first', (done) => {
    const thunk = saveAddress(frontEndAddress);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(SAVE_ADDRESS_PENDING);
      }).then(done, done);
  });

  it('dispatches SAVE_ADDRESS_FAILURE when addresses do not match', (done) => {
    const thunk = saveAddress(frontEndAddress);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        expect(action.type).to.equal(SAVE_ADDRESS_FAILURE);
        done();
      });
  });

  it('dispatches SAVE_ADDRESS_SUCCESS on update success', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(successResponse)
    }));
    const thunk = saveAddress(frontEndAddress);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        expect(action.address).to.eql(frontEndAddress);
        expect(action.type).to.equal(SAVE_ADDRESS_SUCCESS);
      }).then(done, done);
  });

  it('dispatches SAVE_ADDRESS_FAILURE on update failure', (done) => {
    global.fetch.returns(Promise.reject({}));
    const thunk = saveAddress(frontEndAddress);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        expect(action.type).to.equal(SAVE_ADDRESS_FAILURE);
        done();
      });
  });
});

describe('getLettersList', () => {
  beforeEach(setup);
  afterEach(teardown);

  const lettersResponse = {
    data: {
      attributes: {
        letters: [
          { name: 'Proof of Service Letter', letterType: 'proof_of_service' },
          { name: 'Civil Service Preference Letter', letterType: 'civil_service' }
        ],
        fullName: 'Mark Webb'
      },
      id: null,
      type: 'evss_letters_letters_response'
    }
  };

  it('dispatches GET_LETTERS_SUCCESS when GET succeeds', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(lettersResponse)
    }));
    const dispatch = sinon.spy();
    getLetterList(dispatch)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(GET_LETTERS_SUCCESS);
        expect(action.data).to.eql(lettersResponse);
      }).then(done, done);
  });

  it('dispatches GET_LETTERS_FAILURE when GET fails with generic error', (done) => {
    global.fetch.returns(Promise.reject(new Error('something went wrong')));
    const dispatch = sinon.spy();
    getLetterList(dispatch)
      .then(() => {
        done(new Error('getLetterList should have rejected but resolved instead'));
      }).catch(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(GET_LETTERS_FAILURE);
        done();
      });
  });

  const lettersErrors = {
    503: BACKEND_SERVICE_ERROR,
    504: BACKEND_SERVICE_ERROR,
    403: BACKEND_AUTHENTICATION_ERROR,
    502: LETTER_ELIGIBILITY_ERROR,
    500: GET_LETTERS_FAILURE
  };

  Object.keys(lettersErrors).forEach((code) => {
    it(`dispatches ${lettersErrors[code]} when GET fails with ${code}`, (done) => {
      global.fetch.returns(Promise.reject({
        errors: [{ status: `${code}` }]
      }));

      const dispatch = sinon.spy();
      getLetterList(dispatch)
        // Just get to the test already!
        // Note: This could swallow unexpected errors
        .catch(() => Promise.resolve())
        .then(() => {
          const action = dispatch.firstCall.args[0];
          expect(action.type).to.equal(lettersErrors[code]);
        }).then(done, done);
    });
  });
});

describe('getLetterListAndBSLOptions', () => {
  beforeEach(setup);
  afterEach(teardown);

  it('should make the call to get the BSL options after the letter list call is complete', (done) => {
    const thunk = getLetterListAndBSLOptions();
    const dispatch = () => {};

    thunk(dispatch).then(() => {
      expect(global.fetch.callCount).to.equal(2);
      expect(global.fetch.firstCall.args[0].endsWith('/v0/letters')).to.be.true;
      expect(global.fetch.secondCall.args[0].endsWith('/v0/letters/beneficiary')).to.be.true;
      done();
    });
  });

  it('should not make the call to get the BSL options if the letter list call fails', (done) => {
    global.fetch.returns(Promise.reject());
    const thunk = getLetterListAndBSLOptions();
    const dispatch = () => {};

    thunk(dispatch).then(() => {
      expect(global.fetch.callCount).to.equal(1);
      done();
    });
  });
});

describe('getMailingAddress', () => {
  beforeEach(setup);
  afterEach(teardown);

  const addressResponse = {
    data: {
      attributes: {
        address: {
          type: 'DOMESTIC',
          addressEffectiveDate: '1973-01-01T05:00:00.000+00:00',
          addressOne: '140 Rock Creek Church Rd NW',
          addressTwo: '',
          addressThree: '',
          city: 'Washington',
          stateCode: 'DC',
          zipCode: '20011',
          zipSuffix: '1865'
        },
        controlInformation: {
          canUpdate: true,
          corpAvailIndicator: true,
          corpRecFoundIndicator: true,
          hasNoBdnPaymentsIndicator: true,
          isCompetentIndicator: true,
          indentityIndicator: true,
          indexIndicator: true,
          noFiduciaryAssignedIndicator: true,
          notDeceasedIndicator: true
        }
      }
    }
  };

  it('dispatches GET_ADDRESS_SUCCESS when GET succeeds', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(addressResponse)
    }));

    const thunk = getMailingAddress();
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(GET_ADDRESS_SUCCESS);
      }).then(done, done);
  });

  it('dispatches GET_ADDRESS_FAILURE when GET fails', (done) => {
    global.fetch.returns(Promise.reject({}));
    const thunk = getMailingAddress();
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(GET_ADDRESS_FAILURE);
      }).then(done, done);
  });

  it('dispatches GET_ADDRESS_FAILURE when response mangled', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve({})
    }));
    const thunk = getMailingAddress();
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(GET_ADDRESS_FAILURE);
      }).then(done, done);
  });

  // Note: not really sure we need to test this as long as the next test passes
  it('dispatches with clone of response object (not original)', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(addressResponse)
    }));
    const thunk = getMailingAddress();
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.data).to.not.equal(addressResponse);
      }).then(done, done);
  });

  it('modifies military addresses', (done) => {
    const militaryAddress = {
      ...addressResponse.data.attributes.address,
      type: 'MILITARY',
      militaryPostOfficeTypeCode: 'APO',
      militaryStateCode: 'AE'
    };

    const militaryResponse = { ...addressResponse };
    militaryResponse.data.attributes.address = {
      ...addressResponse.data.attributes.address,
      ...militaryAddress
    };

    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(militaryResponse)
    }));
    const thunk = getMailingAddress();
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        const { address } = action.data.data.attributes; // Actual
        const { militaryPostOfficeTypeCode, militaryStateCode } = militaryAddress; // Test
        expect(address.city).to.equal(militaryPostOfficeTypeCode);
        expect(address.stateCode).to.equal(militaryStateCode);
        expect(address.militaryPostOfficeTypeCode).to.be.undefined;
        expect(address.militaryStateCode).to.be.undefined;
      }).then(done, done);
  });
});

describe('getBenefitSummaryOptions', () => {
  beforeEach(setup);
  afterEach(teardown);

  const mockResponse = {
    data: {
      attributes: {
        benefitInformation: {
          hasNonServiceConnectedPension: true,
          hasServiceConnectedDisabilities: true,
          hasSurvivorsIndemnityCompensationAward: true,
          hasSurvivorsPensionAward: true,
          monthlyAwardAmount: 123.5,
          serviceConnectedPercentage: 2,
          awardEffectiveDate: true,
          hasAdaptedHousing: true,
          hasChapter35Eligibility: true,
          hasDeathResultOfDisability: true,
          hasIndividualUnemployabilityGranted: true,
          hasSpecialMonthlyCompensation: true
        },
        militaryService: [
          {
            branch: 'ARMY',
            characterOfService: 'HONORABLE',
            enteredDate: '1973-01-01T05:00:00.000+00:00',
            releasedDate: '1977-10-01T04:00:00.000+00:00'
          }
        ]
      },
      id: null,
      type: 'evss_letters_letter_beneficiary_response'
    }
  };

  it('dispatches SUCCESS action with response when GET succeeds', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(mockResponse)
    }));
    const dispatch = sinon.spy();

    getBenefitSummaryOptions(dispatch, getState)
      .then(() => {
        const action = dispatch.args[0][0]; // first call, first arg
        expect(action.type).to.equal(GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS);
        expect(action.data).to.eql(mockResponse);
      }).then(done, done);
  });

  it('dispatches FAILURE action when GET fails', (done) => {
    global.fetch.returns(Promise.reject({}));
    const dispatch = sinon.spy();

    getBenefitSummaryOptions(dispatch, getState)
      .then(() => {
        done(new Error('getBenefitSummaryOptions should have rejected but resolved instead'));
      }).catch(() => {
        expect(dispatch.calledWith({ type: GET_BENEFIT_SUMMARY_OPTIONS_FAILURE })).to.be.true;
        done();
      });
  });
});

describe('getLetterPdf', () => {
  beforeEach(setup);
  afterEach(teardown);

  const benefitSLetter = {
    letterName: 'Benefit Summary Letter',
    letterType: LETTER_TYPES.benefitSummary,
    letterOptions: {
      militaryService: true,
      monthlyAward: true,
      serviceConnectedEvaluation: true,
      chapter35Eligibility: true,
      serviceConnectedDisabilities: true
    }
  };

  const civilSLetter = {
    letterName: 'Civil Service Preference Letter',
    letterType: LETTER_TYPES.civilService,
    letterOptions: {
      // Opts only relevant for BSL but ATM required in every download link
      militaryService: true,
      monthlyAward: true,
      serviceConnectedEvaluation: true,
      chapter35Eligibility: true,
      serviceConnectedDisabilities: true
    }
  };

  it('dispatches download pending action first', (done) => {
    const { letterType, letterName, letterOptions } = benefitSLetter;
    const thunk = getLetterPdf(letterType, letterName, letterOptions);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.firstCall.args[0];
        expect(action.type).to.equal(GET_LETTER_PDF_DOWNLOADING);
        expect(action.data).to.equal(letterType);
      }).then(done, done);
  });

  it('dispatches SUCCESS action when fetch succeeds for BSL', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/octet-stream' },
      ok: true,
      blob: () => Promise.resolve({ test: '123 testing' })
    }));
    const { letterType, letterName, letterOptions } = benefitSLetter;
    const thunk = getLetterPdf(letterType, letterName, letterOptions);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        expect(action.type).to.equal(GET_LETTER_PDF_SUCCESS);
      }).then(done, done);
  });

  it('dispatches SUCCESS action when fetch succeeds for non-BSL', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/octet-stream' },
      ok: true,
      blob: () => Promise.resolve({ test: '123 testing' })
    }));
    const { letterType, letterName, letterOptions } = civilSLetter;
    const thunk = getLetterPdf(letterType, letterName, letterOptions);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        expect(action.type).to.equal(GET_LETTER_PDF_SUCCESS);
      }).then(done, done);
  });

  it('dispatches SUCCESS action when fetch succeeds on IE10', (done) => {
    const ieDownloadSpy = sinon.spy();
    const blobObj = { test: '123 testing' };
    global.window.navigator.msSaveOrOpenBlob = ieDownloadSpy; // fakes IE
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/octet-stream' },
      ok: true,
      blob: () => Promise.resolve(blobObj)
    }));
    const { letterType, letterName, letterOptions } = civilSLetter;
    const thunk = getLetterPdf(letterType, letterName, letterOptions);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        const msBlobArgs = ieDownloadSpy.firstCall.args;
        expect(action.type).to.equal(GET_LETTER_PDF_SUCCESS);
        expect(msBlobArgs).to.have.members([blobObj, `${letterName}.pdf`]);
      }).then(done, done);

  });

  it('dispatches FAILURE action if download fails', (done) => {
    global.fetch.returns(Promise.reject(new Error('Oops, this failed')));
    const { letterType, letterName, letterOptions } = benefitSLetter;
    const thunk = getLetterPdf(letterType, letterName, letterOptions);
    const dispatch = sinon.spy();
    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.secondCall.args[0];
        expect(action.type).to.equal(GET_LETTER_PDF_FAILURE);
      }).then(done, done);
  });
});

describe('getAddressCountries', () => {
  beforeEach(setup);
  afterEach(teardown);

  const countriesResponse = {
    data: {
      attributes: {
        countries: [
          { name: 'USA' },
          { name: 'Afghanistan' }
        ]
      }
    }
  };

  it('dispatches SUCCESS when GET succeeds', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(countriesResponse)
    }));
    const thunk = getAddressCountries();
    const dispatch = sinon.spy();

    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.args[0][0]; // first call, first arg
        expect(action.type).to.equal(GET_ADDRESS_COUNTRIES_SUCCESS);
        expect(action.countries).to.eql(countriesResponse);
      }).then(done, done);
  });

  it('dispatches FAILURE when GET fails', (done) => {
    global.fetch.returns(Promise.reject({}));
    const thunk = getAddressCountries();
    const dispatch = sinon.spy();

    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.args[0][0]; // first call, first arg
        expect(action.type).to.equal(GET_ADDRESS_COUNTRIES_FAILURE);
      }).then(done, done);
  });
});

describe('getAddressStates', () => {
  beforeEach(setup);
  afterEach(teardown);

  const statesResponse = {
    data: {
      attributes: {
        states: [
          { name: 'CA' },
          { name: 'AK' }
        ]
      }
    }
  };

  it('dispatches SUCCESS when GET succeeds', (done) => {
    global.fetch.returns(Promise.resolve({
      headers: { get: () => 'application/json' },
      ok: true,
      json: () => Promise.resolve(statesResponse)
    }));
    const thunk = getAddressStates();
    const dispatch = sinon.spy();

    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.args[0][0]; // first call, first arg
        expect(action.type).to.equal(GET_ADDRESS_STATES_SUCCESS);
        expect(action.states).to.eql(statesResponse);
      }).then(done, done);
  });

  it('dispatches FAILURE when GET fails', (done) => {
    global.fetch.returns(Promise.reject({}));
    const thunk = getAddressStates();
    const dispatch = sinon.spy();

    thunk(dispatch, getState)
      .then(() => {
        const action = dispatch.args[0][0]; // first call, first arg
        expect(action.type).to.equal(GET_ADDRESS_STATES_FAILURE);
      }).then(done, done);
  });
});
