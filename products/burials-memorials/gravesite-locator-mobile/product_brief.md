# Gravesite Locator (Mobile)

## Background

In March 2025, the Mobile Feature Support (MFS) team, at the behest of Jeff Barnes, investigated how we might help a Veteran or family member locate not just the cemetery in which a Veteran is buried but also navigate to their gravesite, given the modern state of GPS integration with mobile applications?”

Problems to be solved:

* How might Veterans and their families locate the gravesite of another Veteran?  
* How can Veterans and their families be directed from their current location to the gravesite they want to visit?  
* How would Veterans know this feature is available in the VA Health and Benefits mobile app?

Desired outcomes:

* Veterans and their families can access this feature in the mobile app.  
* Veterans and their families can locate the gravesite of a Veteran within a Veteran cemetery.  
* Veterans and their families are provided with visual & audio directions that direct them from their current location to the gravesite.

Research was performed and documented, and a prototype was developed; however, no clear path forward was identified so the work was shelved. These findings, along with outstanding questions that would need to be addressed in order to resume the work, are outlined below.

## Findings

### Competitive Analysis

In an effort to understand and document what similar applications may exist, what features they provide, and what best practices may be, the MFS team performed a technical competitive analysis of similar mobile applications in this space. 

Our team analyzed the [Find a Cemetery](https://www.cem.va.gov/find-cemetery/), [Veterans Legacy Memorial](https://www.va.gov/remember/), [Nationwide Grave Locator](https://www.cem.va.gov/nationwide-gravesite-locator/), [ANC Explorer](https://www.arlingtoncemetery.mil/Explore/Find-a-Grave), and [Find a Grave](https://www.findagrave.com/) applications, and determined that the following features were initially desirable:

* Focus on Veteran burials and use data that is up to date.  
* Search features to find cemeteries and Veterans by name.  
* Directions to cemeteries and exact gravesite locations using GPS.  
* Maps of cemeteries and with their sections overlaid as a layer.  
* Native Android and iOS apps.

The complete competitive analysis can be found [here](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/293).

### Data Sources

Our team also performed research into publicly available data sets that could be used to populate an application with this feature set. Our findings, also documented here, were as follows:

* The only public dataset we could find was from the [National Cemetery Administration (NCA)](https://www.data.va.gov/dataset/National-Cemetery-Administration-Gravesite-Locator/3u66-fxug/about_data). Unfortunately, this dataset was last updated on November 8, 2022\.  
* It contains 8.42M rows with 28 columns/fields that hold each veteran's burial record. For context, this is a 2.23GB file when downloaded as a CSV.  
* Initially we thought this data would need to be hosted behind `vets-api`, but that may not be the case since there is an [API](https://dev.socrata.com/foundry/www.data.va.gov/3u66-fxug) that could be utilized.  
* The API allows for [filtering](https://dev.socrata.com/docs/filtering.html) and [complex queries](https://dev.socrata.com/docs/queries/) which should provide a lot of flexibility for implementation.  
* This dataset is currently exposed to the public on the va.gov website [here](https://www.cem.va.gov/nationwide-gravesite-locator/). There is also a mobile friendly website [here](https://m.va.gov/).  
* The [VA Cemeteries dataset](https://www.data.va.gov/dataset/VA-Cemeteries-Address-Location-Contact-Information/53xn-r2pz/about_data) was also discovered and may be useful if we need to pre-populate a search interface with a list of all the cemeteries.  
* The Google search mentioned above also revealed the following:  
  * [Findagrave.com](https://www.findagrave.com/): This site is a wholly owned subsidiary of [Ancestry.com](https://www.ancestry.com/) and appears to have data newer than 2022\. They also have a [mobile app](https://www.findagrave.com/mobileapp) for Android and iOS.  
  * Some national cemeteries have their own website or app to help family members find gravesites. For example, Arlington National has both [mobile and web implementations](https://www.arlingtoncemetery.mil/Explore/Find-a-Grave).  
  * There are also [kiosks](https://www.cem.va.gov/grants/public_info_center.asp#:~:text=The%20Kiosk%20Grave%20Locator%20is,the%20deceased%20veteran%20and%20dependents.) at cemeteries that help visitors find gravesites.  
* A small amount of research went into utilizing Amazon RDS in the event we need to host burial information ourselves and expose it via the `vets-api`. At first glance, there appears to be no limitations to using this as a solution.  
* Ideally we would use NCA's dataset for our implementation so we can avoid spinning up our own database and APIs.

### Prototype

A video demonstration of the prototype, inspired by the [Veterans Legacy Memorial](https://www.vlm.cem.va.gov/), can be found [here](https://private-user-images.githubusercontent.com/184258725/425072526-969faf4d-934c-4aaa-bd78-fc6b7aa9163a.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1NDcwODIsIm5iZiI6MTc0MzU0Njc4MiwicGF0aCI6Ii8xODQyNTg3MjUvNDI1MDcyNTI2LTk2OWZhZjRkLTkzNGMtNGFhYS1iZDc4LWZjNmI3YWE5MTYzYS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwMVQyMjMzMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYzc0MGRiNjE3MDVjYTcwZTdkYWY3YTkxNGJhMGRiZmJjZmNkYTRjZmI2OTI1MWY3MTMwZGIwM2UwM2ZkOGE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.95lnKIy5OcBZrDoahfSIe0gfu_xzPEU_TmbIxST7Jyo); the branch for the prototype is located [here](https://github.com/department-of-veterans-affairs/va-mobile-app/tree/spike/349-grave-locator-prototype).

## Next Steps

While we believe this work has great value, there is one major blocker, as well as a number of open questions, that would need to be resolved in order for this product to succeed.

The notable blocker for this effort is that GPS data for individual gravesites was not readily available. Some applications, like the Arlington app (ANC Explorer), have data for individual gravesites, but our preliminary research shows that not all cemeteries have this information readily available. The success of this app, therefore, may depend on the feasibility of an initiative to obtain GPS coordinates of gravesites in cemeteries nationwide, something that is not currently on the horizon.

Other open questions also center around the availability and integrity of data:

* What is the best source for the data?  
* Why hasn't the NCA dataset been updated since November 2022? Is there a way to get access to a later version?  
* Is it possible/desirable to partner with Ancestry.com/Findagrave.com to get access to more recent burial data?

Finally, a question was raised after viewing the prototype:

* Is this an appropriate feature for the VA Health and Benefits mobile app? Or would this be better suited for a standalone application?

## Team

* Mobile Feature Support Slack channel: [\#mobile-feature-support-public](https://dsva.slack.com/archives/C07SD9P7XB9)  
* VA Product Owner: Jeff Barnes (jeffrey.barnes4@va.gov)  
* Product Manager: Natalie Gibbons (natalie.gibbons@va.gov)  
* Delivery Manager: Jason DeHaan (jason.dehaan@va.gov)  
* Tech Lead: Alex Teal (alex.teal@va.gov)  
* Program Manager: Parker Baranowski (parker.baranowski@va.gov)  
* Engineers:  
  * Dave Formanek (david.formanek@va.gov)  
  * Kim McCaskill (kim.mccaskill@va.gov)  
  * Matt Guest (matthew.guest@va.gov)  
  * Michael Harmer (michael.harmer@va.gov)  
* UX:  
  * Natasha Huckleberry (natasha.huckleberry@va.gov)  
  * Emily DeWan (emily.dewan1@va.gov)
