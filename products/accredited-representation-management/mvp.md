# Accredited Representation Management (ARM) MVP

_Formally known as "Find a Representative"_

The MVP will include desktop & mobile experiences

## MVP: Appoint a Representative

#### Find a Representative
1. Search
    1. If authenticated and if veteran has an existing rep, display existing rep and how to change the rep
    1. Required fields
        1. Location 
            1. Single consolidated field that accepts address 1, city, state, zip code
            1. 'use my location' feature to populate this location field
            1. Default to a radius (e.g. 50 miles)
        1. Select type of rep
            1. Veteran Service Organization (VSO)
            1. Attorney (Lawyer)
            1. Claims agent
        1. Search by name
            1. Organization name 
            2. Representative first name
            3. Representative last name
        1. Rep definitions
            1. Veteran Service Organization (VSO)
            1. Attorney (Lawyer)
            1. Claims agent
1. Display search results
    1. List display 
    1. If authenticated and if veteran has an existing rep, display existing rep
1. Selection
    1. Search results will have a button to 'Select' the representative
  
#### Request a Representative
Digital form fill of 21-22/21-22a 
1. Chapter 1: Veteran Personal Information
   1. Unauth: Enter Veteran’s Name and Date of Birth
   2. Unauth: Enter Veteran’s Identification Information
   3. Auth: Review information on file
2. Chapter 2: Veteran Contact and Insurance Information
   1. Unauth: Enter Veteran’s Contact Information (phone and email)
   2. Unauth: Enter Veteran’s Mailing Address
   3. Auth: Review (w option to Edit) Veteran’s Contact Information
   4. Auth: Edit Veteran’s Contact Information with option to save
3. Chapter 3: Claimant Information (pages are the same for both unauth/auth)
   1. Are you the Veteran who the claim is being submitted for?
   2. [claimant = no] Claimant Personal Information
   3. [claimant = no] Claimant Contact Information
   4. [claimant = no] Claimant Mailing Address
4. Chapter 4: Authorization for Record Access (pages are the same for both unauth/auth)
   1. Authorization for Representative’s Access to Records Protected by Section….
5. Chapter 5: Authorization for Address Change (pages are the same for both unauth/auth)
   1. Authorization to Change Claimant’s Address
6. Chapter 6: Review and Complete (pages are the same for both unauth/auth)
   1. Sections are collapsed
   2. Sections are expanded with option to edit
   3. Sections are expanded with editing and option to save
7. Download page (pages are the same for both unauth/auth) (edited) 

#### Representative Status Widget

1. If the user is logged in and has an existing representative, surface the status and the representative information
2. Update profile to display selected representative (pending request with link to next steps)

## Post-MVP

1. Future search fields to investigate
    1. Rep name
    1. Organization
    2. Remote support
    3. Representative in a Veteran Service Organization
    4. Expose relationships between VSOs and VSO Representatives (e.g. VSO American Legion 123 has 4 reps)
1. Submission of 21-22/21-22a
    1. Requires signatures
    2. Investigate/address signature errors
    3. Determine if we can support digital submission for attorneys and claim agents who often require fee agreements before accepting
    4. Identify how the insurance field impacts Power of Attorney 
1. Notifications
    1. Representative approved request
    1. Representative rejected request
1. Manage requests (can the vet cancel a request)
1. Manage rep (can the vet cancel an existing rep)
1. Link/integrate with other, related experiences
2. Satisfaction survey to assess the user perceptions of our product experience
