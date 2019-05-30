const mock = require('../../../platform/testing/e2e/mock-helpers');

const prescriptions = {
  data: [
    {
      id: '746575',
      type: 'va-rx-prescriptions',
      attributes: {
        prescriptionId: 746575,
        prescriptionNumber: '2719083',
        prescriptionName: 'ACETAMINOPHEN 325MG TAB',
        refillStatus: 'active',
        refillSubmitDate: null,
        refillDate: '2014-01-24T05:00:00.000Z',
        refillRemaining: 5,
        facilityName: 'ABC123',
        orderedDate: '2014-01-24T05:00:00.000Z',
        quantity: 10,
        expirationDate: '2015-01-25T05:00:00.000Z',
        dispensedDate: null,
        stationNumber: '12',
        isRefillable: false,
        isTrackable: false
      },
      links: {
        self: 'http://localhost:3000/rx/v1/prescriptions/746575',
        tracking: 'http://localhost:3000/rx/v1/prescriptions/746575/trackings'
      }
    },
    {
      id: '746576',
      type: 'va-rx-prescriptions',
      attributes: {
        prescriptionId: 746576,
        prescriptionNumber: '2719083',
        prescriptionName: 'DRUG 2',
        refillStatus: 'active',
        refillSubmitDate: null,
        refillDate: '2014-01-24T05:00:00.000Z',
        refillRemaining: 5,
        facilityName: 'ABC123',
        orderedDate: '2014-01-24T05:00:00.000Z',
        quantity: 10,
        expirationDate: '2015-01-25T05:00:00.000Z',
        dispensedDate: null,
        stationNumber: '12',
        isRefillable: true,
        isTrackable: false
      },
      links: {
        self: 'http://localhost:3000/rx/v1/prescriptions/746576',
        tracking: 'http://localhost:3000/rx/v1/prescriptions/746576/trackings'
      }
    }
  ],
  meta: {
    sort: {
      prescriptionName: 'ASC'
    },
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalPages: 1,
      totalEntries: 1
    }
  }
};

const trackings = {
  data: [
    {
      id: '657068347564',
      type: 'trackings',
      attributes: {
        trackingNumber: '657068347564',
        prescriptionId: 13650542,
        prescriptionNumber: '2719083',
        prescriptionName: 'ACETAMINOPHEN 325MG TAB',
        facilityName: 'ABC123',
        rxInfoPhoneNumber: '(555)772-0956',
        ndcNumber: '00781171601',
        shippedDate: '2016-09-07T04:00:00.000Z',
        deliveryService: 'UsPS',
        otherPrescriptions: []
      },
      links: {
        self: 'http://www.example.com/v0/prescriptions/13650542/trackings',
        prescription: 'http://www.example.com/v0/prescriptions/13650542',
        trackingUrl: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=657068347564'
      }
    },
    {
      id: '345787647659',
      type: 'trackings',
      attributes: {
        trackingNumber: '345787647659',
        prescriptionId: 13650542,
        prescriptionNumber: '2719083',
        prescriptionName: 'ACETAMINOPHEN 325MG TAB',
        facilityName: 'ABC123',
        rxInfoPhoneNumber: '(555)772-0956',
        ndcNumber: '00781171601',
        shippedDate: '2016-07-06T04:00:00.000Z',
        deliveryService: 'UsPS',
        otherPrescriptions: [
          {
            ndcNumber: '00781171601',
            prescriptionName: 'ETHAMBUTOL HCL 100MG TAB',
            prescriptionNumber: '2719553',
            stationNumber: '12'
          },
          {
            ndcNumber: '00781171601',
            prescriptionName: 'PROBUCOL 250MG TAB',
            prescriptionNumber: '2719555',
            stationNumber: '12'
          }
        ]
      },
      links: {
        self: 'http://www.example.com/v0/prescriptions/13650542/trackings',
        prescription: 'http://www.example.com/v0/prescriptions/13650542',
        trackingUrl: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=345787647659'
      }
    },
    {
      id: '345787647654',
      type: 'trackings',
      attributes: {
        trackingNumber: '345787647654',
        prescriptionId: 13650542,
        prescriptionNumber: '2719083',
        prescriptionName: 'ACETAMINOPHEN 325MG TAB',
        facilityName: 'ABC123',
        rxInfoPhoneNumber: '(555)772-0956',
        ndcNumber: '00781171601',
        shippedDate: '2016-06-26T04:00:00.000Z',
        deliveryService: 'UsPS',
        otherPrescriptions: []
      },
      links: {
        self: 'http://www.example.com/v0/prescriptions/13650542/trackings',
        prescription: 'http://www.example.com/v0/prescriptions/13650542',
        trackingUrl: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=345787647654'
      }
    }
  ],
  links: {
    self: 'http://www.example.com/v0/prescriptions/13650542/trackings?',
    first: 'http://www.example.com/v0/prescriptions/13650542/trackings?page=1&per_page=10',
    prev: null,
    next: null,
    last: 'http://www.example.com/v0/prescriptions/13650542/trackings?page=1&per_page=10'
  },
  meta: {
    updatedAt: 'Mon, 12 Sep 2016 04:30:15 EDT',
    failedStationList: null,
    sort: { shippedDate: 'DESC' },
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalPages: 1,
      totalEntries: 3
    }
  }
};

const preferences = {
  data: {
    id: '519e94995f48def4f0e38e5c13b85150c6bc0cc0c911324ef9a1ba7400e7ec37',
    type: 'messaging_preferences',
    attributes: {
      emailAddress: 'test@vets.gov',
      rxFlag: false
    }
  }
};

// Create API routes
function initApplicationSubmitMock(token) {
  mock(token, {
    path: '/v0/prescriptions/active',
    verb: 'get',
    value: prescriptions
  });

  mock(token, {
    path: '/v0/prescriptions',
    verb: 'get',
    value: prescriptions
  });

  mock(token, {
    path: '/v0/prescriptions/746575',
    verb: 'get',
    value: {
      data: {
        ...prescriptions.data[0],
      }
    }
  });

  mock(token, {
    path: '/v0/prescriptions/746575/trackings',
    verb: 'get',
    value: trackings
  });

  mock(token, {
    path: '/v0/prescriptions/746576/refill',
    verb: 'patch',
    value: {
      data: {
        ...prescriptions.data[1],
      }
    }
  });

  mock(token, {
    path: '/v0/prescriptions/preferences',
    verb: 'get',
    value: preferences,
  });

  mock(token, {
    path: '/v0/prescriptions/preferences',
    verb: 'put',
    value: preferences,
  });
}

module.exports = {
  prescriptions,
  trackings,
  initApplicationSubmitMock
};
