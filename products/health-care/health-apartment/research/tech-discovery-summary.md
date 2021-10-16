**--Work in Progress--**

# Technical Discovery Research Findings 

**Veteran-Facing Services - Digital Health Modernization (VFS-DHM), Health Apartment Team**

Date: 10/14/2021

[Nadya Primak](nprimak@pluribusdigital.com)

[Jared Cooke](jared@mostudio.com)

Research Report PDF (coming soon)

<br>

**Jump to:**

[Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/health-apartment/research/tech-discovery-summary.md#key-findings)

[Research Questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/health-apartment/research/tech-discovery-summary.md#research-questions)

[Details of Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/health-apartment/research/tech-discovery-summary.md#details-of-findings)

[Next Steps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/health-apartment/research/tech-discovery-summary.md#next-steps)

<br>

# Research Goals

The Health Apartment Team was created to help modernize, unify, and streamline the Veteran health experience. For additional context and information regarding all the previous work done leading up to this point, check out the [Health Apartment Team Onboarding Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/onboarding.md#what-success-might-look-like). The Health Apartment Team is working on a concept that will unify all health things from My HealtheVet, eBenefits, and VA.gov into a distinct section of VA.gov branded as "My HealtheVet." As a result, Veterans will be able to manage all of their benefits, including health care, from VA.gov. 

The purpose of this Technical Discovery research is to: 
* Validate the feasibility of the Health Apartment Concept
* Deepen our understanding of the tecnhical landscape
* Identify the technical capabilities required to deliver the Proof of Concept
* Capture key insights that will support and shape the development of the Proof of Concept

<br>

# Research Questions

* How familiar are you with the health apartment concept? (Show POC Mural here)
* Background on [organization/system]
  * Frontend
  * Backend
  * APIs
* Can you provide any resources or diagrams that will help simplify the process of explaining this to the non technical folks on our team?
* What are the major challenges that you think we may run into when moving MHV functionality into VA.gov?
* Are there any repos or relevant systems that are important for us to be familiar with?
* Do you have any recommendations on people we should talk with?
* Considerations regarding technical capabilities needed to deliver the health apartment?
* Is there anything I should have asked you that I did not ask you?

<br>

# Methodology 

### October 1st, 2021 - present day

We are actively conducting 30 minutes to 1 hour-long remote moderated research discussions via Zoom with numerous different technical stakeholders. Particpants are asked a series of questions and engage in discussion using two different Mural boards:

1. Mural One: [POC Technical Discovery Tool](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1632428592685/ffaecacbe4dbed4518a918630fc15c282e8d9403?sender=jared8752)
2. Mural Two: [POC Discovery Tool](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1632862591639/3675fa0918da565edcbc794b57b2d9c4d97a8fb2?sender=jared8752)

<br>

# Key Findings

**1. The majority of our work will be done in vets-api and vets-website and most of the business logic and intensive processing is handled by MHV’s APIs.**

**2. We identified the need for a deep understanding of MHV APIs, specifically around integration, scope, endpoints, standards and specifications, and access.**

**3. VA.gov frontend teams primarily use React and Redux by leveraging vets-website—the front end repository for VA.gov that contains application code used across the site.**

**4. It is important to engage security early and often.**

**5. Clearly communicate with other teams keeping them informed on what we’re doing, our projected start dates, and when we expect to need analysis and technical support.**

<br>

# Details of Findings 

### 1. The majority of our work will be done in vets-api and vets-website and most of the business logic and intensive processing is handled by MHV’s APIs.

Mike Chelen gave us an overview of the frontend and backend architecture of VA.gov:
> _"VFS teams can only write backend code inside vets-api"_
> _"All VA.gov backend teams use vets-api"_
> _"All VA.gov frontend teams use vets-website"_

Barry Egbert on MHV architecture philosophy:
> _"Heavy lifting is done in the service tiers. Business process intensive or processing intensive tasks belong in the service tier."_
>> _"Thought was that someday we may have a mobile app, or an API client that is not MHV national portal that needs this information. We tried to keep the UI layer very thin that sits on top of APIs that are the real key workers in the system. There are some instances where we have strayed from this."_

### 2. We identified the need for a deep understanding of MHV APIs, specifically around integration, scope, endpoints, standards and specifications, and access.

Mike Chelen provides important questions to ask MHV:
> _“If MHV has a prescription page that somebody goes to –is  there a backend component to that? Is that backend component a RESTFUL API that we can integrate with directly or can they make it a RESTFUL API? What are the standards/specs for any of those API’s?“_
>> _“What does it take to actually get connected to that system? Is it easy, is it difficult –do we need to ask MHV to make changes? Do they have a sandbox version of that API?“_
>> _“If an MHV service doesn’t have an API, who’s responsible for making that api? Who’s responsible for addressing those issues?"_

### 3. VA.gov frontend teams primarily use React and Redux by leveraging vets-website—the front end repository for VA.gov that contains application code used across the site.

Mike Chelen gave us an overview of VA.gov frontend architecture:
> _"Code lives in vets-website monorepo, uses React"_

> _"VA.gov has its own design system which consists of reusable react components"_

### 4. It is important to engage security early and often.

Mike Chelen's recommendations when asked about what challenges he forsees regarding the implementation of the Health Apartment concept:
> _"Because we’re working with health data + PII we want to get security reviews early and often and keep it in the front of our mind"_

### 5. Clearly communicate with other teams keeping them informed on what we’re doing, our projected start dates, and when we expect to need analysis and technical support.

Barry Egbert's recommendations when asked about what challenges he forsees regarding the implementation of the Health Apartment concept:
> _"Good to provide us projected start times for analysis and tech support; the sooner we get that info to them, the better, then they can plan for it instead of adding it in late."_
>> _"For example: If we know we are going to work on pharmacy Q1 of next year, it will be good to get that info to OCC, MHV, and anyone else, so that we can start adding stuff to our plans.”_

Mike Chelen's recommendations when asked about what challenges he forsees regarding the implementation of the Health Apartment concept:
> _"Get it in front of eyes for VFS review earlier rather than later"_

> _"Understanding the collaboration cycle and VFS approval process will reduce friction"_

<br>

# Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._

* Ruby on Rails is an important capability to add to the team.
* Public website team has limited bandwidth - need to go through PM’s

* **Concerns about duplication.** Does not want duplicated effort or code and suggested we leverage MHV’s existing APIs to make things easier and quicker.

* The Developer Portal should be available by the end of 2021 and will affect the process of how we interface with MHV regarding APIs.

* Porting from a portlet to a mobile app or to a new tech stack (health apartment) on top of React should be a fairly light lift migration.

* MHV currently uses a postman project to provide API “documentation” and guidance regarding the operations that we intend to use. (This will change once the Developer Portal is available)

<br>

# Next Steps

_In no particular order_

* Meet with the Flagship Mobile App team to gather their insights and lessons learned when leveraging MHV existing APIs.

* Follow-up on the progress / availability of the Developer Portal (Jared)

* Collaborate with the Identity Working Group around Identity UX to stay in the loop.

* Follow-up with Barry regarding the 100 page system design document (Jared) 

* Get introduced to Patrick Vinograd (massive amount of knowledge on how systems integrate)

* Allister Dawson, staff software engineer for mobile team, Ad Hoc

* Meet with Identity Team PM (Nick S) to get documentation and links around identity.

* Meet with Damian Ginther to learn about DevOps and determine if we want individual pieces to have their own build and deploy pipeline and what that would look like (should contact PM Jesse House first) 

* Communicate with Drink and Jeff about rails skillset, and systems integration

* Determine if we need to meet with FE and BE teams in addition to the platform orientations.

<br>

# Further research needed

* Conduct extensive research into MHV APIs
* CERNER



# Appendix
[Health Apartment Team Onboarding Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/onboarding.md#what-success-might-look-like)

[POC Technical Discovery Tool](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1632428592685/ffaecacbe4dbed4518a918630fc15c282e8d9403?sender=jared8752)

[POC Discovery Tool](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1632862591639/3675fa0918da565edcbc794b57b2d9c4d97a8fb2?sender=jared8752)

[vets-website](https://github.com/department-of-veterans-affairs/vets-website)

[Frontend Tools Technical Onboarding](https://vfs.atlassian.net/wiki/spaces/FTT/pages/1872691219/Frontend+Tools+Technical+Onboarding)



## Tools used for Synthesis


## Other supporting documents created

* Discussion guide
* Debrief document


## Who we talked to 

Barry Eggbert, MHV Application Architect

Mike Chelen, VA.gov Architect

David Conlon, Public Websites Crew Chief

Cory Trimm, VA.gov Engineering Practice Lead


