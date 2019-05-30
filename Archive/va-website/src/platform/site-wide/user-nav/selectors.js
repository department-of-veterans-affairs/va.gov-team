import { createSelector } from 'reselect';
import _ from 'lodash';
import { selectProfile } from '../../user/selectors';

export const selectUserGreeting = createSelector(
  state => selectProfile(state).userFullName,
  state => selectProfile(state).email,
  () => window.sessionStorage.userFirstName,
  (name, email, sessionFirstName) => {
    if (name || sessionFirstName) {
      return _.startCase(_.toLower(
        name.first || sessionFirstName
      ));
    }

    return email;
  }
);
