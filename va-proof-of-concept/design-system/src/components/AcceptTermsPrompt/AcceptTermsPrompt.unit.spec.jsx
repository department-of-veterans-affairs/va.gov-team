import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { axeCheck } from '../../../lib/testing/helpers';
import sinon from 'sinon';

import AcceptTermsPrompt from './AcceptTermsPrompt.jsx';

const defaultProps = {
  terms: {
    termsContent: 'content',
    name: 'mhvac',
    yesContent: 'yes content',
    title: 'Terms and Conditions'
  },
  onAccept: sinon.spy(),
  onCancel: sinon.spy()
};
describe('<AcceptTermsPrompt/>', () => {
  let wrapper;

  beforeEach(() => {
    window.dataLayer = [];
    window.scrollTo = () => {};
    wrapper = mount(<AcceptTermsPrompt {...defaultProps}/>).setState({
      scrolledToBottom: false,
      yesSelected: false
    });
  });
  it('should be empty if there is no content', () => {
    const tree = mount(<AcceptTermsPrompt terms={{}}/>);
    expect(tree.text()).to.equal('');
  });
  it('should render', () => {
    expect(wrapper.text()).to.contain(
      'Scroll to read the full terms and conditions to continuecontentyes contentSubmitCancel'
    );
  });
  it('should pass aXe check', () => {
    return axeCheck(
      <AcceptTermsPrompt terms={{}} onAccept={() => {}} onCancel={() => {}}/>
    );
  });
  it('should pass aXe check with default props', () => {
    return axeCheck(<AcceptTermsPrompt {...defaultProps}/>);
  });
  it('submit button should be disabled by default', () => {
    const submitButtonDisabled = wrapper.find('.usa-button-disabled');
    expect(submitButtonDisabled).to.have.lengthOf(1);
  });
  it('submit button should be enabled if state is valid', () => {
    wrapper.setState({
      yesSelected: true,
      scrolledToBottom: true
    });
    const submitButton = wrapper.find('.submit-button');
    expect(submitButton).to.have.lengthOf(1);
  });
  it('should call onAccept correctly', () => {
    wrapper.setState({
      yesSelected: true,
      scrolledToBottom: true
    });
    const submitButton = wrapper.find('.submit-button');
    submitButton.simulate('click');
    expect(defaultProps.onAccept.calledWith('mhvac')).to.be.true;
  });
  it('should call onCancel correctly', () => {
    const cancelButton = wrapper.find('.usa-button-secondary');
    cancelButton.simulate('click');
    expect(defaultProps.onCancel.calledOnce).to.be.true;
  });
});
