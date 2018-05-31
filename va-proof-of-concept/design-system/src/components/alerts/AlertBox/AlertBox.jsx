import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class AlertBox extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToAlert = this.scrollToAlert.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const visibilityChanged = this.props.isVisible !== nextProps.isVisible;
    const contentChanged = this.props.content !== nextProps.content;
    const statusChanged = this.props.status !== nextProps.status;
    return visibilityChanged || contentChanged || statusChanged;
  }

  componentDidUpdate() {
    if (this.props.isVisible && this.props.scrollOnShow) {
      this.scrollToAlert();
    }
  }

  scrollToAlert() {
    const isInView = window.scrollY <= this._ref.offsetTop;

    if (this._ref && !isInView) {
      this._ref.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    }
  }

  render() {
    if (!this.props.isVisible) {
      return <div aria-live="polite"/>;
    }

    const alertClass = classNames(
      'usa-alert',
      `usa-alert-${this.props.status}`
    );

    let closeButton;
    if (this.props.onCloseAlert) {
      closeButton = (
        <button className="va-alert-close" aria-label="Close notification" onClick={this.props.onCloseAlert}>
          <i className="fa fa-close" aria-label="Close icon"></i>
        </button>
      );
    }

    const headline = this.props.headline && (<h3 className="va-alert-title">{this.props.headline}</h3>);

    return (
      <div
        aria-live="polite"
        className={alertClass}
        ref={(ref) => { this._ref = ref; }}>
        <div className="usa-alert-body va-alert-body">
          {headline}
          {this.props.content}
        </div>
        {closeButton}
        <div className="cf"></div>
      </div>
    );
  }

}

AlertBox.propTypes = {

  // optional headline
  headline: PropTypes.node,

  // body content is required -- this is the bulk of the alert
  content: PropTypes.node.isRequired,

  // is the alert visible? useful for alerts triggered by app interaction
  isVisible: PropTypes.bool.isRequired,

  // this is useful if the alerbox can be dismissed or closed
  onCloseAlert: PropTypes.func,

  // if true, page scrolls to alert
  scrollOnShow: PropTypes.bool,

  // determines the color of the alert box: blue, red, green, yellow respectively
  status: PropTypes.oneOf([
    'info',
    'error',
    'success',
    'warning'
  ]).isRequired
};

export default AlertBox;
