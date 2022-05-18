# Extending RJSF Behavior Using a Custom React Component
Based mostly on [bradl3yC](https://github.com/bradl3yC)'s write-up of his initial solution. Due to other issues, the design has changed (radio buttons removed) so you may not see this technique in the latest version of the form; however, you may find yourself needing a similar workaround.

## The Problem:
  - Our form shows two multually exclusive addresses, *permanent* and *temporary*. Each has their own data and we need to change a 3rd slice of state called *current address*. This 3rd piece of state this lives outside of the other two but we need it mapped to determine which radio button was selected.
  - Using a custom component requires that you pass in a schema for that component. It essentially maps a small slice of form state to the component. Because the same component is used twice but we are passing in a different schema, each of those components only has access to its own individual schema/form state. (Read [Background: The Original Problem](#background-the-original-problem) for further details.)

## The Solution/Hack:
Take the custom React widget and connect it to Redux. After it is connected to Redux, map state to the entire form state so it can see the form state of other components.  From there, we need to be able to update form state for events we've added to the custom widget. We are leveraging *setData* located in [platform/forms-system/src/js/actions.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/actions.js). We basically looked at what data the form system would send it naturally and mimicked it in our own *onChange* event here: https://github.com/department-of-veterans-affairs/vets-website/pull/12295/files#diff-e840e38183aa55fb387f1af118cd752bR92

*[src/applications/disability-benefits/2346/components/ReviewCardField.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/2346/components/ReviewCardField.jsx)*

```
import { connect } from 'react-redux';
import { setData } from 'platform/forms-system/src/js/actions';

. . .

  onChange = (field, data) => {
    const newData = set(field, data, this.props.data);
    return this.props.setData(newData);
  };

. . .

  <input
    id={this.props.name}
    type="radio"
    checked={this.props.currentAddress === this.props.name}
    onChange={() =>
    this.onChange('currentAddress', this.props.name)
    }
  />

. . .

const mapStateToProps = state => ({
  data: state.form?.data,
  currentAddress: state.form?.data?.currentAddress,
});
const mapDispatchToProps = {
  setData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewCardField);

  ```

## Side-Effect: Extra Component
You still need to pass in a schema that accounts for the data you want to modify with the form system. The form system will then add its own component for that data.  So you end up with an extra component. We need to hide it! The original way to do this was to leverage a *hideIf* param that exits in the *uiSchema*.  There is, however, a gotcha with this.  When you hide a component on the form, it removes its schema thus wiping out its form state. We confirmed this by digging into the underlying code a bit:

*[src/platform/forms-system/src/js/state/helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/state/helpers.js)*

```
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
    const newItems = data.map((item, index) => removeHiddenData(schema.items[index], item),
    );

    if (newItems.some((newItem, idx) => newItem !== data[idx])) {
      return newItems;
    }

    return data;
  }
  return data;
}
. . .
/**
 * This is the main sequence of updates that happens when data is changed
 * on a form. Most updates are applied to the schema. And by default the data
 * is updated to remove newly hidden data.
 . . .
export function updateSchemaAndData(
. . .
  if (!preserveHiddenData) {
    // Remove any data that’s now hidden in the schema
    const newData = removeHiddenData(newSchema, formData);
 ```

## Workaround: Hide the Extra Component 
Instead of using a *hideIf* func, you can pass a custom className to the uiSchema.  So I passed in the utility className from the design system to just hide it via CSS. \
*Discussion on slack: https://dsva.slack.com/archives/CBU0KDSB1/p1587597608400600*

## Limitations
When we pre-fill data into a field that's hidden by default, that data gets removed before the user gets to see it. It's just not even there. We were unable to use selectable cards due to this limitation with expanding check boxes. By design, hidden data gets removed in *recalculateSchemaAndData* because... well, it's hidden. The design decision behind this is so we don't send any information downstream that the veteran didn't get a chance to review or sort of "opted out" of that branch. We haven't run into this before because we've never pre-filled data into a field hidden by default because it goes against the design pattern for all the forms previously. Workaround to this limitation: rather than hiding, make a new page where the veteran can select the items, depending on the answer to that question. This is the pattern the 526 all claims uses for selecting rated disabilities. \
*Discussion on slack: https://dsva.slack.com/archives/CBU0KDSB1/p1588080662115800*

## Why It's a Hack
If it isn't obvious by now, rather than treating VSFS/RJSF as a back box, we're having to peek inside the form's internal Redux state (gray box). Since this wasn't thought through by design, you'll run into limitations such as the hidden field scenario we just mentioned.

## Background: The Original Problem
Here is the original problem we were trying to solve, and conversations we had in Slack related to it. First, here is the write-up from [mr0sari0](https://github.com/mr0sari0):

### Form System Questions/Limitations
Problem with sharing state between `ui:widget`: a field can not trigger a change to another field that is in a different widget

For example, if one field has a radio button and another field has a radio button, if you try to click on one of them, it will not deselect the other.
![](https://i.imgur.com/gKuIrem.png)

The permanent address and temporary address cards are separate schema fields and for their `ui:fields`, a custom component is being used.
These "Send my order to this address" buttons are actually radio buttons. 

- Cannot update form state with an onChange handler within a custom widget
- No way to compare current form data against original form data
- Functionality missing for the review page
-  Is there a way to display custom fields such as the 2nd half of this photo ??
![](https://i.imgur.com/1vdCvJA.png)

- And when I hit edit, can it display the actual page I made the selection on, like the following photo?
![](https://i.imgur.com/ORQP0QK.png)

### General Questions
- Does the form system have an onChange handler we can pass to custom widgets?
- Can we leverage the onChange handler that exists for standard form system components?
- Is it possible to leverage a custom action/reducer to accomplish this?
- Is there a way to leverage lifecycle methods within the form system to compare state changes?
- `formContext` has a property called touched which contains a key value pair of fields that have been edited however, they do not get removed if the data is put back to the original state - is it possible to add this capability?

## Follow-up in Slack
Here is the main conversation about it in Slack:

*Paul Short*: @Dan Shank, what @Mahariel wrote up is the first of three separate issues with forms (limitations or feature requests, depending on how you see it):
- A field can not trigger a change to another field
- Cannot update form state with an onChange handler within a custom widget
- No way to compare current form data against original form data

*Christopher Valarida*:
- **A field can not trigger a change to another field** \
We can! There's an *updateFormData* available. Put that sucker in the *uiSchema* on a field and changes to it will trigger the callback you pass it. I highly recommend thinking hard about whether you need it first, however. It's a known footgun; if you're not careful, you can make a lot of sneaky bugs for your future self.

- **Cannot update form state with an onChange handler within a custom widget** \
I'm not sure I follow what you're trying to do here, but we typically have a lot of control within custom widgets. An example custom widget I wrote a while back can be found at [src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx). If I had to guess, I'd say the thing you might be running into is just not knowing what all can be done with the props passed into it. There's...so much in there. It's very confusing. And, naturally, it's pretty much completely undocumented.

- **No way to compare current form data against original form data** \
My initial reaction is that this smells like a problem with the approach. There may be a cleaner way to do what you need to without tracking changes over time (which I think is another footgun). 

**The main challenge here is that "original form data" can mean a lot of things.**
- Pre-fill information (gathered from various VA back end services)
- Saved form data from a previous session
- The form data at the beginning of a given page
- The form data before a field was filled in
  
I'm interested in what you're trying to accomplish. Might could be there's a way around it. All that said, the forms system is super gnarly and most of the guts aren't documented, so... using it in ways it wasn't originally intended for is rough. Building the all-claims form made me keenly aware of that.

*Paul Short*: @Brad Conley let's show @chris.valarida the Redux approach in https://github.com/department-of-veterans-affairs/vets-website/pull/12295, compare it with what Chris brought up. 

*Christopher Valarida*: So for that particular problem, using a widget and adding properties to the object in the array is, I think, the way to go. It's what we did in 526 all-claims for selecting rated disabilities, using a custom SelectArrayItemsWidget. I'm not sure where that ReviewCardField is being used, though.

*Robin Garrison*: ReviewCardField is used on the confirm address page, where it shows the full formatted address inside a card with an edit button. Click on the edit button and each address input is available for changes. It was in the original design to allow editing either the users temporary or permanent address. I don't think it's in the design any more, but I haven't looked at their design in a while.

*Brad Conley*: We put it back in after I got it working using the above approach. The problem, though is we used the widget twice, and each instance of the widget needs to know the state of the other.