import React from 'react';

import TabItem from './TabItem';

class TabNav extends React.Component {
  render() {
    return (
      <ul className="va-tabs rx-nav va-dnp">
        <TabItem tabpath="/" title="Refill Prescriptions"/>
        <TabItem tabpath="/history" title="View History"/>
      </ul>
    );
  }
}

export default TabNav;
