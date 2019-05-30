import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash/fp';

import { months, days } from '../../../../platform/static-data/options-for-select.js';
import { formatISOPartialDate, parseISODate } from '../helpers';

function getEmptyState(value) {
  return {
    value: parseISODate(value),
    touched: {
      month: false,
      day: false,
      year: false
    }
  };
}

export default class DateWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = getEmptyState(this.props.value);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.formContext.pagePerItemIndex !== this.props.formContext.pagePerItemIndex) {
      this.setState(getEmptyState(newProps.value));
    }
  }

  isTouched = ({ year, month, day }) => {
    if (_.get('options.monthYear', this.props)) {
      return year && month;
    }

    return year && day && month;
  }

  isIncomplete = ({ month, year, day }) => {
    if (_.get('options.monthYear', this.props)) {
      return !year || !month;
    }

    return !year || !month || !day;
  }

  handleBlur(field) {
    const newState = _.set(['touched', field], true, this.state);
    this.setState(newState, () => {
      if (this.isTouched(newState.touched)) {
        this.props.onBlur(this.props.id);
      }
    });
  }

  handleChange(field, value) {
    let newState = _.set(['value', field], value, this.state);
    newState = _.set(['touched', field], true, newState);

    this.setState(newState, () => {
      if (this.props.required && (this.isIncomplete(newState.value))) {
        this.props.onChange();
      } else {
        this.props.onChange(formatISOPartialDate(newState.value));
      }
    });
  }

  render() {
    const { id, options = {} } = this.props;
    const { month, day, year } = this.state.value;
    let daysForSelectedMonth;

    const monthYear = options.monthYear;
    if (month) {
      daysForSelectedMonth = days[month];
    }
    return (
      <div className="usa-date-of-birth row">
        <div className="form-datefield-month">
          <label className="input-date-label" htmlFor={`${id}Month`}>Month</label>
          <select
            autoComplete="false"
            name={`${id}Month`}
            id={`${id}Month`}
            value={month}
            onChange={(event) => this.handleChange('month', event.target.value)}>
            <option value=""/>
            {months.map(mnth => <option key={mnth.value} value={mnth.value}>{mnth.label}</option>)}
          </select>
        </div>
        {!monthYear && <div className="form-datefield-day">
          <label className="input-date-label" htmlFor={`${id}Day`}>Day</label>
          <select
            autoComplete="false"
            name={`${id}Day`}
            id={`${id}Day`}
            value={day}
            onChange={(event) => this.handleChange('day', event.target.value)}>
            <option value=""/>
            {daysForSelectedMonth && daysForSelectedMonth.map(dayOpt => <option key={dayOpt} value={dayOpt}>{dayOpt}</option>)}
          </select>
        </div>}
        <div className="usa-datefield usa-form-group usa-form-group-year">
          <label className="input-date-label" htmlFor={`${id}Year`}>Year</label>
          <input type="number"
            autoComplete="false"
            name={`${id}Year`}
            id={`${id}Year`}
            max="3000"
            min="1900"
            pattern="[0-9]{4}"
            value={year}
            onBlur={() => this.handleBlur('year')}
            onChange={(event) => this.handleChange('year', event.target.value)}/>
        </div>
      </div>
    );
  }
}

DateWidget.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string
};
