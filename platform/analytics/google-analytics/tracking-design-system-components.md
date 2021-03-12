## Design System Component Tracking


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
  - `NumberInput`
  - `Select`
  - `Checkbox`
  - `CheckboxGroup`
  - `RadioButton`
  - `MonthYear`
  - `Date`
- While these components have been reviewed by the VSP Identity team, it is still at the responsibility of the VFS team to conduct a security review before data collection of these components can begin.


### Component Embed Schedule
| Component Name | Tentative Sprint | Tentative Dates
| ------------- | ------------------- | -----------
_QA Testing of Buttons_ <br><br>_Begin implementation of [Additional Info,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/additionalinfo/)_ _[Alert Boxes,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/)_ _[Modals](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/modal/)_| 44 | 1/20/2021-2/3/2021
 _QA Testing of Additional Info, Alert Boxes, Modals_ <br><br> _Begin implementation of_ _[Promo Banner,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/promobanner/) [Progress Bar,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/progressbar/) [Loading Indicator](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/loadingindicator/)_| 45 |	2/3/2021-2/17/2021
 _QA Testing of Promo Banner, Progress bar, Loading Indicator_ <br><br> _Begin implementation of [Breadcrumbs](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/breadcrumbs/)_ | 46 | 2/17/2021-3/3/2021
 _QA Testing + Deployment of design system components to-date, and identify event taxonomy + duplication cleanup where necessary_ | 47 | 3/3/2021-3/17/2021
 _Begin implementation of_ _Form Controls( [text box](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/textarea/), [select box](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/select/), [check box](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/checkbox/), [radio buttons](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/radiobuttons/))_, _[Accordions](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/collapsiblepanel/), [Pagination, ](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/pagination/) Side Nav_ <br><br> _QA testing of Form Controls( text box, select box, check box, radio buttons), Accordions, Pagination, Side Nav)_ <br><br> _HARDENING_ | 48 | 3/17/2021-3/31/2021


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
   <td><code>'event': 'cta-button-click' //consistently populate for ALL types of button clicks</code>
<p>
<code>'button-type' //'primary', 'secondary', 'default'</code>
<p>
<code>'button-click-label': //dynamically populate with text of button</code>
<p>
<code>'button-background-color': //dynamically populate with the background color of the button`</code>
   </td>
  </tr>
  <tr>
   <td>Accordions
   </td>
   <td>CollapsiblePanel.js
   </td>
   <td>Click to expand/collapse accordions
   </td>
   <td><code>'event': 'int-accordion-expand', //OR 'int-accordion-collapse'</code>
<p>
<code>'accordion-parent-label' //accordion parent label (if there is two labels, if only one label on accordion, populate this value and make child-label undefined)</code>
<p>
<code>'accordion-child-label': //dynamically populate with secondary label of the accordion</code>
<p>
<code>'accordion-section-label': //populate with the label of the section where the accordion is present`</code>
   </td>
  </tr>
  <tr>
   <td>Additional Info
   </td>
   <td>AdditionalInfo.js
   </td>
   <td>Click to expand/collapse additional info component
   </td>
   <td><code>'event': 'int-additional-info-expand', //OR 'int-additional-info-collapse',</code>
<p>
<code>'additional-info-click-label': //dynamically populate with the click label of the expandable component`</code>
   </td>
  </tr>
  <tr>
   <td>Alert Boxes
   </td>
   <td>AlertBox.js
   </td>
   <td>Click on a link and/or heading within an alert box or click to close
   </td>
   <td><code>'event': 'nav-alert-box-link-click' //consistent for all links within an alert box</code>
<p>
<code>'alert-box-status': //dynamically populate according to the type of alert box, 'warning', 'error', 'info'</code>
<p>
<code>'alert-box-headline': //dynamically populate according to the top level heading of the alert box</code>
<p>
<code>'alert-box-headline-level': //dynamically populate with the level of the headline</code>
<p>
<code>'alert-box-click-label': //dynamically populate according to the click label of the link</code>
<p>
<code>'alert-box-background-only: //dynamically populate with boolean true\|false if alert box background only prop was used</code>
<p>
<code>'alert-box-closeable': //dynamically populate with true or false if the component is closeable</code>
<p>
<code>----------------------------------------</code>
<p>
<strong><em>Substitute these for close event, use variables above</em></strong>
<p>
<code>'event': 'int-alert-box-close' //consistently populate when an alert box is closed</code>
   </td>
  </tr>
  <tr>
   <td>Breadcrumbs
   </td>
   <td>Breadcrumb.js
   </td>
   <td>Click on a breadcrumb link
   </td>
   <td><code>'event': 'nav-breadcrumb',</code>
