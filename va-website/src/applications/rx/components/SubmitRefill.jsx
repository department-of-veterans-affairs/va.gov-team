import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class SubmitRefill extends React.Component {
  render() {
    // Using !== so that it will default to usa-button-secondary even if
    // no `mode` property is defined.
    const classList = classNames({
      'usa-button-secondary': this.props.mode !== 'compact',
      'usa-button-unstyled': this.props.mode === 'compact',
    }, this.props.cssClass);

    return (
      <form className="rx-refill-form" onSubmit={this.props.onSubmit}>
        <input type="hidden" name="refillId" value={this.props.refillId}/>
        <button
          className={classList}
          type="submit">{this.props.text}</button>
      </form>
    );
  }
}

SubmitRefill.propTypes = {
  cssClass: PropTypes.string,
  mode: PropTypes.oneOf(['large', 'compact']),
  onSubmit: PropTypes.func,
  refillId: PropTypes.string,
  text: PropTypes.string,
};

export default SubmitRefill;
