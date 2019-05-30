import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import ModalConfirmSave from '../../../components/compose/ModalConfirmSave';

const props = {
  onClose: () => {},
  onSave: () => {},
  visible: true,
};

describe('<ModalConfirmSave>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ModalConfirmSave {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should render the expected child elements', () => {
    const tree = SkinDeep.shallowRender(<ModalConfirmSave {...props}/>);

    expect(tree.subTree('Modal')).to.be.ok;
  });

  it('should handle deletion correctly', () => {
    const onSave = sinon.spy();
    const modalConfirmDelete = ReactTestUtils.renderIntoDocument(
      <ModalConfirmSave
        {...props }
        onSave={onSave}/>
    );

    modalConfirmDelete.saveDraft({ preventDefault: () => {} });

    expect(onSave.called).to.be.true;
  });
});
