import React from 'react';
import { IndexLink, withRouter } from 'react-router';

class TabItem extends React.Component {
  defaultProps = {
    className: 'claims-status-tabs-item'
  }

  componentDidMount() {
    document.addEventListener('keydown', this.tabShortcut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.tabShortcut);
  }

  tabShortcut = (evt) => {
    if (evt.altKey && evt.which === (48 + this.props.shortcut)) {
      this.props.router.push(this.props.tabpath);
    }
  }

  render() {
    return (
      <li className={this.props.className} role="presentation">
        <IndexLink
          id={`tab${this.props.id || this.props.title}`}
          aria-controls={`tabPanel${this.props.id || this.props.title}`}
          role="tab"
          className="va-tab-trigger"
          activeClassName="va-tab-trigger--current"
          to={this.props.tabpath}>
          {this.props.title}
        </IndexLink>
      </li>
    );
  }
}

export default withRouter(TabItem);

export { TabItem };
