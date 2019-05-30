import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import MessageSearchAdvanced from '../../components/MessageSearchAdvanced';

const props = {
  isVisible: false,
  params: {
    dateRange: {
      start: null,
      end: null
    },
    from: {
      field: makeField(''),
      exact: false
    },
    to: {
      field: makeField(''),
      exact: false
    },
    subject: {
      field: makeField(''),
      exact: false
    }
  },
  onAdvancedSearch: () => {},
  onFieldChange: () => {},
  onDateChange: () => {},
};

describe('MessageSearchAdvanced', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<MessageSearchAdvanced {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
    expect(tree.subTree('.msg-search-advanced-toggle')).to.not.be.false;
  });

  it('should display a form when expanded', () => {
    const tree = SkinDeep.shallowRender(
      <MessageSearchAdvanced {...props} isVisible/>
    );
    expect(tree.subTree('.msg-search-advanced-controls')).to.not.be.false;
    expect(tree.subTree('.msg-search-advanced-toggle')).to.not.be.false;
  });

  it('should search by recipient instead of sender', () => {
    const tree = SkinDeep.shallowRender(
      <MessageSearchAdvanced {...props} hasRecipientField isVisible/>
    );
    const fields = tree.everySubTree('.msg-search-advanced-group');
    expect(fields[0].subTree('ErrorableTextInput').props.label).to.equal('To');
  });
});
