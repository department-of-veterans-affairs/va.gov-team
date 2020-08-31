# Logged-in homepage redesign plan

Based off of the [V1 plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/product/v1-plan.md) and the [Logged-in homepage discovery summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/discovery-summary.md) that Samara put together, we have planned out phases to design and build the new Logged-in homepage. 

In stakeholder interviews, one of the main concerns raised was that a logged-in homepage redesign could easily suffer from endless churn. In order to avoid this, we have outlined an initial approach to scope the project into manageable pieces.

First, we'll break this work into three projects:

- The logged-in homepage redesign.
- Creation of a logged-in navigation.
- Creation of a notification center.

This first project is focused on the logged-in homepage redesign. As time and resources allow, work on the logged-in navigation (in partnership with the IA and public websites teams) and notification center.

For the logged-in homepage redesign, we'll break the project into at least three phases:

- [ ] Storyboarding - break it down into tasks

Phase 1: Transfer the personalized information currently on My VA (in progress-application and claims; benefit info) to the logged-in homepage; Retire My VA.
Phase 2: Improvements to phase 1; Addition of features if applicable.
Phase 3: Improvements to the first-time user experience; Potential benefit recommendations.
Note: We will have a basic first-time user experience in phase 1.

This document lists what Samara would like to see on version 1 of the new logged-in homepage. We may decide this is too much for one project and instead break version 1 into multiple phases.

## Version 1 features

### My VA tools that are moving over

- Your applications
- Claim and appeal status
- Health enrollment status
- Refill prescriptions
- Secure messages
- Schedule an appointment

### Features we're adding that are not currently on My VA

- Overall disability rating 

### Links on the homepage we need to include

We basically need to include all of the links in the top 20 tasks on the homepage, **but** we'll show them conditionally if we have the ability to do so. So, if someone already has health care, we won't show the link to apply for health care, but if they don't have health care, we will show that link (but not links to prescription, messaging, or appointment info).

These are the links from the existing homepage.

**Health care**

- Refill and track your prescriptions (a link to view prescriptions will be shown conditionally if someone has prescriptions)
- Send a secure message to your health care team (a link to view messages will be shown conditionally if someone has messages)
- Schedule and view your appointments (shown conditionally if someone has health care in general)
- View your lab and test results (shown conditionally if someone has health care in general)
- Apply now for VA health care (shown conditionally if someone does NOT have health care)

**Disability**

- Check your claim or appeal status (shown conditionally if someone has a claim or appeal in progress)
- View your payment history
- Upload evidence to support your claim (shown conditionally if someone has a claim or appeal in progress)
- File for a VA disability increase (shown conditionally if someone has a disability rating)
- File a claim for compensation

**Education**

- View your payment history
- Change your current education benefits
- Compare GI Bill benefits by school
- Apply for education benefits

**Records**

- Get Veteran ID cards
- Get your VA medical records
- Download your benefit letters
- Change your address
- Request your military records (DD214)
- Change your direct deposit information (note: this is not currently on the homepage now, but there's enough evidence that we should add it.)

## Other expectations for version 1

-	A visual redesign of the My VA elements moving over to the logged-in homepage. We should NOT just move the blocks over as-is.
-	A very basic first-time user experience that will account for users who have no benefits and no applications in flight.
-	Retiring My VA.

## Out of scope for version 1

-	Doing anything with the Find VA benefits content that currently exists on My VA.
-	Incorporating any new data or integrations that do not already exist on VA.gov.
-	Any main navigation work.
-	Any "notification center" work.

## Potential future phases

These are some things it might be cool to add in the future, if possible. Don't get too caught up on these — this is not our focus.

- GI Bill benefit information.
- Recent payments from the VA (instead of just linking to them).
- Recent medical orders (eg. hearing aids, prosthetic socks, etc).
- The ability to interact with a feature right from the dashboard instead of having to click into it (eg. uploading evidence to a claim right from the homepage).
- Showing new data, or data in a different way (eg. could we show where a prescription is en route?).
