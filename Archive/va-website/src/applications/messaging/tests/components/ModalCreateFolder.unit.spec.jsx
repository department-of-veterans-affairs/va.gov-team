import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ModalCreateFolder from '../../components/ModalCreateFolder.jsx';

const props = {
  cssClass: '',
  folders: [],
  newFolderName: {
    value: '',
  },
  id: '0',
  loading: false,
  onClose: () => {},
  onSubmit: () => {},
  onValueChange: () => {},
  visible: true,
};

describe('<ModalCreateFolder>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(
      <ModalCreateFolder {...props}/>
    );

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should render expected output', () => {
    const tree = SkinDeep.shallowRender(
      <ModalCreateFolder {...props}/>
    );

    expect(tree.subTree('Modal')).to.be.ok;
    expect(tree.dive(['Modal']).subTree('form')).to.be.ok;
    expect(tree.dive(['Modal']).subTree('.va-modal-button-group')).to.be.ok;
  });

  it('should show loading indicator when loading', () => {
    const tree = SkinDeep.shallowRender(
      <ModalCreateFolder {...props} loading/>
    );

    expect(tree.dive(['Modal']).subTree('LoadingIndicator')).to.be.ok;
  });
});
