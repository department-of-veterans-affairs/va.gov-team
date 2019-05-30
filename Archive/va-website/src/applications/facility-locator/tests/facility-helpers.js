const mock = require('../../../platform/testing/e2e/mock-helpers');

const resultsData = {
  data: [
    {
      id: 'vha_691GE',
      type: 'va_facilities',
      attributes: {
        uniqueId: '691GE',
        name: 'Los Angeles VA Clinic',
        facilityType: 'va_health_facility',
        classification: 'Multi-Specialty CBOC',
        website: null,
        lat: 34.05171284,
        'long': -118.23874096,
        address: {
          physical: {
            address1: '351 East Temple Street',
            address2: null,
            address3: null,
            city: 'Los Angeles',
            state: 'CA',
            zip: '90012-3328'
          },
          mailing: { }
        },
        phone: {
          main: '213-253-5000 x',
          fax: '213-253-5510 x',
          afterHours: '877-252-4866 x',
          patientAdvocate: '213-253-2677 x24111',
          enrollmentCoordinator: '213-253-2677 x24033',
          pharmacy: '800-952-4852 x',
          mentalHealthClinic: '310-268-4449'
        },
        hours: {
          monday: '700AM-530PM',
          tuesday: '700AM-530PM',
          wednesday: '700AM-530PM',
          thursday: '700AM-530PM',
          friday: '700AM-530PM',
          saturday: '-',
          sunday: '-'
        },
        services: {
          lastUpdated: '2017-07-24',
          health: [
            {
              sl1: [
                'DentalServices'
              ],
              sl2: []
            },
            {
              sl1: [
                'MentalHealthCare'
              ],
              sl2: []
            },
            {
              sl1: [
                'PrimaryCare'
              ],
              sl2: []
            }
          ]
        },
        feedback: {
          health: {
            primaryCareUrgent: '0.78',
            primaryCareRoutine: '0.77',
            effectiveDate: '2017-03-24'
          }
        },
        access: {
          health: {
            primaryCare: {
              'new': 15,
              established: 3
            },
            mentalHealth: {
              'new': 12,
              established: 2
            },
            womensHealth: {
              'new': null,
              established: 9
            },
            audiology: {
              'new': 48,
              established: 0
            },
            gastroenterology: {
              'new': 7,
              established: null
            },
            opthalmology: {
              'new': 9,
              established: 6
            },
            optometry: {
              'new': 14,
              established: 5
            },
            urologyClinic: {
              'new': 23,
              established: 3
            },
            effectiveDate: '2017-08-14'
          }
        }
      }
    },
    {
      id: 'vba_343o',
      type: 'va_facilities',
      attributes: {
        uniqueId: '343o',
        name: 'Los Angeles Ambulatory Care Center',
        facilityType: 'va_benefits_facility',
        classification: 'OUTBASED',
        website: null,
        lat: 34.05171315,
        'long': -118.2387403,
        address: {
          physical: {
            address1: '351 East Temple Street',
            address2: 'Room A-444',
            address3: null,
            city: 'Los Angeles',
            state: 'CA',
            zip: '90012'
          },
          mailing: { }
        },
        phone: {
          main: '213-253-2677 Ext 24759',
          fax: ''
        },
        hours: {
          monday: '8:00AM-2:30PM',
          tuesday: '8:00AM-2:30PM',
          wednesday: '8:00AM-2:30PM',
          thursday: '8:00AM-2:30PM',
          friday: 'By Appointment Only',
          saturday: 'Closed',
          sunday: 'Closed'
        },
        services: {
          benefits: {
            other: '',
            standard: []
          }
        },
        feedback: { },
        access: { }
      }
    },
    {
      id: 'vba_343z',
      type: 'va_facilities',
      attributes: {
        uniqueId: '343z',
        name: 'VetSuccess on Campus at Los Angeles City College',
        facilityType: 'va_benefits_facility',
        classification: 'VETSUCCESS ON CAMPUS',
        website: null,
        lat: 34.08751109,
        'long': -118.2917626,
        address: {
          physical: {
            address1: '855 North Vermont',
            address2: '',
            address3: null,
            city: 'Los Angeles',
            state: 'CA',
            zip: '90029'
          },
          mailing: { }
        },
        phone: {
          main: '323-953-4000 Ext 1253',
          fax: ''
        },
        hours: {
          monday: 'Closed',
          tuesday: 'Closed',
          wednesday: '9:00AM-4:00PM',
          thursday: 'Closed',
          friday: 'Closed',
          saturday: 'Closed',
          sunday: 'Closed'
        },
        services: {
          benefits: {
            other: '',
            standard: []
          }
        },
        feedback: { },
        access: { }
      }
    },
  ],
  links: {
    self: 'http://www.example.com/v0/facilities/va?bbox%5B%5D=-118.53149414062501&bbox%5B%5D=33.91487347147951&bbox%5B%5D=-118.07762145996095&bbox%5B%5D=34.199308935560154&page=1',
    first: 'http://www.example.com/v0/facilities/va?bbox%5B%5D=-118.53149414062501&bbox%5B%5D=33.91487347147951&bbox%5B%5D=-118.07762145996095&bbox%5B%5D=34.199308935560154&page=1&per_page=20',
    prev: null,
    next: null,
    last: 'http://www.example.com/v0/facilities/va?bbox%5B%5D=-118.53149414062501&bbox%5B%5D=33.91487347147951&bbox%5B%5D=-118.07762145996095&bbox%5B%5D=34.199308935560154&page=1&per_page=20'
  },
  meta: {
    pagination: {
      currentPage: 1,
      perPage: 20,
      totalPages: 1,
      totalEntries: 3
    }
  }
};

// Create API routes
function initApplicationMock(token) {
  mock(token, {
    path: '/v0/facilities/va',
    verb: 'get',
    value: resultsData,
  });

  mock(token, {
    path: '/v0/facilities/va/vha_691GE',
    verb: 'get',
    value: {
      data: resultsData.data[0]
    },
  });
}

module.exports = {
  initApplicationMock
};
