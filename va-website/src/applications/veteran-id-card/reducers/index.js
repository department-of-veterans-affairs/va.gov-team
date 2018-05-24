import { combineReducers } from 'redux';

import idcard from './idcard';
import emailForm from './emailForm';

export default {
  idcard: combineReducers({ idcard, emailForm })
};
