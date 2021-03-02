# Digital Health Modernization TL; DR
- This team exists to provide a product strategy and roadmap for how veterans may manage their care on va.gov.
- We are currently doing user research to inform a strategy — roadmap comes later.
- Our product vision derives from the [Digital Modernization Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf): to provide a "single, high-quality digital version of every health product or tool... in one place, on VA.gov."

## What We're Doing
- ~~Interview 23 veterans to understand digital health experiences~~
- ~~Now: [Research synthesis]~~(https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1607438166231/034610fe4b845af0212aedcd5868db72e8ee48c8)
- Now: Build out a team charter
- ~~Now: [Rough draft of product strategies for feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/README.md)~~
- ~~Jan 11 2021: Share research findings~~
- Jan 22 2021: Formalize draft strategy and performance metrics
- Q1-2 2021: Ship [earliest testable product](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp)

## Draft high-level strategy
- Define "digital health modernization" as transitioning veteran-facing health tools toward rapid discoverability of key actions assuming the user skims, away from detailed explanations and walkthroughs assuming the user reads
- See Strategy A in [draft strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/README.md) for details

## Team
### Current
- Emily Mann - user research
- Meg Peters - information architecture
- Aryeh Jacobsohn - product strategy
- Lauren Alexanderson - sponsor

### Needs
- Software engineer to identify challenges and opportunities tying together myhealthevet, Cerner, va.gov and various health products (ex., secure messaging) intended to work as shared services
- UX designer to co-pilot user research and lead UX and IA changes related to consolidating and improving disparate health tools

## Appendix (not actively maintained)
The Digital Modernization Strategy (2017) sets forth a vision where Veterans can go to one place- VA.gov - to access all of their benefits. Each of these benefits should have a single, high quality digital version, designed with direct input from users, and with a consistent look and feel.

**Phase I: November 2018 Brand consolidation**:
With respect to health products, phase 1 of this vision was achieved with the relaunch of VA.gov in November 2018. Several different versions of health products (secure messaging, blue button, and prescription refill) existed on both My HealtheVet (the legacy patient portal) and Vets.gov. With the brand consolidation of Vets.gov and VA.gov, the Vets.gov versions of products were retired because MHV product teams had made UI improvements and additional enhancements beyond the products on Vets.gov, and MHV was a well-known and well-liked patient portal for Veterans. A decision was made to use MHV's versions instead, and link to them from VA.gov.

**New challenges as a result of Cerner, EHRM, Mission Act**:
VA's electronic health record transition to Cerner, and the Veteran-facing implementation of the Mission Act, offer opportunities and challenges around the digital modernization vision. Cerner is scheduled to roll out its new portal over 5-10 years, meaning that in the interim, Veterans will once again need to use multiple tools on multiple portals to accomplish their health tasks and find their health data. Further challenging this idea of a unified space to accomplish all health tasks is Mission Act/Community Care, through which a Veteran can get some urgent, primary, and specialty care from a private facility (through referral, drive-time eligibility, wait time eligibility, or other special situations). Community care is introducing new user experience and service design challenges around record sharing, VA's formulary and prescriptions, billing, patient records, and more. Additionally, Veterans may have multiple additional places where they need to look to find their health records, prescriptions, and other data. This fractured experience is, at best, frustrating and confusing, and at worst, introduces patient safety issues.

### What is the VA.gov Engaged Patient Experience Vision?
This vision delineated in this repo is an effort to recenter around the north-star goals set out in digital modernization strategy - a single, high-quality digital version of every health product or tool, plus the ability for a Veteran to see all of their VA benefits - health, disabililty, education, and other - in one place, on VA.gov. It is meant to bring a swift end to forcing Veterans to know where their health data lives in order to schedule an appointment, view their records, send a message, etc. It is also meant to augment the standard patient portal applications (either in Cerner's My VA Health or MHV) by  making it more efficient for Veterans to get the right kind of care and to be able to manage their care. Finally, it is meant to help VA both stay up to speed with, and in some cases, drive the conversation around patient experience in healthcare in the US. The pillars of this strategy are covered below.

- **Single source of truth**: VA.gov is and will continue to be the front door for all Veterans who need to access and use their VA health tools online. It will be the SINGLE SOURCE OF TRUTH for a Veterans' health information. It will be the ACTION CENTER from which Veterans can complete their health tasks. This vision is highly reliant on APIs (from Cerner, VistA, VA's Mobile Framework, and community care networks) to succeed.

- **Get Care** - A unified patient portal within the VA.gov experience can be a space to help Veterans triage their health issues and _access the right level of care when and where it is both most convenient and most effective._ Veterans tend to schedule appointments for all health issues, but some of these issues may be more quickly or efficiently resolved with a lighter touch or more convenient type of appointment. Some health issues are well suited to being resolved via secure message, chat, phone call, or telehealth, while others legitimately need an in-person appointment, either at VA or through a community care provider. Veterans need help at critical user decision junctures to identify and take advantage of different opportunities that VA offers to "get care."

- **Manage Care** - The concept of managing your health care extends beyond the basic applications (scheduling appointments, secure messaging, refilling prescriptions, and viewing your data). An expanded vision might include enabling Veterans to register and use health devices and applications; access, share, learn from their health data; discover how to apply their health data to improve their health behaviors etc. There are opportunities to leverage VA's mobile apps portfolio, Apple Health, prescriptive analytics (e.g. Jvion), and behavioral nudges to deliver this information to Veterans in an effective and personalized way.

### Business stakeholders -
- CTO's office
- VHA
- Office of Connected Care
- Office of Community Care

### Business Goals
- VHA/OCC want Veterans to have a single front door for their health care experience: VA.gov.
- VHA/OCC want to triage how Veterans get appointments (moving more Veterans from in-person to telehealth, chat, or phone call as appropriate)
- VHA/OCC want to improve Veteran engagement with their health care by prompting use of mobile apps and other tools.
- Office of Community Care wants Veterans to tap into community care when appropriate; knowing your eligibility will help.
- DEPO/CTO's office want Veterans to have a single source of truth for all of the health benefit information, regardless of its source (Cerner, VistA, Comm Care)

How does this map to our North Star?
It IS our North Star.

How will we measure success?
- Engagement with tools, improved health outcomes, ratio of appts in person to other methods, Contact Center data, etc.
