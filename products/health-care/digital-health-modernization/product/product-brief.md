# Product brief for the My HealtheVet on VA.gov

## Background
To get the health care they need, Veterans must find, register for, and learn to use a number of different websites and software products. Our generative research from 2018, repeated in late 2020, shows that Veterans find it extremely difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that Veterans feel discouraged to apply for, manage, and maximize their benefits.

Consider booking a doctor’s appointment: One system locates nearby facilities. Another schedules appointments. Another handles follow-ups like messages and prescriptions. And another reimburses travel expenses. That’s a lot for Veterans to learn. It’s also difficult for VA staff to support so many siloed systems.

## Mission
The My HealtheVet on VA.gov team’s mission is to simplify Veterans’ health experience on the web by consolidating all health things into a single health “home” on VA.gov. As we consolidate the health experience, we will work closely with the "classic" My HealtheVet / Office of Connected Care (OCC) and with teams throughout OCTO.

Throughout our agile development cycles, we will validate and refine My HealtheVet on VA.gov to ensure that it meets the needs of Veterans and caregivers – and that it’s usable and accessible. This will take a lot of collaboration with the the "classic" My HealtheVet Team, the Health, Sitewide, Account Experience, Platform, Identity, Mobile Crews, and other product teams in OCC and OCTO. 

We have defined four work streams, or tracks, that will afford ample opportunities for us to elicit Veteran feedback while building a smooth, seamless rollout.

**Track 1** will focus on migrating the core My HealtheVet applications to va.gov.  As of September 2023, the My HealtheVet on VA.gov landing page has launched, Secure Messaging is in Phase 0 of its rollout, Appointments and Medical Records are nearing Phase 0, and Medications is in build. Applications will move to VA.gov in a phased approach. 

- Appointments is covered by the health applications team, who are building out the unified appointment experience.
- ByLight teams are building the applications on VA.gov, and are navigating the VA.gov platform collaboration cycle to do so. 
- The CTO Health team is focused on the landing page, preferences and notification integration, monitoring the rollout phases of each MHV product,  determining how to maintain the Spotlight information on the landing page, and determining how to give support teams a way to train on the My HealtheVet on VA.gov applications in a lower environment. 

**Track 2** will answer the question of how My HealtheVet as a whole fits into va.gov and the impact that will have on the information architecture and navigation of VA.gov and My HealtheVet on VA.gov itself. This work is being conducted in partnership with VA.gov content & information architect strategists, the public websites team, sitewide content team, account experience team, the platform team, and the mobile team. 

- In October 2022, we made the decision to not use the authenticate-in-place strategy on VA.gov, and focus on developing an authenticated experience for My HealtheVet on VA.gov. We also made the decision to leave the health hub as it is for now, with the understanding that it will need to change to accommodate the My HealtheVet as it takes shape. 

**Track 3** will integrate Cerner (and potentially Community Care) data into VA.gov alongside VistA and DoD data.  This "mashup" of data from various sources is, in fact, one of the main purposes for this initiative. -- it provides Veterans a consistent and comprehensive VA health experience regardless of whether their VA health facility uses VistA or has already been migrated to Cerner.  This consistent experience will be especially valuable to veterans who visit more than one facility that are on different systems.
	- We are modeling this experience off of Intermountain Health's success. They currently have an untethered patient portal with a Cerner backend. 
	- Cerner, VistA, and community care appointment data is expected to come through the Enterprise Appointment Service. 
	- Medical records data is expected to be obtained through a Patient Health Record API that is in the process of being written in a FHIR format  compatible with Cerner. 

**Track 4** will support identity changes intented to eliminate the need for veterans to create and manage multiple sets of credentials in order to apply for health benefits, access their health inforation and communicate with their providers.

- Migrating MHV credentials to Login.gov is a big piece of this work. 
- In addition, the identity team is working on a delegate model. 
- OCTO is advocating a single Terms & Conditions approach to allow veterans to sign just one terms and conditions for VA digital properties. We are planning to use the sign-up service created for Cerner for this purpose. 
- "Classic" MHV is updating account creation APIs to enable Veterans to access their MHV applications w/o needing a MHV account. 

**In the short term,** the ByLight teams will begin rollout of Secure Messaging, followed soon after by the rollout of Appointments. A key aspect of designing and building the MVP will be devising a linking strategy between My HealtheVet on VA.gov, "classic" My HealtheVet, parts of VA.gov related to health, and the VA.gov flagship mobile app. There will be a slow ramp up to bring veterans from "classic" My HealtheVet to the My HealtheVet on VA.gov to ensure the change is not abrupt for veterans.

