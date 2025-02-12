


# Release Plan - Oracle Health Travel Claim

**Important Dates:**

 - [x] Staging Review -  August 29, 2024
 - [ ] Pilot Release - TBD
 - [ ] Limited Availability Release - TBD
 - [ ] General Availability Release - TBD

## Step 1: Development

Since this is a stand-alone application within the check-in namespace we can also use PagerDuty to put the applicaiton into maintenance mode
 - [Production Service](https://dsva.pagerduty.com/service-directory/PPS19LL)
 - [Staging Service](https://dsva.pagerduty.com/service-directory/PHVXQUE)

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Pilot Release (i.e. release to a pilot facility)

### Planning:
- Pilot will include all Veterans at the Spokane, WA facilities
- Pilot users see faciity posters directing them to text "travel" to an SMS short code

## Rollback Plan 
- Application is behind feature flags and can be disabled 

### 1-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 2-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 3-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 4-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

## Post-launch Questions 
- How does the conversion rate compare over time?
- Does the completion rate increase over time?

## Step 4: Limited Availability Release (i.e. release to certain facilities)

### Planning:
- OCTO with VTP will determine to which additional facilities to release
- Users see faciity posters directing them to text "travel" to an SMS short code

## Rollback Plan 
- Application is behind feature flags and can be disabled 

### 1-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 2-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 3-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 4-week results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

## Post-launch Questions 
- How does the conversion rate compare over time?
- Does the completion rate increase over time?

## Step 5: General Availability Release (i.e. release to all facilities)

### Planning:
- OCTO with VTP will determine the timing of releasing to all facilities
- Users see faciity posters directing them to text "travel" to an SMS short code

## Rollback Plan 
- Application is behind feature flags and can be disabled 

### 1-month results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 2-month results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 3-month results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

### 4-month results:
- Audience: Number of unique users who verified their identity
- Conversion Rate: % of users who verified their identity and submitted a claim
- Completions: Number of claims submitted
- Errors: number/% of errors that occured on submission

## Post-launch Questions 
- How does the conversion rate compare over time?
- Does the completion rate increase over time?


