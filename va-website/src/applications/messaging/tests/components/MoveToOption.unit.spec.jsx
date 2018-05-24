import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MoveToOption from '../../components/MoveToOption.jsx';

const props = {
  folderName: 'Folder',
  folderId: 1,
};

describe('<MoveToOption>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MoveToOption {...props}/>);

    expect(tree.getRenderOutput()).to.be.ok;
  });

  it('should render the expected input field', () => {
    const tree = SkinDeep.shallowRender(<MoveToOption {...props}/>);

    expect(tree.subTree('.msg-hidden-radio')).to.be.ok;
  });

  it('should render the expected label text', () => {
    const tree = SkinDeep.shallowRender(<MoveToOption {...props}/>);

    expect(tree.subTree('.msg-move-to-label').text()).to.equal('Folder');
  });
});
