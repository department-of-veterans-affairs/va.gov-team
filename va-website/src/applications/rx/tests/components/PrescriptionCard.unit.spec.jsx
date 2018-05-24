import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import PrescriptionCard from '../../components/PrescriptionCard';

const samplePrescription = {
  id: '746575',
  type: 'va-rx-prescriptions',
  attributes: {
    prescriptionId: 746575,
    prescriptionNumber: '2719083',
    prescriptionName: 'ACETAMINOPHEN 325MG TAB',
    refillStatus: 'active',
    refillSubmitDate: null,
    refillDate: '2014-01-24T05:00:00.000Z',
    refillRemaining: 5,
    facilityName: 'ABC123',
    orderedDate: '2014-01-24T05:00:00.000Z',
    quantity: 10,
    expirationDate: '2015-01-25T05:00:00.000Z',
    dispensedDate: null,
    stationNumber: '12',
    isRefillable: false,
    isTrackable: false
  },
  links: {
    self: 'http://localhost:3000/rx/v1/prescriptions/746575',
    tracking: 'http://localhost:3000/rx/v1/prescriptions/746575/trackings'
  }
};

const props = {
  ...samplePrescription,
  glossaryModalHandler: () => {},
  refillModalHandler: () => {},
  dispatch: () => {}
};

describe('<PrescriptionCard>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionCard {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should render tracking link if applicable', () => {
    const newProps = {
      ...props,
      attributes: {
        ...props.attributes,
        isTrackable: true,
      },
    };

    const tree = SkinDeep.shallowRender(<PrescriptionCard {...newProps}/>);
    expect(tree.subTree('TrackPackageLink')).to.be.ok;
  });

  it('should not render tracking link if not applicable', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionCard {...props}/>);
    expect(tree.subTree('TrackPackageLink')).to.be.false;
  });

  it('should show Message Provider link when no refills remaining', () => {
    const newProps = {
      ...props,
      attributes: {
        ...props.attributes,
        refillRemaining: 0,
      },
    };

    const tree = SkinDeep.shallowRender(<PrescriptionCard {...newProps}/>);
    expect(tree.subTree('.rx-call-provider')).to.be.ok;
  });

  it('should not show Message Provider link if refills remaining', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionCard {...props}/>);
    expect(tree.subTree('.rx-call-provider')).to.be.false;
  });

  it('should show SubmitRefill button if refillable', () => {
    const newProps = {
      ...props,
      attributes: {
        ...props.attributes,
        isRefillable: true,
      },
    };

    const tree = SkinDeep.shallowRender(<PrescriptionCard {...newProps}/>);
    expect(tree.subTree('SubmitRefill')).to.be.ok;
  });

  it('should show refill status if not refillable', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionCard {...props}/>);
    expect(tree.subTree('.rx-prescription-status')).to.be.ok;
    expect(tree.subTree('GlossaryLink')).to.be.ok;
  });

  it('should show refillsRemainingCounter with correct props', () => {
    const tree = SkinDeep.shallowRender(<PrescriptionCard {...props}/>);
    const refillsRemainingCounter = tree.subTree('RefillsRemainingCounter');

    expect(refillsRemainingCounter).to.not.be.false;
    expect(refillsRemainingCounter.props.remaining)
      .to.equal(props.attributes.refillRemaining);
  });
});
