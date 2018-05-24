import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import UploadStatus from '../../components/UploadStatus';

describe('<UploadStatus>', () => {
  it('should render single file needed', () => {
    const tree = SkinDeep.shallowRender(
      <UploadStatus
        files={1}
        progress={0.5}/>
    );

    expect(tree.subTree('h4').text()).to.contain('Uploading 1 file');
    expect(tree.subTree('ProgressBar').props.percent).to.equal(50);
  });
  it('should call onCancel', () => {
    const onCancel = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <UploadStatus
        files={1}
        onCancel={onCancel}
        progress={0.5}/>
    );

    tree.subTree('a').props.onClick({
      preventDefault: () => {}
    });
    expect(onCancel.called).to.be.true;
  });
});

