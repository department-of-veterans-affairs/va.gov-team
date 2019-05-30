import { Link } from 'react-router';
import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    const { location: { pathname } } = this.props;

    const crumbs = [
      <a href="/" key="home">Home</a>,
      <a href="/health-care/" key="healthcare">Health Care</a>,
    ];

    if (pathname.match(/download\/?$/)) {
      crumbs.push(<Link to="/" key="main">Get Your VA Health Records</Link>);
      crumbs.push(<span key="download"><strong>Download Your Health Records</strong></span>);
    } else {
      crumbs.push(<span key="main"><strong>Get Your VA Health Records</strong></span>);
    }

    return (<div className="bb-breadcrumbs">
      {crumbs.reduce((content, e) => { return [...content, ' › ', e]; }, []).slice(1)}
    </div>);
  }
}

export default Breadcrumbs;
