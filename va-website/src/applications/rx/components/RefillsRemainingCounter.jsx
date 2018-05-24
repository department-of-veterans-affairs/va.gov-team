import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class RefillsRemainingCounter extends React.Component {

  constructor(props) {
    super(props);
    this.pluralizeRefill = this.pluralizeRefill.bind(this);
  }

  pluralizeRefill() {
    return this.props.remaining === 1 ? 'refill' : 'refills';
  }

  render() {
    const countClass = classNames({
      'rx-prescription-count': true,
      'rx-prescription-count-zero': this.props.remaining === 0
    });

    return (
      <div className={countClass}>
        <span className="rx-prescription-count-number">{this.props.remaining}</span>
        <span className="rx-prescription-count-text">{`${this.pluralizeRefill()} left`}</span>
      </div>
    );
  }
}

RefillsRemainingCounter.propTypes = {
  remaining: PropTypes.number
};

export default RefillsRemainingCounter;
