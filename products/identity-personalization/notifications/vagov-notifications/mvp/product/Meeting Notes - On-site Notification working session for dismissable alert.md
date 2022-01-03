# Jan 3, 2022 | On-Site Notification - working session to discuss dismissable functionality

Attendees: Heather, Lihan, Liz, Taylor, Tressa

## Notes
- How can we dismiss this notification, without removing the notification from history, and keep it dismissed so it doesn't show again.
     - Flag on the Backend that shows the notification has been dismissed
- With the new VA Notify notification to us, we will show a new notification, even though a previous notification had been dismissed.
- Do we need to build a page to hold these dismissed notifications?
     - No, for MVP we will not build another page.  
- Error states
     - API fail
          - If failure occurs, no notification would be seen on My VA for user
          - Need to talk with VA Notify on what kind of failures they encounter
          - What kind of error would we show in its place?
          - Track errors and fix on Backend?
          - Not sure if we should show an error message
     - Dismissal failure
          - Notification would reappear or not disappear
          - May have pattern for this, need to review

### Action Items
- Continue conversations with VA Notify
     - Confirm what data and how we will receive from VA Notify
     - Confirm what kind of failures they see on their side and how that would transmit to My VA
     - Confirm how notification can be re-triggered for testing (Usability and QA)
- Technical discovery [ticket #34708](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34708)

