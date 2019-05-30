import _ from 'lodash/fp';
import Raven from 'raven-js';

import environment from '../../../platform/utilities/environment';
import { SET_UNAUTHORIZED } from '../actions/index.jsx';

const evidenceGathering = 'Evidence gathering, review, and decision';

const phaseMap = {
  1: 'Claim received',
  2: 'Initial review',
  3: evidenceGathering,
  4: evidenceGathering,
  5: evidenceGathering,
  6: evidenceGathering,
  7: 'Preparation for notification',
  8: 'Complete'
};

export function getPhaseDescription(phase) {
  return phaseMap[phase];
}

export function getUserPhaseDescription(phase) {
  if (phase < 3) {
    return phaseMap[phase];
  } else if (phase === 3) {
    return evidenceGathering;
  }

  return phaseMap[phase + 3];
}

export function getPhaseDescriptionFromEvent(event) {
  const phase = parseInt(event.type.replace('phase', ''), 10);
  return phaseMap[phase];
}

export function getUserPhase(phase) {
  if (phase < 3) {
    return phase;
  } else if (phase >= 3 && phase < 7) {
    return 3;
  }

  return phase - 3;
}

export function getItemDate(item) {
  if (item.receivedDate) {
    return item.receivedDate;
  } else if (item.documents && item.documents.length) {
    return item.documents[item.documents.length - 1].uploadDate;
  } else if (item.type === 'other_documents_list' && item.uploadDate) {
    return item.uploadDate;
  }

  return item.date;
}

function getPhaseNumber(phase) {
  return parseInt(phase.replace('phase', ''), 10);
}

function isEventOrPrimaryPhase(event) {
  if (event.type === 'phase_entered') {
    return event.phase <= 3 || event.phase >= 7;
  }

  return !!getItemDate(event);
}

export function groupTimelineActivity(events) {
  const phases = {};
  let activity = [];

  const phaseEvents = events
    .map(event => {
      if (event.type.startsWith('phase')) {
        return {
          type: 'phase_entered',
          phase: getPhaseNumber(event.type) + 1,
          date: event.date
        };
      }

      return event;
    })
    .filter(isEventOrPrimaryPhase);

  phaseEvents.forEach(event => {
    if (event.type.startsWith('phase')) {
      activity.push(event);
      phases[getUserPhase(event.phase)] = activity;
      activity = [];
    } else {
      activity.push(event);
    }
  });

  if (activity.length > 0) {
    phases[1] = activity;
  }

  return phases;
}

export function displayFileSize(size) {
  if (size < 1024) {
    return `${size}B`;
  }

  const kbSize = size / 1024;
  if (kbSize < 1024) {
    return `${Math.round(kbSize)}KB`;
  }

  const mbSize = kbSize / 1024;
  return `${Math.round(mbSize)}MB`;
}

export const DOC_TYPES = [
  { value: 'L029', label: 'Copy of a DD214' },
  { value: 'L450', label: 'STR - Dental - Photocopy' },
  { value: 'L451', label: 'STR - Medical - Photocopy' },
  { value: 'L049', label: 'Medical Treatment Record - Non-Government Facility' },
  { value: 'L034', label: 'Military Personnel Record' },
  { value: 'L107', label: 'VA Form 21-4142 - Authorization To Disclose Information' },
  { value: 'L827', label: 'VA Form 21-4142a - General Release for Medical Provider Information' },
  { value: 'L229', label: 'VA Form 21-0781a - Statement in Support of Claim for PTSD Secondary to Personal Assault' },
  { value: 'L228', label: 'VA Form 21-0781 - Statement in Support of Claim for PTSD' },
  { value: 'L149', label: 'VA Form 21-8940 - Veterans Application for Increased Compensation Based on Un-employability' },
  { value: 'L115', label: 'VA Form 21-4192 - Request for Employment Information in Connection with Claim for Disability' },
  { value: 'L159', label: 'VA Form 26-4555 - Application in Acquiring Specially Adapted Housing or Special Home Adaptation Grant' },
  { value: 'L117', label: 'VA Form 21-4502 - Application for Automobile or Other Conveyance and Adaptive Equipment Under 38 U.S.C. 3901-3904' },
  { value: 'L139', label: 'VA Form 21-686c - Declaration of Status of Dependents' },
  { value: 'L133', label: 'VA Form 21-674 - Request for Approval of School Attendance' },
  { value: 'L102', label: 'VA Form 21-2680 - Examination for Housebound Status or Permanent Need for Regular Aid & Attendance' },
  { value: 'L222', label: 'VA Form 21-0779 - Request for Nursing Home Information in Connection with Claim for Aid & Attendance' },
  { value: 'L702', label: 'Disability Benefits Questionnaire (DBQ)' },
  { value: 'L703', label: 'Goldmann Perimetry Chart/Field Of Vision Chart' },
  { value: 'L070', label: 'Photographs' },
  { value: 'L023', label: 'Other Correspondence' }
];

