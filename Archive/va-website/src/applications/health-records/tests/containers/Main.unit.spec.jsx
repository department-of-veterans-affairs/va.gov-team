import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import { wrapWithRouterContext } from '../../../../platform/testing/unit/helpers';

import { Main } from '../../containers/Main';

const props = {
  form: {
    reportTypes: {
      prescriptions: true,
    },
    dateOption: '3mo',
    dateRange: {
      start: null,
      end: null,
    },
  },
};

describe('<Main>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      wrapWithRouterContext(<Main {...props}/>)
    );
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('submit button should be enabled if form is valid', () => {
    const tree = SkinDeep.shallowRender(
      wrapWithRouterContext(<Main {...props}/>)
    );
    const submitButton = tree.dive(['Main', 'button']);
    expect(submitButton.props.disabled).to.not.be.ok;
  });
});
