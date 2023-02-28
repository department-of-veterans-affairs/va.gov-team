## CMS translation management: Import & Export
Drupal (the framework our CMS is built on) has translation ability built in. However, it does not of itself have a system for exporting content data for translation by another system and then importing those translations.

Most Drupal-based CMS's with translation needs use TMGMT (https://www.drupal.org/project/tmgmt) to manage import and export of translations. TMGMT provides a UI for

* easily seeing what content has been translated, or has translations in progress
* collecting content to be exported for translation
* importing translations and reviewing them prior to accepting them

TMGMT also provides a framework for integrating with translation providers. This can take a variety of forms, but it typically takes one of two forms:

* manually exporting XLIFF files for use by another system
* API integration with a remote translation management system (TMS)

It is almost always preferable to integrate with a TMS's remote API, if that is an option. Having the CMS and the remote TMS communicating directly greatly reduces the possibility of confusion about whether content has been translated; whether translated content has changes in the source that need to be resubmitted for translation.

Manually exporting and transfering XLIFF files imposes an enormous administrative burden on the translation manager. If there is any way to avoid this, it should be.

### XLIFF files
XLIFF is an XML-based file format that specifies how content to be translated is structured such that TMS systems can understand it and add to it. It allows different systems to pass translation-related information between them.

Some specific TMS's augment the XLIFF specification with additions that that TMS uses to provide more robust information and context about the content being translation. Some examples of this might be instructions to the translator ("this content is limited to 255 characters"; "this should be written in a conversational style" etc), context urls (i.e. pointing the translator to the source content so they can see the entire page). 

## Upcoming plans
At this time (28 Feburary 2023), VA.gov CMS is intending on partnering with the Department of Defense for our translation needs. Security restrictions at the DoD require that we export XLIFF files manually, email them to the DoD, and import them manually to the CMS upon receipt. 
