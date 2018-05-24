import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import _ from 'lodash';

import { Main } from '../../containers/Main';

const defaultProps = {
  availability: 'available',
  enrollmentData: { }
};

describe('Main', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<Main {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should show data when service is available', () => {
    /*
    const props = _.merge({}, defaultProps,
                          { enrollmentData: { firstName: 'Joe' } });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    // TODO: why is StatusPage not found
    expect(tree.dive(['div', 'StatusPage'])).to.be.ok;
    */
  });

  it('should show loading spinner when waiting for response', () => {
    const props = _.merge({}, defaultProps, { availability: 'awaitingResponse' });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('LoadingIndicator')).to.be.ok;
  });

  it('should show system down message for backend service error', () => {
    const props = _.merge({}, defaultProps, { availability: 'backendServiceError' });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#backendErrorMessage')).to.be.ok;
  });

  it('should show backend authentication error', () => {
    const props = _.merge({}, defaultProps, { availability: 'backendAuthenticationError' });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#recordNotFound')).to.be.ok;
  });

  /*
    Temporarily switch out record not found and replace with System Down
    See: https://github.com/department-of-veterans-affairs/vets.gov-team/issues/7677
  */
  // it('should show record not found warning', () => {
  //   const props = _.merge({}, defaultProps, { availability: 'noChapter33Record' });
  //   const tree = SkinDeep.shallowRender(<Main {...props}/>);
  //   expect(tree.subTree('#noChapter33Benefits')).to.be.ok;
  // });

  it('should show System Down warning when record not found', () => {
    const props = _.merge({}, defaultProps, { availability: 'noChapter33Record' });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#systemDownMessage')).to.be.ok;
  });

  it('should show system down message when service is unavailable', () => {
    const props = _.merge({}, defaultProps, { availability: 'unavailable' });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#backendErrorMessage')).to.be.ok;
  });
});
