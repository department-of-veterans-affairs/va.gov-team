import React from 'react';
import PropTypes from 'prop-types';
import { MAIN_ID } from '../config/constants';

const SkipNav = props => {
  const { text } = props;
  return <a className="ac-link--skip-nav" href={`#${MAIN_ID}`}>{text}</a>;
};

SkipNav.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SkipNav;
