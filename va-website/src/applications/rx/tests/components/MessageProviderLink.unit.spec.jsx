import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageProviderLink from '../../components/MessageProviderLink';

describe('<MessageProviderLink>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<MessageProviderLink/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected className', () => {
    const tree = SkinDeep.shallowRender(<MessageProviderLink/>);

    expect(tree.props.className).to.equal('usa-button rx-message-provider-link');
  });
});
