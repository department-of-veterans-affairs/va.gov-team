# What are the jobs of My VA?

As part of our [DEPO conversations on 12.2.20 about the My VA purpose and design direction](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/newsfeed-or-dashboard-approach.md), Sabrina posed the following question: What are the jobs My VA is supposed to accomplish (she also shared [this article](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done) which further elaborates on what that means)? We know people log in to complete tasks specific to their benefits, but this got me thinking more specifically about what users come to do, what My VA should do, and also what My VA is not responsible for doing.

## What users come to do

### High level user goals

From countless user interviews that have been done over the years, we know people come to VA.gov to complete tasks specific to their benefits. We also know that people want to see information that is personally relevant to them, and they don't want to be bogged down by links or suggestions that don't apply to them. As a result, we already have these user goals defined in the [My VA redesign our product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md):

- As a veteran, I want to be able to log in to VA.gov and easily find the tools and tasks that apply to my specific experience at the VA.
- As a veteran, I want to be able to log in to VA.gov and easily see status updates and notifications that apply to my specific experience at the VA.
- As a veteran, I want to be able to log in to VA.gov, quickly complete whatever I came to do, and then get back to the rest of my life.

### More specific user goals

But what does this actually mean? What are these "tasks that apply to my specific experience at the VA" (aka the jobs)? We have heard the following primary user goals from [our My VA discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md) and [other user research that has been done previously](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md):

- As a veteran, I want to see if the VA has given/is going to give me the financial compensation I have earned. I do this by:
  - Checking to see if my disability claim has been updated or accepted.
  - Checking to see if my disability rating has changed (as a proxy metric for whether the claim has been accepted or not).
  - Checking to see if my GI bill benefits have been paid out, and what my balance is. 

- As a veteran with VA health care, I want to manage my health online. I do this by:
  - Refilling prescriptions online, and checking to see if that refill has been issued.
  - Sending messages to my medical team and checking to see if anyone has replied.
  - Managing my VA health appointments.

- As a veteran, I want to easily be able to access my personal documents so I can use them to apply for other benefits, prove I am a veteran to an outside group, etc.

- As a veteran, I want to learn what other VA benefits I am entitled to that I do not already receive, and what other VA services might be offered to me. I also want it to be clear how I go about getting those benefits/services.

## My VA's jobs

### What My VA should do

Based on the jobs users come to do, this is what I see as the jobs of My VA:

- Show the status of a veteran's benefits. This includes if a veteran has none.
- Elevate updates on a veteran's benefits, including updates on where an application/claim is in process, updates on payments, or updates related to health care information. 
- Provide meaningful next steps on any statuses or updates.
- Prioritize benefits and use cases we know are most common based on user research.
- Show information in a curated, personalized way (eg. Don't show "Apply for health care" if they are enrolled in health care).

### What My VA is not responsible for

- To show all notifications and requests, especially notification and requests that are suggestions or requests of the VA that were not initiated by the veteran (eg. "Check to make sure your address is up to date"; "We've got a new feature on VA.gov!").
- To show anything that is historical or no longer relevant (eg. we don't need to show your old disability rating, old claims, previous appointments, etc).
- To serve as navigation into every single logged-in tool because our navigation doesn't cater to the authenticated experience.
- To be the entire authenticated experience.

# Overall page direction

The original question that prompted this review was around which design approach we should take for the dashboard: more of a newsfeed approach (show all updates, notifications, and requests) vs. a traditional dashboard approach (shows users set information about their benefits each time they come to the site). While either approach could be made to fit the jobs of the page, I think **the traditional dashboard approach** accomplishes the jobs better for the following reasons:

- This approach better allows for growth and progression in a veteran's experience over time. For example, it allows us to guide and curate the experience for new veterans, and allows them to more clearly see as a benefit goes from application > in review > approved. I don't think the newsfeed approach would allow for a progression in the same way.
- This provides a more consistent landing pad for people when they sign in. While a newsfeed approach is great at bubbling information to the top of the page, assuming that information is in reverse chronological order of updates, you don't know what to expect or what you're looking for when you log in. With the traditional dashboard approach, you always know you can check a certain block/section of the page for an update (eg. updates on your claim; when your next appointment is scheduled; etc).
- While every veteran has different circumstances, we know enough to curate an experience based on what's most popular on the site and what most veterans come to do. We don't need to rely on the reverse chronological order of a newsfeed to do this for us.
- This more of an iterative approach to what we have now.
- This approach works and really appeals to veterans... just not how we have it designed now. A more streamlined design like the [2018 blue sky prototype](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#a-design-like-the-blue-sky-prototype-would-be-useful-to-veterans) very much met veteran needs and expectations.
- We'll still need to figure out how to handle on-site notifications, but that's a whole new product that deserves dedicated time, discovery, and attention we don't really have right now.
