# Onboarding comparative analysis

March 11, 2024

Liz Lantz, Authenticated Experience
## Background
When Veterans or other potential VA beneficiaries go to VA.gov for the first time, there is not a clear path on how to start interacting with VA. Many organizations in the private sector provide a new user onboarding flow that outlines key capabilities, common actions new users take, steps that similar users take, etc. We conducted a comparative analysis to identify current practices and patterns in onboarding flows, and help inform a potential VA.gov onboarding solution
### Goals
Our primary goal was to learn how websites and apps approach onboarding new users.

## Methodology
We primarily used Mobbin.com to review website and app flows in the following categories:
- Onboarding
- Creating an account
- Browsing tutorial
## Findings
1. Onboarding flows for modern websites and apps typically include multiple sub-flows or steps designed to increase user engagement with each step.   ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md#onboarding-flows-for-modern-websites-and-apps-typically-include-multiple-sub-flows-or-steps-designed-to-increase-user-engagement-with-each-step))
2. We observed some additional welcome steps in onboarding flows on dashboard-type websites, and within mobile apps. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md#we-observed-some-additional-welcome-steps-in-onboarding-flows-on-dashboard-type-websites-and-within-mobile-apps))
3. Navigation and other UI elements are minimized for the majority of onboarding steps. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md#navigation-and-other-ui-elements-are-deprioritized-for-initial-onboarding-steps))
4. Onboarding flows include both unauthenticated and authenticated aspects. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md#onboarding-flows-include-both-unauthenticated-and-authenticated-aspects))
5. There are a common UI patterns used to achieve specific goals in onboarding flows. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md#there-are-a-common-ui-patterns-used-to-achieve-specific-goals-in-onboarding-flows))
## Findings Details
### Onboarding flows for modern websites and apps typically include multiple sub-flows or steps designed to increase user engagement with each step.
All the flows we reviewed included at least one of these aspects. Others included all of them, especially sites that have an element of personalization such as Netflix or LinkedIn.
#### 1. Feature overview to encourage people to sign up for an account
This was most commonly seen on the homepage of a website. Highlighting or summarizing features was either the focus of the homepage, or in a carousel in the top half of the page.

USAA’s homepage starts with a succinct and actionable list of services they provide, followed by a call to action (CTA) to join.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-usaa-homepage-ctas-cropped.png" alt="screenshot showing USAA’s mobile homepage starts with a succinct and actionable list of services they provide, followed by a call to action or CTA to join." width="375" />

#### 2. Account creation flow
Every website and app we reviewed had an account creation flow. The basic account creation process on ID.me or login.gov is not dissimilar to what we saw. Creating an account was a primary goal of many the sites we looked at, especially for sites that provide paid services.

Netflix’s entire homepage is a simple benefit statement with a call to action to start the account creation process.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-netflix-homepage-ctas.png" alt="screenshot showing Netflix’s entire homepage is a simple benefit statement with a call to action to start the account creation process." />

The Social Security Administration takes a similar approach to VA.gov with an account creation CTA on the upper right side of the homepage, which also leads to ID.me or login.gov.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-ssa-homepage-ctas.png" alt="screenshot showing Social Security Administration taking a similar approach to VA.gov with an account creation CTA on the upper right side of the homepage." />
	

#### 3. Profile set up flow
Setting up a profile was an immediate next step after account creation on many of the sites we looked at.  Users were typically asked to provide 2-3 pieces basic information, like name, date of birth, and gender to establish their profile.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-airbnb-create-profile.png" />

In the screenshot above, Airbnb presents a modal to provide profile information as an immediate next step after an account is verified. In the modal, we see the total number of steps called out, and an option to exit the flow. Not all sites we saw provided an obvious way out. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-quicken-create-profile.png" />

In the Quicken screenshot above, we see a direct and simple approach asking for 3 key pieces of information 

#### 4. Asking for additional information to inform personalized recommendations. 
This step almost always had some content explaining why the information was being requested. Oftentimes, the content tied back to the users goals and served as a way for people to learn about what the app or website can do for them.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-linked-in-flow.jpg"  alt="image showing 4 screens from LinkedIn that take the user through a flow to gather personal information to make recommendations." />

Some flows, like the LinkedIn screenshot above, included multiple, focused screens to gather a different types of information.

### We observed some additional welcome steps in onboarding flows on dashboard-type websites, and within mobile apps.
- A series of welcome screens that highlight specific features or functionality, after an account was created. The VA Mobile App currently has this in a 4 step carousel.
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-va-mobile-app-intro-carousel.png" alt="image showing 4 screens from the VA Mobile App that highlight things a person can do in the app." />
- Providing users with 2 options for next steps to help them get started using the website or app. These typically focused on the primary offerings of the site and serve as a way to teach people what they can do.
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-user-research-welcome-next-steps.png" alt="image showing 2 options as next steps on the user research welcome screen." />
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-basecamp-welcome-next-steps.png" alt="image showing 2 options as next steps on the Basecamp welcome screen." />
- A progressive tour of the user interface, highlighting key features.  Tooltips and a “next” button are a common pattern, as shown in the Mint app below.
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-mint-tour.png" alt="image showing a series of 4 screens walking a user through features in the Mint app." />

