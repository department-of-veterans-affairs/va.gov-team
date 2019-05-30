import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash/fp';
import Scroll from 'react-scroll';

import {
  getDefaultFormState
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

import SchemaForm from '../components/SchemaForm';

import { focusElement } from '../../../../platform/utilities/ui';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

/* Growable table (Array) field on the Review page
 *
 * The idea here is that, because our pattern for growable tables on the review
 * page is that each item can be in review or edit mode, we will treat each item
 * as its own form page and this component will handle the edit/review states and
 * make sure data is properly updated in the Redux store
 */
class ArrayField extends React.Component {
  constructor(props) {
    super(props);
    // In contrast to the normal array field, we don’t want to add an empty item
    // and always show at least one item on the review page
    const arrayData = Array.isArray(props.arrayData) ? props.arrayData : null;
    this.state = {
      items: arrayData || [],
      editing: (this.props.arrayData || []).map(() => false)
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSetData = this.handleSetData.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToRow = this.scrollToRow.bind(this);
    this.isLocked = this.isLocked.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.arrayData !== this.props.arrayData) {
      const arrayData = Array.isArray(newProps.arrayData) ? newProps.arrayData : [];
      const newState = {
        items: arrayData
      };
      if (arrayData.length !== this.state.items.length) {
        newState.editing = arrayData.map(() => false);
      }

      this.setState(newState);
    }
  }

  getItemSchema(index) {
    const schema = this.props.schema;
    if (schema.items.length > index) {
      return schema.items[index];
    }

    return schema.additionalItems;
  }

  scrollToTop() {
    setTimeout(() => {
      // Hacky; won’t work if the array field is used in two pages and one isn’t
      //  a BasicArrayField nor if the array field is used in three pages.
      scroller.scrollTo(`topOfTable_${this.props.path[this.props.path.length - 1]}${this.isLocked() ? '_locked' : ''}`, window.VetsGov.scroll || {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -60
      });
    }, 100);
  }

  scrollToRow(id) {
    setTimeout(() => {
      scroller.scrollTo(`table_${id}`, window.VetsGov.scroll || {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: 0
      });
    }, 100);
  }

  /*
   * Clicking edit on the item in review mode
   */
  handleEdit(index, status = true) {
    this.setState(_.set(['editing', index], status, this.state), () => {
      const id = `${this.props.path[this.props.path.length - 1]}_${index}`;
      this.scrollToRow(id);
      focusElement(`#table_${id}`);
    });
  }

  /*
   * Clicking Add Another in the header of the array field section
   */
  handleAdd() {
    const newState = {
      items: this.state.items.concat(getDefaultFormState(this.getItemSchema(this.state.items.length), undefined, this.props.schema.definitions) || {}),
      editing: this.state.editing.concat(true)
    };
    this.setState(newState, () => {
      this.scrollToRow(`${this.props.path[this.props.path.length - 1]}_${this.state.items.length - 1}`);
    });
  }

  /*
   * Clicking Remove when editing an item
   */
  handleRemove(indexToRemove) {
    const { path, formData } = this.props;
    const newState = _.assign(this.state, {
      items: this.state.items.filter((val, index) => index !== indexToRemove),
      editing: this.state.editing.filter((val, index) => index !== indexToRemove),
    });
    this.setState(newState, () => {
      this.props.setData(_.set(path, this.state.items, formData));
      this.scrollToTop();
    });
  }

  /*
   * Called on any form data change.
   *
   * When data is changed, since we’re only editing one array item at a time,
   * we need to update the full page’s form data and call the Redux setData action
   */
  handleSetData(index, data) {
    const { path, formData } = this.props;
    const newArray = _.set(index, data, this.state.items);
    this.setState({ items: newArray }, () => {
      this.props.setData(_.set(path, newArray, formData));
    });
  }

  /*
   * Clicking Update in edit mode.
   *
   * This is only called if the form is valid
   * and data is already saved through handleSetData, so we just need to change
   * the edting state
   */
  handleSave(index) {
    const newEditingArray = _.set(index, false, this.state.editing);
    this.setState({ editing: newEditingArray }, () => {
      this.scrollToTop();
    });
  }

  isLocked() {
    return this.props.uiSchema['ui:field'] === 'BasicArrayField';
  }

  render() {
    const {
      schema,
      uiSchema,
      path,
      pageTitle,
      formContext
    } = this.props;

    const uiOptions = uiSchema['ui:options'] || {};
    const fieldName = path[path.length - 1];
    const title = _.get('ui:title', uiSchema) || uiOptions.reviewTitle || pageTitle;
    const arrayPageConfig = {
      uiSchema: uiSchema.items,
      pageKey: fieldName
    };

    // TODO: Make this better; it’s super hacky for now.
    const itemCountLocked = this.isLocked();
    // Make sure we default to an empty array if the item count is locked and no
    //  arrayData is passed (mysteriously)
    const items = itemCountLocked ? (this.props.arrayData || []) : this.state.items;
    const itemsNeeded = (schema.minItems || 0) > 0 && items.length === 0;

    return (
      <div className={itemsNeeded ? 'schemaform-review-array-warning' : null}>
        {title &&
          <div className="form-review-panel-page-header-row">
            <h5 className="form-review-panel-page-header">{title}</h5>
            {itemsNeeded && <span className="schemaform-review-array-warning-icon"/>}
            {!itemCountLocked &&
              <button type="button" className="edit-btn primary-outline" onClick={() => this.handleAdd()}>Add Another</button>
            }
          </div>}
        <div className="va-growable va-growable-review">
          <Element name={`topOfTable_${fieldName}${itemCountLocked ? '_locked' : ''}`}/>
          {items.map((item, index) => {
            const isLast = items.length === (index + 1);
            const isEditing = this.state.editing[index];
            const showReviewButton = !itemCountLocked && (!schema.minItems || items.length > schema.minItems);
            const itemSchema = this.getItemSchema(index);
            const itemTitle = itemSchema ? itemSchema.title : '';

            if (isEditing) {
              return (
                <div key={index} className="va-growable-background">
                  <Element name={`table_${fieldName}_${index}`}/>
                  <div className="row small-collapse schemaform-array-row" id={`table_${fieldName}_${index}`}>
                    <div className="small-12 columns va-growable-expanded">
                      {isLast && uiOptions.itemName && items.length > 1
                        ? <h5>New {uiOptions.itemName}</h5>
                        : null}
                      <SchemaForm
                        data={item}
                        schema={itemSchema}
                        uiSchema={arrayPageConfig.uiSchema}
                        title={pageTitle}
                        hideTitle
                        name={fieldName}
                        formContext={formContext}
                        onBlur={this.props.onBlur}
                        onChange={(data) => this.handleSetData(index, data)}
                        onEdit={() => this.handleEdit(index, !isEditing)}
                        onSubmit={() => this.handleSave(index)}>
                        <div className="row small-collapse">
                          <div className="small-6 left columns">
                            <button className="float-left">Update</button>
                          </div>
                          <div className="small-6 right columns">
                            {showReviewButton && <button type="button" className="usa-button-secondary float-right" onClick={() => this.handleRemove(index)}>Remove</button>}
                          </div>
                        </div>
                      </SchemaForm>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={index} className="va-growable-background">
                <div className="row small-collapse">
                  <SchemaForm
                    reviewMode
                    data={item}
                    schema={itemSchema}
                    uiSchema={arrayPageConfig.uiSchema}
                    title={itemTitle}
                    name={fieldName}
                    onChange={(data) => this.handleSetData(index, data)}
                    onEdit={() => this.handleEdit(index, !isEditing)}
                    onSubmit={() => this.handleSave(index)}>
                    <div/>
                  </SchemaForm>
                </div>
              </div>
            );
          })}
          {itemsNeeded &&
            <div className="usa-alert usa-alert-warning usa-alert-no-color usa-alert-mini">
              <div className="usa-alert-body">
                {_.get('ui:errorMessages.minItems', uiSchema) || 'You need to add at least one item.'}
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default ArrayField;

ArrayField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  pageKey: PropTypes.string.isRequired,
  path: PropTypes.array.isRequired,
  formData: PropTypes.object,
  arrayData: PropTypes.array,
  pageTitle: PropTypes.string
};
