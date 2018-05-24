import React from 'react';
import { connect } from 'react-redux';
import { board, venueAddress, branchOfService } from '../utils';

class RequestDD214 extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem('dw-viewed-guidance')) {
      this.props.router.push('/');
    }
  }

  componentWillUnmount() {
    localStorage.removeItem('dw-formValues');
    localStorage.removeItem('dw-viewed-guidance');
  }

  render() {
    const formValues = JSON.parse(localStorage.getItem('dw-formValues'));

    return (
      <div>
        <h1>Your Steps for Getting a DD214 for Your Period of Honorable Service</h1>
        <div className="medium-8">
          <div className="va-introtext">
            <p>
              To receive a second DD214 reflecting <strong>only</strong> your period of honorable service, you’ll need to complete Department of Defense (DoD) Form 149 and send it to the {board(formValues, true).name}—<strong>do not</strong> send it to the Discharge Review Board (DRB) for the {branchOfService(formValues['1_branchOfService'])}.
            </p>
          </div>
          <ul className="vertical-list-group more-bottom-cushion numbered">
            <li className="list-group-item">
              <div>
                <h4>Download and fill out <a href="http://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0149.pdf">DoD Form 149</a></h4>
                <ul>
                  <li>Pay special attention to item 6, which asks for the reason for your change. Be clear that you want a DD214 for your period of honorable service, and include the dates of that period.</li>
                  <li>Item 8 asks for your date of “discovery” of the injustice. In this case, it’s the day you “discovered” you were missing an extra DD214 that you deserved. If this date isn’t in the last 3 years, you’ll need to argue that the Board should hear your case anyway. This isn’t a strict date, so don’t let the 3-year rule keep you from applying if you have a strong case. You may note your recent discovery of new evidence about your situation, such as the ability to apply for a discharge upgrade.</li>
                  <li>Item 10 asks if you’re willing to appear in person before the Board in Washington, DC. The Board rarely asks Veterans to appear in person, but saying you’re willing to do so may help show how serious you are about your case.</li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <h4>Mail your completed form</h4>
              <p>There are a number of different boards that handle discharge upgrades and corrections. Because you want a new DD214, which is seen as a correction of your military record, you’ll need to apply to the {board(formValues, true).abbr} for the {branchOfService(formValues['1_branchOfService'])}.</p>
              <p>Unfortunately, there isn’t a way to submit this form online.</p>
              <p>Mail your completed form and all supporting documents to the {board(formValues, true).abbr} at:</p>
              <p>
                {venueAddress(formValues, true)}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValues: state.dischargeWizard.form,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDD214);
