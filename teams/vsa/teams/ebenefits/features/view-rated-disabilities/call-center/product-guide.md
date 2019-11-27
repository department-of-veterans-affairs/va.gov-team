``` diff
- Screenshots will be embedded soon
```

# Rated Disabilities

### TOC
 - What is it?
 - User Access
  - Who can access?
  - How can users access?
 - Navigation
 - Functionality
 - Error & Notification Log

## What is it?
 - Rated Disabilities is a common function among the veteran community to see what their Total Calulated Disability Rating is, what has factored into that calculation and what is currently pending from the Claim Status Tool. These data are important as they inform the Veteran what their service connected rating is and what benefits they might be elegible for.

 There are also links and resources that help guide the user to gain more information and assistance.
 Target launch date is end of November 2019, early December 2020.

## User Access
### Who can access?
 Rated Disabilities is currently available to LOA3 (eBenefit Premium) users.  While other users can currently login on a Veterans behalf, it is not anticipated that this will be possible on VA.gov until Roles and Relationships are finalized.

 _[I don't know if the other non ID.me access methods are valid]_

### How can users access?
 This feature is accessible for testing within the staging environment at this url: https://staging.va.gov/disability/view-disability-rating/rating, and can be accessed in any modern browser.

 The Rated Disabilities Tool page also conforms to 508 compliance and can be used with major screen readers and other assistant tools.

## Navigation
Browsing within VA.gov from the disability page should bring the user to an unauthenticated landing page (https://va.gov/disability/view-disability-rating) which should answer some general questions about the tool as well as present the login button to gain access.

After proper authentication, the Veteran is brought to the Rated Disabilities page.  

There are a few other pages that the Veteran can browse to learn more about how the rating is calculated, how to get assistance in the event that the values represented are unexpected as well as a link to the Claim Status Tool.

## Functionality
The Rated Disabilities tool page simply shows the total combined disability rating (critical for establishing levels of compensation) and the individual ratings that are service connected, and therefore a part of that calculation, and non-service connected which are for issues that have occured while the Veteran was not in service.  These are important for inclusion as some might be pending or be needed to take into account.

The Veteran also has the option of browsing into the Claim Status Tool in order to learn more about the status of individual claims (e.g., active, inactive or pending).

## Error Handling and Notifications
There are wrappers around each component that detect when data is successfully recieved and available. A loading spinner appears to indicate the page is loading relevent information for each component as well.

In the event that the page does not see the data, a blue messaging window appears.

In the event that the page cannot load the page (or part of a page) due to a system issues, a red messaging window appears.

Also included is workflow that shows how the Veteran can get in and out of the Rated Disabilities tool.

Other Error Handling Notes
- vets-api error mapping: https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/locales/exceptions.en.yml This is a comprehensive list of all expected exceptions within vets-api, not specific to rated disabilities.
- Errors related to the disbaility compensation form (526) can be found here: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/disability_compensation_form/service_exception.rb These get mapped to the exceptions.enyml file referenced above. The exceptions are handled in a linear/sequential fashion, meaning the first exception in the list that is encountered is the one that will be returned.
- wss-form526-services-web: https://pint.ebenefits.va.gov/wss-form526-services-web-v2/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-form526-services-web-v2/rest/swagger.yaml#/









