import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import { makeField } from '../../../../platform/forms/fields';
import MessageSearch from '../../components/MessageSearch';

const props = {
  isAdvancedVisible: false,
  params: {
    dateRange: {
      start: null,
      end: null
    },
    from: {
      field: makeField(''),
      exact: false
    },
    subject: {
      field: makeField(''),
      exact: false
    }
  },
  onAdvancedSearch: () => {},
  onError: () => {},
  onFieldChange: () => {},
  onDateChange: () => {},
  onSubmit: () => {}
};

describe('MessageSearch', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<MessageSearch {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should show basic search', () => {
    const tree = SkinDeep.shallowRender(<MessageSearch {...props }/>);
    expect(tree.subTree('.msg-search-simple-wrap')).to.not.be.false;
  });

  it('should not show basic search when showing advanced search', () => {
    const tree = SkinDeep.shallowRender(
      <MessageSearch {...props } isAdvancedVisible/>
    );
    expect(tree.subTree('.msg-search-simple-wrap')).to.be.false;
  });

  it('should submit basic search when advanced is hidden', () => {
    const params = {
      dateRange: {
        start: null,
        end: null
      },
      from: {
        field: makeField('test2', true),
        exact: false
      },
      subject: {
        field: makeField('test1', true),
        exact: true
      }
    };

    const onSubmit = sinon.spy();

    const messageSearch = ReactTestUtils.renderIntoDocument(
      <MessageSearch
        {...props }
        params={params}
        onSubmit={onSubmit}/>
    );

    messageSearch.handleSubmit({ preventDefault: () => {} });
    expect(onSubmit.calledWith({
      subject: { field: makeField('test1', true), exact: false }
    })).to.be.true;
  });

  it('should submit advanced search when advanced is visible', () => {
    const params = {
      dateRange: {
        start: null,
        end: null
      },
      from: {
        field: makeField('test2', true),
        exact: false
      },
      subject: {
        field: makeField('test1', true),
        exact: true
      }
    };

    const onSubmit = sinon.spy();

    const messageSearch = ReactTestUtils.renderIntoDocument(
      <MessageSearch
        {...props }
        isAdvancedVisible
        params={params}
        onSubmit={onSubmit}/>
    );

    messageSearch.handleSubmit({ preventDefault: () => {} });
    expect(onSubmit.calledWith(params)).to.be.true;
  });
});
