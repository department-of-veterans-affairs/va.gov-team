import React from 'react';
import { shallow } from 'enzyme';
import { axeCheck } from '../../../../lib/testing/helpers';
import { expect } from 'chai';

import AlertBox from './AlertBox.jsx';

// Placeholder for required "content" element
const Content = (<p/>);
const Headline = 'Headline';
function closeAlert() {
  //
}

describe('<AlertBox />', () => {
  it('should be an empty div if invisible', () => {
    const wrapper = shallow(<AlertBox
      content={Content}
      status="info"
      isVisible={false}/>);
    expect(wrapper.html()).to.equal('<div aria-live="polite"></div>');
  });

  it('should have the expected classname', () => {
    const wrapper = shallow(<AlertBox
      content={Content}
      status="info"
      isVisible/>);
    expect(wrapper.find('.usa-alert').hasClass('usa-alert-info')).to.equal(true);
  });

  it('should pass aXe check when visible', () => {
    return axeCheck(<AlertBox
      content={Content}
      status="info"
      isVisible/>);
  });

  it('should pass aXe check when not visible', () => {
    return axeCheck(<AlertBox
      content={Content}
      status="info"
      isVisible={false}/>);
  });

  it('should pass aXe check without a headline', () => {
    return axeCheck(<AlertBox
      content={Content}
      status="info"
      isVisible/>);
  });

  it('should pass aXe check with a headline', () => {
    return axeCheck(<AlertBox
      headline={Headline}
      content={Content}
      status="info"
      isVisible/>);
  });

  it('should pass aXe check when it has a close button', () => {
    return axeCheck(<AlertBox
      headline={Headline}
      content={Content}
      onCloseAlert={closeAlert()}
      status="info"
      isVisible/>);
  });
});
