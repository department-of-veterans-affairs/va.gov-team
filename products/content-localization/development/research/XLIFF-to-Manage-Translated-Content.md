# XLIFF and Translation Management


### The Drupal Translation Management Tools as well as the Content Translation modules are required to be installed for setting up translations and for exporting XLIFF files.

Translation Management allows translation 'jobs' to be created and at that point the content could be exported then reimported, or a local translator can use the built in translation UI to modify the translated content directly.

![Screen Shot 2021-09-16 at 10 53 05 PM](https://user-images.githubusercontent.com/8332986/133726676-27c3adb5-cfb2-4d41-8509-0c203adbf509.png)


### File Export UI

![Screen Shot 2021-09-15 at 1 06 49 PM](https://user-images.githubusercontent.com/8332986/133494571-934f68f5-5d1a-42b6-9ea9-5a6cd4153afd.png)



## Other Avenues for Data Export
Other modules that provide some sort of file export for content and other data

### Views Data Export Module
Provides "a way to export large amounts of data from views", but our content build process is not using the "views" feature of Drupal and instead we are generating html markup during the build via the GraphQL api for rendering, and therefore this modules does not export applicable data.

Link: https://www.drupal.org/project/views_data_export

### Content Export CSV Module

Module allows a specific content type's nodes to be exported to CSV format. This project is not covered by Drupal’s security advisory policy, so that may be a concern. The CSV exports would then need to be somehow converted into XLIFF files for sharing with translators. Unfortunately this module is not compatible with the current version of Drupal 9.2.7 at this time. I doubt it will be updated as the last code changes to the module were done June 6, 2020. 

Link: https://www.drupal.org/project/content_export_csv


### Node Export Module
The only applicable module that actually allows exporting and importing. Nodes can be transmitted using JSON, Drupal var exports, CSV, PHP serialization, or XML. After installing this module and exporting a Covid 19 page the resulting JSON only contained the base metadata and all content blocks would need to be exported individually. An example can be found here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/development/research/node_export_example.json   

Link: https://www.drupal.org/project/node_export
