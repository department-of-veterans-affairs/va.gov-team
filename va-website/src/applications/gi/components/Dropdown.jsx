import PropTypes from 'prop-types';
import React from 'react';

class Dropdown extends React.Component {

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <select
          id={this.props.name}
          name={this.props.name}
          alt={this.props.alt}
          value={this.props.value}
          onChange={this.props.onChange}>
          {this.props.options.map(({ value, label }) =>
            <option key={value} value={value}>{label}</option>
          )}
        </select>
      </div>
    );
  }

}

Dropdown.propTypes = {
  visible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  className: 'form-group top-aligned',
  visible: false,
};

export default Dropdown;
