## Design System Component Tracking Initiative Planning


### Context
- The design system is the central UX component repository for the VA. It can be found at https://design.va.gov/components/.
- In an effort to standardize our GTM tagging according to the design system, the Analytics and Insights team is specifying a data layer
to track the common user interaction associated with each component. 
- This data layer spec should be used unless an otherwise provided spec is given from the Analytics and Insights team.
- Not every design system component will have tracking, as some are dedicated to styling rather than user interaction with no tracking pieces.

### Goal
- Our bet is that by standardizing the data layer tracking code according to the design system components, this will help cut down
on the amount of time VFS and VSP teams spend in implementing the data layer and fast-track the time to begin collecting data.
- In addition, it will allow our team to spend more time on dashboarding and insights, as opposed to the implementation of tracking.

### Implementation Notes
- This implementation comprises of two main components: 1) the configuration of custom events within each design system copmonent to collect the relevant metadata and 2) the event listener attached to the body of VA.gov to listen for the custom events and in-turn push to the data layer to be picked up by GTM

### Sensitive Components
- The majority of design system components have been configured to push these events automatically when the components are used within the application.
- That said, there are several components that by default do **NOT** collect metadata by default due to the nature of how these components are often used for PII-related inputs, those components are: 
  - `TextInput`
  - `TextArea`
  - `Select`
  - `Checkbox`
  - `CheckboxGroup`
  - `RadioButton`
- While these components have been reviewed by the VSP Identity team, it is still at the responsibility of the VFS team to conduct a security review before data collection of these components can begin.

### High Volume Components

Several components are disabled by default due to the high volume of hits they would generate site-wide.  These components have an `enableAnalaytics` parameter that will enable the analytics events.  These components are:

- `LoadingIndicator`
- `ProgressBar`
- `SegmentedProgressBar`


### Specification

<table>
  <tr>
   <td>Component Name
   </td>
   <td>Components where implemented
   </td>
   <td>Description of Interaction
   </td>
   <td>Data Layer Specification
   </td>
  </tr>
  <tr>
   <td>Buttons
   </td>
   <td>Global event listener for buttons
   </td>
   <td>Click on a button with an appropriate CSS class
   </td>
   <td>
<pre lang="js">
'event': 'cta-button-click' //consistently populate for ALL types of button clicks
'button-type' //'primary', 'secondary', 'default'
'button-click-label': //dynamically populate with text of button
'button-background-color': //dynamically populate with the background color of the button`
</pre>
   </td>
  </tr>
  <tr>
   <td>Accordions
   </td>
    <td><pre lang="js">&lt;va-accordion&gt;</pre> web component only (NOT CollapsiblePanel.js)
   </td>
   <td>Click to expand/collapse accordions
   </td>
   <td><pre lang="js">'event': 'int-accordion-expand', //OR 'int-accordion-collapse'
'accordion-parent-label' //accordion parent label (if there is two labels, if only one label on accordion, populate this value and make child-label undefined)
'accordion-child-label': //dynamically populate with secondary label of the accordion
'accordion-section-label': //populate with the label of the section where the accordion is present`</pre>
   </td>
  </tr>
  <tr>
   <td>Additional Info
   </td>
   <td>AdditionalInfo.js
   </td>
   <td>Click to expand/collapse additional info component
   </td>
   <td><pre lang="js">'event': 'int-additional-info-expand', //OR 'int-additional-info-collapse',
'additional-info-click-label': //dynamically populate with the click label of the expandable component`</pre>
   </td>
  </tr>
  <tr>
   <td>Alert Boxes
   </td>
   <td>AlertBox.js
   </td>
   <td>Click on a link and/or heading within an alert box or click to close
   </td>
   <td><pre lang="js">'event': 'nav-alert-box-link-click' //consistent for all links within an alert box
'alert-box-status': //dynamically populate according to the type of alert box, 'warning', 'error', 'info'
'alert-box-headline': //dynamically populate according to the top level heading of the alert box
'alert-box-headline-level': //dynamically populate with the level of the headline
'alert-box-click-label': //dynamically populate according to the click label of the link
'alert-box-background-only: //dynamically populate with boolean true\|false if alert box background only prop was used
'alert-box-closeable': //dynamically populate with true or false if the component is closeable</pre>
<p>
<strong><em>Substitute these for close event, use variables above</em></strong>
<p>
<pre lang="js">'event': 'int-alert-box-close' //consistently populate when an alert box is closed</pre>
   </td>
  </tr>
  <tr>
   <td>Breadcrumbs
   </td>
   <td>Breadcrumb.js
   </td>
   <td>Click on a breadcrumb link
   </td>
   <td><pre lang="js">'event': 'nav-breadcrumb',
'breadcrumb-clickLabel': //dynamically populate according to the breadcrumb label clicked on
'breadcrumb-clickLevel': //level number clicked on
'breadcrumb-totalLevels': //total number of click levels
'breadcrumb-mobile-first-enabled': //boolean for if the mobile first prop is used`</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Text Box</em>
   </td>
   <td>TextInput.js
