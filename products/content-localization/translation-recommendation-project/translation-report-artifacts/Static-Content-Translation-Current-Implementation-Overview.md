# Static Content Translation - Current Implementation Overview


### Overview

A small-scale approach has been implemented for handling translated content in 2 languages (Spanish and Tagalog). For translated content, we enable users to navigate between the English, Spanish or Tagalog content of a page with language links at the top of the page content. We also provide accessibility accommodations for screen readers via several javascript utilities.

Each language page is maintained through the CMS system as their own unique pages and are not related to each other through the CMS currently. The URL of Spanish language pages must end in '-esp' and the URL of Tagalog pages must end in '-tag'.  The URLs for english pages do not require any type of suffix added. Modifications to any content on these pages must also be modified on the corresponding language pages individually before publishing changes to all pages. When new language pages are published, a code update must be completed to add those pages to our maintained list of translated content so that the language navigation links and accessibility utilities are active on the new pages.

### Benefits

* Low complexity and easy to change
* Reliable when used appropriately
* Does not required any large changes to underlying systems

### Drawbacks

* Maintaining a static list of translated page URLs does not scale well
* The lack of relationship between language content in the CMS introduces an increased risk of content getting out of sync or not being the same throughout the languages.
* The publishing workflow requires engineering support to update code after any new language pages are added.
