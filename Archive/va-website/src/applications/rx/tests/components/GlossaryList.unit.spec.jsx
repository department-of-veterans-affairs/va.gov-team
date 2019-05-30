import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import GlossaryList from '../../components/GlossaryList';
// glossary terms are defined in the config file
import { glossary } from '../../config';

const props = {
  terms: glossary.Prescription,
  title: 'Glossary',
};

describe('<GlossaryList>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<GlossaryList {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected className', () => {
    const tree = SkinDeep.shallowRender(<GlossaryList {...props}/>);

    expect(tree.props.className).to.equal('rx-glossary-section');
  });

  it('should show the expected title', () => {
    const tree = SkinDeep.shallowRender(<GlossaryList {...props}/>);

    expect(tree.subTree('.rx-pgroup-title').text()).to.equal('Glossary');
  });

  it('should render terms', () => {
    const tree = SkinDeep.shallowRender(<GlossaryList {...props}/>);

    expect(tree.subTree('p')).to.be.ok;
  });
});
