import { expect } from 'chai';
import { set } from 'lodash/fp';

import { calculatorConstants } from '../gibct-helpers';
import createCommonStore from '../../../../platform/startup/store';
import reducer from '../../reducers';
import { getCalculatedBenefits } from '../../selectors/calculator';

const defaultState = createCommonStore(reducer).getState();

defaultState.constants = {
  constants: {},
  version: calculatorConstants.meta.version,
  inProgress: false
};

calculatorConstants.data.forEach(c => {
  defaultState.constants.constants[c.attributes.name] = c.attributes.value;
});

defaultState.profile = {
  attributes: {
    accreditationStatus: null,
    accreditationType: 'regional',
    accredited: true,
    avgStuLoanDebt: 254.0070326,
    bah: 2271.0,
    books: 1000,
    calendar: 'semesters',
    cautionFlag: true,
    cautionFlagReason: 'Settlement with U.S. Government, Heightened Cash Monitoring (Financial Responsibility)',
    city: 'SEATTLE',
    complaints: {
      accreditationByFacCode: 1,
      accreditationByOpeIdDoNotSum: 7,
      creditJobByFacCode: null,
      creditTransferByFacCode: 0,
      creditTransferByOpeIdDoNotSum: 5,
      degreeRequirementsByFacCode: 0,
      degreeRequirementsByOpeIdDoNotSum: 10,
      facilityCode: 1,
      financialByFacCode: 0,
      financialByOpeIdDoNotSum: 32,
      gradesByFacCode: 0,
      gradesByOpeIdDoNotSum: 2,
      jobByFacCode: 0,
      jobsByOpeIdDoNotSum: 7,
      mainCampusRollUp: 56,
      marketingByFacCode: 0,
      marketingByOpeIdDoNotSum: 13,
      otherByFacCode: 0,
      otherByOpeIdDoNotSum: 11,
      qualityByFacCode: 0,
      qualityByOpeIdDoNotSum: 19,
      refundByFacCode: 0,
      refundByOpeIdDoNotSum: 8,
      studentLoansByFacCode: 0,
      studentLoansByOpeIdDoNotSum: 15,
      transcriptByFacCode: 0,
      transcriptByOpeIdDoNotSum: 2
    },
    correspondence: false,
    country: 'USA',
    createdAt: '2017-04-15T00:58:45.542Z',
    creditForMilTraining: true,
    cross: '00439057',
    dodmou: true,
    eightKeys: true,
    facilityCode: '21405247',
    flight: false,
    graduationRateAllStudents: null,
    graduationRateVeteran: null,
    highestDegree: 4,
    localeType: 'city',
    name: 'ARGOSY UNIVERSITY-SEATTLE',
    onlineAll: true,
    ope: '02179913',
    ope6: '21799',
    p911Recipients: 14,
    p911TuitionFees: 146895.25,
    p911YellowRibbon: 1249.92,
    p911YrRecipients: 3,
    persistanceRateVeteranBa: 1.0,
    persistanceRateVeteranOtb: 0.5,
    poe: true,
    repaymentRateAllStudents: 0.187458943,
    retentionAllStudentsBa: null,
    retentionAllStudentsOtb: null,
    retentionRateVeteranBa: 1.0,
    retentionRateVeteranOtb: 0.5,
    salaryAllStudents: 37000.0,
    sec702: null,
    socMember: true,
    state: 'WA',
    studentCount: 13,
    studentVetGrpIpeds: false,
    studentVeteran: null,
    studentVeteranLink: null,
    transferOutRateAllStudents: null,
    transferOutRateVeteran: null,
    tuitionInState: 13663,
    tuitionOutOfState: 13663,
    type: 'FOR PROFIT',
    undergradEnrollment: 152,
    updatedAt: '2017-04-15T00:58:45.542Z',
    vetPoc: true,
    vetSuccessEmail: null,
    vetSuccessName: null,
    yr: true,
    zip: '98121'
  },

  version: {
    createdAt: '2017-04-15T01:00:03.494Z',
    number: 6,
    preview: false
  },

  inProgress: false
};

