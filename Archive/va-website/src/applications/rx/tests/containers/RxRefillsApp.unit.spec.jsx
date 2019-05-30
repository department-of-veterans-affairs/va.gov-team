import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import RxRefillsApp from '../../containers/RxRefillsApp';
import reducer from '../../reducers';
import createCommonStore from '../../../../platform/startup/store';

const store = createCommonStore(reducer);

describe('<RxRefillsApp>', () => {
  it('should render', () => {
    const mockRoutes = [{ path: '/fake' }];
    const tree = SkinDeep.shallowRender(<RxRefillsApp store={store} location={{ pathname: '/blah' }} route={{ childRoutes: mockRoutes }}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
