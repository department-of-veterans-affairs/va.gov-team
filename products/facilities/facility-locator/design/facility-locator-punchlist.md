# Facility Locator Punch list (WIP)
**Facilities team**

`Aricka Lewis, designer`

---

Punch list as of April 30, 2020. 

# Design prototypes

| Page | Design Link | Date |
|--- | --- | --- |
| Main Search page | TBD | --- |
| Facility Detail page | TBD | --- |
| Facility Locator Mobile | TBD | --- |


# Facility Locator main search page

## Facility search

- [ ] Required fields are clearly indicated as required.
- [ ] The sentence: "Can’t find what you’re looking for? Try using our other tools to search." appears above the map and links to https://www.va.gov/directory/guide/home.asp
- [ ] Operating status indicators will display only if applicable and may be one of the following:
     - [ ] "Facility Closed" on light red background with ! circle icon
     - [ ] "Limited Services and Hours" on light yellow background with ! triangle icon
     - [ ] "Facility Notice" on light blue background with ! triangle icon

The search box includes the following fields: 
- [ ] Search by city, state or postal Code
- [ ] Choose a VA facility type
- [ ] Choose a service type 
- [ ] Search button

### Search by city, state or postal Code
- [ ] This is a required field unless location is enabled in browser

### VA facility type
- [ ] The VA facility type drop down defaults to VA health. 

Drop down includes the following: 
- [ ] VA health
- [ ] Urgent care
- [ ] Community providers (in VA’s network)
- [ ] VA benefits
- [ ] VA cemeteries
- [ ] Vet Centers

**Facility type = "VA health"**
- [ ] When Facility type = "VA health", the service type field is labeled "Choose a service type"
- [ ] When Facility type = "VA health", "Choose a service type" drop down defaults to "All VA health services"
- [ ] When Facility type = "VA health", "Choose a service type" includes the following:
      - [ ] Primary care
      - [ ] Mental health care
      - [ ] Dental services
      - [ ] Urgent care
      - [ ] Emergency care
      - [ ] Audiology
      - [ ] Cardiology
      - [ ] Dermatology
      - [ ] Gastroenterology
      - [ ] Gynecology
      - [ ] Opthalmology
      - [ ] Optometry
      - [ ] Orthopedics
      - [ ] Urology
      - [ ] Women's health

**Facility type = "Urgent care"**
- [ ] When Facility type = "Urgent care", the service type field is labeled "Choose a service type"
- [ ] When Facility type = "Urgent care", "Choose a service type" drop down defaults to "VA urgent care"

When Facility type = "Urgent care", the service type drop down is available, with the following choices:
- [ ] VA urgent care
- [ ] Community urgent care providers (in VA’s network)
- [ ] When Facility type = "Urgent care" and the service type = "Community urgent care providers (in VA’s network)", alert and link to eligibility web page are displayed between search box and map. 

**Facility type = "Community providers (in VA's network)"**
- [ ] When Facility type = "Community providers (in VA's network)", Service type becomes a required typeahead field

**Facility type = "VA benefits"**
- [ ] When Facility type = "VA benefits", the service type field is labeled "Choose a service type"
- [ ] When Facility type = "VA benefits", "Choose a service type" drop down defaults to "All VA benefit services"
- [ ] When Facility type = "VA benefits", "Choose a service type" includes the following:
    - [ ] Applying For Benefits
    - [ ] Burial Claim Assistance
    - [ ] Disability Claim Assistance
    - [ ] eBenefits Registration Assistance
    - [ ] Education And Career Counseling
    - [ ] Education Claim Assistance
    - [ ] Homeless Assistance
    - [ ] Integrated Disability Evaluation System Assistance
    - [ ] Pre Discharge Claim Assistance
    - [ ] Updating Direct Deposit Information
    - [ ] Vocational Rehabilitation And Employment Assistance

**Facility type = "VA cemeteries"**
- [ ] When Facility type = "VA cemeteries", the service type drop down is unavailable

**Facility type = "Vet Centers"**
- [ ] When Facility type = "Vet Centers", the service type drop down is unavailable

## Search results

- [ ] Search results are presented on cards with white background separated by horizontal gray stripe
- [ ] The top line of each search result cards has a capital letter indicator corresponding to a location on the map and distance in miles. 
- [ ] Linked names appear actionable (underlined)
- [ ] Links to directions appear actionable (underlined)
- [ ] Phone numbers appear actionable (underlined)
- [ ] Any detail is displayed as provided by API
- [ ] Details with null value in the API will not be shown

