import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../Dropdown';
import RadioButtons from '../RadioButtons';
import { formatCurrency } from '../../utils/helpers';

class CalculatorForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetBuyUp = this.resetBuyUp.bind(this);
    this.renderLearnMoreLabel = this.renderLearnMoreLabel.bind(this);
    this.renderInState = this.renderInState.bind(this);
    this.renderTuition = this.renderTuition.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
    this.renderYellowRibbon = this.renderYellowRibbon.bind(this);
    this.renderScholarships = this.renderScholarships.bind(this);
    this.renderTuitionAssist = this.renderTuitionAssist.bind(this);
    this.renderEnrolled = this.renderEnrolled.bind(this);
    this.renderCalendar = this.renderCalendar.bind(this);
    this.renderKicker = this.renderKicker.bind(this);
    this.renderBuyUp = this.renderBuyUp.bind(this);
    this.renderWorking = this.renderWorking.bind(this);
  }

  handleInputChange(event) {
    const { name: field, value } = event.target;
    this.props.onInputChange({ field, value });
  }

  resetBuyUp(event) {
    event.preventDefault();
    if (this.props.inputs.buyUpAmount > 600) {
      this.props.onInputChange({
        field: 'buyUpAmount',
        value: 600
      });
    }
  }

  renderLearnMoreLabel({ text, modal }) {
    return (
      <span>
        {text} (<a onClick={this.props.onShowModal.bind(this, modal)}>Learn more</a>)
      </span>
    );
  }

  renderInState() {
    if (!this.props.displayedInputs.inState) return null;
    return (
      <RadioButtons
        label="Are you an in-state student?"
        name="inState"
        options={[
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]}
        value={this.props.inputs.inState}
        onChange={this.handleInputChange}/>
    );
  }

  renderTuition() {
    if (!this.props.displayedInputs.tuition) return null;

    const inStateTuitionInput =
      this.props.inputs.inState === 'no' && (
        <div>
          <label htmlFor="inStateTuitionFees">
            {this.renderLearnMoreLabel({
              text: 'In-state tuition and fees per year',
              modal: 'calcInStateTuition'
            })}
          </label>
          <input
            type="text"
            name="inStateTuitionFees"
            value={formatCurrency(this.props.inputs.inStateTuitionFees)}
            onChange={this.handleInputChange}/>
        </div>
      );

    return (
      <div>
        <label htmlFor="tuitionFees">
          {this.renderLearnMoreLabel({
            text: 'Tuition and fees per year',
            modal: 'calcTuition'
          })}
        </label>
        <input
          type="text"
          name="tuitionFees"
          value={formatCurrency(this.props.inputs.tuitionFees)}
          onChange={this.handleInputChange}/>
        {inStateTuitionInput}
      </div>
    );
  }

  renderBooks() {
    if (!this.props.displayedInputs.books) return null;
    return (
      <div>
        <label htmlFor="books">Books and supplies per year</label>
        <input
          type="text"
          name="books"
          value={formatCurrency(this.props.inputs.books)}
          onChange={this.handleInputChange}/>
      </div>
    );
  }

  renderYellowRibbon() {
    if (!this.props.displayedInputs.yellowRibbon) return null;

    let amountInput;

    if (this.props.inputs.yellowRibbonRecipient === 'yes') {
      amountInput = (
        <div>
          <label htmlFor="yellowRibbonAmount">
            Yellow Ribbon Amount From School per year
          </label>
          <input
            type="text"
            name="yellowRibbonAmount"
            value={formatCurrency(this.props.inputs.yellowRibbonAmount)}
            onChange={this.handleInputChange}/>
        </div>
      );
    }

    return (
      <div>
        <RadioButtons
          label={this.renderLearnMoreLabel({
            text: 'Will you be a Yellow Ribbon recipient?',
            modal: 'calcYr'
          })}
          name="yellowRibbonRecipient"
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          value={this.props.inputs.yellowRibbonRecipient}
          onChange={this.handleInputChange}/>
        {amountInput}
      </div>
    );
  }

  renderScholarships() {
    if (!this.props.displayedInputs.scholarships) return null;
    return (
      <div>
        <label htmlFor="scholarships">
          {this.renderLearnMoreLabel({
            text: 'Scholarships (excluding Pell)',
            modal: 'calcScholarships'
          })}
        </label>
        <input
          type="text"
          name="scholarships"
          value={formatCurrency(this.props.inputs.scholarships)}
          onChange={this.handleInputChange}/>
      </div>
    );
  }

  renderTuitionAssist() {
    if (!this.props.displayedInputs.tuitionAssist) return null;
    return (
      <div>
        <label htmlFor="tuitionAssist">
          {this.renderLearnMoreLabel({
            text: 'How much are you receiving in military tuition assistance',
            modal: 'calcTuitionAssist'
          })}
        </label>
        <input
          type="text"
          name="tuitionAssist"
          value={formatCurrency(this.props.inputs.tuitionAssist)}
          onChange={this.handleInputChange}/>
      </div>
    );
  }

  renderEnrolled() {
    const {
      enrolled: shouldRenderEnrolled,
      enrolledOld: shouldRenderEnrolledOld
    } = this.props.displayedInputs;

    if (!shouldRenderEnrolled && !shouldRenderEnrolledOld) {
      return null;
    }

    const options = shouldRenderEnrolled ? [
      { value: 'full', label: 'Full Time' },
      { value: 'three quarters', label: '¾ Time' },
      { value: 'more than half', label: 'More than ½ time' },
      { value: 'half or less', label: '½ Time or less' },
    ] : [
      { value: 'full', label: 'Full Time' },
      { value: 'three quarters', label: '¾ Time' },
      { value: 'half', label: '½ Time' },
      { value: 'less than half', label: 'Less than ½ time more than ¼ time' },
      { value: 'quarter', label: '¼ Time or less' },
    ];

    const {
      enrolled: enrolledValue,
      enrolledOld: enrolledOldValue
    } = this.props.inputs;

    const name = shouldRenderEnrolled ? 'enrolled' : 'enrolledOld';
    const value = shouldRenderEnrolled ? enrolledValue : enrolledOldValue;

    return (
      <div>
        <Dropdown
          label={this.renderLearnMoreLabel({
            text: 'Enrolled',
            modal: 'calcEnrolled'
          })}
          name={name}
          alt="Enrolled"
          options={options}
          visible
          value={value}
          onChange={this.handleInputChange}/>
      </div>
    );
  }

  renderCalendar() {
    if (!this.props.displayedInputs.calendar) return null;

    let dependentDropdowns;

    if (this.props.inputs.calendar === 'nontraditional') {
      dependentDropdowns = (
        <div>
          <Dropdown
            label="How many terms per year?"
            name="numberNontradTerms"
            alt="How many terms per year?"
            options={[
              { value: '3', label: 'Three' },
              { value: '2', label: 'Two' },
              { value: '1', label: 'One' }
            ]}
            visible
            value={this.props.inputs.numberNontradTerms}
            onChange={this.handleInputChange}/>
          <Dropdown
            label="How long is each term?"
            name="lengthNontradTerms"
            alt="How long is each term?"
            options={[
              { value: '1', label: '1 month' },
              { value: '2', label: '2 months' },
              { value: '3', label: '3 months' },
              { value: '4', label: '4 months' },
              { value: '5', label: '5 months' },
              { value: '6', label: '6 months' },
              { value: '7', label: '7 months' },
              { value: '8', label: '8 months' },
              { value: '9', label: '9 months' },
              { value: '10', label: '10 months' },
              { value: '11', label: '11 months' },
              { value: '12', label: '12 months' }
            ]}
            visible
            value={this.props.inputs.lengthNontradTerms}
            onChange={this.handleInputChange}/>
        </div>
      );
    }

    return (
      <div>
        <Dropdown
          label={this.renderLearnMoreLabel({
            text: 'School Calendar',
            modal: 'calcSchoolCalendar'
          })}
          name="calendar"
          alt="School calendar"
          options={[
            { value: 'semesters', label: 'Semesters' },
            { value: 'quarters', label: 'Quarters' },
            { value: 'nontraditional', label: 'Non-Traditional' }
          ]}
          visible
          value={this.props.inputs.calendar}
          onChange={this.handleInputChange}/>
        {dependentDropdowns}
      </div>
    );
  }

  renderKicker() {
    if (!this.props.displayedInputs.kicker) return null;

    let amountInput;

    if (this.props.inputs.kickerEligible === 'yes') {
      amountInput = (
        <div>
          <label htmlFor="kickerAmount">How much is your kicker?</label>
          <input
            type="text"
            name="kickerAmount"
            value={formatCurrency(this.props.inputs.kickerAmount)}
            onChange={this.handleInputChange}/>
        </div>
      );
    }

    return (
      <div>
        <RadioButtons
          label={this.renderLearnMoreLabel({
            text: 'Eligible for kicker bonus?',
            modal: 'calcKicker'
          })}
          name="kickerEligible"
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          value={this.props.inputs.kickerEligible}
          onChange={this.handleInputChange}/>
        {amountInput}
      </div>
    );
  }

  renderBuyUp() {
    if (!this.props.displayedInputs.buyUp) return null;

    let amountInput;

    if (this.props.inputs.buyUp === 'yes') {
      amountInput = (
        <div>
          <label htmlFor="buyUpAmount">How much did you pay toward buy-up (up to $600)?</label>
          <input
            type="text"
            name="buyUpAmount"
            value={formatCurrency(this.props.inputs.buyUpAmount)}
            onChange={this.handleInputChange}
            onBlur={this.resetBuyUp}/>
        </div>
      );
    }

    return (
      <div>
        <RadioButtons
          label="Participate in buy-up program?"
          name="buyUp"
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          value={this.props.inputs.buyUp}
          onChange={this.handleInputChange}/>
        {amountInput}
      </div>
    );
  }

  renderWorking() {
    if (!this.props.displayedInputs.working) return null;
    return (
      <div>
        <Dropdown
          label={this.renderLearnMoreLabel({
            text: 'Will be working',
            modal: 'calcWorking'
          })}
          name="working"
          alt="Will be working"
          options={[
            { value: '30', label: '30+ hrs / week' },
            { value: '28', label: '28 hrs / week' },
            { value: '26', label: '26 hrs / week' },
            { value: '24', label: '24 hrs / week' },
            { value: '22', label: '22 hrs / week' },
            { value: '20', label: '20 hrs / week' },
            { value: '18', label: '18 hrs / week' },
            { value: '16', label: '16 hrs / week' },
            { value: '14', label: '14 hrs / week' },
            { value: '12', label: '12 hrs / week' },
            { value: '10', label: '10 hrs / week' },
            { value: '8', label: '8 hrs / week' },
            { value: '6', label: '6 hrs / week' },
            { value: '4', label: '4 hrs / week' },
            { value: '2', label: '2 hrs / week' }
          ]}
          visible
          value={this.props.inputs.working}
          onChange={this.handleInputChange}/>
      </div>
    );
  }

  render() {
    if (!this.props.displayedInputs) return null;
    return (
      <div className="calculator-form">
        {this.renderInState()}
        {this.renderTuition()}
        {this.renderBooks()}
        {this.renderYellowRibbon()}
        {this.renderScholarships()}
        {this.renderTuitionAssist()}
        {this.renderEnrolled()}
        {this.renderCalendar()}
        {this.renderKicker()}
        {this.renderBuyUp()}
        {this.renderWorking()}
      </div>
    );
  }
}

CalculatorForm.propTypes = {
  inputs: PropTypes.object,
  displayedInputs: PropTypes.object,
  onShowModal: PropTypes.func,
  onInputChange: PropTypes.func
};

export default CalculatorForm;
