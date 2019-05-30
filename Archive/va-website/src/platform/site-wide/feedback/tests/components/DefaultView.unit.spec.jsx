import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';

import DefaultView from '../../components/DefaultView';

const props = {
  revealForm() {}
};

describe('<DefaultView/>', () => {

  it('should render', () => {
    const wrapper = enzyme.shallow(<DefaultView {...props}/>);
    const text = wrapper.text();
    expect(text.includes('Tell us what you think')).to.be.true;
  });

});
