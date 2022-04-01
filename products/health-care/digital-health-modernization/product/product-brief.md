# Product brief for the My HealtheVet on VA.gov - Health Apartment 

## Background
To get the health care they need, Veterans must find, register for, and learn to use a number of different websites and software products. Our generative research from late 2020 shows that Veterans find it extremely difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that Veterans feel discouraged to apply for, manage, and maximize their benefits.

Consider booking a doctor’s appointment: One system locates nearby facilities. Another schedules appointments. Another handles follow-ups like messages and prescriptions. And another reimburses travel expenses. That’s a lot for Veterans to learn. It’s also difficult for VA staff to support so many siloed systems.

## Mission
The Health Apartment Team’s mission is to simplify Veterans’ health experience on the web by consolidating all health things into a single health “home” on VA.gov, which we have nicknamed the “health apartment.” As we consolidate the health experience, we will work closely with My HealtheVet / Office of Connected Care (OCC) and with teams throughout OCTO.

Throughout our agile development cycles, we will validate and refine the health apartment to ensure that it meets the needs of Veterans and caregivers – and that it’s usable and accessible. This will take a lot of collaboration with the Health Apartment Working Group, the My HealtheVet Team, the Sitewide and Account Experience Crews, and other product teams in OCC and OCTO. 

**In the short term,** we will build a proof of concept to test our assumptions about how to unify and streamline the health experience for Veterans. We will iterate on the proof of concept (and its findability) until we have a human-centered design as our starting point for integrating My HealtheVet into VA.gov.

After iterating on the proof of concept, the health apartment will be “baked” enough to define an MVP for bringing My HealtheVet into VA.gov. Currently, we envision the MVP to include the “big four” areas of functionality now on My HealtheVet: Appointments, Pharmacy, Secure Messaging, and Records. As we think about the MVP, we will consider how to integrate the Health Care hub and My HealtheVet Profile into the health apartment and VA.gov.  As of April 2022, Appointments work is underway and Secure Messaging is about to begin development.

**In the middle term,** we will build and ship the MVP. A key aspect of designing and building the MVP will be devising a linking strategy between the health apartment, My HealtheVet, parts of VA.gov related to health, and the VA.gov flagship mobile app. There will be a slow ramp up to bring veterans from My HealtheVet to the Health Apartment on Va.gov to ensure the change is not abrupt for veterans.

**Over the long term,** we will expand the health apartment MVP beta, one section at a time. We’ll prioritize and sequence what will move into the apartment by leveraging analytics and user research. Working in quick cycles and across teams, as we build the apartment section by section, we’ll determine when the beta site should move into VA.gov. Once all content and functionality we want in the health apartment has been moved into it, My HealtheVet tools will no longer exist as a separate website and Veterans will have one place to go for their health needs: a single health “home” on VA.gov.

## Vision 
We aim to reduce the number of websites, products, and interfaces Veterans must use in order to get health care and manage their health — and we aim to make those experiences easy and intuitive. In a single place on VA.gov, Veterans will be able to manage all interactions with VA related to health, plus learn about health conditions and health news. Interactions that cross VA.gov, the VA.gov flagship mobile app, email, text messages, and VA facilities will be seamless.

## Team

### Apartment Team

**Federal employees** 
-	Design: Meg Peters
-	Engineering: Christopher Froehlich
-	Product: Tracey Mulrooney



## Business Partners
Most of the folks below are product people. Roles show next to names of non-product people (some items are not products). Everyone is a fed unless identified as a contractor. 

### Account Experience Crew (authenticated experience)
Crew chief: Chante Lantos-Swett
-	My VA (Samara Strauss)
-	Profile (Samara Strauss)
-	VA Notify (Shane Elliott, Beverly Nelson)
-	VEText (Shane Elliott, Beverly Nelson)
-	VSP Identity (John Rahaghi, Cody Reinold)

### Mobile Experience
Product: Leanna Miller
Related: Office of Connected Care (OCC) has a portfolio of ~70 mobile apps (1/2 of these are for Veterans). 

### Health
-	VAOS (Jeff Roof, contractor)
-	Check In (Stephen Barrs is backfilling Patrick Bateman, who returns soon. There was an earlier project called eScreener/Pre-Visit Questionnaire -- not sure if that was rolled into Check In. Angela Gant-Curtis was the PO.)
-	Caregivers (?)
-	10-10EZ application for health care (?)
-	COVID (Lauren Alexanderson, Danielle Thierry - content strategist and plain language writer)
-	After-visit summary (Shane Elliott)
-	PGD (Kimberly McManus, PIF. Having PGD, or patient-generated data, on VA.gov seems a ways off, so we haven't been in touch with this stakeholder lately.)

### Benefits
Debt Resolution (Matt Self)

### Sitewide Crew
Crew chief: Dave Conlon
-	Health Care benefit hub (Danielle Thierry - content strategist and plain language writer who manages HC hub content)
-	Sitewide navigation and IA (Mikki Northuis, information architect - contractor)
-	Facilities (Dave Conlon, Michelle Middaugh)

### OCC 
**Contractors**
-	Barry Egbert (engineer)
-	Ken Graham (engineer)

**Federal employees**
-	Head of OCC and Acting Dept. of Veterans Affairs CIO: Dr. Neil Evans
-	Acting Head of OCC: Nancy Wilck
-	Director of Veteran and Consumer Informatics Office: Theresa Hancock (Director of My HealtheVet)
-	Director of CC who oversees MHV and mobile.va.gov: Nancy Wilck
-	Management analyst: Carnetta Scruggs (Engineering background. Think she's VHA, outside of OCC / MHV.)

### VBA 
We need to include stakeholders from VBA but have not yet done so. 
- Disability
- Hearing aid batteries
- Prosthetic socks
- Travel pay

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
