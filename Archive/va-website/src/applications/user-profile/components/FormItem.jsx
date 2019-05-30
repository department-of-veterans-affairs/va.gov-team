import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { formTitles, formLinks } from '../helpers';

class FormItem extends React.Component {
  render() {
    const savedFormData = this.props.savedFormData;
    const formId = savedFormData.form;
    const { last_updated: lastSaved, expires_at: expirationTime } = savedFormData.metadata;
    const lastSavedDateTime = moment.unix(lastSaved).format('M/D/YYYY [at] h:mm a');
    const expirationDate = moment.unix(expirationTime).format('M/D/YYYY');
    const isExpired = moment(expirationDate).isBefore();
    const activeView = (
      <div className="card information">
        <div className="saved-form-information">
          <h5 className="form-title saved">Application for {formTitles[formId]}</h5>
          {!!lastSaved && !!expirationDate && <div className="saved-form-metadata-container">
            <span className="saved-form-metadata">Last saved on {lastSavedDateTime}</span>
            <p>Your saved application <span className="expires">will expire on {expirationDate}.</span></p>
          </div>}
        </div>
        <div className="row small-collapse">
          <div className="small-12 medium-8 large-8 columns">
            <div className="application-route-container resume">
              <a className="usa-button-primary application-route" href={`${formLinks[formId]}resume`}>Continue Your Application</a>
            </div>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <div className="remove-saved-application-container">
              <button className="va-button-link remove-saved-application-button" onClick={() => this.props.toggleModal(formId)}>
                <i className="fa fa-trash"></i><span className="remove-saved-application-label">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    const expiredView = (
      <div className="usa-alert usa-alert-warning saved-form-expired no-background-image">
        <button className="va-alert-close notification-close va-expired-item-close" onClick={() => this.props.toggleModal(formId)} aria-label="Close notification">
          <i className="fa fa-close" aria-label="Close icon"></i>
        </button>
        <div className="usa-alert-body">
          <h5 className="form-title">Your saved {formTitles[formId]} application has expired.</h5>
          <div className="small-12 medium-8 large-8 columns application-route-container">
            <a className="usa-button-primary application-route" href={formLinks[formId]}>Start a New Application</a>
          </div>
        </div>
      </div>
    );
    return isExpired ? expiredView : activeView;
  }
}

FormItem.propTypes = {
  savedFormData: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default FormItem;
