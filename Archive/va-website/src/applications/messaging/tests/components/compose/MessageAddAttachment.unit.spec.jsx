import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageAddAttachment from '../../../components/compose/MessageAddAttachment';

const props = {
  cssClass: 'cssClass',
  label: 'labelText',
  allowedMimeTypes: ['png', 'jpg'],
};

describe('<MessageAddAttachment>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageAddAttachment {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<MessageAddAttachment {...props}/>);

    expect(tree.props.className).to.equal(props.cssClass);
  });

  it('should have the expected label text', () => {
    const tree = SkinDeep.shallowRender(<MessageAddAttachment {...props}/>);

    expect(tree.subTree('span').text()).to.equal(props.label);
  });

  it('should have the expected mimeTypes', () => {
    const tree = SkinDeep.shallowRender(<MessageAddAttachment {...props}/>);

    expect(tree.subTree('input').props.accept).to.equal(props.allowedMimeTypes.join(','));
  });
});
