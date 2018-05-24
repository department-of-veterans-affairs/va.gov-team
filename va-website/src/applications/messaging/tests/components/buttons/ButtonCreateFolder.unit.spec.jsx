import { expect } from 'chai';
import React from 'react';
import SkinDeep from 'skin-deep';

import ButtonCreateFolder from '../../../components/buttons/ButtonCreateFolder';

const props = {
  onClick: () => {},
};

describe('<ButtonCreateFolder>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonCreateFolder {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonCreateFolder {...props}/>);

    expect(tree.props.className).to.equal('va-icon-link msg-btn-newfolder');
  });
});
