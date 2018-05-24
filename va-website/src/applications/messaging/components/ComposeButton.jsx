import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class ComposeButton extends React.Component {
  constructor(props) {
    super(props);
    this.goToComposeMessage = this.goToComposeMessage.bind(this);
  }

  goToComposeMessage() {
    this.context.router.push('/compose');
  }

  render() {
    const { disabled } = this.props;
    const classes = classNames({
      'messaging-compose-button': true,
      'va-button-primary': !disabled,
      'usa-button-disabled': disabled,
    });

    return (
      <button
        disabled={disabled}
        onClick={this.goToComposeMessage}
        className={classes}>
        Compose a message
      </button>
    );
  }
}

ComposeButton.contextTypes = {
  router: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

export default ComposeButton;
