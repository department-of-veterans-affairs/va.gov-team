import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import { schema, uiSchema } from '../../../../src/applications/common/schemaform/definitions/address';
import { address } from 'vets-json-schema/dist/definitions.json';

const addressSchema = {
  definitions: {
    address
  }
};

describe('Schemaform definition address', () => {
  it('should render address', () => {
    const s = schema(addressSchema, false);
    const uis = uiSchema();
    const form = mount(
      <DefinitionTester
        schema={s}
        uiSchema={uis}/>
    );

    // Count the form elements
    const inputs = form.find('input');
    const selects = form.find('select');
    expect(inputs.length).to.equal(4);
    expect(selects.length).to.equal(2);

    // Postal code should be small
    expect(inputs.last().is('.usa-input-medium')).to.be.true;

    // country is USA and there is no blank option
    expect(selects.first().props().value).to.equal('USA');
    expect(selects.first().find('option').everyWhere(n => !!n.props().value)).to.be.true;
  }).timeout(4000);

  it('should have required inputs if required', () => {
    const s = schema(addressSchema, true);
    const uis = uiSchema();
    const form = mount(
      <DefinitionTester
        schema={s}
        uiSchema={uis}/>
    );

    // Ideally, we'd get the required inputs, not the <span>s denoting required
    //  fields but this doesn't work.
    // const requiredInputs = formDOM.querySelectorAll('input[required=true]');
    const requiredInputs = form.find('label').find('span.schemaform-required-span');
    expect(requiredInputs.length).to.not.equal(0);
  }).timeout(4000);

  it('should update labels and state selection conditionally', () => {
    const s = schema(addressSchema, false);
    const uis = uiSchema();
    const form = mount(
      <DefinitionTester
        schema={s}
        uiSchema={uis}/>
    );

    const labels = form.find('label');
    const postalCodeLabel = labels.findWhere(label => label.props().htmlFor === 'root_postalCode');
    const stateLabel = labels.findWhere(label => label.props().htmlFor === 'root_state');
    const stateField = form.find('select#root_state');

    // Check the labels' text
    expect(postalCodeLabel.text()).to.equal('Postal code');
    expect(stateLabel.text()).to.equal('State');

    // And state input type / options
    expect(stateField.find('option').someWhere(n => n.props().value === 'OR')).to.be.true;

    // Entering a military city should result in different "state" options
    fillData(form, 'input#root_city', 'apo');
    expect(stateField.find('option').someWhere(n => n.props().value === 'AA')).to.be.true;

    // Change the country
    fillData(form, 'select#root_country', 'CAN');

    // Check to see if the postal code and state updated
    expect(stateLabel.text()).to.equal('Province');
    expect(postalCodeLabel.text()).to.equal('Postal code');
    expect(form.find('select#root_state').find('option').someWhere(n => n.props().value === 'QC')).to.be.true;

    // Check for Mexican states
    fillData(form, 'select#root_country', 'MEX');
    expect(form.find('select#root_state').find('option').someWhere(n => n.props().value === 'guerrero')).to.be.true;

    // Change to another country that doesn't have a select box for state
    fillData(form, 'select#root_country', 'BEL');
    expect(form.find('input#root_state').exists()).to.be.true;
  }).timeout(4000);

  it('should update address field', () => {
    const s = schema(addressSchema, false);
    const uis = uiSchema();
    const form = mount(
      <DefinitionTester
        schema={s}
        uiSchema={uis}/>
    );

    fillData(form, 'input#root_street', '123 street');

    expect(form.find('input#root_street').props().value).to.equal('123 street');
  }).timeout(4000);

  it('should update country field in empty address', () => {
    const s = schema(addressSchema, false);
    const uis = uiSchema();
    const form = mount(
      <DefinitionTester
        schema={s}
        uiSchema={uis}/>
    );

    fillData(form, 'select#root_country', 'CAN');

    expect(form.find('select#root_country').props().value).to.equal('CAN');
  }).timeout(4000);

  it('should require state for non-required addresses with other info', () => {
    const s = schema(addressSchema, false);
    const uis = uiSchema();
    const form = mount(
      <DefinitionTester
        schema={s}
        uiSchema={uis}/>
    );

    fillData(form, 'input#root_street', '123 st');
    fillData(form, 'input#root_city', 'Northampton');
    fillData(form, 'input#root_postalCode', '12345');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error-message').length).to.equal(1);
  }).timeout(4000);
});
