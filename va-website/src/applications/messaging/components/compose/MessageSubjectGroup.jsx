import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import MessageCategory from './MessageCategory';
import MessageSubject from './MessageSubject';

class MessageSubjectGroup extends React.Component {
  // TODO: Add errorMessage property to ErrorableTextInput conditionally
  // when the fields are validated.
  render() {
    const hasErrorMsg = !!this.props.errorMessage;

    let errMessage;
    if (hasErrorMsg) {
      errMessage = (
        <div className="usa-input-error-message">
          {this.props.errorMessage}
        </div>);
    }

    const errItemClass = classNames(
      this.props.cssErrorClass,
      'msg-subject-group',
      { 'usa-input-error': hasErrorMsg },
      { 'msg-compose-error': hasErrorMsg }
    );

    return (
      <div className={errItemClass}>
        {errMessage}
        <div className="msg-subject-line">
          <MessageCategory
            categories={this.props.categories}
            category={this.props.category}
            cssClass="msg-category"
            onValueChange={this.props.onCategoryChange}/>
          <MessageSubject
            charMax={this.props.charMax}
            cssClass="msg-subject"
            onValueChange={this.props.onSubjectChange}
            placeholder={this.props.subjectPlaceholder}
            required={this.props.subjectRequired}
            subject={this.props.subject}/>
        </div>
      </div>
    );
  }
}

MessageSubjectGroup.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }),
  charMax: PropTypes.number,
  cssErrorClass: PropTypes.string,
  errorMessage: PropTypes.string,
  errorType: PropTypes.string,
  onCategoryChange: PropTypes.func,
  onSubjectChange: PropTypes.func,
  subject: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }),
  subjectPlaceholder: PropTypes.string
};

export default MessageSubjectGroup;