export function getDocTypeDescription(docType) {
  return DOC_TYPES.filter(type => type.value === docType)[0].label;
}

export function isPopulatedClaim({ attributes }) {
  return !!attributes.claimType
    && (attributes.contentionList && !!attributes.contentionList.length)
    && !!attributes.dateFiled;
}

export function hasBeenReviewed(trackedItem) {
  return trackedItem.type.startsWith('received_from') && trackedItem.status !== 'SUBMITTED_AWAITING_REVIEW';
}

// Adapted from http://stackoverflow.com/a/26230989/487883
export function getTopPosition(elem) {
  const box = elem.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;

  return Math.round(box.top + scrollTop - clientTop);
}

export function truncateDescription(text) {
  const maxLength = 120;
  if (text && text.length > maxLength) {
    return `${text.substr(0, maxLength)}…`;
  }

  return text;
}

export function isClaimComplete(claim) {
  return claim.attributes.decisionLetterSent || claim.attributes.phase === 8;
}

export function itemsNeedingAttentionFromVet(events) {
  return events.filter(event => event.status === 'NEEDED' && event.type === 'still_need_from_you_list').length;
}

export function makeAuthRequest(url, userOptions, dispatch, onSuccess, onError) {
  const options = _.merge({
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-Key-Inflection': 'camel',
      Authorization: `Token token=${sessionStorage.userToken}`
    },
    responseType: 'json',
  }, userOptions);

  fetch(`${environment.API_URL}${url}`, options)
    .catch(err => {
      Raven.captureMessage(`vets_client_error: ${err.message}`, {
        extra: {
          error: err
        }
      });

      return Promise.reject(err);
    })
    .then((resp) => {
      if (resp.ok) {
        if (options.responseType) {
          return resp[options.responseType]();
        }
        return Promise.resolve();
      }

      return Promise.reject(resp);
    })
    .then(onSuccess)
    .catch((resp) => {
      if (resp.status === 401) {
        dispatch({
          type: SET_UNAUTHORIZED
        });
      } else {
        onError(resp);
      }
    });
}

export function getCompletedDate(claim) {
  if (claim.attributes && claim.attributes.eventsTimeline) {
    const completedEvents = claim.attributes.eventsTimeline.filter(event => event.type === 'completed');
    if (completedEvents.length) {
      return completedEvents[0].date;
    }
  }

  return null;
}

export function getClaimType(claim) {
  return claim.attributes.claimType || 'Disability Compensation';
}

