import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import ClaimsTimeline from '../../components/ClaimsTimeline';

describe('<ClaimsTimeline>', () => {
  it('should render 5 phases', () => {
    const events = [];

    const tree = SkinDeep.shallowRender(
      <ClaimsTimeline
        events={events}
        phase={6}/>
    );

    expect(tree.everySubTree('ClaimPhase').length).to.equal(5);
  });
  it('should render phase back warning text', () => {
    const events = [];

    const tree = SkinDeep.shallowRender(
      <ClaimsTimeline
        events={events}
        everPhaseBack
        phase={6}/>
    );

    expect(tree.everySubTree('ClaimPhase')[2].props.children[0].props.children[1]).to.contain('may be times when a claim moves forward');
  });
  it('should render phase back warning box for phase 6', () => {
    const events = [];

    const tree = SkinDeep.shallowRender(
      <ClaimsTimeline
        events={events}
        everPhaseBack
        currentPhaseBack
        phase={6}/>
    );

    expect(tree.subTree('PhaseBackWarning')).not.to.be.false;
  });
  it('should not render phase back warning box if not in phase 6', () => {
    const events = [];

    const tree = SkinDeep.shallowRender(
      <ClaimsTimeline
        events={events}
        everPhaseBack
        currentPhaseBack
        phase={4}/>
    );

    expect(tree.subTree('PhaseBackWarning')).to.be.false;
  });
});
