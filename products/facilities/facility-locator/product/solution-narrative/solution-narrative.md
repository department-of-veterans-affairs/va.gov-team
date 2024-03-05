# Facility Locator: Solution Narrative

Please see also [Legacy Solution Narrative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/archive/legacy-solution-narrative.md) for historical decisions that might be relevant. 

## Technical Decisions
**Mapbox**
- November 6, 2019: Per Nancy Smith (Oddball), We have been switched to the annual license version of Mapbox and have paid for an entire year, effective October 1, approved by DSVA. 

## Product Decisions
**Facility Locator is considered part of the unauthenicated experience.**
- Questions for our North Star discussion
  - If a Veteran has logged in, is the search for a facility different? If so, how?
  **Andy:** (Oct. 1, 2019) We are building an unauthenticated product. We have no immediate plans to "change" the product, or the way it works, when a user is signed in. However, we will more deeply integrate the Facility Locator into the global navigation and authenticated user experience, the latter of which may include user customization of the tool while signed in.
  - Where does the integration of benefits tie in?   
  **Andy:** (Oct. 1, 2019) We will be designed new structed content for the Facility Locator that (1.) surfaces basic benefits eligibility information and (2.) drives users to the benefit hubs.
  
**User Personas** 
  - Does it make sense to indicate what type of user is looking for a Facility?
  **Andy:** (in Slack Oct. 16, 2019) Previously VA.gov used persona links (Veteran, Caregiver, etc) take you to persona pages, which linked out to content. The decision was made to NOT build the new VA.gov’s info. architecture based on personas. Veterans are our default users. We know family members and caregivers put themselves in the shoes of Veterans when navigating VA.

**SEO strategy**
   - Please see Github issue [#2776](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2776)
   - Facilities themselves should be optimized for SEO, not the Facility Locator (May 18, 2020)
   
**Parity**
- The stated goal of "reaching parity" = data source parity, not content parity. (October 15, 2019)

**VA Health**
- Facility Detail pages for VA Health live on their own websites, not within Facility Locator. 

**Data Quality**
- November 13, 2019: The Facility Locator will display the data that is sent via the API, rather than interpreting or translating it. The data owners will be responsible for the data that is sent and the Facility Locator team is responsible for displaying it accurately. This decision was made today related to the display of hours of operation and also applies to phone numbers and other core data elements. 
   
    
