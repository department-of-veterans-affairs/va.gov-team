import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import createCommonStore from '../../../../platform/startup/store';
import { SearchPage } from '../../containers/SearchPage';
import reducer from '../../reducers';

const defaultProps = createCommonStore(reducer).getState();

describe('<SearchPage>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<SearchPage {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should render LoadingIndicator', () => {
    const props = {
      ...defaultProps,
      search: {
        ...defaultProps.search,
        inProgress: true,
      },
    };
    const tree = SkinDeep.shallowRender(<SearchPage {...props}/>);
    expect(tree.subTree('LoadingIndicator')).to.be.ok;
  });

  it('should call expected actions when mounted', () => {
    const props = {
      ...defaultProps,
      fetchSearchResults: sinon.spy(),
      setPageTitle: sinon.spy(),
      institutionFilterChange: sinon.spy(),
      location: {},
    };
    const tree = SkinDeep.shallowRender(<SearchPage {...props}/>);
    tree.getMountedInstance().componentDidMount();
    expect(props.fetchSearchResults.called).to.be.true;
    expect(props.setPageTitle.called).to.be.true;
  });
});
