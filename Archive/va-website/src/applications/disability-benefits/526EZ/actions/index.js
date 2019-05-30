/* eslint-disable no-unused-vars */
import { apiRequest } from '../../../../platform/utilities/api';
import { fetchInProgressForm } from '../../../common/schemaform/save-in-progress/actions';

export const ITFStatuses = Object.freeze({
  active: 'active',
  claim_received: 'claim_received', // eslint-disable-line camelcase
  duplicate: 'duplicate',
  expired: 'expired',
  pending: 'pending',
  incomplete: 'incomplete'
});


// TODO: replace mock once ITF endpoint setup
export function submitIntentToFile(formConfig, onChange) {
  const { intentToFileUrl, formId, migrations, prefillTransformer } = formConfig;
  let ITFStatus = ITFStatuses.pending;
  return dispatch => {

    onChange(ITFStatus);

    const delay = (ms) => new Promise((resolve, reject) => {
      ITFStatus = ITFStatuses.active;
      onChange({ ITFStatus });

      // TODO: if the backend handles resubmission, this check can be removed
      if (ITFStatus === ITFStatuses.active) {
        setTimeout(resolve, ms);
      } else {
        const errorMessage = 'Network request failed';
        onChange({
          ITFStatus,
          errorMessage
        });
        reject(errorMessage);
      }
    });

    return delay(2000);
  };
}

//   apiRequest(
//     `${intentToFileUrl}`,
//     null,
//     ({ data }) => {
//       const ITFStatus = data.attributes.ITFStatus
//       onChange({ ITFStatus });
//       return ITFStatus === 'active';
//     },
//     ({ errors }) => {
//       const errorMessage = 'Network request failed';
//       onChange({
//         ITFStatus,
//         errorMessage
//       });
//       Raven.captureMessage(`vets_itf_error: ${errorMessage}`);
//     }
//   );
// };
// }
/* eslint-enable */

