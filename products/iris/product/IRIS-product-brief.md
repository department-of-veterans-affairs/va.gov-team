# Using digital communications and evolving interactions to improve the 'Ask a Query' experience


## What is the opportunity?

Owing to mounting operating costs for the current IRIS system, the VEO has kicked off an initiative to migrate to more modern technologies. This effort involves migrating the following three systems from Oracle Service Cloud to a new CRM: 
- IRIS Interface
- GI Bill
- MHV

The existing contract for the Oracle backend supporting IRIS ends on June 30, 2021. The migration to a new platform will take place on an accelerated timeline in order to allow current users to begin utilizing the replacement system before the final shutdown date. Feedback from existing users will be collected to address required modifications for the new system prior to fully decommissioning IRIS.

There exists an opportunity to improve the experience for end users of IRIS, GI Bill and MHV Contact Us Form, in alignment with the current VA Design principles, and backed by data from user research. 

## Proposed Solution

As part of this effort, initial research has indicated that existing Microsoft Dynamics 365 CRM instance of PATS-R will function as the new CRM system to support IRIS and GI Bill inquiries.

The bulk of the CRM migration from the existing Oracle Service Cloud to Microsoft Dynamics 365 CRM will be undertaken by a team from SRA (3rd party vendor) working closely with Dennis Peterson and the Microsoft team supporting PATS-R. 

Replacement of the veteran and other beneficiary facing side of this system will be done using the Omnichannel portal capability of MS Dynamics CRM that will provide an alternative for the existing
- Ask A Query form on IRIS
- Submit a query on GI Bill interface
- Homepage for IRIS
- Homepage for GI Bill

An initial version of a custom form that ThoughtWorks has built exists here: https://staging.va.gov/ask-a-question

[11-19-2020] The Member services team supporting MHV-TS will be responsible for building the replacement form for MHV-Technical Support. 

[1-7-2021] It has been decided by VEO and DEPO that the veteran facing component of IRIS inquiry forms will be implemented using Microsoft Dynamics Omnichannel Portal which will be hosted on VA.gov. There will be no custom forms development 


## How will we measure success?

A list of metrics is being worked on and will be refined in the coming weeks
  - Percentage of successful submissions:
  - Increase in mobile usage?
  - When submitted had the veteran chosen the correct query vs was it required to be rerouted internally?
  - CSAT score
  - Percentage of users dropping off when mandated to login


## Pending decisions and outstanding questions

- Consolidated interface for raising inquiries across IRIS and GI Bill: Recent (in Dec 2020) user research sessions have indicated veterans prefer to navigate to a single place in order to raise their all inquiries. The full usability study report to be published will have additional details on this approach. 
- Replacement solution for IRIS FAQ and GI Bill FAQ: The recently launched VA.gov/resources will eventually serve as replacement to existing FAQs on IRIS and GI Bill
- Do veterans need to login before raising an inquiry: The current desire is to mandate login for certain topics that help in easier identification of the person raising the inquiry and aids in providing appropriate responses by the Contact Center agents
- Introducing a chatbot to address initial information seeking by veterans before they are directed to submit an inquiry to VA: This is part of a larger initiative to modernize the contact center operations and is being looked upon potentially for VBA-NCC as the pilot
- Consolidation of categories and topics for a more efficient and enhanced experience: In progress and the topics are continually being refined
- How can we utilize design standards within the VA to modernize the experience
- How might we create a better inquiry experience in light of larger initiatives that are improving the Get Help experience



