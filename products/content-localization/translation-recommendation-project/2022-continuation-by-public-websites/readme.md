# About this folder

In July 2022 Dave Conlon asked the Public Websites team to pick up the topic of translation architecture. We started with understanding the prior work and demo environment left behind by the previous group, including Adam Whitlock.

This folder is intended to house documentation of the resumed investigation.

## Getting around in the demo

Demo location: 
https://cms-0f356cderyijzermbo7qgoshbfrm3e1q.ci.cms.va.gov/

[TBD: demo user]

Steps to translate:
With the "Content translation - Spanish" role:
1. Go to any Resources & Support content or create a new Resource and Support page.

2. Go to the "translate" tab and choose "Add" next to "Spanish" then save the node.

3. Translator may edit any field that is shown for that node to Spanish, manually.

4. Translations are saved as Draft only.

5. Users with the role to approve or publish content can change the workflow moderation state from Draft to Published.

Bonus: The interface (Drupal CMS form) is also translated to Spanish in some places.

## About this demo

* This demo includes translation for Spanish
* Translation is available for Resources and Support Pages, for the purposes of the demo
* Translation is available for "Content Translation - Spanish" (new role)
* Content translator can only create a new translation or edit their translation. They cannot edit or change existing content.
* For now the content translator can create any language translation, I am working on this.

## Engineer notes

1. New languages for Drupal core can be downloaded and then imported:
https://localize.drupal.org/

2. Filipino is available but not Tagalog

3. Core module responsible for translation:
https://www.drupal.org/docs/multilingual-guide/translating-content

4. This demo is based on work in previous, older demos, but it is unclear what value remains. Many of those configs were undone in the commits here and the work outlined in steps below for how to replicate this work *should* stand alone. Either way, history is in tact in case there are any gotchas.

### How to replicate this work

1. Enable multi-language
2. Add Spanish translation
3. Enable translaton for the Resources & Support content type
4. Enable translation for all paragraph types
5. Create a new role: "Translator - Spanish"
6. Set permissions for the new role as follows:
  * 'access content overview'
  * 'access toolbar'
  * 'create content translations'
  * 'translate any entity'
  * 'translate paragraph'
  * 'translate support_resources_detail_page node'
  * 'update content translations'
  * 'update media'
  * 'use editorial transition create_new_draft'
  * 'view any unpublished content'
  * 'view latest version'
  * 'view own unpublished media'
  * 'view the administration theme'
  * Manage translations for any entity that the user can edit
7. Optional: Add custom code to (`va.gov-cms/docroot/modules/custom/va_gov_backend/va_gov_backend.module`) restricts editor permissions to single language translation only.