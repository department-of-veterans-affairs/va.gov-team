import React from 'react';
import { expect } from 'chai';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import asyncLoader from '../../ui/asyncLoader';

describe('asyncLoader', () => {
  it('should display loading indicator while waiting', () => {
    const Component = asyncLoader(() => {
      return new Promise(f => f);
    }, 'Test loading');

    const page = ReactTestUtils.renderIntoDocument(<Component/>);
    const pageDOM = findDOMNode(page);

    expect(pageDOM.textContent).to.contain('Test loading');
  });

  it('should display component returned from promise', (done) => {
    const promise = Promise.resolve(() => {
      return <div>Test component</div>;
    });
    const Component = asyncLoader(() => {
      return promise;
    }, 'Test loading');

    const page = ReactTestUtils.renderIntoDocument(<Component/>);
    // this allows setState to be called first
    setTimeout(() => {
      const pageDOM = findDOMNode(page);
      expect(pageDOM.textContent).to.contain('Test component');
      done();
    });
  });
});
