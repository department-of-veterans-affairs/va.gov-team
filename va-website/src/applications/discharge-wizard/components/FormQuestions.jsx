import React from 'react';
import { range } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

import recordEvent from '../../../platform/monitoring/record-event';
import ErrorableRadioButtons from '@department-of-veterans-affairs/formation/ErrorableRadioButtons';
import ErrorableSelect from '@department-of-veterans-affairs/formation/ErrorableSelect';
import { months } from '../../../platform/static-data/options-for-select.js';
import { focusElement } from '../../../platform/utilities/ui';
import { questionLabels, prevApplicationYearCutoff, answerReview } from '../config';
import { shouldShowQuestion } from '../utils';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

class FormQuestions extends React.Component {
  componentDidMount() {
    Scroll.animateScroll.scrollToTop();
    const el = document.getElementById('dw-home-link');
    focusElement(el);
  }

  updateField(name, value) {
    this.props.updateField(name, value);
    this.forceUpdate();
  }

  scrollToLast = (action) => {
    setTimeout(() => {
      const el = this.props.formValues.questions.slice(-1)[0];
      scroller.scrollTo(el, window.VetsGov.scroll || {
        duration: 1000,
        smooth: true,
      });

      if (typeof action === 'function') {
        action();
      }
    }, 100);
  }

  handleKeyDown = (e) => {
    // only scroll to next question if user tabs out of the current one
    if (!e.shiftKey && e.keyCode === 9 && ['INPUT', 'SELECT'].includes(document.activeElement.tagName)) {
      const next = this.props.formValues.questions.slice(-1)[0];
      const curr = e.target.name;

      if (next && curr && parseInt(next.charAt(0), 10) > parseInt(curr.charAt(0), 10)) {
        const el = this.props.formValues.questions.slice(-1)[0];
        this.scrollToLast(() => {
          (this[el].querySelector('input') || this[el].querySelector('select')).focus();
        });
      }
    }
  }

  handleScrollTo = (e) => {
    e.preventDefault();

    recordEvent({ event: 'discharge-upgrade-review-edit' });

    scroller.scrollTo(e.target.name, window.VetsGov.scroll || {
      duration: 1000,
      smooth: true,
      offset: -150,
    });

    (this[e.target.name].querySelector('input') || this[e.target.name].querySelector('select')).focus();
  }

  renderQuestion(name, label, options) {
    const radioButtonProps = {
      name,
      label,
      options,
      key: name,
      onValueChange: (v) => {
        if (v.dirty) {
          this.updateField(name, v.value);
        }
      },
      onMouseDown: this.scrollToLast,
      onKeyDown: this.handleKeyDown,
      value: {
        value: this.props.formValues[name],
      }
    };

    return (
      <div ref={(el) => { this[name] = el; }}>
        <Element name={name}/>
        <ErrorableRadioButtons {...radioButtonProps}/>
      </div>
    );
  }

  renderQuestionThree() {
    const key = '4_reason';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }

    const options = [
      { label: questionLabels[key]['1'], value: '1' },
      { label: questionLabels[key]['2'], value: '2' },
      { label: questionLabels[key]['3'], value: '3' },
      { label: questionLabels[key]['4'], value: '4' },
      { label: questionLabels[key]['5'], value: '5' },
      // question 8 is intentionally presented out of order here
      { label: questionLabels[key]['8'], value: '8' },
      { label: questionLabels[key]['6'], value: '6' },
      { label: questionLabels[key]['7'], value: '7' },
    ];

    const label = <div><h4>Which of the following best describes why you want to change your discharge paperwork? Choose the one that’s closest to your situation.</h4><p><strong>Note:</strong> If more than one of these fits your situation, choose the one that started the events leading to your discharge. For example, if you experienced sexual assault and have posttraumatic stress disorder (PTSD) resulting from that experience, choose sexual assault.</p></div>;

