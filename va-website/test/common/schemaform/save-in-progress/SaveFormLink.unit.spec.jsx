import React from 'react';
import _ from 'lodash/fp';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import SaveFormLink from '../../../../src/applications/common/schemaform/save-in-progress/SaveFormLink';
import { SAVE_STATUSES } from '../../../../src/applications/common/schemaform/save-in-progress/actions';

describe('Schemaform <SaveFormLink>', () => {
  const user = {
    login: {
      currentlyLoggedIn: false
    }
  };
  const loggedInUser = {
    profile: {
      userFullName: 'something'
    },
    login: {
      currentlyLoggedIn: true
    }
  };
  const form = {
    formId: 'test',
    version: 1,
    data: {},
    trackingPrefix: 'test-',
    savedStatus: SAVE_STATUSES.notAttempted
  };
  // Define these spies out here because they are only used to satisfy the
  //  prop requirements; they're only passed to LoginModal which we test elsewhere
  const saveInProgressForm = sinon.spy();
  const toggleLoginModalSpy = sinon.spy();
  it('should render save message when not logged in', () => {
    const tree = SkinDeep.shallowRender(
      <SaveFormLink
        user={user}
        form={form}
        toggleLoginModal={toggleLoginModalSpy}/>
    );

    expect(tree.text()).to.contain('Save and finish this application later');
  });
  it('should render finish message when logged in', () => {
    const tree = SkinDeep.shallowRender(
      <SaveFormLink
        user={loggedInUser}
        form={form}/>
    );

    expect(tree.text()).to.contain('Finish this application later');
  });
  it('should render expired message when not logged in and noAuth status', () => {
    const tree = SkinDeep.shallowRender(
      <SaveFormLink
        user={user}
        form={_.assign(form, { savedStatus: SAVE_STATUSES.noAuth })}
        toggleLoginModal={toggleLoginModalSpy}/>
    );

    expect(tree.text()).to.contain('Sorry, you’re signed out.');
    expect(tree.subTree('a')).not.to.be.null;
  });
  it('should render save message when logged in', () => {
    const tree = SkinDeep.shallowRender(
      <SaveFormLink
        user={loggedInUser}
        form={form}
        toggleLoginModal={toggleLoginModalSpy}/>
    );

    expect(tree.text()).to.contain('Finish this application later');
  });
  it('should show error message', () => {
    const tree = SkinDeep.shallowRender(
      <SaveFormLink
        user={user}
        form={_.assign(form, { savedStatus: SAVE_STATUSES.failure })}
        toggleLoginModal={toggleLoginModalSpy}/>
    );

    expect(tree.text()).to.contain('Something went wrong');
    expect(tree.subTree('button').text()).to.contain('Save and finish this application later');
  });
  it('should show client error message', () => {
    const tree = SkinDeep.shallowRender(
      <SaveFormLink
        user={user}
        form={_.assign(form, { savedStatus: SAVE_STATUSES.clientFailure })}
        toggleLoginModal={toggleLoginModalSpy}/>
    );

    expect(tree.text()).to.contain('connect to Vets.gov');
    expect(tree.subTree('button').text()).to.contain('Save and finish this application later');
  });
  it('should call saveInProgressForm if logged in', () => {
    saveInProgressForm.reset(); // Just because it's good practice for a shared spy
    const tree = ReactTestUtils.renderIntoDocument(
      // Wrapped in a div because I SaveFormLink only returns an anchor and I
      //  didn't want to just .click() the tree (if that would even work).
      <div>
        <SaveFormLink
          user={loggedInUser}
          form={form}
          saveInProgressForm={saveInProgressForm}
          toggleLoginModal={toggleLoginModalSpy}/>
      </div>
    );
    const findDOM = findDOMNode(tree);

    // "Save" the form
    findDOM.querySelector('button').click();

    expect(saveInProgressForm.called);
  });
});
