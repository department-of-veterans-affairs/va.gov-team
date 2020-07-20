### Content and Business Requirements Q-and-A

X. How will users know to use CLP, vs page in benefit hubs, vs learning center vs Vantage Point (OPIA Blog)?

> Once we have definition and business rules for CLP, we should road test them by setting up several very different CLPs so we can see how CLP would work content-wise. This will show us any "holes" in our strategy and help us hone it.

- CLP is strictly for benefits and services (not a blog tool).   Content creators will be guided to use CLP specifically for:

**FOR:
- For short-term programs, campaigns
- Could have been used for COVID-19 
- Content that is not part of the permanent IA -- bring people to a consolidate place (landing page) and drive users to content (some of which is permanent -- benefits, tools, etc.)

**NOT FOR: 
- New, evergreen content
- Not meant to replace permanent content or become everlasting "hubs"

We don't anticipate VA stakeholders to be confused about what the CLP is ideal for -- e.g. micro-sites.

Follow-up: get a finer definition around: When to use CLP (vs. Learning Center, vs. Benefits Hubs): 


1. What does the sunset process look like? Should there be an expiration date associated with the CLP (at which point we would set a redirect) or do they live on (to be possibly re-used annually in some cases)?

- When Campaigns are entered by author, there should have expiration date -- Drupal sends the content author and PW team a notification to review the CLP to determine if its should remain live. We would want to remove pages from Server if page is not attracting meaningful traffic.  Would not even re-direct unless there is traffic value.  Possible: The notion of "annual clean-up" (Note: there is no central digital/marketing office/owner for campaigns).   Joint-ownership of this page is likely/intrinsic.  So we can decide whether we optimize or retire, for example.

- VA does make content that is time-limited, but they don't set "expirations" -- so it sticks around.   This is an opportunity to introduce automated governance -- e.g. after a year, you have to review it, look at usage/analytics -- and decide whether to optimize or in fact retire it.

2. How many CLPs a year is anticipated?  

- 5-10 a year, if we roll it out in phased approach.  If available to all businesses at VA, it could be a lot more than 10 a year.
- Examples of VA campaigns:

  - https://missionact.va.gov/
  - https://www.benefits.va.gov/transition/solid-start.asp
  - https://www.benefits.va.gov/BENEFITS/blue-water-navy.asp
  - https://www.benefits.va.gov/BENEFITS/financial-literacy.asp
  - https://www.benefits.va.gov/BENEFITS/banking.asp
  - https://www.va.gov/QUALITYOFCARE/education/Mental_Health_Awareness_Month2020.asp
  - https://www.wearewithinreach.net/
    - Can't tell who the audience is
    - Barely actionable
    - Can't tell what the call to action is
    

(NOTE: need some start-up documentation for the first 1-2 user groups, possibly a landing page for the product)

3. Is new content created for CLP -- or does it just link to existing content in many places? 

- No! It is one page that links to deeper content that the stakeholders/VA already have -- benefit hubs, videos on YouTube, publichealth.va.gov domain, online publications (outreach library, blogs, PDF factsheets), etc.

4. Who updates/maintains CLP content? 

- VA business stakeholders maintain the landing page, adding new pointer links.


5. Who gets to use CLP -- and how will they get the "keys"?

- We will govern via Drupal access. (We don't want a sub--sub-sub VA office using these).  We will limit Drupal access.   Governance will come through PubWeb and the VHA, VBA office heads (e.g. Jenny, Sandy, James etc.) -- Dual key permission. In rolling out to businesses, we would want to restrict authoring rights to a centralized Webmaster/person per business -- not every person (we don't want 7000 users).

How do we limit/govern User access in Drupal with CLP keys?

- key VA stakeholders already have limited access to higher level pages; CLP will require some new permissions limiting access to specific sections. For example, benefits pages are locked-off.    

6. Where will CLP's sit in the site IA (directory)? Who can create what URLs?

- Requires more follow-up thinking with Mikki/Meg and Kevin.  Original thinking -- CLPs would be root-level pages, not part of the IA.  (Mikki: Are they in a directory of their own?). Jen believes the URL should be baked in to the CLP template creation -- perhaps driven by the H1 (va.gov/<name of campaign-H1>).   Keep in mind: H1s can be changed which would effect the URL.

7. Will PW and VSP Collab Cycle review a CLP before it is launched?

- That isn't our stance at this point.  This will likely have an impact on our plain language and accessibility standards -- but Jen points out, this is the way it is now.  Many of these pages are created w/o our oversight.   We will have design/content guardrails for CLP -- but not the Collab Cycle level review. (OR, Do we want the VA stakeholders to go through VSP collab cycle?)


9. How will CLPs be found?

- On-site, via CTA's.  Off-site, via marketing, email/social media.

10. Do we have examples of stakeholders using self-service tools we’ve created?

- For benefit hubs pages, VA stakeholders do have access with limited rights -- but we've asked them not to use Drupal.  Many of the VA stakeholders don't want to learn how to use Drupal.  Most of the VA stakeholders have a web-mastery/web communications person who does the actual authoring of content (e.g. Eric for NCA).   

11. Do we have any other editorial product (at VA or competitor) to compare CLP usage to measure success?

- We do expect to track performance better -- but we can't say page view performance will necessarily go up.  Traffic performance is not a KPI of CLP.   We do think forcing use of a CTA and identifying the audience (Who is this for) -- this will force the business to ensure these marketing efforts are more focused, targeted -- and actually measured.

12. Are we seeing data for poor behavior related to the problem we’re trying to solve with CLP? In other words, is the way the business is executing on campaigns not effective and the CLP will address many issues?
- The page should be built with default page tracking (like COVID-19 page).  One idea: When you create a CLP, you have to sign up for GA account -- or you get an auto-generated report from GA.   The CMS team is working on Notifications -- the capability to notify users through Drupal -- if Sandy updated a page, PW would be notified that Sandy updated a page, or a form was added. 

13. Is it fair to say one of the drivers of CLP -- the problem it solves -- is: we are addressing is Demand (from business stakeholders who want this) and Capacity issues (we don’t have the resources to solve this need).
- This is the primary driver.   The secondary drivers are:
  - CLP can be leveraged to better communicate certain things (does not fit naturally in the benefit hub -- Mission Act, COVID-19)

## Our thoughts on potential KPIs if we stick to business-oriented success:
  * Requests for campaign-esque requests go down (e.g. they now have a self-service tool)
  * Number of CLPs goes up (e.g. the tool allows us to “scale”)
  * Burden on team is measurably reduced (e.g. self-service)
  
  Veteran oriented success metrics:
   * Veteran usage of CLP (note: in some cases, the primary audience is not veterans, could be clinician researchers or state health agencies)
   * One topic, one audience is the focus.
   * We should encourage people to retire and redirect on a regular cadence. 


Maybe a hard requirement: the page goes away/retires every year, so you need to create a new one (if an annual campaign). Or, in order to keep it alive the page needs to meet certain thresholds:
   + Continues to be marketed.
   + Continues to generate traffic
   + Business users must complete an online form to request use of CLP.
 
Question: With our on-site search metrics, we look at campaign pages to see if they are underperforming and the new CLP will  perform better.  
  