**Over the long term,** we will expand the My HealtheVet on VA.gov MVP one section at a time. We’ll prioritize and sequence what will move into the My HealtheVet on VA.gov by leveraging analytics and user research. Working in quick cycles and across teams, as we build My HealtheVet on VA.gov section by section, we’ll determine when the beta site should move into VA.gov. Once all content and functionality we want in My HealtheVet on VA.gov has been moved into it, "classic" My HealtheVet tools will no longer exist as a separate website and Veterans will have one place to go for their health needs: a single health “home” on VA.gov.

## Vision 
We aim to reduce the number of websites, products, and interfaces Veterans must use in order to get health care and manage their health — and we aim to make those experiences easy and intuitive. In a single place on VA.gov, Veterans will be able to manage all interactions with VA related to health, plus learn about health conditions and health news. Interactions that cross VA.gov, the VA.gov flagship mobile app, email, text messages, and VA facilities will be seamless.


## Team

### MHV on VA.gov CTO Health Team

**Federal employees** 
- Portfolio: Lauren Alexanderson
- Product - Cartography Team: Patrick Bateman
- Product - Secure Messaging: Janie Tankard Carnock
- Product - Medical Records, Cerner Integration: Marci McGuire
- Design: Kaitlin Fink
- Design: Ryan Thurlwell
- Design: Robyn Singleton
- Design: Jenny Wang, Digital Corps Fellow
- Product: Jasmine Yohannan, Digital Corps Fellow

**Contractors (Agile Six)**
- Delivery Manager: Lynne Johnson
- Product Manager: Wes Rowe
- Technical Architect: Carlos Felix
- Team Coach: Mike Collier
- Delivery Coach: Stephen Smythe
- Design Lead: Florence McCafferty
- Researcher/Designer: Kat Brinkley
- Full Stack Engineer: Richard Davis

**Contractors (Ad Hoc)** 
- Design: Jonathan Nelson
- Engineering: Daniel Cloud
- Engineering: Jim Zaccardo
- Accessibility: Vacant
- Information Architect: Sara Sterkenberg
- QA (shared with Health Enrollment): Allan To



## Business Partners

### Account Experience Crew (authenticated experience)
Crew chief: Chante Lantos-Swett
-	My VA (Chante Llantos Sweet)
-	Profile (Chante Llantos Sweet)
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
-	Patient-Generated Health Data (PGHD) (Stefany Holguin)


### Benefits
- Debt Resolution (Denise Coveyduc)
- PACT Act (Zach Goldfine, Danielle Thierry)

### Sitewide Crew
Crew chief: Dave Conlon
-	Health Care benefit hub (Danielle Thierry - content strategist and plain language writer who manages all health care content)
-	Sitewide navigation and IA (Mikki Northuis, information architect)
-	Facilities (Dave Conlon, Michelle Middaugh)
-	Laura Willwerth (content)

### OCC 
**Federal employees**
-	Head of OCC and Acting Dept. of Veterans Affairs CIO: Dr. Neil Evans
-	Executive Director of Connected Care: Dr. Meredith Josephs
-	Director of Veteran and Consumer Informatics Office: Theresa Hancock (Director of My HealtheVet)
-	Director of CC who oversees MHV and mobile.va.gov: Nancy Wilck
-	Management analyst/engineering oracle: Carnetta Scruggs
-	Secure messaging product owner: Patti Henry
-	Medical records product owner: Bresha Lipscomb

**Bylight contract team**
-	Barry Egbert (engineer)
-	Bryan Riley (product)
-	Lichelle Bain (product)
-	Mike Moyer (engineer)
-	Oleksii Morgun (QA)
-	Arienne Walters (design)
-	Anne Costello (design)
-	Bobby Bailey (design)
-	Lexi Wunder (design) 
-	Jessica Robertson (design)
-	Anne Costello (research)

## Measuring success 

-	The proportion of Veterans using VA.gov OR MHV monthly does not decrease.
-	The proportion of Veterans using VA.gov AND MHV monthly decreases.
-	Within 6 months of moving into My HealtheVet, each product that moved: 
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
- Findability: Test and prove this. If we have empirical evidence to say X% of people go to MHV on VA.gov nav for health things. What to compare this to? Maybe compare something like appointments on each site. 

## Risks

-	There are a lot of stakeholders within OCTO and OCC who require buy in, with a lot of things in flight, there is room for error if the checkins and sign offs aren't scheduled well in advance. 
-	Without significant research and testing, the project could further fragment the UX before simplifying it. 
-	Outliers within Cerner and Community Care. If APIs aren't accessible for the MVP, the experience My HealtheVet on VA.gov will be as fragmented as the experience is now: "If you're a patient at X Cerner facility, go through this 'door' (on My HealtheVet on VA.gov) to manage your health experience at X Cerner facility."
