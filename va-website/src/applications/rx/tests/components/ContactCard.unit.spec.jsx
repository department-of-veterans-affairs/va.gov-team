import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ContactCard from '../../components/ContactCard';

const props = {
  phoneNumber: 'phone',
  facilityName: 'ABC123',
};

describe('<ContactCard>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<ContactCard {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected class name', () => {
    const tree = SkinDeep.shallowRender(<ContactCard {...props}/>);

    expect(tree.props.className).to.equal('rx-contact-card');
  });

  it('should render expected link', () => {
    const tree = SkinDeep.shallowRender(<ContactCard {...props}/>);

    expect(tree.subTree('MessageProviderLink')).to.be.ok;
  });

  it('should render phone number if provided', () => {
    const tree = SkinDeep.shallowRender(<ContactCard {...props}/>);

    expect(tree.everySubTree('.rx-contact-header').pop().text()).to.equal('Facility number: ');
  });

  it('should not render phone number if not provided', () => {
    const tree = SkinDeep.shallowRender(<ContactCard {...props} phoneNumber={null}/>);

    expect(tree.everySubTree('.rx-contact-header').pop().text()).to.equal('Facility: ');
  });
});
