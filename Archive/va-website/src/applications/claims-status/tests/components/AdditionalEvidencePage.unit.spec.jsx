import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { AdditionalEvidencePage } from '../../containers/AdditionalEvidencePage';

describe('<AdditionalEvidencePage>', () => {
  it('should render loading div', () => {
    const tree = SkinDeep.shallowRender(
      <AdditionalEvidencePage
        loading/>
    );
    expect(tree.everySubTree('LoadingIndicator')).not.to.be.empty;
  });
  it('should render upload error alert', () => {
    const claim = {
      id: 1,
      attributes: {}
    };
    const message = {
      title: 'test',
      body: 'test',
      type: 'error'
    };

    const tree = SkinDeep.shallowRender(
      <AdditionalEvidencePage
        claim={claim}
        message={message}/>
    );
    expect(tree.subTree('Notification')).not.to.be.false;
  });
  it('should clear upload error when leaving', () => {
    const claim = {
      id: 1,
      attributes: {}
    };
    const message = {
      title: 'test',
      body: 'test',
      type: 'error'
    };
    const clearNotification = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AdditionalEvidencePage
        claim={claim}
        clearNotification={clearNotification}
        message={message}/>
    );
    expect(tree.subTree('Notification')).not.to.be.false;
    tree.getMountedInstance().componentWillUnmount();
    expect(clearNotification.called).to.be.true;
  });
  it('should not clear notification after completed upload', () => {
    const claim = {
      id: 1,
      attributes: {}
    };
    const message = {
      title: 'test',
      body: 'test',
      type: 'error'
    };
    const clearNotification = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AdditionalEvidencePage
        claim={claim}
        uploadComplete
        clearNotification={clearNotification}
        message={message}/>
    );
    expect(tree.subTree('Notification')).not.to.be.false;
    tree.getMountedInstance().componentWillUnmount();
    expect(clearNotification.called).to.be.false;
  });
  it('should handle submit files', () => {
    const files = [];
    const claim = {
      id: 1,
      attributes: {}
    };
    const onSubmit = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <AdditionalEvidencePage
        claim={claim}
        files={files}
        submitFiles={onSubmit}/>
    );
    tree.subTree('AddFilesForm').props.onSubmit();
    expect(onSubmit.calledWith(1, null, files)).to.be.true;
  });
  it('should reset uploads and set title on mount', () => {
    const claim = {
      id: 1,
      attributes: {}
    };
    const resetUploads = sinon.spy();
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('va-nav-breadcrumbs');
    document.body.appendChild(mainDiv);
    ReactTestUtils.renderIntoDocument(
      <AdditionalEvidencePage
        claim={claim}
        files={[]}
        uploadField={{ value: null, dirty: false }}
        resetUploads={resetUploads}/>
    );

    expect(document.title).to.equal('Additional Evidence');
    expect(resetUploads.called).to.be.true;
  });
  it('should set details and go to files page if complete', () => {
    const claim = {
      id: 1,
      attributes: {}
    };
    const router = {
      push: sinon.spy()
    };
    const getClaimDetail = sinon.spy();
    const resetUploads = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AdditionalEvidencePage
        claim={claim}
        files={[]}
        uploadComplete
        uploadField={{ value: null, dirty: false }}
        router={router}
        getClaimDetail={getClaimDetail}
        resetUploads={resetUploads}/>
    );

    tree.getMountedInstance().componentWillReceiveProps({ uploadComplete: true });
    expect(getClaimDetail.calledWith(1)).to.be.true;
    expect(router.push.calledWith('your-claims/1/files')).to.be.true;
  });
});
