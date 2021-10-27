# VA Notify Meeting Notes

## October 27, 2021: Sync on VA Notify Self Service UI & VA.gov API/Data Needs

### About VA Notify Self Service Dashboard:

Staging link: staging.notifications.va.gov

Currently they have auth through GH, they’re starting with single sign on at the end of the month. 

To see notifications included in a service (templates dashboard), click on on menu dropdown next to ‘username’, select what service you’re looking at. The services they currently have are as follows:

- VEText
- va.gov 
- Lighthouse 
- Dmc

Form 526 EZ is an example on how to see the analytics of that specific notification - seen on the left side of the screen in the grey boxes. 

Currently only the ‘trusted users’ can use this dashboard, hopefully will be more people in the next few months. Must have a GH membership and access to VA things. Our team could log in, but the VA notify team has to assign you to the service and give you permissions.

- ((Personalization indicators)) are in double parentheses.
- We will be able to do a test send, create new notification templates 
- Templates are currently organized by service, which is by the data/API that it’s calling from. As we grow, they need to have a way to filter things - having the ability to associate related notifications together is pretty mandatory to the work that the Auth Exp team is doing. The notifications should be coordinated and sent at the same time.

### Takeaways:

- We need to coordinate all content across the type of notification. 
    - For MVP we can do something much simpler by tagging which notifications would be used on onsite notifications.  Maybe have a JSON blob, on the VA.gov we’d have our own template that would be populated by raw JSON data?? Need to discuss this more. 
    - How many characters can we show on an onsite notification? 
    - The VA.gov design will determine what content is included in the template. Maybe we just have a checkbox for each template, that could send the raw data to VA.gov. 

### Action items:

- We need to provide a specific outline of what our goals are for notifications on VA.gov. (be specific on what is required and what could not be included in MVP)
- We need to come up with a template for content.
    - Templates should live in VA Notify. 
- We want more personalization than what VA notify currently shows.
- We need to set up a more regular cadence to figure out the right path moving forward. 
