/** 
 * Utilities for testing forms built with our schema based form library
 */

import _ from 'lodash/fp';
import Form from '@department-of-veterans-affairs/react-jsonschema-form';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';

import React from 'react';
import { findDOMNode } from 'react-dom';
import SchemaForm from '../../../applications/common/schemaform/components/SchemaForm';
import { fillDate as oldFillDate } from './helpers';

import {
  replaceRefSchemas,
  updateSchemaAndData
} from '../../../applications/common/schemaform/state/helpers';

function getDefaultData(schema) {
  if (schema.type === 'array') {
    return [];
  } else if (schema.type === 'object') {
    return {};
  }

  return undefined;
}

/**
 * A React component that takes in a schema, uiSchema, and formData
 * and renders a form. We use this to test that definitions from form configs
 * are correct without having to setup a whole form and handle state
 * management.
 *
 * @extends {React.Component}
 * @property {object} schema JSON Schema object for a form snippet
 * @property {object} uiSchema  Object with UI information for a form snippet
 * @property {object} data  Object with form data
 * @property {string} arrayPath This is the array path in the schema that you want
 * to render as a pagePerItem page
 * @property {number} pagePerItemIndex When simulating a page per item form page,
 * this is the index for the item to render.
 * @property {boolean} reviewMode Renders the form in review mode if true 
 * @property {function} onSubmit Will be called if a form is submitted
 * @property {function} onFileUpload Will be called if a file upload is triggered
 */
export class DefinitionTester extends React.Component {
  constructor(props) {
    super(props);
    const { data, uiSchema } = props;
    const definitions = _.assign(props.definitions || {}, props.schema.definitions);
    const schema = replaceRefSchemas(props.schema, definitions);

    const {
      data: newData,
      schema: newSchema
    } = updateSchemaAndData(schema, uiSchema, data || getDefaultData(schema));

    this.state = {
      formData: newData,
      schema: newSchema,
      uiSchema
    };
  }
  debouncedAutoSave = sinon.spy();
  handleChange = (data) => {
    const {
      schema,
      uiSchema,
      formData
    } = this.state;
    const { pagePerItemIndex, arrayPath } = this.props;

    let fullData = data;

    if (arrayPath) {
      fullData = _.set([arrayPath, pagePerItemIndex], data, formData);
    }

    const {
      data: newData,
      schema: newSchema
    } = updateSchemaAndData(schema, uiSchema, fullData);

    this.setState({
      formData: newData,
      schema: newSchema,
      uiSchema
    });
  }
  render() {
    let { schema, uiSchema, formData } = this.state;
    const { pagePerItemIndex, arrayPath } = this.props;

    if (arrayPath) {
      schema = schema.properties[arrayPath].items[pagePerItemIndex];
      uiSchema = uiSchema[arrayPath].items;
      formData = formData ? formData[arrayPath][pagePerItemIndex] : formData;
    }

    return (
      <SchemaForm
        onBlur={this.debouncedAutoSave}
        safeRenderCompletion
        reviewMode={this.props.reviewMode}
        name="test"
        title={this.props.title || 'test'}
        schema={schema}
        uiSchema={uiSchema}
        data={formData}
        pagePerItemIndex={this.props.pagePerItemIndex}
        onChange={this.handleChange}
        uploadFile={this.props.uploadFile}
        onSubmit={this.props.onSubmit}/>
    );
  }
}

/**
 * Finds a form rendered into the DOM with ReactTestUtils
 * and triggers a submit event on it.
 *
 * @param {Element} form The element containing the form
 */
export function submitForm(form) {
  ReactTestUtils.findRenderedComponentWithType(form, Form).onSubmit({
    preventDefault: f => f
  });
}

function getIdentifier(node) {
  const tagName = node.tagName.toLowerCase();
  const id = node.id ? `#${node.id}` : '';
  const name = node.name ? `[name='${node.name}']` : '';
  let classList = '';

  const classes = node.getAttribute('class');
  if (classes) {
    // Make a dot-separated list of class names
    classList = classes.split(' ').reduce((c, carry) => `${c}.${carry}`, '');
    return `${tagName}${classList}`;
  }

  return `${tagName}${id}${name}${classList}`;
}

const bar = '\u2551';
const elbow = '\u2559';
const tee = '\u255F';

function printTree(node, level = 0, isLastChild = true, padding = '') {
  const nextLevel = level + 1; // For tail call optimization...theoretically...
  const lastPipe = isLastChild ? `${elbow} ` : `${tee} `;

  console.log(`${padding}${lastPipe}${getIdentifier(node)}`); // eslint-disable-line no-console

  // Recurse for each child
  const newPadding = padding + (isLastChild ? '  ' : `${bar} `);
  const children = Array.from(node.children);
  children.forEach((child, index) => {
    const isLast = index === children.length - 1;
    return printTree(child, nextLevel, isLast, newPadding);
  });
}

