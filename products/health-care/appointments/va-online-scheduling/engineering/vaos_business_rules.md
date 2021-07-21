# WIP VAOS product and business rules

This attempts to be a high-level summary of the various product and business rules that VAOS follows, primarily from a front end or user perspective. It's not meant to be a detailed spec, but hopefully contains all the important rules that 

## Application level

In order to open VAOS on va.gov, a user must:

- Be signed into www.va.gov
- Have a record in MPI
- Have at least one correlation id in MPI that corresponds to a VistA site registration

## New appointment flow

### Type of care page

- The VAOS types of care are a static list determined by the VA
- Eye care, sleep care, and audiology have sub-types, which a user can choose from on the next page
    - For audiology, users are shown the facility type page before choosing the specific audiology type
- Podiatry is currently only available for community care. Users will see a modal if they select podiatry and they're not community care eligible
- If a user does not have a residential address, they are shown an alert on this page with a link to the va.gov profile.

### Community care eligibility check

- Community care eligibility is checked after the type of care page, if a user has chosen a type of care that supports community care
- A user is eligibility if two checks pass:
    - The user is registered at a site that is marked as accepting community care requests
    - The community care eligibility api says that they're eligible for the type of care they chose
- If a user is community care eligible for the type of care they chose, then they will see a facility type page where they can choose between making a request for a VA appointment or for a community care provider.

### Facility type page

- Users are sent to the VA facilities page if they choose to make a request at a VA facility
- Users are sent to the calendar page if they chose to make a community care request
    - This is not true if the user has chosen audiology, in which case they are first sent to a page to choose the specific type of audiology appointment they need

### VA facilities page

- Facilities are shown on this page if
    - They are associated with a VistA site where the user is registered, and
    - The site has marked the facility as accepting either requests or direct appointments for the chosen type of care
- If the user has a residential address in VA Profile, then facilities are shown sorted by distance from that address
- If the user does not have a residential address, the facilities are shown in alphabetical order
- Users can choose to sort the facilities by how close they are to their current (browser) location
- Facilities that are within 100 miles of the residential address or current location (if currently being used) and do not support any online scheduling can be revealed by clicking on the "Why isn't my facility shown?" link below the facilities options.
- If a user only has one facility that supports online scheduling for the chosen type of care, this page will show that facility without radio buttons.

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
