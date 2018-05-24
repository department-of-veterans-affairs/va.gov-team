import PropTypes from 'prop-types';
import React from 'react';
import Graph from './Graph';

const GraphKey = () => (
  <svg className="graph-key" viewBox="0 0 650 50">
    <g>
      <rect x="0" y="0" width="30" height="30" fill="#F1F1F1"/>
      <line x1="15" x2="15" y1="0" y2="30" stroke="#323A45" strokeWidth="2"/>
      <text fontFamily="SourceSansPro-Regular, Source Sans Pro" fontSize="16" fill="#323A45">
        <tspan x="40" y="20">National average</tspan>
      </text>
    </g>
  </svg>
);

class Outcomes extends React.Component {

  render() {
    const { retention, graduation, salary, repayment } = this.props.graphing;
    const download = {
      info: 'Excel | 14.4 MB',
      link: 'http://www.benefits.va.gov/gibill/docs/OutcomeMeasuresDashboard.xlsx'
    };
    return (
      <div className="outcomes row">
        <div className="usa-width-one-half medium-6 large-6 column">
          <div className="link-header">
            <h3>Retention rate</h3>
            &nbsp;(<a onClick={this.props.onShowModal.bind(this, 'retention')}>Learn more</a>)
          </div>
          <Graph veterans={retention.rate} all={retention.all} average={retention.average} decimals={1}/>
        </div>

        <div className="usa-width-one-half medium-6 large-6 column">
          <div className="link-header">
            <h3>Graduation rate</h3>
            &nbsp;(<a onClick={this.props.onShowModal.bind(this, 'gradrates')}>Learn more</a>)
          </div>
          <Graph veterans={graduation.rate} all={graduation.all} average={graduation.average} decimals={1}/>
        </div>

        <div className="usa-width-one-half medium-6 large-6 column">
          <div className="link-header">
            <h3>Average salaries</h3>
            &nbsp;(<a onClick={this.props.onShowModal.bind(this, 'salaries')}>Learn more</a>)
          </div>
          <Graph decimals={0} max={100000} average={salary.average} all={salary.all}/>
        </div>

        <div className="usa-width-one-half medium-6 large-6 column">
          <div className="link-header">
            <h3>Repayment rate</h3>
            &nbsp;(<a onClick={this.props.onShowModal.bind(this, 'repayment')}>Learn more</a>)
          </div>
          <Graph average={repayment.average} veterans={repayment.rate} all={repayment.all} decimals={1}/>
        </div>

        <div className="medium-12 column">
          <GraphKey/>
          <p>
            Access a comprehensive spreadsheet of <a title="Veteran Outcome Measures"
              href={download.link} target="_blank">Veteran Outcome Measures ({download.info})</a>
          </p>
        </div>
      </div>
    );
  }
}

Outcomes.propTypes = {
  graphing: PropTypes.shape({
    retention: PropTypes.shape({
      rate: PropTypes.number,
      all: PropTypes.number,
      average: PropTypes.number
    }),
    graduation: PropTypes.shape({
      rate: PropTypes.number,
      all: PropTypes.number,
      average: PropTypes.number
    }),
    salary: PropTypes.shape({
      all: PropTypes.number,
      average: PropTypes.number
    }),
    repayment: PropTypes.shape({
      rate: PropTypes.number,
      all: PropTypes.number,
      average: PropTypes.number
    }),
  }),
  onShowModal: PropTypes.func,
};

export default Outcomes;
