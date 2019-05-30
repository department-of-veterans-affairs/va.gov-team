import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import { ClaimStatusPage } from '../../containers/ClaimStatusPage';

describe('<ClaimStatusPage>', () => {
  it('should render page with no alerts and a timeline', () => {
    const claim = {
      attributes: {
        phase: 2,
        open: true,
        documentsNeeded: false,
        decisionLetterSent: false,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.subTree('NeedFilesFromYou')).to.be.false;
    expect(tree.subTree('ClaimsDecision')).to.be.false;
    expect(tree.subTree('ClaimsTimeline')).not.to.be.false;
  });
  it('should not render a timeline when closed', () => {
    const claim = {
      attributes: {
        phase: 2,
        open: false,
        documentsNeeded: false,
        decisionLetterSent: false,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.subTree('ClaimsDecision')).to.be.false;
    expect(tree.subTree('ClaimComplete')).not.to.be.false;
    expect(tree.subTree('ClaimsTimeline')).to.be.false;
  });
  it('should not render ClaimComplete with decision letter', () => {
    const claim = {
      attributes: {
        phase: 2,
        open: false,
        documentsNeeded: false,
        decisionLetterSent: true,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.subTree('ClaimsDecision')).not.to.be.false;
    expect(tree.subTree('ClaimComplete')).to.be.false;
    expect(tree.subTree('ClaimsTimeline')).to.be.false;
  });
  it('should render need files from you component', () => {
    const claim = {
      attributes: {
        phase: 2,
        documentsNeeded: true,
        open: true,
        decisionLetterSent: false,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.subTree('NeedFilesFromYou')).not.to.be.false;
  });
  it('should not render need files from you when closed', () => {
    const claim = {
      attributes: {
        phase: 2,
        documentsNeeded: true,
        decisionLetterSent: false,
        open: false,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.subTree('NeedFilesFromYou')).to.be.false;
  });
  it('should not render files needed from you when decision letter sent', () => {
    const claim = {
      attributes: {
        phase: 2,
        documentsNeeded: true,
        decisionLetterSent: true,
        open: true,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.subTree('NeedFilesFromYou')).to.be.false;
  });
  it('should render claims decision alert', () => {
    const claim = {
      attributes: {
        phase: 5,
        documentsNeeded: false,
        decisionLetterSent: true,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.everySubTree('ClaimsDecision')).not.to.be.empty;
  });
  it('should not render timeline without a phase', () => {
    const claim = {
      attributes: {
        phase: null,
        documentsNeeded: false,
        decisionLetterSent: false,
        waiverSubmitted: true,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        claim={claim}/>
    );
    expect(tree.everySubTree('ClaimsTimeline')).to.be.empty;
  });
  it('should render empty content when loading', () => {
    const claim = {
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        loading
        claim={claim}/>
    );
    expect(tree.props.children).to.be.null;
  });
  it('should render notification', () => {
    const claim = {};

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        loading
        message={{ title: 'Test', body: 'Body' }}
        claim={claim}/>
    );
    expect(tree.props.message).not.to.be.null;
  });
  it('should clear alert', () => {
    const claim = {
      attributes: {
        eventsTimeline: []
      }
    };
    const clearNotification = sinon.spy();
    const message = {
      title: 'Test',
      body: 'Test'
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        clearNotification={clearNotification}
        message={message}
        claim={claim}/>
    );
    expect(clearNotification.called).to.be.false;
    tree.subTree('ClaimDetailLayout').props.clearNotification();
    expect(clearNotification.called).to.be.true;
  });
  it('should clear notification when leaving', () => {
    const claim = {
      attributes: {
        eventsTimeline: []
      }
    };
    const clearNotification = sinon.spy();
    const message = {
      title: 'Test',
      body: 'Test'
    };

    const tree = SkinDeep.shallowRender(
      <ClaimStatusPage
        clearNotification={clearNotification}
        message={message}
        claim={claim}/>
    );
    expect(clearNotification.called).to.be.false;
    tree.getMountedInstance().componentWillUnmount();
    expect(clearNotification.called).to.be.true;
  });
});
