import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    return (<nav className="va-nav-breadcrumbs">
      <ul className="row va-nav-breadcrumbs-list columns claims-breadcrumbs" role="menubar" aria-label="Primary">
        <li><a href="/" key="home">Home</a></li>
        <li><a href="/disability-benefits/" key="disability-benefits">Disability Benefits</a></li>
        {this.props.children}
      </ul>
    </nav>);
  }
}

export default Breadcrumbs;
