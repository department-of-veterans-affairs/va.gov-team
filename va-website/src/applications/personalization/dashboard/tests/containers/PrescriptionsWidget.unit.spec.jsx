import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { PrescriptionsWidget } from '../../containers/PrescriptionsWidget';

const props = {
  canAccessRx: true,
  prescriptions: [
    {
      id: '13568747',
      type: 'prescriptions',
      attributes: {
        prescriptionId: 13568747,
        prescriptionNumber: '2719536',
        prescriptionName: 'SIROLIMUS 1MG TAB',
        refillStatus: 'refillinprocess',
        refillSubmitDate: '2018-05-28T23:27:53.000Z',
        refillDate: '2018-03-28T05:00:00.000Z',
        refillRemaining: 5,
        facilityName: 'DAYT29',
        orderedDate: '2016-05-24T04:00:00.000Z',
        quantity: 10,
        expirationDate: '2017-05-25T04:00:00.000Z',
        dispensedDate: '2016-09-07T04:00:00.000Z',
        stationNumber: '989',
        isRefillable: false,
        isTrackable: false
      },
      links: {
        self: 'http://www.example.com/v0/prescriptions/13568747'
      }
    },
  ],
};

describe('<PrescriptionsWidget>', () => {
  it('should not render if rx is inaccessible', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionsWidget/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.equal(null);
  });

  it('should render if rx is accessible', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionsWidget {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should render rx', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionsWidget {...props}/>);
    expect(tree.everySubTree('PrescriptionCard').length).to.equal(1);
  });

  it('should render error state', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionsWidget {...{ canAccessRx: true }}/>);
    const errorState = tree.dive(['p']);
    expect(errorState.text()).to.have.string('We couldn’t retrieve your prescriptions.');
  });

  it('should render empty state properly', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionsWidget { ...{ canAccessRx: true, prescriptions: [] }}/>);
    const emptyState = tree.dive(['p']);
    expect(emptyState.text()).to.have.string('We haven’t refilled or shipped any prescriptions for you in the last 30 days.');
  });
});
