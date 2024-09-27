# OGC Contact Information Updates Product Brief

## Problem Statement

Keeping accredited representative information updated is a time-consuming task involving several pain points:

* Accredited representatives need to change their contact information in both the OGC database (GCLAWS) and the VBA database (CorpDB). This requires several emails to multiple parties. If not done properly, it can result in public-facing tools with representative information ([Find a Rep](https://www.va.gov/get-help-from-accredited-representative/find-rep/) and the [VA Accreditation Search](https://www.va.gov/ogc/apps/accreditation/index.asp)) being out of sync. See the [Process for Accredited Attorney and Claims Agent Contact Change Requests factsheet](https://www.va.gov/OGC/docs/Accred/FactSheet_OBI-21-03.pdf) for specific instructions provided to accredited attorneys and claim agents. 
* When an attorney, claims agent, accredited representative, or a certifying official submits a request to update contact information in the OGC database, these requests enter a manual workflow that requires an OGC staff member to review and route this request in order for the update to the database to take place. This process is time consuming for both the submitting party and for OGC staff. 
* The process of updating the information is not immediate. Once the manual change is made by OGC, it can take up to an additional 72 hours to be reflected in the OGC database and associated tool, the VA Accreditation Search. Once the change is made from VBA, it can take up to 14 days to be reflected in the database and associated tool, Find a Rep.
* There is a lack of transparency with a standard operating procedure for VSO representatives updating their contact information. Some VSO representatives are unaware that they must go through a certifying official to update their contact information.
* Some accredited representatives note that their public-facing information on the [Find a Rep](https://www.va.gov/get-help-from-accredited-representative/find-rep/) tool is outdated or incorrect. (For example, one participant in a research study struggled to find themselves with the tool because their address was 11 years out of date. Three participants could not find themselves because all representatives at their organization are listed under the same address. Read more in the [March 2024 Single Accredited VSO Officer research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-03%20Single%20Accredited%20Testing/research-report.md#vsor-find-a-representative-feedback-was-mixed).) 

# Objective

This project asks:
* How might we reduce inaccurate accredited representative contact information displayed to Veterans online? 
* How might we simplify the process of updating contact information for claims agents, attorneys, VSO representatives, and certifying officials?
* How might we reduce the amount of time it takes for OGC staff to process any contact information requests that require verification?
* How might we keep GCLAWS and CorpDB in sync?

# Solution

We believe that **building an interface for attorneys, claim agents, and certifying officials to update their contact information** (or in the case of certifying officials, updating the contact information of their VSO representatives) will reduce the complexity, number of steps, and time currently required to update representative’s information. 

This interface will live in the Accredited Representative Portal (ARP), where we are building additional features for representatives to apply for and maintain their accreditation, accept power of attorney requests from Veterans, and eventually manage claims. Placing the contact update feature within this portal maintains the vision of the portal as a one-stop-shop for accredited representatives. 

What’s in scope:
* Allowing attorneys, claim agents, and certifying officials to update the below contact information:
    * Preferred or previous names
    * Phone numbers
    * Email addresses
    * Physical and/or mailing addresses
    * Mode in which they meet Veterans (in person, remote, or hybrid)

What’s not in scope:
* Submitting recertification and CLE compliance has been accounted for in the [mock ups](https://www.figma.com/design/RbVQnV4eBl2K1Z5xRpZi7H/ARF---Contact-Info-Updating?node-id=325-164087&t=O2N7jRizwVhnXshw-1), but might not be a part of the initial release. 
* Currently, certifying officials are responsible for updating contact information for VSO representatives. It’s possible this could change and we could allow VSO representatives to update their information directly, but this would need to be discussed with OGC.
* Sending messages to VSO representatives and/or certifying officials that a representative’s information has been marked as outdated on the Find a Rep tool. 

# Related Artifacts
* [Current state and future state: OGC updates](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717174574592/c341950387ab12e53dc358182f0c84774e94efb2?sender=u2a4240a640b257ce33545495) (Mural)
* [Accredited Representative contact info updates](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717433860326/129030147cf419fe9f5deb7004c0fb0a1a4e2350?sender=u2a4240a640b257ce33545495) (Mural)
* [August 2024 Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-07%20OGC%20Contact%20Information%20Updates) (Github) - Discovery to learn more about the user types that would access this feature within ARP, and usability tests to determine the requirements for email address, address, and permissions for VSO representatives and certifying officials.
* Personas 
    * [Accredited Claims Agent](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718731869465/cf73b89eddb92c604d292554a31e503f7ce5d982?sender=u2a4240a640b257ce33545495) (Mural)
    * [Accredited Attorney](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717533456497/60064424f651818203ff49ac43d6fb9f0f2bccac?sender=u2a4240a640b257ce33545495) (Mural)
* [Mockups](https://www.figma.com/design/RbVQnV4eBl2K1Z5xRpZi7H/ARF---Contact-Info-Updating?node-id=0-1&t=O2N7jRizwVhnXshw-1) (Figma)
* [Proposed future research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/Future%20-%20Certifying%20Officials) (Github) - To gain more insights about the certifying official user type (which can be used to craft a persona) and test September 2024 updates to the mockups.  

# Outcomes 

## Desired Outcomes

* For OGC staff:
    * Reduce the amount of time and manual steps that an OGC staff member spends on an incoming contact information update request.
    * Reduce the amount of time it takes for an approved contact information update request to be reflected in the OGC database. 
* For accredited representatives: 
    * Create a clear and easy-to-use process to update their contact information. 
* For Veterans: 
    * Reduce inaccurate contact information for accredited representatives.

Downstream, all products that utilize this contact information benefit from having more accurate data available, and will result in a more consistent experience for both Veterans and their supporting accredited representatives.

## Undesired Outcomes

* Increasing the amount of time it takes an OGC staff member to support a process for updating contact information in the OGC database. 
* Complicate the information updating process for accredited representatives, or confuse them about the correct way to do so.
* Create additional outdated or conflicting contact accredited representative information for Veterans.

# Measuring Success

Quantitative: 
* Average time it takes to update contact information
* Average time it takes for updated information to reflect on VA’s public-facing tools
* % of successful and failed updates
    * Overall update volume
    * Update total failure error %
    * Update error %
    * Backup path usage
* User form completion behavior
    * Number of sessions to complete update
    * Time to complete update
* Applicant satisfaction (measured by CSAT score) 

Qualitative:
* Feedback from VA OGC employees who process applications about the increased or decreased ease of processing applications
* Feedback from applicants, captured through usability tests

# Assumptions/Risks

Organizational Risks or Assumptions 
* OGC will not desire manual review of contact update requests (which is their current process). Our assumption is that it is a manual process not because OGC wants it to be, but because they do not currently have a more efficient system. 
Usability Risks or Assumptions 
* The product is not sufficiently validated through user testing, resulting in confusing or poor user experiences. At worst, it could lead to the submission of incorrect data. 
* The product is not tested for usability, resulting in a poor or non-functioning experience for assistive technology users.
* Accredited representatives do not adopt ARP and continue to mail their contact update requests to OGC.

Technical Risks or Assumptions
* VA.gov&lt;>OGC Rep User validation
* Successful development of an OGC GCLAWS API

# Launch Planning

## Collaboration Cycle

Because this product is not Veteran-facing, it is not required to attend every step of the standard collaboration cycle process. However, meeting with the Platform team is highly advisable. To date, the ARF team has not initiated a collaboration cycle request for this contact update feature, though we have for several other features that will live within ARP:

* [Form 21-22 collaboration cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75782) (Design Intent took place on February 27, 2024 and Midpoint Review took place on July 8, 2024)
* [Form 21a collaboration cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91879) (Midpoint Review took place September 16, 2024)

## Initiative Launch Dates

* Target Launch Date: TBD. Launch date will need to be coordinated with and is dependent on the GCLAWS development team and OGC stakeholders.
* Actual Launch Date: TBD.
* What date will you evaluate impact after launch (and when do you expect to have your Impact Review)? TBD.

# Communications

## Team

* Team Name: Accredited Representative-Facing Team
* Slack channel: [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW) (active until the close of the period of performance on September 27th, 2024)
* [Github repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing)
* PM: [Mike Marinos](https://dsva.slack.com/team/U06MARP8NM7) (Slack), Product Manager (mike@agile6.com)
* Research/Design: Rebecca Blackiston, Senior UX Researcher; [Danielle Oppendike](https://dsva.slack.com/team/U03UU4EJD0W), Senior Designer (danielle.oppendike@adhocteam.us)

## VA Enablement Team (OCTO)

* [Jen Bertsch](https://dsva.slack.com/team/U05FAUHEQPM) (Slack), Benefits Portfolio Product Owner (Jennifer.Bertsch@va.gov)
* [Lesley Ropp](https://dsva.slack.com/team/U04R9D4EWA2) (Slack), Benefits Portfolio Design Lead (Lesley.Ropp@va.gov)
* [Sam Raudabaugh](https://dsva.slack.com/team/U060A1AR67Q) (Slack), Benefits Portfolio Tech Architect/Engineering Lead (Samuel.Raudabaugh@va.gov)

## Stakeholders

* Nathan Kroes, Staff Attorney, OGC (Nathan.Kroes@va.gov)
* Christa Shriber, Benefits Law Group Deputy Chief Counsel, OGC (Christa.Shriber@va.gov)
* Jonathan Taylor, Attorney, OGC (Jonathan.Taylor2@va.gov)
