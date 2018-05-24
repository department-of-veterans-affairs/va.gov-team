import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DocketCard from './DocketCard';
import { APPEAL_TYPES } from '../../utils/appeals-v2-helpers';

/**
 * @param {Number} ahead - The number of appeals ahead of this one
 * @param {Number} total - The total number of appeals in the docket line
 * @param {String} form9Date - The date the form 9 was sent in (or something)
 * @param {String} docketMonth- The month that the board is looking at (or older)
 * @param {String} appealType - The type of appeal
 * @param {Bool}   aod - Whether the appeal is Advanced on Docket
 * @param {Bool}   front - Whether the appeal is at the front of the docket
 */
function Docket({ ahead, total, form9Date, docketMonth, appealType, aod, front: frontOfDocket }) {
  // TODO: Assess how accessible this is

  const form9DateFormatted = moment(form9Date, 'YYYY-MM-DD').format('MMMM YYYY');
  const docketMonthFormatted = moment(docketMonth, 'YYYY-MM-DD').format('MMMM YYYY');

  let content;
  if (aod) {
    // AoD (Advanced on Docket) should over-ride post-CAVC remand and default content
    content = (
      <div>
        <p>Your appeal is Advanced on Docket. This could be because you are older than 75, because you are suffering a serious illness or are in financial distress, or for other sufficient cause.</p>
        <p>Advanced on Docket appeals are prioritized so that they are always at the front of the line. Your appeal will be sent to a judge as soon as it is ready for their review.</p>
      </div>
    );
  } else if (appealType === APPEAL_TYPES.postCavcRemand) {
    // Post-CAVC remand should over-ride default content but not AoD
    content = <p>Your appeal was remanded by the Court of Appeals for Veterans’ Claims. Court Remand appeals are prioritized so that they are always at the front of the line. Your appeal will be sent to a judge as soon as it is ready for their review.</p>;
  } else {
    const yourPlaceText = frontOfDocket
      ? <p>The Board is currently reviewing appeals from {docketMonthFormatted} or older. Your appeal is eligible to be sent to a judge when it is ready for their review.</p>
      : <p>There are {total.toLocaleString()} appeals on the docket, not including Advanced on Docket and Court Remand appeals. Some of these appeals are not ready to be sent to a judge. A judge will begin work on your appeal when it is among the oldest appeals that are ready for their review. The Board is currently reviewing appeals from {docketMonthFormatted} or older.</p>;

    content = (
      <div>
        <p>The Board of Veterans’ Appeals reviews cases in the order they are received. When you completed a VA Form 9 in {form9DateFormatted}, your appeal was added to the Board’s docket, securing your spot in line.</p>
        {yourPlaceText}
        <DocketCard total={total} ahead={ahead}/>
        <h2>Is there a way to prioritize my appeal?</h2>
        <p>If you are suffering a serious illness or are in financial distress, or for other sufficient cause, you can apply to have your appeal <strong>Advanced on Docket</strong>. If you are older than 75, your appeal will receive this status automatically. Advanced on Docket appeals are prioritized so that they are always at the front of the line.</p>
        <p><a target="_blank" href="/disability-benefits/claims-appeal/request-a-priority-review/">Learn more about requesting Advanced on Docket status.</a></p>
      </div>
    );
  }

  return (
    <div>
      <h2>How long until a judge is ready for your appeal?</h2>
      {content}
    </div>
  );
}

Docket.propTypes = {
  ahead: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  form9Date: PropTypes.string.isRequired,
  docketMonth: PropTypes.string,
  appealType: PropTypes.string,
  aod: PropTypes.bool,
  front: PropTypes.bool,
};

export default Docket;
