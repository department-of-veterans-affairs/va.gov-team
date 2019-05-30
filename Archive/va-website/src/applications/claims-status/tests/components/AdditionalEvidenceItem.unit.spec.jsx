import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import AdditionalEvidenceItem from '../../components/AdditionalEvidenceItem';

describe('<AdditionalEvidenceItem>', () => {
  it('should render additional evidence item', () => {
    const item = {
      uploadDate: '2010-01-01',
      type: 'other_documents_list',
      fileType: 'Test Type',
      filename: 'testfile.pdf'
    };

    const tree = SkinDeep.shallowRender(
      <AdditionalEvidenceItem
        item={item}/>
    );

    expect(tree.subTree('.additional-evidence').text()).to.equal('Additional evidence');
    expect(tree.subTree('.submission-description').text()).contain('File: testfile.pdf');
    expect(tree.subTree('.submission-description').text()).contain('Type: Test Type');
    expect(tree.everySubTree('.submission-date')).not.to.be.empty;
  });
  it('should render additional evidence item without date', () => {
    const item = {
      date: null,
      uploadDate: null,
      type: 'other_documents_list',
      fileType: 'Test Type',
      filename: 'testfile.pdf'
    };

    const tree = SkinDeep.shallowRender(
      <AdditionalEvidenceItem
        item={item}/>
    );

    expect(tree.everySubTree('.submission-date')).to.be.empty;
  });
});
