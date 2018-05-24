import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash/fp';

import SaveFormLink from './SaveFormLink';
import SaveStatus from './SaveStatus';
import { setData, uploadFile } from '../actions';
import {
  saveErrors,
  autoSaveForm,
  saveAndRedirectToReturnUrl
} from './actions';
import { getFormContext } from './selectors';
import { toggleLoginModal } from '../../../../platform/site-wide/user-nav/actions';
import { FormPage } from '../containers/FormPage';

class RoutedSavablePage extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedAutoSave = _.debounce(1000, this.autoSave);
  }

  onChange = (formData) => {
    this.props.setData(formData);
    this.debouncedAutoSave();
  }

  autoSave() {
    const { form, user } = this.props;
    if (user.login.currentlyLoggedIn) {
      const data = form.data;
      const { formId, version } = form;
      const returnUrl = this.props.location.pathname;

      this.props.autoSaveForm(formId, data, version, returnUrl);
    }
  }

  render() {
    const { user, form } = this.props;
    const contentAfterButtons = (
      <div>
        <SaveStatus
          isLoggedIn={user.login.currentlyLoggedIn}
          showLoginModal={this.props.showLoginModal}
          toggleLoginModal={this.props.toggleLoginModal}
          form={form}>
        </SaveStatus>
        <SaveFormLink
          locationPathname={this.props.location.pathname}
          form={form}
          user={user}
          showLoginModal={this.props.showLoginModal}
          saveAndRedirectToReturnUrl={this.props.saveAndRedirectToReturnUrl}
          toggleLoginModal={this.props.toggleLoginModal}/>
      </div>
    );

    return (
      <FormPage
        {...this.props}
        blockScrollOnMount={saveErrors.has(form.savedStatus)}
        setData={this.onChange}
        formContext={getFormContext({ user, form })}
        contentAfterButtons={contentAfterButtons}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    user: state.user,
    showLoginModal: state.navigation.showLoginModal
  };
}

const mapDispatchToProps = {
  setData,
  saveAndRedirectToReturnUrl,
  autoSaveForm,
  toggleLoginModal,
  uploadFile
};

RoutedSavablePage.propTypes = {
  form: PropTypes.object.isRequired,
  route: PropTypes.shape({
    pageConfig: PropTypes.shape({
      pageKey: PropTypes.string.isRequired,
      schema: PropTypes.object.isRequired,
      uiSchema: PropTypes.object.isRequired
    }),
    pageList: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired
    }))
  }),
  setData: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutedSavablePage));

export { RoutedSavablePage };
