# Discovery

## Table of contents

[Intro](#intro)

[Authenticated experience](#authenticated-experience)

- Profile
- Logged in homepage
- my VA
- Health apartment homepage

[VAOS](#vaos)

[Search](#search)

[Homepage research](#homepage-research)

## Intro
There are a variety of logged-in experiences in the VA.gov ecosystem. This section will attempt to list personalized areas within VA.gov with links to relevant documentation and research findings. 

## Authenticated experience

Purpose: A cohesive logged-in experience will help veterans complete tasks more quickly, increase veteran satisfaction with the VA, reduce the need for multiple touchpoints (other VA websites; VA call centers), and help veterans get benefits more quickly.

Profile portfolio consists of products that store profile-related information about VA.gov users, including personal, contact, military and direct deposit information plus [notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences), account security (managed by the identity team) and [Connected Apps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/connected-apps-data) (managed by Lighthouse). 

**Profile**
- Purpose: The VA.gov profile provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.
- Resources
  - [Profile folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile)
  - [Design for connected apps](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e)
- Research

---

**Logged in homepage**
- Purpose
- Resources
- Research
  - [Logged-in homepage user research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md) | May 2020
   - Goal: To talk with Veterans to better understand their needs and what would make the logged-in experience more useful to them inform the design for treating the logged-in homepage as a user's personalized landing pad and router
   - Relevant findings include
     - Participants want a page that is focused on current information specific to them, rather than generalized information for all Veterans.
     - Participants are primarily interested in completing healthcare and disability related tasks such as messaging, ordering medication, and checking claim status.
     - Participants were interested in benefit recommendations and eligibility information.
     - Participants were interested in information that helps them be more involved with the VA as a whole, and take better care of themselves.
     - Participants expect a mix of links and widgets to complete tasks on their homepage, and want clear labels to understand next steps.
     - Participants typically look for notifications in the top portion of a page, but expect notifications from the VA outside of their logged-in experience.

---

**my VA**
- Purpose: When Veterans log into VA.gov, they expect to be met with an experience that reflects their personal circumstances at VA. My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates. The My VA dashboard on VA.gov provides Veterans easier access to critical information in one place. My VA allows Veterans to view a summary of important information about themselves, applicable benefits, statuses and additional resources.
- Resources
  - [My VA folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/Authenticated%20Experience_My%20VA%20-%20Team%20README.md)
- Research

---

**Health apartment homepage**

- Purpose: The Health Apartment Team’s mission is to simplify Veterans’ health experience on the web by consolidating all health things into a single health “home” on VA.gov, which is nicknamed the “health apartment.”
- Resources
  - [Health Apartment product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/13ad27fcbf27fc771b90f670e610c8a719a16581/products/health-care/health-apartment/product/Product-Outline.md#health-apartment-product-outline)
  - [Final Homepage design mural](https://github.com/department-of-veterans-affairs/va.gov-team/blob/13ad27fcbf27fc771b90f670e610c8a719a16581/products/health-care/health-apartment/final%20documents%20and%20next%20step%20recommendations/Final%20Homepage%20design%20mural%201.11.22.pdf) | January 2022
- Research
  - [Guerilla testing of homepage concepts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/health-apartment/design/design%20presentation/Design%20and%20Research%20Share%2012.20.21%20-%20Guerilla%20Research.pdf) | December 2021
    - Goal: To learn how Veterans manage their health care, what actions Veterans expect to take and what information is expected in each section
    - Relevant findings include
      - Participants wanted specific task-specific action links
      - Tasks should be clear and separate from information links
      - Participants wanted some form of personalization (especially for health care and disability tasks)

---

## VAOS
- Purpose
- Resources
- Research

## Search

**Purpose**
- powered by Search API -> [implementation guide](https://search.usa.gov/sites/7378/api_instructions)
- "Search Typeahead" uses a database of suggestions to assist users in finding what they are looking for on va.gov. These suggestions are algorithmically generated (if a query is searched X number of times, input it as a suggestion, and then remove it if it goes Y days without being searched Z times). These numbers are controlled by search.gov, and we do not have much control over them.

**Resources**
- [Onsite search product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/product-outline.md)
- [Help manual](http://search.digitalgov.gov/manual/)
- [Search playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/search-playbook.md)
- [Data for search tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#other-search-tools)

**Research**
- Nielsen Norman Group
  - [Site search suggestions](https://www.nngroup.com/articles/site-search-suggestions/) -- e.g., autocomplete or autosuggest 
  - [The pinball pattern of scanning the modern search results page](https://www.nngroup.com/articles/pinball-pattern-search-behavior/)

---

## Homepage research
[**Comprehensive user research conducted for the 2018 VA.gov home page**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/user-research/brand-consolidation-research-summary-10-25-2018.pptx) | October 2018

- **Goals**
  - To learn how to organize other “non-benefit” resources 
  - To validate benefit lifecycle assumptions
  - To gather feedback on homepage designs
  - To validate the navigation model. 

- **Relevant findings from that series of studies include**
  - The default mental model used by Veterans is organization by benefit category, followed by task.  
  - Veterans prefer simple, clear, easy to read layouts and are overwhelmed by too many options.
  - Veterans want above the fold, one-click access for priority tasks.
  - “Explore and apply” label works well for many tasks but differentiating between “get” and “manage” adds complexity.
  - Sheer volume of content and menu levels contributes to poor performance on navigation tasks. 


[**Baseline wayfinding research on VA.gov**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/research/202104-baseline-wayfinding#baseline-wayfinding-research-on-vagov-april-2021) | April 2021

- **Goal:** To determine how well the VA.gov homepage enables Veteran task completion

- **Relevant findings include**
  - This research demonstrated consistency of Veteran wayfinding regardless of their familiarity with the site, presence of cognitive issues or device used. 
  - Most participants focused on the top four boxes and tasks easily identified there had the highest rates of success.
  - It is difficult to find tasks which don't appear in the top 4 boxes. For example, only 8% of participants were able to find a form to appoint a representative.
  - Search was used as a last resort, if at all.
  - Only half opened the mega menu, one-third never scrolled beyond the images and most didn’t find “Find a VA” or “Resources and support”.
  - See also this [homepage user wish list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/202104-baseline-wayfinding/home-page-wish-list.md) 

