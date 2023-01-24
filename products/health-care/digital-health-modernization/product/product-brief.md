# Product brief for the My HealtheVet on VA.gov - Health Apartment 

## Background
To get the health care they need, Veterans must find, register for, and learn to use a number of different websites and software products. Our generative research from 2018, repeated in late 2020, shows that Veterans find it extremely difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that Veterans feel discouraged to apply for, manage, and maximize their benefits.

Consider booking a doctor’s appointment: One system locates nearby facilities. Another schedules appointments. Another handles follow-ups like messages and prescriptions. And another reimburses travel expenses. That’s a lot for Veterans to learn. It’s also difficult for VA staff to support so many siloed systems.

## Mission
The Health Apartment Team’s mission is to simplify Veterans’ health experience on the web by consolidating all health things into a single health “home” on VA.gov, which we have nicknamed the “health apartment.” As we consolidate the health experience, we will work closely with My HealtheVet / Office of Connected Care (OCC) and with teams throughout OCTO.

Throughout our agile development cycles, we will validate and refine the health apartment to ensure that it meets the needs of Veterans and caregivers – and that it’s usable and accessible. This will take a lot of collaboration with the the My HealtheVet Team, the Health, Sitewide, Account Experience, Platform, Identity, Mobile Crews, and other product teams in OCC and OCTO. 

We have defined four work streams, or tracks, that will afford ample opportunities for us to elicit Veteran feedback while building a smooth, seamless rollout.

**Track 1** will focus on migrating the core MyHealtheVet applications to va.gov.  As of October 2022, Appointments work is underway, Secure Messaging is in development, and Medical Records is in discovery. Applications will move to VA.gov in a phased approach. 
	- Appointments is covered by the health applications team, who are building out the unified appointment experience.
	- Bylight teams are building the applications on VA.gov, and are navigating the VA.gov platform collaboration cycle to do so. 
	- The Apartment Core team is conducting discovery on the medical record landscape to deeply understand the policy/regulatory landscape, technical landscape, and Veteran concept for each application before we begin design and development. We have made a decision to approach the medical records work by domain. 

**Track 2** will answer the question of how the Health Apartment as a whole fits into va.gov and the impact that will have on the information architecture and navigation of VA.gov and the apartment itself. This work is being conducted in partnership with VA.gov content & information architect strategists, the Sitewide team, the account experience team, the platform team, and the mobile team. 
	- In October 2022, we made the decision to not use the authenticate-in-place strategy on VA.gov, and focus on developing an authenticated experience for the apartment. We also made the decision to leave the health hub as it is for now, with the understanding that it will need to change to accommodate the apartment as it takes shape. 

**Track 3** will integrate Cerner (and potentially Community Care) data into VA.gov alongside VistA and DoD data.  This "mashup" of data from various sources is, in fact, one of the main purposes for this initiative. -- it provides Veterans a consistent and comprehensive VA health experience regardless of whether their VA health facility uses VistA or has already been migrated to Cerner.  This consistent experience will be especially valuable to veterans who visit more than one facility that are on different systems.
	- We are modeling this experience off of Intermountain Health's success. They currently have an untethered patient portal with a Cerner backend. 
	- Cerner, VistA, and community care appointment data is expected to come through the Enterprise Appointment Service. 
	- We are exploring different sources of data for medical records. 

**Track 4** will support identity changes intented to eliminate the need for veterans to create and manage multiple sets of credentials in order to apply for health benefits, access their health inforation and communicate with their providers.
	- Migrating MHV credentials to Login.gov is a big piece of this work. 
	- In addition, the identity team is working on a delegate model. 
	- OCTO is advocating a single Terms & Conditions approach to allow veterans to sign just one terms and conditions for VA digital properties. We are planning to use the sign-up service created for Cerner for this purpose. 
	- MHV is updating account creation APIs to enable Veterans to access their MHV applications w/o needing a MHV account. 

**In the short term,** we will complete the build of the Secure Messaging application and define the P. A key aspect of designing and building the MVP will be devising a linking strategy between the health apartment, My HealtheVet, parts of VA.gov related to health, and the VA.gov flagship mobile app. There will be a slow ramp up to bring veterans from My HealtheVet to the Health Apartment on VA.gov to ensure the change is not abrupt for veterans.

**Over the long term,** we will expand the health apartment MVP one section at a time. We’ll prioritize and sequence what will move into the apartment by leveraging analytics and user research. Working in quick cycles and across teams, as we build the apartment section by section, we’ll determine when the beta site should move into VA.gov. Once all content and functionality we want in the health apartment has been moved into it, My HealtheVet tools will no longer exist as a separate website and Veterans will have one place to go for their health needs: a single health “home” on VA.gov.

## Vision 
We aim to reduce the number of websites, products, and interfaces Veterans must use in order to get health care and manage their health — and we aim to make those experiences easy and intuitive. In a single place on VA.gov, Veterans will be able to manage all interactions with VA related to health, plus learn about health conditions and health news. Interactions that cross VA.gov, the VA.gov flagship mobile app, email, text messages, and VA facilities will be seamless.