describe('getCalculatedBenefits', () => {
  it('should calculate no housing allowance for active duty and Ch 33', () => {
    const state = set('eligibility.militaryStatus', 'active duty', defaultState);
    expect(getCalculatedBenefits(state).outputs.housingAllowance.value).to.equal('$0/mo');
  });

  it('should show Yellow Ribbon fields when eligible', () => {
    const state = set('calculator.yellowRibbonRecipient', 'yes', defaultState);
    const { inputs, outputs } = getCalculatedBenefits(state);
    expect(inputs.yellowRibbon).to.be.true;
    expect(outputs.perTerm.yellowRibbon.visible).to.be.true;
  });

  it('should hide Yellow Ribbon fields when school does not offer it', () => {
    const state = set('profile.attributes.yr', false, defaultState);
    const { inputs, outputs } = getCalculatedBenefits(state);
    expect(inputs.yellowRibbon).to.be.false;
    expect(outputs.perTerm.yellowRibbon.visible).to.be.false;
  });

  it('should show the books field for GI Bill Ch 31', () => {
    const state = set('eligibility.giBillChapter', '31', defaultState);
    expect(getCalculatedBenefits(state).inputs.books).to.be.true;
  });

  it('should show the buy-up field for GI Bill Ch 30', () => {
    const state = set('eligibility.giBillChapter', '30', defaultState);
    expect(getCalculatedBenefits(state).inputs.buyUp).to.be.true;
  });

  it('should show the tuition assistance field for GI Bill Ch 33 with eligible military status', () => {
    const state = set('eligibility.militaryStatus', 'national guard / reserves', defaultState);
    expect(getCalculatedBenefits(state).inputs.tuitionAssist).to.be.true;
  });

  it('should hide kicker fields for GI Bill Ch 35', () => {
    const state = set('eligibility.giBillChapter', '35', defaultState);
    expect(getCalculatedBenefits(state).inputs.kicker).to.be.false;
  });

  it('should show the in-state field for public schols', () => {
    const state = set('profile.attributes.type', 'PUBLIC', defaultState);
    expect(getCalculatedBenefits(state).inputs.inState).to.be.true;
  });

  it('should hide kicker fields for flight schools', () => {
    const state = set('profile.attributes.type', 'flight', defaultState);
    expect(getCalculatedBenefits(state).inputs.kicker).to.be.false;
  });

  it('should hide kicker fields for correspondence schools', () => {
    const state = set('profile.attributes.type', 'correspondence', defaultState);
    expect(getCalculatedBenefits(state).inputs.kicker).to.be.false;
  });

  it('should show scholarships in calculations if there were any', () => {
    let state = set('calculator.scholarships', 10000, defaultState);
    state = set('calculator.tuitionAssist', 5000, state);
    expect(getCalculatedBenefits(state).outputs.yourScholarships.visible).to.be.true;
  });

  it('should hide scholarships in calculations if there were none', () => {
    let state = set('calculator.scholarships', 0, defaultState);
    state = set('calculator.tuitionAssist', 0, state);
    expect(getCalculatedBenefits(state).outputs.yourScholarships.visible).to.be.false;
  });

  it('should hide school-related fields for OJT', () => {
    const state = set('profile.attributes.type', 'OJT', defaultState);
    const { inputs, outputs } = getCalculatedBenefits(state);
    expect(inputs.tuition).to.be.false;
    expect(inputs.books).to.be.false;
    expect(inputs.yellowRibbon).to.be.false;
    expect(inputs.scholarships).to.be.false;
    expect(inputs.tuitionAssist).to.be.false;
    expect(inputs.enrolled).to.be.false;
    expect(inputs.enrolledOld).to.be.false;
    expect(inputs.calendar).to.be.false;
    expect(outputs.tuitionAndFeesCharged.visible).to.be.false;
    expect(outputs.giBillPaysToSchool.visible).to.be.false;
    expect(outputs.yourScholarships.visible).to.be.false;
    expect(outputs.outOfPocketTuition.visible).to.be.false;
    expect(outputs.totalPaidToYou.visible).to.be.false;
    expect(outputs.perTerm.tuitionFees.visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.visible).to.be.false;
  });

  it('should hide term 2 and 3 calculations if only attending 1 term', () => {
    const state = set('calculator', {
      ...defaultState.calculator,
      calendar: 'nontraditional',
      numberNontradTerms: '1'
    }, defaultState);
    const { outputs } = getCalculatedBenefits(state);
    expect(outputs.perTerm.tuitionFees.terms[1].visible).to.be.false;
    expect(outputs.perTerm.tuitionFees.terms[2].visible).to.be.false;
    expect(outputs.perTerm.housingAllowance.terms[1].visible).to.be.false;
    expect(outputs.perTerm.housingAllowance.terms[2].visible).to.be.false;
    expect(outputs.perTerm.bookStipend.terms[1].visible).to.be.false;
    expect(outputs.perTerm.bookStipend.terms[2].visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.terms[2].visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.terms[3].visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.terms[4].visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.terms[5].visible).to.be.false;
  });

  it('should hide term 3 calculations if attending fewer than 3 terms', () => {
    const state = set('calculator.calendar', 'semesters', defaultState);
    const { outputs } = getCalculatedBenefits(state);
    expect(outputs.perTerm.tuitionFees.terms[2].visible).to.be.false;
    expect(outputs.perTerm.housingAllowance.terms[2].visible).to.be.false;
    expect(outputs.perTerm.bookStipend.terms[2].visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.terms[4].visible).to.be.false;
    expect(outputs.perTerm.yellowRibbon.terms[5].visible).to.be.false;
  });
});
