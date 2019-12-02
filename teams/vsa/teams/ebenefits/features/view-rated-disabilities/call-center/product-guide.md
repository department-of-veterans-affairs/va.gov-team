``` diff
- Screenshots will be embedded soon
- This will end up as a pdf for final delivery to Call Center
- Draft, needs urls and editing
```

# Rated Disabilities

### Table of Contents 
 - [What is it?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#what-is-it)
 - [User Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#user-access)
   - [Who can access?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#who-can-access)
   - [How can users access?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#how-can-users-access)
 - [Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#navigation)
 - [FAQs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#faqs)
 - [Functionality](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#functionality)
 - [Error Handling & Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/call-center/product-guide.md#error-handling-and-notifications)
 - [Video Demo Link (YouTube)](#)

## What is it?
The **Your VA disability rating** screen is where Veterans (or caregivers) can view their combined VA disability rating, and the individual disabilities in their record. On this page, there are links to other information and tools that can help the Veteran understand their rating(s), and decide what to do when they have a problem or question. Information and tool links include:
- Compensation 101: How did I get this rating? video on YouTube; this explains how disability claims are determined, and how ratings are calculated.
- A link to check claims and appeals
- The VA phone number: 800-827-1000
- Breadcrumb links will take the Veteran a content page (Disability benefits), and a landing page (View your disability rating) with more information on disabilities and disability claims

The **Your VA disability rating** screen will show disability ratings that are in the VA record. If a Veteran does not have a disability rating, an informational alert box.

If there is an error getting the Veteran's disability rating, an error alert will appear. It is possible that either the combined VA disability rating, or the Individual disabilities, or both to show error alerts.

Target launch date is end of November 2019, early December 2020.

## User Access
### Who can access?
 Rated Disabilities is currently available to LOA3 (eBenefit Premium) users.  While other users can currently login on a Veterans behalf, it is not anticipated that this will be possible on VA.gov until Roles and Relationships are finalized.
``` diff
- TODO: I don't know if the other non ID.me access methods are valid
```

### How can users access?
 This feature is accessible for testing within the staging environment at this url: https://staging.va.gov/disability/view-disability-rating/rating, and can be accessed in any modern browser.

 The Rated Disabilities Tool page also conforms to 508 compliance and can be used with major screen readers and other assistant tools.

## Navigation
Browsing within VA.gov from the disability page should bring the user to an unauthenticated landing page (https://va.gov/disability/view-disability-rating) which should answer some general questions about the tool as well as present the login button to gain access.

After proper authentication, the Veteran is brought to the Rated Disabilities page.  

There are a few other pages that the Veteran can browse to learn more about how the rating is calculated, how to get assistance in the event that the values represented are unexpected as well as a link to the Claim Status Tool.

## FAQs
**Where can I learn more information?**  
A link for more general inforamtion can be found at this url: https://www.va.gov/disability/about-disability-ratings/

**What if I disagree with the information shown?**  
The link to the ratings calculator can be found at this url: https://www.va.gov/disability/about-disability-ratings/
The link to the Claim Status Tool can be foudn at this url: https://www.va.gov/claim-or-appeal-status/

**Who can I call if I need help?**  
Ensure you are dialing the correct number: 1-800-827-1000

**I have a disability that is pending, where can I go to get more information?**  
The Claim Status Tool is the best way to see what claims are currently pending.  The url for that is: https://www.va.gov/claim-or-appeal-status/

**I am logging in on behalf of a Veteran, why can't I see the proper information?**  
VA.gov does not accomodate other non-Veteran users at this time.  
``` diff
- TODO: Not sure if this is accurate?
```

**What does "service connected" mean?**  
"Service Connected" is an issue or injury that occurred while the Veteran was in service.  Non-Service Connected issues or injuries are important but may not contribute to the overall rating as they did not occur while the Veteran was in service.

**I don't see a number next to my individual rating.  Where is it?  What does that mean?**  
This usually means there is no rating due to the issue or injury being designated as non-service connected and therefore not applied to the Total Combined Disability Rating.  Non-Service Connected will show 'null' percentage (i.e., nothing) where a Service Connected issue or injury can have anything ranging from 100% to 0%.

## Functionality  
The Rated Disabilities tool page simply shows the total combined disability rating (critical for establishing levels of compensation) and the individual ratings that are service connected, and therefore a part of that calculation, and non-service connected which are for issues that have occured while the Veteran was not in service.  These are important for inclusion as some might be pending or be needed to take into account.

The Veteran also has the option of browsing into the Claim Status Tool in order to learn more about the status of individual claims (e.g., active, inactive or pending).

## Error Handling and Notifications  
There are wrappers around each component that detect when data is successfully recieved and available. A loading spinner appears to indicate the page is loading relevent information for each component as well.  

In the event that the page does not see the data, a blue messaging window appears.  

In the event that the page cannot load, the page (or part of a page) due to a system issues, a red messaging window appears.  

Also included is workflow that shows how the Veteran can get in and out of the Rated Disabilities tool.  

**Other Error Handling Notes**  
- vets-api error mapping: https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/locales/exceptions.en.yml This is a comprehensive list of all expected exceptions within vets-api, not specific to rated disabilities.  
- Errors related to the disbaility compensation form (526) can be found here: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/disability_compensation_form/service_exception.rb These get mapped to the exceptions.enyml file referenced above. The exceptions are handled in a linear/sequential fashion, meaning the first exception in the list that is encountered is the one that will be returned.  
- wss-form526-services-web: https://pint.ebenefits.va.gov/wss-form526-services-web-v2/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-form526-services-web-v2/rest/swagger.yaml#/  

