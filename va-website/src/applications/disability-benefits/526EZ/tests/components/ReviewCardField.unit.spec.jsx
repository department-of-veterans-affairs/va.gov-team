import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import ReviewCardField from '../../components/ReviewCardField';


const viewComponent = (formData) => {
  return (
    <div>
      {Object.keys(formData).map(property => <p key={property}>{property}</p>)}
    </div>
  );
};


describe('Schemaform: ReviewCardField', () => {
  const defaultProps = {
    schema: {
      type: 'object',
      properties: {
        field1: { type: 'string' },
        field2: { type: 'boolean' }
      }
    },
    uiSchema: {
      'ui:field': ReviewCardField,
      'ui:options': { viewComponent }
    },
    // This isn't actually fixing the failed prop types warnings...
    idSchema: { $id: 'something' },
    errorSchema: {
      field1: { __errors: [] },
      field2: { __errors: [] }
    },
    formContext: {
      onError: () => {},
      // This isn't actually fixing the failed prop types warnings...
      onBlur: () => {}
    },
    formData: {}
  };


  it('sould render', () => {
    const wrapper = shallow(<ReviewCardField {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });


  it('should throw an error if no viewComponent is found', () => {
    expect(() => {
      shallow(<ReviewCardField {...defaultProps} uiSchema={{}}/>);
    }).to.throw('viewComponent');
  });


  it('should throw an error if schema type is not object or array', () => {
    expect(() => {
      shallow(<ReviewCardField {...defaultProps} schema={{ type: 'string' }}/>);
    }).to.throw('Unknown schema type');
  });


  // Also tests that it renders a custom component
  it('should start in view mode', () => {
    const wrapper = shallow(<ReviewCardField {...defaultProps}/>);
    expect(wrapper.find('viewComponent').length).to.equal(1);
    expect(wrapper.find('.input-section').length).to.equal(0);
  });


  it('should start in edit mode', () => {
    const errorSchema = {
      field1: { __errors: ['Arbitrary error string here'] },
      field2: { __errors: [] }
    };
    const wrapper = shallow(<ReviewCardField {...defaultProps} errorSchema={errorSchema}/>);
    expect(wrapper.find('viewComponent').length).to.equal(0);
    expect(wrapper.find('.input-section').length).to.equal(1);
  });


  it('should pass formData the custom view component', () => {
    const wrapper = shallow(<ReviewCardField {...defaultProps}/>);
    expect(wrapper.find('viewComponent').props()).to.eql({ formData: defaultProps.formData });
  });


  it('should transition to edit mode', () => {
    const wrapper = shallow(<ReviewCardField {...defaultProps}/>);
    expect(wrapper.find('viewComponent').length).to.equal(1);

    // Start editing
    wrapper.find('.usa-button-secondary').simulate('click');
    expect(wrapper.find('viewComponent').length).to.equal(0);
    expect(wrapper.find('.input-section').length).to.equal(1);
  });


  it('should transition to view mode', () => {
    // Not sure how to be not duplicate an existing test here
    const wrapper = shallow(<ReviewCardField {...defaultProps}/>);
    expect(wrapper.find('viewComponent').length).to.equal(1);

    // Start editing
    wrapper.find('.usa-button-secondary').simulate('click');
    expect(wrapper.find('viewComponent').length).to.equal(0);
    expect(wrapper.find('.input-section').length).to.equal(1);

    // Go back to viewing
    wrapper.find('.update-button').simulate('click');
    expect(wrapper.find('.input-section').length).to.equal(0);
    expect(wrapper.find('viewComponent').length).to.equal(1);
  });


  it('should not transition to view mode if there are validation errors', () => {
    // Start with errors
    const errorSchema = {
      field1: { __errors: ['Arbitrary error string here'] },
      field2: { __errors: [] }
    };
    const wrapper = mount(<ReviewCardField {...defaultProps} errorSchema={errorSchema}/>);
    expect(wrapper.find('viewComponent').length).to.equal(0);
    expect(wrapper.find('.input-section').length).to.equal(1);

    // Try to go back to viewing
    wrapper.find('.update-button').simulate('click');
    expect(wrapper.find('.input-section').length).to.equal(1);
    expect(wrapper.find('viewComponent').length).to.equal(0);

    // Also check that the validation error is rendered while we're at it
    expect(wrapper.text()).to.contain('Arbitrary error string here');
  });
});
