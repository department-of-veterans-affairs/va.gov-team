import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import { Compose } from '../../containers/Compose';

const props = {
  message: {
    attachments: [],
    body: makeField(''),
    category: makeField(''),
    recipient: makeField(''),
    subject: makeField('')
  },
  recipients: [],
  loading: {
    recipients: false
  },
  deleteConfirmModal: {
    visible: false
  },
  saveConfirmModal: {
    visible: false
  },

  // No-op function to override dispatch
  setMessageField: () => {},
  dispatch: () => {},
  router: {}
};

describe('Compose', () => {
  const tree = SkinDeep.shallowRender(<Compose {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
