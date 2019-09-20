import React from 'react';
import PropTypes from 'prop-types';
import { HEADER_ID } from '../config/constants';

import Layout from '../layout/Layout';
import Main from '../components/Main';

const Awards = props => {
  const { title } = props;

  return (
    <Layout headerText={title} title={title}>
      <Main
        headerId={HEADER_ID}
        headerText={title}
        setFocus
      >
        <p>These are our early wins!</p>
        <p>
          This should be the next focusable elment after the skip link:
          {' '}
          <br />
          <a href="https://google.com">Google search page</a>
        </p>
        <p>
          AnyCorp has received the industry&lsquo;s highest achievement in compliance several
          years in a row. AnyCorp was awarded the Excellence in trophy for 2016, 2017,
          2018, and we anticipate 2019.
        </p>
        <p>
          The solution is a bit more complicated than I would like. It does seem
          to work tho.
        </p>
      </Main>
    </Layout>
  );
};

Awards.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Awards;
