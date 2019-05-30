import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { ManageFolders } from '../../containers/ManageFolders';

const props = {
  folders: [
    { folderId: 101, name: 'Personal folder 1', count: 1 },
    { folderId: 102, name: 'Personal folder 2', count: 0 }
  ],
  deleteFolder: () => {},
  dispatch: () => {}
};

describe('ManageFolders', () => {
  const tree = SkinDeep.shallowRender(<ManageFolders {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should show the correct folders', () => {
    const rows = tree.dive(['table', 'tbody']).everySubTree('tr');
    props.folders.forEach((folder, index) => {
      const cells = rows[index].everySubTree('td');
      expect(cells[0].dive(['Link']).text()).to.equal(folder.name);
      expect(cells[1].text()).to.equal(`${folder.count}`);
    });
  });
});
