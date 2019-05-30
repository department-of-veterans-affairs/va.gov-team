import _ from 'lodash';
import { Link } from 'react-router';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { getStatusContents } from '../../../claims-status/utils/appeals-v2-helpers';


// TODO: Get a proper mapping of programArea -> display output
const appealTypeMap = {
  compensation: 'Compensation',
  pension: 'Pension',
  insurance: 'Insurance',
  loan_guaranty: 'Loan Guaranty', // eslint-disable-line
  education: 'Education',
  vre: 'VRE',
  medical: 'Medical',
  burial: 'Burial',
  bva: 'BVA',
  other: 'Other',
  multiple: 'Multiple',
};


export default function AppealListItem({ appeal, name }) {
  const { status } = appeal.attributes;
  // always show merged event on top
  const events = _.orderBy(appeal.attributes.events, [e => e.type === 'merged', e => moment(e.date).unix()], ['desc', 'desc']);
  const firstEvent = events[events.length - 1];
  const lastEvent = events[0];

  return (
    <div className="claim-list-item-container">
      <h3 className="claim-list-item-header-v2">
        Appeal of {appealTypeMap[appeal.attributes.programArea]} - Decision Received {moment(firstEvent.date).format('MMMM D, YYYY')}
      </h3>
      <div className="card-status">
        <p><strong>{moment(lastEvent.date).format('MMM D')}</strong> - {getStatusContents(status.type, status.details, name).title}</p>
      </div>
      <p>
        <Link className="usa-button usa-button-primary" href={`/track-claims/appeals/${appeal.id}/status`}>View appeal<i className="fa fa-chevron-right"/></Link>
      </p>
    </div>
  );
}

AppealListItem.propTypes = {
  appeal: PropTypes.shape({
    attributes: PropTypes.shape({
      status: PropTypes.shape({
        type: PropTypes.string.isRequired,
        details: PropTypes.object,
      }).isRequired,
      events: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })),
      programArea: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      issues: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired
    })
  }),
  name: PropTypes.shape({
    first: PropTypes.string,
    middle: PropTypes.string,
    last: PropTypes.string
  })
};
