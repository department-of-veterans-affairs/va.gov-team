# VAOS product and business rules

We have migrated this documentation to the [feature reference](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/feature-reference). 

This file can be deleted after 02/01/24

<!--

This attempts to be a high-level summary of the various product and business rules that VAOS follows, primarily from a front end or user perspective. It's not meant to be a detailed spec, but hopefully contains all the important rules that VAOS follows.



## Application level

In order to open VAOS on va.gov, a user must:

- Be signed into www.va.gov
- Have a record in MPI
- Have at least one correlation id in MPI that corresponds to a VistA site registration

## SQA Current Deployment Schedule

VAOS, VAR-RES, SM Web Current/Planned Deployment Schedule:

https://wiki.mobilehealth.va.gov/pages/viewpage.action?pageId=175000908

## Appointments list

### Upcoming appointments
- Display 13 months of future booked appointments
- Includes VA and community care appointments
- Display 13 months of canceled booked appts


#### Community care appointments
- Veteran cannot cancel through VAOS.

### Past Appointments
- Includes VA and community care appointments
- Does not display canceled booked appts

### Pending appointments
- Includes VA and community care requests
- Show canceled requests 120 days back
- Sorted by date/time the request was created. Most recent requests appear at the top of the list.

#### Community care requests
-  Veteran can cancel through VAOS.

## New appointment flow

### Type of care page

- The VAOS types of care are a static list determined by the VA
- Eye care, sleep care, and audiology have sub-types, which a user can choose from on the next page
    - For audiology, users are shown the facility type page before choosing the specific audiology type
- Podiatry is currently only available for community care. Users will see a modal if they select podiatry and they're not community care eligible
- If a user does not have a residential address, they are shown an alert on this page with a link to the va.gov profile.
- If a user chooses COVID-19 vaccine and clicks Continue, they're sent to the vaccine flow

### Community care eligibility check

- Community care eligibility is checked after the type of care page, if a user has chosen a type of care that supports community care:
    - Primary care (if they have never been seen by a VA primary care provider—i.e., assigned to a PACT [Patient Aligned Care Team])
    - Audiology (for either routine exam or hearing aid support)
    - Optometry 
    - Podiatry (currently only available for Community Care)
    - Nutrition services

- A user is eligibility if two checks pass:
    - The user is registered at a site that is marked as accepting community care requests
    - The community care eligibility api says that they're eligible for the type of care they chose
- If a user is community care eligible for the type of care they chose, then they will see a facility type page where they can choose between making a request for a VA appointment or for a community care provider.

### Facility type page

- Users are sent to the VA facilities page if they choose to make a request at a VA facility
- Users are sent to the calendar page if they chose to make a community care request
    - This is not true if the user has chosen audiology, in which case they are first sent to a page to choose the specific type of audiology appointment they need

### VA facilities page

- Facilities are shown on this page if:
    - They are associated with a VistA site where the user is registered, and
    - The site has marked the facility as accepting either requests or direct appointments for the chosen type of care
- If the user has a residential address in VA Profile, then facilities are shown sorted by distance from that address:
   - Users can choose to sort the facilities by how close they are to their current (browser) location instead of residential address.
   - The distance to the facility is shown in miles.
   - The distance is calculated as a straight line between the Veteran's residential address or location and the facility address.
   - Facilities that are within 100 miles of the residential address or current location (if currently being used) and do not support any online scheduling can be revealed by clicking on the "Why isn't my facility shown?" link below the facilities options. 
- If the user does not have a residential address, the facilities are shown in alphabetical order
- If a user only has one facility that supports online scheduling for the chosen type of care, this page will show that facility without radio buttons.
- If the user is registered at a Cerner site, facilities in that site are always shown on this page and include a link to the Cerner portal below the radio button
- If a user choose a Cerner facility and clicks Continue, they're sent to the schedule Cerner page

#### Facility and type of care eligibility check

- After a user chooses a facility and clicks continue, VAOS checks if they're eligible to make a request or to direct schedule online. 
    - VAOS tries to put users in the direct schedule path first, and falls back to the request path if direct scheduling is not available
    - If the user is not eligible for either path, they're shown a modal explaining why
- For the direct scheduling path, there are four potential checks:
    1. Does the facility support direct scheduling (set in VATS)
    2. Does the veteran have a recent enough visit
        - This is controlled in VATS, and can be set to 12 or 24 months, or disabled
        - This check does not apply for primary care
    3. Are there available VistA clinics for this facility and type of care
        - For primary care, this entails finding clinics associated with the user's PACT 
    4. Are there available VistA clinics that the user has interacted with in he past 24 months
        - This is a front end check, done to reduce the confusion around what clinic a user should choose
        - This will effectively override check 2, if that check is set to allow all users through in VATS
- For the request path, there are three potential checks:
    1. Does the facility support requests (set in VATS)
    2. Does the veteran have a recent enough visit
        - This is controlled in VATS, and can be set to 12 or 24 months, or disabled
        - This check does not apply for primary care
    3. Is the user over the request limit for this facility and type of care
        - This is controlled in VATS and can be set to 1 or 2
