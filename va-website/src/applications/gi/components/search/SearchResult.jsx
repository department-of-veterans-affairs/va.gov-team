import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { estimatedBenefits } from '../../selectors/estimator';
import { formatCurrency } from '../../utils/helpers';

export class SearchResult extends React.Component {

  constructor(props) {
    super(props);
    this.estimate = this.estimate.bind(this);
  }

  estimate({ qualifier, value }) {
    if (qualifier === '% of instate tuition') {
      return <span>{value}% in-state</span>;
    }
    if (qualifier === null) {
      if (value === 'N/A') return 'N/A';
      return value;
    }
    return (<span>{formatCurrency(value)}</span>);
  }

  render() {
    const tuition = this.estimate(this.props.estimated.tuition);
    const housing = this.estimate(this.props.estimated.housing);
    const books = this.estimate(this.props.estimated.books);
    const CautionFlag = () => {
      if (!this.props.cautionFlag) return null;
      return (
        <div className="caution-flag">
          <i className="fa fa-warning"></i>
          Caution
        </div>
      );
    };

    const { version } = this.props;
    const linkTo = {
      pathname: `profile/${this.props.facilityCode}`,
      query: version ? { version } : {}
    };

    return (
      <div className="search-result">
        <div className="outer">
          <CautionFlag/>
          <div className="inner">
            <div className="row">
              <div className="small-12 usa-width-seven-twelfths medium-7 columns">
                <h2><Link to={linkTo}>{this.props.name}</Link></h2>
                <div style={{ position: 'relative', bottom: 0 }}>
                  <p className="locality">
                    {this.props.city}, {this.props.state || this.props.country}
                  </p>
                  <p className="count">{(+this.props.studentCount).toLocaleString()} GI Bill Students</p>
                </div>
              </div>
              <div className="small-12 usa-width-five-twelfths medium-5 columns estimated-benefits">
                <h3>You may be eligible for up to:</h3>
                <div className="row">
                  <div className="columns">
                    <h4>
                      <i className="fa fa-graduation-cap fa-search-result"></i>
                      Tuition <span>(annually):</span>
                      <div>{tuition}</div>
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="columns">
                    <h4>
                      <i className="fa fa-home fa-search-result"></i>
                      Housing <span>(monthly):</span>
                      <div>{housing}</div>
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="columns">
                    <h4>
                      <i className="fa fa-book fa-search-result"></i>
                      Books <span>(annually):</span>
                      <div>{books}</div>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="view-details columns">
                <Link to={linkTo}>View details ›</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    estimated: estimatedBenefits(state, props)
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
