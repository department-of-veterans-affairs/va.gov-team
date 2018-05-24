import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { IntroPage } from '../../containers/IntroPage';
import { SERVICE_AVAILABILITY_STATES } from '../../utils/constants';

describe('<IntroPage/>', () => {
  const getServiceAvailability = sinon.spy();

  beforeEach(() => {
    getServiceAvailability.reset();
  });

  const defaultProps = {
    getServiceAvailability,
    serviceAvailability: SERVICE_AVAILABILITY_STATES.up
  };

  it('should call getServiceAvailability()', () => {
    shallow(<IntroPage {...defaultProps}/>);
    expect(getServiceAvailability.callCount).to.equal(1);
  });

  it('should render a LoadingIndicator', () => {
    const wrapper = shallow(<IntroPage {...defaultProps} serviceAvailability={SERVICE_AVAILABILITY_STATES.pending}/>);
    expect(wrapper.find('LoadingIndicator')).to.have.lengthOf(1);
  });

  it('should render a link to /status', () => {
    const wrapper = shallow(<IntroPage {...defaultProps}/>);
    expect(wrapper.find('Link').first().props().to).to.equal('status');
  });

  it('should render an alert', () => {
    const wrapper = shallow(<IntroPage {...defaultProps} serviceAvailability={SERVICE_AVAILABILITY_STATES.down}/>);
    expect(wrapper.find('.usa-alert')).to.have.lengthOf(1);
  });
});
