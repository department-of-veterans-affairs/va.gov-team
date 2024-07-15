# Initiative Brief: Facility Locator online scheduling 
#### Overview
Online scheduling is available for _some_ Veterans at _some_ VA health facilities for _some_ VA health services. By incorporating online scheduling availability into the displayed facility information, we can make it possible for Veterans to smoothly link to the online scheduling tool (VAOS) from locations in their search results. 

As an unauthenicated experience, the Facility Locator cannot provide the most complete set of services available for online scheduling for a particular Veteran. However, new mandates are making some services (such as primary care and metnal health care) available for online scheduling by all Veterans. 

**Related/Associated product(s)**
- [Facility Locator product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/facility-locator-product-outline.md)
- [EPIC #27454](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27454)

## Problem
* **What is the problem and who is affected? And, what evidence do we have of the problem?** 
    * During research interviews, Veterans express a preference to schedule VA health appointments using online scheduling. 
    * This is supported by the support for the VA online scheduling initiative and by Veteran use of the tool. (According to the VAOS DOMO Dashboard, Veterans initiate an average of 20-25K online scheduling events weekly). 

* **How does this initiative help further OCTO-DE's mission and goals?**
    * OCTO-DE objective: Provide accurate health service information for local facilities 
    * OCTO-DE objective: Help Veterans manage their health services online

### Hypotheses
* We can incorporating online scheduling availability into the displayed facility information in Facility Locator and make it possible for Veterans to smoothly link to the online scheduling tool (VAOS) from locations in their search results _if_
  * we can determine the best source of truth for online scheduling data at a facility and service level 
  * we make the data available to Facility Locator (via Lighthouse, CMS or other process)
  * we identify broadly available services from a business and technical perspective

## Outcomes
### Desired User Outcomes
* Veterans can see which VA health facilities offer online scheduling for the service they searched and smoothly connect to onlilne scheduling from Facility Locator search results. 

### Undesired User Outcomes
* Veterans are sent to the online scheduling tool for services they are unable to schedule online. 

### Desired Business Outcomes
* Enabling online scheduling could also improve facility phone queue volume, improving the experience for Veterans who may be calling with more pressing needs.

### Undesired Business Outcomes
* Unintended negative impacts on VA online scheduling tool.
* Unintended negative impact on provider schedules (caused by Veterans self-scheduling unnecessary appointments)

---
## Current experience

### Facility Locator 
<details>
   <summary> Facility Locator current experience </summary>

![image](https://user-images.githubusercontent.com/55411834/136097453-2b868c09-ad12-4c56-be3b-257f687a184f.png)
   
   </details>

<details>
   <summary> Examples of facility and service specific calls to action on the Facility Locator </summary>
 
   ![image](https://user-images.githubusercontent.com/55411834/136097768-92dc9576-a868-45eb-b6b2-8757d301b8e1.png)
   
   ![image](https://user-images.githubusercontent.com/55411834/136097940-5c6ba86c-d9af-4685-adc7-f01b51ef6e42.png)
   
 </details>
 
 ### VAMC
 <details>
   <summary> Examples of facility and service specific information as displayed on VAMC pages </summary>
 

![image](https://user-images.githubusercontent.com/55411834/136098209-d61f02b7-68ee-4ae4-bcab-427c944b4c94.png)
</details>

## Measuring Success

### Key Performance Indicators (KPIs) (WIP)


|Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) |
|------------|----------|--------|-------------------------------------|

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
    - This value is established by the prioritization and effort already applied to the VA Onling Scheduling tool. 
    - Scheduling completion during the month of September was 54% (exceeding their KPI success rate of 50%). Completion is impacted by the availability of online scheduling for the facility and service the Veteran seeks. We can mitigate this risk in our work by surfacing online scheduling information only for the most broadly available services.

- **Usability Risks** (can people figure out how to use it):
    - The Facility Locator already has the ability to display local specific service information with actionable links in search results. Usage metrics for COVID-19 vaccine services and benefit pages for community urgent care and emergency care do not demonstrate any concerns about usability. 
    - Usability can be maximized by determining the best url for connecting between Facility Locator and VAOS and communicating facility and service information so it can be prepopulated  in scheduling system on Veteran's behalf. 
    - Any other usability challenges should have already been recognized and/or mitigated by the team for the VA Online Scheduling tool. 
    
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - Identification of which services are broadly available 
    - Identifying best system to use as single source of truth

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*


### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*



#### Initiative Launch Dates
NA - discovery only

- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
VHA leadership

### Teams
VSA Facilities
Lighthouse
CMS

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
