import _ from 'lodash';
import { Link } from 'react-router';
import React from 'react';

import recordEvent from '../../../platform/monitoring/record-event';

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevPath: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location.pathname });
    }
  }

  render() {
    const { location: { pathname }, prescription } = this.props;

    const crumbs = [
      <a href="/" key="home" onClick={() => { recordEvent({ event: 'nav-breadcrumb' });}}>Home</a>,
      <a href="/health-care/" key="healthcare">Health Care</a>,
    ];

    if (pathname.match(/\/\d+$/)) {
      crumbs.push(<Link to="/" key="prescriptions">Prescription Refills</Link>);

      if (this.state.prevPath.match(/\/history\/?$/)) {
        crumbs.push(<Link to="/history" key="history">History</Link>);
      }
    } else if (pathname.match(/\/track\/?$/)) {
      crumbs.push(<Link to="/" key="prescriptions">Prescription Refills</Link>);
      if (this.state.prevPath.match(/\/history\/?$/)) {
        crumbs.push(<Link to="/history" key="history">History</Link>);
      }

      if (prescription) {
        const prescriptionId = _.get(
          prescription,
          ['rx', 'attributes', 'prescriptionId']
        );

        const prescriptionName = _.get(
          prescription,
          ['rx', 'attributes', 'prescriptionName']
        );

        crumbs.push(<Link to={`/${prescriptionId}`} key="history">{prescriptionName}</Link>);
      }
    } else if (pathname.match(/\/history\/?$/)) {
      crumbs.push(<Link to="/" key="prescriptions">Prescription Refills</Link>);
    } else if (pathname.match(/\/glossary\/?$/)) {
      crumbs.push(<Link to="/" key="prescriptions">Prescription Refills</Link>);
    } else if (pathname.match(/\/settings\/?$/)) {
      crumbs.push(<Link to="/" key="prescriptions">Prescription Refills</Link>);
    }
    return (
      <nav className="va-nav-breadcrumbs">
        <ul className="row va-nav-breadcrumbs-list columns" role="menubar" aria-label="Primary">
          {crumbs.map((c, i) => {
            return <li key={i}>{c}</li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default Breadcrumbs;
