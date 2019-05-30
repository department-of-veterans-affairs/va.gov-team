import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageRecipient from '../../../components/compose/MessageRecipient';

const props = {
  options: ['recipient1'],
  recipient: {
    value: 'recipient1',
  },
  cssClass: 'cssClass',
};

describe('<MessageRecipient>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageRecipient {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname if no error', () => {
    const tree = SkinDeep.shallowRender(<MessageRecipient {...props}/>);

    expect(tree.props.className).to.equal(props.cssClass);
  });

  it('should have the expected classname if there is an error', () => {
    const tree = SkinDeep.shallowRender(<MessageRecipient {...props} errorMessage="errorMessage"/>);

    expect(tree.props.className).to.equal(`${props.cssClass} usa-input-error msg-compose-error`);
  });


  it('should render the expected select element', () => {
    const tree = SkinDeep.shallowRender(<MessageRecipient {...props}/>);

    expect(tree.subTree('ErrorableSelect')).to.be.ok;
  });

  it('should pass props to child select element', () => {
    const tree = SkinDeep.shallowRender(<MessageRecipient {...props}/>);
    const selectElement = tree.subTree('ErrorableSelect');

    expect(selectElement.props.options).to.equal(props.options);
    expect(selectElement.props.value).to.equal(props.recipient);
  });
});
