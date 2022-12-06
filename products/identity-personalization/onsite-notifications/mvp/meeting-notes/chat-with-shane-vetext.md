# VEText overview 2.4.21

## Overview

- VEText mostly handles clinical notifications, specifically text messages.
- VANotify is ideally going to be the channel for all notifications going forward, including texts. So, long term, VA notify should be the engine for everything, and VEText would be a layer on top of that for text message and additional logic customization (eg. logic around at what intervals to to send appointment reminders).

## VEText's current notifications:

### Notifications that allow two-way communication

- Appointment reminders
- I am here check-in tool
  - This is remove functionality where people can check in from their car for medical appointments.
  - Would be great to have something on VA.gov that allows this. 

### Notifications that allow one-way communication

- Open slot management - lets vets know there are earlier appointment slots.
- Covid vaccine appointment schedule
- Board of appeals reminders
- "Keep me informed" emails 
  - I think this is related to COVID comms.
- Push notification engine for the mobile app (this should be moved to VANotify)

### Notification pilots

- Notifying veterans of their prescription packages that have been shipped. 
  - Just deployed at a pilot site, and are looking into whether they should go nationwide.
