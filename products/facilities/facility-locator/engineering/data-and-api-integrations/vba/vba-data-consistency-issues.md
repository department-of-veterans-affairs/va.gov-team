# Veterans Benefit Administration (VBA) Facility data integration

## 2025 notes

As of 3/24/25 50% of VBA facilities are on [modernized pages](https://dsva.slack.com/archives/C0FQSS30V/p1742829850426499). Modernized pages are driven by CMS data. The remaining are on facility detail pages driven by Facility Locator and Lighthouse data with links to the teamsites pages for those facilities. When a facility transitions from a FL driven page to a modernized page, revproxy redirects are added to make all remaining links for temasites pages go to the modernized page.

Modernized pages pull most information from Drupal, however the nearby facilities makes 3 requests to facilities-api v2 (3 because we pull 1 VAMC, 1 Vet Center, and 1 Cemetery all requiring different facility type searches from Lighthouse.

## 2024 notes

VBA data is maintained in an old database called "Sandy's DB."
Sandy's DB is maintained by Michelle Middaugh. 

LH pulls in some VBA data from Sandy's DB indirectly through BISL. For the Facility Locator, we display VBA data from Lighthouse.

There is additional VBA data in Sandy's DB that Lighthouse doesn't care about. The Facilities team migrates more of that data into CMS for VBA purposes, and will eventually deprecate Sandy's DB and the CMS will be the source of truth for VBA data. 


### Issues

**Note: 3/26/25 As we change to modernized pages this becomes less difficult as there is a standard inputs for hours and status. However, there's still a lot of processing inside Facility Locator detail pages to handle text variances in data from VBA.**

1. Spurious leading/trailing **?** characters in the "Comments" field, e.g. `?Appointment recommended`. This is observed frequently enough that it looks like a data conversion issue, or possibly there was a "?" character in whatever form the offices filled out that was not erased before data entry.

1. Varying formats for hours: `7:30 am - 4:00 pm` vs. `730AM - 4PM` vs. `8 a.m. - 4 p.m.` vs. `8 am to 4:30 pm`. All variations of uppercase/lowercase, periods/no-periods, to/-, spaces/no-spaces are seen across different records. VHA data in contrast is well standardized with a single format `730AM-400PM`. Even if that's not what we want to display we can at least convert it easily since it's uniform.

1. Varying formats to indicate "closed" hours: `Closed` vs. `NA` vs. `none` vs. `not open` vs. `0`. VHA data in contrast uniformly uses `-` to indicate closed. VBA may need one or more additional values such as "Appointment only" but allowed values should be decided at the top level. For things like "Open every other thursday", the comments field should be used. Also should suggest consistent verbiage for "Closed on all federal holidays" 

1. "Other Services" is a free-form field with a length limit - a number of entries are cut off. The length limit will be difficult/impossible to avoid in a GIS shapefile but the corresponding data entry mechanism should have the same limit so people don't enter data that gets cut off.

1. Phone/fax number consistency is overall better than hours information, but it would be nice to standardize on a format e.g. `XXX-XXX-XXX` or with extension `XXX-XXX-XXX x YYYY`. A couple facilities included multiple phone numbers for individuals or departments in the single phone field which will make for awkward display.

1. Typos/grammatical errors: `Assist beneficiary’s in the fiduciary program`, `Glemdora CA`, `7:30am-40:O0pm`, `Fort Belvoir Wariror Pavilion Bldg` etc. We can't catch 100% of these but somebody could sit for a couple hours and scan through and catch most of them. 