    return this.renderQuestion(key, label, options);
  }

  renderQuestionThreeA() {
    const key = '5_dischargeType';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }

    const label = <h4>Which of the following categories best describes you?</h4>;
    const options = [
      { label: questionLabels[key][1], value: '1' },
      { label: questionLabels[key][2], value: '2' },
    ];
    return this.renderQuestion(key, label, options);
  }

  renderQuestionThreeB() {
    const key = '6_intention';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }
    // explicit override for dd214 condition
    if (this.props.formValues['4_reason'] === '8') { return null; }

    const label = <h4>Do you want to change your name, discharge date, or anything written in the “other remarks” section of your DD214?</h4>;
    const options = [
      { label: `Yes, ${questionLabels[key][1]}`, value: '1' },
      { label: `No, ${questionLabels[key][2]}`, value: '2' },
    ];
    return this.renderQuestion(key, label, options);
  }

  renderQuestionTwo() {
    const key = '2_dischargeYear';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }

    const dischargeYear = this.props.formValues[key];
    const currentYear = (new Date()).getFullYear();
    const yearOptions = range(currentYear - 1992).map(i => {
      const year = currentYear - i;
      return { label: year.toString(), value: year.toString() };
    });

    yearOptions.push({ label: 'Before 1992', value: '1991' });

    const label = (
      <legend className="legend-label">
        <h4>What year were you discharged from the military?</h4>
      </legend>
    );

    return (
      <fieldset className="fieldset-input dischargeYear" key="dischargeYear" ref={(el) => { this[key] = el; }}>
        <Element name={key}/>
        <ErrorableSelect
          autocomplete="false"
          label={label}
          name={key}
          options={yearOptions}
          onKeyDown={this.handleKeyDown}
          value={{ value: dischargeYear }}
          onValueChange={(update) => { this.updateField(key, update.value); this.scrollToLast(); }}/>
      </fieldset>
    );
  }

  renderQuestionTwoB() {
    const key = '3_dischargeMonth';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }

    const monthLabel = (
      <legend className="legend-label">
        <h4>What month were you discharged?</h4>
      </legend>
    );

    return (
      <fieldset className="fieldset-input dischargeMonth" key="dischargeMonth" ref={(el) => { this[key] = el; }}>
        <Element name={key}/>
        <ErrorableSelect
          autocomplete="false"
          label={monthLabel}
          name={key}
          onKeyDown={this.handleKeyDown}
          options={months}
          value={{ value: this.props.formValues[key] }}
          onValueChange={(update) => { this.updateField(key, update.value); this.scrollToLast(); }}/>
      </fieldset>
    );
  }

  renderQuestionFour() {
    const key = '7_courtMartial';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }
    // explicit override for dd214 condition
    if (this.props.formValues['4_reason'] === '8') { return null; }

    const label = <h4>Was your discharge the outcome of a <strong>general</strong> court-martial?</h4>;
    const options = [
      { label: 'Yes, my discharge was the outcome of a general court-martial.', value: '1' },
      { label: 'No, my discharge was administrative or the outcome of a special or summary court-martial.', value: '2' },
      { label: 'I\'m not sure.', value: '3' },
    ];

    return this.renderQuestion(key, label, options);
  }

  renderQuestionOne() {
    const key = '1_branchOfService';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }

    const label = <h4>In which branch of service did you serve?</h4>;
    const options = [
      { label: 'Army', value: 'army' },
      { label: 'Navy', value: 'navy' },
      { label: 'Air Force', value: 'airForce' },
      { label: 'Coast Guard', value: 'coastGuard' },
      { label: 'Marine Corps', value: 'marines' },
    ];

    return this.renderQuestion(key, label, options);
  }

  renderQuestionFive() {
    const key = '8_prevApplication';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }
    // explicit override for dd214 condition
    if (this.props.formValues['4_reason'] === '8') { return null; }

    const label = <h4>Have you previously applied for and been denied a discharge upgrade for this period of service? Note: You can still apply. Your answer to this question simply changes where you send your application.</h4>;
    const options = [
      { label: 'Yes', value: '1' },
      { label: 'No', value: '2' },
    ];

    return this.renderQuestion(key, label, options);
  }

  renderQuestionFiveA() {
    const key = '9_prevApplicationYear';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }
    // explicit override for dd214 condition
    if (this.props.formValues['4_reason'] === '8') { return null; }

    const prevApplicationYearLabel = <h4>What year did you apply for a discharge upgrade?</h4>;

    const labelYear = prevApplicationYearCutoff[this.props.formValues['4_reason']];

    const prevApplicationYearOptions = [
      { label: `${labelYear} or earlier`, value: '1' },
      { label: `After ${labelYear}`, value: '2' },
    ];

    return this.renderQuestion(key, prevApplicationYearLabel, prevApplicationYearOptions);
  }

  renderQuestionFiveB() {
    const key = '10_prevApplicationType';
    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }

    const prevApplicationTypeLabel = <h4>What type of application did you make to upgrade your discharge previously?</h4>;

    let boardLabel = 'I applied to a Board for Correction of Military Records (BCMR)';
    if (['navy', 'marines'].includes(this.props.formValues['1_branchOfService'])) {
      boardLabel = 'I applied to the Board for Correction of Naval Records (BCNR)';
    }

    const prevApplicationTypeOptions = [
      { label: 'I applied to a Discharge Review Board (DRB) for a Documentary Review', value: '1' },
      { label: 'I applied to a Discharge Review Board (DRB) for a Personal Appearance Review in Washington, DC', value: '2' },
      { label: boardLabel, value: '3' },
      { label: 'I\'m not sure', value: '4' },
    ];

    return this.renderQuestion(key, prevApplicationTypeLabel, prevApplicationTypeOptions);
  }

  renderQuestionFiveC() {
    const key = '11_failureToExhaust';
    const { formValues } = this.props;

    if (!shouldShowQuestion(key, formValues.questions)) { return null; }

    const prevApplicationTypeLabel = <h4>Was your application denied due to “failure to exhaust other remedies”? Note: “Failure to exhaust other remedies” generally means you applied to the wrong board.</h4>;

    let boardLabel = 'BCMR';
    if (['navy', 'marines'].includes(formValues['1_branchOfService'])) {
      boardLabel = 'BCNR';
    }

    const prevApplicationTypeOptions = [
      { label: `Yes, the ${boardLabel} denied my application due to “failure to exhaust other remedies.”`, value: '1' },
      { label: `No, the ${boardLabel} denied my application for other reasons, such as not agreeing with the evidence in my application.`, value: '2' },
    ];

    return this.renderQuestion(key, prevApplicationTypeLabel, prevApplicationTypeOptions);
  }

  renderQuestionSix() {
    const key = '12_priorService';

    if (!shouldShowQuestion(key, this.props.formValues.questions)) { return null; }
    // explicit override for dd214 condition
    if (this.props.formValues['4_reason'] === '8') { return null; }

    const questionLabel = <h4>Did you complete a period of service in which your character of service was Honorable or General Under Honorable Conditions?</h4>;

    const questionOptions = [
      { label: 'Yes, I have discharge paperwork documenting a discharge that is honorable or under honorable conditions.', value: '1' },
      { label: 'Yes, I completed a prior period of service, but I did not receive discharge paperwork from that period.', value: '2' },
      { label: 'No, I did not complete an earlier period of service.', value: '3' },
    ];

    return this.renderQuestion(key, questionLabel, questionOptions);
  }

  renderAnswerReview() {
    if (this.props.formValues.questions.slice(-1)[0] !== 'END') { return null; }

    return (
      <div className="review-answers">
        <Element name="END"/>
        <h4>Review your answers</h4>
        <div className="va-introtext">
          <p>If any information below is incorrect, update your answers to get the most accurate information regarding your discharge situation.</p>
        </div>
        <table className="usa-table-borderless">
          <tbody>
            {Object.keys(this.props.formValues).map(k => {
              if (k === 'questions') { return null; }

              const reviewLabel = answerReview(k, this.props.formValues);

              return (reviewLabel && shouldShowQuestion(k, this.props.formValues.questions) &&
                <tr key={k}>
                  <td><p>{reviewLabel}</p></td>
                  <td><a href="#" onClick={this.handleScrollTo} name={k} aria-label={reviewLabel}>Edit</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/guidance" className="usa-button-primary va-button">
          Get my results »
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="dw-questions">
        {this.renderQuestionOne()}
        {this.renderQuestionTwo()}
        {this.renderQuestionTwoB()}
        {this.renderQuestionThree()}
        {this.renderQuestionThreeA()}
        {this.renderQuestionThreeB()}
        {this.renderQuestionFour()}
        {this.renderQuestionFive()}
        {this.renderQuestionFiveA()}
        {this.renderQuestionFiveB()}
        {this.renderQuestionFiveC()}
        {this.renderQuestionSix()}
        {this.renderAnswerReview()}
      </div>
    );
  }
}

FormQuestions.propTypes = {
  updateField: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default FormQuestions;
