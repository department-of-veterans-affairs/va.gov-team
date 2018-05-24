import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import ConfirmRefillModal from '../../components/ConfirmRefillModal';

const props = {
  prescription: {
    prescriptionId: 746575,
    prescriptionNumber: '2719083',
    prescriptionName: 'ACETAMINOPHEN 325MG TAB',
    refillSubmitDate: null,
    facilityName: 'ABC123',
  },
  onCloseModal: f => f
};

describe('<ConfirmRefillModal>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<ConfirmRefillModal {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected id', () => {
    const tree = SkinDeep.shallowRender(<ConfirmRefillModal {...props}/>);

    expect(tree.props.id).to.equal('rx-confirm-refill');
  });

  it('should render a Modal', () => {
    const tree = SkinDeep.shallowRender(<ConfirmRefillModal {...props}/>);

    expect(tree.subTree('Modal')).to.be.ok;
  });

  it('should call refillPrescription correctly', () => {
    const refillPrescription = sinon.spy();

    const confirmRefillModal = ReactTestUtils.renderIntoDocument(
      <ConfirmRefillModal
        {...props}
        refillPrescription={refillPrescription}/>
    );

    confirmRefillModal.handleConfirmRefill({ preventDefault: () => {} });
    expect(refillPrescription.calledWith(props.prescription)).to.be.true;
  });

  it('should call onCloseModal correctly', () => {
    const onCloseModal = sinon.spy();

    const confirmRefillModal = ReactTestUtils.renderIntoDocument(
      <ConfirmRefillModal
        {...props}
        onCloseModal={onCloseModal}/>
    );

    confirmRefillModal.handleCloseModal({ preventDefault: () => {} });
    expect(onCloseModal.called).to.be.true;
  });
});
