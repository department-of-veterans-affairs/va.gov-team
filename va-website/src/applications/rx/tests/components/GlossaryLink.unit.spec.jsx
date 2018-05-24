import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import GlossaryLink from '../../components/GlossaryLink';
// glossary terms are defined in the config file
import { glossary } from '../../config';

const props = {
  term: 'Active',
  onClick: () => {},
};

describe('<GlossaryLink>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<GlossaryLink {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected className', () => {
    const tree = SkinDeep.shallowRender(<GlossaryLink {...props}/>);

    expect(tree.props.className).to.equal('rx-trigger');
  });

  it('should call onClick correctly', () => {
    const onClick = sinon.spy();

    const glossaryLink = ReactTestUtils.renderIntoDocument(
      <GlossaryLink
        {...props}
        onClick={onClick}/>
    );

    glossaryLink.handleClick({ target: { dataset: { term: 'Active' } } });
    expect(onClick.calledWith([glossary.Prescription[0]])).to.be.true;
  });

  it('should show the expected text in the button', () => {
    const tree = SkinDeep.shallowRender(<GlossaryLink {...props}/>);

    expect(tree.subTree('button').text()).to.equal('Active');
  });
});
