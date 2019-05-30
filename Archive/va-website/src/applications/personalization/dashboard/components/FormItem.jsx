import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import recordEvent from '../../../../platform/monitoring/record-event';
import { formTitles, formLinks, disabledForms } from '../helpers';

class FormItem extends React.Component {
  recordDashboardClick = (formId, actionType = 'continue-button') => {
    return () => {
      recordEvent({
        event: 'dashboard-navigation',
        'dashboard-action': actionType,
        'dashboard-product': formId,
      });
    };
  }

  render() {
    const savedFormData = this.props.savedFormData;
    const formId = savedFormData.form;
    const { last_updated: lastSaved, expires_at: expirationTime } = savedFormData.metadata;
    const lastSavedDateTime = moment.unix(lastSaved).format('MMM DD [at] h:mm a');
    const expirationDate = moment.unix(expirationTime).format('MMM DD');
    const isExpired = moment.unix(expirationTime).isBefore();
    const activeView = (
      <div className="card information">
        <div className="saved-form-information">
          <h5 className="form-title saved">Application for {formTitles[formId]}</h5>
          {!!lastSaved && !!expirationDate && <div className="saved-form-metadata-container">
            <span><strong>Last saved on:</strong> {lastSavedDateTime}</span>
            <p><strong>Expires on:</strong> {expirationDate}</p>
          </div>}
        </div>
        {!!disabledForms[formId] && <div>{disabledForms[formId]}</div>}
        <div className="row small-collapse">
          <div className="small-12 medium-8 large-8 columns">
            <div className="application-route-container resume">
              {!disabledForms[formId] && <a className="usa-button-primary application-route" href={`${formLinks[formId]}resume`} onClick={this.recordDashboardClick(formId)}>Continue Your Application</a>}
            </div>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <div className="remove-saved-application-container">
              <button className="va-button-link remove-saved-application-button" onClick={() => {
                this.props.toggleModal(formId);
                this.recordDashboardClick(formId, 'delete-link');
              }}>
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
