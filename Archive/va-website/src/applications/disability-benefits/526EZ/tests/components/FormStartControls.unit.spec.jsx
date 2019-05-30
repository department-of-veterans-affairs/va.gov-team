import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import FormStartControls from '../../components/FormStartControls';

describe('526 <FormStartControls>', () => {
  it('should render unauthenticated view', () => {
    const authenticate = sinon.spy();
    const tree = shallow(
      <FormStartControls
        authenticate={authenticate}
        route={{
          formConfig: {
          }
        }}
        user={{
          login: {
          },
          profile: {
            savedForms: [],
            services: []
          }
        }}/>
    );
    tree.find('button').simulate('click');
    expect(tree.find('button').text()).to.contain('Sign');
    expect(tree.find('.usa-alert').text()).to.contain('sign in and verify your account');
    expect(authenticate.called).to.be.true;
  });
  it('should render authenticated view', () => {
    const tree = shallow(
      <FormStartControls
        route={{
          formConfig: {
          }
        }}
        user={{
          login: {
            currentlyLoggedIn: true
          },
          profile: {
            savedForms: [],
            services: []
          }
        }}/>
    );

    expect(tree.find('.usa-alert').text()).to.contain('To apply for a disability increase, you’ll need to verify your account');
    expect(tree.find('a').text()).to.contain('Verify Your Identity');
  });
  it('should render verified view', () => {
    const tree = shallow(
      <FormStartControls
        route={{
          formConfig: {
          }
        }}
        user={{
          login: {
            currentlyLoggedIn: true
          },
          profile: {
            verified: true,
            savedForms: [],
            services: []
          }
        }}/>
    );

    expect(tree.find('Connect').exists()).to.be.true;
  });
  it('should render loading view', () => {
    const tree = shallow(
      <FormStartControls
        ITFStatus={'pending'}
        user={{
          login: {
            currentlyLoggedIn: true
          },
          profile: {
            verified: true,
            savedForms: [],
            services: []
          }
        }}/>
    );

    expect(tree.find('LoadingIndicator').exists()).to.be.true;
  });
  it('should render ITF error view', () => {
    const tree = shallow(
      <FormStartControls
        ITFStatus={'expired'}
        user={{
          login: {
            currentlyLoggedIn: true
          },
          profile: {
            verified: true,
            savedForms: [],
            services: []
          }
        }}/>
    );

    expect(tree.find('.usa-alert').text()).to.contain('intent');
    expect(tree.find('SaveInProgressIntro').exists()).to.be.false;
    expect(tree.find('button').exists()).to.be.false;
    expect(tree.find('a').exists()).to.be.false;
  });
});
