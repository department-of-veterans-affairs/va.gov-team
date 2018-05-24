import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import NoticeBox from '../../components/NoticeBox.jsx';

describe('<NoticeBox>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(
      <NoticeBox/>
    );

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(
      <NoticeBox/>
    );
    expect(tree.props.className).to.equal('messaging-notice-box');
  });
});
