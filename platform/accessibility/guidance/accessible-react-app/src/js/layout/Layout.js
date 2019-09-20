import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { MAIN_LAYOUT_ID } from '../config/constants';

import Header from '../components/Header';
import SkipNav from '../components/Skipnav';

const Layout = props => {
  const { children, title } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SkipNav text="Skip to main content" />
      <Header />
      <div id={MAIN_LAYOUT_ID}>
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
