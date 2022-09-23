# About this folder

In July 2022 Dave Conlon asked the Public Websites team to pick up the topic of translation architecture. We started with understanding the prior work and demo environment left behind by the previous group, including Adam Whitlock.

This folder is intended to house documentation of the resumed investigation.

## Getting around in the demo
[DRAFT]

Demo location:

About this demo: 

* This demo includes translation for Spanish
* Translation is available for Resources and Support Pages, for the purposes of the demo
* Translation is available for "Content Translation - Spanish" (new role)
* Content translator can only create a new translation or edit their translation. They cannot edit or change existing content.
* For now the content translator can create any language translation, I am working on this.

Steps to translate:
With the "Content translation - Spanish" role:
1. Go to any Resources & Support content or create a new Resource and Support page.

2. Go to the "translate" tab and choose "Add" next to "Spanish" then save the node.

3. Translator may edit any field that is shown for that node to Spanish, manually.

4. Translations are saved as Draft only.

5. Users with the role to approve or publish content can change the workflow moderation state from Draft to Published.

Bonus: The interface (Drupal CMS form) is also translated to Spanish in some places.

## Engineer notes

1. New languages for Drupal core can be downloaded and then imported:
https://localize.drupal.org/

2. Filipino is available but not Tagalog

3. Core module responsible for translation:
https://www.drupal.org/docs/multilingual-guide/translating-content