import { combineReducers } from 'redux';
import form from './form';
import modal from './modal';
import refresh from './refresh';

export default {
  health: combineReducers({
    hr: combineReducers({
      form,
      modal,
      refresh,
    })
  })
};
