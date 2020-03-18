# Contact Center Product Guide: "Your VA disability ratings"

### Table of Contents 
 - [What is it?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#what-is-it)
 - [User Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#user-access)
   - [Who can access this?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#who-can-access-this)
   - [How can users access this?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#how-can-users-access-this)
 - [Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#navigation)
 - [FAQs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#faqs)
 - [Functionality](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#functionality)
 - [Error Handling & Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/contact-center/product-guide.md#error-handling-and-notifications)
 - [Video Demo Link (YouTube)](#)

## What is it?
The **Your VA disability ratings** page is where Veterans can view their combined disability rating and the individual disability ratings in their record. On this page, there are links to other information and tools that can help the Veteran understand their rating(s), and decide what to do if they have a problem or question. Information and tool links include:
- Breadcrumb links will take the Veteran a content page (**Disability benefits**), and a landing page (**View your disability rating**) with more information on disabilities and disability claims `(A)`
- A link to **Check your claims and appeals** `(B)`
- **Compensation 101: How did I get this rating?** video on YouTube; this explains how disability claims are determined, and how ratings are calculated. `(C)`
- The VA phone number: 800-827-1000 `(D)`

![Your-VA-disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/contact-center/images/RD-1_clean.png)

The **Your VA disability ratings** screen will show disability ratings that are known to the VA. If a Veteran does not have a disability rating, an informational alert box will appear:

![RD 400 error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/contact-center/images/RD-2_clean.png)

If there is an error getting the Veteran's disability rating, an error alert will appear. It is possible that either the total combined VA disability rating, or the individual disability ratings, or both, could show error alerts.

![RD 500 error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/contact-center/images/RD-3_clean.png)

Target launch date is end of November 2019, early December 2020.

## User Access
### Who can access this?
Like all sensitive pages on VA.gov, this page is available to users in MVI who have an identity proofed account. (**eBenefits** Premium).

### How can users access this?
The **Your VA disability ratings** page is accessible for testing within the **VA.gov** staging environment here: https://staging.va.gov/disability/view-disability-rating/rating. The page can be viewed using any modern browser.

## Navigation
If a Veteran searches or browses **VA.gov**, several links will connect to the **View your VA disability rating** landing page (https://va.gov/disability/view-disability-rating). If the Veteran is already logged-in, they can proceed to the **Your VA disability rating** page by clicking the blue **View your VA disability rating >** button. Veterans who are not logged-in will see the same page, but with the green **Sign in or create an account** button. The **View your VA disability rating** landing page has information about some basic access questions. It also has a link to **Learn how VA disability ratings are assigned**, which can help explain the VA disability rating calculation. The usual navigations links are in the left sidebar.

![RD  authenticated landing page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/contact-center/images/RD_Landing_1A.png)

![RD  unauthenticated landing page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/contact-center/images/RD-4_clean.png)

After authentication, the Veteran is brought to the **Your VA disability ratings** page.  

## FAQs
**Where can I learn more about disability ratings?**  
A link for more general information can be found here: https://www.va.gov/disability/about-disability-ratings/

**What if I disagree with the information shown?**  
The link to the ratings calculator can be found here: https://www.va.gov/disability/about-disability-ratings/
The link to the Claim Status Tool can be found here: https://www.va.gov/claim-or-appeal-status/

**Who can I call if I need help?**  
Help is available by calling the VA at 1-800-827-1000 

**I have a disability that is pending; where can I go to get more information?**  
The Claim Status Tool is the best way to see the status of pending claims.  The link for that is: https://www.va.gov/claim-or-appeal-status/

**Can I log in on behalf of a Veteran to see his or her information?**  
VA.gov does not currently support this functionality, but many Veteran representatives maintain accounts with the Stakeholder Enterprise Portal (SEP, www.sep.va.gov) and can find the information that way.

**What does "service-connected" mean?**  
"Service-connected" is a disability that occurred while the Veteran was in service.  Not service-connected issues or injuries are important but may not contribute to the overall rating as they did not occur while the Veteran was in service.

**I don't see a number next to my individual rating.  Where is it?  What does that mean?**  
This may mean that there is no rating because the disability was considered not service-connected. Not service-connected disabilities will show 0% or nothing, but a service-connected issue or injury can show from 0% to 100%. In some cases the source database (CorpDB) may contain incorrect information about a disability, or it may be in the process of being updated due to a recent decision. In that case, the Veteran should wait for some time before refreshing the page.

## Functionality  
The **Your VA disability ratings** page simply shows the total combined VA disability rating and the individual disability ratings that contribute to the total percentage.  Individual disability ratings can be service-connected (and therefore a part of that calculation), or not service-connected (and are not used for the total calculation).

The Veteran also has the option of browsing to **Check your claims or appeals** to learn more about the status of individual claims (e.g., active, inactive or pending).

## Error Handling and Notifications  
The combined VA disability ratings and the individual disability ratings are separate components. A loading spinner will appear when the page is loading the Veteran's disability information.  

In the event that the page does not see the data, a blue messaging window appears.  

In the event that the page cannot load, the page (or part of a page) due to a system issues, a red messaging window appears.  

Also included is workflow that shows how the Veteran can get in and out of the Rated Disabilities tool.  

**Other Error Handling Notes**  
- vets-api error mapping: https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/locales/exceptions.en.yml This is a comprehensive list of all expected exceptions within vets-api, not specific to rated disabilities.  
- Errors related to the disbility compensation form (526) can be found here: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/disability_compensation_form/service_exception.rb These get mapped to the exceptions.enyml file referenced above. The exceptions are handled in a linear/sequential fashion, meaning the first exception in the list that is encountered is the one that will be returned.  
- wss-form526-services-web: https://pint.ebenefits.va.gov/wss-form526-services-web-v2/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-form526-services-web-v2/rest/swagger.yaml#/  
