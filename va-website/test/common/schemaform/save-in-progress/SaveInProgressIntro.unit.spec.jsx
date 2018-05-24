import React from 'react';
import moment from 'moment';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import { SaveInProgressIntro } from '../../../../src/applications/common/schemaform/save-in-progress/SaveInProgressIntro';

describe('Schemaform <SaveInProgressIntro>', () => {
  const pageList = [{
    path: 'wrong-path'
  }, {
    path: 'testing'
  }];
  const fetchInProgressForm = () => {};
  const removeInProgressForm = () => {};
  const toggleLoginModal = () => {};

  it('should render in progress message', () => {
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() + 2000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: []
      },
      login: {
        currentlyLoggedIn: true,
        loginUrls: {
          idme: '/mockLoginUrl'
        }
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('.usa-alert').text()).to.contain('In progress');
    expect(tree.subTree('.usa-alert').text()).to.contain('will expire on');
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
    expect(tree.subTree('withRouter(FormStartControls)').props.prefillAvailable).to.be.false;
    expect(tree.subTree('withRouter(FormStartControls)').props.startPage).to.equal('testing');
  });
  it('should pass prefills available prop', () => {
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() + 2000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: ['1010ez']
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('withRouter(FormStartControls)').props.prefillAvailable).to.be.true;
  });
  it('should render sign in message', () => {
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() + 2000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: []
      },
      login: {
        currentlyLoggedIn: false,
        loginUrls: {
          idme: '/mockLoginUrl'
        }
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('.va-button-link')).not.to.be.false;
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
  });
  it('should render prefill Notification when prefill enabled and not signed in', () => {
    const prefillEnabled = true;
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() + 2000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: []
      },
      login: {
        currentlyLoggedIn: false,
        loginUrls: {
          idme: '/mockLoginUrl'
        }
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        prefillEnabled={prefillEnabled}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('.usa-alert').text()).to.contain('If you’re signed in to your account, your application process can go more smoothly. Here’s why:We can prefill part of your application based on your account details.You can save your form in progress, and come back later to finish filling it out. You have 60 days from the date you start or update your application to submit the form. After 60 days, the form won’t be saved, and you’ll need to start over.Sign in to your account.');
    expect(tree.subTree('.va-button-link')).not.to.be.false;
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
  });

  it('should render message if signed in with no saved form', () => {
    const user = {
      profile: {
        savedForms: [],
        prefillsAvailable: []
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('.usa-alert').text()).to.contain('You can save this form in progress');
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
  });

  it('should render prefill notification if signed in with no saved form and prefill available', () => {
    const user = {
      profile: {
        savedForms: [],
        prefillsAvailable: ['1010ez']
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('.usa-alert').text()).to.contain('Note: Since you’re signed in to your account, we can prefill part of your application based on your account details. You can also save your form in progress, and come back later to finish filling it out.');
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
  });

  it('should render loading indicator while profile is loading', () => {
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() + 2000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: [],
        loading: true
      },
      login: {
        currentlyLoggedIn: false
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('LoadingIndicator')).not.to.be.false;
    expect(tree.subTree('withRouter(FormStartControls)')).to.be.false;
  });
  it('should render message if signed in with an expired form', () => {
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() - 1000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: []
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(tree.subTree('.usa-alert').text()).to.contain('You can save this form in progress');
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
  });
  it('should render sign in message from render prop', () => {
    const user = {
      profile: {
        savedForms: [
          { form: '1010ez', metadata: { last_updated: 3000, expires_at: moment().unix() + 2000 } } // eslint-disable-line camelcase
        ],
        prefillsAvailable: []
      },
      login: {
        currentlyLoggedIn: false,
        loginUrls: {
          idme: '/mockLoginUrl'
        }
      }
    };
    const renderSpy = sinon.stub().returns(<div>Render prop info</div>);

    const tree = SkinDeep.shallowRender(
      <SaveInProgressIntro
        saveInProgress={{ formData: {} }}
        pageList={pageList}
        formId="1010ez"
        user={user}
        fetchInProgressForm={fetchInProgressForm}
        removeInProgressForm={removeInProgressForm}
        renderSignInMessage={renderSpy}
        toggleLoginModal={toggleLoginModal}/>
    );

    expect(renderSpy.called).to.be.true;
    expect(tree.text()).to.contain('Render prop info');
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
  });
});
