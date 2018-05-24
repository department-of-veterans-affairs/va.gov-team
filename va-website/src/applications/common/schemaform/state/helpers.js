import _ from 'lodash/fp';
import { getDefaultFormState } from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

import {
  checkValidSchema,
  createFormPageList
} from '../helpers';

function isHiddenField(schema) {
  return !!schema['ui:collapsed'] || !!schema['ui:hidden'];
}

function get(path, data) {
  return path.reduce((current, next) => {
    return typeof current === 'undefined' ? current : current[next];
  }, data);
}

/*
 * This function goes through a schema/uiSchema and updates the required array
 * based on any ui:required field properties in the uiSchema.
 *
 * If no required fields are changing, it makes sure to not mutate the existing schema,
 * so we can still take advantage of any shouldComponentUpdate optimizations
 */
export function updateRequiredFields(schema, uiSchema, formData, index = null) {
  if (!uiSchema) {
    return schema;
  }

  if (schema.type === 'object') {
    const newRequired = Object.keys(schema.properties).reduce((requiredArray, nextProp) => {
      const field = uiSchema[nextProp];
      if (field && field['ui:required']) {
        const isRequired = field['ui:required'](formData, index);
        const arrayHasField = requiredArray.some(prop => prop === nextProp);

        if (arrayHasField && !isRequired) {
          return requiredArray.filter(prop => prop !== nextProp);
        } else if (!arrayHasField && isRequired) {
          return requiredArray.concat(nextProp);
        }

        return requiredArray;
      }

      return requiredArray;
    }, schema.required || []);

    const newSchema = Object.keys(schema.properties).reduce((currentSchema, nextProp) => {
      if (uiSchema) {
        const nextSchema = updateRequiredFields(currentSchema.properties[nextProp], uiSchema[nextProp], formData, index);
        if (nextSchema !== currentSchema.properties[nextProp]) {
          return _.set(['properties', nextProp], nextSchema, currentSchema);
        }
      }

      return currentSchema;
    }, schema);

    if (newSchema.required !== newRequired && (newSchema.required || newRequired.length > 0)) {
      return _.set('required', newRequired, newSchema);
    }

    return newSchema;
  }

  if (schema.type === 'array') {
    // each item has its own schema, so we need to update the required fields on those schemas
    // and then check for differences
    const newItemSchemas = schema.items.map((item, idx) => updateRequiredFields(item, uiSchema.items, formData, idx));
    if (newItemSchemas.some((newItem, idx) => newItem !== schema.items[idx])) {
      return _.set('items', newItemSchemas, schema);
    }
  }

  return schema;
}

export function isContentExpanded(data, matcher) {
  if (typeof matcher === 'undefined') {
    return !!data;
  } else if (typeof matcher === 'function') {
    return matcher(data);
  }

  return data === matcher;
}

/*
 * This steps through a schema and sets any fields to hidden, based on a
 * hideIf function from uiSchema and the current page data. Sets 'ui:hidden'
 * which is a non-standard JSON Schema property
 *
 * The path parameter will contain the path, relative to formData, to the
 * form data corresponding to the current schema object
 */
