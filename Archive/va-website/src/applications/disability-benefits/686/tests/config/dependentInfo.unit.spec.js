import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio, selectCheckbox } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('686 dependent info', () => {
  const { schema, uiSchema, arrayPath } = formConfig.chapters.unMarriedChildren.pages.childrenInformation;
  const dependentData = () => {
    // default child age is between 18 - 23
    return {
      'view:hasUnmarriedChildren': true,
      dependents: [
        {
          fullName: {
            first: 'Jane',
            last: 'Doe'
          },
          childDateOfBirth: '1-10-2000'
        }
      ]
    };
  };
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        data={dependentData()}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    expect(form.find('input').length).to.equal(8);
  });

  it('should show disabled if child is less than 18 years old', () => {
    const props = dependentData();
    props.dependents[0].childDateOfBirth = '1-10-2010';
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        data={props}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    expect(form.find('input').length).to.equal(7);
  });

  it('should not show disabled or inSchool if child is older than 23', () => {
    const props = dependentData();
    props.dependents[0].childDateOfBirth = '1-10-1986';
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        data={props}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    expect(form.find('input').length).to.equal(6);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        data={dependentData()}
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit form with required fields filled', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        data={dependentData()}
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input#root_childSocialSecurityNumber', '222-22-2424');
    selectRadio(form, 'root_childRelationship', 'adopted');
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should expand view:stepChildCondition if stepChild is selected', () => {
    const form = mount(
      <DefinitionTester
        data={dependentData()}
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_childRelationship', 'stepchild');
    expect(form.find('input').length).to.equal(10);
  });

  it('should expand info boxes if child is in school and disabled', () => {
    const form = mount(
      <DefinitionTester
        data={dependentData()}
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    selectCheckbox(form, 'root_inSchool', true);
    selectCheckbox(form, 'root_disabled', true);

    expect(form.find('.usa-alert-warning').length).to.equal(2);
  });
});

