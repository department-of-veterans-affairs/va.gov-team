import React from 'react';
import PropTypes from 'prop-types';
import { HEADER_ID } from '../config/constants';

import Layout from '../layout/Layout';
import Main from '../components/Main';

const Home = props => {
  const { title } = props;

  return (
    <Layout headerText={title} title={title}>
      <Main headerId={HEADER_ID} headerText={title}>
        <p>This is a brief paragraph about AnyCorp.</p>
        <p>
          AnyCorp is a fictitious company that was
          created by the Product Support Team to help product, design, and engineering teams
          learn more about accessibility and 508 compliance.
        </p>
        <p>
          This should be the next focusable elment after the global skip link is clicked:
          {' '}
          <br />
          <a href="https://google.com">Google search page</a>
        </p>
      </Main>
    </Layout>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
