import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import IconSearch from '@department-of-veterans-affairs/formation/IconSearch';
import DropDownPanel from '@department-of-veterans-affairs/formation/DropDownPanel';

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);
    this.makeForm = this.makeForm.bind(this);
    this.toggleSearchForm = this.toggleSearchForm.bind(this);
  }

  componentDidUpdate() {
    this.refs.searchField.focus();
  }

  toggleSearchForm() {
    this.props.clickHandler();
  }

  makeForm() {
    return (
      <form
        acceptCharset="UTF-8"
        action="https://search.vets.gov/search"
        id="search"
        method="get">
        <div className="csp-inline-patch-header">
          <input name="utf8" type="hidden" value="&#x2713;"/>
        </div>
        <input id="affiliate" name="affiliate" type="hidden" value="vets.gov_search"/>
        <label htmlFor="query" className="usa-sr-only">Search:</label>

        <div className="va-flex">
          <input autoComplete="off" ref="searchField" className="usagov-search-autocomplete" id="query" name="query" type="text"/>
          <button type="submit">
            <IconSearch color="#fff"/>
            <span className="usa-sr-only">Search</span>
          </button>
        </div>
      </form>);
  }

  render() {
    const buttonClasses = classNames(
      this.props.cssClass,
      'va-btn-withicon',
      'va-dropdown-trigger'
    );

    const icon = <IconSearch color="#fff"/>;

    return (
      <DropDownPanel
        buttonText="Search"
        clickHandler={this.props.clickHandler}
        cssClass={buttonClasses}
        id="searchmenu"
        icon={icon}
        isOpen={this.props.isOpen}>
        {this.makeForm()}
      </DropDownPanel>
    );
  }
}

SearchMenu.propTypes = {
  cssClass: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func
};

export default SearchMenu;
