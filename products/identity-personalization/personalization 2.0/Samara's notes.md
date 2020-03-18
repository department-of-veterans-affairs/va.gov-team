# Planning — 10/9/2019

## Project progression

To help scope each phase of personalization 2.0, I thought it would be helpful to document a high level path between personalization 1.0 all the way through to what I think personalization 3.0 might be. I think having that final vision in sight will help us figure out some of more specific updates we'll be making as we revisit My VA, Profile, and Account.

### Personalization 1.0

#### MVP: Spring 2018

Creation of the initial logged in experience:

- Dashboard: Manage applications, and see updates to claims, prescriptions, and messages.
- Profile: See your personal, contact, and military information.
- Account: Landing page for sign in settings and security.

#### Additional features

- Find VA Benefits: Added winter 2018. Outlines the steps to get started with each benefit and let's people select the benefits they're most interested in.
- Health care status: Added spring 2019. Includes health care application statuses and enrollment information.

### Personalization 2.0

#### Goals of personalization 2.0

- Clean up the personalized pages so they are easier to use, find, and navigate (as outlined in the personalization 2.0 discovery).
- Integrate features from eBenefits (note: this work will be done by the eBenefits team and not the authenticated experience team, though we'll work with the eBenefits team to make sure our efforts are coordinated).
- Create something that will scale as features are integrated.

#### Setting us up for personalization 3.0

We're not going to create a separate logged in site for personalization 2.0 because we don't have enough of the VA universe integrated into VA.gov. Once we have all the eBenefits features and can retire the site, and if we ever integrated MHV into VA.gov, we'll be ready for a separate logged in site experience.

In the mean time, we need to set ourselves up for that future. To be in a place where we can accomodate that future, we need to do the following:

- Redesign the profile, including combining features from the 1.0 account page and retiring the account page.
- Migrate eBenefits features over to VA.gov.
  - MVP: set up tool pages for them, and make sure they are linked to from personal pages.
  - Next step: Potentially integrate these into personalized sections.
- Add notifications.
  - MVP: In-app.
  - Next step: Add text/email notifications as we're able for different tools, and add settings page to manage preferences.
- Update the homepage/My VA

Ideally, though this may not be in the VA's roadmap, it would be great if we were consolidating MHV into VA.gov as well.

#### Phase 1: Combine profile and account

- Integrate the features currently on the Account page into the profile.
- Visual update/restructuring of the profile.
- Integration of benefit info into profile.
- Removal of "Account" from the navigation and My VA. "Profile" will remain in the navigation and in My VA.
- Revisit wayfinding throughout the rest of VA.gov. 

#### Phase 2+++

This is what we need to map out to figure out how we set outselves up for 3.0. Broadly speaking, we need to:

- Add notifications
- Figure out what health and benefit information we are elevating outside of the content hubs, and where and how it should be elevated.
- Figure out what record information we are elevating outside of the content hubs, and where and how it should be elevated.
- Figure out if we should scrap My VA, or if that now acts as the landing page that centralizes health, benefit, record, and profile info.

### Personalization 3.0

As of 10/2019, I see Personalization 3.0 as a separate, logged in portal for VA.gov. This is similar to a health care portal or logging into your bank account. While you can get back to the main "content" site, you're effectively in a separate site portal where the navigation is focused on managing the user's experience instead of marketing to them.

In my very preliminary thinking, this site include:

- Sections:
  - A homepage/dashboard
  - Notifications
  - Your health care (think basically rolling MHV tools into this site, or linking out to MHV if we have to)
  - Your benefits (disability, education, etc... basically any valuable enrollment information and history)
  - Your records
  - Your profile and settings
- Link bank to the "main" VA.gov in the main navigation.
- Link out to content pages on the "main" site as neccesary.
- URL would still be something like VA.gov/my-VA, not a subdomain. 

# Initial planning — 9/2019

## Potential project breakdown

1. Combine Profile and Account
2. Updated My VA/Homepage approach
- MVP of internal notifications
- Homepage or dashboard 2.0 update (note: this may be in tandem with number 2 depending on how we decide to execute this project)

## Combine Profile/Account planning

This likely won't involve much pushback or conversations with other teammates, so we can probably dive into this first. 

### Planning
- Review plan with DSVA team (9/26/19)

### IA & card sort
- Create content inventory of what needs to be included in the combined Profile and Account section.
- Propose new IA.
- Review card sort results for nomenclature.
- Share proposal with Mikki and make updates.
- Create closed card sort.
- Circulate, evaluate card sort and make updates.
- Review wayfinding in logged out states and on content pages — what content pages do we need? What additional wayfinding elements do we need to add?
- Update main navigation.

### Design
- Make design updates.
- Create mockups for all states.
- Update as needed based on technical requirements and research.

### User testing 
- Plan and recruit for user testing.
- Make updates based user testing results.

### Development

- Technical discovery
- Initial build
- Updates based on user testing

### Pre-launch

- QA
- UAT
- Launch activities
- Launch

## Updated My VA/Homepage approach

- Work with Lauren, Steve, Andy, and other team members to figure out exactly what content we need to account for on a homepage/dashboard.
- Determine general approach 
  — Are we keeping My VA? Are we scrapping it? 
  - What updates, if any, need to happen to the logged in homepage? 
  - Do any stakeholders need to be involved in logged in homepage updates? 

### Notifications

#### Discussions

- Talk to Clarice about how this overlaps with her work.

#### Research

- **Do we need more research? What are our questions?**
  - What makes someone sign in to check a claim, prescription, message, etc?
  - Will people find in-app notifications useful, or do they just want email/text?
  - What other in-app notifications might be helpful?
  - What info do people want to see?
    - Thoughts from Kevin: I wonder how we might develop personas to guide our platform level thinking. E.g. "the only-health info," the "tell me everything," the "I want just the basics" vs. "I'll read the detail."

#### Design

- Take inventory of what functionality we have that we could convert into notifications.
- Determine IA and interaction design approach.
- Determine navigation changes.
- Work with copy.
- Work with visual design as needed.

#### User testing 

- Plan and recruit for user testing.
- Make updates based user testing results.

#### Development

- Technical discovery
- Initial build
- Updates based on user testing

#### Pre-launch

- QA
- UAT
- Launch activities
- Launch
