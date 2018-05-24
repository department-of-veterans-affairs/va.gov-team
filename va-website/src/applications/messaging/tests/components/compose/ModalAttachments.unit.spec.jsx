import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ModalAttachments from '../../../components/compose/ModalAttachments';

const props = {
  onClose: () => {},
  visible: true,
  title: 'modal title',
  text: 'modal text',
};

describe('<ModalAttachments>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ModalAttachments {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should render the expected child elements', () => {
    const tree = SkinDeep.shallowRender(<ModalAttachments {...props}/>);

    expect(tree.subTree('Modal')).to.be.ok;
  });

  it('should render the expected text in child elements', () => {
    const tree = SkinDeep.shallowRender(<ModalAttachments {...props}/>);

    expect(tree.dive(['Modal']).subTree('h3').text()).to.equal(props.title);
    expect(tree.dive(['Modal']).subTree('p').text()).to.equal(props.text);
  });
});
