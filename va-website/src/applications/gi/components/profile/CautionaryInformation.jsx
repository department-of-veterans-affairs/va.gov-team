import PropTypes from 'prop-types';
import React from 'react';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

const TableRow = ({ description, thisCampus, allCampuses }) => {
  if (!thisCampus && !allCampuses) return null;
  const bold = description === 'Total Complaints';
  return (
    <tr>
      <th><strong>{description}</strong></th>
      <td>
        {bold ? <strong>{thisCampus}</strong> : thisCampus}
      </td>
      <td>
        {bold ? <strong>{allCampuses}</strong> : allCampuses}
      </td>
    </tr>
  );
};

const ListRow = ({ description, value }) => {
  if (value < 1) return null;
  const bold = description === 'Total Complaints';
  return (
    <div className="row">
      <div className="small-11 columns">
        <p>{bold ? <strong>{description}:</strong> : `${description}:`}</p>
      </div>
      <div className="small-1 columns">
        <p className="number">{bold ? <strong>{value}</strong> : value}</p>
      </div>
    </div>
  );
};

export class CautionaryInformation extends React.Component {
  render() {
    const it = this.props.institution;
    if (!it.complaints) { return null; }

    // If Ashford, show specific link.
    const schoolSpecificLink =
      (it.facilityCode === '21007103' || it.website === 'http://www.ashford.edu') && (
        <a href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#AshfordSAA" target="_blank">More information on Ashford University</a>
      );

    const flagContent = (
      <div>
        <p>
          {it.cautionFlagReason} {schoolSpecificLink}
        </p>
        <p>
          <a onClick={this.props.onShowModal.bind(this, 'cautionInfo')}>
            Learn more about these warnings
          </a>
        </p>
      </div>
    );

    const allCampusesLink = (
      <a href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#complaints_all_campuses" target="_blank">
        All campuses
      </a>
    );

    const complaintData = [
      { type: 'Financial Issues (e.g., Tuition/Fee charges)', key: 'financial' },
      { type: 'Quality of Education', key: 'quality' },
      { type: 'Refund Issues', key: 'refund' },
      { type: 'Recruiting/Marketing Practices', key: 'marketing' },
      { type: 'Accreditation', key: 'accreditation' },
      { type: 'Change in degree plan/requirements', key: 'degreeRequirements' },
      { type: 'Student Loans', key: 'studentLoans' },
      { type: 'Grade Policy', key: 'grades' },
      { type: 'Transfer of Credits', key: 'creditTransfer' },
      { type: 'Post-Graduation Job Opportunities', key: 'job', totalKey: 'jobs' },
      { type: 'Release of Transcripts', key: 'transcript' },
      { type: 'Other', key: 'other' },
      { type: 'Total Complaints', totals: ['facilityCode', 'mainCampusRollUp'] }
    ];

    const complaints = complaintData.reduce((hydratedComplaints, complaint) => {
      const totals = complaint.totals || {};
      const { type, key, totalKey } = complaint;
      const hydratedComplaint = {
        description: type,
        thisCampus: (complaint.totals ? it.complaints[totals[0]] : it.complaints[`${key}ByFacCode`]),
        allCampuses: (complaint.totals ? it.complaints[totals[1]] : it.complaints[`${totalKey || key}ByOpeIdDoNotSum`]),
      };
      return [...hydratedComplaints, hydratedComplaint];
    }, []);

    const allComplaints = complaints.pop();

    return (
      <div className="cautionary-information">
        <div className="caution-flag">
          <AlertBox
            content={flagContent}
            isVisible={!!it.cautionFlag}
            status="warning"/>
        </div>

        <div className="student-complaints">
          <div className="link-header">
            <h3>
              {+it.complaints.mainCampusRollUp}&nbsp;
              <a href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#complaints" target="_blank">student complaints</a>
            </h3>
            <span>
              &nbsp;(<a href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#sourcedata" target="_blank">Source</a>)
            </span>
          </div>
        </div>

        {!!it.complaints.mainCampusRollUp && (<div>
          <div className="table">
            <table className="all-complaints">
              <thead>
                <tr>
                  <th></th>
                  <th>This campus</th>
                  <th>{allCampusesLink}</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  description="All student complaints"
                  thisCampus={allComplaints.thisCampus}
                  allCampuses={allComplaints.allCampuses}/>
              </tbody>
            </table>
            <table className="complaints-by-type">
              <thead>
                <tr>
                  <th>Complaints by type <span>(Each complaint can have multiple types)</span></th>
                  <th>This campus</th>
                  <th>{allCampusesLink}</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((c) => (
                  <TableRow key={c.description} description={c.description}
                    thisCampus={c.thisCampus} allCampuses={c.allCampuses}/>
                ))}
              </tbody>
            </table>
          </div>

          <div className="list">
            <h4>This campus</h4>
            {complaints.map((c) =>
              <ListRow key={c.description} description={c.description} value={c.thisCampus}/>)}
            <h4>{allCampusesLink}</h4>
            {complaints.map((c) =>
              <ListRow key={c.description} description={c.description} value={c.allCampuses}/>)}
          </div>

          <p>*Each complaint can have multiple types</p>
        </div>)}
      </div>
    );
  }
}

CautionaryInformation.propTypes = {
  institution: PropTypes.object,
  onShowModal: PropTypes.func
};

export default CautionaryInformation;
