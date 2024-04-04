# Veterans Status Web - Product Outline 
## Overview
Provide simplified access to Veterans Status information to Veterans on VA.gov to ease their ability to access non-VA benefits and discounts.
Problem Statement:
Veterans are often required to confirm their Veteran status to receive non-VA benefits e.g., discounts and memberships. This confirmation typically occurs through the [Veteran ID Card (VIC)](https://www.va.gov/records/get-veteran-id-cards/vic/). But, the process to apply for and retrieve the Card can be cumbersome. The current process steps include:<br>
1. Veteran applies for VIC card (requires doing the following: Fill out form (digital or paper), upload or print a photo to attach to form. Requires SSN, a digital copy of their DD214, DD256, DD257, or NGB22, a copy of a current and valid government-issued ID.<br>
2. Application is received, reviewed and the photo must be approved (exactly how long does this take?)<br>
3. Veterans receive an email letting them know the status of application. They may be asked for additional info or evidence.<br>
4. If eligible, Veteran receives digital VIC card (pdf) in an email.<br>
5. Veterans must print the digital VIC card (pdf) in order to use it (this cost is covered by the Veteran).<br><br>
Key pain points in the current process:
* Photo must be uploaded by veteran
* Photo must be approved by the VA
* Veterans must pay to print the card
* Process is time consuming<br>
### How might we statement: How might we ease the burden on Veterans to access discounts and memberships through a Digital experience  that requires fewer steps to obtain and requires only access to the VA.gov site? 

## Desired Outcomes
Once implemented Veterans can confirm their Veterans status through VA.gov and obtain the credential that enables them to access the memberships and discounts they desire. 
Photo upload not required
Veterans Status information immediately available in VA.gov for authenticated users

## Business goals
* Increase the number of Veterans that access non-VA benefits and discounts
* Provide another channel to access non-VA benefits and discounts
* Provide a consistent experience across Mobile and Web channels

## Assumptions
* The Veteran must authenticate on VA.gov to access their Veteran status information
* Photo upload is not required
* An ID number is not required
* The Web and Mobile experience shall be consistent but may utilize different form factors as applicable to their channel
* A Veteran Status card displayed in the VA mobile app will be accepted by 3rd parties as official proof of Veteran status
* There will be marketing support for the new Veteran status card (to drive Veteran awareness)

## Measuring Success
* Adoption is a key performance indicator.  We’ll track Veteran engagement and interaction.
* Measure the total number of users that access the card on VA.gov
* Measure the unique number of users that access the card on VA.gov
* Requests for ability to provide proof of service decreases in other areas of the VA


## Discovery Research References
* [How To Apply For A Veteran ID Card](https://www.va.gov/records/get-veteran-id-cards/vic/)
* [H.R.91 - 114th Congress (2015-2016): Veterans Identification Card Act 2015](https://www.congress.gov/bill/114th-congress/house-bill/91)
* [List of current approved forms of Veteran ID card](https://www.va.gov/records/get-veteran-id-cards/)
* [Ad Hoc Mobile MVP Research](https://www.figma.com/file/MxqpGSmpZrG5HlxB9wNoRP/%234270---Veteran-Status-Card?type=whiteboard&node-id=0-1&t=TlC4pL2Syj3rF8sv-0)

## Solution Approach
MVP
Create a Veterans Status page on VA.com that is only displayed to authenticated users.  Key data elements include:<br>
* Name
* Date of Birth
* Dates of Service
* Branch of Military (pick latest)
* Discharge status 
* VA Logo
* Branch of Military logo<br>
Approach:<br>
* Make Veterans Status card/information available through “Profile” feature of VA.gov
* Create Navigation links to the Page from the Profile
* Create a feature toggle to makes feature available when toggled on and unavailable when toggled off
* Toggle is initially set to Off<br>


## Technical Considerations
Veterans that are not honorably discharged shall not have access to the Veteran Status Card.  
[Veteran Verification API](https://developer.va.gov/explore/verification/docs/veteran_verification?version=current) and  https://developer.va.gov/explore/api/veteran-confirmation have this data
For those veterans with an existing VIC card, where in the current system (API or FE) would the VIC live (i.e. how do we go about surfacing it?)?

note: the vetern status card is using the same military history as the profile service history, however there's an additional check for the discharge code. Only Veterans with an honorable or generally honorable code (A or B) are eligible for the card

## Post-MVP
Areas to explore:<br>
* Print function available from Veteran Status page (potentially with some sort of card-like form factor).  
* Unauthenticated user flow
* A consolidated ID card approach through engagement with VIC and other teams
* Broader use of ID.me amongst external non-VA benefit and discount providers<br>
Implementation Information
Timeline
Discovery Sprint from  10/16/23 - 11//1/23
Next step: present product concept to collab cycle?<br>
Important Context and Decisions<br>
* Where does the new Veteran Status live? Military Information Page? Profile? My VA? Somewhere on its own?
* Allow for offline access? Might be good for older phones or areas with slow/unavailable wifi.
* Availability for use online in online shopping environments?<br>
Open Questions<br>
* What access to Veterans and non-VA Benefits providers will our team have for research purposes?
