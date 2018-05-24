import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageWrite from '../../../components/compose/MessageWrite';

const props = {
  onValueChange: () => {},
  text: {
    value: 'text',
  },
  cssClass: 'cssClass',
};

describe('<MessageWrite>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageWrite {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected className', () => {
    const tree = SkinDeep.shallowRender(<MessageWrite {...props}/>);

    expect(tree.props.className).to.equal(props.cssClass);
  });

  it('should render the expected child elements', () => {
    const tree = SkinDeep.shallowRender(<MessageWrite {...props}/>);

    expect(tree.subTree('ErrorableTextArea')).to.be.ok;
  });
});
