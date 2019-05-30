import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { Details } from '../../containers/Details';
import { prescriptions, trackings } from '../rx-helpers.js';

const item = prescriptions.data[0];

const props = {
  prescription: {
    rx: item,
    trackings: trackings.data
  },

  openGlossaryModal: () => {},
  openRefillModal: () => {}
};

describe('<Details>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<Details {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should render details', () => {
    const tree = SkinDeep.shallowRender(<Details {...props}/>);
    expect(tree.dive(['#rx-info'])).to.be.ok;
  });

  it('should render a contact card', () => {
    const tree = SkinDeep.shallowRender(<Details {...props}/>);
    const contactCard = tree.subTree('ContactCard');
    expect(contactCard).to.be.ok;
    expect(contactCard.props.facilityName)
      .to.equal(item.attributes.facilityName);
    expect(contactCard.props.phoneNumber)
      .to.equal(props.prescription.trackings[0].attributes.rxInfoPhoneNumber);
  });
});
