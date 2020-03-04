# Discovery Project Brief & Planning

This doc should be filled out during different stages of the discovery sprint process. See the [Discovery Sprint How-to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) for details on the whole process.

## PROJECT BRIEF
_To be filled out with a VA.gov lead prior to starting discovery work._

### Project Name
Medical Device Tool

### Problem Statement
Millions of Veterans depend upon the VA for disability-related medical devices and their accessories. Today, Veterans are able to order prosthetic socks and hearing aid batteries, the two most commonly-ordered medical device accessories, through their respective VA forms (Form 2345 & 2346). There are a number of ways to request these medical devices today, through several different mediums and platforms, providing a disparate experience for Veterans. With the expected sunsetting of eBenefits, BAM2 seeks to match and expand the functionality of the platform on the VA.gov website.

#### How Might We...
- ...reduce the effort of re-ordering hearing aid batteries and prosthetic socks for Veterans?
- ...increase usage of the online resupply ordering?
- ...ensure that Veterans do not go without the assistive devices and accessories they need?
- ...utilize data we already have to improve benefit utilization?
- ...increase visibility of orders after they are placed?
- ...reduce strain on the DLC contact center?
- ...reduce the friction of authentication for these orders?
- ...enable Veterans to solve order problems without making a phone call?

### What Sprint Teams Are Associated with this Discovery? 
Benefits & Memorials 2

### Discovery Sprint Roles
See also: Discovery Sprint How-to about [makeup of a discovery sprint team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md).

* Product Lead: Matt Self
* Discovery Sprint Lead: Nick Wygonik
* Engineer: Amen Ra (FE), Mahariel Rosario (FE), Joseph Brothers (BE)
* Designer: Riley Orr, Rebecca Walsh
* Researcher: Riley Orr, Rebecca Walsh
* Other people from the Sprint Team:
* SMEs: Kevin Quitmeyer, Jim Richardson, Patrick Booth, Jeffrey Robillard

### Stakeholders
* VA business owner: Matt Self
* Stakeholders who will be involved or interviewed: DLC IT & Customer Service Leadership

## DISCOVERY PLANNING
- [x] Set up product folder in GitHub ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool))
- [x] Create launch checklist ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/launch-checklist.md))
- [x] Create Product Outline ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/product-outline.md))
  - [x] Define problem, assumed user and business goals, and other assumptions (Product Outline)
  - [x] Determine POCs, stakeholders, and implementation team (Product Outline)
- [x] Create Discovery Sprint Brief
  - [x] Determine Discovery methods needed
  - [x] Determine user research methods needed
  - [x] Determine what APIs and/or systems to investigate
- [x] Recruit for stakeholder research
- [x] Create user [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/discovery-nov19/research-plan.md) & conversation guides ([prostheses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/discovery-nov19/veteran-conversation-guide-prostheses.md) and [hearing aids](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/discovery-nov19/veteran-conversation-guide-hearingaids.md))
- [x] Recruit for user research
- [x] Determine ideal Discovery outputs and artifacts

### Project Details

#### What do we know?
  - There are 5 major ways a Veteran can order resupply items: via phone, mail, email, eBenefits resupply applet, or VHA provider.
  - Customer eligibility is determined by a VHA provider placing an initial product order through ROES.
  - Customers are only able to reorder previously-supplied items through eBenefits/"VOES"
  - Orders are fulfilled with 6 months of supplies, and order can be placed every 5 months through eBenefits' "VOES" applet.
  - Items ordered through mail, phone, or email are cross-referenced with the Veteran's profile for eligibility.
  - Veterans often need assistance with determining which resupply items are needed.
  - Many Veterans' orders are too complex to be placed through eBenefits, requiring them to use one of the other ordering methods.
  - The eBenefits platform is currently underutilized in Q4 2019 (~4%) while mail-in form (~49%), live phone agents (~19%), and automated phone agents (~25%) experienced higher utilization. Email (~2%) was the least utilized.
    - [1] A stakeholder noted that inability or unwillingness to use DS Logon is the reason the eBenefits avenue is underutilized. 

#### What don't we know?
  - What are the pain points Veterans are experiencing in this process?
  - What are the pain points Customer Service Representatives are experiencing in this process?
  - Why do Veterans opt for the ordering method that they do?
  - What are the constraints in data we get from the DLC API? 

#### Are any of the above assumptions that need to be verified?
  - [1] Why are Veterans unable or unwilling to utilize eBenefits?

#### How are we going to find out answers? 
  - Stakeholder Interviews:
    - [x] A introduction call with the DLC IT Leadership ([11/15 Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20191115-DALC-stakeholder-introductions.md))
    - [x] An kickoff call with the greater DLC stakeholder group ([11/21 Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20191121-DALC-stakeholder-meeting.md))
    - [ ] A stakeholder interview with DLC Customer Service leadership
    - [ ] A stakeholder interview with DLC IT leadership
  - User Interviews:
    - [ ] Request an interview with 8 hearing aid users and 8 prosthetic limb users to source a minimum of 8 total interviews (accounting for no-shows).

#### What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
  - Users will benefit from us solving this problem because they will be able to more easily order the assistive device accessories they need.

#### Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
  - DLC IT Leadership (Kevin Quitmeyer)
  - DLC Veteran Services Lead (Patrick Booth)
  - DLC IT Engineers (Jim Richardson)
  - DLC Customer Service Leadership (Jeff Robillard)
  - DLC Customer Service Representative
  
#### What secondary research should we do (google, facebook, internal documents)?
  - Some secondary research has been completed prior to this discovery sprint ([Link to documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/preliminary-research-notes.md))

#### Are there any intentional project constraints (things we're intentionally deeming out of scope)?
  - Explicit expansion of product catalogue availability has been deemed out of scope, but something to keep in mind.

#### Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?
  - ~Stakeholders initiated on short notice may be difficult to interface with within the sprint.~

#### What discovery artifacts will be produced from this sprint?
  - Personas
  - User journey(s)
  - A presentation of findings with suggestion(s) for identified areas of improvement

### Timeline
See also: [sample discovery sprint schedule](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/sample-discovery-sprint-schedule.md).

[Road Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/Road-map%202small.PNG)

* Are there any hard and fast deadlines for completing the discovery work?
* When will the following take place?
  * Discovery Prep: November 6th - November 20th
  * Discovery (ideally 1-2 weeks): November 20th - December 18th
  * User Research: December 6th - December 13th
  * Complete & Readout: December 18th

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)
