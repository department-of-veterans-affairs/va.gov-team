import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5490/config/form';

describe('Edu 5490 benefitSelection', () => {
  const { schema, uiSchema } = formConfig.chapters.benefitSelection.pages.benefitSelection;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{ relationship: 'spouse' }}
        uiSchema={uiSchema}/>
    );
    const fields = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input').concat(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'select')
    );

    expect(fields.length)
      .to.equal(2);
  });

  it('should show nested content', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        state={{
          benefitSelection: {
            uiSchema: {
              benefit: {
                'ui:options': {
                }
              }
            }
          }
        }}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelector('.form-radio-buttons + span .usa-alert')).to.be.null;
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_benefit_0'), {
      target: {
        checked: true
      }
    });
    // check that an alert box is shown when an option is selected
    /*
    setTimeout(() => {
      expect(formDOM.querySelector('.form-radio-buttons + span .usa-alert')).not.to.be.null;
      done(); // eslint-disable-line
    }, 500);
    */
  });

  it('should show errors when required fields are empty', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        state={{
          benefitSelection: {
            uiSchema: {
              benefit: {
                'ui:options': {
                }
              }
            }
          }
        }}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).not.to.be.empty;
    expect(onSubmit.called).not.to.be.true;
  });

  it('should show no errors when all required fields are filled', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        state={{
          benefitSelection: {
            uiSchema: {
              benefit: {
                'ui:options': {
                }
              }
            }
          }
        }}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    const find = formDOM.querySelector.bind(formDOM);

    ReactTestUtils.Simulate.change(find('#root_benefit_0'), {
      target: {
        checked: true
      }
    });
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
    expect(onSubmit.called).to.be.true;
  });
});
