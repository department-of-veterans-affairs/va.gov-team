import React from 'react';
import classNames from 'classnames';

import get from '../../../../platform/utilities/data/get';
import set from '../../../../platform/utilities/data/set';

// TODO: Safety checks for `selected` callback and `label` element

export default class SelectArrayItemsWidget extends React.Component {
  onChange = (index, checked) => {
    const items = set(`[${index}].${this.props.options.selectedPropName || this.defaultSelectedPropName}`, checked, this.props.value);
    this.props.onChange(items);
  }

  defaultSelectedPropName = 'view:selected'

  render() {
    const {
      value: items,
      id,
      options,
      required
    } = this.props;
    const { label: Label, selectedPropName, disabled } = options;

    // Note: Much of this was stolen from CheckboxWidget
    return (
      <div>
        {items.map((item, index) => {
          const itemIsSelected = !!get(selectedPropName || this.defaultSelectedPropName, item);
          const itemIsDisabled = typeof disabled === 'function' ? disabled(item) : false;
          const labelWithData = <Label {...item}/>;
          const elementId = `${id}_${index}`;

          const widgetClasses = classNames(
            'form-checkbox',
            options.widgetClassNames,
            { selected: itemIsSelected }
          );

          return (
            <div key={index} className={widgetClasses}>
              <input type="checkbox"
                id={elementId}
                name={elementId}
                checked={typeof itemIsSelected === 'undefined' ? false : itemIsSelected}
                required={required}
                disabled={itemIsDisabled}
                onChange={(event) => this.onChange(index, event.target.checked)}/>
              <label className="schemaform-label" htmlFor={elementId}>
                {labelWithData}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
