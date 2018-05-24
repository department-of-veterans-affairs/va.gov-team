import { combineReducers } from 'redux';

import alert from './alert';
import compose from './compose';
import errors from './errors';
import folders from './folders';
import loading from './loading';
import messages from './messages';
import modals from './modals';
import preferences from './preferences';
import recipients from './recipients';
import search from './search';

export default {
  health: combineReducers({
    msg: combineReducers({
      alert,
      compose,
      errors,
      folders,
      loading,
      messages,
      modals,
      preferences,
      recipients,
      search
    })
  })
};
