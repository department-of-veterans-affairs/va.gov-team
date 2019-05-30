import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import ButtonPrint from '../../../components/buttons/ButtonPrint';

const props = {
  onClick: () => {},
};

describe('<ButtonPrint>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonPrint {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonPrint {...props}/>);

    expect(tree.props.className).to.equal('msg-btn-print');
  });

  it('should handle click action properly', () => {
    const onClick = sinon.spy();
    const buttonPrint = ReactTestUtils.renderIntoDocument(
      <ButtonPrint
        onClick={onClick}/>
    );

    buttonPrint.handleClick();
    expect(onClick.called).to.be.true;
  });
});
