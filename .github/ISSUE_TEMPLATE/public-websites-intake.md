---
name: Public Websites Intake Form
about: To file requests with the VSA Public Websites team (including content and engineering support)
title: <Type of Request> from <Team>
labels: vsa-public-websites, vsa, vsa-public-websites-intake, sitewide-content, needs-grooming, Epic
assignees: @RLHecht, @brianalloyd
---

## Why you're here 

### Content support for:
- Unauthenticated (static) VA.gov pages
- Apps or tools
- Other writing or editing requests

### Engineering support for:
- Redirects that have **first been vetted by the VSP IA team**
- REACT sign-in widgets or feature flags (flipper)
- Other engineering support

**Note:** Apps teams engineers are responsible for flipper implementation related to their products. Our engineers can provide consultation as needed. [Read feature toggle documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/)

## How to submit your request

- [ ] Complete each area of this intake form that applies to your team's needs. Provide as much detail as you can so we can fully understand your request.
- [ ] Post a link to this issue in [#vsa-public-websites](https://dsva.slack.com/channels/vsa-public-websites) in Slack, tag @RLHecht and @brianalloyd. If your request includes engineering support, also tag @ncksllvn and @kelsonic.
- [ ] If noted in the guidance below, please schedule any relevant meetings.

### When to submit your request

#### Content requests

|Type of need | When to submit your request |
| :-- | :-- |
| **New unauthenticated VA.gov page (such as a static landing page to support a new app/tool)** | At project kickoff |
| **Updates to an existing unauthenticated VA.gov page** | For significant updates (like consolidating pages or reworking page content): At project kickoff <br> For smaller updates (like adding a section of new info): At least 1 full sprint in advance (so we can work it into our next sprint). |
| **Writing support for app/tool** | At project kickoff | 
| **Editing support for app/tool or other writing/editing support** | For multiple screens: At least 1 full sprint in advance (so we can work it into our next sprint). <br> For very small needs (like an error message): At least 2 days in advance | 

### Engineering requests

Please submit all engineering requests **at least 1 full sprint in advance** (so we can work it into our next sprint).

---

## About your app/tool/functionality

* **Is this request related to a VA.gov tool? If yes, provide a brief description of the tool or functionality:**  
   * < description > 
* **Provide links to any available collateral: product briefs/outlines, wireframes, prototypes, user research synthesis:** 
   * < links to collateral >

---

## About your support needs
*Please select all that apply, and follow related guidance.* 

### Content
     
- [ ] **New unauthenticated VA.gov page**
   * **Additional info.** Please provide any details not covered above about what app/tool/other need this new page will support. 
      * < URL list >
   * **Schedule a meeting.** Please schedule a meeting with @RLHecht and @brianalloyd to kick off this work. We'll work with your team and the VSP IA resource to determine how best to accommodate this new page.  

- [ ] **Updates to an existing unauthenticated VA.gov page**
   * **What URL(s) do we need to review or update?** 
      * < URL list >
   * **Are updates for a small section of copy?** If yes, please tell us what new info we need to consider and what (if anything) it's replacing.
      * < list of new info >
   * **Are updates related to usability testing or analytics?** If yes, please provide details.**
       * < list of new info >

- [ ] **Writing support for new app/tool** 
   * **Additional info.** Please provide any details not covered above about what app/tool/other need this new page will support. 
      * < URL list >
   * **Schedule a meeting.** Please schedule a meeting with @RLHecht and @brianalloyd to kick off this work. We'll work with your team and the VSP content resource to determine how best to support your needs.   

- [ ] **Editing support for app/tool** <br> <br> **Note:** We'll work with your team and the VSP content resource to determine how best to support your needs.
   * URL where draft content appears (if available) <br>    
     - < link > 
   * **Word document with draft content** (if needed) <br> **Note:** If you have more than 2 paragraphs of text to edit, please provide text in a Word doc.     
     - < link >      
   * **Design context** <br> **Example:** Is this content in a user flow, an in-line error message, tool tip, field label?
     - < design context >
   * **Scope: How many screens or messages?** 
     - < scope >            

### Frontend engineering support 

- [ ] **New URL or redirect requests**
   * **Have you vetted this request by the VSP IA team?:** 
     - < y/n. if not, submit URL and redirect requests first to @ Mikki Northuis on VSP IA.)
   * **Link to VSP IA redirect request ticket:** 
     - < Github issue link >
   
- [ ] **Implementation of REACT sign-in widgets**
   * **Full spec including different states and behaviors:** 
     - < link to spec >
   * **Flipper unique id:** 
     - < unique id >
     
 - [ ] **Support for UAT testing or phased roll out of app/tool landing page**
    * **Full spec including different states and behaviors:** 
      - < link to spec >
    * **Flipper unique id:** 
      - < unique id >

**Note:** Apps teams engineers are responsible for flipper implementation related to their products. Our engineers can provide consultation as needed. [Read feature toggle documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/)

- [ ] **Other**
   * Please describe in detail
      

### Desired/target implementation date

What's the ETA for the app/tool launch or the date when you need this request completed? Our team's capacity will determine which sprint the work falls into.

* <Desired/target implementation date>

**Note:** As a best practice, PW does not release new products over weekends or holidays. Please plan accordingly. 

---

### About your team

- Team name: *enter name*
- DEPO product owner: *enter name*
- Product manager: *enter name*
- Designer: *enter name*
- FE engineer: *enter name*
- Product/team Slack channel: *enter*

--- 
### Public Websites internal use

#### Acceptance Criteria
- [ ] Convert this request into a Zenhub epic
- [ ] Follow-up with requestor to address any lingering questions/concerns
- [ ] Create epic/tickets as needed for the Public Websites team to implement

#### Definition of Done
* Request ticket is closed and implementation tickets created as needed
