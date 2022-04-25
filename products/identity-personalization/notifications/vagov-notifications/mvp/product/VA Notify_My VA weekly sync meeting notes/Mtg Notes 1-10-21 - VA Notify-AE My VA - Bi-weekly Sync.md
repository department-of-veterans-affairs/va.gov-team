# Jan 10, 2022 | VA Notify/AE My VA - Bi-weekly Sync
- Attendees: Filip, Heather, Lihan, Liz, Maria, Beverly, Taylor, Samara

## Notes
- **Samara gave overview of pivot to new MVP**
     - Single notification for debt notice
     - Groundwork for infrastructure with VA Notify for future notifications
     - Ideal:	
          - Backend debt system sends info to VA Notify to send out email to veteran
          - VA Notify sends My VA a notice that a debt notification is needed for ‘this’ person (when they log in)
               - VA Notify will not store our content
               - VA Notify will not send personal data
- **Confirm what data and how we will receive from VA Notify**
     - VA Notify can add some type of flag on the specific template to also notify My VA
     - Only problem Filip sees is how to rely/depend on a template for mapping
          - Template IDs never change
     - Once VA Notify receives a trigger to send a notification
          - VA Notify waits for success response (when sending email)
          - My VA will not need to wait for this response
               - VA Notify can send immediately
     - VA Notify needs endpoint in vetsapi to send the information
          - VA Notify will send Template ID
          - VA Notify will send VA Profile ID
     - Lihan built a Json webtype authentication token and will share with VA Notify team
- **Confirm what kind of failures they see on their side and how that would transmit to My VA**
     - Failures on VA Notify side would result in no information being sent to My VA
- **What is the level of effort from VA Notify?**
     - One complication - tracking status: sending, sent, failed
          - VA Notify would be delivering it twice - Email and My VA
          - Trying to think of tracking delivery to My VA, what would success/fail look like?
          - Perhaps for MVP, we don’t need to track
               - Higher level of effort to implement tracking
               - VA Notify team will need to decide whether they want to implement tracking for MVP
- **Does VA Notify anticipate another contract interruption?**
     - Current contract expires tomorrow, hoping for extension 
     - Current work/roadmap is being bundled in another contract
          - Not sure who is getting awarded
- **When can the VA Notify team potentially start this work**
     - VA Notify is currently working on Push Notifications with MHV (priority)
          - Can look into this possibly Mid-Feb-March (against other priorities)
          - Note: VA Notify currently has a full roadmap through May
          - Contract issues may cause delays

### Action items
- [ ] Lihan to share link to current JSON webtype authentication
- [ ] VA Notify team to share when they can begin working on this effort
