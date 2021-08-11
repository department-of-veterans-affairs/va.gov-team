# Potential Solution Dependent : Language Field Dropdown

* Field Type: List (text)
* Field Label: Language Code

### Description:

A list (text) field is added with a Language Label and various supported languages as options.
Format Example:

TODO: screenshot of drupal field settings


### Considerations

* The Field Options need to be static and not modified after they are declared
* There are other fields which already exist within the drupal api already. They are not visible to the UI due to the Multilingual module not being activated, but they are still available via the graphql schema data and can be requested. This includes:
  * langcode
  * entityLanguage
  * defaultLangCode
* How would a migration to the Multilingual module look like?
