# IA Open Issues

### Health Care
- [ ] Health ID Card page - This page currently exists on VA.gov. Now that we are combining all ID cards into a single static page, do we still need this page that is specific to the Health ID Card.  https://www.va.gov/HEALTHBENEFITS/vhic/index.asp

- [ ] Community Care - Microsite that includes a heavy amount of content that is not geared towards Veterans.  https://www.va.gov/communitycare/ Options:
  - Only link to this microsite from the HC hub page.  Do not make any changes to this site, URLs all stay the same. Clicking on option will take user out of HC hub.
  - Create a single static page to include in the HC hub about Community Care.  This page will keep the user in the HC hub to get high level info. The page will link to this microsite. Going to the microsite will take the user out of the HC hub. 
  
- [x] Scheduling/Viewing Appointments - What are all the different tools and where are they located?  There are static pages that talk about these tools on Vets, VA and MHV.  How can we simplify this experience?  What pages do we need to keep? 
  - We will revise the current Vets page that will explain the two tools that are available. The page will include links to both tools and direct them through the login first.  The current MHV static page in front of the Scheduling tool will remain.  See solution here:  https://app.moqups.com/greg@adhocteam.us/Rnc4BDEKrA/view/page/aeddf88e9
  
- [ ] Health Records - Need to define all the tools/capabilities that should be included in this static page and where it should link to - Download Records, Share Records, Access Health Summary, Medical images,  Lab and Test Results (crosslink), more?

- [ ] Wellness Programs - This is a grouping of pages from across the site and various sub-domains. There isn't landing or overview page for this contet. 
  - Recommendation: Create a new static page that describes the various Wellness programs and links to the appropriate pages. The new page will live in the HC hub and link to the other pages.  No changes will be made to any other pages. The grouping can stay intact for the VHA hub.
  
### Disability
- [ ] Historic Rate pages - There are main rate pages for the differet types of compensation rates.  Each of them then link to historic rates, each year is a separate page.  Will we be updating the URLs of all of those historic rate pages as well?  The current year's rates live on the main page, how does this impact the process of moving the rates off the main page onto a historic/year page and posting the new rates?

- [ ] DBQ Microsite - There are a number of pages about the DBQ and process.  A few pages are not relatd to the Veteran, but most are.  https://www.benefits.va.gov/compensation/dbq_disabilityexams.asp  Options:
   - Only link to this microsite from the Disability hub page.  Do not make any changes to this site, URLs all stay the same. Clicking on option will take user out of the Disability hub.
  - Create a single static page to include in the Disability hub about DBQ.  This page will keep the user in the HC hub to get high level info. The page will link to this microsite. Going to the microsite will take the user out of the Disability hub. 
  - Use the main page of the DBQ as the overview page and move it to the Disability hub (URL change).  Leave all other pages where they are.  Going to other pages will take the user out of the Disability hub. 

  
  
 ### Education
 - [ ] Apply Now Wizard - The current Vets site has a "wizard" that directs users to the correct application.  In the new IA there are contextual links that take users straight to specific forms and bypass the wizard.  Need to discuss this change with SMEs to determine any technical needs or UX challenges. 
 
 - [ ] Yellow Ribbon Participating SChools pages - There is a page for each year and under each year there is a page for each state that is participating for that year.  Will we be impacting the URLs for these pages as part of MVP or should they remain as they are?  If they remain, the user will leave the Education hub when they click on a link. 
 
 - [ ] WAVE Web Automated Verification of Enrollment - Is this redundant to checking your GI Bill benefit status, or is this a different task that should be included in Manage spoke? https://www.gibill.va.gov/wave/index.do
 
 - [ ] My Story Microsite - Do we move (i.e. change URL) this content into the Education hub? https://www.benefits.va.gov/gibill/my_story.asp

 
 ### Careers
 - [ ] Family pages - There are two pages with family benefits and resources. Determine how these two pages can work together or possibly be combined. The goal is to have a single link in the main navigation for Family and Dependent Benefits
   - https://www.vets.gov/employment/job-seekers/family-members/
   - https://www.vets.gov/employment/vocational-rehab-and-employment/family-members/

