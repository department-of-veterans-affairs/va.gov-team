import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import SaveStatus from '../../../../src/applications/common/schemaform/save-in-progress/SaveStatus.jsx';
import { SAVE_STATUSES } from '../../../../src/applications/common/schemaform/save-in-progress/actions';

describe('<SaveStatus>', () => {
  const props = {
    form: {
      formId: '1010ez',
      lastSavedDate: 1505770055
    },
    user: {
      login: {
        currentlyLoggedIn: true
      }
    }
  };
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
  it('should show last saved date', () => {
    props.form.autoSavedStatus = SAVE_STATUSES.success;
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    expect(tree.text()).to.have.string('Application has been saved.');
  });
  it('should show saving', () => {
    props.form.autoSavedStatus = SAVE_STATUSES.pending;
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    expect(tree.text()).to.have.string('Saving...');
  });
  it('should not show a status for an unsaved form', () => {
    props.form.autoSavedStatus = undefined;
    props.form.lastSavedDate = undefined;
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    expect(tree.text()).to.not.have.string('Application has been saved.');
    expect(tree.text()).to.not.have.string('Saving...');
  });
  it('should show session expired error', () => {
    props.form.autoSavedStatus = SAVE_STATUSES.noAuth;
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    expect(tree.text()).to.have.string('no longer signed in');
  });
  it('should show client error', () => {
    props.form.autoSavedStatus = SAVE_STATUSES.clientFailure;
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    expect(tree.text()).to.have.string('unable to connect');
  });
  it('should show regular error', () => {
    props.form.autoSavedStatus = SAVE_STATUSES.failure;
    const tree = SkinDeep.shallowRender(<SaveStatus {...props}/>);
    expect(tree.text()).to.have.string('having some issues');
  });
});
