# Mobile App Promotion Banner Initiative Brief
#### Overview

Currently there is limited marketing of the VA.gov mobile app from within the benefit hubs. Using patterns created by Apple and others e.g. [Smart App Banners](https://developer.apple.com/documentation/webkit/promoting_apps_with_smart_app_banners) we can increase the adoption and overall use of the VA.gov mobile app by placing the banners on the appropriate tool landing pages that map to features/functions available in the mobile app.

---

## Outcome Summary
Increase the download/use/adoption of the VA.gov mobile app.

**Related/Associated product(s)**
- [Benefit hub product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/Benefit%20Hub)
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


### MVP KPI measurements
| Product KPI | Baseline **MONTH, YEAR** | Target | Link to data source | 
| ----- | ----- | ----- | ----- |
| Downloads of VA.gov iOS Mobile App (aggregate) | ----- | ----- | Mobile Analytics Dashboard App stores data | 
| iOS use of VA.gov product landing pages | ----- | ----- | Google Analytics | 
| Increased iOS App engagement with Refill and track your VA prescriptions function |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Prescriptions"; App Events: "Prescriptions tracking tab viewed", "Rx refills succeeded", "Prescriptions pending tab viewed" |
| Increased iOS App engagement with Send and receive secure messages from your VA health care team (Secure Messages Sent) |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Secure messaging"; App Event: "SM sent", "SM drafts saved" |
| Increased iOS App engagement with Get your records for VA vaccines, such as COVID-19 (Vaccine Detail Views) |  ----- | ----- | Mobile Analytics Dashboard - By feature: ???; App Event: "Vaccine details opened" |
| Increased iOS App engagement with Submit evidence for your claim or appeal (Claim Document Uploads Started) |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Claims"; App Event: "Evidence uploads started" (may consider including "Evidence uploads succeeded" and "evidence uploads failed" but this seems more like an iOS app problem than related to this initiative |
| Increased iOS App engagement with Download common VA letters (Letter Downloads) |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Letters"; App Event: "Clicked "Get claim letter" download button" (may consider "Successfully downloaded letter" but this seems like an iOS app problem than whether the funnel is routing people) |
| Increased iOS App engagement with Update your direct deposit information (Veteran Direct Deposit Updates) |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Direct deposit"; App Event: "Direct deposits updated" (note this is tracked twice in the dashboard as of 6/21) |
| Increased iOS App engagement with Check your disability rating |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Disability rating" |
| Increased iOS App engagement with Review your claim or appeal status |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Claims"; App Event: "Claim details op[ened for claims in step 3" (confirm with Mobile team) |
| Increased iOS App engagement with Review payments we’ve sent you |  ----- | ----- | Mobile Analytics Dashboard - By feature: "Payment history";  |

### Possible additional KPIs/tracking
This data is not currently tracked (as of May 2023). As a result it may not specifically be MVP but fast-follow as the above measurements can provide indicators of success whereas some of these measures can provide definitive success metrics.
| Product KPI | Baseline **MONTH, YEAR** | Target | Link to data source (e.g. GA, Domo) | 
| ----- | ----- | ----- | ----- |
| Downloads of VA.gov Mobile App via SmartApp banner (**NEED Ability to measure or Remove from MVP**) | N/A | ----- | This information should be available in the Apple App Store analytics |
| Use of VA.gov app instead of VA.gov web via SmartApp banner (**NEED Ability to measure or Remove from MVP**) | N/A | ----- | This information should be available in the Apple App Store analytics |


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

| Category | App Function | VA.gov URL | 
| ------ | ------ | ----- |
| Health care tools | Refill and track your VA prescriptions | https://www.va.gov/health-care/refill-track-prescriptions/ | 
| Health care tools | Send and receive secure messages from your VA health care team | https://www.va.gov/health-care/secure-messaging/  |
| Health care tools | Get your records for VA vaccines, such as COVID-19 | https://www.va.gov/health-care/get-medical-records/ |
| Benefits tools | Check your disability rating | https://www.va.gov/disability/view-disability-rating/ |
| Benefits tools | Review your claim or appeal status | https://www.va.gov/claim-or-appeal-status/ | 
| Benefits tools | Submit evidence for your claim or appeal | https://www.va.gov/disability/upload-supporting-evidence/ | 
| Benefits tools | Download common VA letters | https://www.va.gov/records/download-va-letters/ |
| Payment tools | Review payments we’ve sent you | https://www.va.gov/va-payment-history/ | 
| Payment tools | Update your direct deposit information | https://www.va.gov/change-direct-deposit/ | 


#### Go-to-market 
This is (part of) the marketing strategy for mobile. Rolling out to Apple users first due to OOB patterns and analytics.

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

