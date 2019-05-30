import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import RequestedFilesInfo from '../../components/RequestedFilesInfo';

describe('<RequestedFilesInfo>', () => {
  it('should display no documents messages', () => {
    const filesNeeded = [];
    const optionalFiles = [];

    const tree = SkinDeep.shallowRender(
      <RequestedFilesInfo
        id="1"
        filesNeeded={filesNeeded}
        optionalFiles={optionalFiles}/>
    );
    expect(tree.everySubTree('.no-documents')).not.to.be.empty;
  });
  it('should display requested items', () => {
    const filesNeeded = [
      {
        type: 'still_need_from_you_list',
        displayName: 'Request 1',
        description: 'Some description',
        status: 'NEEDED'
      }
    ];
    const optionalFiles = [];

    const tree = SkinDeep.shallowRender(
      <RequestedFilesInfo
        id="1"
        filesNeeded={filesNeeded}
        optionalFiles={optionalFiles}/>
    );

    expect(tree.everySubTree('.file-request-list-item')).not.to.be.empty;
    expect(tree.everySubTree('.file-request-list-item')[0].text()).to.contain(filesNeeded[0].displayName);
    expect(tree.everySubTree('.file-request-list-item')[0].text()).to.contain(filesNeeded[0].description);
    expect(tree.everySubTree('.file-request-list-item')[0].text()).to.contain('<Link />');
  });
  it('should display optional files', () => {
    const optionalFiles = [
      {
        type: 'still_need_from_others_list',
        status: 'NEEDED'
      }
    ];
    const filesNeeded = [];

    const tree = SkinDeep.shallowRender(
      <RequestedFilesInfo
        id="1"
        filesNeeded={filesNeeded}
        optionalFiles={optionalFiles}/>
    );

    expect(tree.everySubTree('.file-request-list-item')).not.to.be.empty;
    expect(tree.everySubTree('.file-request-list-item')[0].text()).to.contain('We requested this from others');
    expect(tree.everySubTree('.file-request-list-item')[0].text()).to.contain('<Link />');
  });
});
