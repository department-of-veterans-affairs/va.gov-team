import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import createDisclosureTitle from '../../components/DisclosureTitle';

describe('Pensions DisclosureTitle', () => {
  it('should render', () => {
    const DisclosureTitle = createDisclosureTitle('test', 'Blah blah');

    const tree = SkinDeep.shallowRender(
      <DisclosureTitle
        id="id"
        formData={{ test: { first: 'Jane', last: 'Doe' } }}/>
    );

    expect(tree.text()).to.contain('Jane Doe');
    expect(tree.text()).to.contain('Blah blah');
  });

  it('should render spouse name', () => {
    const DisclosureTitle = createDisclosureTitle('spouse', 'Blah blah');

    const tree = SkinDeep.shallowRender(
      <DisclosureTitle
        id="id"
        formData={{
          maritalStatus: 'Married',
          marriages: [{
            spouseFullName: {
              first: 'John',
              last: 'Doe'
            }
          }, {
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}/>
    );

    expect(tree.text()).to.contain('Jane Doe');
    expect(tree.text()).to.contain('Blah blah');
  });
});