- If a user can direct schedule, they're sent to the clinic choice page
- If a user can only make a request, they're sent to the request calendar page

### Schedule Cerner page

- If a user chose a Cerner facility on the facility choice page, no eligibility checks are performed and they're sent to this page
- The user is shown the facility contact information and given a link to the Cerner portal
- Users can progress no further from here, because VAOS does not support scheduling appointments at Cerner sites

### Clinic choice page

- If a user can direct schedule, they're shown a list of VistA clinics where:
    - The clinics support scheduling for the facility and type of care chosen
    - The clinic has been interacted with in some way by the user in the past 24 months
- If the user doesn't recognize any of these clinics, there's an option to choose a different clinic, which will put the user in the request path (on the request calendar page)
- After selecting a clinic, the user is sent to the preferred date page

### Preferred date page

- Users only see this page if they're on the direct schedule path
- They must enter a date the same as or after today's date
- After entering a date, the user is sent to the direct schedule calendar page

### Calendar page (direct schedule)

- Users use a calendar picker to choose the time of their appointment
- The calendar starts on the month of the preferred date
- The earliest date allowed for scheduling is the day after the current day
- The latest date allowed for scheduling is 395 days after the current date
    - This may be further limited if the chosen VistA clinic has a max booking date that's less than 395 days. If that's the case, the front end will not receive any slots after this date
- The times shown are determined by the time slots returned to the front end based on the configuration of the selected VistA clinic
     - The times shown are in the time zone configured for the selected facility. 
- If the preferred date is the current date, then an urgent care warning is shown above the calendar
- Once a time is chosen, the user is sent to the reason for visit page

### Calendar page (request path)

- Users use a calendar picker to choose their preferred appointment time frames
- Users are allowed to pick an AM and/or PM slot on each weekday, up to 3 slots.
- The calendar starts on the current month
- The earliest date allowed for scheduling is 5 days after the current day
    - If the 5th calendar day falls on a weekend (Saturday or Sunday), the following business day would be the next available date. Example: If the user is logged in on a Monday and trying to book an appointment request, slots would be available from the following Monday. 
- The latest date allowed for scheduling is 120 days after the current date
- Once preferred times are chosen, then:
    - For community care requests, they're sent to the community care preferences page
    - For VA requests, they're sent to the reason for visit page

### Nearest city page

- If a user is registered at multiple VistA sites that support community care, they must choose the appropriate parent facility to route the request to

### Community care request provider page

- Providers are fetched from PPMS, using specialty codes mapped to the type of care the user has chosen
- Users are given an option to choose from a list of providers sorted by:
    - Residential address (if they have a residential address on file) 
    - User's current location (via their browsers's location information) 
    - User's registered VistA sites
- Only one provider can be chosen (Legacy VAOS can choose up to 3)
- Users are sent to the community care language page (if they have a residential address) or the reason for appointment page (if they didn't have an address)

### Community care language page

- A user can choose the preferred language of their provider
- After choosing a language, the user is sent to the reason for appointment page

### Reason for visit page

- Users can enter information about why they're making or requesting an appointment
- For VA requests and direct scheduling:
    - A user must choose a purpose from a set list:
        - Routine/Follow-up
        - New issue
        - Medication concern
        - Other
    - A user must also enter text describing the reason for their visit
- For community care requests, a user can enter an optional reason for appointment
- When on the direct path, the chosen purpose and reason text are combined and added to the bookingNotes field of the appointment
- When on the request path, the reason text is added as a request message on the backend and the selected reason is added in the purpose of visit field
- After a user enters their reason information, then
    - For community care requests or the direct path, they're sent to the contact info page
    - For VA requests, they're sent to the visit type page

### Preferred modality (request path)

- Users must choose the type of visit they'd like to have
    - Office visit
    - Phone call
    - Video appointment
- After the user chooses the type of visit, they're sent to the contact info page

### Contact information page

- A user can enter their phone number and email address on this page
- The phone and email address fields are pre-populated with data from VA Profile
- If the user is on the request path, they they will also be required to choose a preferred time for the scheduler to call them: morning, afternoon, or evening
    - User can choose any combination of these options
- After contact information is entered, the user is sent to the review page


### Review page

- The user is presented with the information entered on the previous pages in the form
- Edit links in different sections take the user back to that page, and the user has to navigate back through the flow again after making their change
- After clicking Submit:
    - When there is an error, an error alert will be shown under the button with information about what went wrong and how to contact the facility
    - If a request was successfully made, the user is redirected to the detail page for that request
        - A confirmation message is shown on the detail page
    - If an appointment was made successfully, the appointment confirmation page is shown

### Confirmation page

- The appointment confirmation page is shown after a successful directly scheduled appointment
- It is meant to look like the appointment detail page

-->
