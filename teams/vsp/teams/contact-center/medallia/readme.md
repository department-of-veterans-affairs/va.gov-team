*_[Duplicated in Confluence](https://vfs.atlassian.net/wiki/spaces/Contact/pages/1765113923/Medallia+User+Surveys+Overview+WIP)_*

## Medallia User Surveys Overview

**Summary:** Information on VA.gov surveys.

### Account access

OCTO-**DE** Lead: Chante Lantos-Swett, Kevin Hoffman

Product Manager: Anita Middleton

Medallia Contact: @sarkis 

## Available surveys

### Intercept survey 

This is the main VA.gov survey that collects general website satisfaction and trust feedback. 

**Excludes:**

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

### Always on (_Feedback_) survey

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

**What is looks like:**

![image](https://user-images.githubusercontent.com/45946766/113457260-3c54de00-93c4-11eb-9617-538f6c9c1384.png)

**Where to see it live:**

Right [here](https://www.va.gov/find-locations) on our VA.gov Find Locations page(s).

**How to add:**

For this survey to be implemented on your VA.gov page(s), you must request is using 'User Survey - Request Template' in Zenhub. 

More information on the process for requesting a Medallia user survey can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/medallia-request-survey.md). 

### Additional Resources

- [How to request a survey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/medallia/medallia-request-survey.md)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/product-outlines/medallia-product-outline.md)
- [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/medallia/medallia-release-notes.md)
- [Rollout](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17925)
