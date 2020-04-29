# Status and decisions for form detail landing pages

## mm/dd/yy


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
- The default value can be updated in Drupal by the content editor to display one or more of the related to values (e.g., Health care, Education and training, Family members, etc.) 
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
