import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import ButtonDelete from '../../../components/buttons/ButtonDelete';

const props = {
  onClick: () => {},
};

describe('<ButtonDelete>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonDelete {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonDelete {...props}/>);

    expect(tree.props.className).to.equal('msg-btn-delete');
  });

  it('should handle click action properly', () => {
    const onClick = sinon.spy();
    const buttonDelete = ReactTestUtils.renderIntoDocument(
      <ButtonDelete
        onClick={onClick}/>
    );

    buttonDelete.handleClick();
    expect(onClick.called).to.be.true;
  });
});
