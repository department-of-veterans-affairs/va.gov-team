import React from 'react';
import { IndexLink } from 'react-router';

class TabItem extends React.Component {
  render() {
    return (
      <li>
        <IndexLink
          className="va-tab-trigger"
          activeClassName="va-tab-trigger--current"
          to={this.props.tabpath}>
          {this.props.title}
        </IndexLink>
      </li>
    );
  }
}

export default TabItem;
