import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import GlossaryModal from '../../components/GlossaryModal';
// glossary terms are defined in the config file
import { glossary } from '../../config';

const props = {
  content: glossary.Prescription,
  onCloseModal: () => {},
};

describe('<GlossaryModal>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<GlossaryModal {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected id', () => {
    const tree = SkinDeep.shallowRender(<GlossaryModal {...props}/>);

    expect(tree.props.id).to.equal('rx-glossary-modal');
  });

  it('should render a Modal', () => {
    const tree = SkinDeep.shallowRender(<GlossaryModal {...props}/>);

    expect(tree.subTree('Modal')).to.be.ok;
  });

  it('should call onCloseModal correctly', () => {
    const onCloseModal = sinon.spy();

    const glossaryLink = ReactTestUtils.renderIntoDocument(
      <GlossaryModal
        {...props}
        onCloseModal={onCloseModal}/>
    );

    glossaryLink.handleCloseModal({ preventDefault: () => {} });
    expect(onCloseModal.called).to.be.true;
  });
});
