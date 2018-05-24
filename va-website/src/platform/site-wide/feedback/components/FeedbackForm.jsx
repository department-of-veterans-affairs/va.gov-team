import React from 'react';
import PropTypes from 'prop-types';

import { focusElement } from '../../../../platform/utilities/ui';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import ErrorableTextArea from '@department-of-veterans-affairs/formation/ErrorableTextArea';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';
import ErrorableCheckbox from '@department-of-veterans-affairs/formation/ErrorableCheckbox';

class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      suppressDescriptionErrors: true,
      suppressEmailErrors: true
    };
  }

  componentDidMount() {
    // During testing, a shallow render won't render the React component "descriptionComp".
    // This is a safety check to make sure it exists.
    const descriptionId = this.descriptionComp && `#${this.descriptionComp.inputId}`;
    focusElement(descriptionId);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.formValues.shouldSendResponse && this.props.formValues.shouldSendResponse) {
      const emailId = this.emailComp && `#${this.emailComp.inputId}`;
      focusElement(emailId);
    }
  }

  setDescription = ({ value: description, dirty }) => {
    if (dirty) this.setState({ suppressDescriptionErrors: false });
    this.props.setFormValues({ description });
  }

  setEmail = ({ value: email, dirty }) => {
    if (dirty) this.setState({ suppressEmailErrors: false });
    this.props.setFormValues({ email });
  }

  sendFeedback = (event) => {
    event.preventDefault();
    if (this.props.formIsSubmittable) this.props.sendFeedback(this.props.formValues);
  }

  descriptionErrorMessage = () => {
    return !this.state.suppressDescriptionErrors ? this.props.formErrors.description : '';
  }

  emailErrorMessage = () => {
    return !this.state.suppressEmailErrors ? this.props.formErrors.email : '';
  }

  render() {
    return (
      <form id="feedback-form" className="feedback-form" onSubmit={this.sendFeedback}>
        <h4 className="feedback-widget-title">Tell us what you think</h4>
        <div className="va-flex">
          <div className="feedback-widget-form-container">
            <div className="feedback-widget-desc-container">
              <ErrorableTextArea
                label="What can we do to make Vets.gov better?"
                name="description"
                onValueChange={this.setDescription}
                errorMessage={this.descriptionErrorMessage()}
                field={{ value: this.props.formValues.description, dirty: false }}
                ref={component => { this.descriptionComp = component; }}
                required/>
            </div>
            <ErrorableCheckbox
              name="should-send-response"
              label="I would like to receive a response about my feedback."
              checked={this.props.formValues.shouldSendResponse}
              onValueChange={(shouldSendResponse) => this.props.setFormValues({ shouldSendResponse })}/>
            <div className="usa-grid-full">
              <div className="usa-width-two-thirds">
                {this.props.formValues.shouldSendResponse && (
                  <div className="feedback-email-container">
                    <ErrorableTextInput
                      label="Your email address"
                      name="email"
                      type="email"
                      field={{ value: this.props.formValues.email, dirty: false }}
                      onValueChange={this.setEmail}
                      errorMessage={this.emailErrorMessage()}
                      ref={component => { this.emailComp = component; }}
                      required/>
                  </div>
                )}
                <div className="feedback-submit-container">
                  <button
                    type="submit"
                    disabled={this.props.requestPending || !this.props.formIsSubmittable}
                    className="usa-button-primary usa-width-one-whole feedback-submit-button">
                    {this.props.requestPending ? <i className="fa fa-spin fa-spinner"/> : 'Send feedback'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-widget-need-help-container">
            <div className="feedback-widget-need-help-inner">
              <h3>Need help?</h3>
              Calls the Vets.gov Help Desk<br/>
              <a href="tel:18555747286">1-855-574-7286</a><br/>
              TTY:&nbsp;<a href="tel:+18008778339">1-800-877-8339</a><br/>
              Monday – Friday, 8:00 a.m. – 8:00 p.m. (<abbr title="eastern time">ET</abbr>)
            </div>
          </div>
        </div>
        {this.props.errorMessage && (
          <div className="feedback-error">
            <AlertBox status="error"
              onCloseAlert={this.props.clearError}
              headline={<h4>{this.props.errorMessage.title}</h4>}
              content={this.props.errorMessage.description}
              isVisible/>
          </div>
        )}
      </form>
    );
  }

}

FeedbackForm.propTypes = {
  formIsSubmittable: PropTypes.bool,
  formErrors: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  sendFeedback: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errorMessage: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.description
  }),
  requestPending: PropTypes.bool
};

export default FeedbackForm;
