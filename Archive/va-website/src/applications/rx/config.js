module.exports = {
  glossary: {
    Prescription: [
      {
        term: 'Active',
        definition: 'A prescription that can be filled at the local VA pharmacy. If you have refills, you may request a refill of this prescription from your VA pharmacy.'
      },
      {
        term: 'Discontinued',
        definition: 'A prescription your provider has stopped. It is no longer available to be sent to you or pick up at the VA pharmacy window. Contact your VA healthcare team if you need more of this medication.'
      },
      {
        term: 'Expired',
        definition: 'A prescription which is too old to fill. This does not refer to the expiration date of the medication in the container. Contact your VA healthcare team if you need more of this medication.'
      },
      {
        term: 'Active - Hold',
        definition: 'An active prescription that will not be filled until the pharmacy resolves the issue. Contact your VA pharmacy if you need this medication now.'
      },
      {
        term: 'Active - Suspended',
        definition: 'An active prescription that is not scheduled to be filled yet. You should receive it before you run out. Contact your VA pharmacy if you need this medication now.'
      },
      {
        term: 'Unknown',
        definition: 'There has been an unknown error from our end. Contact your VA healthcare team for more information.'
      }],
    Refill: [
      {
        term: 'In process',
        definition: 'A prescription that was sent to the pharmacy for review. Contact your VA pharmacy if you need this medication now.'
      },
      {
        term: 'Submitted',
        definition: 'A prescription refill that has been submitted.'
      }
    ]
  },

  errorCodes: {
    access: [
      'RX135',
    ],
    registration: [
      'RX106',
      'RX105',
      'RX104',
      'RX3',
    ],
    prescriptions: [
      'RX101',
      'RX102',
      'RX901',
      'RX500',
      'RX503',
      'RX117',
      'RX99',
      'VA900',
    ],
    accountCreation: [
      'MHVAC1',
    ],
  },

  rxStatuses: {
    active: 'Active',
    deleted: 'Unknown',
    discontinued: 'Discontinued',
    discontinuedByProvider: 'Discontinued',
    discontinuedEdit: 'Discontinued',
    expired: 'Expired',
    hold: 'Active - Hold',
    nonVerified: 'Unknown',
    providerHold: 'Active - Hold',
    submitted: 'Submitted',
    suspended: 'Active - Suspended',
    refillinprocess: 'In process',
    unknown: 'Unknown'
  }
};
