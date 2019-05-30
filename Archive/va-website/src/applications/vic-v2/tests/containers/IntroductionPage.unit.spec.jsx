import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { IntroductionPage } from '../../containers/IntroductionPage';

describe('VIC <IntroducionPage>', () => {
  it('should render', () => {
    const tree = shallow(
      <IntroductionPage
        route={{
          formConfig: {
          }
        }}
        saveInProgress={{
          user: {
            login: {
            },
            profile: {
              services: []
            }
          }
        }}/>
    );
    expect(tree.find('FormTitle').exists()).to.be.true;
    expect(tree.text()).to.contain('Sign In and Verify Your Identity');
    expect(tree.find('.list-two').find('h5').text()).to.contain('Sign In and Verify Your Identity');
  });
  it('should render signed in and unverified', () => {
    const tree = shallow(
      <IntroductionPage
        route={{
          formConfig: {
          }
        }}
        saveInProgress={{
          user: {
            login: {
              currentlyLoggedIn: true
            },
            profile: {
              services: []
            }
          }
        }}/>
    );
    expect(tree.find('FormTitle').exists()).to.be.true;
    expect(tree.find('.list-two').find('h5').text()).to.contain('Verify Your Identity');
  });
  it('should render signed in and verified', () => {
    const tree = shallow(
      <IntroductionPage
        route={{
          formConfig: {
          }
        }}
        saveInProgress={{
          user: {
            login: {
              currentlyLoggedIn: true
            },
            profile: {
              services: ['identity-proofed']
            }
          }
        }}/>
    );
    expect(tree.find('FormTitle').exists()).to.be.true;
    expect(tree.find('.list-two').find('h5').text()).to.contain('Sign In');
  });
});
