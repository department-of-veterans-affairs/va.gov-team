# Release Plan: Pension and Burial Form Deactivation
---
## Components
- New form review pages for users with in-progress pension and burial claims
- Deactivation and redirection of entry points (ulrs) for pension and burial forms (CAIA assisting)
- Email to users with in-progress forms notifying them of temporary deactivation

## Phase I: Testing

### Planning:
- **Date range or test duration** Estimated: 9/18 - 9/22
- **Desired number of users:**
   - 1 test user with an in-progress claim (authenticated and non-authenticated)
   - 1 test user without an in-progress claim (authenticated and non-authenticated)
   - 1 test user with an email address within their claim
   - 1 test user without an email address on their claim but a MyVA profile email as an alternative
- **How you'll conduct the testing:** Testing will be conducted in the VA.gov staging environment using test accounts and through unit testing.


### Results:
- **Bugs identified / fixed:**
   - [Burial Deactivation Staging Review Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62889)
   - [Pension Deactivation Staging Review Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64897)

## Phase II: Rollout

### The Plan

**Desired date range:** 9/25/23 through 9/29/2023 (Target deactivation date is a Wednesday based on analytics included below.)

**How will you make the product available in production while limiting the number of users who can access it?** 

The changes will be lauched to 100% of users right away to limit issues with multiple deactivation dates and allow the email notificaiton to quickly follow deactivation.

- Day 1: Launch review pages to 100% of users with in-progress forms. (1 day)
   - This includes extending the expiration date of all in-progress forms by a year (creation_date + 306 days)
- Day 1 or 2: CAIA releases updates to "how to apply" page (1 day)
- Day 1 or 2: CAIA deactivates form entry points and implements redirects to "how to apply page" (1 day)
- Day 2 or 2: Email notification to users with in-progerss forms is triggered (1 day)
- Fast-follow: Generate Intent to File Report (ITF) for VBA Pension/Burial Team ([#64403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64403))

**What metrics-based criteria will you look at before advancing rollout to the next stage?:** 

- Volume of form use by day of week -- Target deactivation date is Wednesday.
   - Pension (1 week of activity)
   - ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/134541644/215eeb37-0b21-4fb1-afef-d0d153ce224f)
   - Pension (Wendesday activity)
   - ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/134541644/cac3101d-8b42-454c-b43e-ae7b15694293)

   - Burial (1 week of activity)
   - ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/134541644/bd96fd1f-41c5-4bdf-bffd-12a7d017ba1e)
   - Burial (Wednesday activity)
   - ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/134541644/676345ff-e48b-4ff7-a09b-a77b0f6a9936)


## Go Live!
- Desired date: September 27, 2023
- Actual date: 

### Day 1 Post-Launch
- User Experience
   - User with an in-progress claim (authenticated)
      - Receives [burial](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64680) or [pension](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64679) email notifying them that the online claim form is not working right now and they need to submit their claim via paper form.
      - When the log in to VA.gov to view their in-progress claim, they see a form summary page with all of the info entered into their saved form.
   - User with an in-progress claim (un-authenticated)
      - When they visit VA.gov they are notified by text on the "how to apply page" that the online claim form is not working and they can submit via paper form.
   - User without an in-progress claim (Un-authenticated)
      - When they visit VA.gov they are notified by text on the "how to apply page" that the online claim form is not working and they can submit via paper form.
   - User without an in-progress claim (authenticated and non-authenticated)
      - When they visit VA.gov they are notified by text on the "how to apply page" that the online claim form is not working and they can submit via paper form.

### 1-week results:
- Opened emails
- Email click-throughs
- Form PDF downloads
- Page visits
- Error counts

### 1-month results:
- Opened emails
- Email click-throughs
- Form PDF downloads
- Page visits
- Error counts

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? 

2. What qualitative feedback have you gathered from users or other stakeholders, if any? 

3. Which of the assumptions you listed in your product outline were/were not validated? 
   
4. How might your product evolve now or in the future based on these results?

# Go-to-market Strategy

**How are Veterans and others using this product going to know it exists?**

Users with in-progress pension or burial applications will receive an email letting them know that the digital form is no longer available and they will need to submit their claim using the paper version of the form.

**What marketing, outreach, or communications are necessary for this product to be successful?**

See above.