export const mockData = {
  data: [
    { // Status: Review your statement of the case - pending_form9
      id: '7387389',
      type: 'appealSeries',
      attributes: {
        appealIds: [
          '7387389',
          '123'
        ],
        updated: '2018-01-03T09:30:15-05:00',
        active: true,
        incompleteHistory: true,
        aoj: 'vba',
        programArea: 'compensation',
        description: 'Service connection for tinnitus, hearing loss, and two more',
        type: 'original',
        aod: false,
        location: 'aoj',
        status: {
          type: 'pending_soc',
          details: {
            lastSocDate: '2015-09-12',
            certificationTimeliness: [1, 4],
            socTimeliness: [2, 16],
          }
        },
        docket: {
          front: false,
          total: 206900,
          ahead: 109203,
          ready: 22109,
          eta: '2019-08-31'
        },
        issues: [
          {
            active: true,
            description: 'Service connection for tinnitus',
            lastAction: 'null',
            date: '2016-05-30'
          }
        ],
        alerts: [
          {
            type: 'form9_needed',
            details: {
              date: '2018-01-28'
            }
          },
          {
            type: 'ramp_eligible',
            details: {
              date: '2016-05-30'
            },
          },
          {
            type: 'decision_soon',
            details: {},
          },
        ],
        events: [
          {
            type: 'claim',
            date: '2016-05-30',
            details: {}
          },
          {
            type: 'nod',
            date: '2016-06-10',
            details: {}
          },
          {
            type: 'form9',
            date: '2016-09-12',
            details: {}
          },
          {
            type: 'soc',
            date: '2016-12-15',
            details: {}
          }
        ],
        evidence: [
          {
            description: 'Service treatment records',
            date: '2017-09-30'
          }
        ]
      }
    },
    { // Status: Waiting to be assigned to a judge - on_docket
      id: '7387390',
      type: 'appealSeries',
      attributes: {
        appealIds: [
          '7387390',
          '456'
        ],
        updated: '2018-01-03T09:30:15-05:00',
        active: true,
        incompleteHistory: false,
        aoj: 'vba',
        programArea: 'compensation',
        description: 'Service connection for tinnitus, hearing loss, and two more',
        type: 'original',
        aod: false,
        location: 'aoj',
        status: {
          type: 'on_docket',
          details: {
            regionalOffice: 'Chicago Regional Office'
          }
        },
        docket: {
          front: false,
          total: 206900,
          ahead: 109203,
          ready: 22109,
          eta: '2019-08-31'
        },
        issues: [
          {
            active: true,
            description: 'Service connection for tinnitus',
            lastAction: null,
            date: '2016-05-30'
          }
        ],
        alerts: [],
        events: [
          {
            type: 'claim',
            date: '2010-05-30',
            details: {}
          },
          {
            type: 'nod',
            date: '2012-06-10',
            details: {}
          },
          {
            type: 'soc',
            date: '2013-06-01',
            details: {}
          },
          {
            type: 'form9',
            date: '2014-06-12',
            details: {}
          },
          {
            type: 'certified',
            date: '2014-09-21',
            details: {}
          },
          {
            type: 'hearing_held',
            date: '2015-05-06',
            details: {
              regionalOffice: 'Chicago'
            }
          }
        ],
        evidence: [
          {
            description: 'Service treatment records',
            date: '2017-09-30'
          }
        ]
      }
    },
    { // Status: The Board has made a decision on your appeal - bva_decision
      id: '7387391',
      type: 'appealSeries',
      attributes: {
        appealIds: [
          '7387391',
          '789'
        ],
        updated: '2018-01-03T09:30:15-05:00',
        active: true,
        incompleteHistory: false,
        aoj: 'vba',
        programArea: 'compensation',
        description: 'Service connection for tinnitus, hearing loss, and two more',
        type: 'original',
        aod: false,
        location: 'aoj',
        status: {
          type: 'bva_decision',
          details: {
            regionalOffice: 'Chicago Regional Office',
            issues: [
              {
                description: 'Heel, increased rating',
                disposition: 'allowed',
                date: '2016-05-30'
              },
              {
                description: 'Knee, increased rating',
                disposition: 'allowed',
                date: '2016-05-30'
              },
              {
                description: 'Tinnitus, increased rating',
                disposition: 'denied',
                date: '2016-05-30'
              },
              {
                description: 'Leg, service connection',
                disposition: 'denied',
                date: '2016-05-30'
              },
              {
                description: 'Diabetes, service connection',
                disposition: 'remand',
                date: '2016-05-30'
              },
              {
                description: 'Shoulder, service connection',
                disposition: 'remand',
                date: '2016-05-30'
              },
            ]
          }
        },
        docket: {
          front: false,
          total: 206900,
          ahead: 109203,
          ready: 22109,
          eta: '2019-08-31'
        },
        issues: [
          {
            active: true,
            description: 'Tinnitus, service connection',
            lastAction: null,
            date: '2016-05-30'
          },
          {
            active: true,
            description: 'Head, increased rating',
            lastAction: null,
            date: '2016-05-30'
          },
          {
            active: true,
            description: 'Shoulder, increased rating',
            lastAction: null,
            date: '2016-05-30'
          },
          {
            active: true,
            description: 'Knee, service connection',
            lastAction: 'field_grant',
            date: '2016-05-30'
          },
          {
            active: false,
            description: 'Toe, service connection',
            lastAction: 'withdrawn',
            date: '2016-05-30'
          },
          {
            active: true,
            description: 'Tinnitus, service connection',
            lastAction: 'allowed',
            date: '2016-05-30'
          },
          {
            active: false,
            description: 'Tinnitus, service connection',
            lastAction: 'denied',
            date: '2016-05-30'
          },
          {
            active: true,
            description: 'Tinnitus, service connection',
            lastAction: 'remand',
            date: '2016-05-30'
          },
          {
            active: false,
            description: 'Tinnitus, service connection',
            lastAction: 'cavc_remand',
            date: '2016-05-30'
          }
        ],
        alerts: [],
        events: [
          {
            type: 'claim',
            date: '2010-05-30',
            details: {}
          },
          {
            type: 'nod',
            date: '2011-06-10',
            details: {}
          },
          {
            type: 'soc',
            date: '2012-06-10',
            details: {}
          },
          {
            type: 'form9',
            date: '2013-06-10',
            details: {}
          },
          {
            type: 'certified',
            date: '2014-06-10',
            details: {}
          },
          {
            type: 'hearing_held',
            date: '2015-06-10',
            details: {
              regionalOffice: 'Chicago'
            }
          },
          {
            type: 'bva_decision',
            date: '2016-06-10',
            details: {}
          },
        ],
        evidence: [
          {
            description: 'Service treatment records',
            date: '2017-09-30'
          }
        ]
      }
    }
  ]
};
