import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Main } from '../../containers/Main';
import DefaultView from '../../components/DefaultView';
import FeedbackForm from '../../components/FeedbackForm';
import FeedbackSubmitted from '../../components/FeedbackSubmitted';

const defaultProps = {
  formIsVisible: false,
  formValues: {},
  formErrors: {},
  setFormValues() {},
  revealForm() {},
  requestPending: false,
  feedbackReceived: false,
  sendFeedback() {},
  clearError() {},
  errorMessage: null,
  formIsSubmittable: true
};

describe('<Main/>', () => {

  it('should render with DefaultView', () => {
    const wrapper = enzyme.shallow(<Main {...defaultProps}/>);
    expect(wrapper.find(DefaultView)).to.have.lengthOf(1);
  });

  it('should render FeedbackForm with correct props', () => {
    const sendFeedback = sinon.spy();
    const formValues = { description: 'test', email: 'test@test.com' };
    const overrides = { formIsVisible: true, formValues, sendFeedback };
    const props = { ...defaultProps, ...overrides };
    const wrapper = enzyme.shallow(<Main {...props}/>);
    const feedbackFormWrapper = wrapper.find(FeedbackForm);

    expect(feedbackFormWrapper).to.have.lengthOf(1);

    const event = { preventDefault: sinon.spy() };
    feedbackFormWrapper.dive().find('form').simulate('submit', event);

    expect(sendFeedback.calledOnce).to.be.true;
    expect(event.preventDefault.calledOnce).to.be.true;

    const calledWith = sendFeedback.args[0][0];
    expect(calledWith).to.contain.all.keys('description', 'email');
  });

  it('should render FeedbackSubmitted', () => {
    const props = { ...defaultProps, feedbackReceived: true };
    const wrapper = enzyme.shallow(<Main {...props}/>);
    expect(wrapper.find(FeedbackSubmitted)).to.have.lengthOf(1);
  });

});