export function setHiddenFields(schema, uiSchema, formData, path = []) {
  if (!uiSchema) {
    return schema;
  }

  // expandUnder fields are relative to the parent object of the current
  // field, so get that object using path here
  const containingObject = get(path.slice(0, -1), formData) || formData;

  let updatedSchema = schema;
  const hideIf = get(['ui:options', 'hideIf'], uiSchema);
  const index = path.reduce((current, next) => {
    return typeof next === 'number' ? next : current;
  }, null);

  if (hideIf && hideIf(formData, index)) {
    if (!updatedSchema['ui:hidden']) {
      updatedSchema = _.set('ui:hidden', true, updatedSchema);
    }
  } else if (updatedSchema['ui:hidden']) {
    updatedSchema = _.unset('ui:hidden', updatedSchema);
  }

  const expandUnder = get(['ui:options', 'expandUnder'], uiSchema);
  const expandUnderCondition = get(['ui:options', 'expandUnderCondition'], uiSchema);
  if (expandUnder && !isContentExpanded(containingObject[expandUnder], expandUnderCondition)) {
    if (!updatedSchema['ui:collapsed']) {
      updatedSchema = _.set('ui:collapsed', true, updatedSchema);
    }
  } else if (updatedSchema['ui:collapsed']) {
    updatedSchema = _.unset('ui:collapsed', updatedSchema);
  }

  if (updatedSchema.type === 'object') {
    const newProperties = Object.keys(updatedSchema.properties).reduce((current, next) => {
      const newSchema = setHiddenFields(updatedSchema.properties[next], uiSchema[next], formData, path.concat(next));

      if (newSchema !== updatedSchema.properties[next]) {
        return _.set(next, newSchema, current);
      }

      return current;
    }, updatedSchema.properties);

    if (newProperties !== updatedSchema.properties) {
      return _.set('properties', newProperties, updatedSchema);
    }
  }

  if (updatedSchema.type === 'array') {
    // each item has its own schema, so we need to update the required fields on those schemas
    // and then check for differences
    const newItemSchemas = updatedSchema.items.map((item, idx) =>
      setHiddenFields(item, uiSchema.items, formData, path.concat(idx))
    );

    if (newItemSchemas.some((newItem, idx) => newItem !== updatedSchema.items[idx])) {
      return _.set('items', newItemSchemas, updatedSchema);
    }
  }

  return updatedSchema;
}

/*
 * Steps through data and removes any fields that are marked as hidden
 * This is done so that hidden fields don’t cause validation errors that
 * a user can’t see.
 */
export function removeHiddenData(schema, data) {
  // null is necessary here because Rails 4 will convert empty arrays to null
  // In the forms, there's no difference between an empty array and null or undefined
  if (isHiddenField(schema) || typeof data === 'undefined' || data === null) {
    return undefined;
  }

  if (schema.type === 'object') {
    return Object.keys(data).reduce((current, next) => {
      if (typeof data[next] !== 'undefined' && schema.properties[next]) {
        const nextData = removeHiddenData(schema.properties[next], data[next]);

        // if the data was removed, then just unset it
        if (typeof nextData === 'undefined') {
          return _.unset(next, current);
        }

        // if data was updated (like a nested prop was removed), update it
        if (nextData !== data[next]) {
          return _.set(next, nextData, current);
        }
      }

      return current;
    }, data);
  }

  if (schema.type === 'array') {
    const newItems = data.map((item, index) => {
      return removeHiddenData(schema.items[index], item);
    });

    if (newItems.some((newItem, idx) => newItem !== data[idx])) {
      return newItems;
    }

    return data;
  }

  return data;
}

/*
 * This is similar to the hidden fields schema function above, except more general.
 * It will step through a schema and replace parts of it based on an updateSchema
 * function in uiSchema. This means the schema can be re-calculated based on data
 * a user has entered.
 */
export function updateSchemaFromUiSchema(schema, uiSchema, formData, index = null, path = []) {
  if (!uiSchema) {
    return schema;
  }

  let currentSchema = schema;

  if (currentSchema.type === 'object') {
    const newSchema = Object.keys(currentSchema.properties).reduce((current, next) => {
      const nextProp = updateSchemaFromUiSchema(current.properties[next], uiSchema[next], formData, index, path.concat(next));

      if (current.properties[next] !== nextProp) {
        return _.set(['properties', next], nextProp, current);
      }

      return current;
    }, currentSchema);

    if (newSchema !== schema) {
      currentSchema = newSchema;
    }
  }

  if (currentSchema.type === 'array') {
    // each item has its own schema, so we need to update the required fields on those schemas
    // and then check for differences
    const newItemSchemas = currentSchema.items.map((item, idx) =>
      updateSchemaFromUiSchema(item, uiSchema.items, formData, idx, path.concat(idx))
    );

    if (newItemSchemas.some((newItem, idx) => newItem !== currentSchema.items[idx])) {
      currentSchema = _.set('items', newItemSchemas, currentSchema);
    }
  }

  const updateSchema = get(['ui:options', 'updateSchema'], uiSchema);

  if (updateSchema) {
    const newSchemaProps = updateSchema(formData, currentSchema, uiSchema, index, path);

    const newSchema = Object.keys(newSchemaProps).reduce((current, next) => {
      if (newSchemaProps[next] !== schema[next]) {
        return _.set(next, newSchemaProps[next], current);
      }

      return current;
    }, currentSchema);

    if (newSchema !== currentSchema) {
      return newSchema;
    }
  }

  return currentSchema;
}

