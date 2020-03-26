
This page is for capturing potential known issues with forms. Some of these may just be gotchas, quirks, suggestions for enhancements. Some might turn out to be defects. Once the details have matured they may be written up as GitHub issues and taken up by the platform team (VSP). \
<br/>
<br/>

## Review Page Does Not Show Empty Field and Crashes if Sorted (ui:order)
### Developer POC: Nick Sprinkle
### GitHub Issue#: TBD
### Problem
The review page does not show empty fields (appears to be by design, but undocumented). When we have empty fields, it also crashes when sorting (ui:order).

### Details
Using the forms system, there is an issue with the review page when using ui:order in combination with a ui:description object field when defining a field in the schema like this:
```json
{
  type: 'object',
  properties: {},
}
```
and when defining that same field in the UI schema with only a *ui:description* field, that field will be automatically dropped from the review page. This is intentionally behavior as the idea is to drop fields that are empty objects. The field is removed from both the schema and the UI schema. However, if using *ui:order*, the field is not dropped from this array. This causes the review page to crash when the field would be rendered. The error outputted is: 
```
uiSchema order list contains extraneous property 'propertyName' .
```
### Commentary
There seems to be two issues: \
(1) The documentation does not explicltly mention that empty items will not be shown on the review page. We suspect that may be by design; however, that default behavior might not be desirable in all cases. \
(2) When sorting (ui:order) is also involved, the review page crashes. \
<br/>
<br/>

## Unable to Pre-Fill (pre-populate) Form
### Developer POC: Amen Ra
### GitHub Issue#: TBD
### Problem
(vague) - was unable to pre-fill (pre-populate) data into a new form

### Details
"Your Form ID has to match the in progess form endpoint in order to use the main form reducer. For instance form 2346 endpoint is /in_progress_forms/MDOT, the form id is MDOT" \
TODO: need more context, an example. This statement is probably a tip or (undocumented?) solution.
