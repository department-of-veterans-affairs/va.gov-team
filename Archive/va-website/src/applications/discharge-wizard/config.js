import * as options from '../../platform/static-data/options-for-select';

export const labels = {
  drb: 'Discharge Review Board',
  bcmr: 'Board for Correction of Military Records (BCMR)',
  bcnr: 'Board for Correction of Naval Records (BCNR)',
};

export const venueWarning = 'You answered that you weren\'t sure where you applied for an upgrade before. The instructions below are for Veterans who have never applied for a discharge upgrade, so your process may be different. For more reliable information on your discharge upgrade process, please review your records to find out which board you sent your earlier application to, and complete the questions again.';

export const upgradeVenueWarning = 'You answered that you weren\'t sure where you applied for an upgrade before. The instructions below are for Veterans who had a successful upgrade application reviewed by the [branch of service] Discharge Review Board (DRB). For more reliable information, please review your records to find out which board you sent your earlier application to, and complete the questions again.';

/* eslint-disable quote-props */
export const questionLabels = {
  '4_reason': {
    '1': 'I suffered from an undiagnosed, misdiagnosed, or untreated mental health condition, including posttraumatic stress disorder (PTSD), while in the service. I was discharged for reasons related to this condition.',
    '2': 'I suffered from an undiagnosed, misdiagnosed, or untreated Traumatic Brain Injury (TBI) while in the service. I was discharged for reasons related to this condition.',
    '3': 'I was discharged due to my sexual orientation (including under the Don’t Ask, Don’t Tell policy).',
    '4': 'I was the victim of sexual assault or harassment in the service, and was discharged for reasons related to this incident.',
    '5': 'I am transgender, and my discharge shows my birth name instead of my current name.',
    '6': 'There is an error on my discharge paperwork for other reasons.',
    '7': 'My discharge is unjust, and this is not related to any of the reasons listed above.',
    '8': 'I received a discharge upgrade or correction, but my upgrade came in the form of a DD215 and I want an updated DD214.',
  },
  '5_dischargeType': {
    '1': 'My discharge is honorable or general under honorable conditions, and I want only my narrative reason for discharge, separation code, or re-enlistment code changed.',
    '2': 'My discharge is not honorable or under honorable conditions.',
  },
  '6_intention': {
    '1': 'I want to change my name, discharge date, or something written in the “other remarks” section of my DD214. (This isn\'t common).',
    '2': 'I want to change only my characterization of discharge, re-enlistment code, separation code, and/or narrative reason for discharge.',
  },
  '2_dischargeYear': {},
  '3_dischargeMonth': {},
  '7_courtMartial': {
    '1': 'My discharge was the outcome of a general court-martial.',
    '2': 'My discharge was administrative or the outcome of a special or summary court-martial.',
    '3': 'I\'m not sure if my discharge was the outcome of a general court-martial.',
  },
  '1_branchOfService': {
    army: 'Army',
    navy: 'Navy',
    airForce: 'Air Force',
    coastGuard: 'Coast Guard',
    marines: 'Marine Corps',
  },
  '8_prevApplication': {
    '1': 'I have previously applied for a discharge upgrade for this period of service.',
    '2': 'I have not previously applied for a discharge upgrade for this period of service.',
  },
  '9_prevApplicationYear': {
    '1': 'or earlier',
    '2': 'after'
  },
  '10_prevApplicationType': {
    '1': 'I applied to a Discharge Review Board (DRB) for a Documentary Review.',
    '2': 'I applied to a Discharge Review Board (DRB) for a Personal Appearance Review in Washington, DC.',
    '3': 'I applied to a Board for Correction of Military/Naval Records (BCMR/BCNR).',
    '4': 'I\'m not sure what kind of discharge upgrade application I previously made.',
  },
  '11_failureToExhaust': {
    '1': 'The BCMR/BCNR denied my application due to “failure to exhaust other remedies.”',
    '2': 'The BCMR/BCNR denied my application for other reasons, such as not agreeing with the evidence in my application.',
  },
  '12_priorService': {
    '1': 'I have discharge paperwork documenting a discharge that is honorable or under honorable conditions.',
    '2': 'I completed a prior period of service, but I did not receive discharge paperwork from that period.',
    '3': 'I did not complete an earlier period of service.',
  }
};
/* eslint-enable quote-props */

export const prevApplicationYearCutoff = {
  1: 2014,
  2: 2014,
  3: 2011,
  4: 2017,
};

export const answerReview = (key, formValues) => {
  const ans = formValues[key];
  const dischargeYearLabel = prevApplicationYearCutoff[formValues['4_reason']];
  const monthObj = options.months.find(m => String(m.value) === formValues['3_dischargeMonth']);
  const dischargeMonth = monthObj && monthObj.label;

  switch (key) {
    case '4_reason':
      return questionLabels[key][ans];
    case '5_dischargeType':
      return questionLabels[key][ans];
    case '6_intention':
      return questionLabels[key][ans];
    case '2_dischargeYear':
      if (ans === '1991' && !formValues['3_dischargeMonth']) {
        return 'I was discharged before 1992';
      }
      return `I was discharged in ${dischargeMonth || ''} ${formValues[key]}`;
    case '7_courtMartial':
      return questionLabels[key][ans];
    case '1_branchOfService':
      return `I served in the ${questionLabels[key][ans]}`;
    case '8_prevApplication':
      return questionLabels[key][ans];
    case '9_prevApplicationYear':
      return `I made my previous application ${ans === '1' ? `${dischargeYearLabel} or earlier` : `after ${dischargeYearLabel}`}`;
    case '10_prevApplicationType':
      if (ans === '3') {
        if (['navy', 'marines'].includes(formValues['1_branchOfService'])) {
          return 'I applied to the Board for Correction of Naval Records (BCNR).';
        }
        return 'I applied to a Board for Correction of Military Records (BCMR).';
      }
      return questionLabels[key][ans];
    default:
      return questionLabels[key][ans];
  }
};
