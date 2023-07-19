## Product Outline: Multi-language Content Translations via CMS
Created 14 July 2023

This README page serves as a "front door" to documentation and resources pertaining to the proof of concept (POC) for CMS translations. 

## Product Rationale, Needs:
We are required to support translations of VA.gov Home | Veterans Affairs  CMS content into other languages. This MVP contains all work needed to get the CMS to support translation into Spanish and Filipino, our first two target languages. It includes:

- Setting up languages in the CMS

- Setting up various entities (nodes, paragraphs, taxonomies) to be translatable, in order to meet the needs of our first translation use cases through the Benefits Hub.

- Setting up Translation Management

- Setting up roles and permissions relating to translation viewing, editing, and management

- Specifying and documenting all the operations required to take a piece of source content from English to fully translated into other languages.

## Hypothesis:
HMW support the large % of non-english speaking/reading/writing veteran VA.gov Home users who deserve the same equitable opportunity to digest the VA.gov content?

## Strategic Implementation:
Q1 2023 priority only includes enabling the ability in the CMS to do multilingual content management to support Spanish as Tagalog in the Benefits Hubs and creating user roles for the translation manager. Q2 2023 will focus on working with the Sitewide Content + IA team to walk through the process of supporting translated content in those benefit hubs. We should be prepared to do this work for the Q2 initiative in a demo environment. The demo environment will allow us a low-risk opportunity to confirm this works for the need. 

As of May 2023, the Sitewide Content + IA team received a demo from the CMS team. See below for information. Also [here.](https://vfs.atlassian.net/wiki/spaces/PCMS/pages/2704179403/Product+Outline+Multi-language+Content+Translations+via+CMS)

**Demo information:**

- [Slack convo](https://dsva.slack.com/archives/CT4GZBM8F/p1684429923892849)

- [Demo Recording link](https://us06web.zoom.us/rec/share/Vourf_F3zjSrN2cX-9LryL7AXHy5q85L_LDVdexmdHdAQrpMPmVah79CeQ5OVro.KFyIWHIxZhsE5F3i%20%20Passcode:%20f&XjvK8u) | PW: f&XjvK8u

 
*FUTURE WORK*: After the CMS foundation is built, we will then proceed with the FE support of this work. Most likely, the FE piece of this will be handed off to the Public Websites team for discovery and implementation.


## Decision, Important Points:
One of the key support structure of this work, will be outside of the CMS. While the CMS will act as it normally does as the content owner/publisher, in that role it will only act as within an export and import fashion within the translations process. This async process looks like this at the highest of levels:

- CMS content module export → 

- Sitewide Content + IA leadership send to DoD → 

- DoD internally processes translations → 

- DoD returns to Sitewide Content + IA → 

- Sitewide Content + IA leadership imports into CMS content module → 

- Publish controls as normal

Of these steps, the MVP work that has been completed relates to #1 and #5. It’s expected that #3 is going to take a high amount of weeks – and of this point (nearly two months after demo), we have yet to hear back on this. Another important note: UX was foregone on this work as the Sitewide Content + IA leadership will be the only users of this (e.g. 2-3 folks). 

## Measuring Success:
This was a proof of concept (POC), and insomuch the measurement of success is really DOES THIS WORKFLOW WORK? As that is proven and/or adjusts made until it does, more quantifiable metrics could be included on this. 

## UX Research Artifacts:
N/a. Due to the limited users interacting with this, there has not been a focused UX effort spent on this.

## UX Design Artifacts:
N/a. Due to the limited users interacting with this, there has not been a focused UX effort spent on this.

## Support & Helpdesk:
N/a. Due to the limited users interacting with this, there has not been a focused support effort on this – including no current Knowledge-based (KB) articles created to date. However, if volumes grow to such a point that additional editors are needed to support the SWCAIA team, then both training and KBAs would definitely be needed.

## Contacts:
Product Owner: Erika Washburn (OCTO-DE)

Product Manager: Mike Hollen (Friends From The City)

Delivery Manager: Berni Xiong (Agile 6)

Engineering: Edmund Dunn (Agile 6)

## Relevant Backlog:
[SE: Multilingual Content Management #12604](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12604)

[[Next Iteration] Multilingual Content Management #13616](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13616)
