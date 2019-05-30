import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageCategory from '../../../components/compose/MessageCategory';

const props = {
  categories: ['category1'],
  category: {
    value: 'category1',
    dirty: false,
  },
  cssClass: 'cssClass',
};

describe('<MessageCategory>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageCategory {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<MessageCategory {...props}/>);

    expect(tree.props.className).to.equal(props.cssClass);
  });

  it('should render the expected select element', () => {
    const tree = SkinDeep.shallowRender(<MessageCategory {...props}/>);

    expect(tree.subTree('ErrorableSelect')).to.be.ok;
  });

  it('should pass props to child select element', () => {
    const tree = SkinDeep.shallowRender(<MessageCategory {...props}/>);

    expect(tree.subTree('ErrorableSelect').props.options).to.equal(props.categories);
  });
});