When Facility type = "VA health", search results cards should contain the following
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as "VA HEALTH"
- [ ] **Name of Facility**
      - [ ] Name of Facility is linked to Facility Detail page (or Facility page as governed by VAMC Pittsburgh logic)
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Address
- [ ] Directions
- [ ] **Main Phone Number**
- [ ] **Mental Health Phone Number** 

When Facility type = "Urgent care" and the service type = "Community urgent care providers (in VA’s network)"
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as "URGENT CARE" (if POS code = 20) or "RETAIL/WALK-IN CARE" (if POS code = 17)    
- [ ] **Name of Facility**
      - [ ] Name of Facility is **not** linked to Facility Detail page
- [ ] Address
- [ ] Directions
- [ ] **Main Phone Number** 

When Facility type = "Urgent care" and the service type = "VA urgent care", search results cards should contain the following
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as "VA URGENT CARE"
- [ ] **Name of Facility** 
      - [ ] Name of Facility is linked to Facility Detail page (or Facility page as governed by VAMC Pittsburgh logic)
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Address
- [ ] Directions
- [ ] **Main Phone Number**
- [ ] **Mental Health Phone Number** 

When Facility type = "Community care providers (in VA’s network)", search results cards should contain the following
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as "COMMUNITY PROVIDERS (IN VA’S NETWORK)"
- [ ] **Services:** one or more, displayed as "Podiatrist, Multi-Specialty"
- [ ] **Name of Provider** (may display in all caps or sentence case)
     - [ ] Provider Name is linked to Facility Detail page
- [ ] Address
- [ ] Directions
- [ ] Referral language: "**If you have a referral:** Call this facility at (number). If you don’t have a referral, contact your local VA medical center."

When Facility type = "VA benefits", search results cards should contain the following
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as "VA BENEFITS"
- [ ] **Name of Facility** 
      - [ ] Name of Facility is linked to Facility Detail page
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Address
- [ ] Directions
- [ ] **Main Phone Number**

When Facility type = "VA cemeteries", search results cards should contain the following
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as one of the following
      CONFEDERATE CEMETERY
      GOVERNMENT LOTS 
      MONUMENT SITE
      SOLDIERS LOT
      ARMY CEMETERY
      RURAL CEMETERY
      NATIONAL CEMETERY
- [ ] **Name of Facility** 
      - [ ] Name of Facility is linked to Facility Detail page
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Address
- [ ] Directions
- [ ] **Main Phone Number**

When Facility type = "Vet Centers", search results cards should contain the following
- [ ] Capital letter indicator
- [ ] Distance in miles
- [ ] Facility type displayed as "VET CENTER"
- [ ] **Name of Facility** 
      - [ ] Name of Facility is linked to Facility Detail page
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Address
- [ ] Directions
- [ ] **Main Phone Number**

# Facility Detail page

- [ ] Any detail is shown as provided by API
- [ ] Details with null value in the API will not be shown
- [ ] Links to directions appear actionable (underlined)
- [ ] Website links appear actionable (underlined)
- [ ] Phone numbers appear actionable (underlined)

## Community care providers (in VA's network)

When Facility type = "Community care providers (in VA’s network)", the facility detail page should contain the following
- [ ] **Name of Provider** (may display in all caps or sentence case)
- [ ] **Facility type** displayed as "Community care providers (in VA's network)"
- [ ] Address
- [ ] Directions
- [ ] "Planning to visit? Please call first as information on this page may change."
- [ ] "**Provider Details**", including the following under a blue horizontal divider
      - [ ] Gender:
      - [ ] Services:
      - [ ] Description of service
- [ ] "**Appointments**", including the following under a blue horizontal divider
      - [ ] **Accepting new patients** "Yes" or "No")
- [ ] "**Community Care Details**", including the following under a blue horizontal divider
      - [ ] **Network**
      - [ ] **Preferred communication method**
      - [ ] **Provider (NPI/Tax) ID**
- [ ] **View on Map**
- [ ] Static map image under a blue horizontal divider
- [ ] **About Community Care**
- [ ] "What's Community Care and am I eligible?" with link to https://www.va.gov/communitycare/index.asp, under a blue horizontal divider
     

## VA facilities

When Facility type = "VA health", the facility detail page should contain the following
- [ ] **Name of Facility**
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Operating Notes within alert box (if available)
- [ ] "Visit the (linked) website to learn more about hours and services." (Appears if website is available)
- [ ] Facility type displayed as "VA HEALTH"
- [ ] Address
- [ ] Phone icon and Main phone number
- [ ] Phone icon and Mental health phone number
- [ ] Globe icon and Website
- [ ] Road icon and Directions
- [ ] "Planning to visit? Please call first as information on this page may change."
- [ ] "**Services**", including the following under a blue horizontal divider
      - [ ] "Services current as of" (date)
      - [ ] "This list may not include all of the services available at this location."
      - [ ] "Please check on the facility’s website or call them for this information."
      - [ ] List of services
