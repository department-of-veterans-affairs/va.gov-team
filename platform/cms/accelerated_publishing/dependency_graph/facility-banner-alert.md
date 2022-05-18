The logic to display a banner alert is included on every page in the metalsmith build.  The [full width banner component](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/components/fullwidth_banner_alerts.drupal.liquid) is included from the [header.html](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/header.html). The header.html component is included on every page.

Logic which tells what to display and if the alert should display are all contained within the [template](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/components/fullwidth_banner_alerts.drupal.liquid#L16d).

Logic:
* Cycle through `bannerAlert.entities`
* Look at the `path` of the page being build.  This is not the `entityUrl` from Drupal but the actually http path.
  * Extract "region" from first part of the URL and last argument of the url.
* Cycle throuh the `fieldBannerAlertVamcs` of each `bannerAlert.entities`
* Does the "region" extrated from the first part of the URL equal the `entity.fieldOffice.entity.entityUrl.path` of the `fieldBannerAlertVamcs` row?
  * If no then go to next row.  If no matches are found then do not display the banner alert. 
* If last part of the url is equal to the region part of the url then do not display and proceed to the next row.
* If the last part of the url is `/operation-status` do not display the banner alert.
* Otherwise Display the URL.

