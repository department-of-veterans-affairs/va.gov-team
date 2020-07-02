# Product Outline: Comparison Tool Search Enhancements 
---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

## Problem Statement
The GI Bill Beneficiaries using the Comparison Tool are lacking additional nuanced data points that would help them find schools and training institutions that are a best fit for their education needs and make better education decisions.

How might we include additional information within the Comparison Tool regarding unique institution attributes in order to provide more holistic information to GI Bill Beneficiaries that can inform their decisions about how to use their benefits?

Who: Schools & Training Institutions
- OJT, Apprentiship to be included
- Add schools/training institutions. They have an interest in how they are represented.
- Would these data elements display on all institution types? Or does the data displayed depend on the type of institution
- College Scorecard does not include all institutions that we track so we (EDU) would have to add any missing data; don’t really want to do that
- If it isn’t available for an institution, then don’t worry about including it

Why: Why can’t we provide a link to scorecard instead of incorporating data that already exists? 
- College scorecard has a lot of good info and we already pull in a lot of information
- We could include unique URL to the scorecard: “For more information about this school, check out College Scorecard”
- Feedback from VA would be that we don’t want to take Veterans away from VA.gov
- DEPO: That is not a good reason o We should be focused on Veteran-specific information
- Don’t want to recreate something that already exists
- Amy: If people are in CT are looking for specific types of schools, for example HBCUs, and haven’t yet made the decision about what school to attend, then this could be a helpful feature.
- Luke: If the Veteran’s first stop is the Comparison Tool, then this makes sense. But if that isn’t the case, then this doesn’t work as well. Brings up the question around what is the journey the Veteran takes to identify the schools they want to attend
- BAH: This is tough because we know that not a lot of Veterans/Beneficiaries are using the Comparison Tool at all, so is this something we do to make the tool more useful?
- EDU: From that standpoint it makes sense. Incorporating additional College Scorecard data in the future makes sense, but not necessarily today.

## Desired User Outcomes
*Why would a user want to use this?*
*With this problem solved, what should users be able to do/achieve that they couldn't before?*
- Identify school that best meets criteria quickly
- Quick and seamless process of searching and locating needed information

## Undesired User Outcomes
- Users have to go to multiple sites to get the information they need (VBA standpoint)
- User unable to quickly find applicable school

## Desired Business Outcomes
*Why would your business want this to exist?*
*With this problem solved, what should your business be able to do/achieve that they couldn't before?*
- Increase the number of Comparison Tool users (VBA standpoint) (this should be considered in KPIexercise)
- People are better able to find what they are looking for on the site (this should be considered in KPI exercise)

## Undesired Business Outcomes
- Don't recreate the college scorecard

---
## Objectives and Key Results (OKRs) and Key Performance Indicators (KPIs)

### KPIs
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
- KPI: increase # of GIBCT users
- KPI: positive feedback from users

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### OKRs
_What are the measurable targets you're aiming for that delivers value for Veterans?_

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumtion w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

## KPIs
- *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
- *What is your date for when you'll evaluate impact after launch?*

---

## Solution Narrative
### MVP (These are MVP requests and serve as a wish list until research on each is complete)
The existing integration with College Scorecard already pulls in a subset of the College Scorecard data, so this would just be additional data points. We are planning for display and search:
- Display Data Elements on Search Results
- Allow for Data Elements to be searchable
- Link to College Scorecard Profile (Include URL of college scorecard page as a Scorecard data elements)
   - The URL is one of the data elements (like a citation; it adds validity to the data)

### Nice to have/Enhancements
- Display Data Elements on Profile Page
- Data Elements (The existing integration already pulls in a subset of the College Scorecard data, so this would just be additional data points. We are planning for display and search.):
   - HBCU
   - Men Only
   - Data Element: Women Only
   - Data Element: Religious Affiliation
   - Data Element: HCM2 (heightened cash monitoring, severe)
   - Data Element: Distance Only
   - Data Element: PCTFLOAN (Percent of Full-time, Firsttime Undergraduates Receiving Federal Loans)

### Current Status

### Key Decisions

### Supporting Artifacts
- Attributes to consider displaying/incorporating into search in the Comparison Tool: https://collegescorecard.ed.gov/assets/FullDataDocumentation.pdf
---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: BAH
- GitHub Label: 
- Slack channel: bah-team
- Product POCs: Darrell Neel
- Stakeholders: Darla van Nieukerk, Luke Tickner, Brian Grubb, Joe Welton, Joe Preisser

</details>

#### Team Members

<details>
 
 - DEPO Lead: Matt Self
 - Product Manager: Darrell Neel
 - Engineering: Dan Shawkey
 - Research/Design: Amy Knox, Cindy Cruz, Jen Jones
 - Project Manager: Will McCormack
  - Scrum Master: Desiree Turner

 
</details>