- [ ] "**Appointments**", including the following under a blue horizontal divider
      - [ ] "Current as of" (date)
      - [ ] **New patient wait times**
           - [ ] "The average number of days a Veteran who hasn’t been to this location has to wait for a non-urgent appointment"
           - [ ] list of services and wait in days
      - [ ] **Existing patient wait times**
           - [ ] "The average number of days a patient who has already been to this location has to wait for a non-urgent appointment"
           - [ ] list of services and wait in days
 - [ ] "**Veteran-reported Satisfaction Scores**", including the following under a blue horizontal divider
      - [ ] "Current as of" (date)
      - [ ] "Veteran-reported satisfaction scores come from the Consumer Assessment of Health and Systems survey, which measures satisfaction of nearly 150,000 Veterans across the U.S. every 6 months."
      - [ ] Urgent care appointments
      - [ ] "% of Veterans who say they usually or always get an appointment when they need care right away"
           - [ ] **Primary care at this location**
           - [ ] Number displayed as pictograph and xx%
           - [ ] **Specialty care at this location**
           - [ ] Number displayed as pictograph and xx%
      - [ ] Routine care appointments
      - [ ] "% of Veterans who say they usually or always get an appointment when they need it"
           - [ ]  **Primary care at this location**
           - [ ] Number displayed as pictograph and xx%
           - [ ] **Specialty care at this location**
           - [ ] Number displayed as pictograph and xx%
- [ ] **View on Map**
- [ ] Static map image under a blue horizontal divider
- [ ] **Hours of Operation**
      - [ ] list of hours by day of the week under blue horizontal divider
      
When Facility type = "VA benefits", the facility detail page should contain the following
- [ ] **Name of Facility**
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Operating Notes within alert box (if available)
- [ ] "Visit the (linked) website to learn more about hours and services." (Appears if website is available)
- [ ] Facility type displayed as "VA BENEFITS"
- [ ] Address
- [ ] Phone icon and Main phone number
- [ ] Globe icon and Website
- [ ] Road icon and Directions
- [ ] "Planning to visit? Please call first as information on this page may change."
- [ ] "**Services**", followed by a list under a blue horizontal divider
- [ ] **"View on Map"**
- [ ] Static map image under a blue horizontal divider
- [ ] **"Hours of Operation"**
      - [ ] list of hours by day of the week under blue horizontal divider
      
When Facility type = "Vet Centers", the facility detail page should contain the following
- [ ] **Name of Facility**
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Operating Notes within alert box (if available)
- [ ] "Visit the (linked) website to learn more about hours and services." (Appears if website is available)
- [ ] Facility type displayed as "VET CENTER"
- [ ] Address
- [ ] Phone icon and Main phone number
- [ ] Globe icon and Website
- [ ] Road icon and Directions
- [ ] "Planning to visit? Please call first as information on this page may change."
- [ ] "**Services**", followed by a list under a blue horizontal divider
- [ ] **"View on Map"**
- [ ] Static map image under a blue horizontal divider
- [ ] **"Hours of Operation"**
      - [ ] list of hours by day of the week under blue horizontal divider
      - [ ] "In addition to the hours listed above, all Vet Centers maintain non-traditional hours that are specific to each site and can change periodically given local Veteran, Service member & Family needs. Please contact your Vet Center to obtain the current schedule."
      
When Facility type = "VA Cemeteries", the facility detail page should contain the following
- [ ] **Name of Facility**
- [ ] Operating status indicator (unless operating status is "Normal")
- [ ] Operating Notes within alert box (if available)
- [ ] "Visit the (linked) website to learn more about hours and services." (Appears if website is available)
- [ ] Facility type displayed as one of the following
      CONFEDERATE CEMETERY
      GOVERNMENT LOTS 
      MONUMENT SITE
      SOLDIERS LOT
      ARMY CEMETERY
      RURAL CEMETERY
      NATIONAL CEMETERY
- [ ] Address
- [ ] Globe icon and Website
- [ ] Road icon and Directions
- [ ] **"View on Map"**
- [ ] Static map image under a blue horizontal divider
- [ ] **"Hours of Operation"**
      - [ ] list of hours by day of the week under blue horizontal divider
      - [ ] "In addition to the hours listed above, all Vet Centers maintain non-traditional hours that are specific to each site and can change periodically given local Veteran, Service member & Family needs. Please contact your Vet Center to obtain the current schedule."
      




