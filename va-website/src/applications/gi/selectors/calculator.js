import { isEmpty } from 'lodash';
import { createSelector } from 'reselect';

import { formatCurrency } from '../utils/helpers';

const getConstants = (state) => state.constants.constants;

const getEligibilityDetails = (state) => state.eligibility;

const getInstitution = (state) => state.profile.attributes;

const getFormInputs = (state) => state.calculator;

const getDerivedValues = createSelector(
  getConstants,
  getEligibilityDetails,
  getInstitution,
  getFormInputs,
  (constant, eligibility, institution, inputs) => {
    if ([constant, eligibility, institution, inputs].some(e => !e || isEmpty(e))) {
      return {};
    }

    let monthlyRate;
    let numberOfTerms;
    let ropOld;
    let tuitionFeesCap;
    let acadYearLength;
    let termLength;
    let ropOjt;
    let kickerBenefit;
    let buyUpRate;
    let tuitionFeesTerm1;
    let tuitionFeesTerm2;
    let tuitionFeesTerm3;
    let yrBenTerm1;
    let yrBenTerm2;
    let yrBenTerm3;
    let yrBenTotal;
    let housingAllowTerm1;
    let housingAllowTerm2;
    let housingAllowTerm3;
    let housingAllowTotal;
    let giBillTotalText;
    let totalTerm1;
    let totalTerm2;
    let totalTerm3;
    let totalYear;
    let monthlyRateDisplay;
    let nameOfTerm1;
    let nameOfTerm2;
    let nameOfTerm3;
    let nameOfTerm4;
    let bookStipendTerm1;
    let bookStipendTerm2;
    let bookStipendTerm3;
    let bookStipendTotal;

    const {
      cumulativeService,
      eligForPostGiBill,
      enlistmentService,
      militaryStatus,
      onlineClasses,
    } = eligibility;

    const consecutiveService = +eligibility.consecutiveService;
    const giBillChapter = +eligibility.giBillChapter;
    const numberOfDependents = +eligibility.numberOfDependents;
    const spouseActiveDuty = eligibility.spouseActiveDuty === 'yes';
    const serviceDischarge = cumulativeService === 'service discharge';

    const institutionType = institution.type.toLowerCase();
    const isOJT = institutionType === 'ojt';
    const isFlight = institutionType === 'flight';
    const isCorrespondence = institutionType === 'correspondence';
    const isFlightOrCorrespondence = isFlight || isCorrespondence;
    const isPublic = institutionType === 'public';

    const institutionCountry = institution.country.toLowerCase();

    // VRE and post-9/11 eligibility
    const vre911Eligible = (giBillChapter === 31 && eligForPostGiBill === 'yes');

    // VRE-without-post-911 eligibility
    const onlyVRE = (giBillChapter === 31 && eligForPostGiBill === 'no');

    // Determines benefits tier
    const tier = (vre911Eligible || serviceDischarge) ? 1 : +cumulativeService;

    const oldGiBill = (
      giBillChapter === 30
      || giBillChapter === 1607
      || giBillChapter === 1606
      || giBillChapter === 35
    );

    // Determines whether monthly benefit can only be spent on tuition/fees
    const activeDutyThirtyOr1607 = (
      militaryStatus === 'active duty' &&
      (giBillChapter === 30 || giBillChapter === 1607)
    );
    const correspondenceOrFlightUnderOldGiBill =
      isFlightOrCorrespondence && oldGiBill;
    const ropOldAndChapter = (
      ['less than half', 'quarter'].includes(inputs.enrolledOld) &&
      [30, 35, 1607].includes(giBillChapter)
    );
    const onlyTuitionFees =
      activeDutyThirtyOr1607 ||
      correspondenceOrFlightUnderOldGiBill ||
      ropOldAndChapter;

    // The monthly benefit rate for non-chapter 33 benefits
    switch (giBillChapter) {
      case 30: {
        monthlyRate =
          (enlistmentService === '3' ?
            constant.MGIB3YRRATE :
            constant.MGIB2YRRATE) * (isOJT ? 0.75 : 1);
        break;
      }
      case 1607: {
        monthlyRate =
          constant.MGIB3YRRATE * consecutiveService * (isOJT ? 0.75 : 1);
        break;
      }
      case 1606: {
        monthlyRate = constant.SRRATE * (isOJT ? 0.75 : 1);
        break;
      }
      case 35: {
        if (isOJT) {
          monthlyRate = constant.DEARATEOJT;
        } else if (isFlight) {
          monthlyRate = 0;
        } else {
          monthlyRate = constant.DEARATE;
        }
        break;
      }
      case 31: {
        const OJT = isOJT ? 'OJT' : '';
        if (numberOfDependents <= 2) {
          monthlyRate =
            constant[`VRE${numberOfDependents}DEPRATE${OJT}`];
        } else {
          monthlyRate =
            constant[`VRE2DEPRATE${OJT}`] +
            ((numberOfDependents - 2) *
            constant[`VREINCRATE${OJT}`]);
        }
        break;
      }
      default:
        monthlyRate = 0;
    }

    // Calculate the total number of academic terms - getNumberOfTerms
    if (isOJT || inputs.calendar === 'quarters') {
      numberOfTerms = 3;
    } else if (inputs.calendar === 'semesters') {
      numberOfTerms = 2;
    } else if (inputs.calendar === 'nontraditional') {
      numberOfTerms = +inputs.numberNontradTerms;
    }

    // Set the net price (Payer of Last Resort) - getTuitionNetPrice
    const tuitionNetPrice = Math.max(0,
      inputs.tuitionFees -
      inputs.scholarships -
      inputs.tuitionAssist
    );

    // Set the proper tuition/fees cap - getTuitionFeesCap
    if (isFlight) {
      tuitionFeesCap = constant.FLTTFCAP;
    } else if (isCorrespondence) {
      tuitionFeesCap = constant.CORRESPONDTFCAP;
    } else if (isPublic && institutionCountry === 'usa') {
      tuitionFeesCap = inputs.inState === 'yes'
        ? +inputs.tuitionFees
        : +inputs.inStateTuitionFees;
    } else {
      // Default cap for private, foreign, and for-profit institutions.
      tuitionFeesCap = constant.TFCAP;
    }

    // Calculate the tuition/fees per term - getTuitionFeesPerTerm
    const tuitionFeesPerTerm = +inputs.tuitionFees / numberOfTerms;

    // Calculate the length of each term - getTermLength
    // and Calculate the length of the academic year - getAcadYearLength
    acadYearLength = 9;

    if (isOJT) {
      termLength = 6;
    } else {
      switch (inputs.calendar) {
        case 'semesters':
          termLength = 4.5;
          break;
        case 'quarters':
          termLength = 3;
          break;
        case 'nontraditional':
          termLength = +inputs.lengthNontradTerms;
          acadYearLength = (+inputs.numberNontradTerms) * (+inputs.lengthNontradTerms);
          break;
        default:
          // noop
      }
    }

    // Calculate the rate of pursuit - getRop
    const rop = ({
      full: 1,
      'three quarters': 0.8,
      'more than half': 0.6,
      'half or less': 0,
    })[inputs.enrolled];

    // Calculate the rate of pursuit for Book Stipend - getRopBook
    const ropBook = ({
      full: 1,
      'three quarters': 0.75,
      'more than half': 0.5,
      'half or less': 0.25
    })[inputs.enrolled];

    // Calculate the rate of pursuit for Old GI Bill - getCalcRopOld
    // and Calculate the rate of pursuit for OJT - getRopOjt
    if (isOJT) {
      // eslint-disable-next-line no-multi-assign
      ropOjt = ropOld = +inputs.working / 30;
    } else {
      ropOld = ({
        full: 1,
        'three quarters': 0.75,
        half: 0.5,
        'less than half': 0.5,
        quarter: 0.25,
      })[inputs.enrolledOld];
    }

    // Determine yellow ribbon eligibility - getYellowRibbonEligibility
    const yellowRibbonElig = !(
      tier < 1
      || !institution.yr
      || inputs.yellowRibbonRecipient === 'no'
      || militaryStatus === 'active duty'
      || isOJT
      || isFlightOrCorrespondence
    );

    // Determine kicker benefit level - getKickerBenefit
    if (!(inputs.kickerEligible === 'yes')) {
      kickerBenefit = 0;
    } else {
      kickerBenefit = +inputs.kickerAmount;
    }

    // Determine buy up rates - getBuyUpRate
    if (inputs.buyUp === 'no' || giBillChapter !== 30) {
      buyUpRate = 0;
    } else {
      buyUpRate = Math.min(+inputs.buyUpAmount, 600) / 4;
    }

    // Calculate Housing Allowance Rate Final - getMonthlyRateFinal
    const monthlyRateFinal = ropOld * (monthlyRate + buyUpRate + kickerBenefit);

    // Calculate the names of Terms 1-4
    if (isOJT) {
      nameOfTerm1 = 'Months 1-6';
      nameOfTerm2 = 'Months 7-12';
      nameOfTerm3 = 'Months 13-18';
      nameOfTerm4 = 'Months 19-24';
    } else {
      switch (inputs.calendar) {
        case 'semesters':
          nameOfTerm1 = 'Fall';
          nameOfTerm2 = 'Spring';
          nameOfTerm3 = '';
          break;
        case 'quarters':
          nameOfTerm1 = 'Fall';
          nameOfTerm2 = 'Winter';
          nameOfTerm3 = 'Spring';
          break;
        case 'nontraditional':
          nameOfTerm1 = 'Term 1';
          nameOfTerm2 = 'Term 2';
          nameOfTerm3 = 'Term 3';
          break;
        default:
          // noop
      }

      nameOfTerm4 = 'Total per year';
    }

    // Calculate Tuition Fees for Term #1 - getTuitionFeesTerm1
    const shouldHaveNoTuitionFeesTerm1 =
      isOJT || oldGiBill ||
      giBillChapter === 31 && isFlightOrCorrespondence;

    if (shouldHaveNoTuitionFeesTerm1) {
      tuitionFeesTerm1 = 0;
    } else if (giBillChapter === 31) {
      tuitionFeesTerm1 = tuitionFeesPerTerm;
    } else {
      tuitionFeesTerm1 = Math.max(0, Math.min(
        tier * tuitionFeesPerTerm,
        tier * tuitionFeesCap,
        tier * tuitionNetPrice
      ));
    }

    // getTuitionFeesTerm2
    const shouldHaveNoTuitionFeesTerm2 =
      isOJT || oldGiBill ||
      (giBillChapter === 31 && isFlightOrCorrespondence) ||
      (inputs.calendar === 'nontraditional' && numberOfTerms === 1);

    if (shouldHaveNoTuitionFeesTerm2) {
      tuitionFeesTerm2 = 0;
    } else if (giBillChapter === 31) {
      tuitionFeesTerm2 = tuitionFeesPerTerm;
    } else {
      tuitionFeesTerm2 = Math.max(0, Math.min(
        tier * tuitionFeesPerTerm,
        tier * tuitionFeesCap - tuitionFeesTerm1,
        tier * tuitionNetPrice - tuitionFeesTerm1
      ));
    }

    // getTuitionFeesTerm3
    const shouldHaveNoTuitionFeesTerm3 =
      isOJT || oldGiBill ||
      (giBillChapter === 31 && isFlightOrCorrespondence) ||
      (inputs.calendar === 'semesters' || inputs.calendar === 'nontraditional' && numberOfTerms < 3);

    if (shouldHaveNoTuitionFeesTerm3) {
      tuitionFeesTerm3 = 0;
    } else if (giBillChapter === 31) {
      tuitionFeesTerm3 = tuitionFeesPerTerm;
    } else {
      tuitionFeesTerm3 = Math.max(0, Math.min(
        tier * tuitionFeesPerTerm,
        tier * tuitionFeesCap - tuitionFeesTerm1 - tuitionFeesTerm2,
        tier * tuitionNetPrice - tuitionFeesTerm1 - tuitionFeesTerm2
      ));
    }

    // Calculate the name of Tuition Fees Total - getTuitionFeesTotal
    const tuitionFeesTotal = tuitionFeesTerm1 + tuitionFeesTerm2 + tuitionFeesTerm3;

    // Calculate Yellow Ribbon for Term #1 - getYrBenTerm1
    const shouldHaveNoYrBenTerm1 =
      !yellowRibbonElig ||
      +inputs.yellowRibbonAmount === 0 ||
      oldGiBill ||
      giBillChapter === 31 ||
      tuitionFeesPerTerm === tuitionFeesTerm1;

    if (shouldHaveNoYrBenTerm1) {
      yrBenTerm1 = 0;
    } else {
      yrBenTerm1 = Math.max(0, Math.min(
        tuitionFeesPerTerm - tuitionFeesTerm1,
        tuitionNetPrice - tuitionFeesTerm1,
        +inputs.yellowRibbonAmount * 2
      ));
    }

    // getYrBenTerm2
    const shouldHaveNoYrBenTerm2 =
      !yellowRibbonElig ||
      +inputs.yellowRibbonAmount === 0 ||
      oldGiBill ||
      giBillChapter === 31 ||
      inputs.calendar === 'nontraditional' && numberOfTerms === 1 ||
      tuitionFeesPerTerm === tuitionFeesTerm2;

    if (shouldHaveNoYrBenTerm2) {
      yrBenTerm2 = 0;
    } else {
      yrBenTerm2 = Math.max(0, Math.min(
        tuitionFeesPerTerm - tuitionFeesTerm2,
        tuitionNetPrice - tuitionFeesTerm1 - tuitionFeesTerm2 - yrBenTerm1,
        +inputs.yellowRibbonAmount * 2 - yrBenTerm1
      ));
    }

    // getYrBenTerm3
    const shouldHaveNoYrBenTerm3 =
      !yellowRibbonElig ||
      +inputs.yellowRibbonAmount === 0 ||
      oldGiBill ||
      giBillChapter === 31 ||
      inputs.calendar === 'semesters' ||
      inputs.calendar === 'nontraditional' && numberOfTerms < 3 ||
      tuitionFeesPerTerm === tuitionFeesTerm3;

    if (shouldHaveNoYrBenTerm3) {
      yrBenTerm3 = 0;
    } else {
      yrBenTerm3 = Math.max(0, Math.min(
        tuitionFeesPerTerm - tuitionFeesTerm3,
        tuitionNetPrice - tuitionFeesTerm1 - tuitionFeesTerm2 - tuitionFeesTerm3 - yrBenTerm1 - yrBenTerm1,
        +inputs.yellowRibbonAmount * 2 - yrBenTerm1 - yrBenTerm2
      ));
    }

    // Calculate Yellow Ribbon for the Year - getYrBenTotal
    if (!yellowRibbonElig || +inputs.yellowRibbonAmount === 0) {
      yrBenTotal = 0;
    } else {
      yrBenTotal = yrBenTerm1 + yrBenTerm2 + yrBenTerm3;
    }

    // Calculate Yellow Ribbon by school / VA contributions - getYrBreakdown
    const yrBenSchoolTerm1 = yrBenTerm1 / 2;
    const yrBenVaTerm1 = yrBenTerm1 / 2;
    const yrBenSchoolTerm2 = yrBenTerm2 / 2;
    const yrBenVaTerm2 = yrBenTerm2 / 2;
    const yrBenSchoolTerm3 = yrBenTerm3 / 2;
    const yrBenVaTerm3 = yrBenTerm3 / 2;
    const yrBenSchoolTotal = yrBenTotal / 2;
    const yrBenVaTotal = yrBenTotal / 2;

    // Calculate Total Paid to School - getTotalPaidToSchool
    const totalToSchool = tuitionFeesTotal + yrBenTotal;

    // Calculate Total Scholarships and Tuition Assistance - getTotalScholarships
    const totalScholarshipTa = +inputs.scholarships + +inputs.tuitionAssist;

    // Calculate Total Left to Pay - getTotalLeftToPay
    const totalLeftToPay =
      Math.max(0, +inputs.tuitionFees - totalToSchool - totalScholarshipTa);

    const totalHousingAllowance = monthlyRateFinal * termLength;

    // Calculate Housing Allowance for Term #1 - getHousingAllowTerm1
    if (isOJT && ((militaryStatus === 'active duty') || (giBillChapter === 33 && militaryStatus === 'spouse' && spouseActiveDuty))) {
      housingAllowTerm1 = 0;
    } else if (isOJT && (giBillChapter === 35 || oldGiBill || onlyVRE)) {
      housingAllowTerm1 = monthlyRateFinal;
    } else if (giBillChapter === 31 && isFlightOrCorrespondence) {
      housingAllowTerm1 = 0;
    } else if ([1606, 1607].includes(giBillChapter) && isFlight) {
      housingAllowTerm1 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm *
        (giBillChapter === 1607 ? consecutiveService : 1) * 0.55
      ));
    } else if ([1606, 1607].includes(giBillChapter) && isCorrespondence) {
      housingAllowTerm1 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm * (consecutiveService * 0.6)
      ));
    } else if (onlyTuitionFees) {
      housingAllowTerm1 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm
      ));
    } else if (oldGiBill || onlyVRE) {
      housingAllowTerm1 = totalHousingAllowance;
    } else if (militaryStatus === 'active duty' || (militaryStatus === 'spouse' && spouseActiveDuty)) {
      housingAllowTerm1 = rop * kickerBenefit * termLength;
    } else if (isFlightOrCorrespondence) {
      housingAllowTerm1 = 0;
    } else if (isOJT) {
      housingAllowTerm1 =
        ropOjt * (tier * institution.bah + kickerBenefit);
    } else if (onlineClasses === 'yes') {
      housingAllowTerm1 =
        termLength * rop * (tier * constant.AVGBAH / 2 + kickerBenefit);
    } else if (institutionCountry !== 'usa') {
      housingAllowTerm1 =
        termLength * rop * ((tier * constant.AVGBAH) + kickerBenefit);
    } else {
      housingAllowTerm1 =
        termLength * rop * ((tier * institution.bah) + kickerBenefit);
    }

    // getHousingAllowTerm2
    if (isOJT && ((militaryStatus === 'active duty') || (giBillChapter === 33 && militaryStatus === 'spouse' && spouseActiveDuty))) {
      housingAllowTerm2 = 0;
    } else if (giBillChapter === 35 && isOJT) {
      housingAllowTerm2 = 0.75 * monthlyRateFinal;
    } else if (oldGiBill && isOJT) {
      housingAllowTerm2 = (6.6 / 9) * monthlyRateFinal;
    } else if (onlyVRE && isOJT) {
      housingAllowTerm2 = monthlyRateFinal;
    } else if (isOJT) {
      housingAllowTerm2 = 0.8 * ropOjt *
        (tier * institution.bah + kickerBenefit);
    } else if (inputs.calendar === 'nontraditional' && numberOfTerms === 1) {
      housingAllowTerm2 = 0;
    } else if (giBillChapter === 31 && isFlightOrCorrespondence) {
      housingAllowTerm2 = 0;
    } else if ([1606, 1607].includes(giBillChapter) && isFlight) {
      housingAllowTerm2 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm *
        (giBillChapter === 1607 ? consecutiveService : 1) * 0.55
      ));
    } else if ([1606, 1607].includes(giBillChapter) && isCorrespondence) {
      housingAllowTerm2 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm * (consecutiveService * 0.6)
      ));
    } else if (onlyTuitionFees) {
      housingAllowTerm2 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm
      ));
    } else if (oldGiBill || onlyVRE) {
      housingAllowTerm2 = totalHousingAllowance;
    } else if (militaryStatus === 'active duty' || (militaryStatus === 'spouse' && spouseActiveDuty)) {
      housingAllowTerm2 = rop * kickerBenefit * termLength;
    } else if (isFlightOrCorrespondence) {
      housingAllowTerm2 = 0;
    } else if (onlineClasses === 'yes') {
      housingAllowTerm2 =
        termLength * rop * (tier * constant.AVGBAH / 2 + kickerBenefit);
    } else if (institutionCountry !== 'usa') {
      housingAllowTerm2 =
        termLength * rop * (tier * constant.AVGBAH + kickerBenefit);
    } else {
      housingAllowTerm2 =
        termLength * rop * (tier * institution.bah + kickerBenefit);
    }

    // getHousingAllowTerm3
    if (isOJT && ((militaryStatus === 'active duty') || (giBillChapter === 33 && militaryStatus === 'spouse' && spouseActiveDuty))) {
      housingAllowTerm3 = 0;
    } else if (giBillChapter === 35 && isOJT) {
      housingAllowTerm3 = 0.494 * monthlyRateFinal;
    } else if (oldGiBill && isOJT) {
      housingAllowTerm3 = (7 / 15) * monthlyRateFinal;
    } else if (onlyVRE && isOJT) {
      housingAllowTerm3 = monthlyRateFinal;
    } else if (isOJT) {
      housingAllowTerm3 = 0.6 * ropOjt *
        (tier * institution.bah + kickerBenefit);
    } else if (inputs.calendar === 'semesters') {
      housingAllowTerm3 = 0;
    } else if (inputs.calendar === 'nontraditional' && numberOfTerms < 3) {
      housingAllowTerm3 = 0;
    } else if (giBillChapter === 31 && isFlightOrCorrespondence) {
      housingAllowTerm3 = 0;
    } else if ([1606, 1607].includes(giBillChapter) && isFlight) {
      housingAllowTerm3 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm *
        (giBillChapter === 1607 ? consecutiveService : 1) * 0.55
      ));
    } else if ([1606, 1607].includes(giBillChapter) && isCorrespondence) {
      housingAllowTerm3 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm * (consecutiveService * 0.6)
      ));
    } else if (onlyTuitionFees) {
      housingAllowTerm3 = Math.max(0, Math.min(
        totalHousingAllowance,
        tuitionFeesPerTerm
      ));
    } else if (oldGiBill || onlyVRE) {
      housingAllowTerm3 = totalHousingAllowance;
    } else if (militaryStatus === 'active duty' || (militaryStatus === 'spouse' && spouseActiveDuty)) {
      housingAllowTerm3 = rop * kickerBenefit * termLength;
    } else if (isFlightOrCorrespondence) {
      housingAllowTerm3 = 0;
    } else if (onlineClasses === 'yes') {
      housingAllowTerm3 =
        termLength * rop * (tier * constant.AVGBAH / 2 + kickerBenefit);
    } else if (institutionCountry !== 'usa') {
      housingAllowTerm3 =
        termLength * rop * (tier * constant.AVGBAH + kickerBenefit);
    } else {
      housingAllowTerm3 =
        termLength * rop * (tier * institution.bah + kickerBenefit);
    }

    // Calculate Housing Allowance Total for year - getHousingAllowTotal
    if (militaryStatus === 'active duty' && isOJT) {
      housingAllowTotal = 0;
    } else if (giBillChapter === 35 && isOJT) {
      housingAllowTotal = 0.25 * monthlyRateFinal;
    } else if (oldGiBill && isOJT) {
      housingAllowTotal = (7 / 15) * monthlyRateFinal;
    } else if (onlyVRE && isOJT) {
      housingAllowTotal = monthlyRateFinal;
    } else if (isOJT) {
      housingAllowTotal = 0.4 * ropOjt *
        (tier * institution.bah + kickerBenefit);
    } else if (onlyTuitionFees) {
      housingAllowTotal = Math.max(0, Math.min(
        monthlyRateFinal * acadYearLength,
        +inputs.tuitionFees
      ));
    } else {
      housingAllowTotal = housingAllowTerm1 + housingAllowTerm2 + housingAllowTerm3;
    }

    // Calculate Book Stipend for Term #1 - getBookStipendTerm1
    if (isFlightOrCorrespondence) {
      bookStipendTerm1 = 0;
    } else if (oldGiBill) {
      bookStipendTerm1 = 0;
    } else if (giBillChapter === 31) {
      bookStipendTerm1 = +inputs.books / numberOfTerms;
    } else if (isOJT && giBillChapter === 33) {
      bookStipendTerm1 = constant.BSOJTMONTH;
    } else {
      bookStipendTerm1 = ropBook * constant.BSCAP / numberOfTerms * tier;
    }

    // getBookStipendTerm2
    if (isFlightOrCorrespondence) {
      bookStipendTerm2 = 0;
    } else if (isOJT && giBillChapter === 33) {
      bookStipendTerm2 = constant.BSOJTMONTH;
    } else if (inputs.calendar === 'nontraditional' && numberOfTerms === 1) {
      bookStipendTerm2 = 0;
    } else if (oldGiBill) {
      bookStipendTerm2 = 0;
    } else if (giBillChapter === 31) {
      bookStipendTerm2 = +inputs.books / numberOfTerms;
    } else {
      bookStipendTerm2 = ropBook * constant.BSCAP / numberOfTerms * tier;
    }

    // getBookStipendTerm3
    if (isFlightOrCorrespondence) {
      bookStipendTerm3 = 0;
    } else if (isOJT && giBillChapter === 33) {
      bookStipendTerm3 = constant.BSOJTMONTH;
    } else if (inputs.calendar === 'semesters') {
      bookStipendTerm3 = 0;
    } else if (inputs.calendar === 'nontraditional' && numberOfTerms < 3) {
      bookStipendTerm3 = 0;
    } else if (oldGiBill) {
      bookStipendTerm3 = 0;
    } else if (giBillChapter === 31) {
      bookStipendTerm3 = inputs.books / numberOfTerms;
    } else {
      bookStipendTerm3 = ropBook * constant.BSCAP / numberOfTerms * tier;
    }

    // Calculate Book Stipend for Year - getBookStipendYear
    if (isOJT && giBillChapter === 33) {
      bookStipendTotal = constant.BSOJTMONTH;
    } else {
      bookStipendTotal = bookStipendTerm1 + bookStipendTerm2 + bookStipendTerm3;
    }

    // Calculate Total Payments to You - getTotalPaidToYou
    const totalToYou = housingAllowTotal + bookStipendTotal;

    // Calculate Total Benefits for Term 1 - getTotalTerm1
    if (isOJT) {
      totalTerm1 = 0;
    } else {
      totalTerm1 = tuitionFeesTerm1 + yrBenTerm1 + housingAllowTerm1 + bookStipendTerm1;
    }

    // getTotalTerm2
    if (inputs.calendar === 'nontraditional' && numberOfTerms === 1) {
      totalTerm2 = 0;
    } else if (isOJT) {
      totalTerm2 = 0;
    } else {
      totalTerm2 = tuitionFeesTerm2 + yrBenTerm2 + housingAllowTerm2 + bookStipendTerm2;
    }

    // getTotalTerm3
    if (inputs.calendar === 'semesters') {
      totalTerm3 = 0;
    } else if (inputs.calendar === 'nontraditional' && numberOfTerms < 3) {
      totalTerm3 = 0;
    } else if (isOJT) {
      totalTerm3 = 0;
    } else {
      totalTerm3 = tuitionFeesTerm3 + yrBenTerm3 + housingAllowTerm3 + bookStipendTerm3;
    }

    // Calculate Text for Total Benefits Row - getTotalText
    switch (giBillChapter) {
      case 30:
        giBillTotalText = 'Total Montgomery GI Bill Benefits';
        break;
      case 31:
        giBillTotalText = 'Total Voc Rehab Benefits';
        break;
      case 33:
        giBillTotalText = 'Total Post-9/11 GI Bill Benefits';
        break;
      case 35:
        giBillTotalText = 'Total DEA GI Bill Benefits';
        break;
      case 1606:
        giBillTotalText = 'Total Select Reserve GI Bill Benefits';
        break;
      case 1607:
        giBillTotalText = 'Total REAP GI Bill Benefits';
        break;
      default:
        // noop
    }

    // Calculate Total Benefits for Year - getTotalYear
    if (isOJT) {
      totalYear = 0;
    } else {
      totalYear = tuitionFeesTotal + yrBenTotal + housingAllowTotal + bookStipendTotal;
    }

    // Calculate Monthly Rate for Display - getMonthlyRateDisplay
    if (isOJT) {
      monthlyRateDisplay = housingAllowTerm1;
    } else {
      monthlyRateDisplay = housingAllowTerm1 / termLength;
    }

    return {
      tier,
      onlyVRE,
      oldGiBill,
      numberOfTerms,
      tuitionFeesTerm1,
      tuitionFeesTerm2,
      tuitionFeesTerm3,
      tuitionFeesTotal,
      giBillTotalText,
      totalTerm1,
      totalTerm2,
      totalTerm3,
      totalYear,
      nameOfTerm1,
      nameOfTerm2,
      nameOfTerm3,
      nameOfTerm4,
      yellowRibbonElig,
      yrBenSchoolTerm1,
      yrBenSchoolTerm2,
      yrBenSchoolTerm3,
      yrBenSchoolTotal,
      yrBenVaTerm1,
      yrBenVaTerm2,
      yrBenVaTerm3,
      yrBenVaTotal,
      totalScholarshipTa,
      totalToSchool,
      totalLeftToPay,
      housingAllowTerm1,
      housingAllowTerm2,
      housingAllowTerm3,
      housingAllowanceMonthly: monthlyRateDisplay,
      housingAllowTotal,
      bookStipendTerm1,
      bookStipendTerm2,
      bookStipendTerm3,
      bookStipendTotal,
      totalToYou
    };
  }
);

