import React from 'react';

import TabItem from './TabItem';

class MainTabNav extends React.Component {
  render() {
    return (
      <ul className="va-tabs claims-status-tabs" role="tablist">
        <TabItem shortcut={1} id="OpenClaims" tabpath="your-claims" title="Open Claims & Appeals"/>
        <TabItem shortcut={2} id="ClosedClaims" tabpath="your-claims/closed" title="Closed Claims & Appeals"/>
      </ul>
    );
  }
}

export default MainTabNav;
