import React from 'react';
import { connect } from 'react-redux';
import findIndex from 'lodash/fp/findIndex';

import FormTitle from '../../common/schemaform/components/FormTitle';
import SegmentedProgressBar from '@department-of-veterans-affairs/formation/SegmentedProgressBar';

import StepHeader from '../components/StepHeader';
import { chapters } from '../routes';

import { isAddressEmpty } from '../utils/helpers';

export class DownloadLetters extends React.Component {
  constructor() {
    super();
    this.navigateToLetterList = this.navigateToLetterList.bind(this);
  }

  navigateToLetterList() {
    this.props.router.push('/letter-list');
  }

  render() {
    const { children, location } = this.props;
    const currentPageIndex = findIndex(['path', location.pathname], chapters);
    const currentStep = currentPageIndex + 1;
    const emptyAddress = isAddressEmpty(this.props.address);

    let viewLettersButton;
    if (location.pathname === '/confirm-address') {
      viewLettersButton = (
        <div className="step-content">
          <button
            onClick={this.navigateToLetterList}
            className="usa-button-primary view-letters-button"
            disabled={this.props.isEditingAddress || emptyAddress}>
            View Letters
          </button>
        </div>
      );
    }

    return (
      <div className="usa-width-three-fourths letters">
        <FormTitle title="VA Letters and Documents"/>
        <p className="va-introtext">
          To receive some benefits, Veterans need a letter proving their status. You can download some of these benefit letters and documents online.
        </p>
        <SegmentedProgressBar total={chapters.length} current={currentStep}/>
        <StepHeader name={chapters[currentPageIndex].name} current={currentStep} steps="2">
          {children}
          {viewLettersButton}
        </StepHeader>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userState = state.user;
  const letterState = state.letters;
  return {
    profile: userState.profile,
    letters: letterState.letters,
    fullName: letterState.fullName,
    address: letterState.address,
    isEditingAddress: letterState.isEditingAddress,
    lettersAvailability: letterState.lettersAvailability,
    letterDownloadStatus: letterState.letterDownloadStatus,
    benefitSummaryOptions: {
      benefitInfo: letterState.benefitInfo,
      serviceInfo: letterState.serviceInfo
    },
    optionsAvailable: letterState.optionsAvailable
  };
}

export default connect(mapStateToProps)(DownloadLetters);
