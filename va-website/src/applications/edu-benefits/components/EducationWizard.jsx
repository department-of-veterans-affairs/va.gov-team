import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';

import ErrorableRadioButtons from '@department-of-veterans-affairs/formation/ErrorableRadioButtons';

const levels = [
  ['newBenefit'],
  ['serviceBenefitBasedOn', 'transferredEduBenefits'],
  ['nationalCallToService', 'sponsorDeceasedDisabledMIA'],
  ['sponsorTransferredBenefits']
];

export default class EducationWizard extends React.Component {
  constructor(props) {
    super(props);

    // flattens all the fields in levels into object keys
    this.state = [].concat(...levels).reduce((state, field) => {
      return Object.assign(state, { [field]: null });
    }, { open: false });

  }

  getButton(form) {
    return (
      <a
        id="apply-now-link"
        href={`/education/apply-for-education-benefits/application/${form}`}
        className="usa-button va-button-primary">
        Apply Now
      </a>
    );
  }

  answerQuestion = (field, answer) => {
    const newState = Object.assign({}, { [field]: answer });

    // drop all the levels until we see the current question, then reset
    // everything at that level and beyond, so we don't see questions from
    // different branches
    const fields = [].concat(..._.dropWhile(level => !level.includes(field), levels));
    fields.forEach(laterField => {
      if (laterField !== field) {
        newState[laterField] = null;
      }
    });

    this.setState(newState);
  }

  render() {
    const {
      newBenefit,
      serviceBenefitBasedOn,
      nationalCallToService,
      transferredEduBenefits,
      sponsorDeceasedDisabledMIA,
      sponsorTransferredBenefits
    } = this.state;

    const buttonClasses = classNames('usa-button-primary', 'wizard-button', {
      'va-button-primary': !this.state.open
    });
    const contentClasses = classNames('form-expanding-group-open', 'wizard-content', {
      'wizard-content-closed': !this.state.open
    });

    return (
      <div className="wizard-container">
        <button
          aria-expanded={this.state.open ? 'true' : 'false'}
          aria-controls="wizardOptions"
          className={buttonClasses}
          onClick={() => this.setState({ open: !this.state.open })}>
          Select Correct Form
        </button>
        <div className={contentClasses} id="wizardOptions">
          <div className="wizard-content-inner">
            <ErrorableRadioButtons
              name="newBenefit"
              id="newBenefit"
              options={[
                { label: 'Applying for a new benefit', value: 'yes' },
                { label: 'Updating my current education benefits', value: 'no' }
              ]}
              onValueChange={({ value }) => this.answerQuestion('newBenefit', value)}
              value={{ value: newBenefit }}
              label="Are you applying for a new benefit or updating your current education benefits?"/>
            {newBenefit === 'yes' && <ErrorableRadioButtons
              name="serviceBenefitBasedOn"
              id="serviceBenefitBasedOn"
              options={[
                { label: 'Yes', value: 'own' },
                { label: 'No', value: 'other' }
              ]}
              onValueChange={({ value }) => this.answerQuestion('serviceBenefitBasedOn', value)}
              value={{ value: serviceBenefitBasedOn }}
              label="Are you a Veteran or Servicemember claiming a benefit based on your own service?"/>}
            {newBenefit === 'no' && <ErrorableRadioButtons
              name="transferredEduBenefits"
              id="transferredEduBenefits"
              options={[
                { label: 'No, I’m using my own benefit.', value: 'own' },
                { label: 'Yes, I’m using a transferred benefit.', value: 'transferred' },
                { label: 'No, I’m using the Fry Scholarship or DEA (Chapter 35)', value: 'fry' }
              ]}
              onValueChange={({ value }) => this.answerQuestion('transferredEduBenefits', value)}
              value={{ value: transferredEduBenefits }}
              label="Are you receiving education benefits transferred to you by a sponsor Veteran?"/>}
            {serviceBenefitBasedOn === 'own' && <ErrorableRadioButtons
              name="nationalCallToService"
              id="nationalCallToService"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' }
              ]}
              onValueChange={({ value }) => this.answerQuestion('nationalCallToService', value)}
              value={{ value: nationalCallToService }}
              label={<span>Are you claiming a <strong>National Call to Service</strong> education benefit? (This is uncommon)</span>}/>}
            {serviceBenefitBasedOn === 'other' && <ErrorableRadioButtons
              name="sponsorDeceasedDisabledMIA"
              id="sponsorDeceasedDisabledMIA"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' }
              ]}
              onValueChange={({ value }) => this.answerQuestion('sponsorDeceasedDisabledMIA', value)}
              value={{ value: sponsorDeceasedDisabledMIA }}
              label="Is your sponsor deceased, 100% permanently disabled, MIA, or a POW?"/>}
            {sponsorDeceasedDisabledMIA === 'no' && <ErrorableRadioButtons
              name="sponsorTransferredBenefits"
              id="sponsorTransferredBenefits"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' }
              ]}
              onValueChange={({ value }) => this.answerQuestion('sponsorTransferredBenefits', value)}
              value={{ value: sponsorTransferredBenefits }}
              label="Has your sponsor transferred their benefits to you?"/>}
            {newBenefit === 'yes' && serviceBenefitBasedOn === 'other' && sponsorDeceasedDisabledMIA === 'no' &&
              sponsorTransferredBenefits === 'no' &&
                <div className="usa-alert usa-alert-warning">
                  <div className="usa-alert-body">
                    <h4>Your application cannot be approved until your sponsor transfers their benefits.</h4>
                    <a target="_blank" href="https://www.dmdc.osd.mil/milconnect/public/faq/Education_Benefits-How_to_Transfer_Benefits">Instructions for your sponsor to transfer education benefits.</a>
                  </div>
                </div>}
            {newBenefit === 'yes' && nationalCallToService === 'yes' &&
              <div>
                <div className="usa-alert usa-alert-warning">
                  <div className="usa-alert-body">
                    <h4 className="usa-alert-heading wizard-alert-heading">Are you sure?</h4>
                    <p>Are all of the following things true of your service?</p>
                    <ul>
                      <li>Enlisted under the National Call to Service program, <strong>and</strong></li>
                      <li>Entered service between 10/01/03 and 12/31/07, <strong>and</strong></li>
                      <li>Chose education benefits</li>
                    </ul>
                  </div>
                </div>
                {this.getButton('1990N')}
              </div>}
            {newBenefit === 'yes' && nationalCallToService === 'no' &&
              this.getButton('1990')}
            {newBenefit === 'no' && (transferredEduBenefits === 'transferred' || transferredEduBenefits === 'own') &&
              this.getButton('1995')}
            {newBenefit === 'no' && transferredEduBenefits === 'fry' &&
              this.getButton('5495')}
            {newBenefit === 'yes' && serviceBenefitBasedOn === 'other' && sponsorDeceasedDisabledMIA === 'yes' &&
              this.getButton('5490')}
            {newBenefit === 'yes' && serviceBenefitBasedOn === 'other' && sponsorDeceasedDisabledMIA === 'no' &&
              sponsorTransferredBenefits !== null &&
              this.getButton('1990E')}
          </div>
        </div>
      </div>
    );
  }
}
