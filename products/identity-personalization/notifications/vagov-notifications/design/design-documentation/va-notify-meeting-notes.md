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
- The VA.gov design will determine what content is included in the template. Maybe we just have a checkbox for each template, that could send the raw data to VA.gov? Need to discuss more. 

### Action items:

- We need to provide a specific outline of what our goals are for notifications on VA.gov. (be specific on what is required and what could not be included in MVP)
- We need to come up with a template for content.
    - Templates should live in VA Notify. 
- We want more personalization than what VA notify currently shows.
- We need to set up a more regular cadence to figure out the right path moving forward. 


## November 8, 2021 - Auth Exp <>VA Notify - Discuss available notifications and My VA needs
- Maria, Beverly, Natasha, Tressa, Heather, AJ
- Session is recorded

### What Notifications are available in CMS?
- Maria is sharing the staging environment
    - She has access to various services and will walk us through them

- VA.gov
-   Profile info change
-   COVID-19 vaccine update confirmation
-       If you sign up on VA.gov for a vaccine, you get this conf email
-   Dir Dep update conf - compensation & pension
-   Dir Dep update conf - Education benefits
-   Expanded eligibility for COVID-19 - conf email for sigining up
-   Form 526ez email conf
-   Lighthouse On App connect
-   Lighhouse App Disconnect

- VA Notify team 
-   Test items

- LightHouse
-   Moved On Application connect & disconnect to VA.gov
-   Higher-leverl Review email confirmation of receiginb the application
-   Submission for supplimentatal claim info (Coming soon, not yet available)

- DMC
-   Debt Notification
-       Email stating information is available from the debt mgmt center & person should go look at it online
-       Debt has gone to collections - triggers this email

- VeText
-   Alot of notifications here
-   BVA sends notifications through VeText
-       VA Notify is not yet source of choice for emails, still working on this
-   A bunch of COVID-19 updates, so there are quite a few notification templates here for each update needed
-       Team has asked re: Boosters, no word yet
-  SMS Prescription shipment tracking
-       Text message to Veteran with last 4 of Prescription Number, tracking link
-       Local VAMC, not (CBW?) - Not live at all facilities yet
-       This would be one item the team would need to go back to VeText for more details to send to us
-           Need to consider PHI limitations
-  Auto-responses
-       For users who text HELP, or STOP 
-   Board of Veteran appeals appointment reminders
-       Just started texting out responses for Physical and Virtual hearings
-           Confirm or cancel appt
-               includes Code for Veteran to respond with to Confirm or Cancel
-           Physical - Address of location of hearing, and link for More info
-           Virtual - date/time, reference to email that was sent, link for more info
-           


- Maria shared their public [VA Notify GH board](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/board?repos=133843125,261511794
) so we can see who they are talking to, requestors for services
-       Intake form with intake questions
-       SMS can be more challenging
-       Have to consider PII/PHI
-       There are 9 notifications they are working on now (in progress)
-       Working with Office of Connected Care and GI Bill
          
- Maria shared spreadsheet with list of all forms on VA.gov
-   Talking with Jeff barnes and Chris at VA
-       All these products that exist on VA.gov
-       All of them have notification user journeys that need to occur
-       Imperitive to have a group of people that are going through these forms
-           Get confirmation emails
-           Status updates
-           Decision updates
-       May become a separate project for a separate team to work through this initiative    
    -   
- Tressa will sift through all info shared
-   MVP will be fairly light
-   Once MVP is determined, would look to VA Notify to share template
-       May be able to gain permissions in staging to view them
-       Variables can be infinite
-           VA Notify would need an agreement for no PII/PHI, otherwise unlimited
-           PII stored, PHI is not
-               example - First Name, email address, phone number = stored
-               Full content of notification stored for a week, then cleared

- MyVA would need to figure out how to display/store PHI
-       Does it make sense for VA Notify to get the PHI and send to MyVA?
-       Or should MYyA get it directly?


### Questions/Comments:
- The templates for notifications shown should match the document we received from VA Notify GH

- MVP for My VA - confirmations not yet in scope, will be for future state

- VeText sends reminders thru Trilio
-   Will send through VA Notify future state
-   VA Notify trying to get Trilio as vendor, which would be better for VeText

- Secure messages
-   Having convos with Mobile to develop channel for push notifications
-   Capability does not yet exist, not yet on Roadmap
-   Definitely a future scope
-   My VA may want these for On-Site

- Notification for Comp&Pen team
-   Finally have an intake with BIA team (creating query to pull data from Court DB tables about the payment)
-   Would be able to send info to Veteran on deposit amount, etc (about 6mo away at this time)

- 2022 Year End - Status Updates
-   Challenging

- Appointment reminders - email and messages (email and SMS)
-   VeText - Maria tagged us in a channel for intro 


