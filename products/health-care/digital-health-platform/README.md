
Digital Health Platform Device Connection Product Outline
========================

Overview
--------

The Digital Health Platform (DHP) is a framework that enables rapid evaluation for novel sources and usages of patient generated data (PGD). It enables Veterans to connect and share their PGD from device vendors and other third parties with their care team at VA. PGD provides care teams with information to form a more complete picture of the Veteran's health. Sources and usages of PGD which demonstrate their value on the DHP will be promoted or ported into VA's canonical PGD space. This product brief is focused on the Veteran experience of connecting their accounts and devices such as activity trackers and continuous glucose monitors to VA through VA.gov. 

Problem Statement
-----------------

Veterans are generating PGD today through the use of devices such as activity trackers (e.g. Fitbit) and continuous glucose monitors (e.g. Abbott Libre). Care teams do not have consistent access to this data today, and Veterans do not have a consistent way to share the data. Currently, it is shared through conversations, email, or by viewing data on a Veteran's device. With digital technology use on the rise, there are new opportunities to integrate insights from connected health technologies to drive a learning health system at VA.

Existing technical, operational, and policy constraints make it challenging to evaluate the value of digital health solutions prior to integration into operations and thus hinder VA innovators from collaborating with industry partners to lead quality improvement, research, and other innovation efforts.

An extensible framework for early-stage testing and evaluation for digital health is needed.

Desired User Outcomes
---------------------

-   Veterans have an intuitive way to connect their digital health devices and accounts to share data with VA.
-   Veterans can self-serve the connection of their PGD accounts to VA.
-   Clinicians are able to view Veteran PGD, combined with VA data, through intuitive visualizations and targeted insights.
-   Clinicians and data explorers can access PGD, and VA data, in a central location for data analytics.
-   Clinicians and data explorers can quickly evaluate new devices and data to determine the value of scaling innovations.

Desired Business Outcomes
-------------------------

-   VA has access to Veteran PGD to improve Veteran care and better inform care teams.
-   VA has a channel to test and learn about the value of new devices, new data, and new clinical insights which can be generated from that data.

* * * * *

Measuring Success
-----------------

### Key Performance Indicators (KPIs)

-   Number of Veteran successfully connecting their PGD accounts to VA
-   Time and effort to onboard a new device type

### Objectives and Key Results (OKRs)

-   Design and document first iteration of MVP and post-MVP technical architecture by end of Q1 
-   Validate problem statement by interviewing at least 12 clinicians and 12 Veterans by end of Q1
-   Set up CI/CD pipeline and deploy non-prod data ingest to VA cloud by early Q2
-   Have a functioning consent flow integrated with VA.gov by end of Q2 in staging
-   Publish first draft of vendor integration playbook through early vendor integrations by end of Q2
-   Build interface that enables clinicians to view basic Veteran PGD by early Q3
-   Designs for a sustainable rapid integration framework that will support future vendors or devices by end of Q3
-   Complete initial Discovery on at least eight digital health products by end of Q3

* * * * *

Solution Approach
-------------------

-   The initial launch will be scoped to a small group of users at our pilot site (Atlanta VA Whole Health) using Fitbits. Future iterations will likely expand this to a larger group as the value of the DHP is proven. 

-   VA.gov was selected as the location for the device-registration experience because it is a centralized location Veterans are familiar with, and provides much of the needed base functionality such as authentication. Future iterations may expand to include the flagship mobile app or Myhealthevet.  

-   The MVP will focus on Fitbit data and connecting a Veteran's Fitbit account to their VA account. Future iterations will allow for other device/account types to be connected.

-   In order to connect their Fitbit account and data a Veteran must:

-   Navigate to a page about connecting their PGD to VA

-   Sign in with their VA account

-   Select the type of account they would like to connect (Fitbit)

-   Be redirected to the Fitbit website to sign in 

-   Select the data (steps, heart rate, sleep, activity, etc) they would like to share (On Fitbit's website)

-   Be redirected back to a confirmation page on VA.gov indicating the account was successfully linked

* * * * *

Go-to-market Strategy
---------------------

Our initial users will be part of a pilot site at the Atlanta VA Whole Health. Veterans in this group will learn about the program through their care team at this site.

Launch Dates
------------

We are planning to launch by the end of July 2022.

* * * * *

#### Team Members

Kimberly Roberts, Michael Chaffee, Travis McKinstry, Yoni Doron-Peters, Todd Stanich, Suzanne Scott, Cam Bui, Rebecca Green, Aurelio Nogueira 

#### Stakeholders

Kimberly McManus, Arash Harzand, Blake Henderson

#### GitHub/ZenHub/Teams/Jira
GitHub label: [digital-health-platform](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-platform)

Link to Teams folder if applicable: [DHP](https://teams.microsoft.com/l/team/19%3apBPuU6y6bX06LRhBKrJzImm8XBFuHOsfpUKzWtFhIVU1%40thread.tacv2/conversations?groupId=93a7bb6d-ecf0-4195-a188-03a1484d0f25&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)

Link to Jira if applicable: [Digital Health Platform (DHP)](https://vajira.max.gov/projects/DHP/summary)

List & link to the slack channels you use: # digital-health-platform-public, # digital-health-platform-team 

#### Product Documentation
- Link to Roadmap: [MVP roadmap](https://community.max.gov/display/VAExternal/MVP+Roadmap)
- Link to Objectives & Key Results: [MVP key results](https://community.max.gov/display/VAExternal/MVP+Key+Results), [MVP success metrics](https://community.max.gov/display/VAExternal/MVP+Success+Metrics)
- Link to Product Guide, if it lives elsewhere




