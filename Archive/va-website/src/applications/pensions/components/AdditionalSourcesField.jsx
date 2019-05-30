import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash/fp';
import Scroll from 'react-scroll';
import { scrollToFirstError, focusElement } from '../../../platform/utilities/ui';
import { setArrayRecordTouched } from '../../common/schemaform/helpers';
import currencyUI from '../../common/schemaform/definitions/currency';

import {
  toIdSchema,
  deepEquals
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

import { errorSchemaIsValid } from '../../common/schemaform/validation';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

function ReviewSources({ sources }) {
  return (
    <div>
      {sources.map((source, index) =>
        <div key={index} className="review-row"><dt>{source.name}</dt><dd>{source.amount}</dd></div>)}
    </div>
  );
}

export default class AdditionalSourcesField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editStates: (props.formData || []).map(item => !item.name)
    };

    this.onItemChange = this.onItemChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.scrollToRow = this.scrollToRow.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const items = newProps.formData || [];
    if (items.length < this.state.editStates.length) {
      this.setState({ editStates: this.state.editStates.filter((item, index) => index < items.length) });
    } else if (items.length > this.state.editStates.length) {
      this.setState({ editStates: this.state.editStates.concat(true) });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !deepEquals(this.props, nextProps) || nextState !== this.state;
  }

  componentDidUpdate(oldProps) {
    const oldDataLength = (oldProps.formData || []).length;
    const newDataLength = (this.props.formData || []).length;
    if (newDataLength > oldDataLength) {
      this.scrollToRow(oldDataLength);
    }
  }

  onItemChange(indexToChange, value, fullItem = false) {
    const path = fullItem ? [indexToChange] : [indexToChange, 'amount'];
    const newItems = _.set(path, value, this.props.formData || []);

    this.props.onChange(newItems);
  }

  getItemSchema(index) {
    const schema = this.props.schema;
    if (schema.items.length > index) {
      return schema.items[index];
    }

    return schema.additionalItems;
  }

  scrollToRow(index) {
    scroller.scrollTo(`additional_${index}`, window.VetsGov.scroll || {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: 0
    });
    focusElement(`.pensions-heading-${index}`);
  }

  handleUpdate(index) {
    if (errorSchemaIsValid(this.props.errorSchema[index])) {
      this.setState(_.set(['editStates', index], false, this.state), () => {
        this.scrollToRow(index);
      });
    } else {
      // Set all the fields for this item as touched, so we show errors
      const touched = setArrayRecordTouched(this.props.idSchema.$id);
      this.props.formContext.setTouched(touched, () => {
        scrollToFirstError();
      });
    }
  }

  handleAdd() {
    const data = this.props.formData || [];
    this.props.onChange(data.concat({}));
  }

  handleRemove(indexToRemove) {
    const newItems = this.props.formData.filter((val, index) => index !== indexToRemove);
    this.props.onChange(newItems.length > 0 ? newItems : undefined);
    if (newItems.length) {
      this.scrollToRow(newItems.length - 1);
    }
  }

  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      formData,
      disabled,
      readonly,
      registry,
      onBlur
    } = this.props;
    const definitions = registry.definitions;
    const { SchemaField } = registry.fields;

    // if we have form data, use that, otherwise use an array with a single default object
    const items = formData || [];

    if (registry.formContext.reviewMode) {
      return <ReviewSources sources={items}/>;
    }

    const hasItemsBeingEdited = this.state.editStates.some(item => item);

    return (
      <div className="schemaform-field-container">
        <div className="va-growable">
          <Element name={`topOfTable_${idSchema.$id}`}/>
          {items.map((item, index) => {
            const itemSchema = this.getItemSchema(index);
            const itemIdPrefix = `${idSchema.$id}_${index}`;
            const itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, definitions);
            const itemData = items[index];
            const isEditing = this.state.editStates[index];

            if (isEditing) {
              return (
                <div key={index} className="va-growable-background pensions-sources-adding">
                  <Element name={`additional_${index}`}/>
                  <div className="row small-collapse">
                    <div className="small-12 columns va-growable-expanded">
                      <h5 className={`pensions-heading pensions-heading-${index}`}>Additional source</h5>
                      <div className="input-section">
                        <SchemaField
                          name="additionalSources"
                          required
                          schema={itemSchema}
                          uiSchema={uiSchema.items}
                          errorSchema={_.get([index], errorSchema) || {}}
                          idSchema={itemIdSchema}
                          formData={itemData}
                          onChange={(value) => this.onItemChange(index, value, true)}
                          onBlur={onBlur}
                          registry={this.props.registry}
                          disabled={disabled}
                          readonly={readonly}/>
                      </div>
                      <div className="row small-collapse">
                        <div className="small-6 left columns">
                          <button className="float-left" onClick={() => this.handleUpdate(index)}>Save</button>
                        </div>
                        <div className="small-6 right columns">
                          <button
                            className="usa-button-secondary float-right"
                            type="button"
                            onClick={() => this.handleRemove(index)}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={index}>
                <Element name={`additional_${index}`}/>
                <SchemaField
                  name="amount"
                  schema={itemSchema.properties.amount}
                  uiSchema={currencyUI(itemData.name)}
                  errorSchema={_.get([index, 'amount'], errorSchema) || {}}
                  idSchema={itemIdSchema.amount}
                  formData={itemData.amount}
                  onChange={(value) => this.onItemChange(index, value)}
                  onBlur={onBlur}
                  registry={this.props.registry}
                  disabled={disabled}
                  readonly={readonly}/>
              </div>
            );
          })}
          {!hasItemsBeingEdited && <button
            type="button"
            className="usa-button-secondary pensions-sources-add-btn"
            onClick={this.handleAdd}>
            Add Another Source
          </button>}
        </div>
      </div>
    );
  }
}

AdditionalSourcesField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  errorSchema: PropTypes.object,
  requiredSchema: PropTypes.object,
  idSchema: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  formData: PropTypes.array,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  registry: PropTypes.shape({
    widgets: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ])).isRequired,
    fields: PropTypes.objectOf(PropTypes.func).isRequired,
    definitions: PropTypes.object.isRequired,
    formContext: PropTypes.object.isRequired,
  })
};
