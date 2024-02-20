# Project Outline - Ch33 Migration to CorpDB

**Last updated 2/20/2024** 

## Table of Contents 

## Communications 
- **Github labels:** authenticated-experience, profile, direct-deposit
- **Slack channel:** #edu-direct-deposit-migration

## Roles 

### Partners
|Name|Role/Team|
|:--|:--|
|Sarah Haddock|VBA VACO|
|Steve Wayland|VBA VACO|
|John Dell|BIS (formerly BGS) technical contact|
|Andrew Ramos|LightHouse|
|Lori Glover|LightHouse|

## Overview 
Chapter 33 (Ch33) education benefits are paid to veterans using a system called BDN. BDN is a legacy system that is gradually being retired and various benefits are migrating to newer payment/management systems. VBA is starting with the largest EDU portfolio, Ch33 and migrating payment processing from BDN to CorpDB where payments will run through eMPWR. In this new system, there can only be ONE set of payment instructions. As an example, Comp&Pen (C&P) benefits have already been migrated to CorpDB.

Today, if veterans receive CH33 and C&P benefits, there are two separate payment processes running, one from BDN and the other from CorpDB. This allows veterans to input separate payment information for each benefit. As the VA migrates CH33 to the new system, payment instructions for both types of benefits must be identical.  


### Problem Statement 
CorpDB limits the payee information per person to one set of payment instructions, any veteran that receives both C&P and CH33 benefits must have ONE set of payment instructions on file in CorpDB. 

### Proposed Solution 
CH33 EDU benefits likely need to pass information through Lighthouse.

## Teams and responsibilities

### Authenticated experience (VA.gov profile)

Leads: Samara Strauss, Travis Cahill

The VA.gov profile team is responsible for the following:

- Overall coordination of this effort (through Samara)
- Updating the profile interface to combine the education and disability direct deposit forms into one
- Updating connections to Lighthouse to allow education benefit recipients to update direct deposit
- Coordinating testing across systems
- Launching and monitoring functionality

### Sitewide/Content

Leads: Danielle Thierry, Beth Potts, Randi Hecht

The Sitewide/content team is responsible for:

- Content/communications guidance around external comms
- Content updates for VA.gov

### Lighthouse

Leads: Janet Coutinho, Lorri Glover, David Lennon

Lighthouse is responsible for:

- Updating their code to allow education benefit recipients to update direct deposit via the existing comp & pen integration
- Coordination with BGS
- Working with us on all testing and validation
- Support as needed through this engagement

### BGS

Lead: John Dell

- Updating their code to allow education benefit recipients to update direct deposit via the existing comp & pen integration
- Coordination with Lighthouse
- Working with us on all testing and validation
- Support as needed through this engagement

### GI Bill (1990) form team

Lead: Riley Ross

- Updating the Chapter 3 GI Bill (1990) form to send direct deposit info to CorpDB.

### 526/527 team

Lead: Julie Strothman

- Managing any needs for the 526/527

## Measuring Success 

## Key Deliverables / Artifacts 
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76202)
- [Mural Note Taking](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707938676024/48a9e34150b8a3058c8709b241373cb9515afee6?sender=uaa72d11015d3f7c704a64191)
- [Current User Flow](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-1&mode=design&t=PHWgrsxoEHDjP36q-0) 

## Key Dates 
- `Deadline of 4/20/2024`
