# Digital Wallet: Veteran Status Card Product Brief

## Overview

The Veteran Status Card launched on the mobile app on April 22, 2025\. Currently, Veterans can access their Veteran Status Card through the authenticated experience on the VAHB app or [VA.gov](http://VA.gov). This initiative will allow Veterans to add their Veteran Status Card to their digital wallet on Apple or Android devices directly from the mobile app. With this new feature, Veterans will be provided with an industry-standard experience and easy access to their Veteran Status Card on Apple and Android devices. 

## Problem Statement

Veterans must log into the mobile app or VA.gov to view their veteran status card. How might we ease the burden on Veterans who need to present their Veteran Status Card and create a digital experience that is consistent with other consumer mobile apps?

## Desired User Outcomes

* Veterans can add their Veteran Status Card to their Apple or Google Wallet.   
* Veterans can easily access and present their Veteran Status Card.

## Desired Business Outcomes

* Allowing Veterans to add the Veteran Status Card to their digital wallet will pave the way for additional VA health and identification cards accessible via the digital wallet, aligning with industry-standard experiences.

## Measuring Success

### Key Performance Indicators (KPIs)

* Total number of downloads of the Veteran Status Card to add the card to an Apple Wallet. We expect this to be a non-zero amount and will increase once this feature is available. We will track the total number of downloads on a monthly basis.  
* Total number of downloads of the Veteran Status Card to add the card to a Google Wallet. We expect this to be a non-zero amount and will increase once this feature is available. We will track the total number of downloads on a monthly basis.
* Total number of error messages that a Veteran receives. We will track the number of error messages that occur as a way to monitor if there is a bug. TBD on a threshold that we would reasonably expect to keep this under.

### Supporting OCTO OKRs:

O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

## Assumptions

* We assume that all background research, direction, and other information provided by the IIR team is accurate.

## Important Notes/Decisions/Background

* IIR had originally taken the digital wallet piece through the collaboration cycle, as this was a part of the Veteran Status Card effort. The digital wallet feature has gone through the Design Intent touchpoint and has been user-tested. The MFS team will need to update the designs based on technical discovery and then go to MidPoint Review with the updated designs.   
* [Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/new-home-and-ux-product-outline.md) to IIR Product Brief.   
* Here is the [Figma link](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=5067-54707&p=f&t=fYS0DSqs49LlS5pf-0) for the initial pass of the digital wallet feature.   
* Technical discovery was done on the settings for the digital wallet feature, with findings accessible [here](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/415). MFS also conducted technical discovery on the parameters for UI designs, with those findings accessible [here](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/414).   
* This effort will not include the Veteran Status Card being accessible on wearable devices, such as watches.  
* We expect that after implementing the ability for Veterans to add their Veteran Status Card on the digital wallet there could be other opportunities for identification and cards to be included. Those would be separate initiatives and would not be an extension to this initiative. 

## Solution Approach

* Conduct technical discovery on wallet settings and UI parameters for Apple and Google Wallet. These discoveries will assist our UX team as we make design adjustments to the Veteran Status Card. The team will also learn the necessary requirements for implementing a digital wallet feature on Apple and Android platforms.     
* Build and release the Digital Wallet feature for the Veterans Status Card on Apple and Android devices. 

## Decision Log

| Date | Decision | Notes|
| --- | --- | --- | 
|7/22/2025| Generic pass will be displayed for Apple and Google Wallet. |This was a recommendation provided by engineering and UX. After looking at some different options, the generic pass aligns with the type of content that we are displaying on the Veteran Status Card and was approved by our VA Stakeholder.|
|7/22/2025| Include the branding on the Google Wallet. |After being presented with different styling options from UX Product and VA Stakeholder, it was agreed that for the Google Wallet to include the branding at the bottom of the card.|  
|7/22/2025| The digital wallet for the Veteran Status Card must contain: Name, Disclaimer of Benefits, Identification Number, and Proof of Service. |This is required by law and the IIR team shared their findings with MFS.| 
|7/23/2025| The disability rating will be displayed on the back of the card, located in pass details. | This decision was provided by Michelle at our weekly VA/PO sync.|
|7/23/2025| Disclaimer of benefits will be displayed on the back of the card, located in pass details.  | This decision was provided by Michelle at our weekly VA/PO sync.|
|8/4/2025| Mobile App Team will handle the digital signature and security feature that is needed for registration.  | This decision was provided by Michelle during a 1:1.|
|8/6/2025| Increasing brightness for when the Veteran Status Card is accessed within an Apple or Google Wallet, is not necessary. | The feedback to consider increasing brightness to make it easier for Veterans to read their Veteran Status Card within the digital wallet was provided during the PO Sync. After internal discussion with the team, it appears that cards within the wallet feature that have a QR code (i.e., airline or concert ticket) will automatically brighten when a user accesses those cards. However, when accessing a card without a QR code, the brightness remains the same (i.e., credit card or gym membership). There has been no engineer exploration on this, but rather an observation that was made.    

## Reference Materials

## Communications

<details>

- Team Name: Mobile Feature Support   
- Slack channel: \#mobile-feature-support-public   
- Product POCs:  
  - Michelle Middaugh, VA Product Owner, Mobile Feature Support  
  - Ryan Thurlwell, VA Lead, VA Mobile App
 

</details>

## Stakeholders 

#### Team Members

<details>
   
 - PM: Natalie Gibbons  
 - Engineering: Alex Teal  
 - Design: Natasha Huckleberry




 

