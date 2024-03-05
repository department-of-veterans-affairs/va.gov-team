----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/How-To-Wizard-Interactions.1841070200.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

### Datalayer Specification

Updated 12/31/2020: 
- Removing the event for `howToWizard-hidden` as current codebase is not robust enough to trust this event with great legitimacy

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
User chose to start over the wizard | `'event': 'howToWizard-start-over'` | Pushed along with the user function to start the form over [(manually clears the session data)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/use_cases/business_logic.md)
Form field changes (clicks on radio button answers) | `'event': 'howToWizard-formChange'`,<br>`'form-field-type': '<form_component_type>',`<br>`'form-field-label': <question_text>',`<br>`'form-field-value': '<question_answer_or_form_value>',` | • `'form-field-type'` should populate with the class name, in this case `'form-radio-buttons'` ![image](https://user-images.githubusercontent.com/48527022/93485736-61bf4600-f8d1-11ea-9650-8c2f6f381b95.png) •`'form-field-label'` should populate with the full question label<br>•`'form-field-value'` should populate with the value selected, in most cases here `'Yes'` or `'No'`
Received alert notice following a question answer <br> ![image](https://user-images.githubusercontent.com/48527022/93490255-40ad2400-f8d6-11ea-85bf-f2d7b88e2d3c.png) <br> ![image](https://user-images.githubusercontent.com/48527022/93491401-a3eb8600-f8d7-11ea-9086-00218c7eb200.png) <br> ![image](https://user-images.githubusercontent.com/48527022/96585154-2d162400-12ad-11eb-9856-dc04ba7b5bca.png) | `'event': 'howToWizard-alert-displayed',` <br>`'reason-for-alert': '<description>'` | <br>`'reason-for-notice'` can populate with whatever free text level of specificity you all feel is necessary to understand why the user received the notice, for reasons that are ineligibility related, we can prefix with `ineligibility - `...(**e.g** `'ineligibility - not a service member or veteran'`, `'ineligibility - eligible for chapter 31'`, `'ineligibility - outside time period from active duty discharge`', `'chose not to apply now'`)
Click on link within blue box notice <br> ![image](https://user-images.githubusercontent.com/48527022/93496079-cb911d00-f8dc-11ea-92ec-14109038beda.png) ![image](https://user-images.githubusercontent.com/48527022/96589333-aebc8080-12b2-11eb-9b2a-bb7315e08a29.png) | `'event': 'howToWizard-alert-link-click'`, <br> `'howToWizard-alert-link-click-label'`| Populate with the full link click label
How to wizard primary CTA is surfaced / visible | `'event': 'howToWizard-cta-displayed'` | When the user has reached the end of the series of questions to reach the apply now button 
User clicks button to apply now <br> ![image](https://user-images.githubusercontent.com/48527022/93489961-e44a0480-f8d5-11ea-83ba-d94edee335f9.png) | `'event': 'cta-button-click',`<br>`'button-type: 'primary' //populate with the button type`<br>`'button-click-label': //populate with the button label` | Populate with the full primary button click label
User clicks link to skip how to wizard <br> ![image](https://user-images.githubusercontent.com/48527022/93489251-49512a80-f8d5-11ea-83e5-e2ab93892d28.png) | `'event': 'howToWizard-skip'` | From reading [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/use_cases/business_logic.md#for-all-wizards), sounds like there will be customization around the display properties (link vs h2) <br><br> Keeping this event name generic to account for the customizations of some teams having links vs buttons
Video Tracking with a **progress bar** | `'event': 'nav-progress-bar-change',`<br>`'progress-bar-type': 'segmented',`<br>`'progress-bar-current-value': //dynamically populate with an integer with each new change the current,`<br>`'progress-bar-max-value': //consistently populate as an integer with the total number of segments, i.e 5,`<br>`'progress-bar-title': //title of progress bar step`<br>`'progress-bar-subtitle': //subtitle of progress bar step`<br>`'enable-analytics': true`