/**
 * Gets the DOM node associated with the form tree passed in.
 *
 * @param {React.Element} form The root level of a rendered form
 * @returns {object} An DOM node for the form, with added helper methods
 */
export function getFormDOM(form) {
  const formDOM = findDOMNode(form);

  if (formDOM === null) {
    throw new Error('Could not find DOM node. Please make sure to pass a component returned from ReactTestUtils.renderIntoDocument(). If you are testing a stateless (function) component, be sure to wrap it in a <div>.');
  }

  /**
   * Returns the element or throws a nicer error.
   *
   * @param  {string} selector The css selector
   * @return {element}         The element returned from querySelctor()
   */
  formDOM.getElement = function getElement(selector) {
    const element = this.querySelector(selector);

    if (!element) {
      throw new Error(`Could not find element at ${selector}`);
    }

    return element;
  };

  formDOM.fillData = function fillDataFn(id, value) {
    ReactTestUtils.Simulate.change(this.getElement(id), {
      target: {
        value
      }
    });
  };

  formDOM.files = function fillFiles(id, files) {
    ReactTestUtils.Simulate.change(this.getElement(id), {
      target: {
        files
      }
    });
  };

  formDOM.submitForm = () => {
    submitForm(form);
  };

  formDOM.setCheckbox = function toggleCheckbox(selector, checked) {
    ReactTestUtils.Simulate.change(this.getElement(selector), {
      target: {
        checked
      }
    });
  };

  // Accepts 'Y', 'N', true, false
  formDOM.setYesNo = function setYesNo(selector, value) {
    const isYes = typeof value === 'string' ? value.toLowerCase() === 'y' : !!value;
    ReactTestUtils.Simulate.change(this.getElement(selector), {
      target: {
        value: isYes ? 'Y' : 'N'
      }
    });
  };

  formDOM.selectRadio = function selectRadioFn(fieldName, value) {
    ReactTestUtils.Simulate.change(this.getElement(`input[name*="${fieldName}"][value="${value}"]`), {
      target: { value }
    });
  };

  formDOM.click = function click(selector) {
    ReactTestUtils.Simulate.click(this.getElement(selector));
  };

  formDOM.fillDate = function populateDate(partialId, dateString) {
    oldFillDate(this, partialId, dateString);
  };

  /**
   * Prints the formDOM as a tree in the console for debugging purposes
   * @return {void}
   */
  formDOM.printTree = function print() {
    printTree(this);
  };

  return formDOM;
}

/**
 * Enzyme helper that fires a change event with a value for
 * an element at the given selector
 *
 * @param {Enzyme} form The enzyme object that contains a form
 * @param {string} selector The selector to find the input to fill
 * @param {string} value The data to fill in the input
 */
export function fillData(form, selector, value) {
  form.find(selector).simulate('change', {
    target: {
      value
    }
  });
}

/**
 * Enzyme helper that fires a change event with a value for
 * a checkbox at the given name
 *
 * @param {Enzyme} form The enzyme object that contains a form
 * @param {string} fieldName The input name of the checkbox
 * @param {string} value The data to fill in the input
 */
export function selectCheckbox(form, fieldName, value) {
  form.find(`input[name*="${fieldName}"]`).simulate('change', {
    target: { checked: value }
  });
}

/**
 * Enzyme helper that fires a change event with a value for
 * a radio button at the given name
 *
 * @param {Enzyme} form The enzyme object that contains a form
 * @param {string} fieldName The input name of the radio button
 * @param {string} value The data to fill in the input
 */
export function selectRadio(form, fieldName, value) {
  form.find(`input[name*="${fieldName}"][value="${value}"]`).simulate('change', {
    target: { value }
  });
}

/**
 * Enzyme helper that fills in a date field with data from the
 * given date string.
 *
 * @param {Enzyme} form The enzyme object that contains a form
 * @param {string} partialId The id for the date field, without the month/day/year prefix 
 * @param {string} dateString The date to fill in the input
 */
export function fillDate(form, partialId, dateString) {
  const date = dateString.split('-');
  const month = form.find(`select#${partialId}Month`);
  const day = form.find(`select#${partialId}Day`);
  const year = form.find(`input#${partialId}Year`);

  month.simulate('change', {
    target: { value: date[1] }
  });

  day.simulate('change', {
    target: { value: date[2] }
  });
  year.simulate('change', {
    target: { value: date[0] }
  });
}
