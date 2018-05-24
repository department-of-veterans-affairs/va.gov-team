import React from 'react';

class AboutThisTool extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="center columns about-this-tool">
          <a href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp" target="_blank">About this Tool</a>
          <a href="https://www.benefits.va.gov/GIBILL/docs/job_aids/ComparisonToolData.xlsx">Download Data on All Schools (Excel)</a>
        </div>
      </div>
    );
  }
}

export default AboutThisTool;
