import PropTypes from 'prop-types';
import React from 'react';
import ErrorableSelect from '@department-of-veterans-affairs/formation/ErrorableSelect';

class MessageCategory extends React.Component {
  render() {
    const categories = this.props.categories;

    return (
      <div className={this.props.cssClass}>
        <ErrorableSelect
          additionalClass={`${this.props.cssClass}-category`}
          label="Subject line"
          name="messageCategory"
          onValueChange={this.props.onValueChange}
          options={categories}
          value={this.props.category}/>
      </div>
    );
  }
}

MessageCategory.propTypes = {
  cssClass: PropTypes.string,
  errorMessage: PropTypes.string,
  onValueChange: PropTypes.func,
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number }),
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string }),
    ])).isRequired,
  category: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired
};

export default MessageCategory;