<p>
<code>'breadcrumb-clickLabel': //dynamically populate according to the breadcrumb label clicked on</code>
<p>
<code>'breadcrumb-clickLevel': //level number clicked on</code>
<p>
<code>'breadcrumb-totalLevels': //total number of click levels</code>
<p>
<code>'breadcrumb-mobile-first-enabled': //boolean for if the mobile first prop is used`</code>
   </td>
  </tr>
  <tr>
   <td>Featured Content
   </td>
   <td>
   </td>
   <td>Click on a featured content link
   </td>
   <td><code>'event': 'nav-featured-content-link-click' //consistently populate for all featured content link clicks</code>
<p>
<code>'featured-content-heading': //dynamically populate according to the header of the featured content</code>
<p>
<code>'featured-content-click-label': //dynamically populate according to the link label</code>
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
   <td><code>'event': 'int-textbox-input' //consistently populate for text box inputs</code>
<p>
<code>'textinput-label': //dynamically populate according to the label of the text box</code>
<p>
<code>'textinput-field-value': //dynamically populate with the user input text</code>
<p>
<code>'textinput-type': //dynamically populate according to the text prop variable</code>
<p>
<code>'textinput-required': //dynamically populates with boolean true or false, true if text input is required</code>
<p>
<code>------------------------------------------</code>
<p>
<strong><em>Substitute these variables for TextArea.js</em></strong>
<p>
<code>'textarea-label': //dynamically populate according to the label of the text area</code>
<p>
<code>'textarea-field-value': //dynamically populate with the user input text</code>
<p>
<code>'textarea-required': //dynamically populates with boolean true or false, true if text area is required</code>
<p>
<code>'textarea-type': //dynamically populate according to the text prop variable</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Select box</em>
   </td>
   <td>Select.js
   </td>
   <td>Selection and click away from select box
   </td>
   <td><code>'event': 'int-select-box-option-click' //consistently populate for all select box selections</code>
<p>
<code>'select-box-label': //dynamically populate according to the label of the select box presented to the user</code>
<p>
<code>'select-box-value': //dynamically populates with the select box value selected</code>
<p>
<code>'select-box-required': //dynamically populates with boolean true or false, true if checkbox is required</code>
<p>
<code>'select-options': //dynamically populates with the options of the select box</code>
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
   <td><code>'event': 'int-checkbox-option-click',</code>
<p>
<code>'checkbox-label': //dynamically populates according to check box label selected</code>
<p>
<code>'checkbox-labelAboveCheckbox': //dynamically populates according to label description presented to the user </code>
<p>
<code>'checkbox-required': //dynamically populates with boolean true or false, true if checkbox is required</code>
<p>
<code>------------------------------------------</code>
<p>
<strong><em>Substitute these variables for CheckboxGroup.js</em></strong>
<p>
<code>'checkboxgroup-options-label': //dynamically populates with the label of the selected checkbox</code>
<p>
<code>'checkboxgroup-label: //dynamically populates with the label of the checkbox group presented to the user</code>
<p>
<code>'Checkboxgroup-required': //dynamically populates with boolean true or false, true if checkboxgroup is required</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Radio Button</em>
   </td>
   <td>RadioButton.js
   </td>
   <td>Select and click away from a radio button option
   </td>
   <td><code>'event': 'int-radio-button-option-click', //consistently populate for all radio button toggles</code>
<p>
<code>'radio-button-label': //dynamically populate according to the radio button label for the group presented to the user</code>
<p>
<code>'radio-button-option-click-label': //dynamically populate according to the radio button option selected label</code>
<p>
<code>'radio-button-options-label: //dynamically populates according to the radio button options array</code>
<p>
<code>'radio-button-required: //dynamically populates with boolean true or false, true if radio button is required</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Date</em>
   </td>
   <td>Date.js
   </td>
   <td>Select and click away from a date field selection
   </td>
   <td><code>'event': 'int-date-input', </code>
