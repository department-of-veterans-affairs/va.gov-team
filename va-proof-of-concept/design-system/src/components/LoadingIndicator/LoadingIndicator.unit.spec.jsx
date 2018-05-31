import { expect } from 'chai';
import React from 'react';
import { axeCheck, mountToDiv } from '../../../lib/testing/helpers';

import LoadingIndicator from './LoadingIndicator.jsx';

describe('<LoadingIndicator>', () => {
  it('should not focus if setFocus is not set', () => {
    const component = <LoadingIndicator message="Loading"/>;
    mountToDiv(component, 'loadingContainer');

    expect(document.activeElement.classList.contains('loading-indicator')).to.be.false;
  });

  it('should focus if setFocus is set', () => {
    const component = <LoadingIndicator setFocus message="Loading"/>;
    mountToDiv(component, 'loadingContainer');

    expect(document.activeElement.classList.contains('loading-indicator')).to.be.true;
  });

  it('should pass aXe check', () => {
    return axeCheck(<LoadingIndicator message="Loading"/>);
  });
});