<p>
TextArea.js
<p>
NumberInput.js
   </td>
   <td>Input and click away from text box
   </td>
   <td><pre lang="js">'event': 'int-textbox-input' //consistently populate for text box inputs
'textinput-label': //dynamically populate according to the label of the text box
'textinput-field-value': //dynamically populate with the user input text
'textinput-type': //dynamically populate according to the text prop variable
'textinput-required': //dynamically populates with boolean true or false, true if text input is required</pre>
<p>
<strong><em>Substitute these variables for TextArea.js</em></strong>
<p>
<pre lang="js">'textarea-label': //dynamically populate according to the label of the text area
'textarea-field-value': //dynamically populate with the user input text
'textarea-required': //dynamically populates with boolean true or false, true if text area is required
'textarea-type': //dynamically populate according to the text prop variable</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Select box</em>
   </td>
   <td>Select.js
   </td>
   <td>Selection and click away from select box
   </td>
   <td><pre lang="js">'event': 'int-select-box-option-click' //consistently populate for all select box selections
'select-box-label': //dynamically populate according to the label of the select box presented to the user
'select-box-value': //dynamically populates with the select box value selected
'select-box-required': //dynamically populates with boolean true or false, true if checkbox is required
'select-options': //dynamically populates with the options of the select box</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Checkbox</em>
   </td>
   <td>Checkbox.js
<p>
CheckboxGroup.js
   </td>
   <td>Select and click away from a checkbox option
   </td>
   <td><pre lang="js">'event': 'int-checkbox-option-click',
'checkbox-label': //dynamically populates according to check box label selected
'checkbox-labelAboveCheckbox': //dynamically populates according to label description presented to the user 
'checkbox-required': //dynamically populates with boolean true or false, true if checkbox is required</pre>
<p>
<strong><em>Substitute these variables for CheckboxGroup.js</em></strong>
<p>
<pre lang="js">'checkboxgroup-options-label': //dynamically populates with the label of the selected checkbox
'checkbox-group-label: //dynamically populates with the label of the checkbox group presented to the user
'checkbox-group-required': //dynamically populates with boolean true or false, true if checkboxgroup is required</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Radio Button</em>
   </td>
   <td>RadioButton.js
   </td>
   <td>Select and click away from a radio button option
   </td>
   <td><pre lang="js">'event': 'int-radio-button-option-click', //consistently populate for all radio button toggles
'radio-button-label': //dynamically populate according to the radio button label for the group presented to the user
'radio-button-option-click-label': //dynamically populate according to the radio button option selected label
'radio-button-options-label: //dynamically populates according to the radio button options array
'radio-button-required: //dynamically populates with boolean true or false, true if radio button is required</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Date</em>
   </td>
   <td>Date.js
   </td>
   <td>Select and click away from a date field selection
   </td>
   <td><pre lang="js">'event': 'int-date-input', 
'date-label': //dynamically populate according to the date label presented to the user
'date-date': //dynamically populates with the date selected
'date-required': //dynamically populates with boolean true or false, true if date is required</pre>
   </td>
  </tr>
  <tr>
   <td>Modal
   </td>
   <td>Modal.js
   </td>
   <td>Click on a modal button
   </td>
   <td><pre lang="js">'event: 'int-modal-click',
'modal-status': this.props.status,
'modal-title': this.props.title,
'modal-primaryButton-text': this.props.primaryButton.text,
'modal-secondaryButton-text': this.props.secondaryButton.text</pre>
   </td>
  </tr>
  <tr>
   <td>Pagination
   </td>
   <td>Pagination.js
   </td>
   <td>Click to paginate 
   </td>
   <td><pre lang="js">'event': 'nav-paginate-number' //if number click, 'nav-paginate-previous' if previous click, 'nav-paginate-next' if next click
'paginate-page-number': //dynamically populate according to the number the user navigated to
'maximum-page-list-length': //populate according to the maximum number of pages that can be navigated
'last-page-enabled': //populate if last page enabled prop is used</pre>
   </td>
  </tr>
  <tr>
   <td>Progress Bars
   </td>
   <td>
   </td>
   <td>On state change
   </td>
   <td><pre lang="js">'event': 'nav-progress-bar-change', //consistent event name for progress bar change
'progress-bar-type': 'segmented', //dynamic with type of progress bar, in this case 'segmented'
'progress-bar-current': //dynamically populate with an integer with each new change the current
'progress-bar-total': //consistently populate as an integer with the total number of segments
'progress-bar-title': //dynamically populate according to the label on the component
'progress-bar-percentage': 10 //use for standard progress bar, only in increments of 10%`</pre>
   </td>
  </tr>
  <tr>
   <td>Promo Banner
   </td>
   <td>PromoBanner.js
   </td>
   <td>Click on a link within the promo banner
   </td>
   <td><pre lang="js">'event': 'nav-promo-banner-link-click'
'promo-banner-click-label': //populate according to link click text
'promo-banner-click-target': //populate according to target in component
'promo-banner-click-href': //populate according to click href
'promo-banner-closeable': //populate with true or false based on if promo banner is capable of being closed
'promo-banner-type': //populate according to banner type (icon) in component`</pre>
   </td>
  </tr>
</table>
