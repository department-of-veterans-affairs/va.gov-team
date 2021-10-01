# Discovery: editing contact info mid-task

Liz Lantz, VSA Authenticated Experience

10/1/2021

`draft`

## Background

VA.gov currently provides Veterans with different ways of editing their profile information when they're in the middle of another task, such as filling out an application.  This can distract users from the goal they're trying to achieve, and also creates a clunky UX as we attempt to get them back on track once they've updated their profile.  

We identified the need for a reusable, consistent way for Veterans to update profile contact information through the work we did on our notification settings MVP. There's an existing modal component from Profile 1.0, that isn't used in Profile 2.0.  A couple of teams have leveraged this solution, but no one has validated whether or not the solution works for Veterans.

## Goals

1. Identify where, if at all, we have already have contact info edit-in-place functionality on VA.gov and how it is working for Veterans.
2. Learn about other profile info edit-in-place use cases.

We'll use what we learn to inform our approach to a consistent UX we can offer Veterans for updating contact information regardless where they are on VA.gov

## Findings

1. Other teams are thinking about this problem. Two teams are already using the existing modal solution, and one has created two concepts ([flow 1](https://xd.adobe.com/view/0c64c9ff-aba2-422e-4d6e-be1ec4cab845-7a55/grid) and [flow 2](https://xd.adobe.com/view/81354811-0259-4aa6-9fd0-bd4f3d28d982-d466/grid)) to solve for this problem. No one has done any validation of the modal solution, or concepts.

   - One form is on production with the modal solution in place (Notice of Disagreement); the rest are in staging or prototypes
   - One reason linking to profile and opening in another tab didn't work because the application didn't reflect the updates made in the second tab without refreshing the page.
   - There's a lack of confidence that the modal provides a good mobile UX, but no data to back this up.

2. We identified multiple tasks during which Veterans can update their profile contact information:

   - Managing notification preferences.  
   - Filling out a form (such as notice of disagreement or pre-check in questionnaire).  
   - Checking in for an appointment at a VAMC
   - When scheduling an appointment

   There may be more use cases, but these should provide a sufficient variety to inform the design process.

3. We identified 5 patterns being used to guide people to update contact information:

   - A modal triggered by an edit button styled to look like a link. The edit button style is an accessibility violation, and needs special consideration given that this approach requires multiple edit buttons in one view. (Step in form applications, pre check-in questionnaire)
   - A link to va.gov/profile (VAOS, form review step)
   - A deep link to specific section on va.gov/profile (Profile notification preferences)
   - A link to a content page with information about updating profile information, which then gives users the opportunity to go through to va.gov/profile (VAOS)
   - Directing someone to speak to a staff member (Onsite check-in app)

4. There are forms that don't pull or update contact information from VA Profile (the API that we use to populate VA.gov profile).  We're not digging into those now, but there is potential for future tie-ins, such as asking users in that flow if they want to use the information they entered to update or create their profile.

   

## Examples

### Notification preferences

Uses a link to send users to the relevant section of profile's personal and contact information page.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/edit-contact-info-notifications.png" width="70%" />

### Forms: Notice of Disagreement and Request a Higher Level Review 

During the form flow, users can update their contact information through a modal triggered by an edit button

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/edit-contact-info-HLR-trigger-modal.png" width="50%" />

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/edit-contact-info-HLR-modal.png" width="50%" />

During the review step, users can update their contact information through a link that opens profile's personal and contact information page in a new tab.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/edit-contact-info-form-review-details.png" width="50%" />

### VA Online Scheduling

Users who are missing a home address are prompted to add one. This prompt takes them to the "changing your address on VA.gov" content page, which then leads them to profile.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/edit-contact-info-vaos-content-pg-link.png" width="50%" />

VAOS also has a link to profile in conjunction with a mobile number field that is not connected to VA Profile.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/edit-contact-info-vaos-direct-link.png" width="50%" />

### Check-in Experience

- In the pre-check in questionnaire, users can update their contact information through a modal triggered by an edit button



- During c

