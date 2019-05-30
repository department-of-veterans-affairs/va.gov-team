import React from 'react';
import { Link } from 'react-router';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

const reasonStatement = (props) => {
  const reason = props.formValues['4_reason'];
  const dischargeType = props.formValues['5_dischargeType'];

  switch (reason) {
    case '1':
      return (
        <p>
          Because you answered that your discharge was related to posttraumatic stress disorder (PTSD) or other mental health conditions, the DoD will apply “liberal consideration” to your case. In 2014, the DoD recognized that many Veterans had received discharges due to behavior connected to their previously undiagnosed or undocumented PTSD or mental health condition.
        </p>
      );
    case '2':
      return (
        <p>
          Because you answered that your discharge was related to a traumatic brain injury (TBI), the DoD will apply “liberal consideration” to your case. In 2014, the DoD recognized that many Veterans had received discharges due to behavior connected to their previously undiagnosed or undocumented TBI.
        </p>
      );
    case '3':
      if (dischargeType === '2') {
        return (
          <p>
          Because you answered that your discharge was due to your sexual orientation, the DoD encourages you to apply for an upgrade. In 2011, the DoD recognized that many Veterans received discharges only because of their sexual orientation. <br/> <strong>Note:</strong> You must prove that your discharge was solely due to your sexual orientation and events specifically related to it. If the events leading to your discharge were unrelated, you may still receive an upgrade, but you’ll have to argue that your discharge was unjust punishment for those events.
          </p>
        );
      } else if (dischargeType === '1') {
        return (
          <p>
            Many Veterans have received general or honorable discharges due to their sexual orientation, and simply want references to sexual orientation removed from their DD214s, or want the ability to re-enlist. This is a relatively straightforward application.
          </p>
        );
      }
      return null;
    case '4':
      return (
        <p>
          Because you answered that your discharge was related to sexual assault or harassment, the DoD will apply “liberal consideration” to your case. In 2017, the DoD recognized that many Veterans had received discharges due to sexual assault or harassment, and had unfairly received less than honorable discharges. <strong>Note:</strong> You must prove that your discharge was solely the result of sexual assault or harassment and events specifically related to it. If the events leading to your discharge were unrelated, you may still receive an upgrade, but you’ll have to argue that your discharge was unjust punishment for those events.
        </p>
      );
    case '5':
      return (
        <p>
          This is a common request for transgender Veterans whose DD214 name does not match the name they currently use.
        </p>
      );
    default:
      return null;
  }
};

const priorServiceStatement = (props) => {
  switch (props.formValues['12_priorService']) {
    case '1':
      return (
        <AlertBox
          content={<div>
            <h4 className="usa-alert-heading">You can apply for VA benefits using your honorable characterization.</h4>
            <p>Because you served honorably in one period of service, you can apply for VA benefits using that honorable characterization. You earned your benefits during the period in which you served honorably. The only exception is for service-connected disability compensation. If your disability began during your less than honorable period of service, you won’t be eligible to earn disability compensation unless you get that discharge upgraded. The instructions below this box tell you how to apply for an upgrade or correction to your final, less than honorable period of service.</p>
          </div>}
          isVisible
          status="info"/>
      );
    case '2':
      return (
        <AlertBox
          content={<div>
            <h4 className="usa-alert-heading">You can apply for VA benefits using your honorable characterization.</h4>
            <p>Because you served honorably in one period of service, you can apply for VA benefits using that honorable characterization. You earned your benefits during the period in which you served honorably. You don’t need a DD214 to apply for VA benefits—you only need to specifically mention this period of honorable service. (VA may do a Character of Discharge review to confirm your eligibility.)</p>
            <p>The only exception is for service-connected disability compensation. If your disability began during your less than honorable period of service, you won’t be eligible to earn disability compensation unless you get that discharge upgraded. The instructions below this box tell you how to apply to an upgrade or correction for your final, less than honorable period of service.</p>
            <p>If you want a DD214 for your period of honorable service for other reasons, unrelated to applying for VA benefits, you can request one. <Link to="/request-dd214" target="_blank">Find out how to request a DD214 for your period of honorable service</Link></p>
          </div>}
          isVisible
          status="info"/>
      );
    default:
      return null;
  }
};

const CarefulConsiderationStatement = (props) => {
  return (
    <div>
      {reasonStatement(props)}
      {priorServiceStatement(props)}
    </div>
  );
};

export default CarefulConsiderationStatement;
