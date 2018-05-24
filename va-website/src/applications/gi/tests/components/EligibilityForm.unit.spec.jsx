import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import createCommonStore from '../../../../platform/startup/store';
import { EligibilityForm } from '../../components/search/EligibilityForm';
import reducer from '../../reducers';

const defaultProps = {
  ...createCommonStore(reducer).getState().eligibility,
  showModal: () => {}
};

const checkExpectedDropdowns = (tree, expected) => {
  tree.everySubTree('Dropdown', { visible: true }).forEach((dropdown) => {
    expect(expected.includes(dropdown.props.name)).to.be.true;
  });
};

describe('<EligibilityForm>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<EligibilityForm {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should render default fields', () => {
    const tree = SkinDeep.shallowRender(<EligibilityForm {...defaultProps}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'giBillChapter',
      'cumulativeService'
    ]);
  });

  it('should render spouse active duty field', () => {
    const props = { ...defaultProps, militaryStatus: 'spouse' };
    const tree = SkinDeep.shallowRender(<EligibilityForm {...props}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'spouseActiveDuty',
      'giBillChapter',
      'cumulativeService'
    ]);
  });

  it('should render fields for Post-9/11 GI Bill (Ch 33)', () => {
    const props = { ...defaultProps, giBillChapter: '33' };
    const tree = SkinDeep.shallowRender(<EligibilityForm {...props}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'giBillChapter',
      'cumulativeService'
    ]);
  });

  it('should render fields for Montgomery GI Bill (Ch 30)', () => {
    const props = { ...defaultProps, giBillChapter: '30' };
    const tree = SkinDeep.shallowRender(<EligibilityForm {...props}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'giBillChapter',
      'enlistmentService'
    ]);
  });

  it('should render fields for REAP GI Bill (Ch 1607)', () => {
    const props = { ...defaultProps, giBillChapter: '1607' };
    const tree = SkinDeep.shallowRender(<EligibilityForm {...props}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'giBillChapter',
      'consecutiveService'
    ]);
  });

  it('should render fields for VR&E (Ch 31)', () => {
    const props = { ...defaultProps, giBillChapter: '31' };
    const tree = SkinDeep.shallowRender(<EligibilityForm {...props}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'giBillChapter',
      'eligForPostGiBill',
      'numberOfDependents'
    ]);
  });

  it('should render fields for VR&E (Ch 31) when eligible for Post-9/11 GI Bill', () => {
    const props = {
      ...defaultProps,
      giBillChapter: '31',
      eligForPostGiBill: 'yes'
    };
    const tree = SkinDeep.shallowRender(<EligibilityForm {...props}/>);
    checkExpectedDropdowns(tree, [
      'militaryStatus',
      'giBillChapter',
      'eligForPostGiBill'
    ]);
  });
});
