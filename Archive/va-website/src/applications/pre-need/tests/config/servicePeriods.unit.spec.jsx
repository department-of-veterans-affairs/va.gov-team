import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillDate } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pre-need service periods', () => {
  function servicePeriodsTests({ schema, uiSchema }, inputCount = 4) {
    it('should render', () => {
      const form = mount(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          uiSchema={uiSchema}/>
      );

      expect(form.find('input').length).to.equal(inputCount);
      expect(form.find('select').length).to.equal(5);
    });

    it('should not submit empty form', () => {
      const onSubmit = sinon.spy();
      const form = mount(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          onSubmit={onSubmit}
          uiSchema={uiSchema}/>
      );

      form.find('form').simulate('submit');

      expect(form.find('.usa-input-error').length).to.equal(1);
      expect(onSubmit.called).to.be.false;
    });

    it('should add another service period', () => {
      const onSubmit = sinon.spy();
      const form = mount(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          onSubmit={onSubmit}
          data={{
            application: {
              veteran: {
                serviceRecords: [{
                  serviceBranch: 'AL'
                }]
              }
            }
          }}
          uiSchema={uiSchema}/>
      );

      expect(form.find('input').length).to.equal(inputCount);
      expect(form.find('select').length).to.equal(5);

      form.find('.va-growable-add-btn').simulate('click');

      expect(form.find('.va-growable-background').first().text()).to.contain('Allied Forces');
    });

    it('should submit with valid data', () => {
      const onSubmit = sinon.spy();
      const form = mount(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          onSubmit={onSubmit}
          data={{
            application: {
              veteran: {
                serviceRecords: [{
                  serviceBranch: 'AL'
                }]
              }
            }
          }}
          uiSchema={uiSchema}/>
      );

      fillDate(form, 'root_application_veteran_serviceRecords_0_dateRange_from', '2002-1-1');
      fillDate(form, 'root_application_veteran_serviceRecords_0_dateRange_to', '2003-1-1');

      form.find('form').simulate('submit');

      expect(form.find('.usa-input-error').length).to.equal(0);
      expect(onSubmit.called).to.be.true;
    });
  }

  const sponsorMilitaryHistory = formConfig.chapters.militaryHistory.pages.sponsorMilitaryHistory;
  const applicantMilitaryHistory = formConfig.chapters.militaryHistory.pages.applicantMilitaryHistory;

  describe('sponsor', () => {
    servicePeriodsTests(sponsorMilitaryHistory);
  });

  describe('applicant', () => {
    servicePeriodsTests(applicantMilitaryHistory);
  });
});
