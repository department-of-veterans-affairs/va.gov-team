# Authenticated experience product outline 

**Updated April 2020**

### Table of contents
- [Overview](#overview)
- [User problem statements](#user-problem-statements) 
- [Business goals](#business-goals) 
- [Questions](#questions) 
- [Assumptions](#assumptions) 
- [Requirements and constraints](#requirements-and-constraints)  
- [Value propositions](#value-propositions) 
- [KPIs](#kpis) 

## Overview

The authenticated experience team aims to create a world-class logged-in experience for veterans and their communities on VA.gov (for more on our vision and mission, see the [team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)). This product outline goes into detail around the goals, thinking, and metrics that guide our work.  

## User problem statements 

- **As a veteran, I want to be able to log in to VA.gov, easily find the tools and tasks that apply to my specific experience at the VA, and quickly complete those tasks.**
- **As a veteran, I want the VA to provide me with status updates, action items, and benefit info that applies to my specific circumstances instead of having to track this information down on my own.**
- **As a veteran, I want to see myself in my VA.gov experience.**

## Business goals 

- Create a logged-in experience that makes it easier to find tools and complete tasks.
- Personalize the logged-in experience across pages by elevating contextually-relevant veteran information.
- Create a usable/scalable landing pad for users (ie. logged-in homepage/dashboard) where they can manage their tools/tasks in once place.
- Make it easier to see and manage personal/contact information.
- Establish a foundation for notifications on VA.gov.
- Create a logged-in experience that can eventually be adapted to other user roles and permissions once VA.gov is able to support them.
- Help veterans explore benefits in which they are interested and may qualify. 

## Questions 

- How do veterans conceptualize the difference between a dashboard/logged-in homepage a profile? What kind of information do they expect to see on each page?
- What kind of notifications do veterans want to see, and where do they want to receive them?
- How can we effectively guide users when they are logged in?
- How can we create a logged-in navigation that doesn't totally eliminate the "explore" content?
- How can we more effectively insert users' information throughout non-tool content?

## Assumptions 

- Veterans want to quickly complete tasks on VA.gov. They want to get in, find what they are looking for, and get out as fast as possible.
- Veterans expect to see themselves reflected in their logged-in experience. They figure that the VA already knows everything about them because of transferred records from DoD and any other information they've already submitted to the VA.
- Veterans want to see status update/notification information when they sign in to VA.gov.
- Veterans want to receive email and text message notifications so they don't have to sign in to the website or call the VA call centers.
- Veterans want us to tell them what benefits they qualify for.

## Requirements and Constraints 

### Requirements

- Our work will be guided by our [vision, mission, and north star objectives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md#vision).
- Our work will put veterans first.
- Our work will consider the full veteran experience — from logged out to logged in, from online to offline.
- When we know information about veterans, we'll elevate it and present it to them in a way that helps them understand their experience and complete tasks.
- We will work to grow the design system so it better accomodates authenticated tools, flows, and use cases.

### Constraints

#### Data
- Data in the VA is complicated and all over the place. Different information is stored across hundreds of databases and is often duplicative or conflicting.
  - EG. Contact info currently stored across, EVSS, CORPDB, etc. - many locations, and often conflicting 
- For data we don't currently have but want, we may need a new ATO to get this information, and this could take a lot of time.
- We don't have all of the data we want, and we may not be able to get it because it the information isn't digital or is in a database that is a mess/unreliable/will be eventually sunset.

#### Design

- Elements of the logged in experience are set/affected by/affect the logged out experience, so we have to consider this in our work.
- The existing design system is tailored to the needs of unauthenticated content pages. 

## Value Propositions  

Creating a cohesive logged-in experience will:

- Help veterans complete tasks more quickly.
- Increase veteran satisfaction with the VA.
- Reduce the need for multiple touchpoints (other VA websites; VA call centers).
- Help veterans get benefits more quickly.

## KPIs 

We can measure we have moved in the right direction with the authenticated experience by measuring interactions on VA.gov, sign in behavior, and overall satisfaction scores.

#### Interactions to measure

This will show us that people are more easily getting to tools and completing tasks at the VA, which are two of our [north star objectives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md#north-star-objectives).

- More direct navigation to tools via the logged-in homepage or navigation.
- More interaction with the logged-in homepage.
- Greater use of self service tools.
- Reduced time to task completion on VA.gov.
- Lower call center volume.
- A decrease in mail/in-person interactions

#### Sign in behavior

This will show us that people think that it is worth logging in to VA.gov and interacting with us as an authenticated user. This would reflect that we have met our third [north star objective](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md#north-star-objectives) — making the VA feel like it's a 1:1 experience.

- More people logging in.
- More people verifying their identities.
- More logged-in sessions overall.
- Shorter time between coming to the site and logging in.

#### Overall satisfaction

If we see an increase in baseline ForeSee metrics, we'll know that we have made the authenticated experience more useful and enjoyable.

- Higher satisfaction ratings via ForeSee or Medallia.

#### VA business metrics

If we create a robust, useable, and scalable logged in experience, we may also see behavior changes around how VA teams approach building tools. We'd like to see:

- Increase in the amount of VA partners who want to build on VA.gov instead of building one-off tools.
