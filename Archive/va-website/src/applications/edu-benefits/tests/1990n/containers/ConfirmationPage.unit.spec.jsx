import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import { ConfirmationPage } from '../../../1990n/containers/ConfirmationPage';

const form = {
  submission: {
    response: {
      attributes: {}
    }
  },
  data: {
    veteranFullName: {
      first: 'Jane',
      last: 'Doe'
    },
    benefit: 'chapter35'
  }
};

describe('Edu 1990n <ConfirmationPage>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <ConfirmationPage form={form}/>
    );

    expect(tree.subTree('.confirmation-page-title').text()).to.equal('Claim received');
    expect(tree.everySubTree('span')[1].text().trim()).to.equal('for Jane Doe');
    expect(tree.everySubTree('p')[0].text()).to.contain('We usually process claims within 30 days.');
    expect(tree.everySubTree('p')[1].text()).to.contain('We may contact you for more information or documents.Please print this page for your records');
    expect(tree.everySubTree('.confirmation-guidance-message')[0].text()).to.contain('Find out what happens after you apply.');
  });
  it('should expand documents', () => {
    const tree = SkinDeep.shallowRender(
      <ConfirmationPage form={form}/>
    );

    // Check to see that div.usa-accordion-content doesn't exist
    expect(tree.subTree('.usa-accordion-content')).to.be.false;

    tree.getMountedInstance().toggleExpanded({ preventDefault: f => f });

    // Check to see that div.usa-accordion-content exists after expanding
    expect(tree.subTree('.usa-accordion-content')).to.be.an('object');
  });
});
