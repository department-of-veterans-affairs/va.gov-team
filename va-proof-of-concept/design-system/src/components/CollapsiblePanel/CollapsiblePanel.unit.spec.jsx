import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { axeCheck } from '../../../lib/testing/helpers';

import CollapsiblePanel from './CollapsiblePanel';

describe('<CollapsiblePanel>', () => {
  beforeEach(() => {
    window.VetsGov = {
      ...window.VetsGov,
      ...{
        scroll: false
      }
    };
  });

  it('should render the correct panel header', () => {
    const testHeaderText = 'Test panel';
    const wrapper = shallow(<CollapsiblePanel panelName={testHeaderText}/>);
    const renderedHeaderText = wrapper.find('.usa-accordion-button').render().text();
    expect(renderedHeaderText).to.equal(testHeaderText);
  });

  it('should handle toggling chapter', () => {
    const wrapper = shallow(<CollapsiblePanel panelName={'Test panel'}><div>Some content goes here.</div></CollapsiblePanel>);

    const toggleButton = wrapper.find('button');
    expect(wrapper.find('.usa-accordion-content').length).to.equal(0);

    toggleButton.simulate('click');
    expect(wrapper.find('.usa-accordion-content').length).to.equal(1);

    toggleButton.simulate('click');
    expect(wrapper.find('.usa-accordion-content').length).to.equal(0);
  });

  it('should default to open if startOpen prop is true', () => {
    const wrapper = shallow(<CollapsiblePanel panelName={'Test'} startOpen><div>Some content goes here.</div></CollapsiblePanel>);
    const toggleButton = wrapper.find('button');

    expect(wrapper.find('.usa-accordion-content').length).to.equal(1);

    toggleButton.simulate('click');
    expect(wrapper.find('.usa-accordion-content').length).to.equal(0);

    toggleButton.simulate('click');
    expect(wrapper.find('.usa-accordion-content').length).to.equal(1);
  });

  it('should call scrollToTop on toggle open', () => {
    const scrollSpy = sinon.spy();
    CollapsiblePanel.prototype.scrollToTop = scrollSpy;
    const wrapper = shallow(<CollapsiblePanel panelName={'Test'}/>);
    const button = wrapper.find('button');
    expect(scrollSpy.called).to.be.false;

    button.simulate('click');
    expect(scrollSpy.calledOnce).to.be.true;
  });

  it('should pass aXe check when closed', () => {
    return axeCheck(<CollapsiblePanel panelName={'Test'}/>);
  });

  it('should pass aXe check when open', () => {
    return axeCheck(<CollapsiblePanel panelName={'Test'} startOpen/>);
  });

  afterEach(() => {
    delete window.VetsGov.scroll;
  });
});