export const getCalculatedBenefits = createSelector(
  getEligibilityDetails,
  getInstitution,
  getFormInputs,
  getDerivedValues,
  (eligibility, institution, form, derived) => {
    const calculatedBenefits = {};

    if ([eligibility, institution, form, derived].some(e => !e || isEmpty(e))) {
      return calculatedBenefits;
    }

    const { militaryStatus } = eligibility;
    const giBillChapter = +eligibility.giBillChapter;
    const institutionType = institution.type.toLowerCase();
    const isOJT = institutionType === 'ojt';

    calculatedBenefits.inputs = {
      inState: false,
      tuition: true,
      books: false,
      yellowRibbon: false,
      scholarships: true,
      tuitionAssist: false,
      enrolled: true,
      enrolledOld: false,
      calendar: true,
      working: false,
      kicker: true,
      buyUp: false,
    };

    calculatedBenefits.outputs = {
      giBillPaysToSchool: {
        visible: true,
        value: `${formatCurrency(derived.totalToSchool)}/yr`
      },
      tuitionAndFeesCharged: {
        visible: true,
        value: formatCurrency(form.tuitionFees)
      },
      yourScholarships: {
        visible: true,
        value: formatCurrency(derived.totalScholarshipTa)
      },
      outOfPocketTuition: {
        visible: true,
        value: formatCurrency(derived.totalLeftToPay)
      },
      housingAllowance: {
        visible: true,
        value: `${formatCurrency(derived.housingAllowanceMonthly)}/mo`
      },
      bookStipend: {
        visible: true,
        value: `${formatCurrency(derived.bookStipendTotal)}${institutionType === 'ojt' ? '/mo' : '/yr'}`
      },
      totalPaidToYou: {
        visible: true,
        value: formatCurrency(derived.totalToYou)
      },
      perTerm: {
        tuitionFees: {
          visible: true,
          title: 'Tuition and fees',
          terms: [
            {
              label: derived.nameOfTerm1,
              value: formatCurrency(derived.tuitionFeesTerm1),
              visible: true
            },
            {
              label: derived.nameOfTerm2,
              value: formatCurrency(derived.tuitionFeesTerm2),
              visible: true
            },
            {
              label: derived.nameOfTerm3,
              value: formatCurrency(derived.tuitionFeesTerm3),
              visible: true
            },
            {
              label: 'Total per year',
              value: formatCurrency(derived.tuitionFeesTotal),
              visible: true
            },
          ],
        },
        yellowRibbon: {
          visible: true,
          title: 'Yellow Ribbon',
          terms: [
            {
              label: `${derived.nameOfTerm1} (paid by school)`,
              value: formatCurrency(derived.yrBenSchoolTerm1),
              visible: true
            },
            {
              label: `${derived.nameOfTerm1} (paid by VA)`,
              value: formatCurrency(derived.yrBenVaTerm1),
              visible: true
            },
            {
              label: `${derived.nameOfTerm2} (paid by school)`,
              value: formatCurrency(derived.yrBenSchoolTerm2),
              visible: true
            },
            {
              label: `${derived.nameOfTerm2} (paid by VA)`,
              value: formatCurrency(derived.yrBenVaTerm2),
              visible: true
            },
            {
              label: `${derived.nameOfTerm3} (paid by school)`,
              value: formatCurrency(derived.yrBenSchoolTerm3),
              visible: true
            },
            {
              label: `${derived.nameOfTerm3} (paid by VA)`,
              value: formatCurrency(derived.yrBenVaTerm3),
              visible: true
            },
            {
              label: 'Total per year',
              value: formatCurrency(derived.yrBenSchoolTotal + derived.yrBenVaTotal),
              visible: true
            },
          ]
        },
        housingAllowance: {
          visible: true,
          title: 'Housing allowance',
          terms: [
            {
              label: derived.nameOfTerm1,
              value: `${formatCurrency(derived.housingAllowTerm1)}${isOJT ? '/mo' : ''}`,
              visible: true
            },
            {
              label: derived.nameOfTerm2,
              value: `${formatCurrency(derived.housingAllowTerm2)}${isOJT ? '/mo' : ''}`,
              visible: true
            },
            {
              label: derived.nameOfTerm3,
              value: `${formatCurrency(derived.housingAllowTerm3)}${isOJT ? '/mo' : ''}`,
              visible: true
            },
            {
              label: derived.nameOfTerm4,
              value: `${formatCurrency(derived.housingAllowTotal)}${isOJT ? '/mo' : ''}`, // Total if not OJT
              visible: true
            },
          ],
        },
        bookStipend: {
          visible: true,
          title: 'Book stipend',
          terms: [
            {
              label: derived.nameOfTerm1,
              value: `${formatCurrency(derived.bookStipendTerm1)}${isOJT ? '/mo' : ''}`,
              visible: true
            },
            {
              label: derived.nameOfTerm2,
              value: `${formatCurrency(derived.bookStipendTerm2)}${isOJT ? '/mo' : ''}`,
              visible: true
            },
            {
              label: derived.nameOfTerm3,
              value: `${formatCurrency(derived.bookStipendTerm3)}${isOJT ? '/mo' : ''}`,
              visible: true
            },
            {
              label: derived.nameOfTerm4,
              value: `${formatCurrency(derived.bookStipendTotal)}${isOJT ? '/mo' : ''}`, // Total if not OJT
              visible: true
            },
          ],
        },
      }
    };

    if (giBillChapter === 31 && !derived.onlyVRE) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        enrolled: true,
        enrolledOld: false,
        yellowRibbon: false,
        scholarships: false,
        tuitionAssist: false,
      };
    }

    if (giBillChapter === 35) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        kicker: false,
      };
    }

    if (institutionType === 'flight' || institutionType === 'correspondence') {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        enrolled: false,
        enrolledOld: false,
        kicker: false,
        buyUp: false
      };
    }

    if (institutionType === 'public') {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        inState: true
      };
    }

    if (institution.yr && derived.tier === 1.0) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        yellowRibbon: true
      };
    }

    if (derived.oldGiBill || derived.onlyVRE) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        yellowRibbon: false,
        enrolled: false,
        enrolledOld: true
      };
    }

    if (giBillChapter === 31) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        books: true
      };
    }

    if (giBillChapter === 30) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        buyUp: true
      };
    }

    if (['active duty', 'national guard / reserves'].includes(militaryStatus) && giBillChapter === 33) {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        tuitionAssist: true
      };
    }

    if (!derived.yellowRibbonElig) {
      calculatedBenefits.outputs.perTerm.yellowRibbon.visible = false;
    }

    if (derived.totalScholarshipTa === 0) {
      calculatedBenefits.outputs.yourScholarships.visible = false;
    }

    if (derived.numberOfTerms === 1) {
      // Hide all term 2 and 3 calculations.
      calculatedBenefits.outputs.perTerm.tuitionFees.terms[1].visible = false;
      calculatedBenefits.outputs.perTerm.tuitionFees.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.housingAllowance.terms[1].visible = false;
      calculatedBenefits.outputs.perTerm.housingAllowance.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.bookStipend.terms[1].visible = false;
      calculatedBenefits.outputs.perTerm.bookStipend.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.terms[3].visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.terms[4].visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.terms[5].visible = false;
    }

    if (derived.numberOfTerms < 3 && institutionType !== 'ojt') {
      // Hide all term 3 calculations.
      calculatedBenefits.outputs.perTerm.tuitionFees.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.housingAllowance.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.bookStipend.terms[2].visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.terms[4].visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.terms[5].visible = false;
    }

    if (institutionType === 'ojt') {
      calculatedBenefits.inputs = {
        ...calculatedBenefits.inputs,
        tuition: false,
        books: false,
        yellowRibbon: false,
        scholarships: false,
        tuitionAssist: false,
        enrolled: false,
        enrolledOld: false,
        calendar: false,
        working: true,
      };

      calculatedBenefits.outputs.tuitionAndFeesCharged.visible = false;
      calculatedBenefits.outputs.giBillPaysToSchool.visible = false;
      calculatedBenefits.outputs.yourScholarships.visible = false;
      calculatedBenefits.outputs.outOfPocketTuition.visible = false;
      calculatedBenefits.outputs.totalPaidToYou.visible = false;
      calculatedBenefits.outputs.perTerm.tuitionFees.visible = false;
      calculatedBenefits.outputs.perTerm.yellowRibbon.visible = false;
    }

    return calculatedBenefits;
  }
);
