import PropTypes from 'prop-types';
import React from 'react';

class Graph extends React.Component {

  constructor(props) {
    super(props);
    this.format = this.format.bind(this);
  }

  format(d) {
    let val = d.value;
    if (val === null || val === undefined) {
      return 'No Data';
    }
    val = val.toFixed(this.props.decimals);
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1,$2');
    }
    val = typeof d.percent !== 'undefined' ? `$${val.replace('.0', '')}` : `${val}%`;
    return val;
  }

  render() {
    if (this.props.error) {
      return (
        <div className="graph-component">
          <p>{this.props.error}</p>
        </div>
      );
    }
    const { width, height } = this.props;
    const viewBoxString = ['0', '0', width, height].join(' ');
    const BarLabel = (props) => (
      <text fontFamily="SourceSansPro-Regular, Source Sans Pro" fontSize="16" fill="#323A45" width="62">
        <tspan x={props.x} y={props.y}>{props.text}</tspan>
      </text>
    );
    const HollowUnderbar = ({ top }) => <path d={`M80.544 28.8h128.912V3.2H80.544v25.6zM78 ${top || '0'}h134v32H78V0z`} fill="#F1F1F1" fillRule="nonzero"/>;
    const SolidUnderbar = ({ top }) => <path fill="#F1F1F1" d={`M78 ${top || 0}h134v32H78z`}/>;
    const Underbar = ({ top, value, children }) => {
      return value ? <g><SolidUnderbar top={top}/>{children}</g> : <HollowUnderbar top={top}/>;
    };
    const ValueBar = ({ top, color, percent }) => {
      if (isNaN(percent)) { return null; }
      const wide = Math.floor(134 * (percent / this.props.max));
      return <path fill={color} d={`M78 ${top}h${wide}v32H78z`}/>;
    };
    const ValueLabel = ({ y, text }) => (
      <text fontFamily="SourceSansPro-Bold, Source Sans Pro" fontSize="16" fontWeight="bold" fill="#323A45">
        <tspan x="220" y={y}>{text}</tspan>
      </text>
    );
    const AverageMark = ({ percent, text }) => {
      const position = 75 + (134 * (percent / 100));
      const x = position - 10;
      return (
        <g>
          <path fill="#323A45" d={`M${position} 72h2V0h-2z`}/>
          <text fontFamily="SourceSansPro-Regular, Source Sans Pro" fontSize="16" fill="#323A45">
            <tspan x={x} y="88">{text}</tspan>
          </text>
        </g>
      );
    };

    let averagePercent;
    let averageObject;
    const bars = [
      { name: 'vet', value: this.props.veterans },
      { name: 'all', value: this.props.all }
    ];
    // handle non-percentage data
    if (this.props.max !== 100) {
      Object.keys(bars).forEach(i => {
        if (typeof (bars[i]) === 'object') {
          bars[i].percent = (bars[i].value / this.props.max) * 100;
        }
      });
      // handle non-percentage average line
      averagePercent = (this.props.average / this.props.max) * 100;
      averageObject = { value: this.props.average, percent: true };
    } else {
      averagePercent = this.props.average;
      averageObject = { value: this.props.average };
    }
    const veterans = bars[0];
    const all = bars[1];

    return (
      <div className="graph-component">
        <svg viewBox={viewBoxString} className="graph" width="100%" height="100%">
          <g fill="none" fillRule="evenodd">
            <BarLabel text="All" x="53" y="62"/>
            <Underbar top="40" value={this.format(all) !== 'No Data'}>
              <ValueBar top="40" color="#757575" percent={all.value}/>
            </Underbar>
            <ValueLabel y="62" text={this.format(all)}/>

            <BarLabel text="Veterans" x="12" y="22"/>
            <Underbar top="0" value={this.format(veterans) !== 'No Data'}>
              <ValueBar top="0" color="#02BFE7" percent={veterans.value ? veterans.value : 1}/>
            </Underbar>
            <ValueLabel y="22" text={this.format(veterans)}/>

            {averagePercent ?
              <AverageMark
                percent={averagePercent}
                text={this.format(averageObject)}/> : null}
          </g>
        </svg>
      </div>
    );
  }
}

Graph.propTypes = {
  max: PropTypes.number,
  average: PropTypes.number,
  veterans: PropTypes.number,
  all: PropTypes.number,
  decimals: PropTypes.number
};

Graph.defaultProps = {
  max: 100,
  veterans: null,
  width: 300,
  height: 100,
  split: 1.8,
  decimals: 2
};

export default Graph;
