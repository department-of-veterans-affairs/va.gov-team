import React from 'react';

import { glossary } from '../config.js';
import GlossaryList from '../components/GlossaryList';
import SettingsButton from '../components/SettingsButton';

class GlossaryPage extends React.Component {
  componentDidMount() {
    scrollTo(0, 0);
  }

  render() {
    let key = 0;
    const sections = Object.keys(glossary).map((sect) => {
      return (<GlossaryList
        key={key++}
        title={`${sect} statuses`}
        terms={glossary[sect]}/>);
    });

    return (
      <section>
        <div className="rx-app-title">
          <h1>Glossary</h1>
          <SettingsButton/>
        </div>
        {sections}
      </section>
    );
  }
}

export default GlossaryPage;