export function replaceRefSchemas(schema, definitions, path = '') {
  // this can happen if you import a field that doesn’t exist from a schema
  if (!schema) {
    throw new Error(`Schema is undefined at ${path}`);
  }
  if (schema.$ref) {
    // There’s a whole spec for JSON pointers, but we don’t use anything more complicated
    // than this so far
    const refPath = schema.$ref.replace('#/definitions/', '').split('/');
    const definition = get(refPath, definitions);
    if (!definition) {
      throw new Error(`Missing definition for ${schema.$ref} at ${path}. You probably need to add it to defaultDefinitions`);
    }

    return replaceRefSchemas(definition, definitions, path);
  }

  if (schema.type === 'object') {
    const newSchema = Object.keys(schema.properties).reduce((current, next) => {
      const nextProp = replaceRefSchemas(schema.properties[next], definitions, `${path}.${next}`);

      if (current.properties[next] !== nextProp) {
        return _.set(['properties', next], nextProp, current);
      }

      return current;
    }, schema);

    return newSchema;
  }

  if (schema.type === 'array') {
    const newItems = replaceRefSchemas(schema.items, definitions, `${path}.items`);

    if (newItems !== schema.items) {
      return _.set('items', newItems, schema);
    }
  }

  return schema;
}

/**
 * This function updates an array schema to use the array of
 * item schema format and keeps that array in sync with the
 * data in that array in the form data.
 *
 * This allows us to have conditional fields for each array item,
 * because our conditional field implementation depends on modifying
 * schemas
 *
 * @param {Object} schema The current JSON Schema object
 * @param {any} fieldData The data associated with the current schema
 */
export function updateItemsSchema(schema, fieldData = null) {
  if (schema.type === 'array') {
    let newSchema = schema;

    // This happens the first time this function is called when
    // generating the form
    if (!Array.isArray(schema.items)) {
      newSchema = _.assign(schema, {
        items: [],
        additionalItems: schema.items
      });
    }

    if (!fieldData) {
      // If there’s no data, the list of schemas should be empty
      newSchema = _.set('items', [], newSchema);
    } else if (fieldData.length > newSchema.items.length) {
      // Here we’re filling in the items array to make it the same
      // length as the array of form data. This happens when you add
      // another record on the form, mainly.
      const fillIn = Array(fieldData.length - newSchema.items.length)
        .fill(newSchema.additionalItems);
      newSchema = _.set('items', newSchema.items.concat(fillIn), newSchema);
    } else if (fieldData.length < newSchema.items.length) {
      // If someone removed a record we’re removing the last schema item
      // This may not be the actual removed schema, but the schemas will
      // always be updated in the next step
      newSchema = _.set('items', _.dropRight(1, newSchema.items), newSchema);
    }

    const updatedItems = newSchema.items.map(
      (item, index) => updateItemsSchema(item, fieldData[index])
    );
    if (newSchema.items.some((item, index) => item !== updatedItems[index])) {
      return _.set('items', updatedItems, newSchema);
    }

    return newSchema;
  }

  if (schema.type === 'object') {
    const newSchema = Object.keys(schema.properties).reduce((current, next) => {
      const nextProp = updateItemsSchema(schema.properties[next], fieldData ? fieldData[next] : null);

      if (current.properties[next] !== nextProp) {
        return _.set(['properties', next], nextProp, current);
      }

      return current;
    }, schema);

    return newSchema;
  }

  return schema;
}

