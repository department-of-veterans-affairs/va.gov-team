import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';

import FeedbackSubmitted from '../../components/FeedbackSubmitted';

describe('<FeedbackSubmitted/>', () => {

  it('should render with follow-up message', () => {
    const wrapper = enzyme.shallow(<FeedbackSubmitted formValues={{ shouldSendResponse: true }}/>);
    const text = wrapper.text();
    expect(text.includes('We’ll get back to you soon.')).to.be.true;
  });

  it('should render without follow-up message', () => {
    const wrapper = enzyme.shallow(<FeedbackSubmitted formValues={{ shouldSendResponse: false }}/>);
    const text = wrapper.text();
    expect(text.includes('We’ll get back to you soon.')).to.be.false;
  });

});
