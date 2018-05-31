Version 0.2.0

This module contains reusable react components from [vets-website](https://github.com/department-of-veterans-affairs/vets-website) housed in its design system [repo](https://github.com/department-of-veterans-affairs/design-system).

## Quick start

`npm install @department-of-veterans-affairs/formation`

`import @department-of-veterans-affairs/formation/COMPONENTNAME`

See [design system](https://department-of-veterans-affairs.github.io/design-system/) and its [repo](https://github.com/department-of-veterans-affairs/design-system) for more info on components.

## Included components:

- AdditionalInfo.js
- AlertBox.js
- ExpandingGroup.js
- ErrorableDate.js
- ErrorableCheckbox.js
- ErrorableFileInput.js
- ErrorableMonthYear.js
- ErrorableNumberInput.js
- ErrorableRadioButtons.js
- ErrorableSelect.js
- ErrorableTextArea.js
- ErrorableTextInput.js
- IconHelp.js
- IconSearch.js
- IconUser.js
- LoadingIndicator.js
- Modal.js
- OMBInfo.js
- Pagination.js
- PrivacyAgreement.js
- ProgressBar.js
- ProgressButton.js
- SearchMenu.js
- SegmentedProgressBar.js
- SortableTable.js
- SystemDownView.js
- Tooltip.js

## Styles

Our components are styled with sass, which is exported in the `sass` directory in the module. There's a `core.scss` file that includes uswds styles and our changes on top of it. Many of the components also have individual scss files in `sass/modules`, which you should make sure to import when using a particular component.
