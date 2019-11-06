### Components
**Component**|**Where**|**What**|**How**|**Vets.gov-specific?**|**Risks in abstracting**|**Questions**|**SiP logic?**
-----|-----|-----|-----|-----|-----|-----|-----
actions|/|Redux actions for form, including generic actions plus submitting form and uploading files|Included by each form in entry file|Partly|There are probably something things in here that we would want to provide to others| | 
ApplicantDescription|/|Contains only content warning that filling in more fields helps process application faster|Used as `ui:description` at the top of some form pages across apps|Yes|n/a| | 
ApplicationStatus|/|Save in progress current status widget|Used on content pages to allow users to continue application|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
ArrayField|/|Field for our array pattern|Used on forms with arrays|Partly|This is very specific, might not work for all cases. We may also need to figure out how to pull out vets specific behavior| | 
AskVAQuestions|/|Vets help desk info|Used in FormApp, so it's shown on all forms|Yes| | | 
BasicArrayField|/|Array field that doesn't allow add/remove|Used in HCA to show income fields for children that were added previously|Probably| | | 
FieldTemplate|/|Wrapper component for widgets that: shows correct label, renders validation error|It's an extension point from RJSF|Mostly not|This is the main component for integrating RJSF styling/markup with USWDS| | 
FileField|/|Field for uploading files|Used on forms with file uploads|Yes| |Couldn't this be something that other teams might need?| 
FormApp|/|Main app component that: renders form title and form "chrome", progress indicator, handles global save in progress logic|Mounted as the root of all forms|Mostly|We'll want to pull out the SiP part of this component and make this into something more generically useful| |Yes
FormNav|/|Progress/chapter indicator|Used in FormApp, so it's shown on all forms|No|I think this is generic, but might want to make it easy to override| | 
FormPage|/|Component for each route/page in a form that: handles moving forward or backward, auto-saving, handling pagePerItem pages, renders main form component|Each route uses this component|Partly|Probably need to pull out the SiP logic somehow| |Yes
FormSaved|/|Page that's routed to after saving a form|FormApp routes to this page when necessary|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
FormStartControls|/|Component that renders start buttons, based on SiP state|Used on most form intro pages|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
formState|/|Logic for updating schema/data on changes, based on configuration in uiSchema|Used by reducer|No|Probably the most important non-component code for our forms| | 
FormTitle|/|Markup for form titles|Used on intro pages and in FormApp|No| | | 
FullNameField|/|Renders read-only markup for full name field|Used on pension/burials for the view field on lists of names|Yes| | | 
GetPensionOrBurialFormHelp|/|Help info for pension/burials forms|FormApp renders a help component from form config|Yes|Probably want to make the hook for this more generic| | 
helpers|/|Catch all file that has lots of important functionality, like creating routes and some helper functions|Included all over the place|Partly|Also some things in here that we'd want to provide somehow| | 
ObjectField|/|Field for rendering an object schema type that also handles field ordering, grouping expandable fields, showing prefill message, spacing for titles/descriptions|Extension point from RJSF|Partly|This is a very complicated component with some vets specific stuff we'll need to pull out somehow| Yes | 
PrefillMessage|/|Message telling users some info has been prefilled|Used by ObjectField based on data in formContext|Yes| | | 
save-load-actions|/|Actions for SiP|Imported by components|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
savedFormRequest|/|Api call for fetching a saved form|Used by profile page|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
SaveFormLink|/|Link for calling save api|Used in FormPage|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
SaveInProgressErrorPage|/|Error page for when something goes wrong with SiP|Routed to in FormApp|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
SaveInProgressIntro|/|Component that renders appropriate buttons and content for SiP on intro pages|Used on most intro pages|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
SaveStatus|/|Component that shows the autosave status of a form|Shown by FormPage|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
SchemaForm|/|Main wrapper component around RJSF Form component that switches between reguar and review fields, marks fields as touched, calls custom validation|Rendered by FormPage and ReviewCollapsibleChapter|No|Some vets.gov specific things, but mostly generic| |Yes
ServicePeriodView|/|Component that renders read-only view of service period data|Used by several forms in config for view field of lists|Maybe?| | | 
sip-api|/|Api calls for saving/deleting forms|Used by save-load-actions|Probably|This is SiP specific, but not sure if SiP is something we can extract for others| |Yes
TitleField|/|Markup for headers in forms|Passed into fields by SchemaForm|No| | | 
validation|/|All of our custom validation|Used mostly by common definitions|Partly|We probably want to provide the custom validation functionality we added, but I'm not sure if all these validations are useful| | 
AutosuggestField|/fields|Typeahead field|Cemetery list on pre-need form|Maybe?|This is very specific, might not work for all cases| | 
index|/reducers|All the reducer updates for forms|Imported in form entry files?|No|Mostly generic, also has some initial set up logic that we may want to abstract| | 
ArrayField|/review|Review version of our array pattern|Used in the ReviewCollapsibleChapter component|Partly|There's some specific logic (scrolling, uiState, structure of data), but I think mostly this component is useful in a general sense| | 
CurrencyWidget|/review|Widget the returns a <span> with the value rounded to 2 decimals|In definition for currency.js|No|None| | 
ObjectField|/review|A review version of the ObjectField component, that includes logic on when to show the review version vs. not, the title, expand under fields, etc.|In SchemaForm component|Partly|Lots of complex logic we may want to tease out| | 
PhoneNumberWidget|/review|Span that contains the formatted telephone number|In definitions for phone.js|Partly|Doesn't handle international numbers; not sure if this is needed or not| | 
ReadOnlyArrayField|/review|Same as ArrayField but read only version|In SchemaForm component|Partly|Specific class names we may want to pull out or make customizable|Why is this used over /review/ArrayField in SchemaForm component?| 
ReviewCollapsibleChapter|/review|The collapsible component that contains each chapter's content in the review page|In ReviewPage component|Possibly|If we want to provide an option to have the review page flow be different, this component will have to change| | 
ReviewFieldTemplate|/review|This is the template for each field (which in the schema library means label + widget)|In SchemaForm component|No|None| | 
ReviewPage|/review|Component that renders the entire review page, with CollapsiblePanels for each chapter|In helpers.js?|Partly|Specific logic in terms of how the page is displayed, with individual chapters, and the PrivacyAgreement, will need to be abstracted out| |Yes
SSNWidget|/review|Span that contains the formatted SSN|In definitions for ssn.js|No|None| | 
StringField|/review|Basic component to render string values on review page; could use any widget to render it, depending on if a specific widget is specified in uiSchema or on data format|In SchemaForm component|No|None| | 
SubmitButtons|/review|Buttons at the end of the form to go back, submit, save progress|ReviewPage component|Partly|Need to figure out what actions are available at the end of the form and how they're tied to submitting to external services| |Yes
widgets|/review|Simple widgets that return a formatted span, including TextWidget, DateWidget, SelectWidget, yesNo, CheckboxWidget|SchemaForm component|Maybe?|Dates are formatted specifically. Perhaps users of the library will want to customize that.| | 
ArrayCountWidget|/widgets|Widget that controls how many rows there are in an array|Used on pension form to create previous marriage pages for a user to fill out|Yes|n/a| | 
CheckboxWidget|/widgets|Widget for a single checkbox|Used when specifying `type: boolean` in schema|No|None| | 
CurrencyWidget|/widgets|Widget that returns a text field with some validation and formatting for currency constraints|Used any time monetary values are being collected in a form, specified in the definition for currency, which is then used in the form under uiSchema|No|None| | 
DateWidget|/widgets|Widget for date inputs; select for month, select for day, and text for year|Used by specifying `'ui:widget': 'date'` in config|No|None| | 
EmailWidget|/widgets|Widget that returns a TextWidget with type="email"|Used when specifying `type: string, format: email` in schema|No|None| | 
PhoneNumberWidget|/widgets|Widget the returns a TextWidget with some additional functionality to strip non-numeric characters|Used by specifying `'ui:widget': 'PhoneNumberWidget'` in config|No|None| | 
RadioWidget|/widgets|Widget that returns a radio button for each option passed to it, and includes logic for expandable content beneath each option|Used by specifying `'ui:widget': 'radio'` in config|No|None| | 
SelectWidget|/widgets|Widget that returns a select field|Used when schema has `enum` property listed|No|None| | 
SSNWidget|/widgets|Widget that returns TextWidget with additional functionality to strip dashes|Used by specifying `'ui:widget': 'SSNWidget'` in config (also there is a definition for ssn)|No|We may want to think about validation that could be built in for this widget or definition| | 
TextWidget|/widgets|Widget that returns a text field|Used when schema has `type: string` and nothing else specified?|No|None| | 
YesNoWidget|/widgets|Widget for yes/no radio buttons|Used across many forms any time a yes/no question is asked; used by specifying `'ui:widget': 'yesNo'` in config|No|None| | 
