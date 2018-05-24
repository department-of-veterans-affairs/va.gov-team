import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { focusElement } from '../../../../platform/utilities/ui';
import { fetchInProgressForm, removeInProgressForm } from './actions';
import { formTitles } from '../../../user-profile/helpers';
import FormStartControls from './FormStartControls';

const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('topScrollElement', window.VetsGov.scroll || {
    duration: 500,
    delay: 0,
    smooth: true,
  });
};

class FormSaved extends React.Component {
  componentDidMount() {
    // if we don’t have this then that means we’re loading the page
    // without any data and should just go back to the intro
    if (!this.props.lastSavedDate) {
      this.props.router.replace(this.props.route.pageList[0].path);
    } else {
      scrollToTop();
      focusElement('.usa-alert');
    }
  }

  render() {
    const { formId, lastSavedDate } = this.props;
    const { profile } = this.props.user;
    const { verified } = profile;
    const prefillAvailable = !!(profile && profile.prefillsAvailable.includes(formId));
    const { success } = this.props.route.formConfig.savedFormMessages || {};
    const expirationDate = moment.unix(this.props.expirationDate).format('M/D/YYYY');

    return (
      <div>
        <div className="usa-alert usa-alert-info">
          <div className="usa-alert-body">
            <strong>Your {formTitles[formId]} application has been saved.</strong><br/>
            {!!lastSavedDate && !!expirationDate && <div className="saved-form-metadata-container">
              <span className="saved-form-metadata">Last saved on {moment(lastSavedDate).format('M/D/YYYY [at] h:mm a')}</span>
              <p className="expires-container">Your saved application <span className="expires">will expire on {expirationDate}.</span></p>
            </div>}
            {success}
            If you’re logged in through a public computer, please sign out of your account before you log off to keep your information secure.
          </div>
        </div>
        {!verified && <div className="usa-alert usa-alert-warning">
          <div className="usa-alert-body">
            We want to keep your information safe with the highest level of security. Please <a href={`/verify?next=${window.location.pathname}`} className="verify-link">verify your identity</a>.
          </div>
        </div>}
        <br/>
        <FormStartControls
          startPage={this.props.route.pageList[1].path}
          router={this.props.router}
          formId={this.props.formId}
          returnUrl={this.props.returnUrl}
          migrations={this.props.migrations}
          fetchInProgressForm={this.props.fetchInProgressForm}
          prefillTransformer={this.props.prefillTransformer}
          removeInProgressForm={this.props.removeInProgressForm}
          prefillAvailable={prefillAvailable}
          formSaved/>
      </div>
    );
  }
}

FormSaved.propTypes = {
  route: PropTypes.shape({
    pageList: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string
    })),
    formConfig: PropTypes.object.isRequired
  }),
  lastSavedDate: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    formId: state.form.formId,
    returnUrl: state.form.loadedData.metadata.returnUrl,
    lastSavedDate: state.form.lastSavedDate,
    expirationDate: state.form.expirationDate,
    migrations: state.form.migrations,
    prefillTransformer: state.form.prefillTransformer,
    user: state.user
  };
}

const mapDispatchToProps = {
  fetchInProgressForm,
  removeInProgressForm
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormSaved));

export { FormSaved };
