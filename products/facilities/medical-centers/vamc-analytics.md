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

**Analytics roadmap**

|	Business questions	|	Status	|	Issue	|
|	-----	|	-------	|	-----	|
|	How does the number of users compare with the number of Veterans registered for care at a particular location? 	|		|		|
|	How do users get to the VAMC system page?	|	Available through GA	|		|
|	How do users get to the VAMC facilities page?	|	Available through GA	|		|
|	Do Veterans use the breadcrumbs to navigate?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Which accordions are opened most often at the system level?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Which accordions are opened most often at the facility level?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	How many accordions are opened/session?	|	Requested	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	Which pages are visited most often and how do Veterans navigate to the page? 	|	Available through GA	|	See Top Visited pages for Pittsburgh Health Care below	|
|	Do Veterans use the left menu to navigate?	|	Implemented by Facilities team with upgrade, Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
|	Do Veterans need to open more than one accordion to find what they need? 	|		|		|
|	Which accordions within the "Prepare for your visit" section are opened most often? 	|		|		|
|	Do Veterans view health service information at the system or facility level?	|	Available through GA	|		|
|	Are Veterans able to navigate to the facility health service from the system health service page?	|		|		|
|	What's the average number of pages viewed in a session? 	|	Available through GA	|		|
|	Average length of time per session?	|	Available through GA	|		|
|	Do Veterans scroll up and down the page? 	|	Requested	|	[#15132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15132)	|
|	How often do Veterans view a Care Coordinator page?	|	Available through GA	|		|
|	What actions are taken after Veterans view a Care Coordinator page? 	|	Available through GA	|		|
|	How often do Veterans view a Health Service page?	|	Available through GA	|		|
|	What actions are taken after Veterans view a Health service page? 	|	Available through GA	|		|
|	Do Veterans use the jump links? Which link is used most often?	|	Requested by VAMC upgrade team for each roll-out	|	[#18822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18822)	|
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

### Top Visited pages for Pittsburgh Health Care

|	Top 10 pages in Dec 2020 	|	Pageviews in December 2020	|	Top 10 pages in Jan 2021 	|	Pageviews in January 2021	|	Top 10 pages in Feb 2021 	|	Pageviews in February 2021	|
|	----	|	----	|	----	|	----	|	----	|	----	|
|	/pittsburgh-health-care/index.html	|	8633	|	/pittsburgh-health-care/index.html	|	13889	|	/pittsburgh-health-care/covid-19-vaccines/index.html	|	16190	|
|	/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/index.html	|	3064	|	/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/index.html	|	6449	|	/pittsburgh-health-care/index.html	|	11351	|
|	/pittsburgh-health-care/locations/h-john-heinz-iii-department-of-veterans-affairs-medical-center/index.html	|	1260	|	/pittsburgh-health-care/stories/many-veterans-who-served-in-europe-can-now-give-blood-fda-lifts-ban/index.html	|	3045	|	/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/index.html	|	5243	|
|	/pittsburgh-health-care/locations/index.html	|	1242	|	/pittsburgh-health-care/covid-19-vaccines/index.html	|	2111	|	/pittsburgh-health-care/locations/h-john-heinz-iii-department-of-veterans-affairs-medical-center/index.html	|	1802	|
|	/pittsburgh-health-care/contact-us/index.html	|	1182	|	/pittsburgh-health-care/locations/index.html	|	1927	|	/pittsburgh-health-care/locations/index.html	|	1541	|
|	/pittsburgh-health-care/health-services/index.html	|	1053	|	/pittsburgh-health-care/locations/h-john-heinz-iii-department-of-veterans-affairs-medical-center/index.html	|	1922	|	/pittsburgh-health-care/contact-us/index.html	|	1484	|
|	/pittsburgh-health-care/work-with-us/jobs-careers/index.html	|	946	|	/pittsburgh-health-care/contact-us/index.html	|	1595	|	/pittsburgh-health-care/health-services/index.html	|	1206	|
|	/pittsburgh-health-care/make-an-appointment/index.html	|	521	|	/pittsburgh-health-care/health-services/index.html	|	1493	|	/pittsburgh-health-care/stories/many-veterans-who-served-in-europe-can-now-give-blood-fda-lifts-ban/index.html	|	1081	|
|	/pittsburgh-health-care/pharmacy/index.html	|	334	|	/pittsburgh-health-care/make-an-appointment/index.html	|	1141	|	/pittsburgh-health-care/events/walk-in-covid-19-vaccination-clinic/index.html	|	1027	|
|	/pittsburgh-health-care/operating-status/index.html	|	323	|	/pittsburgh-health-care/work-with-us/jobs-careers/index.html	|	1117	|	/pittsburgh-health-care/work-with-us/jobs-careers/index.html	|	920	|
