import React from 'react';
import moment from 'moment';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';
import { FormSaved } from '../../../../src/applications/common/schemaform/save-in-progress/FormSaved';

describe('Schemaform <FormSaved>', () => {
  let windowOpen;
  let oldWindow;
  const setup = () => {
    oldWindow = global.window;
    windowOpen = sinon.stub().returns({ focus: f => f });
    global.window = {
      open: windowOpen,
      dataLayer: [],
      VetsGov: {
      },
      location: {},
    };
  };
  const takeDown = () => {
    global.window = oldWindow;
  };
  const route = {
    pageList: [
      {
        path: 'wrong-path'
      },
      {
        path: 'testing'
      }
    ],
    formConfig: {
    }
  };
  const formId = '1010ez';
  const user = () => {
    return {
      profile: {
        prefillsAvailable: []
      },
      login: {
        verifyUrl: 'http://fake-verify-url'
      }
    };
  };
  const lastSavedDate = 1497300513914;
  const expirationDate = moment().unix() + 2000;
  before(setup);
  after(takeDown);

  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <FormSaved formId={formId} lastSavedDate={lastSavedDate} expirationDate={expirationDate} route={route} user={user()}/>
    );
    expect(tree.subTree('withRouter(FormStartControls)')).not.to.be.false;
    expect(tree.subTree('withRouter(FormStartControls)').props.startPage).to.equal('testing');
    expect(tree.subTree('.usa-alert').text()).to.contain('6/12/2017 at');
    expect(tree.subTree('.usa-alert').text()).to.contain('will expire on');
  });
  it('should display verify link if user is not verified', () => {
    const tree = SkinDeep.shallowRender(
      <FormSaved formId={formId} lastSavedDate={lastSavedDate} expirationDate={expirationDate} route={route} user={user()}/>
    );

    expect(tree.everySubTree('.usa-alert').length).to.equal(2);
  });
  it('should not display verify link if user is verified', () => {
    const u = user();
    u.profile.verified = true;
    const tree = SkinDeep.shallowRender(
      <FormSaved formId={formId} lastSavedDate={lastSavedDate} expirationDate={expirationDate} route={route} user={u}/>
    );

    expect(tree.everySubTree('.usa-alert').length).to.equal(1);
  });
});
