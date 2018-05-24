import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { benefitsServices, facilityTypes, vetCenterServices } from '../config';
import { getServices } from '../utils/helpers.js';

// These values determine how long dropdown text is, according to the viewport
const mobileLength = 38;
const notMobileLength = 27;

class Listbox extends Component {

  isSelectedOption = (option, type) => {
    return this.props.currentQuery[type] === option;
  }

  renderSelection = () => {
    const { currentQuery, optionType, isMobile } = this.props;
    const queryType = currentQuery[`${optionType}Type`];
    const defaultSelected = !queryType;
    const isFacility = optionType === 'facility';
    const hasSpacer = !isFacility ? true : defaultSelected;
    const optionClasses = classNames({
      'dropdown-option': true,
      'facility-option': true
    });
    const iconClasses = classNames({
      legend: true,
      spacer: hasSpacer,
      [`${_.kebabCase(queryType)}-icon`]: !!(queryType && isFacility)
    });

    return (
      <div className="flex-center">
        <div
          id={`${optionType}Dropdown`}
          className={optionClasses}>
          <span className="flex-center">
            <span className={iconClasses}></span>
            {isFacility && (facilityTypes[queryType] || 'All Facilities')}
            {!isFacility && (_.truncate((benefitsServices[queryType] || queryType || 'All'), { length: (isMobile ? mobileLength : notMobileLength) }))}
          </span>
        </div>
      </div>
    );
  }

  renderList = () => {
    const facilities = ['AllFacilities', 'health', 'benefits', 'cemetery', 'vet_center'];
    const { currentQuery, optionType } = this.props;
    const isFacility = optionType === 'facility';
    const { facilityType } = currentQuery;
    const services = getServices(facilityType, benefitsServices, vetCenterServices);
    const queryType = currentQuery[`${optionType}Type`];
    const listOptions = optionType === 'facility' ? facilities : services;
    this.props.resetOptions();

    return (
      <ul
        className="dropdown"
        role="listbox">
        {listOptions && listOptions.map((type, index) => {
          const isDefault = index === 0;
          const defaultSelected = !queryType && isDefault;
          const isSelected = this.isSelectedOption(type, `${optionType}Type`);
          const hasSpacer = isFacility ? index === 0 : true;
          const isHovered = isSelected || defaultSelected;
          const optionClasses = classNames({
            'dropdown-option': true,
            'facility-option': true,
            'is-hovered': isHovered
          });
          const iconClasses = classNames({
            legend: true,
            spacer: hasSpacer,
            [`${_.kebabCase(type)}-icon`]: index && isFacility
          });
          return (
            <li
              role="option"
              tabIndex={this.props.dropdownActive ? '0' : '-1'}
              aria-selected={isHovered}
              ref={(elem) => { this.props.addOptionRef(elem, index);}}
              id={type}
              key={type}
              className={optionClasses}
              onClick={() => this.props.handleFilterSelect(type, optionType)}
              onKeyDown={this.props.navigateDropdown}>
              <span className="flex-center">
                <span className={iconClasses}></span>
                {isFacility && (facilityTypes[type] || 'All Facilities')}
                {!isFacility && (benefitsServices[type] || type)}
              </span>
            </li>);
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderSelection()}
        {this.renderList()}
      </div>
    );
  }
}

export default Listbox;
