Dec. 18, 2019

CMS Team

Jeff Brauer - Product Delivery Mgr

Kevin Walsh - Product Mgr



### CMS Team Pain Points Priority 

**1.  Fragility** (connects to all a bit, will require a broader change of mindset for the teams)

\------

Have workarounds

2. **Ability to Spin-up Multiple Environments** - can come up with a workaround for user testing

3. **Redirects** - 90% of time have a way of working with it (potential for AUTOMATION) Megan, Nick, Wyatt, Mikki are already thinking about this problem

4. **Feature Toggles** - avoiding problem by not changing the content model. Most changes are additive. The problem is when we are deleting things or changing things.



#### Ability to Spin-up Multiple Environments (for user testing/QA/demos)

Walk us through how you went about testing the new left nav design on staging?

Content workflow is working Prod > Staging > Dev

- Kevin testing breadcrumb and left nav for Pittsburgh
- Change in march where content no longer moving with code
- For testing the left nav - latest content with the latest code
- Had to turn off continuous deployment
- help team with content changes repeatedly

Solution Recommendation

Need more places for prod content and code to meet. Need more for user testing with

- - cms content
  - client demos
  - stakeholders
  - e2e testing for epic testing
  - content sandbox (hospitals)
- choice of copy prod database once or continuous deployment

Con's of solution

- building the UI to choose 2 different branches for non-technical folks
- decision for prod to be copied once, continuous or on-call

#### Fragility of CMS

- want to work with platform to help with this
- system is very fragile
- need to build in more stability
- we’re turning over this product to 100 editors and up to 1,000 in the next few years

Ex: Broken LInks

- trivial issues can stop important things from going out
- build won’t go out if a link is broken
- It's a problem when we need an urgent notification to go out
- would like more feedback loops while editing in CMS (like the 508 accessibility linting tool) to catch things for the editor **before** it’s published

Ex: Pittsburgh Website

- had no future events, stopped whole system from publishing and prevents urgent updates from happening

- becomes more of an issue when more editors are given control across the system

#### Redirects

- Scenario 1: pittsburgh.va.gov -> will redirect to new site in new year
- Scenario 2: Benefits.va.gov -> redirects to updated site
- Redirects are being made, creating broken links and stopping builds
- Wyatt is working on this issue

#### Feature Toggles

- CMS code and FE code
- Timing issue that changes or introduces something new and the front end isn’t expecting, there is an error
- Are trying to coordinate releases because they handle both right now. This will change in the new year
- Will need more coordination between CMS and Platform team to manage this
- Will come into play with Content Model changes (haven’t done that in a bit)
- Will break stuff if FE isn’t up to date or isn’t matching
- Need to revisit process and/or see if there’s a better way to manage and prevent broken builds


