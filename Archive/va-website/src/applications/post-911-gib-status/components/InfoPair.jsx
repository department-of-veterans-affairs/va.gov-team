import React from 'react';
import PropTypes from 'prop-types';

class InfoPair extends React.Component {
  render() {
    const { additionalClass } = this.props;

    const gridRowClasses = additionalClass ?
      `usa-grid-full ${additionalClass}`
      : 'usa-grid-full';

    const row = (
      <div className={gridRowClasses}>
        <div className="usa-width-one-third">
          <span><strong>{this.props.label}: </strong></span>
        </div>
        <div className="usa-width-two-thirds" id={this.props.id}>
          {this.props.value}
        </div>
      </div>
    );

    let rowToDisplay;
    // The displayIfZero prop may be passed in because some rows should
    // display 0 values, while other rows should not display any 0 values.
    // If displayIfZero is false or is not passed in, only display the
    // row if the value is defined and nonzero.
    if (this.props.displayIfZero) {
      rowToDisplay = row;
    } else {
      rowToDisplay = this.props.value && row;
    }

    return (
      rowToDisplay || null
    );
  }
}

InfoPair.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  id: PropTypes.string,
  additionalClass: PropTypes.string,
  displayIfZero: PropTypes.bool
};

export default InfoPair;

