import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { axeCheck } from '../../../../lib/testing/helpers';

import DropDown from './DropDownPanel.jsx';

describe('<DropDownPanel>', () => {
  let dropDown;
  let clickHandler;
  let div;
  let props;

  beforeEach(() => {
    sinon.spy(document.body, 'addEventListener');
    sinon.spy(document.body, 'removeEventListener');

    clickHandler = sinon.spy();

    props = {
      buttonText: 'Button text',
      clickHandler,
      cssClass: 'testClass',
      isOpen: true,
      icon: (<svg><rect x="50" y="50" width="50" height="50"/></svg>),
      id: 'testId'
    };

    div = document.createElement('div');
    div.setAttribute('id', 'dropdownContainer');
    document.body.appendChild(div);

    dropDown = mount(<DropDown {...props}><h1>Hi</h1></DropDown>, {
      attachTo: div
    });
  });

  afterEach(() => {
    document.body.addEventListener.restore();
    document.body.removeEventListener.restore();
    document.body.removeChild(div);
  });

  it('should render', () => {
    expect(dropDown.find('.va-dropdown-panel').text()).to.equal('Hi');
    expect(dropDown.find('.va-dropdown-trigger').text()).to.equal('Button text');
  });

  it('should register event listeners on the parent element', () => {
    expect(document.body.addEventListener.called).to.be.true;
  });

  it('should call clickHandler when the parent element\'s click event occurs', () => {
    expect(clickHandler.called).to.be.false;
    document.body.dispatchEvent(new window.MouseEvent('click'));
    expect(clickHandler.called).to.be.true;
  });

  it('should unregister event listeners on the parent element', () => {
    dropDown.unmount();
    expect(document.body.removeEventListener.called).to.be.true;
  });

  it('should pass axe check when open', () => {
    return axeCheck(
      <DropDown {...props} id="testId2"><h1>Hi</h1></DropDown>
    );
  });

  it('should pass axe check when closed', () => {
    return axeCheck(
      <DropDown {...props} id="testId2" isOpen={false}><h1>Hi</h1></DropDown>
    );
  });
});
