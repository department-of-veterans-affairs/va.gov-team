import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import createCommonStore from '../../../../platform/startup/store';
import { LandingPage } from '../../containers/LandingPage';
import reducer from '../../reducers';

const defaultProps = createCommonStore(reducer).getState();

describe('<LandingPage>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<LandingPage {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should handleSubmit correctly', () => {
    const props = {
      ...defaultProps,
      router: { push: sinon.spy() },
      location: { query: {} },
      autocomplete: { searchTerm: 'foo' }
    };

    const tree = SkinDeep.shallowRender(<LandingPage {...props}/>);
    tree.getMountedInstance().handleSubmit({ preventDefault: () => {} });
    expect(props.router.push.called).to.be.true;
  });
});