- [ ] General Resource pages - There is a VA page and a Vets pages for "Resources".  Can these be combined?
  - https://www.vets.gov/employment/vocational-rehab-and-employment/external-resources/
  - https://www.benefits.va.gov/vocrehab/links_resources.asp
 
 
 ### Life Insurance
- [ ] Pop-ups - Need to review all pop-ups and determine whether we can eliminate them or need to keep them in the experience. Removing them will require updating all entry point pages to link directly to the associated pdf rather than the pop-up.

- [ ] Family content - There are a few benefits/services available to family members that are not readily called out. Options:
  - Move SGLI up and out from under the general options to provide visibility to family/dependent benefits like we do in other hubs?  
  - Create a new static page that includes reference to all the family/dependent options (i.e.FSGLI, Ben Fin Counsel, Will Prep, etc.) similar to how we handled it in Health Care
  
- [ ] Beneficiary Financial Counseling and Online Will Preparation - This was called out by the SME as more of a Manage task.  

- [ ] Insurance for Service-Disabled Vets - This appears to be a page that simply brings together all content for service-disabled veterans - similar to how we handle Family/Dependent.  Should we keep this page and where does it belong?
  - https://www.benefits.va.gov/INSURANCE/disabledvet.asp


### Burials
- [x]  Find a Cemetery - This is a group of pages that will be partly retired, partly moved to new Burials hub and partly left as part of NCA hub.  Need to finalize what this looks like. https://www.cem.va.gov/cem/cems/index.asp
  - Keep the Overview page and content in the Burials hub.  On that page, link to Facility Locator for National and State cemeteries links.  DOI and AMBC pages will remain as is and live in NCA hub.  Volunteer and Construction/Design pages will live in NCA hub.  Cemetery detail pages will live in NCA hub, but will be accessible from Facility Locator.  

- [x] Cemetery Detail Pages - The cemetery locator function will be handled by the Facility Locator by launch.  However, Facility Locator links back to individual cemetery detail pages.  Do the URLs of these pages all update to be part of the Burials hub, or will this content be in the NCA hub?
  - Cemetery pages will live in NCA hub, no URL changes. 
  
- [ ] NCA Mobile Site 

- [ ] Disinterment - This content is not benefit oriented, however it is informational for the Veteran family.  Should we place it under More Resources or should we keep it in the NCA hub? https://www.cem.va.gov/cem/disinterment.asp
  

### Records/Root Level Content
- [x] Claim and Appeal Status - Does the Vets tool include more than Disability statuses.  Do we need a different static page for every status tool, or can we use a single static page to divert traffic through?
  - The goal is to have all claim and appeal types available through the Vets.gov tool by launch.  This will mean we can have a single static page that all benefit hubs link to that will describe the statuses that are available and link to a single tool.  If this does not happen, we will keep the single static page, but will link off to different tools as appropriate

- [x] Appeals - The only content on the site for appeals, is under Disability.  Many benefit hubs have the ability to track an appeal but nothing on filing an appeal. 
  - This will be part of a future phase.  
  
- [ ] Administration Hubs - What work needs to be done, in terms of IA, to ensure that these hubs provide accessibility to all the content that is not included in the benefit hubs, as well as prominent access to the benefit hubs?

### Retiring Pages
- [ ] Retiring VA.gov pages
  - 301 Redirect for those that are being replaced by Vets version?
  - Plan for thos pages outdated or no longer needed (not being replaced)
  - Documentation
  - Accessing content for future reference
  
- [ ] Retiring Vets.gov pages
  - Documentation
  - Accessing content for future reference
  - List (not complete):
    - Advvanced Training and Certifications https://www.vets.gov/education/advanced-training-and-certifications/
    - Non-Traditional Options  https://www.vets.gov/education/work-learn/non-traditional/
    - Work and Learn https://www.vets.gov/education/work-learn/
    - Career Counseling https://www.vets.gov/education/tools-programs/

