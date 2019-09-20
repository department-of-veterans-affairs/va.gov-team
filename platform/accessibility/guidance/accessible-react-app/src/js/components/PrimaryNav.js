import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PrimaryNav = props => {
  const { ariaLabel } = props;

  return (
    <nav aria-label={ariaLabel} role="navigation">
      <ul className="ac-primary-nav">
        <li className="ac-primary-nav__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="ac-primary-nav__list-item">
          <Link to="/about">About AnyCorp</Link>
        </li>
        <li className="ac-primary-nav__list-item">
          <Link to="/awards">Awards We&rsquo;ve Won</Link>
        </li>
      </ul>
    </nav>
  );
};

PrimaryNav.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
};

export default PrimaryNav;
