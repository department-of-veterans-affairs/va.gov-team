import PropTypes from 'prop-types';
import React from 'react';

import TabItem from './TabItem';

class TabNav extends React.Component {
  render() {
    return (
      <ul className="va-tabs claims-status-tabs" role="tablist">
        <TabItem shortcut={1} tabpath={`your-claims/${this.props.id}/status`} title="Status"/>
        <TabItem shortcut={2} tabpath={`your-claims/${this.props.id}/files`} title="Files"/>
        <TabItem shortcut={3} tabpath={`your-claims/${this.props.id}/details`} title="Details"/>
      </ul>
    );
  }
}

TabNav.propTypes = {
  id: PropTypes.string
};

export default TabNav;
