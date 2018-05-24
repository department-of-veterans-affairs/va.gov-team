import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import recordEvent from '../../../monitoring/record-event';

class AcceptTermsPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = { scrolledToBottom: false, yesSelected: false };
  }

  componentDidMount() {
    recordEvent({ event: 'terms-shown' });
    window.scrollTo(0, 0);
  }

  onCancel = (e) => {
    e.preventDefault();
    if (document.referrer !== '' && !this.props.isInModal) {
      browserHistory.goBack();
    } else {
      if (this.props.onCancel) {
        this.props.onCancel();
      } else {
        browserHistory.push(this.props.cancelPath);
      }
    }
  }

  handleSubmit() {
    this.props.onAccept(this.props.terms.name);
  }

  handleScroll(event) {
    const ct = event.currentTarget;
    if ((ct.scrollTop + ct.offsetHeight + 100) >= ct.scrollHeight) {
      this.setState({ scrolledToBottom: true, yesSelected: this.state.yesSelected });
    }
  }

  handleAnswer(event) {
    if (event.currentTarget.value === 'yes' && event.currentTarget.checked) {
      this.setState({ scrolledToBottom: this.state.scrolledToBottom, yesSelected: true });
    }
  }

  render() {
    // loading state for terms content is handled by parent component
    const { terms } = this.props;

    if (!terms.termsContent) {
      return <div></div>;
    }

    const submitDisabled = !(this.state.scrolledToBottom && this.state.yesSelected);

    const submitClass = classNames({
      'usa-button': true,
      'usa-button-disabled': submitDisabled,
      'submit-button': true,
    });

    const submitButton = (<button
      className={submitClass}
      disabled={submitDisabled}
      onClick={this.handleSubmit}>Submit</button>);

    const yesButton = (<div>
      <input
        type="checkbox"
        name="form-selection"
        id="form-yes"
        value="yes"
        onChange={this.handleAnswer}
        disabled={!this.state.scrolledToBottom}/>
      <label htmlFor="form-yes">
        {terms.yesContent}
      </label>
    </div>);

    const actionButtonClass = classNames({
      'form-radio-buttons': true,
      disabled: !this.state.scrolledToBottom
    });

    /* eslint-disable react/no-danger */
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <div className="row primary terms-acceptance">
        <div className="small-12 columns usa-content" role="region" aria-label="Terms and Conditions" tabIndex="0">
          <div dangerouslySetInnerHTML={{ __html: terms.headerContent }}/>
          <h1>{terms.title}</h1>
          <div className="terms-box">
            <div className="terms-head">
              Scroll to read the full terms and conditions to continue
            </div>
            <div className="terms-scroller" onScroll={this.handleScroll} tabIndex="0">
              <div dangerouslySetInnerHTML={{ __html: terms.termsContent }}/>
            </div>
            <div className={actionButtonClass}>
              {yesButton}
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: terms.footerContent }}/>
          </div>
          <div>
            {submitButton}
            <button className="usa-button usa-button-secondary" onClick={this.onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-enable react/no-danger */
  }
}

export default AcceptTermsPrompt;
