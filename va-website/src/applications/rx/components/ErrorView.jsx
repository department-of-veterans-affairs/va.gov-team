import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty, some, includes, intersection, concat } from 'lodash';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { mhvAccessError } from '../../../platform/static-data/error-messages';
import { errorCodes } from '../config';

class ErrorView extends React.Component {
  renderErrorMessage() {
    const { errors } = this.props;
    const errorCodeIncludes = (codes) => {
      return (error) => {
        return includes(codes, error.code);
      };
    };

    let content;
    let title;
    let detail;
    let alert;

    if (some(errors, errorCodeIncludes(errorCodes.access))) {
      content = mhvAccessError;
    } else if (some(errors, errorCodeIncludes(errorCodes.registration))) {
      alert = true;
      title = 'We’re not able to locate your records';
      detail = (
        <p>
          Please call support at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET). To refill prescriptions, you need to be registered as a VA patient through MyHealtheVet. To register, <a href="https://www.myhealth.va.gov/web/myhealthevet/user-registration">visit MyHealtheVet</a>
        </p>
      );
    } else if (some(errors, errorCodeIncludes(errorCodes.prescriptions))) {
      alert = true;
      title = 'We couldn’t retrieve your prescriptions';
      detail = (
        <p>
          Please <a onClick={() => { window.location.reload(true); }}>refresh this page</a> or try again later. If this problem persists, please call the Vets.gov Help Desk at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).
        </p>
      );
    } else if (some(errors, errorCodeIncludes(errorCodes.accountCreation))) {
      alert = true;
      title = 'We couldn’t access your health tools';
      detail = (
        <p>
          We’re sorry. We can’t seem to give you access to this site’s tools for managing your health and benefits online right now. Please <a onClick={() => { window.location.reload(true); }}>try again</a> in a few minutes. If it still doesn’t work, please call the Vets.gov Help Desk at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).
        </p>
      );
    }

    content = content || (
      <span>
        <h4>{title}</h4>
        <div>{detail}</div>
      </span>
    );

    if (alert) {
      return (
        <AlertBox
          content={content}
          isVisible
          status="warning"/>
      );
    }

    return (
      <div className="rx-app-error rx-tab-explainer">
        {content}
      </div>
    );
  }

  render() {
    const { errors } = this.props;
    const blockingErrors = concat(
      errorCodes.access,
      errorCodes.registration,
      errorCodes.prescriptions,
      errorCodes.accountCreation,
    );

    // don’t block application if no errors, or errors not in the list above
    if (isEmpty(errors) || intersection(errors.map(e => e.code), blockingErrors).length === 0) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }

    return this.renderErrorMessage();
  }
}

ErrorView.propTypes = {
  errors: PropTypes.array,
};

export default ErrorView;