## Team

### Apartment Team (aka Core Team)

**Federal employees** 
- 	Portfolio: Lauren Alexanderson
-	Product: Leila Rassi
-	Design: Coulton Bunney
-	Design: Jenny Wang, Digital Corps Fellow
-	Product: Jasmine Yohannan, Digital Corps Fellow

**Contractors (Ad Hoc)** 
-	Design: Jonathan Nelson
-	Research: Robyn Singleton
-	Engineering: Patrick Vinograd
-	Engineering: Eric Voshall
-	Product: Marci McGuire

## Business Partners

### Account Experience Crew (authenticated experience)
Crew chief: Chante Lantos-Swett
-	My VA (Samara Strauss)
-	Profile (Samara Strauss)
-	VA Notify (Shane Elliott, Beverly Nelson)
-	VEText (Shane Elliott, Beverly Nelson)
-	VSP Identity (John Rahaghi)

### Mobile Experience
Product: Rachel Han & Chris Johnston
Related: Office of Connected Care (OCC) has a portfolio of ~70 mobile apps (1/2 of these are for Veterans). 

### Health
-	VAOS (Kay Lawyer, OCTO)
-	Unified appointment experience (Stephen Barrs, Mark Dewey, Patrick Bateman, Kay Lawyer) 
-	Check In, including pre-check-in (Stephen Barrs, Patrick Bateman)
-	Beneficiary Travel (Mark Dewey)
-	1010 CG application for caregiver health (Patrick Bateman)
-	10-10EZ application for health care (Patrick Bateman)
-	COVID (Lauren Alexanderson, Danielle Thierry - content strategist and plain language writer)
-	After-visit and pre-visit summary (Shane Elliott & Rob Durkin)
-	PGD (Stefany Holguin)

### Benefits
- Debt Resolution (Matt Self)
- PACT Act (Zach Goldfine, Danielle Thierry)

### Sitewide Crew
Crew chief: Dave Conlon
-	Health Care benefit hub (Danielle Thierry - content strategist and plain language writer who manages all health care content)
-	Sitewide navigation and IA (Mikki Northuis, information architect)
-	Facilities (Dave Conlon, Michelle Middaugh)

### OCC 
**Bylight contract team**
-	Barry Egbert (engineer)
-	Bryan Riley (product)
-	Mike Moyer (engineer)
-	Arienne Walters (design)
-	Anne Costello (design)
-	Bobby Bailey (design)
-	Lexi Wunder (design) 
-	

**Federal employees**
-	Head of OCC and Acting Dept. of Veterans Affairs CIO: Dr. Neil Evans
-	Executive Director of Connected Care: Dr. Meredith Josephs
-	Director of Veteran and Consumer Informatics Office: Theresa Hancock (Director of My HealtheVet)
-	Director of CC who oversees MHV and mobile.va.gov: Nancy Wilck
-	Management analyst/engineering oracle: Carnetta Scruggs
-	Secure messaging product owner: Patti Henry
-	Medical records product owner: Bresha Lipscomb


## Measuring success 

-	The proportion of Veterans using VA.gov OR MHV monthly does not decrease.
-	The proportion of Veterans using VA.gov AND MHV monthly decreases.
-	Within 6 months of moving into the apartment, each product that moved: 
	- Scores higher on [accessibility index]
	- Has the same or more monthly active users
	- Causes the same or less contact center support volume per user
	- Has the same or lower story cycle time
- Review MHV metrics and implement and track the same on va.gov in order to compare the flows and set benchmarks.
- Define happy and/or critical path tasks and measure:
	- steps to get to path from va.gov
	- daily active users
	- drop off points
	- started vs completed tasks
	- time to complete task
- Number of searches for content definied in the health space
- Performance of the site (number of timeouts, outages, down time)
- Authenticated vs Unauthentiated actions
- Number of veterans who successfully sign up for health benefits on va.gov

Notes: 
- PoC: This is not quantitative, but if need to measure, do survey with concept test and assess preference at end. Would need large sample size. Show concept versus MHV+VA.gov now.
- Findabililty: Test and prove this. If have empirical evidence to say X% of people go to MHV on VA.gov nav for health things. What to compare this to? Maybe compare something like appointments on each site. 

## Risks

-	There are a lot of stakeholders within OCTO and OCC who require buy in, with a lot of things in flight, there is room for error if the checkins and sign offs aren't scheduled well in advance. 
-	Without significant research and testing, the project could further fragment the UX before simplifying it. 
-	Outliers within Cerner and Community Care. If APIs aren't accessible for the MVP, the experience in the health apartment will be as fragmented as the experience is now: "If you're a patient at X Cerner facility, go through this 'door' (in the health apartment) to manage your health experience at X Cerner facility."
