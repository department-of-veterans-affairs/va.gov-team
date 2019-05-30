import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import EnrollmentHistory from '../../components/EnrollmentHistory';

const defaultProps = {
  enrollmentData: {
    veteranIsEligible: true,
    firstName: 'Joe',
    lastName: 'West',
    dateOfBirth: '1995-11-12T06:00:00.000+0000',
    vaFileNumber: '12345678',
    regionalProcessingOffice: 'Central Office Washington, DC',
    eligibilityDate: '2016-12-01T05:00:00.000+0000',
    delimitingDate: '2017-12-07T05:00:00.000+0000',
    percentageBenefit: 100,
    originalEntitlement: { months: 36, days: 0 },
    usedEntitlement: { months: 3, days: 15 },
    remainingEntitlement: { months: 32, days: 15 },
    enrollments: [
      {
        beginDate: '2012-11-01T04:00:00.000+0000',
        endDate: '2012-12-01T05:00:00.000+0000',
        facilityCode: '11902614',
        facilityName: 'PURDUE UNIVERSITY',
        fullTimeHours: 12,
        onlineHours: 6,
        onCampusHours: 6,
        trainingType: 'UnderGrad',
        yellowRibbonAmount: 0
      }
    ]
  }
};

describe('<EnrollmentHistory>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<EnrollmentHistory {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should show enrollments if veteran is eligible', () => {
    const tree = SkinDeep.shallowRender(<EnrollmentHistory {...defaultProps}/>);
    expect(tree.subTree('EnrollmentPeriod')).to.exist;
    expect(tree.dive(['.section-header']).text()).to.equal('Enrollment History');
  });

  it('should not show enrollments if veteran is not eligible', () => {
    const props = {
      enrollmentData: {
        veteranIsEligible: false,
        percentageBenefit: 100,
        originalEntitlement: { months: 36, days: 0 },
        usedEntitlement: { months: 36, days: 0 },
        remainingEntitlement: { months: 0, days: 0 },
        enrollments: []
      }
    };
    const tree = SkinDeep.shallowRender(<EnrollmentHistory {...props}/>);
    expect(tree.subTree('EnrollmentPeriod')).to.be.false;
    expect(tree.subTree('.section-header')).to.be.false;
  });

  it('should show history may be incorrect warning', () => {
    const tree = SkinDeep.shallowRender(<EnrollmentHistory {...defaultProps}/>);
    const featureBoxes = tree.dive(['.feature']).everySubTree('h4');
    expect(featureBoxes[0].text()).to.equal('Does something look wrong in your enrollment history?');
  });

  it('should show no enrollment history warning', () => {
    const props = {
      enrollmentData: {
        veteranIsEligible: true,
        originalEntitlement: { months: 3, days: 0 },
        usedEntitlement: { months: 0, days: 0 },
        remainingEntitlement: { months: 3, days: 0 },
        enrollments: []
      }
    };
    const tree = SkinDeep.shallowRender(<EnrollmentHistory {...props}/>);
    const featureBoxes = tree.dive(['.feature']).everySubTree('h4');
    expect(featureBoxes[0].text()).to.equal('You don’t have any enrollment history');
  });
});
