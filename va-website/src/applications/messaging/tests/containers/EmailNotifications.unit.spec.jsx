import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import 'babel-polyfill';

import { makeField } from '../../../../platform/forms/fields';
import { EmailNotifications } from '../../containers/EmailNotifications';

const props = {
  preferences: {
    emailAddress: makeField('test@vets.gov'),
    frequency: makeField('none')
  },
  isLoadingPreferences: false,
  isSavingPreferences: false
};

describe('<EmailNotifications>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<EmailNotifications {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should show a loading screen when getting preferences', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications {...props } isLoadingPreferences/>
    );
    expect(tree.subTree('LoadingIndicator')).to.be.ok;
  });

  it('should show a loading screen when saving preferences', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications {...props } isSavingPreferences/>
    );
    expect(tree.subTree('LoadingIndicator')).to.be.ok;
  });

  it('should disable save button when nothing has changed', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications {...props }/>
    );
    const formButtons = tree.dive(['.msg-notifications-save']);
    const saveButton = formButtons.dive(['.usa-button-disabled']);
    expect(saveButton.text()).to.eql('Save changes');
    expect(formButtons.subTree('.usa-button-secondary')).to.not.be.ok;
  });

  it('should enable save button and show cancel button if email is modified', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications
        {...props }
        preferences={{
          emailAddress: makeField('new.test@vets.gov', true),
          frequency: makeField('none')
        }}/>
    );
    const formButtons = tree.dive(['.msg-notifications-save']);
    const saveButton = formButtons.dive(['.usa-button']);
    const cancelButton = formButtons.dive(['.usa-button-secondary']);
    expect(saveButton.text()).to.eql('Save changes');
    expect(saveButton.props.disabled).to.be.false;
    expect(cancelButton.text()).to.eql('Cancel');
  });

  it('should enable save button and show cancel button if frequency is modified', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications
        {...props }
        preferences={{
          emailAddress: makeField('test@vets.gov'),
          frequency: makeField('daily', true)
        }}/>
    );
    const formButtons = tree.dive(['.msg-notifications-save']);
    const saveButton = formButtons.dive(['.usa-button']);
    const cancelButton = formButtons.dive(['.usa-button-secondary']);
    expect(saveButton.text()).to.eql('Save changes');
    expect(saveButton.props.disabled).to.be.false;
    expect(cancelButton.text()).to.eql('Cancel');
  });

  it('should hide frequency suboptions when notifications are off', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications {...props }/>
    );
    expect(tree.subTree('#notifications-on').props.checked).to.be.false;
    expect(tree.subTree('#notifications-off').props.checked).to.be.true;
    expect(tree.subTree('ErrorableRadioButtons')).to.not.be.ok;
  });

  it('should show frequency suboptions when notifications are on', () => {
    const tree = SkinDeep.shallowRender(
      <EmailNotifications
        {...props }
        preferences={{
          emailAddress: makeField('test@vets.gov'),
          frequency: makeField('each_message')
        }}/>
    );
    expect(tree.subTree('#notifications-on').props.checked).to.be.true;
    expect(tree.subTree('#notifications-off').props.checked).to.be.false;
    expect(tree.subTree('ErrorableRadioButtons').props.value.value).to.eql('each_message');
  });

  it('should hide email input if notifications are off', () => {
    const tree = SkinDeep.shallowRender(<EmailNotifications {...props }/>);
    expect(tree.subTree('ErrorableTextInput')).to.not.be.ok;
  });
});
