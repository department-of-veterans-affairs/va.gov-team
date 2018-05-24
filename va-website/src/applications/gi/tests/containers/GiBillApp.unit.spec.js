import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import createCommonStore from '../../../../platform/startup/store';
import { GiBillApp } from '../../../../applications/gi/containers/GiBillApp';
import reducer from '../../reducers';

const defaultProps = createCommonStore(reducer).getState();

describe('<GiBillApp>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<GiBillApp {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should render LoadingIndicator', () => {
    const props = {
      ...defaultProps,
      constants: {
        ...defaultProps.constants,
        inProgress: true,
      }
    };
    const tree = SkinDeep.shallowRender(<GiBillApp {...props}/>);
    expect(tree.subTree('LoadingIndicator')).to.be.ok;
  });
});
