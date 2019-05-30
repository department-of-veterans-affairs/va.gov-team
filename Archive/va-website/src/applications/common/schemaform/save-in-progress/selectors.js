import { createStructuredSelector } from 'reselect';
import { getFormData } from '../state/selectors';
import { PREFILL_STATUSES } from './actions';

export const getSaveInProgressState = createStructuredSelector({
  loadedStatus: state => state.form.loadedStatus,
  savedStatus: state => state.form.savedStatus,
  autoSavedStatus: state => state.form.autoSavedStatus,
  prefillStatus: state => state.form.prefillStatus,
  returnUrl: state => state.form.loadedData.metadata.returnUrl,
  formData: getFormData,
  isLoggedIn: state => state.user.login.currentlyLoggedIn,
  savedForms: state => state.user.profile.savedForms,
  prefillsAvailable: state => state.user.profile.prefillsAvailable,
  profileIsLoading: state => state.user.profile.loading
});

export const getIntroState = createStructuredSelector({
  formData: getFormData,
  formId: state => state.form.formId,
  migrations: state => state.form.migrations,
  prefillTransformer: state => state.form.prefillTransformer,
  returnUrl: state => state.form.loadedData.metadata.returnUrl,
  user: state => state.user,
  lastSavedDate: state => state.form.lastSavedDate
});

export const getFormContext = createStructuredSelector({
  isLoggedIn: state => state.user.login.currentlyLoggedIn,
  prefilled: state => state.form.prefillStatus === PREFILL_STATUSES.success
});

