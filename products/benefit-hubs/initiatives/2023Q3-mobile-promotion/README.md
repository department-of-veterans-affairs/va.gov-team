# Mobile App Promotion Banner Initiative Brief

Epic: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13482

#### Overview

Currently there is limited marketing of the VA.gov mobile app from within the benefit hubs. Using patterns created by Apple and others e.g. [Smart App Banners](https://developer.apple.com/documentation/webkit/promoting_apps_with_smart_app_banners) we can increase the adoption and overall use of the VA.gov mobile app by placing the banners on the appropriate tool landing pages that map to features/functions available in the mobile app.

---

## Outcome Summary
Increase the download/use/adoption of the VA.gov mobile app

**Related/Associated product(s)**
- [Benefit hub product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/benefit-hubs)
- [ VA.gov Mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app) 

## Problem
* How might we use the VA.gov website to encourage use of native mobile apps as it aligns with specific features on VA.gov.

## Desired User Outcomes
- Using the mobile app allows Veterans to access self-service tools more readily

## Undesired User Outcomes
- Frustration because the app 


## Desired Business Outcomes

- Increased adoption of the Mobile App (ongoing use)

## Undesired Business Outcomes

- Impact to App Store ratings
- Decreased adoption of the Mobile App (ongoing use)

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

[Mobile Analytics dashboard](https://lookerstudio.google.com/u/0/reporting/e28cd59a-b2e5-4f29-8ae4-a4eea6d23f9c/page/p_5xc9k8cs5c)

[Mobile App Promo Banner _ Pilot KPIs Analysis - Start Sept 2023.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/13398212/Mobile.App.Promo.Banner._.Pilot.KPIs.Analysis.-.Start.Sept.2023.xlsx)




### MVP KPI measurements
***Note***: see [details in section below the table](#Using_Mobile_Analytics_Monthly_Report_for_engagement_monitoring) for more information on the data available on the Mobile Monthly Report dashboard
| Product KPI | Baseline **Jul-Aug, 2023** | Target | Link to data source | 
| ----- | ----- | ----- | ----- |
|Downloads of VA.gov iOS Mobile App from banner campaign links (count per link and overall)|Not used in pilot|-----|Apple App Store Analytics: Aquisition report by campaign|
|Downloads of VA.gov iOS Mobile App from banner campaign links as a percent of impressions from banner campaign links (per link and overall)|Not used in pilot|-----|Apple App Store Analytics: Aquisition report by campaign|
|iOS use of VA.gov product landing pages |30.924|-----|Google Analytics: Avg Users Per Day|
|Increased iOS App engagement with Refills |3,209|-----|Mobile Monthly Report<br>**Events**: Rx refills succeeded<br>**Raw count**|
|Increased iOS App engagement with Tracking VA prescriptions|2,198|-----|Mobile Monthly Report<br>**Events**: Prescriptions tracking tab viewed<br>**Raw count**|
|Increased iOS App engagement with Send and receive secure messages from your VA health care team (Secure Messages Sent)|5,848|-----|Mobile Monthly Report<br>**Events**: Secure messages sends/replies<br>**Raw count**|
|Increased iOS App engagement with Get your records for VA vaccines, such as COVID-19 (Vaccine Detail Views)|635|-----|Mobile Monthly Report<br>**Events**: Vaccine details opened<br>**Raw count**|
|Increased iOS App engagement with Submit evidence for your claim or appeal (Claim Document Uploads Started)|61|-----|Mobile Monthly Report<br>**Events**: Evidence uploads started<br>**Raw count**|
|Increased iOS App engagement with Download common VA letters (Letter Downloads)|8,954|-----|Mobile Monthly Report<br>**Events**: Successfully downloaded a letterr<br>**Raw count**|
|Increased iOS App engagement with Update your direct deposit information (Veteran Direct Deposit Updates)|143|-----|Mobile Monthly Report<br>**Events**: Direct deposits updated (current for versions 2.0 and forward)<br>**Raw count**|
|Increased iOS App engagement with Check your disability rating|???|-----|Mobile Monthly Report<br>**Events**: (none)<br>**Raw count**|
|Increased iOS App engagement with Review your claim or appeal status|15,809|-----|Mobile Monthly Report<br>**Events**: Clicks to expand a section on the Status tab on Claims Details screen<br>**Raw count**|
|Increased iOS App engagement with Review payments we’ve sent you|???|-----|Mobile Monthly Report<br>**Events**: (none)<br>**Raw count**|

#### Using Mobile Analytics Monthly Report for engagement monitoring
For each KPI structured as “Increased iOS App engagement with ,” there are two possible types of engagement measurements that can be viewed on the Mobile Monthly Report dashboard.
1. Total number of unique active users engaging with a feature
2. Total number of events logged for specific app analytics

All KPIs can be monitored by the former. Not all will have the latter.

**Total number of unique active users engaging with a feature**
* Go to the dashboard page “App Users” (in the left-hand menu)
    * Apply “Operating system” filter at top of page to see only iOS counts.
    * If necessary, update the date range filter to the time frame of interest.
* Go to the table under “By feature”
* View the row for the feature related to the KPI to see the total number of unique active users.

**Total number of events logged for specific app analytics**
* Go to the dashboard page “App Events” (in the left-hand menu)
    * Apply “Operating system” filter at top of page to see only iOS counts.
    * If necessary, update the date range filter to the time frame of interest.
* Go to the top table “App Events”
* Sort by column “Feature” to be able to see all the events connected to a given feature next to one another.
* In the KPI table above, the specific events most directly related to each KPI are named in the “Link to data source” column.**Some features do not have specific events relevant to the KPI.**

### Possible additional KPIs/tracking
This data is not currently tracked (as of May 2023). As a result it may not specifically be MVP but fast-follow as the above measurements can provide indicators of success whereas some of these measures can provide definitive success metrics.
| Product KPI | Baseline **MONTH, YEAR** | Target | Link to data source (e.g. GA, Domo) | 
| ----- | ----- | ----- | ----- |


---

## Discovery
### Assumptions/Risks
- Mobile app does not have 100% parity with VA.gov website and that's OK. This UX feature will only appear on tool landing pages that have parity.
- Cannibalizing mobile web traffic to mobile app use is a good thing.
- Only targeting Apple/iOS/Safari users is sufficient for proof-of-concept and learnings are transferrable to Android device user behavior.
- We can use the out-of-the-box design behavior from Apple for POC and there will not be accessibility problems. (**Mitigated** - This was confirmed by accessibility expert review of "in the wild" functions of Apple Smart Banners in May 2023)

### What're you building

MVP will be to:
* Use Apple's Smart App Banners only, because this is COTS OOB behavior requiring no design and leveraging existing user-expected patterns.
* Create a means by which we specify the specific URLs app promotion happens
* Place the Smart banner on the following pages mapped to the following functions. (Note, we cannot deep-link into the App at this time)
* The VA.gove Flagship mobile app-id is 1559609596
* We will **not** include deep, navigational linking parameters (app-argument) in MVP as the Flagship Mobile App does not currrently support this function.
* We will **not** include campaign linking at this time due to limited Apple documentation for campaigns and smart banners.

| Category | App Function | VA.gov URL | Apple App Store campaign link|
| ------ | ------ | ----- |----- |
|Health care tools | Refill and track your VA prescriptions | https://www.va.gov/health-care/refill-track-prescriptions/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Rx&mt=8|
|Health care tools | Send and receive secure messages from your VA health care team | https://www.va.gov/health-care/secure-messaging/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20SM&mt=8|
|Health care tools | Get your records for VA vaccines, such as COVID-19 | https://www.va.gov/health-care/get-medical-records/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Vaccines&mt=8|
|Benefits tools | Check your disability rating | https://www.va.gov/disability/view-disability-rating/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Disability&mt=8|
|Benefits tools | Review your claim or appeal status | https://www.va.gov/claim-or-appeal-status/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Claims&mt=8|
|Benefits tools | Submit evidence for your claim or appeal | https://www.va.gov/disability/upload-supporting-evidence/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Evidence&mt=8|
|Benefits tools | Download common VA letters | https://www.va.gov/records/download-va-letters/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Letters&mt=8|
|Payment tools | Review payments we’ve sent you | https://www.va.gov/va-payment-history/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20Payments&mt=8|
|Payment tools | Update your direct deposit information | https://www.va.gov/change-direct-deposit/ | https://apps.apple.com/app/apple-store/id1559609596?pt=545860&ct=VA.gov%20Promo%20Banner%20DD&mt=8|


#### Go-to-market 
This is (part of) the marketing strategy for mobile. Rolling out to Apple users first due to OOB patterns and analytics.
The VA.gove Flagship mobile app id is 1559609596

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications

- Team Name: Public Websites
- GitHub Label(s): 
- Slack channel: #Sitewide-Public-Websites
- Product POCs: 



#### Stakeholders

N/A

