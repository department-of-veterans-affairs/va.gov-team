import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ClaimPhase from '../../components/ClaimPhase';

describe('<ClaimPhase>', () => {
  it('should render activity when on current phase', () => {
    const activity = {
      1: [
        {
          type: 'filed',
          date: '2010-05-04'
        }
      ]
    };

    const tree = SkinDeep.shallowRender(
      <ClaimPhase
        id="2"
        current={1}
        phase={1}
        activity={activity}/>
    );
    expect(tree.everySubTree('.claims-evidence').length).to.equal(1);
  });
  it('should not render activity when on current phase', () => {
    const activity = {
      1: [
        {
          type: 'filed',
          date: '2010-05-04'
        }
      ]
    };

    const tree = SkinDeep.shallowRender(
      <ClaimPhase
        id="2"
        current={1}
        phase={3}
        activity={activity}/>
    );
    expect(tree.everySubTree('.claims-evidence').length).to.equal(0);
  });
  it('should display filed message', () => {
    const activity = {
      1: [
        {
          type: 'filed',
          date: '2010-05-04'
        }
      ]
    };

    const tree = SkinDeep.shallowRender(
      <ClaimPhase
        id="2"
        current={1}
        phase={1}
        activity={activity}/>
    );
    expect(tree.everySubTree('.claims-evidence-item')[0].text()).to.equal('Thank you. VA received your claim');
  });
  it('should display requested message', () => {
    const activity = {
      1: [
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        }
      ]
    };

    const tree = SkinDeep.shallowRender(
      <ClaimPhase
        id="2"
        current={1}
        phase={1}
        activity={activity}/>
    );
    expect(tree.everySubTree('.claims-evidence-item')[0].text()).to.equal('We added a notice for: <Link />');
  });
  it('should display show older updates button', () => {
    const activity = {
      1: [
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        },
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        },
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        },
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        },
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        },
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        }
      ]
    };

    const tree = SkinDeep.shallowRender(
      <ClaimPhase
        id="2"
        current={1}
        phase={1}
        activity={activity}/>
    );
    expect(tree.everySubTree('button').length).to.equal(1);
  });
  describe('event descriptions', () => {
    const activity = {
      1: [
        {
          type: 'still_need_from_you_list',
          date: '2010-05-04',
          displayName: 'Needed file'
        }
      ]
    };

    const tree = SkinDeep.shallowRender(
      <ClaimPhase
        id="2"
        current={1}
        phase={1}
        activity={activity}/>
    );
    const instance = tree.getMountedInstance();

    it('should show entered description', () => {
      const output = instance.getEventDescription({
        type: 'phase_entered',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('Your claim moved to Claim received');
    });
    it('should show file description', () => {
      const output = instance.getEventDescription({
        type: 'filed',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('Thank you. VA received your claim');
    });
    it('should show completed description', () => {
      const output = instance.getEventDescription({
        type: 'completed',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('Your claim is closed');
    });
    it('should show received from you reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'received_from_you_list',
        displayName: 'Request 1',
        status: 'WHATEVER',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('We have reviewed your submitted evidence for Request 1. We will notify you if we need additional information.');
    });
    it('should show received from you not reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'received_from_you_list',
        displayName: 'Request 1',
        status: 'SUBMITTED_AWAITING_REVIEW',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('You or others submitted Request 1. We will notify you when we have reviewed it.');
    });
    it('should show received from others reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'received_from_others_list',
        displayName: 'Request 1',
        status: 'WHATEVER',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('We have reviewed your submitted evidence for Request 1. We will notify you if we need additional information.');
    });
    it('should show received from others not reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'received_from_others_list',
        displayName: 'Request 1',
        status: 'SUBMITTED_AWAITING_REVIEW',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('You or others submitted Request 1. We will notify you when we have reviewed it.');
    });
    it('should show still need from you not reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'still_need_from_you_list',
        displayName: 'Request 1',
        status: 'WHATEVER',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('We added a notice for: <Link />');
    });
    it('should show still need from you reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'still_need_from_you_list',
        displayName: 'Request 1',
        status: 'SUBMITTED_AWAITING_REVIEW',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('You or others submitted Request 1. We will notify you when we have reviewed it.');
    });
    it('should show still need from others reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'still_need_from_others_list',
        displayName: 'Request 1',
        status: 'SUBMITTED_AWAITING_REVIEW',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('You or others submitted Request 1. We will notify you when we have reviewed it.');
    });
    it('should show still need from others not reviewed description', () => {
      const output = instance.getEventDescription({
        type: 'still_need_from_others_list',
        displayName: 'Request 1',
        status: 'WHATEVER',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('We added a notice for: <Link />');
    });
    it('should show never received from others description', () => {
      const output = instance.getEventDescription({
        type: 'never_received_from_others_list',
        displayName: 'Request 1',
        status: 'WHATEVER',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('We closed the notice for Request 1');
    });
    it('should show never received from you description', () => {
      const output = instance.getEventDescription({
        type: 'never_received_from_you_list',
        displayName: 'Request 1',
        status: 'WHATEVER',
        date: '2010-01-04'
      });

      const descTree = SkinDeep.shallowRender(output);

      expect(descTree.text()).to.equal('We closed the notice for Request 1');
    });
  });
});
