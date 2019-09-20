import React from 'react';
import PropTypes from 'prop-types';
import { HEADER_ID } from '../config/constants';

import Layout from '../layout/Layout';
import Main from '../components/Main';
import lake from '../../img/lake.jpg';

const About = props => {
  const { title } = props;

  return (
    <Layout headerText={title} title={title}>
      <aside className="ac-layout--two-column__aside">
        <div>
          <p>
            This is the
            {' '}
            <strong>aside</strong>
            {' '}
            element. It should be used for content related to the main area. Asides include links
            to other sections, image callouts, and quoted text.
          </p>
          <p>
            <a href="https://github.com">Github</a>
          </p>
        </div>
      </aside>
      <Main
        className="ac-layout--two-column__main"
        headerId={HEADER_ID}
        headerText={title}
      >
        <section aria-label="Company History" role="region">
          <h2>The things AnyCorp does!</h2>
          <p>
            We will tell you all there is to know about AnyCorp. We started in
            1999 during the Dot Com boom. We felt it was our time to do
            something spectacular and use the new power of the Internet to make
            it happen.
          </p>
          <h4>Some more things AnyCorp does!</h4>
          <p>
            This should be the next focusable elment after the skip link:
            {' '}
            <a href="https://google.com">Google search!</a>
          </p>
          <p>
            We are located at the base of a beautiful mountain!
            <img src={lake} />
          </p>
        </section>
      </Main>
    </Layout>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
};

export default About;
