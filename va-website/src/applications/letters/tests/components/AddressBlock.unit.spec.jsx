import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import AddressBlock from '../../components/AddressBlock';

describe('<AddressBlock/>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<AddressBlock/>);
    const helpText = tree.subTree('p').text();

    expect(helpText).to.contain('When you download a letter');
  });

  it('should render children', () => {
    const children = (<span>I am a child!</span>);
    const tree = SkinDeep.shallowRender(<AddressBlock {...{ children }}/>);
    const helpText = tree.dive(['div', 'span']).text();

    expect(helpText).to.contain('I am a child!');
  });
});
