import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import { FilesPage } from '../../containers/FilesPage';

describe('<FilesPage>', () => {
  it('should render notification', () => {
    const claim = {};

    const tree = SkinDeep.shallowRender(
      <FilesPage
        loading
        message={{ title: 'Test', body: 'Body' }}
        claim={claim}/>
    );
    expect(tree.props.message).not.to.be.null;
  });
  it('should hide requested files when closed', () => {
    const claim = {
      attributes: {
        open: false,
        eventsTimeline: []
      }
    };
    const tree = SkinDeep.shallowRender(
      <FilesPage
        claim={claim}/>
    );

    expect(tree.subTree('RequestedFilesInfo')).to.be.false;
  });
  it('should show requested files when open', () => {
    const claim = {
      attributes: {
        open: true,
        eventsTimeline: []
      }
    };
    const tree = SkinDeep.shallowRender(
      <FilesPage
        claim={claim}/>
    );

    expect(tree.subTree('RequestedFilesInfo')).not.to.be.false;
  });
  it('should render ask va to decide component', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 3,
        documentsNeeded: false,
        decisionLetterSent: false,
        waiverSubmitted: false,
        eventsTimeline: [
          {
            type: 'still_need_from_you_list',
            status: 'NEEDED'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <FilesPage
        params={{ id: 2 }}
        claim={claim}/>
    );
    expect(tree.everySubTree('AskVAToDecide')).not.to.be.empty;
  });
  it('should display turned in docs', () => {
    const claim = {
      attributes: {
        eventsTimeline: [
          {
            type: 'received_from_you_list',
            documents: [{
              filename: 'Filename'
            }],
            trackedItemId: 2,
            status: 'ACCEPTED'
          },
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <FilesPage
        claim={claim}/>
    );
    expect(tree.everySubTree('SubmittedTrackedItem').length).to.equal(1);
  });
  it('should display additional evidence docs', () => {
    const claim = {
      attributes: {
        eventsTimeline: [
          {
            filename: 'Filename',
            fileType: 'Testing',
            type: 'other_documents_list'
          }
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <FilesPage
        claim={claim}/>
    );
    expect(tree.everySubTree('AdditionalEvidenceItem').length).to.equal(1);
  });
  it('should show never received docs as tracked items', () => {
    const claim = {
      attributes: {
        eventsTimeline: [
          {
            type: 'never_received_from_you_list',
            documents: [{
              filename: 'Filename'
            }],
            trackedItemId: 2,
            status: 'ACCEPTED'
          },
          {
            type: 'never_received_from_others_list',
            documents: [{
              filename: 'Filename'
            }],
            trackedItemId: 3,
            status: 'NEEDED'
          },
        ]
      }
    };

    const tree = SkinDeep.shallowRender(
      <FilesPage
        claim={claim}/>
    );
    expect(tree.everySubTree('SubmittedTrackedItem').length).to.equal(2);
    expect(tree.everySubTree('AdditionalEvidenceItem')).to.be.empty;
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
      <FilesPage
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
      <FilesPage
        clearNotification={clearNotification}
        message={message}
        claim={claim}/>
    );
    expect(clearNotification.called).to.be.false;
    tree.getMountedInstance().componentWillUnmount();
    expect(clearNotification.called).to.be.true;
  });
});
