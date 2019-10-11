# Beta program 2.0 requirements

For the personalization 2.0 products, first of which scheduled to launch on/around January 2020.

## What is it?

Enrolling in this beta program gives enrolled users access to the new combined account & profile.

## Why are we doing this?

Provide a limited set of users early access to new tool in order to understand:
- Are there bugs? (As a user with XYZ data, this feature should work and it doesn't.)
- Ease of use (As a user, I found it pretty intuitive or not to interact with this tool.)
- Usefulness/Relevance (As a user, these new tools help me.)

## How long will it run?

Beta can run for 2-4 weeks, depending on how long it takes to confirm that enough users have tried it. We will be using our feedback forum plus Google Analytics to monitor this. At 2 weeks, the team will make a call to continue beta for another 2 weeks or end it. 

## Who can use it?

A user must meet the following criteria in order to enroll in the beta program:
- Is a Veteran
- Has previously signed into VA.gov with an LOA3 account, either via ID.me's IDP process, or a DS Logon or MyHealtheVet premium account
- Has a record in MVI

## How will users find out about the beta program?

We will notify users about the beta program via on-site notificaton.  Once the beta program islive,users who sign into VA.gov and mee thte criteria above will see propmts to particip
- **Email invitation:** we will specifically target 100-200 users (found via Cohorts and user feedback) with an email inviting them to participate in the beta program based on the criteria identified above
- **On-site notifications:** once the beta program is live, users who sign into Vets.gov and meet the criteria above will see prompts to participate in two different locations:
  - Banner notification: a persistent fixed element announcing and linking to enroll; appears upon sign in
  - Account page (vets.gov/profile): includes a description of the beta program and link to enroll
  - **TO DO: Determine if we can throttle who sees the on-site Beta opt-in beyond just LOA3/MVI designation**
    - Can we identify which tools users _have used_ vs which they just technically have access to? See if services list identifies this
    - Can we track recency of usage to more accurately identify people who will most likely have data to see in their dashboard?

## How will users enroll in the beta program?

The notifications above link to a unique enrollment page URL (vets.gov/beta-enrollment/personalization) (not behind a password) that will allow users to opt-in to the beta program. Navigating directly to any of the beta tool URLs will also redirect users to this page.

When enrolling from this page:
- If a user is not signed in, they will be prompted to do so in order to enroll
- If a user signs in and meets the enrollment criteria, they will be enrolled
- If a user signs in and does not meet the enrollment criteria, they will not be able to opt-in and should receive some gentle off-boarding back to the hompepage
  - Out of scope: allow users to sign up to receive an email notification when the beta launches publicly

## What will users experience when enrolled in the beta program?

- A user who enrolls will be redirected to the beta dashboard and see the new beta profile and account links reflected in the account nav dropdown
- Throughout the program, users will have an opportunity through an on-site prompt to provide feedback on their beta experience. Users may provide feedback as many times as they want. 
- When the team determines it has received sufficient feedback and addressed necessary changes, the beta MVP tools will be rolled out to production for public access. 

## How will users opt-out of the beta program?

- The beta account page will include a link to opt-out of the program. Doing so will remove the user's access to the beta tools.
- Users who opt-out of the program will be asked to provide feedback.

## How are we evaluating the beta program? 

- Throughout their beta experience, users will have an opportunity to provide feedback through a feedback-collection mechanism, such as an Optimal Workshop card sort or first-click test. This feedback will be reviewed throughout the process to give designers/engineers an opportunity to course-correct if users are encountering recurring issues. 
- Users will be given an opportunity to provide an email address in the feedback mechanism, in case they want to talk to one of the team members about their beta experience. Depending on how many people opt to provide an email, we can set up individual calls, or we can do a webinar. 
  - **TO DO: decide on feedback mechanism - Medallia, OptimalSort, or internal**
- Throughout the beta process, the team will monitor and analyze Google Analytics traffic, funnels, and events. 
- We won't offer a thank you gift to beta users
