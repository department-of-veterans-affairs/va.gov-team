import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { openGlossaryModal, openRefillModal } from '../actions/modals';
import ContactCard from '../components/ContactCard';
import GlossaryLink from '../components/GlossaryLink';
import SubmitRefill from '../components/SubmitRefill';
import TableVerticalHeader from '../components/tables/TableVerticalHeader';
import { rxStatuses } from '../config';
import { formatDate } from '../utils/helpers';

export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.makeContactCard = this.makeContactCard.bind(this);
    this.makeInfo = this.makeInfo.bind(this);
  }

  makeContactCard() {
    const { prescription } = this.props;

    const facilityName = _.get(
      prescription,
      ['rx', 'attributes', 'facilityName']
    );

    const phoneNumber = _.get(
      prescription,
      ['trackings', '0', 'attributes', 'rxInfoPhoneNumber']
    );

    return (
      <ContactCard
        facilityName={facilityName}
        phoneNumber={phoneNumber}/>
    );
  }

  makeInfo() {
    const attrs = _.get(this.props.prescription, 'rx.attributes', {});
    const status = rxStatuses[attrs.refillStatus];

    const data = {
      'Prescription #': attrs.prescriptionNumber,

      Quantity: attrs.quantity,

      'Prescription status': status ? (
        <GlossaryLink
          term={status}
          onClick={this.props.openGlossaryModal}/>
      ) : null,

      'Last fill date': formatDate(
        attrs.refillDate,
        { validateInPast: true }
      ),

      'Expiration date': formatDate(attrs.expirationDate),

      Refills: `${attrs.refillRemaining} remaining`
    };

    let refillButton;

    if (attrs.isRefillable) {
      refillButton = (
        <SubmitRefill
          className="rx-prescription-button"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.openRefillModal(attrs);
          }}
          refillId={attrs.id}
          text="Refill Prescription"/>
      );
    }

    return (
      <div id="rx-info">
        <TableVerticalHeader
          className="usa-table-borderless rx-table"
          data={data}/>
        {refillButton}
      </div>
    );
  }

  render() {
    return (
      <div id="rx-details" className="va-tab-content">
        <div className="row">
          <div className="columns usa-width-two-thirds medium-8 small-12">
            {this.makeInfo()}
          </div>
          <div className="columns usa-width-one-third medium-4 small-12">
            {this.makeContactCard()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const rxState = state.health.rx;
  return { prescription: rxState.prescriptions.currentItem };
};

const mapDispatchToProps = {
  openGlossaryModal,
  openRefillModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
