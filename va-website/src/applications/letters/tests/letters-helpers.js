const mock = require('../../../platform/testing/e2e/mock-helpers');

const letters = {
  data: {
    attributes: {
      fullName: 'William Shakespeare',
      letters: [
        { name: 'Commissary Letter', letterType: 'commissary' },
        { name: 'Proof of Service Letter', letterType: 'proof_of_service' },
        { name: 'Service Verification Letter', letterType: 'service_verification' },
        { name: 'Benefit Summary Letter', letterType: 'benefit_summary' },
        { name: 'Benefit Verification Letter', letterType: 'benefit_verification' }
      ]
    }
  }
};

const benefitSummaryOptions = {
  data: {
    attributes: {
      benefitInformation: {
        awardEffectiveDate: '1965-01-01T05:00:00.000+00:00',
        hasAdaptedHousing: false,
        hasChapter35Eligibility: true,
        hasIndividualUnemployabilityGranted: false,
        hasNonServiceConnectedPension: false,
        hasServiceConnectedDisabilities: true,
        hasSpecialMonthlyCompensation: false,
        monthlyAwardAmount: 123,
        serviceConnectedPercentage: 2
      },
      militaryService: [
        {
          branch: 'ARMY',
          characterOfService: 'HONORABLE',
          enteredDate: '1965-01-01T05:00:00.000+00:00',
          releasedDate: '1972-10-01T04:00:00.000+00:00'
        },
        {
          branch: 'ARMY',
          characterOfService: 'UNCHARACTERIZED_ENTRY_LEVEL',
          enteredDate: '1973-01-01T05:00:00.000+00:00',
          releasedDate: '1977-10-01T04:00:00.000+00:00'
        }
      ]
    }
  }
};

const address = {
  data: {
    attributes: {
      address: {
        addressEffectiveDate: '2012-04-03T04:00:00.000+00:00',
        addressOne: '57 COLUMBUS STRASSA',
        addressThree: '',
        addressTwo: 'BEN FRANKLIN VILLAGE',
        militaryPostOfficeTypeCode: 'APO',
        militaryStateCode: 'AE',
        type: 'MILITARY',
        zipCode: '09028',
        zipSuffix: ''
      },
      controlInformation: {
        canUpdate: true,
        corpAvailIndicator: true,
        corpRecFoundIndicator: true,
        hasNoBdnPaymentsIndicator: true,
        indentityIndicator: true,
        indexIndicator: true,
        isCompetentIndicator: true,
        noFiduciaryAssignedIndicator: true,
        notDeceasedIndicator: true
      }
    }
  }
};
const newAddress = {
  data: {
    attributes: {
      address: {
        addressEffectiveDate: '2012-04-03T04:00:00.000+00:00',
        addressOne: '57 COLUMBUS STRASSA',
        addressThree: '',
        addressTwo: 'BEN FRANKLIN VILLAGE',
        city: 'Chicago',
        stateCode: 'IL',
        type: 'DOMESTIC',
        zipCode: '60602',
        zipSuffix: ''
      },
      controlInformation: {
        canUpdate: true,
        corpAvailIndicator: true,
        corpRecFoundIndicator: true,
        hasNoBdnPaymentsIndicator: true,
        indentityIndicator: true,
        indexIndicator: true,
        isCompetentIndicator: true,
        noFiduciaryAssignedIndicator: true,
        notDeceasedIndicator: true
      }
    }
  }
};

const countries = {
  data: {
    attributes: {
      countries: [
        'Denmark', 'Sri Lanka', 'USA', 'United Kingdom'
      ]
    }
  }
};

const states = {
  data: {
    attributes: {
      states: [
        'IL', 'MA', 'DC'
      ]
    }
  }
};

// Create API routes
function initApplicationMock(token) {
  mock(token, {
    path: '/v0/letters',
    verb: 'get',
    value: letters
  });

  mock(token, {
    path: '/v0/letters/beneficiary',
    verb: 'get',
    value: benefitSummaryOptions
  });

  mock(token, {
    path: '/v0/address',
    verb: 'get',
    value: address
  });

  mock(token, {
    path: '/v0/address/countries',
    verb: 'get',
    value: countries
  });

  mock(token, {
    path: '/v0/address/states',
    verb: 'get',
    value: states
  });

  mock(token, {
    path: '/v0/address',
    verb: 'put',
    value: newAddress,
  });
}

module.exports = {
  letters,
  benefitSummaryOptions,
  address,
  newAddress,
  countries,
  states,
  initApplicationMock
};
