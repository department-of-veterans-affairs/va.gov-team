import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getClaimDetail } from '../actions/index.jsx';

class ClaimPage extends React.Component {
  componentDidMount() {
    this.props.getClaimDetail(this.props.params.id, this.props.router);
  }
  render() {
    return this.props.children;
  }
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  getClaimDetail
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClaimPage));

