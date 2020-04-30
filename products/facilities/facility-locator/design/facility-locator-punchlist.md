# Facility Locator Punch list
**Facilities team**

`Aricka Lewis, designer`

---

Punch list as of April 30, 2020. 
Reference mockups are available [here.]

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
- [ ] The VA facility Type dropdown defaults to VA health. 

**VA facility type**
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
- [ ] Linked to directions appear actionable (underlined)
- [ ] Phone numbers appear actionable (underlined)

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

When Facility type = "Community urgent care providers (in VA’s network)"Observe the following information is displayed on search results card for each search:
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







