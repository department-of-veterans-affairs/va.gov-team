# VAMC Engineering information


## Drupal migration documentation
https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-facility.md

## VAMC Facility data integrations
https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/vamc-facilities.md


## Lovell: How Lovell FE Pages are Processed

This is a large-scale overview of how Lovell pages are processed and created from Drupal data in [process-lovell-pages.js.](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/drupal/process-lovell-pages.js)

There is also a video recording giving an explanation of this process: 
https://us06web.zoom.us/rec/share/FaGAAW_dLw3N-VPx8HBE4imGRvdm5Q690glkLErpOTk1voFYwpLoUdH-bLnp8doS.xwE5KZKZ8XvXDuoF
Passcode: ?Nn2zTb+

1. The different types of Lovell pages are separated into different categories. Each is saved into a variable.
    - Federal pages
        - Listing and non-listing
        - Does not include homepage
    - Tricare pages
        - Listing, non-listing, and homepages
    - VA pages
        - Listing, non-listing, and homepages
2. The Tricare and VA listing pages need to have their listings combined with their respective federal ones.
    - Listings include events, press releases, and news stories
    - One is for all the past listings, and one is for the future ones
    - The past one has a label name specific to the type of listing, but the future one has the same name regardless.
3. The VA and Tricare homepages need the featured stories to be displayed. The listing pages defined in the last step are used here.
    - It’s handled with a function from the `featured-items.js` file. This is because there’s a lot of small helper functions specific to this task, so it makes more sense to isolate it from everything else.
4. All the VA and Tricare pages need to go through some blanket modifications
    - All of the different VA or Tricare pages are put together into respective arrays
    - They’re all then run through the `getModifiedLovellPage` function. It modifies each page’s metadata respectively - title, link, path, breadcrumb, and it also sets a `switchPath`. This is the link to the page’s counterpart - so for a Tricare page, it links to the respective VA version of the same page
5. Once all the Tricare and VA pages are modified, then we need to make Tricare and VA versions of all the federal pages.
    - This basically takes every non-listing federal page, makes a deep clone of it, and runs it through the same `getModifiedLovellPage` as above. It does this twice, one for Tricare and one for VA.
6. After this, all the Tricare and Va pages are basically done, and are all saved to `processedLovellPages`. One last thing we need to do with them, now that they’re all done, is run each page through `updateLovellSwitchLinks`. 
    - This function makes sure that the page each page references in their switch link actually exists. It needs to be checked against the entire array of all the Lovell pages, so it has to be done near the end.
7. Then all the Lovell data is mixed back in with all the other pages from Drupal
8. The final step is taking the needed menu data, cloning it, and modifying it for Lovell. That menu data is mixed back into the rest of the Drupal data as well. The original menu used is then deleted so only the Lovell menu is used.
