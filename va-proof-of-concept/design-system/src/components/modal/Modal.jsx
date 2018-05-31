import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ESCAPE_KEY = 27;

function focusListener(selector) {
  const listener = event => {
    const modal = document.querySelector('.va-modal');
    if (!modal.contains(event.target)) {
      event.stopPropagation();
      const focusableElement = modal.querySelector(selector);
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  };
  document.addEventListener('focus', listener, true);
  return listener;
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
    this.state = { lastFocus: null, focusListener: null };
  }

  componentDidMount() {
    if (this.props.visible) {
      document.body.classList.add('modal-open');
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.visible && !this.props.visible) {
      document.addEventListener('keyup', this.handleDocumentKeyUp, false);
      this.setState({ lastFocus: document.activeElement, focusListener: focusListener(newProps.focusSelector) });
    } else if (!newProps.visible && this.props.visible) {
      document.removeEventListener('keyup', this.handleDocumentKeyUp, false);
      document.removeEventListener('focus', this.state.focusListener, true);
      this.state.lastFocus.focus();
      document.body.classList.remove('modal-open');
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      const focusableElement = document.querySelector('.va-modal').querySelector(this.props.focusSelector);
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyUp, false);
    document.removeEventListener('focus', this.state.focusListener, true);
    document.body.classList.remove('modal-open');
  }

  handleDocumentKeyUp(event) {
    if (event.keyCode === ESCAPE_KEY) {
      this.handleClose(event);
    }
  }

  handleClose(e) {
    e.preventDefault();
    this.props.onClose();
  }

  render() {
    const { id, title, visible } = this.props;
    const alertClass = classNames(
      'usa-alert',
      `usa-alert-${this.props.status}`
    );

    const titleClass = classNames(
      'va-modal-title',
      `va-modal-title-${this.props.status}`
    );

    const modalCss = classNames('va-modal', this.props.cssClass);
    const modalTitle = title && (
      <div className={alertClass}>
        <h3 id={`${id}-title`} className={titleClass}>{title}</h3>
      </div>
    );

    if (!visible) { return <div/>; }

    let closeButton;
    if (!this.props.hideCloseButton) {
      closeButton = (<button
        className="va-modal-close"
        type="button"
        onClick={this.handleClose}>
        <i className="fa fa-close"></i>
        <span className="usa-sr-only">Close this modal</span>
      </button>);
    }

    return (
      <div className={modalCss} id={id} role="alertdialog" aria-labelledby={`${id}-title`}>
        <div className="va-modal-inner">
          {modalTitle}
          {closeButton}
          <div className="va-modal-body">
            <div>
              {this.props.contents || this.props.children}
            </div>
            <div className="alert-actions">
              {this.props.primaryButton && <button className="usa-button" onClick={this.props.primaryButton.action}>{this.props.primaryButton.text}</button>}
              {this.props.secondaryButton && <button className="usa-button-secondary" onClick={this.props.secondaryButton.action}>{this.props.secondaryButton.text}</button>}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /**
   * If the modal is visible or not
   */
  visible: PropTypes.bool.isRequired,
  /**
   * Handler for when the modal is closed
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Contents of modal when displayed. You can also pass the contents as children, which is preferred
   */
  contents: PropTypes.node,
  /**
   * CSS class to set on the modal
   */
  cssClass: PropTypes.string,
  /**
   * Id of the modal, used for aria attributes
   */
  id: PropTypes.string,
  /**
   * primary button text and action
   */
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  /**
   * secondary button text and action
   */
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  /*
   * Style of modal alert - info, error, success, warning
   */
  status: PropTypes.oneOf([
    'info',
    'error',
    'success',
    'warning'
  ]),
  /**
   * Title/header text for the modal
   */
  title: PropTypes.string,
  /**
   * Hide the close button that's normally in the top right
   */
  hideCloseButton: PropTypes.bool,
  /**
   * Selector to use to find elements to focus on when the
   * modal is opened
   */
  focusSelector: PropTypes.string
};

Modal.defaultProps = {
  focusSelector: 'button, input, select, a'
};

export default Modal;
