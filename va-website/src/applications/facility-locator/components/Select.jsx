import React, { Component } from 'react';
import classNames from 'classnames';
import Listbox from './Listbox';
import {
  getDirection,
  getSelection,
  isSelect,
  isToggle,
  isTraverse,
  noServices,
  toggles
} from '../utils/helpers.js';

class Select extends Component {
  constructor() {
    super();

    this.state = {
      dropdownActive: false,
      focusedIndex: 0
    };
    this.options = [];
  }

  addOptionRef = (option, index) => {
    this.options[index] = option;
  }

  handleFilterSelect = (newOption, type) => {
    const { currentQuery } = this.props;
    const queryType = currentQuery[`${type}Type`];
    if (type === 'facility' && newOption !== queryType) {
      if (newOption === 'AllFacilities') {
        this.props.updateSearchQuery({
          facilityType: null,
          serviceType: null
        });
      } else {
        this.props.updateSearchQuery({
          facilityType: newOption,
          serviceType: null
        });
      }
    }
    if (type === 'service' && newOption !== queryType) {
      if (newOption === 'All') {
        this.props.updateSearchQuery({
          serviceType: null,
        });
      } else {
        this.props.updateSearchQuery({
          serviceType: newOption
        });
      }
    }
    return this.toggleDropdown(null, type);
  }

  navigateDropdown = (e) => {
    const type = this.props.optionType;
    const isActive = this.state.dropdownActive;
    const which = e.target;
    if (isToggle(e, isActive)) {
      const code = e.keyCode;
      if (toggles.includes(code)) e.preventDefault();
      if (isActive && isSelect(e.keyCode)) {
        this.handleFilterSelect(which.id, type);
      }
      return this.toggleDropdown(e, type);
    }
    if (isActive && isTraverse(e.keyCode)) {
      e.preventDefault();
      const increment = getDirection(e.keyCode);
      const newIndex = this.state.focusedIndex + increment;
      return this.focusOption(this.options[newIndex], newIndex, type);
    }
    return false;
  }

  handleBlur = (e) => {
    const { currentTarget } = e;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({ dropdownActive: false });
      }
    });
  }

  toggleDropdown = (e) => {
    const type = this.props.optionType;
    const isActive = this.state.dropdownActive;
    const queryType = this.props.currentQuery[`${type}Type`];
    // To handle unrelated key events
    if (e) {
      const shouldNotToggle = e.keyCode && !isToggle(e, isActive);
      if (shouldNotToggle) return;
    }
    if (isActive) {
      this.dropdown.focus();
    } else {
      const { selection, id } = getSelection(this.options, queryType);
      this.focusOption(selection, id, type);
    }
    this.setState({
      dropdownActive: !this.state.dropdownActive
    });
  }

  focusOption = (option, index) => {
    if (option) {
      option.focus();
      this.setState({
        focusedIndex: index
      });
    }
  }

  resetOptions = () => {
    this.options = [];
  }

  render() {
    const { optionType, currentQuery, isMobile } = this.props;
    const disabled = noServices(optionType, currentQuery.facilityType);
    let queryType = currentQuery[`${optionType}Type`];

    if (!queryType) {
      if (optionType === 'service') {
        queryType = 'All';
      } else if (optionType === 'facility') {
        queryType = 'AllFacilities';
      }
    }

    const titleType = optionType[0].toUpperCase() + optionType.slice(1);
    const dropdownClasses = classNames({
      'facility-dropdown-wrapper': true,
      active: this.state.dropdownActive && !disabled,
      disabled
    });

    return (
      <div onBlur={this.handleBlur} className="columns usa-width-one-fourth medium-3">
        <label htmlFor={`${optionType}Type`} id={`${optionType}-label`}>{`Select ${titleType} Type`}</label>
        <div
          tabIndex="0"
          role="button"
          onKeyDown={e => this.navigateDropdown(e, optionType)}
          className={dropdownClasses}
          disabled={disabled}
          ref={elem => { this.dropdown = elem; }}
          aria-expanded={this.dropdownActive}
          aria-labelledby={`${optionType}-label`}
          onClick={e => {e.preventDefault(); this.toggleDropdown(e);}}>
          <Listbox
            optionType={optionType}
            currentQuery={currentQuery}
            isDisabled={disabled}
            isMobile={isMobile}
            navigateDropdown={this.navigateDropdown}
            handleFilterSelect={this.handleFilterSelect}
            options={this.options}
            addOptionRef={this.addOptionRef}
            resetOptions={this.resetOptions}
            dropdownActive={this.dropdownActive}/>
        </div>
      </div>
    );
  }
}

export default Select;
