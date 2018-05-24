import React from 'react';
import { connect } from 'react-redux';
import { submitEmail, setEmail } from '../actions';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';

class EmailCapture extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEmail(this.props.email.value);
  }

  validateEmailAddress(email) {
    return email.match(/[^@\s]+@([^@\s]+\.)+[^@\s]+/);
  }

  render() {
    let view;

    if (this.props.success) {
      view = (
        <div>
          <h1>Printed Veteran ID Card</h1>
          <AlertBox
            headline={<h4>Thank you for your email address. We will follow up with instructions on how to proceed with the application.</h4>}
            content={''}
            isVisible
            status="success"/>
        </div>
      );
    } else {
      view = (
        <div>
          <h1>Printed Veteran ID Card</h1>
          <p>You've reached the new Veteran ID Card application! We're excited to bring this important recognition to Veterans. We've experienced a great response and are working to make the application process more efficient.</p>
          <p>We want to engage you in the application process quickly and will be sending specific instructions on how to proceed. Please enter your email address below. We'll only use it to contact you about continuing the Veteran ID Card application process. <a href="/privacy/">See our privacy policy</a>.</p>
          <form onSubmit={this.handleSubmit}>
            <ErrorableTextInput errorMessage={this.props.errors && this.props.errors[0].title}
              label={<span>Email address</span>}
              name="email"
              field={this.props.email}
              onValueChange={(update) => this.props.setEmail(update)}
              required/>
            <div>
              <button
                className="usa-button"
                disabled={this.props.errors || !this.props.email.dirty}
                type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="usa-width-two-thirds medium-8 vet-id-email-capture">
            {view}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const emailState = state.idcard.emailForm;
  return {
    email: emailState.email,
    success: emailState.success,
    errors: emailState.errors,
    submitting: emailState.submitting,
  };
};

const mapDispatchToProps = {
  submitEmail,
  setEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailCapture);
export { EmailCapture };
