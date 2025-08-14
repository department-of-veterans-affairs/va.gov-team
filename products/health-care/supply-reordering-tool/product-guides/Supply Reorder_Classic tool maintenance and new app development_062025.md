# Supply Reorder Overview  
_Classic tool maintenance and new app development_  
**Product Overview / MHV on [VA.gov](https://va.gov)**  

---

## I. Background & Context  

The Supply Reorder tool on [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home), available through [VA.gov](https://va.gov), helps Veterans request essential medical supplies online like hearing aid batteries and CPAP accessories through a secure online process. Previously managed under the Benefits Portfolio, the tool moved to Health in 2023 to support expanded functionality and align with broader efforts to bring more Veteran health tools together in one place.

Supplies were once ordered by phone or mail through the Denver Logistics Center (DLC), which still fulfills and ships orders today. The tool connects to the Remote Order Entry System (ROES), VA’s ordering system for medical supplies, to display past orders and show what supplies Veterans are eligible to reorder.

The current version (Classic Supply Reorder) is live now and supports online reordering for hearing aid and CPAP supplies. While the tool gives Veterans a convenient option to reorder eligible items, it was built on an older system and only supports a limited set of supplies for now.

The Cartography team is responsible for keeping the Classic tool running smoothly while development of the new, redesigned version is underway. This includes fixing any issues, making small updates as needed, and supporting the tool until the new experience is ready to launch.

The redesigned tool will offer improved usability, clearer information about supply eligibility, and is being built to eventually support reordering additional supplies like nebulizers, TENS units, and blood pressure monitors.

Veterans will be able to reorder supplies more easily, understand what they are eligible for, track past orders, and know where to go for help if they need assistance. Testing with Veterans is expected to begin after the new ROES system migration, which is currently underway.

---

## II. Key Stakeholders & Roles  

**OCTO**  
- Health: [Lauren Alexanderson](mailto:lauren.alexanderson@va.gov)  
- Health Care Products: [Patrick Bateman](mailto:patrick.bateman@va.gov)  
- Product Lead for Cartography Team: [Marci McGuire](mailto:marci.mcguire@va.gov)  

**Additional VA Team**  
- Design and Research Lead: [Kristen McConnell](mailto:kristen.mcconnell@va.gov)  
- Information Architecture Lead: [Mikki Northuis](mailto:michelle.northuis@va.gov)  
- Health Measurement and Data Design Lead: [Robyn Singleton](mailto:robyn.singleton@va.gov)  
- Engineer: [Adrian Rollet](mailto:adrian.rollett@va.gov)  

**MHV Cartography Team**  
- Product Manager: [Michael Brodsky](mailto:michael.brodsky@va.gov)  
- Delivery Manager: [Mark Carter](mailto:mark.carter@agile6.com)  
- Information Architect: [Sara Sterkenburg](mailto:sara.sterkenberg@va.gov)  
- UX Design and Research: [Florence McCafferty](mailto:florence.mccafferty@agile6.com), [Jonathan Nelson](mailto:jonathan.nelson@adhocteam.us), [Athena Bozak](mailto:athena.bozak@va.gov)  
- Engineering: [Richard Davis](mailto:richard.davis@agile6.com), [Daniel Cloud](mailto:daniel.cloud@adhocteam.us), [Ni Chia](mailto:ni.chia@adhocteam.us), [Kevin Suarez](mailto:kevin.suarez1@va.gov)  

---

## III. Product Summary  

### Classic Supply Reorder (currently in production)  
The Classic Supply Reorder tool, available through [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home) on [VA.gov](https://va.gov), lets eligible Veterans reorder hearing aid and CPAP supplies online. Veterans can request items like batteries, domes, filters, tubing, and masks. This online option gives Veterans another easy way to manage their medical supplies, along with existing phone and mail ordering.

The tool displays only the supplies Veterans are eligible to reorder based on their device history and previous orders. This eligibility logic is powered by data from the Remote Order Entry System (ROES), VA’s ordering system for medical supplies, helping reduce confusion and improve order accuracy.

The Cartography team is responsible for maintaining the Classic tool until the new version is ready. This includes bug fixes, minor content or design updates, and coordinating with stakeholders to support the tool's stability in production.

### New Supply Reorder App (in development)  
The redesigned Supply Reorder tool will have a modern, accessible design that follows [VA.gov’s design standards](https://design.va.gov/). It will be easier to use, work well on mobile devices, and have a simpler ordering process with clearer steps and layout.

Along with improving the experience for reordering hearing aid and CPAP supplies, the new tool is being built to eventually allow Veterans to reorder other items like nebulizers, TENS units, and blood pressure monitors.

The new design aims to make the tool more reliable and easier to use. It will help Veterans reorder supplies, understand what they are eligible for, track past orders, and know where to go for help if needed. Testing in staging and, eventually, in production with real users is expected to begin after the current ROES system migration is complete.

### Architecture Overview  
- The ROES/DLC API is the system-of-record/source-of-truth for the Supply Reordering application at [va.gov/health-care/order-hearing-aid-or-cpap-supplies-form](https://va.gov/health-care/order-hearing-aid-or-cpap-supplies-form).  
- Vets-api surfaces the ROES/DLC API endpoints to the Vets-website UI.  
- Technical documentation on the ROES/DLC API (TBD - link placeholder)  

**Upstream Service Map & Contacts List:**  
- The upstream map in this case is: `vets-api -> roes/dlc api`  
- [Vets-api, ROES/DLC API diagram](#) (placeholder)  
- Slack channels:  
  - [#vagov-supply-reordering](https://dsva.slack.com/archives/C02V59DJP6Z)  
  - [#va-cto-vagov-supply-reordering-alerts](https://dsva.slack.com/archives/C03PE85TJB7)  

---

## IV. Solution Artifacts  

**Epic**  
- [Classic Supply Reordering App Maintenance](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95836)  

**Code Repositories**  
- [vets-website (front-end – VA Form App)](https://github.com/department-of-veterans-affairs/vets-website)  
- [vets-api (back-end – relevant API paths and code)](https://github.com/department-of-veterans-affairs/vets-api)  
  - `GET /v0/in_progress_forms/mdot` – authenticate w/ ROES/DLC, retrieve available supplies  
  - `POST /v0/mdot/supplies` – create an order for supplies  
  - `/lib/mdot/client.rb` – handles communication with the upstream system  

**Design Files**  
- New Supply Reorder:  
  - [Mobile prototype](#) (placeholder)  
- Classic Supply Reorder:  
  - [Desktop user flows](#) (placeholder)  
  - [Desktop intro page redesign](#) (placeholder)  

**Research Folders**  
- New Supply Reorder:  
  - [Research Folder](#) (placeholder)  
- Classic Supply Reorder:  
  - [Classic medical device tool research folder](#) (placeholder)  

**Release Plan**  
- [Supply Reorder Release Plan](#) (placeholder)  

---

## V. Future Recommendations  

As we keep working on the new Supply Reorder tool, here are a few suggestions that could help improve it and make sure Veterans have an easy, clear experience:

- **Document and address integration issues with ROES and DLC**  
  Continue to work with ROES and DLC to document and address bugs with the integration as surfaced by application metrics and alerts. For example, this includes orders that time out without a response, orders that have an order ID of zero, and other anomalous responses.

- **Keep information about supply eligibility up to date**  
  We recommend reviewing and updating content that explains which supplies can be ordered online through the tool and which supplies must still be ordered through the DLC. This includes reflecting recent updates to prosthetic ordering and making sure Veterans understand where to go for different types of supplies.

- **Ensure DLC phone number is accurate across the new experience**  
  As the DLC customer service number has recently changed, it’s important to double check that the new phone number is updated across all pages of the new tool, including help content and contact information.

- **Expand the types of supplies Veterans can reorder**  
  The new tool is being built to eventually support more items, like nebulizers, TENS units, and blood pressure monitors. Once the new tool is stable and Veterans are comfortable using it, we recommend adding these items in phases.

- **Continue testing with Supply Reorder users after launch**  
  Once the new tool is live, we should keep doing usability testing to make sure Veterans can easily reorder supplies, understand what they are eligible for, and find what they need. Testing should include Veterans of all ages and those with different levels of comfort using technology.
