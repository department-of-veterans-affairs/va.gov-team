import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import EducationWizard from '../../components/EducationWizard';

function getQuestion(tree, name) {
  return tree.everySubTree('ErrorableRadioButtons').find(i => i.props.name === name);
}

function answerQuestion(tree, name, value) {
  getQuestion(tree, name).props.onValueChange({ value });
}

describe('<EducationWizard>', () => {
  it('should show button and no questions', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    expect(tree.subTree('button')).not.to.be.false;
    expect(tree.subTree('#wizardOptions').props.className).to.contain('wizard-content-closed');
  });
  it('should show button and first question', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    tree.getMountedInstance().setState({ open: true });
    expect(tree.subTree('button')).not.to.be.false;
    expect(tree.subTree('#wizardOptions').props.className).not.to.contain('wizard-content-closed');
    expect(tree.everySubTree('ErrorableRadioButtons')).not.to.be.empty;
  });
  it('should show own service question for new benefit', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    tree.getMountedInstance().setState({ open: true });
    expect(getQuestion(tree, 'newBenefit')).not.to.be.undefined;
    answerQuestion(tree, 'newBenefit', 'yes');
    expect(getQuestion(tree, 'serviceBenefitBasedOn')).not.to.be.undefined;
  });
  it('should show 1990 button', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'yes');
    answerQuestion(tree, 'serviceBenefitBasedOn', 'own');
    answerQuestion(tree, 'nationalCallToService', 'no');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('1990')).to.be.true;
  });
  it('should show 1995 button', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'no');
    answerQuestion(tree, 'transferredEduBenefits', 'own');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('1995')).to.be.true;
  });
  it('should show 5495 button', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'no');
    answerQuestion(tree, 'transferredEduBenefits', 'fry');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('5495')).to.be.true;
  });
  it('should show 1990N button', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'yes');
    answerQuestion(tree, 'serviceBenefitBasedOn', 'own');
    answerQuestion(tree, 'nationalCallToService', 'yes');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('1990N')).to.be.true;
    expect(tree.subTree('.usa-alert-warning')).not.be.be.false;
  });
  it('should show 5490 button', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'yes');
    answerQuestion(tree, 'serviceBenefitBasedOn', 'other');
    answerQuestion(tree, 'sponsorDeceasedDisabledMIA', 'yes');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('5490')).to.be.true;
  });
  it('should show 1990E button', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'yes');
    answerQuestion(tree, 'serviceBenefitBasedOn', 'other');
    answerQuestion(tree, 'sponsorDeceasedDisabledMIA', 'no');
    answerQuestion(tree, 'sponsorTransferredBenefits', 'yes');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('1990E')).to.be.true;
  });
  it('should show transfer warning', () => {
    const tree = SkinDeep.shallowRender(
      <EducationWizard/>
    );

    answerQuestion(tree, 'newBenefit', 'yes');
    answerQuestion(tree, 'serviceBenefitBasedOn', 'other');
    answerQuestion(tree, 'sponsorDeceasedDisabledMIA', 'no');
    answerQuestion(tree, 'sponsorTransferredBenefits', 'no');
    expect(tree.subTree('#apply-now-link').props.href.endsWith('1990E')).to.be.true;
    expect(tree.subTree('.usa-alert-warning')).not.be.be.false;
  });
});
