# Initiative Brief for adding PDF and TXT to Continuity of Care Document, adding Release of Information request language to MHV
#### Overview
- Product: MHV Medical Records
- Feature: Add PDF and TXT download to Continuity of Care Document (CCD) and Release of Information request info to MHV
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
Veterans will be able to download a PDF or a TXT file of their Continuity of Care Document, and in the meantime, will have information providing guidance on requesting Release of Information.

**Related/Associated product(s)**
- Product | [Link to product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md)

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* The ability to download TXT and PDF of the Continuity of Care Document was deprecated when Medical Records was rebuilt on VA.gov.  This was done intentionally, as a way to help Veterans distinguish between CCD and Blue Button reports.  We had heard in interviews with Veterans that many of them did not understand the difference, so we made a distinction that CCD was an XML file for health providers to upload into their own health systems, and Blue Button was a human-readable record that the Veteran could save or print.
*
* We recently learned that there are some elements of the patient health record in CCD that are NOT included in the Blue Button report, and some Veterans have contacted support folks in the field to ask how to access that information
* We've received reports from My HealtheVet coordinators that Veterans are looking for this information.  We've also had some comments in surveys about it.
* While this feature is being added, we will also provide language to help them submit a Release of Information (ROI) request.
* How does this initiative help further OCTO-DE's mission and goals?
   - It makes it easier for Veterans to use their benefits.


## Desired User Outcomes
- *Why would a user want to use this?*  They would use this to get access to the health data that is not part of the Blue Button report, nor available on VA.gov
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*  Download an accessible, human-readable TXT or PDF of their Continuity of Care Document.

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- Because it ensures that we comply with legistation that we must make users' health data available.
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
- They won't have to field as many support calls and emails related to this data
- They won't have to provide this data as often in response to a Release of Information request

## Undesired Business Outcomes
- None known at this time

## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
   - Baseline TBD
   - Fewer Veterans will need to contact support to ask about the data they are looking for.
   - We will see users start to download TXT and PDF files of their Continuity of Care document instead of/in addition to XML
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Not a known risk; this was available before, and Veterans have requested it.
    
- **Usability Risks** (can people figure out how to use it):
  - Not a known risk; we will follow an established pattern for print and download options that Veterans have successfully been using on MHV on VA.gov for over two years.
    
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The CCD format may present challenges for generating an accessible PDF
  - The CCD format may present challenges generating a PDF that can be formatted in a user-friendly, intuitive fashion
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - These changes will need to be communicated to field support staff

### Supporting research

  - *If this work is **not supported by existing user research**, will this work include user research?*
      - This work will not include user research
    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*
       - We are following a well-established pattern used for other domains in the Medical Records application, and we are restoring a feature that was available on My HealtheVet Classic, which has been explicitly requested by Veterans.

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
  -  We are adding the ability to generate a TXT or PDF file of the Continuity of Care Document.  We are also adding content that explains how a Veteran can submit a Release of Information request so they have another option until this functionality is added.
> *What have you explicitly decided to **not** include and why?*
  - Anything apart from generating TXT or PDF and providing information on how to request Release of Information.
> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*

> *How does this solution address your Assumptions & Risks?*

#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*

> *Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
