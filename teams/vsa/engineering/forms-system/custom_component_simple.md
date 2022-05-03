# Updating Form State with an onChange Handler Within a Custom React Component

Based on answers from *Christopher Valarida* from Slack discussions:

- **A field can not trigger a change to another field** \
*We can! There's an ***updateFormData** available. Put that sucker in the **uiSchema** on a field and changes to it will trigger the callback you pass it. I highly recommend thinking hard about whether you need it first, however. It's a known footgun; if you're not careful, you can make a lot of sneaky bugs for your future self.*

[*src/applications/disability-benefits/all-claims/config/forms.js*](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/config/form.js)
```
const formConfig = {
. . .
      disabilities: {
        title: 'Disabilities',
        pages: {
. . .
          addDisabilities: {
            title: 'Add a new disability',
            path: 'new-disabilities/add',
            depends: hasNewDisabilities,
            uiSchema: addDisabilities.uiSchema,
            schema: addDisabilities.schema,
            updateFormData: addDisabilities.updateFormData,
          },
```

[*src/applications/disability-benefits/all-claims/pages/addDisabilities.js*](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/pages/addDisabilities.js)
```
export const updateFormData = (oldData, newData) => {
    const oldArr = oldData.newDisabilities;
    const newArr = newData.newDisabilities;
    
    // Sanity check
    if (!Array.isArray(oldArr) || !Array.isArray(newArr)) return newData;
  
    // Disability was removed
    if (oldArr.length > newArr.length) {
      const deletedElement = deleted(oldArr, newArr);
      return removeDisability(deletedElement, newData);
    }
  
    // Disability was modified
    const changedIndex = indexOfFirstChange(oldArr, newArr);
    if (oldArr.length === newArr.length && changedIndex !== undefined) {
      // Update the disability name in treatedDisabilityNames and
      // powDisabilities _if_ it exists already
      return changeDisabilityName(oldData, newData, changedIndex);
    }
  
    return newData;
  };
```

- **Cannot update form state with an onChange handler within a custom widget** \
*I'm not sure I follow what you're trying to do here, but we typically have a lot of control within custom widgets. An example custom widget I wrote a while back can be found at [src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx). If I had to guess, I'd say the thing you might be running into is just not knowing what all can be done with the props passed into it.*


*[src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx)*:

```
import get from 'platform/utilities/data/get';
import set from 'platform/utilities/data/set';

export default class SelectArrayItemsWidget extends React.Component {
  onChange = (index, checked) => {
    const items = set(
      `[${index}].${this.props.options.selectedPropName || this.defaultSelectedPropName}`,
      checked,
      this.props.value,
    );
    this.props.onChange(items);
  };
. . .
  render() {
    const { value: items, id, options, required } = this.props;
. . .
    return (
      items.map((item, index) => {
        const itemIsSelected = !!get(selectedPropName || this.defaultSelectedPropName, item, );
. . .
        return (
. . .
          <input type="checkbox" id={elementId} name={elementId} 
                 checked={typeof itemIsSelected === 'undefined' ? false : itemIsSelected}
                 required={required} disabled={itemIsDisabled}
                 onChange={event => this.onChange(index, event.target.checked)}
          />
. . .     
```

In *[src/applications/disability-benefits/all-claims/pages/ratedDisabilities.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/pages/ratedDisabilities.js)* we pass in our custom *SelectArrayItemsWidget* React component into the forms schema (uiSchema):

```
import fullSchema from 'vets-json-schema/dist/21-526EZ-ALLCLAIMS-schema.json';
import SelectArrayItemsWidget from '../components/SelectArrayItemsWidget';
import {
  disabilityOption,
  disabilitiesClarification,
  ratedDisabilitiesAlert,
} from '../content/ratedDisabilities';

import { increaseOnly, claimingRated } from '../utils';
import { requireRatedDisability } from '../validations';

const { ratedDisabilities } = fullSchema.properties;

export const uiSchema = {
  'ui:title': 'Rated Disabilities',
  'ui:description':
    'Below are your rated disabilities. Please choose the disability you’re filing for increased compensation because it has gotten worse.',
  ratedDisabilities: {
    'ui:title': ' ',
    'ui:field': 'StringField',
    'ui:widget': SelectArrayItemsWidget,
    'ui:options': {
      showFieldLabel: 'label',
      label: disabilityOption,
      widgetClassNames: 'widget-outline',
      keepInPageOnReview: true,
    },
    'ui:validations': [requireRatedDisability],
  },
  'view:disabilitiesClarification': {
    'ui:description': disabilitiesClarification,
  },
  'view:ratedDisabilitiesAlert': {
    'ui:description': ratedDisabilitiesAlert,
    'ui:options': {
      hideIf: formData => !increaseOnly(formData) || claimingRated(formData),
    },
  },
};

export const schema = {
  type: 'object',
  properties: {
    ratedDisabilities,
    'view:disabilitiesClarification': {
      type: 'object',
      properties: {},
    },
    'view:ratedDisabilitiesAlert': {
      type: 'object',
      properties: {},
    },
  },
};
```