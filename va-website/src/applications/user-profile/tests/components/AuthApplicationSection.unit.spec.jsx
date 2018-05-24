import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import AuthApplicationSection from '../../components/AuthApplicationSection';

describe('<AuthApplicationSection>', () => {
  const props = {
    userProfile: {
      services: [
        'facilities',
        'hca',
        'edu-benefits',
        'rx',
        'messaging',
        'health-records',
        'evss-claims',
        'user-profile',
        'appeals-status',
        'form-save-in-progress',
        'form-prefill',
        'id-card'
      ]
    },
  };

  let windowOpen;
  let oldWindow;

  const setup = () => {
    oldWindow = global.window;
    windowOpen = sinon.stub().returns({ focus: f => f });
    global.window = {
      open: windowOpen,
      dataLayer: []
    };
  };

  const takeDown = () => {
    global.window = oldWindow;
  };

  before(setup);
  after(takeDown);

  it('should render', () => {
    const wrapper = shallow(<AuthApplicationSection {...props}/>);
    expect(wrapper.type()).to.equal('div');
  });
});
