import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { merge, set } from 'lodash/fp';
import sinon from 'sinon';

import { MHVApp } from '../../../authorization/containers/MHVApp';

describe('<MHVApp>', () => {
  const props = {
    location: { pathname: '/health-care/prescriptions', query: {} },
    account: {
      errors: null,
      loading: false,
      polling: false,
      polledTimes: 0,
      state: 'unknown'
    },
    availableServices: ['facilities', 'hca', 'user-profile'],
    serviceRequired: 'rx',
    createMHVAccount: sinon.spy(),
    fetchMHVAccount: sinon.spy()
  };

  const setup = () => {
    global.window.location.replace = sinon.spy();
    props.createMHVAccount.reset();
    props.fetchMHVAccount.reset();
  };

  beforeEach(setup);

  it('should show a loading indicator when fetching an account', () => {
    const newProps = set('account.loading', true, props);
    const wrapper = shallow(<MHVApp {...newProps}/>);
    expect(wrapper.find('LoadingIndicator').exists()).to.be.true;
  });

  it('should show a loading indicator when polling and override generic loading', () => {
    const newProps = merge(props, {
      account: { loading: true, polling: true }
    });
    const wrapper = shallow(<MHVApp {...newProps}/>);
    const loadingIndicator = wrapper.find('LoadingIndicator').dive();
    expect(loadingIndicator.text()).to.equal('Creating your MHV account...');
  });


  it('should create an account if the user does not have an account', () => {
    shallow(<MHVApp {...props}/>);
    expect(props.createMHVAccount.calledOnce).to.be.true;
  });

  it('should create an account after the user accepts terms', () => {
    const newProps = set('account.state', 'needs_terms_acceptance', props);
    const wrapper = shallow(<MHVApp {...newProps}/>);
    expect(global.window.location.replace.calledOnce).to.be.true;
    const account = { ...props.account, state: 'unknown' };
    wrapper.setProps({ account });
    expect(props.createMHVAccount.calledOnce).to.be.true;
  });

  it('should create an account after the user accepts terms', () => {
    const newProps = set('account.state', 'needs_terms_acceptance', props);
    const wrapper = shallow(<MHVApp {...newProps}/>);
    expect(global.window.location.replace.calledOnce).to.be.true;
    const account = { ...props.account, state: 'unknown' };
    wrapper.setProps({ account });
    expect(props.createMHVAccount.calledOnce).to.be.true;
  });

  it('should show a success message after the user accepts terms and gets upgraded', () => {
    const newProps = merge(props, {
      account: { ...props.account, state: 'upgraded' },
      location: { ...props.location, query: { tc_accepted: true } }, // eslint-disable-line camelcase
      availableServices: ['rx']
    });
    const wrapper = shallow(<MHVApp {...newProps}/>);
    expect(wrapper.find('AlertBox').prop('headline')).to.eq('Thank you for accepting the Terms and Conditions for using Vets.gov health tools');
  });

  it('should not attempt another account creation if the user remains unable to access', () => {
    const wrapper = shallow(<MHVApp {...props}/>);
    const account = { ...props.account, state: 'unknown' };
    wrapper.setProps({ account });
    expect(props.createMHVAccount.calledOnce).to.be.true;
  });

  it('should poll for account state while account is being created', () => {
    const clock = sinon.useFakeTimers();
    const wrapper = shallow(<MHVApp {...props}/>);
    const pollingAccount = set('polling', true, props.account);
    wrapper.setProps({ account: pollingAccount });
    expect(wrapper.find('LoadingIndicator').exists()).to.be.true;

    wrapper.setProps({ account: set('polledTimes', 1, pollingAccount) });
    clock.tick(1000);
    wrapper.setProps({ account: set('polledTimes', 2, pollingAccount) });
    clock.tick(2000);
    expect(props.fetchMHVAccount.calledThrice).to.be.true;

    const account = {
      ...props.account,
      polling: false,
      polledTimes: 0,
      state: 'upgraded'
    };

    wrapper.setProps({ account });
    expect(props.fetchMHVAccount.calledOnce).to.be.false;
    clock.restore();
  });

  it('should show MHV access error if nothing is loading and terms do not have to be accepted', () => {
    const wrapper = shallow(<MHVApp {...props}/>);
    expect(wrapper.find('#mhv-access-error').exists()).to.be.true;
  });

  it('should show MHV access error if user has an account but not the required service', () => {
    const newProps = set('account.state', 'existing', props);
    const wrapper = shallow(<MHVApp {...newProps}/>);
    expect(wrapper.find('#mhv-access-error').exists()).to.be.true;
  });

  it('should render children if user has the required service', () => {
    const newProps = merge(props, {
      account: { state: 'existing' },
      availableServices: ['rx']
    });
    const wrapper = shallow(<MHVApp {...newProps}><div id="test"/></MHVApp>);
    expect(wrapper.find('#test').exists()).to.be.true;
  });

  it('should show account error', () => {
    const errors = [
      {
        title: 'Account error',
        detail: 'There was a problem with your account',
        code: '500',
        status: '500'
      }
    ];

    const newProps = set('account.errors', errors, props);
    const wrapper = shallow(<MHVApp {...newProps}/>);
    expect(wrapper.find('AlertBox').prop('headline')).to.eq('We’re not able to process your MHV account');
  });
});
