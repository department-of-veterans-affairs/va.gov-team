import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { set } from 'lodash/fp';
import sinon from 'sinon';

import { MhvTermsAndConditions } from '../../containers/MhvTermsAndConditions';

describe('<MhvTermsAndConditions>', () => {
  const props = {
    location: { pathname: '/health-care/medical-information-terms-conditions', query: {} },
    accepted: false,
    attributes: {
      title: 'T&C',
      headerContent: 'header',
      termsContent: 'terms and conditions',
      yesContent: 'agree'
    },
    user: {
      loggedIn: true,
      verified: true
    },
    loading: { tc: false, acceptance: false },
    acceptTerms: sinon.spy(),
    fetchLatestTerms: sinon.spy(),
    fetchTermsAcceptance: sinon.spy()
  };

  const setup = () => {
    global.window.location.replace = sinon.spy();
    props.acceptTerms.reset();
    props.fetchLatestTerms.reset();
    props.fetchTermsAcceptance.reset();
  };

  beforeEach(setup);

  it('should show an error when there are errors', () => {
    const newProps = set('errors', { code: 404 }, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    const alertBox = wrapper.find('AlertBox');
    expect(alertBox.exists()).to.be.true;
    expect(alertBox.prop('status')).to.eq('error');
  });

  it('should show a loading indicator when fetching terms and conditions', () => {
    const newProps = set('loading.tc', true, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    const loader = wrapper.find('LoadingIndicator');
    expect(loader.exists()).to.be.true;
    expect(loader.prop('message')).to.eq('Loading terms and conditions...');
  });

  it('should show a loading indicator when fetching previous acceptance', () => {
    const newProps = set('loading.acceptance', true, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    const loader = wrapper.find('LoadingIndicator');
    expect(loader.exists()).to.be.true;
    expect(loader.prop('message')).to.eq('Loading terms and conditions...');
  });

  it('should show a loading indicator when accepting terms and conditions', () => {
    const newProps = set('loading.acceptance', true, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    wrapper.setState({ isSubmitted: true });
    const loader = wrapper.find('LoadingIndicator');
    expect(loader.exists()).to.be.true;
    expect(loader.prop('message')).to.eq('Accepting terms and conditions...');
  });

  it('should show a success message after acceptance', () => {
    const wrapper = shallow(<MhvTermsAndConditions {...props}/>);
    wrapper.setState({ isSubmitted: true }, () => {
      wrapper.setProps({ accepted: true });
    });
    expect(wrapper.state('showAcceptedMessage')).to.be.true;
    const alertBox = wrapper.find('AlertBox').first();
    expect(alertBox.prop('status')).to.eq('success');
    expect(alertBox.prop('headline')).to.eq('You’ve accepted the Terms and Conditions for using Vets.gov health tools');
  });

  it('should show a success message after acceptance', () => {
    const wrapper = shallow(<MhvTermsAndConditions {...props}/>);
    wrapper.setState({ showCanceledMessage: true });
    const alertBox = wrapper.find('AlertBox').first();
    expect(alertBox.prop('status')).to.eq('warning');
    expect(alertBox.prop('headline')).to.eq('Using Vets.gov Health Tools');
  });

  it('should redirect after acceptance if there is a redirect URL', () => {
    const newProps = set('location.query.tc_redirect', '/health-care/prescriptions', props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    wrapper.setState({ isSubmitted: true });
    wrapper.setProps({ accepted: true });
    expect(wrapper.state('showAcceptedMessage')).to.be.true;
    expect(global.window.location.replace.calledOnce).to.be.true;
  });

  it('should not allow the user to agree if they are not logged in', () => {
    const newProps = set('user.loggedIn', false, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    expect(wrapper.find('#agreement-checkbox').exists()).to.be.false;
  });

  it('should not allow the user to agree if they are not verified', () => {
    const newProps = set('user.verified', false, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    expect(wrapper.find('#agreement-checkbox').exists()).to.be.false;
  });

  it('should not allow the user to agree if they have already accepted', () => {
    const newProps = set('accepted', true, props);
    const wrapper = shallow(<MhvTermsAndConditions {...newProps}/>);
    expect(wrapper.find('#agreement-checkbox').exists()).to.be.false;
  });
});