<p>
<code>'date-label': //dynamically populate according to the date label presented to the user</code>
<p>
<code>'date-date': //dynamically populates with the date selected</code>
<p>
<code>'date-required': //dynamically populates with boolean true or false, true if date is required</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>MonthYear</em>
   </td>
   <td>MonthYear.js
   </td>
   <td>Select and click away from a MonthYear field selection
   </td>
   <td><code>'event': 'int-monthyear-input',</code>
<p>
<code>'monthyear-label': //dynamically populates with the entire label </code>
<p>
<code>'monthyear-date': //dynamically populates with the date value </code>
   </td>
  </tr>
  <tr>
   <td>Modal
   </td>
   <td>Modal.js
   </td>
   <td>Click on a modal button
   </td>
   <td><code>'event: 'int-modal-click',</code>
<p>
<code>'modal-status': this.props.status,</code>
<p>
<code>'modal-title': this.props.title,</code>
<p>
<code>'modal-primaryButton-text': this.props.primaryButton.text,</code>
<p>
<code>'modal-secondaryButton-text': this.props.secondaryButton.text</code>
   </td>
  </tr>
  <tr>
   <td>Pagination
   </td>
   <td>Pagination.js
   </td>
   <td>Click to paginate 
   </td>
   <td><code>'event': 'nav-paginate-number' //if number click, 'nav-paginate-previous' if previous click, 'nav-paginate-next' if next click</code>
<p>
<code>'paginate-page-number': //dynamically populate according to the number the user navigated to</code>
<p>
<code>'maximum-page-list-length': //populate according to the maximum number of pages that can be navigated</code>
<p>
<code>'last-page-enabled': //populate if last page enabled prop is used</code>
   </td>
  </tr>
  <tr>
   <td>Progress Bars
   </td>
   <td>
   </td>
   <td>On state change
   </td>
   <td><code>'event': 'nav-progress-bar-change', //consistent event name for progress bar change</code>
<p>
<code>'progress-bar-type': 'segmented', //dynamic with type of progress bar, in this case 'segmented'</code>
<p>
<code>'progress-bar-current': //dynamically populate with an integer with each new change the current</code>
<p>
<code>'progress-bar-total': //consistently populate as an integer with the total number of segments</code>
<p>
<code>'progress-bar-title': //dynamically populate according to the label on the component</code>
<p>
<code>'progress-bar-percentage': 10 //use for standard progress bar, only in increments of 10%`</code>
   </td>
  </tr>
  <tr>
   <td>Promo Banner
   </td>
   <td>PromoBanner.js
   </td>
   <td>Click on a link within the promo banner
   </td>
   <td><code>'event': 'nav-promo-banner-link-click'</code>
<p>
<code>'promo-banner-click-label': //populate according to link click text</code>
<p>
<code>'promo-banner-click-target': //populate according to target in component</code>
<p>
<code>'promo-banner-click-href': //populate according to click href</code>
<p>
<code>'promo-banner-closeable': //populate with true or false based on if promo banner is capable of being closed</code>
<p>
<code>'promo-banner-type': //populate according to banner type (icon) in component`</code>
   </td>
  </tr>
  <tr>
   <td>Sidenav
   </td>
   <td>
   </td>
   <td>
    Click on a sidenav link
   </td>
   <td><code>'event': 'nav-sidenav' //consistently populate for side navs</code>
<p>
<code>'sidenav-click-action': //'expand', 'collapse', 'click-through'</code>
<p>
<code>'sidenav-click-label': //populate according to sidenav clicked on</code>
<p>
<code>'sidenav-click-level': //number representing the indentation level of the navigation level clicked on</code>
<p>
<code>'sidenav-parent-label': //label of next 1-level higher parent, undefined if is parent</code>
<p>
<code>'sidenav-accordion-header': //label of the collapsible accordion header</code>
<p>
<code>'sidenav-section-title': //h4 in design system docs`</code>
   </td>
  </tr>
</table>
