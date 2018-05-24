import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AppealsV2DetailPage from '../../../containers/AppealsV2DetailPage';
import { mockData } from '../../../utils/helpers';

describe('<AppealsV2DetailPage/>', () => {
  const defaultProps = { appeal: mockData.data[0] };

  it('renders', () => {
    const wrapper = shallow(<AppealsV2DetailPage {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('renders the <Issues/> component', () => {
    const wrapper = shallow(<AppealsV2DetailPage {...defaultProps}/>);
    expect(wrapper.find('Issues').length).to.equal(1);
  });
});
