# XLIFF and Translation Management


### The Drupal Translation Management Tools as well as the Content Translation modules are required to be installed for setting up translations and for exporting XLIFF files.

Translation Management allows translation 'jobs' to be created and at that point the content could be exported then reimported, or a local translator can use the built in translation UI to modify the translated content directly.

![Screen Shot 2021-09-16 at 10 53 05 PM](https://user-images.githubusercontent.com/8332986/133726676-27c3adb5-cfb2-4d41-8509-0c203adbf509.png)


### File Export UI

![Screen Shot 2021-09-15 at 1 06 49 PM](https://user-images.githubusercontent.com/8332986/133494571-934f68f5-5d1a-42b6-9ea9-5a6cd4153afd.png)



### Other Avenues for Data Export

The **Views Data Export** module allows "a way to export large amounts of data from views", but I think the issue we might have with the current Drupal setup is that we are not using the "views" feature of Drupal and instead are using the content-build process to generate html for rendering.

Link: https://www.drupal.org/project/views_data_export

The **Content Export CSV** module allows a specific content type's nodes to be exported to CSV format. This project is not covered by Drupal’s security advisory policy, so that may be a concern. The CSV exports would then need to be somehow converted into XLIFF files for sharing with translators.

Link: https://www.drupal.org/project/content_export_csv
