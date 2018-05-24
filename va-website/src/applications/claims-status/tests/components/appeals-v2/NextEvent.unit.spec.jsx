import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NextEvent from '../../../components/appeals-v2/NextEvent';

const defaultProps = {
  title: 'Additional evidence',
  description: `VBA must reveiw any additional evidence you submit prios to certifying
  your appeal to the Board of Veterans’ Appeals. This evidence could cause VBA
  to grant your appeal, but if not, they will need to produce an additional
  Statement of the Case.`,
  durationText: '11 months',
  cardDescription: 'Test description',
  showSeparator: true
};

describe('<NextEvent/>', () => {
  it('should render', () => {
    const wrapper = shallow(<NextEvent {...defaultProps}/>);
    expect(wrapper.type()).to.equal('li');
  });

  it('should render a separator when prop true', () => {
    const wrapper = shallow(<NextEvent {...defaultProps}/>);
    expect(wrapper.find('.sidelines').length).to.equal(1);
  });

  it('should not render a separator when prop false', () => {
    const props = { ...defaultProps, showSeparator: false };
    const wrapper = shallow(<NextEvent {...props}/>);
    expect(wrapper.find('.sidelines').length).to.equal(0);
  });

});
