import React from 'react';
import moment from 'moment';
import { questionLabels } from './config';

export const shouldShowQuestion = (currentKey, validQuestions) => {
  const lastQuestion = validQuestions[validQuestions.length - 1];
  const num = currentKey.split('_')[0];
  const nextNum = lastQuestion.split('_')[0];

  const isValid = validQuestions.indexOf(currentKey) > -1;
  const isNotFutureQuestion = parseInt(num, 10) <= parseInt(nextNum, 10);
  const formIsComplete = lastQuestion === 'END';

  return isValid && (isNotFutureQuestion || formIsComplete);
};

export const branchOfService = (key) => {
  return questionLabels['1_branchOfService'][key === 'marines' ? 'navy' : key];
};

export const board = (formValues, noDRB) => {
  const prevAppType = ['1', '4'].indexOf(formValues['10_prevApplicationType']) > -1;
  const noPrevApp = formValues['8_prevApplication'] === '2';
  const preAppDateBefore = formValues['9_prevApplicationYear'] === '1';
  const courtMartial = formValues['7_courtMartial'] === '1';
  const transgender = formValues['4_reason'] === '5';
  const intention = formValues['6_intention'] === '1';
  const dischargeYear = formValues['2_dischargeYear'];
  const dischargeMonth = formValues['3_dischargeMonth'] || 1;
  const oldDischarge = moment().diff(moment([dischargeYear, dischargeMonth]), 'years', true) >= 15;
  const failureToExhaust = formValues['11_failureToExhaust'] === '1';

  let boardObj = { name: 'Board for Correction of Naval Records (BCNR)', abbr: 'BCNR' };
  if (['army', 'airForce', 'coastGuard'].indexOf(formValues['1_branchOfService']) > -1) {
    boardObj = { name: 'Board for Correction of Military Records (BCMR)', abbr: 'BCMR' };
  }

  // short circuit condition for prior period of service response
  if (noDRB) { return boardObj; }

  if (noPrevApp || preAppDateBefore || prevAppType || failureToExhaust) {
    if (courtMartial || transgender || intention || oldDischarge) {
      return boardObj;
    }
    return { name: 'Discharge Review Board (DRB)', abbr: 'DRB' };
  }

  return boardObj;
};

export const venueAddress = (formValues, noDRB) => {
  const boardData = board(formValues);
  if (!noDRB && boardData && boardData.abbr === 'DRB') {
    switch (formValues['1_branchOfService']) {
      case 'army':
        return (
          <p className="va-address-block">
            Army Review Boards Agency<br/>
            251 18th Street South<br/>
            Suite 385<br/>
            Arlington, VA 22202-3531<br/>
          </p>
        );
      case 'airForce':
        return (
          <p className="va-address-block">
            Air Force Review Boards Agency<br/>
            SAF/MRBR<br/>
            550-C Street West, Suite 40<br/>
            Randolph AFB, TX 78150-4742<br/>
          </p>
        );
      case 'coastGuard':
        return (
          <p className="va-address-block">
            Commandant (CG-133)<br/>
            Attn: Office of Military Personnel<br/>
            US Coast Guard Stop 7907<br/>
            2703 Martin Luther King, Jr. Ave., S.E.<br/>
            Washington, DC 20593-7907<br/>
          </p>
        );
      default: // Navy or Marines
        return (
          <p className="va-address-block">
            Secretary of the Navy Council of Review Boards<br/>
            ATTN: Naval Discharge Review Board<br/>
            720 Kennon Ave S.E., Suite 309<br/>
            Washington Navy Yard, DC 20374-5023<br/>
          </p>
        );
    }
  } else {
    switch (formValues['1_branchOfService']) {
      case 'army':
        return (
          <p className="va-address-block">
            Army Review Boards Agency<br/>
            251 18th Street South<br/>
            Suite 385<br/>
            Arlington, VA 22202-3531<br/>
          </p>
        );
      case 'airForce':
        return (
          <p className="va-address-block">
            Board for Correction of Air Force Records<br/>
            SAF/MRBR<br/>
            550-C Street West, Suite 40<br/>
            Randolph AFB, TX 78150-4742<br/>
          </p>
        );
      case 'coastGuard':
        return (
          <p className="va-address-block">
            Department of Homeland Security<br/>
            Office of the General Counsel<br/>
            Board for Correction of Military Records<br/>
            245 Murray Lane, Stop 0485<br/>
            Washington, DC 20528-0485<br/>
          </p>
        );
      default: // Navy or Marines
        return (
          <p className="va-address-block">
            Board for Correction of Naval Records (BCNR)<br/>
            701 S. Courthouse Road, Suite 1001<br/>
            Arlington, VA 22204-2490<br/>
          </p>
        );
    }
  }
};

export const formData = (formValues) => {
  const boardData = board(formValues);
  if (boardData && boardData.abbr === 'DRB') {
    return {
      num: 293,
      link: 'http://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0293.pdf',
    };
  }
  return {
    num: 149,
    link: 'http://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0149.pdf',
  };
};

export const elementTopOffset = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
};
