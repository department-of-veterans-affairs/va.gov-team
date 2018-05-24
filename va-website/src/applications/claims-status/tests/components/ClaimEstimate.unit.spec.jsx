import React from 'react';
import moment from 'moment';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ClaimEstimate from '../../components/ClaimEstimate';

describe('<ClaimEstimate>', () => {
  it('should render estimated date', () => {
    const date = moment().startOf('day').add(2, 'days');
    const tree = SkinDeep.shallowRender(
      <ClaimEstimate
        maxDate={date.format('YYYY-MM-DD')}/>
    );
    expect(tree.text()).to.contain(`Estimated date: ${date.format('MMM D, YYYY')}`);
    expect(tree.text()).to.contain('We base this on claims similar to yours. It isn’t an exact date.');
  });
  it('should render estimated date warning', () => {
    const date = moment().startOf('day').subtract(2, 'days');
    const tree = SkinDeep.shallowRender(
      <ClaimEstimate
        maxDate={date.format('YYYY-MM-DD')}/>
    );
    expect(tree.text()).to.contain('We estimated your claim would be completed by now');
  });
  it('should render no estimate warning', () => {
    const tree = SkinDeep.shallowRender(
      <ClaimEstimate
        maxDate=""/>
    );
    expect(tree.text()).to.contain('Estimate not available');
  });
  it('should render no estimate warning with far away date', () => {
    const date = moment().startOf('day').add(5, 'years');
    const tree = SkinDeep.shallowRender(
      <ClaimEstimate
        maxDate={date.format('YYYY-MM-DD')}/>
    );
    expect(tree.text()).to.contain('Estimate not available');
  });
});
