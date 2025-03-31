# Banners and alerts, a saga

Banners and alerts on VA.gov are generated from a variety of systems, and are rife with a variety of naming problems. 

Before you embark on creating a new type of banner or alert, or modifying existing banners be mindful of the existing landscape: 

Product common name | Drupal machine name, if in Drupal | FE name/template/app | What it do | Product docs
--- | --- | --- | --- | ---
Full-width alerts | `banner` | `va-banner` | Appears just below the VA.gov header, can be put on any page of VA.gov using regex patterns. <br/><br/>This feature includes a JSON API endpoint, `banners` that provides banner data to Next Build. | [full-width-alerts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert) 
Promo banner | `promo_banner` | `va-promo-banner` | Appears on VA.gov, pinned to viewport bottom.  | [Public Websites feature docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites#promo-banner)
VAMC System Banner Alert with situation update (VASBAwSU)| `full_width_banner_alert` |  | Is a Drupal content type used by VAMCs for publishing urgent patient-safety related updates. Looks like / is used exactly like full-width alerts, but appears only within VAMC System pages on VA.gov. Used to be published via content-build til 12/24. |  [VAMC feature docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-system-banners-with-situation-updates)
VAMC Real-time banners | `full_width_banner_alert` | `situation-updates-banner` | Is a publishing mechanism for VASBAwSUs as of 12/24. Pulls Drupal content into vets-api (`banners` service) and publishes via a vets-website React app.  | [VAMC feature docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-real-time-banners)
Banner Alerts | N/A - this is a fieldset | N/A | "Banner alerts" appear as a fieldset on VBA Facilities in Drupal. They generate a banner that looks like a Full-width alert. This paradigm to be extended to Vet Centers and VC Outstations ([19891](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19891)) | N/A

Other content history for banners: [products/content/banners](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/banners)

Not to be confused with [Announcements](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites#announcement-framework).
