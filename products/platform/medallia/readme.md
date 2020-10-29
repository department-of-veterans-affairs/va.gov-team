## Medallia Overview (WORK IN PROGRESS)

*NOT LIVE IN PRODUCTION*

**Summary:** Information on VA.gov surveys.

### Account access

DEPO Lead: Jeff Barnes, Kevin Hoffman

Account Owner: Joanne Esteban @joanne

Medallia Contact: @sarkis 

### Table of Contents

- [How to request a survey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/medallia-request-survey.md)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/medallia/medallia-rollout.md)
- [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/medallia/medallia-release-notes.md)
- [Rollout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/medallia/medallia-product-outline.md)

## Available surveys

### Intercept survey

This is the main VA.gov survey that collects general website satisfaction and trust feedback. 

**Excludes:**

- VA.gov homepage
- myhealth.va.gov
- ebenefits.va.gov
- benefits.va.gov
- All VAMC subdomains

**Targeting parameters:**

- Loyalty factor of 3 or more pages
- 5% of users who hit the loyalty factor
- Based on sessions, not users
- Pop up window
- If a user declines an invitation, does not intercept for 90 days
- If a user submits a form, does not intercept for 90 days

**Content:**

*4 questions*

1. Please rate your experience with VA.gov today.
   - Very bad
   - Somewhat bad
   - Neither bad nor good
   - Somewhat good
   - Very good
2. Why did you select that rating? (Select all that apply)
   - My need was addressed
   - My issue was resolved.
   - I found what I needed.
   - My question was answered.
   - It was easy to complete what I needed to do.
   - It was easy to find what I needed.
   - It took a reasonable amount of time to do what I needed to do.
   - I found what I needed on the site quickly.
   - I was treated fairly
   - I understand what was being asked of me throughout the process.
3. How did this interaction change your trust in Veterans Affairs?
   - Decreased my trust
   - Somewhat decreased my trust
   - Neither increased nor decreased my trust
   - Somewhat increased my trust
   - Increased my trust
4. How much do you trust Veterans Affairs to fulfill our country’s commitment to Veterans?
   - High level of distrust
   - Modest level of distrust
   - Neither trust or distrust
   - Modest level of trust
   - High level of trust

---

### Always on survey

This the the survey that is used to collect user feedback for specific Veteran Facing Services.

**Targeting parameters:**

- Floating feedback button on the right hand side of specific URLs

- Lightbox element

**Content:**

*3 Questions*

1. Were you able to do your task today?
   - Yes
   - No
2. What task were you trying to do today?
   - [Free text]
3. What is your overall satisfaction with this site?
   - 1 = Very dissatisfied
   - 5 = Very satisfied
