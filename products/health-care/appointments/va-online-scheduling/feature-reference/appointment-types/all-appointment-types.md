# All appointment types

The following apply to all appointment types.

## User stories

### Request user stories

- As a Veteran, I want to review information about my appointment request so I can easily understand:
    - if my request is confirmed, pending a response from VA, or canceled.
    - the type of care I requested.
    - the location I requested.
    - the dates I requested.
    - how to contact the facility that is handling my request.
    - the reason for the request.
    - the information the facility will use to contact me.
    
- As a Veteran, I want to cancel my request.
- As a Veteran, I want to print my request details.

### Booked appointment user stories
- As a Veteran, I want to review information about my appointments so I can easily understand:
    - if my appointment is upcoming, in the past, or canceled.
    - where my appointment takes place.
    - when my appointment takes place.
    - who my appointment will be with.
    - what care I will receive at my appointment.
    - how to contact the facility where my appointment is scheduled.
    
- As a Veteran, I want to add my appointments to my calendar.
- As a Veteran, I want to cancel my appointments.
- As a Veteran, I want to print my appointment details.


## Technical Notes

### Appointment Merge Logic
PENDING CHANGE - 7114:  MASv2: Update merge logic to not merge overlapping vista appointments at different sites:   Currently there's a Mobile Appointment Service (MAS) that merges appointments if it's the same patient and less than 5 mins apart. In addition, MAS merges appointments across VistA instances (example veteran has appt in Cheyenne and Dayton at the same time - 0800 MT Cheyenne and 1000 ET Dayton), And for the merge it really comes down to the order that it comes back form the upstream systems. So, if in the response from VSP the Cheyenne Appointment is the first in the response and Dayton is second, it’s going to merge Dayton details in to the first appointment (Cheyenne) which might result in some fields getting replaced.


### Creating Video Visits in VistA
To create Video Visits in VistA, the clinic must have video visit secondary (credit stop code) of = 679, 179 or 648. You can customize this in your test VistA instance using the SDEC SETTINGS>VS GUI NATIONAL file—that is where the stop codes that causes the VSE Video Visit question pop-up are set. If the pop-up does NOT display in VSE GUI, check the SDEC settings file to the get stop codes. Then edit the clinic's credit stop code in Hospital Location file #44 to be one of those stop codes.  Tele-mental health visits require appropriate location-based secondary codes: 690 (originating patient station); 692 (provider station – same STA3); 693 (provider station – different STA3)