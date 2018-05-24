import { DW_UPDATE_FIELD } from '../actions';
import _ from 'lodash';
import moment from 'moment';

const initialState = {
  '1_branchOfService': null, // 4
  '2_dischargeYear': '', // 2
  '3_dischargeMonth': '', // 2a
  '4_reason': null, // 1
  '5_dischargeType': null, // 1a
  '6_intention': null, // 1b
  '7_courtMartial': null, // 3
  '8_prevApplication': null, // 5
  '9_prevApplicationYear': null, // 5a
  '10_prevApplicationType': null, // 5b
  '11_failureToExhaust': null, // 5c
  '12_priorService': null, // 6
  questions: ['1_branchOfService'], // represents valid question progression
};

function nextQuestion(currentQuestion, answer, state) {
  let next;
  const noGeneralCourtMartial = ['2', '3'].includes(state['7_courtMartial']);
  const dischargeYear = state['2_dischargeYear'];
  const dischargeMonth = state['3_dischargeMonth'] || 1;
  const oldDischarge = moment().diff(moment([dischargeYear, dischargeMonth]), 'years', true) >= 15;
  const commonChanges = state['6_intention'] === '2';
  const transgender = state['4_reason'] === '5';
  const honorableDischarge = state['5_dischargeType'] === '1';

  switch (currentQuestion) {
    case '1_branchOfService':
      next = '2_dischargeYear';
      break;
    case '2_dischargeYear':
      if (answer === `${(new Date()).getFullYear() - 15}`) {
        next = '3_dischargeMonth';
      } else {
        next = '4_reason';
      }
      break;
    case '3_dischargeMonth':
      next = '4_reason';
      break;
    case '4_reason':
      if (answer === '3') {
        next = '5_dischargeType';
      } else if (answer === '8') {
        next = '10_prevApplicationType';
      } else if (answer === '5') {
        next = '7_courtMartial';
      } else {
        next = '6_intention';
      }
      break;
    case '5_dischargeType':
      next = '6_intention';
      break;
    case '6_intention':
      next = '7_courtMartial';
      break;
    case '7_courtMartial':
      next = '8_prevApplication';
      break;
    case '8_prevApplication':
      if (answer === '1') {
        if (parseInt(state['4_reason'], 10) < 5) {
          next = '9_prevApplicationYear';
        } else {
          next = '10_prevApplicationType';
        }
      } else {
        if (state['4_reason'] !== '5' && state['5_dischargeType'] !== '1') {
          next = '12_priorService';
        } else {
          next = 'END';
        }
      }
      break;
    case '9_prevApplicationYear':
      if (answer === '2') {
        next = '10_prevApplicationType';
      } else {
        if (state['4_reason'] !== '5' && state['5_dischargeType'] !== '1') {
          next = '12_priorService';
        } else {
          next = 'END';
        }
      }
      break;
    case '10_prevApplicationType':
      if (state['4_reason'] === '8') {
        next = 'END';
      } else if (answer === '3' && noGeneralCourtMartial && !oldDischarge && commonChanges) {
        next = '11_failureToExhaust';
      } else if (!transgender && !honorableDischarge) {
        next = '12_priorService';
      } else {
        next = 'END';
      }
      break;
    case '11_failureToExhaust':
      if (state['4_reason'] !== '5' && state['5_dischargeType'] !== '1') {
        next = '12_priorService';
      } else {
        next = 'END';
      }
      break;
    default:
      return 'END';
  }
  return next;
}

function form(state = initialState, action) {
  const isPastOrCurrentStep = (e) => {
    const num = e.split('_')[0];
    const nextNum = action.key.split('_')[0];
    return parseInt(num, 10) <= parseInt(nextNum, 10);
  };

  switch (action.type) {
    case DW_UPDATE_FIELD:
      // no-op if clicking on the same value
      if (action.value === state[action.key]) {
        return state;
      }

      if (nextQuestion(action.key, action.value, state) === 'END') {
        return {
          ...state,
          [action.key]: action.value,
          questions: state.questions.filter(isPastOrCurrentStep).concat([nextQuestion(action.key, action.value, state)]),
        };
      }
      return {
        ...state,
        // reset answers for subsequent questions
        ...Object.keys(initialState).reduce((a, k) => {
          const num = k.split('_')[0];
          const nextNum = action.key.split('_')[0];
          if (parseInt(num, 10) > parseInt(nextNum, 10)) {
            return _.set(a, k, initialState[k]);
          }
          return a;
        }, {}),
        [action.key]: action.value,
        questions: state.questions.filter(isPastOrCurrentStep).concat([nextQuestion(action.key, action.value, state)]),
      };
    default:
      return state;
  }
}

export default form;
