## VA.gov Home Page Evolution Product Brief

Conceived as the unifying "Veteran-facing digital brand" for the Department of Veteran Affairs when it launched in late 2018, VA.gov has become **the** front-door to top tasks, tools and information for Veterans and their beneficiaries.  In the nearly three years since the site's launch, the range of VA benefits and programs has grown and evolved, with new valuable offerings.  Cases in point: (a) the new [Manage Your VA Debt hub](https://www.va.gov/manage-va-debt/) and (b) [File a decision review](https://www.va.gov/decision-reviews/).  In a sense, the site now has to serve more masters -- and more importantly, VA.gov has to act as a vital guide-post to a growing selection of new information and benefit services.

What's more, VA.gov has advanced its authenticated experience -- e.g. MyVA, MyProfile, eBenefits migration, and soon MyHealthevet integration -- to a point where the site needs to more effectively bridge users to the personlized logged-in experience.

With this in mind, this Product Brief outlines -- at a high level -- three possible stages of the evolution of VA.gov.


### (1) Managing Home Page Top Tasks

[Comprehensive user research conducted for the 2018 VA.gov home page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/user-research/brand-consolidation-research-summary-10-25-2018.pptx) determined that the "benefit category is the default mental model for organizing information, but top tasks are why users come to va.gov."  These findings drove the final design which has fundamentally remained unchanged since launch.

In particular, the current UX design was optimized for viewability across Desktop and Mobile and that is why the four Top Tasks boxes contain a fixed number of five links in each = 20 tasks total.

And not surprisingly, [update-to-date click-tracking analytics and user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/202104-baseline-wayfinding/research-readout-full-June8.pdf) reveals the Top Tasks section of the Home Page attracts the lion's share of user engagement.

In recent months, VA.gov has received a number of requests to add more links to the Home Page -- some related to [benefits/top tasks](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26276), some not -- as an example [this request to feature VA videos on the homepage.)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28193)

**What Problem Needs to be Solved**

As an OCTO-DE product owner, I need a defensible framework for adding -- and not adding -- new links to the VA.gov Home Page so I can (a) feature the most valuable Veteran facing tasks, tools and content; and (b) more effectively manage stakeholder requests.


**Solutions to be Considered**

After conversations with key OCTO-DE product and design leads, two solution options have been identified:

- Create a rubric that establishes a baseline "score" for links to earn placement on the Home Page. 

[VA.gov HP Links Scorecard.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/6919371/VA.gov.HP.Links.Scorecard.xlsx)


- Leverage "A/B testing" in production to determine if newly-proposed links perform better than existing links.  This will ensure we make data-informed decisions. (Approach preferred by Ryan Thurwell)


### (2) Refresh the Home Page 

Does the current VA.gov home page -- now nearly three years old -- meet the evolving needs of its users and VA as it continues to consolidate and modernize its digital experience?  Not only are there new stakeholder demands, but user expectations may be changing as well.  The three year mark c/should prompt a fresh look -- via analytics review and user research -- as to whether the Home Page design/IA is "fine as is" or needs a re-think/re-fresh.

Jeff Barnes suggests the following:

- Create a small "tiger team" -- with Design, IA, Research and Product representated -- to conduct a Discovery sprint to examine the effectiveness of the Home Page
- This team can/should also take into account the new VA stakeholder demands for Home Page "visibility and promotion" -- e.g. does the page need to be more fluid/flexible to accommodate these new demands?
- Deliver recommendations for the HP refresh to Crew Chiefs/Leadership (go/no go) by early fall.


### (3) Unifying the Auth/Unauth Experience 

What is the vision for the next big iteration of VA.gov?  Chris Johnston's POV: it is far more personalized in orientation -- aka the Bank of America experience where the user hits the home page and immediately signs-in to "check and do stuff -- view bank balance, make a payment, etc."   As for the rest of the home page, it is focused on "up-selling/promoting" new products and services.


<img width="902" alt="Screen Shot 2021-08-03 at 1 09 07 PM" src="https://user-images.githubusercontent.com/63107147/128057334-8eb05d3f-0465-4b14-8fcb-d368cb2b035b.png">


Based on analytics and user research generated for authenticated product builds (My VA and Profile), Samara Strauss believes the time has come to ["create an authenticated navigation that is more tool and task-oriented and allows each veteran to more readily navigate their experience at the VA."](https://github.com/department-of-veterans-affairs/digital-experience-products/issues/46)

A glimpse at what a more fully realized "unified unauth/auth VA.gov" might be is conceived and illustrated by Meg Peters [in this detailed wireframe.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1620919229869/557b3f36f36ae4f6b9b6073ae7fa58263ef64ff9)

Driving this "streamlining" concept, in Meg's words: The VA.gov authenticated experience is fragmented -- and will become more so in the coming months as we build the MyHealthevet "apartment."


<img width="862" alt="Screen Shot 2021-08-03 at 1 29 17 PM" src="https://user-images.githubusercontent.com/63107147/128059795-62a037d6-984e-4175-acdc-e38bf101a7c9.png">

**The question: Should the VA.gov digital experience team make this "vision" a Big Rock to being work on now -- or wait until 2022?  In either case, who will/should do it?**


## What Comes Next


- [ ] Hand-off this Product Brief to the Sitewide Crew to determine next steps.
- [ ] TBD

*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## Relevant Links

  - TBD

## Additional Background

- [2018 Home Page Research Repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-gov-relaunch-2018/user-research)
- [2021 User Research on Home Page Wayfinding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/202104-baseline-wayfinding/research-readout-full-June8.pdf)


## Screenshots 



## Status 


*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## How to configure this issue
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `Console-Services`, `tools-fe`,`content-ia`, `service-design`, `vsa-*`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)  
