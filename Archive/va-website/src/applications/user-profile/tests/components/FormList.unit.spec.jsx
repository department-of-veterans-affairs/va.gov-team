import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import FormList from '../../components/FormList';

describe('<FormList>', () => {
  const props = {
    savedForms: [
      {
        form: '1010ez',
        metadata: {
          last_updated: '1503688891',  // eslint-disable-line camelcase
          expires_at: '2504788891'  // eslint-disable-line camelcase
        }
      }
    ]
  };
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<FormList {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
  it('should show a saved applications list if the user has valid saved applications', () => {
    const tree = SkinDeep.shallowRender(<FormList {...props}/>);
    const SavedFormElement = tree.dive(['FormItem']);
    expect(tree.everySubTree('div').length).to.equal(1);
    expect(SavedFormElement.text()).to.have.string('Application for health care (10-10EZ)');
  });
  it('should not show a saved applications list if the user does not have any valid saved applications', () => {
    const newProps = { savedForms: [] };
    const tree = SkinDeep.shallowRender(<FormList {...newProps}/>);
    expect(tree.everySubTree('.card information').length).to.equal(0);
  });
});
