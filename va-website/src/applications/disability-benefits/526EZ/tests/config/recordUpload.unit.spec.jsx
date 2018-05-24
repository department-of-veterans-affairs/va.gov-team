import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, // selectCheckbox 
} from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';
import initialData from '../schema/initialData.js';

const invalidDocumentData = {
  disabilities: [
    {
      privateRecords: [{
        confirmationCode: 'testing'
      }],
      disability: { // Is this extra nesting necessary?
        diagnosticText: 'PTSD',
        decisionCode: 'Filler text', // Should this be a string?
        // Is this supposed to be an array?
        specialIssues: {
          specialIssueCode: 'Filler text',
          specialIssueName: 'Filler text'
        },
        ratedDisabilityId: '12345',
        disabilityActionType: 'Filler text',
        ratingDecisionId: '67890',
        diagnosticCode: 'Filler text',
        // Presumably, this should be an array...
        secondaryDisabilities: [
          {
            diagnosticText: 'First secondary disability',
            disabilityActionType: 'Filler text'
          },
          {
            diagnosticText: 'Second secondary disability',
            disabilityActionType: 'Filler text'
          }
        ]
      }
    },
    {
      disability: { // Is this extra nesting necessary?
        diagnosticText: 'Second Disability',
        decisionCode: 'Filler text', // Should this be a string?
        // Is this supposed to be an array?
        specialIssues: {
          specialIssueCode: 'Filler text',
          specialIssueName: 'Filler text'
        },
        ratedDisabilityId: '54321',
        disabilityActionType: 'Filler text',
        ratingDecisionId: '09876',
        diagnosticCode: 'Filler text',
        // Presumably, this should be an array...
        secondaryDisabilities: [
          {
            diagnosticText: 'First secondary disability',
            disabilityActionType: 'Filler text'
          },
          {
            diagnosticText: 'Second secondary disability',
            disabilityActionType: 'Filler text'
          }
        ]
      }
    }
  ]
};

const validDocumentData = {
  disabilities: [
    {
      privateRecords: [{
        name: 'Form526.pdf',
        confirmationCode: 'testing'
      }],
      disability: { // Is this extra nesting necessary?
        diagnosticText: 'PTSD',
        decisionCode: 'Filler text', // Should this be a string?
        // Is this supposed to be an array?
        specialIssues: {
          specialIssueCode: 'Filler text',
          specialIssueName: 'Filler text'
        },
        ratedDisabilityId: '12345',
        disabilityActionType: 'Filler text',
        ratingDecisionId: '67890',
        diagnosticCode: 'Filler text',
        // Presumably, this should be an array...
        secondaryDisabilities: [
          {
            diagnosticText: 'First secondary disability',
            disabilityActionType: 'Filler text'
          },
          {
            diagnosticText: 'Second secondary disability',
            disabilityActionType: 'Filler text'
          }
        ]
      }
    },
    {
      disability: { // Is this extra nesting necessary?
        diagnosticText: 'Second Disability',
        decisionCode: 'Filler text', // Should this be a string?
        // Is this supposed to be an array?
        specialIssues: {
          specialIssueCode: 'Filler text',
          specialIssueName: 'Filler text'
        },
        ratedDisabilityId: '54321',
        disabilityActionType: 'Filler text',
        ratingDecisionId: '09876',
        diagnosticCode: 'Filler text',
        // Presumably, this should be an array...
        secondaryDisabilities: [
          {
            diagnosticText: 'First secondary disability',
            disabilityActionType: 'Filler text'
          },
          {
            diagnosticText: 'Second secondary disability',
            disabilityActionType: 'Filler text'
          }
        ]
      }
    }
  ]
};

describe('526EZ record upload', () => {
  const page = formConfig.chapters.supportingEvidence.pages.recordUpload;
  const { schema, uiSchema, arrayPath } = page;

  it('should render', () => {
    const form = mount(<DefinitionTester
      arrayPath={arrayPath}
      pagePerItemIndex={0}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(1);
  });

  it('should submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = mount(<DefinitionTester
      arrayPath={arrayPath}
      pagePerItemIndex={0}
      onSubmit={onSubmit}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error-message').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should not submit without required info', () => {
    const onSubmit = sinon.spy();
    const form = mount(<DefinitionTester
      arrayPath={arrayPath}
      onSubmit={onSubmit}
      pagePerItemIndex={0}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={invalidDocumentData}
      uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error-message').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = mount(<DefinitionTester
      arrayPath={arrayPath}
      onSubmit={onSubmit}
      pagePerItemIndex={0}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={validDocumentData}
      uiSchema={uiSchema}/>
    );


    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error-message').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
