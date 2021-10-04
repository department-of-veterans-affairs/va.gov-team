# Entity Reference Implementation -  Overview


### Overview

To increase scalability of the current implementation, an "Entity Reference" solution has been proposed. This solution would add a way to tie language pages together through the CMS system, and therefor query those relationships for a given page and display language links based on those relationships. The CMS would need to have Entity Reference fields added to the page types and a language field added to specify the language of the current page. The build system and underlying code would then have to be updated to use these new fields appropriately.

### Benefits

* A list of translated URLs would not have to be maintained by engineering, and therefore pages could be published without the required engineering support
* Since a language field would be available to pages, a URL suffix of '-esp' or '-tag' would no longer be required.
* Partial support of language pages could be added so that a Spanish page link could be show once published, even if the Tagalog page was not ready yet.

### Drawbacks

* Extra complexity is added to the application that impact long term maintainability 
* Not an officially supported CMS method of translation management
* Adds more data to the CMS database and a rollback strategy would need to be developed
