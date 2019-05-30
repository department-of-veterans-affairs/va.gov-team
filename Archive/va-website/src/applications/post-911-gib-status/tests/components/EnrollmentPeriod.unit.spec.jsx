import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import _ from 'lodash';

import EnrollmentPeriod from '../../components/EnrollmentPeriod';

const defaultProps = {
  id: 'abc',
  enrollment: {
    beginDate: '2016-01-06T17:01:03.925Z',
    endDate: '2016-06-06T17:01:03.925Z',
    facilityName: 'CENTRAL CITY UNIVERSITY',
    facilityCode: '12123434',
    onCampusHours: 10,
    onlineHours: 2,
    yellowRibbonAmount: 0,
    amendments: [
    ]
  }
};

const amendments = [
  {
    onCampusHours: 12,
    onlineHours: 2,
    type: 'Add',
    changeEffectiveDate: '2017-02-06T17:01:03.926Z',
    yellowRibbonAmount: 2
  }, {
    onCampusHours: 12,
    onlineHours: 0,
    type: 'Drop',
    changeEffectiveDate: '2017-03-06T17:01:03.926Z',
    yellowRibbonAmount: 2
  }
];

describe('<EnrollmentPeriod>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<EnrollmentPeriod {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should display enrollment data', () => {
    const tree = SkinDeep.shallowRender(<EnrollmentPeriod {...defaultProps}/>);
    // Capitalization is taken care of by css styling
    expect(tree.subTree('.facility').text()).to.contain('central city university');
  });

  it('should not show change history there are no amendments', () => {
    const tree = SkinDeep.shallowRender(<EnrollmentPeriod {...defaultProps}/>);
    expect(tree.subTree('.usa-accordion')).to.be.false;
  });

  it('should show change history if there are amendments', () => {
    const props = _.merge({}, defaultProps, { enrollment: { amendments } });
    const tree = SkinDeep.shallowRender(<EnrollmentPeriod {...props}/>);
    expect(tree.subTree('.usa-accordion')).not.to.be.false;
  });

  it('should not show change history contents when panel is collapsed', () => {
    const props = _.merge({}, defaultProps, { enrollment: { amendments } });
    const tree = SkinDeep.shallowRender(<EnrollmentPeriod {...props}/>);
    expect(tree.subTree('.usa-accordion-content')).to.be.false;
  });

  it('should show or hide change history contents when panel is expanded or collapsed', () => {
    const props = _.merge({}, defaultProps, { enrollment: { amendments } });
    const tree = SkinDeep.shallowRender(<EnrollmentPeriod {...props}/>);

    // Expand
    tree.getMountedInstance().toggleHistory();
    expect(tree.subTree('.usa-accordion-content')).not.to.be.false;

    // Collapse
    tree.getMountedInstance().toggleHistory();
    expect(tree.subTree('.usa-accordion-content')).to.be.false;
  });
});
