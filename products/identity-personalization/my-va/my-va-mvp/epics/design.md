## Updated Mockup

![Dashboard-01-full.png](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Dashboard/Design/Dashboard-01-full.png)

## Technical Requirements Breakdown
Nick: This is a breakdown of what dashboard functionality we believe is possible in the short-term, and what would require an additional API implementation. Not sure how these pertain to sprints or program increments, but just so we have an idea. This is largely a summary of a [technical research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/tech-research.md). I could be wrong on some of this, so @bshyong please feel free to correct any of this.

This is largely based off features in this early-stage [design](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Design/September-2017-Mockups/Desktop/05-Return-user.png).

1. __Your VA Facility__ - Ability to mark a VA Facility as "Your VA Facility", similar to marking a department store with multiple locations as their favorite so that the one they use most frequently is remembered.
    - ❌ There is currently no way to save a VA Facility as "Your VA Facility" without additional API implementation. 
    - ✔️ However, we could save this information to the user's local machine on the FE if we aren't worried about persisting super long-term or working across devices.
    - ❓ We also need a way for the user to mark the location as their facility to begin with. May require changes to the Facility Locator Tool.

2. __Messaging__ - Recent messages the user sent to their healthcare provider.
    - ✔️ This seems almost entirely possible based on the work already done in Secure Messaging.

3.  __Next Appointment__ - A display of when their next appointment is with their healthcare provider.
    - ❌ I believe this will require additional API implementation. Since appointments are scheduled with Secure Messaging on Vets.gov, we would have to parse that data out of the message text, and I don't believe that this would be a reliable method of determine their next appointment.
    - ❓ Maybe the API is doing something special with appointments scheduled on Secure Messaging that I don't know about and getting this data is more feasible. 

3. __Prescription Refills__ - A table containing the status of their prescription orders.
    - ✔️ For the most part I believe this is possible. 
    - ❌ I am unsure if we have the ability to actually display when their package will arrive, although we can definitely link to the third-party site where they can find this information. 
    - ❓ Maybe that third-party site has an API available for us to get that  package tracking status.

4.  __Claims and Appeals__ - A table containing the status of their disability claims.
    - ✔️ I think we have pretty much all we need here except...
    - ❌ Not sure if we can display the "Estimated date of completion" for a claim. Someone who is more familiar with Claims may know otherwise.

5. __Saved Applications__ - A list of forms the user saved in progress
    - ✔️ We definitely know what forms they have in-progress and can link to those.
    - ❌ I believe displaying the percentage of their progress would require additional API work.
    - ❓ I don't see this being terribly difficult on the API. Maybe it would be as easy as "number of form fields filled out" divided by "total number of form fields" to determine that.
