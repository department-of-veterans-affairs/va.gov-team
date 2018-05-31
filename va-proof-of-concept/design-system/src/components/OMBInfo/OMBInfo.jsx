import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/Modal';
// tests will fail if .jsx is not included above

const modalContents = (minutes) => (
  <div>
    <h3>Privacy Act Statement</h3>
    <p><strong>Respondent Burden:</strong> We need this information to determine your eligibility for education benefits (38 U.S.C. 3471). Title 38, United States Code, allows us to ask for this information. We estimate that you will need an average of {minutes} minutes to review the instructions, find the information, and complete this form. The VA cannot conduct or sponsor a collection of information unless a valid OMB (Office of Management and Budget) control number is displayed. You are not required to respond to a collection of information if this number is not displayed. Valid OMB control numbers can be located on the OMB Internet Page at www.reginfo.gov/public/do/PRAMain. If desired, you can call <a href="+18008271000">1-800-827-1000</a> to get information on where to send comments or suggestions about this form.</p>
    <p><strong>Privacy Act Notice:</strong> The VA will not disclose information collected on this form to any source other than what has been authorized under the Privacy Act of 1974 or title 38, Code of Federal Regulations, section 1.576 for routine uses (e.g., the VA sends educational forms or letters with a veteran’s identifying information to the Veteran’s school or training establishment to (1) assist the veteran in the completion of claims forms or (2) for the VA to obtain further information as may be necessary from the school for VA to properly process the Veteran’s education claim or to monitor his or her progress during training) as identified in the VA system of records, 58VA21/22/28, Compensation, Pension, Education, and Vocational Rehabilitation and Employment Records - VA, and published in the Federal Register. Your obligation to respond is required to obtain or retain education benefits. Giving us your SSN account information is voluntary. Refusal to provide your SSN by itself will not result in the denial of benefits. The VA will not deny an individual benefits for refusing to provide his or her SSN unless the disclosure of the SSN is required by a Federal Statute of law enacted before January 1, 1975, and still in effect. The requested information is considered relevant and necessary to determine the maximum benefits under the law. While you do not have to respond, VA cannot process your claim for education assistance unless the information is furnished as required by existing law (38 U.S.C. 3471). The responses you submit are considered confidential (38 U.S.C. 5701). Any information provided by applicants, recipients, and others may be subject to verification through computer matching programs with other agencies.</p>
  </div>
);

class OMBInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    const { resBurden, ombNumber, expDate } = this.props;

    return (
      <div className="omb-info">
        <div>Respondent burden: <strong>{resBurden} minutes</strong></div>
        <div>OMB Control #: <strong>{ombNumber}</strong></div>
        <div>Expiration date: <strong>{expDate}</strong></div>
        <div><button className="va-button-link" onClick={this.openModal}>Privacy Act Statement</button></div>
        <Modal
          cssClass="va-modal-large"
          contents={modalContents(resBurden)}
          id="omb-modal"
          visible={this.state.modalOpen}
          onClose={this.closeModal}/>
      </div>
    );
  }
}

OMBInfo.propTypes = {
  // respondent burden, length of time usually in minutes
  resBurden: PropTypes.number,

  // OMB control number / form number
  ombNumber: PropTypes.string,

  // form expiration date
  expDate: PropTypes.string
};

export default OMBInfo;