/**
 * This is the main sequence of updates that happens when data is changed
 * on a form. Most updates are applied to the schema, except that the data
 * is updated to remove newly hidden data
 *
 * @param {Object} schema The current JSON Schema
 * @param {Object} uiSchema The current UI Schema (does not change)
 * @param {Object} formData Flattened data for the entire form
 */
export function updateSchemaAndData(schema, uiSchema, formData) {
  let newSchema = updateItemsSchema(schema, formData);
  newSchema = updateRequiredFields(newSchema, uiSchema, formData);

  // Update the schema with any fields that are now hidden because of the data change
  newSchema = setHiddenFields(newSchema, uiSchema, formData);

  // Update the schema with any general updates based on the new data
  newSchema = updateSchemaFromUiSchema(newSchema, uiSchema, formData);

  // Remove any data that’s now hidden in the schema
  const newData = removeHiddenData(newSchema, formData);

  // We need to do this again because array data might have been removed
  newSchema = updateItemsSchema(newSchema, newData);

  checkValidSchema(newSchema);

  return {
    data: newData,
    schema: newSchema
  };
}

export function recalculateSchemaAndData(initialState) {
  return Object.keys(initialState.pages)
    .reduce((state, pageKey) => {
      // on each data change, we need to do the following steps
      // Recalculate any required fields, based on the new data
      const page = state.pages[pageKey];
      const formData = initialState.data;

      const { data, schema } = updateSchemaAndData(page.schema, page.uiSchema, formData);

      let newState = state;

      if (formData !== data) {
        newState = _.set('data', data, state);
      }

      if (page.schema !== schema) {
        newState = _.set(['pages', pageKey, 'schema'], schema, newState);
      }

      if (page.showPagePerItem) {
        const arrayData = _.get(page.arrayPath, newState.data) || [];
        // If an item was added or removed for the data used by a showPagePerItem page,
        // we have to reset everything because we can’t match the edit states to rows directly
        // This will rarely ever be noticeable
        if (page.editMode.length !== arrayData.length) {
          newState = _.set(['pages', pageKey, 'editMode'], arrayData.map(() => false), newState);
        }
      }

      return newState;
    }, initialState);
}

export function createInitialState(formConfig) {
  let initialState = {
    submission: {
      status: false,
      errorMessage: false,
      id: false,
      timestamp: false,
      hasAttemptedSubmit: false
    },
    formId: formConfig.formId,
    loadedData: {
      formData: {},
      metadata: {}
    },
    reviewPageView: {
      openChapters: [],
      viewedPages: new Set()
    },
    trackingPrefix: formConfig.trackingPrefix
  };

  const pageAndDataState = createFormPageList(formConfig)
    .reduce((state, page) => {
      const definitions = _.assign(formConfig.defaultDefinitions || {}, page.schema.definitions);
      let schema = replaceRefSchemas(page.schema, definitions, page.pageKey);
      // Throw an error if the new schema is invalid
      checkValidSchema(schema);
      schema = updateItemsSchema(schema);
      const isArrayPage = page.showPagePerItem;
      const data = getDefaultFormState(schema, page.initialData, schema.definitions);

      /* eslint-disable no-param-reassign */
      state.pages[page.pageKey] = {
        uiSchema: page.uiSchema,
        schema,
        editMode: isArrayPage ? [] : false,
        showPagePerItem: page.showPagePerItem,
        arrayPath: page.arrayPath,
        itemFilter: page.itemFilter
      };

      state.data = _.merge(state.data, data);
      /* eslint-enable no-param-reassign */

      return state;
    }, {
      data: {
        privacyAgreementAccepted: false,
      },
      pages: {},
    });

  initialState = _.assign(initialState, pageAndDataState);
  // Take another pass and recalculate the schema and data based on the default data
  // We do this to avoid passing undefined for the whole form state when the form first renders
  initialState = recalculateSchemaAndData(initialState);

  return initialState;
}

