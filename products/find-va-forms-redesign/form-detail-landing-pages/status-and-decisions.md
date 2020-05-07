# Status and decisions for form detail landing pages

## mm/dd/yy


## 05/07/20

__Decision re non-VA forms and form detail landing page:__

__We will not disable non-VA forms from being published as form detail landing pages.__ There are not that many of them, and for those that do have search value, it's an opportunity to make people aware of VA benefits and services, and as a government agency, we are still better equipped to send people to the source of truth (vs. non-government sites that hijack government forms for nefarious purposes). 



## 05/06/20
Outcome - form detail landing page migration process and requirements - call with Beth Jacobson. 

(Updated 5/7)

__Changes in undestanding and requirements:__

- Nightly migration will automatically generate a form detail landing page in the CMS in publish state. 

- When a new form is added or a form is removed, a PW content editor will review the form detail page and add customized field data if needed or delete the form detail page and initiat a redirect. 

- Only someone with PW content publisher permission can edit, delete, and publish form detail landing pages. 

- If the form is mot a VA form, the PW content editor/publisher will check that value. This will not (in MVP 1.0) exclude it from search. It will show on the form detail Related to field some TBD verbiage that this is not a VA form and possibly provide a link to the GSA forms site.  

- @beth will create a batch publishing dashboard for migrated forms. This will allow the PW content team and QA to validate the initial set of forms in Draft state, and publish them together as a batch after validation/QA. 

- We need a notification mechanism in order to know when a new form has been added or deleted (vis-a-vis removing/redirecting the associated form detail landing page). @beth to look into this [notification ticket #8567](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/8567)  TBD if this needs FE and/or Lighthouse support as well. 



__Use case of deleted forms that we need to work out__ 

When forms are deleted from the source VA Forms DB, we have to address a couple things: 

1/ If the form had a high value form detail landing page, how will we retire the page and redirect it? 

2/ If the form had a low/no value form detail landing page, how will we retire the page and will we redirect it? 

In order to do either of the above, PW content team needs to get notified when a form has been deleted in the forms DB. 

__Next steps:__ 

- Discovery for event notification ticket @beth

- Jen find out with stakeholders how often forms are added/removed, what their current process is for retiring and redirecting. 



## 04/29/20

Outcome from call w/Beth Jacobson re migration approach for custom fields that don't come from the forms database: __Related to__; __Online tool__; __When to use this form__. 


__Migration:__

1/ Beth will do a discovery to see how this might work. 

2/ The form PDF URL can stand in as the 'key' that connects the migrated data to a form record. 

3/ Related to, Online tool, and When to use this form values can all be included as part of the migration. 

4/ As a CSV spreadsheet. 

5/ Each related to value as a column, with an X if a form gets that value. 

6/ No problem that she can see at this time to do a staggered migration. I.e., first chunk for the top 30-40 mvp high value forms; 2nd chunk for all the other forms. (This gives us time for VA stakeholders to add those values into a shared spreadsheet for the other 500ish forms in the database.)


__Other outcomes:__

- We will create a Related to value for forms that are not VA forms -- Not a VA form/Non-VA form -- so that in the future, we have the option to use this tag to suppress/hide non-VA forms from search or from getting a VA form detail landing page. (Rationale: We don't want VA form detail landing pages to compete with the source of truth - e.g., OPM and GSA forms that actually have form pages on the OPM/GSA forms site.)

- We will not add a "Veterans" label (like we have for Family member benefits and Service member benefits). Rationale: all benefits on VA are essentially Veteran related, even the ones that are family member or service member benefits.

__Next steps:__
- Beth will create a discover ticket for migration approach. 

- Jen will update CSV format per fields needed for migration, with solidified Related to values. 

- Jen will coordinate stakeholders filling out the 500ish form values. 


## 04/27/20

Outcomes from call w/Beth Jacobson re Drupal form detail landing page data fields schema. 

#### Drupal field label nomenclature mapping: 

We decided on the general approach to map the CMS AX labels to the frontend form detail landing page user interface label as closelyl as possible. 


#### "Revision date" field label value: 

- We will change this label to __"Form last updated"__

- This change affects FE design - the label that appears on the search results and on the form detail landing page. (Don't change search results design yet until properly socialized with forms managers.)

- The date displayed will be the revision date from the forms database; if there's no revision date value, we will display the date from the issue date field. 

#### "Related to" field logic:  

- By default, when a new form is added in the database, the __Related to__ field will display the associated form owner from the forms database: VA, VHA, VBA, or NCA

- The default value can be overridden in Drupal by the content editor to display one or more of the related to values (e.g., Health care, Education and training, Family members, etc.) 

- The complete list of related to values still needs to be solidified. 


#### Next step:

Jen solidifies Related to values. 


## 04/24/20

Call w/ Stephanie, Nick, Mikki, Andrew Fichter, Jen Lee, Beth Jacobson, and John Hashimoto. 

__Confirmed:__ PW can use Lighthouse forms api credstash to connect Drupal to VA forms db. Nick will get that from Andrew's team. 

__Confirmed:__ After Drupal connects to the VA forms db, and new data fields (online tool, related to, related forms...) are available in the CMS, Lighthouse can begin pulling all forms data via Drupal graph ql for both search and form detail landing pages. 
Beth showed iteration so far of Drupal content model of data fields and how each one maps to the form detail page UI. 

__Decision:__ RE Drupal data field labels. We agreed and decided to map the Drupal field labels to the FE form detail page UI label. This reduces potential confusion and eliminates having to comprehend 3 variations of labels (VA forms DB field label, Drupal label, front end UI label). 

__Next steps:__
Beth and Jen need more working sessions to work out CMS field labels and mapping. 

We need another sync to go over IA and URL generation with Drupal.
