# VSignals

## Implementation of VEO’s VSignals platform on VA.gov

VSignals is the Veteran Experience Office’s (VEO) listening platform. Their office collects data across 35+ surveys in print and email formats to measure various touchpoints along the Veteran journey for both heath care and benefits. They are now looking to expand to measurement of VA’s digital touchpoints. VEO is asking Digital Service to:
1. Implement their digital CX tool (Medallia) on va.gov
2. Meet their Agency Priority Goal for OMB Cir No. A-11 to report on CX scores including "trust"
2. Provide guidance and best practices for how to measure Veteran’s digital experiences
3. Provide feedback on the implementation and recommendations for scaling Medallia to other digital properties

In addition to these asks, VA organizationally would like to use Medallia to replace the existing ForeSee survey tool. To retire ForeSee, the Medallia implementation must:
1. Collect anonymized demographic data on the digital user population
2. Measure overall satisfaction for each major web properties
3. Provide VHA, VBA, NCA, and VACO program teams with the ability to add custom question relevant to their individual program goals

DSVA ran a pilot of Medallia on vets.gov in September/October 2018. The pilot used a now retired instance of Medallia and had several key limitations. Previously, VA’s instance of Medallia was a custom implementation with only a fraction of the functionality of the COTS product, which all had to be developed and configured on VA’s instance. This limitation has been removed after Medallia created a Government instance of their product with feature parity to the private sector. 

## Relevant features of Medallia:

- Behavioral intercept survey: create custom in-page triggers to pop-up the survey
- Always On survey: persistant feedback card
- Survey targeting: Can use behavioral triggers, urls, or GA integration data to segment users/products/interactions
- Unlimited use: VA’s enterprise license allows for unlimited instances of surveys
- PRA support: VEO will support the PRA approval process for all surveys and question modifications
- Reporting/dashboards: robust reporting and display options, email notifications, triage capability, slack integration
- CX reach back: access to Medallia team for private sector integration patterns

## Our perspective
Regarless of the tool, we value our user's perspective and want to measure their experiences on VA.gov. Specifically, we want to know the following for our all of informational content and benefit tools:
- Can they find what they are looking for?
- Are they able to accomplish their tasks?
- Are they satisfied with their experience?
- Are they confident in the accuracy of information on the site?
- Do they trust the security of the site and the safety of their data?
- Do they understand the process and have clear expectations for next steps?

Customer feedback collection has additional capabilities that we should explore including using the intercept survey to find targeted users for user research sessions (users who visited page X) and routing user concerns to the appropriate team for service recovery. Both of these capabilites may be long-term objectvies due to sensitivity around open-ended questions and collecting users contact information in connection to their response.

## Division of responsibilities

The VFS Platform team’s Insights and Analytics group will support the implementation of Medallia on VA.gov and will be administrators for the portal, providing analytics data and support to teams attempting to create/edit/implement surveys. VSP will be responsible for applying standards set by the Apps team across non-VSA teams. They will also be repsonsible for working with Medallia/Vsignals for PRA approvals.

The VFS Apps team will be responsible for developing customer satisfaction data collection best practices. They will determine the various way VA.gov collects user data and establish standardized collection/reporting formats. VSA team will create the first version of each survey to be used across va.gov, including by other teams working on the platform.

The primary point of contact is for VSignals is Henna Grover, the OI&T Program Manager. DSVA has received assurance from VEO that this integration will be fully supported and any blockers or unnecessary bureaucratic steps will be eliminated. DSVA has requested to work directly with Medallia’s engineering team to implement this tool.

To meet the organizational needs defined above, additional discussions with the various ForeSee stakeholders will need to be coordinated. ForeSee contracts are on varying timelines across the business.

## Timeline:

- Discovery starts December 2019
- VA.gov integration and measurement definition January-February 2020

## People
- Hena Grover <Henna.Grover@va.gov>
- Lee Becker, Chief of Staff, VEO - Primary business stakeholder for this implementation
- Anil Becker, Analytics team, VEO - Responsible for VSignals as a platform
- Josh Tuscher, OPIA - Owns the current ForeSee contract
- Chip Harmon, MHV - Responsible for customer satisfaction on MHV
- Jenny Heiland-Ludetke, VHA Digital Media - Responsible for cusomer satisfaction on medical center sites
- VBA Comms - benefits.va.gov customer sat
- ??? - VAntage point blog customer sat


## OMB A-11 CX Drivers

VA will improve the Veteran’s experience with www.va.gov measured by the Office of Management and Budget's seven Customer Experience drivers. By September 30, 2021, Veterans’ seven CX drivers* scores related to their experience with www.va.gov will be 90% or higher compared to an FY 2020 baseline.

**OMB’s 7 CX drivers:**
1. Satisfaction, 
2. Confidence/Trust
3. Quality 
4. Ease/Simplicity, 
5. Efficiency/Speed
6. Equity/Transparency
7. Employee Helpfulness

