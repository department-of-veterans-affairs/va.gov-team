import React from 'react';
import PropTypes from 'prop-types';
import { focusElement } from '../../../../platform/utilities/ui';

class FeedbackSubmitted extends React.Component {
  componentDidMount() {
    focusElement('#feedback-submitted-title');
  }
  render() {
    return (
      <div id="feedback-submitted">
        <h4 id="feedback-submitted-title" className="feedback-widget-title">Thank you for your feedback!</h4>
        {this.props.formValues.shouldSendResponse && (
          <p className="feedback-widget-intro">We’ll get back to you soon.</p>
        )}
      </div>
    );
  }

}

FeedbackSubmitted.PropTypes = {
  shouldSendResponse: PropTypes.bool
};

export default FeedbackSubmitted;
