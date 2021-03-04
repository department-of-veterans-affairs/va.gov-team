## VAMC Analytics

This document covers the various metrics which are of interest for the VAMC product and the status of implementation.

## What forces impact the metrics of this product?

|	Factor	|	Questions	|	Notes	|
|	-----	|	-----	|	-----	|
|	New legislation	|		|		|
|	New administration	|		|		|
|	Current landscape	|		|		|
|	Social media	|		|		|
|	Organizational (VA Secretary) announcements	|		|		|
|	Related launches	|		|		|
|	Non-Veteran visits (stakeholders)	|		|	Make sure team members have opted out of GA	|
|	Seasonality/Veteran population or milestone, What happened in previous years?	|		|	Because of roll-out, there isn't good precedent for what to expect seasonally..._yet_	|
|	Larger VA traffic (macro changes)	|	What percentage of the wider population can we expect to view our pages?	|		|
|	What is our pool of eligible visitors?	|	How many Veterans are assigned to a given health care system?	|		|


## Overarching business questions which we hope to answer with analytics
- **Can Veterans find what they need?**
- **Can Veterans accomplish their tasks?**
- **Is the site easy to use?**

## Analytics Roadmap

|	Business questions	|	Status	|	Issue	|
|	-----	|	-------	|	-----	|
|	How does the number of users compare with the number of Veterans registered for care at a particular location? 	|		|		|
|	How do users get to the VAMC system page?	|	Available through GA	|		|
|	How do users get to the VAMC facilities page?	|	Available through GA	|		|
|	Do Veterans use the breadcrumbs to navigate?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Which accordions are opened most often at the system level?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Which accordions are opened most often at the facility level?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many accordions are opened/session?	|	Requested	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	Which pages are visited most often and how do Veterans navigate to the page? 	|	Available through GA	|	See [Top Visited pages for Pittsburgh Health Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/analytics/pittsburgh-health-care/top-pittsburgh-pages.md)	|
|	Do Veterans use the left menu to navigate?	|	Implemented by Facilities team with upgrade, Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Do Veterans need to open more than one accordion to find what they need? 	|		|		|
|	Which accordions within the "Prepare for your visit" section are opened most often? 	|		|		|
|	Do Veterans view health service information at the system or facility level?	|	Available through GA	|		|
|	Are Veterans able to navigate to the facility health service from the system health service page?	|		|		|
|	What's the average number of pages viewed in a session? 	|	Available through GA	|		|
|	Average length of time per session?	|	Available through GA	|		|
|	Do Veterans scroll up and down the page? 	|	Requested	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	How often do Veterans view a Care Coordinator page?	|	Available through GA	|	See [Pittsburgh Health service page analtyics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/analytics/pittsburgh-health-care/health-care-service-pages.md)	|
|	What actions are taken after Veterans view a Care Coordinator page? 	|	Available through GA	| 		|
|	How often do Veterans view a Health Service page?	|	Available through GA	|	See [Pittsburgh Health service page analtyics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/analytics/pittsburgh-health-care/health-care-service-pages.md)	|
|	What actions are taken after Veterans view a Health service page? 	|	Available through GA	|		|
|	Do Veterans use the jump links? Which link is used most often?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
| What is the pageview volume for Top Task pages? | Available through GA | See [Top task pageviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/analytics/pittsburgh-health-care/top-task-pageviews.md) |
|	How many Veterans click on "Make an appointment" CTA and ultimately make an appointment? How does it compare to "Schedule and view your appointments" from "Manage your health online?	|	Requested by VAMC upgrade team for each roll-out	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	How many Veterans click on "Register for Care" CTA and ultimately register for Care?	|	Requested by VAMC upgrade team for each roll-out	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	How many Veterans click on "Pharmacy" CTA and ultimately fill a prescription? How does it compare to "Refill and track your prescriptions" from "Manage your health online?	|	Requested by VAMC upgrade team for each roll-out	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	How many Veterans use the link from within "Manage your health online" to send a secure message to the health care team?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans use the link from within "Manage your health online" to download VA medical records?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans use the link from within "Manage your health online" to view lab and test results?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans use the link from within "Manage your health online" to order hearing aid batteries and accessories? 	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Do Veterans view the operating status?	|	Available through GA	|		|
|	Do Veterans use the call-to-action to get updates on affected services and facilities?	|		|		|
|	What is the aggregate satisfaction score across the entire VAMC product? 	|		|		|
|	What are the satisfaction scores for the VISN/System/Facility? Are there satisfaction score outliers?	|		|		|
|	Do Veterans view the pages on desktop or mobile?	|	Available through GA	|		|
|	Do Veterans use phone links to call from mobile?	|		|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans click "Get help from a patient advocate" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans click "Medical records office" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	| 
|	How many Veterans click "Phone directory" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans click "Compare our performance" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans click "Become a volunteer" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans click "Billing and insurance" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	| 
|	How many Veterans view "Annual reports and newsletters" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many Veterans view "Coroniavirus update" from the In the Spotlight feature?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|

