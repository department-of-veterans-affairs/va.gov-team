# Onboarding comparative analysis


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
1. Onboarding flows for modern websites and apps typically include one or more steps designed to engage the user to complete a task.
2. We observed some additional welcome steps in onboarding flows on dashboard-type websites, and within mobile apps.
3. Navigation and other UI elements are minimized for the majority of onboarding steps.
4. Almost all aspects of an onboarding flow are an authenticated experience.
5. There are a common UI patterns used to achieve specific goals in onboarding flows.
## Findings Details
### Onboarding flows for modern websites and apps typically include multiple sub-flows or steps designed to increase user engagement with each step.
All the flows we reviewed included at least one of these aspects. Others included all of them, especially sites that have an element of personalization such as Netflix or LinkedIn.
#### Feature overview to encourage people to sign up for an account
This was most commonly seen on the homepage of a website. Highlighting or summarizing features was either the focus of the homepage, or in a carousel in the top half of the page.

USAA’s homepage starts with a succinct and actionable list of services they provide, followed by a call to action (CTA) to join.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-usaa-homepage-ctas.png" alt="screenshot showing USAA’s homepage starts with a succinct and actionable list of services they provide, followed by a call to action or CTA to join." width="600" />

#### Account creation flow
Every website and app we reviewed had an account creation flow. The basic account creation process on ID.me or login.gov is not dissimilar to what we saw. Creating an account was a primary goal of many the sites we looked at, especially for sites that provide paid services.

Netflix’s entire homepage is a simple benefit statement with a call to action to start the account creation process.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-netflix-homepage-ctas.png" alt="screenshot showing Netflix’s entire homepage is a simple benefit statement with a call to action to start the account creation process." width="600" />

The Social Security Administration takes a similar approach to VA.gov with an account creation CTA on the upper right side of the homepage, which also leads to ID.me or login.gov.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-ssa-homepage-ctas.png" alt="screenshot showing Social Security Administration taking a similar approach to VA.gov with an account creation CTA on the upper right side of the homepage." width="600" />
	

#### Profile set up flow
Setting up a profile was an immediate next step after account creation on many of the sites we looked at.  Users were typically asked to provide 2-3 pieces basic information, like name, date of birth, and gender to establish their profile.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-airbnb-create-profile.png" width="600" />

In the screenshot above, Airbnb presents a modal to provide profile information as an immediate next step after an account is verified. In the modal, we see the total number of steps called out, and an option to exit the flow. Not all sites we saw provided an obvious way out. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-quicken-create-profile.png" width="600" />

In the Quicken screenshot above, we see a direct and simple approach asking for 3 key pieces of information 

#### Asking for additional information to inform personalized recommendations. 
This step almost always had some content explaining why the information was being requested. Oftentimes, the content tied back to the users goals and served as a way for people to learn about what the app or website can do for them.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-linked-in-flow.jpg" width="600" alt="image showing 4 screens from LinkedIn that take the user through a flow to gather personal information to make recommendations." />

Some flows, like the LinkedIn screenshot above, included multiple, focused screens to gather a different types of information.

### We observed some additional welcome steps in onboarding flows on dashboard-type websites, and within mobile apps.
- A series of welcome screens that highlight specific features or functionality, after an account was created. The VA Mobile App currently has this functionality.
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-va-mobile-app-intro-carousel.png" width="600" alt="image showing 4 screens from the VA Mobile App that highlight things a person can do in the app." />
- Providing users with 2 options for next steps to help them get started using the website or app. These typically focused on the primary offerings of the site and serve as a way to teach people what they can do.
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-user-research-welcome-next-steps.png" width="600" alt="image showing 2 options as next steps on the user research welcome screen." />
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/onboarding/onboarding-basecamp-welcome-next-steps.png" width="600" alt="image showing 2 options as next steps on the Basecamp welcome screen." />
- A progressive tour of the UI, usually with tooltips and

### Navigation and other UI elements are minimized for the majority of onboarding steps.

We noticed that during most onboarding steps, the site navigation was stripped down or removed entirely, and there were very few other elements on the screen. Many screens almost felt like a modal, where the main content was contained and centered with a significant amount of negative space surrounding it.  This is present in nearly all of the examples above.

### Almost all aspects of an onboarding flow are an authenticated experience.

**UI patterns**
- tooltips to highlight features, especially if they’re now
  - sometimes dismissible
  - sometimes have a “next” button to take a person into the new feature
- Tools like Slack have people use the feature to teach them about the next one. E.g. prompt to send first message, then shows them how to react (or something)

### There are a common UI patterns used to achieve specific goals in onboarding flows.
### Setting up an account


- Many websites walk users through a series of simple screens, with one question per screen, as part of the account set up process. There is typically an explantation to inform the user why this is being asked. The questions serve a couple of purposes:
  - They help personalize their experience once their account is set up.  The questions typically have content that explains why the information is being asked.  For example, Netflix asking for personal information (dob, gender identity) and 3 movies a person has seen that they liked, to make appropriate recommendations
  - The questions also teach users about features and tools on the website. LinkedIn asks users to choose “What’s the main thing you want to do?” which teaches new users about three main features/tools on the website.


## Opportunities
After conducting this review, we identified some opportunities for VA.gov to can keep in our pockets if further research indicates we need to create an onboarding solution for VA.gov

1. Do a better job of succinctly summarizing the benefits of creating a VA.gov account, in an engaging way.  We’re currently pointing people to a long article style page that doesn’t engage in the same way a private sector page does.
2. Create a variation of sign-in modal that prioritizes creating an account over signing in with an existing one, so we can link to it from any place we have a call to action to create an account (e.g. the homepage).
3. 
