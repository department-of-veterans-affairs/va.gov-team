# Analytics Summary

Analytics reviews Spring-Summer 2020, summary compiled in August 2020

# Background & goals
We referenced analytics for VA.gov as well as My HealtheVet and eBenefits to understand what was most highly visited on VA sites. We used analytics to help make decisions about the MVP feature set. 


# Analytics review

## Auth vs. unauth users on mobile and tablet (data from 4/2019-4/2020) 

### Auth users
- Claims have highest page views for auth users. 
  - Of the top 5 most visited pages, Claims and Appeals accounts for 3/5. 
  - Claims and Appeals is following by login, suggesting users are coming to VA.gov to log in specifically to check their claim or appeal.
- However, time spent on Claims pages is less than on other pages. Of repeat users on mobile, Claims is also the top page. This suggests to us that Vets on their phones may make frequent checks to their claims status. 

### Unauth users
- The Facilities page has the highest page views for unauth users. 
  - Facilities (5,000,000) is significantly higher than the next most visited page (1,500,000). 
  - Speaking of the next most visited page, it's Claim and Appeal Status. This indicates that a large amount of unauth users are visiting this page, then signing in to check their status. 
- Unauthenticated users also check the facilities page 5x per session (other pages average 1.5x). Is this because they are checking it on the go and would an app make it easier to do so?

**Takeaways:**
1. We should strongly consider Claim and Appeal Status as an MVP feature.
2. We should strongly consider Facilities as an MVP feature.


### Claims & appeals
- The claim status tool is the most popular tool on VA.gov outside of the homepage. From May 1, 2019-May 1, 2020, tracking claim or appeal status accounted for just under 8% of all traffic on VA.gov.
- Of the top 10 pages during this time frame, 3 relate to claims (#3, #5, #7). 

### Landing pages
- In keeping with the findings shared above regarding Claims and Appeals, Claim or Appeal status is the top landing page, with 40% of total traffic.
- Downloading IDs and records account for 12% of the top landing pages, taking the slots as the 5th and 6th most visited landing pages.
- Also of note, the Coronavirus FAQ page was the second highest landing page. 

**Takeaways:**
1. We should consider including documents housed within the letters API for automatic download in the app. 
2. We should consider including application for Veteran ID cards a fast follow after the MVP. 
3. We should consider how to give COVID information and resources a temporary place in the app, given that COVID related information will be needed by Veterans for the forseeable future. 


### My HealtheVet & health features
Overall, across VA sites, these three pages rank in the top 10 most popular:  
- Messaging their medical teams (~56MM page views)
- Refilling Rx (~47MM page views)
- Viewing labs and tests (~25MM page views)

### Overlap between Claims + Healthcare users
In a one year period from 6/18/19-6/18/20 2019-06-18, over one million users logged in to VA.gov to use a health care feature and later in the year logged in to use a claims feature:

Segment Overlap|Users who visit _Health Care_ Pages|Users who visit _Claims_ pages
----|----|------
1,171,281|5,479,354      |  4,401,957


## Previous research review
The Logged In homepage team put together [a summary of analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md#logged-in-homepage-discovery-analytics-review) as part of discovery. Some key findings from this effort that are extremely useful for mobile app are:
- On the modernized site (va.gov), the claim status tool is king [(source).](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md#on-the-modernized-site-vagov-the-claim-status-tool-is-king)
- People start on the homepage, the claim status tool, and the facility locator [(source).](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md#people-start-on-the-homepage-the-claim-status-tool-and-the-facility-locator)
- In the non-modernized data (VA.gov plus MHV, eBenefits, etc.), we can see just how important health care management is to the veteran population [(source).](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md#in-the-non-modernized-data-vagov-plus-mhv-ebenefits-etc-we-can-see-just-how-important-health-care-management-is-to-the-veteran-population)



## Call center data
From  6/1-10/25/19, there were 673,882 calls recorded to VBA NCC. The top driver for calls was claims. Claims accounted for ~42% of all calls (284,822).
- Of calls where claims was the driver, ~88% of calls were to check general status. 
- After general status, the next most common reasons for calling are document verification and exam. However these clock in at ~5% and ~3% respectively, showing how much volume VBA NCC gets regarding claims status.
- A high proportion (12%) of calls are about Correspondence and forms, nearly half of which are requests for benefit letters. 
- 10% of calls are about 'Update Information' issues.

**Takeaways:**
1. Include claims status in MVP to reduce call center volume. 
2. Include Benefit letters in MVP. 
3. Editable VA.gov profile. 


