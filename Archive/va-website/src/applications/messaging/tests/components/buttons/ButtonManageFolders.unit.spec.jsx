import { expect } from 'chai';
import React from 'react';
import SkinDeep from 'skin-deep';

import ButtonManageFolders from '../../../components/buttons/ButtonManageFolders';

const props = {
  onClick: () => {},
};

describe('<ButtonManageFolders>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonManageFolders {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonManageFolders {...props}/>);

    expect(tree.props.className).to.equal('va-icon-link msg-btn-managefolders');
  });
});
