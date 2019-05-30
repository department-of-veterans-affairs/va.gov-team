const mock = require('../../../../platform/testing/e2e/mock-helpers');

function initAskVAMock(token) {
  mock(token, {
    path: '/v0/evss_claims/11/request_decision',
    verb: 'post',
    value: {}
  });
}

function initClaimsListMock(token) {
  mock(token, {
    path: '/v0/evss_claims',
    verb: 'get',
    value: {
      data: [
        {
          id: 11,
          type: 'evss_claims',
          attributes: {
            evssId: 189685,
            dateFiled: '2008-09-23',
            minEstDate: '2013-05-02',
            maxEstDate: '2014-01-02',
            phaseChangeDate: '2016-10-31',
            open: true,
            waiverSubmitted: false,
            documentsNeeded: true,
            developmentLetterSent: true,
            decisionLetterSent: true,
            updatedAt: '2016-10-28T14:41:26.468Z',
            phase: null
          }
        },
        {
          id: 12,
          type: 'evss_claims',
          attributes: {
            evssId: 189685,
            dateFiled: '2008-09-23',
            minEstDate: '2013-05-02',
            maxEstDate: '2014-01-02',
            phaseChangeDate: '2012-10-31',
            open: false,
            waiverSubmitted: false,
            documentsNeeded: true,
            developmentLetterSent: true,
            decisionLetterSent: true,
            updatedAt: '2016-10-28T14:41:26.468Z',
            phase: null
          }
        }
      ],
      meta: {
        successfulSync: false
      }
    }
  });
}

function initClaimDetailMocks(token, decisionLetterSent, documentsNeeded, waiverSubmitted, phase, estDate) {
  mock(token, {
    path: '/v0/evss_claims/11',
    verb: 'get',
    value: {
      data: {
        id: '11',
        type: 'evss_claims',
        attributes: {
          evssId: 189685,
          dateFiled: '2008-09-23',
          minEstDate: '2013-05-02',
          maxEstDate: estDate || '2014-01-02',
          phaseChangeDate: '2012-10-31',
          open: !decisionLetterSent,
          waiverSubmitted,
          documentsNeeded,
          developmentLetterSent: true,
          decisionLetterSent,
          updatedAt: '2016-10-28T14:41:26.468Z',
          phase,
          contentionList: ['Hearing Loss (New)',
            ' skin condition (New)',
            ' jungle rot (New)'
          ],
          vaRepresentative: 'AMERICAN LEGION',
          eventsTimeline: [{
            type: 'received_from_others_list',
            trackedItemId: 41,
            description: 'What was received item three.',
            displayName: 'Request 12',
            overdue: false,
            status: 'ACCEPTED',
            uploaded: false,
            uploadsAllowed: false,
            openedDate: null,
            requestedDate: null,
            receivedDate: '2012-11-29',
            closedDate: null,
            suspenseDate: null,
            documents: [],
            date: '2012-11-29'
          }, {
            type: 'phase3',
            date: '2012-10-27'
          }, {
            type: 'phase2',
            date: '2012-10-26'
          }, {
            type: 'phase1',
            date: '2012-10-25'
          }, {
            type: 'received_from_others_list',
            trackedItemId: 4,
            description: 'What was received item two.',
            displayName: 'Request 11',
            overdue: false,
            status: 'ACCEPTED',
            uploaded: true,
            uploadsAllowed: false,
            openedDate: null,
            requestedDate: null,
            receivedDate: '2012-09-24',
            closedDate: null,
            suspenseDate: null,
            documents: [{
              trackedItemId: 4,
              fileType: 'pdf',
              documentType: 'L102',
              filename: 'name4',
              uploadDate: '2014-09-23'
            }],
            date: '2012-09-24'
          }, {
            type: 'received_from_others_list',
            trackedItemId: 2,
            description: 'What was received item one.',
            displayName: 'Request 10',
            overdue: false,
            status: 'SUBMITTED_AWAITING_REVIEW',
            uploaded: false,
            uploadsAllowed: false,
            openedDate: null,
            requestedDate: null,
            receivedDate: '2012-08-29',
            closedDate: null,
            suspenseDate: null,
            documents: [],
            date: '2012-08-29'
          }, {
            type: 'completed',
            date: '2012-08-10'
          }, {
            type: 'still_need_from_you_list',
            trackedItemId: 51,
            description: 'What we still need from you item two.',
            displayName: 'Request 2',
            overdue: true,
            status: 'NEEDED',
            uploaded: false,
            uploadsAllowed: true,
            openedDate: '2010-03-16',
            requestedDate: null,
            receivedDate: null,
            closedDate: null,
            suspenseDate: '2010-03-26',
            documents: [],
            date: '2010-03-16'
          }, {
            type: 'still_need_from_you_list',
            trackedItemId: 50,
            description: 'This is a whole lot of text that should be longer than 120 characters if I can type enough for that to really be the case. Not sure if this is long enough now?',
            displayName: 'Request 1',
            overdue: true,
            status: 'NEEDED',
            uploaded: false,
            uploadsAllowed: true,
            openedDate: '2010-03-15',
            requestedDate: null,
            receivedDate: null,
            closedDate: null,
            suspenseDate: '2010-03-25',
            documents: [],
            date: '2010-03-15'
          }, {
            type: 'still_need_from_others_list',
            trackedItemId: 1,
            description: '21-4142',
            displayName: 'Request 9',
            overdue: false,
            status: 'NEEDED',
            uploaded: false,
            uploadsAllowed: false,
            openedDate: null,
            requestedDate: null,
            receivedDate: '2010-02-17',
            closedDate: null,
            suspenseDate: null,
            documents: [],
            date: '2010-02-17'
          }, {
            type: 'filed',
            date: '2008-09-23'
          }],
          claimType: 'Compensation and Pension'
        }
      },
      meta: {
        successfulSync: true
      }
    }
  });
}
module.exports = {
  initClaimsListMock,
  initClaimDetailMocks,
  initAskVAMock
};
