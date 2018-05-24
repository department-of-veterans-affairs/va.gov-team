import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import {
  groupTimelineActivity,
  isPopulatedClaim,
  hasBeenReviewed,
  getDocTypeDescription,
  displayFileSize,
  getUserPhase,
  getUserPhaseDescription,
  getPhaseDescription,
  truncateDescription,
  getItemDate,
  isClaimComplete,
  itemsNeedingAttentionFromVet,
  makeAuthRequest,
  getClaimType,
  mockData,
} from '../../utils/helpers';

import {
  getAlertContent,
  getStatusContents,
  getNextEvents,
  makeDurationText,
  makeDecisionReviewContent,
  addStatusToIssues,
  isolateAppeal,
  STATUS_TYPES
} from '../../utils/appeals-v2-helpers';

describe('Disability benefits helpers: ', () => {
  describe('groupTimelineActivity', () => {
    it('should group events before a phase into phase 1', () => {
      const events = [
        {
          type: 'filed',
          date: '2010-05-03'
        }
      ];

      const phaseActivity = groupTimelineActivity(events);

      expect(phaseActivity[1][0].type).to.equal('filed');
    });
    it('should filter out events without a date', () => {
      const events = [
        {
          type: 'filed',
          date: null
        }
      ];

      const phaseActivity = groupTimelineActivity(events);

      expect(phaseActivity).to.be.empty;
    });
    it('should group events after phase 1 into phase 2', () => {
      const events = [
        {
          type: 'some_event',
          date: '2010-05-05'
        },
        {
          type: 'some_event',
          date: '2010-05-04'
        },
        {
          type: 'phase1',
          date: '2010-05-03'
        },
        {
          type: 'filed',
          date: '2010-05-01'
        }
      ];

      const phaseActivity = groupTimelineActivity(events);

      expect(phaseActivity[1][0].type).to.equal('filed');
      expect(phaseActivity[2].length).to.equal(3);
    });
    it('should discard micro phases', () => {
      const events = [
        {
          type: 'phase5',
          date: '2010-05-07'
        },
        {
          type: 'phase4',
          date: '2010-05-06'
        },
        {
          type: 'phase3',
          date: '2010-05-05'
        },
        {
          type: 'phase2',
          date: '2010-05-04'
        },
        {
          type: 'phase1',
          date: '2010-05-03'
        },
        {
          type: 'filed',
          date: '2010-05-01'
        }
      ];

      const phaseActivity = groupTimelineActivity(events);

      expect(phaseActivity[3].length).to.equal(1);
      expect(phaseActivity[3][0].type).to.equal('phase_entered');
    });
    it('should group events into correct bucket', () => {
      const events = [
        {
          type: 'received_from_you_list',
          date: '2016-11-02'
        },
        {
          type: 'received_from_you_list',
          date: '2016-11-02'
        },
        {
          type: 'received_from_you_list',
          date: '2016-11-02'
        },
        {
          type: 'received_from_you_list',
          date: '2016-11-02'
        },
        {
          type: 'phase5',
          date: '2016-11-02'
        },
        {
          type: 'phase4',
          date: '2016-11-02'
        },
        {
          type: 'phase3',
          date: '2016-11-02'
        },
        {
          type: 'phase2',
          date: '2016-11-02'
        },
        {
          type: 'other_documents_list',
          uploadDate: '2016-03-24'
        },
        {
          type: 'other_documents_list',
          uploadDate: '2015-08-28'
        },
        {
          type: 'other_documents_list',
          uploadDate: '2015-08-28'
        },
        {
          type: 'phase1',
          date: '2015-04-20'
        },
        {
          type: 'filed',
          date: '2015-04-20'
        },
        {
          type: 'other_documents_list',
          uploadDate: null
        }
      ];

      const phaseActivity = groupTimelineActivity(events);

      expect(phaseActivity[3].length).to.equal(5);
      expect(phaseActivity[3][4].type).to.equal('phase_entered');
      expect(phaseActivity[2].length).to.equal(4);
      expect(phaseActivity[1].length).to.equal(1);
    });
  });
  describe('isPopulatedClaim', () => {
    it('should return false if any field is empty', () => {
      const claim = {
        attributes: {
          claimType: 'something',
          contentionList: [
            'thing'
          ],
          dateFiled: '',
        }
      };

      expect(isPopulatedClaim(claim)).to.be.false;
    });

    it('should return true if no field is empty', () => {
      const claim = {
        attributes: {
          claimType: 'something',
          contentionList: [
            'thing'
          ],
          dateFiled: 'asdf',
          vaRepresentative: null
        }
      };

      expect(isPopulatedClaim(claim)).to.be.true;
    });

    it('should return false if contention list is empty', () => {
      const claim = {
        attributes: {
          claimType: 'something',
          contentionList: [
          ],
          dateFiled: 'asdf',
          vaRepresentative: 'test'
        }
      };

      expect(isPopulatedClaim(claim)).to.be.false;
    });
  });
  describe('truncateDescription', () => {
    it('should truncate text longer than 120 characters', () => {
      const userText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
      const userTextEllipsed = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq…';

      const text = truncateDescription(userText);
      expect(text).to.equal(userTextEllipsed);
    });
  });
  describe('hasBeenReviewed', () => {
    it('should check that item is reviewed', () => {
      const result = hasBeenReviewed({
        type: 'received_from_you_list',
        status: 'ACCEPTED'
      });

      expect(result).to.be.true;
    });
    it('should check that item has not been reviewed', () => {
      const result = hasBeenReviewed({
        type: 'received_from_you_list',
        status: 'SUBMITTED_AWAITING_REVIEW'
      });

      expect(result).to.be.false;
    });
  });
  describe('getDocTypeDescription', () => {
    it('should get description by type', () => {
      const result = getDocTypeDescription('L070');

      expect(result).to.equal('Photographs');
    });
  });
  describe('displayFileSize', () => {
    it('should show size in bytes', () => {
      const size = displayFileSize(2);

      expect(size).to.equal('2B');
    });
    it('should show size in kilobytes', () => {
      const size = displayFileSize(1026);

      expect(size).to.equal('1KB');
    });
    it('should show size in megabytes', () => {
      const size = displayFileSize(2097152);

      expect(size).to.equal('2MB');
    });
  });
  describe('getUserPhase', () => {
    it('should get phase 3 desc for 4-6', () => {
      const phase = getUserPhase(5);

      expect(phase).to.equal(3);
    });
  });
  describe('getUserPhaseDescription', () => {
    it('should get description for 3', () => {
      const desc = getUserPhaseDescription(3);

      expect(desc).to.equal('Evidence gathering, review, and decision');
    });
  });
  describe('getPhaseDescription', () => {
    it('should display description from map', () => {
      const desc = getPhaseDescription(2);

      expect(desc).to.equal('Initial review');
    });
  });
  describe('getItemDate', () => {
    it('should use the received date', () => {
      const date = getItemDate({
        receivedDate: '2010-01-01',
        documents: [
          { uploadDate: '2011-01-01' }
        ],
        date: '2012-01-01'
      });

      expect(date).to.equal('2010-01-01');
    });
    it('should use the last document upload date', () => {
      const date = getItemDate({
        receivedDate: null,
        documents: [
          { uploadDate: '2011-01-01' },
          { uploadDate: '2012-01-01' }
        ],
        date: '2013-01-01'
      });

      expect(date).to.equal('2012-01-01');
    });
    it('should use the date', () => {
      const date = getItemDate({
        receivedDate: null,
        documents: [
        ],
        date: '2013-01-01'
      });

      expect(date).to.equal('2013-01-01');
    });
    it('should use the upload date', () => {
      const date = getItemDate({
        uploadDate: '2014-01-01',
        type: 'other_documents_list',
        date: '2013-01-01'
      });

      expect(date).to.equal('2014-01-01');
    });
  });
  describe('isClaimComplete', () => {
    it('should check if claim is in complete phase', () => {
      const isComplete = isClaimComplete({
        attributes: {
          phase: 8
        }
      });

      expect(isComplete).to.be.true;
    });
    it('should check if claim has decision letter', () => {
      const isComplete = isClaimComplete({
        attributes: {
          decisionLetterSent: true
        }
      });

      expect(isComplete).to.be.true;
    });
  });
  describe('itemsNeedingAttentionFromVet', () => {
    it('should return number of needed items from vet', () => {
      const itemsNeeded = itemsNeedingAttentionFromVet([
        {
          type: 'still_need_from_you_list',
          status: 'NEEDED'
        },
        {
          type: 'still_need_from_you_list',
          status: 'SUBMITTED_AWAITING_REVIEW'
        },
        {
          type: 'still_need_from_others_list',
          status: 'NEEDED'
        }
      ]);

      expect(itemsNeeded).to.equal(1);
    });
  });

  describe('getClaimType', () => {
    it('should return the claim type', () => {
      const claim = {
        attributes: {
          claimType: 'Awesome'
        }
      };
      expect(getClaimType(claim)).to.equal('Awesome');
    });
    it('should return the default claim type', () => {
      const claim = {
        attributes: {
          claimType: undefined
        }
      };
      expect(getClaimType(claim)).to.equal('Disability Compensation');
    });
  });

  describe('makeAuthRequest', () => {
    let fetchMock = sinon.stub();
    let oldFetch = global.fetch;
    beforeEach(() => {
      oldFetch = global.fetch;
      fetchMock = sinon.stub();
      global.fetch = fetchMock;
    });
    afterEach(() => {
      global.fetch = oldFetch;
    });
    it('should make a fetch request', (done) => {
      global.sessionStorage = { userToken: '1234' };
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: true, json: () => Promise.resolve() }) })
      });

      const onSuccess = () => done();
      makeAuthRequest('/testing', null, sinon.spy(), onSuccess);

      expect(fetchMock.called).to.be.true;
      expect(fetchMock.firstCall.args[0]).to.contain('/testing');
      expect(fetchMock.firstCall.args[1].method).to.equal('GET');
    });
    it('should reject promise when there is an error', (done) => {
      global.sessionStorage = { userToken: '1234' };
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 500, json: () => Promise.resolve() }) })
      });

      const onError = (resp) => {
        expect(resp.ok).to.be.false;
        done();
      };
      makeAuthRequest('/testing', null, sinon.spy(), sinon.spy(), onError);

      expect(fetchMock.called).to.be.true;
      expect(fetchMock.firstCall.args[0]).to.contain('/testing');
      expect(fetchMock.firstCall.args[1].method).to.equal('GET');
    });
    it('should dispatch auth error', (done) => {
      global.sessionStorage = { userToken: '1234' };
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 401, json: () => Promise.resolve() }) })
      });

      const onError = sinon.spy();
      const onSuccess = sinon.spy();
      const dispatch = (action) => {
        expect(action.type).to.equal('SET_UNAUTHORIZED');
        expect(onError.called).to.be.false;
        expect(onSuccess.called).to.be.false;
        done();
      };

      makeAuthRequest('/testing', null, dispatch, onSuccess, onError);
    });
  });

  describe('getStatusContents', () => {
    it('returns an object with correct title & description', () => {
      const type = STATUS_TYPES.scheduledHearing;
      const details = { date: '2018-04-01' };
      const expectedDescSnippet = 'hearing is scheduled for April 1st, 2018';
      const contents = getStatusContents(type, details);
      expect(contents.title).to.equal('Your hearing has been scheduled');
      // TO-DO: Update with real content
      const descText = shallow(contents.description).render().text();
      expect(descText).to.contain(expectedDescSnippet);
    });

    it('returns sane object when given unknown type', () => {
      const type = 123;
      const contents = getStatusContents(type);
      expect(contents.title).to.equal('We don’t know your appeal status');
      expect(contents.description.props.children).to.equal('We’re sorry, Vets.gov will soon be updated to show your status.');
    });

    // 'remand' and 'bva_decision' do a fair amount of dynamic content generation and formatting
    // so we should test them specifically to ensure we're getting the desired output
    it('returns the right number of allowed / denied / remand items for remand status', () => {
      const details = {
        issues: mockData.data[2].attributes.status.details.issues
      };
      const contents = getStatusContents('remand', details);
      expect(contents.title).to.equal('The Board made a decision on your appeal');

      const wrapper = shallow(contents.description);
      const allowedList = wrapper.find('.allowed-items ~ ul');
      const deniedList = wrapper.find('.denied-items ~ ul');
      const remandList = wrapper.find('.remand-items ~ ul');

      const allowedDisposition = details.issues.filter(i => i.disposition === 'allowed');
      const deniedDisposition = details.issues.filter(i => i.disposition === 'denied');
      const remandDisposition = details.issues.filter(i => i.disposition === 'remand');

      expect(allowedList.find('li').length).to.equal(allowedDisposition.length);
      expect(deniedList.find('li').length).to.equal(deniedDisposition.length);
      expect(remandList.find('li').length).to.equal(remandDisposition.length);
    });

    it('returns the right number of allowed / denied items for bva_decision status', () => {
      const details = {
        issues: mockData.data[2].attributes.status.details.issues
      };
      const contents = getStatusContents('bva_decision', details);
      expect(contents.title).to.equal('The Board made a decision on your appeal');

      const wrapper = shallow(contents.description);
      const allowedList = wrapper.find('.allowed-items ~ ul');
      const deniedList = wrapper.find('.denied-items ~ ul');

      const allowedDisposition = details.issues.filter(i => i.disposition === 'allowed');
      const deniedDisposition = details.issues.filter(i => i.disposition === 'denied');

      expect(allowedList.find('li').length).to.equal(allowedDisposition.length);
      expect(deniedList.find('li').length).to.equal(deniedDisposition.length);
    });
  });

  describe('makeDurationText', () => {
    const inputs = {
      exactSingular: [1, 1],
      exactPlural: [2, 2],
      range: [1, 8],
      empty: [],
      nonsense: 'danger, danger',
    };

    it('should return an object with header and description properties', () => {
      const testText = makeDurationText(inputs.exactSingular);
      expect(!!testText.header && !!testText.description).to.be.true;
    });

    it('should return an object with header and description properties with nonsense input', () => {
      const testText = makeDurationText(inputs.nonsense);
      expect(testText.header).to.equal('');
      expect(testText.description).to.equal('');
    });

    it('should return an object with header and description properties with empty array input', () => {
      const testText = makeDurationText(inputs.empty);
      expect(testText.header).to.equal('');
      expect(testText.description).to.equal('');
    });

    it('should return an object with header and description properties with no input', () => {
      const testText = makeDurationText();
      expect(testText.header).to.equal('');
      expect(testText.description).to.equal('');
    });

    it('should format exact singular time estimates', () => {
      const testText = makeDurationText(inputs.exactSingular);
      expect(testText.header).to.equal('1 month');
      expect(testText.description).to.equal('about 1 month');
    });

    it('should format exact plural time estimates', () => {
      const testText = makeDurationText(inputs.exactPlural);
      expect(testText.header).to.equal('2 months');
      expect(testText.description).to.equal('about 2 months');
    });

    it('should format range time estimates', () => {
      const testText = makeDurationText(inputs.range);
      expect(testText.header).to.equal('1–8 months');
      expect(testText.description).to.equal('between 1 and 8 months');
    });
  });

  describe('getNextEvents', () => {
    it('returns an object with a header property', () => {
      const type = STATUS_TYPES.pendingCertificationSsoc;
      const details = {
        certificationTimeliness: [1, 2],
        ssocTimeliness: [1, 1],
      };
      const nextEvents = getNextEvents(type, details);
      expect(nextEvents.header).to.equal('What happens next depends on whether you submit new evidence.');
    });

    it('returns an object with an events array property', () => {
      const type = STATUS_TYPES.remandSsoc;
      // 'remandSsoc' status has 2 nextEvents in the array
      const details = {
        returnTimeliness: [1, 2],
        remandSsocTimeliness: [1, 1],
      };
      const nextEvents = getNextEvents(type, details);
      const { events } = nextEvents;
      expect(events.length).to.equal(2);
      const firstEvent = events[0];
      const secondEvent = events[1];
      // each of the 2 'remandSsoc' nextEvents has 4 properties
      expect(Object.keys(firstEvent).length).to.equal(4);
      expect(Object.keys(secondEvent).length).to.equal(4);
    });
  });

  describe('getAlertContent', () => {
    it('returns an object with title, desc, displayType, and type', () => {
      const alert = {
        type: 'ramp_eligible',
        details: {
          representative: 'Mr. Spock'
        }
      };

      const alertContent = getAlertContent(alert);
      expect(alertContent.title).to.exist;
      expect(alertContent.description).to.exist;
      expect(alertContent.displayType).to.exist;
      expect(alertContent.type).to.exist;
    });
  });

  describe('addStatusToIssues', () => {
    it('returns an array of same length as input array', () => {
      const { issues } = mockData.data[2].attributes;
      const formattedIssues = addStatusToIssues(issues);
      expect(formattedIssues.length).to.equal(issues.length);
    });

    it('returns an array of objects, each with status and description', () => {
      const { issues } = mockData.data[2].attributes;
      const formattedIssues = addStatusToIssues(issues);
      expect(formattedIssues.every(i => i.status && i.description)).to.be.true;
    });
  });

  describe('makeDecisionReviewContent', () => {
    it('returns the default content if no additional content is provided', () => {
      const decisionReviewContent = makeDecisionReviewContent();
      const descText = shallow(decisionReviewContent).render().text();
      expect(descText).to.equal('A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you’re appealing, they can decide to:Grant: The judge disagrees with the original decision and decides in your favor.Deny: The judge agrees with the original decision.Remand: The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.Note: About 60% of all cases have at least 1 issue remanded.');
    });

    it('returns additional content when provided', () => {
      const decisionReviewContent = makeDecisionReviewContent('Once your representative has completed their review, your case will be returned to the Board. ');
      const descText = shallow(decisionReviewContent).render().text();
      expect(descText).to.equal('Once your representative has completed their review, your case will be returned to the Board. A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you’re appealing, they can decide to:Grant: The judge disagrees with the original decision and decides in your favor.Deny: The judge agrees with the original decision.Remand: The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.Note: About 60% of all cases have at least 1 issue remanded.');
    });
  });

  describe('isolateAppeal', () => {
    const state = {
      disability: {
        status: {
          claimsV2: {
            appeals: mockData.data
          }
        }
      }
    };

    it('should find the right appeal if the given id matches', () => {
      const expectedAppeal = mockData.data[1];
      const appeal = isolateAppeal(state, expectedAppeal.id);
      expect(appeal).to.equal(expectedAppeal);
    });

    it('should find the right appeal if the given v1 id matches a v2 appeal', () => {
      const expectedAppeal = mockData.data[1];
      // appealIds[1] is the fake v1 id
      const appeal = isolateAppeal(state, expectedAppeal.attributes.appealIds[1]);
      expect(appeal).to.equal(expectedAppeal);
    });

    it('should return undefined if no appeal matches the id given', () => {
      const appeal = isolateAppeal(state, 'non-existent id');
      expect(appeal).to.be.undefined;
    });
  });
});
