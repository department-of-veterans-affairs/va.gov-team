# Publishing, Editing, and Deleting Form Details pages #

## Table of Contents ##
 * [Determining Need for a Detail Page](#determining-need-for-detail-page)
 * [Publishing New Form Detail Pages](#publishing-new-form-detail-pages) 
 * [Editing Existing Form Detail Pages](#editing-existing-form-detail-pages)
 * [Deleting Form Details Pages](#deleting-form-detail-pages)
 
## Determining Need for a Detail Page ##
Publish a detail page for the following types of forms:
* Beneficiary customer VA forms
* Other customer VA forms (e.g., people applying for a VA grant, job, forms for VSOs or other people who are
applying to get accredited or work with VA, etc.) Refer to [form inventory on VA's Sharepoint site](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/S998%20Depot%20Inventory%206-4-19%20(1).xlsx?raw=true) for more info.

Don’t publish form detail pages for:
* Non-VA forms like GSA, OF, SF forms
* Intranet forms like employee and other personnel forms

## Publishing New Form Detail Pages ##
Note: Forms are searchable without having a form detail landing page.


## Accessing Drupal Content Management System (CMS) ##
- From inside the VA's network, go to [link]()

## Populating CMS Form Fields ##

In the EDIT mode of a form detail landing page – CMS fields:

FORM NAME field
This text comes direct from the forms DB. Review the text and edit only if there are style errors or actual mistakes.
* Open the PDF form to verify the real name of the form.
* Change ALL CAPS to title case.
Form names are title cased on our site because it’s treated as a proper noun.

### FORM LANGUAGE field ###
You must select a value here when you publish the form detail page. The language here is referring to the language of
the actual PDF, not the form detail page.
### RELATED TO field ###
If it is not a benefit related form, leave this field untouched; the FE will display the form administration here.
If the form is a customer beneficiary facing form, select Benefits, and then the benefit categories that apply.
* Until you get a solid footing of our benefits, get SME verification for what benefits apply. (All high value
benefit form pages for 1.0 launch were reviewed and validated with business line SMEs.)
### WHEN TO USE field – optional. ###
Fill out this field for high value beneficiary forms. Use the following pattern text. The text pattern highlighted in red helps
SEO by using the phrases “va form” and the form number on the page.
* Use VA Form 21-526EZ when you want to apply for VA disability compensation (pay) and related benefits.
* Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in VA
health care to get care at VA health facilities or to have us cover your care at a community care provider (an 
approved non-VA provider). { here we say “if you’re a Veteran” because there are other health care
application forms for family members and caregivers}

### ONLINE TOOL field ###
Paste in the tool URL. Leave blank if there’s no digital tool to link to.
It can be a VA.gov tool. Some forms may have an eBenefits tool, but not a VA.gov tool, and that’s okay to link to. We
want to give users whatever is the easier digital alternative to mailing in a paper form.
For the ONLINE TOOL text blurb: Use one of these 2 text patterns:
V1 – for tools that are applying, filing, or enrolling (e.g., 10-10ez)
* You can apply online instead of filling out and sending us the paper form.
V2 – for tools that are managing or doing a specific task like adding, updating, editing, etc. (e.g., 22-5495)
* You can submit your request online instead of filling out and sending us the paper form.
Note: Currently, several high value beneficiary forms link to a VA.gov content page (e.g., “How to apply” page) instead of
directly to the application tool intro. As soon as these tools include the Wizard on their tool, please update the online tool
links to the tool instead of the “how to” content page. Example: https://www.va.gov/find-forms/about-form-21-526ez/

### HELPFUL LINKS field ###
Can leave untouched unless it’s a high value beneficiary facing form. Default ‘top task’ links will be shown.
For high value beneficiary forms, click Add.
* Start entering the name of the page and the Drupal node will display.
* ALWAYS VERIFY by going to that node what you are linking to. There are many nodes with very similar sounding
node names, so you might accidentally link to something unintended like a VAMC page with a similar sounding
node.

### REVISION LOG MESSAGE field
ALWAYS enter a note about what you changed before saving as a Draft state.

## Saving as Draft ##
Save as DRAFT and preview.

If you are not a content person, send the page to a content person to copy check, especially for high value form pages.
* You’ll need to publish on the same day before the next CMS nightly migration, so you may want to schedule
these in advance so that a content person always has scheduled bandwidth once or every other week to review
and edit. 

## Publishing ##
Last step: Save as PUBLISH.
It will get published with the next content deployment. 

## Editing Existing Form Detail Pages ##
- Include info on how to edit a form detail page in the CMS

## Deleting Form Detail pages ##
- Include info on how to delete a form detail page here