### Navigation and other UI elements are deprioritized for initial onboarding steps.

We noticed that during account creation, profile setup, and gathering personalization information steps,  navigation was deprioritized.  It was almost always covered by a modal, stripped down, or removed entirely. This can be seen in many of the examples above, as well as in the screenshots from Udemy and Netflix below.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-netflix-personalization-qs.png" alt="image showing a screenshot from Netflix where main navigation is not present." />

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-udemy-personalization-qs.png" alt="image showing a screenshot from Udemy where main navigation is not present." />

### Onboarding flows include both unauthenticated and authenticated aspects.

- A feature overview, benefit highlights and creating a login are all unauthenticated parts of the flow.
- Creating a profile, providing personalization information, and a product tour happen after a user is authenticated.

### There are a common UI patterns used to achieve specific goals in onboarding flows.

#### Tooltips and badges are commonly used to highlight new features
- We noticed a variety of methods a tooltip could be dismissed: 
  - A close button 
  - a next button to take a person to the next feature in a tour 
  - only by interacting with the feature 
- Some products, like Zoom, use a `new` badge to draw attention to a new feature.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-google-analytics-tooltip.png" alt="image showing a large tooltip in Google Analytics highlighting Custom Reports. The tooltip has a close button." />

*Above, Google highlights Custom Reports with a tooltip. The tooltip has a link to learn more, or close button so it can be dismissed by the user.*

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-mint-tour.png" alt="image showing a series of 4 screens walking a user through features in the Mint app." />

*In the example above, the Mint app uses a Next button inside a tooltip to guide the user through the product.*
        
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-zoom-new-feature-badge.png" alt="image showing a screenshot from Zoom. Three items in the side navigation menu are marked as new with a badge to the right of the menu item." />

*Above, Zoom’s profile uses a badge to highlight new items in their navigation menu.*

#### Many websites take a “one thing per page” approach when asking for profile or personalization information.
One question per screen is presented to the user as part of the account set up process. There is typically an explantation to inform the user why this is being asked. The questions serve a couple of purposes:

1. They help personalize their experience once their account is set up.  The questions typically have content that explains why the information is being asked.  
2. They can also teach the user about what the product can do. In LinkedIn’s onboarding flow, they ask the user to choose

In this example, Netflix asks the user for personal information for maturity settings and to serve appropriate ad content. They emphasize that the information will be used in accordance with their privacy statement.
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-netflix-personalization-qs.png" alt="image showing a screenshot from Netflix where main navigation is not present." />

By asking a new user to choose a primary goal from 3 options, LinkedIn is teaching them about the 3 main tasks they could complete on the site.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-linked-in-flow-step-3.png"  alt="Screenshot from LinkedIn, asking the user to choose their main goal from 3 items." width="375" />

## Opportunities
If further research indicates there are problems a VA.gov onboarding solution can solve, there are some ideas drawn from this analysis that would likely work well to achieve specific goals:

### Getting people to create an account

1. Do a better job of succinctly summarizing the benefits of creating a VA.gov account, in an engaging way.  We’re currently pointing people to a long article style page that doesn’t engage in the same way a private sector page does.
2. Create a variation of sign-in modal that prioritizes creating an account over signing in with an existing one, so we can link to it from any place we have a call to action to create an account (e.g. the homepage).

### Getting people to create a profile 
1. Redirect LOA1 users to a dedicated page encouraging them to verify their account any time they sign in.
2. Drive people through a profile completion flow the first time they successfully log into the site with an LOA3 account
   - A one thing per page approach would be most aligned with what we see in the private sector
   - We should clearly explain why we’re asking for the information and how it could help the Veteran to provide it

### Helping people learn about features and benefits of VA.gov once they’re signed in
1. Create marketing style content highlighting benefits and features of the website, possibly drawing from the mobile team’s work in this area
2. Develop a tour for My VA, or create a specific part of the site that explains top tools and site features in one place.

## Further reading
If we decide to pursue a solution, [this user onboarding teardown article](https://www.useronboard.com/user-onboarding-teardowns/) is a great resource for more ideas.
## Next steps
We’ll conduct generative research to better understand what, if any, problems are preventing people from engaging with VA.gov. We’ll specifically want to talk to:
- People who are leaving the service in the next 6 months
- People who have left the service within the last year
- People who have established a relationship and benefits with VA, but have never used VA.gov
