import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import FinancialDisclosureDescription from '../../components/FinancialDisclosureDescription';

describe('Pensions FinancialDisclosureDescription', () => {
  it('should render spouse warning', () => {
    const pageKeys = ['spouseNetWorth'];
    const viewedPages = new Set();

    const tree = SkinDeep.shallowRender(
      <FinancialDisclosureDescription
        pageKeys={pageKeys}
        viewedPages={viewedPages}/>
    );

    expect(tree.text()).to.contain('spouse have any');
  });
  it('should render dependent warning', () => {
    const pageKeys = ['dependentsNetWorth0'];
    const viewedPages = new Set();

    const tree = SkinDeep.shallowRender(
      <FinancialDisclosureDescription
        pageKeys={pageKeys}
        viewedPages={viewedPages}/>
    );

    expect(tree.text()).to.contain('dependents you added');
  });
  it('should render no warning when there are no unviewed pages', () => {
    const pageKeys = ['dependentsNetWorth0'];
    const viewedPages = new Set(['dependentsNetWorth0']);

    const tree = SkinDeep.shallowRender(
      <FinancialDisclosureDescription
        pageKeys={pageKeys}
        viewedPages={viewedPages}/>
    );

    expect(tree.text()).to.equal('');
  });
});
