import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../../lib/testing/helpers';

import HelpMenu from './HelpMenu.jsx';

describe('<HelpMenu>', () => {

  it('should render', () => {
    const props = {
      isOpen: false,
      clickHandler: f => f
    };

    const tree = shallow(<HelpMenu {...props}/>);
    expect(tree).to.have.length(1);
  });

  it('should pass axeCheck when open', () => {
    const props = {
      clickHandler: f => f
    };
    return axeCheck(<HelpMenu isOpen {...props}/>);
  });

  it('should pass axeCheck when closed', () => {
    const props = {
      clickHandler: f => f
    };
    return axeCheck(<HelpMenu isOpen={false} {...props}/>);
  });
});
