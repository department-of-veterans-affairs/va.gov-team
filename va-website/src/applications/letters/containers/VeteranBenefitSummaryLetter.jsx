/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { connect } from 'react-redux';

import recordEvent from '../../../platform/monitoring/record-event';
import { updateBenefitSummaryRequestOption } from '../actions/letters';
import {
  benefitOptionsMap,
  characterOfServiceContent,
  optionsToAlwaysDisplay,
  getBenefitOptionText
} from '../utils/helpers.jsx';
import { formatDateShort } from '../../../platform/utilities/date';

export class VeteranBenefitSummaryLetter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(domEvent) {
    recordEvent({
      // For Google Analytics
      event: 'letter-benefit-option-clicked',
      'letter-benefit-option': domEvent.target.id,
      'letter-benefit-option-status': domEvent.target.checked ? 'checked' : 'unchecked'
    });
    this.props.updateBenefitSummaryRequestOption(
      benefitOptionsMap[domEvent.target.id],
      domEvent.target.checked);
  }

  render() {
    const serviceInfo = this.props.benefitSummaryOptions.serviceInfo || [];
    const militaryServiceRows = serviceInfo.map((service, index) => {
      return (
        <tr key={`service${index}`}>
          <th scope="row" className="service-info">{(service.branch || '').toLowerCase()}</th>
          <td className="service-info">
            {characterOfServiceContent[(service.characterOfService || '').toLowerCase()]}
          </td>
          <td>{formatDateShort(service.enteredDate)}</td>
          <td>{formatDateShort(service.releasedDate)}</td>
        </tr>
      );
    });

    const benefitInfo = this.props.benefitSummaryOptions.benefitInfo;
    const requestOptions = this.props.requestOptions;
    const vaBenefitInfoRows = [];

    Object.keys(benefitInfo).forEach(key => {
      // Need to verify with EVSS and vets-api: values should be true, false, or
      // some value other than null or undefined, so this check should not be
      // necessary, or should log a Sentry error.
      if (benefitInfo[key] === null) {
        return;
      }
      // For some options, the customization checkbox is only displayed
      // if the benefit information value is not false. For others, the
      // customization checkbox is always displayed.
      const value = benefitInfo[key];
      const displayOption = optionsToAlwaysDisplay.includes(key) || value !== false;
      const { isVeteran } = this.props;
      const optionText = getBenefitOptionText(key, value, isVeteran, benefitInfo.awardEffectiveDate);
      if (optionText && displayOption) {
        vaBenefitInfoRows.push(
          <tr key={`option${key}`}>
            <th scope="row">
              <input
                aria-labelledby={`${key}Label`}
                autoComplete="false"
                checked={requestOptions[benefitOptionsMap[key]]}
                id={key}
                name={key}
                type="checkbox"
                onChange={this.handleChange}/>
              <label/>
            </th>
            <td><label id={`${key}Label`} htmlFor={key}>{optionText}</label></td>
          </tr>
        );
      }
    });

    const vaBenefitInformation = (
      <table id="benefitInfoTable">
        <thead>
          <tr>
            <th scope="col">Include</th>
            <th scope="col">Statement</th>
          </tr>
        </thead>
        <tbody>
          {vaBenefitInfoRows}
        </tbody>
      </table>
    );

    let benefitSummaryContent;
    if (this.props.optionsAvailable) {
      benefitSummaryContent = (
        <div>
          <h4>Choose the information you want to include.</h4>
          <h2>Military service information</h2>
          <p>
            Our records show the 3 most recent service periods. There may be additional service periods not shown here.
          </p>
          <div className="form-checkbox">
            <input
              autoComplete="false"
              checked={requestOptions.militaryService}
              id="militaryService"
              name="militaryService"
              type="checkbox"
              onChange={this.handleChange}/>
            <label
              name="militaryService-label"
              htmlFor="militaryService">
              Include military service information
            </label>
          </div>
          <table id="militaryServiceTable">
            <thead>
              <tr>
                <th scope="col">Branch of service</th>
                <th scope="col">Discharge type</th>
                <th scope="col">Active duty start</th>
                <th scope="col">Separation date</th>
              </tr>
            </thead>
            <tbody>
              {militaryServiceRows}
            </tbody>
          </table>
          <h2>VA benefit and disability information</h2>
          <p>
            Please choose what information you want to include in your letter.
          </p>
          {vaBenefitInformation}
        </div>
      );
    } else {
      benefitSummaryContent = (
        <div className="feature">
          <h4>Your VA Benefit Summary letter is currently unavailable</h4>
          <div>We weren’t able to retrieve your VA Benefit Summary letter. Please call <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).</div>
        </div>
      );
    }

    return (
      <div>
        <p>
          This letter shows your service history and some VA benefits information. You can customize this letter and use it for many things, including to apply for housing assistance, civil service jobs, and state or local property and car tax relief.
        </p>
        {benefitSummaryContent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const letterState = state.letters;

  return {
    benefitSummaryOptions: {
      benefitInfo: letterState.benefitInfo,
      serviceInfo: letterState.serviceInfo
    },
    // default isVeteran to true for now - please see vets.gov-team issue #6250
    // isVeteran: (state.user.profile.veteranStatus === 'OK' ? state.user.profile.isVeteran : true),
    isVeteran: true,
    optionsAvailable: letterState.optionsAvailable,
    requestOptions: letterState.requestOptions
  };
}

const mapDispatchToProps = {
  updateBenefitSummaryRequestOption
};

export default connect(mapStateToProps, mapDispatchToProps)(VeteranBenefitSummaryLetter);
