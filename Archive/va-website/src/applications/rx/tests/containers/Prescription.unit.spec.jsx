import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { Prescription } from '../../containers/Prescription';
import { prescriptions, trackings } from '../rx-helpers.js';

const item = prescriptions.data[0];

const props = {
  alert: {
    content: '',
    status: 'info',
    visible: false
  },
  loading: false,
  prescription: {
    rx: item,
    trackings: trackings.data
  },
  params: {
    id: item.id
  },

  closeAlert: () => {},
  loadPrescription: () => {}
};

describe('<Prescription>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<Prescription {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should display a loading screen', () => {
    const tree = SkinDeep.shallowRender(
      <Prescription {...props } loading prescription={null}/>
    );
    expect(tree.dive(['LoadingIndicator'])).to.be.ok;
    expect(tree.subTree('#rx-info')).to.be.false;
    expect(tree.subTree('#rx-order-history')).to.be.false;
    expect(tree.subTree('ContactCard')).to.be.false;
  });

  it('should display loader if prescription doesn\'t match route', () => {
    // Loading prop may not necessarily be true depending on race conditions
    // potentially caused by quickly loading pages of different prescriptions.
    const tree = SkinDeep.shallowRender(
      <Prescription {...props } params={{ id: 0 }}/>
    );
    expect(tree.dive(['LoadingIndicator'])).to.be.ok;
    expect(tree.subTree('#rx-info')).to.be.false;
    expect(tree.subTree('#rx-order-history')).to.be.false;
    expect(tree.subTree('ContactCard')).to.be.false;
  });

  it('should display an error message', () => {
    const tree = SkinDeep.shallowRender(
      <Prescription {...props } prescription={null}/>
    );
    expect(tree.dive(['.rx-loading-error'])).to.be.ok;
    expect(tree.subTree('#rx-info')).to.be.false;
    expect(tree.subTree('#rx-order-history')).to.be.false;
    expect(tree.subTree('ContactCard')).to.be.false;
  });

  it('should not display loader or error if there is a prescription', () => {
    const tree = SkinDeep.shallowRender(<Prescription {...props}/>);
    expect(tree.subTree('LoadingIndicator')).to.be.false;
    expect(tree.subTree('.rx-loading-error')).to.be.false;
  });

  it('should render header and details if there is a prescription', () => {
    const tree = SkinDeep.shallowRender(<Prescription {...props}/>);
    expect(tree.dive(['h1']).text()).to.equal(item.attributes.prescriptionName);
  });

  /*
  it('should not render order history table without tracking data', () => {
    const prescription = { rx: item, trackings: [] };
    const tree = SkinDeep.shallowRender(
      <Prescription {...props} prescription={prescription}/>
    );

    // Should still render the order history section with a disclaimer
    // about expiration of tracking data.
    const orderHistory = tree.dive(['#rx-order-history']);
    expect(orderHistory.subTree('OrderHistory')).to.be.false;
  });
  */
});
